# Quotation, Antiquotation, and Semantic Valuation in the Obelisk Proof Assistant
## The Shift-to-Term Principle, Signature Reconciliation, and Classical Metatheory

**Author:** Georgy Dunaev  
**Project:** Obelisk Proof Assistant (`set_theory_prover`)  
**Foundational Theory:** Morse–Kelley (MK) & Von Neumann–Bernays–Gödel (NBG) Class Theory  
**Implementation:** Standard ML (Poly/ML), Variant 1 (`newchecker.ML`) & Variant 2 (`DependentTypeChecker`)  

---

## 1. Executive Summary & Foundational Distinctions

In metaprogramming and formal reflection, four conceptually distinct operations are often conflated if their domains and codomains are not written out explicitly. Following the book's `010_logic.tex` and `130_classes_as_types.tex` together with the catalog (`generated/theory_db.json`) and `program/types/typetheory.ML`, the **Obelisk Proof Assistant** keeps these maps strictly separate:

1. **Syntactic Quotation / Coding (`‹e›` / `Enc : A.Expression → Class`):**
   Takes an *already formed finite syntactic expression* $e : A.\mathrm{Expression}$ (or formula $\varphi : \mathrm{Fm}$) and maps it to its canonical hereditary set code $\operatorname{Enc}(e) \in \operatorname{Code}_A \subseteq V$ (`generated/symbols/quotation.html`, `generated/symbols/enc.html`). Quotation acts on **syntax**, not on arbitrary unnameable semantic classes.
2. **Syntactic Decoding (`Dec_A : Class → A.Expression` on valid codes $\operatorname{Code}_A \subseteq V$):**
   Recovers the syntactic AST from a valid class code $c \in \operatorname{Code}_A$, satisfying the typed syntactic round-trip identity $\operatorname{Dec}_A(\operatorname{Enc}(e)) = e$ for every $e : A.\mathrm{Expression}$ (`generated/symbols/dec.html`).
3. **Syntactic Antiquotation / Splicing (`⟨u⟩` inside `‹...›`) vs. Semantic Valuation (`⟦e⟧_ρ = Val_ρ(e)`):**
   - **Syntactic Splicing (`⟨u⟩`, U+27E8/U+27E9, `generated/symbols/antiquotation.html`):** Inside a quotation template $\text{‹}\dots\,\langle u \rangle\,\dots\text{›}$, evaluates the meta-level expression $u : A.\mathrm{Expression}$ (such as $\operatorname{Dec}_A(c)$) and splices the resulting syntax tree into the surrounding AST.
   - **Semantic Valuation (`⟦e⟧_ρ = Val_ρ(e)`, U+27E6/U+27E7, `generated/symbols/binder-brackets.html`):** Evaluates a syntactic expression $e : A.\mathrm{Expression}$ to its semantic denotation in $A$ under a variable assignment $\rho : \mathrm{Variable} \to \mathrm{Class}$.
4. **Type-Indexed Expression Translation ($\mu_A$) vs. Assignment-Indexed Valuation ($\mu^{\mathrm{val}}_\rho$):**
   Reconciles the type-indexed translation $\mu_A : A.\mathrm{Expression} \to \mathrm{Class}.\mathrm{Expression}$ used in `130_classes_as_types.tex` and `DefMetaGeneralisation` (`4.02`) with the assignment-indexed valuation shorthand $\mu^{\mathrm{val}}_\rho : \mathrm{Class}.\mathrm{Expression} \to \mathrm{Class}$ used on the symbol pages (`generated/symbols/mu-interpretation.html`, `generated/symbols/eval.html`) via the explicit composite
   $$\operatorname{Eval}_{(A, \rho)}(c) \;=\; \operatorname{Val}_\rho\!\bigl(\mu_A(\operatorname{Dec}_A(c))\bigr).$$

---

## 2. The "Shift-to-Term" Architectural Principle

