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

---

## 5. The Propositional Logical Base (A01–A13 + MP) & Classical Completeness

The propositional kernel consists of thirteen axiom schemas (`A01`–`A13`) together with the single primitive inference rule **Modus Ponens** (`RulModusPonens` / `MP`):

$$\frac{\Gamma \vdash \alpha \to \beta \quad \Gamma \vdash \alpha}{\Gamma \vdash \beta}$$

### Classical Propositional Completeness
This logical foundation forms a complete deductive system for classical propositional logic:
1. **Positive Implicational Logic & Deduction Theorem:**
   - `A01` (Weakening: $\alpha \to (\beta \to \alpha)$) and `A02` (Frege Distribution: $(\alpha \to (\beta \to \gamma)) \to ((\alpha \to \beta) \to (\alpha \to \gamma))$) generate positive implicational logic. By Herbrand's Deduction Theorem, $\Gamma, \alpha \vdash \beta$ if and only if $\Gamma \vdash \alpha \to \beta$.
2. **Conjunction and Disjunction:**
   - `A03`–`A05` govern conjunction pairing and left/right projections ($\alpha \land \beta \to \alpha$, $\alpha \land \beta \to \beta$, $\alpha \to (\beta \to \alpha \land \beta)$).
   - `A06`–`A08` govern disjunction left/right injections and case analysis ($(\alpha \to \gamma) \to ((\beta \to \gamma) \to (\alpha \lor \beta \to \gamma))$).
3. **Classical Negation & Falsum:**
   - `A09` (Negation Elimination: $\neg\alpha \to (\alpha \to \bot)$).
   - `A10` (Contraposition / Negation Introduction: $(\alpha \to \neg\beta) \to (\beta \to \neg\alpha)$).
   - `A11` (Principle of Explosion / Ex Falso Quodlibet: $\bot \to \alpha$).
   - `A12` (Law of Excluded Middle: $\alpha \lor \neg\alpha$).
   - `A13` (Verum: $\top$).

### Redundancy & Derivability Analysis
- **Converse of A09 ($(\alpha \to \bot) \to \neg\alpha$):**
  Postulating both directions of negation-falsum equivalence is redundant. The converse direction $(\alpha \to \bot) \to \neg\alpha$ is derivable in the system:
  1. Instantiating `A10` with $\beta := \top$ gives $((\alpha \to \neg\top) \to (\top \to \neg\alpha))$.
  2. With $\bot \equiv \neg\top$ (or chaining through Ex Falso `A11` and `A01`/`A02`), whenever $\Gamma \vdash \alpha \to \bot$, chaining yields $\Gamma \vdash \top \to \neg\alpha$, and applying `MP` with `A13` ($\top$) derives $\Gamma \vdash \neg\alpha$.
- **Double Negation Elimination ($\neg\neg\alpha \to \alpha$):**
  Follows immediately from Excluded Middle `A12` ($\alpha \lor \neg\alpha$) and disjunction elimination `A08`, where $\alpha \to \alpha$ is identity (derived from `A01` and `A02`) and $\neg\alpha \to (\neg\neg\alpha \to \alpha)$ follows from `A09` and Ex Falso `A11`.

---

## 6. Side-Condition Vocabulary & Variable Sorts

The metatheory evaluates explicit side conditions at Metalevel 1 before admitting kernel derivations:

1. **`FFI(t, x, φ)` — Free For Installation (Substitution Safety):**
   - *Formal Meaning:* The term $t$ is *free for substitution* into variable $x$ in formula $\varphi$.
   - *Condition:* No free variable occurring in $t$ becomes captured by any quantifier or binder ($\forall, \exists, \{ \cdot \mid \cdot \}, \lambda$) whose scope encloses an occurrence of $x$ in $\varphi$.
   - *Used In:* Universal Instantiation (`RulForallInstantiation` 2.02) and Existential Introduction (`RulExistsInstantiation` 2.03).
2. **`NFV(x, φ)` — Not a Free Variable ($x \notin \operatorname{FV}(\varphi)$):**
   - *Formal Meaning:* Variable identifier $x$ does not occur free in formula or expression $\varphi$.
   - *Condition:* $\forall v \in \operatorname{FV}(\varphi), v \neq x$.
   - *Used In:* Universal Abstraction (`RulForallAbstraction` 2.04: $B \to A \vdash B \to \forall x. A$ requires $\operatorname{NFV}(x, B)$) and Existential Elimination (`RulExistsAbstraction` 2.05: $A \to B \vdash (\exists x. A) \to B$ requires $\operatorname{NFV}(x, B)$).
