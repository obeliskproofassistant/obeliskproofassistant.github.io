<!-- AUTO-GENERATED FILE -- DO NOT EDIT DIRECTLY BY AI OR HAND.
     Source files: set_theory_prover/program/newchecker.ML,
                   set_theory_prover/program/types/typetheory.ML,
                   set_theory_prover/program/types/foundations.ML,
                   set_theory_prover/program/types/entries.ML
     Generator:    set_theory_prover/program/html_generator.ML
     Regenerate:   cd /botworkspace/set_theory_prover/program && poly -q --use export_theory_db.ML
-->

# Obelisk Proof Assistant — Metatheory, Explicit Substitution & Incompleteness

Directly generated from `newchecker.ML` via `types/order_metatheory.txt`.

- **Machine-Readable JSON Database:** [theory_db.json](theory_db.json)
- **MKTD2-system Formulas-as-Types Markdown:** [nbg_library.md](nbg_library.md)
- **MKTD2-system JSON Database:** [nbg_library.json](nbg_library.json)
- **Plain-Text Specification:** [output.txt](output.txt)

## 3. Set/Class-Theoretic Foundations (3.01-3.100) (3.01-3.100)

Impredicative Morse-Kelley (MKTD1-theory) class comprehension, sethood, ordinals, Dunaev pairs, cardinals, universes, and reflection.

### 3.72 `AxmSoundnessOfFullTheory` — Soundness of the theory 𝘍 (Axiom)

