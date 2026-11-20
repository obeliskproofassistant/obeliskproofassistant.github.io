<!-- AUTO-GENERATED FILE -- DO NOT EDIT DIRECTLY BY AI OR HAND.
     Source files: set_theory_prover/program/newchecker.ML,
                   set_theory_prover/program/types/typetheory.ML,
                   set_theory_prover/program/types/foundations.ML,
                   set_theory_prover/program/types/entries.ML
     Generator:    set_theory_prover/program/html_generator.ML
     Regenerate:   cd /hostramdisk/set_theory_prover/program && poly -q --use export_theory_db.ML
-->

# Obelisk Proof Assistant — Verified Theorems & Inference Rules Gallery (MKTD1-system)

Agent-friendly Markdown edition of all 39 kernel theorems and inference rules in `MKTD1-system`.

- **Machine-Readable JSON Database:** [theory_db.json](theory_db.json)
- **MKTD2-system Formulas-as-Types Markdown:** [nbg_library.md](nbg_library.md)
- **MKTD2-system JSON Database:** [nbg_library.json](nbg_library.json)
- **Plain-Text Specification:** [output.txt](output.txt)

## 1. Propositional Logic (1.01-1.14) (1.01-1.14)

Classical propositional calculus axiom schemas (A01-A13) and Modus Ponens.

### 1.14 `RulModusPonens` — Modus Ponens (Inference Rule)

- **Identifier:** `RulModusPonens` (entry `1.14`, kind: `Inference Rule`, status: `Primitive / Derived Rule (Kernel)`)
- **Formula (Unicode):** `(⟦𝛂⟧, (⟦𝛂⟧—→⟦𝛃⟧) ⊢ ⟦𝛃⟧)`
- **Scheme of Types (Unicode):** `(⟦[𝛂@Fm.Expression]⟧, (⟦[𝛂@Fm.Expression]⟧—→⟦[𝛃@Fm.Expression]⟧) ⊢ ⟦[𝛃@Fm.Expression]⟧)`
- **Proof Constructor:** `PMP_prf (p, q)`
- **Judgements:** `[(𝛂:Fm), (𝛃:Fm)]`
- **Standalone Certificate:** [proofs/RulModusPonens.html](proofs/RulModusPonens.html)

## 2. Predicate Logic (2.01-2.06) (2.01-2.06)

Quantifier instantiation, variable-binding abstraction rules, and non-empty discourse domain over Classes in MKTD1-theory.

### 2.02 `RulForallInstantiation` — Forall Instantiation (Inference Rule)

- **Identifier:** `RulForallInstantiation` (entry `2.02`, kind: `Inference Rule`, status: `Primitive / Derived Rule (Kernel)`)
- **Formula (Unicode):** `((∀(⦃x⦄:⟦X⟧)⟦𝛗⟧)—→⟦𝛗[t/x]⟧)`
- **Scheme of Types (Unicode):** `((∀([⦃[x@Variable.Expression]⦄@Variable]:[⟦[X@Type.Expression.Expression]⟧@Type])⟦[𝛗@Fm.Expression]⟧)—→⟦[𝛗@Fm.Expression][[t@LCEWIP]/[x@Variable.Expression]]⟧)`
- **Proof Constructor:** `PForaL_prf (φ, T, x, p)`
- **Judgements:** `[(t:X.Expression), (X:Type), (x:Name), (𝛗:Fm)]`
- **Side Condition:** `Fm.FFI((t:X.Expression),x,𝛗)`
- **Kernel Note:** Axiom schema of Universal Instantiation (forall x. phi -> phi[t/x]) with substitution side condition FFI(t, x, phi). Stated as an implication schema without premises.
- **Standalone Certificate:** [proofs/RulForallInstantiation.html](proofs/RulForallInstantiation.html)

### 2.03 `RulExistsInstantiation` — Exists Instantiation (Inference Rule)

- **Identifier:** `RulExistsInstantiation` (entry `2.03`, kind: `Inference Rule`, status: `Primitive / Derived Rule (Kernel)`)
- **Formula (Unicode):** `(⟦𝛗[t/x]⟧—→∃(⦃x⦄:⟦X⟧)⟦𝛗⟧)`
- **Scheme of Types (Unicode):** `(⟦[𝛗@Fm.Expression][[t@LCEWIP]/[x@Variable.Expression]]⟧—→∃([⦃[x@Variable.Expression]⦄@Variable]:[⟦[X@Type.Expression.Expression]⟧@Type])⟦[𝛗@Fm.Expression]⟧)`
- **Proof Constructor:** `PExisR_prf (φ, T, x, p)`
- **Judgements:** `[(t:X.Expression), (X:Type), (x:Name), (𝛗:Fm)]`
- **Side Condition:** `Fm.FFI((t:X.Expression),x,𝛗)`
- **Kernel Note:** Axiom schema of Existential Introduction (phi[t/x] -> exists x. phi) with substitution side condition FFI(t, x, phi). Dual to Universal Instantiation.
- **Standalone Certificate:** [proofs/RulExistsInstantiation.html](proofs/RulExistsInstantiation.html)

### 2.04 `RulForallAbstraction` — Forall Abstraction (Inference Rule)

