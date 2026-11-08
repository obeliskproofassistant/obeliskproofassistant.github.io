# Glossary of Class-Theoretic Terminology & Notation Disambiguation

This document provides definitive formal definitions for key class-theoretic structures, contexts, and overloaded notations used throughout the Obelisk Proof Assistant (`MKTD1` and `MKTD2`).

---

## 1. Dunaev Tagged Ordered Pairs

- **Notation:** $(A, B)_D \equiv \operatorname{mark}(A, 1) \cup \operatorname{mark}(B, 2) = (\{1\} \times A) \cup (\{2\} \times B)$
- **Source Reference:** Georgy Dunaev, *"Morse-Kelley Class Theory with Tagged Ordered Pairs and Tarski-Grothendieck Universes"*, `set_theory_prover/program/types/foundations.ML` (catalog entries 3.76 `DefDunaevOrderedPair`, 3.77 `ThmDunaevFirstProjection`, 3.78 `ThmDunaevSecondProjection`).
- **Mathematical Rationale:**
  In classical Morse-Kelley class theory (MK), classes cannot belong to sets or classes ($X \notin Y$ for proper classes $X$). Standard Kuratowski pairs:
  $$\langle a, b \rangle_K \equiv \{\{a\}, \{a, b\}\}$$
  fail whenever $a$ or $b$ is a proper class (e.g. the universal class $V$ or the class of all ordinals $\mathrm{On}$), because forming $\{\{V\}\}$ would require $V \in \{V\}$, violating the sethood axiom. Dunaev tagged ordered pairing avoids this limitation by employing disjoint tagging via Cartesian products with singleton tags $\{1\}$ and $\{2\}$.
- **Fundamental Invariants:**
  1. **First Projection:** $\pi_1((A, B)_D) = A$ (`ThmDunaevFirstProjection`)
  2. **Second Projection:** $\pi_2((A, B)_D) = B$ (`ThmDunaevSecondProjection`)
  3. **Pair Injectivity:** $(A, B)_D = (C, D)_D \iff A = C \land B = D$ (`proofDunaevPairInjectivity`)
  4. **Universal Soundness:** Sound for arbitrary classes (sets and proper classes alike).

---

## 2. Dunaev Class-Lists

- **Notation:** $[]$ (empty class-list), $[X_1, \ldots, X_n]$ (finite sequence of classes).
- **Source Reference:** Georgy Dunaev, `set_theory_prover/program/types/foundations.ML` (catalog entry 3.39: `DefClassLists`).
- **Definition:** Inductively defined via iterated Dunaev tagged pairing with the empty class-list witness:
  $$[] \equiv \emptyset, \quad [X_1] \equiv (X_1, [])_D, \quad [X_1, X_2, \ldots, X_n] \equiv (X_1, [X_2, \ldots, X_n])_D$$
- **Purpose:** Represents finite sequences of proper classes, multi-argument function domains, sequent calculus hypothesis contexts $\Gamma$, and explicit substitution environments without requiring higher-universe conglomerates.

---

## 3. Context Environments: Signature $\Delta$ vs Proof Hypotheses $\Gamma$

In kernel typing and inhabitation judgements $\Delta; \Gamma \vdash e : T$:

- **Variable Signature Environment $\Delta$:**
  Tracks declared object-language variable identifiers and their sorts.
  - *Example:* $\Delta = \{ z : \mathrm{Class}, A : \mathrm{Type}, F : \mathrm{Class} \}$.
  - *Introduction Rule:* Introduced by universal/parametric binders, e.g. `ELam`:
    $$\frac{\Delta, z : \mathrm{Class}; \Gamma \vdash e : T}{\Delta; \Gamma \vdash \mathrm{Lam}\,(z:\mathrm{Class}) \Rightarrow e : \forall(z:\mathrm{Class}), T}$$
- **Proof Hypothesis Environment $\Gamma$:**
  Tracks assumed antecedent propositions / hypotheses available for logical deduction.
  - *Example:* $\Gamma = \{ h_{\mathrm{In}} : z \in \{x \mid \bot\}, h_{\mathrm{Sub}} : A \subseteq B \}$.
  - *Introduction Rule:* Introduced by implication binders, e.g. `EFn`:
    $$\frac{\Delta; \Gamma, h : P \vdash e : Q}{\Delta; \Gamma \vdash \mathrm{fn}\,(h:P) \Rightarrow e : P \to Q}$$

---

## 4. Disambiguation of Overloaded Delimiters and Symbols

| Glyph | Role 1 | Role 2 | Role 3 | Disambiguation Criterion |
|---|---|---|---|---|
| `⟦ ... ⟧` (U+27E6 / U+27E7) | Antiquotation term bracket (`EAnti` / `EEval`) in explicit substitution | External model evaluation $\llbracket \phi \rrbracket_{\mathcal{M}}$ | - | Antiquotation `⟦ e ⟧` is an internal AST expression constructor embedding a term back into a formula; semantic evaluation $\llbracket \phi \rrbracket_{\mathcal{M}}$ takes a model subscript and variable valuation. |
| `[ ... ]` (U+005B / U+005D) | Relational image $f[A] \equiv \{y \mid \exists x \in A, \langle x, y \rangle \in f\}$ | Dunaev class-list $[X_1, \ldots, X_n]$ | Premise judgement list $[J_1, \ldots, J_k] \vdash \phi$ | $f[A]$ follows a relation symbol $f$; class-lists contain comma-separated class expressions; premise lists contain sequent judgements. |
| `⟨ ... ⟩` (U+27E8 / U+27E9) | Object ordered pair $\langle a, b \rangle$ | Syntactic formula quotation $\langle \phi \rangle$ / `‹φ›` (`HQuote`) | - | $\langle a, b \rangle$ encloses 2 comma-separated terms; $\langle \phi \rangle$ encloses a single formula. |
| `Set(X)` vs `isSet(X)` | ASCII concrete syntax keyword in `.nbg` | Unicode/LaTeX predicate $\operatorname{isSet}(X) \equiv \exists Y, X \in Y$ | Sort `Set` | `Set(X)` is the surface parser keyword; $\operatorname{isSet}(X)$ is the object-language sethood predicate of sort $\mathrm{Class} \to \mathrm{Prop}$, avoiding confusion with the sub-sort `Set`. |
