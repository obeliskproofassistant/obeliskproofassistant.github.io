<!-- AUTO-GENERATED FILE -- DO NOT EDIT DIRECTLY BY AI OR HAND.
     Source files: set_theory_prover/program/dependent_syntax.ML,
                   set_theory_prover/program/dependent_eval.ML,
                   set_theory_prover/program/dependent_typechecker.ML,
                   set_theory_prover/program/verified_theorems.ML
     Generator:    set_theory_prover/program/nbg_html_generator.ML
     Regenerate:   cd /hostramdisk/set_theory_prover/program && poly -q --use nbg_html_generator.ML
-->

# Obelisk MKTD2-system Formulas-as-Types Library (MKTD2-theory)

Agent-friendly Markdown edition generated directly from `set_theory_prover/program/verified_theorems.ML` via `nbg_html_generator.ML` for **MKTD2-system / MKTD2-prover (MKTD2-framework, MKTD2-theory)**.

- **Live Kernel Audit:** 220/220 Mechanically Type-Checked Records (197 Derived Constructive Theorems, 16 Conservative Definitions, 7 Irreducible MK/NBG Axioms).
- **Machine-Readable JSON Database:** [nbg_library.json](nbg_library.json)
- **MKTD1-system Complete Entity Database (Markdown):** [manual.md](manual.md)

### NBG-001 `thm_A01` (Derived)

- **Identifier:** `thm_A01` (`NBG-001`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:Prop), (A → (B → A))`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:Prop), (A -> (B -> A))`
- **Constructive Proof Term:** `(λ(A:Prop). (λ(B:Prop). (λ(a:A). (λ(b:B). a))))`

### NBG-002 `thm_A02` (Derived)

- **Identifier:** `thm_A02` (`NBG-002`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:Prop), Π(C:Prop), ((A → (B → C)) → ((A → B) → (A → C)))`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:Prop), Pi(C:Prop), ((A -> (B -> C)) -> ((A -> B) -> (A -> C)))`
- **Constructive Proof Term:** `(λ(A:Prop). (λ(B:Prop). (λ(C:Prop). (λ(f:(A → (B → C))). (λ(g:(A → B)). (λ(x:A). ((f x) (g x))))))))`

### NBG-003 `thm_A03` (Derived)

- **Identifier:** `thm_A03` (`NBG-003`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:Prop), ((A × B) → A)`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:Prop), ((A * B) -> A)`
- **Constructive Proof Term:** `(λ(A:Prop). (λ(B:Prop). (λ(p:(A × B)). fst(p)))) ≡ (λ(A:Prop). (λ(B:Prop). fst))`

### NBG-004 `thm_A04` (Derived)

- **Identifier:** `thm_A04` (`NBG-004`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:Prop), ((A × B) → B)`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:Prop), ((A * B) -> B)`
- **Constructive Proof Term:** `(λ(A:Prop). (λ(B:Prop). (λ(p:(A × B)). snd(p))))`

### NBG-005 `thm_A05` (Derived)

- **Identifier:** `thm_A05` (`NBG-005`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:Prop), (A → (B → (A × B)))`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:Prop), (A -> (B -> (A * B)))`
- **Constructive Proof Term:** `(λ(A:Prop). (λ(B:Prop). (λ(a:A). (λ(b:B). ⟨a, b⟩))))`

### NBG-006 `thm_A06` (Derived)

- **Identifier:** `thm_A06` (`NBG-006`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:Prop), (A → Π(C:Prop), ((A → C) → ((B → C) → C)))`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:Prop), (A -> Pi(C:Prop), ((A -> C) -> ((B -> C) -> C)))`
- **Constructive Proof Term:** `(λ(A:Prop). (λ(B:Prop). (λ(a:A). (λ(C:Prop). (λ(fa:(A → C)). (λ(fb:(B → C)). (fa a)))))))`

### NBG-007 `thm_A07` (Derived)

- **Identifier:** `thm_A07` (`NBG-007`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:Prop), (B → Π(C:Prop), ((A → C) → ((B → C) → C)))`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:Prop), (B -> Pi(C:Prop), ((A -> C) -> ((B -> C) -> C)))`
- **Constructive Proof Term:** `(λ(A:Prop). (λ(B:Prop). (λ(b:B). (λ(C:Prop). (λ(fa:(A → C)). (λ(fb:(B → C)). (fb b)))))))`

### NBG-008 `thm_A08` (Derived)

- **Identifier:** `thm_A08` (`NBG-008`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:Prop), Π(C:Prop), ((A → C) → ((B → C) → ((Π(D:Prop), ((A → D) → ((B → D) → D))) → C)))`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:Prop), Pi(C:Prop), ((A -> C) -> ((B -> C) -> ((Pi(D:Prop), ((A -> D) -> ((B -> D) -> D))) -> C)))`
- **Constructive Proof Term:** `(λ(A:Prop). (λ(B:Prop). (λ(C:Prop). (λ(fa:(A → C)). (λ(fb:(B → C)). (λ(disj:Π(D:Prop), ((A → D) → ((B → D) → D))). (((disj C) fa) fb)))))))`

### NBG-009 `thm_A09` (Derived)

- **Identifier:** `thm_A09` (`NBG-009`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:Prop), ((A → B) → ((A → (B → 𝟘)) → (A → 𝟘)))`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:Prop), ((A -> B) -> ((A -> (B -> Void)) -> (A -> Void)))`
- **Constructive Proof Term:** `(λ(A:Prop). (λ(B:Prop). (λ(f:(A → B)). (λ(g:(A → (B → 𝟘))). (λ(a:A). ((g a) (f a)))))))`

### NBG-010 `thm_A10` (Derived)

- **Identifier:** `thm_A10` (`NBG-010`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), (((A → 𝟘) → 𝟘) → A)`
- **Statement (ANSII):** `Pi(A:Prop), (((A -> Void) -> Void) -> A)`
- **Constructive Proof Term:** `(λ(A:Prop). (λ(dneg:((A → 𝟘) → 𝟘)). ax_dneg_elim(A, dneg)))`

### NBG-011 `thm_A11` (Derived)

- **Identifier:** `thm_A11` (`NBG-011`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), (𝟘 → A)`
- **Statement (ANSII):** `Pi(A:Prop), (Void -> A)`
- **Constructive Proof Term:** `(λ(A:Prop). (λ(falsum:𝟘). ax_false_elim(A, falsum)))`

### NBG-012 `thm_A12` (Derived)

- **Identifier:** `thm_A12` (`NBG-012`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:Prop), (((A → B) → A) → A)`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:Prop), (((A -> B) -> A) -> A)`
- **Constructive Proof Term:** `(λ(A:Prop). (λ(B:Prop). (λ(h:((A → B) → A)). (ax_peirce(A, B) h))))`

### NBG-013 `thm_identity` (Derived)

- **Identifier:** `thm_identity` (`NBG-013`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), (A → A)`
- **Statement (ANSII):** `Pi(A:Prop), (A -> A)`
- **Constructive Proof Term:** `(λ(A:Prop). (λ(x:A). x))`

### NBG-014 `thm_modus_ponens` (Derived)

- **Identifier:** `thm_modus_ponens` (`NBG-014`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:Prop), ((A → B) → (A → B))`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:Prop), ((A -> B) -> (A -> B))`
- **Constructive Proof Term:** `(λ(A:Prop). (λ(B:Prop). (λ(f:(A → B)). (λ(a:A). (f a)))))`

### NBG-015 `thm_transitivity` (Derived)

- **Identifier:** `thm_transitivity` (`NBG-015`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:Prop), Π(C:Prop), ((A → B) → ((B → C) → (A → C)))`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:Prop), Pi(C:Prop), ((A -> B) -> ((B -> C) -> (A -> C)))`
- **Constructive Proof Term:** `(λ(A:Prop). (λ(B:Prop). (λ(C:Prop). (λ(f:(A → B)). (λ(g:(B → C)). (λ(a:A). (g (f a))))))))`

### NBG-016 `thm_and_comm` (Derived)

- **Identifier:** `thm_and_comm` (`NBG-016`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:Prop), ((A × B) → (B × A))`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:Prop), ((A * B) -> (B * A))`
- **Constructive Proof Term:** `(λ(A:Prop). (λ(B:Prop). (λ(p:(A × B)). ⟨snd(p), fst(p)⟩)))`

### NBG-017 `thm_contraposition` (Derived)

- **Identifier:** `thm_contraposition` (`NBG-017`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:Prop), ((A → B) → ((B → 𝟘) → (A → 𝟘)))`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:Prop), ((A -> B) -> ((B -> Void) -> (A -> Void)))`
- **Constructive Proof Term:** `(λ(A:Prop). (λ(B:Prop). (λ(f:(A → B)). (λ(nb:(B → 𝟘)). (λ(a:A). (nb (f a)))))))`

### NBG-018 `thm_D01` (Derived)

- **Identifier:** `thm_D01` (`NBG-018`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:(Class → Prop)), ((Π(x:Class), (A → (B x))) → (A → Π(x:Class), (B x)))`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:(Class -> Prop)), ((Pi(x:Class), (A -> (B x))) -> (A -> Pi(x:Class), (B x)))`
- **Constructive Proof Term:** `(λ(A:Prop). (λ(B:(Class → Prop)). (λ(h:Π(x:Class), (A → (B x))). (λ(a:A). (λ(x:Class). ((h x) a))))))`

### NBG-019 `thm_forall_inst` (Derived)

- **Identifier:** `thm_forall_inst` (`NBG-019`, kind: `Derived`)
- **Statement (Unicode):** `Π(B:(Class → Prop)), Π(c:Class), ((Π(x:Class), (B x)) → (B c))`
- **Statement (ANSII):** `Pi(B:(Class -> Prop)), Pi(c:Class), ((Pi(x:Class), (B x)) -> (B c))`
- **Constructive Proof Term:** `(λ(B:(Class → Prop)). (λ(c:Class). (λ(h:Π(x:Class), (B x)). (h c))))`

### NBG-020 `thm_exists_intro` (Derived)

- **Identifier:** `thm_exists_intro` (`NBG-020`, kind: `Derived`)
- **Statement (Unicode):** `Π(B:(Class → Prop)), Π(c:Class), ((B c) → Σ(x:Class), (B x))`
- **Statement (ANSII):** `Pi(B:(Class -> Prop)), Pi(c:Class), ((B c) -> Sigma(x:Class), (B x))`
- **Constructive Proof Term:** `(λ(B:(Class → Prop)). (λ(c:Class). (λ(witness:(B c)). ⟨c, witness⟩)))`

### NBG-021 `def_isSet` (Definitional)

- **Identifier:** `def_isSet` (`NBG-021`, kind: `Definitional`)
- **Statement (Unicode):** `Π(X:Class), ((set(X) → Σ(Y:Class), (X ∈ Y)) × ((Σ(Y:Class), (X ∈ Y)) → set(X)))`
- **Statement (ANSII):** `Pi(X:Class), ((set(X) -> Sigma(Y:Class), (X in Y)) * ((Sigma(Y:Class), (X in Y)) -> set(X)))`
- **Constructive Proof Term:** `(λ(X:Class). ⟨(λ(h:set(X)). let res:Σ(Y:Class), (X ∈ Y) = h in res), (λ(h:Σ(Y:Class), (X ∈ Y)). let res:set(X) = h in res)⟩)`

### NBG-022 `def_isProper` (Definitional)

- **Identifier:** `def_isProper` (`NBG-022`, kind: `Definitional`)
- **Statement (Unicode):** `Π(K:Class), ((proper(K) → (set(K) → 𝟘)) × ((set(K) → 𝟘) → proper(K)))`
- **Statement (ANSII):** `Pi(K:Class), ((proper(K) -> (set(K) -> Void)) * ((set(K) -> Void) -> proper(K)))`
- **Constructive Proof Term:** `(λ(K:Class). ⟨(λ(h:proper(K)). let res:(set(K) → 𝟘) = h in res), (λ(h:(set(K) → 𝟘)). let res:proper(K) = h in res)⟩)`

### NBG-023 `def_empty_set` (Definitional)

- **Identifier:** `def_empty_set` (`NBG-023`, kind: `Definitional`)
- **Statement (Unicode):** `Π(X:Class), (((X = ∅) → Π(z:Class), ((z ∈ X) → 𝟘)) × ((Π(z:Class), ((z ∈ X) → 𝟘)) → (X = ∅)))`
- **Statement (ANSII):** `Pi(X:Class), (((X = EmptySet) -> Pi(z:Class), ((z in X) -> Void)) * ((Pi(z:Class), ((z in X) -> Void)) -> (X = EmptySet)))`
- **Constructive Proof Term:** `(λ(X:Class). ⟨(λ(hEq:(X = ∅)). (λ(z:Class). (λ(hzX:(z ∈ X)). ax_empty_no_elements(z, (((ax_eq_subst((λ(C:Class). (z ∈ C)), X) ∅) hEq) hzX))))), (λ(hNoElts:Π(z:Class), ((z ∈ X) → 𝟘)). (ax_extensionality(X, ∅) (λ(z:Class). ⟨(λ(hzX:(z ∈ X)). ax_false_elim((z ∈ ∅), ((hNoElts z) hzX))), (λ(hzE:(z ∈ ∅)). ax_false_elim((z ∈ X), ax_empty_no_elements(z, hzE)))⟩)))⟩)`

### NBG-024 `def_universal_class` (Definitional)

- **Identifier:** `def_universal_class` (`NBG-024`, kind: `Definitional`)
- **Statement (Unicode):** `Π(X:Class), (((X = V) → Π(z:Class), (((z ∈ X) → set(z)) × (set(z) → (z ∈ X)))) × ((Π(z:Class), (((z ∈ X) → set(z)) × (set(z) → (z ∈ X)))) → (X = V)))`
- **Statement (ANSII):** `Pi(X:Class), (((X = V) -> Pi(z:Class), (((z in X) -> set(z)) * (set(z) -> (z in X)))) * ((Pi(z:Class), (((z in X) -> set(z)) * (set(z) -> (z in X)))) -> (X = V)))`
- **Constructive Proof Term:** `(λ(X:Class). ⟨(λ(hEq:(X = V)). (λ(z:Class). ⟨(λ(hzX:(z ∈ X)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), X) V) hEq) hzX)), (λ(hzSet:set(z)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), V) X) (ax_eq_sym(X, V) hEq)) hzSet))⟩)), (λ(hChar:Π(z:Class), (((z ∈ X) → set(z)) × (set(z) → (z ∈ X)))). (ax_extensionality(X, V) hChar))⟩)`

### NBG-025 `def_subclass` (Definitional)

- **Identifier:** `def_subclass` (`NBG-025`, kind: `Definitional`)
- **Statement (Unicode):** `Π(X:Class), Π(Y:Class), (((X ⊆ Y) → Π(z:Class), ((z ∈ X) → (z ∈ Y))) × ((Π(z:Class), ((z ∈ X) → (z ∈ Y))) → (X ⊆ Y)))`
- **Statement (ANSII):** `Pi(X:Class), Pi(Y:Class), (((X c= Y) -> Pi(z:Class), ((z in X) -> (z in Y))) * ((Pi(z:Class), ((z in X) -> (z in Y))) -> (X c= Y)))`
- **Constructive Proof Term:** `(λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩))`

### NBG-026 `thm_emptyset_is_subclass` (Derived)

- **Identifier:** `thm_emptyset_is_subclass` (`NBG-026`, kind: `Derived`)
- **Statement (Unicode):** `Π(X:Class), Π(z:Class), ((z ∈ ∅) → (z ∈ X))`
- **Statement (ANSII):** `Pi(X:Class), Pi(z:Class), ((z in EmptySet) -> (z in X))`
- **Constructive Proof Term:** `(λ(X:Class). (λ(z:Class). (λ(h:(z ∈ ∅)). ax_false_elim((z ∈ X), ax_empty_no_elements(z, h)))))`

### NBG-027 `ax_extensionality` (Axiomatic)

- **Identifier:** `ax_extensionality` (`NBG-027`, kind: `Axiomatic`)
- **Statement (Unicode):** `Π(X:Class), Π(Y:Class), ((Π(z:Class), (((z ∈ X) → (z ∈ Y)) × ((z ∈ Y) → (z ∈ X)))) → (X = Y))`
- **Statement (ANSII):** `Pi(X:Class), Pi(Y:Class), ((Pi(z:Class), (((z in X) -> (z in Y)) * ((z in Y) -> (z in X)))) -> (X = Y))`
- **Constructive Proof Term:** `plan_extensionality`

### NBG-028 `ax_heredity` (Axiomatic)

- **Identifier:** `ax_heredity` (`NBG-028`, kind: `Axiomatic`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), (((A ⊆ B) × set(B)) → set(A))`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), (((A c= B) * set(B)) -> set(A))`
- **Constructive Proof Term:** `plan_heredity`

### NBG-029 `ax_exponent` (Axiomatic)

- **Identifier:** `ax_exponent` (`NBG-029`, kind: `Axiomatic`)
- **Statement (Unicode):** `Π(x:Class), (set(x) → set(𝒫(x)))`
- **Statement (ANSII):** `Pi(x:Class), (set(x) -> set(Power(x)))`
- **Constructive Proof Term:** `plan_exponent`

### NBG-030 `ax_regularity` (Axiomatic)

- **Identifier:** `ax_regularity` (`NBG-030`, kind: `Axiomatic`)
- **Statement (Unicode):** `Π(X:Class), ((𝒫(X) ⊆ X) → (V ⊆ X))`
- **Statement (ANSII):** `Pi(X:Class), ((Power(X) c= X) -> (V c= X))`
- **Constructive Proof Term:** `plan_regularity`

### NBG-031 `def_ord` (Definitional)

- **Identifier:** `def_ord` (`NBG-031`, kind: `Definitional`)
- **Statement (Unicode):** `Π(A:Class), ((Ord(A) → (Tr(A) × (Π(B:Class), ((B ∈ A) → Tr(B))))) × ((Tr(A) × (Π(B:Class), ((B ∈ A) → Tr(B)))) → Ord(A)))`
- **Statement (ANSII):** `Pi(A:Class), ((Ord(A) -> (Tr(A) * (Pi(B:Class), ((B in A) -> Tr(B))))) * ((Tr(A) * (Pi(B:Class), ((B in A) -> Tr(B)))) -> Ord(A)))`
- **Constructive Proof Term:** `(λ(A:Class). ⟨(λ(h:Ord(A)). let res:(Tr(A) × (Π(B:Class), ((B ∈ A) → Tr(B)))) = h in res), (λ(h:(Tr(A) × (Π(B:Class), ((B ∈ A) → Tr(B))))). let res:Ord(A) = h in res)⟩)`

### NBG-032 `ax_global_choice` (Axiomatic)

- **Identifier:** `ax_global_choice` (`NBG-032`, kind: `Axiomatic`)
- **Statement (Unicode):** `Π(A:Class), ((Σ(x:Class), (x ∈ A)) → (choice(A) ∈ A))`
- **Statement (ANSII):** `Pi(A:Class), ((Sigma(x:Class), (x in A)) -> (choice(A) in A))`
- **Constructive Proof Term:** `plan_global_choice`

### NBG-033 `thm_subset_refl` (Derived)

- **Identifier:** `thm_subset_refl` (`NBG-033`, kind: `Derived`)
- **Statement (Unicode):** `Π(X:Class), Π(z:Class), ((z ∈ X) → (z ∈ X))`
- **Statement (ANSII):** `Pi(X:Class), Pi(z:Class), ((z in X) -> (z in X))`
- **Constructive Proof Term:** `(λ(X:Class). (λ(z:Class). (λ(hz:(z ∈ X)). hz)))`

### NBG-034 `thm_subset_trans` (Derived)

- **Identifier:** `thm_subset_trans` (`NBG-034`, kind: `Derived`)
- **Statement (Unicode):** `Π(X:Class), Π(Y:Class), Π(Z:Class), ((Π(z:Class), ((z ∈ X) → (z ∈ Y))) → ((Π(z:Class), ((z ∈ Y) → (z ∈ Z))) → Π(z:Class), ((z ∈ X) → (z ∈ Z))))`
- **Statement (ANSII):** `Pi(X:Class), Pi(Y:Class), Pi(Z:Class), ((Pi(z:Class), ((z in X) -> (z in Y))) -> ((Pi(z:Class), ((z in Y) -> (z in Z))) -> Pi(z:Class), ((z in X) -> (z in Z))))`
- **Constructive Proof Term:** `(λ(X:Class). (λ(Y:Class). (λ(Z:Class). (λ(h1:Π(z:Class), ((z ∈ X) → (z ∈ Y))). (λ(h2:Π(z:Class), ((z ∈ Y) → (z ∈ Z))). (λ(z:Class). (λ(hz:(z ∈ X)). ((h2 z) ((h1 z) hz)))))))))`

### NBG-035 `def_dunaev_opair` (Definitional)

- **Identifier:** `def_dunaev_opair` (`NBG-035`, kind: `Definitional`)
- **Statement (Unicode):** `Π(a:Class), Π(b:Class), ((a, b) = (a, b))`
- **Statement (ANSII):** `Pi(a:Class), Pi(b:Class), ((a, b) = (a, b))`
- **Constructive Proof Term:** `(λ(a:Class). (λ(b:Class). refl((a, b))))`

### NBG-036 `def_relational_func` (Definitional)

- **Identifier:** `def_relational_func` (`NBG-036`, kind: `Definitional`)
- **Statement (Unicode):** `Π(F:Class), ((function(F) → Π(x:Class), Π(y:Class), Π(z:Class), ((((x, y) ∈ F) × ((x, z) ∈ F)) → (y = z))) × ((Π(x:Class), Π(y:Class), Π(z:Class), ((((x, y) ∈ F) × ((x, z) ∈ F)) → (y = z))) → function(F)))`
- **Statement (ANSII):** `Pi(F:Class), ((function(F) -> Pi(x:Class), Pi(y:Class), Pi(z:Class), ((((x, y) in F) * ((x, z) in F)) -> (y = z))) * ((Pi(x:Class), Pi(y:Class), Pi(z:Class), ((((x, y) in F) * ((x, z) in F)) -> (y = z))) -> function(F)))`
- **Constructive Proof Term:** `(λ(F:Class). ⟨(λ(h:function(F)). let res:Π(x:Class), Π(y:Class), Π(z:Class), ((((x, y) ∈ F) × ((x, z) ∈ F)) → (y = z)) = h in res), (λ(h:Π(x:Class), Π(y:Class), Π(z:Class), ((((x, y) ∈ F) × ((x, z) ∈ F)) → (y = z))). let res:function(F) = h in res)⟩)`

### NBG-037 `thm_zero_is_nat` (Derived)

- **Identifier:** `thm_zero_is_nat` (`NBG-037`, kind: `Derived`)
- **Statement (Unicode):** `(0 = 0)`
- **Statement (ANSII):** `(0 = 0)`
- **Constructive Proof Term:** `refl(0)`

### NBG-038 `thm_succ_preserves_nat` (Derived)

- **Identifier:** `thm_succ_preserves_nat` (`NBG-038`, kind: `Derived`)
- **Statement (Unicode):** `Π(n:Nat), (succ(n) = succ(n))`
- **Statement (ANSII):** `Pi(n:Nat), (succ(n) = succ(n))`
- **Constructive Proof Term:** `(λ(n:Nat). refl(succ(n)))`

### NBG-039 `thm_zero_not_succ` (Derived)

- **Identifier:** `thm_zero_not_succ` (`NBG-039`, kind: `Derived`)
- **Statement (Unicode):** `Π(n:Nat), Π(h:(succ(n) = 0)), 𝟘`
- **Statement (ANSII):** `Pi(n:Nat), Pi(h:(succ(n) = 0)), Void`
- **Constructive Proof Term:** `(λ(n:Nat). (λ(h:(succ(n) = 0)). ax_peano_zero_not_succ(n, h)))`

### NBG-040 `thm_succ_injective` (Derived)

- **Identifier:** `thm_succ_injective` (`NBG-040`, kind: `Derived`)
- **Statement (Unicode):** `Π(n:Nat), Π(m:Nat), Π(h:(succ(n) = succ(m))), (n = m)`
- **Statement (ANSII):** `Pi(n:Nat), Pi(m:Nat), Pi(h:(succ(n) = succ(m))), (n = m)`
- **Constructive Proof Term:** `(λ(n:Nat). (λ(m:Nat). (λ(h:(succ(n) = succ(m))). (ax_peano_succ_inj(n, m) h))))`

### NBG-041 `thm_add_zero_left` (Derived)

- **Identifier:** `thm_add_zero_left` (`NBG-041`, kind: `Derived`)
- **Statement (Unicode):** `Π(n:Nat), (nat_rec((λ(_:Nat). Nat), n, (λ(_:Nat). (λ(ih:Nat). succ(ih))), 0) = n)`
- **Statement (ANSII):** `Pi(n:Nat), (nat_rec((fun (_:Nat). Nat), n, (fun (_:Nat). (fun (ih:Nat). succ(ih))), 0) = n)`
- **Constructive Proof Term:** `(λ(n:Nat). refl(n))`

### NBG-042 `thm_mathematical_induction` (Derived)

- **Identifier:** `thm_mathematical_induction` (`NBG-042`, kind: `Derived`)
- **Statement (Unicode):** `Π(P:(Nat → Prop)), Π(base:(P 0)), Π(step:Π(n:Nat), Π(ih:(P n)), (P succ(n))), Π(n:Nat), (P n)`
- **Statement (ANSII):** `Pi(P:(Nat -> Prop)), Pi(base:(P 0)), Pi(step:Pi(n:Nat), Pi(ih:(P n)), (P succ(n))), Pi(n:Nat), (P n)`
- **Constructive Proof Term:** `(λ(P:(Nat → Prop)). (λ(base:(P 0)). (λ(step:Π(n:Nat), Π(ih:(P n)), (P succ(n))). (λ(n:Nat). nat_rec(P, base, step, n)))))`

### NBG-043 `thm_v_ind` (Derived)

- **Identifier:** `thm_v_ind` (`NBG-043`, kind: `Derived`)
- **Statement (Unicode):** `Ind(V)`
- **Statement (ANSII):** `Ind(V)`
- **Constructive Proof Term:** `ax_ind_intro(V, ⟨(snd(((fst(((λ(X:Class). ⟨(λ(hEq:(X = V)). (λ(z:Class). ⟨(λ(hzX:(z ∈ X)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), X) V) hEq) hzX)), (λ(hzSet:set(z)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), V) X) (ax_eq_sym(X, V) hEq)) hzSet))⟩)), (λ(hChar:Π(z:Class), (((z ∈ X) → set(z)) × (set(z) → (z ∈ X)))). (ax_extensionality(X, V) hChar))⟩) V)) refl(V)) ∅)) ax_empty_set), (λ(y:Class). (λ(hyInV:(y ∈ V)). (snd(((fst(((λ(X:Class). ⟨(λ(hEq:(X = V)). (λ(z:Class). ⟨(λ(hzX:(z ∈ X)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), X) V) hEq) hzX)), (λ(hzSet:set(z)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), V) X) (ax_eq_sym(X, V) hEq)) hzSet))⟩)), (λ(hChar:Π(z:Class), (((z ∈ X) → set(z)) × (set(z) → (z ∈ X)))). (ax_extensionality(X, V) hChar))⟩) V)) refl(V)) SuccOrd(y))) ax_ord_succ_set(y, (fst(((fst(((λ(X:Class). ⟨(λ(hEq:(X = V)). (λ(z:Class). ⟨(λ(hzX:(z ∈ X)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), X) V) hEq) hzX)), (λ(hzSet:set(z)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), V) X) (ax_eq_sym(X, V) hEq)) hzSet))⟩)), (λ(hChar:Π(z:Class), (((z ∈ X) → set(z)) × (set(z) → (z ∈ X)))). (ax_extensionality(X, V) hChar))⟩) V)) refl(V)) y)) hyInV)))))⟩)`

### NBG-044 `thm_omega_def` (Definitional)

- **Identifier:** `thm_omega_def` (`NBG-044`, kind: `Definitional`)
- **Statement (Unicode):** `Π(x:Class), (((x ∈ ω) → Π(Q:Class), (Ind(Q) → (x ∈ Q))) × ((Π(Q:Class), (Ind(Q) → (x ∈ Q))) → (x ∈ ω)))`
- **Statement (ANSII):** `Pi(x:Class), (((x in omega) -> Pi(Q:Class), (Ind(Q) -> (x in Q))) * ((Pi(Q:Class), (Ind(Q) -> (x in Q))) -> (x in omega)))`
- **Constructive Proof Term:** `(λ(x:Class). ⟨(λ(h:(x ∈ ω)). let res:Π(Q:Class), (Ind(Q) → (x ∈ Q)) = h in res), (λ(h:Π(Q:Class), (Ind(Q) → (x ∈ Q))). let res:(x ∈ ω) = h in res)⟩)`

### NBG-045 `thm_omega_set` (Axiomatic)

- **Identifier:** `thm_omega_set` (`NBG-045`, kind: `Axiomatic`)
- **Statement (Unicode):** `set(ω)`
- **Statement (ANSII):** `set(omega)`
- **Constructive Proof Term:** `plan_omega_set`

### NBG-046 `thm_omega_ind` (Derived)

- **Identifier:** `thm_omega_ind` (`NBG-046`, kind: `Derived`)
- **Statement (Unicode):** `Ind(ω)`
- **Statement (ANSII):** `Ind(omega)`
- **Constructive Proof Term:** `ax_ind_intro(ω, ⟨(snd(((λ(x:Class). ⟨(λ(h:(x ∈ ω)). let res:Π(Q:Class), (Ind(Q) → (x ∈ Q)) = h in res), (λ(h:Π(Q:Class), (Ind(Q) → (x ∈ Q))). let res:(x ∈ ω) = h in res)⟩) ∅)) (λ(Q:Class). (λ(hIndQ:Ind(Q)). fst(ax_ind_elim(Q, hIndQ))))), (λ(y:Class). (λ(hyInOmega:(y ∈ ω)). (snd(((λ(x:Class). ⟨(λ(h:(x ∈ ω)). let res:Π(Q:Class), (Ind(Q) → (x ∈ Q)) = h in res), (λ(h:Π(Q:Class), (Ind(Q) → (x ∈ Q))). let res:(x ∈ ω) = h in res)⟩) SuccOrd(y))) (λ(Q:Class). (λ(hIndQ:Ind(Q)). ((snd(ax_ind_elim(Q, hIndQ)) y) (((fst(((λ(x:Class). ⟨(λ(h:(x ∈ ω)). let res:Π(Q:Class), (Ind(Q) → (x ∈ Q)) = h in res), (λ(h:Π(Q:Class), (Ind(Q) → (x ∈ Q))). let res:(x ∈ ω) = h in res)⟩) y)) hyInOmega) Q) hIndQ)))))))⟩)`

### NBG-047 `thm_tr_omega` (Derived)

- **Identifier:** `thm_tr_omega` (`NBG-047`, kind: `Derived`)
- **Statement (Unicode):** `Tr(ω)`
- **Statement (ANSII):** `Tr(omega)`
- **Constructive Proof Term:** `ax_omega_trans_from_ind(ax_ind_intro(ω, ⟨(snd(((λ(x:Class). ⟨(λ(h:(x ∈ ω)). let res:Π(Q:Class), (Ind(Q) → (x ∈ Q)) = h in res), (λ(h:Π(Q:Class), (Ind(Q) → (x ∈ Q))). let res:(x ∈ ω) = h in res)⟩) ∅)) (λ(Q:Class). (λ(hIndQ:Ind(Q)). fst(ax_ind_elim(Q, hIndQ))))), (λ(y:Class). (λ(hyInOmega:(y ∈ ω)). (snd(((λ(x:Class). ⟨(λ(h:(x ∈ ω)). let res:Π(Q:Class), (Ind(Q) → (x ∈ Q)) = h in res), (λ(h:Π(Q:Class), (Ind(Q) → (x ∈ Q))). let res:(x ∈ ω) = h in res)⟩) SuccOrd(y))) (λ(Q:Class). (λ(hIndQ:Ind(Q)). ((snd(ax_ind_elim(Q, hIndQ)) y) (((fst(((λ(x:Class). ⟨(λ(h:(x ∈ ω)). let res:Π(Q:Class), (Ind(Q) → (x ∈ Q)) = h in res), (λ(h:Π(Q:Class), (Ind(Q) → (x ∈ Q))). let res:(x ∈ ω) = h in res)⟩) y)) hyInOmega) Q) hIndQ)))))))⟩), ax_omega_elements_trans)`

### NBG-048 `thm_ord_omega` (Derived)

- **Identifier:** `thm_ord_omega` (`NBG-048`, kind: `Derived`)
- **Statement (Unicode):** `Ord(ω)`
- **Statement (ANSII):** `Ord(omega)`
- **Constructive Proof Term:** `(snd(((λ(A:Class). ⟨(λ(h:Ord(A)). let res:(Tr(A) × (Π(B:Class), ((B ∈ A) → Tr(B)))) = h in res), (λ(h:(Tr(A) × (Π(B:Class), ((B ∈ A) → Tr(B))))). let res:Ord(A) = h in res)⟩) ω)) ⟨ax_omega_trans_from_ind(ax_ind_intro(ω, ⟨(snd(((λ(x:Class). ⟨(λ(h:(x ∈ ω)). let res:Π(Q:Class), (Ind(Q) → (x ∈ Q)) = h in res), (λ(h:Π(Q:Class), (Ind(Q) → (x ∈ Q))). let res:(x ∈ ω) = h in res)⟩) ∅)) (λ(Q:Class). (λ(hIndQ:Ind(Q)). fst(ax_ind_elim(Q, hIndQ))))), (λ(y:Class). (λ(hyInOmega:(y ∈ ω)). (snd(((λ(x:Class). ⟨(λ(h:(x ∈ ω)). let res:Π(Q:Class), (Ind(Q) → (x ∈ Q)) = h in res), (λ(h:Π(Q:Class), (Ind(Q) → (x ∈ Q))). let res:(x ∈ ω) = h in res)⟩) SuccOrd(y))) (λ(Q:Class). (λ(hIndQ:Ind(Q)). ((snd(ax_ind_elim(Q, hIndQ)) y) (((fst(((λ(x:Class). ⟨(λ(h:(x ∈ ω)). let res:Π(Q:Class), (Ind(Q) → (x ∈ Q)) = h in res), (λ(h:Π(Q:Class), (Ind(Q) → (x ∈ Q))). let res:(x ∈ ω) = h in res)⟩) y)) hyInOmega) Q) hIndQ)))))))⟩), ax_omega_elements_trans), ax_omega_elements_trans⟩)`

### NBG-049 `thm_omega_in_on` (Derived)

- **Identifier:** `thm_omega_in_on` (`NBG-049`, kind: `Derived`)
- **Statement (Unicode):** `(ω ∈ On)`
- **Statement (ANSII):** `(omega in On)`
- **Constructive Proof Term:** `ax_on_intro(ω, ⟨plan_omega_set, (snd(((λ(A:Class). ⟨(λ(h:Ord(A)). let res:(Tr(A) × (Π(B:Class), ((B ∈ A) → Tr(B)))) = h in res), (λ(h:(Tr(A) × (Π(B:Class), ((B ∈ A) → Tr(B))))). let res:Ord(A) = h in res)⟩) ω)) ⟨ax_omega_trans_from_ind(ax_ind_intro(ω, ⟨(snd(((λ(x:Class). ⟨(λ(h:(x ∈ ω)). let res:Π(Q:Class), (Ind(Q) → (x ∈ Q)) = h in res), (λ(h:Π(Q:Class), (Ind(Q) → (x ∈ Q))). let res:(x ∈ ω) = h in res)⟩) ∅)) (λ(Q:Class). (λ(hIndQ:Ind(Q)). fst(ax_ind_elim(Q, hIndQ))))), (λ(y:Class). (λ(hyInOmega:(y ∈ ω)). (snd(((λ(x:Class). ⟨(λ(h:(x ∈ ω)). let res:Π(Q:Class), (Ind(Q) → (x ∈ Q)) = h in res), (λ(h:Π(Q:Class), (Ind(Q) → (x ∈ Q))). let res:(x ∈ ω) = h in res)⟩) SuccOrd(y))) (λ(Q:Class). (λ(hIndQ:Ind(Q)). ((snd(ax_ind_elim(Q, hIndQ)) y) (((fst(((λ(x:Class). ⟨(λ(h:(x ∈ ω)). let res:Π(Q:Class), (Ind(Q) → (x ∈ Q)) = h in res), (λ(h:Π(Q:Class), (Ind(Q) → (x ∈ Q))). let res:(x ∈ ω) = h in res)⟩) y)) hyInOmega) Q) hIndQ)))))))⟩), ax_omega_elements_trans), ax_omega_elements_trans⟩)⟩)`

### NBG-050 `thm_on_ind` (Derived)

- **Identifier:** `thm_on_ind` (`NBG-050`, kind: `Derived`)
- **Statement (Unicode):** `((∅ ∈ On) × (Π(a:Class), ((a ∈ On) → (SuccOrd(a) ∈ On))))`
- **Statement (ANSII):** `((EmptySet in On) * (Pi(a:Class), ((a in On) -> (SuccOrd(a) in On))))`
- **Constructive Proof Term:** `⟨ax_on_intro(∅, ⟨ax_empty_set, ax_empty_ord⟩), (λ(a:Class). (λ(hIn:(a ∈ On)). ax_on_intro(SuccOrd(a), ⟨ax_ord_succ_set(a, fst(ax_on_elim(a, hIn))), ax_ord_succ_ord(a, ax_on_elim(a, hIn))⟩)))⟩`

### NBG-051 `def_isCard` (Definitional)

- **Identifier:** `def_isCard` (`NBG-051`, kind: `Definitional`)
- **Statement (Unicode):** `Π(C:Class), ((Card(C) → Σ(K:Class), (CardOf(K) = C)) × ((Σ(K:Class), (CardOf(K) = C)) → Card(C)))`
- **Statement (ANSII):** `Pi(C:Class), ((Card(C) -> Sigma(K:Class), (CardOf(K) = C)) * ((Sigma(K:Class), (CardOf(K) = C)) -> Card(C)))`
- **Constructive Proof Term:** `(λ(C:Class). ⟨(λ(h:Card(C)). let res:Σ(K:Class), (CardOf(K) = C) = h in res), (λ(h:Σ(K:Class), (CardOf(K) = C)). let res:Card(C) = h in res)⟩)`

### NBG-052 `thm_omega_card` (Derived)

- **Identifier:** `thm_omega_card` (`NBG-052`, kind: `Derived`)
- **Statement (Unicode):** `Card(ω)`
- **Statement (ANSII):** `Card(omega)`
- **Constructive Proof Term:** `(snd(((λ(C:Class). ⟨(λ(h:Card(C)). let res:Σ(K:Class), (CardOf(K) = C) = h in res), (λ(h:Σ(K:Class), (CardOf(K) = C)). let res:Card(C) = h in res)⟩) ω)) ⟨ω, ax_cardof_omega⟩)`

### NBG-053 `thm_on_card` (Derived)

- **Identifier:** `thm_on_card` (`NBG-053`, kind: `Derived`)
- **Statement (Unicode):** `Card(On)`
- **Statement (ANSII):** `Card(On)`
- **Constructive Proof Term:** `(snd(((λ(C:Class). ⟨(λ(h:Card(C)). let res:Σ(K:Class), (CardOf(K) = C) = h in res), (λ(h:Σ(K:Class), (CardOf(K) = C)). let res:Card(C) = h in res)⟩) On)) ⟨On, ax_cardof_on⟩)`

### NBG-054 `thm_v_not_card` (Derived)

- **Identifier:** `thm_v_not_card` (`NBG-054`, kind: `Derived`)
- **Statement (Unicode):** `(Card(V) → 𝟘)`
- **Statement (ANSII):** `(Card(V) -> Void)`
- **Constructive Proof Term:** `(λ(hCardV:Card(V)). ax_cardof_never_v(fst((fst(((λ(C:Class). ⟨(λ(h:Card(C)). let res:Σ(K:Class), (CardOf(K) = C) = h in res), (λ(h:Σ(K:Class), (CardOf(K) = C)). let res:Card(C) = h in res)⟩) V)) hCardV)), snd((fst(((λ(C:Class). ⟨(λ(h:Card(C)). let res:Σ(K:Class), (CardOf(K) = C) = h in res), (λ(h:Σ(K:Class), (CardOf(K) = C)). let res:Card(C) = h in res)⟩) V)) hCardV))))`

### NBG-055 `ax_tarski_universes` (Axiomatic)

- **Identifier:** `ax_tarski_universes` (`NBG-055`, kind: `Axiomatic`)
- **Statement (Unicode):** `Π(X:Class), (set(X) → Σ(U:Class), (universe(U) × ((X ∈ U) × set(U))))`
- **Statement (ANSII):** `Pi(X:Class), (set(X) -> Sigma(U:Class), (universe(U) * ((X in U) * set(U))))`
- **Constructive Proof Term:** `plan_tarski_axm`

### NBG-056 `def_binary_union` (Definitional)

- **Identifier:** `def_binary_union` (`NBG-056`, kind: `Definitional`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), Π(z:Class), (((z ∈ (A ∪ B)) → Π(C:Prop), (((z ∈ A) → C) → (((z ∈ B) → C) → C))) × ((Π(C:Prop), (((z ∈ A) → C) → (((z ∈ B) → C) → C))) → (z ∈ (A ∪ B))))`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), Pi(z:Class), (((z in (A u+ B)) -> Pi(C:Prop), (((z in A) -> C) -> (((z in B) -> C) -> C))) * ((Pi(C:Prop), (((z in A) -> C) -> (((z in B) -> C) -> C))) -> (z in (A u+ B))))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∪ B))). let res:Π(C:Prop), (((z ∈ A) → C) → (((z ∈ B) → C) → C)) = h in res), (λ(h:Π(C:Prop), (((z ∈ A) → C) → (((z ∈ B) → C) → C))). let res:(z ∈ (A ∪ B)) = h in res)⟩)))`

### NBG-057 `def_binary_inter` (Definitional)

- **Identifier:** `def_binary_inter` (`NBG-057`, kind: `Definitional`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), Π(z:Class), (((z ∈ (A ∩ B)) → ((z ∈ A) × (z ∈ B))) × (((z ∈ A) × (z ∈ B)) → (z ∈ (A ∩ B))))`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), Pi(z:Class), (((z in (A n* B)) -> ((z in A) * (z in B))) * (((z in A) * (z in B)) -> (z in (A n* B))))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∩ B))). let res:((z ∈ A) × (z ∈ B)) = h in res), (λ(h:((z ∈ A) × (z ∈ B))). let res:(z ∈ (A ∩ B)) = h in res)⟩)))`

### NBG-058 `def_unary_union` (Definitional)

- **Identifier:** `def_unary_union` (`NBG-058`, kind: `Definitional`)
- **Statement (Unicode):** `Π(A:Class), Π(z:Class), (((z ∈ ⋃(A)) → Σ(y:Class), ((y ∈ A) × (z ∈ y))) × ((Σ(y:Class), ((y ∈ A) × (z ∈ y))) → (z ∈ ⋃(A))))`
- **Statement (ANSII):** `Pi(A:Class), Pi(z:Class), (((z in Union(A)) -> Sigma(y:Class), ((y in A) * (z in y))) * ((Sigma(y:Class), ((y in A) * (z in y))) -> (z in Union(A))))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(z:Class). ⟨(λ(h:(z ∈ ⋃(A))). let res:Σ(y:Class), ((y ∈ A) × (z ∈ y)) = h in res), (λ(h:Σ(y:Class), ((y ∈ A) × (z ∈ y))). let res:(z ∈ ⋃(A)) = h in res)⟩))`

### NBG-059 `def_unary_inter` (Definitional)

- **Identifier:** `def_unary_inter` (`NBG-059`, kind: `Definitional`)
- **Statement (Unicode):** `Π(A:Class), Π(z:Class), (((z ∈ ⋂(A)) → Π(y:Class), ((y ∈ A) → (z ∈ y))) × ((Π(y:Class), ((y ∈ A) → (z ∈ y))) → (z ∈ ⋂(A))))`
- **Statement (ANSII):** `Pi(A:Class), Pi(z:Class), (((z in Inter(A)) -> Pi(y:Class), ((y in A) -> (z in y))) * ((Pi(y:Class), ((y in A) -> (z in y))) -> (z in Inter(A))))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(z:Class). ⟨(λ(h:(z ∈ ⋂(A))). let res:Π(y:Class), ((y ∈ A) → (z ∈ y)) = h in res), (λ(h:Π(y:Class), ((y ∈ A) → (z ∈ y))). let res:(z ∈ ⋂(A)) = h in res)⟩))`

### NBG-060 `def_singleton` (Definitional)

- **Identifier:** `def_singleton` (`NBG-060`, kind: `Definitional`)
- **Statement (Unicode):** `Π(a:Class), Π(z:Class), (((z ∈ {a}) → (set(a) × (z = a))) × ((set(a) × (z = a)) → (z ∈ {a})))`
- **Statement (ANSII):** `Pi(a:Class), Pi(z:Class), (((z in {a}) -> (set(a) * (z = a))) * ((set(a) * (z = a)) -> (z in {a})))`
- **Constructive Proof Term:** `(λ(a:Class). (λ(z:Class). ⟨(λ(h:(z ∈ {a})). let res:(set(a) × (z = a)) = h in res), (λ(h:(set(a) × (z = a))). let res:(z ∈ {a}) = h in res)⟩))`

### NBG-061 `def_upair` (Definitional)

- **Identifier:** `def_upair` (`NBG-061`, kind: `Definitional`)
- **Statement (Unicode):** `Π(a:Class), Π(b:Class), Π(z:Class), (((z ∈ {a, b}) → Π(C:Prop), (((z = a) → C) → (((z = b) → C) → C))) × ((Π(C:Prop), (((z = a) → C) → (((z = b) → C) → C))) → (z ∈ {a, b})))`
- **Statement (ANSII):** `Pi(a:Class), Pi(b:Class), Pi(z:Class), (((z in {a, b}) -> Pi(C:Prop), (((z = a) -> C) -> (((z = b) -> C) -> C))) * ((Pi(C:Prop), (((z = a) -> C) -> (((z = b) -> C) -> C))) -> (z in {a, b})))`
- **Constructive Proof Term:** `(λ(a:Class). (λ(b:Class). (λ(z:Class). ⟨(λ(h:(z ∈ {a, b})). let res:Π(C:Prop), (((z = a) → C) → (((z = b) → C) → C)) = h in res), (λ(h:Π(C:Prop), (((z = a) → C) → (((z = b) → C) → C))). let res:(z ∈ {a, b}) = h in res)⟩)))`

### NBG-062 `thm_russell_class_not_set` (Derived)

- **Identifier:** `thm_russell_class_not_set` (`NBG-062`, kind: `Derived`)
- **Statement (Unicode):** `((Σ(R:Class), (set(R) × (Π(x:Class), (((x ∈ R) → (set(x) × ((x ∈ x) → 𝟘))) × ((set(x) × ((x ∈ x) → 𝟘)) → (x ∈ R)))))) → 𝟘)`
- **Statement (ANSII):** `((Sigma(R:Class), (set(R) * (Pi(x:Class), (((x in R) -> (set(x) * ((x in x) -> Void))) * ((set(x) * ((x in x) -> Void)) -> (x in R)))))) -> Void)`
- **Constructive Proof Term:** `(λ(hExists:Σ(R:Class), (set(R) × (Π(x:Class), (((x ∈ R) → (set(x) × ((x ∈ x) → 𝟘))) × ((set(x) × ((x ∈ x) → 𝟘)) → (x ∈ R)))))). ((λ(hIn:(fst(hExists) ∈ fst(hExists))). (snd((fst((snd(snd(hExists)) fst(hExists))) hIn)) hIn)) (snd((snd(snd(hExists)) fst(hExists))) ⟨fst(snd(hExists)), (λ(hIn:(fst(hExists) ∈ fst(hExists))). (snd((fst((snd(snd(hExists)) fst(hExists))) hIn)) hIn))⟩)))`

### NBG-063 `thm_dunaev_tagged_pair_proj` (Derived)

- **Identifier:** `thm_dunaev_tagged_pair_proj` (`NBG-063`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), ((pr1((A, B)) = A) × (pr2((A, B)) = B))`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), ((pr1((A, B)) = A) * (pr2((A, B)) = B))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(B:Class). ⟨ax_dunaev_pr1(A, B), ax_dunaev_pr2(A, B)⟩))`

### NBG-064 `thm_dunaev_pair_injectivity` (Derived)

- **Identifier:** `thm_dunaev_pair_injectivity` (`NBG-064`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), Π(C:Class), Π(D:Class), (((A, B) = (C, D)) → ((A = C) × (B = D)))`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), Pi(C:Class), Pi(D:Class), (((A, B) = (C, D)) -> ((A = C) * (B = D)))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(B:Class). (λ(C:Class). (λ(D:Class). (λ(hEq:((A, B) = (C, D))). ⟨(((ax_eq_trans(A, pr1((C, D))) C) (((ax_eq_trans(A, pr1((A, B))) pr1((C, D))) (ax_eq_sym(pr1((A, B)), A) fst((((λ(A:Class). (λ(B:Class). ⟨ax_dunaev_pr1(A, B), ax_dunaev_pr2(A, B)⟩)) A) B)))) (ax_eq_cong_pr1((A, B), (C, D)) hEq))) fst((((λ(A:Class). (λ(B:Class). ⟨ax_dunaev_pr1(A, B), ax_dunaev_pr2(A, B)⟩)) C) D))), (((ax_eq_trans(B, pr2((C, D))) D) (((ax_eq_trans(B, pr2((A, B))) pr2((C, D))) (ax_eq_sym(pr2((A, B)), B) snd((((λ(A:Class). (λ(B:Class). ⟨ax_dunaev_pr1(A, B), ax_dunaev_pr2(A, B)⟩)) A) B)))) (ax_eq_cong_pr2((A, B), (C, D)) hEq))) snd((((λ(A:Class). (λ(B:Class). ⟨ax_dunaev_pr1(A, B), ax_dunaev_pr2(A, B)⟩)) C) D)))⟩)))))`

### NBG-065 `thm_empty_set_elim` (Derived)

- **Identifier:** `thm_empty_set_elim` (`NBG-065`, kind: `Derived`)
- **Statement (Unicode):** `Π(X:Class), ((Π(z:Class), ((z ∈ X) → 𝟘)) → (X = ∅))`
- **Statement (ANSII):** `Pi(X:Class), ((Pi(z:Class), ((z in X) -> Void)) -> (X = EmptySet))`
- **Constructive Proof Term:** `(λ(X:Class). (λ(h:Π(z:Class), ((z ∈ X) → 𝟘)). (plan_extensionality(X, ∅) (λ(z:Class). ⟨(λ(hz:(z ∈ X)). ax_false_elim((z ∈ ∅), ((h z) hz))), (λ(hz:(z ∈ ∅)). ax_false_elim((z ∈ X), ax_empty_no_elements(z, hz)))⟩))))`

### NBG-066 `thm_every_set_in_v` (Derived)

- **Identifier:** `thm_every_set_in_v` (`NBG-066`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), (set(x) → (x ∈ V))`
- **Statement (ANSII):** `Pi(x:Class), (set(x) -> (x in V))`
- **Constructive Proof Term:** `(λ(x:Class). snd(((fst(((λ(X:Class). ⟨(λ(hEq:(X = V)). (λ(z:Class). ⟨(λ(hzX:(z ∈ X)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), X) V) hEq) hzX)), (λ(hzSet:set(z)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), V) X) (ax_eq_sym(X, V) hEq)) hzSet))⟩)), (λ(hChar:Π(z:Class), (((z ∈ X) → set(z)) × (set(z) → (z ∈ X)))). (ax_extensionality(X, V) hChar))⟩) V)) refl(V)) x)))`

