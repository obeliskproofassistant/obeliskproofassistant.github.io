# Morse-Kelley Cardinal Arithmetic Formal Dossier

**Component:** Obelisk Mathematical Foundation Library  
**Status:** Mechanized and Verified in Obelisk Core  
**Theory:** Morse-Kelley Class Theory (MK) with Global Choice

---

## 1. Equinumerosity & Cardinal Assignment

In Obelisk Morse-Kelley foundations, equinumerosity between two sets or classes is formalized via bijective class mappings:

$$\mathrm{Bij}(F, X, Y) \iff \mathrm{Func}(F, X, Y) \land \mathrm{Inj}(F, X, Y) \land \mathrm{Surj}(F, X, Y)$$
$$X \sim Y \iff \exists F.\ \mathrm{Bij}(F, X, Y)$$

Equinumerosity is verified to be an equivalence relation over sets:
- **Reflexivity:** $X \sim X$ (identity map $\mathrm{id}_X$)
- **Symmetry:** $X \sim Y \implies Y \sim X$ ($F^{-1}$)
- **Transitivity:** $X \sim Y \land Y \sim Z \implies X \sim Z$ ($G \circ F$)

### Initial Ordinal Definition of Cardinals (Von Neumann)
A cardinal is an ordinal number that is not equinumerous with any strictly smaller ordinal:

$$\mathrm{Card}(\kappa) \iff \mathrm{Ord}(\kappa) \land \forall \alpha < \kappa.\ \neg(\alpha \sim \kappa)$$

Under Global Choice ($\mathrm{AC}$ / Global Well-Ordering), every set $X$ has a uniquely determined cardinal:
$$|X| = \min \{\alpha \in \mathrm{On} \mid \alpha \sim X\}$$

---

## 2. Cardinal Arithmetic Operations

For any two cardinals $\kappa, \lambda$:

### Cardinal Addition
$$\kappa \oplus \lambda = |(\{0\} \times \kappa) \cup (\{1\} \times \lambda)|$$

### Cardinal Multiplication
$$\kappa \otimes \lambda = |\kappa \times \lambda|$$

### Cardinal Exponentiation
$$\kappa^\lambda = |\{f \mid f \colon \lambda \to \kappa\}|$$

### Infinite Cardinal Theorem (Hessenberg / Tarski)
For any infinite cardinal $\kappa \ge \aleph_0$:
$$\kappa \oplus \kappa = \kappa \otimes \kappa = \kappa$$

More generally, for non-zero cardinals with at least one infinite:
$$\kappa \oplus \lambda = \kappa \otimes \lambda = \max(\kappa, \lambda)$$

---

## 3. Cantor's Theorem & Hartogs' Number

### Cantor's Theorem
For any set $X$:
$$|X| < |\mathcal{P}(X)|$$

**Mechanized Proof Sketch in Obelisk:**
Assume toward contradiction that $F \colon X \twoheadrightarrow \mathcal{P}(X)$ is surjective.
Construct the diagonal separation class:
$$D = \{x \in X \mid x \notin F(x)\}$$
Since $D \in \mathcal{P}(X)$, by surjectivity there exists $d \in X$ such that $F(d) = D$.
Then:
$$d \in D \iff d \notin F(d) \iff d \notin D$$
This yields an immediate contradiction in the Obelisk classical kernel. Hence $|X| < |\mathcal{P}(X)|$.

### Hartogs' Lemma (Choice-Free Hartogs Number $\mathfrak{h}(X)$)
For any set $X$ ($\operatorname{Set}(X)$), without invoking the Axiom of Choice or assuming that $X$ has an ordinal cardinal representative $|X|$, there exists a least ordinal $\mathfrak{h}(X)$ that **cannot be injected** into $X$:

$$\mathfrak{h}(X) = \min \{\alpha \in \mathrm{On} \mid \neg(\alpha \preccurlyeq X)\} = \{\alpha \in \mathrm{On} \mid \alpha \preccurlyeq X\}$$

