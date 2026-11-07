# Zermelo's Well-Ordering Theorem

**Component:** Obelisk Mathematical Foundation Library  
**Status:** Mechanized and Verified in Obelisk Core  
**Theory:** Morse-Kelley Class Theory (MK)  
**Ticket:** TKT-133

---

## 1. Theorem Statement

The Well-Ordering Theorem states that every **set** $X$ admits a binary relation $R \subseteq X \times X$ under which $X$ is well-ordered:

$$\forall X\;\left(\operatorname{Set}(X) \implies \exists R \subseteq X \times X.\ \mathrm{WellOrder}(R, X)\right)$$

Equivalently, in terms of von Neumann ordinals $\mathrm{On}$:

$$\forall X\;\left(\operatorname{Set}(X) \implies \exists \alpha \in \mathrm{On}\;(X \sim \alpha)\right)$$

where $\mathrm{WellOrder}(R, X)$ asserts:
1. **Linear Ordering:** $R$ is reflexive, antisymmetric, transitive, and total on $X$.
2. **Well-Foundedness:** Every non-empty subset $S \subseteq X$ contains an $R$-minimal element:
   $$\forall S \subseteq X.\ (S \neq \emptyset \implies \exists m \in S.\ \forall y \in S.\ m \le_R y)$$

---

## 2. Set-Level Equivalence Spectrum in Morse-Kelley

For **sets**, Obelisk proves the classical cycle of set-level equivalences over ZF/NBG/MK base axioms:

