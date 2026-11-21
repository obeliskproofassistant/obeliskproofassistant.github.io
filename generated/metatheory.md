<!-- AUTO-GENERATED FILE -- DO NOT EDIT DIRECTLY BY AI OR HAND.
     Source files: set_theory_prover/program/newchecker.ML,
                   set_theory_prover/program/types/typetheory.ML,
                   set_theory_prover/program/types/foundations.ML,
                   set_theory_prover/program/types/entries.ML
     Generator:    set_theory_prover/program/html_generator.ML
     Regenerate:   cd /hostramdisk/set_theory_prover/program && poly -q --use export_theory_db.ML
-->

# Obelisk Proof Assistant — Metatheory, Explicit Substitution & Incompleteness

Directly generated from `newchecker.ML` via `types/order_metatheory.txt`.

- **Machine-Readable JSON Database:** [theory_db.json](theory_db.json)
- **MKTD2-system Formulas-as-Types Markdown:** [nbg_library.md](nbg_library.md)
- **MKTD2-system JSON Database:** [nbg_library.json](nbg_library.json)
- **Plain-Text Specification:** [output.txt](output.txt)

## 3. Set/Class-Theoretic Foundations (3.01-3.98) (3.01-3.98)

Impredicative Morse-Kelley (MKTD1-theory) class comprehension, sethood, ordinals, Dunaev pairs, cardinals, universes, and reflection.

### 3.72 `AxmSoundnessOfFullTheory` — Soundness of the theory 𝘍 (Axiom)

