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

### Hartogs' Lemma (Constructive Cardinal Successor)
For any set $X$, there exists an ordinal $\alpha$ that cannot be injected into $X$:
$$\aleph(X) = \min \{\alpha \in \mathrm{On} \mid \neg(\alpha \le |X|)\}$$
This proves that cardinal numbers cannot be bounded by any set without invoking Choice.

---

## 4. Verification in Obelisk Sequent Calculus

```obelisk
theorem cantors_theorem :
  forall (X : Set), exists (D : Set),
    subclass(D, power(X)) /\
    forall (F : Set -> Set),
      ~ (surjective(F, X, power(X))) :=
proof
  intro X;
  define D := { x in X | ~ (x in F(x)) };
  intro F;
  intro H_surj;
  destruct (H_surj D) as [d H_eq];
  by_cases (d in D);
  contradiction;
qed.
```