### NBG-067 `thm_in_v_is_set` (Derived)

- **Identifier:** `thm_in_v_is_set` (`NBG-067`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), ((x ∈ V) → set(x))`
- **Statement (ANSII):** `Pi(x:Class), ((x in V) -> set(x))`
- **Constructive Proof Term:** `(λ(x:Class). fst(((fst(((λ(X:Class). ⟨(λ(hEq:(X = V)). (λ(z:Class). ⟨(λ(hzX:(z ∈ X)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), X) V) hEq) hzX)), (λ(hzSet:set(z)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), V) X) (ax_eq_sym(X, V) hEq)) hzSet))⟩)), (λ(hChar:Π(z:Class), (((z ∈ X) → set(z)) × (set(z) → (z ∈ X)))). (ax_extensionality(X, V) hChar))⟩) V)) refl(V)) x)))`

### NBG-068 `thm_emptyset_in_v` (Derived)

- **Identifier:** `thm_emptyset_in_v` (`NBG-068`, kind: `Derived`)
- **Statement (Unicode):** `(∅ ∈ V)`
- **Statement (ANSII):** `(EmptySet in V)`
- **Constructive Proof Term:** `(((λ(x:Class). snd(((fst(((λ(X:Class). ⟨(λ(hEq:(X = V)). (λ(z:Class). ⟨(λ(hzX:(z ∈ X)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), X) V) hEq) hzX)), (λ(hzSet:set(z)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), V) X) (ax_eq_sym(X, V) hEq)) hzSet))⟩)), (λ(hChar:Π(z:Class), (((z ∈ X) → set(z)) × (set(z) → (z ∈ X)))). (ax_extensionality(X, V) hChar))⟩) V)) refl(V)) x))) ∅) ax_empty_set)`

### NBG-069 `thm_omega_in_v` (Derived)

- **Identifier:** `thm_omega_in_v` (`NBG-069`, kind: `Derived`)
- **Statement (Unicode):** `(ω ∈ V)`
- **Statement (ANSII):** `(omega in V)`
- **Constructive Proof Term:** `(((λ(x:Class). snd(((fst(((λ(X:Class). ⟨(λ(hEq:(X = V)). (λ(z:Class). ⟨(λ(hzX:(z ∈ X)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), X) V) hEq) hzX)), (λ(hzSet:set(z)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), V) X) (ax_eq_sym(X, V) hEq)) hzSet))⟩)), (λ(hChar:Π(z:Class), (((z ∈ X) → set(z)) × (set(z) → (z ∈ X)))). (ax_extensionality(X, V) hChar))⟩) V)) refl(V)) x))) ω) plan_omega_set)`

### NBG-070 `thm_power_omega_is_set` (Derived)

- **Identifier:** `thm_power_omega_is_set` (`NBG-070`, kind: `Derived`)
- **Statement (Unicode):** `set(𝒫(ω))`
- **Statement (ANSII):** `set(Power(omega))`
- **Constructive Proof Term:** `plan_exponent(ω, plan_omega_set)`

### NBG-071 `thm_singleton_self_in` (Derived)

- **Identifier:** `thm_singleton_self_in` (`NBG-071`, kind: `Derived`)
- **Statement (Unicode):** `Π(a:Class), (set(a) → (a ∈ {a}))`
- **Statement (ANSII):** `Pi(a:Class), (set(a) -> (a in {a}))`
- **Constructive Proof Term:** `(λ(a:Class). (λ(hSetA:set(a)). (snd((((λ(a:Class). (λ(z:Class). ⟨(λ(h:(z ∈ {a})). let res:(set(a) × (z = a)) = h in res), (λ(h:(set(a) × (z = a))). let res:(z ∈ {a}) = h in res)⟩)) a) a)) ⟨hSetA, refl(a)⟩)))`

### NBG-072 `thm_upair_left_in` (Derived)

- **Identifier:** `thm_upair_left_in` (`NBG-072`, kind: `Derived`)
- **Statement (Unicode):** `Π(a:Class), Π(b:Class), (a ∈ {a, b})`
- **Statement (ANSII):** `Pi(a:Class), Pi(b:Class), (a in {a, b})`
- **Constructive Proof Term:** `(λ(a:Class). (λ(b:Class). (snd(((((λ(a:Class). (λ(b:Class). (λ(z:Class). ⟨(λ(h:(z ∈ {a, b})). let res:Π(C:Prop), (((z = a) → C) → (((z = b) → C) → C)) = h in res), (λ(h:Π(C:Prop), (((z = a) → C) → (((z = b) → C) → C))). let res:(z ∈ {a, b}) = h in res)⟩))) a) b) a)) (λ(C:Prop). (λ(fa:((a = a) → C)). (λ(fb:((a = b) → C)). (fa refl(a))))))))`

### NBG-073 `thm_upair_right_in` (Derived)

- **Identifier:** `thm_upair_right_in` (`NBG-073`, kind: `Derived`)
- **Statement (Unicode):** `Π(a:Class), Π(b:Class), (b ∈ {a, b})`
- **Statement (ANSII):** `Pi(a:Class), Pi(b:Class), (b in {a, b})`
- **Constructive Proof Term:** `(λ(a:Class). (λ(b:Class). (snd(((((λ(a:Class). (λ(b:Class). (λ(z:Class). ⟨(λ(h:(z ∈ {a, b})). let res:Π(C:Prop), (((z = a) → C) → (((z = b) → C) → C)) = h in res), (λ(h:Π(C:Prop), (((z = a) → C) → (((z = b) → C) → C))). let res:(z ∈ {a, b}) = h in res)⟩))) a) b) b)) (λ(C:Prop). (λ(fa:((b = a) → C)). (λ(fb:((b = b) → C)). (fb refl(b))))))))`

### NBG-074 `thm_inter_subset_left` (Derived)

- **Identifier:** `thm_inter_subset_left` (`NBG-074`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), ((A ∩ B) ⊆ A)`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), ((A n* B) c= A)`
- **Constructive Proof Term:** `(λ(A:Class). (λ(B:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) (A ∩ B)) A)) (λ(z:Class). (λ(hz:(z ∈ (A ∩ B))). fst((fst(((((λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∩ B))). let res:((z ∈ A) × (z ∈ B)) = h in res), (λ(h:((z ∈ A) × (z ∈ B))). let res:(z ∈ (A ∩ B)) = h in res)⟩))) A) B) z)) hz)))))))`

### NBG-075 `thm_inter_subset_right` (Derived)

- **Identifier:** `thm_inter_subset_right` (`NBG-075`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), ((A ∩ B) ⊆ B)`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), ((A n* B) c= B)`
- **Constructive Proof Term:** `(λ(A:Class). (λ(B:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) (A ∩ B)) B)) (λ(z:Class). (λ(hz:(z ∈ (A ∩ B))). snd((fst(((((λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∩ B))). let res:((z ∈ A) × (z ∈ B)) = h in res), (λ(h:((z ∈ A) × (z ∈ B))). let res:(z ∈ (A ∩ B)) = h in res)⟩))) A) B) z)) hz)))))))`

### NBG-076 `thm_union_subset_left` (Derived)

- **Identifier:** `thm_union_subset_left` (`NBG-076`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), (A ⊆ (A ∪ B))`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), (A c= (A u+ B))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(B:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) A) (A ∪ B))) (λ(z:Class). (λ(hz:(z ∈ A)). (snd(((((λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∪ B))). let res:Π(C:Prop), (((z ∈ A) → C) → (((z ∈ B) → C) → C)) = h in res), (λ(h:Π(C:Prop), (((z ∈ A) → C) → (((z ∈ B) → C) → C))). let res:(z ∈ (A ∪ B)) = h in res)⟩))) A) B) z)) (λ(C:Prop). (λ(fa:((z ∈ A) → C)). (λ(fb:((z ∈ B) → C)). (fa hz))))))))))`

### NBG-077 `thm_union_subset_right` (Derived)

- **Identifier:** `thm_union_subset_right` (`NBG-077`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), (B ⊆ (A ∪ B))`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), (B c= (A u+ B))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(B:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) B) (A ∪ B))) (λ(z:Class). (λ(hz:(z ∈ B)). (snd(((((λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∪ B))). let res:Π(C:Prop), (((z ∈ A) → C) → (((z ∈ B) → C) → C)) = h in res), (λ(h:Π(C:Prop), (((z ∈ A) → C) → (((z ∈ B) → C) → C))). let res:(z ∈ (A ∪ B)) = h in res)⟩))) A) B) z)) (λ(C:Prop). (λ(fa:((z ∈ A) → C)). (λ(fb:((z ∈ B) → C)). (fb hz))))))))))`

### NBG-078 `thm_inter_idem_subset` (Derived)

- **Identifier:** `thm_inter_idem_subset` (`NBG-078`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), ((A ∩ A) ⊆ A)`
- **Statement (ANSII):** `Pi(A:Class), ((A n* A) c= A)`
- **Constructive Proof Term:** `(λ(A:Class). (((λ(A:Class). (λ(B:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) (A ∩ B)) A)) (λ(z:Class). (λ(hz:(z ∈ (A ∩ B))). fst((fst(((((λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∩ B))). let res:((z ∈ A) × (z ∈ B)) = h in res), (λ(h:((z ∈ A) × (z ∈ B))). let res:(z ∈ (A ∩ B)) = h in res)⟩))) A) B) z)) hz))))))) A) A))`

### NBG-079 `thm_union_idem_subset` (Derived)

