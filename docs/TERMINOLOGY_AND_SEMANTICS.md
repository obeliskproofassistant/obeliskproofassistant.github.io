# Obelisk Proof Assistant — Canonical Terminology & Semantic Setting

This document records the authoritative semantic conventions and disambiguated terminology used across `set_theory_prover`, `obeliskproofassistant.github.io`, and `foundations`. Whenever an expression or prose description could be ambiguous, the verbose, explicit terminology below must be used.

---

## 1. Bound (Bounded) Quantifiers vs. Quantifier-Bound Variables

### 1.1 Bound (Bounded) Quantifiers
In Obelisk, **bound quantifiers** (also called **bounded quantifiers**) are syntactic short forms for membership-restricted quantifiers whose bound variable implicitly has the default type `Class`:

$$\forall (x \in Y),\ \varphi(x) \quad :\equiv \quad \forall (x:\mathsf{Class}),\ (x \in Y) \rightarrow \varphi(x)$$

$$\exists (x \in Y),\ \varphi(x) \quad :\equiv \quad \exists (x:\mathsf{Class}),\ (x \in Y) \land \varphi(x)$$

- **SML Kernel Constructors (`program/newchecker.ML`)**:
  - `Fora_in (v, Y) phi` expands to `Fora (TyVariable_id (v, TClass)) (Impl (In (EVar v) Y) phi)`
  - `Exis_in (v, Y) phi` expands to `Exis (TyVariable_id (v, TClass)) (And (In (EVar v) Y) phi)`
- **HOL Definitional Store (`program/hol_definitions.ML`)**:
  - `HOLDefinitions.mk_bounded_forall (x, Y, phi)` expands to `PFForall (x, PFImp (PFIn (PVar x, Y), phi))`
  - `HOLDefinitions.mk_bounded_exists (x, Y, phi)` expands to `PFExists (x, PFAnd (PFIn (PVar x, Y), phi))`

### 1.2 Disambiguation Rule
- **Never** use the phrase *"bound quantifiers"* to mean *"variables bound by a quantifier"* or *"quantifier binders"*.
- Use:
  - **bound quantifier** (or **bounded quantifier**) exclusively for $\forall (x \in Y),\ \varphi(x)$ and $\exists (x \in Y),\ \varphi(x)$.
  - **typed quantifier** for $\forall (x:T),\ \varphi(x)$ and $\exists (x:T),\ \varphi(x)$ (where `:` is the typing judgment, never $\in$).
  - **quantified variable** or **quantifier-bound variable** for the variable $x$ bound by a quantifier (e.g., when stating NBG predicativity or capture-avoiding substitution `FFI`).

---

## 2. `Class` is the Default Type

`Class` (`OpClass` / `TClass` in `program/types/typetheory.ML`) is the **default type** in Obelisk. It is implicitly supplied whenever a binder omits an explicit type annotation:

1. **Untyped Universal and Existential Quantifiers**:
   $$\forall x,\ \varphi(x) \quad :\equiv \quad \forall (x:\mathsf{Class}),\ \varphi(x)$$
   $$\exists x,\ \varphi(x) \quad :\equiv \quad \exists (x:\mathsf{Class}),\ \varphi(x)$$
   (Implemented as `Fora_default` and `Exis_default` in `program/newchecker.ML` and `HOLDefinitions.mk_default_forall` / `mk_default_exists` in `program/hol_definitions.ML`.)
2. **Bound (Bounded) Quantifiers**:
   $$\forall (x \in Y),\ \varphi(x) \quad :\equiv \quad \forall (x:\mathsf{Class}),\ (x \in Y) \rightarrow \varphi(x)$$
   $$\exists (x \in Y),\ \varphi(x) \quad :\equiv \quad \exists (x:\mathsf{Class}),\ (x \in Y) \land \varphi(x)$$
3. **Class Comprehension & Descriptors**:
   $$\{x \mid \varphi(x)\} \quad :\equiv \quad \{x:\mathsf{Class} \mid \varphi(x)\}$$

---

## 3. Advanced Semantic Setting: Terms as Classes, Conglomerates (= Predicates on Classes) as Types

Obelisk does **not** use the "standard" set-theoretic type-theory setting (where terms are interpreted as sets and classes are interpreted as types). Instead, Obelisk operates in a one-level-higher **advanced semantic setting**:

