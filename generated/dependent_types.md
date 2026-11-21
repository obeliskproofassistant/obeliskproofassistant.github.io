<!-- AUTO-GENERATED FILE -- DO NOT EDIT DIRECTLY BY AI OR HAND.
     Source files: set_theory_prover/program/newchecker.ML,
                   set_theory_prover/program/types/typetheory.ML,
                   set_theory_prover/program/types/foundations.ML,
                   set_theory_prover/program/types/entries.ML
     Generator:    set_theory_prover/program/html_generator.ML
     Regenerate:   cd /hostramdisk/set_theory_prover/program && poly -q --use export_theory_db.ML
-->

# Obelisk Proof Assistant — Dependent Types, Families, Σ/Π & Universes

Directly generated from `newchecker.ML` via `types/order_dependent_types.txt`.

- **Machine-Readable JSON Database:** [theory_db.json](theory_db.json)
- **MKTD2-system Formulas-as-Types Markdown:** [nbg_library.md](nbg_library.md)
- **MKTD2-system JSON Database:** [nbg_library.json](nbg_library.json)
- **Plain-Text Specification:** [output.txt](output.txt)

## 3. Set/Class-Theoretic Foundations (3.01-3.98) (3.01-3.98)

Impredicative Morse-Kelley (MKTD1-theory) class comprehension, sethood, ordinals, Dunaev pairs, cardinals, universes, and reflection.

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