- **Identifier:** `thm_union_idem_subset` (`NBG-079`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), (A ⊆ (A ∪ A))`
- **Statement (ANSII):** `Pi(A:Class), (A c= (A u+ A))`
- **Constructive Proof Term:** `(λ(A:Class). (((λ(A:Class). (λ(B:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) A) (A ∪ B))) (λ(z:Class). (λ(hz:(z ∈ A)). (snd(((((λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∪ B))). let res:Π(C:Prop), (((z ∈ A) → C) → (((z ∈ B) → C) → C)) = h in res), (λ(h:Π(C:Prop), (((z ∈ A) → C) → (((z ∈ B) → C) → C))). let res:(z ∈ (A ∪ B)) = h in res)⟩))) A) B) z)) (λ(C:Prop). (λ(fa:((z ∈ A) → C)). (λ(fb:((z ∈ B) → C)). (fa hz)))))))))) A) A))`

### NBG-080 `thm_inter_set_left` (Derived)

- **Identifier:** `thm_inter_set_left` (`NBG-080`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), (set(A) → set((A ∩ B)))`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), (set(A) -> set((A n* B)))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(B:Class). (λ(hSetA:set(A)). (plan_heredity((A ∩ B), A) ⟨(((λ(A:Class). (λ(B:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) (A ∩ B)) A)) (λ(z:Class). (λ(hz:(z ∈ (A ∩ B))). fst((fst(((((λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∩ B))). let res:((z ∈ A) × (z ∈ B)) = h in res), (λ(h:((z ∈ A) × (z ∈ B))). let res:(z ∈ (A ∩ B)) = h in res)⟩))) A) B) z)) hz))))))) A) B), hSetA⟩))))`

### NBG-081 `thm_semi_singleton_sub_char` (Derived)

- **Identifier:** `thm_semi_singleton_sub_char` (`NBG-081`, kind: `Derived`)
- **Statement (Unicode):** `Π(s:Class), Π(A:Class), Π(x:Class), Π(y:Class), (((s ⊆ A) × (Π(u:Class), Π(v:Class), (((u ∈ s) × (v ∈ s)) → (u = v)))) → (((x ∈ s) × (y ∈ s)) → ((x ∈ A) × (x = y))))`
- **Statement (ANSII):** `Pi(s:Class), Pi(A:Class), Pi(x:Class), Pi(y:Class), (((s c= A) * (Pi(u:Class), Pi(v:Class), (((u in s) * (v in s)) -> (u = v)))) -> (((x in s) * (y in s)) -> ((x in A) * (x = y))))`
- **Constructive Proof Term:** `(λ(s:Class). (λ(A:Class). (λ(x:Class). (λ(y:Class). (λ(hSSS:((s ⊆ A) × (Π(u:Class), Π(v:Class), (((u ∈ s) × (v ∈ s)) → (u = v))))). (λ(hXY:((x ∈ s) × (y ∈ s))). ⟨(((fst((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) s) A)) fst(hSSS)) x) fst(hXY)), (((snd(hSSS) x) y) hXY)⟩))))))`

### NBG-082 `thm_family_value_eval` (Derived)

- **Identifier:** `thm_family_value_eval` (`NBG-082`, kind: `Derived`)
- **Statement (Unicode):** `Π(F:Class), Π(x:Class), Π(z:Class), Π(s:Class), Π(u:Class), (((s ⊆ z) × ((u ∈ ValOf(F, x)) → (u ∈ s))) → ((u ∈ ValOf(F, x)) → (u ∈ z)))`
- **Statement (ANSII):** `Pi(F:Class), Pi(x:Class), Pi(z:Class), Pi(s:Class), Pi(u:Class), (((s c= z) * ((u in ValOf(F, x)) -> (u in s))) -> ((u in ValOf(F, x)) -> (u in z)))`
- **Constructive Proof Term:** `(λ(F:Class). (λ(x:Class). (λ(z:Class). (λ(s:Class). (λ(u:Class). (λ(hFam:((s ⊆ z) × ((u ∈ ValOf(F, x)) → (u ∈ s)))). (λ(hUinVal:(u ∈ ValOf(F, x))). (((fst((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) s) z)) fst(hFam)) u) (snd(hFam) hUinVal)))))))))`

### NBG-083 `thm_sigma_model_proj` (Derived)

- **Identifier:** `thm_sigma_model_proj` (`NBG-083`, kind: `Derived`)
- **Statement (Unicode):** `Π(B:Class), Π(x:Class), Π(y:Class), ((((OPair(x, y) ∈ Sigma(B)) → ((x ∈ Dom(B)) × (y ∈ ValOf(B, x)))) × (OPair(x, y) ∈ Sigma(B))) → ((x ∈ Dom(B)) × (y ∈ ValOf(B, x))))`
- **Statement (ANSII):** `Pi(B:Class), Pi(x:Class), Pi(y:Class), ((((OPair(x, y) in Sigma(B)) -> ((x in Dom(B)) * (y in ValOf(B, x)))) * (OPair(x, y) in Sigma(B))) -> ((x in Dom(B)) * (y in ValOf(B, x))))`
- **Constructive Proof Term:** `(λ(B:Class). (λ(x:Class). (λ(y:Class). (λ(h:(((OPair(x, y) ∈ Sigma(B)) → ((x ∈ Dom(B)) × (y ∈ ValOf(B, x)))) × (OPair(x, y) ∈ Sigma(B)))). (fst(h) snd(h))))))`

### NBG-084 `thm_pi_model_elim` (Derived)

- **Identifier:** `thm_pi_model_elim` (`NBG-084`, kind: `Derived`)
- **Statement (Unicode):** `Π(B:Class), Π(f:Class), Π(x:Class), (((Π(u:Class), ((u ∈ Dom(B)) → (ValOf(f, u) ∈ ValOf(B, u)))) × (x ∈ Dom(B))) → (ValOf(f, x) ∈ ValOf(B, x)))`
- **Statement (ANSII):** `Pi(B:Class), Pi(f:Class), Pi(x:Class), (((Pi(u:Class), ((u in Dom(B)) -> (ValOf(f, u) in ValOf(B, u)))) * (x in Dom(B))) -> (ValOf(f, x) in ValOf(B, x)))`
- **Constructive Proof Term:** `(λ(B:Class). (λ(f:Class). (λ(x:Class). (λ(hPi:((Π(u:Class), ((u ∈ Dom(B)) → (ValOf(f, u) ∈ ValOf(B, u)))) × (x ∈ Dom(B)))). ((fst(hPi) x) snd(hPi))))))`

### NBG-085 `thm_if_dep_true_branch` (Derived)

- **Identifier:** `thm_if_dep_true_branch` (`NBG-085`, kind: `Derived`)
- **Statement (Unicode):** `Π(Phi:Prop), Π(T1:(Phi → Prop)), Π(T2:((Phi → 𝟘) → Prop)), (((Π(h:Phi), (T1 h)) × (Π(nh:(Phi → 𝟘)), (T2 nh))) → Π(h:Phi), (T1 h))`
- **Statement (ANSII):** `Pi(Phi:Prop), Pi(T1:(Phi -> Prop)), Pi(T2:((Phi -> Void) -> Prop)), (((Pi(h:Phi), (T1 h)) * (Pi(nh:(Phi -> Void)), (T2 nh))) -> Pi(h:Phi), (T1 h))`
- **Constructive Proof Term:** `(λ(Phi:Prop). (λ(T1:(Phi → Prop)). (λ(T2:((Phi → 𝟘) → Prop)). (λ(branches:((Π(h:Phi), (T1 h)) × (Π(nh:(Phi → 𝟘)), (T2 nh)))). (λ(h:Phi). (fst(branches) h))))))`

### NBG-086 `thm_if_dep_false_branch` (Derived)

- **Identifier:** `thm_if_dep_false_branch` (`NBG-086`, kind: `Derived`)
- **Statement (Unicode):** `Π(Phi:Prop), Π(T1:(Phi → Prop)), Π(T2:((Phi → 𝟘) → Prop)), (((Π(h:Phi), (T1 h)) × (Π(nh:(Phi → 𝟘)), (T2 nh))) → Π(nh:(Phi → 𝟘)), (T2 nh))`
- **Statement (ANSII):** `Pi(Phi:Prop), Pi(T1:(Phi -> Prop)), Pi(T2:((Phi -> Void) -> Prop)), (((Pi(h:Phi), (T1 h)) * (Pi(nh:(Phi -> Void)), (T2 nh))) -> Pi(nh:(Phi -> Void)), (T2 nh))`
- **Constructive Proof Term:** `(λ(Phi:Prop). (λ(T1:(Phi → Prop)). (λ(T2:((Phi → 𝟘) → Prop)). (λ(branches:((Π(h:Phi), (T1 h)) × (Π(nh:(Phi → 𝟘)), (T2 nh)))). (λ(nh:(Phi → 𝟘)). (snd(branches) nh))))))`

### NBG-087 `thm_model_stratification_trans` (Derived)

- **Identifier:** `thm_model_stratification_trans` (`NBG-087`, kind: `Derived`)
- **Statement (Unicode):** `Π(W:Class), Π(E:Class), Π(T:Class), Π(F:Class), (((mu_A(W) ⊆ mu_A(E)) × ((mu_A(E) ⊆ mu_A(T)) × (mu_A(T) ⊆ mu_A(F)))) → (mu_A(W) ⊆ mu_A(F)))`
- **Statement (ANSII):** `Pi(W:Class), Pi(E:Class), Pi(T:Class), Pi(F:Class), (((mu_A(W) c= mu_A(E)) * ((mu_A(E) c= mu_A(T)) * (mu_A(T) c= mu_A(F)))) -> (mu_A(W) c= mu_A(F)))`
- **Constructive Proof Term:** `(λ(W:Class). (λ(E:Class). (λ(T:Class). (λ(F:Class). (λ(hStrat:((mu_A(W) ⊆ mu_A(E)) × ((mu_A(E) ⊆ mu_A(T)) × (mu_A(T) ⊆ mu_A(F))))). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) mu_A(W)) mu_A(F))) (λ(z:Class). (λ(hz:(z ∈ mu_A(W))). (((fst((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) mu_A(T)) mu_A(F))) snd(snd(hStrat))) z) (((fst((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) mu_A(E)) mu_A(T))) fst(snd(hStrat))) z) (((fst((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) mu_A(W)) mu_A(E))) fst(hStrat)) z) hz)))))))))))`

### NBG-088 `thm_dunaev_pair_fst_beta` (Derived)

- **Identifier:** `thm_dunaev_pair_fst_beta` (`NBG-088`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), Π(y:Class), (pr1((x, y)) = x)`
- **Statement (ANSII):** `Pi(x:Class), Pi(y:Class), (pr1((x, y)) = x)`
- **Constructive Proof Term:** `(λ(x:Class). (λ(y:Class). ax_dunaev_pr1(x, y)))`

### NBG-089 `thm_dunaev_pair_snd_beta` (Derived)

- **Identifier:** `thm_dunaev_pair_snd_beta` (`NBG-089`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), Π(y:Class), (pr2((x, y)) = y)`
- **Statement (ANSII):** `Pi(x:Class), Pi(y:Class), (pr2((x, y)) = y)`
- **Constructive Proof Term:** `(λ(x:Class). (λ(y:Class). ax_dunaev_pr2(x, y)))`

### NBG-090 `thm_singleton_elem_eq` (Derived)

- **Identifier:** `thm_singleton_elem_eq` (`NBG-090`, kind: `Derived`)
- **Statement (Unicode):** `Π(a:Class), Π(z:Class), ((z ∈ {a}) → (z = a))`
- **Statement (ANSII):** `Pi(a:Class), Pi(z:Class), ((z in {a}) -> (z = a))`
- **Constructive Proof Term:** `(λ(a:Class). (λ(z:Class). (λ(hz:(z ∈ {a})). snd((fst((((λ(a:Class). (λ(z:Class). ⟨(λ(h:(z ∈ {a})). let res:(set(a) × (z = a)) = h in res), (λ(h:(set(a) × (z = a))). let res:(z ∈ {a}) = h in res)⟩)) a) z)) hz)))))`

### NBG-091 `thm_singleton_subset_upair_left` (Derived)

- **Identifier:** `thm_singleton_subset_upair_left` (`NBG-091`, kind: `Derived`)
- **Statement (Unicode):** `Π(a:Class), Π(b:Class), ({a} ⊆ {a, b})`
- **Statement (ANSII):** `Pi(a:Class), Pi(b:Class), ({a} c= {a, b})`
- **Constructive Proof Term:** `(λ(a:Class). (λ(b:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) {a}) {a, b})) (λ(z:Class). (λ(hz:(z ∈ {a})). (snd(((((λ(a:Class). (λ(b:Class). (λ(z:Class). ⟨(λ(h:(z ∈ {a, b})). let res:Π(C:Prop), (((z = a) → C) → (((z = b) → C) → C)) = h in res), (λ(h:Π(C:Prop), (((z = a) → C) → (((z = b) → C) → C))). let res:(z ∈ {a, b}) = h in res)⟩))) a) b) z)) (λ(C:Prop). (λ(fa:((z = a) → C)). (λ(fb:((z = b) → C)). (fa ((((λ(a:Class). (λ(z:Class). (λ(hz:(z ∈ {a})). snd((fst((((λ(a:Class). (λ(z:Class). ⟨(λ(h:(z ∈ {a})). let res:(set(a) × (z = a)) = h in res), (λ(h:(set(a) × (z = a))). let res:(z ∈ {a}) = h in res)⟩)) a) z)) hz))))) a) z) hz)))))))))))`

### NBG-092 `thm_singleton_subset_upair_right` (Derived)

- **Identifier:** `thm_singleton_subset_upair_right` (`NBG-092`, kind: `Derived`)
- **Statement (Unicode):** `Π(a:Class), Π(b:Class), ({b} ⊆ {a, b})`
- **Statement (ANSII):** `Pi(a:Class), Pi(b:Class), ({b} c= {a, b})`
- **Constructive Proof Term:** `(λ(a:Class). (λ(b:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) {b}) {a, b})) (λ(z:Class). (λ(hz:(z ∈ {b})). (snd(((((λ(a:Class). (λ(b:Class). (λ(z:Class). ⟨(λ(h:(z ∈ {a, b})). let res:Π(C:Prop), (((z = a) → C) → (((z = b) → C) → C)) = h in res), (λ(h:Π(C:Prop), (((z = a) → C) → (((z = b) → C) → C))). let res:(z ∈ {a, b}) = h in res)⟩))) a) b) z)) (λ(C:Prop). (λ(fa:((z = a) → C)). (λ(fb:((z = b) → C)). (fb ((((λ(a:Class). (λ(z:Class). (λ(hz:(z ∈ {a})). snd((fst((((λ(a:Class). (λ(z:Class). ⟨(λ(h:(z ∈ {a})). let res:(set(a) × (z = a)) = h in res), (λ(h:(set(a) × (z = a))). let res:(z ∈ {a}) = h in res)⟩)) a) z)) hz))))) b) z) hz)))))))))))`

### NBG-093 `thm_inter_subset_union` (Derived)

- **Identifier:** `thm_inter_subset_union` (`NBG-093`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), ((A ∩ B) ⊆ (A ∪ B))`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), ((A n* B) c= (A u+ B))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(B:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) (A ∩ B)) (A ∪ B))) ((((((λ(X:Class). (λ(Y:Class). (λ(Z:Class). (λ(h1:Π(z:Class), ((z ∈ X) → (z ∈ Y))). (λ(h2:Π(z:Class), ((z ∈ Y) → (z ∈ Z))). (λ(z:Class). (λ(hz:(z ∈ X)). ((h2 z) ((h1 z) hz))))))))) (A ∩ B)) A) (A ∪ B)) (fst((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) (A ∩ B)) A)) (((λ(A:Class). (λ(B:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) (A ∩ B)) A)) (λ(z:Class). (λ(hz:(z ∈ (A ∩ B))). fst((fst(((((λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∩ B))). let res:((z ∈ A) × (z ∈ B)) = h in res), (λ(h:((z ∈ A) × (z ∈ B))). let res:(z ∈ (A ∩ B)) = h in res)⟩))) A) B) z)) hz))))))) A) B))) (fst((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) A) (A ∪ B))) (((λ(A:Class). (λ(B:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) A) (A ∪ B))) (λ(z:Class). (λ(hz:(z ∈ A)). (snd(((((λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∪ B))). let res:Π(C:Prop), (((z ∈ A) → C) → (((z ∈ B) → C) → C)) = h in res), (λ(h:Π(C:Prop), (((z ∈ A) → C) → (((z ∈ B) → C) → C))). let res:(z ∈ (A ∪ B)) = h in res)⟩))) A) B) z)) (λ(C:Prop). (λ(fa:((z ∈ A) → C)). (λ(fb:((z ∈ B) → C)). (fa hz)))))))))) A) B))))))`

### NBG-094 `thm_inter_set_right` (Derived)

- **Identifier:** `thm_inter_set_right` (`NBG-094`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), (set(B) → set((A ∩ B)))`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), (set(B) -> set((A n* B)))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(B:Class). (λ(hSetB:set(B)). (plan_heredity((A ∩ B), B) ⟨(((λ(A:Class). (λ(B:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) (A ∩ B)) B)) (λ(z:Class). (λ(hz:(z ∈ (A ∩ B))). snd((fst(((((λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∩ B))). let res:((z ∈ A) × (z ∈ B)) = h in res), (λ(h:((z ∈ A) × (z ∈ B))). let res:(z ∈ (A ∩ B)) = h in res)⟩))) A) B) z)) hz))))))) A) B), hSetB⟩))))`

### NBG-095 `thm_emptyset_subset_all` (Derived)

- **Identifier:** `thm_emptyset_subset_all` (`NBG-095`, kind: `Derived`)
- **Statement (Unicode):** `Π(X:Class), (∅ ⊆ X)`
- **Statement (ANSII):** `Pi(X:Class), (EmptySet c= X)`
- **Constructive Proof Term:** `(λ(X:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) ∅) X)) ((λ(X:Class). (λ(z:Class). (λ(h:(z ∈ ∅)). ax_false_elim((z ∈ X), ax_empty_no_elements(z, h))))) X)))`

### NBG-096 `thm_subset_antisym` (Derived)

- **Identifier:** `thm_subset_antisym` (`NBG-096`, kind: `Derived`)
- **Statement (Unicode):** `Π(X:Class), Π(Y:Class), (((X ⊆ Y) × (Y ⊆ X)) → (X = Y))`
- **Statement (ANSII):** `Pi(X:Class), Pi(Y:Class), (((X c= Y) * (Y c= X)) -> (X = Y))`
- **Constructive Proof Term:** `(λ(X:Class). (λ(Y:Class). (λ(hSubPair:((X ⊆ Y) × (Y ⊆ X))). (plan_extensionality(X, Y) (λ(z:Class). ⟨((fst((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) X) Y)) fst(hSubPair)) z), ((fst((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) Y) X)) snd(hSubPair)) z)⟩)))))`

### NBG-097 `thm_every_set_subset_v` (Derived)

- **Identifier:** `thm_every_set_subset_v` (`NBG-097`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), ((Π(z:Class), ((z ∈ A) → set(z))) → (A ⊆ V))`
- **Statement (ANSII):** `Pi(A:Class), ((Pi(z:Class), ((z in A) -> set(z))) -> (A c= V))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(hElemSet:Π(z:Class), ((z ∈ A) → set(z))). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) A) V)) (λ(z:Class). (λ(hz:(z ∈ A)). (((λ(x:Class). snd(((fst(((λ(X:Class). ⟨(λ(hEq:(X = V)). (λ(z:Class). ⟨(λ(hzX:(z ∈ X)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), X) V) hEq) hzX)), (λ(hzSet:set(z)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), V) X) (ax_eq_sym(X, V) hEq)) hzSet))⟩)), (λ(hChar:Π(z:Class), (((z ∈ X) → set(z)) × (set(z) → (z ∈ X)))). (ax_extensionality(X, V) hChar))⟩) V)) refl(V)) x))) z) ((hElemSet z) hz)))))))`

### NBG-098 `thm_singleton_in_v_if_set` (Derived)

- **Identifier:** `thm_singleton_in_v_if_set` (`NBG-098`, kind: `Derived`)
- **Statement (Unicode):** `Π(a:Class), (set({a}) → ({a} ∈ V))`
- **Statement (ANSII):** `Pi(a:Class), (set({a}) -> ({a} in V))`
- **Constructive Proof Term:** `(λ(a:Class). (λ(hSetSing:set({a})). (((λ(x:Class). snd(((fst(((λ(X:Class). ⟨(λ(hEq:(X = V)). (λ(z:Class). ⟨(λ(hzX:(z ∈ X)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), X) V) hEq) hzX)), (λ(hzSet:set(z)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), V) X) (ax_eq_sym(X, V) hEq)) hzSet))⟩)), (λ(hChar:Π(z:Class), (((z ∈ X) → set(z)) × (set(z) → (z ∈ X)))). (ax_extensionality(X, V) hChar))⟩) V)) refl(V)) x))) {a}) hSetSing)))`

### NBG-099 `thm_power_omega_in_v` (Derived)

- **Identifier:** `thm_power_omega_in_v` (`NBG-099`, kind: `Derived`)
- **Statement (Unicode):** `(𝒫(ω) ∈ V)`
- **Statement (ANSII):** `(Power(omega) in V)`
- **Constructive Proof Term:** `(((λ(x:Class). snd(((fst(((λ(X:Class). ⟨(λ(hEq:(X = V)). (λ(z:Class). ⟨(λ(hzX:(z ∈ X)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), X) V) hEq) hzX)), (λ(hzSet:set(z)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), V) X) (ax_eq_sym(X, V) hEq)) hzSet))⟩)), (λ(hChar:Π(z:Class), (((z ∈ X) → set(z)) × (set(z) → (z ∈ X)))). (ax_extensionality(X, V) hChar))⟩) V)) refl(V)) x))) 𝒫(ω)) plan_exponent(ω, plan_omega_set))`

### NBG-100 `thm_inter_subset_both` (Derived)

- **Identifier:** `thm_inter_subset_both` (`NBG-100`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), (((A ∩ B) ⊆ A) × ((A ∩ B) ⊆ B))`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), (((A n* B) c= A) * ((A n* B) c= B))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(B:Class). ⟨(((λ(A:Class). (λ(B:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) (A ∩ B)) A)) (λ(z:Class). (λ(hz:(z ∈ (A ∩ B))). fst((fst(((((λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∩ B))). let res:((z ∈ A) × (z ∈ B)) = h in res), (λ(h:((z ∈ A) × (z ∈ B))). let res:(z ∈ (A ∩ B)) = h in res)⟩))) A) B) z)) hz))))))) A) B), (((λ(A:Class). (λ(B:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) (A ∩ B)) B)) (λ(z:Class). (λ(hz:(z ∈ (A ∩ B))). snd((fst(((((λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∩ B))). let res:((z ∈ A) × (z ∈ B)) = h in res), (λ(h:((z ∈ A) × (z ∈ B))). let res:(z ∈ (A ∩ B)) = h in res)⟩))) A) B) z)) hz))))))) A) B)⟩))`

### NBG-101 `thm_semi_singleton_eq` (Derived)

- **Identifier:** `thm_semi_singleton_eq` (`NBG-101`, kind: `Derived`)
- **Statement (Unicode):** `Π(s:Class), Π(x:Class), Π(y:Class), ((Π(u:Class), Π(v:Class), ((u ∈ s) → ((v ∈ s) → (u = v)))) → ((x ∈ s) → ((y ∈ s) → (x = y))))`
- **Statement (ANSII):** `Pi(s:Class), Pi(x:Class), Pi(y:Class), ((Pi(u:Class), Pi(v:Class), ((u in s) -> ((v in s) -> (u = v)))) -> ((x in s) -> ((y in s) -> (x = y))))`
- **Constructive Proof Term:** `(λ(s:Class). (λ(x:Class). (λ(y:Class). (λ(hSemi:Π(u:Class), Π(v:Class), ((u ∈ s) → ((v ∈ s) → (u = v)))). (λ(hx:(x ∈ s)). (λ(hy:(y ∈ s)). ((((hSemi x) y) hx) hy)))))))`

### NBG-102 `thm_semi_singleton_subclass_proj` (Derived)

- **Identifier:** `thm_semi_singleton_subclass_proj` (`NBG-102`, kind: `Derived`)
- **Statement (Unicode):** `Π(s:Class), Π(A:Class), (((s ⊆ A) × (Π(u:Class), Π(v:Class), ((u ∈ s) → ((v ∈ s) → (u = v))))) → ((s ⊆ A) × (Π(u:Class), Π(v:Class), ((u ∈ s) → ((v ∈ s) → (u = v))))))`
- **Statement (ANSII):** `Pi(s:Class), Pi(A:Class), (((s c= A) * (Pi(u:Class), Pi(v:Class), ((u in s) -> ((v in s) -> (u = v))))) -> ((s c= A) * (Pi(u:Class), Pi(v:Class), ((u in s) -> ((v in s) -> (u = v))))))`
- **Constructive Proof Term:** `(λ(s:Class). (λ(A:Class). (λ(hSss:((s ⊆ A) × (Π(u:Class), Π(v:Class), ((u ∈ s) → ((v ∈ s) → (u = v)))))). ⟨fst(hSss), snd(hSss)⟩)))`

### NBG-103 `thm_class_lists_dunaev_step` (Derived)

- **Identifier:** `thm_class_lists_dunaev_step` (`NBG-103`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(L:Class), Π(x:Class), Π(xs:Class), ((Π(a:Class), Π(l:Class), ((a ∈ A) → ((l ∈ L) → ((a, l) ∈ L)))) → (((x ∈ A) × (xs ∈ L)) → ((x, xs) ∈ L)))`
- **Statement (ANSII):** `Pi(A:Class), Pi(L:Class), Pi(x:Class), Pi(xs:Class), ((Pi(a:Class), Pi(l:Class), ((a in A) -> ((l in L) -> ((a, l) in L)))) -> (((x in A) * (xs in L)) -> ((x, xs) in L)))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(L:Class). (λ(x:Class). (λ(xs:Class). (λ(hStep:Π(a:Class), Π(l:Class), ((a ∈ A) → ((l ∈ L) → ((a, l) ∈ L)))). (λ(hPair:((x ∈ A) × (xs ∈ L))). ((((hStep x) xs) fst(hPair)) snd(hPair))))))))`

### NBG-104 `thm_family_value_vs_image` (Derived)

- **Identifier:** `thm_family_value_vs_image` (`NBG-104`, kind: `Derived`)
- **Statement (Unicode):** `Π(I:Class), Π(G:Class), Π(x:Class), ((ValOf(G, x) = ⋃(Image(G, {x}))) → ((pr2((I, G)) = G) × (ValOf(G, x) = ⋃(Image(G, {x})))))`
- **Statement (ANSII):** `Pi(I:Class), Pi(G:Class), Pi(x:Class), ((ValOf(G, x) = Union(Image(G, {x}))) -> ((pr2((I, G)) = G) * (ValOf(G, x) = Union(Image(G, {x})))))`
- **Constructive Proof Term:** `(λ(I:Class). (λ(G:Class). (λ(x:Class). (λ(hValImg:(ValOf(G, x) = ⋃(Image(G, {x})))). ⟨ax_dunaev_pr2(I, G), hValImg⟩))))`

### NBG-105 `thm_tight_universe_indexed_union` (Derived)

- **Identifier:** `thm_tight_universe_indexed_union` (`NBG-105`, kind: `Derived`)
- **Statement (Unicode):** `Π(U:Class), Π(I:Class), Π(G:Class), ((Π(A:Class), Π(B:Class), ((A ∈ U) → ((B ⊆ U) → ((Image(B, A) ⊆ U) → (⋃(Image(B, A)) ∈ U))))) → ((I ∈ U) → ((G ⊆ U) → ((Image(G, I) ⊆ U) → (⋃(Image(G, I)) ∈ U)))))`
- **Statement (ANSII):** `Pi(U:Class), Pi(I:Class), Pi(G:Class), ((Pi(A:Class), Pi(B:Class), ((A in U) -> ((B c= U) -> ((Image(B, A) c= U) -> (Union(Image(B, A)) in U))))) -> ((I in U) -> ((G c= U) -> ((Image(G, I) c= U) -> (Union(Image(G, I)) in U)))))`
- **Constructive Proof Term:** `(λ(U:Class). (λ(I:Class). (λ(G:Class). (λ(hTight:Π(A:Class), Π(B:Class), ((A ∈ U) → ((B ⊆ U) → ((Image(B, A) ⊆ U) → (⋃(Image(B, A)) ∈ U))))). (λ(hI:(I ∈ U)). (λ(hGSub:(G ⊆ U)). (λ(hImgSub:(Image(G, I) ⊆ U)). (((((hTight I) G) hI) hGSub) hImgSub))))))))`

### NBG-106 `thm_dunaev_rel_inverse_involutive` (Derived)

- **Identifier:** `thm_dunaev_rel_inverse_involutive` (`NBG-106`, kind: `Derived`)
- **Statement (Unicode):** `Π(R:Class), Π(x:Class), Π(y:Class), ((Π(u:Class), Π(v:Class), ((((u, v) ∈ RelConverse(R)) → ((v, u) ∈ R)) × (((v, u) ∈ R) → ((u, v) ∈ RelConverse(R))))) → ((Π(u:Class), Π(v:Class), ((((u, v) ∈ RelConverse(RelConverse(R))) → ((v, u) ∈ RelConverse(R))) × (((v, u) ∈ RelConverse(R)) → ((u, v) ∈ RelConverse(RelConverse(R)))))) → ((((x, y) ∈ R) → ((x, y) ∈ RelConverse(RelConverse(R)))) × (((x, y) ∈ RelConverse(RelConverse(R))) → ((x, y) ∈ R)))))`
- **Statement (ANSII):** `Pi(R:Class), Pi(x:Class), Pi(y:Class), ((Pi(u:Class), Pi(v:Class), ((((u, v) in RelConverse(R)) -> ((v, u) in R)) * (((v, u) in R) -> ((u, v) in RelConverse(R))))) -> ((Pi(u:Class), Pi(v:Class), ((((u, v) in RelConverse(RelConverse(R))) -> ((v, u) in RelConverse(R))) * (((v, u) in RelConverse(R)) -> ((u, v) in RelConverse(RelConverse(R)))))) -> ((((x, y) in R) -> ((x, y) in RelConverse(RelConverse(R)))) * (((x, y) in RelConverse(RelConverse(R))) -> ((x, y) in R)))))`
- **Constructive Proof Term:** `(λ(R:Class). (λ(x:Class). (λ(y:Class). (λ(hInv1:Π(u:Class), Π(v:Class), ((((u, v) ∈ RelConverse(R)) → ((v, u) ∈ R)) × (((v, u) ∈ R) → ((u, v) ∈ RelConverse(R))))). (λ(hInv2:Π(u:Class), Π(v:Class), ((((u, v) ∈ RelConverse(RelConverse(R))) → ((v, u) ∈ RelConverse(R))) × (((v, u) ∈ RelConverse(R)) → ((u, v) ∈ RelConverse(RelConverse(R)))))). ⟨(λ(hInR:((x, y) ∈ R)). (snd(((hInv2 x) y)) (snd(((hInv1 y) x)) hInR))), (λ(hInInv2:((x, y) ∈ RelConverse(RelConverse(R)))). (fst(((hInv1 y) x)) (fst(((hInv2 x) y)) hInInv2)))⟩)))))`

### NBG-107 `thm_inter_assoc` (Derived)

- **Identifier:** `thm_inter_assoc` (`NBG-107`, kind: `Derived`)
- **Statement (Unicode):** `Π(z:Class), Π(A:Class), Π(B:Class), Π(C:Class), ((((z ∈ A) × (z ∈ B)) × (z ∈ C)) → ((z ∈ A) × ((z ∈ B) × (z ∈ C))))`
- **Statement (ANSII):** `Pi(z:Class), Pi(A:Class), Pi(B:Class), Pi(C:Class), ((((z in A) * (z in B)) * (z in C)) -> ((z in A) * ((z in B) * (z in C))))`
- **Constructive Proof Term:** `(λ(z:Class). (λ(A:Class). (λ(B:Class). (λ(C:Class). (λ(h:(((z ∈ A) × (z ∈ B)) × (z ∈ C))). ⟨fst(fst(h)), ⟨snd(fst(h)), snd(h)⟩⟩)))))`

### NBG-108 `thm_union_distrib_inter` (Derived)

- **Identifier:** `thm_union_distrib_inter` (`NBG-108`, kind: `Derived`)
- **Statement (Unicode):** `Π(z:Class), Π(X:Class), Π(Y:Class), Π(Z:Class), ((Π(C:Prop), (((z ∈ X) → C) → ((((z ∈ Y) × (z ∈ Z)) → C) → C))) → ((Π(C:Prop), (((z ∈ X) → C) → (((z ∈ Y) → C) → C))) × (Π(C:Prop), (((z ∈ X) → C) → (((z ∈ Z) → C) → C)))))`
- **Statement (ANSII):** `Pi(z:Class), Pi(X:Class), Pi(Y:Class), Pi(Z:Class), ((Pi(C:Prop), (((z in X) -> C) -> ((((z in Y) * (z in Z)) -> C) -> C))) -> ((Pi(C:Prop), (((z in X) -> C) -> (((z in Y) -> C) -> C))) * (Pi(C:Prop), (((z in X) -> C) -> (((z in Z) -> C) -> C)))))`
- **Constructive Proof Term:** `(λ(z:Class). (λ(X:Class). (λ(Y:Class). (λ(Z:Class). (λ(hOr:Π(C:Prop), (((z ∈ X) → C) → ((((z ∈ Y) × (z ∈ Z)) → C) → C))). ⟨(λ(C:Prop). (λ(fX:((z ∈ X) → C)). (λ(fY:((z ∈ Y) → C)). (((hOr C) fX) (λ(hYZ:((z ∈ Y) × (z ∈ Z))). (fY fst(hYZ))))))), (λ(C:Prop). (λ(fX:((z ∈ X) → C)). (λ(fZ:((z ∈ Z) → C)). (((hOr C) fX) (λ(hYZ:((z ∈ Y) × (z ∈ Z))). (fZ snd(hYZ)))))))⟩)))))`

### NBG-109 `thm_dunaev_pair_fst_snd_eq` (Derived)

- **Identifier:** `thm_dunaev_pair_fst_snd_eq` (`NBG-109`, kind: `Derived`)
- **Statement (Unicode):** `Π(a:Class), Π(b:Class), Π(c:Class), Π(d:Class), (((a, b) = (c, d)) → ((a = c) × (b = d)))`
- **Statement (ANSII):** `Pi(a:Class), Pi(b:Class), Pi(c:Class), Pi(d:Class), (((a, b) = (c, d)) -> ((a = c) * (b = d)))`
- **Constructive Proof Term:** `(λ(a:Class). (λ(b:Class). (λ(c:Class). (λ(d:Class). (((((λ(A:Class). (λ(B:Class). (λ(C:Class). (λ(D:Class). (λ(hEq:((A, B) = (C, D))). ⟨(((ax_eq_trans(A, pr1((C, D))) C) (((ax_eq_trans(A, pr1((A, B))) pr1((C, D))) (ax_eq_sym(pr1((A, B)), A) fst((((λ(A:Class). (λ(B:Class). ⟨ax_dunaev_pr1(A, B), ax_dunaev_pr2(A, B)⟩)) A) B)))) (ax_eq_cong_pr1((A, B), (C, D)) hEq))) fst((((λ(A:Class). (λ(B:Class). ⟨ax_dunaev_pr1(A, B), ax_dunaev_pr2(A, B)⟩)) C) D))), (((ax_eq_trans(B, pr2((C, D))) D) (((ax_eq_trans(B, pr2((A, B))) pr2((C, D))) (ax_eq_sym(pr2((A, B)), B) snd((((λ(A:Class). (λ(B:Class). ⟨ax_dunaev_pr1(A, B), ax_dunaev_pr2(A, B)⟩)) A) B)))) (ax_eq_cong_pr2((A, B), (C, D)) hEq))) snd((((λ(A:Class). (λ(B:Class). ⟨ax_dunaev_pr1(A, B), ax_dunaev_pr2(A, B)⟩)) C) D)))⟩))))) a) b) c) d)))))`

### NBG-110 `thm_cantor_no_surjection_power` (Derived)

- **Identifier:** `thm_cantor_no_surjection_power` (`NBG-110`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(F:Class), Π(D:Class), ((Π(x:Class), (((x ∈ D) → ((x ∈ A) × ((x ∈ ValOf(F, x)) → 𝟘))) × (((x ∈ A) × ((x ∈ ValOf(F, x)) → 𝟘)) → (x ∈ D)))) → ((Σ(a:Class), ((a ∈ A) × (Π(z:Class), (((z ∈ D) → (z ∈ ValOf(F, a))) × ((z ∈ ValOf(F, a)) → (z ∈ D)))))) → 𝟘))`
- **Statement (ANSII):** `Pi(A:Class), Pi(F:Class), Pi(D:Class), ((Pi(x:Class), (((x in D) -> ((x in A) * ((x in ValOf(F, x)) -> Void))) * (((x in A) * ((x in ValOf(F, x)) -> Void)) -> (x in D)))) -> ((Sigma(a:Class), ((a in A) * (Pi(z:Class), (((z in D) -> (z in ValOf(F, a))) * ((z in ValOf(F, a)) -> (z in D)))))) -> Void))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(F:Class). (λ(D:Class). (λ(hDiag:Π(x:Class), (((x ∈ D) → ((x ∈ A) × ((x ∈ ValOf(F, x)) → 𝟘))) × (((x ∈ A) × ((x ∈ ValOf(F, x)) → 𝟘)) → (x ∈ D)))). (λ(hSurj:Σ(a:Class), ((a ∈ A) × (Π(z:Class), (((z ∈ D) → (z ∈ ValOf(F, a))) × ((z ∈ ValOf(F, a)) → (z ∈ D)))))). ((λ(hInD:(fst(hSurj) ∈ D)). (snd((fst((hDiag fst(hSurj))) hInD)) (fst((snd(snd(hSurj)) fst(hSurj))) hInD))) (snd((hDiag fst(hSurj))) ⟨fst(snd(hSurj)), (λ(hInFa:(fst(hSurj) ∈ ValOf(F, fst(hSurj)))). ((λ(hInD:(fst(hSurj) ∈ D)). (snd((fst((hDiag fst(hSurj))) hInD)) (fst((snd(snd(hSurj)) fst(hSurj))) hInD))) (snd((snd(snd(hSurj)) fst(hSurj))) hInFa)))⟩)))))))`