| Syntactic Category | Semantic Interpretation in Obelisk | Kernel Representation (`typetheory.ML` / `CONTENT.ML`) |
|---|---|---|
| **Object Terms** (`t`) | **Classes** (either sets $x \in \mathbf{V}$ or proper classes such as $\mathbf{V}$, $\mathbf{On}$) | `Class.Expression` (`CpEmptySet`, `CpSets`, `CpOn`, `CpOmega`, `CpKappa`, ...) |
| **Types** (`T` in `(t:T)`) | **Conglomerates** $\equiv$ **Predicates on the conglomerate of all classes** ($\mathsf{Class} \to \mathsf{Bool}$) | `Huge_Col` / `LPredicate` (`LTpDef of 'Class_Truth_FUNEX`, `LTpEmb of 'Huge_Col_EXPRESSION`) |
| **Default Type `Class`** | Constant-true predicate on classes $\lambda (C:\mathsf{Class}).\ \top$ (the universal conglomerate of all classes) | `OpClass` / `TClass` |
| **Set Type `Set`** | Sethood predicate on classes $\lambda (C:\mathsf{Class}).\ (C\ \mathsf{set}) \equiv \lambda (C:\mathsf{Class}).\ \exists (Q:\mathsf{Class}),\ (C \in Q)$ | `OpSet` / `TSet` |

### Why "Conglomerate" and "Predicate on Classes" Are Used Interchangeably
In our meta-framework, a **sub-conglomerate** $\mathcal{C}$ of the conglomerate of all classes and its characteristic **predicate on classes** $P_{\mathcal{C}} : \mathsf{Class} \to \mathsf{Bool}$ (a "conglomerate-function" from the conglomerate of all classes to $\mathsf{Bool}$) are in canonical 1-to-1 correspondence:
$$X \text{ belongs to conglomerate } \mathcal{C} \quad \Longleftrightarrow \quad P_{\mathcal{C}}(X) = \top.$$
In `program/types/typetheory.ML` (lines 813–842), this exact isomorphism is reflected in `LPredicate_p`:
- `LTpDef of 'Class_Truth_FUNEX` represents a type directly as a syntactic predicate $\lambda (C:\mathsf{Class}).\ \varphi(C)$ (`Class -> Truth`), and
- `LTpEmb of 'Huge_Col_EXPRESSION` embeds a named conglomerate (`OpClass`, `OpSet`, `OpFamily`, ...) as a predicate on classes.

Therefore, using **"conglomerate"** and **"predicate on classes"** interchangeably for the semantic interpretation of a type is mathematically rigorous and unambiguous.

---

## 4. $\omega$ and Successor-Inductive (Peano-Inductive) Classes

### 4.1 Disambiguating "Inductive" in Class Theory
Several distinct induction principles exist in set and class theory:
1. **Successor-Induction (Peano Induction / $0$-$\sigma$-Induction / Countable Mathematical Induction)**:
   Closure under $0 = \emptyset$ and ordinal successor $\sigma(a) = a \cup \{a\}$.
2. **Transfinite $\in$-Induction on a Well-Founded Transitive Class** (Catalog Entry **3.70**):
   $$(\mathrm{Tr}(K) \land (\mathrm{E\ Fr\ }K)) \rightarrow (((K \cap \mathcal{P}A) \subseteq A) \rightarrow (K \subseteq A))$$
3. **Powerclass / Subset $\mathcal{P}$-Induction** (defining the class $\mathbf{W}$ of well-founded sets in `foundations/120_induction_recursion.tex`):
   $$\forall (Q:\mathsf{Class}),\ (\mathcal{P}Q \subseteq Q) \rightarrow (\mathbf{W} \subseteq Q)$$

In Catalog Entry **3.55** ($\mathrm{Ind}(X)$), the word *"inductive"* is used in the **smallest, narrowest possible sense** — namely **successor-inductive** (or **Peano-inductive** / **$0$-successor-closed**):
$$\mathrm{Ind}(X) \iff (\emptyset \in X) \land \left(\forall (a:\mathsf{Class}),\ (a \in X) \rightarrow ((a \cup \{a\}) \in X)\right).$$

### 4.2 $\omega$ as the $\subseteq$-Minimal Successor-Inductive Class (and Smallest Successor-Inductive Ordinal)
In Catalog Entry **3.56**, $\omega$ is defined as the intersection of all successor-inductive classes:
$$\forall (x:\mathsf{Class}),\ (x \in \omega) \iff \left(\forall (Q:\mathsf{Class}),\ \mathrm{Ind}(Q) \rightarrow (x \in Q)\right).$$
Together with Catalog Entry **3.59** ($\vdash \mathrm{Ind}(\omega)$), this definition immediately establishes two fundamental characterizations of $\omega$:
1. **$\subseteq$-Minimal (Least) Successor-Inductive Class**:
   $\omega$ is the **minimal (least) element among all successor-inductive (Peano-inductive) classes in the subclass ($\subseteq$) order**:
   $$\mathrm{Ind}(\omega) \land \forall (Q:\mathsf{Class}),\ \mathrm{Ind}(Q) \rightarrow (\omega \subseteq Q).$$
   This universal property is the direct class-theoretic statement of **simple countable mathematical (Peano) induction up to $\omega$**: any class $Q$ (i.e., any property of sets) that contains $\emptyset$ and is closed under $a \mapsto a \cup \{a\}$ contains all of $\omega$ ($\omega \subseteq Q$).