- **Identifier:** `AxmSoundnessOfFullTheory` (entry `3.72`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(∀(𝛗:Fm)((𝘍,[]⊢𝛗)—→eval(𝛗)))`
- **Scheme of Types (Unicode):** `(∀([𝛗@Variable]:[Fm@Type])((𝘍,[]⊢[𝛗@Fm.Expression])—→eval([𝛗@Fm.Expression])))`
- **Proof Constructor:** `PCredo_prf (p)`
- **Kernel Note:** Soundness of the non-r.e. theory of the intended model 𝘍: if (𝘍, [] ⊢ φ), then ⟦φ⟧ holds in the fixed background model M. Two-Level Stratification (How the Kernel Excludes TpHolds(IpFau, ...) from Object-Level Fm₀): In MKTD1-system (FACTBOOK section 6 (metalevels)), object-level set/class formulas live at metalevel 0 (sort Fm₀, enforced in the kernel by KernelDefinitions.is_object_level_fm0 in newchecker/06_definitions.ML and checked on every PComprAx_prf class comprehension node in newchecker/07_theorems.ML), which explicitly rejects TpHolds, EEval, TpFFI, TpIFV, and TpCtxIFV inside object-level class comprehension {x | φ} and object-level predicate/class definitions. Because 3.72-3.74 and 4.03 live at metalevel +1 and TpHolds(IpFau, ...) is barred from Fm₀ comprehension by is_object_level_fm0, the object-level diagonal lemma cannot be applied to (𝘍, [] ⊢ ·) to form a Tarski liar sentence or a Löb fixed point ψ ⟷ ((𝘍, [] ⊢ ψ) —→ φ).
- **Standalone Certificate:** [proofs/AxmSoundnessOfFullTheory.html](proofs/AxmSoundnessOfFullTheory.html)

### 3.73 `AxmSemanticCompletenessOfFullTheory` — Semantic Completeness of the theory 𝘍 (Statement)

- **Identifier:** `AxmSemanticCompletenessOfFullTheory` (entry `3.73`, kind: `Statement`, status: `Metatheorem (Holds by the Definition of F, Not a Kernel Rule)`)
- **Formula (Unicode):** `(∀(𝛗:Fm)(eval(𝛗)—→(𝘍,[]⊢𝛗)))`
- **Scheme of Types (Unicode):** `(∀([𝛗@Variable]:[Fm@Type])(eval([𝛗@Fm.Expression])—→(𝘍,[]⊢[𝛗@Fm.Expression])))`
- **Proof Constructor:** `(metatheorem: holds by the definition of F; not a kernel rule)`
- **Kernel Note:** Semantic completeness (omniscience, 3.73) of the non-r.e. theory of the intended model 𝘍 at metalevel 1: for every object-level sentence φ : Fm, if φ evaluates to true in the background model M (⟦φ⟧), then φ is formally derivable in 𝘍 (𝘍, [] ⊢ φ). It holds by the definition of 𝘍 as the theory of the intended model (FACTBOOK section 2) and is a metatheorem, not a kernel rule. Stated separately from syntactic negation-completeness (3.74 AxmNegationCompletenessOfFullTheory, which is stated purely in terms of ⊢ and ¬ without mentioning ⟦φ⟧): neither implies the other in isolation, while under Soundness of 𝘍 (3.72) and classical model bivalence (⟦φ⟧ ∨ ⟦¬φ⟧) they are conditionally equivalent.
- **Standalone Certificate:** [proofs/AxmSemanticCompletenessOfFullTheory.html](proofs/AxmSemanticCompletenessOfFullTheory.html)

### 3.74 `AxmNegationCompletenessOfFullTheory` — Negation-Completeness of the theory 𝘍 (Statement)

- **Identifier:** `AxmNegationCompletenessOfFullTheory` (entry `3.74`, kind: `Statement`, status: `Metatheorem (Holds by the Definition of F, Not a Kernel Rule)`)
- **Formula (Unicode):** `(∀(𝛗:Fm)((¬(𝘍,[]⊢‹¬𝛗›))—→(𝘍,[]⊢𝛗)))`
- **Scheme of Types (Unicode):** `(∀([𝛗@Variable]:[Fm@Type])((¬(𝘍,[]⊢‹¬[𝛗@Fm]›))—→(𝘍,[]⊢[𝛗@Fm.Expression])))`
- **Proof Constructor:** `(metatheorem: holds by the definition of F; not a kernel rule)`
- **Kernel Note:** Syntactic negation-completeness (3.74) of the non-r.e. theory of the intended model 𝘍 at metalevel 1: for every object-level sentence φ : Fm, if ¬φ is not derivable in 𝘍 (¬(𝘍, [] ⊢ ¬φ)), then φ is derivable in 𝘍 (𝘍, [] ⊢ φ). Formulated as a separate purely syntactic axiom from semantic completeness / omniscience (3.73 AxmSemanticCompletenessOfFullTheory): in classical logic, 3.74 is equivalent to (𝘍, [] ⊢ φ) ∨ (𝘍, [] ⊢ ¬φ), and becomes equivalent to semantic completeness (3.73) when combined with Soundness of 𝘍 (3.72) and classical bivalence of M (⟦φ⟧ ∨ ⟦¬φ⟧).
- **Standalone Certificate:** [proofs/AxmNegationCompletenessOfFullTheory.html](proofs/AxmNegationCompletenessOfFullTheory.html)

### 3.75 `AxmBaseSubtheoryOfFull` — If a formula is derivable in 𝘛, then it is derivable in 𝘍 (Statement)

- **Identifier:** `AxmBaseSubtheoryOfFull` (entry `3.75`, kind: `Statement`, status: `Metatheorem (Holds by the Definition of F, Not a Kernel Rule)`)
- **Formula (Unicode):** `(∀(Γ:Ctx)∀(𝛗:Fm)((𝘛,Γ⊢𝛗)—→(𝘍,Γ⊢𝛗)))`
- **Scheme of Types (Unicode):** `(∀([Γ@Variable]:[Ctx@Type])∀([𝛗@Variable]:[Fm@Type])((𝘛,[Γ@Ctx.Expression]⊢[𝛗@Fm.Expression])—→(𝘍,[Γ@Ctx.Expression]⊢[𝛗@Fm.Expression])))`
- **Proof Constructor:** `(metatheorem: holds by the definition of F; not a kernel rule)`
- **Kernel Note:** Theory extension monotonicity (𝘛 ⊆ 𝘍): every theorem of the r.e. base theory 𝘛 is also a theorem of its non-r.e. theory of the intended model 𝘍.
- **Standalone Certificate:** [proofs/AxmBaseSubtheoryOfFull.html](proofs/AxmBaseSubtheoryOfFull.html)

## 4. Metalogical Laws (4.01-4.08) (4.01-4.08)

Explicit substitution, context encoding, co-necessitation, uniqueness quantifiers, and reflected comprehension.

### 4.01 `DefMetaInstantiation` — Instantiation (Axiom)

- **Identifier:** `DefMetaInstantiation` (entry `4.01`, kind: `Axiom`, status: `Postulated (Unchecked Kernel Schema, Not Derived)`)
- **Formula (Unicode):** `(∀(A:Type)∀(G:Ctx.Expression)∀(𝛗:Fm)∀(t:eval(A).Expression)∀(v:Variable)(𝘞,⟦G⟧⊢‹(∀(⦃v⦄:⟦A⟧)⟦𝛗⟧)—→(let ⦃v⦄ = ⟦t⟧ in ⟦𝛗⟧)›))`
- **Scheme of Types (Unicode):** `(∀([A@Variable]:[Type@Type])∀([G@Variable]:[Ctx.Expression@Type])∀([𝛗@Variable]:[Fm@Type])∀([t@Variable]:[eval([A@Type.Expression.Expression]).Expression@Type])∀([v@Variable]:[Variable@Type])(𝘞,⟦[G@Ctx.Expression.Expression]⟧⊢‹(∀([⦃[v@Variable.Expression]⦄@Variable]:[⟦[A@Type.Expression.Expression]⟧@Type])⟦[𝛗@Fm.Expression]⟧)—→(let ⦃[v@Variable.Expression]⦄ = ⟦[t@Class.Expression.Expression]⟧ in ⟦[𝛗@Fm.Expression]⟧)›))`
- **Proof Constructor:** `PKernelDef_prf ("DefMetaInstantiation")`
- **Kernel Note:** Postulated +1 metalevel universal instantiation schema (requiring Fm.FFI(t, v, φ) as enforced in IncompletenessMechanization.law_4_01_meta_instantiation), accompanied by a kernel-checked object-level instance (thm_4_01_meta_instantiation / sequent_4_01_instantiation : Thm, checked by Thm.checkPipeline and Thm.slow_check).
- **Standalone Certificate:** [proofs/DefMetaInstantiation.html](proofs/DefMetaInstantiation.html)

### 4.02 `DefMetaGeneralisation` — Generalisation (Axiom)

- **Identifier:** `DefMetaGeneralisation` (entry `4.02`, kind: `Axiom`, status: `Postulated (Unchecked Kernel Schema, Not Derived)`)
- **Formula (Unicode):** `(∀(A:Type)∀(Γ:Ctx)∀(𝛗:Fm)∀(v:Variable)((¬Ctx.IFV(v,Γ))—→((𝘞,Γ⊢𝛗)—→(𝘞,Γ⊢‹∀(⦃v⦄:⟦A⟧)⟦𝛗⟧›))))`
- **Scheme of Types (Unicode):** `(∀([A@Variable]:[Type@Type])∀([Γ@Variable]:[Ctx@Type])∀([𝛗@Variable]:[Fm@Type])∀([v@Variable]:[Variable@Type])((¬Ctx.IFV([v@Variable.Expression],[Γ@Ctx.Expression]))—→((𝘞,[Γ@Ctx.Expression]⊢[𝛗@Fm.Expression])—→(𝘞,[Γ@Ctx.Expression]⊢‹∀([⦃[v@Variable.Expression]⦄@Variable]:[⟦[A@Type.Expression.Expression]⟧@Type])⟦[𝛗@Fm.Expression]⟧›))))`
- **Proof Constructor:** `PKernelDef_prf ("DefMetaGeneralisation")`
- **Kernel Note:** Postulated +1 metalevel context-indexed generalisation schema with explicit context freshness guard ¬Ctx.IFV(v, Γ), accompanied by a kernel-checked object-level instance (thm_4_02_meta_generalisation / sequent_4_02_generalisation : Thm). (A theory 𝘞 is assumed here to contain only closed axioms without free variables, so v has no free occurrences in 𝘞 whenever ¬Ctx.IFV(v, Γ) holds.)
- **Standalone Certificate:** [proofs/DefMetaGeneralisation.html](proofs/DefMetaGeneralisation.html)

### 4.03 `DefMetaConecessitation` — CoNecessitation (Inference Rule)

- **Identifier:** `DefMetaConecessitation` (entry `4.03`, kind: `Inference Rule`, status: `Postulated (Unchecked Kernel Schema, Not Derived)`)
- **Formula (Unicode):** `(∀(Γ:Ctx)∀(𝛗:Fm)((𝘍,[]⊢‹𝘍,Γ⊢𝛗›)—→(𝘍,Γ⊢𝛗)))`
- **Scheme of Types (Unicode):** `(∀([Γ@Variable]:[Ctx@Type])∀([𝛗@Variable]:[Fm@Type])((𝘍,[]⊢‹𝘍,[Γ@Ctx.Expression]⊢[𝛗@Fm.Expression]›)—→(𝘍,[Γ@Ctx.Expression]⊢[𝛗@Fm.Expression])))`
- **Proof Constructor:** `PKernelDef_prf ("DefMetaConecessitation")`
- **Kernel Note:** If a formula  is derived in 𝘍 from the empty context, then the formula 𝛗 is derived in 𝘍 from the context Γ. Why this holds for 𝘍: for an arbitrary theory 𝘞, concluding (𝘞, Γ⊢𝛗) from (𝘞, [] ⊢ ) requires 1-consistency / Σ₁-soundness of 𝘞 (and for the r.e. base theory 𝘛, asserting internal co-necessitation would by Löb's theorem 5.01 trivialize 𝘛). Because 𝘍 is a non-r.e. theory of the intended model equipped with Soundness 3.72 ((𝘍, [] ⊢ ψ) → ⟦ψ⟧), instantiating 3.72 at ψ :=  directly yields (𝘍, Γ⊢𝛗).
- **Standalone Certificate:** [proofs/DefMetaConecessitation.html](proofs/DefMetaConecessitation.html)

### 4.04 `DefAtMostOneBinder` — Quantifier “unique” (Definition)

- **Identifier:** `DefAtMostOneBinder` (entry `4.04`, kind: `Definition`, status: `Postulated (Unchecked Kernel Schema, Not Derived)`)
- **Formula (Unicode):** `(∀(𝛗:Fm)((!(z:Class)⟦𝛗⟧)←→(∀(x:Class)∀(y:Class)(((let z = x in ⟦𝛗⟧)∧(let z = y in ⟦𝛗⟧))—→(x=y)))))`
- **Scheme of Types (Unicode):** `(∀([𝛗@Variable]:[Fm@Type])((!([z@Variable]:[Class@Type])⟦[𝛗@Fm.Expression]⟧)←→(∀([x@Variable]:[Class@Type])∀([y@Variable]:[Class@Type])(((let z = [x@Class.Expression] in ⟦[𝛗@Fm.Expression]⟧)∧(let z = [y@Class.Expression] in ⟦[𝛗@Fm.Expression]⟧))—→([x@Class.Expression]=[y@Class.Expression])))))`
- **Proof Constructor:** `PKernelDef_prf ("DefAtMostOneBinder")`
- **Kernel Note:** Definitional metalevel schema for the at-most-one binder (!(z:Class)φ), subject to the variable freshness and capture-avoidance side conditions x ≠ y, ¬Fm.IFV(x, φ), ¬Fm.IFV(y, φ), Fm.FFI(x, z, φ), and Fm.FFI(y, z, φ) (enforced in IncompletenessMechanization.law_4_04_at_most_one_binder_def and accompanied by the class-level witness DefAtMostOneMember / sequent_4_04_at_most_one : Thm).
- **Standalone Certificate:** [proofs/DefAtMostOneBinder.html](proofs/DefAtMostOneBinder.html)

### 4.05 `DefExistsUniqueBinder` — Quantifier “exists and unique” (Definition)

- **Identifier:** `DefExistsUniqueBinder` (entry `4.05`, kind: `Definition`, status: `Postulated (Unchecked Kernel Schema, Not Derived)`)
- **Formula (Unicode):** `(∀(𝛗:Fm)(𝘛,[]⊢‹(∃!(x:Class)⟦𝛗⟧)←→((∃(x:Class)⟦𝛗⟧)∧!(x:Class)⟦𝛗⟧)›))`
- **Scheme of Types (Unicode):** `(∀([𝛗@Variable]:[Fm@Type])(𝘛,[]⊢‹(∃!([x@Variable]:[Class@Type])⟦[𝛗@Fm.Expression]⟧)←→((∃([x@Variable]:[Class@Type])⟦[𝛗@Fm.Expression]⟧)∧!([x@Variable]:[Class@Type])⟦[𝛗@Fm.Expression]⟧)›))`
- **Proof Constructor:** `PKernelDef_prf ("DefExistsUniqueBinder")`
- **Kernel Note:** Kernel-verified exists-unique binder definition (thm_4_05_exists_unique_binder : Thm, checked by Thm.checkPipeline and Thm.slow_check).
- **Standalone Certificate:** [proofs/DefExistsUniqueBinder.html](proofs/DefExistsUniqueBinder.html)

### 4.06 `AxmMetaClassComprehension` — Class comprehension axiom schema (Axiom)

- **Identifier:** `AxmMetaClassComprehension` (entry `4.06`, kind: `Axiom`, status: `Postulated (Unchecked Kernel Schema, Not Derived)`)
- **Formula (Unicode):** `(∀(𝛗:Fm)∀(x:Variable)∀(k:Class.Expression)(Fm.FFI((k:Class.Expression),x,𝛗)—→(𝘛,[]⊢‹(⟦k⟧∈{⦃x⦄|⟦𝛗⟧})←→((⟦k⟧ set)∧(let ⦃x⦄ = ⟦k⟧ in ⟦𝛗⟧))›)))`
- **Scheme of Types (Unicode):** `(∀([𝛗@Variable]:[Fm@Type])∀([x@Variable]:[Variable@Type])∀([k@Variable]:[Class.Expression@Type])(Fm.FFI(([k@Class.Expression.Expression]:Class.Expression),[x@Variable.Expression],[𝛗@Fm.Expression])—→(𝘛,[]⊢‹(⟦[k@Class.Expression.Expression]⟧∈{[⦃[x@Variable.Expression]⦄@Class.Expression]|⟦[𝛗@Fm.Expression]⟧})←→((⟦[k@Class.Expression.Expression]⟧ set)∧(let ⦃[x@Variable.Expression]⦄ = ⟦[k@Class.Expression.Expression]⟧ in ⟦[𝛗@Fm.Expression]⟧))›)))`
- **Proof Constructor:** `PKernelDef_prf ("AxmMetaClassComprehension")`
- **Kernel Note:** Postulated +1 metalevel class comprehension schema guarded by Fm.FFI(k, x, φ), accompanied by a kernel-checked object-level instance (thm_4_06_meta_class_comprehension / sequent_4_06_comprehension : Thm, checked by Thm.checkPipeline and Thm.slow_check).
- **Standalone Certificate:** [proofs/AxmMetaClassComprehension.html](proofs/AxmMetaClassComprehension.html)

## 5. Incompleteness-Related Statements (5.01-5.02) (5.01-5.02)

Formalized Löb's theorem and Gödel's second incompleteness theorem.

### 5.01 `ThmLoeb` — Löb's theorem (Theorem)

- **Identifier:** `ThmLoeb` (entry `5.01`, kind: `Theorem`, status: `Postulated (Unchecked Kernel Schema, Not Derived)`)
- **Formula (Unicode):** `(∀(𝛗:Fm)(𝘌,[]⊢‹(𝘛,[]⊢‹(𝘛,[]⊢𝛗)—→⟦𝛗⟧›)—→(𝘛,[]⊢𝛗)›))`
- **Scheme of Types (Unicode):** `(∀([𝛗@Variable]:[Fm@Type])(𝘌,[]⊢‹(𝘛,[]⊢‹(𝘛,[]⊢[𝛗@Fm.Expression])—→⟦[𝛗@Fm.Expression]⟧›)—→(𝘛,[]⊢[𝛗@Fm.Expression])›))`
- **Proof Constructor:** `(the linked kernel proof has a different statement; see GitLab #8101)`
- **Kernel Note:** Postulated, not derived: the MKTD1 kernel registers this statement as the unchecked GeneralDef ThmLoeb (general_definition_allowlist, newchecker/06_definitions.ML). An informal step-by-step trace exists only in the standalone model IncompletenessMechanization.derive_loeb_trace (incompleteness.ML), which is not connected to the kernel. Here 𝘌 ∈ {IΣ₁, PA, 𝘛, NBG, MK} is an unspecified elementary metatheory capable of proving HBL conditions D1-D3 for the r.e. base theory 𝘛 (specifically D3, formalized / internal Σ₁-completeness ψ —→ Pr_𝘛(⌜ψ⌝), which requires Σ₁-induction IΣ₁ and cannot be proved inside Robinson's arithmetic Q even though Q is externally Σ₁-complete for true Σ₁ sentences; see Hájek & Pudlák 1993; Bezboruah & Shepherdson 1976; Boolos 1993).
- **Standalone Certificate:** [proofs/ThmLoeb.html](proofs/ThmLoeb.html)

### 5.02 `ThmSecondIncompleteness` — Gödel's second incompleteness theorem (Theorem)

- **Identifier:** `ThmSecondIncompleteness` (entry `5.02`, kind: `Theorem`, status: `Postulated (Unchecked Kernel Schema, Not Derived)`)
- **Formula (Unicode):** `(𝘌,[]⊢‹(¬(𝘛,[]⊢‹⊥›))—→¬(𝘛,[]⊢‹¬(𝘛,[]⊢‹⊥›)›)›)`
- **Scheme of Types (Unicode):** `(𝘌,[]⊢‹(¬(𝘛,[]⊢‹⊥›))—→¬(𝘛,[]⊢‹¬(𝘛,[]⊢‹⊥›)›)›)`
- **Proof Constructor:** `(the linked kernel proof has a different statement; see GitLab #8101)`
- **Kernel Note:** Postulated, not derived: the MKTD1 kernel registers this statement as the unchecked GeneralDef ThmSecondIncompleteness (general_definition_allowlist, newchecker/06_definitions.ML). An informal step-by-step trace exists only in the standalone model IncompletenessMechanization.derive_second_incompleteness_trace (incompleteness.ML), which is not connected to the kernel. Formalized in the unspecified elementary metatheory 𝘌 ∈ {IΣ₁, PA, 𝘛, NBG, MK} for the r.e. object theory 𝘛 (whereas 𝘍 is non-r.e.).
- **Standalone Certificate:** [proofs/ThmSecondIncompleteness.html](proofs/ThmSecondIncompleteness.html)