### 2.1 Why Semantic Classes Are Distinguished from Inductive Syntax Datatypes
In guarded class theories such as NBG and Morse–Kelley (`RulClassComprehension`, `3.01`: $x \in \{z \mid \varphi(z)\} \iff \operatorname{Set}(x) \land \varphi(x)$):
- **The Russell Class Is a Legitimate Proper Class, Not a Contradiction:** Forming $R = \{x \mid x \notin x\}$ under guarded comprehension yields $x \in R \iff \operatorname{Set}(x) \land x \notin x$. By Regularity (`AxmRegularity`, `3.14`), $R = V$, and the standard Russell argument simply proves the theorem $\neg\operatorname{Set}(R)$ ($\operatorname{Proper}(R)$), not a contradiction.
- **Why `Class` Cannot Be Replaced by a Naive Inductive Datatype:** Finite syntax datatypes (`Fm`, `Class.Expression`) are inductively generated and perfectly compatible with a class-theoretic semantics. What would be unsound is asserting that every semantic class $X : \mathrm{Class}$ is the denotation of a finite syntax tree (surjectivity of valuation) or granting an unguarded sethood/comprehension elimination principle that omits $\operatorname{Set}(x)$:
  1. **Cardinal / Diagonal Obstruction (`130_classes_as_types.tex`):** The inductive datatype of finite expressions is countable, whereas the conglomerate of semantic classes (even subclasses of $\omega$, corresponding to functions $\mathbb{N} \to \{0,1\}$) is uncountable. As proved by diagonalization in `130_classes_as_types.tex` (evaluating the $n$-th code at $n$ with a fixed default for non-codes and flipping the bit), no map from countable finite syntax can denote every semantic class in the fixed standard interpretation.
  2. **Non-Injectivity of Valuation on Syntax:** Distinct syntactic expressions can have identical semantic values: for example, the arithmetic expressions $0 + 0$ and $0$ satisfy $\operatorname{Val}_\rho(\text{‹}0 + 0\text{›}) = \operatorname{Val}_\rho(\text{‹}0\text{›}) = \emptyset$, yet they are distinct ASTs with distinct codes $\operatorname{Enc}(\text{‹}0 + 0\text{›}) \neq \operatorname{Enc}(\text{‹}0\text{›})$.

### 2.2 The Shift-to-Term Architecture (`program/newchecker.ML` & `130_classes_as_types.tex`)
To maintain a rigorous separation between finite syntax in ML memory and arbitrary semantic classes in the model, Obelisk employs the **Shift-to-Term** principle:
> *"If something has type `'a` in theory, then it should have type `'a expression` in the implementation."*

Under this architecture:
- **In the implementation (`program/types/typetheory.ML`):** Kernel functions manipulate finite syntactic expressions $\varphi : \mathrm{Truth}.\mathrm{Expression}$ (`Fm`) and $t : \mathrm{Class}.\mathrm{Expression}$.
- **In the semantics (`010_logic.tex`, `130_classes_as_types.tex`):** Semantic valuation $\operatorname{Val}_\rho(\varphi) = \llbracket \varphi \rrbracket_\rho \in \mathrm{Bool}$ and $\operatorname{Val}_\rho(t) = \llbracket t \rrbracket_\rho : \mathrm{Class}$ interprets those finite expressions under an assignment $\rho : \mathrm{Variable} \to \mathrm{Class}$.

---

## 3. Exact Signatures of Quotation, Decoding, Translation, and Valuation

To prevent any ambiguity between the book (`010_logic.tex`, `130_classes_as_types.tex`), the catalog (`DefMetaInstantiation` `4.01`, `DefMetaGeneralisation` `4.02`), and the symbol pages (`generated/symbols/*.html`), every reflection operator is equipped with its explicit domain, codomain, valid-code carrier, and parameters:

### 3.1 Syntactic Coding (`Enc` / `‹e›`) and Decoding (`Dec_A`)
For each syntactic category $A.\mathrm{Expression}$ (such as $\mathrm{Class}.\mathrm{Expression}$, $\mathrm{Variable}.\mathrm{Expression}$, or $\mathrm{Truth}.\mathrm{Expression} = \mathrm{Fm}$):
- **Syntactic Coding (`Enc_A` / Corner Quotation `‹e›`):**
  $$\operatorname{Enc}_A : A.\mathrm{Expression} \longrightarrow \operatorname{Code}_A \subseteq V \subseteq \mathrm{Class}.$$
  `Enc_A` is injective on syntax: $\operatorname{Enc}_A(e_1) = \operatorname{Enc}_A(e_2) \implies e_1 = e_2$ as syntactic expressions. Because `Enc_A` takes an *already represented expression* $e : A.\mathrm{Expression}$ as input, quoting $e$ requires no universal naming theorem for arbitrary semantic classes.
