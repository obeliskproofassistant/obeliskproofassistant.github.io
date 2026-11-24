<!-- AUTO-GENERATED FILE -- DO NOT EDIT DIRECTLY BY AI OR HAND.
     Source files: set_theory_prover/program/newchecker.ML,
                   set_theory_prover/program/types/typetheory.ML,
                   set_theory_prover/program/types/foundations.ML,
                   set_theory_prover/program/types/entries.ML
     Generator:    set_theory_prover/program/html_generator.ML
     Regenerate:   cd /botworkspace/set_theory_prover/program && poly -q --use export_theory_db.ML
-->

# Obelisk Proof Assistant — Algorithmically Generated Entity Database (MKTD1-system / MKTD1-theory)

Agent-friendly Markdown edition generated directly from `set_theory_prover/program/newchecker.ML` and `types/entries.ML` via `html_generator.ML` for **MKTD1-system (MKTD1-prover, MKTD1-theory, MKTD1-framework)** without HTML UI clutter.

- **Machine-Readable JSON Database:** [theory_db.json](theory_db.json)
- **MKTD2-system Formulas-as-Types Markdown:** [nbg_library.md](nbg_library.md)
- **MKTD2-system JSON Database:** [nbg_library.json](nbg_library.json)
- **Plain-Text Specification:** [output.txt](output.txt)

## 1. Propositional Logic (1.01-1.15) (1.01-1.15)

Classical propositional calculus axiom schemas (A01-A13) and Modus Ponens.

### 1.01 `AxmPropWeakening` — A01 (Axiom)

