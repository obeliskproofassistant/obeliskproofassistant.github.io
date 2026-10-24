# Obelisk Architectural Specification: Non-Computational Semantics & Static Verification Compiler

## 1. Executive Summary & Author Axiom

> [!IMPORTANT]
> **Foundational Mandate:**
> 1. **The semantics is NOT computational.** In Obelisk's dependent type theory, proof terms and type assertions have declarative/model-theoretic semantics, not constructive operational reduction semantics.
> 2. **A compiler that checks — Bytecode is NEVER produced.** The compiler's sole purpose is **static verification**: checking whether proof terms correctly inhabit theorem types according to the formal inference rules of the calculus. It compiles strictly to check, never to execute. No bytecode, bytecode VM, JIT, or machine binary is produced.
> 3. **The Necessity of Choice and Classical Logic:**
>    *"Technically it may be computational if without choice axiom. But we need choice, we need everything classical."*

---

## 2. Why the Semantics is Non-Computational

### 2.1 Constructive vs. Classical Dependent Type Theory
In standard Martin-Löf Type Theory (MLTT) and constructive proof assistants (Agda, Coq's constructive core):
- Terms have computational operational reduction rules ($\beta, \eta, \iota$-reduction).
- Closed terms of type `Nat` always evaluate to canonical numerals (`0`, `succ n`).
- Every proof of $\exists x. P(x)$ contains an effective, executable algorithm computing the witness $x$.

### 2.2 The Impact of the Axiom of Choice
In Classical Set Theory (Von Neumann-Bernays-Gödel / Morse-Kelley):
- **Axiom of Global Choice (`ax_global_choice`):** There exists a global choice operation $\tau$ such that for any non-empty class $A$, $\tau(A) \in A$.
- **Law of Excluded Middle (`ax_dneg_elim`, Peirce's Law):** For every proposition $P$, $P \lor \neg P$ holds.

**The Foundational Dilemma:**
- Choice functions and classical oracles have **no computational step rules**. You cannot "execute" a choice function on an arbitrary infinite class to get an effective binary output without solving the Halting Problem or oracle query.
- If one were to forbid the Axiom of Choice, the dependent type theory could technically be computational.
- **However, classical set theory fundamentally REQUIRES Choice and Classical Logic.** Mathematics cannot dispense with Choice (well-ordering of cardinals, Zorn's lemma, ordinal arithmetic, Burali-Forti resolution).
- Therefore, in Obelisk, the semantics is intentionally **declarative and non-computational**.

---

## 3. The Obelisk Compiler: Check, Do Not Execute

### 3.1 What the Compiler Does
```text
           [Obelisk Source Program / Proof Term]
                           │
                           ▼
          [Lexer & Parser: Concrete SML Syntax]
                           │
                           ▼
          [Elaborator & Dependent AST Construction]
                           │
                           ▼
      [Static Type Checker: DependentTypeChecker.check]
       - Checks typing rules: Γ ⊢ term : Type
       - Verifies conversion: Type ≡ TargetStatement
       - Validates classical derivation witnesses
                           │
                           ▼
              ┌────────────────────────┐
              │  DOES THE CODE CHECK?  │
              └───────────┬────────────┘
                          │
            ┌─────────────┴─────────────┐
            ▼                           ▼
          [YES]                       [NO]
   Theorem is Proven & Verified  Type Error / Rejection
            │
            ▼
 [Dedukti Certificate Export]
   (de Bruijn compliance)
            │
            ▼
    [END OF PIPELINE]
  (NO BYTECODE PRODUCED)
```

### 3.2 Erroneous Expectations of Previous Audits
Previous external critiques (e.g. `audit2.txt` and `question_from_another_ai_process/`) raised objections such as:
- *"Proof terms containing classical axioms get stuck during normalization."*
- *"The compiler does not produce bytecode."*

These critiques represent a fundamental category mistake:
- In classical logic, proof terms are **deductive certificates**, not executable bytecode algorithms.
- In Lean 4, non-computable definitions and proofs with classical choice are marked `noncomputable` and do not generate bytecode. Proofs are erased during compilation.
- In Obelisk, **bytecode is never generated for any proof or theorem**, because Obelisk is an end-to-end formal verification tool, not an execution runtime.

---

## 4. Operational Invariants for All Developers & Agents

1. **Never attempt to construct a bytecode VM or JIT.** Obelisk does not need and must not have bytecode emission.
2. **Never attempt to eliminate the Axiom of Choice in order to force computational semantics.** Choice is mandatory for NBG/MK classical mathematics.
3. **Proof Verification is Type Checking:** A theorem $T$ is verified when `DependentTypeChecker.check Gamma proofTerm T` succeeds without exception.
4. **Independent Export:** Soundness is verified externally via de Bruijn criterion compliance (`export/obelisk_theorems.lp` verified by independent Dedukti verifiers).