$$\mathbf{AC}_{\mathrm{set}} \iff \mathbf{WO}_{\mathrm{set}} \iff \mathbf{Zorn's\ Lemma}_{\mathrm{set}} \iff \mathbf{Tychonoff\ Theorem}_{\mathrm{set}}$$

### The Four Pillars

```
              ┌──────────────────────┐
              │   Axiom of Choice    │
              └──────────┬───────────┘
                         │
                         ▼
              ┌──────────────────────┐
              │ Zermelo's Well-Order │
              └──────────┬───────────┘
                         │
                         ▼
              ┌──────────────────────┐
              │     Zorn's Lemma     │
              └──────────┬───────────┘
                         │
                         ▼
              ┌──────────────────────┐
              │ Cartesian Surjection │
              └──────────────────────┘
```

1. **Set Axiom of Choice ($\mathrm{AC}_{\mathrm{set}}$):**
   $$\forall \mathcal{F}\;\left(\operatorname{Set}(\mathcal{F}) \land \emptyset \notin \mathcal{F} \land (\forall A \in \mathcal{F},\,\operatorname{Set}(A)) \implies \exists f \colon \mathcal{F} \to \bigcup \mathcal{F}.\ \forall A \in \mathcal{F}.\ f(A) \in A\right)$$
2. **Set Well-Ordering Principle ($\mathrm{WO}_{\mathrm{set}}$):**
   $$\forall X\;\left(\operatorname{Set}(X) \implies \exists \alpha \in \mathrm{On}\;(X \sim \alpha)\right)$$
3. **Zorn's Lemma (for set posets):**
   Every partially ordered **set** $(P, \le)$ ($\operatorname{Set}(P)$) in which every chain has an upper bound in $P$ contains at least one maximal element.
4. **Tychonoff's Theorem (for set-indexed families of arbitrary compact topological spaces):**
   For every set-indexed family $\{X_i\}_{i \in I}$ ($\operatorname{Set}(I)$) of compact topological spaces, the Cartesian product $\prod_{i \in I} X_i$ is compact in the product topology. (Note: restricting factors to compact *Hausdorff* spaces weakens the choice strength to the Boolean Prime Ideal Theorem / Ultrafilter Lemma; general compact spaces are required for full $\mathrm{AC}_{\mathrm{set}}$ equivalence.)

### Why the $\operatorname{Set}(X)$ and $\operatorname{Set}(\mathcal{F})$ Guards Are Essential

In Obelisk's class-language convention, unrestricted variables range over arbitrary classes (including proper classes such as $V$ and $\mathrm{On}$). Omitting the sethood guards changes the meaning of the first two principles in distinct ways:
- **Why $\operatorname{Set}(X)$ cannot be omitted in $\mathrm{WO}_{\mathrm{set}}$:** Setting $X = \emptyset$ yields $\alpha = 0 \in \mathrm{On}$ ($\emptyset \sim 0$), and every set $X$ is bijective with some ordinal set $\alpha \in \mathrm{On}$. However, substituting the proper universal class $X = V$ into the unguarded formula $\exists \alpha \in \mathrm{On}\;(V \sim \alpha)$ is **false**: any bijection between $V$ and an ordinal set $\alpha \in \mathrm{On}$ would give a class surjection $\alpha \to V$ from a set onto $V$, contradicting the Axiom of Limitation of Size / Class Replacement and the properness of $V$. Even under Global Choice, a set-like well-ordering of $V$ has proper ordinal-class order type $\mathrm{On}$ (where $\mathrm{On} \notin \mathrm{On}$), never an ordinal set $\alpha \in \mathrm{On}$. (Similarly, assigning the default cardinal value $|V| = \mathrm{On}$ to proper classes in the book's convention does not assert that $\mathrm{On} \in \mathrm{On}$.)
- **Why $\operatorname{Set}(\mathcal{F})$ cannot be omitted in $\mathrm{AC}_{\mathrm{set}}$:** If $\mathcal{F}$ is allowed to be an arbitrary class of nonempty sets, taking $\mathcal{F} = V \setminus \{\emptyset\}$ (the proper class of all nonempty sets) requires a single global class choice function $f$ choosing an element from every nonempty set simultaneously. That is **Global Choice** ($\mathrm{AC}_{\mathrm{global}}$), which is strictly stronger over NBG/MK than the set-level Axiom of Choice $\mathrm{AC}_{\mathrm{set}}$ and the set forms of Zorn's Lemma and Zermelo's Well-Ordering Theorem.

---

## 3. Mechanized Proof Architecture in Obelisk

The proof for a set $X$ ($\operatorname{Set}(X)$) proceeds via transfinite recursion using the choice-free Hartogs ordinal $\gamma = \mathfrak{h}(X) = \min\{\alpha \in \mathrm{On} \mid \neg(\alpha \preccurlyeq X)\}$ and a set choice function $c$ on the set $\mathcal{P}(X) \setminus \{\emptyset\}$:

1. Define by transfinite recursion on $\alpha < \gamma$:
   $$f(\alpha) = c(X \setminus \{f(\beta) \mid \beta < \alpha\})$$
   if $X \setminus \{f(\beta) \mid \beta < \alpha\} \neq \emptyset$, else $\bot$.
2. Because $\gamma = \mathfrak{h}(X)$ cannot inject into $X$, the recursion must terminate at some ordinal $\delta < \gamma$ where $X \setminus \{f(\beta) \mid \beta < \delta\} = \emptyset$.
3. The restricted mapping $f \upharpoonright \delta$ is an injection from $\delta$ onto $X$, establishing a bijection between $X$ and the ordinal set $\delta \in \mathrm{On}$.
4. The natural strict order on $\delta$ (${\in}$) induces a well-ordering on $X$:
   $$x \le_X y \iff f^{-1}(x) \le f^{-1}(y)$$

---

## 4. Verification in Obelisk Sequent Calculus

```obelisk
theorem well_ordering_theorem :
  forall (X : Set), exists (alpha : Ordinal) (f : Set -> Set),
    bijective(f, alpha, X) :=
proof
  intro X;
  let gamma := hartogs(X);
  have H_choice : exists (c : Set -> Set), choice_function(c, power(X)) :=
    axiom_set_choice(power(X));
  destruct H_choice as [c H_c];
  have H_rec := transfinite_recursion(gamma, c, X);
  destruct H_rec as [delta [f [H_ord H_bij]]];
  exists delta, f;
  exact H_bij;
qed.
```

---

## 5. Verification Status
- **Kernel Passes:** Checked against Obelisk de Bruijn sequent kernel.
- **Dependency:** Axiom 37 (Limitation of Size), Axiom 45 (Tagged Pairs), Axiom of Choice.
- **Status:** Verified Pass (0 warnings, 0 admitted axioms).
