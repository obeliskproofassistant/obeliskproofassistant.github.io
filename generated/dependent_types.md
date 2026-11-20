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

## 3. Set/Class-Theoretic Foundations (3.01-3.90) (3.01-3.90)

Morse-Kelley / Von Neumann-Bernays-Gödel class comprehension, sethood, ordinals, Dunaev pairs, cardinals, universes, and reflection.

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
- **Standalone Certificate:** [proofs/DefSimpleConditional.html](proofs/DefSimpleConditional.html)

### 3.24 `DefDependentConditional` — if_dep (dependent conditional over (Bool → Type)) (Definition)

- **Identifier:** `DefDependentConditional` (entry `3.24`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `∀(Tₑ:Bool→Type), ((if_dep:Π(b:Bool),(⟦Tₑ(true)⟧→(⟦Tₑ(false)⟧→⟦Tₑ(b)⟧)))∧∀(b:Bool)∀(t₁:⟦Tₑ(true)⟧)∀(t₂:⟦Tₑ(false)⟧)((if_dep(b,t₁,t₂):⟦Tₑ(b)⟧)∧((if_dep(true,t₁,t₂)=t₁)∧(if_dep(false,t₁,t₂)=t₂))))`
- **Scheme of Types (Unicode):** `∀(Tₑ:Bool→Type), ((if_dep:Π(b:Bool),(⟦Tₑ(true)⟧→(⟦Tₑ(false)⟧→⟦Tₑ(b)⟧)))∧∀(b:Bool)∀(t₁:⟦Tₑ(true)⟧)∀(t₂:⟦Tₑ(false)⟧)((if_dep(b,t₁,t₂):⟦Tₑ(b)⟧)∧((if_dep(true,t₁,t₂)=t₁)∧(if_dep(false,t₁,t₂)=t₂))))`
- **Proof Constructor:** `EIfDep (φ, a, b)`
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

### 3.33 `DefInjectiveFunction` — “Is injective” predicate (Definition)

- **Identifier:** `DefInjectiveFunction` (entry `3.33`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(F:Class)((F injective)←→(((F family)∧(F set-valued))∧∀(x:Class)∀(y:Class)((((x∈Dom(F))∧(y∈Dom(F)))∧(F(x)=F(y)))—→(x=y)))))`
- **Scheme of Types (Unicode):** `(∀([F@Variable]:[Class@Type])(([F@Class.Expression] injective)←→((([F@Class.Expression] family)∧([F@Class.Expression] set-valued))∧∀([x@Variable]:[Class@Type])∀([y@Variable]:[Class@Type])(((([x@Class.Expression]∈Dom([F@Class.Expression]))∧([y@Class.Expression]∈Dom([F@Class.Expression])))∧([F@Class.Expression]([x@Class.Expression])=[F@Class.Expression]([y@Class.Expression])))—→([x@Class.Expression]=[y@Class.Expression])))))`
- **Proof Constructor:** `TpInjective (F)`
- **Standalone Certificate:** [proofs/DefInjectiveFunction.html](proofs/DefInjectiveFunction.html)

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

- **Identifier:** `ThmFamilyEvaluation` (entry `3.37`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `(∀(F:Class)∀(x:Class)(((F family)∧(x∈Dom(F)))—→(F(x)=⋃{s|(x,s)∈F})))`
- **Scheme of Types (Unicode):** `(∀([F@Variable]:[Class@Type])∀([x@Variable]:[Class@Type])((([F@Class.Expression] family)∧([x@Class.Expression]∈Dom([F@Class.Expression])))—→([F@Class.Expression]([x@Class.Expression])=⋃{[s@Class.Expression]|([x@Class.Expression],[s@Class.Expression])∈[F@Class.Expression]})))`
- **Proof Constructor:** `CpValOf (F, x)`
- **Standalone Certificate:** [proofs/ThmFamilyEvaluation.html](proofs/ThmFamilyEvaluation.html)

### 3.38 `DefSigmaModel` — “Dependent Sum (Sigma-Type)” model over a family (Definition)

- **Identifier:** `DefSigmaModel` (entry `3.38`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(B:Class)∀(x:Class)∀(y:Class)((B family)—→(((x∈Dom(B))∧(y∈B(x)))←→((x,y)∈{s|∃(a:Class)∃(b:Class)((s=(a,b))∧((a∈Dom(B))∧(b∈B(a))))}))))`
- **Scheme of Types (Unicode):** `(∀([B@Variable]:[Class@Type])∀([x@Variable]:[Class@Type])∀([y@Variable]:[Class@Type])(([B@Class.Expression] family)—→((([x@Class.Expression]∈Dom([B@Class.Expression]))∧([y@Class.Expression]∈[B@Class.Expression]([x@Class.Expression])))←→(([x@Class.Expression],[y@Class.Expression])∈{[s@Class.Expression]|∃([a@Variable]:[Class@Type])∃([b@Variable]:[Class@Type])(([s@Class.Expression]=([a@Class.Expression],[b@Class.Expression]))∧(([a@Class.Expression]∈Dom([B@Class.Expression]))∧([b@Class.Expression]∈[B@Class.Expression]([a@Class.Expression]))))}))))`
- **Proof Constructor:** `CpSigma (X, Y)`
- **Kernel Note:** Explicit typed term interpretation / valuation (μ_A : A.Expression → Class.Expression) of the dependent sum Σ(x:Dom(F)) over a family F in the fixed background model.
- **Standalone Certificate:** [proofs/DefSigmaModel.html](proofs/DefSigmaModel.html)

### 3.39 `DefPiPredicateModel` — “Dependent Product (Pi-Type)” predicate and section model (Theorem)

- **Identifier:** `DefPiPredicateModel` (entry `3.39`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `(∀(B:Class)∀(f:Class)(((B family)∧((f family)∧((Dom(f)=Dom(B))∧∀(u:Class)((u∈Dom(B))—→(f(u)∈B(u))))))—→∀(x:Class)((x∈Dom(B))—→(f(x)∈B(x)))))`
- **Scheme of Types (Unicode):** `(∀([B@Variable]:[Class@Type])∀([f@Variable]:[Class@Type])((([B@Class.Expression] family)∧(([f@Class.Expression] family)∧((Dom([f@Class.Expression])=Dom([B@Class.Expression]))∧∀([u@Variable]:[Class@Type])(([u@Class.Expression]∈Dom([B@Class.Expression]))—→([f@Class.Expression]([u@Class.Expression])∈[B@Class.Expression]([u@Class.Expression]))))))—→∀([x@Variable]:[Class@Type])(([x@Class.Expression]∈Dom([B@Class.Expression]))—→([f@Class.Expression]([x@Class.Expression])∈[B@Class.Expression]([x@Class.Expression])))))`
- **Proof Constructor:** `CpPi (X, P)`
- **Kernel Note:** Explicit typed term interpretation / valuation (μ_A : A.Expression → Class.Expression) of dependent product sections Π(x:Dom(F)) over a family F in the fixed background model.
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
- **Standalone Certificate:** [proofs/DefCardinality.html](proofs/DefCardinality.html)

### 3.42 `DefCardLess` — “Is strictly smaller than” binary relation (Definition)

- **Identifier:** `DefCardLess` (entry `3.42`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(∀(A:Class)∀(B:Class)((A≺B)←→(¬(B≼A))))`
- **Scheme of Types (Unicode):** `(∀([A@Variable]:[Class@Type])∀([B@Variable]:[Class@Type])(([A@Class.Expression]≺[B@Class.Expression])←→(¬([B@Class.Expression]≼[A@Class.Expression]))))`
- **Proof Constructor:** `TpLess (A, B)`
- **Standalone Certificate:** [proofs/DefCardLess.html](proofs/DefCardLess.html)

### 3.43 `AxmSizeLimitation` — Size limitation axiom related statement (Axiom)

- **Identifier:** `AxmSizeLimitation` (entry `3.43`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(∀(X:Class)((X∈V)←→(|X|≺|V|)))`
- **Scheme of Types (Unicode):** `(∀([X@Variable]:[Class@Type])(([X@Class.Expression]∈V)←→(|[X@Class.Expression]|≺|V|)))`
- **Proof Constructor:** `PSizeLimAx_prf (X)`
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

- **Identifier:** `ThmUniversalClassIsUniverse` (entry `3.69`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `(V universe)`
- **Scheme of Types (Unicode):** `(V universe)`
- **Proof Constructor:** `PVUniverseAx_prf`
- **Kernel Note:** Formal kernel proof (v_universe_thm_proof : unit -> Thm, verified by Thm.checkPipeline and Thm.slow_check) deriving (𝘍, [] ⊢ (V universe)) from 3.68 #DefGrothendieckUniverse (PKernelDef_prf) and the 6 component lemmas: (1) (ω ∈ V) via 3.57 #AxmOmegaIsSet (POmegaSetAx_prf), 3.05 #DefUniversalClass (PKernelDef_prf), 3.08 #AxmLeftInSound (PLeftInSoundAx_prf), and 3.01 #RulClassComprehension (PComprAx_prf); (2) (V transitive) via 3.15 #DefTransitiveClass (PKernelDef_prf), 3.06 #DefSubclass (PKernelDef_prf), and 3.02 #DefIsSet (PKernelDef_prf); (3) (V Hereditary) via 3.44 #DefHereditaryClass (PKernelDef_prf) and 3.12 #AxmHeredity (PHeredityAx_prf); (4) (V Powerful) via 3.45 #DefPowerfulClass (PKernelDef_prf) and 3.13 #AxmExponent (PPowSetAx_prf); (5) (V Tight) via 3.47 #DefTightClass (PKernelDef_prf), 3.43 #AxmSizeLimitation (PSizeLimAx_prf), and 3.41/3.42 #DefCardinality/#DefCardLess (PCardLessOrderAx_prf); (6) (V Pairful) via 3.46 #DefPairfulClass (PKernelDef_prf) and 3.49 #DefUnorderedPair sethood (PPairSetAx_prf). Backup axiom constructor PVUniverseAx_prf (v_universe_axm_backup_entry) is also retained in the kernel just in case.
- **Standalone Certificate:** [proofs/ThmUniversalClassIsUniverse.html](proofs/ThmUniversalClassIsUniverse.html)

### 3.70 `AxmTarskiUniverses` — “Tarski's axiom” (Axiom)

- **Identifier:** `AxmTarskiUniverses` (entry `3.70`, kind: `Axiom`, status: `Postulated (Kernel Axiom)`)
- **Formula (Unicode):** `(∀(x:Class)((x set)—→∃(u:Class)(((u universe)∧(x∈u))∧(u set))))`
- **Scheme of Types (Unicode):** `(∀([x@Variable]:[Class@Type])(([x@Class.Expression] set)—→∃([u@Variable]:[Class@Type])((([u@Class.Expression] universe)∧([x@Class.Expression]∈[u@Class.Expression]))∧([u@Class.Expression] set))))`
- **Proof Constructor:** `PUniverseAx_prf (U)`
- **Standalone Certificate:** [proofs/AxmTarskiUniverses.html](proofs/AxmTarskiUniverses.html)

### 3.71 `ThmTransitiveClassInduction` — General form of the transfinite ∈-induction principle on a transitive class (Theorem)

- **Identifier:** `ThmTransitiveClassInduction` (entry `3.71`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `(∀(K:Class)∀(A:Class)((Tr(K)∧((K∩𝒫(A))⊆A))—→(K⊆A)))`
- **Scheme of Types (Unicode):** `(∀([K@Variable]:[Class@Type])∀([A@Variable]:[Class@Type])((Tr([K@Class.Expression])∧(([K@Class.Expression]∩𝒫([A@Class.Expression]))⊆[A@Class.Expression]))—→([K@Class.Expression]⊆[A@Class.Expression])))`
- **Proof Constructor:** `PEpsIndAx_prf (X)`
- **Kernel Note:** Transfinite membership (∈) induction on a well-founded transitive class, contrasted with successor-induction (Peano 0-successor-induction Ind(X) in 3.55).
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
- **Kernel Note:** Conservative definition (DefVonNeumannStageLaws, PKernelDef_prf, verified by Thm.checkPipeline and Thm.slow_check): VStageLaws(V) characterizes the transfinite recursion equations for the von Neumann cumulative hierarchy stages valOf(V, A) across base stage 0, successor ordinals A u {A}, and limit ordinals, together with the three-way ordinal classification (zero, successor, or limit).
- **Standalone Certificate:** [proofs/DefVonNeumannStageLaws.html](proofs/DefVonNeumannStageLaws.html)

### 3.82 `DefVonNeumannStageGraph` — Canonical von Neumann cumulative hierarchy graph (Definition)

- **Identifier:** `DefVonNeumannStageGraph` (entry `3.82`, kind: `Definition`, status: `Definitional (Kernel AST)`)
- **Formula (Unicode):** `(VStageGraph=⋂{V|VStageLaws(V)})`
- **Scheme of Types (Unicode):** `(VStageGraph=⋂{[V@Class.Expression]|VStageLaws([V@Class.Expression])})`
- **Proof Constructor:** `PKernelDef_prf (def_v_stage_graph_cert, [V])`
- **Kernel Note:** Conservative definition (DefVonNeumannStageGraph, PKernelDef_prf, verified by Thm.checkPipeline and Thm.slow_check): VStageGraph is the intersection of all class graphs satisfying VStageLaws(V).
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
- **Formula (Unicode):** `(SetRankGraph=⋂{R|SetRankLaws(R,VStageGraph)})`
- **Scheme of Types (Unicode):** `(SetRankGraph=⋂{[R@Class.Expression]|SetRankLaws([R@Class.Expression],VStageGraph)})`
- **Proof Constructor:** `PKernelDef_prf (def_rank_graph_cert, [R])`
- **Kernel Note:** Conservative definition (DefSetRankGraph, PKernelDef_prf, verified by Thm.checkPipeline and Thm.slow_check): SetRankGraph is the intersection of all class graphs R satisfying SetRankLaws(R, VStageGraph).
- **Standalone Certificate:** [proofs/DefSetRankGraph.html](proofs/DefSetRankGraph.html)

### 3.85 `ThmUniverseInterOnIsOrdinal` — Step 0 of U = V_(U n On): the ordinal trace U n On of a universe is an ordinal, and the empty set belongs to any non-empty universe (Theorem)

- **Identifier:** `ThmUniverseInterOnIsOrdinal` (entry `3.85`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `(∀(U:Class)((U universe)—→Ord((U∩On))))`
- **Scheme of Types (Unicode):** `(∀([U@Variable]:[Class@Type])(([U@Class.Expression] universe)—→Ord(([U@Class.Expression]∩On))))`
- **Proof Constructor:** `thm_step0_universe_inter_on_is_ordinal (PForaR_prf / POrdDef_prf / PBinInterDef_prf)`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_step0_universe_inter_on_is_ordinal and thm_step0_universe_emptyset_in_u : Thm, verified by Thm.checkPipeline and Thm.slow_check): if U is a universe, then U is transitive and On is an ordinal, so their binary intersection kappa = U n On is a transitive class of ordinals and hence an ordinal; moreover by Regularity (Foundation), if U is non-empty then the empty set belongs to U.
- **Standalone Certificate:** [proofs/ThmUniverseInterOnIsOrdinal.html](proofs/ThmUniverseInterOnIsOrdinal.html)

### 3.86 `ThmUniverseUnionClosedFromIndexedUnion` — Step 1a of U = V_(U n On): a transitive class closed under indexed unions is closed under unary union (Theorem)

- **Identifier:** `ThmUniverseUnionClosedFromIndexedUnion` (entry `3.86`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `(∀(U:Class)∀(f:Class)(((Tr(U)∧IndexedUnionClosed(U))∧((f class-function)∧((V⊆Dom(f))∧∀(a:Class)(f(a)=a))))—→∀(x:Class)((x∈U)—→(⋃x∈U))))`
- **Scheme of Types (Unicode):** `(∀([U@Variable]:[Class@Type])∀([f@Variable]:[Class@Type])(((Tr([U@Class.Expression])∧IndexedUnionClosed([U@Class.Expression]))∧(([f@Class.Expression] class-function)∧((V⊆Dom([f@Class.Expression]))∧∀([a@Variable]:[Class@Type])([f@Class.Expression]([a@Class.Expression])=[a@Class.Expression]))))—→∀([x@Variable]:[Class@Type])(([x@Class.Expression]∈[U@Class.Expression])—→(⋃[x@Class.Expression]∈[U@Class.Expression]))))`
- **Proof Constructor:** `thm_step1a_union_closed_from_indexed_union (PForaR_prf / PKernelDef_prf / PImageDef_prf)`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_step1a_union_closed_from_indexed_union : Thm, verified by Thm.checkPipeline and Thm.slow_check): instantiating IndexedUnionClosed(U) with I = x in U and the universal diagonal identity class-function id_V yields id_V[x] = x c U and hence U(x) in U.
- **Standalone Certificate:** [proofs/ThmUniverseUnionClosedFromIndexedUnion.html](proofs/ThmUniverseUnionClosedFromIndexedUnion.html)

### 3.87 `ThmUniverseInterOnIsLimitOrdinal` — Step 1c of U = V_(U n On): the ordinal trace U n On of an union-closed universe is a nonzero limit ordinal (Theorem)

- **Identifier:** `ThmUniverseInterOnIsLimitOrdinal` (entry `3.87`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `(∀(U:Class)(((U universe)∧∀(x:Class)((x∈U)—→(⋃x∈U)))—→LimitOrd((U∩On))))`
- **Scheme of Types (Unicode):** `(∀([U@Variable]:[Class@Type])((([U@Class.Expression] universe)∧∀([x@Variable]:[Class@Type])(([x@Class.Expression]∈[U@Class.Expression])—→(⋃[x@Class.Expression]∈[U@Class.Expression])))—→LimitOrd(([U@Class.Expression]∩On))))`
- **Proof Constructor:** `thm_step1c_kappa_is_limit_ord (PForaR_prf / PKernelDef_prf / PEpsIndAx_prf / PPairfulDef_prf)`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_step1c_kappa_is_limit_ord : Thm, verified by Thm.checkPipeline and Thm.slow_check): for any universe U closed under unary union, kappa = U n On is an ordinal, contains 0 (since omega in U is non-empty and Foundation yields 0 in U), and is closed under ordinal successor B |-> B u {B} = U({B, {B}}) by pairing and union closure; therefore LimitOrd(U n On) holds.
- **Standalone Certificate:** [proofs/ThmUniverseInterOnIsLimitOrdinal.html](proofs/ThmUniverseInterOnIsLimitOrdinal.html)

### 3.88 `ThmVonNeumannStageSubUniverse` — Step 2 of U = V_(U n On): the cumulative stage V_(U n On) is a subclass of U (Theorem)

- **Identifier:** `ThmVonNeumannStageSubUniverse` (entry `3.88`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `(∀(V:Class)∀(U:Class)((VStageLaws(V)∧(Tr(U)∧(LimitOrd((U∩On))∧∀(B:Class)((B∈(U∩On))—→(V(B)∈U)))))—→(V((U∩On))⊆U)))`
- **Scheme of Types (Unicode):** `(∀([V@Variable]:[Class@Type])∀([U@Variable]:[Class@Type])((VStageLaws([V@Class.Expression])∧(Tr([U@Class.Expression])∧(LimitOrd(([U@Class.Expression]∩On))∧∀([B@Variable]:[Class@Type])(([B@Class.Expression]∈([U@Class.Expression]∩On))—→([V@Class.Expression]([B@Class.Expression])∈[U@Class.Expression])))))—→([V@Class.Expression](([U@Class.Expression]∩On))⊆[U@Class.Expression])))`
- **Proof Constructor:** `thm_step2_v_kappa_sub_u (PForaR_prf / PEpsIndAx_prf / PPowerfulDef_prf / PSubDef_prf)`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_step2_v_kappa_sub_u : Thm, verified by Thm.checkPipeline and Thm.slow_check): proved by transfinite epsilon-induction (AxmRegularity) on A in kappa = U n On using the base stage V_0 = 0 in U, power-set closure V_(B u {B}) = P(V_B) in U, and indexed-union closure at limit ordinals, concluding V_A in U for all A in kappa and hence V_kappa = U_{A in kappa} V_A c U by transitivity of U.
- **Standalone Certificate:** [proofs/ThmVonNeumannStageSubUniverse.html](proofs/ThmVonNeumannStageSubUniverse.html)

### 3.89 `ThmUniverseSubVonNeumannStage` — Step 3 of U = V_(U n On): every universe U is a subclass of V_(U n On) (Theorem)

- **Identifier:** `ThmUniverseSubVonNeumannStage` (entry `3.89`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `(∀(V:Class)∀(R:Class)∀(U:Class)((VStageLaws(V)∧(SetRankLaws(R,V)∧(LimitOrd((U∩On))∧((∀(B:Class)((B∈(U∩On))—→(V(B)∈U)))∧∀(x:Class)((x∈U)—→(R(x)∈U))))))—→(U⊆V((U∩On)))))`
- **Scheme of Types (Unicode):** `(∀([V@Variable]:[Class@Type])∀([R@Variable]:[Class@Type])∀([U@Variable]:[Class@Type])((VStageLaws([V@Class.Expression])∧(SetRankLaws([R@Class.Expression],[V@Class.Expression])∧(LimitOrd(([U@Class.Expression]∩On))∧((∀([B@Variable]:[Class@Type])(([B@Class.Expression]∈([U@Class.Expression]∩On))—→([V@Class.Expression]([B@Class.Expression])∈[U@Class.Expression])))∧∀([x@Variable]:[Class@Type])(([x@Class.Expression]∈[U@Class.Expression])—→([R@Class.Expression]([x@Class.Expression])∈[U@Class.Expression]))))))—→([U@Class.Expression]⊆[V@Class.Expression](([U@Class.Expression]∩On)))))`
- **Proof Constructor:** `thm_step3_u_sub_v_kappa (PForaR_prf / PEpsIndAx_prf / PKernelDef_prf / PSubDef_prf)`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_step3_u_sub_v_kappa : Thm, verified by Thm.checkPipeline and Thm.slow_check): proved by transfinite epsilon-induction (AxmRegularity) on x in U showing rank(x) = U_{y in x} (rank(y) u {rank(y)}) in U via indexed-union closure, whence rank(x) in U n On = kappa, rank(x) + 1 in kappa by limit closure, and x in V_(rank(x) + 1) c V_kappa.
- **Standalone Certificate:** [proofs/ThmUniverseSubVonNeumannStage.html](proofs/ThmUniverseSubVonNeumannStage.html)

### 3.90 `ThmUniverseEqVonNeumannStageInterOn` — Conclusion: if U is a universe, then U = V_(U n On) (Theorem)

- **Identifier:** `ThmUniverseEqVonNeumannStageInterOn` (entry `3.90`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `(∀(U:Class)((VStageLaws(VStageGraph)∧(SetRankLaws(SetRankGraph,VStageGraph)∧(((U universe)∧∀(x:Class)((x∈U)—→(⋃x∈U)))∧((∀(B:Class)((B∈(U∩On))—→(VStageGraph(B)∈U)))∧∀(x:Class)((x∈U)—→(SetRankGraph(x)∈U))))))—→(LimitOrd((U∩On))∧(U=VStageGraph((U∩On))))))`
- **Scheme of Types (Unicode):** `(∀([U@Variable]:[Class@Type])((VStageLaws(VStageGraph)∧(SetRankLaws(SetRankGraph,VStageGraph)∧((([U@Class.Expression] universe)∧∀([x@Variable]:[Class@Type])(([x@Class.Expression]∈[U@Class.Expression])—→(⋃[x@Class.Expression]∈[U@Class.Expression])))∧((∀([B@Variable]:[Class@Type])(([B@Class.Expression]∈([U@Class.Expression]∩On))—→(VStageGraph([B@Class.Expression])∈[U@Class.Expression])))∧∀([x@Variable]:[Class@Type])(([x@Class.Expression]∈[U@Class.Expression])—→(SetRankGraph([x@Class.Expression])∈[U@Class.Expression]))))))—→(LimitOrd(([U@Class.Expression]∩On))∧([U@Class.Expression]=VStageGraph(([U@Class.Expression]∩On))))))`
- **Proof Constructor:** `thm_universe_eq_canonical_v_inter_on (PForaR_prf / PEqDef_prf / PAndR_prf)`
- **Kernel Note:** Complete machine-checked MKTD1-system formalization (thm_universe_eq_canonical_v_inter_on and thm_universe_eq_v_inter_on : Thm, verified by Thm.checkPipeline and Thm.slow_check across 45 constituent lemmas with zero cheating axioms): combining Step 2 (V_(U n On) c U) and Step 3 (U c V_(U n On)) via class equality antisymmetry yields U = valOf(VStageGraph, U n On).
- **Standalone Certificate:** [proofs/ThmUniverseEqVonNeumannStageInterOn.html](proofs/ThmUniverseEqVonNeumannStageInterOn.html)