### NBG-111 `thm_ord_succ_trans` (Derived)

- **Identifier:** `thm_ord_succ_trans` (`NBG-111`, kind: `Derived`)
- **Statement (Unicode):** `Π(a:Class), Π(x:Class), (((Π(u:Class), ((u ∈ a) → (u ⊆ a))) × ((x ⊆ a) → (x ⊆ SuccOrd(a)))) → ((x ∈ a) → (x ⊆ SuccOrd(a))))`
- **Statement (ANSII):** `Pi(a:Class), Pi(x:Class), (((Pi(u:Class), ((u in a) -> (u c= a))) * ((x c= a) -> (x c= SuccOrd(a)))) -> ((x in a) -> (x c= SuccOrd(a))))`
- **Constructive Proof Term:** `(λ(a:Class). (λ(x:Class). (λ(hTransSucc:((Π(u:Class), ((u ∈ a) → (u ⊆ a))) × ((x ⊆ a) → (x ⊆ SuccOrd(a))))). (λ(hxInA:(x ∈ a)). (snd(hTransSucc) ((fst(hTransSucc) x) hxInA))))))`

### NBG-112 `thm_knaster_tarski_post_fixed` (Derived)

- **Identifier:** `thm_knaster_tarski_post_fixed` (`NBG-112`, kind: `Derived`)
- **Statement (Unicode):** `Π(F:Class), Π(A:Class), Π(X:Class), ((Π(B:Class), Π(C:Class), ((B ⊆ C) → (ValOf(F, B) ⊆ ValOf(F, C)))) → (((A ⊆ X) × (ValOf(F, X) ⊆ X)) → (ValOf(F, A) ⊆ X)))`
- **Statement (ANSII):** `Pi(F:Class), Pi(A:Class), Pi(X:Class), ((Pi(B:Class), Pi(C:Class), ((B c= C) -> (ValOf(F, B) c= ValOf(F, C)))) -> (((A c= X) * (ValOf(F, X) c= X)) -> (ValOf(F, A) c= X)))`
- **Constructive Proof Term:** `(λ(F:Class). (λ(A:Class). (λ(X:Class). (λ(hMono:Π(B:Class), Π(C:Class), ((B ⊆ C) → (ValOf(F, B) ⊆ ValOf(F, C)))). (λ(hPost:((A ⊆ X) × (ValOf(F, X) ⊆ X))). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) ValOf(F, A)) X)) (λ(z:Class). (λ(hz:(z ∈ ValOf(F, A))). (((fst((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) ValOf(F, X)) X)) snd(hPost)) z) (((fst((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) ValOf(F, A)) ValOf(F, X))) (((hMono A) X) fst(hPost))) z) hz))))))))))`

### NBG-113 `thm_dunaev_rel_comp_assoc_proj` (Derived)

- **Identifier:** `thm_dunaev_rel_comp_assoc_proj` (`NBG-113`, kind: `Derived`)
- **Statement (Unicode):** `Π(R:Class), Π(S:Class), Π(T:Class), Π(x:Class), Π(w:Class), ((Σ(v:Class), ((Σ(u:Class), (((x, u) ∈ R) × ((u, v) ∈ S))) × ((v, w) ∈ T))) → Σ(u:Class), (((x, u) ∈ R) × (Σ(v:Class), (((u, v) ∈ S) × ((v, w) ∈ T)))))`
- **Statement (ANSII):** `Pi(R:Class), Pi(S:Class), Pi(T:Class), Pi(x:Class), Pi(w:Class), ((Sigma(v:Class), ((Sigma(u:Class), (((x, u) in R) * ((u, v) in S))) * ((v, w) in T))) -> Sigma(u:Class), (((x, u) in R) * (Sigma(v:Class), (((u, v) in S) * ((v, w) in T)))))`
- **Constructive Proof Term:** `(λ(R:Class). (λ(S:Class). (λ(T:Class). (λ(x:Class). (λ(w:Class). (λ(hComp:Σ(v:Class), ((Σ(u:Class), (((x, u) ∈ R) × ((u, v) ∈ S))) × ((v, w) ∈ T))). ⟨fst(fst(snd(hComp))), ⟨fst(snd(fst(snd(hComp)))), ⟨fst(hComp), ⟨snd(snd(fst(snd(hComp)))), snd(snd(hComp))⟩⟩⟩⟩))))))`

### NBG-114 `thm_universe_power_pair_closure` (Derived)

- **Identifier:** `thm_universe_power_pair_closure` (`NBG-114`, kind: `Derived`)
- **Statement (Unicode):** `Π(U:Class), Π(A:Class), Π(B:Class), (((Π(X:Class), ((X ∈ U) → (𝒫(X) ∈ U))) × (Π(X:Class), Π(Y:Class), (((X ∈ U) × (Y ∈ U)) → ((X, Y) ∈ U)))) → (((A ∈ U) × (B ∈ U)) → ((𝒫(A), 𝒫(B)) ∈ U)))`
- **Statement (ANSII):** `Pi(U:Class), Pi(A:Class), Pi(B:Class), (((Pi(X:Class), ((X in U) -> (Power(X) in U))) * (Pi(X:Class), Pi(Y:Class), (((X in U) * (Y in U)) -> ((X, Y) in U)))) -> (((A in U) * (B in U)) -> ((Power(A), Power(B)) in U)))`
- **Constructive Proof Term:** `(λ(U:Class). (λ(A:Class). (λ(B:Class). (λ(hUniv:((Π(X:Class), ((X ∈ U) → (𝒫(X) ∈ U))) × (Π(X:Class), Π(Y:Class), (((X ∈ U) × (Y ∈ U)) → ((X, Y) ∈ U))))). (λ(hAB:((A ∈ U) × (B ∈ U))). (((snd(hUniv) 𝒫(A)) 𝒫(B)) ⟨((fst(hUniv) A) fst(hAB)), ((fst(hUniv) B) snd(hAB))⟩))))))`

### NBG-115 `thm_forcing_check_name_refl` (Derived)

- **Identifier:** `thm_forcing_check_name_refl` (`NBG-115`, kind: `Derived`)
- **Statement (Unicode):** `Π(P:Class), Π(x:Class), Π(p:Class), (((x, p) = (x, p)) × (((p ∈ P) × (x ∈ V)) → (((x, p) = (x, p)) × (x ∈ V))))`
- **Statement (ANSII):** `Pi(P:Class), Pi(x:Class), Pi(p:Class), (((x, p) = (x, p)) * (((p in P) * (x in V)) -> (((x, p) = (x, p)) * (x in V))))`
- **Constructive Proof Term:** `(λ(P:Class). (λ(x:Class). (λ(p:Class). ⟨refl((x, p)), (λ(hCond:((p ∈ P) × (x ∈ V))). ⟨refl((x, p)), snd(hCond)⟩)⟩)))`

### NBG-116 `thm_veblen_normal_fixed_point` (Derived)

- **Identifier:** `thm_veblen_normal_fixed_point` (`NBG-116`, kind: `Derived`)
- **Statement (Unicode):** `Π(F:Class), Π(a:Class), ((Ord(a) × (ValOf(F, a) = a)) → (Ord(a) × (a = ValOf(F, a))))`
- **Statement (ANSII):** `Pi(F:Class), Pi(a:Class), ((Ord(a) * (ValOf(F, a) = a)) -> (Ord(a) * (a = ValOf(F, a))))`
- **Constructive Proof Term:** `(λ(F:Class). (λ(a:Class). (λ(hFix:(Ord(a) × (ValOf(F, a) = a))). ⟨fst(hFix), (ax_eq_sym(ValOf(F, a), a) snd(hFix))⟩)))`

### NBG-117 `thm_club_intersection_closed` (Derived)

- **Identifier:** `thm_club_intersection_closed` (`NBG-117`, kind: `Derived`)
- **Statement (Unicode):** `Π(C1:Class), Π(C2:Class), Π(B:Class), ((((B ⊆ C1) × (B ⊆ C2)) × ((Π(D:Class), ((D ⊆ C1) → (⋃(D) ∈ C1))) × (Π(D:Class), ((D ⊆ C2) → (⋃(D) ∈ C2))))) → (⋃(B) ∈ (C1 ∩ C2)))`
- **Statement (ANSII):** `Pi(C1:Class), Pi(C2:Class), Pi(B:Class), ((((B c= C1) * (B c= C2)) * ((Pi(D:Class), ((D c= C1) -> (Union(D) in C1))) * (Pi(D:Class), ((D c= C2) -> (Union(D) in C2))))) -> (Union(B) in (C1 n* C2)))`
- **Constructive Proof Term:** `(λ(C1:Class). (λ(C2:Class). (λ(B:Class). (λ(hClub:(((B ⊆ C1) × (B ⊆ C2)) × ((Π(D:Class), ((D ⊆ C1) → (⋃(D) ∈ C1))) × (Π(D:Class), ((D ⊆ C2) → (⋃(D) ∈ C2)))))). (snd(((((λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∩ B))). let res:((z ∈ A) × (z ∈ B)) = h in res), (λ(h:((z ∈ A) × (z ∈ B))). let res:(z ∈ (A ∩ B)) = h in res)⟩))) C1) C2) ⋃(B))) ⟨((fst(snd(hClub)) B) fst(fst(hClub))), ((snd(snd(hClub)) B) snd(fst(hClub)))⟩)))))`

### NBG-118 `thm_fodor_regressive_witness` (Derived)

- **Identifier:** `thm_fodor_regressive_witness` (`NBG-118`, kind: `Derived`)
- **Statement (Unicode):** `Π(S:Class), Π(F:Class), ((Σ(a:Class), Σ(b:Class), ((a ∈ S) × ((b ∈ a) × (ValOf(F, a) = b)))) → Σ(b:Class), Σ(a:Class), ((a ∈ S) × ((b ∈ a) × (ValOf(F, a) = b))))`
- **Statement (ANSII):** `Pi(S:Class), Pi(F:Class), ((Sigma(a:Class), Sigma(b:Class), ((a in S) * ((b in a) * (ValOf(F, a) = b)))) -> Sigma(b:Class), Sigma(a:Class), ((a in S) * ((b in a) * (ValOf(F, a) = b))))`
- **Constructive Proof Term:** `(λ(S:Class). (λ(F:Class). (λ(hReg:Σ(a:Class), Σ(b:Class), ((a ∈ S) × ((b ∈ a) × (ValOf(F, a) = b)))). ⟨fst(snd(hReg)), ⟨fst(hReg), snd(snd(hReg))⟩⟩)))`

### NBG-119 `thm_bval_extensionality_witness` (Derived)

- **Identifier:** `thm_bval_extensionality_witness` (`NBG-119`, kind: `Derived`)
- **Statement (Unicode):** `Π(u:Class), Π(v:Class), Π(p:Class), Π(b:Class), ((((u, p) ∈ b) × (u = v)) → (((u, p) ∈ b) × (v = u)))`
- **Statement (ANSII):** `Pi(u:Class), Pi(v:Class), Pi(p:Class), Pi(b:Class), ((((u, p) in b) * (u = v)) -> (((u, p) in b) * (v = u)))`
- **Constructive Proof Term:** `(λ(u:Class). (λ(v:Class). (λ(p:Class). (λ(b:Class). (λ(hBval:(((u, p) ∈ b) × (u = v))). ⟨fst(hBval), (ax_eq_sym(u, v) snd(hBval))⟩)))))`

### NBG-120 `thm_gale_stewart_strategy_exclusivity` (Derived)

- **Identifier:** `thm_gale_stewart_strategy_exclusivity` (`NBG-120`, kind: `Derived`)
- **Statement (Unicode):** `Π(G:Class), Π(s1:Class), Π(s2:Class), ((((s1 ∈ G) × (s2 ∈ G)) → 𝟘) → ((s1 ∈ G) → ((s2 ∈ G) → 𝟘)))`
- **Statement (ANSII):** `Pi(G:Class), Pi(s1:Class), Pi(s2:Class), ((((s1 in G) * (s2 in G)) -> Void) -> ((s1 in G) -> ((s2 in G) -> Void)))`
- **Constructive Proof Term:** `(λ(G:Class). (λ(s1:Class). (λ(s2:Class). (λ(hExcl:(((s1 ∈ G) × (s2 ∈ G)) → 𝟘)). (λ(h1:(s1 ∈ G)). (λ(h2:(s2 ∈ G)). (hExcl ⟨h1, h2⟩)))))))`

### NBG-121 `thm_gale_stewart_closed_det_proj` (Derived)

- **Identifier:** `thm_gale_stewart_closed_det_proj` (`NBG-121`, kind: `Derived`)
- **Statement (Unicode):** `Π(G:Class), Π(C:Class), Π(W1:Class), (((G ∈ C) × ((G ∈ C) → Σ(s:Class), ((G, s) ∈ W1))) → Σ(s:Class), ((G, s) ∈ W1))`
- **Statement (ANSII):** `Pi(G:Class), Pi(C:Class), Pi(W1:Class), (((G in C) * ((G in C) -> Sigma(s:Class), ((G, s) in W1))) -> Sigma(s:Class), ((G, s) in W1))`
- **Constructive Proof Term:** `(λ(G:Class). (λ(C:Class). (λ(W1:Class). (λ(hClosedDet:((G ∈ C) × ((G ∈ C) → Σ(s:Class), ((G, s) ∈ W1)))). (snd(hClosedDet) fst(hClosedDet))))))`

### NBG-122 `thm_borel_determinacy_modus_ponens` (Derived)

- **Identifier:** `thm_borel_determinacy_modus_ponens` (`NBG-122`, kind: `Derived`)
- **Statement (Unicode):** `Π(B:Class), Π(Det:Class), Π(g:Class), (((Π(x:Class), ((x ∈ B) → (x ∈ Det))) × (g ∈ B)) → (g ∈ Det))`
- **Statement (ANSII):** `Pi(B:Class), Pi(Det:Class), Pi(g:Class), (((Pi(x:Class), ((x in B) -> (x in Det))) * (g in B)) -> (g in Det))`
- **Constructive Proof Term:** `(λ(B:Class). (λ(Det:Class). (λ(g:Class). (λ(hBorel:((Π(x:Class), ((x ∈ B) → (x ∈ Det))) × (g ∈ B))). ((fst(hBorel) g) snd(hBorel))))))`

### NBG-123 `thm_semigroup_dyson_phillips_step` (Derived)

- **Identifier:** `thm_semigroup_dyson_phillips_step` (`NBG-123`, kind: `Derived`)
- **Statement (Unicode):** `Π(S:Class), Π(T0:Class), Π(P:Class), ((((T0 ∈ S) × (P ∈ S)) × (Π(A:Class), Π(B:Class), (((A ∈ S) × (B ∈ S)) → ((A, B) ∈ S)))) → ((T0, P) ∈ S))`
- **Statement (ANSII):** `Pi(S:Class), Pi(T0:Class), Pi(P:Class), ((((T0 in S) * (P in S)) * (Pi(A:Class), Pi(B:Class), (((A in S) * (B in S)) -> ((A, B) in S)))) -> ((T0, P) in S))`
- **Constructive Proof Term:** `(λ(S:Class). (λ(T0:Class). (λ(P:Class). (λ(hDP:(((T0 ∈ S) × (P ∈ S)) × (Π(A:Class), Π(B:Class), (((A ∈ S) × (B ∈ S)) → ((A, B) ∈ S))))). (((snd(hDP) T0) P) fst(hDP))))))`

### NBG-124 `thm_dunaev_list_append_nil_right` (Derived)

- **Identifier:** `thm_dunaev_list_append_nil_right` (`NBG-124`, kind: `Derived`)
- **Statement (Unicode):** `Π(L:Class), ((L ⊆ (L ∪ ∅)) × (∅ ⊆ L))`
- **Statement (ANSII):** `Pi(L:Class), ((L c= (L u+ EmptySet)) * (EmptySet c= L))`
- **Constructive Proof Term:** `(λ(L:Class). ⟨(((λ(A:Class). (λ(B:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) A) (A ∪ B))) (λ(z:Class). (λ(hz:(z ∈ A)). (snd(((((λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∪ B))). let res:Π(C:Prop), (((z ∈ A) → C) → (((z ∈ B) → C) → C)) = h in res), (λ(h:Π(C:Prop), (((z ∈ A) → C) → (((z ∈ B) → C) → C))). let res:(z ∈ (A ∪ B)) = h in res)⟩))) A) B) z)) (λ(C:Prop). (λ(fa:((z ∈ A) → C)). (λ(fb:((z ∈ B) → C)). (fa hz)))))))))) L) ∅), ((λ(X:Class). (λ(z:Class). (λ(h:(z ∈ ∅)). ax_false_elim((z ∈ X), ax_empty_no_elements(z, h))))) L)⟩)`

### NBG-125 `thm_family_canonical_record_proj` (Derived)

- **Identifier:** `thm_family_canonical_record_proj` (`NBG-125`, kind: `Derived`)
- **Statement (Unicode):** `Π(F:Class), Π(B:Class), Π(x:Class), Π(y:Class), (((F ⊆ B) × ((x ∈ B) × ((x, y) ∈ F))) → ((x ∈ B) × ((x, y) ∈ B)))`
- **Statement (ANSII):** `Pi(F:Class), Pi(B:Class), Pi(x:Class), Pi(y:Class), (((F c= B) * ((x in B) * ((x, y) in F))) -> ((x in B) * ((x, y) in B)))`
- **Constructive Proof Term:** `(λ(F:Class). (λ(B:Class). (λ(x:Class). (λ(y:Class). (λ(hFam:((F ⊆ B) × ((x ∈ B) × ((x, y) ∈ F)))). ⟨fst(snd(hFam)), (((fst((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) F) B)) fst(hFam)) (x, y)) snd(snd(hFam)))⟩)))))`

### NBG-126 `thm_yoneda_identity_eval` (Derived)

- **Identifier:** `thm_yoneda_identity_eval` (`NBG-126`, kind: `Derived`)
- **Statement (Unicode):** `Π(F:Class), Π(eta:Class), Π(A:Class), (((IdMor(A) ∈ A) × ((IdMor(A) ∈ A) → (ValOf(eta, IdMor(A)) ∈ ValOf(F, A)))) → (ValOf(eta, IdMor(A)) ∈ ValOf(F, A)))`
- **Statement (ANSII):** `Pi(F:Class), Pi(eta:Class), Pi(A:Class), (((IdMor(A) in A) * ((IdMor(A) in A) -> (ValOf(eta, IdMor(A)) in ValOf(F, A)))) -> (ValOf(eta, IdMor(A)) in ValOf(F, A)))`
- **Constructive Proof Term:** `(λ(F:Class). (λ(eta:Class). (λ(A:Class). (λ(hYon:((IdMor(A) ∈ A) × ((IdMor(A) ∈ A) → (ValOf(eta, IdMor(A)) ∈ ValOf(F, A))))). (snd(hYon) fst(hYon))))))`

### NBG-127 `thm_yoneda_roundtrip_id` (Derived)

- **Identifier:** `thm_yoneda_roundtrip_id` (`NBG-127`, kind: `Derived`)
- **Statement (Unicode):** `Π(Phi:Class), Π(Psi:Class), Π(u:Class), (((ValOf(Phi, ValOf(Psi, u)) = u) × (ValOf(Psi, ValOf(Phi, u)) = u)) → ((u = ValOf(Phi, ValOf(Psi, u))) × (u = ValOf(Psi, ValOf(Phi, u)))))`
- **Statement (ANSII):** `Pi(Phi:Class), Pi(Psi:Class), Pi(u:Class), (((ValOf(Phi, ValOf(Psi, u)) = u) * (ValOf(Psi, ValOf(Phi, u)) = u)) -> ((u = ValOf(Phi, ValOf(Psi, u))) * (u = ValOf(Psi, ValOf(Phi, u)))))`
- **Constructive Proof Term:** `(λ(Phi:Class). (λ(Psi:Class). (λ(u:Class). (λ(hRT:((ValOf(Phi, ValOf(Psi, u)) = u) × (ValOf(Psi, ValOf(Phi, u)) = u))). ⟨(ax_eq_sym(ValOf(Phi, ValOf(Psi, u)), u) fst(hRT)), (ax_eq_sym(ValOf(Psi, ValOf(Phi, u)), u) snd(hRT))⟩))))`

### NBG-128 `thm_kan_extension_adjunction_unit` (Derived)

- **Identifier:** `thm_kan_extension_adjunction_unit` (`NBG-128`, kind: `Derived`)
- **Statement (Unicode):** `Π(K:Class), Π(F:Class), Π(G:Class), Π(Lan:Class), (((F ⊆ (K, Lan)) × ((F ⊆ (K, G)) → (Lan ⊆ G))) → ((F ⊆ (K, G)) → ((F ⊆ (K, Lan)) × (Lan ⊆ G))))`
- **Statement (ANSII):** `Pi(K:Class), Pi(F:Class), Pi(G:Class), Pi(Lan:Class), (((F c= (K, Lan)) * ((F c= (K, G)) -> (Lan c= G))) -> ((F c= (K, G)) -> ((F c= (K, Lan)) * (Lan c= G))))`
- **Constructive Proof Term:** `(λ(K:Class). (λ(F:Class). (λ(G:Class). (λ(Lan:Class). (λ(hKan:((F ⊆ (K, Lan)) × ((F ⊆ (K, G)) → (Lan ⊆ G)))). (λ(hSubG:(F ⊆ (K, G))). ⟨fst(hKan), (snd(hKan) hSubG)⟩))))))`

### NBG-129 `thm_schrodinger_feynman_kac_positivity` (Derived)

- **Identifier:** `thm_schrodinger_feynman_kac_positivity` (`NBG-129`, kind: `Derived`)
- **Statement (Unicode):** `Π(Pos:Class), Π(Pt:Class), Π(Vpot:Class), Π(u:Class), (((Π(f:Class), ((f ∈ Pos) → (ValOf(Pt, f) ∈ Pos))) × ((Π(f:Class), ((f ∈ Pos) → (ValOf(Vpot, f) ∈ Pos))) × (u ∈ Pos))) → (ValOf(Pt, ValOf(Vpot, u)) ∈ Pos))`
- **Statement (ANSII):** `Pi(Pos:Class), Pi(Pt:Class), Pi(Vpot:Class), Pi(u:Class), (((Pi(f:Class), ((f in Pos) -> (ValOf(Pt, f) in Pos))) * ((Pi(f:Class), ((f in Pos) -> (ValOf(Vpot, f) in Pos))) * (u in Pos))) -> (ValOf(Pt, ValOf(Vpot, u)) in Pos))`
- **Constructive Proof Term:** `(λ(Pos:Class). (λ(Pt:Class). (λ(Vpot:Class). (λ(u:Class). (λ(hFK:((Π(f:Class), ((f ∈ Pos) → (ValOf(Pt, f) ∈ Pos))) × ((Π(f:Class), ((f ∈ Pos) → (ValOf(Vpot, f) ∈ Pos))) × (u ∈ Pos)))). ((fst(hFK) ValOf(Vpot, u)) ((fst(snd(hFK)) u) snd(snd(hFK)))))))))`

### NBG-130 `thm_lipschitz_regularity_composition` (Derived)

- **Identifier:** `thm_lipschitz_regularity_composition` (`NBG-130`, kind: `Derived`)
- **Statement (Unicode):** `Π(Lip:Class), Π(F:Class), Π(G:Class), ((((F ∈ Lip) × (G ∈ Lip)) × (Π(A:Class), Π(B:Class), (((A ∈ Lip) × (B ∈ Lip)) → ((A, B) ∈ Lip)))) → ((F, G) ∈ Lip))`
- **Statement (ANSII):** `Pi(Lip:Class), Pi(F:Class), Pi(G:Class), ((((F in Lip) * (G in Lip)) * (Pi(A:Class), Pi(B:Class), (((A in Lip) * (B in Lip)) -> ((A, B) in Lip)))) -> ((F, G) in Lip))`
- **Constructive Proof Term:** `(λ(Lip:Class). (λ(F:Class). (λ(G:Class). (λ(hLip:(((F ∈ Lip) × (G ∈ Lip)) × (Π(A:Class), Π(B:Class), (((A ∈ Lip) × (B ∈ Lip)) → ((A, B) ∈ Lip))))). (((snd(hLip) F) G) fst(hLip))))))`

### NBG-131 `thm_dunaev_pair_union_left_distributivity` (Derived)

- **Identifier:** `thm_dunaev_pair_union_left_distributivity` (`NBG-131`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), Π(y:Class), Π(X:Class), Π(Y:Class), Π(Z:Class), (((Π(C:Prop), (((x ∈ X) → C) → (((x ∈ Y) → C) → C))) × (y ∈ Z)) → Π(C:Prop), ((((x ∈ X) × (y ∈ Z)) → C) → ((((x ∈ Y) × (y ∈ Z)) → C) → C)))`
- **Statement (ANSII):** `Pi(x:Class), Pi(y:Class), Pi(X:Class), Pi(Y:Class), Pi(Z:Class), (((Pi(C:Prop), (((x in X) -> C) -> (((x in Y) -> C) -> C))) * (y in Z)) -> Pi(C:Prop), ((((x in X) * (y in Z)) -> C) -> ((((x in Y) * (y in Z)) -> C) -> C)))`
- **Constructive Proof Term:** `(λ(x:Class). (λ(y:Class). (λ(X:Class). (λ(Y:Class). (λ(Z:Class). (λ(h:((Π(C:Prop), (((x ∈ X) → C) → (((x ∈ Y) → C) → C))) × (y ∈ Z))). (λ(C:Prop). (λ(fL:(((x ∈ X) × (y ∈ Z)) → C)). (λ(fR:(((x ∈ Y) × (y ∈ Z)) → C)). (((fst(h) C) (λ(hxX:(x ∈ X)). (fL ⟨hxX, snd(h)⟩))) (λ(hxY:(x ∈ Y)). (fR ⟨hxY, snd(h)⟩))))))))))))`

### NBG-132 `thm_dunaev_pair_union_right_distributivity` (Derived)

- **Identifier:** `thm_dunaev_pair_union_right_distributivity` (`NBG-132`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), Π(y:Class), Π(X:Class), Π(Y:Class), Π(Z:Class), (((x ∈ X) × (Π(C:Prop), (((y ∈ Y) → C) → (((y ∈ Z) → C) → C)))) → Π(C:Prop), ((((x ∈ X) × (y ∈ Y)) → C) → ((((x ∈ X) × (y ∈ Z)) → C) → C)))`
- **Statement (ANSII):** `Pi(x:Class), Pi(y:Class), Pi(X:Class), Pi(Y:Class), Pi(Z:Class), (((x in X) * (Pi(C:Prop), (((y in Y) -> C) -> (((y in Z) -> C) -> C)))) -> Pi(C:Prop), ((((x in X) * (y in Y)) -> C) -> ((((x in X) * (y in Z)) -> C) -> C)))`
- **Constructive Proof Term:** `(λ(x:Class). (λ(y:Class). (λ(X:Class). (λ(Y:Class). (λ(Z:Class). (λ(h:((x ∈ X) × (Π(C:Prop), (((y ∈ Y) → C) → (((y ∈ Z) → C) → C))))). (λ(C:Prop). (λ(fL:(((x ∈ X) × (y ∈ Y)) → C)). (λ(fR:(((x ∈ X) × (y ∈ Z)) → C)). (((snd(h) C) (λ(hyY:(y ∈ Y)). (fL ⟨fst(h), hyY⟩))) (λ(hyZ:(y ∈ Z)). (fR ⟨fst(h), hyZ⟩))))))))))))`

### NBG-133 `thm_dunaev_pair_intersection_factoring` (Derived)

- **Identifier:** `thm_dunaev_pair_intersection_factoring` (`NBG-133`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), Π(y:Class), Π(A:Class), Π(B:Class), Π(C:Class), Π(D:Class), ((((x ∈ A) × (y ∈ C)) × ((x ∈ B) × (y ∈ D))) → (((x ∈ A) × (x ∈ B)) × ((y ∈ C) × (y ∈ D))))`
- **Statement (ANSII):** `Pi(x:Class), Pi(y:Class), Pi(A:Class), Pi(B:Class), Pi(C:Class), Pi(D:Class), ((((x in A) * (y in C)) * ((x in B) * (y in D))) -> (((x in A) * (x in B)) * ((y in C) * (y in D))))`
- **Constructive Proof Term:** `(λ(x:Class). (λ(y:Class). (λ(A:Class). (λ(B:Class). (λ(C:Class). (λ(D:Class). (λ(h:(((x ∈ A) × (y ∈ C)) × ((x ∈ B) × (y ∈ D)))). ⟨⟨fst(fst(h)), fst(snd(h))⟩, ⟨snd(fst(h)), snd(snd(h))⟩⟩)))))))`

### NBG-134 `thm_class_difference_union_absorption` (Derived)

- **Identifier:** `thm_class_difference_union_absorption` (`NBG-134`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), Π(A:Class), Π(B:Class), ((Π(C:Prop), ((((x ∈ A) × ((x ∈ B) → 𝟘)) → C) → ((((x ∈ A) × (x ∈ B)) → C) → C))) → (x ∈ A))`
- **Statement (ANSII):** `Pi(x:Class), Pi(A:Class), Pi(B:Class), ((Pi(C:Prop), ((((x in A) * ((x in B) -> Void)) -> C) -> ((((x in A) * (x in B)) -> C) -> C))) -> (x in A))`
- **Constructive Proof Term:** `(λ(x:Class). (λ(A:Class). (λ(B:Class). (λ(hOr:Π(C:Prop), ((((x ∈ A) × ((x ∈ B) → 𝟘)) → C) → ((((x ∈ A) × (x ∈ B)) → C) → C))). (((hOr (x ∈ A)) (λ(hDiff:((x ∈ A) × ((x ∈ B) → 𝟘))). fst(hDiff))) (λ(hInter:((x ∈ A) × (x ∈ B))). fst(hInter)))))))`

### NBG-135 `thm_forall_biconditional_to_conjunction_of_forall` (Derived)

- **Identifier:** `thm_forall_biconditional_to_conjunction_of_forall` (`NBG-135`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), ((Π(X:Class), (((X ∈ A) → (X ∈ B)) × ((X ∈ B) → (X ∈ A)))) → ((Π(X:Class), ((X ∈ A) → (X ∈ B))) × (Π(X:Class), ((X ∈ B) → (X ∈ A)))))`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), ((Pi(X:Class), (((X in A) -> (X in B)) * ((X in B) -> (X in A)))) -> ((Pi(X:Class), ((X in A) -> (X in B))) * (Pi(X:Class), ((X in B) -> (X in A)))))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(B:Class). (λ(hIff:Π(X:Class), (((X ∈ A) → (X ∈ B)) × ((X ∈ B) → (X ∈ A)))). ⟨(λ(X:Class). fst((hIff X))), (λ(X:Class). snd((hIff X)))⟩)))`

### NBG-136 `thm_conjunction_of_forall_to_forall_biconditional` (Derived)

- **Identifier:** `thm_conjunction_of_forall_to_forall_biconditional` (`NBG-136`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), (((Π(X:Class), ((X ∈ A) → (X ∈ B))) × (Π(X:Class), ((X ∈ B) → (X ∈ A)))) → Π(X:Class), (((X ∈ A) → (X ∈ B)) × ((X ∈ B) → (X ∈ A))))`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), (((Pi(X:Class), ((X in A) -> (X in B))) * (Pi(X:Class), ((X in B) -> (X in A)))) -> Pi(X:Class), (((X in A) -> (X in B)) * ((X in B) -> (X in A))))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(B:Class). (λ(hConj:((Π(X:Class), ((X ∈ A) → (X ∈ B))) × (Π(X:Class), ((X ∈ B) → (X ∈ A))))). (λ(X:Class). ⟨(fst(hConj) X), (snd(hConj) X)⟩))))`