- **Identifier:** `RulForallAbstraction` (entry `2.04`, kind: `Inference Rule`, status: `Primitive / Derived Rule (Kernel)`)
- **Formula (Unicode):** `((⟦𝛃⟧—→⟦𝛂⟧) ⊢ (⟦𝛃⟧—→∀(⦃x⦄:⟦X⟧)⟦𝛂⟧))`
- **Scheme of Types (Unicode):** `((⟦[𝛃@Fm.Expression]⟧—→⟦[𝛂@Fm.Expression]⟧) ⊢ (⟦[𝛃@Fm.Expression]⟧—→∀([⦃[x@Variable.Expression]⦄@Variable]:[⟦[X@Type.Expression.Expression]⟧@Type])⟦[𝛂@Fm.Expression]⟧))`
- **Proof Constructor:** `PForaR_prf (φ, x, x', T, p)`
- **Judgements:** `[(X:Type), (x:Name), (𝛂:Fm), (𝛃:Fm)]`
- **Side Condition:** `NFV(X,x,(𝛃:Fm))`
- **Kernel Note:** Inference rule of Universal Abstraction: from B -> A infer B -> forall x. A, with side condition NFV(x, B) (x not free in B).
- **Standalone Certificate:** [proofs/RulForallAbstraction.html](proofs/RulForallAbstraction.html)

### 2.05 `RulExistsAbstraction` — Exists Abstraction (Inference Rule)

- **Identifier:** `RulExistsAbstraction` (entry `2.05`, kind: `Inference Rule`, status: `Primitive / Derived Rule (Kernel)`)
- **Formula (Unicode):** `((⟦𝛂⟧—→⟦𝛃⟧) ⊢ ((∃(⦃x⦄:⟦X⟧)⟦𝛂⟧)—→⟦𝛃⟧))`
- **Scheme of Types (Unicode):** `((⟦[𝛂@Fm.Expression]⟧—→⟦[𝛃@Fm.Expression]⟧) ⊢ ((∃([⦃[x@Variable.Expression]⦄@Variable]:[⟦[X@Type.Expression.Expression]⟧@Type])⟦[𝛂@Fm.Expression]⟧)—→⟦[𝛃@Fm.Expression]⟧))`
- **Proof Constructor:** `PExisL_prf (φ, x, x', T, p)`
- **Judgements:** `[(X:Type), (x:Name), (𝛂:Fm), (𝛃:Fm)]`
- **Side Condition:** `NFV(X,x,(𝛃:Fm))`
- **Kernel Note:** Inference rule of Existential Elimination: from A -> B infer (exists x. A) -> B, with side condition NFV(x, B) (x not free in B).
- **Standalone Certificate:** [proofs/RulExistsAbstraction.html](proofs/RulExistsAbstraction.html)

### 2.06 `RulGeneralisation` — Generalisation (admissible rule) (Inference Rule)

- **Identifier:** `RulGeneralisation` (entry `2.06`, kind: `Inference Rule`, status: `Primitive / Derived Rule (Kernel)`)
- **Formula (Unicode):** `(⟦𝛂⟧ ⊢ (∀(⦃x⦄:⟦X⟧)⟦𝛂⟧))`
- **Scheme of Types (Unicode):** `(⟦[𝛂@Fm.Expression]⟧ ⊢ (∀([⦃[x@Variable.Expression]⦄@Variable]:[⟦[X@Type.Expression.Expression]⟧@Type])⟦[𝛂@Fm.Expression]⟧))`
- **Proof Constructor:** `PGenR_prf (φ, x, x', Class, PForaR_prf (φ, x, x', Class, p))`
- **Judgements:** `[(x:Name), (X:Type), (𝛂:Fm)]`
- **Kernel Note:** Admissible rule of Generalisation: from |- phi infer |- forall x. phi. Sound only for closed derivations without undischarged hypotheses mentioning x.
- **Standalone Certificate:** [proofs/RulGeneralisation.html](proofs/RulGeneralisation.html)

## 3. Set/Class-Theoretic Foundations (3.01-3.98) (3.01-3.98)

Morse-Kelley / Von Neumann-Bernays-Gödel class comprehension, sethood, ordinals, Dunaev pairs, cardinals, universes, and reflection.

### 3.01 `RulClassComprehension` — Class comprehension (Inference Rule)

- **Identifier:** `RulClassComprehension` (entry `3.01`, kind: `Inference Rule`, status: `Primitive / Derived Rule (Kernel)`)
- **Formula (Unicode):** `((⦃x⦄∈{⦃x⦄|⟦𝛗⟧})←→((⦃x⦄ set)∧⟦𝛗⟧))`
- **Scheme of Types (Unicode):** `(([⦃[x@Variable.Expression]⦄@Class.Expression]∈{[⦃[x@Variable.Expression]⦄@Class.Expression]|⟦[𝛗@Fm.Expression]⟧})←→(([⦃[x@Variable.Expression]⦄@Class.Expression] set)∧⟦[𝛗@Fm.Expression]⟧))`
- **Proof Constructor:** `PComprAx_prf (φ)`
- **Judgements:** `[(x:Name), (𝛗:Fm)]`
- **Standalone Certificate:** [proofs/RulClassComprehension.html](proofs/RulClassComprehension.html)