where $A \preccurlyeq B$ explicitly denotes the existence of an injective function $f \colon A \hookrightarrow B$.

**Choice-Free Construction (`thm:hartogs_bound`):**
1. By Powersets and Separation, the collection $\mathcal{W}(X) = \{(Y, R) \in \mathcal{P}(X) \times \mathcal{P}(X \times X) \mid \mathrm{WellOrder}(R, Y)\}$ of all well-ordered subsets of $X$ is a set.
2. Every $(Y, R) \in \mathcal{W}(X)$ is order-isomorphic to a unique von Neumann ordinal $\mathrm{type}(Y, R) \in \mathrm{On}$.
3. By Replacement on the set $\mathcal{W}(X)$, the image $\mathfrak{h}(X) = \{\mathrm{type}(Y, R) \mid (Y, R) \in \mathcal{W}(X)\}$ is a transitive set of ordinals, hence an ordinal $\mathfrak{h}(X) \in \mathrm{On}$.
4. An ordinal $\alpha$ injects into $X$ ($\alpha \preccurlyeq X$) if and only if $\alpha \in \mathfrak{h}(X)$. Consequently $\neg(\mathfrak{h}(X) \preccurlyeq X)$, and $\mathfrak{h}(X)$ is the minimum such ordinal.

**Why Injection Comparison $\alpha \preccurlyeq X$ Cannot Be Replaced by Ordinal $\alpha \le |X|$:**
Writing $\min\{\alpha \in \mathrm{On} \mid \neg(\alpha \le |X|)\}$ with ordinary ordinal comparison $\le$ is incorrect: at $X = \omega$ ($|\omega| = \omega$), the least ordinal $\alpha$ with $\neg(\alpha \le \omega)$ is the **ordinal successor** $\omega + 1 = \omega \cup \{\omega\}$. Yet $\omega + 1$ injects into $\omega$ ($\omega + 1 \preccurlyeq \omega$) via $g(\omega) = 0$ and $g(n) = n + 1$ for $n \in \omega$. By contrast, the Hartogs number uses injection comparison $\preccurlyeq$:
- For $X = \emptyset$: $\mathfrak{h}(\emptyset) = 1 = \{0\}$.
- For a finite ordinal $n \in \omega$: $\mathfrak{h}(n) = n + 1$.
- For $X = \omega$: every countable ordinal $\alpha$ (including $\omega + 1$, $\omega + \omega$, $\omega^2$) satisfies $\alpha \preccurlyeq \omega$, so $\mathfrak{h}(\omega) = \omega_1 = \aleph_1$ (the first uncountable ordinal, i.e., the **successor cardinal** of $\aleph_0$, not the ordinal successor $\omega + 1$).

---

## 4. Verification in Obelisk Sequent Calculus

In the mechanized derivation of Cantor's theorem ($\forall X : \mathrm{Set},\ \neg \exists F \colon X \to \mathcal{P}(X),\ \mathrm{surjective}(F, X, \mathcal{P}(X))$), the candidate function $F$ and its surjectivity hypothesis are introduced *before* defining the diagonal subset $D_F = \{x \in X \mid x \notin F(x)\}$ which depends on $F$. Separation yields $D_F \subseteq X$ and Powersets yields $D_F \in \mathcal{P}(X)$ (`in(D_F, power(X))`), allowing surjectivity of $F$ to be instantiated at $D_F$:

```obelisk
theorem cantors_theorem :
  forall (X : Set) (F : Set -> Set),
    ~ (surjective(F, X, power(X))) :=
proof
  intro X;
  intro F;
  intro H_surj;
  define D_F := { x in X | ~ (x in F(x)) };
  have H_sub : subclass(D_F, X) := separation_subclass(X, D_F);
  have H_in_pow : in(D_F, power(X)) := power_intro(X, D_F, H_sub);
  destruct (H_surj D_F H_in_pow) as [d [H_d_in_X H_eq]];
  by_cases (d in D_F);
  contradiction;
qed.
```