### NBG-137 `thm_relational_composition_witness_monotonicity_left` (Derived)

- **Identifier:** `thm_relational_composition_witness_monotonicity_left` (`NBG-137`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), Π(y:Class), Π(R:Class), Π(R2:Class), Π(S:Class), ((((x ∈ R) × (y ∈ S)) × ((x ∈ R) → (x ∈ R2))) → ((x ∈ R2) × (y ∈ S)))`
- **Statement (ANSII):** `Pi(x:Class), Pi(y:Class), Pi(R:Class), Pi(R2:Class), Pi(S:Class), ((((x in R) * (y in S)) * ((x in R) -> (x in R2))) -> ((x in R2) * (y in S)))`
- **Constructive Proof Term:** `(λ(x:Class). (λ(y:Class). (λ(R:Class). (λ(R2:Class). (λ(S:Class). (λ(h:(((x ∈ R) × (y ∈ S)) × ((x ∈ R) → (x ∈ R2)))). ⟨(snd(h) fst(fst(h))), snd(fst(h))⟩))))))`

### NBG-138 `thm_relational_composition_witness_monotonicity_right` (Derived)

- **Identifier:** `thm_relational_composition_witness_monotonicity_right` (`NBG-138`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), Π(y:Class), Π(R:Class), Π(S:Class), Π(S2:Class), ((((x ∈ R) × (y ∈ S)) × ((y ∈ S) → (y ∈ S2))) → ((x ∈ R) × (y ∈ S2)))`
- **Statement (ANSII):** `Pi(x:Class), Pi(y:Class), Pi(R:Class), Pi(S:Class), Pi(S2:Class), ((((x in R) * (y in S)) * ((y in S) -> (y in S2))) -> ((x in R) * (y in S2)))`
- **Constructive Proof Term:** `(λ(x:Class). (λ(y:Class). (λ(R:Class). (λ(S:Class). (λ(S2:Class). (λ(h:(((x ∈ R) × (y ∈ S)) × ((y ∈ S) → (y ∈ S2)))). ⟨fst(fst(h)), (snd(h) snd(fst(h)))⟩))))))`

### NBG-139 `thm_class_symmetric_difference_left_elimination` (Derived)

- **Identifier:** `thm_class_symmetric_difference_left_elimination` (`NBG-139`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), Π(A:Class), Π(B:Class), (((Π(C:Prop), ((((x ∈ A) × ((x ∈ B) → 𝟘)) → C) → ((((x ∈ B) × ((x ∈ A) → 𝟘)) → C) → C))) × ((x ∈ A) → 𝟘)) → ((x ∈ B) × ((x ∈ A) → 𝟘)))`
- **Statement (ANSII):** `Pi(x:Class), Pi(A:Class), Pi(B:Class), (((Pi(C:Prop), ((((x in A) * ((x in B) -> Void)) -> C) -> ((((x in B) * ((x in A) -> Void)) -> C) -> C))) * ((x in A) -> Void)) -> ((x in B) * ((x in A) -> Void)))`
- **Constructive Proof Term:** `(λ(x:Class). (λ(A:Class). (λ(B:Class). (λ(h:((Π(C:Prop), ((((x ∈ A) × ((x ∈ B) → 𝟘)) → C) → ((((x ∈ B) × ((x ∈ A) → 𝟘)) → C) → C))) × ((x ∈ A) → 𝟘))). ⟨(((fst(h) (x ∈ B)) (λ(hL:((x ∈ A) × ((x ∈ B) → 𝟘))). ax_false_elim((x ∈ B), (snd(h) fst(hL))))) (λ(hR:((x ∈ B) × ((x ∈ A) → 𝟘))). fst(hR))), snd(h)⟩))))`

### NBG-140 `thm_class_symmetric_difference_right_elimination` (Derived)

- **Identifier:** `thm_class_symmetric_difference_right_elimination` (`NBG-140`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), Π(A:Class), Π(B:Class), (((Π(C:Prop), ((((x ∈ A) × ((x ∈ B) → 𝟘)) → C) → ((((x ∈ B) × ((x ∈ A) → 𝟘)) → C) → C))) × ((x ∈ B) → 𝟘)) → ((x ∈ A) × ((x ∈ B) → 𝟘)))`
- **Statement (ANSII):** `Pi(x:Class), Pi(A:Class), Pi(B:Class), (((Pi(C:Prop), ((((x in A) * ((x in B) -> Void)) -> C) -> ((((x in B) * ((x in A) -> Void)) -> C) -> C))) * ((x in B) -> Void)) -> ((x in A) * ((x in B) -> Void)))`
- **Constructive Proof Term:** `(λ(x:Class). (λ(A:Class). (λ(B:Class). (λ(h:((Π(C:Prop), ((((x ∈ A) × ((x ∈ B) → 𝟘)) → C) → ((((x ∈ B) × ((x ∈ A) → 𝟘)) → C) → C))) × ((x ∈ B) → 𝟘))). ⟨(((fst(h) (x ∈ A)) (λ(hL:((x ∈ A) × ((x ∈ B) → 𝟘))). fst(hL))) (λ(hR:((x ∈ B) × ((x ∈ A) → 𝟘))). ax_false_elim((x ∈ A), (snd(h) fst(hR))))), snd(h)⟩))))`

### NBG-141 `thm_function_fiber_intersection_disjointness` (Derived)

- **Identifier:** `thm_function_fiber_intersection_disjointness` (`NBG-141`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), Π(y1:Class), Π(y2:Class), Π(F1:Class), Π(F2:Class), ((((x ∈ F1) × ((x ∈ F1) → (y1 = y2))) × ((x ∈ F2) × ((y1 = y2) → 𝟘))) → 𝟘)`
- **Statement (ANSII):** `Pi(x:Class), Pi(y1:Class), Pi(y2:Class), Pi(F1:Class), Pi(F2:Class), ((((x in F1) * ((x in F1) -> (y1 = y2))) * ((x in F2) * ((y1 = y2) -> Void))) -> Void)`
- **Constructive Proof Term:** `(λ(x:Class). (λ(y1:Class). (λ(y2:Class). (λ(F1:Class). (λ(F2:Class). (λ(h:(((x ∈ F1) × ((x ∈ F1) → (y1 = y2))) × ((x ∈ F2) × ((y1 = y2) → 𝟘)))). (snd(snd(h)) (snd(fst(h)) fst(fst(h))))))))))`

### NBG-142 `thm_image_subclass_transitivity_witness` (Derived)

- **Identifier:** `thm_image_subclass_transitivity_witness` (`NBG-142`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), Π(y:Class), Π(A:Class), Π(A2:Class), Π(B:Class), Π(B2:Class), ((((x ∈ A) × (y ∈ B)) × (((x ∈ A) → (x ∈ A2)) × ((y ∈ B) → (y ∈ B2)))) → ((x ∈ A2) × (y ∈ B2)))`
- **Statement (ANSII):** `Pi(x:Class), Pi(y:Class), Pi(A:Class), Pi(A2:Class), Pi(B:Class), Pi(B2:Class), ((((x in A) * (y in B)) * (((x in A) -> (x in A2)) * ((y in B) -> (y in B2)))) -> ((x in A2) * (y in B2)))`
- **Constructive Proof Term:** `(λ(x:Class). (λ(y:Class). (λ(A:Class). (λ(A2:Class). (λ(B:Class). (λ(B2:Class). (λ(h:(((x ∈ A) × (y ∈ B)) × (((x ∈ A) → (x ∈ A2)) × ((y ∈ B) → (y ∈ B2))))). ⟨(fst(snd(h)) fst(fst(h))), (snd(snd(h)) snd(fst(h)))⟩)))))))`

### NBG-143 `thm_preimage_union_decomposition_witness` (Derived)

- **Identifier:** `thm_preimage_union_decomposition_witness` (`NBG-143`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), Π(y:Class), Π(Dom:Class), Π(B1:Class), Π(B2:Class), (((x ∈ Dom) × (Π(C:Prop), (((y ∈ B1) → C) → (((y ∈ B2) → C) → C)))) → Π(C:Prop), ((((x ∈ Dom) × (y ∈ B1)) → C) → ((((x ∈ Dom) × (y ∈ B2)) → C) → C)))`
- **Statement (ANSII):** `Pi(x:Class), Pi(y:Class), Pi(Dom:Class), Pi(B1:Class), Pi(B2:Class), (((x in Dom) * (Pi(C:Prop), (((y in B1) -> C) -> (((y in B2) -> C) -> C)))) -> Pi(C:Prop), ((((x in Dom) * (y in B1)) -> C) -> ((((x in Dom) * (y in B2)) -> C) -> C)))`
- **Constructive Proof Term:** `(λ(x:Class). (λ(y:Class). (λ(Dom:Class). (λ(B1:Class). (λ(B2:Class). (λ(h:((x ∈ Dom) × (Π(C:Prop), (((y ∈ B1) → C) → (((y ∈ B2) → C) → C))))). (λ(C:Prop). (λ(fL:(((x ∈ Dom) × (y ∈ B1)) → C)). (λ(fR:(((x ∈ Dom) × (y ∈ B2)) → C)). (((snd(h) C) (λ(hyB1:(y ∈ B1)). (fL ⟨fst(h), hyB1⟩))) (λ(hyB2:(y ∈ B2)). (fR ⟨fst(h), hyB2⟩))))))))))))`

### NBG-144 `thm_equivalence_relation_symmetry_transitivity_step` (Derived)

- **Identifier:** `thm_equivalence_relation_symmetry_transitivity_step` (`NBG-144`, kind: `Derived`)
- **Statement (Unicode):** `Π(R:Class), Π(x:Class), Π(y:Class), Π(z:Class), (((((x, y) ∈ R) → ((y, x) ∈ R)) × ((((y, x) ∈ R) × ((x, z) ∈ R)) → ((y, z) ∈ R))) → ((((x, y) ∈ R) × ((x, z) ∈ R)) → ((y, z) ∈ R)))`
- **Statement (ANSII):** `Pi(R:Class), Pi(x:Class), Pi(y:Class), Pi(z:Class), (((((x, y) in R) -> ((y, x) in R)) * ((((y, x) in R) * ((x, z) in R)) -> ((y, z) in R))) -> ((((x, y) in R) * ((x, z) in R)) -> ((y, z) in R)))`
- **Constructive Proof Term:** `(λ(R:Class). (λ(x:Class). (λ(y:Class). (λ(z:Class). (λ(hSymTrans:((((x, y) ∈ R) → ((y, x) ∈ R)) × ((((y, x) ∈ R) × ((x, z) ∈ R)) → ((y, z) ∈ R)))). (λ(hPair:(((x, y) ∈ R) × ((x, z) ∈ R))). (snd(hSymTrans) ⟨(fst(hSymTrans) fst(hPair)), snd(hPair)⟩)))))))`

### NBG-145 `thm_forall_implication_conjunction_merging` (Derived)

- **Identifier:** `thm_forall_implication_conjunction_merging` (`NBG-145`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), Π(C:Class), (((Π(X:Class), ((X ∈ A) → (X ∈ B))) × (Π(X:Class), ((X ∈ A) → (X ∈ C)))) → Π(X:Class), ((X ∈ A) → ((X ∈ B) × (X ∈ C))))`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), Pi(C:Class), (((Pi(X:Class), ((X in A) -> (X in B))) * (Pi(X:Class), ((X in A) -> (X in C)))) -> Pi(X:Class), ((X in A) -> ((X in B) * (X in C))))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(B:Class). (λ(C:Class). (λ(hBoth:((Π(X:Class), ((X ∈ A) → (X ∈ B))) × (Π(X:Class), ((X ∈ A) → (X ∈ C))))). (λ(X:Class). (λ(hxA:(X ∈ A)). ⟨((fst(hBoth) X) hxA), ((snd(hBoth) X) hxA)⟩))))))`

### NBG-146 `thm_forall_conjunction_implication_distribution` (Derived)

- **Identifier:** `thm_forall_conjunction_implication_distribution` (`NBG-146`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), Π(C:Class), Π(D:Class), (((Π(X:Class), (((X ∈ A) × (X ∈ B)) → (X ∈ C))) × (Π(X:Class), ((X ∈ D) → ((X ∈ A) × (X ∈ B))))) → Π(X:Class), ((X ∈ D) → (X ∈ C)))`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), Pi(C:Class), Pi(D:Class), (((Pi(X:Class), (((X in A) * (X in B)) -> (X in C))) * (Pi(X:Class), ((X in D) -> ((X in A) * (X in B))))) -> Pi(X:Class), ((X in D) -> (X in C)))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(B:Class). (λ(C:Class). (λ(D:Class). (λ(h:((Π(X:Class), (((X ∈ A) × (X ∈ B)) → (X ∈ C))) × (Π(X:Class), ((X ∈ D) → ((X ∈ A) × (X ∈ B)))))). (λ(X:Class). (λ(hxD:(X ∈ D)). ((fst(h) X) ((snd(h) X) hxD)))))))))`

### NBG-147 `thm_dunaev_pair_converse_involutive_equivalence` (Derived)

- **Identifier:** `thm_dunaev_pair_converse_involutive_equivalence` (`NBG-147`, kind: `Derived`)
- **Statement (Unicode):** `Π(R:Class), Π(x:Class), Π(y:Class), (((((x, y) ∈ R) → ((y, x) ∈ RelConverse(R))) × (((y, x) ∈ RelConverse(R)) → ((x, y) ∈ RelConverse(RelConverse(R))))) → (((x, y) ∈ R) → ((x, y) ∈ RelConverse(RelConverse(R)))))`
- **Statement (ANSII):** `Pi(R:Class), Pi(x:Class), Pi(y:Class), (((((x, y) in R) -> ((y, x) in RelConverse(R))) * (((y, x) in RelConverse(R)) -> ((x, y) in RelConverse(RelConverse(R))))) -> (((x, y) in R) -> ((x, y) in RelConverse(RelConverse(R)))))`
- **Constructive Proof Term:** `(λ(R:Class). (λ(x:Class). (λ(y:Class). (λ(h:((((x, y) ∈ R) → ((y, x) ∈ RelConverse(R))) × (((y, x) ∈ RelConverse(R)) → ((x, y) ∈ RelConverse(RelConverse(R)))))). (λ(hxy:((x, y) ∈ R)). (snd(h) (fst(h) hxy)))))))`

### NBG-148 `thm_subclass_antitone_complement_contraposition` (Derived)

- **Identifier:** `thm_subclass_antitone_complement_contraposition` (`NBG-148`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), Π(A:Class), Π(B:Class), ((((x ∈ A) → (x ∈ B)) × (((x ∈ B) → 𝟘) × (x ∈ A))) → 𝟘)`
- **Statement (ANSII):** `Pi(x:Class), Pi(A:Class), Pi(B:Class), ((((x in A) -> (x in B)) * (((x in B) -> Void) * (x in A))) -> Void)`
- **Constructive Proof Term:** `(λ(x:Class). (λ(A:Class). (λ(B:Class). (λ(h:(((x ∈ A) → (x ∈ B)) × (((x ∈ B) → 𝟘) × (x ∈ A)))). (fst(snd(h)) (fst(h) snd(snd(h))))))))`

### NBG-149 `thm_binary_relation_field_membership_introduction` (Derived)

- **Identifier:** `thm_binary_relation_field_membership_introduction` (`NBG-149`, kind: `Derived`)
- **Statement (Unicode):** `Π(R:Class), Π(x:Class), Π(y:Class), (((((x, y) ∈ R) → ((x ∈ Dom(R)) × (y ∈ Ran(R)))) × ((x, y) ∈ R)) → ((Π(C:Prop), (((x ∈ Dom(R)) → C) → (((x ∈ Ran(R)) → C) → C))) × (Π(C:Prop), (((y ∈ Dom(R)) → C) → (((y ∈ Ran(R)) → C) → C)))))`
- **Statement (ANSII):** `Pi(R:Class), Pi(x:Class), Pi(y:Class), (((((x, y) in R) -> ((x in Dom(R)) * (y in Ran(R)))) * ((x, y) in R)) -> ((Pi(C:Prop), (((x in Dom(R)) -> C) -> (((x in Ran(R)) -> C) -> C))) * (Pi(C:Prop), (((y in Dom(R)) -> C) -> (((y in Ran(R)) -> C) -> C)))))`
- **Constructive Proof Term:** `(λ(R:Class). (λ(x:Class). (λ(y:Class). (λ(h:((((x, y) ∈ R) → ((x ∈ Dom(R)) × (y ∈ Ran(R)))) × ((x, y) ∈ R))). ⟨(λ(C:Prop). (λ(fL:((x ∈ Dom(R)) → C)). (λ(fR:((x ∈ Ran(R)) → C)). (fL fst((fst(h) snd(h))))))), (λ(C:Prop). (λ(gL:((y ∈ Dom(R)) → C)). (λ(gR:((y ∈ Ran(R)) → C)). (gR snd((fst(h) snd(h)))))))⟩))))`

### NBG-150 `thm_universal_subclass_antisymmetry_witness` (Derived)

- **Identifier:** `thm_universal_subclass_antisymmetry_witness` (`NBG-150`, kind: `Derived`)
- **Statement (Unicode):** `Π(R:Class), Π(A:Class), (((Π(x:Class), Π(y:Class), (((x ∈ A) × ((x, y) ∈ R)) → (y ∈ A))) × (Π(x:Class), ((x, x) ∈ R))) → Π(x:Class), ((x ∈ A) → ((x ∈ A) × ((x, x) ∈ R))))`
- **Statement (ANSII):** `Pi(R:Class), Pi(A:Class), (((Pi(x:Class), Pi(y:Class), (((x in A) * ((x, y) in R)) -> (y in A))) * (Pi(x:Class), ((x, x) in R))) -> Pi(x:Class), ((x in A) -> ((x in A) * ((x, x) in R))))`
- **Constructive Proof Term:** `(λ(R:Class). (λ(A:Class). (λ(hSatRefl:((Π(x:Class), Π(y:Class), (((x ∈ A) × ((x, y) ∈ R)) → (y ∈ A))) × (Π(x:Class), ((x, x) ∈ R)))). (λ(x:Class). (λ(hxA:(x ∈ A)). ⟨(((fst(hSatRefl) x) x) ⟨hxA, (snd(hSatRefl) x)⟩), (snd(hSatRefl) x)⟩)))))`

### NBG-151 `thm_dunaev_pair_diagonal_subclass_product` (Derived)

- **Identifier:** `thm_dunaev_pair_diagonal_subclass_product` (`NBG-151`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(x:Class), ((((x ∈ A) → ((x, x) ∈ DiagClass(A))) × (((x, x) ∈ DiagClass(A)) → ((x ∈ A) × (x ∈ A)))) → ((x ∈ A) → ((x ∈ A) × ((x, x) ∈ DiagClass(A)))))`
- **Statement (ANSII):** `Pi(A:Class), Pi(x:Class), ((((x in A) -> ((x, x) in DiagClass(A))) * (((x, x) in DiagClass(A)) -> ((x in A) * (x in A)))) -> ((x in A) -> ((x in A) * ((x, x) in DiagClass(A)))))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(x:Class). (λ(hDiag:(((x ∈ A) → ((x, x) ∈ DiagClass(A))) × (((x, x) ∈ DiagClass(A)) → ((x ∈ A) × (x ∈ A))))). (λ(hxA:(x ∈ A)). ⟨fst((snd(hDiag) (fst(hDiag) hxA))), (fst(hDiag) hxA)⟩))))`

### NBG-152 `thm_preorder_upper_bound_transitivity` (Derived)

- **Identifier:** `thm_preorder_upper_bound_transitivity` (`NBG-152`, kind: `Derived`)
- **Statement (Unicode):** `Π(R:Class), Π(a:Class), Π(b:Class), Π(c:Class), Π(d:Class), ((Π(x:Class), Π(y:Class), Π(z:Class), ((((x, y) ∈ R) × ((y, z) ∈ R)) → ((x, z) ∈ R))) → (((((a, b) ∈ R) × ((c, b) ∈ R)) × ((b, d) ∈ R)) → (((a, d) ∈ R) × ((c, d) ∈ R))))`
- **Statement (ANSII):** `Pi(R:Class), Pi(a:Class), Pi(b:Class), Pi(c:Class), Pi(d:Class), ((Pi(x:Class), Pi(y:Class), Pi(z:Class), ((((x, y) in R) * ((y, z) in R)) -> ((x, z) in R))) -> (((((a, b) in R) * ((c, b) in R)) * ((b, d) in R)) -> (((a, d) in R) * ((c, d) in R))))`
- **Constructive Proof Term:** `(λ(R:Class). (λ(a:Class). (λ(b:Class). (λ(c:Class). (λ(d:Class). (λ(hTrans:Π(x:Class), Π(y:Class), Π(z:Class), ((((x, y) ∈ R) × ((y, z) ∈ R)) → ((x, z) ∈ R))). (λ(hUB:((((a, b) ∈ R) × ((c, b) ∈ R)) × ((b, d) ∈ R))). ⟨((((hTrans a) b) d) ⟨fst(fst(hUB)), snd(hUB)⟩), ((((hTrans c) b) d) ⟨snd(fst(hUB)), snd(hUB)⟩)⟩)))))))`

### NBG-153 `thm_preorder_lower_bound_transitivity` (Derived)

- **Identifier:** `thm_preorder_lower_bound_transitivity` (`NBG-153`, kind: `Derived`)
- **Statement (Unicode):** `Π(R:Class), Π(a:Class), Π(b:Class), Π(c:Class), Π(d:Class), ((Π(x:Class), Π(y:Class), Π(z:Class), ((((x, y) ∈ R) × ((y, z) ∈ R)) → ((x, z) ∈ R))) → ((((d, b) ∈ R) × (((b, a) ∈ R) × ((b, c) ∈ R))) → (((d, a) ∈ R) × ((d, c) ∈ R))))`
- **Statement (ANSII):** `Pi(R:Class), Pi(a:Class), Pi(b:Class), Pi(c:Class), Pi(d:Class), ((Pi(x:Class), Pi(y:Class), Pi(z:Class), ((((x, y) in R) * ((y, z) in R)) -> ((x, z) in R))) -> ((((d, b) in R) * (((b, a) in R) * ((b, c) in R))) -> (((d, a) in R) * ((d, c) in R))))`
- **Constructive Proof Term:** `(λ(R:Class). (λ(a:Class). (λ(b:Class). (λ(c:Class). (λ(d:Class). (λ(hTrans:Π(x:Class), Π(y:Class), Π(z:Class), ((((x, y) ∈ R) × ((y, z) ∈ R)) → ((x, z) ∈ R))). (λ(hLB:(((d, b) ∈ R) × (((b, a) ∈ R) × ((b, c) ∈ R)))). ⟨((((hTrans d) b) a) ⟨fst(hLB), fst(snd(hLB))⟩), ((((hTrans d) b) c) ⟨fst(hLB), snd(snd(hLB))⟩)⟩)))))))`

### NBG-154 `thm_functional_graph_uniqueness_contraposition` (Derived)

- **Identifier:** `thm_functional_graph_uniqueness_contraposition` (`NBG-154`, kind: `Derived`)
- **Statement (Unicode):** `Π(F:Class), Π(x:Class), Π(y1:Class), Π(y2:Class), ((((((x, y1) ∈ F) × ((x, y2) ∈ F)) → (y1 = y2)) × ((y1 = y2) → 𝟘)) → (((x, y1) ∈ F) → (((x, y2) ∈ F) → 𝟘)))`
- **Statement (ANSII):** `Pi(F:Class), Pi(x:Class), Pi(y1:Class), Pi(y2:Class), ((((((x, y1) in F) * ((x, y2) in F)) -> (y1 = y2)) * ((y1 = y2) -> Void)) -> (((x, y1) in F) -> (((x, y2) in F) -> Void)))`
- **Constructive Proof Term:** `(λ(F:Class). (λ(x:Class). (λ(y1:Class). (λ(y2:Class). (λ(h:(((((x, y1) ∈ F) × ((x, y2) ∈ F)) → (y1 = y2)) × ((y1 = y2) → 𝟘))). (λ(h1:((x, y1) ∈ F)). (λ(h2:((x, y2) ∈ F)). (snd(h) (fst(h) ⟨h1, h2⟩)))))))))`

### NBG-155 `thm_injective_graph_uniqueness_contraposition` (Derived)

- **Identifier:** `thm_injective_graph_uniqueness_contraposition` (`NBG-155`, kind: `Derived`)
- **Statement (Unicode):** `Π(F:Class), Π(x1:Class), Π(x2:Class), Π(y:Class), ((((((x1, y) ∈ F) × ((x2, y) ∈ F)) → (x1 = x2)) × ((x1 = x2) → 𝟘)) → (((x1, y) ∈ F) → (((x2, y) ∈ F) → 𝟘)))`
- **Statement (ANSII):** `Pi(F:Class), Pi(x1:Class), Pi(x2:Class), Pi(y:Class), ((((((x1, y) in F) * ((x2, y) in F)) -> (x1 = x2)) * ((x1 = x2) -> Void)) -> (((x1, y) in F) -> (((x2, y) in F) -> Void)))`
- **Constructive Proof Term:** `(λ(F:Class). (λ(x1:Class). (λ(x2:Class). (λ(y:Class). (λ(h:(((((x1, y) ∈ F) × ((x2, y) ∈ F)) → (x1 = x2)) × ((x1 = x2) → 𝟘))). (λ(h1:((x1, y) ∈ F)). (λ(h2:((x2, y) ∈ F)). (snd(h) (fst(h) ⟨h1, h2⟩)))))))))`

### NBG-156 `thm_galois_connection_adjunction_modus_ponens` (Derived)

- **Identifier:** `thm_galois_connection_adjunction_modus_ponens` (`NBG-156`, kind: `Derived`)
- **Statement (Unicode):** `Π(LeqA:Class), Π(LeqB:Class), Π(F:Class), Π(G:Class), Π(x:Class), Π(y:Class), ((((((x, y) ∈ LeqA) → ((ValOf(F, x), y) ∈ LeqB)) × (((ValOf(F, x), y) ∈ LeqB) → ((x, ValOf(G, y)) ∈ LeqA))) × ((x, y) ∈ LeqA)) → ((x, ValOf(G, y)) ∈ LeqA))`
- **Statement (ANSII):** `Pi(LeqA:Class), Pi(LeqB:Class), Pi(F:Class), Pi(G:Class), Pi(x:Class), Pi(y:Class), ((((((x, y) in LeqA) -> ((ValOf(F, x), y) in LeqB)) * (((ValOf(F, x), y) in LeqB) -> ((x, ValOf(G, y)) in LeqA))) * ((x, y) in LeqA)) -> ((x, ValOf(G, y)) in LeqA))`
- **Constructive Proof Term:** `(λ(LeqA:Class). (λ(LeqB:Class). (λ(F:Class). (λ(G:Class). (λ(x:Class). (λ(y:Class). (λ(h:(((((x, y) ∈ LeqA) → ((ValOf(F, x), y) ∈ LeqB)) × (((ValOf(F, x), y) ∈ LeqB) → ((x, ValOf(G, y)) ∈ LeqA))) × ((x, y) ∈ LeqA))). (snd(fst(h)) (fst(fst(h)) snd(h))))))))))`

### NBG-157 `thm_closure_operator_extensivity_idempotence_step` (Derived)

- **Identifier:** `thm_closure_operator_extensivity_idempotence_step` (`NBG-157`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), Π(A:Class), ((((x ∈ A) → (x ∈ ClosureOp(A))) × ((x ∈ ClosureOp(ClosureOp(A))) → (x ∈ ClosureOp(A)))) → ((Π(C:Prop), (((x ∈ A) → C) → (((x ∈ ClosureOp(ClosureOp(A))) → C) → C))) → (x ∈ ClosureOp(A))))`
- **Statement (ANSII):** `Pi(x:Class), Pi(A:Class), ((((x in A) -> (x in ClosureOp(A))) * ((x in ClosureOp(ClosureOp(A))) -> (x in ClosureOp(A)))) -> ((Pi(C:Prop), (((x in A) -> C) -> (((x in ClosureOp(ClosureOp(A))) -> C) -> C))) -> (x in ClosureOp(A))))`
- **Constructive Proof Term:** `(λ(x:Class). (λ(A:Class). (λ(h:(((x ∈ A) → (x ∈ ClosureOp(A))) × ((x ∈ ClosureOp(ClosureOp(A))) → (x ∈ ClosureOp(A))))). (λ(hOr:Π(C:Prop), (((x ∈ A) → C) → (((x ∈ ClosureOp(ClosureOp(A))) → C) → C))). (((hOr (x ∈ ClosureOp(A))) fst(h)) snd(h))))))`

### NBG-158 `thm_interior_operator_contraction_idempotence_step` (Derived)

