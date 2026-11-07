# Obelisk Architectural Specification: Non-Computational Semantics & Static Verification Compiler

## 1. Executive Summary & Author Design Commitments

> [!IMPORTANT]
> **Foundational & Architectural Commitments:**
> 1. **Declarative / Model-Theoretic Semantics (Non-Computational by Design):** In Obelisk's classical set/class theory and dependent type theory, formulas, proof terms, and class expressions are interpreted via classical model-theoretic valuation rather than constructive witness-extraction semantics.
> 2. **A Compiler That Checks — Bytecode Is NEVER Produced:** The compiler's sole purpose is **static verification**: checking whether supplied finite derivations and proof terms satisfy the formal inference and typing rules of the kernel (`newchecker.ML` in Variant 1 and `DependentTypeChecker.check` in Variant 2). No bytecode, VM, JIT, or executable binary is emitted.
> 3. **Classical Logic & Choice as Project Foundations:**
>    *"Technically it may be computational if without choice axiom. But we need choice, we need everything classical."*
>    Classical logic (Law of Excluded Middle) and the Axiom of Choice / Global Choice are deliberate foundational commitments of the Obelisk project for developing Morse–Kelley (MK) and Von Neumann–Bernays–Gödel (NBG) mathematics.

---

## 2. Separating Proof Checking, Strong Normalization, and Canonicity