3. **`LCEWIP` — Large Conglomerate Expression With Incomplete Parameters:**
   - *Formal Meaning:* The top-level conglomerate sort in `typetheory.ML`.
   - *Role:* In Morse-Kelley class theory, collections of proper classes cannot be classes themselves without paradox; they are classified as conglomerates. `LCEWIP` is the syntactic AST constructor reserving space for universe hierarchies, reflected metatheory judgements, and parameterized conglomerate signatures.
4. **`Name` vs `Variable`:**
   - **`Name`:** A pure syntactic token / string identifier (`Name of string`, e.g. `"x"`, `"y"`, `"A"`). Names are un-typed and carry no semantics on their own.
   - **`Variable`:** A typed object-language syntactic variable (`TyVariable_id of Name * Type`, e.g. `(Name "x", TClass)`). A `Variable` pairs an identifier with its sort constraint, enabling deterministic sort-checking in binders and substitution passes.

---

## 7. Class-Theoretic Hierarchy: Set vs Proper Class vs Nonstored Class Expression (`Class_Expre`)

To prevent fundamental category errors and level confusion, class-theoretic entities must be strictly decoupled across model semantics and metalanguage implementation:

| Level | Entity | Definition | Sethood Status | Inhabitants and Examples | Metalanguage Representation |
|---|---|---|---|---|---|
| **Semantic Object** | **Set** | A class $x$ that belongs to at least one class: $\operatorname{isSet}(x) \equiv \exists Y, x \in Y$. In Morse-Kelley / NBG, sets are elements of the universe $V$. | True ($\operatorname{isSet}(x)$) | $\emptyset$, $\{\emptyset\}$, $\omega$, $\mathbb{R}$, any member of a Grothendieck universe. | Not stored as an SML value; represented as term expression `t : Class_Expre`. |
| **Semantic Object** | **Proper Class** | A class $X$ that does not belong to any class: $\neg\operatorname{isSet}(X) \equiv \forall Y, X \notin Y$. In von Neumann limitation of size, $X$ bijects with universe $V$. | False ($\neg\operatorname{isSet}(X)$) | Universal class $V = \{x \mid x = x\}$, Ordinal class $\mathrm{On}$, Russell class $\{x \mid x \notin x\}$. | Not stored as an SML value; represented as term expression `t : Class_Expre`. |
| **Metalanguage AST** | **Class Expression (`Class_Expre`)** | Syntactic abstract syntax tree (AST) expression representing a class term in CakeML / PolyML memory. | N/A (syntactic expression) | Constructors: `CpEmptySet`, `CpSingleton`, `CpBinUnion`, `CpKappa`, etc. | Concrete Standard ML datatype `Class_Expre` (in `typetheory.ML`). |

### The Off-by-One Level Rule
In `typetheory.ML`:
- Semantic classes cannot be stored in finite machine memory; `type Class = Nonstored.t` is an uninhabited / nonstored type.
- What Standard ML actually manipulates and stores are **syntactic expressions** of classes: `Class_Expre`.
- Confusing a semantic class with its syntactic representation (`Class_Expre`) is an Off-by-One category error.
- Semantic objects (`Class`, `Bool`, `Type`) cannot be free or bound. Only variables (such as `TyVariable_id(v, TClass)`) occurring inside syntactic expressions possess free or bound occurrences.

---

## 8. Pairing Disambiguation: Kuratowski Pair vs Dunaev Tagged Ordered Pair

| Property | Kuratowski Ordered Pair | Dunaev Tagged Ordered Pair |
|---|---|---|
| **Formal Definition** | $\langle a, b \rangle_K \equiv \{\{a\}, \{a, b\}\}$ | $(A, B)_D \equiv \operatorname{mark}(A, 1) \cup \operatorname{mark}(B, 2) = (\{1\} \times A) \cup (\{2\} \times B)$ |
| **Tags Used** | None (set-theoretic pairing) | Disjoint singleton tags $1 = \{\emptyset\}$ and $2 = \{\emptyset, \{\emptyset\}\}$ |
| **Domain of Validity** | **Sets only**: $a, b \in V$ | **Universal**: Sound for all classes (sets and proper classes alike) |
| **Proper Class Failure** | If $A$ is a proper class (e.g. $V$ or $\mathrm{On}$), forming $\{\{A\}\}$ requires $A \in \{A\}$, violating the sethood axiom $X \in Y \implies \operatorname{isSet}(X)$ | Never fails. Cartesian products with singleton tags $\{1\} \times A$ and $\{2\} \times B$ are well-defined subclasses of $V \times V$ |
| **Kernel Representation** | Not used for general class pairing in Obelisk | Catalog entry 3.76 `DefDunaevOrderedPair` in `foundations.ML` |
| **Projections** | $\pi_1(\langle a, b \rangle_K) = a$, $\pi_2(\langle a, b \rangle_K) = b$ (for sets) | $\pi_1((A, B)_D) = A$, $\pi_2((A, B)_D) = B$ (catalog entries 3.77 and 3.78) |