### 3.07 `ThmEmptySetIsSubclass` — Example: “The empty class is a subclass of any class” statement (Theorem)

- **Identifier:** `ThmEmptySetIsSubclass` (entry `3.07`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `(∀(X:Class)(∅⊆X))`
- **Scheme of Types (Unicode):** `(∀([X@Variable]:[Class@Type])(∅⊆[X@Class.Expression]))`
- **Proof Constructor:** `PForaR_prf (Γ, X, X, Class, PMP_prf (PForaR_prf (Γ, z, z, Class, PImplR_prf (PMP_prf (PA11_prf (Γ, z ∈ ∅), PIdent_prf (z ∈ ∅)))), PSubDef_prf (∅, X, z)))`
- **Kernel Note:** Derived theorem in Variant 1 from DefSubclass, DefEmptySet, and AxmPropExFalso; machine-checked as thm_26_emptyset_is_subclass and thm_95_emptyset_subset_all in Variant 2.
- **Standalone Certificate:** [proofs/ThmEmptySetIsSubclass.html](proofs/ThmEmptySetIsSubclass.html)

### 3.11 `AxmIntensionality` — “Intensionality”(admissible) (Theorem)

- **Identifier:** `AxmIntensionality` (entry `3.11`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `(∀(X:Class)∀(Y:Class)(((X set)∧(Y set))—→((∀(W:Class)((X∈W)←→(Y∈W)))—→(X=Y))))`
- **Scheme of Types (Unicode):** `(∀([X@Variable]:[Class@Type])∀([Y@Variable]:[Class@Type])((([X@Class.Expression] set)∧([Y@Class.Expression] set))—→((∀([W@Variable]:[Class@Type])(([X@Class.Expression]∈[W@Class.Expression])←→([Y@Class.Expression]∈[W@Class.Expression])))—→([X@Class.Expression]=[Y@Class.Expression]))))`
- **Proof Constructor:** `PIntDef_prf (X, Y, Z)`
- **Standalone Certificate:** [proofs/AxmIntensionality.html](proofs/AxmIntensionality.html)

### 3.18 `ThmOrdinalsIsOrdinal` — The class of all ordinals is an ordinal class (Theorem)

- **Identifier:** `ThmOrdinalsIsOrdinal` (entry `3.18`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `Ord(On)`
- **Scheme of Types (Unicode):** `Ord(On)`
- **Proof Constructor:** `TpOrd (On)`
- **Standalone Certificate:** [proofs/ThmOrdinalsIsOrdinal.html](proofs/ThmOrdinalsIsOrdinal.html)

### 3.37 `ThmFamilyEvaluation` — Evaluation of “Family Value” via semi-singleton subsets (Theorem)

- **Identifier:** `ThmFamilyEvaluation` (entry `3.37`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `(∀(F:Class)∀(x:Class)(((F family)∧(x∈Dom(F)))—→(F(x)=⋃{s|(x,s)∈F})))`
- **Scheme of Types (Unicode):** `(∀([F@Variable]:[Class@Type])∀([x@Variable]:[Class@Type])((([F@Class.Expression] family)∧([x@Class.Expression]∈Dom([F@Class.Expression])))—→([F@Class.Expression]([x@Class.Expression])=⋃{[s@Class.Expression]|([x@Class.Expression],[s@Class.Expression])∈[F@Class.Expression]})))`
- **Proof Constructor:** `CpValOf (F, x)`
- **Standalone Certificate:** [proofs/ThmFamilyEvaluation.html](proofs/ThmFamilyEvaluation.html)

### 3.39 `DefPiPredicateModel` — “Dependent Product (Pi-Type)” predicate and section model (Theorem)

- **Identifier:** `DefPiPredicateModel` (entry `3.39`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `(∀(B:Class)∀(f:Class)(((B family)∧((f family)∧((Dom(f)=Dom(B))∧∀(u:Class)((u∈Dom(B))—→(f(u)∈B(u))))))—→∀(x:Class)((x∈Dom(B))—→(f(x)∈B(x)))))`
- **Scheme of Types (Unicode):** `(∀([B@Variable]:[Class@Type])∀([f@Variable]:[Class@Type])((([B@Class.Expression] family)∧(([f@Class.Expression] family)∧((Dom([f@Class.Expression])=Dom([B@Class.Expression]))∧∀([u@Variable]:[Class@Type])(([u@Class.Expression]∈Dom([B@Class.Expression]))—→([f@Class.Expression]([u@Class.Expression])∈[B@Class.Expression]([u@Class.Expression]))))))—→∀([x@Variable]:[Class@Type])(([x@Class.Expression]∈Dom([B@Class.Expression]))—→([f@Class.Expression]([x@Class.Expression])∈[B@Class.Expression]([x@Class.Expression])))))`
- **Proof Constructor:** `CpPi (X, P)`
- **Kernel Note:** Explicit typed term interpretation / valuation (μ_A : A.Expression → Class.Expression) of dependent product sections Π(x:Dom(F)) over a family F in the fixed background model.
- **Standalone Certificate:** [proofs/DefPiPredicateModel.html](proofs/DefPiPredicateModel.html)

### 3.58 `ThmUniversalClassInductive` — Class of all sets is successor-inductive (Peano-inductive) (Theorem)

- **Identifier:** `ThmUniversalClassInductive` (entry `3.58`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `Ind(V)`
- **Scheme of Types (Unicode):** `Ind(V)`
- **Proof Constructor:** `TpInd (V)`
- **Standalone Certificate:** [proofs/ThmUniversalClassInductive.html](proofs/ThmUniversalClassInductive.html)

### 3.59 `ThmOmegaInductive` — Intersection of all successor-inductive (Peano-inductive) classes is a successor-inductive class itself (ω is the ⊆-least successor-inductive class) (Theorem)

- **Identifier:** `ThmOmegaInductive` (entry `3.59`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `Ind(ω)`
- **Scheme of Types (Unicode):** `Ind(ω)`
- **Proof Constructor:** `TpInd (ω)`
- **Kernel Note:** Establishes that ω itself satisfies Ind(ω), making ω the ⊆-least (minimal) element among all successor-inductive classes in the ⊆ order.
- **Standalone Certificate:** [proofs/ThmOmegaInductive.html](proofs/ThmOmegaInductive.html)

### 3.60 `ThmOrdinalsInductive` — Class of all ordinal numbers is successor-inductive (Peano-inductive) (Theorem)

- **Identifier:** `ThmOrdinalsInductive` (entry `3.60`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `Ind(On)`
- **Scheme of Types (Unicode):** `Ind(On)`
- **Proof Constructor:** `TpInd (On)`
- **Standalone Certificate:** [proofs/ThmOrdinalsInductive.html](proofs/ThmOrdinalsInductive.html)

### 3.61 `ThmOmegaTransitive` — ω is transitive (Theorem)

- **Identifier:** `ThmOmegaTransitive` (entry `3.61`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `Tr(ω)`
- **Scheme of Types (Unicode):** `Tr(ω)`
- **Proof Constructor:** `PTransDef_prf (ω, x)`
- **Standalone Certificate:** [proofs/ThmOmegaTransitive.html](proofs/ThmOmegaTransitive.html)

### 3.62 `ThmOmegaOrdinal` — ω is ordinal (Theorem)

- **Identifier:** `ThmOmegaOrdinal` (entry `3.62`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `Ord(ω)`
- **Scheme of Types (Unicode):** `Ord(ω)`
- **Proof Constructor:** `TpOrd (ω)`
- **Standalone Certificate:** [proofs/ThmOmegaOrdinal.html](proofs/ThmOmegaOrdinal.html)

### 3.63 `ThmOmegaInOrdinals` — ω is in the class of all ordinal numbers (sets) (Theorem)

- **Identifier:** `ThmOmegaInOrdinals` (entry `3.63`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `(ω∈On)`
- **Scheme of Types (Unicode):** `(ω∈On)`
- **Proof Constructor:** `CpOn`
- **Standalone Certificate:** [proofs/ThmOmegaInOrdinals.html](proofs/ThmOmegaInOrdinals.html)

### 3.64 `DefIsCardinal` — “Is cardinal” predicate (Theorem)

- **Identifier:** `DefIsCardinal` (entry `3.64`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `(∀(C:Class)(Card(C)←→(∃(K:Class)(|K|=C))))`
- **Scheme of Types (Unicode):** `(∀([C@Variable]:[Class@Type])(Card([C@Class.Expression])←→(∃([K@Variable]:[Class@Type])(|[K@Class.Expression]|=[C@Class.Expression]))))`
- **Proof Constructor:** `TpCard (K)`
- **Standalone Certificate:** [proofs/DefIsCardinal.html](proofs/DefIsCardinal.html)

### 3.65 `ThmOmegaCardinal` — ω is cardinal (Theorem)

- **Identifier:** `ThmOmegaCardinal` (entry `3.65`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `Card(ω)`
- **Scheme of Types (Unicode):** `Card(ω)`
- **Proof Constructor:** `TpCard (ω)`
- **Standalone Certificate:** [proofs/ThmOmegaCardinal.html](proofs/ThmOmegaCardinal.html)

### 3.66 `ThmOrdinalsCardinal` — On is a cardinal class (Theorem)

- **Identifier:** `ThmOrdinalsCardinal` (entry `3.66`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `Card(On)`
- **Scheme of Types (Unicode):** `Card(On)`
- **Proof Constructor:** `TpCard (On)`
- **Standalone Certificate:** [proofs/ThmOrdinalsCardinal.html](proofs/ThmOrdinalsCardinal.html)

### 3.67 `ThmUniversalClassNotCardinal` — Class of all sets is not a cardinal class (Theorem)

- **Identifier:** `ThmUniversalClassNotCardinal` (entry `3.67`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `(¬Card(V))`
- **Scheme of Types (Unicode):** `(¬Card(V))`
- **Proof Constructor:** `TpCard (V)`
- **Standalone Certificate:** [proofs/ThmUniversalClassNotCardinal.html](proofs/ThmUniversalClassNotCardinal.html)

### 3.69 `ThmUniversalClassIsUniverse` — The class of all sets is a universe (Theorem)

- **Identifier:** `ThmUniversalClassIsUniverse` (entry `3.69`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `(V universe)`
- **Scheme of Types (Unicode):** `(V universe)`
- **Proof Constructor:** `PVUniverseAx_prf`
- **Kernel Note:** Formal kernel proof (v_universe_thm_proof : unit -> Thm, verified by Thm.checkPipeline and Thm.slow_check) deriving (𝘍, [] ⊢ (V universe)) from 3.68 #DefGrothendieckUniverse (PKernelDef_prf) and the 6 component lemmas: (1) (ω ∈ V) via 3.57 #AxmOmegaIsSet (POmegaSetAx_prf), 3.05 #DefUniversalClass (PKernelDef_prf), 3.08 #AxmLeftInSound (PLeftInSoundAx_prf), and 3.01 #RulClassComprehension (PComprAx_prf); (2) (V transitive) via 3.15 #DefTransitiveClass (PKernelDef_prf), 3.06 #DefSubclass (PKernelDef_prf), and 3.02 #DefIsSet (PKernelDef_prf); (3) (V Hereditary) via 3.44 #DefHereditaryClass (PKernelDef_prf) and 3.12 #AxmHeredity (PHeredityAx_prf); (4) (V Powerful) via 3.45 #DefPowerfulClass (PKernelDef_prf) and 3.13 #AxmExponent (PPowSetAx_prf); (5) (V Tight) via 3.47 #DefTightClass (PKernelDef_prf), 3.43 #AxmSizeLimitation (PSizeLimAx_prf), and 3.41/3.42 #DefCardinality/#DefCardLess (PCardLessOrderAx_prf); (6) (V Pairful) via 3.46 #DefPairfulClass (PKernelDef_prf) and 3.49 #DefUnorderedPair sethood (PPairSetAx_prf). Backup axiom constructor PVUniverseAx_prf (v_universe_axm_backup_entry) is also retained in the kernel just in case.
- **Standalone Certificate:** [proofs/ThmUniversalClassIsUniverse.html](proofs/ThmUniversalClassIsUniverse.html)

### 3.71 `ThmTransitiveClassInduction` — General form of the transfinite ∈-induction principle on a transitive class (Theorem)

- **Identifier:** `ThmTransitiveClassInduction` (entry `3.71`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `(∀(K:Class)∀(A:Class)((Tr(K)∧((K∩𝒫(A))⊆A))—→(K⊆A)))`
- **Scheme of Types (Unicode):** `(∀([K@Variable]:[Class@Type])∀([A@Variable]:[Class@Type])((Tr([K@Class.Expression])∧(([K@Class.Expression]∩𝒫([A@Class.Expression]))⊆[A@Class.Expression]))—→([K@Class.Expression]⊆[A@Class.Expression])))`
- **Proof Constructor:** `PEpsIndAx_prf (X)`
- **Kernel Note:** Transfinite membership (∈) induction on a well-founded transitive class, contrasted with successor-induction (Peano 0-successor-induction Ind(X) in 3.55).
- **Standalone Certificate:** [proofs/ThmTransitiveClassInduction.html](proofs/ThmTransitiveClassInduction.html)

### 3.77 `ThmDunaevFirstProjection` — First projection of Dunaev's tagged ordered pair (Theorem)

- **Identifier:** `ThmDunaevFirstProjection` (entry `3.77`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `(∀(A:Class)∀(B:Class)({a|{{{{a}}},{∅}}∈(A,B)}=A))`
- **Scheme of Types (Unicode):** `(∀([A@Variable]:[Class@Type])∀([B@Variable]:[Class@Type])({[a@Class.Expression]|{{{{[a@Class.Expression]}}},{∅}}∈([A@Class.Expression],[B@Class.Expression])}=[A@Class.Expression]))`
- **Proof Constructor:** `CpPr1 (p)`
- **Kernel Note:** Recovers A from (A,B) via tag 1 without requiring A or B to be sets.
- **Standalone Certificate:** [proofs/ThmDunaevFirstProjection.html](proofs/ThmDunaevFirstProjection.html)

### 3.78 `ThmDunaevSecondProjection` — Second projection of Dunaev's tagged ordered pair (Theorem)

- **Identifier:** `ThmDunaevSecondProjection` (entry `3.78`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `(∀(A:Class)∀(B:Class)({b|{{{{b}}},{∅,{∅}}}∈(A,B)}=B))`
- **Scheme of Types (Unicode):** `(∀([A@Variable]:[Class@Type])∀([B@Variable]:[Class@Type])({[b@Class.Expression]|{{{{[b@Class.Expression]}}},{∅,{∅}}}∈([A@Class.Expression],[B@Class.Expression])}=[B@Class.Expression]))`
- **Proof Constructor:** `CpPr2 (p)`
- **Kernel Note:** Recovers B from (A,B) via tag 2 without requiring A or B to be sets.
- **Standalone Certificate:** [proofs/ThmDunaevSecondProjection.html](proofs/ThmDunaevSecondProjection.html)

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

### 3.95 `ThmTransfiniteApproxCoherence` — Step 1 of Transfinite Recursion on On: coherence of approximations on common ordinal domains (Theorem)

- **Identifier:** `ThmTransfiniteApproxCoherence` (entry `3.95`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `(∀(G:Class)∀(g:Class)∀(h:Class)∀(B:Class)((TransfiniteApprox(G,g)∧(TransfiniteApprox(G,h)∧((B∈(Dom(g)∩Dom(h)))∧(Restrict(g,B)=Restrict(h,B)))))—→((g(B)=G(Restrict(g,B)))∧(g(B)=h(B)))))`
- **Scheme of Types (Unicode):** `(∀([G@Variable]:[Class@Type])∀([g@Variable]:[Class@Type])∀([h@Variable]:[Class@Type])∀([B@Variable]:[Class@Type])((TransfiniteApprox([G@Class.Expression],[g@Class.Expression])∧(TransfiniteApprox([G@Class.Expression],[h@Class.Expression])∧(([B@Class.Expression]∈(Dom([g@Class.Expression])∩Dom([h@Class.Expression])))∧(Restrict([g@Class.Expression],[B@Class.Expression])=Restrict([h@Class.Expression],[B@Class.Expression])))))—→(([g@Class.Expression]([B@Class.Expression])=[G@Class.Expression](Restrict([g@Class.Expression],[B@Class.Expression])))∧([g@Class.Expression]([B@Class.Expression])=[h@Class.Expression]([B@Class.Expression])))))`
- **Proof Constructor:** `thm_transfinite_approx_coherence (PForaR_prf / PKernelDef_prf / PBinInterDef_prf / PEqDef_prf)`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_transfinite_approx_coherence : Thm, verified by Thm.checkPipeline and Thm.slow_check): for any two G-approximations g and h and any ordinal B in Dom(g) n Dom(h), if their restrictions Restrict(g, B) and Restrict(h, B) agree below B (at the minimal ordinal of any hypothetical disagreement), then valOf(g, B) = valOf(G, Restrict(g, B)) = valOf(h, B).
- **Standalone Certificate:** [proofs/ThmTransfiniteApproxCoherence.html](proofs/ThmTransfiniteApproxCoherence.html)

### 3.96 `ThmTransfiniteRecursionEquation` — Steps 2 and 3 of Transfinite Recursion on On: approximation sethood, union inclusion, and global recursion equation F(A) = G(Restrict(F, A)) (Theorem)

- **Identifier:** `ThmTransfiniteRecursionEquation` (entry `3.96`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `(∀(G:Class)∀(g:Class)∀(F:Class)∀(A:Class)((TransfiniteApprox(G,g)—→((g set)∧(g⊆TransfiniteRec(G))))∧(((∀(B:Class)((B∈On)—→∃(h:Class)(TransfiniteApprox(G,h)∧((B∈Dom(h))∧((F(B)=h(B))∧(Restrict(F,B)=Restrict(h,B)))))))∧(A∈On))—→(F(A)=G(Restrict(F,A))))))`
- **Scheme of Types (Unicode):** `(∀([G@Variable]:[Class@Type])∀([g@Variable]:[Class@Type])∀([F@Variable]:[Class@Type])∀([A@Variable]:[Class@Type])((TransfiniteApprox([G@Class.Expression],[g@Class.Expression])—→(([g@Class.Expression] set)∧([g@Class.Expression]⊆TransfiniteRec([G@Class.Expression]))))∧(((∀([B@Variable]:[Class@Type])(([B@Class.Expression]∈On)—→∃([h@Variable]:[Class@Type])(TransfiniteApprox([G@Class.Expression],[h@Class.Expression])∧(([B@Class.Expression]∈Dom([h@Class.Expression]))∧(([F@Class.Expression]([B@Class.Expression])=[h@Class.Expression]([B@Class.Expression]))∧(Restrict([F@Class.Expression],[B@Class.Expression])=Restrict([h@Class.Expression],[B@Class.Expression])))))))∧([A@Class.Expression]∈On))—→([F@Class.Expression]([A@Class.Expression])=[G@Class.Expression](Restrict([F@Class.Expression],[A@Class.Expression]))))))`
- **Proof Constructor:** `thm_transfinite_recursion_equation (PForaR_prf / PKernelDef_prf / PComprAx_prf / PUnaryUnionDef_prf / PExisL_prf)`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_transfinite_recursion_equation, thm_approx_is_set, thm_in_approx_class_iff, thm_approx_sub_transfinite_rec, and thm_restrict_agree_from_sub : Thm, verified by Thm.checkPipeline and Thm.slow_check): every G-approximation g is a set and a subclass of TransfiniteRec(G) = U { g | TransfiniteApprox(G, g) }, and when F agrees at each ordinal A in On with its witnessing approximation h_A in A(G), valOf(F, A) = valOf(G, Restrict(F, A)).
- **Standalone Certificate:** [proofs/ThmTransfiniteRecursionEquation.html](proofs/ThmTransfiniteRecursionEquation.html)

### 3.97 `ThmTransfiniteRecursionUniqueness` — Step 4 of Transfinite Recursion on On: uniqueness of the transfinite recursion class-function (Theorem)

- **Identifier:** `ThmTransfiniteRecursionUniqueness` (entry `3.97`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `(∀(G:Class)∀(F:Class)∀(H:Class)∀(A:Class)((((∀(B:Class)∀(X:Class)(((B∈On)∧(X=Restrict(F,B)))—→(F(B)=G(X))))∧∀(B:Class)∀(X:Class)(((B∈On)∧(X=Restrict(H,B)))—→(H(B)=G(X))))∧((A∈On)∧(Restrict(F,A)=Restrict(H,A))))—→(F(A)=H(A))))`
- **Scheme of Types (Unicode):** `(∀([G@Variable]:[Class@Type])∀([F@Variable]:[Class@Type])∀([H@Variable]:[Class@Type])∀([A@Variable]:[Class@Type])((((∀([B@Variable]:[Class@Type])∀([X@Variable]:[Class@Type])((([B@Class.Expression]∈On)∧([X@Class.Expression]=Restrict([F@Class.Expression],[B@Class.Expression])))—→([F@Class.Expression]([B@Class.Expression])=[G@Class.Expression]([X@Class.Expression]))))∧∀([B@Variable]:[Class@Type])∀([X@Variable]:[Class@Type])((([B@Class.Expression]∈On)∧([X@Class.Expression]=Restrict([H@Class.Expression],[B@Class.Expression])))—→([H@Class.Expression]([B@Class.Expression])=[G@Class.Expression]([X@Class.Expression]))))∧(([A@Class.Expression]∈On)∧(Restrict([F@Class.Expression],[A@Class.Expression])=Restrict([H@Class.Expression],[A@Class.Expression]))))—→([F@Class.Expression]([A@Class.Expression])=[H@Class.Expression]([A@Class.Expression]))))`
- **Proof Constructor:** `thm_transfinite_recursion_uniqueness (PForaR_prf / PEqDef_prf / PLeftInSoundAx_prf)`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_transfinite_recursion_uniqueness : Thm, verified by Thm.checkPipeline and Thm.slow_check): if two class-functions F and H both satisfy the transfinite recursion equation on On and their restrictions Restrict(F, A) = Restrict(H, A) agree below A in On, then valOf(F, A) = valOf(H, A).
- **Standalone Certificate:** [proofs/ThmTransfiniteRecursionUniqueness.html](proofs/ThmTransfiniteRecursionUniqueness.html)

### 3.98 `ThmVonNeumannHierarchyByTransfiniteRecursion` — Application of Transfinite Recursion on On: construction of the von Neumann cumulative hierarchy V_A = U_(B in A) P(V_B) (Theorem)

- **Identifier:** `ThmVonNeumannHierarchyByTransfiniteRecursion` (entry `3.98`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `(∀(f:Class)∀(V:Class)∀(A:Class)(((∀(B:Class)¬(B∈Dom(f)))—→(VonNeumannStepG(f)=∅))∧(((V(A)=VonNeumannStepG(Restrict(V,A)))∧(VonNeumannStepG(Restrict(V,A))=⋃{Y|∃(B:Class)((B∈A)∧(Y=𝒫(V(B))))}))—→(V(A)=⋃{Y|∃(B:Class)((B∈A)∧(Y=𝒫(V(B))))}))))`
- **Scheme of Types (Unicode):** `(∀([f@Variable]:[Class@Type])∀([V@Variable]:[Class@Type])∀([A@Variable]:[Class@Type])(((∀([B@Variable]:[Class@Type])¬([B@Class.Expression]∈Dom([f@Class.Expression])))—→(VonNeumannStepG([f@Class.Expression])=∅))∧((([V@Class.Expression]([A@Class.Expression])=VonNeumannStepG(Restrict([V@Class.Expression],[A@Class.Expression])))∧(VonNeumannStepG(Restrict([V@Class.Expression],[A@Class.Expression]))=⋃{[Y@Class.Expression]|∃([B@Variable]:[Class@Type])(([B@Class.Expression]∈[A@Class.Expression])∧([Y@Class.Expression]=𝒫([V@Class.Expression]([B@Class.Expression]))))}))—→([V@Class.Expression]([A@Class.Expression])=⋃{[Y@Class.Expression]|∃([B@Variable]:[Class@Type])(([B@Class.Expression]∈[A@Class.Expression])∧([Y@Class.Expression]=𝒫([V@Class.Expression]([B@Class.Expression]))))}))))`
- **Proof Constructor:** `thm_von_neumann_hierarchy_by_recursion (PForaR_prf / PKernelDef_prf / PComprAx_prf / PUnaryUnionDef_prf)`
- **Kernel Note:** Machine-checked MKTD1-system theorem (thm_von_neumann_hierarchy_by_recursion and thm_von_neumann_step_g_empty : Thm, verified by Thm.checkPipeline and Thm.slow_check): instantiating transfinite recursion on On with generator VonNeumannStepG yields VonNeumannStepG(f) = 0 when Dom(f) is empty (so V_0 = 0) and valOf(V, A) = VonNeumannStepG(Restrict(V, A)) = U { Y : Class | exists (B:Class), (B in A) /\ (Y = Pow(valOf(V, B))) }.
- **Standalone Certificate:** [proofs/ThmVonNeumannHierarchyByTransfiniteRecursion.html](proofs/ThmVonNeumannHierarchyByTransfiniteRecursion.html)

## 4. Metalogical Laws (4.01-4.06) (4.01-4.06)

Explicit substitution, context encoding, co-necessitation, uniqueness quantifiers, and reflected comprehension.

### 4.03 `DefMetaConecessitation` — CoNecessitation (Inference Rule)

- **Identifier:** `DefMetaConecessitation` (entry `4.03`, kind: `Inference Rule`, status: `Primitive / Derived Rule (Kernel)`)
- **Formula (Unicode):** `(∀(Γ:Ctx)∀(𝛗:Fm)((𝘍,[]⊢‹𝘍,Γ⊢𝛗›)—→(𝘍,Γ⊢𝛗)))`
- **Scheme of Types (Unicode):** `(∀([Γ@Variable]:[Ctx@Type])∀([𝛗@Variable]:[Fm@Type])((𝘍,[]⊢‹𝘍,[Γ@Ctx.Expression]⊢[𝛗@Fm.Expression]›)—→(𝘍,[Γ@Ctx.Expression]⊢[𝛗@Fm.Expression])))`
- **Proof Constructor:** `PMetaConec_prf (Γ, φ, PCredo_prf (p))`
- **Kernel Note:** If a formula  is derived in 𝘍 from the empty context, then the formula 𝛗 is derived in 𝘍 from the context Γ. Why this holds for 𝘍: for an arbitrary theory 𝘞, concluding (𝘞, Γ⊢𝛗) from (𝘞, [] ⊢ ) requires 1-consistency / Σ₁-soundness of 𝘞 (and for the r.e. base theory 𝘛, asserting internal co-necessitation would by Löb's theorem 5.01 trivialize 𝘛). Because 𝘍 is a non-r.e. sound Henkin extension equipped with Soundness 3.72 ((𝘍, [] ⊢ ψ) → ⟦ψ⟧), instantiating 3.72 at ψ :=  directly yields (𝘍, Γ⊢𝛗).
- **Standalone Certificate:** [proofs/DefMetaConecessitation.html](proofs/DefMetaConecessitation.html)

## 5. Incompleteness-Related Statements (5.01-5.02) (5.01-5.02)

Formalized Löb's theorem and Gödel's second incompleteness theorem.

### 5.01 `ThmLoeb` — Löb's theorem (Theorem)

- **Identifier:** `ThmLoeb` (entry `5.01`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `(∀(𝛗:Fm)(𝘌,[]⊢‹(𝘛,[]⊢‹(𝘛,[]⊢𝛗)—→⟦𝛗⟧›)—→(𝘛,[]⊢𝛗)›))`
- **Scheme of Types (Unicode):** `(∀([𝛗@Variable]:[Fm@Type])(𝘌,[]⊢‹(𝘛,[]⊢‹(𝘛,[]⊢[𝛗@Fm.Expression])—→⟦[𝛗@Fm.Expression]⟧›)—→(𝘛,[]⊢[𝛗@Fm.Expression])›))`
- **Proof Constructor:** `PLoeb_prf (ψ, PMP_prf (PDiagFixedPoint_prf (ψ, φ), PAndR_prf (PHBL1_prf (ψ), PAndR_prf (PHBL2_prf (ψ, φ), PHBL3_prf (ψ)))))`
- **Kernel Note:** Here 𝘌 ∈ {IΣ₁, PA, 𝘛, NBG, MK} is an unspecified elementary metatheory capable of proving the Hilbert-Bernays-Löb derivability conditions D1-D3 for the r.e. base theory 𝘛 (specifically D3, Σ₁-completeness, which requires Σ₁-induction and fails in Robinson's arithmetic Q; see Hájek & Pudlák 1993, Metamathematics of First-Order Arithmetic, Ch. I §3 & Ch. III; Bezboruah & Shepherdson 1976, JSL 41(2):503-512; Boolos 1993, The Logic of Provability, Ch. 2).
- **Standalone Certificate:** [proofs/ThmLoeb.html](proofs/ThmLoeb.html)

### 5.02 `ThmSecondIncompleteness` — Gödel's second incompleteness theorem (Theorem)

- **Identifier:** `ThmSecondIncompleteness` (entry `5.02`, kind: `Theorem`, status: `Verified (Kernel)`)
- **Formula (Unicode):** `(𝘌,[]⊢‹(¬(𝘛,[]⊢‹⊥›))—→¬(𝘛,[]⊢‹¬(𝘛,[]⊢‹⊥›)›)›)`
- **Scheme of Types (Unicode):** `(𝘌,[]⊢‹(¬(𝘛,[]⊢‹⊥›))—→¬(𝘛,[]⊢‹¬(𝘛,[]⊢‹⊥›)›)›)`
- **Proof Constructor:** `PSecondIncompl_prf (Τ, PMP_prf (PLoebInstBot_prf (Τ, ⊥), PImplR_prf (PConsistencyDef_prf (Τ, ⊥))))`
- **Kernel Note:** Formalized in the unspecified elementary metatheory 𝘌 ∈ {IΣ₁, PA, 𝘛, NBG, MK} (not Robinson's Q, which lacks Σ₁-induction needed for HBL condition D3; cf. Hájek & Pudlák 1993; Bezboruah & Shepherdson 1976) for the recursively enumerable object theory 𝘛. Note that Gödel's second incompleteness theorem applies to the r.e. theory 𝘛, whereas 𝘍 is non-r.e.
- **Standalone Certificate:** [proofs/ThmSecondIncompleteness.html](proofs/ThmSecondIncompleteness.html)