- **Valid-Code Domain ($\operatorname{Code}_A$) and Decoding (`Dec_A`):**
  $$\operatorname{Dec}_A : \mathrm{Class} \longrightarrow A.\mathrm{Expression}.$$
  Let $\operatorname{Code}_A = \operatorname{im}(\operatorname{Enc}_A) \subseteq V$ be the set of valid syntactic codes for category $A$.
  - **Syntax Round-Trip Identity (Unconditional on $A.\mathrm{Expression}$):**
    $$\forall e : A.\mathrm{Expression},\qquad \operatorname{Dec}_A(\operatorname{Enc}_A(e)) = e.$$
  - **Code Round-Trip Identity (Guarded by Valid-Code Domain $\operatorname{Code}_A$):**
    $$\forall c : \mathrm{Class},\qquad c \in \operatorname{Code}_A \implies \operatorname{Enc}_A(\operatorname{Dec}_A(c)) = c.$$
    *(For $c \notin \operatorname{Code}_A$, $\operatorname{Dec}_A(c)$ returns a fixed default syntactic variable/constant $e^{\mathrm{def}}_A$, so $\operatorname{Enc}_A(\operatorname{Dec}_A(c)) = c$ holds if and only if $c \in \operatorname{Code}_A$.)*

### 3.2 Syntactic Antiquotation (`⟨u⟩`) vs. Semantic Valuation (`⟦e⟧_rho`)
Two distinct bracket notations operate on expressions:
1. **Syntactic Antiquotation / Splicing (`⟨u⟩`, `generated/symbols/antiquotation.html`):**
   Inside a quoted expression $\text{‹}\dots\,\langle u \rangle\,\dots\text{›}$, the subterm $u : A.\mathrm{Expression}$ (for example, $u = \operatorname{Dec}_A(c)$ where $c : \mathrm{Class}$ is a code variable) is spliced directly into the quoted AST:
   $$\text{‹}\forall x : \mathrm{Class}.\;\langle \operatorname{Dec}_{\mathrm{Fm}}(c) \rangle\text{›} \;:\; \mathrm{Fm}.$$
   In particular, $\text{‹}\langle e \rangle\text{›} = \operatorname{Enc}_A(e)$ for $e : A.\mathrm{Expression}$, and $\text{‹}\langle \operatorname{Dec}_A(c) \rangle\text{›} = c$ for $c \in \operatorname{Code}_A$.
2. **Semantic Valuation (`⟦e⟧_ρ = Val_ρ(e)`, `generated/symbols/binder-brackets.html`):**
   Given a variable assignment $\rho : \mathrm{Variable} \to \mathrm{Class}$, semantic valuation interprets a class expression or formula in the model:
   $$\operatorname{Val}_\rho : \mathrm{Class}.\mathrm{Expression} \longrightarrow \mathrm{Class}, \qquad \operatorname{Val}_\rho : \mathrm{Truth}.\mathrm{Expression} \longrightarrow \mathrm{Bool},$$
   written $\llbracket e \rrbracket_\rho := \operatorname{Val}_\rho(e)$. As noted in `program/libs/unicodedefs.ML`, when $\rho$ is the ambient unnamed assignment of the current context, $\llbracket e \rrbracket$ abbreviates $\operatorname{Val}_\rho(e)$.

### 3.3 Reconciling the Two Conventions for $\mu$ and $\operatorname{eval}$
Across the project documentation and symbol pages, the letter $\mu$ appears with two different subscript types. Both are mathematically sound once their signatures are distinguished:

| Notation | Subscript Parameter | Exact Signature | Role & Where Used |
| :--- | :--- | :--- | :--- |
| **$\mu_A$** (Type-Indexed Translation) | Type / Conglomerate $A : \mathrm{Type}$ (e.g. $A = \mathrm{Variable}$) | $\mu_A : A.\mathrm{Expression} \to \mathrm{Class}.\mathrm{Expression}$ | Syntactic coercion/translation from $A$-expressions into class expressions (`130_classes_as_types.tex`; `DefMetaGeneralisation` `4.02`: $\mu_{\mathrm{Variable}} : \mathrm{Variable}.\mathrm{Expression} \to \mathrm{Class}.\mathrm{Expression}$) |
| **$\operatorname{Val}_\rho$** (Semantic Valuation) | Assignment $\rho : \mathrm{Variable} \to \mathrm{Class}$ | $\operatorname{Val}_\rho : \mathrm{Class}.\mathrm{Expression} \to \mathrm{Class}$ | Tarski semantic evaluation of a class expression under assignment $\rho$ (`010_logic.tex`, `130_classes_as_types.tex`) |
| **$\mu^{\mathrm{val}}_\rho$** (Written $\mu_A$ on symbol pages with $A = \rho$) | Assignment $A = \rho : \mathrm{Variable} \to \mathrm{Class}$ | $\mu^{\mathrm{val}}_\rho : A.\mathrm{Expression} \to \mathrm{Class}$ | Combined valuation shorthand $\mu^{\mathrm{val}}_\rho(e) := \operatorname{Val}_\rho(\mu_A(e))$ (`generated/symbols/mu-interpretation.html`) |
| **$\operatorname{Eval}_{(A,\rho)}(c)$** (Written $\operatorname{eval}_A(c)$ on symbol pages) | Type $A : \mathrm{Type}$ and assignment $\rho : \mathrm{Variable} \to \mathrm{Class}$ | $\operatorname{Eval}_{(A,\rho)} : \mathrm{Class} \to \mathrm{Class}$ | Composite code evaluation: $\operatorname{Eval}_{(A,\rho)}(c) := \operatorname{Val}_\rho(\mu_A(\operatorname{Dec}_A(c))) = \mu^{\mathrm{val}}_\rho(\operatorname{Dec}_A(c))$ (`generated/symbols/eval.html`) |

With this composite written explicitly:
- For any expression $e : A.\mathrm{Expression}$, the semantic evaluation of its code $\operatorname{Enc}_A(e)$ satisfies the well-typed round-trip law:
  $$\operatorname{Eval}_{(A,\rho)}\!\bigl(\operatorname{Enc}_A(e)\bigr) \;=\; \operatorname{Val}_\rho\!\bigl(\mu_A(\operatorname{Dec}_A(\operatorname{Enc}_A(e)))\bigr) \;=\; \operatorname{Val}_\rho\!\bigl(\mu_A(e)\bigr) \;=\; \mu^{\mathrm{val}}_\rho(e).$$
- Conversely, two distinct expressions $e_1 \neq e_2$ with $\operatorname{Eval}_{(A,\rho)}(\operatorname{Enc}_A(e_1)) = \operatorname{Eval}_{(A,\rho)}(\operatorname{Enc}_A(e_2))$ (such as $0+0$ and $0$) are **not** forced to have equal codes $\operatorname{Enc}_A(e_1)$ and $\operatorname{Enc}_A(e_2)$, because $\operatorname{Val}_\rho$ is not injective.

---

## 4. Nested Quotation, SML Polymorphic Recursion, and Stratification

### 4.1 The SML Polymorphic Recursion Barrier
In `program/types/typetheory.ML` and `program/types/small_explanation.txt`, if one attempts to parameterize expressions uniformly by a type variable `'a`:
```sml
datatype 'a expression =
    EyVar   of Variable
  | EQuote  of 'a
  | EAnti   of 'a expression expression
```
then a naive recursive evaluator `fun eval (EAnti ee) = eval (eval ee)` fails Damas–Milner type inference in Standard ML because the inner call requires type `'a expression expression -> 'a expression` while the outer call has type `'a expression -> 'a` (polymorphic recursion).