2. **Smallest Successor-Inductive Ordinal**:
   Combined with the Axiom of Infinity **3.57** ($\omega\ \mathsf{set}$), $\mathrm{Tr}(\omega)$ (**3.61**), and $\mathrm{Ord}(\omega)$ (**3.62**), $\omega \in \mathbf{On}$ (**3.63**) is the smallest successor-inductive ordinal.

---

## 5. Fiercely Avoid Type `Set` — Class Variables Mandatory in Comprehension & Binders

- **Rule**: We **fiercely avoid** using the type `Set` (`SetSort` / `: Set`) for bound variables in binders, quantifiers, and comprehensions. Use the default type `Class` (`ClassSort` / `: Class`) everywhere.
- **Class Comprehension Invariant**:
  > **ANY KIND OF CLASS COMPREHENSION `{ x | φ(x) }` MUST NOT BE ALTERED WITH NBG/SET-TYPE MOTIVATION. IT MUST USE `Class` VARIABLES (`{ x : Class | φ(x) }`).**

---

## 6. Generalizing "Quantifier" to "Binder" (Variable-Binding Operator)

The language of Obelisk and `foundations` features multiple variable-binding structures beyond standard $\forall$ and $\exists$ (class comprehension $\kappa$-binder, definite description $\iota$-operator, choice $\tau$/$\epsilon$-operators, $\lambda$, $\Pi$, $\Sigma$, and $\mathsf{let}$). Always use the broader term **binder** (or **variable-binding operator**) when referring to variable-binding syntax and hygiene in general.

---

## 7. Unspecified Elementary Metatheory $\mathcal{E} \in \{\mathrm{I}\Sigma_1, \mathrm{PA}, \mathcal{T}, \mathrm{NBG}, \mathrm{MK}\}$

- The script symbol $\mathcal{E}$ denotes an **unspecified elementary metatheory** chosen from $\{\mathrm{I}\Sigma_1,\ \mathrm{PA},\ \mathcal{T},\ \mathrm{NBG},\ \mathrm{MK}\}$, including both Peano Arithmetic ($\mathrm{PA}$) and Morse–Kelley class theory ($\mathrm{MK}$).

---

## 8. Pure ML Formula Generation, 100% Token Clickability & Personal Symbol Pages (`generated/symbols/*.html`)

1. **All Formula Information Must Come from ML Scripts**:
   - HTML renders formulas beautifully, and **all information about a formula** (whether Unicode or LaTeX) **must be emitted directly by the ML scripts** (`program/html_generator.ML`, `program/symbol_pages.ML`, `program/nbg_html_generator.ML`, `program/newchecker.ML`).
2. **100% Clickable Formula Tokens & Personal Symbol Pages**:
   - Every variable, constant, Greek metavariable, operator, and delimiter in both Unicode and LaTeX formulas is algorithmically wrapped in a clickable link.
   - Metatheoretic, reflection, type, binder, and structural symbols link to their dedicated **Personal Symbol Reference Pages** (`../generated/symbols/*.html`, indexed at [`../generated/symbols/index.html`](../generated/symbols/index.html)), never to unrelated theorems.

---

## 9. `.nbg` File Headers & The 12+6 Canonical Theory / Proof-Assistant Variants (`MKTD1` & `MKTD2`)

1. **Keep `.nbg` Filenames with Explicit Theory Header**:
   - All `.nbg` files keep the `.nbg` extension and state at the very beginning of the file which theory and proof-assistant variant they target.
2. **Default Theory (`MKTD` = Morse-Kelley + Tarski + Dunaev)**:
   - **12 Specific Variants**: `"NBG1"`, `"NBGT1"`, `"NBGTD1"`, `"MK1"`, `"MKT1"`, **`"MKTD1"`** (Variant 1); `"NBG2"`, `"NBGT2"`, `"NBGTD2"`, `"MK2"`, `"MKT2"`, **`"MKTD2"`** (Variant 2).
   - **6 Reserved Shared (`*`) Variants**: `"NBG*"`, `"NBGT*"`, `"NBGTD*"`, `"MK*"`, `"MKT*"`, `"MKTD*"`.
   - Active development concentrates on **`MKTD1`** and **`MKTD2`**.

---

## 10. Dependent Conditional Subscript Notation (`ifᵈₑₚ` vs. `$\mathsf{if}_{\mathsf{dep}}$`)

- In Entry 3.24 and Variant 2 theorems (`thm_85_if_dep_true_branch`, `thm_86_if_dep_false_branch`), the dependent conditional renders as Unicode subscript `ifᵈₑₚ` (with `Tₑ`, `t₁`, `t₂`) in Unicode mode and `\mathsf{if}_{\mathsf{dep}}` in LaTeX mode. Raw ASCII `if_{dep}` is never displayed on rendered pages.

