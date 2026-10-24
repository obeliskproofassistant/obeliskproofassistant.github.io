# Quotation and Antiquotation in the Obelisk Proof Assistant
## The Shift-to-Term Principle, Nested Stratification, and Non-Computational Classical Semantics

**Author:** Georgy Dunaev  
**Project:** Obelisk Proof Assistant (`set_theory_prover`)  
**Foundational Theory:** Morse-Kelley (MK) Class Theory & Von Neumann-Bernays-Gödel (NBG)  
**Implementation:** Standard ML (Poly/ML), de Bruijn / LCF Kernel  

---

## 1. Executive Summary & Foundational Motivation

In standard functional languages, metaprogramming frameworks (such as Lisp macros, Template Haskell, or MetaOCaml) treat *quotation* as syntactic code quoting and *antiquotation* (or splicing) as dynamic code interpolation.

In the **Obelisk Proof Assistant**, however, quotation and antiquotation carry a fundamentally different and profound mathematical meaning:
1. **Quotation (`EQuote` / `HQuote` / $\langle - \rangle$)** is a **syntactic descent** (reification): it lifts a semantic class, set, or formula into a formal syntactic AST term.
2. **Antiquotation (`EAnti` / $\llbracket - \rrbracket$)** is an **interpretation/ascent**: it evaluates or types a syntactic formula or term as a semantic object under an ambient assignment.
   > *"Antiquotation is a valuation under the current unnamed assignment."*  
   > — *Georgy Dunaev, `program/libs/unicodedefs.ML`*
3. **The Nesting Challenge**: Because antiquotations may appear inside quoted terms, and quotations may wrap antiquotations, the datatype representation naturally leads to *non-uniform nested datatypes* (`'a expression expression`). In Standard ML, this immediately encounters the barrier of polymorphic recursion, requiring an architectural solution based on **finite stratification** and **non-computational static typing**.

---

## 2. The "Shift-to-Term" Architectural Principle

### 2.1 The Paradox-Avoidance Problem
In class theories such as Morse-Kelley (MK) or NBG, classes cannot be represented naively as inductive datatypes. In constructive proof assistants (such as Coq or Lean), terms and types live in a hierarchy of inductive universes $\mathcal{U}_i$. But in foundational class theory:
- If `Class` were an inductive datatype, unrestricted structural recursion would allow defining Russell's class $R = \{ x \mid x \notin x \}$ or Mirimanoff's well-founded sets, inducing contradictions.
- If classes were partially implemented datatypes, missing constructors or unhandled cases would compromise soundness.

### 2.2 The Shift-to-Term Solution
To resolve this, Obelisk introduces the **Shift-to-Term** principle (`program/newchecker.ML`):
> *"If something has type `'a` in theory, then it should have type `'a expression` in the implementation."*

Under this architecture:
- Objects of class theory exist **virtually** in semantic judgments:
  $$\llbracket \varphi \rrbracket : \text{Truth (Prop)}, \quad \llbracket t \rrbracket : \text{Class}$$
- Objects in implementation memory exist as **expressions**:
  $$\varphi : \text{Truth.Expression (Fm)}, \quad t : \text{Class.Expression (ClassTerm)}$$

The bridge between these two realms is governed by explicit inference:
$$\frac{\vdash \varphi : \text{Truth.Expression}}{\vdash \llbracket \varphi \rrbracket : \text{Truth}} \qquad \frac{\vdash t : \text{Class.Expression}}{\vdash \llbracket t \rrbracket : \text{Class}}$$

---

## 3. Formal Definition of Quotation and Antiquotation

### 3.1 Quotation (`EQuote` / `HQuote`)
Quotation converts an expression representing an object into a meta-level term:
```sml
fun EQuote (x : 'a_Expre sion) : 'a_Expre sion expression = 
  EInject (HQuote x);
```
- **Semantic effect:** Freezes evaluation and binds free variables to the object level.
- **Typing effect:** Shifts an element of semantic level $N$ to an object-language term at meta-level $N+1$.