### 4.2 Finite Type Stratification vs. Arbitrary-Depth Code Trees
Obelisk resolves this in two complementary ways whose scopes should be clearly distinguished:
1. **Finite ML Stratification for Bounded-Depth Meta-Reasoning (`small_explanation.txt`):**
   In `program/types/small_explanation.txt`, Georgy Dunaev observed that standard proof-assistant work operates across a fixed, bounded number of meta-levels:
   - **Level 1 (`Term` / `A.Expression`):** Object-language formulas and class expressions of MK/NBG.
   - **Level 2 (`TermTerm`):** Meta-level inference schemas (`DefMetaInstantiation` `4.01`, `DefMetaGeneralisation` `4.02`) and sequent rules.
   - **Level 3 (`TermTermTerm`):** Tactics and external certificate exporters.
   Fixing a finite ML stratification (`Term`, `TermTerm`) eliminates polymorphic recursion for the bounded-depth fragment ($k \le 2$) used in everyday kernel rules.
2. **First-Order Set Coding (`Enc_A : A.Expression → Class`) for Arbitrary Finite Depth:**
   Finite depth of each individual syntax tree does *not* imply a single uniform depth bound for an open-ended grammar closed under arbitrary nested quotation. Whenever expressions of arbitrary finite nesting depth must be represented uniformly (as in Section 4–5 reflection and Gödel/Löb diagonalization, Entries `4.01`–`5.05`), Obelisk encodes syntax trees into the single first-order carrier `Class` via $\operatorname{Enc}_A : A.\mathrm{Expression} \to \operatorname{Code}_A \subseteq V_\omega \subseteq \mathrm{Class}$. Because hereditary sets in $V_\omega$ can have arbitrary finite rank while all inhabiting the same type `Class`, nested codes $\operatorname{Enc}(\text{‹}\dots\text{›}) : \mathrm{Class}$ require no infinite tower of ML type constructors.

---

## 5. Non-Computational Classical Semantics, Normalization, and Checking

### 5.1 Separating Proof Checking, Strong Normalization, and Canonicity (`010_logic.tex`)
In Obelisk, the foundational theory includes classical logic (LEM), Impredicative Class Comprehension (`3.01`), and Choice / Size Limitation (`3.43`, `3.47`). As established in [`docs/COMPILER_SEMANTICS_NON_COMPUTATIONAL.md`](COMPILER_SEMANTICS_NON_COMPUTATIONAL.md) and proved in the book's `010_logic.tex`, three properties must be kept distinct:
1. **Static Proof Checking:** Both kernels (`newchecker.ML` in Variant 1 and `DependentTypeChecker.check` in Variant 2) statically verify finite derivations without emitting executable bytecode.
2. **Strong Normalization:** Adding opaque classical or choice constants with *no reduction rules* to a strongly normalizing calculus (such as the simple Boolean calculus in `010_logic.tex`) **preserves strong normalization** (replacing the finitely many constants in a term by fresh typed free variables transports any reduction step to the constant-free calculus).
3. **Failure of Canonicity:** Opaque classical/choice constants break **canonicity** (not normalization): a closed normal form of type `Bool` or $\Sigma x : A.\,P(x)$ containing an opaque constant is already normal, yet is neither `true` nor `false` (nor an explicit computable witness).

### 5.2 Static Verification Without Unfounded Complexity Claims
Because Obelisk is a verification-only compiler, quotation (`Enc_A`), decoding (`Dec_A`), and rule instantiation (`DefMetaInstantiation`, `4.01`) are checked statically against explicit syntactic side conditions (`FFI`, `FV`, `NFV`). Note that omitting bytecode emission is an architectural design choice and does not by itself determine the asymptotic complexity of conversion checking: in Variant 1 (`newchecker.ML`), each primitive rule step is a bounded structural AST comparison, whereas in Variant 2 (`DependentTypeChecker.check`), the cost of definitional conversion (`conv` via `DependentEval.whnf`) depends on the reduction steps of the terms being compared.

---

## 6. Concrete Example of Level-Explicit Verification