---

## 9. Variable-Binding Operators and Descriptors

The overarching term **binder** (or **variable-binding operator**) encompasses quantifiers, class comprehension, and descriptors. Binders introduce variable scopes and establish bound variable occurrences.

| Binder Symbol | Binder Name | Syntactic Sort | Semantic Function | Uniqueness / Existence Precondition |
|---|---|---|---|---|
| $\forall$ | Universal Quantifier | Variable -> Formula -> Formula | $\forall x.\, \varphi(x)$: True if $\varphi(x)$ holds for all elements of the sort | None |
| $\exists$ | Existential Quantifier | Variable -> Formula -> Formula | $\exists x.\, \varphi(x)$: True if $\varphi(x)$ holds for at least one element | None |
| $\exists!$ / $!$ | Unique Existential | Variable -> Formula -> Formula | $\exists! x.\, \varphi(x) \equiv \exists x (\varphi(x) \land \forall y (\varphi(y) \implies y = x))$ | None |
| $\kappa$ | Class Comprehension | Variable -> Formula -> Class.Expression | $\kappa x.\, \varphi(x) \equiv \{x \mid \varphi(x)\}$: Forms the class of all sets satisfying $\varphi$ | None; always forms a valid class |
| $\tau$ ($\tau^{\mathrm{Un}}$) | Indefinite Choice Descriptor | Variable -> Formula -> Class.Expression | Hilbert's $\tau$-operator: Selects an arbitrary witness satisfying $\varphi(x)$ if $\exists x.\, \varphi(x)$ holds; otherwise evaluates to an unspecified default element | Requires non-emptiness for witness guarantee; otherwise default |
| $\varepsilon$ ($\tau^{\emptyset}$) | Unique Choice Descriptor | Variable -> Formula -> Class.Expression | Selects a witness when unique; if no witness exists, evaluates to the empty set witness $\emptyset$ | Evaluates to $\emptyset$ when no witness satisfies $\varphi$ |
| $\iota$ | Definite Description Descriptor | Variable -> Formula -> Class.Expression | Russell / Peano $\iota$-operator: "The unique $x$ such that $\varphi(x)$". When $\exists! x.\, \varphi(x)$ holds, denotes that unique element; otherwise evaluates to canonical failure $\emptyset$ | Strict uniqueness: requires $\exists! x.\, \varphi(x)$ |

---

## 10. Elementary Metatheory E vs Object Theories (MKTD1 and MKTD2)

Deductive verification requires clean separation between the background metatheory and the formalized object theories:

| Dimension | Elementary Metatheory $\mathcal{E}$ | Object Theory 1: `MKTD1-theory` | Object Theory 2: `MKTD2-theory` |
|---|---|---|---|
| **Architectural Role** | Background computational / proof-theoretic environment | Axiomatic classical sequent calculus object theory (`MKTD1-framework` / `MKTD1-system`) | Constructive dependent type theory / formulas-as-types object theory (`MKTD2-framework` / `MKTD2-system`) |
| **Formal Systems** | $\mathcal{E} \in \{\mathrm{I}\Sigma_1, \mathrm{PA}, \mathcal{T}, \mathrm{NBG}, \mathrm{MK}\}$ | Morse-Kelley + Tarski + Dunaev (Classical Sequent Calculus) | Morse-Kelley + Tarski + Dunaev (Dependent Type Calculus) |
| **Stratification** | Metalevel 1 computation (AST algorithms, substitution, side conditions) | Stratified sorts: `Class.Expression`, `Truth.Expression` (`Fm`), `Stmt.Expression` | Propositions as types (`Prop`), proofs as constructive $\lambda$-terms |
| **Side Conditions** | Computable boolean predicates in SML: `FFI`, `NFV`, `Variable.eq` | Checked as side-condition premises before admitting sequent derivations | Inhabited by proof terms or type synthesis judgments |
| **Deductive Rules** | Primitive metalanguage inference and structural induction over syntax | Propositional base `A01`-`A13`, Modus Ponens, Universal Instantiation/Abstraction | Function spaces, dependent products $\Pi(x:A), B(x)$, dependent sums $\Sigma(x:A), B(x)$ |