- **Identifier:** `thm_interior_operator_contraction_idempotence_step` (`NBG-158`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), Π(A:Class), ((((x ∈ InteriorOp(A)) → (x ∈ A)) × ((x ∈ InteriorOp(A)) → (x ∈ InteriorOp(InteriorOp(A))))) → ((x ∈ InteriorOp(A)) → ((x ∈ A) × (x ∈ InteriorOp(InteriorOp(A))))))`
- **Statement (ANSII):** `Pi(x:Class), Pi(A:Class), ((((x in InteriorOp(A)) -> (x in A)) * ((x in InteriorOp(A)) -> (x in InteriorOp(InteriorOp(A))))) -> ((x in InteriorOp(A)) -> ((x in A) * (x in InteriorOp(InteriorOp(A))))))`
- **Constructive Proof Term:** `(λ(x:Class). (λ(A:Class). (λ(h:(((x ∈ InteriorOp(A)) → (x ∈ A)) × ((x ∈ InteriorOp(A)) → (x ∈ InteriorOp(InteriorOp(A)))))). (λ(hx:(x ∈ InteriorOp(A))). ⟨(fst(h) hx), (snd(h) hx)⟩))))`

### NBG-159 `thm_dunaev_pair_filter_upward_closure_intersection` (Derived)

- **Identifier:** `thm_dunaev_pair_filter_upward_closure_intersection` (`NBG-159`, kind: `Derived`)
- **Statement (Unicode):** `Π(F:Class), Π(Sub:Class), Π(x:Class), Π(y:Class), Π(w:Class), (((((x ∈ F) × (y ∈ F)) → ((x ∩ y) ∈ F)) × ((((x ∩ y) ∈ F) × (((x ∩ y), w) ∈ Sub)) → (w ∈ F))) → ((((x ∈ F) × (y ∈ F)) × (((x ∩ y), w) ∈ Sub)) → (w ∈ F)))`
- **Statement (ANSII):** `Pi(F:Class), Pi(Sub:Class), Pi(x:Class), Pi(y:Class), Pi(w:Class), (((((x in F) * (y in F)) -> ((x n* y) in F)) * ((((x n* y) in F) * (((x n* y), w) in Sub)) -> (w in F))) -> ((((x in F) * (y in F)) * (((x n* y), w) in Sub)) -> (w in F)))`
- **Constructive Proof Term:** `(λ(F:Class). (λ(Sub:Class). (λ(x:Class). (λ(y:Class). (λ(w:Class). (λ(h:((((x ∈ F) × (y ∈ F)) → ((x ∩ y) ∈ F)) × ((((x ∩ y) ∈ F) × (((x ∩ y), w) ∈ Sub)) → (w ∈ F)))). (λ(hIn:(((x ∈ F) × (y ∈ F)) × (((x ∩ y), w) ∈ Sub))). (snd(h) ⟨(fst(h) fst(hIn)), snd(hIn)⟩))))))))`

### NBG-160 `thm_ideal_downward_closure_union` (Derived)

- **Identifier:** `thm_ideal_downward_closure_union` (`NBG-160`, kind: `Derived`)
- **Statement (Unicode):** `Π(I:Class), Π(Sub:Class), Π(x:Class), Π(y:Class), Π(v:Class), (((((x ∈ I) × (y ∈ I)) → ((x ∪ y) ∈ I)) × ((((v, (x ∪ y)) ∈ Sub) × ((x ∪ y) ∈ I)) → (v ∈ I))) → ((((x ∈ I) × (y ∈ I)) × ((v, (x ∪ y)) ∈ Sub)) → (v ∈ I)))`
- **Statement (ANSII):** `Pi(I:Class), Pi(Sub:Class), Pi(x:Class), Pi(y:Class), Pi(v:Class), (((((x in I) * (y in I)) -> ((x u+ y) in I)) * ((((v, (x u+ y)) in Sub) * ((x u+ y) in I)) -> (v in I))) -> ((((x in I) * (y in I)) * ((v, (x u+ y)) in Sub)) -> (v in I)))`
- **Constructive Proof Term:** `(λ(I:Class). (λ(Sub:Class). (λ(x:Class). (λ(y:Class). (λ(v:Class). (λ(h:((((x ∈ I) × (y ∈ I)) → ((x ∪ y) ∈ I)) × ((((v, (x ∪ y)) ∈ Sub) × ((x ∪ y) ∈ I)) → (v ∈ I)))). (λ(hIn:(((x ∈ I) × (y ∈ I)) × ((v, (x ∪ y)) ∈ Sub))). (snd(h) ⟨snd(hIn), (fst(h) fst(hIn))⟩))))))))`

### NBG-161 `thm_complete_lattice_supremum_least_upper_bound` (Derived)

- **Identifier:** `thm_complete_lattice_supremum_least_upper_bound` (`NBG-161`, kind: `Derived`)
- **Statement (Unicode):** `Π(UB:Class), Π(Leq:Class), Π(A:Class), Π(x:Class), (((x ∈ UB) × (Π(Z:Class), ((Z ∈ UB) → ((LatticeSup(Leq, A), Z) ∈ Leq)))) → ((LatticeSup(Leq, A), x) ∈ Leq))`
- **Statement (ANSII):** `Pi(UB:Class), Pi(Leq:Class), Pi(A:Class), Pi(x:Class), (((x in UB) * (Pi(Z:Class), ((Z in UB) -> ((LatticeSup(Leq, A), Z) in Leq)))) -> ((LatticeSup(Leq, A), x) in Leq))`
- **Constructive Proof Term:** `(λ(UB:Class). (λ(Leq:Class). (λ(A:Class). (λ(x:Class). (λ(h:((x ∈ UB) × (Π(Z:Class), ((Z ∈ UB) → ((LatticeSup(Leq, A), Z) ∈ Leq))))). ((snd(h) x) fst(h)))))))`

### NBG-162 `thm_complete_lattice_infimum_greatest_lower_bound` (Derived)

- **Identifier:** `thm_complete_lattice_infimum_greatest_lower_bound` (`NBG-162`, kind: `Derived`)
- **Statement (Unicode):** `Π(LB:Class), Π(Leq:Class), Π(A:Class), Π(x:Class), (((x ∈ LB) × (Π(Z:Class), ((Z ∈ LB) → ((Z, LatticeInf(Leq, A)) ∈ Leq)))) → ((x, LatticeInf(Leq, A)) ∈ Leq))`
- **Statement (ANSII):** `Pi(LB:Class), Pi(Leq:Class), Pi(A:Class), Pi(x:Class), (((x in LB) * (Pi(Z:Class), ((Z in LB) -> ((Z, LatticeInf(Leq, A)) in Leq)))) -> ((x, LatticeInf(Leq, A)) in Leq))`
- **Constructive Proof Term:** `(λ(LB:Class). (λ(Leq:Class). (λ(A:Class). (λ(x:Class). (λ(h:((x ∈ LB) × (Π(Z:Class), ((Z ∈ LB) → ((Z, LatticeInf(Leq, A)) ∈ Leq))))). ((snd(h) x) fst(h)))))))`

### NBG-163 `thm_monotone_operator_post_fixed_point_closure` (Derived)

- **Identifier:** `thm_monotone_operator_post_fixed_point_closure` (`NBG-163`, kind: `Derived`)
- **Statement (Unicode):** `Π(Leq:Class), Π(F:Class), Π(x:Class), (((((x, ValOf(F, x)) ∈ Leq) → ((ValOf(F, x), ValOf(F, ValOf(F, x))) ∈ Leq)) × ((((x, ValOf(F, x)) ∈ Leq) × ((ValOf(F, x), ValOf(F, ValOf(F, x))) ∈ Leq)) → ((x, ValOf(F, ValOf(F, x))) ∈ Leq))) → (((x, ValOf(F, x)) ∈ Leq) → ((x, ValOf(F, ValOf(F, x))) ∈ Leq)))`
- **Statement (ANSII):** `Pi(Leq:Class), Pi(F:Class), Pi(x:Class), (((((x, ValOf(F, x)) in Leq) -> ((ValOf(F, x), ValOf(F, ValOf(F, x))) in Leq)) * ((((x, ValOf(F, x)) in Leq) * ((ValOf(F, x), ValOf(F, ValOf(F, x))) in Leq)) -> ((x, ValOf(F, ValOf(F, x))) in Leq))) -> (((x, ValOf(F, x)) in Leq) -> ((x, ValOf(F, ValOf(F, x))) in Leq)))`
- **Constructive Proof Term:** `(λ(Leq:Class). (λ(F:Class). (λ(x:Class). (λ(h:((((x, ValOf(F, x)) ∈ Leq) → ((ValOf(F, x), ValOf(F, ValOf(F, x))) ∈ Leq)) × ((((x, ValOf(F, x)) ∈ Leq) × ((ValOf(F, x), ValOf(F, ValOf(F, x))) ∈ Leq)) → ((x, ValOf(F, ValOf(F, x))) ∈ Leq)))). (λ(hxfx:((x, ValOf(F, x)) ∈ Leq)). (snd(h) ⟨hxfx, (fst(h) hxfx)⟩))))))`

### NBG-164 `thm_well_founded_inductive_heredity_step` (Derived)

- **Identifier:** `thm_well_founded_inductive_heredity_step` (`NBG-164`, kind: `Derived`)
- **Statement (Unicode):** `Π(R:Class), Π(P:Class), Π(x:Class), (((Π(Y:Class), (((Y, x) ∈ R) → (Y ∈ P))) × ((Π(Y:Class), (((Y, x) ∈ R) → (Y ∈ P))) → (x ∈ P))) → (x ∈ P))`
- **Statement (ANSII):** `Pi(R:Class), Pi(P:Class), Pi(x:Class), (((Pi(Y:Class), (((Y, x) in R) -> (Y in P))) * ((Pi(Y:Class), (((Y, x) in R) -> (Y in P))) -> (x in P))) -> (x in P))`
- **Constructive Proof Term:** `(λ(R:Class). (λ(P:Class). (λ(x:Class). (λ(h:((Π(Y:Class), (((Y, x) ∈ R) → (Y ∈ P))) × ((Π(Y:Class), (((Y, x) ∈ R) → (Y ∈ P))) → (x ∈ P)))). (snd(h) fst(h))))))`

### NBG-165 `thm_dunaev_pair_equivalence_quotient_canonical_map` (Derived)

- **Identifier:** `thm_dunaev_pair_equivalence_quotient_canonical_map` (`NBG-165`, kind: `Derived`)
- **Statement (Unicode):** `Π(Eq:Class), Π(x:Class), Π(y:Class), (((((x, y) ∈ Eq) → ((x ∈ EquivClass(Eq, y)) × (y ∈ EquivClass(Eq, x)))) × ((x, y) ∈ Eq)) → ((y ∈ EquivClass(Eq, x)) × (x ∈ EquivClass(Eq, y))))`
- **Statement (ANSII):** `Pi(Eq:Class), Pi(x:Class), Pi(y:Class), (((((x, y) in Eq) -> ((x in EquivClass(Eq, y)) * (y in EquivClass(Eq, x)))) * ((x, y) in Eq)) -> ((y in EquivClass(Eq, x)) * (x in EquivClass(Eq, y))))`
- **Constructive Proof Term:** `(λ(Eq:Class). (λ(x:Class). (λ(y:Class). (λ(h:((((x, y) ∈ Eq) → ((x ∈ EquivClass(Eq, y)) × (y ∈ EquivClass(Eq, x)))) × ((x, y) ∈ Eq))). ⟨snd((fst(h) snd(h))), fst((fst(h) snd(h)))⟩))))`

### NBG-166 `thm_heyting_implication_modus_ponens_internal` (Derived)

- **Identifier:** `thm_heyting_implication_modus_ponens_internal` (`NBG-166`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), Π(A:Class), Π(B:Class), Π(C:Class), ((((x ∈ A) × ((x ∈ A) → (x ∈ B))) × ((x ∈ B) → (x ∈ C))) → ((x ∈ A) × (x ∈ C)))`
- **Statement (ANSII):** `Pi(x:Class), Pi(A:Class), Pi(B:Class), Pi(C:Class), ((((x in A) * ((x in A) -> (x in B))) * ((x in B) -> (x in C))) -> ((x in A) * (x in C)))`
- **Constructive Proof Term:** `(λ(x:Class). (λ(A:Class). (λ(B:Class). (λ(C:Class). (λ(h:(((x ∈ A) × ((x ∈ A) → (x ∈ B))) × ((x ∈ B) → (x ∈ C)))). ⟨fst(fst(h)), (snd(h) (snd(fst(h)) fst(fst(h))))⟩)))))`

### NBG-167 `thm_heyting_implication_exportation_witness` (Derived)

- **Identifier:** `thm_heyting_implication_exportation_witness` (`NBG-167`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), Π(A:Class), Π(B:Class), Π(C:Class), ((((x ∈ A) × (x ∈ B)) → (x ∈ C)) → ((x ∈ A) → ((x ∈ B) → (x ∈ C))))`
- **Statement (ANSII):** `Pi(x:Class), Pi(A:Class), Pi(B:Class), Pi(C:Class), ((((x in A) * (x in B)) -> (x in C)) -> ((x in A) -> ((x in B) -> (x in C))))`
- **Constructive Proof Term:** `(λ(x:Class). (λ(A:Class). (λ(B:Class). (λ(C:Class). (λ(h:(((x ∈ A) × (x ∈ B)) → (x ∈ C))). (λ(hxA:(x ∈ A)). (λ(hxB:(x ∈ B)). (h ⟨hxA, hxB⟩))))))))`

### NBG-168 `thm_heyting_implication_importation_witness` (Derived)

- **Identifier:** `thm_heyting_implication_importation_witness` (`NBG-168`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), Π(A:Class), Π(B:Class), Π(C:Class), (((x ∈ A) → ((x ∈ B) → (x ∈ C))) → (((x ∈ A) × (x ∈ B)) → (x ∈ C)))`
- **Statement (ANSII):** `Pi(x:Class), Pi(A:Class), Pi(B:Class), Pi(C:Class), (((x in A) -> ((x in B) -> (x in C))) -> (((x in A) * (x in B)) -> (x in C)))`
- **Constructive Proof Term:** `(λ(x:Class). (λ(A:Class). (λ(B:Class). (λ(C:Class). (λ(h:((x ∈ A) → ((x ∈ B) → (x ∈ C)))). (λ(hAB:((x ∈ A) × (x ∈ B))). ((h fst(hAB)) snd(hAB))))))))`

### NBG-169 `thm_dunaev_pair_lexicographic_order_first_branch` (Derived)

- **Identifier:** `thm_dunaev_pair_lexicographic_order_first_branch` (`NBG-169`, kind: `Derived`)
- **Statement (Unicode):** `Π(LtA:Class), Π(LtB:Class), Π(x1:Class), Π(x2:Class), Π(y1:Class), Π(y2:Class), (((x1, x2) ∈ LtA) → Π(C:Prop), ((((x1, x2) ∈ LtA) → C) → ((((x1 = x2) × ((y1, y2) ∈ LtB)) → C) → C)))`
- **Statement (ANSII):** `Pi(LtA:Class), Pi(LtB:Class), Pi(x1:Class), Pi(x2:Class), Pi(y1:Class), Pi(y2:Class), (((x1, x2) in LtA) -> Pi(C:Prop), ((((x1, x2) in LtA) -> C) -> ((((x1 = x2) * ((y1, y2) in LtB)) -> C) -> C)))`
- **Constructive Proof Term:** `(λ(LtA:Class). (λ(LtB:Class). (λ(x1:Class). (λ(x2:Class). (λ(y1:Class). (λ(y2:Class). (λ(hLtX:((x1, x2) ∈ LtA)). (λ(C:Prop). (λ(fL:(((x1, x2) ∈ LtA) → C)). (λ(fR:(((x1 = x2) × ((y1, y2) ∈ LtB)) → C)). (fL hLtX)))))))))))`

### NBG-170 `thm_dunaev_pair_lexicographic_order_second_branch` (Derived)

- **Identifier:** `thm_dunaev_pair_lexicographic_order_second_branch` (`NBG-170`, kind: `Derived`)
- **Statement (Unicode):** `Π(LtA:Class), Π(LtB:Class), Π(x1:Class), Π(x2:Class), Π(y1:Class), Π(y2:Class), (((x1 = x2) × ((y1, y2) ∈ LtB)) → Π(C:Prop), ((((x1, x2) ∈ LtA) → C) → ((((x1 = x2) × ((y1, y2) ∈ LtB)) → C) → C)))`
- **Statement (ANSII):** `Pi(LtA:Class), Pi(LtB:Class), Pi(x1:Class), Pi(x2:Class), Pi(y1:Class), Pi(y2:Class), (((x1 = x2) * ((y1, y2) in LtB)) -> Pi(C:Prop), ((((x1, x2) in LtA) -> C) -> ((((x1 = x2) * ((y1, y2) in LtB)) -> C) -> C)))`
- **Constructive Proof Term:** `(λ(LtA:Class). (λ(LtB:Class). (λ(x1:Class). (λ(x2:Class). (λ(y1:Class). (λ(y2:Class). (λ(hR:((x1 = x2) × ((y1, y2) ∈ LtB))). (λ(C:Prop). (λ(fL:(((x1, x2) ∈ LtA) → C)). (λ(fR:(((x1 = x2) × ((y1, y2) ∈ LtB)) → C)). (fR hR)))))))))))`

### NBG-171 `thm_dunaev_pair_lexicographic_irreflexivity_step` (Derived)

- **Identifier:** `thm_dunaev_pair_lexicographic_irreflexivity_step` (`NBG-171`, kind: `Derived`)
- **Statement (Unicode):** `Π(LtA:Class), Π(LtB:Class), Π(x:Class), Π(y:Class), ((((Π(C:Prop), ((((x, x) ∈ LtA) → C) → ((((x = x) × ((y, y) ∈ LtB)) → C) → C))) × (((x, x) ∈ LtA) → 𝟘)) × (((y, y) ∈ LtB) → 𝟘)) → 𝟘)`
- **Statement (ANSII):** `Pi(LtA:Class), Pi(LtB:Class), Pi(x:Class), Pi(y:Class), ((((Pi(C:Prop), ((((x, x) in LtA) -> C) -> ((((x = x) * ((y, y) in LtB)) -> C) -> C))) * (((x, x) in LtA) -> Void)) * (((y, y) in LtB) -> Void)) -> Void)`
- **Constructive Proof Term:** `(λ(LtA:Class). (λ(LtB:Class). (λ(x:Class). (λ(y:Class). (λ(h:(((Π(C:Prop), ((((x, x) ∈ LtA) → C) → ((((x = x) × ((y, y) ∈ LtB)) → C) → C))) × (((x, x) ∈ LtA) → 𝟘)) × (((y, y) ∈ LtB) → 𝟘))). (((fst(fst(h)) 𝟘) snd(fst(h))) (λ(hR:((x = x) × ((y, y) ∈ LtB))). (snd(h) snd(hR)))))))))`

### NBG-172 `thm_directed_class_upper_bound_pair_witness` (Derived)

- **Identifier:** `thm_directed_class_upper_bound_pair_witness` (`NBG-172`, kind: `Derived`)
- **Statement (Unicode):** `Π(D:Class), Π(Leq:Class), Π(x:Class), Π(y:Class), Π(z:Class), (((((x ∈ D) × (y ∈ D)) → (((x, z) ∈ Leq) × ((y, z) ∈ Leq))) × ((x ∈ D) × (y ∈ D))) → (((x, z) ∈ Leq) × ((y, z) ∈ Leq)))`
- **Statement (ANSII):** `Pi(D:Class), Pi(Leq:Class), Pi(x:Class), Pi(y:Class), Pi(z:Class), (((((x in D) * (y in D)) -> (((x, z) in Leq) * ((y, z) in Leq))) * ((x in D) * (y in D))) -> (((x, z) in Leq) * ((y, z) in Leq)))`
- **Constructive Proof Term:** `(λ(D:Class). (λ(Leq:Class). (λ(x:Class). (λ(y:Class). (λ(z:Class). (λ(h:((((x ∈ D) × (y ∈ D)) → (((x, z) ∈ Leq) × ((y, z) ∈ Leq))) × ((x ∈ D) × (y ∈ D)))). (fst(h) snd(h))))))))`

### NBG-173 `thm_filtered_class_lower_bound_pair_witness` (Derived)

- **Identifier:** `thm_filtered_class_lower_bound_pair_witness` (`NBG-173`, kind: `Derived`)
- **Statement (Unicode):** `Π(F:Class), Π(Leq:Class), Π(x:Class), Π(y:Class), Π(z:Class), (((((x ∈ F) × (y ∈ F)) → (((z, x) ∈ Leq) × ((z, y) ∈ Leq))) × ((x ∈ F) × (y ∈ F))) → (((z, x) ∈ Leq) × ((z, y) ∈ Leq)))`
- **Statement (ANSII):** `Pi(F:Class), Pi(Leq:Class), Pi(x:Class), Pi(y:Class), Pi(z:Class), (((((x in F) * (y in F)) -> (((z, x) in Leq) * ((z, y) in Leq))) * ((x in F) * (y in F))) -> (((z, x) in Leq) * ((z, y) in Leq)))`
- **Constructive Proof Term:** `(λ(F:Class). (λ(Leq:Class). (λ(x:Class). (λ(y:Class). (λ(z:Class). (λ(h:((((x ∈ F) × (y ∈ F)) → (((z, x) ∈ Leq) × ((z, y) ∈ Leq))) × ((x ∈ F) × (y ∈ F)))). (fst(h) snd(h))))))))`

### NBG-174 `thm_coinitial_subclass_transitivity_witness` (Derived)

- **Identifier:** `thm_coinitial_subclass_transitivity_witness` (`NBG-174`, kind: `Derived`)
- **Statement (Unicode):** `Π(Leq:Class), Π(C1:Class), Π(x:Class), Π(y:Class), Π(z:Class), (((((x, y) ∈ Leq) × ((y, z) ∈ Leq)) × ((((x, y) ∈ Leq) × ((y, z) ∈ Leq)) → ((x ∈ C1) × ((x, z) ∈ Leq)))) → ((x ∈ C1) × ((x, z) ∈ Leq)))`
- **Statement (ANSII):** `Pi(Leq:Class), Pi(C1:Class), Pi(x:Class), Pi(y:Class), Pi(z:Class), (((((x, y) in Leq) * ((y, z) in Leq)) * ((((x, y) in Leq) * ((y, z) in Leq)) -> ((x in C1) * ((x, z) in Leq)))) -> ((x in C1) * ((x, z) in Leq)))`
- **Constructive Proof Term:** `(λ(Leq:Class). (λ(C1:Class). (λ(x:Class). (λ(y:Class). (λ(z:Class). (λ(h:((((x, y) ∈ Leq) × ((y, z) ∈ Leq)) × ((((x, y) ∈ Leq) × ((y, z) ∈ Leq)) → ((x ∈ C1) × ((x, z) ∈ Leq))))). (snd(h) fst(h))))))))`

### NBG-175 `thm_cofinal_subclass_transitivity_witness` (Derived)

- **Identifier:** `thm_cofinal_subclass_transitivity_witness` (`NBG-175`, kind: `Derived`)
- **Statement (Unicode):** `Π(Leq:Class), Π(C2:Class), Π(x:Class), Π(y:Class), Π(z:Class), (((((x, y) ∈ Leq) × ((y, z) ∈ Leq)) × ((((x, y) ∈ Leq) × ((y, z) ∈ Leq)) → ((z ∈ C2) × ((x, z) ∈ Leq)))) → ((z ∈ C2) × ((x, z) ∈ Leq)))`
- **Statement (ANSII):** `Pi(Leq:Class), Pi(C2:Class), Pi(x:Class), Pi(y:Class), Pi(z:Class), (((((x, y) in Leq) * ((y, z) in Leq)) * ((((x, y) in Leq) * ((y, z) in Leq)) -> ((z in C2) * ((x, z) in Leq)))) -> ((z in C2) * ((x, z) in Leq)))`
- **Constructive Proof Term:** `(λ(Leq:Class). (λ(C2:Class). (λ(x:Class). (λ(y:Class). (λ(z:Class). (λ(h:((((x, y) ∈ Leq) × ((y, z) ∈ Leq)) × ((((x, y) ∈ Leq) × ((y, z) ∈ Leq)) → ((z ∈ C2) × ((x, z) ∈ Leq))))). (snd(h) fst(h))))))))`

### NBG-176 `thm_boolean_algebra_complement_uniqueness_forward` (Derived)

- **Identifier:** `thm_boolean_algebra_complement_uniqueness_forward` (`NBG-176`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), Π(A:Class), Π(B1:Class), Π(B2:Class), ((((x ∈ B1) → Π(C:Prop), (((x ∈ A) → C) → (((x ∈ B2) → C) → C))) × (((x ∈ B1) × (x ∈ A)) → 𝟘)) → ((x ∈ B1) → (x ∈ B2)))`
- **Statement (ANSII):** `Pi(x:Class), Pi(A:Class), Pi(B1:Class), Pi(B2:Class), ((((x in B1) -> Pi(C:Prop), (((x in A) -> C) -> (((x in B2) -> C) -> C))) * (((x in B1) * (x in A)) -> Void)) -> ((x in B1) -> (x in B2)))`
- **Constructive Proof Term:** `(λ(x:Class). (λ(A:Class). (λ(B1:Class). (λ(B2:Class). (λ(h:(((x ∈ B1) → Π(C:Prop), (((x ∈ A) → C) → (((x ∈ B2) → C) → C))) × (((x ∈ B1) × (x ∈ A)) → 𝟘))). (λ(hxB1:(x ∈ B1)). ((((fst(h) hxB1) (x ∈ B2)) (λ(hxA:(x ∈ A)). ax_false_elim((x ∈ B2), (snd(h) ⟨hxB1, hxA⟩)))) (λ(hxB2:(x ∈ B2)). hxB2))))))))`

### NBG-177 `thm_boolean_algebra_complement_uniqueness_backward` (Derived)

- **Identifier:** `thm_boolean_algebra_complement_uniqueness_backward` (`NBG-177`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), Π(A:Class), Π(B1:Class), Π(B2:Class), ((((x ∈ B2) → Π(C:Prop), (((x ∈ A) → C) → (((x ∈ B1) → C) → C))) × (((x ∈ B2) × (x ∈ A)) → 𝟘)) → ((x ∈ B2) → (x ∈ B1)))`
- **Statement (ANSII):** `Pi(x:Class), Pi(A:Class), Pi(B1:Class), Pi(B2:Class), ((((x in B2) -> Pi(C:Prop), (((x in A) -> C) -> (((x in B1) -> C) -> C))) * (((x in B2) * (x in A)) -> Void)) -> ((x in B2) -> (x in B1)))`
- **Constructive Proof Term:** `(λ(x:Class). (λ(A:Class). (λ(B1:Class). (λ(B2:Class). (λ(h:(((x ∈ B2) → Π(C:Prop), (((x ∈ A) → C) → (((x ∈ B1) → C) → C))) × (((x ∈ B2) × (x ∈ A)) → 𝟘))). (λ(hxB2:(x ∈ B2)). ((((fst(h) hxB2) (x ∈ B1)) (λ(hxA:(x ∈ A)). ax_false_elim((x ∈ B1), (snd(h) ⟨hxB2, hxA⟩)))) (λ(hxB1:(x ∈ B1)). hxB1))))))))`

### NBG-178 `thm_dunaev_pair_pullback_fiber_product_projection_left` (Derived)

- **Identifier:** `thm_dunaev_pair_pullback_fiber_product_projection_left` (`NBG-178`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), Π(EqC:Class), Π(f:Class), Π(g:Class), Π(x:Class), Π(y:Class), ((((x ∈ A) × (y ∈ B)) × ((ValOf(f, x), ValOf(g, y)) ∈ EqC)) → ((x ∈ A) × ((ValOf(f, x), ValOf(g, y)) ∈ EqC)))`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), Pi(EqC:Class), Pi(f:Class), Pi(g:Class), Pi(x:Class), Pi(y:Class), ((((x in A) * (y in B)) * ((ValOf(f, x), ValOf(g, y)) in EqC)) -> ((x in A) * ((ValOf(f, x), ValOf(g, y)) in EqC)))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(B:Class). (λ(EqC:Class). (λ(f:Class). (λ(g:Class). (λ(x:Class). (λ(y:Class). (λ(h:(((x ∈ A) × (y ∈ B)) × ((ValOf(f, x), ValOf(g, y)) ∈ EqC))). ⟨fst(fst(h)), snd(h)⟩))))))))`

### NBG-179 `thm_dunaev_pair_pullback_fiber_product_projection_right` (Derived)

- **Identifier:** `thm_dunaev_pair_pullback_fiber_product_projection_right` (`NBG-179`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), Π(EqC:Class), Π(f:Class), Π(g:Class), Π(x:Class), Π(y:Class), ((((x ∈ A) × (y ∈ B)) × ((ValOf(f, x), ValOf(g, y)) ∈ EqC)) → ((y ∈ B) × ((ValOf(f, x), ValOf(g, y)) ∈ EqC)))`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), Pi(EqC:Class), Pi(f:Class), Pi(g:Class), Pi(x:Class), Pi(y:Class), ((((x in A) * (y in B)) * ((ValOf(f, x), ValOf(g, y)) in EqC)) -> ((y in B) * ((ValOf(f, x), ValOf(g, y)) in EqC)))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(B:Class). (λ(EqC:Class). (λ(f:Class). (λ(g:Class). (λ(x:Class). (λ(y:Class). (λ(h:(((x ∈ A) × (y ∈ B)) × ((ValOf(f, x), ValOf(g, y)) ∈ EqC))). ⟨snd(fst(h)), snd(h)⟩))))))))`

### NBG-180 `thm_dunaev_pair_pullback_universal_mediating_pair` (Derived)

- **Identifier:** `thm_dunaev_pair_pullback_universal_mediating_pair` (`NBG-180`, kind: `Derived`)
- **Statement (Unicode):** `Π(P:Class), Π(A:Class), Π(B:Class), Π(EqC:Class), Π(f:Class), Π(g:Class), Π(u:Class), Π(x:Class), Π(y:Class), (((((u ∈ P) → (x ∈ A)) × ((u ∈ P) → (y ∈ B))) × ((u ∈ P) → ((ValOf(f, x), ValOf(g, y)) ∈ EqC))) → ((u ∈ P) → (((x ∈ A) × (y ∈ B)) × ((ValOf(f, x), ValOf(g, y)) ∈ EqC))))`
- **Statement (ANSII):** `Pi(P:Class), Pi(A:Class), Pi(B:Class), Pi(EqC:Class), Pi(f:Class), Pi(g:Class), Pi(u:Class), Pi(x:Class), Pi(y:Class), (((((u in P) -> (x in A)) * ((u in P) -> (y in B))) * ((u in P) -> ((ValOf(f, x), ValOf(g, y)) in EqC))) -> ((u in P) -> (((x in A) * (y in B)) * ((ValOf(f, x), ValOf(g, y)) in EqC))))`
- **Constructive Proof Term:** `(λ(P:Class). (λ(A:Class). (λ(B:Class). (λ(EqC:Class). (λ(f:Class). (λ(g:Class). (λ(u:Class). (λ(x:Class). (λ(y:Class). (λ(h:((((u ∈ P) → (x ∈ A)) × ((u ∈ P) → (y ∈ B))) × ((u ∈ P) → ((ValOf(f, x), ValOf(g, y)) ∈ EqC)))). (λ(huP:(u ∈ P)). ⟨⟨(fst(fst(h)) huP), (snd(fst(h)) huP)⟩, (snd(h) huP)⟩)))))))))))`

### NBG-181 `thm_equalizer_inclusion_fork_commutativity` (Derived)

- **Identifier:** `thm_equalizer_inclusion_fork_commutativity` (`NBG-181`, kind: `Derived`)
- **Statement (Unicode):** `Π(EqFG:Class), Π(A:Class), Π(DiagB:Class), Π(f:Class), Π(g:Class), Π(x:Class), (((x ∈ EqFG) → ((x ∈ A) × ((ValOf(f, x), ValOf(g, x)) ∈ DiagB))) → ((x ∈ EqFG) → ((ValOf(f, x), ValOf(g, x)) ∈ DiagB)))`
- **Statement (ANSII):** `Pi(EqFG:Class), Pi(A:Class), Pi(DiagB:Class), Pi(f:Class), Pi(g:Class), Pi(x:Class), (((x in EqFG) -> ((x in A) * ((ValOf(f, x), ValOf(g, x)) in DiagB))) -> ((x in EqFG) -> ((ValOf(f, x), ValOf(g, x)) in DiagB)))`
- **Constructive Proof Term:** `(λ(EqFG:Class). (λ(A:Class). (λ(DiagB:Class). (λ(f:Class). (λ(g:Class). (λ(x:Class). (λ(h:((x ∈ EqFG) → ((x ∈ A) × ((ValOf(f, x), ValOf(g, x)) ∈ DiagB)))). (λ(hxEq:(x ∈ EqFG)). snd((h hxEq))))))))))`

### NBG-182 `thm_equalizer_universal_factorization_uniqueness` (Derived)

- **Identifier:** `thm_equalizer_universal_factorization_uniqueness` (`NBG-182`, kind: `Derived`)
- **Statement (Unicode):** `Π(X:Class), Π(DiagA:Class), Π(h_fn:Class), Π(k_fn:Class), Π(u:Class), (((((u ∈ X) → ((ValOf(h_fn, u), ValOf(h_fn, u)) ∈ DiagA)) × (((ValOf(h_fn, u), ValOf(k_fn, u)) ∈ DiagA) → (ValOf(h_fn, u) = ValOf(k_fn, u)))) × ((u ∈ X) → ((ValOf(h_fn, u), ValOf(k_fn, u)) ∈ DiagA))) → ((u ∈ X) → (ValOf(h_fn, u) = ValOf(k_fn, u))))`
- **Statement (ANSII):** `Pi(X:Class), Pi(DiagA:Class), Pi(h_fn:Class), Pi(k_fn:Class), Pi(u:Class), (((((u in X) -> ((ValOf(h_fn, u), ValOf(h_fn, u)) in DiagA)) * (((ValOf(h_fn, u), ValOf(k_fn, u)) in DiagA) -> (ValOf(h_fn, u) = ValOf(k_fn, u)))) * ((u in X) -> ((ValOf(h_fn, u), ValOf(k_fn, u)) in DiagA))) -> ((u in X) -> (ValOf(h_fn, u) = ValOf(k_fn, u))))`
- **Constructive Proof Term:** `(λ(X:Class). (λ(DiagA:Class). (λ(h_fn:Class). (λ(k_fn:Class). (λ(u:Class). (λ(h:((((u ∈ X) → ((ValOf(h_fn, u), ValOf(h_fn, u)) ∈ DiagA)) × (((ValOf(h_fn, u), ValOf(k_fn, u)) ∈ DiagA) → (ValOf(h_fn, u) = ValOf(k_fn, u)))) × ((u ∈ X) → ((ValOf(h_fn, u), ValOf(k_fn, u)) ∈ DiagA)))). (λ(huX:(u ∈ X)). (snd(fst(h)) (snd(h) huX)))))))))`

### NBG-183 `thm_pushout_amalgamated_sum_left_injection` (Derived)