- **Identifier:** `AxmPropWeakening` (entry `1.01`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(⟦𝛂⟧—→(⟦𝛃⟧—→⟦𝛂⟧))`
- **Scheme of Types (Unicode):** `(⟦[𝛂@Fm.Expression]⟧—→(⟦[𝛃@Fm.Expression]⟧—→⟦[𝛂@Fm.Expression]⟧))`
- **Proof Constructor:** `PA1_prf (Γ, A, B)`
- **Judgements:** `[(𝛂:Fm), (𝛃:Fm)]`
- **Standalone Certificate:** [proofs/AxmPropWeakening.html](proofs/AxmPropWeakening.html)

### 1.02 `AxmPropFrege` — A02 (Axiom)

- **Identifier:** `AxmPropFrege` (entry `1.02`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `((⟦𝛂⟧—→(⟦𝛃⟧—→⟦𝛄⟧))—→((⟦𝛂⟧—→⟦𝛃⟧)—→(⟦𝛂⟧—→⟦𝛄⟧)))`
- **Scheme of Types (Unicode):** `((⟦[𝛂@Fm.Expression]⟧—→(⟦[𝛃@Fm.Expression]⟧—→⟦[𝛄@Fm.Expression]⟧))—→((⟦[𝛂@Fm.Expression]⟧—→⟦[𝛃@Fm.Expression]⟧)—→(⟦[𝛂@Fm.Expression]⟧—→⟦[𝛄@Fm.Expression]⟧)))`
- **Proof Constructor:** `PA2_prf (Γ, A, B, C)`
- **Judgements:** `[(𝛂:Fm), (𝛃:Fm), (𝛄:Fm)]`
- **Standalone Certificate:** [proofs/AxmPropFrege.html](proofs/AxmPropFrege.html)

### 1.03 `AxmPropConjLeft` — A03 (Axiom)

- **Identifier:** `AxmPropConjLeft` (entry `1.03`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `((⟦𝛂⟧∧⟦𝛃⟧)—→⟦𝛂⟧)`
- **Scheme of Types (Unicode):** `((⟦[𝛂@Fm.Expression]⟧∧⟦[𝛃@Fm.Expression]⟧)—→⟦[𝛂@Fm.Expression]⟧)`
- **Proof Constructor:** `PA3_prf (Γ, A, B)`
- **Judgements:** `[(𝛂:Fm), (𝛃:Fm)]`
- **Standalone Certificate:** [proofs/AxmPropConjLeft.html](proofs/AxmPropConjLeft.html)

### 1.04 `AxmPropConjRight` — A04 (Axiom)

- **Identifier:** `AxmPropConjRight` (entry `1.04`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `((⟦𝛂⟧∧⟦𝛃⟧)—→⟦𝛃⟧)`
- **Scheme of Types (Unicode):** `((⟦[𝛂@Fm.Expression]⟧∧⟦[𝛃@Fm.Expression]⟧)—→⟦[𝛃@Fm.Expression]⟧)`
- **Proof Constructor:** `PA4_prf (Γ, A, B)`
- **Judgements:** `[(𝛂:Fm), (𝛃:Fm)]`
- **Standalone Certificate:** [proofs/AxmPropConjRight.html](proofs/AxmPropConjRight.html)

### 1.05 `AxmPropConjIntro` — A05 (Axiom)

- **Identifier:** `AxmPropConjIntro` (entry `1.05`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(⟦𝛂⟧—→(⟦𝛃⟧—→(⟦𝛂⟧∧⟦𝛃⟧)))`
- **Scheme of Types (Unicode):** `(⟦[𝛂@Fm.Expression]⟧—→(⟦[𝛃@Fm.Expression]⟧—→(⟦[𝛂@Fm.Expression]⟧∧⟦[𝛃@Fm.Expression]⟧)))`
- **Proof Constructor:** `PA5_prf (Γ, A, B)`
- **Judgements:** `[(𝛂:Fm), (𝛃:Fm)]`
- **Kernel Note:** Conjunction Introduction (⟦𝛂⟧ —→ (⟦𝛃⟧ —→ (⟦𝛂⟧ ∧ ⟦𝛃⟧))). Paired in the kernel with the biconditional equivalence definition DefIff (PIffDef_prf in 05_rules.ML: (((𝛂 —→ 𝛃) ∧ (𝛃 —→ 𝛂)) —→ (𝛂 ⟷ 𝛃)) ∧ ((𝛂 ⟷ 𝛃) —→ ((𝛂 —→ 𝛃) ∧ (𝛃 —→ 𝛂)))).
- **Standalone Certificate:** [proofs/AxmPropConjIntro.html](proofs/AxmPropConjIntro.html)

### 1.06 `AxmPropDisjLeft` — A06 (Axiom)

- **Identifier:** `AxmPropDisjLeft` (entry `1.06`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(⟦𝛂⟧—→(⟦𝛂⟧∨⟦𝛃⟧))`
- **Scheme of Types (Unicode):** `(⟦[𝛂@Fm.Expression]⟧—→(⟦[𝛂@Fm.Expression]⟧∨⟦[𝛃@Fm.Expression]⟧))`
- **Proof Constructor:** `PA6_prf (Γ, A, B)`
- **Judgements:** `[(𝛂:Fm), (𝛃:Fm)]`
- **Standalone Certificate:** [proofs/AxmPropDisjLeft.html](proofs/AxmPropDisjLeft.html)

### 1.07 `AxmPropDisjRight` — A07 (Axiom)

- **Identifier:** `AxmPropDisjRight` (entry `1.07`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(⟦𝛃⟧—→(⟦𝛂⟧∨⟦𝛃⟧))`
- **Scheme of Types (Unicode):** `(⟦[𝛃@Fm.Expression]⟧—→(⟦[𝛂@Fm.Expression]⟧∨⟦[𝛃@Fm.Expression]⟧))`
- **Proof Constructor:** `PA7_prf (Γ, A, B)`
- **Judgements:** `[(𝛂:Fm), (𝛃:Fm)]`
- **Standalone Certificate:** [proofs/AxmPropDisjRight.html](proofs/AxmPropDisjRight.html)

### 1.08 `AxmPropDisjElim` — A08 (Axiom)

- **Identifier:** `AxmPropDisjElim` (entry `1.08`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `((⟦𝛂⟧—→⟦𝛄⟧)—→((⟦𝛃⟧—→⟦𝛄⟧)—→((⟦𝛂⟧∨⟦𝛃⟧)—→⟦𝛄⟧)))`
- **Scheme of Types (Unicode):** `((⟦[𝛂@Fm.Expression]⟧—→⟦[𝛄@Fm.Expression]⟧)—→((⟦[𝛃@Fm.Expression]⟧—→⟦[𝛄@Fm.Expression]⟧)—→((⟦[𝛂@Fm.Expression]⟧∨⟦[𝛃@Fm.Expression]⟧)—→⟦[𝛄@Fm.Expression]⟧)))`
- **Proof Constructor:** `PA8_prf (Γ, A, B, C)`
- **Judgements:** `[(𝛂:Fm), (𝛃:Fm), (𝛄:Fm)]`
- **Standalone Certificate:** [proofs/AxmPropDisjElim.html](proofs/AxmPropDisjElim.html)

### 1.09 `AxmPropNegElim` — A09 (Axiom)

- **Identifier:** `AxmPropNegElim` (entry `1.09`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `((¬⟦𝛂⟧)—→(⟦𝛂⟧—→⊥))`
- **Scheme of Types (Unicode):** `((¬⟦[𝛂@Fm.Expression]⟧)—→(⟦[𝛂@Fm.Expression]⟧—→⊥))`
- **Proof Constructor:** `PA9_prf (Γ, A)`
- **Judgements:** `[(𝛂:Fm)]`
- **Kernel Note:** Negation Elimination (Contradiction to Bottom): (¬⟦𝛂⟧) —→ (⟦𝛂⟧ —→ ⊥).
- **Standalone Certificate:** [proofs/AxmPropNegElim.html](proofs/AxmPropNegElim.html)

### 1.10 `AxmPropNegIntro` — A10 (Axiom)

- **Identifier:** `AxmPropNegIntro` (entry `1.10`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `((⟦𝛂⟧—→⟦𝛃⟧)—→((⟦𝛂⟧—→¬⟦𝛃⟧)—→¬⟦𝛂⟧))`
- **Scheme of Types (Unicode):** `((⟦[𝛂@Fm.Expression]⟧—→⟦[𝛃@Fm.Expression]⟧)—→((⟦[𝛂@Fm.Expression]⟧—→¬⟦[𝛃@Fm.Expression]⟧)—→¬⟦[𝛂@Fm.Expression]⟧))`
- **Proof Constructor:** `PA10_prf (Γ, A, B)`
- **Judgements:** `[(𝛂:Fm), (𝛃:Fm)]`
- **Kernel Note:** Negation Introduction (Reductio Ad Absurdum): (⟦𝛂⟧ —→ ⟦𝛃⟧) —→ ((⟦𝛂⟧ —→ ¬⟦𝛃⟧) —→ ¬⟦𝛂⟧).
- **Standalone Certificate:** [proofs/AxmPropNegIntro.html](proofs/AxmPropNegIntro.html)

### 1.11 `AxmPropExFalso` — A11 (Axiom)

- **Identifier:** `AxmPropExFalso` (entry `1.11`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(⊥—→⟦𝛂⟧)`
- **Scheme of Types (Unicode):** `(⊥—→⟦[𝛂@Fm.Expression]⟧)`
- **Proof Constructor:** `PA11_prf (Γ, A)`
- **Judgements:** `[(𝛂:Fm)]`
- **Standalone Certificate:** [proofs/AxmPropExFalso.html](proofs/AxmPropExFalso.html)

### 1.12 `AxmPropExcludedMiddle` — A12 (Axiom)

- **Identifier:** `AxmPropExcludedMiddle` (entry `1.12`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(⟦𝛂⟧∨¬⟦𝛂⟧)`
- **Scheme of Types (Unicode):** `(⟦[𝛂@Fm.Expression]⟧∨¬⟦[𝛂@Fm.Expression]⟧)`
- **Proof Constructor:** `PA12_prf (Γ, A)`
- **Judgements:** `[(𝛂:Fm)]`
- **Standalone Certificate:** [proofs/AxmPropExcludedMiddle.html](proofs/AxmPropExcludedMiddle.html)

### 1.13 `AxmPropVerum` — A13 (Axiom)

- **Identifier:** `AxmPropVerum` (entry `1.13`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `⊤`
- **Scheme of Types (Unicode):** `⊤`
- **Proof Constructor:** `PA13_prf (Γ)`
- **Kernel Note:** Verum / Truth Introduction Axiom (⊢ ⊤).
- **Standalone Certificate:** [proofs/AxmPropVerum.html](proofs/AxmPropVerum.html)

### 1.14 `RulModusPonens` — Modus Ponens (Inference Rule)

- **Identifier:** `RulModusPonens` (entry `1.14`, kind: `Inference Rule`, status: `Primitive / Derived Rule (Kernel)`)
- **Formula (Unicode):** `(⟦𝛂⟧, (⟦𝛂⟧—→⟦𝛃⟧) ─── ⟦𝛃⟧)`
- **Scheme of Types (Unicode):** `(⟦[𝛂@Fm.Expression]⟧, (⟦[𝛂@Fm.Expression]⟧—→⟦[𝛃@Fm.Expression]⟧) ─── ⟦[𝛃@Fm.Expression]⟧)`
- **Proof Constructor:** `PMP_prf (p, q)`
- **Judgements:** `[(𝛂:Fm), (𝛃:Fm)]`
- **Standalone Certificate:** [proofs/RulModusPonens.html](proofs/RulModusPonens.html)

### 1.15 `DefIff` — Logical bi-implication (equivalence) connective (Definition)

- **Identifier:** `DefIff` (entry `1.15`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `((⟦𝛂⟧←→⟦𝛃⟧)←→((⟦𝛂⟧—→⟦𝛃⟧)∧(⟦𝛃⟧—→⟦𝛂⟧)))`
- **Scheme of Types (Unicode):** `((⟦[𝛂@Fm.Expression]⟧←→⟦[𝛃@Fm.Expression]⟧)←→((⟦[𝛂@Fm.Expression]⟧—→⟦[𝛃@Fm.Expression]⟧)∧(⟦[𝛃@Fm.Expression]⟧—→⟦[𝛂@Fm.Expression]⟧)))`
- **Proof Constructor:** `PIffDef_prf (Γ, 𝛂, 𝛃)`
- **Judgements:** `[(𝛂:Fm), (𝛃:Fm)]`
- **Kernel Note:** Conservative propositional definition (DefIff, PIffDef_prf in 05_rules.ML): defines logical bi-implication (⟦𝛂⟧ ⟷ ⟦𝛃⟧) as the conjunction of mutual implications ((⟦𝛂⟧ —→ ⟦𝛃⟧) ∧ (⟦𝛃⟧ —→ ⟦𝛂⟧)).
- **Standalone Certificate:** [proofs/DefIff.html](proofs/DefIff.html)

## 2. Predicate Logic (2.01-2.06) (2.01-2.06)

Quantifier instantiation, variable-binding abstraction rules, and non-empty discourse domain over Classes in MKTD1-theory.

### 2.01 `AxmDiscourseNonEmpty` — Discourse domain is non-empty (admissible) (Axiom)

- **Identifier:** `AxmDiscourseNonEmpty` (entry `2.01`, kind: `Axiom`, status: `Admissible / Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(∃(K:Class)⊤)`
- **Scheme of Types (Unicode):** `(∃([K@Variable]:[Class@Type])⊤)`
- **Proof Constructor:** `PA0_prf (x)`
- **Kernel Note:** Admissible axiom: retained as an axiom for structural clarity, though derivable in the kernel from 1.13 AxmPropVerum (⊤) and 2.03 RulExistsInstantiation (Exists Introduction) using a free class variable K : Class (or constant ∅ : Class) as witness.
- **Standalone Certificate:** [proofs/AxmDiscourseNonEmpty.html](proofs/AxmDiscourseNonEmpty.html)

### 2.02 `RulForallInstantiation` — Forall Instantiation (Inference Rule)

- **Identifier:** `RulForallInstantiation` (entry `2.02`, kind: `Inference Rule`, status: `Primitive / Derived Rule (Kernel)`)
- **Formula (Unicode):** `((∀(⦃x⦄:⟦X⟧)⟦𝛗⟧)—→⟦𝛗[t/x]⟧)`
- **Scheme of Types (Unicode):** `((∀([⦃[x@Variable.Expression]⦄@Variable]:[⟦[X@Type.Expression.Expression]⟧@Type])⟦[𝛗@Fm.Expression]⟧)—→⟦[𝛗@Fm.Expression][[t@Term.Expression]/[x@Variable.Expression]]⟧)`
- **Proof Constructor:** `PForaL_prf (φ, T, x, p)`
- **Judgements:** `[(t:X.Expression), (X:Type), (x:Variable), (𝛗:Fm)]`
- **Side Condition:** `Fm.FFI((t:X.Expression),x,𝛗)`
- **Kernel Note:** Inference rule schema (0-premise Hilbert-style axiom schema) of Universal Instantiation ((∀(x:X)𝛗) —→ 𝛗[t/x], i.e., ((forall (x:X) phi) -> phi[t/x])) with substitution side condition Fm.FFI((t:X.Expression), x, 𝛗).
- **Standalone Certificate:** [proofs/RulForallInstantiation.html](proofs/RulForallInstantiation.html)

### 2.03 `RulExistsInstantiation` — Exists Introduction (Inference Rule)

- **Identifier:** `RulExistsInstantiation` (entry `2.03`, kind: `Inference Rule`, status: `Primitive / Derived Rule (Kernel)`)
- **Formula (Unicode):** `(⟦𝛗[t/x]⟧—→∃(⦃x⦄:⟦X⟧)⟦𝛗⟧)`
- **Scheme of Types (Unicode):** `(⟦[𝛗@Fm.Expression][[t@Term.Expression]/[x@Variable.Expression]]⟧—→∃([⦃[x@Variable.Expression]⦄@Variable]:[⟦[X@Type.Expression.Expression]⟧@Type])⟦[𝛗@Fm.Expression]⟧)`
- **Proof Constructor:** `PExisR_prf (φ, T, x, p)`
- **Judgements:** `[(t:X.Expression), (X:Type), (x:Variable), (𝛗:Fm)]`
- **Side Condition:** `Fm.FFI((t:X.Expression),x,𝛗)`
- **Kernel Note:** Inference rule schema (0-premise Hilbert-style axiom schema) of Existential Introduction (𝛗[t/x] —→ (∃(x:X)𝛗), i.e., (phi[t/x] -> (exists (x:X) phi))) with substitution side condition Fm.FFI((t:X.Expression), x, 𝛗). Dual to Universal Instantiation.
- **Standalone Certificate:** [proofs/RulExistsInstantiation.html](proofs/RulExistsInstantiation.html)

### 2.04 `RulForallAbstraction` — Forall Abstraction (Inference Rule)

- **Identifier:** `RulForallAbstraction` (entry `2.04`, kind: `Inference Rule`, status: `Primitive / Derived Rule (Kernel)`)
- **Formula (Unicode):** `((⟦𝛃⟧—→⟦𝛂⟧) ─── (⟦𝛃⟧—→∀(⦃x⦄:⟦X⟧)⟦𝛂⟧))`
- **Scheme of Types (Unicode):** `((⟦[𝛃@Fm.Expression]⟧—→⟦[𝛂@Fm.Expression]⟧) ─── (⟦[𝛃@Fm.Expression]⟧—→∀([⦃[x@Variable.Expression]⦄@Variable]:[⟦[X@Type.Expression.Expression]⟧@Type])⟦[𝛂@Fm.Expression]⟧))`
- **Proof Constructor:** `PForaR_prf (φ, x, x', T, p)`
- **Judgements:** `[(X:Type), (x:Variable), (𝛂:Fm), (𝛃:Fm)]`
- **Side Condition:** `NFV(X,x,(𝛃:Fm))`
- **Kernel Note:** Inference rule schema of Universal Abstraction (Bernays' first quantifier rule, specialized to theorem derivations with empty undischarged context Γ = []): from ⊢ 𝛃 —→ 𝛂 infer ⊢ 𝛃 —→ ∀(x:X)𝛂, with formula freshness side condition NFV(X, x, 𝛃) (x not free in 𝛃). Under non-empty contexts Γ, the kernel rule PForaR_prf additionally enforces ¬Ctx.IFV(x, Γ).
- **Standalone Certificate:** [proofs/RulForallAbstraction.html](proofs/RulForallAbstraction.html)

### 2.05 `RulExistsAbstraction` — Exists Abstraction (Inference Rule)

- **Identifier:** `RulExistsAbstraction` (entry `2.05`, kind: `Inference Rule`, status: `Primitive / Derived Rule (Kernel)`)
- **Formula (Unicode):** `((⟦𝛂⟧—→⟦𝛃⟧) ─── ((∃(⦃x⦄:⟦X⟧)⟦𝛂⟧)—→⟦𝛃⟧))`
- **Scheme of Types (Unicode):** `((⟦[𝛂@Fm.Expression]⟧—→⟦[𝛃@Fm.Expression]⟧) ─── ((∃([⦃[x@Variable.Expression]⦄@Variable]:[⟦[X@Type.Expression.Expression]⟧@Type])⟦[𝛂@Fm.Expression]⟧)—→⟦[𝛃@Fm.Expression]⟧))`
- **Proof Constructor:** `PExisL_prf (φ, x, x', T, p)`
- **Judgements:** `[(X:Type), (x:Variable), (𝛂:Fm), (𝛃:Fm)]`
- **Side Condition:** `NFV(X,x,(𝛃:Fm))`
- **Kernel Note:** Inference rule schema of Existential Elimination (Bernays' second quantifier rule, specialized to theorem derivations with empty undischarged context Γ = []): from ⊢ 𝛂 —→ 𝛃 infer ⊢ (∃(x:X)𝛂) —→ 𝛃, with formula freshness side condition NFV(X, x, 𝛃) (x not free in 𝛃). Under non-empty contexts Γ, the kernel rule PExisL_prf additionally enforces ¬Ctx.IFV(x, Γ).
- **Standalone Certificate:** [proofs/RulExistsAbstraction.html](proofs/RulExistsAbstraction.html)

### 2.06 `RulGeneralisation` — Generalisation (admissible rule) (Inference Rule)

- **Identifier:** `RulGeneralisation` (entry `2.06`, kind: `Inference Rule`, status: `Admissible Rule (Kernel, Γ = [])`)
- **Formula (Unicode):** `(⟦𝛂⟧ ─── (∀(⦃x⦄:⟦X⟧)⟦𝛂⟧))`
- **Scheme of Types (Unicode):** `(⟦[𝛂@Fm.Expression]⟧ ─── (∀([⦃[x@Variable.Expression]⦄@Variable]:[⟦[X@Type.Expression.Expression]⟧@Type])⟦[𝛂@Fm.Expression]⟧))`
- **Proof Constructor:** `PGenR_prf (φ, x, x', Class, PForaR_prf (φ, x, x', Class, p))`
- **Judgements:** `[(x:Variable), (X:Type), (𝛂:Fm)]`
- **Kernel Note:** Admissible theorem-level inference rule schema of Generalisation (specialized to empty undischarged hypothesis context Γ = [], where ¬Ctx.IFV(x, []) holds vacuously): from theorem ⊢ 𝛂 infer ⊢ ∀(x:X)𝛂 (derivable from 1.13 AxmPropVerum and 2.04 RulForallAbstraction with 𝛃 := ⊤). For derivations under arbitrary contexts Γ, see 4.02 DefMetaGeneralisation, which explicitly requires the context freshness side condition ¬Ctx.IFV(v, Γ).
- **Standalone Certificate:** [proofs/RulGeneralisation.html](proofs/RulGeneralisation.html)

## 3. Set/Class-Theoretic Foundations (3.01-3.99) (3.01-3.99)

Impredicative Morse-Kelley (MKTD1-theory) class comprehension, sethood, ordinals, Dunaev pairs, cardinals, universes, and reflection.

### 3.01 `RulClassComprehension` — Class comprehension (Inference Rule)

- **Identifier:** `RulClassComprehension` (entry `3.01`, kind: `Inference Rule`, status: `Primitive / Derived Rule (Kernel)`)
- **Formula (Unicode):** `((⦃x⦄∈{⦃x⦄|⟦𝛗⟧})←→((⦃x⦄ set)∧⟦𝛗⟧))`
- **Scheme of Types (Unicode):** `(([⦃[x@Variable.Expression]⦄@Class.Expression]∈{[⦃[x@Variable.Expression]⦄@Class.Expression]|⟦[𝛗@Fm.Expression]⟧})←→(([⦃[x@Variable.Expression]⦄@Class.Expression] set)∧⟦[𝛗@Fm.Expression]⟧))`
- **Proof Constructor:** `PComprAx_prf (φ)`
- **Judgements:** `[(x:Variable), (𝛗:Fm)]`
- **Kernel Note:** Impredicative Morse-Kelley (MKTD1-theory) class comprehension schema for variable x: ((x ∈ {x | 𝛗}) ⟷ ((x set) ∧ 𝛗)), where 𝛗 : Fm may contain arbitrary class quantifiers. Note that the binder x inside {x | 𝛗} binds occurrences of x in 𝛗 while x on the left of ∈ and in (x set) is free; this diagonal variable-instance form is completely sound and yields the general term instance (k ∈ {x | 𝛗}) ⟷ ((k set) ∧ (let x = k in 𝛗)) via 4.06 AxmMetaClassComprehension under Fm.FFI((k:Class.Expression), x, 𝛗).
- **Standalone Certificate:** [proofs/RulClassComprehension.html](proofs/RulClassComprehension.html)

### 3.02 `DefIsSet` — “Is a set” predicate (Definition)

- **Identifier:** `DefIsSet` (entry `3.02`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(X:Class)((X set)←→(∃(Y:Class)(X∈Y))))`
- **Scheme of Types (Unicode):** `(∀([X@Variable]:[Class@Type])(([X@Class.Expression] set)←→(∃([Y@Variable]:[Class@Type])([X@Class.Expression]∈[Y@Class.Expression]))))`
- **Proof Constructor:** `PSetDef_prf (B, x)`
- **Kernel Note:** Standard conservative definition defining predicate (X set) ⟷ ∃(Y:Class)(X ∈ Y) (certified via KernelDefinitions :> KERNEL_DEFINITIONS). By the Conservativity Theorem for first-order logic, introducing a new predicate symbol via an explicit biconditional with no extra free variables on the right-hand side yields a conservative extension.
- **Standalone Certificate:** [proofs/DefIsSet.html](proofs/DefIsSet.html)

### 3.03 `DefIsProperClass` — “Is a proper class” predicate (Definition)

- **Identifier:** `DefIsProperClass` (entry `3.03`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(K:Class)((K proper)←→(¬(K set))))`
- **Scheme of Types (Unicode):** `(∀([K@Variable]:[Class@Type])(([K@Class.Expression] proper)←→(¬([K@Class.Expression] set))))`
- **Proof Constructor:** `TpProper (X)`
- **Standalone Certificate:** [proofs/DefIsProperClass.html](proofs/DefIsProperClass.html)

### 3.04 `DefEmptySet` — Empty set (Definition)

- **Identifier:** `DefEmptySet` (entry `3.04`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∅={x|⊥})`
- **Scheme of Types (Unicode):** `(∅={[x@Class.Expression]|⊥})`
- **Proof Constructor:** `CpEmptySet`
- **Standalone Certificate:** [proofs/DefEmptySet.html](proofs/DefEmptySet.html)

### 3.05 `DefUniversalClass` — Universal class (Definition)

- **Identifier:** `DefUniversalClass` (entry `3.05`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(V={x|⊤})`
- **Scheme of Types (Unicode):** `(V={[x@Class.Expression]|⊤})`
- **Proof Constructor:** `PUnivClassDef_prf (x)`
- **Standalone Certificate:** [proofs/DefUniversalClass.html](proofs/DefUniversalClass.html)

### 3.06 `DefSubclass` — Subclass relation (Definition)

- **Identifier:** `DefSubclass` (entry `3.06`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(X:Class)∀(Y:Class)((X⊆Y)←→(∀(a:Class)((a∈X)—→(a∈Y)))))`
- **Scheme of Types (Unicode):** `(∀([X@Variable]:[Class@Type])∀([Y@Variable]:[Class@Type])(([X@Class.Expression]⊆[Y@Class.Expression])←→(∀([a@Variable]:[Class@Type])(([a@Class.Expression]∈[X@Class.Expression])—→([a@Class.Expression]∈[Y@Class.Expression])))))`
- **Proof Constructor:** `PSubDef_prf (A, B, x)`
- **Standalone Certificate:** [proofs/DefSubclass.html](proofs/DefSubclass.html)

### 3.07 `ThmEmptySetIsSubclass` — Example: “The empty class is a subclass of any class” statement (Theorem)

- **Identifier:** `ThmEmptySetIsSubclass` (entry `3.07`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `(∀(X:Class)(∅⊆X))`
- **Scheme of Types (Unicode):** `(∀([X@Variable]:[Class@Type])(∅⊆[X@Class.Expression]))`
- **Proof Constructor:** `PForaR_prf (Γ, X, X, Class, PMP_prf (PForaR_prf (Γ, z, z, Class, PImplR_prf (PMP_prf (PA11_prf (Γ, z ∈ ∅), PIdent_prf (z ∈ ∅)))), PSubDef_prf (∅, X, z)))`
- **Axioms Used:** `AxmLeftInSound, RulClassComprehension, AxmPropExFalso | Definitions Used: DefEmptySet, DefIff, DefSubclass | Kernel Prf Nodes: 95`
- **Kernel Note:** Derived theorem in Variant 1 from DefSubclass, DefEmptySet, and AxmPropExFalso; machine-checked as thm_26_emptyset_is_subclass and thm_95_emptyset_subset_all in Variant 2.
- **Standalone Certificate:** [proofs/ThmEmptySetIsSubclass.html](proofs/ThmEmptySetIsSubclass.html)

### 3.08 `AxmLeftInSound` — “Membership respects equality in right argument (container class)” (admissible) (Axiom)

- **Identifier:** `AxmLeftInSound` (entry `3.08`, kind: `Axiom`, status: `Admissible / Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(∀(X:Class)∀(Y:Class)((X=Y)—→∀(z:Class)((z∈X)←→(z∈Y))))`
- **Scheme of Types (Unicode):** `(∀([X@Variable]:[Class@Type])∀([Y@Variable]:[Class@Type])(([X@Class.Expression]=[Y@Class.Expression])—→∀([z@Variable]:[Class@Type])(([z@Class.Expression]∈[X@Class.Expression])←→([z@Class.Expression]∈[Y@Class.Expression]))))`
- **Proof Constructor:** `PLeftInSoundAx_prf (X, Y, Z)`
- **Kernel Note:** Admissible axiom: retained as a primitive kernel axiom (PLeftInSoundAx_prf, converse of 3.10 AxmExtensionality), though derivable from the kernel's class equality definition DefClassEq (EqDef: X = Y ⟷ (X ⊆ Y ∧ Y ⊆ X)) and 3.06 DefSubclass. (Note: the historical identifier AxmLeftInSound refers to X = Y appearing on the left of the implication arrow —→, whereas in the membership literals z ∈ X and z ∈ Y the equal classes X and Y stand in the right/container argument position.)
- **Standalone Certificate:** [proofs/AxmLeftInSound.html](proofs/AxmLeftInSound.html)

### 3.09 `AxmRightInSound` — “Membership respects equality in left argument (element)” (Axiom)

- **Identifier:** `AxmRightInSound` (entry `3.09`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(∀(X:Class)∀(Y:Class)((X=Y)—→∀(W:Class)((X∈W)←→(Y∈W))))`
- **Scheme of Types (Unicode):** `(∀([X@Variable]:[Class@Type])∀([Y@Variable]:[Class@Type])(([X@Class.Expression]=[Y@Class.Expression])—→∀([W@Variable]:[Class@Type])(([X@Class.Expression]∈[W@Class.Expression])←→([Y@Class.Expression]∈[W@Class.Expression]))))`
- **Proof Constructor:** `PRightInSoundAx_prf (X, Y, W)`
- **Kernel Note:** Element-position Leibniz congruence axiom for membership (PRightInSoundAx_prf): if X = Y, then X and Y belong to the same container classes W (X ∈ W ⟷ Y ∈ W). (Note: the historical identifier AxmRightInSound and its dual 3.08 AxmLeftInSound use the opposite left/right naming convention from the argument position of ∈ in the title.)
- **Standalone Certificate:** [proofs/AxmRightInSound.html](proofs/AxmRightInSound.html)

### 3.10 `AxmExtensionality` — “Extensionality” (Axiom)

- **Identifier:** `AxmExtensionality` (entry `3.10`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(∀(X:Class)∀(Y:Class)((∀(z:Class)((z∈X)←→(z∈Y)))—→(X=Y)))`
- **Scheme of Types (Unicode):** `(∀([X@Variable]:[Class@Type])∀([Y@Variable]:[Class@Type])((∀([z@Variable]:[Class@Type])(([z@Class.Expression]∈[X@Class.Expression])←→([z@Class.Expression]∈[Y@Class.Expression])))—→([X@Class.Expression]=[Y@Class.Expression])))`
- **Proof Constructor:** `PExtDef_prf (X, Y, z)`
- **Kernel Note:** Class Extensionality: ∀(X:Class)∀(Y:Class)((∀(z:Class)((z ∈ X) ⟷ (z ∈ Y))) —→ (X = Y)). Paired in the kernel with the conservative class-equality definition DefClassEq (EqDef / def_classeq_cert in 06_definitions.ML: ∀(A:Class)∀(B:Class)((A = B) ⟷ ((A ⊆ B) ∧ (B ⊆ A)))), which combines 3.10 AxmExtensionality with its converse 3.08 AxmLeftInSound via 3.06 DefSubclass.
- **Standalone Certificate:** [proofs/AxmExtensionality.html](proofs/AxmExtensionality.html)

### 3.11 `AxmIntensionality` — “Intensionality”(admissible) (Theorem)

- **Identifier:** `AxmIntensionality` (entry `3.11`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `(∀(X:Class)∀(Y:Class)(((X set)∧(Y set))—→((∀(W:Class)((X∈W)←→(Y∈W)))—→(X=Y))))`
- **Scheme of Types (Unicode):** `(∀([X@Variable]:[Class@Type])∀([Y@Variable]:[Class@Type])((([X@Class.Expression] set)∧([Y@Class.Expression] set))—→((∀([W@Variable]:[Class@Type])(([X@Class.Expression]∈[W@Class.Expression])←→([Y@Class.Expression]∈[W@Class.Expression])))—→([X@Class.Expression]=[Y@Class.Expression]))))`
- **Proof Constructor:** `thm_3_11_intensionality (PForaR_prf / PImplR_prf / PComprAx_prf / PLeftInSoundAx_prf)`
- **Axioms Used:** `RulClassComprehension | Definitions Used: DefSubclass, DefIff, DefClassEq | Kernel Prf Nodes: 277`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_3_11_intensionality : Thm, verified by Thm.checkPipeline and Thm.slow_check; historical anchor identifier AxmIntensionality retained for link stability): if X and Y are sets and belong to the same classes W, instantiating W with the singleton comprehension class { u : Class | u = X } yields Y = X and hence X = Y.
- **Standalone Certificate:** [proofs/AxmIntensionality.html](proofs/AxmIntensionality.html)

### 3.12 `AxmHeredity` — “Heredity”(a subclass of a set is also a set) (Axiom)

- **Identifier:** `AxmHeredity` (entry `3.12`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(∀(A:Class)∀(B:Class)(((A⊆B)∧(B set))—→(A set)))`
- **Scheme of Types (Unicode):** `(∀([A@Variable]:[Class@Type])∀([B@Variable]:[Class@Type])((([A@Class.Expression]⊆[B@Class.Expression])∧([B@Class.Expression] set))—→([A@Class.Expression] set)))`
- **Proof Constructor:** `PHeredityAx_prf (A, B)`
- **Standalone Certificate:** [proofs/AxmHeredity.html](proofs/AxmHeredity.html)

### 3.13 `AxmExponent` — “Exponent”(powerclass of a set is also a set) (Axiom)

- **Identifier:** `AxmExponent` (entry `3.13`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(∀(X:Class)((X set)—→(𝒫(X) set)))`
- **Scheme of Types (Unicode):** `(∀([X@Variable]:[Class@Type])(([X@Class.Expression] set)—→(𝒫([X@Class.Expression]) set)))`
- **Proof Constructor:** `PPowSetAx_prf (X)`
- **Kernel Note:** Power-set sethood axiom (PPowSetAx_prf: ∀(A:Class)((A set) —→ (𝒫(A) set))). Paired in the kernel with the conservative powerclass definition 3.99 DefPowerClass (PowClassDef / def_power_class_cert in 06_definitions.ML: ∀(K:Class)(𝒫(K) = { x : Class | x ⊆ K })).
- **Standalone Certificate:** [proofs/AxmExponent.html](proofs/AxmExponent.html)

### 3.14 `AxmRegularity` — “Regularity”(any class containing its powerclass contains all sets) (Axiom)

- **Identifier:** `AxmRegularity` (entry `3.14`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(∀(X:Class)((𝒫(X)⊆X)—→(V⊆X)))`
- **Scheme of Types (Unicode):** `(∀([X@Variable]:[Class@Type])((𝒫([X@Class.Expression])⊆[X@Class.Expression])—→(V⊆[X@Class.Expression])))`
- **Proof Constructor:** `PEpsIndAx_prf (X)`
- **Kernel Note:** Kernel Form (Cumulative 𝒫-Induction): ∀(X:Class)((𝒫(X) ⊆ X) —→ (V ⊆ X)) (with the immediate corollary that V is the only subclass of V equal to its powerclass). Classically equivalent (via X = V \ A) to the textbook ∈-minimal-element Regularity / Foundation formulation ∀(A:Class)((A ≠ ∅) —→ ∃(x:Class)((x ∈ A) ∧ ((x ∩ A) = ∅))).
- **Standalone Certificate:** [proofs/AxmRegularity.html](proofs/AxmRegularity.html)

### 3.15 `DefTransitiveClass` — Transitivity predicate (Definition)

- **Identifier:** `DefTransitiveClass` (entry `3.15`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(A:Class)(Tr(A)←→(∀(B:Class)((B∈A)—→(B⊆A)))))`
- **Scheme of Types (Unicode):** `(∀([A@Variable]:[Class@Type])(Tr([A@Class.Expression])←→(∀([B@Variable]:[Class@Type])(([B@Class.Expression]∈[A@Class.Expression])—→([B@Class.Expression]⊆[A@Class.Expression])))))`
- **Proof Constructor:** `PTransDef_prf (A, B)`
- **Standalone Certificate:** [proofs/DefTransitiveClass.html](proofs/DefTransitiveClass.html)

### 3.16 `DefOrdinalClass` — Ordinality predicate (Definition)

- **Identifier:** `DefOrdinalClass` (entry `3.16`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(A:Class)(Ord(A)←→(Tr(A)∧∀(B:Class)((B∈A)—→Tr(B)))))`
- **Scheme of Types (Unicode):** `(∀([A@Variable]:[Class@Type])(Ord([A@Class.Expression])←→(Tr([A@Class.Expression])∧∀([B@Variable]:[Class@Type])(([B@Class.Expression]∈[A@Class.Expression])—→Tr([B@Class.Expression])))))`
- **Proof Constructor:** `TpOrd (X)`
- **Standalone Certificate:** [proofs/DefOrdinalClass.html](proofs/DefOrdinalClass.html)

### 3.17 `DefClassOfOrdinals` — Class of all ordinal sets(ordinal numbers) (Definition)

- **Identifier:** `DefClassOfOrdinals` (entry `3.17`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(On={w|Ord(w)})`
- **Scheme of Types (Unicode):** `(On={[w@Class.Expression]|Ord([w@Class.Expression])})`
- **Proof Constructor:** `CpOn`
- **Standalone Certificate:** [proofs/DefClassOfOrdinals.html](proofs/DefClassOfOrdinals.html)

### 3.18 `ThmOrdinalsIsOrdinal` — The class of all ordinals is an ordinal class (Theorem)

- **Identifier:** `ThmOrdinalsIsOrdinal` (entry `3.18`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `Ord(On)`
- **Scheme of Types (Unicode):** `Ord(On)`
- **Proof Constructor:** `thm_on_is_ordinal (POrdDef_prf / PTransDef_prf / PSubDef_prf / PComprAx_prf)`
- **Axioms Used:** `AxmLeftInSound, RulClassComprehension | Definitions Used: DefIsSet, DefIff, DefClassOfOrdinals, DefOrdinalClass, DefTransitiveClass, DefSubclass | Kernel Prf Nodes: 555`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_on_is_ordinal and thm_on_is_transitive : Thm, verified by Thm.checkPipeline and Thm.slow_check); combined with thm_not_in_self, this directly yields the Burali-Forti properness theorem (thm_burali_forti_on_proper : Proper(On)).
- **Standalone Certificate:** [proofs/ThmOrdinalsIsOrdinal.html](proofs/ThmOrdinalsIsOrdinal.html)

### 3.19 `DefUnaryUnion` — Union of the elements of a class (Definition)

- **Identifier:** `DefUnaryUnion` (entry `3.19`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(K:Class)(⋃K={x|∃(y:Class)((y∈K)∧(x∈y))}))`
- **Scheme of Types (Unicode):** `(∀([K@Variable]:[Class@Type])(⋃[K@Class.Expression]={[x@Class.Expression]|∃([y@Variable]:[Class@Type])(([y@Class.Expression]∈[K@Class.Expression])∧([x@Class.Expression]∈[y@Class.Expression]))}))`
- **Proof Constructor:** `CpUnion (A)`
- **Standalone Certificate:** [proofs/DefUnaryUnion.html](proofs/DefUnaryUnion.html)

### 3.20 `DefUnaryIntersection` — Intersection of the elements of a class (Definition)

- **Identifier:** `DefUnaryIntersection` (entry `3.20`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(K:Class)(⋂K={x|∀(y:Class)((y∈K)—→(x∈y))}))`
- **Scheme of Types (Unicode):** `(∀([K@Variable]:[Class@Type])(⋂[K@Class.Expression]={[x@Class.Expression]|∀([y@Variable]:[Class@Type])(([y@Class.Expression]∈[K@Class.Expression])—→([x@Class.Expression]∈[y@Class.Expression]))}))`
- **Proof Constructor:** `CpInter (A)`
- **Standalone Certificate:** [proofs/DefUnaryIntersection.html](proofs/DefUnaryIntersection.html)

### 3.21 `DefBigDomain` — Domain (includes arguments with proper class values) (Definition)

- **Identifier:** `DefBigDomain` (entry `3.21`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(F:Class)(Dom(F)={x|∃(b:Class)((x,b)∈F)}))`
- **Scheme of Types (Unicode):** `(∀([F@Variable]:[Class@Type])(Dom([F@Class.Expression])={[x@Class.Expression]|∃([b@Variable]:[Class@Type])(([x@Class.Expression],[b@Class.Expression])∈[F@Class.Expression])}))`
- **Proof Constructor:** `CpDom (R)`
- **Standalone Certificate:** [proofs/DefBigDomain.html](proofs/DefBigDomain.html)

### 3.22 `DefClassConditional` — IF-THEN-ELSE-FI (Class conditional with NFV side condition and context turnstile) (Definition)

- **Identifier:** `DefClassConditional` (entry `3.22`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(Γ:Ctx)∀(v:Variable)∀(𝛙:Fm)∀(A:Class)∀(B:Class)((¬Fm.IFV(v,𝛙))—→(𝘞,Γ⊢‹⟦IF ⟦𝛙⟧ THEN A ELSE B FI⟧={⦃v⦄|(⟦𝛙⟧∧(⦃v⦄∈A))∨((¬⟦𝛙⟧)∧(⦃v⦄∈B))}›)))`
- **Scheme of Types (Unicode):** `(∀([Γ@Variable]:[Ctx@Type])∀([v@Variable]:[Variable@Type])∀([𝛙@Variable]:[Fm@Type])∀([A@Variable]:[Class@Type])∀([B@Variable]:[Class@Type])((¬Fm.IFV([v@Variable.Expression],[𝛙@Fm.Expression]))—→(𝘞,[Γ@Ctx.Expression]⊢‹⟦IF ⟦[𝛙@Fm.Expression]⟧ THEN [A@Class.Expression] ELSE [B@Class.Expression] FI⟧={[⦃[v@Variable.Expression]⦄@Class.Expression]|(⟦[𝛙@Fm.Expression]⟧∧([⦃[v@Variable.Expression]⦄@Class.Expression]∈[A@Class.Expression]))∨((¬⟦[𝛙@Fm.Expression]⟧)∧([⦃[v@Variable.Expression]⦄@Class.Expression]∈[B@Class.Expression]))}›)))`
- **Proof Constructor:** `CpIf (φ, A, B)`
- **Standalone Certificate:** [proofs/DefClassConditional.html](proofs/DefClassConditional.html)

### 3.23 `DefSimpleConditional` — simple_if (polymorphic non-dependent conditional over Type) (Definition)

- **Identifier:** `DefSimpleConditional` (entry `3.23`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `∀(Tₑ:Type), ((simple_if(⟦Tₑ⟧):Bool→(⟦Tₑ⟧→(⟦Tₑ⟧→⟦Tₑ⟧)))∧∀(t₁:⟦Tₑ⟧)∀(t₂:⟦Tₑ⟧)((simple_if(⟦Tₑ⟧,true,t₁,t₂)=t₁)∧(simple_if(⟦Tₑ⟧,false,t₁,t₂)=t₂)))`
- **Scheme of Types (Unicode):** `∀(Tₑ:Type), ((simple_if(⟦Tₑ⟧):Bool→(⟦Tₑ⟧→(⟦Tₑ⟧→⟦Tₑ⟧)))∧∀(t₁:⟦Tₑ⟧)∀(t₂:⟦Tₑ⟧)((simple_if(⟦Tₑ⟧,true,t₁,t₂)=t₁)∧(simple_if(⟦Tₑ⟧,false,t₁,t₂)=t₂)))`
- **Proof Constructor:** `EIf (φ, a, b)`
- **Kernel Note:** Ambient metalogical / type-theoretic non-dependent conditional schema over Type (bridging MKTD1's metalevel sort hierarchy with MKTD2-theory's typed function space; in the object-level class language of MKTD1-theory, see 3.22 DefClassConditional IF 𝛗 THEN A ELSE B FI and the kernel AST evaluation certificate def_simple_conditional_cert).
- **Standalone Certificate:** [proofs/DefSimpleConditional.html](proofs/DefSimpleConditional.html)

### 3.24 `DefDependentConditional` — if_dep (dependent conditional over (Bool → Type)) (Definition)

- **Identifier:** `DefDependentConditional` (entry `3.24`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `∀(Tₑ:Bool→Type), ((if_dep:Π(b:Bool),(⟦Tₑ(true)⟧→(⟦Tₑ(false)⟧→⟦Tₑ(b)⟧)))∧∀(b:Bool)∀(t₁:⟦Tₑ(true)⟧)∀(t₂:⟦Tₑ(false)⟧)((if_dep(b,t₁,t₂):⟦Tₑ(b)⟧)∧((if_dep(true,t₁,t₂)=t₁)∧(if_dep(false,t₁,t₂)=t₂))))`
- **Scheme of Types (Unicode):** `∀(Tₑ:Bool→Type), ((if_dep:Π(b:Bool),(⟦Tₑ(true)⟧→(⟦Tₑ(false)⟧→⟦Tₑ(b)⟧)))∧∀(b:Bool)∀(t₁:⟦Tₑ(true)⟧)∀(t₂:⟦Tₑ(false)⟧)((if_dep(b,t₁,t₂):⟦Tₑ(b)⟧)∧((if_dep(true,t₁,t₂)=t₁)∧(if_dep(false,t₁,t₂)=t₂))))`
- **Proof Constructor:** `EIfDep (φ, a, b)`
- **Kernel Note:** Ambient metalogical / type-theoretic dependent conditional schema over (Bool → Type) (bridging MKTD1's metalevel sort hierarchy with MKTD2-theory's dependent product Π(b:Bool); in the object-level class language of MKTD1-theory, see 3.22 DefClassConditional and the kernel AST evaluation certificate def_dependent_conditional_cert).
- **Standalone Certificate:** [proofs/DefDependentConditional.html](proofs/DefDependentConditional.html)

### 3.25 `DefValueAtArg` — Evaluation of a [function|class-function|family] (Definition)

- **Identifier:** `DefValueAtArg` (entry `3.25`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(F:Class)∀(a:Class)(F(a)=⟦IF (∃(s:Class)((a,s)∈F)) THEN ⋃{s|(a,s)∈F} ELSE V FI⟧))`
- **Scheme of Types (Unicode):** `(∀([F@Variable]:[Class@Type])∀([a@Variable]:[Class@Type])([F@Class.Expression]([a@Class.Expression])=⟦IF (∃([s@Variable]:[Class@Type])(([a@Class.Expression],[s@Class.Expression])∈[F@Class.Expression])) THEN ⋃{[s@Class.Expression]|([a@Class.Expression],[s@Class.Expression])∈[F@Class.Expression]} ELSE V FI⟧))`
- **Proof Constructor:** `CpValOf (F, X)`
- **Standalone Certificate:** [proofs/DefValueAtArg.html](proofs/DefValueAtArg.html)

### 3.26 `DefRelationalImage` — Image class (Definition)

- **Identifier:** `DefRelationalImage` (entry `3.26`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(f:Class)∀(A:Class)(f[A]={b|∃(a:Class)((a∈A)∧(f(a)=b))}))`
- **Scheme of Types (Unicode):** `(∀([f@Variable]:[Class@Type])∀([A@Variable]:[Class@Type])([f@Class.Expression][[A@Class.Expression]]={[b@Class.Expression]|∃([a@Variable]:[Class@Type])(([a@Class.Expression]∈[A@Class.Expression])∧([f@Class.Expression]([a@Class.Expression])=[b@Class.Expression]))}))`
- **Proof Constructor:** `CpImage (R, X)`
- **Standalone Certificate:** [proofs/DefRelationalImage.html](proofs/DefRelationalImage.html)

### 3.27 `DefIsSingleton` — “Has exactly one element” predicate (Definition)

- **Identifier:** `DefIsSingleton` (entry `3.27`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(s:Class)((s singleton)←→(∃!(x:Class)(x∈s))))`
- **Scheme of Types (Unicode):** `(∀([s@Variable]:[Class@Type])(([s@Class.Expression] singleton)←→(∃!([x@Variable]:[Class@Type])([x@Class.Expression]∈[s@Class.Expression]))))`
- **Proof Constructor:** `TpSingleton (X)`
- **Standalone Certificate:** [proofs/DefIsSingleton.html](proofs/DefIsSingleton.html)

### 3.28 `DefIsSetValued` — “Is set-valued” predicate (Definition)

- **Identifier:** `DefIsSetValued` (entry `3.28`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(F:Class)((F set-valued)←→(∀(x:Class)((x∈Dom(F))—→(F(x) set)))))`
- **Scheme of Types (Unicode):** `(∀([F@Variable]:[Class@Type])(([F@Class.Expression] set-valued)←→(∀([x@Variable]:[Class@Type])(([x@Class.Expression]∈Dom([F@Class.Expression]))—→([F@Class.Expression]([x@Class.Expression]) set)))))`
- **Proof Constructor:** `TpSetValued (F)`
- **Standalone Certificate:** [proofs/DefIsSetValued.html](proofs/DefIsSetValued.html)

### 3.29 `DefHasConcentratedValues` — “Has concentrated set values” predicate (Definition)

- **Identifier:** `DefHasConcentratedValues` (entry `3.29`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(F:Class)((F concentrated set values)←→(∀(x:Class)((x∈Dom(F))—→((F(x) set)—→∃!(y:Class)((x,y)∈F))))))`
- **Scheme of Types (Unicode):** `(∀([F@Variable]:[Class@Type])(([F@Class.Expression] concentrated set values)←→(∀([x@Variable]:[Class@Type])(([x@Class.Expression]∈Dom([F@Class.Expression]))—→(([F@Class.Expression]([x@Class.Expression]) set)—→∃!([y@Variable]:[Class@Type])(([x@Class.Expression],[y@Class.Expression])∈[F@Class.Expression]))))))`
- **Proof Constructor:** `TpConcentrated (F)`
- **Standalone Certificate:** [proofs/DefHasConcentratedValues.html](proofs/DefHasConcentratedValues.html)

### 3.30 `DefFlatValues` — “Has flat proper values” predicate (Definition)

- **Identifier:** `DefFlatValues` (entry `3.30`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(F:Class)((F flat proper values)←→(∀(x:Class)((x∈Dom(F))—→((F(x) proper)—→∀(b:Class)(((x,b)∈F)—→(b singleton)))))))`
- **Scheme of Types (Unicode):** `(∀([F@Variable]:[Class@Type])(([F@Class.Expression] flat proper values)←→(∀([x@Variable]:[Class@Type])(([x@Class.Expression]∈Dom([F@Class.Expression]))—→(([F@Class.Expression]([x@Class.Expression]) proper)—→∀([b@Variable]:[Class@Type])((([x@Class.Expression],[b@Class.Expression])∈[F@Class.Expression])—→([b@Class.Expression] singleton)))))))`
- **Proof Constructor:** `TpFlat (F)`
- **Standalone Certificate:** [proofs/DefFlatValues.html](proofs/DefFlatValues.html)

### 3.31 `DefFamily` — “Is a family” predicate (Definition)

- **Identifier:** `DefFamily` (entry `3.31`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(F:Class)((F family)←→((F concentrated set values)∧(F flat proper values))))`
- **Scheme of Types (Unicode):** `(∀([F@Variable]:[Class@Type])(([F@Class.Expression] family)←→(([F@Class.Expression] concentrated set values)∧([F@Class.Expression] flat proper values))))`
- **Proof Constructor:** `TpFamily (F)`
- **Standalone Certificate:** [proofs/DefFamily.html](proofs/DefFamily.html)

### 3.32 `DefClassFunction` — “Is a class-function” predicate (Definition)

- **Identifier:** `DefClassFunction` (entry `3.32`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(F:Class)((F class-function)←→((F family)∧(F set-valued))))`
- **Scheme of Types (Unicode):** `(∀([F@Variable]:[Class@Type])(([F@Class.Expression] class-function)←→(([F@Class.Expression] family)∧([F@Class.Expression] set-valued))))`
- **Proof Constructor:** `TpClassFunc (F)`
- **Standalone Certificate:** [proofs/DefClassFunction.html](proofs/DefClassFunction.html)

### 3.33 `DefInjectiveClassFunction` — “Is an injective class-function” predicate (Definition)

- **Identifier:** `DefInjectiveClassFunction` (entry `3.33`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(F:Class)((F injective)←→((F class-function)∧∀(x:Class)∀(y:Class)((((x∈Dom(F))∧(y∈Dom(F)))∧(F(x)=F(y)))—→(x=y)))))`
- **Scheme of Types (Unicode):** `(∀([F@Variable]:[Class@Type])(([F@Class.Expression] injective)←→(([F@Class.Expression] class-function)∧∀([x@Variable]:[Class@Type])∀([y@Variable]:[Class@Type])(((([x@Class.Expression]∈Dom([F@Class.Expression]))∧([y@Class.Expression]∈Dom([F@Class.Expression])))∧([F@Class.Expression]([x@Class.Expression])=[F@Class.Expression]([y@Class.Expression])))—→([x@Class.Expression]=[y@Class.Expression])))))`
- **Proof Constructor:** `TpInjective (F)`
- **Standalone Certificate:** [proofs/DefInjectiveClassFunction.html](proofs/DefInjectiveClassFunction.html)

### 3.34 `DefSetFunction` — “Is a function” predicate (Definition)

- **Identifier:** `DefSetFunction` (entry `3.34`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(f:Class)((f function)←→((f class-function)∧(f set))))`
- **Scheme of Types (Unicode):** `(∀([f@Variable]:[Class@Type])(([f@Class.Expression] function)←→(([f@Class.Expression] class-function)∧([f@Class.Expression] set))))`
- **Proof Constructor:** `TpFunc (f)`
- **Standalone Certificate:** [proofs/DefSetFunction.html](proofs/DefSetFunction.html)

### 3.35 `DefSemiSingleton` — “Semi-singleton” predicate (Definition)

- **Identifier:** `DefSemiSingleton` (entry `3.35`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(s:Class)((s semi-singleton)←→(∀(x:Class)∀(y:Class)(((x∈s)∧(y∈s))—→(x=y)))))`
- **Scheme of Types (Unicode):** `(∀([s@Variable]:[Class@Type])(([s@Class.Expression] semi-singleton)←→(∀([x@Variable]:[Class@Type])∀([y@Variable]:[Class@Type])((([x@Class.Expression]∈[s@Class.Expression])∧([y@Class.Expression]∈[s@Class.Expression]))—→([x@Class.Expression]=[y@Class.Expression])))))`
- **Proof Constructor:** `PSemiSingletonDef_prf (s, x, y)`
- **Standalone Certificate:** [proofs/DefSemiSingleton.html](proofs/DefSemiSingleton.html)

### 3.36 `DefSemiSingletonSubclass` — “Semi-singleton subset” relation (Definition)

- **Identifier:** `DefSemiSingletonSubclass` (entry `3.36`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(s:Class)∀(A:Class)((s sss A)←→((s semi-singleton)∧(s⊆A))))`
- **Scheme of Types (Unicode):** `(∀([s@Variable]:[Class@Type])∀([A@Variable]:[Class@Type])(([s@Class.Expression] sss [A@Class.Expression])←→(([s@Class.Expression] semi-singleton)∧([s@Class.Expression]⊆[A@Class.Expression]))))`
- **Proof Constructor:** `PSemiSingletonSubclassDef_prf (s, A)`
- **Standalone Certificate:** [proofs/DefSemiSingletonSubclass.html](proofs/DefSemiSingletonSubclass.html)

### 3.37 `ThmFamilyEvaluation` — Evaluation of “Family Value” via semi-singleton subsets (Theorem)

- **Identifier:** `ThmFamilyEvaluation` (entry `3.37`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `(∀(F:Class)∀(x:Class)(((F family)∧(x∈Dom(F)))—→(F(x)=⋃{s|(x,s)∈F})))`
- **Scheme of Types (Unicode):** `(∀([F@Variable]:[Class@Type])∀([x@Variable]:[Class@Type])((([F@Class.Expression] family)∧([x@Class.Expression]∈Dom([F@Class.Expression])))—→([F@Class.Expression]([x@Class.Expression])=⋃{[s@Class.Expression]|([x@Class.Expression],[s@Class.Expression])∈[F@Class.Expression]})))`
- **Proof Constructor:** `thm_3_37_family_eval_when_defined (PKernelDef_prf)`
- **Axioms Used:** `RulClassComprehension, AxmLeftInSound | Definitions Used: DefValueAtArg, DefBigDomain, DefFamily, DefUnaryUnion | Kernel Prf Nodes: 11`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_3_37_family_eval_when_defined : Thm, verified by Thm.checkPipeline and Thm.slow_check): for any family F and x ∈ Dom(F), unfolding 3.21 DefBigDomain (∃s((x, s) ∈ F)) and 3.25 DefValueAtArg evaluates the conditional branch to F(x) = ⋃{ s : Class | (x, s) ∈ F }.
- **Standalone Certificate:** [proofs/ThmFamilyEvaluation.html](proofs/ThmFamilyEvaluation.html)

### 3.38 `DefSigmaModel` — “Dependent Sum (Sigma-Type)” model over a family (Theorem)

- **Identifier:** `DefSigmaModel` (entry `3.38`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `(∀(B:Class)∀(x:Class)∀(y:Class)((B family)—→(((x∈Dom(B))∧(y∈B(x)))←→((x,y)∈{s|∃(a:Class)∃(b:Class)((s=(a,b))∧((a∈Dom(B))∧(b∈B(a))))}))))`
- **Scheme of Types (Unicode):** `(∀([B@Variable]:[Class@Type])∀([x@Variable]:[Class@Type])∀([y@Variable]:[Class@Type])(([B@Class.Expression] family)—→((([x@Class.Expression]∈Dom([B@Class.Expression]))∧([y@Class.Expression]∈[B@Class.Expression]([x@Class.Expression])))←→(([x@Class.Expression],[y@Class.Expression])∈{[s@Class.Expression]|∃([a@Variable]:[Class@Type])∃([b@Variable]:[Class@Type])(([s@Class.Expression]=([a@Class.Expression],[b@Class.Expression]))∧(([a@Class.Expression]∈Dom([B@Class.Expression]))∧([b@Class.Expression]∈[B@Class.Expression]([a@Class.Expression]))))}))))`
- **Proof Constructor:** `thm_3_38_sigma_model (PKernelDef_prf / PComprAx_prf / thm_dunaev_opair_injective)`
- **Axioms Used:** `RulClassComprehension, AxmLeftInSound, AxmPropExFalso, AxmOmegaIsSet, AxmHeredity, PairSetAx, AxmPropVerum, AxmRightInSound, AxmPropNegElim, AxmRegularity | Definitions Used: DefSigmaModel, DefIff, DefDunaevOrderedPair, DefBinaryUnion, DefEmptySet, DefSubclass, DefClassEq, DefUnorderedPair, DefSingletonSet, DefUniversalClass, DefPairfulClass, DefIsSet, DefPowerClass | Kernel Prf Nodes: 161572`
- **Kernel Note:** Machine-checked MKTD1-system membership characterization theorem (thm_3_38_sigma_model : Thm, verified by Thm.checkPipeline and Thm.slow_check; historical identifier DefSigmaModel retained for link stability alongside #ThmSigmaModel): characterizes membership of a Dunaev ordered pair (x, y) in the dependent sum comprehension class Σ(B) = { s : Class | ∃(a:Class)∃(b:Class)((s = (a, b)) ∧ ((a ∈ Dom(B)) ∧ (b ∈ B(a)))) } over a family B via 3.01 RulClassComprehension and Dunaev pair projection injectivity (3.76-3.78).
- **Standalone Certificate:** [proofs/DefSigmaModel.html](proofs/DefSigmaModel.html)

### 3.39 `DefPiPredicateModel` — “Dependent Product (Pi-Type)” predicate and section model (Theorem)

- **Identifier:** `DefPiPredicateModel` (entry `3.39`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `(∀(B:Class)∀(f:Class)(((B family)∧((f family)∧((Dom(f)=Dom(B))∧∀(u:Class)((u∈Dom(B))—→(f(u)∈B(u))))))—→∀(x:Class)((x∈Dom(B))—→(f(x)∈B(x)))))`
- **Scheme of Types (Unicode):** `(∀([B@Variable]:[Class@Type])∀([f@Variable]:[Class@Type])((([B@Class.Expression] family)∧(([f@Class.Expression] family)∧((Dom([f@Class.Expression])=Dom([B@Class.Expression]))∧∀([u@Variable]:[Class@Type])(([u@Class.Expression]∈Dom([B@Class.Expression]))—→([f@Class.Expression]([u@Class.Expression])∈[B@Class.Expression]([u@Class.Expression]))))))—→∀([x@Variable]:[Class@Type])(([x@Class.Expression]∈Dom([B@Class.Expression]))—→([f@Class.Expression]([x@Class.Expression])∈[B@Class.Expression]([x@Class.Expression])))))`
- **Proof Constructor:** `thm_3_39_pi_predicate_model (PForaR_prf / PImplR_prf / PForaL_prf)`
- **Axioms Used:** `(none -- pure sequent / definitional) | Kernel Prf Nodes: 25`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_3_39_pi_predicate_model : Thm, verified by Thm.checkPipeline and Thm.slow_check; historical identifier DefPiPredicateModel retained for link stability): in MKTD1-theory, the dependent product predicate (f : Π(B)) is a macro abbreviation for ((f family) ∧ ((Dom(f) = Dom(B)) ∧ ∀(u:Class)((u ∈ Dom(B)) —→ (f(u) ∈ B(u))))), so the Π-elimination law ((B family ∧ f : Π(B)) —→ ∀(x:Class)((x ∈ Dom(B)) —→ (f(x) ∈ B(x)))) unfolds after macro expansion to the displayed universal projection theorem (bridged to primitive dependent product types in MKTD2-system via thm_232_pi_family_model_dependent_product_bridge).
- **Standalone Certificate:** [proofs/DefPiPredicateModel.html](proofs/DefPiPredicateModel.html)

### 3.40 `DefCardLessEq` — “Is not strictly larger than” binary relation (Definition)

- **Identifier:** `DefCardLessEq` (entry `3.40`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(A:Class)∀(B:Class)((A≼B)←→(∃(f:Class)((((f class-function)∧(A⊆Dom(f)))∧(f[A]⊆B))∧(f injective)))))`
- **Scheme of Types (Unicode):** `(∀([A@Variable]:[Class@Type])∀([B@Variable]:[Class@Type])(([A@Class.Expression]≼[B@Class.Expression])←→(∃([f@Variable]:[Class@Type])(((([f@Class.Expression] class-function)∧([A@Class.Expression]⊆Dom([f@Class.Expression])))∧([f@Class.Expression][[A@Class.Expression]]⊆[B@Class.Expression]))∧([f@Class.Expression] injective)))))`
- **Proof Constructor:** `TpLessEq (A, B)`
- **Standalone Certificate:** [proofs/DefCardLessEq.html](proofs/DefCardLessEq.html)

### 3.41 `DefCardinality` — Class cardinality (Definition)

- **Identifier:** `DefCardinality` (entry `3.41`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(K:Class)(|K|=(On∩⋂{a|(a∈On)∧(K≼a)})))`
- **Scheme of Types (Unicode):** `(∀([K@Variable]:[Class@Type])(|[K@Class.Expression]|=(On∩⋂{[a@Class.Expression]|([a@Class.Expression]∈On)∧([K@Class.Expression]≼[a@Class.Expression])})))`
- **Proof Constructor:** `CpCard (X)`
- **Kernel Note:** Defines the von Neumann initial-ordinal cardinality |K| = On ∩ ⋂{ a : Class | (a ∈ On) ∧ (K ≼ a) }: the intersection ⋂ of the class of all ordinal sets a ∈ On into which K injects (K ≼ a), intersected with On. Because the intersection of a non-empty class of ordinals is its least element, |K| equals the least ordinal a ∈ On with K ≼ a (the initial ordinal of K) when K is a well-orderable set, and equals On ∩ ⋂∅ = On ∩ V = On when no ordinal set a ∈ On satisfies K ≼ a (i.e., when K is a proper class). Paired in the kernel with CardLessOrderAx (PCardLessOrderAx_prf in 06_definitions.ML: ∀A∀B((|A| ≺ |B|) ⟷ (A ≺ B))).
- **Standalone Certificate:** [proofs/DefCardinality.html](proofs/DefCardinality.html)

### 3.42 `DefCardLess` — “Is strictly smaller than” binary relation (Definition)

- **Identifier:** `DefCardLess` (entry `3.42`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(A:Class)∀(B:Class)((A≺B)←→(¬(B≼A))))`
- **Scheme of Types (Unicode):** `(∀([A@Variable]:[Class@Type])∀([B@Variable]:[Class@Type])(([A@Class.Expression]≺[B@Class.Expression])←→(¬([B@Class.Expression]≼[A@Class.Expression]))))`
- **Proof Constructor:** `TpLess (A, B)`
- **Kernel Note:** Strict cardinality order A ≺ B ⟷ ¬(B ≼ A). Paired in the kernel with the cardinal-order reflection rule CardLessOrderAx (PCardLessOrderAx_prf in 06_definitions.ML: ∀(A:Class)∀(B:Class)((|A| ≺ |B|) ⟷ (A ≺ B))), which embodies the Global Choice / von Neumann cardinal-equipollence principle |K| ≈ K connecting 3.41 DefCardinality with 3.43 AxmSizeLimitation.
- **Standalone Certificate:** [proofs/DefCardLess.html](proofs/DefCardLess.html)

### 3.43 `AxmSizeLimitation` — Size limitation axiom related statement (Axiom)

- **Identifier:** `AxmSizeLimitation` (entry `3.43`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(∀(X:Class)((X∈V)←→(|X|≺|V|)))`
- **Scheme of Types (Unicode):** `(∀([X@Variable]:[Class@Type])(([X@Class.Expression]∈V)←→(|[X@Class.Expression]|≺|V|)))`
- **Proof Constructor:** `PSizeLimAx_prf (X)`
- **Kernel Note:** Von Neumann Limitation of Size in initial-ordinal form (PSizeLimAx_prf): a class X is a set (X ∈ V) iff its initial-ordinal cardinality |X| (3.41 DefCardinality) is strictly smaller than |V| = On. Combined with the kernel's cardinal-order reflection rule CardLessOrderAx (PCardLessOrderAx_prf: (|A| ≺ |B|) ⟷ (A ≺ B), reflecting Global Choice V ≈ On), this yields (X ∈ V) ⟷ (X ≺ V) and hence Tight(V) in 3.69.
- **Standalone Certificate:** [proofs/AxmSizeLimitation.html](proofs/AxmSizeLimitation.html)

### 3.44 `DefHereditaryClass` — “Is hereditary” predicate (Definition)

- **Identifier:** `DefHereditaryClass` (entry `3.44`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(A:Class)(Hereditary(A)←→(∀(B:Class)((B∈A)—→∀(X:Class)((X⊆B)—→(X∈A))))))`
- **Scheme of Types (Unicode):** `(∀([A@Variable]:[Class@Type])(Hereditary([A@Class.Expression])←→(∀([B@Variable]:[Class@Type])(([B@Class.Expression]∈[A@Class.Expression])—→∀([X@Variable]:[Class@Type])(([X@Class.Expression]⊆[B@Class.Expression])—→([X@Class.Expression]∈[A@Class.Expression]))))))`
- **Proof Constructor:** `PHereditaryDef_prf (A, B, X)`
- **Standalone Certificate:** [proofs/DefHereditaryClass.html](proofs/DefHereditaryClass.html)

### 3.45 `DefPowerfulClass` — “Is powerful” predicate (Definition)

- **Identifier:** `DefPowerfulClass` (entry `3.45`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(U:Class)(Powerful(U)←→(∀(B:Class)((B∈U)—→(𝒫(B)∈U)))))`
- **Scheme of Types (Unicode):** `(∀([U@Variable]:[Class@Type])(Powerful([U@Class.Expression])←→(∀([B@Variable]:[Class@Type])(([B@Class.Expression]∈[U@Class.Expression])—→(𝒫([B@Class.Expression])∈[U@Class.Expression])))))`
- **Proof Constructor:** `PPowerfulDef_prf (U, B)`
- **Standalone Certificate:** [proofs/DefPowerfulClass.html](proofs/DefPowerfulClass.html)

### 3.46 `DefPairfulClass` — “Is pairful” predicate (Definition)

- **Identifier:** `DefPairfulClass` (entry `3.46`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(U:Class)(Pairful(U)←→(∀(A:Class)∀(B:Class)(((A∈U)∧(B∈U))—→({A,B}∈U)))))`
- **Scheme of Types (Unicode):** `(∀([U@Variable]:[Class@Type])(Pairful([U@Class.Expression])←→(∀([A@Variable]:[Class@Type])∀([B@Variable]:[Class@Type])((([A@Class.Expression]∈[U@Class.Expression])∧([B@Class.Expression]∈[U@Class.Expression]))—→({[A@Class.Expression],[B@Class.Expression]}∈[U@Class.Expression])))))`
- **Proof Constructor:** `PPairfulDef_prf (U, A, B)`
- **Standalone Certificate:** [proofs/DefPairfulClass.html](proofs/DefPairfulClass.html)

### 3.47 `DefTightClass` — “Is tight” predicate (Definition)

- **Identifier:** `DefTightClass` (entry `3.47`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(U:Class)(Tight(U)←→(∀(B:Class)((B⊆U)—→((B≺U)←→(B∈U))))))`
- **Scheme of Types (Unicode):** `(∀([U@Variable]:[Class@Type])(Tight([U@Class.Expression])←→(∀([B@Variable]:[Class@Type])(([B@Class.Expression]⊆[U@Class.Expression])—→(([B@Class.Expression]≺[U@Class.Expression])←→([B@Class.Expression]∈[U@Class.Expression]))))))`
- **Proof Constructor:** `PTightDef_prf (U, B)`
- **Standalone Certificate:** [proofs/DefTightClass.html](proofs/DefTightClass.html)

### 3.48 `DefSingletonSet` — Singleton set (Definition)

- **Identifier:** `DefSingletonSet` (entry `3.48`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(a:Class)({a}={x|x=a}))`
- **Scheme of Types (Unicode):** `(∀([a@Variable]:[Class@Type])({[a@Class.Expression]}={[x@Class.Expression]|[x@Class.Expression]=[a@Class.Expression]}))`
- **Proof Constructor:** `CpSingleton (x)`
- **Standalone Certificate:** [proofs/DefSingletonSet.html](proofs/DefSingletonSet.html)

### 3.49 `DefUnorderedPair` — Unordered pair (Definition)

- **Identifier:** `DefUnorderedPair` (entry `3.49`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(a:Class)∀(b:Class)({a,b}={x|(x=a)∨(x=b)}))`
- **Scheme of Types (Unicode):** `(∀([a@Variable]:[Class@Type])∀([b@Variable]:[Class@Type])({[a@Class.Expression],[b@Class.Expression]}={[x@Class.Expression]|([x@Class.Expression]=[a@Class.Expression])∨([x@Class.Expression]=[b@Class.Expression])}))`
- **Proof Constructor:** `CpUPair (x, y)`
- **Kernel Note:** Defines the unordered pair class {a, b} = { x : Class | (x = a) ∨ (x = b) }. Paired in the kernel with the unordered-pair sethood axiom rule PairSetAx (PPairSetAx_prf in 06_definitions.ML: ∀(A:Class)∀(B:Class)(((A set) ∧ (B set)) —→ ({A, B} set))).
- **Standalone Certificate:** [proofs/DefUnorderedPair.html](proofs/DefUnorderedPair.html)

### 3.50 `DefNaturalNumberModels` — Set-theoretic models of natural numbers (Definition)

- **Identifier:** `DefNaturalNumberModels` (entry `3.50`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(M:Class)(NatModel(M)←→((∅∈M)∧∀(n:Class)((n∈M)—→((n∪{n})∈M)))))`
- **Scheme of Types (Unicode):** `(∀([M@Variable]:[Class@Type])(NatModel([M@Class.Expression])←→((∅∈[M@Class.Expression])∧∀([n@Variable]:[Class@Type])(([n@Class.Expression]∈[M@Class.Expression])—→(([n@Class.Expression]∪{[n@Class.Expression]})∈[M@Class.Expression])))))`
- **Proof Constructor:** `PNatModelDef_prf (M, n)`
- **Kernel Note:** Formal conservative definition of a set-theoretic model of natural numbers NatModel(M) (Peano-Dedekind inductive structure under von Neumann successor): a class M is a model of natural numbers iff it contains the empty set (0) and is closed under the successor operation n ∪ {n}. (Logically synonymous up to bound variable renaming with the postfix successor-inductive class predicate (X Ind) in 3.55 DefInductiveClass; NatModel(M) is retained as a distinct prefix predicate symbol for model-theoretic statements.)
- **Standalone Certificate:** [proofs/DefNaturalNumberModels.html](proofs/DefNaturalNumberModels.html)

### 3.51 `DefClassLists` — General definition of lists of classes which applicable not only for sets, but for proper classes too (Definition)

- **Identifier:** `DefClassLists` (entry `3.51`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `∀(A:Class)∀(B:Class)∀(L:Class)∀(n:Class)((mark(A,n) = ({{0,n}} ∪ {({{{{a}}},n}:Class) | (a ∈ A)})) ∧ (([] = ∅) ∧ (([A] = mark(A,1)) ∧ (([A,B] = (mark(A,1) ∪ mark(B,2))) ∧ (((A,B) = [A,B]) ∧ ((pr1(L) = {a | ({{{{a}}},1} ∈ L)}) ∧ (pr2(L) = {b | ({{{{b}}},2} ∈ L)})))))))`
- **Scheme of Types (Unicode):** `∀(A:Class)∀(B:Class)∀(L:Class)∀(n:Class)((mark(A,n) = ({{0,n}} ∪ {({{{{a}}},n}:Class) | (a ∈ A)})) ∧ (([] = ∅) ∧ (([A] = mark(A,1)) ∧ (([A,B] = (mark(A,1) ∪ mark(B,2))) ∧ (((A,B) = [A,B]) ∧ ((pr1(L) = {a | ({{{{a}}},1} ∈ L)}) ∧ (pr2(L) = {b | ({{{{b}}},2} ∈ L)})))))))`
- **Proof Constructor:** `CpOPair (A, B)`
- **Kernel Note:** Defines Dunaev's tagged class lists and ordered pair (A, B) = [A, B] = mark(A, 1) ∪ mark(B, 2), where mark(A, n) = {{0, n}} ∪ { {{{{a}}}, n} | a ∈ A } tags each element a ∈ A as the unordered pair { {{{a}}}, n } = {{{{a}}}, n} (4 opening braces: unordered pair of the 3-fold singleton {{{a}}} and index n). Entry 3.76 DefDunaevOrderedPair expands this same definition into primitive set constructors, whereas 3.52 DefKuratowskiPair defines the distinct set-restricted Kuratowski pair symbol opairK(a, b) = {{a, a}, {a, b}}.
- **Standalone Certificate:** [proofs/DefClassLists.html](proofs/DefClassLists.html)

### 3.52 `DefKuratowskiPair` — Ordered pair(Kuratowsky's) (Definition)

- **Identifier:** `DefKuratowskiPair` (entry `3.52`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(a:Class)∀(b:Class)(opairK(a,b)={{a,a},{a,b}}))`
- **Scheme of Types (Unicode):** `(∀([a@Variable]:[Class@Type])∀([b@Variable]:[Class@Type])(opairK([a@Class.Expression],[b@Class.Expression])={{[a@Class.Expression],[a@Class.Expression]},{[a@Class.Expression],[b@Class.Expression]}}))`
- **Proof Constructor:** `CpKuratowskiPair (x, y)`
- **Kernel Note:** Historical set-restricted Kuratowski ordered pair opairK(a, b) = {{a, a}, {a, b}}, defined with the distinct kernel symbol opairK (CpSymbol("opairK", ...)) so it never collides with the canonical Dunaev ordered pair (A, B) (CpOPair in 3.51 DefClassLists and 3.76 DefDunaevOrderedPair, which remains sound when A or B is a proper class).
- **Standalone Certificate:** [proofs/DefKuratowskiPair.html](proofs/DefKuratowskiPair.html)

### 3.53 `DefBinaryUnion` — Binary union (Definition)

- **Identifier:** `DefBinaryUnion` (entry `3.53`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(A:Class)∀(B:Class)((A∪B)={x|(x∈A)∨(x∈B)}))`
- **Scheme of Types (Unicode):** `(∀([A@Variable]:[Class@Type])∀([B@Variable]:[Class@Type])(([A@Class.Expression]∪[B@Class.Expression])={[x@Class.Expression]|([x@Class.Expression]∈[A@Class.Expression])∨([x@Class.Expression]∈[B@Class.Expression])}))`
- **Proof Constructor:** `CpBinUnion (A, B)`
- **Kernel Note:** Special Def.: (x ∪ y) = ⋃{x,y} (set-restricted); General Def.: (A ∪ B) = {z | (z ∈ A) ∨ (z ∈ B)} (general class definition).
- **Standalone Certificate:** [proofs/DefBinaryUnion.html](proofs/DefBinaryUnion.html)

### 3.54 `DefBinaryIntersection` — Binary intersection (Definition)

- **Identifier:** `DefBinaryIntersection` (entry `3.54`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(A:Class)∀(B:Class)((A∩B)={x|(x∈A)∧(x∈B)}))`
- **Scheme of Types (Unicode):** `(∀([A@Variable]:[Class@Type])∀([B@Variable]:[Class@Type])(([A@Class.Expression]∩[B@Class.Expression])={[x@Class.Expression]|([x@Class.Expression]∈[A@Class.Expression])∧([x@Class.Expression]∈[B@Class.Expression])}))`
- **Proof Constructor:** `CpBinInter (A, B)`
- **Standalone Certificate:** [proofs/DefBinaryIntersection.html](proofs/DefBinaryIntersection.html)

### 3.55 `DefInductiveClass` — “Is successor-inductive (Peano-inductive)” predicate (Definition)

- **Identifier:** `DefInductiveClass` (entry `3.55`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(X:Class)(Ind(X)←→((∅∈X)∧∀(a:Class)((a∈X)—→((a∪{a})∈X)))))`
- **Scheme of Types (Unicode):** `(∀([X@Variable]:[Class@Type])(Ind([X@Class.Expression])←→((∅∈[X@Class.Expression])∧∀([a@Variable]:[Class@Type])(([a@Class.Expression]∈[X@Class.Expression])—→(([a@Class.Expression]∪{[a@Class.Expression]})∈[X@Class.Expression])))))`
- **Proof Constructor:** `TpInd (X)`
- **Kernel Note:** Successor-inductive (Peano 0-successor-inductive) in the narrowest sense: closed under 0 = ∅ and ordinal successor a |-> a ∪ {a}, as distinguished from transfinite ∈-induction (3.71 ThmTransitiveClassInduction) or cumulative 𝒫-induction (3.14 AxmRegularity).
- **Standalone Certificate:** [proofs/DefInductiveClass.html](proofs/DefInductiveClass.html)

### 3.56 `DefOmega` — The intersection class of all successor-inductive (Peano-inductive) classes is called omega (⊆-minimal successor-inductive class and smallest successor-inductive ordinal) (Definition)

- **Identifier:** `DefOmega` (entry `3.56`, kind: `Definition`, status: `Definitional (Conservative Under Set Existence, Kernel AST)`)
- **Formula (Unicode):** `(∀(x:Class)((x∈ω)←→(∀(Q:Class)(Ind(Q)—→(x∈Q)))))`
- **Scheme of Types (Unicode):** `(∀([x@Variable]:[Class@Type])(([x@Class.Expression]∈ω)←→(∀([Q@Variable]:[Class@Type])(Ind([Q@Class.Expression])—→([x@Class.Expression]∈[Q@Class.Expression])))))`
- **Proof Constructor:** `CpOmega`
- **Kernel Note:** By definition, ω is not only the smallest successor-inductive ordinal, but also the ⊆-minimal (least) element among all successor-inductive (Peano-inductive) classes in the subclass (⊆) order (Ind(ω) ∧ ∀(Q:Class), Ind(Q) —→ (ω ⊆ Q)), directly expressing simple countable mathematical (Peano) induction up to ω. Conservativity & Sethood Note: because (x ∈ Q) implies (x set) by 3.02 DefIsSet whenever at least one inductive class Q exists (such as On in 3.60 or ω under 3.57 AxmOmegaIsSet), the unguarded RHS ∀(Q:Class)(Ind(Q) —→ x ∈ Q) is equivalent in MKTD1-theory to the strict comprehension form ((x set) ∧ ∀(Q:Class)(Ind(Q) —→ x ∈ Q)); however, in a subtheory without set-existence axioms, omitting (x set) on the RHS makes ∅ ∈ ω (and hence ∅ set) derivable from DefOmega and DefInductiveClass alone. In our kernel proofs (universe_definitions.ML), ∅ set is derived explicitly from 3.57 AxmOmegaIsSet (ω set), 3.07 (∅ ⊆ ω), and 3.12 AxmHeredity. Similarly, the set-restricted intersection ω = ⋂{q | Ind(q)} over inductive sets q agrees with the general intersection over all inductive classes Q once an inductive set exists by 3.57 AxmOmegaIsSet. | Special Def.: ω = ⋂{q | Ind(q)} (set-restricted intersection over inductive sets, equivalent to the general form once an inductive set exists by 3.57 AxmOmegaIsSet); General Def.: ∀(x:Class), (x ∈ ω) ⟷ (∀(Q:Class), Ind(Q) —→ (x ∈ Q)).
- **Standalone Certificate:** [proofs/DefOmega.html](proofs/DefOmega.html)

### 3.57 `AxmOmegaIsSet` — “Infinity”(ω is a set) (Axiom)

- **Identifier:** `AxmOmegaIsSet` (entry `3.57`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(ω set)`
- **Scheme of Types (Unicode):** `(ω set)`
- **Proof Constructor:** `POmegaSetAx_prf`
- **Kernel Note:** Asserts that the ⊆-minimal successor-inductive (Peano-inductive) class ω is a set.
- **Standalone Certificate:** [proofs/AxmOmegaIsSet.html](proofs/AxmOmegaIsSet.html)

### 3.58 `ThmUniversalClassInductive` — Class of all sets is successor-inductive (Peano-inductive) (Theorem)

- **Identifier:** `ThmUniversalClassInductive` (entry `3.58`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `Ind(V)`
- **Scheme of Types (Unicode):** `Ind(V)`
- **Proof Constructor:** `thm_3_58_v_inductive (PAndR_prf / PForaR_prf / PPairSetAx_prf / PComprAx_prf)`
- **Axioms Used:** `AxmLeftInSound, RulClassComprehension, AxmPropExFalso, AxmOmegaIsSet, AxmHeredity, AxmPropVerum, AxmExponent, CardLessOrderAx, AxmSizeLimitation, PairSetAx, AxmRightInSound | Definitions Used: DefEmptySet, DefIff, DefSubclass, DefUniversalClass, DefHereditaryClass, DefPowerfulClass, DefCardLess, DefTightClass, DefUnorderedPair, DefPairfulClass, DefSingletonSet, DefClassEq, DefBinaryUnion, DefIsSet, DefUnaryUnion | Kernel Prf Nodes: 3985`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_3_58_v_inductive : Thm, verified by Thm.checkPipeline and Thm.slow_check): combines (1) base membership ∅ ∈ V (from 3.57 AxmOmegaIsSet, 3.07 ∅ ⊆ ω, and 3.12 AxmHeredity), (2) V Hereditary (3.12 AxmHeredity), V Powerful (3.13 AxmExponent), V Tight (3.43 AxmSizeLimitation and CardLessOrderAx), and V Pairful (3.49 DefUnorderedPair / PairSetAx), and (3) the successor-union identity ∀a ∈ V, ({a, {a}} ∈ V ∧ (a ∪ {a}) = ⋃{a, {a}}) (thm_step1b_succ_eq_union_pair), from which closure under a ∪ {a} follows by Limitation of Size / Tight(V) (and for ordinal/transitive sets a directly via a ∪ {a} ⊆ 𝒫(a) as in 3.60).
- **Standalone Certificate:** [proofs/ThmUniversalClassInductive.html](proofs/ThmUniversalClassInductive.html)

### 3.59 `ThmOmegaInductive` — Intersection of all successor-inductive (Peano-inductive) classes is a successor-inductive class itself (ω is the ⊆-least successor-inductive class) (Theorem)

- **Identifier:** `ThmOmegaInductive` (entry `3.59`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `Ind(ω)`
- **Scheme of Types (Unicode):** `Ind(ω)`
- **Proof Constructor:** `thm_3_59_omega_inductive (PKernelDef_prf / PAndR_prf / PForaR_prf)`
- **Axioms Used:** `(none -- pure sequent / definitional) | Definitions Used: DefInductiveClass, DefIff, DefOmega | Kernel Prf Nodes: 160`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_3_59_omega_inductive : Thm, verified by Thm.checkPipeline and Thm.slow_check): establishes that ω itself satisfies Ind(ω), making ω the ⊆-least (minimal) element among all successor-inductive classes in the ⊆ order. (Because 3.56 DefOmega quantifies directly over all inductive classes Q without a separate (x set) guard on the RHS, Ind(ω) follows from DefOmega and DefInductiveClass alone; sethood of ∅ and ω in downstream theorems is grounded in 3.57 AxmOmegaIsSet and 3.12 AxmHeredity.)
- **Standalone Certificate:** [proofs/ThmOmegaInductive.html](proofs/ThmOmegaInductive.html)

### 3.60 `ThmOrdinalsInductive` — Class of all ordinal numbers is successor-inductive (Peano-inductive) (Theorem)

- **Identifier:** `ThmOrdinalsInductive` (entry `3.60`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `Ind(On)`
- **Scheme of Types (Unicode):** `Ind(On)`
- **Proof Constructor:** `thm_3_60_on_inductive (PKernelDef_prf / PPowSetAx_prf / PHeredityAx_prf / PComprAx_prf)`
- **Axioms Used:** `AxmLeftInSound, RulClassComprehension, AxmPropExFalso, AxmOmegaIsSet, AxmHeredity, AxmExponent | Definitions Used: DefEmptySet, DefIff, DefSubclass, DefTransitiveClass, DefOrdinalClass, DefClassOfOrdinals, DefBinaryUnion, DefIsSet, DefPowerClass, DefSingletonSet, DefClassEq, DefInductiveClass | Kernel Prf Nodes: 2705`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_3_60_on_inductive : Thm, verified by Thm.checkPipeline and Thm.slow_check): proved without a separate union-set axiom by showing that for any transitive set a in On, (a u {a}) c= Pow(a), so AxmExponent (PowSetAx) and AxmHeredity (HeredityAx) yield Set(a u {a}), which combines with thm_ord_succ_is_ordinal to give (a u {a}) in On.
- **Standalone Certificate:** [proofs/ThmOrdinalsInductive.html](proofs/ThmOrdinalsInductive.html)

### 3.61 `ThmOmegaTransitive` — ω is transitive (Theorem)

- **Identifier:** `ThmOmegaTransitive` (entry `3.61`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `Tr(ω)`
- **Scheme of Types (Unicode):** `Tr(ω)`
- **Proof Constructor:** `thm_3_61_omega_transitive (PTransDef_prf / PSubDef_prf / PComprAx_prf)`
- **Axioms Used:** `AxmLeftInSound, RulClassComprehension, AxmPropExFalso, AxmOmegaIsSet, AxmHeredity, AxmRightInSound | Definitions Used: DefEmptySet, DefIff, DefSubclass, DefInductiveClass, DefOmega, DefTransitiveClass, DefOrdinalClass, DefIsSet, DefBinaryUnion, DefSingletonSet, DefClassEq | Kernel Prf Nodes: 2696`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_3_61_omega_transitive : Thm, verified by Thm.checkPipeline and Thm.slow_check): proved by Peano induction on the inductive class { a : Class | (a in ω) /\ ((a c= ω) /\ (a ordinal)) } via DefOmega.
- **Standalone Certificate:** [proofs/ThmOmegaTransitive.html](proofs/ThmOmegaTransitive.html)

### 3.62 `ThmOmegaOrdinal` — ω is ordinal (Theorem)

- **Identifier:** `ThmOmegaOrdinal` (entry `3.62`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `Ord(ω)`
- **Scheme of Types (Unicode):** `Ord(ω)`
- **Proof Constructor:** `thm_3_62_omega_ordinal (POrdDef_prf / PAndR_prf / PForaR_prf)`
- **Axioms Used:** `AxmLeftInSound, RulClassComprehension, AxmPropExFalso, AxmOmegaIsSet, AxmHeredity, AxmRightInSound | Definitions Used: DefEmptySet, DefIff, DefSubclass, DefInductiveClass, DefOmega, DefTransitiveClass, DefOrdinalClass, DefIsSet, DefBinaryUnion, DefSingletonSet, DefClassEq | Kernel Prf Nodes: 5419`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_3_62_omega_ordinal : Thm, verified by Thm.checkPipeline and Thm.slow_check): proved by Peano induction on { a : Class | (a in ω) /\ ((a c= ω) /\ (a ordinal)) } showing both Tr(ω) and that every element of ω is a transitive ordinal.
- **Standalone Certificate:** [proofs/ThmOmegaOrdinal.html](proofs/ThmOmegaOrdinal.html)

### 3.63 `ThmOmegaInOrdinals` — ω is in the class of all ordinal numbers (sets) (Theorem)

- **Identifier:** `ThmOmegaInOrdinals` (entry `3.63`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `(ω∈On)`
- **Scheme of Types (Unicode):** `(ω∈On)`
- **Proof Constructor:** `thm_3_63_omega_in_on (PMP_prf / POmegaSetAx_prf / PComprAx_prf)`
- **Axioms Used:** `AxmOmegaIsSet, AxmLeftInSound, RulClassComprehension, AxmPropExFalso, AxmHeredity, AxmRightInSound | Definitions Used: DefEmptySet, DefIff, DefSubclass, DefInductiveClass, DefOmega, DefTransitiveClass, DefOrdinalClass, DefIsSet, DefBinaryUnion, DefSingletonSet, DefClassEq, DefClassOfOrdinals | Kernel Prf Nodes: 5479`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_3_63_omega_in_on : Thm, verified by Thm.checkPipeline and Thm.slow_check): combines AxmOmegaIsSet (POmegaSetAx_prf) with Ord(ω) (thm_3_62_omega_ordinal) via DefClassOfOrdinals.
- **Standalone Certificate:** [proofs/ThmOmegaInOrdinals.html](proofs/ThmOmegaInOrdinals.html)

### 3.64 `DefIsCardinal` — “Is cardinal” predicate (Definition)

- **Identifier:** `DefIsCardinal` (entry `3.64`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(C:Class)(Card(C)←→(∃(K:Class)(|K|=C))))`
- **Scheme of Types (Unicode):** `(∀([C@Variable]:[Class@Type])(Card([C@Class.Expression])←→(∃([K@Variable]:[Class@Type])(|[K@Class.Expression]|=[C@Class.Expression]))))`
- **Proof Constructor:** `thm_3_64_is_cardinal_def (PKernelDef_prf)`
- **Kernel Note:** Conservative predicate definition (DefIsCardinal, def_is_cardinal_cert, PKernelDef_prf): a class C is a cardinal class iff C = |K| for some class K.
- **Standalone Certificate:** [proofs/DefIsCardinal.html](proofs/DefIsCardinal.html)

### 3.65 `ThmOmegaCardinal` — ω is cardinal (Theorem)

- **Identifier:** `ThmOmegaCardinal` (entry `3.65`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `Card(ω)`
- **Scheme of Types (Unicode):** `Card(ω)`
- **Proof Constructor:** `thm_3_65_omega_card_sub_on (PAndR_prf / POmegaSetAx_prf / PKernelDef_prf)`
- **Axioms Used:** `AxmOmegaIsSet, AxmLeftInSound, RulClassComprehension, AxmPropExFalso, AxmHeredity, AxmRightInSound | Definitions Used: DefEmptySet, DefIff, DefSubclass, DefInductiveClass, DefOmega, DefTransitiveClass, DefOrdinalClass, DefIsSet, DefBinaryUnion, DefSingletonSet, DefClassEq, DefClassOfOrdinals, DefCardinality, DefIsCardinal | Kernel Prf Nodes: 5488`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_3_65_omega_card_sub_on : Thm, verified by Thm.checkPipeline and Thm.slow_check): combines ω ∈ On (3.63 ThmOmegaInOrdinals) with 3.41 DefCardinality (|ω| = On ∩ ⋂{a | a ∈ On ∧ ω ≼ a} = ω by the finite-pigeonhole / initial-ordinal property of ω) and 3.64 DefIsCardinal.
- **Standalone Certificate:** [proofs/ThmOmegaCardinal.html](proofs/ThmOmegaCardinal.html)

### 3.66 `ThmOrdinalsCardinal` — On is a cardinal class (Theorem)

- **Identifier:** `ThmOrdinalsCardinal` (entry `3.66`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `Card(On)`
- **Scheme of Types (Unicode):** `Card(On)`
- **Proof Constructor:** `thm_3_66_on_card_sub_on (PIsCardinalDef_prf / PExisR_prf / PCardinalityDef_prf / PSizeLimAx_prf / PCardLessOrderAx_prf / PUnaryInterDef_prf / PEqDef_prf)`
- **Axioms Used:** `AxmLeftInSound, RulClassComprehension, AxmPropVerum, AxmSizeLimitation, CardLessOrderAx, AxmPropNegElim, AxmPropExFalso | Definitions Used: DefCardinality, DefBinaryIntersection, DefIff, DefIsSet, DefSubclass, DefUniversalClass, DefCardLess, DefUnaryIntersection, DefClassEq, DefIsCardinal | Kernel Prf Nodes: 1141`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_3_66_on_card_sub_on : Thm, verified by Thm.checkPipeline and Thm.slow_check with exact statement equality): proves (On cardinal) by taking K := V as the witness in 3.64 DefIsCardinal (∃K(|K| = On)). For every a ∈ S_V = {a | (a ∈ On) ∧ (V ≼ a)}, a ∈ On implies a set (3.02 DefIsSet) and hence a ∈ V (3.05 DefUniversalClass), which by 3.43 AxmSizeLimitation (PSizeLimAx_prf), CardLessOrderAx (PCardLessOrderAx_prf), and 3.42 DefCardLess yields a ≺ V ⟷ ¬(V ≼ a), contradicting V ≼ a. Hence S_V is empty, every x ∈ On belongs to ⋂S_V (3.20 DefUnaryIntersection), |V| = On ∩ ⋂S_V = On (3.41 DefCardinality, 3.10 DefClassEq), and therefore Card(On) holds.
- **Standalone Certificate:** [proofs/ThmOrdinalsCardinal.html](proofs/ThmOrdinalsCardinal.html)

### 3.67 `ThmUniversalClassNotCardinal` — Class of all sets is not a cardinal class (Theorem)

- **Identifier:** `ThmUniversalClassNotCardinal` (entry `3.67`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `(¬Card(V))`
- **Scheme of Types (Unicode):** `(¬Card(V))`
- **Proof Constructor:** `thm_3_67_v_not_cardinal (PNegR_prf / PPairSetAx_prf / PLeftInSoundAx_prf / PKernelDef_prf)`
- **Axioms Used:** `AxmLeftInSound, RulClassComprehension, PairSetAx, AxmPropVerum, AxmPropExFalso, AxmOmegaIsSet, AxmHeredity, AxmRightInSound, AxmPropNegElim | Definitions Used: DefIsCardinal, DefIff, DefUniversalClass, DefUnorderedPair, DefPairfulClass, DefEmptySet, DefSubclass, DefSingletonSet, DefClassEq, DefCardinality, DefBinaryIntersection, DefIsSet, DefClassOfOrdinals, DefOrdinalClass, DefTransitiveClass | Kernel Prf Nodes: 6099`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_3_67_v_not_cardinal : Thm, verified by Thm.checkPipeline and Thm.slow_check): proved from first principles by constructing {{emptyset}} in V, showing {{emptyset}} is not transitive and hence not in On, whereas |K| c= On for every class K.
- **Standalone Certificate:** [proofs/ThmUniversalClassNotCardinal.html](proofs/ThmUniversalClassNotCardinal.html)

### 3.68 `DefGrothendieckUniverse` — “Is a universe” predicate (Definition)

- **Identifier:** `DefGrothendieckUniverse` (entry `3.68`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(U:Class)((U universe)←→(((ω∈U)∧((Tr(U)∧Hereditary(U))∧(Powerful(U)∧Tight(U))))∧Pairful(U))))`
- **Scheme of Types (Unicode):** `(∀([U@Variable]:[Class@Type])(([U@Class.Expression] universe)←→(((ω∈[U@Class.Expression])∧((Tr([U@Class.Expression])∧Hereditary([U@Class.Expression]))∧(Powerful([U@Class.Expression])∧Tight([U@Class.Expression]))))∧Pairful([U@Class.Expression]))))`
- **Proof Constructor:** `PUniverseDef_prf (U)`
- **Standalone Certificate:** [proofs/DefGrothendieckUniverse.html](proofs/DefGrothendieckUniverse.html)

### 3.69 `ThmUniversalClassIsUniverse` — The class of all sets is a universe (Theorem)

- **Identifier:** `ThmUniversalClassIsUniverse` (entry `3.69`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `(V universe)`
- **Scheme of Types (Unicode):** `(V universe)`
- **Proof Constructor:** `v_universe_thm (PAndR_prf / POmegaSetAx_prf / PHeredityAx_prf / PPowSetAx_prf / PSizeLimAx_prf / PPairSetAx_prf)`
- **Axioms Used:** `AxmOmegaIsSet, AxmPropVerum, RulClassComprehension, AxmLeftInSound, AxmHeredity, AxmExponent, CardLessOrderAx, AxmSizeLimitation, PairSetAx | Definitions Used: DefIff, DefUniversalClass, DefIsSet, DefSubclass, DefTransitiveClass, DefHereditaryClass, DefPowerfulClass, DefCardLess, DefTightClass, DefUnorderedPair, DefPairfulClass, DefGrothendieckUniverse | Kernel Prf Nodes: 910`
- **Kernel Note:** Formal kernel proof (v_universe_thm_proof : unit -> Thm, verified by Thm.checkPipeline and Thm.slow_check) deriving (𝘍, [] ⊢ (V universe)) from 3.68 #DefGrothendieckUniverse (PKernelDef_prf) and the 6 component lemmas: (1) (ω ∈ V) via 3.57 #AxmOmegaIsSet (POmegaSetAx_prf), 3.05 #DefUniversalClass (PKernelDef_prf), 3.08 #AxmLeftInSound (PLeftInSoundAx_prf), and 3.01 #RulClassComprehension (PComprAx_prf); (2) (V transitive) via 3.15 #DefTransitiveClass (PKernelDef_prf), 3.06 #DefSubclass (PKernelDef_prf), and 3.02 #DefIsSet (PKernelDef_prf); (3) (V Hereditary) via 3.44 #DefHereditaryClass (PKernelDef_prf) and 3.12 #AxmHeredity (PHeredityAx_prf); (4) (V Powerful) via 3.45 #DefPowerfulClass (PKernelDef_prf) and 3.13 #AxmExponent (PPowSetAx_prf); (5) (V Tight) via 3.47 #DefTightClass (PKernelDef_prf), 3.43 #AxmSizeLimitation (PSizeLimAx_prf: X ∈ V ⟷ |X| ≺ |V|), and 3.41/3.42 #DefCardinality/#DefCardLess via the kernel cardinal-order reflection rule CardLessOrderAx (PCardLessOrderAx_prf in 06_definitions.ML: |A| ≺ |B| ⟷ A ≺ B, reflecting Global Choice V ≈ On); (6) (V Pairful) via 3.46 #DefPairfulClass (PKernelDef_prf) and 3.49 #DefUnorderedPair sethood rule PairSetAx (PPairSetAx_prf). (An unused legacy backup constructor PVUniverseAx_prf also exists in 06_definitions.ML but is not invoked in v_universe_thm_proof.)
- **Standalone Certificate:** [proofs/ThmUniversalClassIsUniverse.html](proofs/ThmUniversalClassIsUniverse.html)

### 3.70 `AxmTarskiUniverses` — “Tarski's axiom” (Axiom)

- **Identifier:** `AxmTarskiUniverses` (entry `3.70`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(∀(x:Class)((x set)—→∃(u:Class)(((u universe)∧(x∈u))∧(u set))))`
- **Scheme of Types (Unicode):** `(∀([x@Variable]:[Class@Type])(([x@Class.Expression] set)—→∃([u@Variable]:[Class@Type])((([u@Class.Expression] universe)∧([x@Class.Expression]∈[u@Class.Expression]))∧([u@Class.Expression] set))))`
- **Proof Constructor:** `PUniverseAx_prf (U)`
- **Standalone Certificate:** [proofs/AxmTarskiUniverses.html](proofs/AxmTarskiUniverses.html)

### 3.71 `ThmTransitiveClassInduction` — General form of the transfinite ∈-induction principle on a transitive class (Theorem)

- **Identifier:** `ThmTransitiveClassInduction` (entry `3.71`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `(∀(K:Class)∀(A:Class)((Tr(K)∧((K∩𝒫(A))⊆A))—→(K⊆A)))`
- **Scheme of Types (Unicode):** `(∀([K@Variable]:[Class@Type])∀([A@Variable]:[Class@Type])((Tr([K@Class.Expression])∧(([K@Class.Expression]∩𝒫([A@Class.Expression]))⊆[A@Class.Expression]))—→([K@Class.Expression]⊆[A@Class.Expression])))`
- **Proof Constructor:** `thm_3_71_transitive_class_induction (PForaR_prf / PEpsIndAx_prf / PComprAx_prf / PSubDef_prf)`
- **Axioms Used:** `AxmPropVerum, RulClassComprehension, AxmLeftInSound, AxmRegularity | Definitions Used: DefIsSet, DefIff, DefUniversalClass, DefPowerClass, DefTransitiveClass, DefSubclass, DefBinaryIntersection | Kernel Prf Nodes: 1224`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_3_71_transitive_class_induction : Thm, verified by Thm.checkPipeline and Thm.slow_check): proved from AxmRegularity (PEpsIndAx_prf) applied to W = { x : Class | (x in K) -> (x in A) }. Transfinite membership (∈) induction on a well-founded transitive class, contrasted with successor-induction (Peano 0-successor-induction Ind(X) in 3.55).
- **Standalone Certificate:** [proofs/ThmTransitiveClassInduction.html](proofs/ThmTransitiveClassInduction.html)

### 3.72 `AxmSoundnessOfFullTheory` — Soundness of the theory 𝘍 (Axiom)

- **Identifier:** `AxmSoundnessOfFullTheory` (entry `3.72`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(∀(𝛗:Fm)((𝘍,[]⊢𝛗)—→eval(𝛗)))`
- **Scheme of Types (Unicode):** `(∀([𝛗@Variable]:[Fm@Type])((𝘍,[]⊢[𝛗@Fm.Expression])—→eval([𝛗@Fm.Expression])))`
- **Proof Constructor:** `PCredo_prf (p)`
- **Kernel Note:** Soundness of the non-recursively-enumerable (non-r.e.) Henkin completion 𝘍: if (𝘍, [] ⊢ φ), then ⟦φ⟧ holds in the fixed background model M. Two-Level Stratification (How the Kernel Excludes TpHolds(IpFau, ...) from Object-Level Fm₀): In MKTD1-system (FACTBOOK section 6 (metalevels)), object-level set/class formulas live at metalevel 0 (sort Fm₀, enforced in the kernel by KernelDefinitions.is_object_level_fm0 in newchecker/06_definitions.ML and checked on every PComprAx_prf class comprehension node in newchecker/07_theorems.ML), which explicitly rejects TpHolds, EEval, TpFFI, TpIFV, and TpCtxIFV inside object-level class comprehension {x | φ} and object-level predicate/class definitions. Because 3.72-3.74 and 4.03 live at metalevel +1 and TpHolds(IpFau, ...) is barred from Fm₀ comprehension by is_object_level_fm0, the object-level diagonal lemma cannot be applied to (𝘍, [] ⊢ ·) to form a Tarski liar sentence or a Löb fixed point ψ ⟷ ((𝘍, [] ⊢ ψ) —→ φ).
- **Standalone Certificate:** [proofs/AxmSoundnessOfFullTheory.html](proofs/AxmSoundnessOfFullTheory.html)

### 3.73 `AxmSemanticCompletenessOfFullTheory` — Semantic Completeness of the theory 𝘍 (Axiom)

- **Identifier:** `AxmSemanticCompletenessOfFullTheory` (entry `3.73`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(∀(𝛗:Fm)(eval(𝛗)—→(𝘍,[]⊢𝛗)))`
- **Scheme of Types (Unicode):** `(∀([𝛗@Variable]:[Fm@Type])(eval([𝛗@Fm.Expression])—→(𝘍,[]⊢[𝛗@Fm.Expression])))`
- **Proof Constructor:** `POmnisSem_prf (p)`
- **Kernel Note:** Semantic completeness (omniscience, 3.73, POmnisSem_prf) of the non-r.e. Henkin completion 𝘍 at metalevel 1: for every object-level sentence φ : Fm, if φ evaluates to true in the background model M (⟦φ⟧), then φ is formally derivable in 𝘍 (𝘍, [] ⊢ φ). Formulated as a separate axiom from syntactic negation-completeness (3.74 AxmNegationCompletenessOfFullTheory, which is stated purely in terms of ⊢ and ¬ without mentioning ⟦φ⟧): neither implies the other in isolation, while under Soundness of 𝘍 (3.72) and classical model bivalence (⟦φ⟧ ∨ ⟦¬φ⟧) they are conditionally equivalent.
- **Standalone Certificate:** [proofs/AxmSemanticCompletenessOfFullTheory.html](proofs/AxmSemanticCompletenessOfFullTheory.html)

### 3.74 `AxmNegationCompletenessOfFullTheory` — Negation-Completeness of the theory 𝘍 (Axiom)

- **Identifier:** `AxmNegationCompletenessOfFullTheory` (entry `3.74`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(∀(𝛗:Fm)((¬(𝘍,[]⊢‹¬𝛗›))—→(𝘍,[]⊢𝛗)))`
- **Scheme of Types (Unicode):** `(∀([𝛗@Variable]:[Fm@Type])((¬(𝘍,[]⊢‹¬[𝛗@Fm]›))—→(𝘍,[]⊢[𝛗@Fm.Expression])))`
- **Proof Constructor:** `POmnisNeg_prf (p)`
- **Kernel Note:** Syntactic negation-completeness (3.74, POmnisNeg_prf) of the non-r.e. Henkin completion 𝘍 at metalevel 1: for every object-level sentence φ : Fm, if ¬φ is not derivable in 𝘍 (¬(𝘍, [] ⊢ ¬φ)), then φ is derivable in 𝘍 (𝘍, [] ⊢ φ). Formulated as a separate purely syntactic axiom from semantic completeness / omniscience (3.73 AxmSemanticCompletenessOfFullTheory): in classical logic, 3.74 is equivalent to (𝘍, [] ⊢ φ) ∨ (𝘍, [] ⊢ ¬φ), and becomes equivalent to semantic completeness (3.73) when combined with Soundness of 𝘍 (3.72) and classical bivalence of M (⟦φ⟧ ∨ ⟦¬φ⟧).
- **Standalone Certificate:** [proofs/AxmNegationCompletenessOfFullTheory.html](proofs/AxmNegationCompletenessOfFullTheory.html)

### 3.75 `AxmBaseSubtheoryOfFull` — If a formula is derivable in 𝘛, then it is derivable in 𝘍 (Axiom)

- **Identifier:** `AxmBaseSubtheoryOfFull` (entry `3.75`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(∀(Γ:Ctx)∀(𝛗:Fm)((𝘛,Γ⊢𝛗)—→(𝘍,Γ⊢𝛗)))`
- **Scheme of Types (Unicode):** `(∀([Γ@Variable]:[Ctx@Type])∀([𝛗@Variable]:[Fm@Type])((𝘛,[Γ@Ctx.Expression]⊢[𝛗@Fm.Expression])—→(𝘍,[Γ@Ctx.Expression]⊢[𝛗@Fm.Expression])))`
- **Proof Constructor:** `TpHolds (s)`
- **Kernel Note:** Theory extension monotonicity (𝘛 ⊆ 𝘍): every theorem of the r.e. base theory 𝘛 is also a theorem of its non-r.e. Henkin completion 𝘍.
- **Standalone Certificate:** [proofs/AxmBaseSubtheoryOfFull.html](proofs/AxmBaseSubtheoryOfFull.html)

### 3.76 `DefDunaevOrderedPair` — Ordered pair(Dunaev's tagged class pair) (Definition)

- **Identifier:** `DefDunaevOrderedPair` (entry `3.76`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(A:Class)∀(B:Class)((A,B)=(({{∅,{∅}}}∪{x|∃(a:Class)((a∈A)∧(x={{{{a}}},{∅}}))})∪({{∅,{∅,{∅}}}}∪{x|∃(a:Class)((a∈B)∧(x={{{{a}}},{∅,{∅}}}))}))))`
- **Scheme of Types (Unicode):** `(∀([A@Variable]:[Class@Type])∀([B@Variable]:[Class@Type])(([A@Class.Expression],[B@Class.Expression])=(({{∅,{∅}}}∪{[x@Class.Expression]|∃([a@Variable]:[Class@Type])(([a@Class.Expression]∈[A@Class.Expression])∧([x@Class.Expression]={{{{[a@Class.Expression]}}},{∅}}))})∪({{∅,{∅,{∅}}}}∪{[x@Class.Expression]|∃([a@Variable]:[Class@Type])(([a@Class.Expression]∈[B@Class.Expression])∧([x@Class.Expression]={{{{[a@Class.Expression]}}},{∅,{∅}}}))}))))`
- **Proof Constructor:** `CpOPair (A, B)`
- **Kernel Note:** Primitive-expanded form of Dunaev's tagged class ordered pair (A,B) = mark(A,1) ∪ mark(B,2) from 3.51 DefClassLists (with 0 = ∅, 1 = {∅}, 2 = {∅, {∅}} and tagged elements {{{{a}}}, n} = { {{{a}}}, n }), sound for arbitrary proper classes A, B (unlike the set-restricted Kuratowski pair in 3.52). Used as the canonical ordered pair (A, B) across class-level definitions (3.38, 3.77, 3.78, 3.91).
- **Standalone Certificate:** [proofs/DefDunaevOrderedPair.html](proofs/DefDunaevOrderedPair.html)

### 3.77 `ThmDunaevFirstProjection` — First projection of Dunaev's tagged ordered pair (Theorem)

- **Identifier:** `ThmDunaevFirstProjection` (entry `3.77`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `(∀(A:Class)∀(B:Class)({a|{{{{a}}},{∅}}∈(A,B)}=A))`
- **Scheme of Types (Unicode):** `(∀([A@Variable]:[Class@Type])∀([B@Variable]:[Class@Type])({[a@Class.Expression]|{{{{[a@Class.Expression]}}},{∅}}∈([A@Class.Expression],[B@Class.Expression])}=[A@Class.Expression]))`
- **Proof Constructor:** `thm_3_77_dunaev_pr1_sub (PForaR_prf / PEqDef_prf / PSubDef_prf / PComprAx_prf / POrL_prf / PExisL_prf)`
- **Axioms Used:** `RulClassComprehension, AxmLeftInSound, AxmPropExFalso, AxmOmegaIsSet, AxmHeredity, PairSetAx, AxmPropVerum, AxmRightInSound, AxmPropNegElim, AxmRegularity | Definitions Used: DefIff, DefDunaevOrderedPair, DefBinaryUnion, DefEmptySet, DefSubclass, DefClassEq, DefUnorderedPair, DefSingletonSet, DefUniversalClass, DefPairfulClass, DefIsSet, DefPowerClass | Kernel Prf Nodes: 41145`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_3_77_dunaev_pr1_sub : Thm, verified by Thm.checkPipeline and Thm.slow_check with exact statement equality): recovers A from Dunaev's tagged ordered pair (A, B) via tag 1 = {∅} ({ a | {{{{a}}}, {∅}} ∈ (A, B) } = A, matching pr1 in 3.51 DefClassLists and 3.91 DefDomainRestriction) without requiring A or B to be sets, and together with 3.78 yields Dunaev pair injectivity (thm_dunaev_opair_injective : (A, B) = (C, D) —→ (A = C ∧ B = D)).
- **Standalone Certificate:** [proofs/ThmDunaevFirstProjection.html](proofs/ThmDunaevFirstProjection.html)

### 3.78 `ThmDunaevSecondProjection` — Second projection of Dunaev's tagged ordered pair (Theorem)

- **Identifier:** `ThmDunaevSecondProjection` (entry `3.78`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `(∀(A:Class)∀(B:Class)({b|{{{{b}}},{∅,{∅}}}∈(A,B)}=B))`
- **Scheme of Types (Unicode):** `(∀([A@Variable]:[Class@Type])∀([B@Variable]:[Class@Type])({[b@Class.Expression]|{{{{[b@Class.Expression]}}},{∅,{∅}}}∈([A@Class.Expression],[B@Class.Expression])}=[B@Class.Expression]))`
- **Proof Constructor:** `thm_3_78_dunaev_pr2_sub (PForaR_prf / PEqDef_prf / PSubDef_prf / PComprAx_prf / POrL_prf / PExisL_prf)`
- **Axioms Used:** `RulClassComprehension, AxmLeftInSound, AxmPropExFalso, AxmOmegaIsSet, AxmHeredity, PairSetAx, AxmPropVerum, AxmRightInSound, AxmPropNegElim, AxmRegularity | Definitions Used: DefIff, DefDunaevOrderedPair, DefBinaryUnion, DefEmptySet, DefSubclass, DefClassEq, DefUnorderedPair, DefSingletonSet, DefUniversalClass, DefPairfulClass, DefIsSet, DefPowerClass | Kernel Prf Nodes: 38665`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_3_78_dunaev_pr2_sub : Thm, verified by Thm.checkPipeline and Thm.slow_check with exact statement equality): recovers B from Dunaev's tagged ordered pair (A, B) via tag 2 = {∅, {∅}} ({ b | {{{{b}}}, {∅, {∅}}} ∈ (A, B) } = B, matching pr2 in 3.51 DefClassLists) without requiring A or B to be sets, and together with 3.77 yields Dunaev pair injectivity (thm_dunaev_opair_injective : (A, B) = (C, D) —→ (A = C ∧ B = D)).
- **Standalone Certificate:** [proofs/ThmDunaevSecondProjection.html](proofs/ThmDunaevSecondProjection.html)

### 3.79 `DefLimitOrdinal` — Nonzero limit ordinal predicate (Definition)

- **Identifier:** `DefLimitOrdinal` (entry `3.79`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(A:Class)(LimitOrd(A)←→(Ord(A)∧((¬(A=∅))∧∀(B:Class)((B∈A)—→((B∪{B})∈A))))))`
- **Scheme of Types (Unicode):** `(∀([A@Variable]:[Class@Type])(LimitOrd([A@Class.Expression])←→(Ord([A@Class.Expression])∧((¬([A@Class.Expression]=∅))∧∀([B@Variable]:[Class@Type])(([B@Class.Expression]∈[A@Class.Expression])—→(([B@Class.Expression]∪{[B@Class.Expression]})∈[A@Class.Expression]))))))`
- **Proof Constructor:** `PKernelDef_prf (def_limit_ord_cert, [A, B])`
- **Kernel Note:** Conservative definition (DefLimitOrd, PKernelDef_prf, verified by Thm.checkPipeline and Thm.slow_check): a class A is a nonzero limit ordinal (LimitOrd(A)) iff A is an ordinal, A is non-empty, and for every B in A, the von Neumann successor B u {B} also belongs to A.
- **Standalone Certificate:** [proofs/DefLimitOrdinal.html](proofs/DefLimitOrdinal.html)

### 3.80 `DefIndexedUnionClosed` — Indexed-union closure predicate (Definition)

- **Identifier:** `DefIndexedUnionClosed` (entry `3.80`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(U:Class)(IndexedUnionClosed(U)←→(∀(I:Class)∀(f:Class)(((I∈U)∧((f class-function)∧((I⊆Dom(f))∧(f[I]⊆U))))—→(⋃f[I]∈U)))))`
- **Scheme of Types (Unicode):** `(∀([U@Variable]:[Class@Type])(IndexedUnionClosed([U@Class.Expression])←→(∀([I@Variable]:[Class@Type])∀([f@Variable]:[Class@Type])((([I@Class.Expression]∈[U@Class.Expression])∧(([f@Class.Expression] class-function)∧(([I@Class.Expression]⊆Dom([f@Class.Expression]))∧([f@Class.Expression][[I@Class.Expression]]⊆[U@Class.Expression]))))—→(⋃[f@Class.Expression][[I@Class.Expression]]∈[U@Class.Expression])))))`
- **Proof Constructor:** `PKernelDef_prf (def_indexed_union_closed_cert, [U, I, f])`
- **Kernel Note:** Conservative definition (DefIndexedUnionClosed, PKernelDef_prf, verified by Thm.checkPipeline and Thm.slow_check): a class U is closed under indexed unions (IndexedUnionClosed(U)) iff for every index set I in U and every class-function f with I c Dom(f) and relational image f[I] c U, the union U(f[I]) belongs to U.
- **Standalone Certificate:** [proofs/DefIndexedUnionClosed.html](proofs/DefIndexedUnionClosed.html)

### 3.81 `DefVonNeumannStageLaws` — Von Neumann cumulative hierarchy recursion laws (Definition)

- **Identifier:** `DefVonNeumannStageLaws` (entry `3.81`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(V:Class)(VStageLaws(V)←→((V(∅)=∅)∧((∀(A:Class)(Ord(A)—→(V((A∪{A}))=𝒫(V(A)))))∧((∀(A:Class)(LimitOrd(A)—→(V(A)=⋃{Y|∃(B:Class)((B∈A)∧(Y=V(B)))})))∧∀(A:Class)(Ord(A)—→((A=∅)∨((∃(B:Class)((B∈A)∧(A=(B∪{B}))))∨LimitOrd(A)))))))))`
- **Scheme of Types (Unicode):** `(∀([V@Variable]:[Class@Type])(VStageLaws([V@Class.Expression])←→(([V@Class.Expression](∅)=∅)∧((∀([A@Variable]:[Class@Type])(Ord([A@Class.Expression])—→([V@Class.Expression](([A@Class.Expression]∪{[A@Class.Expression]}))=𝒫([V@Class.Expression]([A@Class.Expression])))))∧((∀([A@Variable]:[Class@Type])(LimitOrd([A@Class.Expression])—→([V@Class.Expression]([A@Class.Expression])=⋃{[Y@Class.Expression]|∃([B@Variable]:[Class@Type])(([B@Class.Expression]∈[A@Class.Expression])∧([Y@Class.Expression]=[V@Class.Expression]([B@Class.Expression])))})))∧∀([A@Variable]:[Class@Type])(Ord([A@Class.Expression])—→(([A@Class.Expression]=∅)∨((∃([B@Variable]:[Class@Type])(([B@Class.Expression]∈[A@Class.Expression])∧([A@Class.Expression]=([B@Class.Expression]∪{[B@Class.Expression]}))))∨LimitOrd([A@Class.Expression])))))))))`
- **Proof Constructor:** `PKernelDef_prf (def_v_stage_laws_cert, [V, A, B, Y])`
- **Kernel Note:** Conservative definition (DefVonNeumannStageLaws, PKernelDef_prf, verified by Thm.checkPipeline and Thm.slow_check): VStageLaws(V) characterizes the transfinite recursion equations for the von Neumann cumulative hierarchy stages valOf(V, A) across base stage 0, successor ordinals A u {A}, and limit ordinals, together with the three-way ordinal classification (zero, successor, or limit). (Notational convention: here and in 3.82, 3.83, 3.88, 3.89, 3.98, the bound class variable V : Class, rendered in yellow in HTML and applied as V(A), denotes a candidate stage operator, distinguished by binding, tooltip, and arity from the 0-ary universal class constant V of 3.05 and 3.86.)
- **Standalone Certificate:** [proofs/DefVonNeumannStageLaws.html](proofs/DefVonNeumannStageLaws.html)

### 3.82 `DefVonNeumannStageGraph` — Canonical von Neumann cumulative hierarchy graph (Definition)

- **Identifier:** `DefVonNeumannStageGraph` (entry `3.82`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(VStageGraph=⋂{V|(V class-function)∧VStageLaws(V)})`
- **Scheme of Types (Unicode):** `(VStageGraph=⋂{[V@Class.Expression]|([V@Class.Expression] class-function)∧VStageLaws([V@Class.Expression])})`
- **Proof Constructor:** `PKernelDef_prf (def_v_stage_graph_cert, [V])`
- **Kernel Note:** Conservative definition (DefVonNeumannStageGraph, PKernelDef_prf, verified by Thm.checkPipeline and Thm.slow_check): VStageGraph is the intersection of all class-functions V satisfying VStageLaws(V). Restricting V to class-functions (3.32 DefClassFunction) ensures via 3.29 DefHasConcentratedValues that for each A in Dom(V) with set value V(A), there is a unique pair (A, y) in V, which by 3.25 DefValueAtArg (V(A) = U{s | (A, s) in V} = U{y} = y) forces y = V(A) and rules out non-functional multi-pair encodings. In 3.88-3.90, VStageLaws(V) is carried as an explicit antecedent hypothesis (and constructed bottom-up via 3.91-3.98 TransfiniteRec(VonNeumannStepG)).
- **Standalone Certificate:** [proofs/DefVonNeumannStageGraph.html](proofs/DefVonNeumannStageGraph.html)

### 3.83 `DefSetRankLaws` — Mirimanoff-von Neumann set rank recursion laws (Definition)

- **Identifier:** `DefSetRankLaws` (entry `3.83`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(R:Class)∀(V:Class)(SetRankLaws(R,V)←→((∀(x:Class)((x set)—→Ord(R(x))))∧((∀(x:Class)((x set)—→(R(x)=⋃{z|∃(y:Class)((y∈x)∧(z=(R(y)∪{R(y)})))})))∧∀(x:Class)((x set)—→(x∈V((R(x)∪{R(x)}))))))))`
- **Scheme of Types (Unicode):** `(∀([R@Variable]:[Class@Type])∀([V@Variable]:[Class@Type])(SetRankLaws([R@Class.Expression],[V@Class.Expression])←→((∀([x@Variable]:[Class@Type])(([x@Class.Expression] set)—→Ord([R@Class.Expression]([x@Class.Expression]))))∧((∀([x@Variable]:[Class@Type])(([x@Class.Expression] set)—→([R@Class.Expression]([x@Class.Expression])=⋃{[z@Class.Expression]|∃([y@Variable]:[Class@Type])(([y@Class.Expression]∈[x@Class.Expression])∧([z@Class.Expression]=([R@Class.Expression]([y@Class.Expression])∪{[R@Class.Expression]([y@Class.Expression])})))})))∧∀([x@Variable]:[Class@Type])(([x@Class.Expression] set)—→([x@Class.Expression]∈[V@Class.Expression](([R@Class.Expression]([x@Class.Expression])∪{[R@Class.Expression]([x@Class.Expression])}))))))))`
- **Proof Constructor:** `PKernelDef_prf (def_rank_laws_cert, [R, V, x, y, z])`
- **Kernel Note:** Conservative definition (DefSetRankLaws, PKernelDef_prf, verified by Thm.checkPipeline and Thm.slow_check): SetRankLaws(R, V) characterizes the set rank operator valOf(R, x) and its cumulative-stage bounding law x in valOf(V, valOf(R, x) u {valOf(R, x)}) for every set x.
- **Standalone Certificate:** [proofs/DefSetRankLaws.html](proofs/DefSetRankLaws.html)

### 3.84 `DefSetRankGraph` — Canonical Mirimanoff-von Neumann set rank graph (Definition)

- **Identifier:** `DefSetRankGraph` (entry `3.84`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(SetRankGraph=⋂{R|(R class-function)∧SetRankLaws(R,VStageGraph)})`
- **Scheme of Types (Unicode):** `(SetRankGraph=⋂{[R@Class.Expression]|([R@Class.Expression] class-function)∧SetRankLaws([R@Class.Expression],VStageGraph)})`
- **Proof Constructor:** `PKernelDef_prf (def_rank_graph_cert, [R])`
- **Kernel Note:** Conservative definition (DefSetRankGraph, PKernelDef_prf, verified by Thm.checkPipeline and Thm.slow_check): SetRankGraph is the intersection of all class-functions R satisfying SetRankLaws(R, VStageGraph). Restricting R to class-functions (3.32 DefClassFunction) ensures via 3.29 DefHasConcentratedValues and 3.25 DefValueAtArg (U{y} = y) that each set x in Dom(R) is paired with the unique value y = R(x). In 3.89-3.90, SetRankLaws(R, V) is carried as an explicit antecedent hypothesis on the rank operator R.
- **Standalone Certificate:** [proofs/DefSetRankGraph.html](proofs/DefSetRankGraph.html)

### 3.85 `ThmUniverseInterOnIsOrdinal` — Step 0 of U = V_(U n On): the ordinal trace U n On of a universe is an ordinal (Theorem)

- **Identifier:** `ThmUniverseInterOnIsOrdinal` (entry `3.85`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `(∀(U:Class)((U universe)—→Ord((U∩On))))`
- **Scheme of Types (Unicode):** `(∀([U@Variable]:[Class@Type])(([U@Class.Expression] universe)—→Ord(([U@Class.Expression]∩On))))`
- **Proof Constructor:** `thm_step0_universe_inter_on_is_ordinal (PForaR_prf / POrdDef_prf / PBinInterDef_prf)`
- **Axioms Used:** `AxmLeftInSound, RulClassComprehension | Definitions Used: DefGrothendieckUniverse, DefIff, DefIsSet, DefClassOfOrdinals, DefOrdinalClass, DefTransitiveClass, DefSubclass, DefBinaryIntersection | Kernel Prf Nodes: 1693`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_step0_universe_inter_on_is_ordinal : Thm, accompanied in universe_definitions.ML by thm_step0_universe_emptyset_in_u : ∀(U:Class)((U universe) —→ ((∅ ∈ U) ∧ ((∅ ∈ (U ∩ On)) ∧ ¬((U ∩ On) = ∅))))): if U is a universe, then U is transitive and On is an ordinal, so their binary intersection kappa = U n On is a transitive class of ordinals and hence an ordinal.
- **Standalone Certificate:** [proofs/ThmUniverseInterOnIsOrdinal.html](proofs/ThmUniverseInterOnIsOrdinal.html)

### 3.86 `ThmUniverseUnionClosedFromIndexedUnion` — Step 1a of U = V_(U n On): a transitive class closed under indexed unions is closed under unary union (Theorem)

- **Identifier:** `ThmUniverseUnionClosedFromIndexedUnion` (entry `3.86`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `(∀(U:Class)∀(f:Class)(((Tr(U)∧IndexedUnionClosed(U))∧((f class-function)∧((V⊆Dom(f))∧∀(a:Class)(f(a)=a))))—→∀(x:Class)((x∈U)—→(⋃x∈U))))`
- **Scheme of Types (Unicode):** `(∀([U@Variable]:[Class@Type])∀([f@Variable]:[Class@Type])(((Tr([U@Class.Expression])∧IndexedUnionClosed([U@Class.Expression]))∧(([f@Class.Expression] class-function)∧((V⊆Dom([f@Class.Expression]))∧∀([a@Variable]:[Class@Type])([f@Class.Expression]([a@Class.Expression])=[a@Class.Expression]))))—→∀([x@Variable]:[Class@Type])(([x@Class.Expression]∈[U@Class.Expression])—→(⋃[x@Class.Expression]∈[U@Class.Expression]))))`
- **Proof Constructor:** `thm_step1a_union_closed_from_indexed_union (PForaR_prf / PKernelDef_prf / PImageDef_prf)`
- **Axioms Used:** `AxmPropVerum, RulClassComprehension, AxmLeftInSound, AxmRightInSound | Definitions Used: DefIsSet, DefIff, DefUniversalClass, DefSubclass, DefRelationalImage, DefClassEq, DefTransitiveClass, DefIndexedUnionClosed, DefUnaryUnion | Kernel Prf Nodes: 3757`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_step1a_union_closed_from_indexed_union : Thm, verified by Thm.checkPipeline and Thm.slow_check): instantiating IndexedUnionClosed(U) with I = x in U and an identity class-function witness f on V yields f[x] = x c U and hence U(x) in U.
- **Standalone Certificate:** [proofs/ThmUniverseUnionClosedFromIndexedUnion.html](proofs/ThmUniverseUnionClosedFromIndexedUnion.html)

### 3.87 `ThmUniverseInterOnIsLimitOrdinal` — Step 1c of U = V_(U n On): the ordinal trace U n On of an union-closed universe is a nonzero limit ordinal (Theorem)

- **Identifier:** `ThmUniverseInterOnIsLimitOrdinal` (entry `3.87`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `(∀(U:Class)(((U universe)∧∀(x:Class)((x∈U)—→(⋃x∈U)))—→LimitOrd((U∩On))))`
- **Scheme of Types (Unicode):** `(∀([U@Variable]:[Class@Type])((([U@Class.Expression] universe)∧∀([x@Variable]:[Class@Type])(([x@Class.Expression]∈[U@Class.Expression])—→(⋃[x@Class.Expression]∈[U@Class.Expression])))—→LimitOrd(([U@Class.Expression]∩On))))`
- **Proof Constructor:** `thm_step1c_kappa_is_limit_ord (PForaR_prf / PKernelDef_prf / PEpsIndAx_prf / PPairfulDef_prf)`
- **Axioms Used:** `AxmLeftInSound, RulClassComprehension, AxmPropExFalso, AxmRightInSound, PairSetAx | Definitions Used: DefGrothendieckUniverse, DefIff, DefIsSet, DefClassOfOrdinals, DefOrdinalClass, DefTransitiveClass, DefSubclass, DefBinaryIntersection, DefEmptySet, DefHereditaryClass, DefPairfulClass, DefUnorderedPair, DefSingletonSet, DefClassEq, DefBinaryUnion, DefUnaryUnion, DefLimitOrdinal | Kernel Prf Nodes: 12286`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_step1c_kappa_is_limit_ord : Thm, verified by Thm.checkPipeline and Thm.slow_check): for any universe U closed under unary union, kappa = U n On is an ordinal, contains 0 (via thm_step0_universe_emptyset_in_u from ω ∈ U and Hereditary(U)), and is closed under ordinal successor B |-> B u {B} = U({B, {B}}) by pairing and union closure; therefore LimitOrd(U n On) holds.
- **Standalone Certificate:** [proofs/ThmUniverseInterOnIsLimitOrdinal.html](proofs/ThmUniverseInterOnIsLimitOrdinal.html)

### 3.88 `ThmVonNeumannStageSubUniverse` — Step 2 of U = V_(U n On): limit-stage inclusion V_(U n On) c= U from stage closure below U n On (Theorem)

- **Identifier:** `ThmVonNeumannStageSubUniverse` (entry `3.88`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `(∀(V:Class)∀(U:Class)((VStageLaws(V)∧(Tr(U)∧(LimitOrd((U∩On))∧∀(B:Class)((B∈(U∩On))—→(V(B)∈U)))))—→(V((U∩On))⊆U)))`
- **Scheme of Types (Unicode):** `(∀([V@Variable]:[Class@Type])∀([U@Variable]:[Class@Type])((VStageLaws([V@Class.Expression])∧(Tr([U@Class.Expression])∧(LimitOrd(([U@Class.Expression]∩On))∧∀([B@Variable]:[Class@Type])(([B@Class.Expression]∈([U@Class.Expression]∩On))—→([V@Class.Expression]([B@Class.Expression])∈[U@Class.Expression])))))—→([V@Class.Expression](([U@Class.Expression]∩On))⊆[U@Class.Expression])))`
- **Proof Constructor:** `thm_step2_v_kappa_sub_u (PForaR_prf / PEpsIndAx_prf / PPowerfulDef_prf / PSubDef_prf)`
- **Axioms Used:** `AxmLeftInSound, RulClassComprehension, AxmRightInSound | Definitions Used: DefVonNeumannStageLaws, DefIff, DefUnaryUnion, DefClassEq, DefSubclass, DefTransitiveClass | Kernel Prf Nodes: 655`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_step2_v_kappa_sub_u : Thm, accompanied in universe_definitions.ML by the base and successor step lemmas thm_step2_v_0_in_u, thm_step2_v_succ_in_u, and thm_step2_v_limit_fam_sub_u): under VStageLaws(V), Trans(U), LimitOrd(U n On), and the stage-closure premise ∀B ∈ (U n On), V(B) ∈ U, unfolding the limit clause V(U n On) = U_{B ∈ U n On} V(B) and applying transitivity of U yields V(U n On) c= U.
- **Standalone Certificate:** [proofs/ThmVonNeumannStageSubUniverse.html](proofs/ThmVonNeumannStageSubUniverse.html)

### 3.89 `ThmUniverseSubVonNeumannStage` — Step 3 of U = V_(U n On): rank-bounded inclusion U c= V_(U n On) from stage and rank closure (Theorem)

- **Identifier:** `ThmUniverseSubVonNeumannStage` (entry `3.89`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `(∀(V:Class)∀(R:Class)∀(U:Class)((VStageLaws(V)∧(SetRankLaws(R,V)∧(LimitOrd((U∩On))∧((∀(B:Class)((B∈(U∩On))—→(V(B)∈U)))∧∀(x:Class)((x∈U)—→(R(x)∈U))))))—→(U⊆V((U∩On)))))`
- **Scheme of Types (Unicode):** `(∀([V@Variable]:[Class@Type])∀([R@Variable]:[Class@Type])∀([U@Variable]:[Class@Type])((VStageLaws([V@Class.Expression])∧(SetRankLaws([R@Class.Expression],[V@Class.Expression])∧(LimitOrd(([U@Class.Expression]∩On))∧((∀([B@Variable]:[Class@Type])(([B@Class.Expression]∈([U@Class.Expression]∩On))—→([V@Class.Expression]([B@Class.Expression])∈[U@Class.Expression])))∧∀([x@Variable]:[Class@Type])(([x@Class.Expression]∈[U@Class.Expression])—→([R@Class.Expression]([x@Class.Expression])∈[U@Class.Expression]))))))—→([U@Class.Expression]⊆[V@Class.Expression](([U@Class.Expression]∩On)))))`
- **Proof Constructor:** `thm_step3_u_sub_v_kappa (PForaR_prf / PEpsIndAx_prf / PKernelDef_prf / PSubDef_prf)`
- **Axioms Used:** `RulClassComprehension, AxmLeftInSound | Definitions Used: DefIsSet, DefIff, DefSetRankLaws, DefClassOfOrdinals, DefBinaryIntersection, DefLimitOrdinal, DefSubclass, DefClassEq, DefUnaryUnion, DefVonNeumannStageLaws | Kernel Prf Nodes: 1626`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_step3_u_sub_v_kappa : Thm, accompanied in universe_definitions.ML by the inductive rank-successor step lemma thm_step3_rank_succ_in_u): under VStageLaws(V), SetRankLaws(R, V), LimitOrd(U n On), stage closure ∀B ∈ (U n On), V(B) ∈ U, and rank closure ∀x ∈ U, R(x) ∈ U, every a ∈ U has R(a) ∈ (U n On), R(a) u {R(a)} ∈ (U n On) by limit closure, and a ∈ V(R(a) u {R(a)}) c= V(U n On), concluding U c= V(U n On).
- **Standalone Certificate:** [proofs/ThmUniverseSubVonNeumannStage.html](proofs/ThmUniverseSubVonNeumannStage.html)

### 3.90 `ThmUniverseEqVonNeumannStageInterOn` — Conclusion of U = V_(U n On): combining Step 1c, Step 2, and Step 3 under stage, rank, and union closure (Theorem)

- **Identifier:** `ThmUniverseEqVonNeumannStageInterOn` (entry `3.90`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `(∀(U:Class)((VStageLaws(VStageGraph)∧(SetRankLaws(SetRankGraph,VStageGraph)∧(((U universe)∧∀(x:Class)((x∈U)—→(⋃x∈U)))∧((∀(B:Class)((B∈(U∩On))—→(VStageGraph(B)∈U)))∧∀(x:Class)((x∈U)—→(SetRankGraph(x)∈U))))))—→(LimitOrd((U∩On))∧(U=VStageGraph((U∩On))))))`
- **Scheme of Types (Unicode):** `(∀([U@Variable]:[Class@Type])((VStageLaws(VStageGraph)∧(SetRankLaws(SetRankGraph,VStageGraph)∧((([U@Class.Expression] universe)∧∀([x@Variable]:[Class@Type])(([x@Class.Expression]∈[U@Class.Expression])—→(⋃[x@Class.Expression]∈[U@Class.Expression])))∧((∀([B@Variable]:[Class@Type])(([B@Class.Expression]∈([U@Class.Expression]∩On))—→(VStageGraph([B@Class.Expression])∈[U@Class.Expression])))∧∀([x@Variable]:[Class@Type])(([x@Class.Expression]∈[U@Class.Expression])—→(SetRankGraph([x@Class.Expression])∈[U@Class.Expression]))))))—→(LimitOrd(([U@Class.Expression]∩On))∧([U@Class.Expression]=VStageGraph(([U@Class.Expression]∩On))))))`
- **Proof Constructor:** `thm_universe_eq_canonical_v_inter_on (PForaR_prf / PEqDef_prf / PAndR_prf)`
- **Axioms Used:** `AxmLeftInSound, RulClassComprehension, AxmPropExFalso, AxmRightInSound, PairSetAx | Definitions Used: DefGrothendieckUniverse, DefIff, DefIsSet, DefClassOfOrdinals, DefOrdinalClass, DefTransitiveClass, DefSubclass, DefBinaryIntersection, DefEmptySet, DefHereditaryClass, DefPairfulClass, DefUnorderedPair, DefSingletonSet, DefClassEq, DefBinaryUnion, DefUnaryUnion, DefLimitOrdinal, DefSetRankLaws, DefVonNeumannStageLaws | Kernel Prf Nodes: 39444`
- **Kernel Note:** Machine-checked MKTD1-system synthesis theorem (thm_universe_eq_canonical_v_inter_on and thm_universe_eq_v_inter_on : Thm, verified by Thm.checkPipeline and Thm.slow_check across the 45 constituent lemmas in universe_definitions.ML Section 11): given VStageLaws(VStageGraph), SetRankLaws(SetRankGraph, VStageGraph), Universe(U) with unary union closure, stage closure ∀B ∈ (U n On), V(B) ∈ U, and rank closure ∀x ∈ U, R(x) ∈ U, combines Step 1c (LimitOrd(U n On)), Step 2 (V_(U n On) c= U), and Step 3 (U c= V_(U n On)) via class equality antisymmetry (EqDef) to conclude LimitOrd(U n On) /\ (U = VStageGraph(U n On)).
- **Standalone Certificate:** [proofs/ThmUniverseEqVonNeumannStageInterOn.html](proofs/ThmUniverseEqVonNeumannStageInterOn.html)

### 3.91 `DefDomainRestriction` — Restriction of a class relation or function to a domain class (Definition)

- **Identifier:** `DefDomainRestriction` (entry `3.91`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(F:Class)∀(A:Class)(Restrict(F,A)={z|(z∈F)∧(pr1(z)∈A)}))`
- **Scheme of Types (Unicode):** `(∀([F@Variable]:[Class@Type])∀([A@Variable]:[Class@Type])(Restrict([F@Class.Expression],[A@Class.Expression])={[z@Class.Expression]|([z@Class.Expression]∈[F@Class.Expression])∧(pr1([z@Class.Expression])∈[A@Class.Expression])}))`
- **Proof Constructor:** `PKernelDef_prf (def_domain_restriction_cert, [F, A, z])`
- **Kernel Note:** Conservative definition (DefDomainRestriction, PKernelDef_prf, verified by Thm.checkPipeline and Thm.slow_check): Restrict(F, A) = { z : Class | (z in F) /\ (pr1(z) in A) } restricts a class relation or function F to arguments whose first Dunaev projection belongs to A.
- **Standalone Certificate:** [proofs/DefDomainRestriction.html](proofs/DefDomainRestriction.html)

### 3.92 `DefTransfiniteApproximation` — Transfinite recursion approximation predicate on ordinal domains (Definition)

- **Identifier:** `DefTransfiniteApproximation` (entry `3.92`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(G:Class)∀(g:Class)(TransfiniteApprox(G,g)←→((g function)∧((Dom(g)∈On)∧∀(B:Class)∀(X:Class)(((B∈Dom(g))∧(X=Restrict(g,B)))—→(g(B)=G(X)))))))`
- **Scheme of Types (Unicode):** `(∀([G@Variable]:[Class@Type])∀([g@Variable]:[Class@Type])(TransfiniteApprox([G@Class.Expression],[g@Class.Expression])←→(([g@Class.Expression] function)∧((Dom([g@Class.Expression])∈On)∧∀([B@Variable]:[Class@Type])∀([X@Variable]:[Class@Type])((([B@Class.Expression]∈Dom([g@Class.Expression]))∧([X@Class.Expression]=Restrict([g@Class.Expression],[B@Class.Expression])))—→([g@Class.Expression]([B@Class.Expression])=[G@Class.Expression]([X@Class.Expression])))))))`
- **Proof Constructor:** `PKernelDef_prf (def_transfinite_approx_cert, [G, g, B, X])`
- **Kernel Note:** Conservative definition (DefTransfiniteApproximation, PKernelDef_prf, verified by Thm.checkPipeline and Thm.slow_check): TransfiniteApprox(G, g) holds iff g is a set-sized function whose domain Dom(g) belongs to On and for all B in Dom(g) and X = Restrict(g, B), valOf(g, B) = valOf(G, X).
- **Standalone Certificate:** [proofs/DefTransfiniteApproximation.html](proofs/DefTransfiniteApproximation.html)

### 3.93 `DefTransfiniteRecursionGraph` — Canonical transfinite recursion class-function graph on On (Definition)

- **Identifier:** `DefTransfiniteRecursionGraph` (entry `3.93`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(G:Class)(TransfiniteRec(G)=⋃{g|TransfiniteApprox(G,g)}))`
- **Scheme of Types (Unicode):** `(∀([G@Variable]:[Class@Type])(TransfiniteRec([G@Class.Expression])=⋃{[g@Class.Expression]|TransfiniteApprox([G@Class.Expression],[g@Class.Expression])}))`
- **Proof Constructor:** `PKernelDef_prf (def_transfinite_rec_graph_cert, [G, g])`
- **Kernel Note:** Conservative definition (DefTransfiniteRecursionGraph, PKernelDef_prf, verified by Thm.checkPipeline and Thm.slow_check): TransfiniteRec(G) = U { g : Class | TransfiniteApprox(G, g) } is the union of the class A(G) of all set-sized transfinite approximations for generator G.
- **Standalone Certificate:** [proofs/DefTransfiniteRecursionGraph.html](proofs/DefTransfiniteRecursionGraph.html)

### 3.94 `DefVonNeumannStepGenerator` — Von Neumann cumulative hierarchy transfinite step generator (Definition)

- **Identifier:** `DefVonNeumannStepGenerator` (entry `3.94`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(f:Class)(VonNeumannStepG(f)=⋃{Y|∃(B:Class)((B∈Dom(f))∧(Y=𝒫(f(B))))}))`
- **Scheme of Types (Unicode):** `(∀([f@Variable]:[Class@Type])(VonNeumannStepG([f@Class.Expression])=⋃{[Y@Class.Expression]|∃([B@Variable]:[Class@Type])(([B@Class.Expression]∈Dom([f@Class.Expression]))∧([Y@Class.Expression]=𝒫([f@Class.Expression]([B@Class.Expression]))))}))`
- **Proof Constructor:** `PKernelDef_prf (def_von_neumann_step_g_cert, [f, Y, B])`
- **Kernel Note:** Conservative definition (DefVonNeumannStepGenerator, PKernelDef_prf, verified by Thm.checkPipeline and Thm.slow_check): VonNeumannStepG(f) = U { Y : Class | exists (B:Class), (B in Dom(f)) /\ (Y = Pow(valOf(f, B))) } maps any set-sized ordinal approximation f to the union of the powersets of its values.
- **Standalone Certificate:** [proofs/DefVonNeumannStepGenerator.html](proofs/DefVonNeumannStepGenerator.html)

### 3.95 `ThmTransfiniteApproxCoherence` — Step 1 of Transfinite Recursion on On: coherence of approximations on common ordinal domains (Theorem)

- **Identifier:** `ThmTransfiniteApproxCoherence` (entry `3.95`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `(∀(G:Class)∀(g:Class)∀(h:Class)∀(A:Class)((TransfiniteApprox(G,g)∧(TransfiniteApprox(G,h)∧((∀(z:Class)((g(pr1(z))=h(pr1(z)))—→((z∈g)←→(z∈h))))∧(A∈(Dom(g)∩Dom(h))))))—→((Restrict(g,A)=Restrict(h,A))∧((g(A)=G(Restrict(g,A)))∧(g(A)=h(A))))))`
- **Scheme of Types (Unicode):** `(∀([G@Variable]:[Class@Type])∀([g@Variable]:[Class@Type])∀([h@Variable]:[Class@Type])∀([A@Variable]:[Class@Type])((TransfiniteApprox([G@Class.Expression],[g@Class.Expression])∧(TransfiniteApprox([G@Class.Expression],[h@Class.Expression])∧((∀([z@Variable]:[Class@Type])(([g@Class.Expression](pr1([z@Class.Expression]))=[h@Class.Expression](pr1([z@Class.Expression])))—→(([z@Class.Expression]∈[g@Class.Expression])←→([z@Class.Expression]∈[h@Class.Expression]))))∧([A@Class.Expression]∈(Dom([g@Class.Expression])∩Dom([h@Class.Expression]))))))—→((Restrict([g@Class.Expression],[A@Class.Expression])=Restrict([h@Class.Expression],[A@Class.Expression]))∧(([g@Class.Expression]([A@Class.Expression])=[G@Class.Expression](Restrict([g@Class.Expression],[A@Class.Expression])))∧([g@Class.Expression]([A@Class.Expression])=[h@Class.Expression]([A@Class.Expression]))))))`
- **Proof Constructor:** `thm_transfinite_approx_coherence (PForaR_prf / PKernelDef_prf / PBinInterDef_prf / PEqDef_prf)`
- **Axioms Used:** `AxmLeftInSound, RulClassComprehension, AxmPropVerum, AxmRegularity | Definitions Used: DefTransfiniteApproximation, DefIff, DefClassOfOrdinals, DefOrdinalClass, DefBinaryIntersection, DefIsSet, DefTransitiveClass, DefSubclass, DefUniversalClass, DefPowerClass, DefDomainRestriction, DefClassEq | Kernel Prf Nodes: 18311`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_transfinite_approx_coherence and thm_transfinite_approx_coherence_step : Thm, verified by Thm.checkPipeline and Thm.slow_check): proved by transfinite epsilon-induction (EpsIndAx) on K_1 = { B : Class | (B in (Dom(g) n Dom(h))) -> (valOf(g, B) = valOf(h, B)) } using transitivity of the ordinal intersection Dom(g) n Dom(h) (thm_bininter_transitive) and extensional restriction equality (thm_restrict_eq_from_below under graph value-extensionality forall z, (g(pr1(z)) = h(pr1(z))) -> ((z in g)  (z in h))), concluding Restrict(g, A) = Restrict(h, A) and valOf(g, A) = valOf(G, Restrict(g, A)) = valOf(h, A) for all A in Dom(g) n Dom(h).
- **Standalone Certificate:** [proofs/ThmTransfiniteApproxCoherence.html](proofs/ThmTransfiniteApproxCoherence.html)

### 3.96 `ThmTransfiniteRecursionEquation` — Steps 2 and 3 of Transfinite Recursion on On: approximation sethood, union inclusion, and global recursion equation F(A) = G(Restrict(F, A)) from witnessing approximations (Theorem)

- **Identifier:** `ThmTransfiniteRecursionEquation` (entry `3.96`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `(∀(G:Class)∀(g:Class)∀(F:Class)∀(A:Class)((TransfiniteApprox(G,g)—→((g set)∧(g⊆TransfiniteRec(G))))∧(((∀(B:Class)((B∈On)—→∃(h:Class)(TransfiniteApprox(G,h)∧((B∈Dom(h))∧((F(B)=h(B))∧(Restrict(F,B)=Restrict(h,B)))))))∧(A∈On))—→(F(A)=G(Restrict(F,A))))))`
- **Scheme of Types (Unicode):** `(∀([G@Variable]:[Class@Type])∀([g@Variable]:[Class@Type])∀([F@Variable]:[Class@Type])∀([A@Variable]:[Class@Type])((TransfiniteApprox([G@Class.Expression],[g@Class.Expression])—→(([g@Class.Expression] set)∧([g@Class.Expression]⊆TransfiniteRec([G@Class.Expression]))))∧(((∀([B@Variable]:[Class@Type])(([B@Class.Expression]∈On)—→∃([h@Variable]:[Class@Type])(TransfiniteApprox([G@Class.Expression],[h@Class.Expression])∧(([B@Class.Expression]∈Dom([h@Class.Expression]))∧(([F@Class.Expression]([B@Class.Expression])=[h@Class.Expression]([B@Class.Expression]))∧(Restrict([F@Class.Expression],[B@Class.Expression])=Restrict([h@Class.Expression],[B@Class.Expression])))))))∧([A@Class.Expression]∈On))—→([F@Class.Expression]([A@Class.Expression])=[G@Class.Expression](Restrict([F@Class.Expression],[A@Class.Expression]))))))`
- **Proof Constructor:** `thm_transfinite_recursion_equation (PForaR_prf / PKernelDef_prf / PComprAx_prf / PUnaryUnionDef_prf / PExisL_prf)`
- **Axioms Used:** `RulClassComprehension, AxmLeftInSound | Definitions Used: DefTransfiniteApproximation, DefIff, DefSetFunction, DefIsSet, DefUnaryUnion, DefTransfiniteRecursionGraph, DefSubclass, DefClassEq | Kernel Prf Nodes: 789`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_transfinite_recursion_equation, thm_approx_is_set, thm_in_approx_class_iff, thm_approx_sub_transfinite_rec, and thm_restrict_agree_from_sub : Thm, verified by Thm.checkPipeline and Thm.slow_check): proves (1) unconditionally that every G-approximation g is a set and a subclass of TransfiniteRec(G) = U { g | TransfiniteApprox(G, g) }, and (2) conditionally that whenever each ordinal B in On has a witnessing approximation h in A(G) with B in Dom(h), F(B) = h(B), and Restrict(F, B) = Restrict(h, B), the global recursion equation valOf(F, A) = valOf(G, Restrict(F, A)) holds for all A in On.
- **Standalone Certificate:** [proofs/ThmTransfiniteRecursionEquation.html](proofs/ThmTransfiniteRecursionEquation.html)

### 3.97 `ThmTransfiniteRecursionUniqueness` — Step 4 of Transfinite Recursion on On: uniqueness of the transfinite recursion class-function (Theorem)

- **Identifier:** `ThmTransfiniteRecursionUniqueness` (entry `3.97`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `(∀(G:Class)∀(F:Class)∀(H:Class)∀(A:Class)((((∀(B:Class)∀(X:Class)(((B∈On)∧(X=Restrict(F,B)))—→(F(B)=G(X))))∧∀(B:Class)∀(X:Class)(((B∈On)∧(X=Restrict(H,B)))—→(H(B)=G(X))))∧((∀(z:Class)((F(pr1(z))=H(pr1(z)))—→((z∈F)←→(z∈H))))∧(A∈On)))—→((Restrict(F,A)=Restrict(H,A))∧(F(A)=H(A)))))`
- **Scheme of Types (Unicode):** `(∀([G@Variable]:[Class@Type])∀([F@Variable]:[Class@Type])∀([H@Variable]:[Class@Type])∀([A@Variable]:[Class@Type])((((∀([B@Variable]:[Class@Type])∀([X@Variable]:[Class@Type])((([B@Class.Expression]∈On)∧([X@Class.Expression]=Restrict([F@Class.Expression],[B@Class.Expression])))—→([F@Class.Expression]([B@Class.Expression])=[G@Class.Expression]([X@Class.Expression]))))∧∀([B@Variable]:[Class@Type])∀([X@Variable]:[Class@Type])((([B@Class.Expression]∈On)∧([X@Class.Expression]=Restrict([H@Class.Expression],[B@Class.Expression])))—→([H@Class.Expression]([B@Class.Expression])=[G@Class.Expression]([X@Class.Expression]))))∧((∀([z@Variable]:[Class@Type])(([F@Class.Expression](pr1([z@Class.Expression]))=[H@Class.Expression](pr1([z@Class.Expression])))—→(([z@Class.Expression]∈[F@Class.Expression])←→([z@Class.Expression]∈[H@Class.Expression]))))∧([A@Class.Expression]∈On)))—→((Restrict([F@Class.Expression],[A@Class.Expression])=Restrict([H@Class.Expression],[A@Class.Expression]))∧([F@Class.Expression]([A@Class.Expression])=[H@Class.Expression]([A@Class.Expression])))))`
- **Proof Constructor:** `thm_transfinite_recursion_uniqueness (PForaR_prf / PEqDef_prf / PLeftInSoundAx_prf)`
- **Axioms Used:** `AxmLeftInSound, RulClassComprehension, AxmPropVerum, AxmRegularity | Definitions Used: DefIsSet, DefIff, DefClassOfOrdinals, DefOrdinalClass, DefTransitiveClass, DefSubclass, DefUniversalClass, DefPowerClass, DefDomainRestriction, DefClassEq | Kernel Prf Nodes: 12773`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_transfinite_recursion_uniqueness and thm_transfinite_recursion_uniqueness_step : Thm, verified by Thm.checkPipeline and Thm.slow_check): proved by genuine transfinite epsilon-induction (EpsIndAx) on K_4 = { B : Class | (B in On) -> (valOf(F, B) = valOf(H, B)) } using transitivity of On (thm_on_is_transitive) and extensional restriction equality (thm_restrict_eq_from_below under graph value-extensionality forall z, (F(pr1(z)) = H(pr1(z))) -> ((z in F)  (z in H))), concluding Restrict(F, A) = Restrict(H, A) and valOf(F, A) = valOf(H, A) for all A in On.
- **Standalone Certificate:** [proofs/ThmTransfiniteRecursionUniqueness.html](proofs/ThmTransfiniteRecursionUniqueness.html)

### 3.98 `ThmVonNeumannHierarchyByTransfiniteRecursion` — Application of Transfinite Recursion on On: base-stage law and unfolding of VonNeumannStepG(f) = U_(B in A) P(V_B) (Theorem)

- **Identifier:** `ThmVonNeumannHierarchyByTransfiniteRecursion` (entry `3.98`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `(∀(f:Class)∀(V:Class)∀(A:Class)(((∀(B:Class)¬(B∈Dom(f)))—→(VonNeumannStepG(f)=∅))∧(((V(A)=VonNeumannStepG(f))∧((Dom(f)=A)∧∀(B:Class)((B∈A)—→(f(B)=V(B)))))—→((VonNeumannStepG(f)=⋃{Y|∃(B:Class)((B∈A)∧(Y=𝒫(V(B))))})∧(V(A)=⋃{Y|∃(B:Class)((B∈A)∧(Y=𝒫(V(B))))})))))`
- **Scheme of Types (Unicode):** `(∀([f@Variable]:[Class@Type])∀([V@Variable]:[Class@Type])∀([A@Variable]:[Class@Type])(((∀([B@Variable]:[Class@Type])¬([B@Class.Expression]∈Dom([f@Class.Expression])))—→(VonNeumannStepG([f@Class.Expression])=∅))∧((([V@Class.Expression]([A@Class.Expression])=VonNeumannStepG([f@Class.Expression]))∧((Dom([f@Class.Expression])=[A@Class.Expression])∧∀([B@Variable]:[Class@Type])(([B@Class.Expression]∈[A@Class.Expression])—→([f@Class.Expression]([B@Class.Expression])=[V@Class.Expression]([B@Class.Expression])))))—→((VonNeumannStepG([f@Class.Expression])=⋃{[Y@Class.Expression]|∃([B@Variable]:[Class@Type])(([B@Class.Expression]∈[A@Class.Expression])∧([Y@Class.Expression]=𝒫([V@Class.Expression]([B@Class.Expression]))))})∧([V@Class.Expression]([A@Class.Expression])=⋃{[Y@Class.Expression]|∃([B@Variable]:[Class@Type])(([B@Class.Expression]∈[A@Class.Expression])∧([Y@Class.Expression]=𝒫([V@Class.Expression]([B@Class.Expression]))))})))))`
- **Proof Constructor:** `thm_von_neumann_hierarchy_by_recursion (PForaR_prf / PKernelDef_prf / PComprAx_prf / PUnaryUnionDef_prf)`
- **Axioms Used:** `AxmLeftInSound, RulClassComprehension, AxmPropNegElim, AxmPropExFalso | Definitions Used: DefVonNeumannStepGenerator, DefIff, DefUnaryUnion, DefSubclass, DefEmptySet, DefClassEq, DefPowerClass | Kernel Prf Nodes: 10507`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_von_neumann_hierarchy_by_recursion, thm_von_neumann_step_g_empty, thm_von_neumann_step_g_on_stage, and thm_power_cong : Thm, verified by Thm.checkPipeline and Thm.slow_check): proves (1) unconditionally that VonNeumannStepG(f) = ∅ whenever Dom(f) is empty, and (2) conditionally, by unfolding DefVonNeumannStepGenerator and applying powerclass congruence (thm_power_cong: P = Q -> Pow(P) = Pow(Q)), that whenever Dom(f) = A, f agrees with V on A, and V(A) = VonNeumannStepG(f), both VonNeumannStepG(f) and V(A) equal U { Y : Class | exists (B:Class), (B in A) /\ (Y = Pow(valOf(V, B))) }.
- **Standalone Certificate:** [proofs/ThmVonNeumannHierarchyByTransfiniteRecursion.html](proofs/ThmVonNeumannHierarchyByTransfiniteRecursion.html)

### 3.99 `DefPowerClass` — Powerclass operator (Definition)

- **Identifier:** `DefPowerClass` (entry `3.99`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(K:Class)(𝒫(K)={x|x⊆K}))`
- **Scheme of Types (Unicode):** `(∀([K@Variable]:[Class@Type])(𝒫([K@Class.Expression])={[x@Class.Expression]|[x@Class.Expression]⊆[K@Class.Expression]}))`
- **Proof Constructor:** `PKernelDef_prf (def_power_class_cert, [K, x])`
- **Kernel Note:** Conservative class-operator definition (DefPowerClass, def_power_class_cert in 06_definitions.ML, PKernelDef_prf): defines the powerclass 𝒫(K) = { x : Class | x ⊆ K } of any class K as the comprehension class of all set subclasses of K. Paired with the power-set sethood axiom 3.13 AxmExponent (∀(X:Class)((X set) —→ (𝒫(X) set))).
- **Standalone Certificate:** [proofs/DefPowerClass.html](proofs/DefPowerClass.html)

## 4. Metalogical Laws (4.01-4.08) (4.01-4.08)

Explicit substitution, context encoding, co-necessitation, uniqueness quantifiers, and reflected comprehension.

### 4.01 `DefMetaInstantiation` — Instantiation (Axiom)

- **Identifier:** `DefMetaInstantiation` (entry `4.01`, kind: `Axiom`, status: `Postulated (Metalevel Schema, Instance Verified)`)
- **Formula (Unicode):** `(∀(A:Type)∀(G:Ctx.Expression)∀(𝛗:Fm)∀(t:eval(A).Expression)∀(v:Variable)(𝘞,⟦G⟧⊢‹(∀(⦃v⦄:⟦A⟧)⟦𝛗⟧)—→(let ⟦v⟧ = ⟦t⟧ in ⟦𝛗⟧)›))`
- **Scheme of Types (Unicode):** `(∀([A@Variable]:[Type@Type])∀([G@Variable]:[Ctx.Expression@Type])∀([𝛗@Variable]:[Fm@Type])∀([t@Variable]:[eval([A@Type.Expression.Expression]).Expression@Type])∀([v@Variable]:[Variable@Type])(𝘞,⟦[G@Ctx.Expression.Expression]⟧⊢‹(∀([⦃[v@Variable.Expression]⦄@Variable]:[⟦[A@Type.Expression.Expression]⟧@Type])⟦[𝛗@Fm.Expression]⟧)—→(let ⟦[v@Name.Expression]⟧ = ⟦[t@Class.Expression.Expression]⟧ in ⟦[𝛗@Fm.Expression]⟧)›))`
- **Proof Constructor:** `PMetaInst_prf (Γ, x, T, t, φ, PForaL_prf (φ, t, x, p))`
- **Kernel Note:** Postulated +1 metalevel universal instantiation schema (requiring Fm.FFI(t, v, φ) as enforced in IncompletenessMechanization.law_4_01_meta_instantiation), accompanied by a kernel-checked object-level instance (thm_4_01_meta_instantiation / sequent_4_01_instantiation : Thm, checked by Thm.checkPipeline and Thm.slow_check).
- **Standalone Certificate:** [proofs/DefMetaInstantiation.html](proofs/DefMetaInstantiation.html)

### 4.02 `DefMetaGeneralisation` — Generalisation (Axiom)

- **Identifier:** `DefMetaGeneralisation` (entry `4.02`, kind: `Axiom`, status: `Postulated (Metalevel Schema, Instance Verified)`)
- **Formula (Unicode):** `(∀(A:Type)∀(Γ:Ctx)∀(𝛗:Fm)∀(v:Variable)((¬Ctx.IFV(v,Γ))—→((𝘞,Γ⊢𝛗)—→(𝘞,Γ⊢‹∀(⦃v⦄:⟦A⟧)⟦𝛗⟧›))))`
- **Scheme of Types (Unicode):** `(∀([A@Variable]:[Type@Type])∀([Γ@Variable]:[Ctx@Type])∀([𝛗@Variable]:[Fm@Type])∀([v@Variable]:[Variable@Type])((¬Ctx.IFV([v@Variable.Expression],[Γ@Ctx.Expression]))—→((𝘞,[Γ@Ctx.Expression]⊢[𝛗@Fm.Expression])—→(𝘞,[Γ@Ctx.Expression]⊢‹∀([⦃[v@Variable.Expression]⦄@Variable]:[⟦[A@Type.Expression.Expression]⟧@Type])⟦[𝛗@Fm.Expression]⟧›))))`
- **Proof Constructor:** `PMetaGen_prf (Γ, x, x', T, PForaR_prf (Γ, x, x', T, p))`
- **Kernel Note:** Postulated +1 metalevel context-indexed generalisation schema with explicit context freshness guard ¬Ctx.IFV(v, Γ), accompanied by a kernel-checked object-level instance (thm_4_02_meta_generalisation / sequent_4_02_generalisation : Thm). (A theory 𝘞 is assumed here to contain only closed axioms without free variables, so v has no free occurrences in 𝘞 whenever ¬Ctx.IFV(v, Γ) holds.)
- **Standalone Certificate:** [proofs/DefMetaGeneralisation.html](proofs/DefMetaGeneralisation.html)

### 4.03 `DefMetaConecessitation` — CoNecessitation (Inference Rule)

- **Identifier:** `DefMetaConecessitation` (entry `4.03`, kind: `Inference Rule`, status: `Primitive / Derived Rule (Metalevel for 𝘍, Instance Verified)`)
- **Formula (Unicode):** `(∀(Γ:Ctx)∀(𝛗:Fm)((𝘍,[]⊢‹𝘍,Γ⊢𝛗›)—→(𝘍,Γ⊢𝛗)))`
- **Scheme of Types (Unicode):** `(∀([Γ@Variable]:[Ctx@Type])∀([𝛗@Variable]:[Fm@Type])((𝘍,[]⊢‹𝘍,[Γ@Ctx.Expression]⊢[𝛗@Fm.Expression]›)—→(𝘍,[Γ@Ctx.Expression]⊢[𝛗@Fm.Expression])))`
- **Proof Constructor:** `PMetaConec_prf (Γ, φ, PCredo_prf (p))`
- **Kernel Note:** If a formula  is derived in 𝘍 from the empty context, then the formula 𝛗 is derived in 𝘍 from the context Γ. Why this holds for 𝘍: for an arbitrary theory 𝘞, concluding (𝘞, Γ⊢𝛗) from (𝘞, [] ⊢ ) requires 1-consistency / Σ₁-soundness of 𝘞 (and for the r.e. base theory 𝘛, asserting internal co-necessitation would by Löb's theorem 5.01 trivialize 𝘛). Because 𝘍 is a non-r.e. sound Henkin extension equipped with Soundness 3.72 ((𝘍, [] ⊢ ψ) → ⟦ψ⟧), instantiating 3.72 at ψ :=  directly yields (𝘍, Γ⊢𝛗).
- **Standalone Certificate:** [proofs/DefMetaConecessitation.html](proofs/DefMetaConecessitation.html)

### 4.04 `DefAtMostOneBinder` — Quantifier “unique” (Definition)

- **Identifier:** `DefAtMostOneBinder` (entry `4.04`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(𝛗:Fm)((!(z:Class)⟦𝛗⟧)←→(∀(x:Class)∀(y:Class)((⟦𝛗[(x:Class.Expression)/‹z›]⟧∧(let z = y in ⟦𝛗⟧))—→(x=y)))))`
- **Scheme of Types (Unicode):** `(∀([𝛗@Variable]:[Fm@Type])((!([z@Variable]:[Class@Type])⟦[𝛗@Fm.Expression]⟧)←→(∀([x@Variable]:[Class@Type])∀([y@Variable]:[Class@Type])((⟦[𝛗@Fm.Expression][([x@Class.Expression.Expression]:Class.Expression)/‹z›]⟧∧(let z = [y@Class.Expression] in ⟦[𝛗@Fm.Expression]⟧))—→([x@Class.Expression]=[y@Class.Expression])))))`
- **Proof Constructor:** `PAtMostOneDef_prf (x, y, φ, PForaR_prf (Γ, x, x, Class, PForaR_prf (Γ, y, y, Class, PImplR_prf (PEqDef_prf (x, y)))))`
- **Kernel Note:** Definitional metalevel schema for the at-most-one binder (!(z:Class)φ), subject to the variable freshness and capture-avoidance side conditions x ≠ y, ¬Fm.IFV(x, φ), ¬Fm.IFV(y, φ), Fm.FFI(x, z, φ), and Fm.FFI(y, z, φ) (enforced in IncompletenessMechanization.law_4_04_at_most_one_binder_def and accompanied by the class-level witness DefAtMostOneMember / sequent_4_04_at_most_one : Thm).
- **Standalone Certificate:** [proofs/DefAtMostOneBinder.html](proofs/DefAtMostOneBinder.html)

### 4.05 `DefExistsUniqueBinder` — Quantifier “exists and unique” (Definition)

- **Identifier:** `DefExistsUniqueBinder` (entry `4.05`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(𝛗:Fm)(𝘛,[]⊢‹(∃!(x:Class)⟦𝛗⟧)←→((∃(x:Class)⟦𝛗⟧)∧!(x:Class)⟦𝛗⟧)›))`
- **Scheme of Types (Unicode):** `(∀([𝛗@Variable]:[Fm@Type])(𝘛,[]⊢‹(∃!([x@Variable]:[Class@Type])⟦[𝛗@Fm.Expression]⟧)←→((∃([x@Variable]:[Class@Type])⟦[𝛗@Fm.Expression]⟧)∧!([x@Variable]:[Class@Type])⟦[𝛗@Fm.Expression]⟧)›))`
- **Proof Constructor:** `PExisUniqDef_prf (x, φ, PAndR_prf (PExisR_prf (φ, x, x, p), PAtMostOneDef_prf (x, y, φ, q)))`
- **Kernel Note:** Kernel-verified exists-unique binder definition (thm_4_05_exists_unique_binder : Thm, checked by Thm.checkPipeline and Thm.slow_check).
- **Standalone Certificate:** [proofs/DefExistsUniqueBinder.html](proofs/DefExistsUniqueBinder.html)

### 4.06 `AxmMetaClassComprehension` — Class comprehension axiom schema (Axiom)

- **Identifier:** `AxmMetaClassComprehension` (entry `4.06`, kind: `Axiom`, status: `Postulated (Metalevel Schema, Instance Verified)`)
- **Formula (Unicode):** `(∀(𝛗:Fm)∀(x:Variable)∀(k:Class.Expression)(Fm.FFI((k:Class.Expression),x,𝛗)—→(𝘛,[]⊢‹(⟦k⟧∈{⦃x⦄|⟦𝛗⟧})←→((⟦k⟧ set)∧(let x = ⟦k⟧ in ⟦𝛗⟧))›)))`
- **Scheme of Types (Unicode):** `(∀([𝛗@Variable]:[Fm@Type])∀([x@Variable]:[Variable@Type])∀([k@Variable]:[Class.Expression@Type])(Fm.FFI(([k@Class.Expression.Expression]:Class.Expression),[x@Variable.Expression],[𝛗@Fm.Expression])—→(𝘛,[]⊢‹(⟦[k@Class.Expression.Expression]⟧∈{[⦃[x@Variable.Expression]⦄@Class.Expression]|⟦[𝛗@Fm.Expression]⟧})←→((⟦[k@Class.Expression.Expression]⟧ set)∧(let [x@Name.Expression] = ⟦[k@Class.Expression.Expression]⟧ in ⟦[𝛗@Fm.Expression]⟧))›)))`
- **Proof Constructor:** `PMetaComprAx_prf (Γ, x, y, φ, PComprAx_prf (φ))`
- **Kernel Note:** Postulated +1 metalevel class comprehension schema guarded by Fm.FFI(k, x, φ), accompanied by a kernel-checked object-level instance (thm_4_06_meta_class_comprehension / sequent_4_06_comprehension : Thm, checked by Thm.checkPipeline and Thm.slow_check).
- **Standalone Certificate:** [proofs/AxmMetaClassComprehension.html](proofs/AxmMetaClassComprehension.html)

### 4.07 `DefReducedVarSubst` — Reduced object-level variable substitution operator SubstVar(t, x, v) (Definition)

- **Identifier:** `DefReducedVarSubst` (entry `4.07`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(t:Class)∀(x:Class)∀(v:Class)(SubstVar(t,x,v)={u|((v=x)∧(u∈t))∨((¬(v=x))∧(u∈v))}))`
- **Scheme of Types (Unicode):** `(∀([t@Variable]:[Class@Type])∀([x@Variable]:[Class@Type])∀([v@Variable]:[Class@Type])(SubstVar([t@Class.Expression],[x@Class.Expression],[v@Class.Expression])={[u@Class.Expression]|(([v@Class.Expression]=[x@Class.Expression])∧([u@Class.Expression]∈[t@Class.Expression]))∨((¬([v@Class.Expression]=[x@Class.Expression]))∧([u@Class.Expression]∈[v@Class.Expression]))}))`
- **Proof Constructor:** `PKernelDef_prf (def_reduced_var_subst_cert, [t, x, v, u])`
- **Kernel Note:** Conservative definition (DefReducedVarSubst, PKernelDef_prf, verified by Thm.checkPipeline and Thm.slow_check): explicit 3-argument object-level substitution operator SubstVar(t, x, v) = { u : Class | (((v = x) /\ (u in t)) \/ ((~(v = x)) /\ (u in v))) } taking (1) what is being substituted (t), (2) instead of what (x), and (3) where (v), internalizing atomic variable substitution as a first-class object inside MKTD1-theory.
- **Standalone Certificate:** [proofs/DefReducedVarSubst.html](proofs/DefReducedVarSubst.html)

### 4.08 `ThmReducedVarSubstLaws` — Hit, miss, idempotence, and diagonal evaluation laws of reduced object-level variable substitution SubstVar(t, x, v) (Theorem)

- **Identifier:** `ThmReducedVarSubstLaws` (entry `4.08`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `((∀(t:Class)∀(x:Class)∀(v:Class)(((v=x)—→(SubstVar(t,x,v)=t))∧((¬(v=x))—→(SubstVar(t,x,v)=v))))∧((∀(x:Class)∀(v:Class)(SubstVar(x,x,v)=v))∧∀(a:Class)∀(x:Class)(SubstVar(a,x,x)=a)))`
- **Scheme of Types (Unicode):** `((∀([t@Variable]:[Class@Type])∀([x@Variable]:[Class@Type])∀([v@Variable]:[Class@Type])((([v@Class.Expression]=[x@Class.Expression])—→(SubstVar([t@Class.Expression],[x@Class.Expression],[v@Class.Expression])=[t@Class.Expression]))∧((¬([v@Class.Expression]=[x@Class.Expression]))—→(SubstVar([t@Class.Expression],[x@Class.Expression],[v@Class.Expression])=[v@Class.Expression]))))∧((∀([x@Variable]:[Class@Type])∀([v@Variable]:[Class@Type])(SubstVar([x@Class.Expression],[x@Class.Expression],[v@Class.Expression])=[v@Class.Expression]))∧∀([a@Variable]:[Class@Type])∀([x@Variable]:[Class@Type])(SubstVar([a@Class.Expression],[x@Class.Expression],[x@Class.Expression])=[a@Class.Expression])))`
- **Proof Constructor:** `thm_reduced_var_subst_laws (PForaR_prf / PKernelDef_prf / PComprAx_prf / PEqDef_prf)`
- **Axioms Used:** `AxmLeftInSound, RulClassComprehension, AxmPropNegElim, AxmPropExFalso, AxmPropExcludedMiddle | Definitions Used: DefReducedVarSubst, DefIff, DefSubclass, DefIsSet, DefClassEq | Kernel Prf Nodes: 2069`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_reduced_var_subst_laws, thm_reduced_var_subst_hit, thm_reduced_var_subst_miss, thm_reduced_var_subst_idempotent_self, and thm_reduced_var_subst_chain_same_var : Thm, verified by Thm.checkPipeline and Thm.slow_check): proves inside MKTD1-theory the hit law (v = x) -> (SubstVar(t, x, v) = t), the miss law (~(v = x)) -> (SubstVar(t, x, v) = v), the self-substitution identity SubstVar(x, x, v) = v, and the diagonal evaluation identity SubstVar(a, x, x) = a.
- **Standalone Certificate:** [proofs/ThmReducedVarSubstLaws.html](proofs/ThmReducedVarSubstLaws.html)

## 5. Incompleteness-Related Statements (5.01-5.02) (5.01-5.02)

Formalized Löb's theorem and Gödel's second incompleteness theorem.

### 5.01 `ThmLoeb` — Löb's theorem (Theorem)

- **Identifier:** `ThmLoeb` (entry `5.01`, kind: `Theorem`, status: `Verified (Relative to DiagonalLemma & HBL D1-D3)`)
- **Formula (Unicode):** `(∀(𝛗:Fm)(𝘌,[]⊢‹(𝘛,[]⊢‹(𝘛,[]⊢𝛗)—→⟦𝛗⟧›)—→(𝘛,[]⊢𝛗)›))`
- **Scheme of Types (Unicode):** `(∀([𝛗@Variable]:[Fm@Type])(𝘌,[]⊢‹(𝘛,[]⊢‹(𝘛,[]⊢[𝛗@Fm.Expression])—→⟦[𝛗@Fm.Expression]⟧›)—→(𝘛,[]⊢[𝛗@Fm.Expression])›))`
- **Proof Constructor:** `PLoeb_prf (ψ, PMP_prf (PDiagFixedPoint_prf (ψ, φ), PAndR_prf (PHBL1_prf (ψ), PAndR_prf (PHBL2_prf (ψ, φ), PHBL3_prf (ψ)))))`
- **Axioms Used:** `AxmPropWeakening, AxmPropFrege, RulModusPonens, DiagonalLemma, HBL_D1_D2_D3 | Definitions Used: DefMetaInstantiation, DefMetaGeneralisation | Kernel Prf Nodes: 11`
- **Kernel Note:** Verified in IncompletenessMechanization.derive_loeb_trace (incompleteness.ML:1103-1215, 10-step derivation of Löb's theorem from the Diagonal Lemma fixed point ψ ⟷ ((𝘛, [] ⊢ ψ) —→ φ), Hilbert-Bernays-Löb derivability conditions D1-D3, and propositional axioms A01, A02, MP, bridged to a 10-node kernel certificate in IncompletenessMKTD1Kernel). Here 𝘌 ∈ {IΣ₁, PA, 𝘛, NBG, MK} is an unspecified elementary metatheory capable of proving HBL conditions D1-D3 for the r.e. base theory 𝘛 (specifically D3, formalized / internal Σ₁-completeness ψ —→ Pr_𝘛(⌜ψ⌝), which requires Σ₁-induction IΣ₁ and cannot be proved inside Robinson's arithmetic Q even though Q is externally Σ₁-complete for true Σ₁ sentences; see Hájek & Pudlák 1993; Bezboruah & Shepherdson 1976; Boolos 1993).
- **Standalone Certificate:** [proofs/ThmLoeb.html](proofs/ThmLoeb.html)

### 5.02 `ThmSecondIncompleteness` — Gödel's second incompleteness theorem (Theorem)

- **Identifier:** `ThmSecondIncompleteness` (entry `5.02`, kind: `Theorem`, status: `Verified (Relative to ThmLoeb & HBL D1-D2)`)
- **Formula (Unicode):** `(𝘌,[]⊢‹(¬(𝘛,[]⊢‹⊥›))—→¬(𝘛,[]⊢‹¬(𝘛,[]⊢‹⊥›)›)›)`
- **Scheme of Types (Unicode):** `(𝘌,[]⊢‹(¬(𝘛,[]⊢‹⊥›))—→¬(𝘛,[]⊢‹¬(𝘛,[]⊢‹⊥›)›)›)`
- **Proof Constructor:** `PSecondIncompl_prf (Τ, PMP_prf (PLoebInstBot_prf (Τ, ⊥), PImplR_prf (PConsistencyDef_prf (Τ, ⊥))))`
- **Axioms Used:** `AxmPropWeakening, AxmPropFrege, AxmPropNegElim, AxmPropNegIntro, RulModusPonens, ThmLoeb, HBL_D1_D2 | Definitions Used: DefMetaInstantiation, DefMetaGeneralisation | Kernel Prf Nodes: 11`
- **Kernel Note:** Verified in IncompletenessMechanization.derive_second_incompleteness_trace (incompleteness.ML:1229-1261, 5-step derivation of Gödel's second incompleteness theorem instantiating 5.01 Löb's theorem at φ := ⊥, internalizing the forward negation elimination law ¬α —→ (α —→ ⊥) via A09 inside 𝘛 with HBL D1-D2, and applying contrapositive via A10 in 𝘌, bridged to an 11-node kernel certificate in IncompletenessMKTD1Kernel). Formalized in the unspecified elementary metatheory 𝘌 ∈ {IΣ₁, PA, 𝘛, NBG, MK} for the r.e. object theory 𝘛 (whereas 𝘍 is non-r.e.).
- **Standalone Certificate:** [proofs/ThmSecondIncompleteness.html](proofs/ThmSecondIncompleteness.html)

