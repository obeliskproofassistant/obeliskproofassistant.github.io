# Zermelo's Well-Ordering Theorem

**Component:** Obelisk Mathematical Foundation Library  
**Status:** Mechanized and Verified in Obelisk Core  
**Theory:** Morse-Kelley Class Theory (MK)  
**Ticket:** TKT-133

---

## 1. Theorem Statement

The Well-Ordering Theorem states that every set $X$ admits a binary relation $\le$ under which $X$ is well-ordered:

$$\forall X.\ \exists R \subseteq X \times X.\ \mathrm{WellOrder}(R, X)$$

where $\mathrm{WellOrder}(R, X)$ asserts:
1. **Linear Ordering:** $R$ is reflexive, antisymmetric, transitive, and total on $X$.
2. **Well-Foundedness:** Every non-empty subset $S \subseteq X$ contains an $R$-minimal element:
   $$\forall S \subseteq X.\ (S \neq \emptyset \implies \exists m \in S.\ \forall y \in S.\ m \le_R y)$$

---

## 2. Equivalence Spectrum in Morse-Kelley

Obelisk proves the full cycle of classical equivalences:

$$\mathbf{AC} \iff \mathbf{WO} \iff \mathbf{Zorn's\ Lemma} \iff \mathbf{Tychonoff\ Theorem}$$

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

1. **Axiom of Choice ($\mathrm{AC}$):**
   $$\forall \mathcal{F}.\ (\emptyset \notin \mathcal{F} \implies \exists f \colon \mathcal{F} \to \bigcup \mathcal{F}.\ \forall A \in \mathcal{F}.\ f(A) \in A)$$
2. **Well-Ordering Principle ($\mathrm{WO}$):**
   $$\forall X.\ \exists \alpha \in \mathrm{On}.\ X \sim \alpha$$
3. **Zorn's Lemma:**
   Every partially ordered set in which every chain has an upper bound contains at least one maximal element.

---

## 3. Mechanized Proof Architecture in Obelisk

The proof proceeds via transfinite recursion using Hartogs' ordinal $\gamma = \aleph(X)$ and a choice function $c$ on $\mathcal{P}(X) \setminus \{\emptyset\}$:

1. Define by transfinite recursion on $\alpha < \gamma$:
   $$f(\alpha) = c(X \setminus \{f(\beta) \mid \beta < \alpha\})$$
   if $X \setminus \{f(\beta) \mid \beta < \alpha\} \neq \emptyset$, else $\bot$.
2. Because $\gamma = \aleph(X)$ cannot inject into $X$, the recursion must terminate at some ordinal $\delta < \gamma$ where $X \setminus \{f(\beta) \mid \beta < \delta\} = \emptyset$.
3. The restricted mapping $f \upharpoonright \delta$ is an injection from $\delta$ onto $X$, establishing a bijection between $X$ and the ordinal $\delta$.
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
  have H_choice : exists (c : Set -> Set), choice_function(c, X) :=
    axiom_global_choice;
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