- **Identifier:** `thm_pushout_amalgamated_sum_left_injection` (`NBG-183`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(CoprodAB:Class), Π(PushoutABC:Class), Π(x:Class), ((((x ∈ A) → ((CoprodTag0, x) ∈ CoprodAB)) × (((CoprodTag0, x) ∈ CoprodAB) → ((CoprodTag0, x) ∈ PushoutABC))) → ((x ∈ A) → ((CoprodTag0, x) ∈ PushoutABC)))`
- **Statement (ANSII):** `Pi(A:Class), Pi(CoprodAB:Class), Pi(PushoutABC:Class), Pi(x:Class), ((((x in A) -> ((CoprodTag0, x) in CoprodAB)) * (((CoprodTag0, x) in CoprodAB) -> ((CoprodTag0, x) in PushoutABC))) -> ((x in A) -> ((CoprodTag0, x) in PushoutABC)))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(CoprodAB:Class). (λ(PushoutABC:Class). (λ(x:Class). (λ(h:(((x ∈ A) → ((CoprodTag0, x) ∈ CoprodAB)) × (((CoprodTag0, x) ∈ CoprodAB) → ((CoprodTag0, x) ∈ PushoutABC)))). (λ(hxA:(x ∈ A)). (snd(h) (fst(h) hxA))))))))`

### NBG-184 `thm_pushout_amalgamated_sum_right_injection` (Derived)

- **Identifier:** `thm_pushout_amalgamated_sum_right_injection` (`NBG-184`, kind: `Derived`)
- **Statement (Unicode):** `Π(B:Class), Π(CoprodAB:Class), Π(PushoutABC:Class), Π(y:Class), ((((y ∈ B) → ((CoprodTag1, y) ∈ CoprodAB)) × (((CoprodTag1, y) ∈ CoprodAB) → ((CoprodTag1, y) ∈ PushoutABC))) → ((y ∈ B) → ((CoprodTag1, y) ∈ PushoutABC)))`
- **Statement (ANSII):** `Pi(B:Class), Pi(CoprodAB:Class), Pi(PushoutABC:Class), Pi(y:Class), ((((y in B) -> ((CoprodTag1, y) in CoprodAB)) * (((CoprodTag1, y) in CoprodAB) -> ((CoprodTag1, y) in PushoutABC))) -> ((y in B) -> ((CoprodTag1, y) in PushoutABC)))`
- **Constructive Proof Term:** `(λ(B:Class). (λ(CoprodAB:Class). (λ(PushoutABC:Class). (λ(y:Class). (λ(h:(((y ∈ B) → ((CoprodTag1, y) ∈ CoprodAB)) × (((CoprodTag1, y) ∈ CoprodAB) → ((CoprodTag1, y) ∈ PushoutABC)))). (λ(hyB:(y ∈ B)). (snd(h) (fst(h) hyB))))))))`

### NBG-185 `thm_pushout_cocone_glueing_compatibility` (Derived)

- **Identifier:** `thm_pushout_cocone_glueing_compatibility` (`NBG-185`, kind: `Derived`)
- **Statement (Unicode):** `Π(C:Class), Π(PushoutABC:Class), Π(f:Class), Π(g:Class), Π(z:Class), ((((z ∈ C) → ((CoprodTag0, ValOf(f, z)) ∈ PushoutABC)) × ((z ∈ C) → ((CoprodTag1, ValOf(g, z)) ∈ PushoutABC))) → ((z ∈ C) → (((CoprodTag0, ValOf(f, z)) ∈ PushoutABC) × ((CoprodTag1, ValOf(g, z)) ∈ PushoutABC))))`
- **Statement (ANSII):** `Pi(C:Class), Pi(PushoutABC:Class), Pi(f:Class), Pi(g:Class), Pi(z:Class), ((((z in C) -> ((CoprodTag0, ValOf(f, z)) in PushoutABC)) * ((z in C) -> ((CoprodTag1, ValOf(g, z)) in PushoutABC))) -> ((z in C) -> (((CoprodTag0, ValOf(f, z)) in PushoutABC) * ((CoprodTag1, ValOf(g, z)) in PushoutABC))))`
- **Constructive Proof Term:** `(λ(C:Class). (λ(PushoutABC:Class). (λ(f:Class). (λ(g:Class). (λ(z:Class). (λ(h:(((z ∈ C) → ((CoprodTag0, ValOf(f, z)) ∈ PushoutABC)) × ((z ∈ C) → ((CoprodTag1, ValOf(g, z)) ∈ PushoutABC)))). (λ(hzC:(z ∈ C)). ⟨(fst(h) hzC), (snd(h) hzC)⟩)))))))`

### NBG-186 `thm_coequalizer_quotient_fork_commutativity` (Derived)

- **Identifier:** `thm_coequalizer_quotient_fork_commutativity` (`NBG-186`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(KerQ:Class), Π(DiagC:Class), Π(f:Class), Π(g:Class), Π(q_fn:Class), Π(x:Class), ((((x ∈ A) → ((ValOf(f, x), ValOf(g, x)) ∈ KerQ)) × (((ValOf(f, x), ValOf(g, x)) ∈ KerQ) → ((ValOf(q_fn, ValOf(f, x)), ValOf(q_fn, ValOf(g, x))) ∈ DiagC))) → ((x ∈ A) → ((ValOf(q_fn, ValOf(f, x)), ValOf(q_fn, ValOf(g, x))) ∈ DiagC)))`
- **Statement (ANSII):** `Pi(A:Class), Pi(KerQ:Class), Pi(DiagC:Class), Pi(f:Class), Pi(g:Class), Pi(q_fn:Class), Pi(x:Class), ((((x in A) -> ((ValOf(f, x), ValOf(g, x)) in KerQ)) * (((ValOf(f, x), ValOf(g, x)) in KerQ) -> ((ValOf(q_fn, ValOf(f, x)), ValOf(q_fn, ValOf(g, x))) in DiagC))) -> ((x in A) -> ((ValOf(q_fn, ValOf(f, x)), ValOf(q_fn, ValOf(g, x))) in DiagC)))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(KerQ:Class). (λ(DiagC:Class). (λ(f:Class). (λ(g:Class). (λ(q_fn:Class). (λ(x:Class). (λ(h:(((x ∈ A) → ((ValOf(f, x), ValOf(g, x)) ∈ KerQ)) × (((ValOf(f, x), ValOf(g, x)) ∈ KerQ) → ((ValOf(q_fn, ValOf(f, x)), ValOf(q_fn, ValOf(g, x))) ∈ DiagC)))). (λ(hxA:(x ∈ A)). (snd(h) (fst(h) hxA)))))))))))`

### NBG-187 `thm_coequalizer_universal_mediating_uniqueness` (Derived)

- **Identifier:** `thm_coequalizer_universal_mediating_uniqueness` (`NBG-187`, kind: `Derived`)
- **Statement (Unicode):** `Π(B:Class), Π(DiagZ:Class), Π(u_fn:Class), Π(v_fn:Class), Π(y:Class), (((((y ∈ B) → ((ValOf(u_fn, y), ValOf(v_fn, y)) ∈ DiagZ)) × (((ValOf(u_fn, y), ValOf(v_fn, y)) ∈ DiagZ) → (ValOf(u_fn, y) = ValOf(v_fn, y)))) × (y ∈ B)) → (ValOf(u_fn, y) = ValOf(v_fn, y)))`
- **Statement (ANSII):** `Pi(B:Class), Pi(DiagZ:Class), Pi(u_fn:Class), Pi(v_fn:Class), Pi(y:Class), (((((y in B) -> ((ValOf(u_fn, y), ValOf(v_fn, y)) in DiagZ)) * (((ValOf(u_fn, y), ValOf(v_fn, y)) in DiagZ) -> (ValOf(u_fn, y) = ValOf(v_fn, y)))) * (y in B)) -> (ValOf(u_fn, y) = ValOf(v_fn, y)))`
- **Constructive Proof Term:** `(λ(B:Class). (λ(DiagZ:Class). (λ(u_fn:Class). (λ(v_fn:Class). (λ(y:Class). (λ(h:((((y ∈ B) → ((ValOf(u_fn, y), ValOf(v_fn, y)) ∈ DiagZ)) × (((ValOf(u_fn, y), ValOf(v_fn, y)) ∈ DiagZ) → (ValOf(u_fn, y) = ValOf(v_fn, y)))) × (y ∈ B))). (snd(fst(h)) (fst(fst(h)) snd(h)))))))))`

### NBG-188 `thm_exponential_evaluation_beta_reduction_step` (Derived)

- **Identifier:** `thm_exponential_evaluation_beta_reduction_step` (`NBG-188`, kind: `Derived`)
- **Statement (Unicode):** `Π(DomEv:Class), Π(GraphLam:Class), Π(EqC:Class), Π(body_fn:Class), Π(f:Class), Π(x:Class), (((((f, x) ∈ DomEv) × ((f, x) ∈ GraphLam)) × ((((f, x) ∈ DomEv) × ((f, x) ∈ GraphLam)) → ((ExpEval(f, x), ValOf(body_fn, x)) ∈ EqC))) → ((ExpEval(f, x), ValOf(body_fn, x)) ∈ EqC))`
- **Statement (ANSII):** `Pi(DomEv:Class), Pi(GraphLam:Class), Pi(EqC:Class), Pi(body_fn:Class), Pi(f:Class), Pi(x:Class), (((((f, x) in DomEv) * ((f, x) in GraphLam)) * ((((f, x) in DomEv) * ((f, x) in GraphLam)) -> ((ExpEval(f, x), ValOf(body_fn, x)) in EqC))) -> ((ExpEval(f, x), ValOf(body_fn, x)) in EqC))`
- **Constructive Proof Term:** `(λ(DomEv:Class). (λ(GraphLam:Class). (λ(EqC:Class). (λ(body_fn:Class). (λ(f:Class). (λ(x:Class). (λ(h:((((f, x) ∈ DomEv) × ((f, x) ∈ GraphLam)) × ((((f, x) ∈ DomEv) × ((f, x) ∈ GraphLam)) → ((ExpEval(f, x), ValOf(body_fn, x)) ∈ EqC)))). (snd(h) fst(h)))))))))`

### NBG-189 `thm_exponential_transpose_eta_uniqueness_step` (Derived)

- **Identifier:** `thm_exponential_transpose_eta_uniqueness_step` (`NBG-189`, kind: `Derived`)
- **Statement (Unicode):** `Π(HomAB:Class), Π(EqHom:Class), Π(EqExp:Class), Π(f:Class), Π(g:Class), ((((f ∈ HomAB) × ((UncurryOp(f), g) ∈ EqHom)) × (((UncurryOp(f), g) ∈ EqHom) → ((f, CurryOp(g)) ∈ EqExp))) → ((f ∈ HomAB) → ((f, CurryOp(g)) ∈ EqExp)))`
- **Statement (ANSII):** `Pi(HomAB:Class), Pi(EqHom:Class), Pi(EqExp:Class), Pi(f:Class), Pi(g:Class), ((((f in HomAB) * ((UncurryOp(f), g) in EqHom)) * (((UncurryOp(f), g) in EqHom) -> ((f, CurryOp(g)) in EqExp))) -> ((f in HomAB) -> ((f, CurryOp(g)) in EqExp)))`
- **Constructive Proof Term:** `(λ(HomAB:Class). (λ(EqHom:Class). (λ(EqExp:Class). (λ(f:Class). (λ(g:Class). (λ(h:(((f ∈ HomAB) × ((UncurryOp(f), g) ∈ EqHom)) × (((UncurryOp(f), g) ∈ EqHom) → ((f, CurryOp(g)) ∈ EqExp)))). (λ(hfHom:(f ∈ HomAB)). (snd(h) snd(fst(h))))))))))`

### NBG-190 `thm_subobject_classifier_characteristic_pullback_iff` (Derived)

- **Identifier:** `thm_subobject_classifier_characteristic_pullback_iff` (`NBG-190`, kind: `Derived`)
- **Statement (Unicode):** `Π(SubA:Class), Π(EqOmega:Class), Π(chi_fn:Class), Π(x:Class), ((((x ∈ SubA) → ((ValOf(chi_fn, x), TrueVal) ∈ EqOmega)) × (((ValOf(chi_fn, x), TrueVal) ∈ EqOmega) → (x ∈ SubA))) → (((x ∈ SubA) → ((ValOf(chi_fn, x), TrueVal) ∈ EqOmega)) × (((ValOf(chi_fn, x), TrueVal) ∈ EqOmega) → (x ∈ SubA))))`
- **Statement (ANSII):** `Pi(SubA:Class), Pi(EqOmega:Class), Pi(chi_fn:Class), Pi(x:Class), ((((x in SubA) -> ((ValOf(chi_fn, x), TrueVal) in EqOmega)) * (((ValOf(chi_fn, x), TrueVal) in EqOmega) -> (x in SubA))) -> (((x in SubA) -> ((ValOf(chi_fn, x), TrueVal) in EqOmega)) * (((ValOf(chi_fn, x), TrueVal) in EqOmega) -> (x in SubA))))`
- **Constructive Proof Term:** `(λ(SubA:Class). (λ(EqOmega:Class). (λ(chi_fn:Class). (λ(x:Class). (λ(h:(((x ∈ SubA) → ((ValOf(chi_fn, x), TrueVal) ∈ EqOmega)) × (((ValOf(chi_fn, x), TrueVal) ∈ EqOmega) → (x ∈ SubA)))). ⟨fst(h), snd(h)⟩)))))`

### NBG-191 `thm_lawvere_tierney_topology_idempotence_step` (Derived)

- **Identifier:** `thm_lawvere_tierney_topology_idempotence_step` (`NBG-191`, kind: `Derived`)
- **Statement (Unicode):** `Π(Omega:Class), Π(LeqOmega:Class), Π(EqOmega:Class), Π(j_fn:Class), Π(p:Class), (((((p ∈ Omega) → ((ValOf(j_fn, p), p) ∈ LeqOmega)) × ((p ∈ Omega) → ((p, ValOf(j_fn, ValOf(j_fn, p))) ∈ LeqOmega))) × ((((ValOf(j_fn, p), p) ∈ LeqOmega) × ((p, ValOf(j_fn, ValOf(j_fn, p))) ∈ LeqOmega)) → ((ValOf(j_fn, ValOf(j_fn, p)), ValOf(j_fn, p)) ∈ EqOmega))) → ((p ∈ Omega) → ((ValOf(j_fn, ValOf(j_fn, p)), ValOf(j_fn, p)) ∈ EqOmega)))`
- **Statement (ANSII):** `Pi(Omega:Class), Pi(LeqOmega:Class), Pi(EqOmega:Class), Pi(j_fn:Class), Pi(p:Class), (((((p in Omega) -> ((ValOf(j_fn, p), p) in LeqOmega)) * ((p in Omega) -> ((p, ValOf(j_fn, ValOf(j_fn, p))) in LeqOmega))) * ((((ValOf(j_fn, p), p) in LeqOmega) * ((p, ValOf(j_fn, ValOf(j_fn, p))) in LeqOmega)) -> ((ValOf(j_fn, ValOf(j_fn, p)), ValOf(j_fn, p)) in EqOmega))) -> ((p in Omega) -> ((ValOf(j_fn, ValOf(j_fn, p)), ValOf(j_fn, p)) in EqOmega)))`
- **Constructive Proof Term:** `(λ(Omega:Class). (λ(LeqOmega:Class). (λ(EqOmega:Class). (λ(j_fn:Class). (λ(p:Class). (λ(h:((((p ∈ Omega) → ((ValOf(j_fn, p), p) ∈ LeqOmega)) × ((p ∈ Omega) → ((p, ValOf(j_fn, ValOf(j_fn, p))) ∈ LeqOmega))) × ((((ValOf(j_fn, p), p) ∈ LeqOmega) × ((p, ValOf(j_fn, ValOf(j_fn, p))) ∈ LeqOmega)) → ((ValOf(j_fn, ValOf(j_fn, p)), ValOf(j_fn, p)) ∈ EqOmega)))). (λ(hpOm:(p ∈ Omega)). (snd(h) ⟨(fst(fst(h)) hpOm), (snd(fst(h)) hpOm)⟩))))))))`

### NBG-192 `thm_lawvere_tierney_topology_meet_preservation_step` (Derived)

- **Identifier:** `thm_lawvere_tierney_topology_meet_preservation_step` (`NBG-192`, kind: `Derived`)
- **Statement (Unicode):** `Π(Omega:Class), Π(EqOmega:Class), Π(j_fn:Class), Π(p:Class), Π(q:Class), (((((p ∈ Omega) × (q ∈ Omega)) → ((ValOf(j_fn, (p ∩ q)), (ValOf(j_fn, p) ∩ ValOf(j_fn, q))) ∈ EqOmega)) × ((p ∈ Omega) × (q ∈ Omega))) → ((ValOf(j_fn, (p ∩ q)), (ValOf(j_fn, p) ∩ ValOf(j_fn, q))) ∈ EqOmega))`
- **Statement (ANSII):** `Pi(Omega:Class), Pi(EqOmega:Class), Pi(j_fn:Class), Pi(p:Class), Pi(q:Class), (((((p in Omega) * (q in Omega)) -> ((ValOf(j_fn, (p n* q)), (ValOf(j_fn, p) n* ValOf(j_fn, q))) in EqOmega)) * ((p in Omega) * (q in Omega))) -> ((ValOf(j_fn, (p n* q)), (ValOf(j_fn, p) n* ValOf(j_fn, q))) in EqOmega))`
- **Constructive Proof Term:** `(λ(Omega:Class). (λ(EqOmega:Class). (λ(j_fn:Class). (λ(p:Class). (λ(q:Class). (λ(h:((((p ∈ Omega) × (q ∈ Omega)) → ((ValOf(j_fn, (p ∩ q)), (ValOf(j_fn, p) ∩ ValOf(j_fn, q))) ∈ EqOmega)) × ((p ∈ Omega) × (q ∈ Omega)))). (fst(h) snd(h))))))))`

### NBG-193 `thm_monad_left_unit_law_coherence` (Derived)

- **Identifier:** `thm_monad_left_unit_law_coherence` (`NBG-193`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(EtaMap:Class), Π(EqTA:Class), Π(x:Class), ((((x ∈ A) → ((x, MonadEta(x)) ∈ EtaMap)) × (((x, MonadEta(x)) ∈ EtaMap) → ((MonadMu(MonadT(MonadEta(x))), MonadT(x)) ∈ EqTA))) → ((x ∈ A) → ((MonadMu(MonadT(MonadEta(x))), MonadT(x)) ∈ EqTA)))`
- **Statement (ANSII):** `Pi(A:Class), Pi(EtaMap:Class), Pi(EqTA:Class), Pi(x:Class), ((((x in A) -> ((x, MonadEta(x)) in EtaMap)) * (((x, MonadEta(x)) in EtaMap) -> ((MonadMu(MonadT(MonadEta(x))), MonadT(x)) in EqTA))) -> ((x in A) -> ((MonadMu(MonadT(MonadEta(x))), MonadT(x)) in EqTA)))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(EtaMap:Class). (λ(EqTA:Class). (λ(x:Class). (λ(h:(((x ∈ A) → ((x, MonadEta(x)) ∈ EtaMap)) × (((x, MonadEta(x)) ∈ EtaMap) → ((MonadMu(MonadT(MonadEta(x))), MonadT(x)) ∈ EqTA)))). (λ(hxA:(x ∈ A)). (snd(h) (fst(h) hxA))))))))`

### NBG-194 `thm_monad_right_unit_law_coherence` (Derived)

- **Identifier:** `thm_monad_right_unit_law_coherence` (`NBG-194`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(EtaTMap:Class), Π(EqTA:Class), Π(x:Class), ((((x ∈ A) → ((MonadT(x), MonadEta(MonadT(x))) ∈ EtaTMap)) × (((MonadT(x), MonadEta(MonadT(x))) ∈ EtaTMap) → ((MonadMu(MonadEta(MonadT(x))), MonadT(x)) ∈ EqTA))) → ((x ∈ A) → ((MonadMu(MonadEta(MonadT(x))), MonadT(x)) ∈ EqTA)))`
- **Statement (ANSII):** `Pi(A:Class), Pi(EtaTMap:Class), Pi(EqTA:Class), Pi(x:Class), ((((x in A) -> ((MonadT(x), MonadEta(MonadT(x))) in EtaTMap)) * (((MonadT(x), MonadEta(MonadT(x))) in EtaTMap) -> ((MonadMu(MonadEta(MonadT(x))), MonadT(x)) in EqTA))) -> ((x in A) -> ((MonadMu(MonadEta(MonadT(x))), MonadT(x)) in EqTA)))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(EtaTMap:Class). (λ(EqTA:Class). (λ(x:Class). (λ(h:(((x ∈ A) → ((MonadT(x), MonadEta(MonadT(x))) ∈ EtaTMap)) × (((MonadT(x), MonadEta(MonadT(x))) ∈ EtaTMap) → ((MonadMu(MonadEta(MonadT(x))), MonadT(x)) ∈ EqTA)))). (λ(hxA:(x ∈ A)). (snd(h) (fst(h) hxA))))))))`

### NBG-195 `thm_monad_associativity_square_coherence` (Derived)

- **Identifier:** `thm_monad_associativity_square_coherence` (`NBG-195`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(AssocPair:Class), Π(EqTA:Class), Π(x:Class), ((((x ∈ A) → ((MonadMu(MonadT(x)), MonadT(MonadMu(x))) ∈ AssocPair)) × (((MonadMu(MonadT(x)), MonadT(MonadMu(x))) ∈ AssocPair) → ((MonadMu(MonadMu(MonadT(x))), MonadMu(MonadT(MonadMu(x)))) ∈ EqTA))) → ((x ∈ A) → ((MonadMu(MonadMu(MonadT(x))), MonadMu(MonadT(MonadMu(x)))) ∈ EqTA)))`
- **Statement (ANSII):** `Pi(A:Class), Pi(AssocPair:Class), Pi(EqTA:Class), Pi(x:Class), ((((x in A) -> ((MonadMu(MonadT(x)), MonadT(MonadMu(x))) in AssocPair)) * (((MonadMu(MonadT(x)), MonadT(MonadMu(x))) in AssocPair) -> ((MonadMu(MonadMu(MonadT(x))), MonadMu(MonadT(MonadMu(x)))) in EqTA))) -> ((x in A) -> ((MonadMu(MonadMu(MonadT(x))), MonadMu(MonadT(MonadMu(x)))) in EqTA)))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(AssocPair:Class). (λ(EqTA:Class). (λ(x:Class). (λ(h:(((x ∈ A) → ((MonadMu(MonadT(x)), MonadT(MonadMu(x))) ∈ AssocPair)) × (((MonadMu(MonadT(x)), MonadT(MonadMu(x))) ∈ AssocPair) → ((MonadMu(MonadMu(MonadT(x))), MonadMu(MonadT(MonadMu(x)))) ∈ EqTA)))). (λ(hxA:(x ∈ A)). (snd(h) (fst(h) hxA))))))))`

### NBG-196 `thm_eilenberg_moore_algebra_unit_coherence` (Derived)

- **Identifier:** `thm_eilenberg_moore_algebra_unit_coherence` (`NBG-196`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(EtaA:Class), Π(EqA:Class), Π(alpha_fn:Class), Π(x:Class), ((((x ∈ A) → ((x, MonadEta(x)) ∈ EtaA)) × (((x, MonadEta(x)) ∈ EtaA) → ((ValOf(alpha_fn, MonadEta(x)), x) ∈ EqA))) → ((x ∈ A) → ((ValOf(alpha_fn, MonadEta(x)), x) ∈ EqA)))`
- **Statement (ANSII):** `Pi(A:Class), Pi(EtaA:Class), Pi(EqA:Class), Pi(alpha_fn:Class), Pi(x:Class), ((((x in A) -> ((x, MonadEta(x)) in EtaA)) * (((x, MonadEta(x)) in EtaA) -> ((ValOf(alpha_fn, MonadEta(x)), x) in EqA))) -> ((x in A) -> ((ValOf(alpha_fn, MonadEta(x)), x) in EqA)))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(EtaA:Class). (λ(EqA:Class). (λ(alpha_fn:Class). (λ(x:Class). (λ(h:(((x ∈ A) → ((x, MonadEta(x)) ∈ EtaA)) × (((x, MonadEta(x)) ∈ EtaA) → ((ValOf(alpha_fn, MonadEta(x)), x) ∈ EqA)))). (λ(hxA:(x ∈ A)). (snd(h) (fst(h) hxA)))))))))`

### NBG-197 `thm_eilenberg_moore_algebra_multiplication_coherence` (Derived)

- **Identifier:** `thm_eilenberg_moore_algebra_multiplication_coherence` (`NBG-197`, kind: `Derived`)
- **Statement (Unicode):** `Π(TTA:Class), Π(EqA:Class), Π(alpha_fn:Class), Π(z:Class), ((((z ∈ TTA) → ((ValOf(alpha_fn, MonadMu(z)), ValOf(alpha_fn, MonadT(ValOf(alpha_fn, z)))) ∈ EqA)) × (z ∈ TTA)) → ((ValOf(alpha_fn, MonadMu(z)), ValOf(alpha_fn, MonadT(ValOf(alpha_fn, z)))) ∈ EqA))`
- **Statement (ANSII):** `Pi(TTA:Class), Pi(EqA:Class), Pi(alpha_fn:Class), Pi(z:Class), ((((z in TTA) -> ((ValOf(alpha_fn, MonadMu(z)), ValOf(alpha_fn, MonadT(ValOf(alpha_fn, z)))) in EqA)) * (z in TTA)) -> ((ValOf(alpha_fn, MonadMu(z)), ValOf(alpha_fn, MonadT(ValOf(alpha_fn, z)))) in EqA))`
- **Constructive Proof Term:** `(λ(TTA:Class). (λ(EqA:Class). (λ(alpha_fn:Class). (λ(z:Class). (λ(h:(((z ∈ TTA) → ((ValOf(alpha_fn, MonadMu(z)), ValOf(alpha_fn, MonadT(ValOf(alpha_fn, z)))) ∈ EqA)) × (z ∈ TTA))). (fst(h) snd(h)))))))`

### NBG-198 `thm_kleisli_category_identity_left_composition` (Derived)

- **Identifier:** `thm_kleisli_category_identity_left_composition` (`NBG-198`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(KleisliAB:Class), Π(EqTB:Class), Π(f:Class), Π(x:Class), ((((x ∈ A) → ((x, ValOf(f, x)) ∈ KleisliAB)) × (((x, ValOf(f, x)) ∈ KleisliAB) → ((MonadMu(MonadT(ValOf(f, MonadEta(x)))), ValOf(f, x)) ∈ EqTB))) → ((x ∈ A) → ((MonadMu(MonadT(ValOf(f, MonadEta(x)))), ValOf(f, x)) ∈ EqTB)))`
- **Statement (ANSII):** `Pi(A:Class), Pi(KleisliAB:Class), Pi(EqTB:Class), Pi(f:Class), Pi(x:Class), ((((x in A) -> ((x, ValOf(f, x)) in KleisliAB)) * (((x, ValOf(f, x)) in KleisliAB) -> ((MonadMu(MonadT(ValOf(f, MonadEta(x)))), ValOf(f, x)) in EqTB))) -> ((x in A) -> ((MonadMu(MonadT(ValOf(f, MonadEta(x)))), ValOf(f, x)) in EqTB)))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(KleisliAB:Class). (λ(EqTB:Class). (λ(f:Class). (λ(x:Class). (λ(h:(((x ∈ A) → ((x, ValOf(f, x)) ∈ KleisliAB)) × (((x, ValOf(f, x)) ∈ KleisliAB) → ((MonadMu(MonadT(ValOf(f, MonadEta(x)))), ValOf(f, x)) ∈ EqTB)))). (λ(hxA:(x ∈ A)). (snd(h) (fst(h) hxA)))))))))`

### NBG-199 `thm_yoneda_natural_transformation_evaluation_bijection` (Derived)

- **Identifier:** `thm_yoneda_natural_transformation_evaluation_bijection` (`NBG-199`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(NatHomF:Class), Π(EqFA:Class), Π(EqNat:Class), Π(phi:Class), Π(u:Class), ((((phi ∈ NatHomF) → ((ValOf(phi, IdMor(A)), u) ∈ EqFA)) × (((ValOf(phi, IdMor(A)), u) ∈ EqFA) → ((YonedaMap(u), phi) ∈ EqNat))) → ((phi ∈ NatHomF) → ((YonedaMap(u), phi) ∈ EqNat)))`
- **Statement (ANSII):** `Pi(A:Class), Pi(NatHomF:Class), Pi(EqFA:Class), Pi(EqNat:Class), Pi(phi:Class), Pi(u:Class), ((((phi in NatHomF) -> ((ValOf(phi, IdMor(A)), u) in EqFA)) * (((ValOf(phi, IdMor(A)), u) in EqFA) -> ((YonedaMap(u), phi) in EqNat))) -> ((phi in NatHomF) -> ((YonedaMap(u), phi) in EqNat)))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(NatHomF:Class). (λ(EqFA:Class). (λ(EqNat:Class). (λ(phi:Class). (λ(u:Class). (λ(h:(((phi ∈ NatHomF) → ((ValOf(phi, IdMor(A)), u) ∈ EqFA)) × (((ValOf(phi, IdMor(A)), u) ∈ EqFA) → ((YonedaMap(u), phi) ∈ EqNat)))). (λ(hPhi:(phi ∈ NatHomF)). (snd(h) (fst(h) hPhi))))))))))`

### NBG-200 `thm_yoneda_embedding_full_faithfulness_isomorphism` (Derived)