Consider Theorem O11 (`thm_O11_on_ord_class` in `program/ordinal_theorems.ML`: $\operatorname{Trans}(\mathrm{On}) \land \forall \alpha \in \mathrm{On}.\;\operatorname{Ord}(\alpha)$):
```sml
(* Level 1: Syntactic statement in Truth.Expression / Term *)
val stmt_O11 =
  And (Trans (Const "On"))
      (Forall "a" TClass (Impl (In (Var "a") (Const "On")) (Ord (Var "a"))));

(* Level 1: Proof term certificate *)
val proof_O11 =
  Pair (Const "ax_on_trans", Const "ax_on_elements_ord");

(* Static kernel verification: checks proof_O11 : stmt_O11 *)
val () = check ordinalContext proof_O11 stmt_O11;
```
- **Syntactic level (`Level 1`):** `stmt_O11` is a finite AST formula; its class code is $\operatorname{Enc}_{\mathrm{Fm}}(\mathtt{stmt\_O11}) \in \operatorname{Code}_{\mathrm{Fm}} \subseteq V$.
- **Semantic level (`Level 0`):** Under any variable assignment $\rho$, its semantic valuation $\llbracket \mathtt{stmt\_O11} \rrbracket_\rho = \operatorname{Val}_\rho(\mathtt{stmt\_O11}) \in \mathrm{Bool}$ asserts that $\mathrm{On}$ is transitive and all its members are ordinals.
- **Verification:** `check ordinalContext proof_O11 stmt_O11` verifies the derivation statically without emitting bytecode.

---

## 7. Summary Table of Reflection & Interpretation Maps

| Operation | Notation | Input $\to$ Output Signature | Domain / Hygiene Condition |
| :--- | :--- | :--- | :--- |
| **Syntactic Quotation / Coding** | $\text{‹}e\text{›}$ / $\operatorname{Enc}_A(e)$ | $A.\mathrm{Expression} \to \operatorname{Code}_A \subseteq \mathrm{Class}$ | Defined on all finite AST expressions $e : A.\mathrm{Expression}$; injective on syntax |
| **Syntactic Decoding** | $\operatorname{Dec}_A(c)$ | $\mathrm{Class} \to A.\mathrm{Expression}$ | Left-inverse on $\forall e,\;\operatorname{Dec}_A(\operatorname{Enc}_A(e)) = e$; right-inverse on valid codes $c \in \operatorname{Code}_A$ |
| **Syntactic Antiquotation (Splicing)** | $\langle u \rangle$ (inside $\text{‹}\dots\text{›}$) | $A.\mathrm{Expression} \to A.\mathrm{Expression}$ | Splices expression $u$ (e.g. $\operatorname{Dec}_A(c)$) into a surrounding quoted AST template |
| **Type-Indexed Expression Translation** | $\mu_A(e)$ | $A.\mathrm{Expression} \to \mathrm{Class}.\mathrm{Expression}$ | Translates typed $A$-expressions into class expressions (`130_classes_as_types.tex`, `4.02`) |
| **Semantic Valuation** | $\llbracket e \rrbracket_\rho = \operatorname{Val}_\rho(e)$ | $\mathrm{Class}.\mathrm{Expression} \to \mathrm{Class}$ (or $\mathrm{Fm} \to \mathrm{Bool}$) | Evaluates syntax in the model under assignment $\rho : \mathrm{Variable} \to \mathrm{Class}$; not injective ($0+0 \neq 0$) |
| **Assignment-Indexed Valuation** | $\mu^{\mathrm{val}}_\rho(e)$ (written $\mu_A(e)$ with $A=\rho$) | $A.\mathrm{Expression} \to \mathrm{Class}$ | Shorthand for $\operatorname{Val}_\rho(\mu_A(e))$ (`generated/symbols/mu-interpretation.html`) |
| **Composite Code Evaluation** | $\operatorname{Eval}_{(A,\rho)}(c)$ (written $\operatorname{eval}_A(c)$) | $\mathrm{Class} \to \mathrm{Class}$ | $\operatorname{Val}_\rho(\mu_A(\operatorname{Dec}_A(c)))$; satisfies $\operatorname{Eval}_{(A,\rho)}(\operatorname{Enc}_A(e)) = \mu^{\mathrm{val}}_\rho(e)$ (`generated/symbols/eval.html`) |