### 3.2 Antiquotation (`EAnti` / $\llbracket - \rrbracket$)
Antiquotation interprets a syntactic formula or term under an assignment $a$:
$$\llbracket \varphi \rrbracket_a = v_a(\varphi)$$
In Obelisk's unicode definitions (`unicodedefs.ML`):
```text
val sLWSquare = "⟦";
val sRWSquare = "⟧";
```
- **Semantic effect:** A valuation under the current (unnamed) assignment.
- **Inference rule:**
  $$\text{Valid}(\varphi) \iff \forall a.\ v_a(\varphi) = \text{true} \implies \llbracket \varphi \rrbracket \text{ is an inhabited proposition}$$

---

## 4. The Deep Problem: Nested Quotation and Polymorphic Recursion

### 4.1 The Nested Type Definition
In `program/types/typetheory.ML` and `newchecker.ML`, the full expressive power of quotation and antiquotation requires nesting:
```sml
datatype 'a expression =
    EyVar   of Variable
  | EQuote  of 'a
  | EAnti   of 'a expression expression
  | EEval   of 'a expression expression
  | ESubst  of ('a expression) * (Large_Obj_Expression) * (Variable)
```

Look closely at the constructor `EAnti`:
$$\text{EAnti} : \text{'a expression expression} \to \text{'a expression}$$
The argument is **not** `'a expression`, but `'a expression expression`!

### 4.2 The SML Polymorphic Recursion Barrier
Standard ML and Poly/ML employ Damas-Milner type inference. In Damas-Milner, recursive function calls within a function body must instantiate type variables with the **exact same type** as the function signature.

If one attempts to write an evaluator:
```sml
fun eval (EyVar v)   = lookup v
  | eval (EQuote x)  = x
  | eval (EAnti ee)  = eval (eval ee)  (* TYPE ERROR IN STANDARD ML! *)
```
- `eval` expects an argument of type `'a expression`.
- But `ee` has type `'a expression expression`!
- Therefore, the inner call `eval ee` requires `eval` at type `'a expression expression -> 'a expression`, while the outer call requires `'a expression -> 'a`.
Standard ML rejects this definition as a polymorphic recursion violation.

---

## 5. The Discovery: Stabilization and Finite Stratification

In `program/types/small_explanation.txt`, Georgy Dunaev analyzed the stages of abstraction:
```text
Stage 0 (Zero):   string
Stage 1 (First):  datatype stringTerm =
                    StringVar of Variable
                  | StringQuote of string
                  | StringAntiquote of stringTermTerm

Stage 2 (Second): datatype stringTermTerm =
                    StringTermVar of VariableTerm
                  | StringTermQuote of stringTerm
                  | StringTermAntiquote of stringTermTermTerm

Stage 3 (Third):  datatype stringTermTermTerm = ...
```

### 5.1 The Stabilization Insight
> *"IDEA: It stabilises! So it is enough to define Term and TermTerm."*  
> — *Georgy Dunaev, `small_explanation.txt`*

In mathematical logic, the hierarchy does not require an infinite run-time tower:
1. **Stage 1 (`Term`):** The object theory of Morse-Kelley class theory (sets, classes, ordinals, predicates).
2. **Stage 2 (`TermTerm`):** The meta-theory of inference rules, schemas (induction, separation, replacement), and proof programs.
3. **Stage 3 (`TermTermTerm`):** The meta-meta theory of tactics, certificate generation (Dedukti export), and Sledgehammer bridges.

Because mathematical deduction operates within a finite meta-depth (rarely exceeding depth 2), finite stratification completely eliminates the polymorphic recursion barrier while preserving 100% of mathematical expressiveness!

---

## 6. Resolution via Non-Computational Classical Semantics