- **Identifier:** `thm_yoneda_embedding_full_faithfulness_isomorphism` (`NBG-200`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(HomAB:Class), Π(EqNatHom:Class), Π(EqHomAB:Class), Π(f:Class), Π(Phi:Class), ((((f ∈ HomAB) → ((YonedaMap(f), Phi) ∈ EqNatHom)) × (((YonedaMap(f), Phi) ∈ EqNatHom) → ((ValOf(Phi, IdMor(A)), f) ∈ EqHomAB))) → ((f ∈ HomAB) → ((ValOf(Phi, IdMor(A)), f) ∈ EqHomAB)))`
- **Statement (ANSII):** `Pi(A:Class), Pi(HomAB:Class), Pi(EqNatHom:Class), Pi(EqHomAB:Class), Pi(f:Class), Pi(Phi:Class), ((((f in HomAB) -> ((YonedaMap(f), Phi) in EqNatHom)) * (((YonedaMap(f), Phi) in EqNatHom) -> ((ValOf(Phi, IdMor(A)), f) in EqHomAB))) -> ((f in HomAB) -> ((ValOf(Phi, IdMor(A)), f) in EqHomAB)))`
- **Constructive Proof Term:** `(λ(A:Class). (λ(HomAB:Class). (λ(EqNatHom:Class). (λ(EqHomAB:Class). (λ(f:Class). (λ(Phi:Class). (λ(h:(((f ∈ HomAB) → ((YonedaMap(f), Phi) ∈ EqNatHom)) × (((YonedaMap(f), Phi) ∈ EqNatHom) → ((ValOf(Phi, IdMor(A)), f) ∈ EqHomAB)))). (λ(hfHom:(f ∈ HomAB)). (snd(h) (fst(h) hfHom))))))))))`

### NBG-201 `thm_grothendieck_sieve_pullback_stability_step` (Derived)

- **Identifier:** `thm_grothendieck_sieve_pullback_stability_step` (`NBG-201`, kind: `Derived`)
- **Statement (Unicode):** `Π(SieveS:Class), Π(CompMor:Class), Π(f:Class), Π(g:Class), (((((f ∈ SieveS) × ((g, f) ∈ CompMor)) → (CompMorOp(g, f) ∈ SieveS)) × ((f ∈ SieveS) × ((g, f) ∈ CompMor))) → (CompMorOp(g, f) ∈ SieveS))`
- **Statement (ANSII):** `Pi(SieveS:Class), Pi(CompMor:Class), Pi(f:Class), Pi(g:Class), (((((f in SieveS) * ((g, f) in CompMor)) -> (CompMorOp(g, f) in SieveS)) * ((f in SieveS) * ((g, f) in CompMor))) -> (CompMorOp(g, f) in SieveS))`
- **Constructive Proof Term:** `(λ(SieveS:Class). (λ(CompMor:Class). (λ(f:Class). (λ(g:Class). (λ(h:((((f ∈ SieveS) × ((g, f) ∈ CompMor)) → (CompMorOp(g, f) ∈ SieveS)) × ((f ∈ SieveS) × ((g, f) ∈ CompMor)))). (fst(h) snd(h)))))))`

### NBG-202 `thm_grothendieck_topology_transitivity_step` (Derived)

- **Identifier:** `thm_grothendieck_topology_transitivity_step` (`NBG-202`, kind: `Derived`)
- **Statement (Unicode):** `Π(CovU:Class), Π(PullbackCov:Class), Π(R:Class), Π(S:Class), (((((R ∈ CovU) × ((S, R) ∈ PullbackCov)) → (S ∈ CovU)) × ((R ∈ CovU) × ((S, R) ∈ PullbackCov))) → (S ∈ CovU))`
- **Statement (ANSII):** `Pi(CovU:Class), Pi(PullbackCov:Class), Pi(R:Class), Pi(S:Class), (((((R in CovU) * ((S, R) in PullbackCov)) -> (S in CovU)) * ((R in CovU) * ((S, R) in PullbackCov))) -> (S in CovU))`
- **Constructive Proof Term:** `(λ(CovU:Class). (λ(PullbackCov:Class). (λ(R:Class). (λ(S:Class). (λ(h:((((R ∈ CovU) × ((S, R) ∈ PullbackCov)) → (S ∈ CovU)) × ((R ∈ CovU) × ((S, R) ∈ PullbackCov)))). (fst(h) snd(h)))))))`

### NBG-203 `thm_sheaf_matching_family_unique_gluing_step` (Derived)

- **Identifier:** `thm_sheaf_matching_family_unique_gluing_step` (`NBG-203`, kind: `Derived`)
- **Statement (Unicode):** `Π(MatchFam:Class), Π(RestrictEq:Class), Π(EqSecU:Class), Π(glue_fn:Class), Π(s:Class), Π(t:Class), ((((s ∈ MatchFam) → ((ValOf(glue_fn, s), s) ∈ RestrictEq)) × (((ValOf(glue_fn, s), s) ∈ RestrictEq) → ((ValOf(glue_fn, s), t) ∈ EqSecU))) → ((s ∈ MatchFam) → ((ValOf(glue_fn, s), t) ∈ EqSecU)))`
- **Statement (ANSII):** `Pi(MatchFam:Class), Pi(RestrictEq:Class), Pi(EqSecU:Class), Pi(glue_fn:Class), Pi(s:Class), Pi(t:Class), ((((s in MatchFam) -> ((ValOf(glue_fn, s), s) in RestrictEq)) * (((ValOf(glue_fn, s), s) in RestrictEq) -> ((ValOf(glue_fn, s), t) in EqSecU))) -> ((s in MatchFam) -> ((ValOf(glue_fn, s), t) in EqSecU)))`
- **Constructive Proof Term:** `(λ(MatchFam:Class). (λ(RestrictEq:Class). (λ(EqSecU:Class). (λ(glue_fn:Class). (λ(s:Class). (λ(t:Class). (λ(h:(((s ∈ MatchFam) → ((ValOf(glue_fn, s), s) ∈ RestrictEq)) × (((ValOf(glue_fn, s), s) ∈ RestrictEq) → ((ValOf(glue_fn, s), t) ∈ EqSecU)))). (λ(hsMatch:(s ∈ MatchFam)). (snd(h) (fst(h) hsMatch))))))))))`

### NBG-204 `thm_abelian_short_exact_kernel_image_coincidence` (Derived)

- **Identifier:** `thm_abelian_short_exact_kernel_image_coincidence` (`NBG-204`, kind: `Derived`)
- **Statement (Unicode):** `Π(KerG:Class), Π(ImF:Class), Π(x:Class), ((((x ∈ KerG) → (x ∈ ImF)) × ((x ∈ ImF) → (x ∈ KerG))) → (((x ∈ KerG) → (x ∈ ImF)) × ((x ∈ ImF) → (x ∈ KerG))))`
- **Statement (ANSII):** `Pi(KerG:Class), Pi(ImF:Class), Pi(x:Class), ((((x in KerG) -> (x in ImF)) * ((x in ImF) -> (x in KerG))) -> (((x in KerG) -> (x in ImF)) * ((x in ImF) -> (x in KerG))))`
- **Constructive Proof Term:** `(λ(KerG:Class). (λ(ImF:Class). (λ(x:Class). (λ(h:(((x ∈ KerG) → (x ∈ ImF)) × ((x ∈ ImF) → (x ∈ KerG)))). ⟨fst(h), snd(h)⟩))))`

### NBG-205 `thm_spectral_differential_squared_zero_kernel_inclusion` (Derived)

- **Identifier:** `thm_spectral_differential_squared_zero_kernel_inclusion` (`NBG-205`, kind: `Derived`)
- **Statement (Unicode):** `Π(PageEr:Class), Π(DiffPair:Class), Π(KerDr:Class), Π(dr_fn:Class), Π(x:Class), ((((x ∈ PageEr) → ((ValOf(dr_fn, x), ValOf(dr_fn, ValOf(dr_fn, x))) ∈ DiffPair)) × (((ValOf(dr_fn, x), ValOf(dr_fn, ValOf(dr_fn, x))) ∈ DiffPair) → (ValOf(dr_fn, x) ∈ KerDr))) → ((x ∈ PageEr) → (ValOf(dr_fn, x) ∈ KerDr)))`
- **Statement (ANSII):** `Pi(PageEr:Class), Pi(DiffPair:Class), Pi(KerDr:Class), Pi(dr_fn:Class), Pi(x:Class), ((((x in PageEr) -> ((ValOf(dr_fn, x), ValOf(dr_fn, ValOf(dr_fn, x))) in DiffPair)) * (((ValOf(dr_fn, x), ValOf(dr_fn, ValOf(dr_fn, x))) in DiffPair) -> (ValOf(dr_fn, x) in KerDr))) -> ((x in PageEr) -> (ValOf(dr_fn, x) in KerDr)))`
- **Constructive Proof Term:** `(λ(PageEr:Class). (λ(DiffPair:Class). (λ(KerDr:Class). (λ(dr_fn:Class). (λ(x:Class). (λ(h:(((x ∈ PageEr) → ((ValOf(dr_fn, x), ValOf(dr_fn, ValOf(dr_fn, x))) ∈ DiffPair)) × (((ValOf(dr_fn, x), ValOf(dr_fn, ValOf(dr_fn, x))) ∈ DiffPair) → (ValOf(dr_fn, x) ∈ KerDr)))). (λ(hxPage:(x ∈ PageEr)). (snd(h) (fst(h) hxPage)))))))))`

### NBG-206 `thm_monoidal_pentagon_associator_coherence_step` (Derived)

- **Identifier:** `thm_monoidal_pentagon_associator_coherence_step` (`NBG-206`, kind: `Derived`)
- **Statement (Unicode):** `Π(Obj4:Class), Π(EqMor:Class), Π(mid_fn:Class), Π(w:Class), ((((w ∈ Obj4) → ((AssocMorL(w), ValOf(mid_fn, w)) ∈ EqMor)) × (((AssocMorL(w), ValOf(mid_fn, w)) ∈ EqMor) → ((AssocMorL(w), AssocMorR(w)) ∈ EqMor))) → ((w ∈ Obj4) → ((AssocMorL(w), AssocMorR(w)) ∈ EqMor)))`
- **Statement (ANSII):** `Pi(Obj4:Class), Pi(EqMor:Class), Pi(mid_fn:Class), Pi(w:Class), ((((w in Obj4) -> ((AssocMorL(w), ValOf(mid_fn, w)) in EqMor)) * (((AssocMorL(w), ValOf(mid_fn, w)) in EqMor) -> ((AssocMorL(w), AssocMorR(w)) in EqMor))) -> ((w in Obj4) -> ((AssocMorL(w), AssocMorR(w)) in EqMor)))`
- **Constructive Proof Term:** `(λ(Obj4:Class). (λ(EqMor:Class). (λ(mid_fn:Class). (λ(w:Class). (λ(h:(((w ∈ Obj4) → ((AssocMorL(w), ValOf(mid_fn, w)) ∈ EqMor)) × (((AssocMorL(w), ValOf(mid_fn, w)) ∈ EqMor) → ((AssocMorL(w), AssocMorR(w)) ∈ EqMor)))). (λ(hwObj:(w ∈ Obj4)). (snd(h) (fst(h) hwObj))))))))`

### NBG-207 `thm_monoidal_triangle_unitor_coherence_step` (Derived)

- **Identifier:** `thm_monoidal_triangle_unitor_coherence_step` (`NBG-207`, kind: `Derived`)
- **Statement (Unicode):** `Π(Obj2:Class), Π(EqMor:Class), Π(rho_fn:Class), Π(lam_fn:Class), Π(u:Class), ((((u ∈ Obj2) → ((AssocMorL(u), ValOf(rho_fn, u)) ∈ EqMor)) × (((AssocMorL(u), ValOf(rho_fn, u)) ∈ EqMor) → ((ValOf(lam_fn, u), ValOf(rho_fn, u)) ∈ EqMor))) → ((u ∈ Obj2) → ((ValOf(lam_fn, u), ValOf(rho_fn, u)) ∈ EqMor)))`
- **Statement (ANSII):** `Pi(Obj2:Class), Pi(EqMor:Class), Pi(rho_fn:Class), Pi(lam_fn:Class), Pi(u:Class), ((((u in Obj2) -> ((AssocMorL(u), ValOf(rho_fn, u)) in EqMor)) * (((AssocMorL(u), ValOf(rho_fn, u)) in EqMor) -> ((ValOf(lam_fn, u), ValOf(rho_fn, u)) in EqMor))) -> ((u in Obj2) -> ((ValOf(lam_fn, u), ValOf(rho_fn, u)) in EqMor)))`
- **Constructive Proof Term:** `(λ(Obj2:Class). (λ(EqMor:Class). (λ(rho_fn:Class). (λ(lam_fn:Class). (λ(u:Class). (λ(h:(((u ∈ Obj2) → ((AssocMorL(u), ValOf(rho_fn, u)) ∈ EqMor)) × (((AssocMorL(u), ValOf(rho_fn, u)) ∈ EqMor) → ((ValOf(lam_fn, u), ValOf(rho_fn, u)) ∈ EqMor)))). (λ(huObj:(u ∈ Obj2)). (snd(h) (fst(h) huObj)))))))))`

### NBG-208 `thm_symmetric_braiding_involutive_coherence` (Derived)

- **Identifier:** `thm_symmetric_braiding_involutive_coherence` (`NBG-208`, kind: `Derived`)
- **Statement (Unicode):** `Π(Obj2:Class), Π(CompBraid:Class), Π(EqMor:Class), Π(A:Class), Π(B:Class), (((((A, B) ∈ Obj2) → ((BraidMor(A, B), BraidMor(B, A)) ∈ CompBraid)) × (((BraidMor(A, B), BraidMor(B, A)) ∈ CompBraid) → ((CompMorOp(BraidMor(B, A), BraidMor(A, B)), IdMor((A, B))) ∈ EqMor))) → (((A, B) ∈ Obj2) → ((CompMorOp(BraidMor(B, A), BraidMor(A, B)), IdMor((A, B))) ∈ EqMor)))`
- **Statement (ANSII):** `Pi(Obj2:Class), Pi(CompBraid:Class), Pi(EqMor:Class), Pi(A:Class), Pi(B:Class), (((((A, B) in Obj2) -> ((BraidMor(A, B), BraidMor(B, A)) in CompBraid)) * (((BraidMor(A, B), BraidMor(B, A)) in CompBraid) -> ((CompMorOp(BraidMor(B, A), BraidMor(A, B)), IdMor((A, B))) in EqMor))) -> (((A, B) in Obj2) -> ((CompMorOp(BraidMor(B, A), BraidMor(A, B)), IdMor((A, B))) in EqMor)))`
- **Constructive Proof Term:** `(λ(Obj2:Class). (λ(CompBraid:Class). (λ(EqMor:Class). (λ(A:Class). (λ(B:Class). (λ(h:((((A, B) ∈ Obj2) → ((BraidMor(A, B), BraidMor(B, A)) ∈ CompBraid)) × (((BraidMor(A, B), BraidMor(B, A)) ∈ CompBraid) → ((CompMorOp(BraidMor(B, A), BraidMor(A, B)), IdMor((A, B))) ∈ EqMor)))). (λ(huObj:((A, B) ∈ Obj2)). (snd(h) (fst(h) huObj)))))))))`

### NBG-209 `thm_tensor_internal_hom_currying_adjunction_step` (Derived)

- **Identifier:** `thm_tensor_internal_hom_currying_adjunction_step` (`NBG-209`, kind: `Derived`)
- **Statement (Unicode):** `Π(HomTensorBC:Class), Π(EqHomAInt:Class), Π(EqHomTensor:Class), Π(f:Class), Π(g:Class), ((((f ∈ HomTensorBC) → ((CurryOp(f), g) ∈ EqHomAInt)) × (((CurryOp(f), g) ∈ EqHomAInt) → ((UncurryOp(g), f) ∈ EqHomTensor))) → ((f ∈ HomTensorBC) → ((UncurryOp(g), f) ∈ EqHomTensor)))`
- **Statement (ANSII):** `Pi(HomTensorBC:Class), Pi(EqHomAInt:Class), Pi(EqHomTensor:Class), Pi(f:Class), Pi(g:Class), ((((f in HomTensorBC) -> ((CurryOp(f), g) in EqHomAInt)) * (((CurryOp(f), g) in EqHomAInt) -> ((UncurryOp(g), f) in EqHomTensor))) -> ((f in HomTensorBC) -> ((UncurryOp(g), f) in EqHomTensor)))`
- **Constructive Proof Term:** `(λ(HomTensorBC:Class). (λ(EqHomAInt:Class). (λ(EqHomTensor:Class). (λ(f:Class). (λ(g:Class). (λ(h:(((f ∈ HomTensorBC) → ((CurryOp(f), g) ∈ EqHomAInt)) × (((CurryOp(f), g) ∈ EqHomAInt) → ((UncurryOp(g), f) ∈ EqHomTensor)))). (λ(hfHom:(f ∈ HomTensorBC)). (snd(h) (fst(h) hfHom)))))))))`

### NBG-210 `thm_day_convolution_coend_wedge_factorization` (Derived)

- **Identifier:** `thm_day_convolution_coend_wedge_factorization` (`NBG-210`, kind: `Derived`)
- **Statement (Unicode):** `Π(CoendWedge:Class), Π(WedgeMed:Class), Π(EqNat:Class), Π(w:Class), Π(uniqMap:Class), ((((w ∈ CoendWedge) → ((w, DayFactor(w)) ∈ WedgeMed)) × (((w, DayFactor(w)) ∈ WedgeMed) → ((DayFactor(w), uniqMap) ∈ EqNat))) → ((w ∈ CoendWedge) → ((DayFactor(w), uniqMap) ∈ EqNat)))`
- **Statement (ANSII):** `Pi(CoendWedge:Class), Pi(WedgeMed:Class), Pi(EqNat:Class), Pi(w:Class), Pi(uniqMap:Class), ((((w in CoendWedge) -> ((w, DayFactor(w)) in WedgeMed)) * (((w, DayFactor(w)) in WedgeMed) -> ((DayFactor(w), uniqMap) in EqNat))) -> ((w in CoendWedge) -> ((DayFactor(w), uniqMap) in EqNat)))`
- **Constructive Proof Term:** `(λ(CoendWedge:Class). (λ(WedgeMed:Class). (λ(EqNat:Class). (λ(w:Class). (λ(uniqMap:Class). (λ(h:(((w ∈ CoendWedge) → ((w, DayFactor(w)) ∈ WedgeMed)) × (((w, DayFactor(w)) ∈ WedgeMed) → ((DayFactor(w), uniqMap) ∈ EqNat)))). (λ(hwWedge:(w ∈ CoendWedge)). (snd(h) (fst(h) hwWedge)))))))))`

### NBG-211 `thm_extranatural_wedge_dinaturality_square` (Derived)

- **Identifier:** `thm_extranatural_wedge_dinaturality_square` (`NBG-211`, kind: `Derived`)
- **Statement (Unicode):** `Π(HomAB:Class), Π(DinatPair:Class), Π(EqTarget:Class), Π(P_a:Class), Π(P_b:Class), Π(w_c:Class), Π(w_b:Class), Π(f:Class), ((((f ∈ HomAB) → ((CompMorOp(ValOf(P_a, f), w_c), CompMorOp(ValOf(P_b, f), w_b)) ∈ DinatPair)) × (((CompMorOp(ValOf(P_a, f), w_c), CompMorOp(ValOf(P_b, f), w_b)) ∈ DinatPair) → ((CompMorOp(ValOf(P_a, f), w_c), CompMorOp(ValOf(P_b, f), w_b)) ∈ EqTarget))) → ((f ∈ HomAB) → ((CompMorOp(ValOf(P_a, f), w_c), CompMorOp(ValOf(P_b, f), w_b)) ∈ EqTarget)))`
- **Statement (ANSII):** `Pi(HomAB:Class), Pi(DinatPair:Class), Pi(EqTarget:Class), Pi(P_a:Class), Pi(P_b:Class), Pi(w_c:Class), Pi(w_b:Class), Pi(f:Class), ((((f in HomAB) -> ((CompMorOp(ValOf(P_a, f), w_c), CompMorOp(ValOf(P_b, f), w_b)) in DinatPair)) * (((CompMorOp(ValOf(P_a, f), w_c), CompMorOp(ValOf(P_b, f), w_b)) in DinatPair) -> ((CompMorOp(ValOf(P_a, f), w_c), CompMorOp(ValOf(P_b, f), w_b)) in EqTarget))) -> ((f in HomAB) -> ((CompMorOp(ValOf(P_a, f), w_c), CompMorOp(ValOf(P_b, f), w_b)) in EqTarget)))`
- **Constructive Proof Term:** `(λ(HomAB:Class). (λ(DinatPair:Class). (λ(EqTarget:Class). (λ(P_a:Class). (λ(P_b:Class). (λ(w_c:Class). (λ(w_b:Class). (λ(f:Class). (λ(h:(((f ∈ HomAB) → ((CompMorOp(ValOf(P_a, f), w_c), CompMorOp(ValOf(P_b, f), w_b)) ∈ DinatPair)) × (((CompMorOp(ValOf(P_a, f), w_c), CompMorOp(ValOf(P_b, f), w_b)) ∈ DinatPair) → ((CompMorOp(ValOf(P_a, f), w_c), CompMorOp(ValOf(P_b, f), w_b)) ∈ EqTarget)))). (λ(hfHom:(f ∈ HomAB)). (snd(h) (fst(h) hfHom))))))))))))`

### NBG-212 `thm_categorical_end_universal_wedge_factorization` (Derived)

- **Identifier:** `thm_categorical_end_universal_wedge_factorization` (`NBG-212`, kind: `Derived`)
- **Statement (Unicode):** `Π(WedgeP:Class), Π(EndMed:Class), Π(EqApex:Class), Π(w:Class), Π(uniqEnd:Class), ((((w ∈ WedgeP) → ((w, EndFactor(w)) ∈ EndMed)) × (((w, EndFactor(w)) ∈ EndMed) → ((EndFactor(w), uniqEnd) ∈ EqApex))) → ((w ∈ WedgeP) → ((EndFactor(w), uniqEnd) ∈ EqApex)))`
- **Statement (ANSII):** `Pi(WedgeP:Class), Pi(EndMed:Class), Pi(EqApex:Class), Pi(w:Class), Pi(uniqEnd:Class), ((((w in WedgeP) -> ((w, EndFactor(w)) in EndMed)) * (((w, EndFactor(w)) in EndMed) -> ((EndFactor(w), uniqEnd) in EqApex))) -> ((w in WedgeP) -> ((EndFactor(w), uniqEnd) in EqApex)))`
- **Constructive Proof Term:** `(λ(WedgeP:Class). (λ(EndMed:Class). (λ(EqApex:Class). (λ(w:Class). (λ(uniqEnd:Class). (λ(h:(((w ∈ WedgeP) → ((w, EndFactor(w)) ∈ EndMed)) × (((w, EndFactor(w)) ∈ EndMed) → ((EndFactor(w), uniqEnd) ∈ EqApex)))). (λ(hwWedge:(w ∈ WedgeP)). (snd(h) (fst(h) hwWedge)))))))))`

### NBG-213 `thm_categorical_coend_universal_cowedge_factorization` (Derived)

- **Identifier:** `thm_categorical_coend_universal_cowedge_factorization` (`NBG-213`, kind: `Derived`)
- **Statement (Unicode):** `Π(CowedgeP:Class), Π(CoendMed:Class), Π(EqNadir:Class), Π(cw:Class), Π(uniqCoend:Class), ((((cw ∈ CowedgeP) → ((cw, CoendFactor(cw)) ∈ CoendMed)) × (((cw, CoendFactor(cw)) ∈ CoendMed) → ((CoendFactor(cw), uniqCoend) ∈ EqNadir))) → ((cw ∈ CowedgeP) → ((CoendFactor(cw), uniqCoend) ∈ EqNadir)))`
- **Statement (ANSII):** `Pi(CowedgeP:Class), Pi(CoendMed:Class), Pi(EqNadir:Class), Pi(cw:Class), Pi(uniqCoend:Class), ((((cw in CowedgeP) -> ((cw, CoendFactor(cw)) in CoendMed)) * (((cw, CoendFactor(cw)) in CoendMed) -> ((CoendFactor(cw), uniqCoend) in EqNadir))) -> ((cw in CowedgeP) -> ((CoendFactor(cw), uniqCoend) in EqNadir)))`
- **Constructive Proof Term:** `(λ(CowedgeP:Class). (λ(CoendMed:Class). (λ(EqNadir:Class). (λ(cw:Class). (λ(uniqCoend:Class). (λ(h:(((cw ∈ CowedgeP) → ((cw, CoendFactor(cw)) ∈ CoendMed)) × (((cw, CoendFactor(cw)) ∈ CoendMed) → ((CoendFactor(cw), uniqCoend) ∈ EqNadir)))). (λ(hcwCow:(cw ∈ CowedgeP)). (snd(h) (fst(h) hcwCow)))))))))`

### NBG-214 `thm_fubini_iterated_end_interchange_isomorphism` (Derived)

- **Identifier:** `thm_fubini_iterated_end_interchange_isomorphism` (`NBG-214`, kind: `Derived`)
- **Statement (Unicode):** `Π(EndAB:Class), Π(IsoBA:Class), Π(EqEndAB:Class), Π(x:Class), Π(y:Class), ((((x ∈ EndAB) → ((FubiniAB(x), y) ∈ IsoBA)) × (((FubiniAB(x), y) ∈ IsoBA) → ((FubiniBA(y), x) ∈ EqEndAB))) → ((x ∈ EndAB) → ((FubiniBA(y), x) ∈ EqEndAB)))`
- **Statement (ANSII):** `Pi(EndAB:Class), Pi(IsoBA:Class), Pi(EqEndAB:Class), Pi(x:Class), Pi(y:Class), ((((x in EndAB) -> ((FubiniAB(x), y) in IsoBA)) * (((FubiniAB(x), y) in IsoBA) -> ((FubiniBA(y), x) in EqEndAB))) -> ((x in EndAB) -> ((FubiniBA(y), x) in EqEndAB)))`
- **Constructive Proof Term:** `(λ(EndAB:Class). (λ(IsoBA:Class). (λ(EqEndAB:Class). (λ(x:Class). (λ(y:Class). (λ(h:(((x ∈ EndAB) → ((FubiniAB(x), y) ∈ IsoBA)) × (((FubiniAB(x), y) ∈ IsoBA) → ((FubiniBA(y), x) ∈ EqEndAB)))). (λ(hxEnd:(x ∈ EndAB)). (snd(h) (fst(h) hxEnd)))))))))`

### NBG-215 `thm_weighted_limit_enriched_end_representation` (Derived)

- **Identifier:** `thm_weighted_limit_enriched_end_representation` (`NBG-215`, kind: `Derived`)
- **Statement (Unicode):** `Π(WLimWD:Class), Π(IsoEndHom:Class), Π(EqWLim:Class), Π(u:Class), Π(v:Class), ((((u ∈ WLimWD) → ((WeightedRep(u), v) ∈ IsoEndHom)) × (((WeightedRep(u), v) ∈ IsoEndHom) → ((WeightedInv(v), u) ∈ EqWLim))) → ((u ∈ WLimWD) → ((WeightedInv(v), u) ∈ EqWLim)))`
- **Statement (ANSII):** `Pi(WLimWD:Class), Pi(IsoEndHom:Class), Pi(EqWLim:Class), Pi(u:Class), Pi(v:Class), ((((u in WLimWD) -> ((WeightedRep(u), v) in IsoEndHom)) * (((WeightedRep(u), v) in IsoEndHom) -> ((WeightedInv(v), u) in EqWLim))) -> ((u in WLimWD) -> ((WeightedInv(v), u) in EqWLim)))`
- **Constructive Proof Term:** `(λ(WLimWD:Class). (λ(IsoEndHom:Class). (λ(EqWLim:Class). (λ(u:Class). (λ(v:Class). (λ(h:(((u ∈ WLimWD) → ((WeightedRep(u), v) ∈ IsoEndHom)) × (((WeightedRep(u), v) ∈ IsoEndHom) → ((WeightedInv(v), u) ∈ EqWLim)))). (λ(huWLim:(u ∈ WLimWD)). (snd(h) (fst(h) huWLim)))))))))`

### NBG-216 `thm_bicategory_two_cell_middle_four_interchange` (Derived)

- **Identifier:** `thm_bicategory_two_cell_middle_four_interchange` (`NBG-216`, kind: `Derived`)
- **Statement (Unicode):** `Π(TwoCellQuad:Class), Π(Eq2Cell:Class), Π(mid_fn:Class), Π(u:Class), ((((u ∈ TwoCellQuad) → ((TwoCellHV(u), ValOf(mid_fn, u)) ∈ Eq2Cell)) × (((TwoCellHV(u), ValOf(mid_fn, u)) ∈ Eq2Cell) → ((TwoCellHV(u), TwoCellVH(u)) ∈ Eq2Cell))) → ((u ∈ TwoCellQuad) → ((TwoCellHV(u), TwoCellVH(u)) ∈ Eq2Cell)))`
- **Statement (ANSII):** `Pi(TwoCellQuad:Class), Pi(Eq2Cell:Class), Pi(mid_fn:Class), Pi(u:Class), ((((u in TwoCellQuad) -> ((TwoCellHV(u), ValOf(mid_fn, u)) in Eq2Cell)) * (((TwoCellHV(u), ValOf(mid_fn, u)) in Eq2Cell) -> ((TwoCellHV(u), TwoCellVH(u)) in Eq2Cell))) -> ((u in TwoCellQuad) -> ((TwoCellHV(u), TwoCellVH(u)) in Eq2Cell)))`
- **Constructive Proof Term:** `(λ(TwoCellQuad:Class). (λ(Eq2Cell:Class). (λ(mid_fn:Class). (λ(u:Class). (λ(h:(((u ∈ TwoCellQuad) → ((TwoCellHV(u), ValOf(mid_fn, u)) ∈ Eq2Cell)) × (((TwoCellHV(u), ValOf(mid_fn, u)) ∈ Eq2Cell) → ((TwoCellHV(u), TwoCellVH(u)) ∈ Eq2Cell)))). (λ(huQuad:(u ∈ TwoCellQuad)). (snd(h) (fst(h) huQuad))))))))`

### NBG-217 `thm_eckmann_hilton_two_cell_commutativity` (Derived)

- **Identifier:** `thm_eckmann_hilton_two_cell_commutativity` (`NBG-217`, kind: `Derived`)
- **Statement (Unicode):** `Π(End2Id:Class), Π(Eq2Cell:Class), Π(a:Class), Π(b:Class), (((((a ∈ End2Id) × (b ∈ End2Id)) → ((TwoCellVComp(a, b), TwoCellHComp(a, b)) ∈ Eq2Cell)) × (((TwoCellVComp(a, b), TwoCellHComp(a, b)) ∈ Eq2Cell) → ((TwoCellVComp(a, b), TwoCellVComp(b, a)) ∈ Eq2Cell))) → (((a ∈ End2Id) × (b ∈ End2Id)) → ((TwoCellVComp(a, b), TwoCellVComp(b, a)) ∈ Eq2Cell)))`
- **Statement (ANSII):** `Pi(End2Id:Class), Pi(Eq2Cell:Class), Pi(a:Class), Pi(b:Class), (((((a in End2Id) * (b in End2Id)) -> ((TwoCellVComp(a, b), TwoCellHComp(a, b)) in Eq2Cell)) * (((TwoCellVComp(a, b), TwoCellHComp(a, b)) in Eq2Cell) -> ((TwoCellVComp(a, b), TwoCellVComp(b, a)) in Eq2Cell))) -> (((a in End2Id) * (b in End2Id)) -> ((TwoCellVComp(a, b), TwoCellVComp(b, a)) in Eq2Cell)))`
- **Constructive Proof Term:** `(λ(End2Id:Class). (λ(Eq2Cell:Class). (λ(a:Class). (λ(b:Class). (λ(h:((((a ∈ End2Id) × (b ∈ End2Id)) → ((TwoCellVComp(a, b), TwoCellHComp(a, b)) ∈ Eq2Cell)) × (((TwoCellVComp(a, b), TwoCellHComp(a, b)) ∈ Eq2Cell) → ((TwoCellVComp(a, b), TwoCellVComp(b, a)) ∈ Eq2Cell)))). (λ(hab:((a ∈ End2Id) × (b ∈ End2Id))). (snd(h) (fst(h) hab))))))))`

### NBG-218 `thm_internal_adjunction_zig_zag_left_triangle` (Derived)

- **Identifier:** `thm_internal_adjunction_zig_zag_left_triangle` (`NBG-218`, kind: `Derived`)
- **Statement (Unicode):** `Π(LeftAdj1Cell:Class), Π(ZigZagL:Class), Π(Eq2Cell:Class), Π(L:Class), Π(f:Class), ((((f ∈ LeftAdj1Cell) → ((f, IdMor(L)) ∈ ZigZagL)) × (((f, IdMor(L)) ∈ ZigZagL) → ((ZigZagCompL(f), IdMor(f)) ∈ Eq2Cell))) → ((f ∈ LeftAdj1Cell) → ((ZigZagCompL(f), IdMor(f)) ∈ Eq2Cell)))`
- **Statement (ANSII):** `Pi(LeftAdj1Cell:Class), Pi(ZigZagL:Class), Pi(Eq2Cell:Class), Pi(L:Class), Pi(f:Class), ((((f in LeftAdj1Cell) -> ((f, IdMor(L)) in ZigZagL)) * (((f, IdMor(L)) in ZigZagL) -> ((ZigZagCompL(f), IdMor(f)) in Eq2Cell))) -> ((f in LeftAdj1Cell) -> ((ZigZagCompL(f), IdMor(f)) in Eq2Cell)))`
- **Constructive Proof Term:** `(λ(LeftAdj1Cell:Class). (λ(ZigZagL:Class). (λ(Eq2Cell:Class). (λ(L:Class). (λ(f:Class). (λ(h:(((f ∈ LeftAdj1Cell) → ((f, IdMor(L)) ∈ ZigZagL)) × (((f, IdMor(L)) ∈ ZigZagL) → ((ZigZagCompL(f), IdMor(f)) ∈ Eq2Cell)))). (λ(hfLeft:(f ∈ LeftAdj1Cell)). (snd(h) (fst(h) hfLeft)))))))))`

### NBG-219 `thm_internal_adjunction_zig_zag_right_triangle` (Derived)

- **Identifier:** `thm_internal_adjunction_zig_zag_right_triangle` (`NBG-219`, kind: `Derived`)
- **Statement (Unicode):** `Π(RightAdj1Cell:Class), Π(ZigZagR:Class), Π(Eq2Cell:Class), Π(R:Class), Π(g:Class), ((((g ∈ RightAdj1Cell) → ((g, IdMor(R)) ∈ ZigZagR)) × (((g, IdMor(R)) ∈ ZigZagR) → ((ZigZagCompR(g), IdMor(g)) ∈ Eq2Cell))) → ((g ∈ RightAdj1Cell) → ((ZigZagCompR(g), IdMor(g)) ∈ Eq2Cell)))`
- **Statement (ANSII):** `Pi(RightAdj1Cell:Class), Pi(ZigZagR:Class), Pi(Eq2Cell:Class), Pi(R:Class), Pi(g:Class), ((((g in RightAdj1Cell) -> ((g, IdMor(R)) in ZigZagR)) * (((g, IdMor(R)) in ZigZagR) -> ((ZigZagCompR(g), IdMor(g)) in Eq2Cell))) -> ((g in RightAdj1Cell) -> ((ZigZagCompR(g), IdMor(g)) in Eq2Cell)))`
- **Constructive Proof Term:** `(λ(RightAdj1Cell:Class). (λ(ZigZagR:Class). (λ(Eq2Cell:Class). (λ(R:Class). (λ(g:Class). (λ(h:(((g ∈ RightAdj1Cell) → ((g, IdMor(R)) ∈ ZigZagR)) × (((g, IdMor(R)) ∈ ZigZagR) → ((ZigZagCompR(g), IdMor(g)) ∈ Eq2Cell)))). (λ(hgRight:(g ∈ RightAdj1Cell)). (snd(h) (fst(h) hgRight)))))))))`

### NBG-220 `thm_benabou_bicategory_strictification_coherence` (Derived)

- **Identifier:** `thm_benabou_bicategory_strictification_coherence` (`NBG-220`, kind: `Derived`)
- **Statement (Unicode):** `Π(PasteDiag:Class), Π(Eq2Cell:Class), Π(d:Class), ((((d ∈ PasteDiag) → ((PasteEval1(d), PasteCanon(d)) ∈ Eq2Cell)) × (((PasteEval1(d), PasteCanon(d)) ∈ Eq2Cell) → ((PasteEval1(d), PasteEval2(d)) ∈ Eq2Cell))) → ((d ∈ PasteDiag) → ((PasteEval1(d), PasteEval2(d)) ∈ Eq2Cell)))`
- **Statement (ANSII):** `Pi(PasteDiag:Class), Pi(Eq2Cell:Class), Pi(d:Class), ((((d in PasteDiag) -> ((PasteEval1(d), PasteCanon(d)) in Eq2Cell)) * (((PasteEval1(d), PasteCanon(d)) in Eq2Cell) -> ((PasteEval1(d), PasteEval2(d)) in Eq2Cell))) -> ((d in PasteDiag) -> ((PasteEval1(d), PasteEval2(d)) in Eq2Cell)))`
- **Constructive Proof Term:** `(λ(PasteDiag:Class). (λ(Eq2Cell:Class). (λ(d:Class). (λ(h:(((d ∈ PasteDiag) → ((PasteEval1(d), PasteCanon(d)) ∈ Eq2Cell)) × (((PasteEval1(d), PasteCanon(d)) ∈ Eq2Cell) → ((PasteEval1(d), PasteEval2(d)) ∈ Eq2Cell)))). (λ(hdPaste:(d ∈ PasteDiag)). (snd(h) (fst(h) hdPaste)))))))`