To give a mathematically rigorous account of why Obelisk is a verification-only compiler rather than a witness-computing evaluator, three distinct metatheoretic questions must be kept strictly separate (following the formal analysis in the book's `010_logic.tex`):

1. **Algorithmic Proof Checking:** Is a supplied finite derivation / proof certificate accepted by the specified kernel (`newchecker.ML` or `DependentTypeChecker.check`)?
2. **Strong Normalization (Termination of Reduction):** Does a specified syntactic reduction relation ($\beta$-reduction / definitional unfolding) terminate on all well-typed terms of the calculus?
3. **Canonicity (Witness / Value Computation):** Does every *closed normal form* of a base type (such as `Bool`) or existential/dependent sum type ($\Sigma x : A.\,P(x)$) reduce to a canonical literal (`true` / `false`) or an explicit computable witness pair?

### 2.1 Why Opaque Classical & Choice Constants Break Canonicity, Not Normalization (`010_logic.tex`)
In constructive type theories (such as Martin-Löf Type Theory without axioms), both strong normalization and canonicity hold: closed normal forms of type `Bool` are literally `true` or `false`, and closed proofs of $\Sigma x : A.\,P(x)$ compute an explicit witness $a : A$.

When classical or choice principles are introduced as **opaque typed constants with no reduction rules** (for instance, an excluded-middle oracle or a choice operator constant $c$):
- **Strong Normalization Is Preserved (`010_logic.tex`):** An opaque constant with no rewrite rules is *already in normal form*—it does not diverge or loop. As proved in `010_logic.tex` for the strongly normalizing simple Boolean calculus, adding arbitrary opaque typed constants with no reduction rules preserves strong normalization: given any term $t$ containing finitely many opaque constants $c_1, \dots, c_k$, replacing each $c_i$ by a fresh free variable $x_i$ of the same type preserves every reduction step one-for-one, so any infinite reduction sequence from $t$ would transport to an infinite reduction sequence in the original constant-free calculus. *(Scope note: this syntactic preservation theorem applies to adding inert constants to a normalizing calculus; it does not claim that arbitrary axioms are semantically consistent or that every extension of a full dependent checker automatically normalizes without specifying its reduction rules.)*
- **Canonicity Fails (`010_logic.tex`):** Even though reduction terminates, an opaque closed constant $c : \mathrm{Bool}$ (or a conditional branching on an unreduced classical/choice term) is a **closed normal form distinct from `true` and `false`**. Thus closed normal forms no longer compute canonical Boolean values or effective set witnesses.

### 2.2 Which Mathematical Principles Require Choice (and Which Do Not)
Classical logic and Global Choice are foundational commitments of Obelisk, but their mathematical scope should be stated accurately:
- **Principles Requiring Choice:** Well-ordering arbitrary sets (Zermelo's Well-Ordering Theorem), cardinal trichotomy for arbitrary sets, Zorn's Lemma, Tychonoff's Theorem, and (in class-map form) placing every proper class in bijection with $V$ or $\mathrm{On}$ (`DefTightClass` `3.47` at $U = V$ / Global Choice) require the Axiom of Choice or Global Choice.
- **Principles Not Requiring Choice:** Ordinary ordinal induction, transfinite ordinal recursion and ordinal arithmetic ($\alpha + \beta$, $\alpha \cdot \beta$, $\alpha^\beta$ on $\mathrm{On}$), and the **Burali-Forti theorem** ($\mathrm{On}$ is a proper class, `ThmOrdinalsProperClass` `3.22` / `thm_O12_burali_forti`) do **not** logically require the Axiom of Choice; they follow from Class Comprehension / Separation, Replacement, and Regularity (`AxmRegularity` `3.14`) alone.

### 2.3 Domain & Size Conventions for Set Choice vs. Class-Parameter Choice (`010_logic.tex` & `220_simpler_img_thms.tex`)
When formulating a choice operation in NBG/MK class theory, two distinct operators must be distinguished by their domains and size conventions:
1. **Set-Level Choice Graph ($\tau_{\mathrm{set}} : V \setminus \{\emptyset\} \to V$):**
   An ordinary class-function graph whose arguments and outputs are **sets** ($x \in V$). Because proper classes are not members of any class ($\neg\operatorname{Set}(K) \implies \forall u.\;K \notin u$), a proper class $K$ cannot be passed as a first-order set argument in $\operatorname{Dom}(\tau_{\mathrm{set}}) \subseteq V$.
2. **Class-Parameter Choice Operation ($\tau_{\mathrm{class}}(A)$ for arbitrary classes $A : \mathrm{Class}$):**
   To select a member $\tau_{\mathrm{class}}(A) \in A$ for **every nonempty class $A$** (including proper classes $A \subseteq V$), one cannot merely apply a set-choice graph off its domain. Instead, as proved in the book's `220_simpler_img_thms.tex` (and specified in `010_logic.tex`), the class-parameter choice operation is constructed via:
   - a fixed injective class-function (global ranking) $F : V \hookrightarrow \mathrm{On}$,
   - class comprehension forming the nonempty ordinal image $F[A] \subseteq \mathrm{On}$, and
   - the least-ordinal principle picking $\mu = \bigcap F[A] \in F[A]$ and returning its unique preimage $x \in A$ with $F(x) = \mu$, while assigning the **proper-class default** $\tau_{\mathrm{class}}(\emptyset) = V \notin V$ when $A = \emptyset$ (so that $\tau_{\mathrm{class}}(A) \in V \iff A \neq \emptyset$).

---

## 3. The Obelisk Compiler: Check, Do Not Execute

### 3.1 Verification Pipeline
```text
            [Obelisk Source Program / Proof Certificate]
                            │
                            ▼
           [Lexer & Parser: Concrete SML / Kernel Syntax]
                            │
                            ▼
           [Elaborator & Syntactic AST Construction]
                            │
                            ▼
       [Static Kernel Checker: newchecker.ML / DependentTypeChecker.check]
        - Checks inference steps & typing rules: Γ ⊢ term : Type
        - Verifies definitional / syntactic conversion: Type ≡ TargetStatement
        - Validates explicit axiom & rule applications
                            │
                            ▼
               ┌────────────────────────┐
               │  DOES THE PROOF CHECK? │
               └───────────┬────────────┘
                           │
             ┌─────────────┴─────────────┐
             ▼                           ▼
           [YES]                       [NO]
    Theorem is Proven & Verified  Type Error / Rejection
             │
             ▼
  [Dedukti / Lambdapi Certificate Export]
    (de Bruijn criterion compliance)
             │
             ▼
     [END OF PIPELINE]
   (NO BYTECODE PRODUCED)
```

### 3.2 Complexity of Static Proof Checking vs. Bytecode Absence
- **Why Bytecode Is Never Emitted:** In Obelisk, proof terms are **deductive certificates**, not programs intended for runtime execution. Emitting bytecode is unnecessary for formal verification and is omitted by architectural design.
- **Complexity of Checking Is Determined by the Conversion & Step Discipline, Not by Omitting Bytecode:** Simply refraining from emitting bytecode does *not* by itself guarantee that typechecking runs in polynomial time. In a dependent type checker (`DependentTypeChecker.check` using `DependentEval.whnf`), checking definitional equality (`conv`) can perform arbitrary $\beta/\delta$-reduction work whose complexity depends on the reduction cost model of the terms being compared. By contrast, in Variant 1 (`newchecker.ML`), where every inference rule (`ModusPonens`, `Gen`, `DefMetaInstantiation`) is supplied with explicit syntactic AST arguments and checked by structural equality without open-ended normalization search, each rule step is a bounded structural tree comparison. Any complexity claim for Variant 2 must therefore be stated relative to the explicit cost of `whnf`/`conv` on the supplied proof terms rather than inferred from the absence of a bytecode back-end.

---

## 4. Operational Invariants for All Developers & Agents

1. **Never construct a bytecode VM or JIT.** Obelisk is a formal proof verifier; bytecode emission is out of scope by design.
2. **Preserve Classical Logic and Choice as Project Foundations.** Retain LEM and the project's Choice / Size-Limitation axioms (`AxmSizeLimitation` `3.43`, `DefTightClass` `3.47`, `ax_global_choice`), while accurately distinguishing results that require Choice (such as Zermelo well-ordering and Zorn's lemma) from those that do not (such as ordinal induction/recursion and Burali-Forti).
3. **Keep Checking, Normalization, and Canonicity Distinct:** Do not conflate failure of canonicity in the presence of opaque classical/choice constants with non-termination of reduction (`010_logic.tex`).
4. **Independent Export:** Soundness is audited via de Bruijn criterion compliance (`export/obelisk_theorems.lp` and `generated/theory_db.json`).