### 6.1 Classical Proofs Are Non-Computational
In constructive type theories (like Martin-Löf Type Theory or Coq without axioms), types have computational semantics: every closed proof of $\exists x.\ P(x)$ can be normalized to compute a witness.

In **Obelisk**, the foundations are strictly **classical**:
- Global Choice Axiom (`ax_global_choice`)
- Law of Excluded Middle (`LEM`)
- Impredicative Class Comprehension (`ax_class_comprehension`)

Under classical logic with choice, proofs do **not** normalize to canonical values. As established by the author:
> *"In this dependent type theory the semantics is NOT computational. You develop a compiler, which just checks, but a bytecode is never produced."*

### 6.2 Static Derivation Typechecking
Because bytecode is never emitted and proofs do not execute dynamically, quotation and antiquotation are **resolved statically at typecheck-time**:
- `EQuote` constructs a syntactic term record.
- `EAnti` reflects a syntactic formula into a type-level sort `Prop`.
- `DependentTypeChecker.checkTerm (ctx, proofProgram, statement)` statically verifies that the proof program constructs a valid derivation of the proposition.

No dynamic unwrapping loop is executed; the typechecker validates the Curry-Howard typing judgment in polynomial time without runtime evaluation hazards!

---

## 7. Concrete Demonstration in the Obelisk Compiler

Consider Theorem O11 ($\text{Trans}(\text{On}) \land \forall \alpha \in \text{On}.\ \text{Ord}(\alpha)$):
```sml
(* Syntactic statement (Quotation level 1) *)
val stmt_O11 = 
  And (Trans (Const "On")) 
      (Forall "a" TClass (Impl (In (Var "a") (Const "On")) (Ord (Var "a"))));

(* Constructive proof program (Meta-level derivation) *)
val proof_O11 = 
  Pair (Const "ax_on_trans", Const "ax_on_elements_ord");

(* Typechecking validates derivation statically *)
val () = check ordinalContext proof_O11 stmt_O11;
```
Here:
- The statement `stmt_O11` is a quoted AST formula.
- Its interpretation $\llbracket \text{stmt\_O11} \rrbracket$ is the proposition that the class of all ordinals is an ordinal class.
- The proof program `proof_O11` provides the constructive derivation pair.
- The compiler checks that `proof_O11` has type `stmt_O11` without generating a single byte of executable machine code.

---

## 8. Summary Table of Operations

| Concept | Obelisk Syntax | Mathematical Meaning | Stratification Level |
| :--- | :--- | :--- | :--- |
| **Object Level** | $x \in y$, $\text{Ord}(\alpha)$ | Semantic entities in Morse-Kelley universe | Level 0 |
| **Quotation** | `EQuote t`, `HQuote t`, $\langle t \rangle$ | Syntactic descent: turns semantic entity into an AST term | Level $N \to N+1$ |
| **Antiquotation** | `EAnti e`, `FAntiquote e`, $\llbracket e \rrbracket$ | Valuation: interprets AST under current assignment | Level $N+1 \to N$ |
| **Substitution** | `ESubst (e, t, x)`, $e[t/x]$ | Capture-avoiding structural replacement in AST | Level 1 & 2 |
| **Valuation** | `EEval e`, $v_a(e)$ | Static valuation of expression under context | Level 1 $\to$ Sort |
| **Verification** | `check ctx prf stmt` | Static proof-checking under de Bruijn criterion | Pure Compiler Gate |

---

## 9. Conclusion

Quotation and antiquotation in the Obelisk Proof Assistant are the foundational mechanisms that allow a classical set theory to be implemented cleanly in a modern functional compiler. By recognizing that antiquotation is a *valuation under an unnamed assignment*, that nested quotation stabilizes at a finite stratification, and that classical semantics is strictly non-computational, Obelisk achieves an ultra-small, trusted LCF kernel capable of verifying ordinal arithmetic and class theory without paradoxes or bytecode bloat.