- **Identifier:** `AxmSoundnessOfFullTheory` (entry `3.72`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(∀(𝛗:Fm)((𝘍,[]⊢𝛗)—→eval(𝛗)))`
- **Scheme of Types (Unicode):** `(∀([𝛗@Variable]:[Fm@Type])((𝘍,[]⊢[𝛗@Fm.Expression])—→eval([𝛗@Fm.Expression])))`
- **Proof Constructor:** `PCredo_prf (p)`
- **Kernel Note:** Soundness of the non-recursively-enumerable (non-r.e.) Henkin completion 𝘍: if (𝘍, [] ⊢ φ), then ⟦φ⟧ holds in the fixed background model M. Why this avoids Tarski and Löb inconsistency: While the r.e. base theory 𝘛 cannot assert its own soundness without violating Gödel's second incompleteness theorem and Löb's theorem (hence soundness of 𝘛 is not postulated in 𝘛), the full theory 𝘍 is non-r.e. and Henkin-complete (Th(M)). The evaluation operator ⟦φ⟧ lives in the +1 metalogic on the base formula sublanguage Fm₀ without self-referential truth predicate internalisation, avoiding Tarski undefinability.
- **Standalone Certificate:** [proofs/AxmSoundnessOfFullTheory.html](proofs/AxmSoundnessOfFullTheory.html)

### 3.73 `AxmSemanticCompletenessOfFullTheory` — Semantic Completeness of the theory 𝘍 (Axiom)

- **Identifier:** `AxmSemanticCompletenessOfFullTheory` (entry `3.73`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(∀(𝛗:Fm)(eval(𝛗)—→(𝘍,[]⊢𝛗)))`
- **Scheme of Types (Unicode):** `(∀([𝛗@Variable]:[Fm@Type])(eval([𝛗@Fm.Expression])—→(𝘍,[]⊢[𝛗@Fm.Expression])))`
- **Proof Constructor:** `POmnisSem_prf (p)`
- **Kernel Note:** Semantic completeness (omniscience, 3.73, POmnisSem_prf) of the non-r.e. Henkin completion 𝘍: for every sentence φ, if φ evaluates to true in the background model M (⟦φ⟧), then φ is formally derivable in 𝘍 (𝘍, [] ⊢ φ). Strictly decoupled from syntactic negation-completeness (3.74 AxmNegationCompletenessOfFullTheory). Together with Soundness of 𝘍 (3.72), this establishes (𝘍, [] ⊢ φ) ⇔ ⟦φ⟧, identifying 𝘍 as the complete true theory Th(M).
- **Standalone Certificate:** [proofs/AxmSemanticCompletenessOfFullTheory.html](proofs/AxmSemanticCompletenessOfFullTheory.html)

### 3.74 `AxmNegationCompletenessOfFullTheory` — Negation-Completeness of the theory 𝘍 (Axiom)

- **Identifier:** `AxmNegationCompletenessOfFullTheory` (entry `3.74`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(∀(𝛗:Fm)((¬(𝘍,[]⊢‹¬𝛗›))—→(𝘍,[]⊢𝛗)))`
- **Scheme of Types (Unicode):** `(∀([𝛗@Variable]:[Fm@Type])((¬(𝘍,[]⊢‹¬[𝛗@Fm]›))—→(𝘍,[]⊢[𝛗@Fm.Expression])))`
- **Proof Constructor:** `POmnisNeg_prf (p)`
- **Kernel Note:** Syntactic negation-completeness (3.74, POmnisNeg_prf) of the non-r.e. Henkin completion 𝘍: for every sentence φ, if ¬φ is not derivable in 𝘍 (¬(𝘍, [] ⊢ ¬φ)), then φ is derivable in 𝘍 (𝘍, [] ⊢ φ). Strictly decoupled from semantic completeness / omniscience (3.73 AxmSemanticCompletenessOfFullTheory). In classical logic, this is equivalent to (𝘍, [] ⊢ φ) ∨ (𝘍, [] ⊢ ¬φ). In the bivalent semantics of the background model M (⟦φ⟧ ∨ ⟦¬φ⟧), negation-completeness follows from semantic completeness (3.73), and conversely implies semantic completeness (3.73) given Soundness of 𝘍 (3.72).
- **Standalone Certificate:** [proofs/AxmNegationCompletenessOfFullTheory.html](proofs/AxmNegationCompletenessOfFullTheory.html)

### 3.75 `AxmBaseSubtheoryOfFull` — If a formula is derivable in 𝘛, then it is derivable in 𝘍 (Axiom)

- **Identifier:** `AxmBaseSubtheoryOfFull` (entry `3.75`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(∀(Γ:Ctx)∀(𝛗:Fm)((𝘛,Γ⊢𝛗)—→(𝘍,Γ⊢𝛗)))`
- **Scheme of Types (Unicode):** `(∀([Γ@Variable]:[Ctx@Type])∀([𝛗@Variable]:[Fm@Type])((𝘛,[Γ@Ctx.Expression]⊢[𝛗@Fm.Expression])—→(𝘍,[Γ@Ctx.Expression]⊢[𝛗@Fm.Expression])))`
- **Proof Constructor:** `TpHolds (s)`
- **Kernel Note:** Theory extension monotonicity (𝘛 ⊆ 𝘍): every theorem of the r.e. base theory 𝘛 is also a theorem of its non-r.e. Henkin completion 𝘍.
- **Standalone Certificate:** [proofs/AxmBaseSubtheoryOfFull.html](proofs/AxmBaseSubtheoryOfFull.html)

## 4. Metalogical Laws (4.01-4.08) (4.01-4.08)

Explicit substitution, context encoding, co-necessitation, uniqueness quantifiers, and reflected comprehension.

### 4.01 `DefMetaInstantiation` — Instantiation (Axiom)

- **Identifier:** `DefMetaInstantiation` (entry `4.01`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(∀(A:Type)∀(G:Ctx.Expression)∀(𝛗:Fm)∀(t:eval(A).Expression)∀(v:Variable)(𝘞,⟦G⟧⊢‹(∀(⦃v⦄:⟦A⟧)⟦𝛗⟧)—→(let ⟦v⟧ = ⟦t⟧ in ⟦𝛗⟧)›))`
- **Scheme of Types (Unicode):** `(∀([A@Variable]:[Type@Type])∀([G@Variable]:[Ctx.Expression@Type])∀([𝛗@Variable]:[Fm@Type])∀([t@Variable]:[eval([A@Type.Expression.Expression]).Expression@Type])∀([v@Variable]:[Variable@Type])(𝘞,⟦[G@Ctx.Expression.Expression]⟧⊢‹(∀([⦃[v@Variable.Expression]⦄@Variable]:[⟦[A@Type.Expression.Expression]⟧@Type])⟦[𝛗@Fm.Expression]⟧)—→(let ⟦[v@Name.Expression]⟧ = ⟦[t@Class.Expression.Expression]⟧ in ⟦[𝛗@Fm.Expression]⟧)›))`
- **Proof Constructor:** `PMetaInst_prf (Γ, x, T, t, φ, PForaL_prf (φ, t, x, p))`
- **Kernel Note:** Kernel-verified metalevel universal instantiation schema (thm_4_01_finiteness / thm_4_01_meta_instantiation : Thm, checked by Thm.checkPipeline and Thm.slow_check).
- **Standalone Certificate:** [proofs/DefMetaInstantiation.html](proofs/DefMetaInstantiation.html)

### 4.02 `DefMetaGeneralisation` — Generalisation (Axiom)

- **Identifier:** `DefMetaGeneralisation` (entry `4.02`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(∀(A:Type)∀(Γ:Ctx)∀(𝛗:Fm)∀(v:Variable)((¬Ctx.IFV(v,Γ))—→((𝘞,Γ⊢𝛗)—→(𝘞,Γ⊢‹∀(⦃v⦄:A)⟦𝛗⟧›))))`
- **Scheme of Types (Unicode):** `(∀([A@Variable]:[Type@Type])∀([Γ@Variable]:[Ctx@Type])∀([𝛗@Variable]:[Fm@Type])∀([v@Variable]:[Variable@Type])((¬Ctx.IFV([v@Variable.Expression],[Γ@Ctx.Expression]))—→((𝘞,[Γ@Ctx.Expression]⊢[𝛗@Fm.Expression])—→(𝘞,[Γ@Ctx.Expression]⊢‹∀([⦃[v@Variable.Expression]⦄@Variable]:[[A@Type]@Type])⟦[𝛗@Fm.Expression]⟧›))))`
- **Proof Constructor:** `PMetaGen_prf (Γ, x, x', T, PForaR_prf (Γ, x, x', T, p))`
- **Kernel Note:** (A theory 𝘞 is assumed here to contain only formulas without free variables, so the variable x has no free occurences in any formula of a set of formulas [|Dec(Theory.Expression)(W)|]. Here Enc(v) (μ_Variable(v) : Variable.Expression → Class.Expression) denotes the explicit typed term interpretation / valuation homomorphism mapping a typed term of sort A into a term of sort Class while respecting the fixed model and variable valuation.)
- **Standalone Certificate:** [proofs/DefMetaGeneralisation.html](proofs/DefMetaGeneralisation.html)

### 4.03 `DefMetaConecessitation` — CoNecessitation (Inference Rule)

- **Identifier:** `DefMetaConecessitation` (entry `4.03`, kind: `Inference Rule`, status: `Primitive / Derived Rule (Kernel)`)
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
- **Kernel Note:** Kernel-verified at-most-one binder definition (thm_4_04_at_most_one_binder : Thm, checked by Thm.checkPipeline and Thm.slow_check).
- **Standalone Certificate:** [proofs/DefAtMostOneBinder.html](proofs/DefAtMostOneBinder.html)

### 4.05 `DefExistsUniqueBinder` — Quantifier “exists and unique” (Definition)

- **Identifier:** `DefExistsUniqueBinder` (entry `4.05`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(𝛗:Fm)(𝘛,[]⊢‹(∃!(x:Class)⟦𝛗⟧)←→((∃(x:Class)⟦𝛗⟧)∧!(x:Class)⟦𝛗⟧)›))`
- **Scheme of Types (Unicode):** `(∀([𝛗@Variable]:[Fm@Type])(𝘛,[]⊢‹(∃!([x@Variable]:[Class@Type])⟦[𝛗@Fm.Expression]⟧)←→((∃([x@Variable]:[Class@Type])⟦[𝛗@Fm.Expression]⟧)∧!([x@Variable]:[Class@Type])⟦[𝛗@Fm.Expression]⟧)›))`
- **Proof Constructor:** `PExisUniqDef_prf (x, φ, PAndR_prf (PExisR_prf (φ, x, x, p), PAtMostOneDef_prf (x, y, φ, q)))`
- **Kernel Note:** Kernel-verified exists-unique binder definition (thm_4_05_exists_unique_binder : Thm, checked by Thm.checkPipeline and Thm.slow_check).
- **Standalone Certificate:** [proofs/DefExistsUniqueBinder.html](proofs/DefExistsUniqueBinder.html)

### 4.06 `AxmMetaClassComprehension` — Class comprehension axiom schema (Axiom)

- **Identifier:** `AxmMetaClassComprehension` (entry `4.06`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(∀(𝛗:Fm)∀(x:Name)∀(k:Class.Expression)(Fm.FFI((k:Class.Expression),‹x›,𝛗)—→(𝘛,[]⊢‹(⟦k⟧∈{⦃x⦄|⟦𝛗⟧})←→((⟦k⟧ set)∧(let x = ⟦k⟧ in ⟦𝛗⟧))›)))`
- **Scheme of Types (Unicode):** `(∀([𝛗@Variable]:[Fm@Type])∀([x@Variable]:[Name@Type])∀([k@Variable]:[Class.Expression@Type])(Fm.FFI(([k@Class.Expression.Expression]:Class.Expression),‹[x@Name.Expression]›,[𝛗@Fm.Expression])—→(𝘛,[]⊢‹(⟦[k@Class.Expression.Expression]⟧∈{[⦃[x@Variable.Expression]⦄@Class.Expression]|⟦[𝛗@Fm.Expression]⟧})←→((⟦[k@Class.Expression.Expression]⟧ set)∧(let [x@Name.Expression] = ⟦[k@Class.Expression.Expression]⟧ in ⟦[𝛗@Fm.Expression]⟧))›)))`
- **Proof Constructor:** `PMetaComprAx_prf (Γ, x, y, φ, PComprAx_prf (φ))`
- **Kernel Note:** Kernel-verified metalevel class comprehension schema (thm_4_06_meta_class_comprehension : Thm, checked by Thm.checkPipeline and Thm.slow_check) guarded by Fm.FFI.
- **Standalone Certificate:** [proofs/AxmMetaClassComprehension.html](proofs/AxmMetaClassComprehension.html)

## 5. Incompleteness-Related Statements (5.01-5.02) (5.01-5.02)

Formalized Löb's theorem and Gödel's second incompleteness theorem.

### 5.01 `ThmLoeb` — Löb's theorem (Theorem)

- **Identifier:** `ThmLoeb` (entry `5.01`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `(∀(𝛗:Fm)(𝘌,[]⊢‹(𝘛,[]⊢‹(𝘛,[]⊢𝛗)—→⟦𝛗⟧›)—→(𝘛,[]⊢𝛗)›))`
- **Scheme of Types (Unicode):** `(∀([𝛗@Variable]:[Fm@Type])(𝘌,[]⊢‹(𝘛,[]⊢‹(𝘛,[]⊢[𝛗@Fm.Expression])—→⟦[𝛗@Fm.Expression]⟧›)—→(𝘛,[]⊢[𝛗@Fm.Expression])›))`
- **Proof Constructor:** `PLoeb_prf (ψ, PMP_prf (PDiagFixedPoint_prf (ψ, φ), PAndR_prf (PHBL1_prf (ψ), PAndR_prf (PHBL2_prf (ψ, φ), PHBL3_prf (ψ)))))`
- **Axioms Used:** `AxmPropWeakening, AxmPropFrege, RulModusPonens | Definitions Used: DefMetaInstantiation, DefMetaGeneralisation | Kernel Prf Nodes: 1`
- **Kernel Note:** Here 𝘌 ∈ {IΣ₁, PA, 𝘛, NBG, MK} is an unspecified elementary metatheory capable of proving the Hilbert-Bernays-Löb derivability conditions D1-D3 for the r.e. base theory 𝘛 (specifically D3, Σ₁-completeness, which requires Σ₁-induction and fails in Robinson's arithmetic Q; see Hájek & Pudlák 1993, Metamathematics of First-Order Arithmetic, Ch. I §3 & Ch. III; Bezboruah & Shepherdson 1976, JSL 41(2):503-512; Boolos 1993, The Logic of Provability, Ch. 2).
- **Standalone Certificate:** [proofs/ThmLoeb.html](proofs/ThmLoeb.html)

### 5.02 `ThmSecondIncompleteness` — Gödel's second incompleteness theorem (Theorem)

- **Identifier:** `ThmSecondIncompleteness` (entry `5.02`, kind: `Theorem`, status: `Verified`)
- **Formula (Unicode):** `(𝘌,[]⊢‹(¬(𝘛,[]⊢‹⊥›))—→¬(𝘛,[]⊢‹¬(𝘛,[]⊢‹⊥›)›)›)`
- **Scheme of Types (Unicode):** `(𝘌,[]⊢‹(¬(𝘛,[]⊢‹⊥›))—→¬(𝘛,[]⊢‹¬(𝘛,[]⊢‹⊥›)›)›)`
- **Proof Constructor:** `PSecondIncompl_prf (Τ, PMP_prf (PLoebInstBot_prf (Τ, ⊥), PImplR_prf (PConsistencyDef_prf (Τ, ⊥))))`
- **Axioms Used:** `AxmPropWeakening, AxmPropFrege, AxmPropNegElim, RulModusPonens | Definitions Used: DefMetaInstantiation, DefMetaGeneralisation, ThmLoeb | Kernel Prf Nodes: 1`
- **Kernel Note:** Formalized in the unspecified elementary metatheory 𝘌 ∈ {IΣ₁, PA, 𝘛, NBG, MK} (not Robinson's Q, which lacks Σ₁-induction needed for HBL condition D3; cf. Hájek & Pudlák 1993; Bezboruah & Shepherdson 1976) for the recursively enumerable object theory 𝘛. Note that Gödel's second incompleteness theorem applies to the r.e. theory 𝘛, whereas 𝘍 is non-r.e.
- **Standalone Certificate:** [proofs/ThmSecondIncompleteness.html](proofs/ThmSecondIncompleteness.html)

