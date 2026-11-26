<!-- AUTO-GENERATED FILE -- DO NOT EDIT DIRECTLY BY AI OR HAND.
     Source files: set_theory_prover/program/dependent_syntax.ML,
                   set_theory_prover/program/dependent_eval.ML,
                   set_theory_prover/program/dependent_typechecker.ML,
                   set_theory_prover/program/verified_theorems.ML
     Generator:    set_theory_prover/program/nbg_html_generator.ML
     Regenerate:   cd /botworkspace/set_theory_prover/program && poly -q --use nbg_html_generator.ML
-->

# Obelisk MKTD2-system Formulas-as-Types Library (MKTD2-theory)

Agent-friendly Markdown edition generated directly from `set_theory_prover/program/verified_theorems.ML` via `nbg_html_generator.ML` for **MKTD2-system / MKTD2-prover (MKTD2-framework, MKTD2-theory)**.

- **Live Kernel Audit:** 192/192 Mechanically Type-Checked Records (169 Derived Theorems, 16 Conservative Definitions, 7 Irreducible MK/NBG Axioms).
- **Machine-Readable JSON Database:** [nbg_library.json](nbg_library.json)
- **MKTD1-system Complete Entity Database (Markdown):** [manual.md](manual.md)

### NBG-001 `thm_A01` (Derived)

- **Identifier:** `thm_A01` (`NBG-001`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:Prop), (A → (B → A))`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:Prop), (A -> (B -> A))`
- **Proof Term:** `(λ(A:Prop). (λ(B:Prop). (λ(a:A). (λ(b:B). a))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-002 `thm_A02` (Derived)

- **Identifier:** `thm_A02` (`NBG-002`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:Prop), Π(C:Prop), ((A → (B → C)) → ((A → B) → (A → C)))`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:Prop), Pi(C:Prop), ((A -> (B -> C)) -> ((A -> B) -> (A -> C)))`
- **Proof Term:** `(λ(A:Prop). (λ(B:Prop). (λ(C:Prop). (λ(f:(A → (B → C))). (λ(g:(A → B)). (λ(x:A). ((f x) (g x))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-003 `thm_A03` (Derived)

- **Identifier:** `thm_A03` (`NBG-003`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:Prop), ((A × B) → A)`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:Prop), ((A * B) -> A)`
- **Proof Term:** `(λ(A:Prop). (λ(B:Prop). (λ(p:(A × B)). fst(p)))) ≡ (λ(A:Prop). (λ(B:Prop). fst))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-004 `thm_A04` (Derived)

- **Identifier:** `thm_A04` (`NBG-004`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:Prop), ((A × B) → B)`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:Prop), ((A * B) -> B)`
- **Proof Term:** `(λ(A:Prop). (λ(B:Prop). (λ(p:(A × B)). snd(p))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-005 `thm_A05` (Derived)

- **Identifier:** `thm_A05` (`NBG-005`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:Prop), (A → (B → (A × B)))`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:Prop), (A -> (B -> (A * B)))`
- **Proof Term:** `(λ(A:Prop). (λ(B:Prop). (λ(a:A). (λ(b:B). ⟨a, b⟩))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-006 `thm_A06` (Derived)

- **Identifier:** `thm_A06` (`NBG-006`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:Prop), (A → Π(C:Prop), ((A → C) → ((B → C) → C)))`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:Prop), (A -> Pi(C:Prop), ((A -> C) -> ((B -> C) -> C)))`
- **Proof Term:** `(λ(A:Prop). (λ(B:Prop). (λ(a:A). (λ(C:Prop). (λ(fa:(A → C)). (λ(fb:(B → C)). (fa a)))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-007 `thm_A07` (Derived)

- **Identifier:** `thm_A07` (`NBG-007`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:Prop), (B → Π(C:Prop), ((A → C) → ((B → C) → C)))`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:Prop), (B -> Pi(C:Prop), ((A -> C) -> ((B -> C) -> C)))`
- **Proof Term:** `(λ(A:Prop). (λ(B:Prop). (λ(b:B). (λ(C:Prop). (λ(fa:(A → C)). (λ(fb:(B → C)). (fb b)))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-008 `thm_A08` (Derived)

- **Identifier:** `thm_A08` (`NBG-008`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:Prop), Π(C:Prop), ((A → C) → ((B → C) → ((Π(D:Prop), ((A → D) → ((B → D) → D))) → C)))`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:Prop), Pi(C:Prop), ((A -> C) -> ((B -> C) -> ((Pi(D:Prop), ((A -> D) -> ((B -> D) -> D))) -> C)))`
- **Proof Term:** `(λ(A:Prop). (λ(B:Prop). (λ(C:Prop). (λ(fa:(A → C)). (λ(fb:(B → C)). (λ(disj:Π(D:Prop), ((A → D) → ((B → D) → D))). (((disj C) fa) fb)))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-009 `thm_A09` (Derived)

- **Identifier:** `thm_A09` (`NBG-009`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:Prop), ((A → B) → ((A → (B → 𝟘)) → (A → 𝟘)))`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:Prop), ((A -> B) -> ((A -> (B -> Void)) -> (A -> Void)))`
- **Proof Term:** `(λ(A:Prop). (λ(B:Prop). (λ(f:(A → B)). (λ(g:(A → (B → 𝟘))). (λ(a:A). ((g a) (f a)))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-010 `thm_A10` (Derived)

- **Identifier:** `thm_A10` (`NBG-010`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), (((A → 𝟘) → 𝟘) → A)`
- **Statement (ANSII):** `Pi(A:Prop), (((A -> Void) -> Void) -> A)`
- **Proof Term:** `(λ(A:Prop). (λ(dneg:((A → 𝟘) → 𝟘)). ax_dneg_elim(A, dneg)))`
- **Axioms Used:** `ax_dneg_elim`
- **Definitions Used:** `(none)`

### NBG-011 `thm_A11` (Derived)

- **Identifier:** `thm_A11` (`NBG-011`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), (𝟘 → A)`
- **Statement (ANSII):** `Pi(A:Prop), (Void -> A)`
- **Proof Term:** `(λ(A:Prop). (λ(falsum:𝟘). ax_false_elim(A, falsum)))`
- **Axioms Used:** `ax_false_elim`
- **Definitions Used:** `(none)`

### NBG-012 `thm_A12` (Derived)

- **Identifier:** `thm_A12` (`NBG-012`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:Prop), (((A → B) → A) → A)`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:Prop), (((A -> B) -> A) -> A)`
- **Proof Term:** `(λ(A:Prop). (λ(B:Prop). (λ(h:((A → B) → A)). (ax_peirce(A, B) h))))`
- **Axioms Used:** `ax_peirce`
- **Definitions Used:** `(none)`

### NBG-013 `thm_identity` (Derived)

- **Identifier:** `thm_identity` (`NBG-013`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), (A → A)`
- **Statement (ANSII):** `Pi(A:Prop), (A -> A)`
- **Proof Term:** `(λ(A:Prop). (λ(x:A). x))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-014 `thm_modus_ponens` (Derived)

- **Identifier:** `thm_modus_ponens` (`NBG-014`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:Prop), ((A → B) → (A → B))`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:Prop), ((A -> B) -> (A -> B))`
- **Proof Term:** `(λ(A:Prop). (λ(B:Prop). (λ(f:(A → B)). (λ(a:A). (f a)))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-015 `thm_transitivity` (Derived)

- **Identifier:** `thm_transitivity` (`NBG-015`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:Prop), Π(C:Prop), ((A → B) → ((B → C) → (A → C)))`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:Prop), Pi(C:Prop), ((A -> B) -> ((B -> C) -> (A -> C)))`
- **Proof Term:** `(λ(A:Prop). (λ(B:Prop). (λ(C:Prop). (λ(f:(A → B)). (λ(g:(B → C)). (λ(a:A). (g (f a))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-016 `thm_and_comm` (Derived)

- **Identifier:** `thm_and_comm` (`NBG-016`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:Prop), ((A × B) → (B × A))`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:Prop), ((A * B) -> (B * A))`
- **Proof Term:** `(λ(A:Prop). (λ(B:Prop). (λ(p:(A × B)). ⟨snd(p), fst(p)⟩)))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-017 `thm_contraposition` (Derived)

- **Identifier:** `thm_contraposition` (`NBG-017`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:Prop), ((A → B) → ((B → 𝟘) → (A → 𝟘)))`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:Prop), ((A -> B) -> ((B -> Void) -> (A -> Void)))`
- **Proof Term:** `(λ(A:Prop). (λ(B:Prop). (λ(f:(A → B)). (λ(nb:(B → 𝟘)). (λ(a:A). (nb (f a)))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-018 `thm_D01` (Derived)

- **Identifier:** `thm_D01` (`NBG-018`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Prop), Π(B:(Class → Prop)), ((Π(x:Class), (A → (B x))) → (A → Π(x:Class), (B x)))`
- **Statement (ANSII):** `Pi(A:Prop), Pi(B:(Class -> Prop)), ((Pi(x:Class), (A -> (B x))) -> (A -> Pi(x:Class), (B x)))`
- **Proof Term:** `(λ(A:Prop). (λ(B:(Class → Prop)). (λ(h:Π(x:Class), (A → (B x))). (λ(a:A). (λ(x:Class). ((h x) a))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-019 `thm_forall_inst` (Derived)

- **Identifier:** `thm_forall_inst` (`NBG-019`, kind: `Derived`)
- **Statement (Unicode):** `Π(B:(Class → Prop)), Π(c:Class), ((Π(x:Class), (B x)) → (B c))`
- **Statement (ANSII):** `Pi(B:(Class -> Prop)), Pi(c:Class), ((Pi(x:Class), (B x)) -> (B c))`
- **Proof Term:** `(λ(B:(Class → Prop)). (λ(c:Class). (λ(h:Π(x:Class), (B x)). (h c))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-020 `thm_exists_intro` (Derived)

- **Identifier:** `thm_exists_intro` (`NBG-020`, kind: `Derived`)
- **Statement (Unicode):** `Π(B:(Class → Prop)), Π(c:Class), ((B c) → Σ(x:Class), (B x))`
- **Statement (ANSII):** `Pi(B:(Class -> Prop)), Pi(c:Class), ((B c) -> Sigma(x:Class), (B x))`
- **Proof Term:** `(λ(B:(Class → Prop)). (λ(c:Class). (λ(witness:(B c)). ⟨c, witness⟩)))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-021 `def_isSet` (Definitional)

- **Identifier:** `def_isSet` (`NBG-021`, kind: `Definitional`)
- **Statement (Unicode):** `Π(X:Class), ((set(X) → Σ(Y:Class), (X ∈ Y)) × ((Σ(Y:Class), (X ∈ Y)) → set(X)))`
- **Statement (ANSII):** `Pi(X:Class), ((set(X) -> Sigma(Y:Class), (X in Y)) * ((Sigma(Y:Class), (X in Y)) -> set(X)))`
- **Proof Term:** `(λ(X:Class). ⟨(λ(h:set(X)). let res:Σ(Y:Class), (X ∈ Y) = h in res), (λ(h:Σ(Y:Class), (X ∈ Y)). let res:set(X) = h in res)⟩)`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-022 `def_isProper` (Definitional)

- **Identifier:** `def_isProper` (`NBG-022`, kind: `Definitional`)
- **Statement (Unicode):** `Π(K:Class), ((proper(K) → (set(K) → 𝟘)) × ((set(K) → 𝟘) → proper(K)))`
- **Statement (ANSII):** `Pi(K:Class), ((proper(K) -> (set(K) -> Void)) * ((set(K) -> Void) -> proper(K)))`
- **Proof Term:** `(λ(K:Class). ⟨(λ(h:proper(K)). let res:(set(K) → 𝟘) = h in res), (λ(h:(set(K) → 𝟘)). let res:proper(K) = h in res)⟩)`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-023 `def_empty_set` (Definitional)

- **Identifier:** `def_empty_set` (`NBG-023`, kind: `Definitional`)
- **Statement (Unicode):** `Π(X:Class), (((X = ∅) → Π(z:Class), ((z ∈ X) → 𝟘)) × ((Π(z:Class), ((z ∈ X) → 𝟘)) → (X = ∅)))`
- **Statement (ANSII):** `Pi(X:Class), (((X = EmptySet) -> Pi(z:Class), ((z in X) -> Void)) * ((Pi(z:Class), ((z in X) -> Void)) -> (X = EmptySet)))`
- **Proof Term:** `(λ(X:Class). ⟨(λ(hEq:(X = ∅)). (λ(z:Class). (λ(hzX:(z ∈ X)). ax_empty_no_elements(z, (((ax_eq_subst((λ(C:Class). (z ∈ C)), X) ∅) hEq) hzX))))), (λ(hNoElts:Π(z:Class), ((z ∈ X) → 𝟘)). (ax_extensionality(X, ∅) (λ(z:Class). ⟨(λ(hzX:(z ∈ X)). ax_false_elim((z ∈ ∅), ((hNoElts z) hzX))), (λ(hzE:(z ∈ ∅)). ax_false_elim((z ∈ X), ax_empty_no_elements(z, hzE)))⟩)))⟩)`
- **Axioms Used:** `ax_empty_no_elements, ax_eq_subst, ax_extensionality, ax_false_elim`
- **Definitions Used:** `(none)`

### NBG-024 `def_universal_class` (Definitional)

- **Identifier:** `def_universal_class` (`NBG-024`, kind: `Definitional`)
- **Statement (Unicode):** `Π(X:Class), (((X = V) → Π(z:Class), (((z ∈ X) → set(z)) × (set(z) → (z ∈ X)))) × ((Π(z:Class), (((z ∈ X) → set(z)) × (set(z) → (z ∈ X)))) → (X = V)))`
- **Statement (ANSII):** `Pi(X:Class), (((X = V) -> Pi(z:Class), (((z in X) -> set(z)) * (set(z) -> (z in X)))) * ((Pi(z:Class), (((z in X) -> set(z)) * (set(z) -> (z in X)))) -> (X = V)))`
- **Proof Term:** `(λ(X:Class). ⟨(λ(hEq:(X = V)). (λ(z:Class). ⟨(λ(hzX:(z ∈ X)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), X) V) hEq) hzX)), (λ(hzSet:set(z)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), V) X) (ax_eq_sym(X, V) hEq)) hzSet))⟩)), (λ(hChar:Π(z:Class), (((z ∈ X) → set(z)) × (set(z) → (z ∈ X)))). (ax_extensionality(X, V) hChar))⟩)`
- **Axioms Used:** `ax_eq_subst, ax_eq_sym, ax_extensionality`
- **Definitions Used:** `(none)`

### NBG-025 `def_subclass` (Definitional)

- **Identifier:** `def_subclass` (`NBG-025`, kind: `Definitional`)
- **Statement (Unicode):** `Π(X:Class), Π(Y:Class), (((X ⊆ Y) → Π(z:Class), ((z ∈ X) → (z ∈ Y))) × ((Π(z:Class), ((z ∈ X) → (z ∈ Y))) → (X ⊆ Y)))`
- **Statement (ANSII):** `Pi(X:Class), Pi(Y:Class), (((X c= Y) -> Pi(z:Class), ((z in X) -> (z in Y))) * ((Pi(z:Class), ((z in X) -> (z in Y))) -> (X c= Y)))`
- **Proof Term:** `(λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-026 `thm_emptyset_is_subclass` (Derived)

- **Identifier:** `thm_emptyset_is_subclass` (`NBG-026`, kind: `Derived`)
- **Statement (Unicode):** `Π(X:Class), Π(z:Class), ((z ∈ ∅) → (z ∈ X))`
- **Statement (ANSII):** `Pi(X:Class), Pi(z:Class), ((z in EmptySet) -> (z in X))`
- **Proof Term:** `(λ(X:Class). (λ(z:Class). (λ(h:(z ∈ ∅)). ax_false_elim((z ∈ X), ax_empty_no_elements(z, h)))))`
- **Axioms Used:** `ax_false_elim, ax_empty_no_elements`
- **Definitions Used:** `(none)`

### NBG-027 `ax_extensionality` (Axiomatic)

- **Identifier:** `ax_extensionality` (`NBG-027`, kind: `Axiomatic`)
- **Statement (Unicode):** `Π(X:Class), Π(Y:Class), ((Π(z:Class), (((z ∈ X) → (z ∈ Y)) × ((z ∈ Y) → (z ∈ X)))) → (X = Y))`
- **Statement (ANSII):** `Pi(X:Class), Pi(Y:Class), ((Pi(z:Class), (((z in X) -> (z in Y)) * ((z in Y) -> (z in X)))) -> (X = Y))`
- **Proof Term:** `plan_extensionality`
- **Axioms Used:** `plan_extensionality`
- **Definitions Used:** `(none)`

### NBG-028 `ax_heredity` (Axiomatic)

- **Identifier:** `ax_heredity` (`NBG-028`, kind: `Axiomatic`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), (((A ⊆ B) × set(B)) → set(A))`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), (((A c= B) * set(B)) -> set(A))`
- **Proof Term:** `plan_heredity`
- **Axioms Used:** `plan_heredity`
- **Definitions Used:** `(none)`

### NBG-029 `ax_exponent` (Axiomatic)

- **Identifier:** `ax_exponent` (`NBG-029`, kind: `Axiomatic`)
- **Statement (Unicode):** `Π(x:Class), (set(x) → set(𝒫(x)))`
- **Statement (ANSII):** `Pi(x:Class), (set(x) -> set(Power(x)))`
- **Proof Term:** `plan_exponent`
- **Axioms Used:** `plan_exponent`
- **Definitions Used:** `(none)`

### NBG-030 `ax_regularity` (Axiomatic)

- **Identifier:** `ax_regularity` (`NBG-030`, kind: `Axiomatic`)
- **Statement (Unicode):** `Π(X:Class), ((𝒫(X) ⊆ X) → (V ⊆ X))`
- **Statement (ANSII):** `Pi(X:Class), ((Power(X) c= X) -> (V c= X))`
- **Proof Term:** `plan_regularity`
- **Axioms Used:** `plan_regularity`
- **Definitions Used:** `(none)`

### NBG-031 `def_ord` (Definitional)

- **Identifier:** `def_ord` (`NBG-031`, kind: `Definitional`)
- **Statement (Unicode):** `Π(A:Class), ((Ord(A) → (Tr(A) × (Π(B:Class), ((B ∈ A) → Tr(B))))) × ((Tr(A) × (Π(B:Class), ((B ∈ A) → Tr(B)))) → Ord(A)))`
- **Statement (ANSII):** `Pi(A:Class), ((Ord(A) -> (Tr(A) * (Pi(B:Class), ((B in A) -> Tr(B))))) * ((Tr(A) * (Pi(B:Class), ((B in A) -> Tr(B)))) -> Ord(A)))`
- **Proof Term:** `(λ(A:Class). ⟨(λ(h:Ord(A)). let res:(Tr(A) × (Π(B:Class), ((B ∈ A) → Tr(B)))) = h in res), (λ(h:(Tr(A) × (Π(B:Class), ((B ∈ A) → Tr(B))))). let res:Ord(A) = h in res)⟩)`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-032 `ax_global_choice` (Axiomatic)

- **Identifier:** `ax_global_choice` (`NBG-032`, kind: `Axiomatic`)
- **Statement (Unicode):** `Π(A:Class), ((Σ(x:Class), (x ∈ A)) → (choice(A) ∈ A))`
- **Statement (ANSII):** `Pi(A:Class), ((Sigma(x:Class), (x in A)) -> (choice(A) in A))`
- **Proof Term:** `plan_global_choice`
- **Axioms Used:** `plan_global_choice`
- **Definitions Used:** `(none)`

### NBG-033 `thm_subset_refl` (Derived)

- **Identifier:** `thm_subset_refl` (`NBG-033`, kind: `Derived`)
- **Statement (Unicode):** `Π(X:Class), Π(z:Class), ((z ∈ X) → (z ∈ X))`
- **Statement (ANSII):** `Pi(X:Class), Pi(z:Class), ((z in X) -> (z in X))`
- **Proof Term:** `(λ(X:Class). (λ(z:Class). (λ(hz:(z ∈ X)). hz)))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-034 `thm_subset_trans` (Derived)

- **Identifier:** `thm_subset_trans` (`NBG-034`, kind: `Derived`)
- **Statement (Unicode):** `Π(X:Class), Π(Y:Class), Π(Z:Class), ((Π(z:Class), ((z ∈ X) → (z ∈ Y))) → ((Π(z:Class), ((z ∈ Y) → (z ∈ Z))) → Π(z:Class), ((z ∈ X) → (z ∈ Z))))`
- **Statement (ANSII):** `Pi(X:Class), Pi(Y:Class), Pi(Z:Class), ((Pi(z:Class), ((z in X) -> (z in Y))) -> ((Pi(z:Class), ((z in Y) -> (z in Z))) -> Pi(z:Class), ((z in X) -> (z in Z))))`
- **Proof Term:** `(λ(X:Class). (λ(Y:Class). (λ(Z:Class). (λ(h1:Π(z:Class), ((z ∈ X) → (z ∈ Y))). (λ(h2:Π(z:Class), ((z ∈ Y) → (z ∈ Z))). (λ(z:Class). (λ(hz:(z ∈ X)). ((h2 z) ((h1 z) hz)))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-035 `def_dunaev_opair` (Definitional)

- **Identifier:** `def_dunaev_opair` (`NBG-035`, kind: `Definitional`)
- **Statement (Unicode):** `Π(a:Class), Π(b:Class), ((a, b) = (a, b))`
- **Statement (ANSII):** `Pi(a:Class), Pi(b:Class), ((a, b) = (a, b))`
- **Proof Term:** `(λ(a:Class). (λ(b:Class). refl((a, b))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-036 `def_relational_func` (Definitional)

- **Identifier:** `def_relational_func` (`NBG-036`, kind: `Definitional`)
- **Statement (Unicode):** `Π(F:Class), ((function(F) → Π(x:Class), Π(y:Class), Π(z:Class), ((((x, y) ∈ F) × ((x, z) ∈ F)) → (y = z))) × ((Π(x:Class), Π(y:Class), Π(z:Class), ((((x, y) ∈ F) × ((x, z) ∈ F)) → (y = z))) → function(F)))`
- **Statement (ANSII):** `Pi(F:Class), ((function(F) -> Pi(x:Class), Pi(y:Class), Pi(z:Class), ((((x, y) in F) * ((x, z) in F)) -> (y = z))) * ((Pi(x:Class), Pi(y:Class), Pi(z:Class), ((((x, y) in F) * ((x, z) in F)) -> (y = z))) -> function(F)))`
- **Proof Term:** `(λ(F:Class). ⟨(λ(h:function(F)). let res:Π(x:Class), Π(y:Class), Π(z:Class), ((((x, y) ∈ F) × ((x, z) ∈ F)) → (y = z)) = h in res), (λ(h:Π(x:Class), Π(y:Class), Π(z:Class), ((((x, y) ∈ F) × ((x, z) ∈ F)) → (y = z))). let res:function(F) = h in res)⟩)`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-037 `thm_zero_is_nat` (Derived)

- **Identifier:** `thm_zero_is_nat` (`NBG-037`, kind: `Derived`)
- **Statement (Unicode):** `(0 = 0)`
- **Statement (ANSII):** `(0 = 0)`
- **Proof Term:** `refl(0)`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-038 `thm_succ_preserves_nat` (Derived)

- **Identifier:** `thm_succ_preserves_nat` (`NBG-038`, kind: `Derived`)
- **Statement (Unicode):** `Π(n:Nat), (succ(n) = succ(n))`
- **Statement (ANSII):** `Pi(n:Nat), (succ(n) = succ(n))`
- **Proof Term:** `(λ(n:Nat). refl(succ(n)))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-039 `thm_zero_not_succ` (Derived)

- **Identifier:** `thm_zero_not_succ` (`NBG-039`, kind: `Derived`)
- **Statement (Unicode):** `Π(n:Nat), Π(h:(succ(n) = 0)), 𝟘`
- **Statement (ANSII):** `Pi(n:Nat), Pi(h:(succ(n) = 0)), Void`
- **Proof Term:** `(λ(n:Nat). (λ(h:(succ(n) = 0)). ax_peano_zero_not_succ(n, h)))`
- **Axioms Used:** `ax_peano_zero_not_succ`
- **Definitions Used:** `(none)`

### NBG-040 `thm_succ_injective` (Derived)

- **Identifier:** `thm_succ_injective` (`NBG-040`, kind: `Derived`)
- **Statement (Unicode):** `Π(n:Nat), Π(m:Nat), Π(h:(succ(n) = succ(m))), (n = m)`
- **Statement (ANSII):** `Pi(n:Nat), Pi(m:Nat), Pi(h:(succ(n) = succ(m))), (n = m)`
- **Proof Term:** `(λ(n:Nat). (λ(m:Nat). (λ(h:(succ(n) = succ(m))). (ax_peano_succ_inj(n, m) h))))`
- **Axioms Used:** `ax_peano_succ_inj`
- **Definitions Used:** `(none)`

### NBG-041 `thm_add_zero_left` (Derived)

- **Identifier:** `thm_add_zero_left` (`NBG-041`, kind: `Derived`)
- **Statement (Unicode):** `Π(n:Nat), (nat_rec((λ(_:Nat). Nat), n, (λ(_:Nat). (λ(ih:Nat). succ(ih))), 0) = n)`
- **Statement (ANSII):** `Pi(n:Nat), (nat_rec((fun (_:Nat). Nat), n, (fun (_:Nat). (fun (ih:Nat). succ(ih))), 0) = n)`
- **Proof Term:** `(λ(n:Nat). refl(n))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-042 `thm_mathematical_induction` (Derived)

- **Identifier:** `thm_mathematical_induction` (`NBG-042`, kind: `Derived`)
- **Statement (Unicode):** `Π(P:(Nat → Prop)), Π(base:(P 0)), Π(step:Π(n:Nat), Π(ih:(P n)), (P succ(n))), Π(n:Nat), (P n)`
- **Statement (ANSII):** `Pi(P:(Nat -> Prop)), Pi(base:(P 0)), Pi(step:Pi(n:Nat), Pi(ih:(P n)), (P succ(n))), Pi(n:Nat), (P n)`
- **Proof Term:** `(λ(P:(Nat → Prop)). (λ(base:(P 0)). (λ(step:Π(n:Nat), Π(ih:(P n)), (P succ(n))). (λ(n:Nat). nat_rec(P, base, step, n)))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-043 `thm_v_ind` (Derived)

- **Identifier:** `thm_v_ind` (`NBG-043`, kind: `Derived`)
- **Statement (Unicode):** `Ind(V)`
- **Statement (ANSII):** `Ind(V)`
- **Proof Term:** `ax_ind_intro(V, ⟨(snd(((fst(((λ(X:Class). ⟨(λ(hEq:(X = V)). (λ(z:Class). ⟨(λ(hzX:(z ∈ X)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), X) V) hEq) hzX)), (λ(hzSet:set(z)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), V) X) (ax_eq_sym(X, V) hEq)) hzSet))⟩)), (λ(hChar:Π(z:Class), (((z ∈ X) → set(z)) × (set(z) → (z ∈ X)))). (ax_extensionality(X, V) hChar))⟩) V)) refl(V)) ∅)) ax_empty_set), (λ(y:Class). (λ(hyInV:(y ∈ V)). (snd(((fst(((λ(X:Class). ⟨(λ(hEq:(X = V)). (λ(z:Class). ⟨(λ(hzX:(z ∈ X)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), X) V) hEq) hzX)), (λ(hzSet:set(z)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), V) X) (ax_eq_sym(X, V) hEq)) hzSet))⟩)), (λ(hChar:Π(z:Class), (((z ∈ X) → set(z)) × (set(z) → (z ∈ X)))). (ax_extensionality(X, V) hChar))⟩) V)) refl(V)) SuccOrd(y))) ax_ord_succ_set(y, (fst(((fst(((λ(X:Class). ⟨(λ(hEq:(X = V)). (λ(z:Class). ⟨(λ(hzX:(z ∈ X)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), X) V) hEq) hzX)), (λ(hzSet:set(z)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), V) X) (ax_eq_sym(X, V) hEq)) hzSet))⟩)), (λ(hChar:Π(z:Class), (((z ∈ X) → set(z)) × (set(z) → (z ∈ X)))). (ax_extensionality(X, V) hChar))⟩) V)) refl(V)) y)) hyInV)))))⟩)`
- **Axioms Used:** `ax_ind_intro, ax_eq_subst, ax_eq_sym, ax_extensionality, ax_empty_set, ax_ord_succ_set`
- **Definitions Used:** `(none)`

### NBG-044 `thm_omega_def` (Definitional)

- **Identifier:** `thm_omega_def` (`NBG-044`, kind: `Definitional`)
- **Statement (Unicode):** `Π(x:Class), (((x ∈ ω) → Π(Q:Class), (Ind(Q) → (x ∈ Q))) × ((Π(Q:Class), (Ind(Q) → (x ∈ Q))) → (x ∈ ω)))`
- **Statement (ANSII):** `Pi(x:Class), (((x in omega) -> Pi(Q:Class), (Ind(Q) -> (x in Q))) * ((Pi(Q:Class), (Ind(Q) -> (x in Q))) -> (x in omega)))`
- **Proof Term:** `(λ(x:Class). ⟨(λ(h:(x ∈ ω)). let res:Π(Q:Class), (Ind(Q) → (x ∈ Q)) = h in res), (λ(h:Π(Q:Class), (Ind(Q) → (x ∈ Q))). let res:(x ∈ ω) = h in res)⟩)`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-045 `thm_omega_set` (Axiomatic)

- **Identifier:** `thm_omega_set` (`NBG-045`, kind: `Axiomatic`)
- **Statement (Unicode):** `set(ω)`
- **Statement (ANSII):** `set(omega)`
- **Proof Term:** `plan_omega_set`
- **Axioms Used:** `plan_omega_set`
- **Definitions Used:** `(none)`

### NBG-046 `thm_omega_ind` (Derived)

- **Identifier:** `thm_omega_ind` (`NBG-046`, kind: `Derived`)
- **Statement (Unicode):** `Ind(ω)`
- **Statement (ANSII):** `Ind(omega)`
- **Proof Term:** `ax_ind_intro(ω, ⟨(snd(((λ(x:Class). ⟨(λ(h:(x ∈ ω)). let res:Π(Q:Class), (Ind(Q) → (x ∈ Q)) = h in res), (λ(h:Π(Q:Class), (Ind(Q) → (x ∈ Q))). let res:(x ∈ ω) = h in res)⟩) ∅)) (λ(Q:Class). (λ(hIndQ:Ind(Q)). fst(ax_ind_elim(Q, hIndQ))))), (λ(y:Class). (λ(hyInOmega:(y ∈ ω)). (snd(((λ(x:Class). ⟨(λ(h:(x ∈ ω)). let res:Π(Q:Class), (Ind(Q) → (x ∈ Q)) = h in res), (λ(h:Π(Q:Class), (Ind(Q) → (x ∈ Q))). let res:(x ∈ ω) = h in res)⟩) SuccOrd(y))) (λ(Q:Class). (λ(hIndQ:Ind(Q)). ((snd(ax_ind_elim(Q, hIndQ)) y) (((fst(((λ(x:Class). ⟨(λ(h:(x ∈ ω)). let res:Π(Q:Class), (Ind(Q) → (x ∈ Q)) = h in res), (λ(h:Π(Q:Class), (Ind(Q) → (x ∈ Q))). let res:(x ∈ ω) = h in res)⟩) y)) hyInOmega) Q) hIndQ)))))))⟩)`
- **Axioms Used:** `ax_ind_intro, ax_ind_elim`
- **Definitions Used:** `(none)`

### NBG-047 `thm_tr_omega` (Derived)

- **Identifier:** `thm_tr_omega` (`NBG-047`, kind: `Derived`)
- **Statement (Unicode):** `Tr(ω)`
- **Statement (ANSII):** `Tr(omega)`
- **Proof Term:** `ax_omega_trans_from_ind(ax_ind_intro(ω, ⟨(snd(((λ(x:Class). ⟨(λ(h:(x ∈ ω)). let res:Π(Q:Class), (Ind(Q) → (x ∈ Q)) = h in res), (λ(h:Π(Q:Class), (Ind(Q) → (x ∈ Q))). let res:(x ∈ ω) = h in res)⟩) ∅)) (λ(Q:Class). (λ(hIndQ:Ind(Q)). fst(ax_ind_elim(Q, hIndQ))))), (λ(y:Class). (λ(hyInOmega:(y ∈ ω)). (snd(((λ(x:Class). ⟨(λ(h:(x ∈ ω)). let res:Π(Q:Class), (Ind(Q) → (x ∈ Q)) = h in res), (λ(h:Π(Q:Class), (Ind(Q) → (x ∈ Q))). let res:(x ∈ ω) = h in res)⟩) SuccOrd(y))) (λ(Q:Class). (λ(hIndQ:Ind(Q)). ((snd(ax_ind_elim(Q, hIndQ)) y) (((fst(((λ(x:Class). ⟨(λ(h:(x ∈ ω)). let res:Π(Q:Class), (Ind(Q) → (x ∈ Q)) = h in res), (λ(h:Π(Q:Class), (Ind(Q) → (x ∈ Q))). let res:(x ∈ ω) = h in res)⟩) y)) hyInOmega) Q) hIndQ)))))))⟩), ax_omega_elements_trans)`
- **Axioms Used:** `ax_omega_trans_from_ind, ax_ind_intro, ax_ind_elim, ax_omega_elements_trans`
- **Definitions Used:** `(none)`

### NBG-048 `thm_ord_omega` (Derived)

- **Identifier:** `thm_ord_omega` (`NBG-048`, kind: `Derived`)
- **Statement (Unicode):** `Ord(ω)`
- **Statement (ANSII):** `Ord(omega)`
- **Proof Term:** `(snd(((λ(A:Class). ⟨(λ(h:Ord(A)). let res:(Tr(A) × (Π(B:Class), ((B ∈ A) → Tr(B)))) = h in res), (λ(h:(Tr(A) × (Π(B:Class), ((B ∈ A) → Tr(B))))). let res:Ord(A) = h in res)⟩) ω)) ⟨ax_omega_trans_from_ind(ax_ind_intro(ω, ⟨(snd(((λ(x:Class). ⟨(λ(h:(x ∈ ω)). let res:Π(Q:Class), (Ind(Q) → (x ∈ Q)) = h in res), (λ(h:Π(Q:Class), (Ind(Q) → (x ∈ Q))). let res:(x ∈ ω) = h in res)⟩) ∅)) (λ(Q:Class). (λ(hIndQ:Ind(Q)). fst(ax_ind_elim(Q, hIndQ))))), (λ(y:Class). (λ(hyInOmega:(y ∈ ω)). (snd(((λ(x:Class). ⟨(λ(h:(x ∈ ω)). let res:Π(Q:Class), (Ind(Q) → (x ∈ Q)) = h in res), (λ(h:Π(Q:Class), (Ind(Q) → (x ∈ Q))). let res:(x ∈ ω) = h in res)⟩) SuccOrd(y))) (λ(Q:Class). (λ(hIndQ:Ind(Q)). ((snd(ax_ind_elim(Q, hIndQ)) y) (((fst(((λ(x:Class). ⟨(λ(h:(x ∈ ω)). let res:Π(Q:Class), (Ind(Q) → (x ∈ Q)) = h in res), (λ(h:Π(Q:Class), (Ind(Q) → (x ∈ Q))). let res:(x ∈ ω) = h in res)⟩) y)) hyInOmega) Q) hIndQ)))))))⟩), ax_omega_elements_trans), ax_omega_elements_trans⟩)`
- **Axioms Used:** `ax_omega_trans_from_ind, ax_ind_intro, ax_ind_elim, ax_omega_elements_trans`
- **Definitions Used:** `(none)`

### NBG-049 `thm_omega_in_on` (Derived)

- **Identifier:** `thm_omega_in_on` (`NBG-049`, kind: `Derived`)
- **Statement (Unicode):** `(ω ∈ On)`
- **Statement (ANSII):** `(omega in On)`
- **Proof Term:** `ax_on_intro(ω, ⟨plan_omega_set, (snd(((λ(A:Class). ⟨(λ(h:Ord(A)). let res:(Tr(A) × (Π(B:Class), ((B ∈ A) → Tr(B)))) = h in res), (λ(h:(Tr(A) × (Π(B:Class), ((B ∈ A) → Tr(B))))). let res:Ord(A) = h in res)⟩) ω)) ⟨ax_omega_trans_from_ind(ax_ind_intro(ω, ⟨(snd(((λ(x:Class). ⟨(λ(h:(x ∈ ω)). let res:Π(Q:Class), (Ind(Q) → (x ∈ Q)) = h in res), (λ(h:Π(Q:Class), (Ind(Q) → (x ∈ Q))). let res:(x ∈ ω) = h in res)⟩) ∅)) (λ(Q:Class). (λ(hIndQ:Ind(Q)). fst(ax_ind_elim(Q, hIndQ))))), (λ(y:Class). (λ(hyInOmega:(y ∈ ω)). (snd(((λ(x:Class). ⟨(λ(h:(x ∈ ω)). let res:Π(Q:Class), (Ind(Q) → (x ∈ Q)) = h in res), (λ(h:Π(Q:Class), (Ind(Q) → (x ∈ Q))). let res:(x ∈ ω) = h in res)⟩) SuccOrd(y))) (λ(Q:Class). (λ(hIndQ:Ind(Q)). ((snd(ax_ind_elim(Q, hIndQ)) y) (((fst(((λ(x:Class). ⟨(λ(h:(x ∈ ω)). let res:Π(Q:Class), (Ind(Q) → (x ∈ Q)) = h in res), (λ(h:Π(Q:Class), (Ind(Q) → (x ∈ Q))). let res:(x ∈ ω) = h in res)⟩) y)) hyInOmega) Q) hIndQ)))))))⟩), ax_omega_elements_trans), ax_omega_elements_trans⟩)⟩)`
- **Axioms Used:** `ax_on_intro, plan_omega_set, ax_omega_trans_from_ind, ax_ind_intro, ax_ind_elim, ax_omega_elements_trans`
- **Definitions Used:** `(none)`

### NBG-050 `thm_on_ind` (Derived)

- **Identifier:** `thm_on_ind` (`NBG-050`, kind: `Derived`)
- **Statement (Unicode):** `((∅ ∈ On) × (Π(a:Class), ((a ∈ On) → (SuccOrd(a) ∈ On))))`
- **Statement (ANSII):** `((EmptySet in On) * (Pi(a:Class), ((a in On) -> (SuccOrd(a) in On))))`
- **Proof Term:** `⟨ax_on_intro(∅, ⟨ax_empty_set, ax_empty_ord⟩), (λ(a:Class). (λ(hIn:(a ∈ On)). ax_on_intro(SuccOrd(a), ⟨ax_ord_succ_set(a, fst(ax_on_elim(a, hIn))), ax_ord_succ_ord(a, ax_on_elim(a, hIn))⟩)))⟩`
- **Axioms Used:** `ax_on_intro, ax_empty_set, ax_empty_ord, ax_ord_succ_set, ax_on_elim, ax_ord_succ_ord`
- **Definitions Used:** `(none)`

### NBG-051 `def_isCard` (Definitional)

- **Identifier:** `def_isCard` (`NBG-051`, kind: `Definitional`)
- **Statement (Unicode):** `Π(C:Class), ((Card(C) → Σ(K:Class), (CardOf(K) = C)) × ((Σ(K:Class), (CardOf(K) = C)) → Card(C)))`
- **Statement (ANSII):** `Pi(C:Class), ((Card(C) -> Sigma(K:Class), (CardOf(K) = C)) * ((Sigma(K:Class), (CardOf(K) = C)) -> Card(C)))`
- **Proof Term:** `(λ(C:Class). ⟨(λ(h:Card(C)). let res:Σ(K:Class), (CardOf(K) = C) = h in res), (λ(h:Σ(K:Class), (CardOf(K) = C)). let res:Card(C) = h in res)⟩)`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-052 `thm_omega_card` (Derived)

- **Identifier:** `thm_omega_card` (`NBG-052`, kind: `Derived`)
- **Statement (Unicode):** `Card(ω)`
- **Statement (ANSII):** `Card(omega)`
- **Proof Term:** `(snd(((λ(C:Class). ⟨(λ(h:Card(C)). let res:Σ(K:Class), (CardOf(K) = C) = h in res), (λ(h:Σ(K:Class), (CardOf(K) = C)). let res:Card(C) = h in res)⟩) ω)) ⟨ω, ax_cardof_omega⟩)`
- **Axioms Used:** `ax_cardof_omega`
- **Definitions Used:** `(none)`

### NBG-053 `thm_on_card` (Derived)

- **Identifier:** `thm_on_card` (`NBG-053`, kind: `Derived`)
- **Statement (Unicode):** `Card(On)`
- **Statement (ANSII):** `Card(On)`
- **Proof Term:** `(snd(((λ(C:Class). ⟨(λ(h:Card(C)). let res:Σ(K:Class), (CardOf(K) = C) = h in res), (λ(h:Σ(K:Class), (CardOf(K) = C)). let res:Card(C) = h in res)⟩) On)) ⟨On, ax_cardof_on⟩)`
- **Axioms Used:** `ax_cardof_on`
- **Definitions Used:** `(none)`

### NBG-054 `thm_v_not_card` (Derived)

- **Identifier:** `thm_v_not_card` (`NBG-054`, kind: `Derived`)
- **Statement (Unicode):** `(Card(V) → 𝟘)`
- **Statement (ANSII):** `(Card(V) -> Void)`
- **Proof Term:** `(λ(hCardV:Card(V)). ax_cardof_never_v(fst((fst(((λ(C:Class). ⟨(λ(h:Card(C)). let res:Σ(K:Class), (CardOf(K) = C) = h in res), (λ(h:Σ(K:Class), (CardOf(K) = C)). let res:Card(C) = h in res)⟩) V)) hCardV)), snd((fst(((λ(C:Class). ⟨(λ(h:Card(C)). let res:Σ(K:Class), (CardOf(K) = C) = h in res), (λ(h:Σ(K:Class), (CardOf(K) = C)). let res:Card(C) = h in res)⟩) V)) hCardV))))`
- **Axioms Used:** `ax_cardof_never_v`
- **Definitions Used:** `(none)`

### NBG-055 `ax_tarski_universes` (Axiomatic)

- **Identifier:** `ax_tarski_universes` (`NBG-055`, kind: `Axiomatic`)
- **Statement (Unicode):** `Π(X:Class), (set(X) → Σ(U:Class), (universe(U) × ((X ∈ U) × set(U))))`
- **Statement (ANSII):** `Pi(X:Class), (set(X) -> Sigma(U:Class), (universe(U) * ((X in U) * set(U))))`
- **Proof Term:** `plan_tarski_axm`
- **Axioms Used:** `plan_tarski_axm`
- **Definitions Used:** `(none)`

### NBG-056 `def_binary_union` (Definitional)

- **Identifier:** `def_binary_union` (`NBG-056`, kind: `Definitional`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), Π(z:Class), (((z ∈ (A ∪ B)) → Π(C:Prop), (((z ∈ A) → C) → (((z ∈ B) → C) → C))) × ((Π(C:Prop), (((z ∈ A) → C) → (((z ∈ B) → C) → C))) → (z ∈ (A ∪ B))))`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), Pi(z:Class), (((z in (A u+ B)) -> Pi(C:Prop), (((z in A) -> C) -> (((z in B) -> C) -> C))) * ((Pi(C:Prop), (((z in A) -> C) -> (((z in B) -> C) -> C))) -> (z in (A u+ B))))`
- **Proof Term:** `(λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∪ B))). let res:Π(C:Prop), (((z ∈ A) → C) → (((z ∈ B) → C) → C)) = h in res), (λ(h:Π(C:Prop), (((z ∈ A) → C) → (((z ∈ B) → C) → C))). let res:(z ∈ (A ∪ B)) = h in res)⟩)))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-057 `def_binary_inter` (Definitional)

- **Identifier:** `def_binary_inter` (`NBG-057`, kind: `Definitional`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), Π(z:Class), (((z ∈ (A ∩ B)) → ((z ∈ A) × (z ∈ B))) × (((z ∈ A) × (z ∈ B)) → (z ∈ (A ∩ B))))`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), Pi(z:Class), (((z in (A n* B)) -> ((z in A) * (z in B))) * (((z in A) * (z in B)) -> (z in (A n* B))))`
- **Proof Term:** `(λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∩ B))). let res:((z ∈ A) × (z ∈ B)) = h in res), (λ(h:((z ∈ A) × (z ∈ B))). let res:(z ∈ (A ∩ B)) = h in res)⟩)))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-058 `def_unary_union` (Definitional)

- **Identifier:** `def_unary_union` (`NBG-058`, kind: `Definitional`)
- **Statement (Unicode):** `Π(A:Class), Π(z:Class), (((z ∈ ⋃(A)) → Σ(y:Class), ((y ∈ A) × (z ∈ y))) × ((Σ(y:Class), ((y ∈ A) × (z ∈ y))) → (z ∈ ⋃(A))))`
- **Statement (ANSII):** `Pi(A:Class), Pi(z:Class), (((z in Union(A)) -> Sigma(y:Class), ((y in A) * (z in y))) * ((Sigma(y:Class), ((y in A) * (z in y))) -> (z in Union(A))))`
- **Proof Term:** `(λ(A:Class). (λ(z:Class). ⟨(λ(h:(z ∈ ⋃(A))). let res:Σ(y:Class), ((y ∈ A) × (z ∈ y)) = h in res), (λ(h:Σ(y:Class), ((y ∈ A) × (z ∈ y))). let res:(z ∈ ⋃(A)) = h in res)⟩))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-059 `def_unary_inter` (Definitional)

- **Identifier:** `def_unary_inter` (`NBG-059`, kind: `Definitional`)
- **Statement (Unicode):** `Π(A:Class), Π(z:Class), (((z ∈ ⋂(A)) → Π(y:Class), ((y ∈ A) → (z ∈ y))) × ((Π(y:Class), ((y ∈ A) → (z ∈ y))) → (z ∈ ⋂(A))))`
- **Statement (ANSII):** `Pi(A:Class), Pi(z:Class), (((z in Inter(A)) -> Pi(y:Class), ((y in A) -> (z in y))) * ((Pi(y:Class), ((y in A) -> (z in y))) -> (z in Inter(A))))`
- **Proof Term:** `(λ(A:Class). (λ(z:Class). ⟨(λ(h:(z ∈ ⋂(A))). let res:Π(y:Class), ((y ∈ A) → (z ∈ y)) = h in res), (λ(h:Π(y:Class), ((y ∈ A) → (z ∈ y))). let res:(z ∈ ⋂(A)) = h in res)⟩))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-060 `def_singleton` (Definitional)

- **Identifier:** `def_singleton` (`NBG-060`, kind: `Definitional`)
- **Statement (Unicode):** `Π(a:Class), Π(z:Class), (((z ∈ {a}) → (set(a) × (z = a))) × ((set(a) × (z = a)) → (z ∈ {a})))`
- **Statement (ANSII):** `Pi(a:Class), Pi(z:Class), (((z in {a}) -> (set(a) * (z = a))) * ((set(a) * (z = a)) -> (z in {a})))`
- **Proof Term:** `(λ(a:Class). (λ(z:Class). ⟨(λ(h:(z ∈ {a})). let res:(set(a) × (z = a)) = h in res), (λ(h:(set(a) × (z = a))). let res:(z ∈ {a}) = h in res)⟩))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-061 `def_upair` (Definitional)

- **Identifier:** `def_upair` (`NBG-061`, kind: `Definitional`)
- **Statement (Unicode):** `Π(a:Class), Π(b:Class), Π(z:Class), (((z ∈ {a, b}) → Π(C:Prop), (((z = a) → C) → (((z = b) → C) → C))) × ((Π(C:Prop), (((z = a) → C) → (((z = b) → C) → C))) → (z ∈ {a, b})))`
- **Statement (ANSII):** `Pi(a:Class), Pi(b:Class), Pi(z:Class), (((z in {a, b}) -> Pi(C:Prop), (((z = a) -> C) -> (((z = b) -> C) -> C))) * ((Pi(C:Prop), (((z = a) -> C) -> (((z = b) -> C) -> C))) -> (z in {a, b})))`
- **Proof Term:** `(λ(a:Class). (λ(b:Class). (λ(z:Class). ⟨(λ(h:(z ∈ {a, b})). let res:Π(C:Prop), (((z = a) → C) → (((z = b) → C) → C)) = h in res), (λ(h:Π(C:Prop), (((z = a) → C) → (((z = b) → C) → C))). let res:(z ∈ {a, b}) = h in res)⟩)))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-062 `thm_russell_class_not_set` (Derived)

- **Identifier:** `thm_russell_class_not_set` (`NBG-062`, kind: `Derived`)
- **Statement (Unicode):** `((Σ(R:Class), (set(R) × (Π(x:Class), (((x ∈ R) → (set(x) × ((x ∈ x) → 𝟘))) × ((set(x) × ((x ∈ x) → 𝟘)) → (x ∈ R)))))) → 𝟘)`
- **Statement (ANSII):** `((Sigma(R:Class), (set(R) * (Pi(x:Class), (((x in R) -> (set(x) * ((x in x) -> Void))) * ((set(x) * ((x in x) -> Void)) -> (x in R)))))) -> Void)`
- **Proof Term:** `(λ(hExists:Σ(R:Class), (set(R) × (Π(x:Class), (((x ∈ R) → (set(x) × ((x ∈ x) → 𝟘))) × ((set(x) × ((x ∈ x) → 𝟘)) → (x ∈ R)))))). ((λ(hIn:(fst(hExists) ∈ fst(hExists))). (snd((fst((snd(snd(hExists)) fst(hExists))) hIn)) hIn)) (snd((snd(snd(hExists)) fst(hExists))) ⟨fst(snd(hExists)), (λ(hIn:(fst(hExists) ∈ fst(hExists))). (snd((fst((snd(snd(hExists)) fst(hExists))) hIn)) hIn))⟩)))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-063 `thm_dunaev_tagged_pair_proj` (Derived)

- **Identifier:** `thm_dunaev_tagged_pair_proj` (`NBG-063`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), ((pr1((A, B)) = A) × (pr2((A, B)) = B))`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), ((pr1((A, B)) = A) * (pr2((A, B)) = B))`
- **Proof Term:** `(λ(A:Class). (λ(B:Class). ⟨ax_dunaev_pr1(A, B), ax_dunaev_pr2(A, B)⟩))`
- **Axioms Used:** `ax_dunaev_pr1, ax_dunaev_pr2`
- **Definitions Used:** `(none)`

### NBG-064 `thm_dunaev_pair_injectivity` (Derived)

- **Identifier:** `thm_dunaev_pair_injectivity` (`NBG-064`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), Π(C:Class), Π(D:Class), (((A, B) = (C, D)) → ((A = C) × (B = D)))`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), Pi(C:Class), Pi(D:Class), (((A, B) = (C, D)) -> ((A = C) * (B = D)))`
- **Proof Term:** `(λ(A:Class). (λ(B:Class). (λ(C:Class). (λ(D:Class). (λ(hEq:((A, B) = (C, D))). ⟨(((ax_eq_trans(A, pr1((C, D))) C) (((ax_eq_trans(A, pr1((A, B))) pr1((C, D))) (ax_eq_sym(pr1((A, B)), A) fst((((λ(A:Class). (λ(B:Class). ⟨ax_dunaev_pr1(A, B), ax_dunaev_pr2(A, B)⟩)) A) B)))) (ax_eq_cong_pr1((A, B), (C, D)) hEq))) fst((((λ(A:Class). (λ(B:Class). ⟨ax_dunaev_pr1(A, B), ax_dunaev_pr2(A, B)⟩)) C) D))), (((ax_eq_trans(B, pr2((C, D))) D) (((ax_eq_trans(B, pr2((A, B))) pr2((C, D))) (ax_eq_sym(pr2((A, B)), B) snd((((λ(A:Class). (λ(B:Class). ⟨ax_dunaev_pr1(A, B), ax_dunaev_pr2(A, B)⟩)) A) B)))) (ax_eq_cong_pr2((A, B), (C, D)) hEq))) snd((((λ(A:Class). (λ(B:Class). ⟨ax_dunaev_pr1(A, B), ax_dunaev_pr2(A, B)⟩)) C) D)))⟩)))))`
- **Axioms Used:** `ax_eq_trans, ax_eq_sym, ax_dunaev_pr1, ax_dunaev_pr2, ax_eq_cong_pr1, ax_eq_cong_pr2`
- **Definitions Used:** `(none)`

### NBG-065 `thm_empty_set_elim` (Derived)

- **Identifier:** `thm_empty_set_elim` (`NBG-065`, kind: `Derived`)
- **Statement (Unicode):** `Π(X:Class), ((Π(z:Class), ((z ∈ X) → 𝟘)) → (X = ∅))`
- **Statement (ANSII):** `Pi(X:Class), ((Pi(z:Class), ((z in X) -> Void)) -> (X = EmptySet))`
- **Proof Term:** `(λ(X:Class). (λ(h:Π(z:Class), ((z ∈ X) → 𝟘)). (plan_extensionality(X, ∅) (λ(z:Class). ⟨(λ(hz:(z ∈ X)). ax_false_elim((z ∈ ∅), ((h z) hz))), (λ(hz:(z ∈ ∅)). ax_false_elim((z ∈ X), ax_empty_no_elements(z, hz)))⟩))))`
- **Axioms Used:** `plan_extensionality, ax_false_elim, ax_empty_no_elements`
- **Definitions Used:** `(none)`

### NBG-066 `thm_every_set_in_v` (Derived)

- **Identifier:** `thm_every_set_in_v` (`NBG-066`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), (set(x) → (x ∈ V))`
- **Statement (ANSII):** `Pi(x:Class), (set(x) -> (x in V))`
- **Proof Term:** `(λ(x:Class). snd(((fst(((λ(X:Class). ⟨(λ(hEq:(X = V)). (λ(z:Class). ⟨(λ(hzX:(z ∈ X)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), X) V) hEq) hzX)), (λ(hzSet:set(z)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), V) X) (ax_eq_sym(X, V) hEq)) hzSet))⟩)), (λ(hChar:Π(z:Class), (((z ∈ X) → set(z)) × (set(z) → (z ∈ X)))). (ax_extensionality(X, V) hChar))⟩) V)) refl(V)) x)))`
- **Axioms Used:** `ax_eq_subst, ax_eq_sym, ax_extensionality`
- **Definitions Used:** `(none)`

### NBG-067 `thm_in_v_is_set` (Derived)

- **Identifier:** `thm_in_v_is_set` (`NBG-067`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), ((x ∈ V) → set(x))`
- **Statement (ANSII):** `Pi(x:Class), ((x in V) -> set(x))`
- **Proof Term:** `(λ(x:Class). fst(((fst(((λ(X:Class). ⟨(λ(hEq:(X = V)). (λ(z:Class). ⟨(λ(hzX:(z ∈ X)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), X) V) hEq) hzX)), (λ(hzSet:set(z)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), V) X) (ax_eq_sym(X, V) hEq)) hzSet))⟩)), (λ(hChar:Π(z:Class), (((z ∈ X) → set(z)) × (set(z) → (z ∈ X)))). (ax_extensionality(X, V) hChar))⟩) V)) refl(V)) x)))`
- **Axioms Used:** `ax_eq_subst, ax_eq_sym, ax_extensionality`
- **Definitions Used:** `(none)`

### NBG-068 `thm_emptyset_in_v` (Derived)

- **Identifier:** `thm_emptyset_in_v` (`NBG-068`, kind: `Derived`)
- **Statement (Unicode):** `(∅ ∈ V)`
- **Statement (ANSII):** `(EmptySet in V)`
- **Proof Term:** `(((λ(x:Class). snd(((fst(((λ(X:Class). ⟨(λ(hEq:(X = V)). (λ(z:Class). ⟨(λ(hzX:(z ∈ X)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), X) V) hEq) hzX)), (λ(hzSet:set(z)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), V) X) (ax_eq_sym(X, V) hEq)) hzSet))⟩)), (λ(hChar:Π(z:Class), (((z ∈ X) → set(z)) × (set(z) → (z ∈ X)))). (ax_extensionality(X, V) hChar))⟩) V)) refl(V)) x))) ∅) ax_empty_set)`
- **Axioms Used:** `ax_eq_subst, ax_eq_sym, ax_extensionality, ax_empty_set`
- **Definitions Used:** `(none)`

### NBG-069 `thm_omega_in_v` (Derived)

- **Identifier:** `thm_omega_in_v` (`NBG-069`, kind: `Derived`)
- **Statement (Unicode):** `(ω ∈ V)`
- **Statement (ANSII):** `(omega in V)`
- **Proof Term:** `(((λ(x:Class). snd(((fst(((λ(X:Class). ⟨(λ(hEq:(X = V)). (λ(z:Class). ⟨(λ(hzX:(z ∈ X)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), X) V) hEq) hzX)), (λ(hzSet:set(z)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), V) X) (ax_eq_sym(X, V) hEq)) hzSet))⟩)), (λ(hChar:Π(z:Class), (((z ∈ X) → set(z)) × (set(z) → (z ∈ X)))). (ax_extensionality(X, V) hChar))⟩) V)) refl(V)) x))) ω) plan_omega_set)`
- **Axioms Used:** `ax_eq_subst, ax_eq_sym, ax_extensionality, plan_omega_set`
- **Definitions Used:** `(none)`

### NBG-070 `thm_power_omega_is_set` (Derived)

- **Identifier:** `thm_power_omega_is_set` (`NBG-070`, kind: `Derived`)
- **Statement (Unicode):** `set(𝒫(ω))`
- **Statement (ANSII):** `set(Power(omega))`
- **Proof Term:** `plan_exponent(ω, plan_omega_set)`
- **Axioms Used:** `plan_exponent, plan_omega_set`
- **Definitions Used:** `(none)`

### NBG-071 `thm_singleton_self_in` (Derived)

- **Identifier:** `thm_singleton_self_in` (`NBG-071`, kind: `Derived`)
- **Statement (Unicode):** `Π(a:Class), (set(a) → (a ∈ {a}))`
- **Statement (ANSII):** `Pi(a:Class), (set(a) -> (a in {a}))`
- **Proof Term:** `(λ(a:Class). (λ(hSetA:set(a)). (snd((((λ(a:Class). (λ(z:Class). ⟨(λ(h:(z ∈ {a})). let res:(set(a) × (z = a)) = h in res), (λ(h:(set(a) × (z = a))). let res:(z ∈ {a}) = h in res)⟩)) a) a)) ⟨hSetA, refl(a)⟩)))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-072 `thm_upair_left_in` (Derived)

- **Identifier:** `thm_upair_left_in` (`NBG-072`, kind: `Derived`)
- **Statement (Unicode):** `Π(a:Class), Π(b:Class), (a ∈ {a, b})`
- **Statement (ANSII):** `Pi(a:Class), Pi(b:Class), (a in {a, b})`
- **Proof Term:** `(λ(a:Class). (λ(b:Class). (snd(((((λ(a:Class). (λ(b:Class). (λ(z:Class). ⟨(λ(h:(z ∈ {a, b})). let res:Π(C:Prop), (((z = a) → C) → (((z = b) → C) → C)) = h in res), (λ(h:Π(C:Prop), (((z = a) → C) → (((z = b) → C) → C))). let res:(z ∈ {a, b}) = h in res)⟩))) a) b) a)) (λ(C:Prop). (λ(fa:((a = a) → C)). (λ(fb:((a = b) → C)). (fa refl(a))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-073 `thm_upair_right_in` (Derived)

- **Identifier:** `thm_upair_right_in` (`NBG-073`, kind: `Derived`)
- **Statement (Unicode):** `Π(a:Class), Π(b:Class), (b ∈ {a, b})`
- **Statement (ANSII):** `Pi(a:Class), Pi(b:Class), (b in {a, b})`
- **Proof Term:** `(λ(a:Class). (λ(b:Class). (snd(((((λ(a:Class). (λ(b:Class). (λ(z:Class). ⟨(λ(h:(z ∈ {a, b})). let res:Π(C:Prop), (((z = a) → C) → (((z = b) → C) → C)) = h in res), (λ(h:Π(C:Prop), (((z = a) → C) → (((z = b) → C) → C))). let res:(z ∈ {a, b}) = h in res)⟩))) a) b) b)) (λ(C:Prop). (λ(fa:((b = a) → C)). (λ(fb:((b = b) → C)). (fb refl(b))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-074 `thm_inter_subset_left` (Derived)

- **Identifier:** `thm_inter_subset_left` (`NBG-074`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), ((A ∩ B) ⊆ A)`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), ((A n* B) c= A)`
- **Proof Term:** `(λ(A:Class). (λ(B:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) (A ∩ B)) A)) (λ(z:Class). (λ(hz:(z ∈ (A ∩ B))). fst((fst(((((λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∩ B))). let res:((z ∈ A) × (z ∈ B)) = h in res), (λ(h:((z ∈ A) × (z ∈ B))). let res:(z ∈ (A ∩ B)) = h in res)⟩))) A) B) z)) hz)))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-075 `thm_inter_subset_right` (Derived)

- **Identifier:** `thm_inter_subset_right` (`NBG-075`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), ((A ∩ B) ⊆ B)`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), ((A n* B) c= B)`
- **Proof Term:** `(λ(A:Class). (λ(B:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) (A ∩ B)) B)) (λ(z:Class). (λ(hz:(z ∈ (A ∩ B))). snd((fst(((((λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∩ B))). let res:((z ∈ A) × (z ∈ B)) = h in res), (λ(h:((z ∈ A) × (z ∈ B))). let res:(z ∈ (A ∩ B)) = h in res)⟩))) A) B) z)) hz)))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-076 `thm_union_subset_left` (Derived)

- **Identifier:** `thm_union_subset_left` (`NBG-076`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), (A ⊆ (A ∪ B))`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), (A c= (A u+ B))`
- **Proof Term:** `(λ(A:Class). (λ(B:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) A) (A ∪ B))) (λ(z:Class). (λ(hz:(z ∈ A)). (snd(((((λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∪ B))). let res:Π(C:Prop), (((z ∈ A) → C) → (((z ∈ B) → C) → C)) = h in res), (λ(h:Π(C:Prop), (((z ∈ A) → C) → (((z ∈ B) → C) → C))). let res:(z ∈ (A ∪ B)) = h in res)⟩))) A) B) z)) (λ(C:Prop). (λ(fa:((z ∈ A) → C)). (λ(fb:((z ∈ B) → C)). (fa hz))))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-077 `thm_union_subset_right` (Derived)

- **Identifier:** `thm_union_subset_right` (`NBG-077`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), (B ⊆ (A ∪ B))`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), (B c= (A u+ B))`
- **Proof Term:** `(λ(A:Class). (λ(B:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) B) (A ∪ B))) (λ(z:Class). (λ(hz:(z ∈ B)). (snd(((((λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∪ B))). let res:Π(C:Prop), (((z ∈ A) → C) → (((z ∈ B) → C) → C)) = h in res), (λ(h:Π(C:Prop), (((z ∈ A) → C) → (((z ∈ B) → C) → C))). let res:(z ∈ (A ∪ B)) = h in res)⟩))) A) B) z)) (λ(C:Prop). (λ(fa:((z ∈ A) → C)). (λ(fb:((z ∈ B) → C)). (fb hz))))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-078 `thm_inter_idem_subset` (Derived)

- **Identifier:** `thm_inter_idem_subset` (`NBG-078`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), ((A ∩ A) ⊆ A)`
- **Statement (ANSII):** `Pi(A:Class), ((A n* A) c= A)`
- **Proof Term:** `(λ(A:Class). (((λ(A:Class). (λ(B:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) (A ∩ B)) A)) (λ(z:Class). (λ(hz:(z ∈ (A ∩ B))). fst((fst(((((λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∩ B))). let res:((z ∈ A) × (z ∈ B)) = h in res), (λ(h:((z ∈ A) × (z ∈ B))). let res:(z ∈ (A ∩ B)) = h in res)⟩))) A) B) z)) hz))))))) A) A))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-079 `thm_union_idem_subset` (Derived)

- **Identifier:** `thm_union_idem_subset` (`NBG-079`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), (A ⊆ (A ∪ A))`
- **Statement (ANSII):** `Pi(A:Class), (A c= (A u+ A))`
- **Proof Term:** `(λ(A:Class). (((λ(A:Class). (λ(B:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) A) (A ∪ B))) (λ(z:Class). (λ(hz:(z ∈ A)). (snd(((((λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∪ B))). let res:Π(C:Prop), (((z ∈ A) → C) → (((z ∈ B) → C) → C)) = h in res), (λ(h:Π(C:Prop), (((z ∈ A) → C) → (((z ∈ B) → C) → C))). let res:(z ∈ (A ∪ B)) = h in res)⟩))) A) B) z)) (λ(C:Prop). (λ(fa:((z ∈ A) → C)). (λ(fb:((z ∈ B) → C)). (fa hz)))))))))) A) A))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-080 `thm_inter_set_left` (Derived)

- **Identifier:** `thm_inter_set_left` (`NBG-080`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), (set(A) → set((A ∩ B)))`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), (set(A) -> set((A n* B)))`
- **Proof Term:** `(λ(A:Class). (λ(B:Class). (λ(hSetA:set(A)). (plan_heredity((A ∩ B), A) ⟨(((λ(A:Class). (λ(B:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) (A ∩ B)) A)) (λ(z:Class). (λ(hz:(z ∈ (A ∩ B))). fst((fst(((((λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∩ B))). let res:((z ∈ A) × (z ∈ B)) = h in res), (λ(h:((z ∈ A) × (z ∈ B))). let res:(z ∈ (A ∩ B)) = h in res)⟩))) A) B) z)) hz))))))) A) B), hSetA⟩))))`
- **Axioms Used:** `plan_heredity`
- **Definitions Used:** `(none)`

### NBG-081 `thm_semi_singleton_sub_char` (Derived)

- **Identifier:** `thm_semi_singleton_sub_char` (`NBG-081`, kind: `Derived`)
- **Statement (Unicode):** `Π(s:Class), Π(A:Class), Π(x:Class), Π(y:Class), (((s ⊆ A) × (Π(u:Class), Π(v:Class), (((u ∈ s) × (v ∈ s)) → (u = v)))) → (((x ∈ s) × (y ∈ s)) → ((x ∈ A) × (x = y))))`
- **Statement (ANSII):** `Pi(s:Class), Pi(A:Class), Pi(x:Class), Pi(y:Class), (((s c= A) * (Pi(u:Class), Pi(v:Class), (((u in s) * (v in s)) -> (u = v)))) -> (((x in s) * (y in s)) -> ((x in A) * (x = y))))`
- **Proof Term:** `(λ(s:Class). (λ(A:Class). (λ(x:Class). (λ(y:Class). (λ(hSSS:((s ⊆ A) × (Π(u:Class), Π(v:Class), (((u ∈ s) × (v ∈ s)) → (u = v))))). (λ(hXY:((x ∈ s) × (y ∈ s))). ⟨(((fst((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) s) A)) fst(hSSS)) x) fst(hXY)), (((snd(hSSS) x) y) hXY)⟩))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-082 `thm_family_value_eval` (Derived)

- **Identifier:** `thm_family_value_eval` (`NBG-082`, kind: `Derived`)
- **Statement (Unicode):** `Π(F:Class), Π(x:Class), Π(z:Class), Π(s:Class), Π(u:Class), (((s ⊆ z) × ((u ∈ ValOf(F, x)) → (u ∈ s))) → ((u ∈ ValOf(F, x)) → (u ∈ z)))`
- **Statement (ANSII):** `Pi(F:Class), Pi(x:Class), Pi(z:Class), Pi(s:Class), Pi(u:Class), (((s c= z) * ((u in ValOf(F, x)) -> (u in s))) -> ((u in ValOf(F, x)) -> (u in z)))`
- **Proof Term:** `(λ(F:Class). (λ(x:Class). (λ(z:Class). (λ(s:Class). (λ(u:Class). (λ(hFam:((s ⊆ z) × ((u ∈ ValOf(F, x)) → (u ∈ s)))). (λ(hUinVal:(u ∈ ValOf(F, x))). (((fst((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) s) z)) fst(hFam)) u) (snd(hFam) hUinVal)))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-083 `thm_sigma_model_proj` (Derived)

- **Identifier:** `thm_sigma_model_proj` (`NBG-083`, kind: `Derived`)
- **Statement (Unicode):** `Π(B:Class), Π(x:Class), Π(y:Class), (((((x, y) ∈ SigmaModel(B)) → ((x ∈ Dom(B)) × (y ∈ ValOf(B, x)))) × ((x, y) ∈ SigmaModel(B))) → ((x ∈ Dom(B)) × (y ∈ ValOf(B, x))))`
- **Statement (ANSII):** `Pi(B:Class), Pi(x:Class), Pi(y:Class), (((((x, y) in SigmaModel(B)) -> ((x in Dom(B)) * (y in ValOf(B, x)))) * ((x, y) in SigmaModel(B))) -> ((x in Dom(B)) * (y in ValOf(B, x))))`
- **Proof Term:** `(λ(B:Class). (λ(x:Class). (λ(y:Class). (λ(h:((((x, y) ∈ SigmaModel(B)) → ((x ∈ Dom(B)) × (y ∈ ValOf(B, x)))) × ((x, y) ∈ SigmaModel(B)))). (fst(h) snd(h))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-084 `thm_pi_model_elim` (Derived)

- **Identifier:** `thm_pi_model_elim` (`NBG-084`, kind: `Derived`)
- **Statement (Unicode):** `Π(B:Class), Π(f:Class), Π(x:Class), (((Π(u:Class), ((u ∈ Dom(B)) → (ValOf(f, u) ∈ ValOf(B, u)))) × (x ∈ Dom(B))) → (ValOf(f, x) ∈ ValOf(B, x)))`
- **Statement (ANSII):** `Pi(B:Class), Pi(f:Class), Pi(x:Class), (((Pi(u:Class), ((u in Dom(B)) -> (ValOf(f, u) in ValOf(B, u)))) * (x in Dom(B))) -> (ValOf(f, x) in ValOf(B, x)))`
- **Proof Term:** `(λ(B:Class). (λ(f:Class). (λ(x:Class). (λ(hPi:((Π(u:Class), ((u ∈ Dom(B)) → (ValOf(f, u) ∈ ValOf(B, u)))) × (x ∈ Dom(B)))). ((fst(hPi) x) snd(hPi))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-085 `thm_if_dep_true_branch` (Derived)

- **Identifier:** `thm_if_dep_true_branch` (`NBG-085`, kind: `Derived`)
- **Statement (Unicode):** `Π(Phi:Prop), Π(T1:(Phi → Prop)), Π(T2:((Phi → 𝟘) → Prop)), (((Π(h:Phi), (T1 h)) × (Π(nh:(Phi → 𝟘)), (T2 nh))) → Π(h:Phi), (T1 h))`
- **Statement (ANSII):** `Pi(Phi:Prop), Pi(T1:(Phi -> Prop)), Pi(T2:((Phi -> Void) -> Prop)), (((Pi(h:Phi), (T1 h)) * (Pi(nh:(Phi -> Void)), (T2 nh))) -> Pi(h:Phi), (T1 h))`
- **Proof Term:** `(λ(Phi:Prop). (λ(T1:(Phi → Prop)). (λ(T2:((Phi → 𝟘) → Prop)). (λ(branches:((Π(h:Phi), (T1 h)) × (Π(nh:(Phi → 𝟘)), (T2 nh)))). (λ(h:Phi). (fst(branches) h))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-086 `thm_if_dep_false_branch` (Derived)

- **Identifier:** `thm_if_dep_false_branch` (`NBG-086`, kind: `Derived`)
- **Statement (Unicode):** `Π(Phi:Prop), Π(T1:(Phi → Prop)), Π(T2:((Phi → 𝟘) → Prop)), (((Π(h:Phi), (T1 h)) × (Π(nh:(Phi → 𝟘)), (T2 nh))) → Π(nh:(Phi → 𝟘)), (T2 nh))`
- **Statement (ANSII):** `Pi(Phi:Prop), Pi(T1:(Phi -> Prop)), Pi(T2:((Phi -> Void) -> Prop)), (((Pi(h:Phi), (T1 h)) * (Pi(nh:(Phi -> Void)), (T2 nh))) -> Pi(nh:(Phi -> Void)), (T2 nh))`
- **Proof Term:** `(λ(Phi:Prop). (λ(T1:(Phi → Prop)). (λ(T2:((Phi → 𝟘) → Prop)). (λ(branches:((Π(h:Phi), (T1 h)) × (Π(nh:(Phi → 𝟘)), (T2 nh)))). (λ(nh:(Phi → 𝟘)). (snd(branches) nh))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-087 `thm_model_stratification_trans` (Derived)

- **Identifier:** `thm_model_stratification_trans` (`NBG-087`, kind: `Derived`)
- **Statement (Unicode):** `Π(W:Class), Π(E:Class), Π(T:Class), Π(F:Class), (((mu_A(W) ⊆ mu_A(E)) × ((mu_A(E) ⊆ mu_A(T)) × (mu_A(T) ⊆ mu_A(F)))) → (mu_A(W) ⊆ mu_A(F)))`
- **Statement (ANSII):** `Pi(W:Class), Pi(E:Class), Pi(T:Class), Pi(F:Class), (((mu_A(W) c= mu_A(E)) * ((mu_A(E) c= mu_A(T)) * (mu_A(T) c= mu_A(F)))) -> (mu_A(W) c= mu_A(F)))`
- **Proof Term:** `(λ(W:Class). (λ(E:Class). (λ(T:Class). (λ(F:Class). (λ(hStrat:((mu_A(W) ⊆ mu_A(E)) × ((mu_A(E) ⊆ mu_A(T)) × (mu_A(T) ⊆ mu_A(F))))). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) mu_A(W)) mu_A(F))) (λ(z:Class). (λ(hz:(z ∈ mu_A(W))). (((fst((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) mu_A(T)) mu_A(F))) snd(snd(hStrat))) z) (((fst((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) mu_A(E)) mu_A(T))) fst(snd(hStrat))) z) (((fst((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) mu_A(W)) mu_A(E))) fst(hStrat)) z) hz)))))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-088 `thm_dunaev_pair_fst_beta` (Derived)

- **Identifier:** `thm_dunaev_pair_fst_beta` (`NBG-088`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), Π(y:Class), (pr1((x, y)) = x)`
- **Statement (ANSII):** `Pi(x:Class), Pi(y:Class), (pr1((x, y)) = x)`
- **Proof Term:** `(λ(x:Class). (λ(y:Class). ax_dunaev_pr1(x, y)))`
- **Axioms Used:** `ax_dunaev_pr1`
- **Definitions Used:** `(none)`

### NBG-089 `thm_dunaev_pair_snd_beta` (Derived)

- **Identifier:** `thm_dunaev_pair_snd_beta` (`NBG-089`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), Π(y:Class), (pr2((x, y)) = y)`
- **Statement (ANSII):** `Pi(x:Class), Pi(y:Class), (pr2((x, y)) = y)`
- **Proof Term:** `(λ(x:Class). (λ(y:Class). ax_dunaev_pr2(x, y)))`
- **Axioms Used:** `ax_dunaev_pr2`
- **Definitions Used:** `(none)`

### NBG-090 `thm_singleton_elem_eq` (Derived)

- **Identifier:** `thm_singleton_elem_eq` (`NBG-090`, kind: `Derived`)
- **Statement (Unicode):** `Π(a:Class), Π(z:Class), ((z ∈ {a}) → (z = a))`
- **Statement (ANSII):** `Pi(a:Class), Pi(z:Class), ((z in {a}) -> (z = a))`
- **Proof Term:** `(λ(a:Class). (λ(z:Class). (λ(hz:(z ∈ {a})). snd((fst((((λ(a:Class). (λ(z:Class). ⟨(λ(h:(z ∈ {a})). let res:(set(a) × (z = a)) = h in res), (λ(h:(set(a) × (z = a))). let res:(z ∈ {a}) = h in res)⟩)) a) z)) hz)))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-091 `thm_singleton_subset_upair_left` (Derived)

- **Identifier:** `thm_singleton_subset_upair_left` (`NBG-091`, kind: `Derived`)
- **Statement (Unicode):** `Π(a:Class), Π(b:Class), ({a} ⊆ {a, b})`
- **Statement (ANSII):** `Pi(a:Class), Pi(b:Class), ({a} c= {a, b})`
- **Proof Term:** `(λ(a:Class). (λ(b:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) {a}) {a, b})) (λ(z:Class). (λ(hz:(z ∈ {a})). (snd(((((λ(a:Class). (λ(b:Class). (λ(z:Class). ⟨(λ(h:(z ∈ {a, b})). let res:Π(C:Prop), (((z = a) → C) → (((z = b) → C) → C)) = h in res), (λ(h:Π(C:Prop), (((z = a) → C) → (((z = b) → C) → C))). let res:(z ∈ {a, b}) = h in res)⟩))) a) b) z)) (λ(C:Prop). (λ(fa:((z = a) → C)). (λ(fb:((z = b) → C)). (fa ((((λ(a:Class). (λ(z:Class). (λ(hz:(z ∈ {a})). snd((fst((((λ(a:Class). (λ(z:Class). ⟨(λ(h:(z ∈ {a})). let res:(set(a) × (z = a)) = h in res), (λ(h:(set(a) × (z = a))). let res:(z ∈ {a}) = h in res)⟩)) a) z)) hz))))) a) z) hz)))))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-092 `thm_singleton_subset_upair_right` (Derived)

- **Identifier:** `thm_singleton_subset_upair_right` (`NBG-092`, kind: `Derived`)
- **Statement (Unicode):** `Π(a:Class), Π(b:Class), ({b} ⊆ {a, b})`
- **Statement (ANSII):** `Pi(a:Class), Pi(b:Class), ({b} c= {a, b})`
- **Proof Term:** `(λ(a:Class). (λ(b:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) {b}) {a, b})) (λ(z:Class). (λ(hz:(z ∈ {b})). (snd(((((λ(a:Class). (λ(b:Class). (λ(z:Class). ⟨(λ(h:(z ∈ {a, b})). let res:Π(C:Prop), (((z = a) → C) → (((z = b) → C) → C)) = h in res), (λ(h:Π(C:Prop), (((z = a) → C) → (((z = b) → C) → C))). let res:(z ∈ {a, b}) = h in res)⟩))) a) b) z)) (λ(C:Prop). (λ(fa:((z = a) → C)). (λ(fb:((z = b) → C)). (fb ((((λ(a:Class). (λ(z:Class). (λ(hz:(z ∈ {a})). snd((fst((((λ(a:Class). (λ(z:Class). ⟨(λ(h:(z ∈ {a})). let res:(set(a) × (z = a)) = h in res), (λ(h:(set(a) × (z = a))). let res:(z ∈ {a}) = h in res)⟩)) a) z)) hz))))) b) z) hz)))))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-093 `thm_inter_subset_union` (Derived)

- **Identifier:** `thm_inter_subset_union` (`NBG-093`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), ((A ∩ B) ⊆ (A ∪ B))`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), ((A n* B) c= (A u+ B))`
- **Proof Term:** `(λ(A:Class). (λ(B:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) (A ∩ B)) (A ∪ B))) ((((((λ(X:Class). (λ(Y:Class). (λ(Z:Class). (λ(h1:Π(z:Class), ((z ∈ X) → (z ∈ Y))). (λ(h2:Π(z:Class), ((z ∈ Y) → (z ∈ Z))). (λ(z:Class). (λ(hz:(z ∈ X)). ((h2 z) ((h1 z) hz))))))))) (A ∩ B)) A) (A ∪ B)) (fst((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) (A ∩ B)) A)) (((λ(A:Class). (λ(B:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) (A ∩ B)) A)) (λ(z:Class). (λ(hz:(z ∈ (A ∩ B))). fst((fst(((((λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∩ B))). let res:((z ∈ A) × (z ∈ B)) = h in res), (λ(h:((z ∈ A) × (z ∈ B))). let res:(z ∈ (A ∩ B)) = h in res)⟩))) A) B) z)) hz))))))) A) B))) (fst((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) A) (A ∪ B))) (((λ(A:Class). (λ(B:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) A) (A ∪ B))) (λ(z:Class). (λ(hz:(z ∈ A)). (snd(((((λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∪ B))). let res:Π(C:Prop), (((z ∈ A) → C) → (((z ∈ B) → C) → C)) = h in res), (λ(h:Π(C:Prop), (((z ∈ A) → C) → (((z ∈ B) → C) → C))). let res:(z ∈ (A ∪ B)) = h in res)⟩))) A) B) z)) (λ(C:Prop). (λ(fa:((z ∈ A) → C)). (λ(fb:((z ∈ B) → C)). (fa hz)))))))))) A) B))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-094 `thm_inter_set_right` (Derived)

- **Identifier:** `thm_inter_set_right` (`NBG-094`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), (set(B) → set((A ∩ B)))`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), (set(B) -> set((A n* B)))`
- **Proof Term:** `(λ(A:Class). (λ(B:Class). (λ(hSetB:set(B)). (plan_heredity((A ∩ B), B) ⟨(((λ(A:Class). (λ(B:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) (A ∩ B)) B)) (λ(z:Class). (λ(hz:(z ∈ (A ∩ B))). snd((fst(((((λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∩ B))). let res:((z ∈ A) × (z ∈ B)) = h in res), (λ(h:((z ∈ A) × (z ∈ B))). let res:(z ∈ (A ∩ B)) = h in res)⟩))) A) B) z)) hz))))))) A) B), hSetB⟩))))`
- **Axioms Used:** `plan_heredity`
- **Definitions Used:** `(none)`

### NBG-095 `thm_emptyset_subset_all` (Derived)

- **Identifier:** `thm_emptyset_subset_all` (`NBG-095`, kind: `Derived`)
- **Statement (Unicode):** `Π(X:Class), (∅ ⊆ X)`
- **Statement (ANSII):** `Pi(X:Class), (EmptySet c= X)`
- **Proof Term:** `(λ(X:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) ∅) X)) ((λ(X:Class). (λ(z:Class). (λ(h:(z ∈ ∅)). ax_false_elim((z ∈ X), ax_empty_no_elements(z, h))))) X)))`
- **Axioms Used:** `ax_false_elim, ax_empty_no_elements`
- **Definitions Used:** `(none)`

### NBG-096 `thm_subset_antisym` (Derived)

- **Identifier:** `thm_subset_antisym` (`NBG-096`, kind: `Derived`)
- **Statement (Unicode):** `Π(X:Class), Π(Y:Class), (((X ⊆ Y) × (Y ⊆ X)) → (X = Y))`
- **Statement (ANSII):** `Pi(X:Class), Pi(Y:Class), (((X c= Y) * (Y c= X)) -> (X = Y))`
- **Proof Term:** `(λ(X:Class). (λ(Y:Class). (λ(hSubPair:((X ⊆ Y) × (Y ⊆ X))). (plan_extensionality(X, Y) (λ(z:Class). ⟨((fst((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) X) Y)) fst(hSubPair)) z), ((fst((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) Y) X)) snd(hSubPair)) z)⟩)))))`
- **Axioms Used:** `plan_extensionality`
- **Definitions Used:** `(none)`

### NBG-097 `thm_every_set_subset_v` (Derived)

- **Identifier:** `thm_every_set_subset_v` (`NBG-097`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), ((Π(z:Class), ((z ∈ A) → set(z))) → (A ⊆ V))`
- **Statement (ANSII):** `Pi(A:Class), ((Pi(z:Class), ((z in A) -> set(z))) -> (A c= V))`
- **Proof Term:** `(λ(A:Class). (λ(hElemSet:Π(z:Class), ((z ∈ A) → set(z))). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) A) V)) (λ(z:Class). (λ(hz:(z ∈ A)). (((λ(x:Class). snd(((fst(((λ(X:Class). ⟨(λ(hEq:(X = V)). (λ(z:Class). ⟨(λ(hzX:(z ∈ X)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), X) V) hEq) hzX)), (λ(hzSet:set(z)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), V) X) (ax_eq_sym(X, V) hEq)) hzSet))⟩)), (λ(hChar:Π(z:Class), (((z ∈ X) → set(z)) × (set(z) → (z ∈ X)))). (ax_extensionality(X, V) hChar))⟩) V)) refl(V)) x))) z) ((hElemSet z) hz)))))))`
- **Axioms Used:** `ax_eq_subst, ax_eq_sym, ax_extensionality`
- **Definitions Used:** `(none)`

### NBG-098 `thm_singleton_in_v_if_set` (Derived)

- **Identifier:** `thm_singleton_in_v_if_set` (`NBG-098`, kind: `Derived`)
- **Statement (Unicode):** `Π(a:Class), (set({a}) → ({a} ∈ V))`
- **Statement (ANSII):** `Pi(a:Class), (set({a}) -> ({a} in V))`
- **Proof Term:** `(λ(a:Class). (λ(hSetSing:set({a})). (((λ(x:Class). snd(((fst(((λ(X:Class). ⟨(λ(hEq:(X = V)). (λ(z:Class). ⟨(λ(hzX:(z ∈ X)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), X) V) hEq) hzX)), (λ(hzSet:set(z)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), V) X) (ax_eq_sym(X, V) hEq)) hzSet))⟩)), (λ(hChar:Π(z:Class), (((z ∈ X) → set(z)) × (set(z) → (z ∈ X)))). (ax_extensionality(X, V) hChar))⟩) V)) refl(V)) x))) {a}) hSetSing)))`
- **Axioms Used:** `ax_eq_subst, ax_eq_sym, ax_extensionality`
- **Definitions Used:** `(none)`

### NBG-099 `thm_power_omega_in_v` (Derived)

- **Identifier:** `thm_power_omega_in_v` (`NBG-099`, kind: `Derived`)
- **Statement (Unicode):** `(𝒫(ω) ∈ V)`
- **Statement (ANSII):** `(Power(omega) in V)`
- **Proof Term:** `(((λ(x:Class). snd(((fst(((λ(X:Class). ⟨(λ(hEq:(X = V)). (λ(z:Class). ⟨(λ(hzX:(z ∈ X)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), X) V) hEq) hzX)), (λ(hzSet:set(z)). (((ax_eq_subst((λ(C:Class). (z ∈ C)), V) X) (ax_eq_sym(X, V) hEq)) hzSet))⟩)), (λ(hChar:Π(z:Class), (((z ∈ X) → set(z)) × (set(z) → (z ∈ X)))). (ax_extensionality(X, V) hChar))⟩) V)) refl(V)) x))) 𝒫(ω)) plan_exponent(ω, plan_omega_set))`
- **Axioms Used:** `ax_eq_subst, ax_eq_sym, ax_extensionality, plan_exponent, plan_omega_set`
- **Definitions Used:** `(none)`

### NBG-100 `thm_inter_subset_both` (Derived)

- **Identifier:** `thm_inter_subset_both` (`NBG-100`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(B:Class), (((A ∩ B) ⊆ A) × ((A ∩ B) ⊆ B))`
- **Statement (ANSII):** `Pi(A:Class), Pi(B:Class), (((A n* B) c= A) * ((A n* B) c= B))`
- **Proof Term:** `(λ(A:Class). (λ(B:Class). ⟨(((λ(A:Class). (λ(B:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) (A ∩ B)) A)) (λ(z:Class). (λ(hz:(z ∈ (A ∩ B))). fst((fst(((((λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∩ B))). let res:((z ∈ A) × (z ∈ B)) = h in res), (λ(h:((z ∈ A) × (z ∈ B))). let res:(z ∈ (A ∩ B)) = h in res)⟩))) A) B) z)) hz))))))) A) B), (((λ(A:Class). (λ(B:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) (A ∩ B)) B)) (λ(z:Class). (λ(hz:(z ∈ (A ∩ B))). snd((fst(((((λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∩ B))). let res:((z ∈ A) × (z ∈ B)) = h in res), (λ(h:((z ∈ A) × (z ∈ B))). let res:(z ∈ (A ∩ B)) = h in res)⟩))) A) B) z)) hz))))))) A) B)⟩))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-101 `thm_semi_singleton_eq` (Derived)

- **Identifier:** `thm_semi_singleton_eq` (`NBG-101`, kind: `Derived`)
- **Statement (Unicode):** `Π(s:Class), Π(x:Class), Π(y:Class), ((Π(u:Class), Π(v:Class), ((u ∈ s) → ((v ∈ s) → (u = v)))) → ((x ∈ s) → ((y ∈ s) → (x = y))))`
- **Statement (ANSII):** `Pi(s:Class), Pi(x:Class), Pi(y:Class), ((Pi(u:Class), Pi(v:Class), ((u in s) -> ((v in s) -> (u = v)))) -> ((x in s) -> ((y in s) -> (x = y))))`
- **Proof Term:** `(λ(s:Class). (λ(x:Class). (λ(y:Class). (λ(hSemi:Π(u:Class), Π(v:Class), ((u ∈ s) → ((v ∈ s) → (u = v)))). (λ(hx:(x ∈ s)). (λ(hy:(y ∈ s)). ((((hSemi x) y) hx) hy)))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-102 `thm_semi_singleton_subclass_proj` (Derived)

- **Identifier:** `thm_semi_singleton_subclass_proj` (`NBG-102`, kind: `Derived`)
- **Statement (Unicode):** `Π(s:Class), Π(A:Class), (((s ⊆ A) × (Π(u:Class), Π(v:Class), ((u ∈ s) → ((v ∈ s) → (u = v))))) → ((s ⊆ A) × (Π(u:Class), Π(v:Class), ((u ∈ s) → ((v ∈ s) → (u = v))))))`
- **Statement (ANSII):** `Pi(s:Class), Pi(A:Class), (((s c= A) * (Pi(u:Class), Pi(v:Class), ((u in s) -> ((v in s) -> (u = v))))) -> ((s c= A) * (Pi(u:Class), Pi(v:Class), ((u in s) -> ((v in s) -> (u = v))))))`
- **Proof Term:** `(λ(s:Class). (λ(A:Class). (λ(hSss:((s ⊆ A) × (Π(u:Class), Π(v:Class), ((u ∈ s) → ((v ∈ s) → (u = v)))))). ⟨fst(hSss), snd(hSss)⟩)))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-103 `thm_class_lists_dunaev_step` (Derived)

- **Identifier:** `thm_class_lists_dunaev_step` (`NBG-103`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(L:Class), Π(x:Class), Π(xs:Class), ((Π(a:Class), Π(l:Class), ((a ∈ A) → ((l ∈ L) → ((a, l) ∈ L)))) → (((x ∈ A) × (xs ∈ L)) → ((x, xs) ∈ L)))`
- **Statement (ANSII):** `Pi(A:Class), Pi(L:Class), Pi(x:Class), Pi(xs:Class), ((Pi(a:Class), Pi(l:Class), ((a in A) -> ((l in L) -> ((a, l) in L)))) -> (((x in A) * (xs in L)) -> ((x, xs) in L)))`
- **Proof Term:** `(λ(A:Class). (λ(L:Class). (λ(x:Class). (λ(xs:Class). (λ(hStep:Π(a:Class), Π(l:Class), ((a ∈ A) → ((l ∈ L) → ((a, l) ∈ L)))). (λ(hPair:((x ∈ A) × (xs ∈ L))). ((((hStep x) xs) fst(hPair)) snd(hPair))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-104 `thm_family_value_vs_image` (Derived)

- **Identifier:** `thm_family_value_vs_image` (`NBG-104`, kind: `Derived`)
- **Statement (Unicode):** `Π(I:Class), Π(G:Class), Π(x:Class), ((ValOf(G, x) = ⋃(Image(G, {x}))) → ((pr2((I, G)) = G) × (ValOf(G, x) = ⋃(Image(G, {x})))))`
- **Statement (ANSII):** `Pi(I:Class), Pi(G:Class), Pi(x:Class), ((ValOf(G, x) = Union(Image(G, {x}))) -> ((pr2((I, G)) = G) * (ValOf(G, x) = Union(Image(G, {x})))))`
- **Proof Term:** `(λ(I:Class). (λ(G:Class). (λ(x:Class). (λ(hValImg:(ValOf(G, x) = ⋃(Image(G, {x})))). ⟨ax_dunaev_pr2(I, G), hValImg⟩))))`
- **Axioms Used:** `ax_dunaev_pr2`
- **Definitions Used:** `(none)`

### NBG-105 `thm_tight_universe_indexed_union` (Derived)

- **Identifier:** `thm_tight_universe_indexed_union` (`NBG-105`, kind: `Derived`)
- **Statement (Unicode):** `Π(U:Class), Π(I:Class), Π(G:Class), ((Π(A:Class), Π(B:Class), ((A ∈ U) → ((B ⊆ U) → ((Image(B, A) ⊆ U) → (⋃(Image(B, A)) ∈ U))))) → ((I ∈ U) → ((G ⊆ U) → ((Image(G, I) ⊆ U) → (⋃(Image(G, I)) ∈ U)))))`
- **Statement (ANSII):** `Pi(U:Class), Pi(I:Class), Pi(G:Class), ((Pi(A:Class), Pi(B:Class), ((A in U) -> ((B c= U) -> ((Image(B, A) c= U) -> (Union(Image(B, A)) in U))))) -> ((I in U) -> ((G c= U) -> ((Image(G, I) c= U) -> (Union(Image(G, I)) in U)))))`
- **Proof Term:** `(λ(U:Class). (λ(I:Class). (λ(G:Class). (λ(hTight:Π(A:Class), Π(B:Class), ((A ∈ U) → ((B ⊆ U) → ((Image(B, A) ⊆ U) → (⋃(Image(B, A)) ∈ U))))). (λ(hI:(I ∈ U)). (λ(hGSub:(G ⊆ U)). (λ(hImgSub:(Image(G, I) ⊆ U)). (((((hTight I) G) hI) hGSub) hImgSub))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-106 `thm_dunaev_rel_inverse_involutive` (Derived)

- **Identifier:** `thm_dunaev_rel_inverse_involutive` (`NBG-106`, kind: `Derived`)
- **Statement (Unicode):** `Π(R:Class), Π(x:Class), Π(y:Class), ((Π(u:Class), Π(v:Class), ((((u, v) ∈ RelConverse(R)) → ((v, u) ∈ R)) × (((v, u) ∈ R) → ((u, v) ∈ RelConverse(R))))) → ((Π(u:Class), Π(v:Class), ((((u, v) ∈ RelConverse(RelConverse(R))) → ((v, u) ∈ RelConverse(R))) × (((v, u) ∈ RelConverse(R)) → ((u, v) ∈ RelConverse(RelConverse(R)))))) → ((((x, y) ∈ R) → ((x, y) ∈ RelConverse(RelConverse(R)))) × (((x, y) ∈ RelConverse(RelConverse(R))) → ((x, y) ∈ R)))))`
- **Statement (ANSII):** `Pi(R:Class), Pi(x:Class), Pi(y:Class), ((Pi(u:Class), Pi(v:Class), ((((u, v) in RelConverse(R)) -> ((v, u) in R)) * (((v, u) in R) -> ((u, v) in RelConverse(R))))) -> ((Pi(u:Class), Pi(v:Class), ((((u, v) in RelConverse(RelConverse(R))) -> ((v, u) in RelConverse(R))) * (((v, u) in RelConverse(R)) -> ((u, v) in RelConverse(RelConverse(R)))))) -> ((((x, y) in R) -> ((x, y) in RelConverse(RelConverse(R)))) * (((x, y) in RelConverse(RelConverse(R))) -> ((x, y) in R)))))`
- **Proof Term:** `(λ(R:Class). (λ(x:Class). (λ(y:Class). (λ(hInv1:Π(u:Class), Π(v:Class), ((((u, v) ∈ RelConverse(R)) → ((v, u) ∈ R)) × (((v, u) ∈ R) → ((u, v) ∈ RelConverse(R))))). (λ(hInv2:Π(u:Class), Π(v:Class), ((((u, v) ∈ RelConverse(RelConverse(R))) → ((v, u) ∈ RelConverse(R))) × (((v, u) ∈ RelConverse(R)) → ((u, v) ∈ RelConverse(RelConverse(R)))))). ⟨(λ(hInR:((x, y) ∈ R)). (snd(((hInv2 x) y)) (snd(((hInv1 y) x)) hInR))), (λ(hInInv2:((x, y) ∈ RelConverse(RelConverse(R)))). (fst(((hInv1 y) x)) (fst(((hInv2 x) y)) hInInv2)))⟩)))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-107 `thm_inter_assoc` (Derived)

- **Identifier:** `thm_inter_assoc` (`NBG-107`, kind: `Derived`)
- **Statement (Unicode):** `Π(z:Class), Π(A:Class), Π(B:Class), Π(C:Class), ((((z ∈ A) × (z ∈ B)) × (z ∈ C)) → ((z ∈ A) × ((z ∈ B) × (z ∈ C))))`
- **Statement (ANSII):** `Pi(z:Class), Pi(A:Class), Pi(B:Class), Pi(C:Class), ((((z in A) * (z in B)) * (z in C)) -> ((z in A) * ((z in B) * (z in C))))`
- **Proof Term:** `(λ(z:Class). (λ(A:Class). (λ(B:Class). (λ(C:Class). (λ(h:(((z ∈ A) × (z ∈ B)) × (z ∈ C))). ⟨fst(fst(h)), ⟨snd(fst(h)), snd(h)⟩⟩)))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-108 `thm_union_distrib_inter` (Derived)

- **Identifier:** `thm_union_distrib_inter` (`NBG-108`, kind: `Derived`)
- **Statement (Unicode):** `Π(z:Class), Π(X:Class), Π(Y:Class), Π(Z:Class), ((Π(C:Prop), (((z ∈ X) → C) → ((((z ∈ Y) × (z ∈ Z)) → C) → C))) → ((Π(C:Prop), (((z ∈ X) → C) → (((z ∈ Y) → C) → C))) × (Π(C:Prop), (((z ∈ X) → C) → (((z ∈ Z) → C) → C)))))`
- **Statement (ANSII):** `Pi(z:Class), Pi(X:Class), Pi(Y:Class), Pi(Z:Class), ((Pi(C:Prop), (((z in X) -> C) -> ((((z in Y) * (z in Z)) -> C) -> C))) -> ((Pi(C:Prop), (((z in X) -> C) -> (((z in Y) -> C) -> C))) * (Pi(C:Prop), (((z in X) -> C) -> (((z in Z) -> C) -> C)))))`
- **Proof Term:** `(λ(z:Class). (λ(X:Class). (λ(Y:Class). (λ(Z:Class). (λ(hOr:Π(C:Prop), (((z ∈ X) → C) → ((((z ∈ Y) × (z ∈ Z)) → C) → C))). ⟨(λ(C:Prop). (λ(fX:((z ∈ X) → C)). (λ(fY:((z ∈ Y) → C)). (((hOr C) fX) (λ(hYZ:((z ∈ Y) × (z ∈ Z))). (fY fst(hYZ))))))), (λ(C:Prop). (λ(fX:((z ∈ X) → C)). (λ(fZ:((z ∈ Z) → C)). (((hOr C) fX) (λ(hYZ:((z ∈ Y) × (z ∈ Z))). (fZ snd(hYZ)))))))⟩)))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-109 `thm_dunaev_pair_fst_snd_eq` (Derived)

- **Identifier:** `thm_dunaev_pair_fst_snd_eq` (`NBG-109`, kind: `Derived`)
- **Statement (Unicode):** `Π(a:Class), Π(b:Class), Π(c:Class), Π(d:Class), (((a, b) = (c, d)) → ((a = c) × (b = d)))`
- **Statement (ANSII):** `Pi(a:Class), Pi(b:Class), Pi(c:Class), Pi(d:Class), (((a, b) = (c, d)) -> ((a = c) * (b = d)))`
- **Proof Term:** `(λ(a:Class). (λ(b:Class). (λ(c:Class). (λ(d:Class). (((((λ(A:Class). (λ(B:Class). (λ(C:Class). (λ(D:Class). (λ(hEq:((A, B) = (C, D))). ⟨(((ax_eq_trans(A, pr1((C, D))) C) (((ax_eq_trans(A, pr1((A, B))) pr1((C, D))) (ax_eq_sym(pr1((A, B)), A) fst((((λ(A:Class). (λ(B:Class). ⟨ax_dunaev_pr1(A, B), ax_dunaev_pr2(A, B)⟩)) A) B)))) (ax_eq_cong_pr1((A, B), (C, D)) hEq))) fst((((λ(A:Class). (λ(B:Class). ⟨ax_dunaev_pr1(A, B), ax_dunaev_pr2(A, B)⟩)) C) D))), (((ax_eq_trans(B, pr2((C, D))) D) (((ax_eq_trans(B, pr2((A, B))) pr2((C, D))) (ax_eq_sym(pr2((A, B)), B) snd((((λ(A:Class). (λ(B:Class). ⟨ax_dunaev_pr1(A, B), ax_dunaev_pr2(A, B)⟩)) A) B)))) (ax_eq_cong_pr2((A, B), (C, D)) hEq))) snd((((λ(A:Class). (λ(B:Class). ⟨ax_dunaev_pr1(A, B), ax_dunaev_pr2(A, B)⟩)) C) D)))⟩))))) a) b) c) d)))))`
- **Axioms Used:** `ax_eq_trans, ax_eq_sym, ax_dunaev_pr1, ax_dunaev_pr2, ax_eq_cong_pr1, ax_eq_cong_pr2`
- **Definitions Used:** `(none)`

### NBG-110 `thm_cantor_no_surjection_power` (Derived)

- **Identifier:** `thm_cantor_no_surjection_power` (`NBG-110`, kind: `Derived`)
- **Statement (Unicode):** `Π(A:Class), Π(F:Class), Π(D:Class), ((Π(x:Class), (((x ∈ D) → ((x ∈ A) × ((x ∈ ValOf(F, x)) → 𝟘))) × (((x ∈ A) × ((x ∈ ValOf(F, x)) → 𝟘)) → (x ∈ D)))) → ((Σ(a:Class), ((a ∈ A) × (Π(z:Class), (((z ∈ D) → (z ∈ ValOf(F, a))) × ((z ∈ ValOf(F, a)) → (z ∈ D)))))) → 𝟘))`
- **Statement (ANSII):** `Pi(A:Class), Pi(F:Class), Pi(D:Class), ((Pi(x:Class), (((x in D) -> ((x in A) * ((x in ValOf(F, x)) -> Void))) * (((x in A) * ((x in ValOf(F, x)) -> Void)) -> (x in D)))) -> ((Sigma(a:Class), ((a in A) * (Pi(z:Class), (((z in D) -> (z in ValOf(F, a))) * ((z in ValOf(F, a)) -> (z in D)))))) -> Void))`
- **Proof Term:** `(λ(A:Class). (λ(F:Class). (λ(D:Class). (λ(hDiag:Π(x:Class), (((x ∈ D) → ((x ∈ A) × ((x ∈ ValOf(F, x)) → 𝟘))) × (((x ∈ A) × ((x ∈ ValOf(F, x)) → 𝟘)) → (x ∈ D)))). (λ(hSurj:Σ(a:Class), ((a ∈ A) × (Π(z:Class), (((z ∈ D) → (z ∈ ValOf(F, a))) × ((z ∈ ValOf(F, a)) → (z ∈ D)))))). ((λ(hInD:(fst(hSurj) ∈ D)). (snd((fst((hDiag fst(hSurj))) hInD)) (fst((snd(snd(hSurj)) fst(hSurj))) hInD))) (snd((hDiag fst(hSurj))) ⟨fst(snd(hSurj)), (λ(hInFa:(fst(hSurj) ∈ ValOf(F, fst(hSurj)))). ((λ(hInD:(fst(hSurj) ∈ D)). (snd((fst((hDiag fst(hSurj))) hInD)) (fst((snd(snd(hSurj)) fst(hSurj))) hInD))) (snd((snd(snd(hSurj)) fst(hSurj))) hInFa)))⟩)))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-111 `thm_ord_succ_trans` (Derived)

- **Identifier:** `thm_ord_succ_trans` (`NBG-111`, kind: `Derived`)
- **Statement (Unicode):** `Π(a:Class), Π(x:Class), (((Π(u:Class), ((u ∈ a) → (u ⊆ a))) × ((x ⊆ a) → (x ⊆ SuccOrd(a)))) → ((x ∈ a) → (x ⊆ SuccOrd(a))))`
- **Statement (ANSII):** `Pi(a:Class), Pi(x:Class), (((Pi(u:Class), ((u in a) -> (u c= a))) * ((x c= a) -> (x c= SuccOrd(a)))) -> ((x in a) -> (x c= SuccOrd(a))))`
- **Proof Term:** `(λ(a:Class). (λ(x:Class). (λ(hTransSucc:((Π(u:Class), ((u ∈ a) → (u ⊆ a))) × ((x ⊆ a) → (x ⊆ SuccOrd(a))))). (λ(hxInA:(x ∈ a)). (snd(hTransSucc) ((fst(hTransSucc) x) hxInA))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-112 `thm_knaster_tarski_post_fixed` (Derived)

- **Identifier:** `thm_knaster_tarski_post_fixed` (`NBG-112`, kind: `Derived`)
- **Statement (Unicode):** `Π(F:Class), Π(A:Class), Π(X:Class), ((Π(B:Class), Π(C:Class), ((B ⊆ C) → (ValOf(F, B) ⊆ ValOf(F, C)))) → (((A ⊆ X) × (ValOf(F, X) ⊆ X)) → (ValOf(F, A) ⊆ X)))`
- **Statement (ANSII):** `Pi(F:Class), Pi(A:Class), Pi(X:Class), ((Pi(B:Class), Pi(C:Class), ((B c= C) -> (ValOf(F, B) c= ValOf(F, C)))) -> (((A c= X) * (ValOf(F, X) c= X)) -> (ValOf(F, A) c= X)))`
- **Proof Term:** `(λ(F:Class). (λ(A:Class). (λ(X:Class). (λ(hMono:Π(B:Class), Π(C:Class), ((B ⊆ C) → (ValOf(F, B) ⊆ ValOf(F, C)))). (λ(hPost:((A ⊆ X) × (ValOf(F, X) ⊆ X))). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) ValOf(F, A)) X)) (λ(z:Class). (λ(hz:(z ∈ ValOf(F, A))). (((fst((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) ValOf(F, X)) X)) snd(hPost)) z) (((fst((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) ValOf(F, A)) ValOf(F, X))) (((hMono A) X) fst(hPost))) z) hz))))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-113 `thm_dunaev_rel_comp_assoc_proj` (Derived)

- **Identifier:** `thm_dunaev_rel_comp_assoc_proj` (`NBG-113`, kind: `Derived`)
- **Statement (Unicode):** `Π(R:Class), Π(S:Class), Π(T:Class), Π(x:Class), Π(w:Class), ((Σ(v:Class), ((Σ(u:Class), (((x, u) ∈ R) × ((u, v) ∈ S))) × ((v, w) ∈ T))) → Σ(u:Class), (((x, u) ∈ R) × (Σ(v:Class), (((u, v) ∈ S) × ((v, w) ∈ T)))))`
- **Statement (ANSII):** `Pi(R:Class), Pi(S:Class), Pi(T:Class), Pi(x:Class), Pi(w:Class), ((Sigma(v:Class), ((Sigma(u:Class), (((x, u) in R) * ((u, v) in S))) * ((v, w) in T))) -> Sigma(u:Class), (((x, u) in R) * (Sigma(v:Class), (((u, v) in S) * ((v, w) in T)))))`
- **Proof Term:** `(λ(R:Class). (λ(S:Class). (λ(T:Class). (λ(x:Class). (λ(w:Class). (λ(hComp:Σ(v:Class), ((Σ(u:Class), (((x, u) ∈ R) × ((u, v) ∈ S))) × ((v, w) ∈ T))). ⟨fst(fst(snd(hComp))), ⟨fst(snd(fst(snd(hComp)))), ⟨fst(hComp), ⟨snd(snd(fst(snd(hComp)))), snd(snd(hComp))⟩⟩⟩⟩))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-114 `thm_universe_power_pair_closure` (Derived)

- **Identifier:** `thm_universe_power_pair_closure` (`NBG-114`, kind: `Derived`)
- **Statement (Unicode):** `Π(U:Class), Π(A:Class), Π(B:Class), (((Π(X:Class), ((X ∈ U) → (𝒫(X) ∈ U))) × (Π(X:Class), Π(Y:Class), (((X ∈ U) × (Y ∈ U)) → ((X, Y) ∈ U)))) → (((A ∈ U) × (B ∈ U)) → ((𝒫(A), 𝒫(B)) ∈ U)))`
- **Statement (ANSII):** `Pi(U:Class), Pi(A:Class), Pi(B:Class), (((Pi(X:Class), ((X in U) -> (Power(X) in U))) * (Pi(X:Class), Pi(Y:Class), (((X in U) * (Y in U)) -> ((X, Y) in U)))) -> (((A in U) * (B in U)) -> ((Power(A), Power(B)) in U)))`
- **Proof Term:** `(λ(U:Class). (λ(A:Class). (λ(B:Class). (λ(hUniv:((Π(X:Class), ((X ∈ U) → (𝒫(X) ∈ U))) × (Π(X:Class), Π(Y:Class), (((X ∈ U) × (Y ∈ U)) → ((X, Y) ∈ U))))). (λ(hAB:((A ∈ U) × (B ∈ U))). (((snd(hUniv) 𝒫(A)) 𝒫(B)) ⟨((fst(hUniv) A) fst(hAB)), ((fst(hUniv) B) snd(hAB))⟩))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-115 `thm_dunaev_pair_refl_conj` (Derived)

- **Identifier:** `thm_dunaev_pair_refl_conj` (`NBG-115`, kind: `Derived`)
- **Statement (Unicode):** `Π(P:Class), Π(x:Class), Π(p:Class), (((x, p) = (x, p)) × (((p ∈ P) × (x ∈ V)) → (((x, p) = (x, p)) × (x ∈ V))))`
- **Statement (ANSII):** `Pi(P:Class), Pi(x:Class), Pi(p:Class), (((x, p) = (x, p)) * (((p in P) * (x in V)) -> (((x, p) = (x, p)) * (x in V))))`
- **Proof Term:** `(λ(P:Class). (λ(x:Class). (λ(p:Class). ⟨refl((x, p)), (λ(hCond:((p ∈ P) × (x ∈ V))). ⟨refl((x, p)), snd(hCond)⟩)⟩)))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-116 `thm_eq_sym_with_ord` (Derived)

- **Identifier:** `thm_eq_sym_with_ord` (`NBG-116`, kind: `Derived`)
- **Statement (Unicode):** `Π(F:Class), Π(a:Class), ((Ord(a) × (ValOf(F, a) = a)) → (Ord(a) × (a = ValOf(F, a))))`
- **Statement (ANSII):** `Pi(F:Class), Pi(a:Class), ((Ord(a) * (ValOf(F, a) = a)) -> (Ord(a) * (a = ValOf(F, a))))`
- **Proof Term:** `(λ(F:Class). (λ(a:Class). (λ(hFix:(Ord(a) × (ValOf(F, a) = a))). ⟨fst(hFix), (ax_eq_sym(ValOf(F, a), a) snd(hFix))⟩)))`
- **Axioms Used:** `ax_eq_sym`
- **Definitions Used:** `(none)`

### NBG-117 `thm_union_in_inter_of_union_closed` (Derived)

- **Identifier:** `thm_union_in_inter_of_union_closed` (`NBG-117`, kind: `Derived`)
- **Statement (Unicode):** `Π(C1:Class), Π(C2:Class), Π(B:Class), ((((B ⊆ C1) × (B ⊆ C2)) × ((Π(D:Class), ((D ⊆ C1) → (⋃(D) ∈ C1))) × (Π(D:Class), ((D ⊆ C2) → (⋃(D) ∈ C2))))) → (⋃(B) ∈ (C1 ∩ C2)))`
- **Statement (ANSII):** `Pi(C1:Class), Pi(C2:Class), Pi(B:Class), ((((B c= C1) * (B c= C2)) * ((Pi(D:Class), ((D c= C1) -> (Union(D) in C1))) * (Pi(D:Class), ((D c= C2) -> (Union(D) in C2))))) -> (Union(B) in (C1 n* C2)))`
- **Proof Term:** `(λ(C1:Class). (λ(C2:Class). (λ(B:Class). (λ(hClub:(((B ⊆ C1) × (B ⊆ C2)) × ((Π(D:Class), ((D ⊆ C1) → (⋃(D) ∈ C1))) × (Π(D:Class), ((D ⊆ C2) → (⋃(D) ∈ C2)))))). (snd(((((λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∩ B))). let res:((z ∈ A) × (z ∈ B)) = h in res), (λ(h:((z ∈ A) × (z ∈ B))). let res:(z ∈ (A ∩ B)) = h in res)⟩))) C1) C2) ⋃(B))) ⟨((fst(snd(hClub)) B) fst(fst(hClub))), ((snd(snd(hClub)) B) snd(fst(hClub)))⟩)))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-119 `thm_eq_sym_with_pair_member` (Derived)

- **Identifier:** `thm_eq_sym_with_pair_member` (`NBG-119`, kind: `Derived`)
- **Statement (Unicode):** `Π(u:Class), Π(v:Class), Π(p:Class), Π(b:Class), ((((u, p) ∈ b) × (u = v)) → (((u, p) ∈ b) × (v = u)))`
- **Statement (ANSII):** `Pi(u:Class), Pi(v:Class), Pi(p:Class), Pi(b:Class), ((((u, p) in b) * (u = v)) -> (((u, p) in b) * (v = u)))`
- **Proof Term:** `(λ(u:Class). (λ(v:Class). (λ(p:Class). (λ(b:Class). (λ(hBval:(((u, p) ∈ b) × (u = v))). ⟨fst(hBval), (ax_eq_sym(u, v) snd(hBval))⟩)))))`
- **Axioms Used:** `ax_eq_sym`
- **Definitions Used:** `(none)`

### NBG-124 `thm_subclass_union_empty` (Derived)

- **Identifier:** `thm_subclass_union_empty` (`NBG-124`, kind: `Derived`)
- **Statement (Unicode):** `Π(L:Class), ((L ⊆ (L ∪ ∅)) × (∅ ⊆ L))`
- **Statement (ANSII):** `Pi(L:Class), ((L c= (L u+ EmptySet)) * (EmptySet c= L))`
- **Proof Term:** `(λ(L:Class). ⟨(((λ(A:Class). (λ(B:Class). (snd((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) A) (A ∪ B))) (λ(z:Class). (λ(hz:(z ∈ A)). (snd(((((λ(A:Class). (λ(B:Class). (λ(z:Class). ⟨(λ(h:(z ∈ (A ∪ B))). let res:Π(C:Prop), (((z ∈ A) → C) → (((z ∈ B) → C) → C)) = h in res), (λ(h:Π(C:Prop), (((z ∈ A) → C) → (((z ∈ B) → C) → C))). let res:(z ∈ (A ∪ B)) = h in res)⟩))) A) B) z)) (λ(C:Prop). (λ(fa:((z ∈ A) → C)). (λ(fb:((z ∈ B) → C)). (fa hz)))))))))) L) ∅), ((λ(X:Class). (λ(z:Class). (λ(h:(z ∈ ∅)). ax_false_elim((z ∈ X), ax_empty_no_elements(z, h))))) L)⟩)`
- **Axioms Used:** `ax_false_elim, ax_empty_no_elements`
- **Definitions Used:** `(none)`

### NBG-125 `thm_subclass_transfer_pair_member` (Derived)

- **Identifier:** `thm_subclass_transfer_pair_member` (`NBG-125`, kind: `Derived`)
- **Statement (Unicode):** `Π(F:Class), Π(B:Class), Π(x:Class), Π(y:Class), (((F ⊆ B) × ((x ∈ B) × ((x, y) ∈ F))) → ((x ∈ B) × ((x, y) ∈ B)))`
- **Statement (ANSII):** `Pi(F:Class), Pi(B:Class), Pi(x:Class), Pi(y:Class), (((F c= B) * ((x in B) * ((x, y) in F))) -> ((x in B) * ((x, y) in B)))`
- **Proof Term:** `(λ(F:Class). (λ(B:Class). (λ(x:Class). (λ(y:Class). (λ(hFam:((F ⊆ B) × ((x ∈ B) × ((x, y) ∈ F)))). ⟨fst(snd(hFam)), (((fst((((λ(X:Class). (λ(Y:Class). ⟨(λ(h:(X ⊆ Y)). let res:Π(z:Class), ((z ∈ X) → (z ∈ Y)) = h in res), (λ(h:Π(z:Class), ((z ∈ X) → (z ∈ Y))). let res:(X ⊆ Y) = h in res)⟩)) F) B)) fst(hFam)) (x, y)) snd(snd(hFam)))⟩)))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-127 `thm_eq_sym_mutual_inverse_values` (Derived)

- **Identifier:** `thm_eq_sym_mutual_inverse_values` (`NBG-127`, kind: `Derived`)
- **Statement (Unicode):** `Π(Phi:Class), Π(Psi:Class), Π(u:Class), (((ValOf(Phi, ValOf(Psi, u)) = u) × (ValOf(Psi, ValOf(Phi, u)) = u)) → ((u = ValOf(Phi, ValOf(Psi, u))) × (u = ValOf(Psi, ValOf(Phi, u)))))`
- **Statement (ANSII):** `Pi(Phi:Class), Pi(Psi:Class), Pi(u:Class), (((ValOf(Phi, ValOf(Psi, u)) = u) * (ValOf(Psi, ValOf(Phi, u)) = u)) -> ((u = ValOf(Phi, ValOf(Psi, u))) * (u = ValOf(Psi, ValOf(Phi, u)))))`
- **Proof Term:** `(λ(Phi:Class). (λ(Psi:Class). (λ(u:Class). (λ(hRT:((ValOf(Phi, ValOf(Psi, u)) = u) × (ValOf(Psi, ValOf(Phi, u)) = u))). ⟨(ax_eq_sym(ValOf(Phi, ValOf(Psi, u)), u) fst(hRT)), (ax_eq_sym(ValOf(Psi, ValOf(Phi, u)), u) snd(hRT))⟩))))`
- **Axioms Used:** `ax_eq_sym`
- **Definitions Used:** `(none)`

### NBG-129 `thm_closed_under_composite_value` (Derived)

- **Identifier:** `thm_closed_under_composite_value` (`NBG-129`, kind: `Derived`)
- **Statement (Unicode):** `Π(Pos:Class), Π(Pt:Class), Π(Vpot:Class), Π(u:Class), (((Π(f:Class), ((f ∈ Pos) → (ValOf(Pt, f) ∈ Pos))) × ((Π(f:Class), ((f ∈ Pos) → (ValOf(Vpot, f) ∈ Pos))) × (u ∈ Pos))) → (ValOf(Pt, ValOf(Vpot, u)) ∈ Pos))`
- **Statement (ANSII):** `Pi(Pos:Class), Pi(Pt:Class), Pi(Vpot:Class), Pi(u:Class), (((Pi(f:Class), ((f in Pos) -> (ValOf(Pt, f) in Pos))) * ((Pi(f:Class), ((f in Pos) -> (ValOf(Vpot, f) in Pos))) * (u in Pos))) -> (ValOf(Pt, ValOf(Vpot, u)) in Pos))`
- **Proof Term:** `(λ(Pos:Class). (λ(Pt:Class). (λ(Vpot:Class). (λ(u:Class). (λ(hFK:((Π(f:Class), ((f ∈ Pos) → (ValOf(Pt, f) ∈ Pos))) × ((Π(f:Class), ((f ∈ Pos) → (ValOf(Vpot, f) ∈ Pos))) × (u ∈ Pos)))). ((fst(hFK) ValOf(Vpot, u)) ((fst(snd(hFK)) u) snd(snd(hFK)))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-150 `thm_reflexive_pair_on_members` (Derived)

- **Identifier:** `thm_reflexive_pair_on_members` (`NBG-150`, kind: `Derived`)
- **Statement (Unicode):** `Π(R:Class), Π(A:Class), (((Π(x:Class), Π(y:Class), (((x ∈ A) × ((x, y) ∈ R)) → (y ∈ A))) × (Π(x:Class), ((x, x) ∈ R))) → Π(x:Class), ((x ∈ A) → ((x ∈ A) × ((x, x) ∈ R))))`
- **Statement (ANSII):** `Pi(R:Class), Pi(A:Class), (((Pi(x:Class), Pi(y:Class), (((x in A) * ((x, y) in R)) -> (y in A))) * (Pi(x:Class), ((x, x) in R))) -> Pi(x:Class), ((x in A) -> ((x in A) * ((x, x) in R))))`
- **Proof Term:** `(λ(R:Class). (λ(A:Class). (λ(hSatRefl:((Π(x:Class), Π(y:Class), (((x ∈ A) × ((x, y) ∈ R)) → (y ∈ A))) × (Π(x:Class), ((x, x) ∈ R)))). (λ(x:Class). (λ(hxA:(x ∈ A)). ⟨(((fst(hSatRefl) x) x) ⟨hxA, (snd(hSatRefl) x)⟩), (snd(hSatRefl) x)⟩)))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-221 `thm_limit_ordinal_successor_closure_proj` (Derived)

- **Identifier:** `thm_limit_ordinal_successor_closure_proj` (`NBG-221`, kind: `Derived`)
- **Statement (Unicode):** `Π(kap:Class), Π(b:Class), (((Ord(kap) × ((∅ ∈ kap) × (Π(a:Class), ((a ∈ kap) → (SuccOrd(a) ∈ kap))))) × (b ∈ kap)) → (Ord(kap) × ((∅ ∈ kap) × (SuccOrd(b) ∈ kap))))`
- **Statement (ANSII):** `Pi(kap:Class), Pi(b:Class), (((Ord(kap) * ((EmptySet in kap) * (Pi(a:Class), ((a in kap) -> (SuccOrd(a) in kap))))) * (b in kap)) -> (Ord(kap) * ((EmptySet in kap) * (SuccOrd(b) in kap))))`
- **Proof Term:** `(λ(kap:Class). (λ(b:Class). (λ(h:((Ord(kap) × ((∅ ∈ kap) × (Π(a:Class), ((a ∈ kap) → (SuccOrd(a) ∈ kap))))) × (b ∈ kap))). ⟨fst(fst(h)), ⟨fst(snd(fst(h))), ((snd(snd(fst(h))) b) snd(h))⟩⟩)))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-222 `thm_universe_indexed_union_identity_union_step` (Derived)

- **Identifier:** `thm_universe_indexed_union_identity_union_step` (`NBG-222`, kind: `Derived`)
- **Statement (Unicode):** `Π(U:Class), Π(x:Class), ((((x ∈ U) → ((x, IdMor(x)) ∈ U)) × (((x, IdMor(x)) ∈ U) → (⋃(x) ∈ U))) → ((x ∈ U) → (⋃(x) ∈ U)))`
- **Statement (ANSII):** `Pi(U:Class), Pi(x:Class), ((((x in U) -> ((x, IdMor(x)) in U)) * (((x, IdMor(x)) in U) -> (Union(x) in U))) -> ((x in U) -> (Union(x) in U)))`
- **Proof Term:** `(λ(U:Class). (λ(x:Class). (λ(h:(((x ∈ U) → ((x, IdMor(x)) ∈ U)) × (((x, IdMor(x)) ∈ U) → (⋃(x) ∈ U)))). (λ(hxU:(x ∈ U)). (snd(h) (fst(h) hxU))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-223 `thm_universe_inter_on_limit_irreflexivity_step` (Derived)

- **Identifier:** `thm_universe_inter_on_limit_irreflexivity_step` (`NBG-223`, kind: `Derived`)
- **Statement (Unicode):** `Π(U:Class), Π(kap:Class), Π(a:Class), (((((a ∈ kap) → (SuccOrd(a) ∈ U)) × ((SuccOrd(a) ∈ U) → (kap ∈ kap))) × (((kap ∈ kap) → 𝟘) × (a ∈ kap))) → 𝟘)`
- **Statement (ANSII):** `Pi(U:Class), Pi(kap:Class), Pi(a:Class), (((((a in kap) -> (SuccOrd(a) in U)) * ((SuccOrd(a) in U) -> (kap in kap))) * (((kap in kap) -> Void) * (a in kap))) -> Void)`
- **Proof Term:** `(λ(U:Class). (λ(kap:Class). (λ(a:Class). (λ(h:((((a ∈ kap) → (SuccOrd(a) ∈ U)) × ((SuccOrd(a) ∈ U) → (kap ∈ kap))) × (((kap ∈ kap) → 𝟘) × (a ∈ kap)))). (fst(snd(h)) (snd(fst(h)) (fst(fst(h)) snd(snd(h)))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-224 `thm_von_neumann_stage_sub_universe_step` (Derived)

- **Identifier:** `thm_von_neumann_stage_sub_universe_step` (`NBG-224`, kind: `Derived`)
- **Statement (Unicode):** `Π(U:Class), Π(Vstage:Class), Π(kap:Class), Π(a:Class), Π(x:Class), (((((a ∈ kap) → (ValOf(Vstage, a) ∈ U)) × ((ValOf(Vstage, a) ∈ U) → ((x ∈ ValOf(Vstage, a)) → (x ∈ U)))) × ((a ∈ kap) × (x ∈ ValOf(Vstage, a)))) → (x ∈ U))`
- **Statement (ANSII):** `Pi(U:Class), Pi(Vstage:Class), Pi(kap:Class), Pi(a:Class), Pi(x:Class), (((((a in kap) -> (ValOf(Vstage, a) in U)) * ((ValOf(Vstage, a) in U) -> ((x in ValOf(Vstage, a)) -> (x in U)))) * ((a in kap) * (x in ValOf(Vstage, a)))) -> (x in U))`
- **Proof Term:** `(λ(U:Class). (λ(Vstage:Class). (λ(kap:Class). (λ(a:Class). (λ(x:Class). (λ(h:((((a ∈ kap) → (ValOf(Vstage, a) ∈ U)) × ((ValOf(Vstage, a) ∈ U) → ((x ∈ ValOf(Vstage, a)) → (x ∈ U)))) × ((a ∈ kap) × (x ∈ ValOf(Vstage, a))))). ((snd(fst(h)) (fst(fst(h)) fst(snd(h)))) snd(snd(h)))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-225 `thm_universe_sub_von_neumann_stage_rank_step` (Derived)

- **Identifier:** `thm_universe_sub_von_neumann_stage_rank_step` (`NBG-225`, kind: `Derived`)
- **Statement (Unicode):** `Π(U:Class), Π(Vstage:Class), Π(RankOp:Class), Π(kap:Class), Π(x:Class), (((((x ∈ U) → (SuccOrd(ValOf(RankOp, x)) ∈ kap)) × ((x ∈ U) → (x ∈ ValOf(Vstage, SuccOrd(ValOf(RankOp, x)))))) × (((SuccOrd(ValOf(RankOp, x)) ∈ kap) × (x ∈ ValOf(Vstage, SuccOrd(ValOf(RankOp, x))))) → (x ∈ ValOf(Vstage, kap)))) → ((x ∈ U) → (x ∈ ValOf(Vstage, kap))))`
- **Statement (ANSII):** `Pi(U:Class), Pi(Vstage:Class), Pi(RankOp:Class), Pi(kap:Class), Pi(x:Class), (((((x in U) -> (SuccOrd(ValOf(RankOp, x)) in kap)) * ((x in U) -> (x in ValOf(Vstage, SuccOrd(ValOf(RankOp, x)))))) * (((SuccOrd(ValOf(RankOp, x)) in kap) * (x in ValOf(Vstage, SuccOrd(ValOf(RankOp, x))))) -> (x in ValOf(Vstage, kap)))) -> ((x in U) -> (x in ValOf(Vstage, kap))))`
- **Proof Term:** `(λ(U:Class). (λ(Vstage:Class). (λ(RankOp:Class). (λ(kap:Class). (λ(x:Class). (λ(h:((((x ∈ U) → (SuccOrd(ValOf(RankOp, x)) ∈ kap)) × ((x ∈ U) → (x ∈ ValOf(Vstage, SuccOrd(ValOf(RankOp, x)))))) × (((SuccOrd(ValOf(RankOp, x)) ∈ kap) × (x ∈ ValOf(Vstage, SuccOrd(ValOf(RankOp, x))))) → (x ∈ ValOf(Vstage, kap))))). (λ(hxU:(x ∈ U)). (snd(h) ⟨(fst(fst(h)) hxU), (snd(fst(h)) hxU)⟩))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-226 `thm_domain_restriction_elem_iff` (Derived)

- **Identifier:** `thm_domain_restriction_elem_iff` (`NBG-226`, kind: `Derived`)
- **Statement (Unicode):** `Π(F:Class), Π(A:Class), Π(z:Class), (((z ∈ Restrict(F, A)) → ((z ∈ F) × (pr1(z) ∈ A))) × (((z ∈ F) × (pr1(z) ∈ A)) → (z ∈ Restrict(F, A))))`
- **Statement (ANSII):** `Pi(F:Class), Pi(A:Class), Pi(z:Class), (((z in Restrict(F, A)) -> ((z in F) * (pr1(z) in A))) * (((z in F) * (pr1(z) in A)) -> (z in Restrict(F, A))))`
- **Proof Term:** `(λ(F:Class). (λ(A:Class). (λ(z:Class). ⟨(λ(h:(z ∈ Restrict(F, A))). let res:((z ∈ F) × (pr1(z) ∈ A)) = h in res), (λ(h:((z ∈ F) × (pr1(z) ∈ A))). let res:(z ∈ Restrict(F, A)) = h in res)⟩)))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-227 `thm_transfinite_approx_coherence_step` (Derived)

- **Identifier:** `thm_transfinite_approx_coherence_step` (`NBG-227`, kind: `Derived`)
- **Statement (Unicode):** `Π(G:Class), Π(g:Class), Π(h:Class), Π(B:Class), (((((B ∈ Dom(g)) → (ValOf(g, B) = ValOf(G, Restrict(g, B)))) × (((B ∈ Dom(h)) × (Restrict(g, B) = Restrict(h, B))) → (ValOf(h, B) = ValOf(G, Restrict(g, B))))) × (((B ∈ Dom(g)) × (B ∈ Dom(h))) × (Restrict(g, B) = Restrict(h, B)))) → ((ValOf(g, B) = ValOf(G, Restrict(g, B))) × (ValOf(g, B) = ValOf(h, B))))`
- **Statement (ANSII):** `Pi(G:Class), Pi(g:Class), Pi(h:Class), Pi(B:Class), (((((B in Dom(g)) -> (ValOf(g, B) = ValOf(G, Restrict(g, B)))) * (((B in Dom(h)) * (Restrict(g, B) = Restrict(h, B))) -> (ValOf(h, B) = ValOf(G, Restrict(g, B))))) * (((B in Dom(g)) * (B in Dom(h))) * (Restrict(g, B) = Restrict(h, B)))) -> ((ValOf(g, B) = ValOf(G, Restrict(g, B))) * (ValOf(g, B) = ValOf(h, B))))`
- **Proof Term:** `(λ(G:Class). (λ(g:Class). (λ(h:Class). (λ(B:Class). (λ(hyp:((((B ∈ Dom(g)) → (ValOf(g, B) = ValOf(G, Restrict(g, B)))) × (((B ∈ Dom(h)) × (Restrict(g, B) = Restrict(h, B))) → (ValOf(h, B) = ValOf(G, Restrict(g, B))))) × (((B ∈ Dom(g)) × (B ∈ Dom(h))) × (Restrict(g, B) = Restrict(h, B))))). ⟨(fst(fst(hyp)) fst(fst(snd(hyp)))), (((ax_eq_trans(ValOf(g, B), ValOf(G, Restrict(g, B))) ValOf(h, B)) (fst(fst(hyp)) fst(fst(snd(hyp))))) (ax_eq_sym(ValOf(h, B), ValOf(G, Restrict(g, B))) (snd(fst(hyp)) ⟨snd(fst(snd(hyp))), snd(snd(hyp))⟩)))⟩)))))`
- **Axioms Used:** `ax_eq_trans, ax_eq_sym`
- **Definitions Used:** `(none)`

### NBG-228 `thm_transfinite_recursion_equation_step` (Derived)

- **Identifier:** `thm_transfinite_recursion_equation_step` (`NBG-228`, kind: `Derived`)
- **Statement (Unicode):** `Π(G:Class), Π(F:Class), Π(g:Class), Π(A:Class), ((((A ∈ Dom(g)) × (Restrict(F, A) = Restrict(g, A))) → (ValOf(g, A) = ValOf(G, Restrict(F, A)))) → (((ValOf(F, A) = ValOf(g, A)) × ((A ∈ Dom(g)) × (Restrict(F, A) = Restrict(g, A)))) → (ValOf(F, A) = ValOf(G, Restrict(F, A)))))`
- **Statement (ANSII):** `Pi(G:Class), Pi(F:Class), Pi(g:Class), Pi(A:Class), ((((A in Dom(g)) * (Restrict(F, A) = Restrict(g, A))) -> (ValOf(g, A) = ValOf(G, Restrict(F, A)))) -> (((ValOf(F, A) = ValOf(g, A)) * ((A in Dom(g)) * (Restrict(F, A) = Restrict(g, A)))) -> (ValOf(F, A) = ValOf(G, Restrict(F, A)))))`
- **Proof Term:** `(λ(G:Class). (λ(F:Class). (λ(g:Class). (λ(A:Class). (λ(hLaw:(((A ∈ Dom(g)) × (Restrict(F, A) = Restrict(g, A))) → (ValOf(g, A) = ValOf(G, Restrict(F, A))))). (λ(w:((ValOf(F, A) = ValOf(g, A)) × ((A ∈ Dom(g)) × (Restrict(F, A) = Restrict(g, A))))). (((ax_eq_trans(ValOf(F, A), ValOf(g, A)) ValOf(G, Restrict(F, A))) fst(w)) (hLaw snd(w)))))))))`
- **Axioms Used:** `ax_eq_trans`
- **Definitions Used:** `(none)`

### NBG-229 `thm_transfinite_recursion_uniqueness_step` (Derived)

- **Identifier:** `thm_transfinite_recursion_uniqueness_step` (`NBG-229`, kind: `Derived`)
- **Statement (Unicode):** `Π(G:Class), Π(F:Class), Π(H:Class), Π(A:Class), (((((A ∈ On) → (ValOf(F, A) = ValOf(G, Restrict(F, A)))) × (((A ∈ On) × (Restrict(F, A) = Restrict(H, A))) → (ValOf(H, A) = ValOf(G, Restrict(F, A))))) × ((A ∈ On) × (Restrict(F, A) = Restrict(H, A)))) → ((ValOf(F, A) = ValOf(G, Restrict(F, A))) × (ValOf(F, A) = ValOf(H, A))))`
- **Statement (ANSII):** `Pi(G:Class), Pi(F:Class), Pi(H:Class), Pi(A:Class), (((((A in On) -> (ValOf(F, A) = ValOf(G, Restrict(F, A)))) * (((A in On) * (Restrict(F, A) = Restrict(H, A))) -> (ValOf(H, A) = ValOf(G, Restrict(F, A))))) * ((A in On) * (Restrict(F, A) = Restrict(H, A)))) -> ((ValOf(F, A) = ValOf(G, Restrict(F, A))) * (ValOf(F, A) = ValOf(H, A))))`
- **Proof Term:** `(λ(G:Class). (λ(F:Class). (λ(H:Class). (λ(A:Class). (λ(hyp:((((A ∈ On) → (ValOf(F, A) = ValOf(G, Restrict(F, A)))) × (((A ∈ On) × (Restrict(F, A) = Restrict(H, A))) → (ValOf(H, A) = ValOf(G, Restrict(F, A))))) × ((A ∈ On) × (Restrict(F, A) = Restrict(H, A))))). ⟨(fst(fst(hyp)) fst(snd(hyp))), (((ax_eq_trans(ValOf(F, A), ValOf(G, Restrict(F, A))) ValOf(H, A)) (fst(fst(hyp)) fst(snd(hyp)))) (ax_eq_sym(ValOf(H, A), ValOf(G, Restrict(F, A))) (snd(fst(hyp)) snd(hyp))))⟩)))))`
- **Axioms Used:** `ax_eq_trans, ax_eq_sym`
- **Definitions Used:** `(none)`

### NBG-230 `thm_von_neumann_hierarchy_by_transfinite_recursion_step` (Derived)

- **Identifier:** `thm_von_neumann_hierarchy_by_transfinite_recursion_step` (`NBG-230`, kind: `Derived`)
- **Statement (Unicode):** `Π(V:Class), Π(A:Class), Π(Ufam:Class), (((ValOf(V, A) = VonNeumannStepG(Restrict(V, A))) × (VonNeumannStepG(Restrict(V, A)) = Ufam)) → (ValOf(V, A) = Ufam))`
- **Statement (ANSII):** `Pi(V:Class), Pi(A:Class), Pi(Ufam:Class), (((ValOf(V, A) = VonNeumannStepG(Restrict(V, A))) * (VonNeumannStepG(Restrict(V, A)) = Ufam)) -> (ValOf(V, A) = Ufam))`
- **Proof Term:** `(λ(V:Class). (λ(A:Class). (λ(Ufam:Class). (λ(h:((ValOf(V, A) = VonNeumannStepG(Restrict(V, A))) × (VonNeumannStepG(Restrict(V, A)) = Ufam))). (((ax_eq_trans(ValOf(V, A), VonNeumannStepG(Restrict(V, A))) Ufam) fst(h)) snd(h))))))`
- **Axioms Used:** `ax_eq_trans`
- **Definitions Used:** `(none)`

### NBG-231 `thm_sigma_family_model_dependent_pair_bridge` (Derived)

- **Identifier:** `thm_sigma_family_model_dependent_pair_bridge` (`NBG-231`, kind: `Derived`)
- **Statement (Unicode):** `Π(B:Class), (((Σ(x:Class), Σ(y:Class), ((x, y) ∈ SigmaModel(B))) → Σ(x:Class), Σ(y:Class), ((x ∈ Dom(B)) × (y ∈ ValOf(B, x)))) × ((Σ(x:Class), Σ(y:Class), ((x ∈ Dom(B)) × (y ∈ ValOf(B, x)))) → Σ(x:Class), Σ(y:Class), ((x, y) ∈ SigmaModel(B))))`
- **Statement (ANSII):** `Pi(B:Class), (((Sigma(x:Class), Sigma(y:Class), ((x, y) in SigmaModel(B))) -> Sigma(x:Class), Sigma(y:Class), ((x in Dom(B)) * (y in ValOf(B, x)))) * ((Sigma(x:Class), Sigma(y:Class), ((x in Dom(B)) * (y in ValOf(B, x)))) -> Sigma(x:Class), Sigma(y:Class), ((x, y) in SigmaModel(B))))`
- **Proof Term:** `(λ(B:Class). ⟨(λ(w:Σ(x:Class), Σ(y:Class), ((x, y) ∈ SigmaModel(B))). ⟨fst(w), ⟨fst(snd(w)), snd(snd(w))⟩⟩), (λ(w:Σ(x:Class), Σ(y:Class), ((x ∈ Dom(B)) × (y ∈ ValOf(B, x)))). ⟨fst(w), ⟨fst(snd(w)), snd(snd(w))⟩⟩)⟩)`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-232 `thm_pi_family_model_dependent_product_bridge` (Derived)

- **Identifier:** `thm_pi_family_model_dependent_product_bridge` (`NBG-232`, kind: `Derived`)
- **Statement (Unicode):** `Π(B:Class), Π(f:Class), Π(x:Class), (((f ∈ PiModel(B)) × (x ∈ Dom(B))) → Σ(y:Class), ((y = ValOf(f, x)) × (y ∈ ValOf(B, x))))`
- **Statement (ANSII):** `Pi(B:Class), Pi(f:Class), Pi(x:Class), (((f in PiModel(B)) * (x in Dom(B))) -> Sigma(y:Class), ((y = ValOf(f, x)) * (y in ValOf(B, x))))`
- **Proof Term:** `(λ(B:Class). (λ(f:Class). (λ(x:Class). (λ(h:((f ∈ PiModel(B)) × (x ∈ Dom(B)))). let sec:Π(u:Class), ((u ∈ Dom(B)) → (ValOf(f, u) ∈ ValOf(B, u))) = fst(h) in ⟨ValOf(f, x), ⟨refl(ValOf(f, x)), ((sec x) snd(h))⟩⟩))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-233 `thm_reduced_var_subst_hit_and_miss` (Derived)

- **Identifier:** `thm_reduced_var_subst_hit_and_miss` (`NBG-233`, kind: `Derived`)
- **Statement (Unicode):** `Π(t:Class), Π(x:Class), Π(v:Class), Π(u:Class), ((((v = x) × (u ∈ t)) → (u ∈ (SubstVar(t, x) v))) × ((((v = x) → 𝟘) × (u ∈ v)) → (u ∈ (SubstVar(t, x) v))))`
- **Statement (ANSII):** `Pi(t:Class), Pi(x:Class), Pi(v:Class), Pi(u:Class), ((((v = x) * (u in t)) -> (u in (SubstVar(t, x) v))) * ((((v = x) -> Void) * (u in v)) -> (u in (SubstVar(t, x) v))))`
- **Proof Term:** `(λ(t:Class). (λ(x:Class). (λ(v:Class). (λ(u:Class). ⟨(λ(hHit:((v = x) × (u ∈ t))). (λ(C:Prop). (λ(inL:(((v = x) × (u ∈ t)) → C)). (λ(_:((((v = x) → 𝟘) × (u ∈ v)) → C)). (inL hHit))))), (λ(hMiss:(((v = x) → 𝟘) × (u ∈ v))). (λ(C:Prop). (λ(_:(((v = x) × (u ∈ t)) → C)). (λ(inR:((((v = x) → 𝟘) × (u ∈ v)) → C)). (inR hMiss)))))⟩))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-234 `thm_unary_inter_subset_bin_inter` (Derived)

- **Identifier:** `thm_unary_inter_subset_bin_inter` (`NBG-234`, kind: `Derived`)
- **Statement (Unicode):** `Π(K:Class), Π(A:Class), Π(B:Class), (((A ∈ K) × (B ∈ K)) → (⋂(K) ⊆ (A ∩ B)))`
- **Statement (ANSII):** `Pi(K:Class), Pi(A:Class), Pi(B:Class), (((A in K) * (B in K)) -> (Inter(K) c= (A n* B)))`
- **Proof Term:** `(λ(K:Class). (λ(A:Class). (λ(B:Class). (λ(hAB:((A ∈ K) × (B ∈ K))). (λ(z:Class). (λ(hzInterK:(z ∈ ⋂(K))). let hAll:Π(y:Class), ((y ∈ K) → (z ∈ y)) = hzInterK in ⟨((hAll A) fst(hAB)), ((hAll B) snd(hAB))⟩))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-235 `thm_reduced_var_subst_diagonal_eval` (Derived)

- **Identifier:** `thm_reduced_var_subst_diagonal_eval` (`NBG-235`, kind: `Derived`)
- **Statement (Unicode):** `Π(t:Class), Π(x:Class), Π(u:Class), ((u ∈ t) → (u ∈ (SubstVar(t, x) x)))`
- **Statement (ANSII):** `Pi(t:Class), Pi(x:Class), Pi(u:Class), ((u in t) -> (u in (SubstVar(t, x) x)))`
- **Proof Term:** `(λ(t:Class). (λ(x:Class). (λ(u:Class). (λ(huT:(u ∈ t)). (λ(C:Prop). (λ(inL:(((x = x) × (u ∈ t)) → C)). (λ(_:((((x = x) → 𝟘) × (u ∈ x)) → C)). (inL ⟨refl(x), huT⟩))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-236 `thm_reduced_var_subst_idempotent_self` (Derived)

- **Identifier:** `thm_reduced_var_subst_idempotent_self` (`NBG-236`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), Π(v:Class), Π(u:Class), (((Π(C:Prop), (((v = x) → C) → ((((v = x) → 𝟘) → C) → C))) × (u ∈ v)) → (u ∈ (SubstVar(x, x) v)))`
- **Statement (ANSII):** `Pi(x:Class), Pi(v:Class), Pi(u:Class), (((Pi(C:Prop), (((v = x) -> C) -> ((((v = x) -> Void) -> C) -> C))) * (u in v)) -> (u in (SubstVar(x, x) v)))`
- **Proof Term:** `(λ(x:Class). (λ(v:Class). (λ(u:Class). (λ(h:((Π(C:Prop), (((v = x) → C) → ((((v = x) → 𝟘) → C) → C))) × (u ∈ v))). (((fst(h) (u ∈ (SubstVar(x, x) v))) (λ(hEq:(v = x)). (λ(C:Prop). (λ(inL:(((v = x) × (u ∈ x)) → C)). (λ(_:((((v = x) → 𝟘) × (u ∈ v)) → C)). (inL ⟨hEq, (((ax_eq_subst((λ(w:Class). (u ∈ w)), v) x) hEq) snd(h))⟩)))))) (λ(hNeq:((v = x) → 𝟘)). (λ(C:Prop). (λ(_:(((v = x) × (u ∈ x)) → C)). (λ(inR:((((v = x) → 𝟘) × (u ∈ v)) → C)). (inR ⟨hNeq, snd(h)⟩))))))))))`
- **Axioms Used:** `ax_eq_subst`
- **Definitions Used:** `(none)`

### NBG-237 `thm_intensionality_via_singleton_witness` (Derived)

- **Identifier:** `thm_intensionality_via_singleton_witness` (`NBG-237`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), Π(y:Class), (((x ∈ {x}) × ((Π(z:Class), ((z ∈ {x}) → (z ∈ {y}))) × (Π(z:Class), ((z ∈ {y}) → (z = y))))) → (x = y))`
- **Statement (ANSII):** `Pi(x:Class), Pi(y:Class), (((x in {x}) * ((Pi(z:Class), ((z in {x}) -> (z in {y}))) * (Pi(z:Class), ((z in {y}) -> (z = y))))) -> (x = y))`
- **Proof Term:** `(λ(x:Class). (λ(y:Class). (λ(h:((x ∈ {x}) × ((Π(z:Class), ((z ∈ {x}) → (z ∈ {y}))) × (Π(z:Class), ((z ∈ {y}) → (z = y)))))). ((snd(snd(h)) x) ((fst(snd(h)) x) fst(h))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-238 `thm_irreflexivity_from_well_founded_step` (Derived)

- **Identifier:** `thm_irreflexivity_from_well_founded_step` (`NBG-238`, kind: `Derived`)
- **Statement (Unicode):** `Π(x:Class), (((Π(y:Class), ((y ∈ x) → ((y ∈ y) → 𝟘))) × (x ∈ x)) → 𝟘)`
- **Statement (ANSII):** `Pi(x:Class), (((Pi(y:Class), ((y in x) -> ((y in y) -> Void))) * (x in x)) -> Void)`
- **Proof Term:** `(λ(x:Class). (λ(h:((Π(y:Class), ((y ∈ x) → ((y ∈ y) → 𝟘))) × (x ∈ x))). (((fst(h) x) snd(h)) snd(h))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-239 `thm_burali_forti_ordinal_proper_class_step` (Derived)

- **Identifier:** `thm_burali_forti_ordinal_proper_class_step` (`NBG-239`, kind: `Derived`)
- **Statement (Unicode):** `(((set(On) → (On ∈ On)) × ((On ∈ On) → 𝟘)) → (set(On) → 𝟘))`
- **Statement (ANSII):** `(((set(On) -> (On in On)) * ((On in On) -> Void)) -> (set(On) -> Void))`
- **Proof Term:** `(λ(h:((set(On) → (On ∈ On)) × ((On ∈ On) → 𝟘))). (λ(hSetOn:set(On)). (snd(h) (fst(h) hSetOn))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-240 `thm_exists_exists_swap` (Derived)

- **Identifier:** `thm_exists_exists_swap` (`NBG-240`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:(Class → Prop)), Π(p2:(Class → (Class → Prop))), Π(p3:(Class → (Class → Prop))), ((Σ(a:Class), Σ(b:Class), ((p1 a) × (((p2 b) a) × ((p3 a) b)))) → Σ(b:Class), Σ(a:Class), ((p1 a) × (((p2 b) a) × ((p3 a) b))))`
- **Statement (ANSII):** `Pi(p1:(Class -> Prop)), Pi(p2:(Class -> (Class -> Prop))), Pi(p3:(Class -> (Class -> Prop))), ((Sigma(a:Class), Sigma(b:Class), ((p1 a) * (((p2 b) a) * ((p3 a) b)))) -> Sigma(b:Class), Sigma(a:Class), ((p1 a) * (((p2 b) a) * ((p3 a) b))))`
- **Proof Term:** `(λ(p1:(Class → Prop)). (λ(p2:(Class → (Class → Prop))). (λ(p3:(Class → (Class → Prop))). (λ(hReg:Σ(a:Class), Σ(b:Class), ((p1 a) × (((p2 b) a) × ((p3 a) b)))). ⟨fst(snd(hReg)), ⟨fst(hReg), snd(snd(hReg))⟩⟩))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-241 `thm_not_and_to_impl_not` (Derived)

- **Identifier:** `thm_not_and_to_impl_not` (`NBG-241`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), (((p1 × p2) → 𝟘) → (p1 → (p2 → 𝟘)))`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), (((p1 * p2) -> Void) -> (p1 -> (p2 -> Void)))`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(hExcl:((p1 × p2) → 𝟘)). (λ(h1:p1). (λ(h2:p2). (hExcl ⟨h1, h2⟩))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-242 `thm_and_modus_ponens_exists` (Derived)

- **Identifier:** `thm_and_modus_ponens_exists` (`NBG-242`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:(Class → Prop)), ((p1 × (p1 → Σ(s:Class), (p2 s))) → Σ(s:Class), (p2 s))`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:(Class -> Prop)), ((p1 * (p1 -> Sigma(s:Class), (p2 s))) -> Sigma(s:Class), (p2 s))`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:(Class → Prop)). (λ(hClosedDet:(p1 × (p1 → Σ(s:Class), (p2 s)))). (snd(hClosedDet) fst(hClosedDet)))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-243 `thm_forall_impl_apply` (Derived)

- **Identifier:** `thm_forall_impl_apply` (`NBG-243`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:(Class → Prop)), Π(p2:(Class → Prop)), Π(g:Class), (((Π(x:Class), ((p1 x) → (p2 x))) × (p1 g)) → (p2 g))`
- **Statement (ANSII):** `Pi(p1:(Class -> Prop)), Pi(p2:(Class -> Prop)), Pi(g:Class), (((Pi(x:Class), ((p1 x) -> (p2 x))) * (p1 g)) -> (p2 g))`
- **Proof Term:** `(λ(p1:(Class → Prop)). (λ(p2:(Class → Prop)). (λ(g:Class). (λ(hBorel:((Π(x:Class), ((p1 x) → (p2 x))) × (p1 g))). ((fst(hBorel) g) snd(hBorel))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-244 `thm_binary_rule_apply` (Derived)

- **Identifier:** `thm_binary_rule_apply` (`NBG-244`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:(Class → Prop)), Π(p2:(Class → (Class → Prop))), Π(T0:Class), Π(P:Class), ((((p1 T0) × (p1 P)) × (Π(A:Class), Π(B:Class), (((p1 A) × (p1 B)) → ((p2 A) B)))) → ((p2 T0) P))`
- **Statement (ANSII):** `Pi(p1:(Class -> Prop)), Pi(p2:(Class -> (Class -> Prop))), Pi(T0:Class), Pi(P:Class), ((((p1 T0) * (p1 P)) * (Pi(A:Class), Pi(B:Class), (((p1 A) * (p1 B)) -> ((p2 A) B)))) -> ((p2 T0) P))`
- **Proof Term:** `(λ(p1:(Class → Prop)). (λ(p2:(Class → (Class → Prop))). (λ(T0:Class). (λ(P:Class). (λ(hDP:(((p1 T0) × (p1 P)) × (Π(A:Class), Π(B:Class), (((p1 A) × (p1 B)) → ((p2 A) B))))). (((snd(hDP) T0) P) fst(hDP)))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-245 `thm_and_modus_ponens` (Derived)

- **Identifier:** `thm_and_modus_ponens` (`NBG-245`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), ((p1 × (p1 → p2)) → p2)`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), ((p1 * (p1 -> p2)) -> p2)`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(hYon:(p1 × (p1 → p2))). (snd(hYon) fst(hYon)))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-246 `thm_and_impl_carry` (Derived)

- **Identifier:** `thm_and_impl_carry` (`NBG-246`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), Π(p3:Prop), ((p1 × (p2 → p3)) → (p2 → (p1 × p3)))`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), Pi(p3:Prop), ((p1 * (p2 -> p3)) -> (p2 -> (p1 * p3)))`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(p3:Prop). (λ(hKan:(p1 × (p2 → p3))). (λ(hSubG:p2). ⟨fst(hKan), (snd(hKan) hSubG)⟩)))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-247 `thm_or_and_distrib_right` (Derived)

- **Identifier:** `thm_or_and_distrib_right` (`NBG-247`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), Π(p3:Prop), (((Π(C:Prop), ((p1 → C) → ((p2 → C) → C))) × p3) → Π(C:Prop), (((p1 × p3) → C) → (((p2 × p3) → C) → C)))`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), Pi(p3:Prop), (((Pi(C:Prop), ((p1 -> C) -> ((p2 -> C) -> C))) * p3) -> Pi(C:Prop), (((p1 * p3) -> C) -> (((p2 * p3) -> C) -> C)))`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(p3:Prop). (λ(h:((Π(C:Prop), ((p1 → C) → ((p2 → C) → C))) × p3)). (λ(C:Prop). (λ(fL:((p1 × p3) → C)). (λ(fR:((p2 × p3) → C)). (((fst(h) C) (λ(hxX:p1). (fL ⟨hxX, snd(h)⟩))) (λ(hxY:p2). (fR ⟨hxY, snd(h)⟩))))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-248 `thm_and_or_distrib_left` (Derived)

- **Identifier:** `thm_and_or_distrib_left` (`NBG-248`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), Π(p3:Prop), ((p1 × (Π(C:Prop), ((p2 → C) → ((p3 → C) → C)))) → Π(C:Prop), (((p1 × p2) → C) → (((p1 × p3) → C) → C)))`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), Pi(p3:Prop), ((p1 * (Pi(C:Prop), ((p2 -> C) -> ((p3 -> C) -> C)))) -> Pi(C:Prop), (((p1 * p2) -> C) -> (((p1 * p3) -> C) -> C)))`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(p3:Prop). (λ(h:(p1 × (Π(C:Prop), ((p2 → C) → ((p3 → C) → C))))). (λ(C:Prop). (λ(fL:((p1 × p2) → C)). (λ(fR:((p1 × p3) → C)). (((snd(h) C) (λ(hyY:p2). (fL ⟨fst(h), hyY⟩))) (λ(hyZ:p3). (fR ⟨fst(h), hyZ⟩))))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-249 `thm_and_interchange` (Derived)

- **Identifier:** `thm_and_interchange` (`NBG-249`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), Π(p3:Prop), Π(p4:Prop), (((p1 × p2) × (p3 × p4)) → ((p1 × p3) × (p2 × p4)))`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), Pi(p3:Prop), Pi(p4:Prop), (((p1 * p2) * (p3 * p4)) -> ((p1 * p3) * (p2 * p4)))`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(p3:Prop). (λ(p4:Prop). (λ(h:((p1 × p2) × (p3 × p4))). ⟨⟨fst(fst(h)), fst(snd(h))⟩, ⟨snd(fst(h)), snd(snd(h))⟩⟩)))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-250 `thm_or_both_cases_left` (Derived)

- **Identifier:** `thm_or_both_cases_left` (`NBG-250`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:(Class → (Class → Prop))), Π(p2:(Class → Prop)), Π(x:Class), Π(A:Class), ((Π(C:Prop), (((((p1 x) A) × ((p2 x) → 𝟘)) → C) → (((((p1 x) A) × (p2 x)) → C) → C))) → ((p1 x) A))`
- **Statement (ANSII):** `Pi(p1:(Class -> (Class -> Prop))), Pi(p2:(Class -> Prop)), Pi(x:Class), Pi(A:Class), ((Pi(C:Prop), (((((p1 x) A) * ((p2 x) -> Void)) -> C) -> (((((p1 x) A) * (p2 x)) -> C) -> C))) -> ((p1 x) A))`
- **Proof Term:** `(λ(p1:(Class → (Class → Prop))). (λ(p2:(Class → Prop)). (λ(x:Class). (λ(A:Class). (λ(hOr:Π(C:Prop), (((((p1 x) A) × ((p2 x) → 𝟘)) → C) → (((((p1 x) A) × (p2 x)) → C) → C))). (((hOr ((p1 x) A)) (λ(hDiff:(((p1 x) A) × ((p2 x) → 𝟘))). fst(hDiff))) (λ(hInter:(((p1 x) A) × (p2 x))). fst(hInter))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-251 `thm_forall_iff_split` (Derived)

- **Identifier:** `thm_forall_iff_split` (`NBG-251`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:(Class → Prop)), Π(p2:(Class → Prop)), ((Π(X:Class), (((p1 X) → (p2 X)) × ((p2 X) → (p1 X)))) → ((Π(X:Class), ((p1 X) → (p2 X))) × (Π(X:Class), ((p2 X) → (p1 X)))))`
- **Statement (ANSII):** `Pi(p1:(Class -> Prop)), Pi(p2:(Class -> Prop)), ((Pi(X:Class), (((p1 X) -> (p2 X)) * ((p2 X) -> (p1 X)))) -> ((Pi(X:Class), ((p1 X) -> (p2 X))) * (Pi(X:Class), ((p2 X) -> (p1 X)))))`
- **Proof Term:** `(λ(p1:(Class → Prop)). (λ(p2:(Class → Prop)). (λ(hIff:Π(X:Class), (((p1 X) → (p2 X)) × ((p2 X) → (p1 X)))). ⟨(λ(X:Class). fst((hIff X))), (λ(X:Class). snd((hIff X)))⟩)))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-252 `thm_forall_iff_join` (Derived)

- **Identifier:** `thm_forall_iff_join` (`NBG-252`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:(Class → Prop)), Π(p2:(Class → Prop)), (((Π(X:Class), ((p1 X) → (p2 X))) × (Π(X:Class), ((p2 X) → (p1 X)))) → Π(X:Class), (((p1 X) → (p2 X)) × ((p2 X) → (p1 X))))`
- **Statement (ANSII):** `Pi(p1:(Class -> Prop)), Pi(p2:(Class -> Prop)), (((Pi(X:Class), ((p1 X) -> (p2 X))) * (Pi(X:Class), ((p2 X) -> (p1 X)))) -> Pi(X:Class), (((p1 X) -> (p2 X)) * ((p2 X) -> (p1 X))))`
- **Proof Term:** `(λ(p1:(Class → Prop)). (λ(p2:(Class → Prop)). (λ(hConj:((Π(X:Class), ((p1 X) → (p2 X))) × (Π(X:Class), ((p2 X) → (p1 X))))). (λ(X:Class). ⟨(fst(hConj) X), (snd(hConj) X)⟩))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-253 `thm_and_map_left` (Derived)

- **Identifier:** `thm_and_map_left` (`NBG-253`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), Π(p3:Prop), (((p1 × p2) × (p1 → p3)) → (p3 × p2))`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), Pi(p3:Prop), (((p1 * p2) * (p1 -> p3)) -> (p3 * p2))`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(p3:Prop). (λ(h:((p1 × p2) × (p1 → p3))). ⟨(snd(h) fst(fst(h))), snd(fst(h))⟩))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-254 `thm_and_map_right` (Derived)

- **Identifier:** `thm_and_map_right` (`NBG-254`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), Π(p3:Prop), (((p1 × p2) × (p2 → p3)) → (p1 × p3))`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), Pi(p3:Prop), (((p1 * p2) * (p2 -> p3)) -> (p1 * p3))`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(p3:Prop). (λ(h:((p1 × p2) × (p2 → p3))). ⟨fst(fst(h)), (snd(h) snd(fst(h)))⟩))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-255 `thm_xor_elim_left` (Derived)

- **Identifier:** `thm_xor_elim_left` (`NBG-255`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:(Class → Prop)), Π(p2:(Class → (Class → Prop))), Π(x:Class), Π(B:Class), (((Π(C:Prop), ((((p1 x) × (((p2 x) B) → 𝟘)) → C) → (((((p2 x) B) × ((p1 x) → 𝟘)) → C) → C))) × ((p1 x) → 𝟘)) → (((p2 x) B) × ((p1 x) → 𝟘)))`
- **Statement (ANSII):** `Pi(p1:(Class -> Prop)), Pi(p2:(Class -> (Class -> Prop))), Pi(x:Class), Pi(B:Class), (((Pi(C:Prop), ((((p1 x) * (((p2 x) B) -> Void)) -> C) -> (((((p2 x) B) * ((p1 x) -> Void)) -> C) -> C))) * ((p1 x) -> Void)) -> (((p2 x) B) * ((p1 x) -> Void)))`
- **Proof Term:** `(λ(p1:(Class → Prop)). (λ(p2:(Class → (Class → Prop))). (λ(x:Class). (λ(B:Class). (λ(h:((Π(C:Prop), ((((p1 x) × (((p2 x) B) → 𝟘)) → C) → (((((p2 x) B) × ((p1 x) → 𝟘)) → C) → C))) × ((p1 x) → 𝟘))). ⟨(((fst(h) ((p2 x) B)) (λ(hL:((p1 x) × (((p2 x) B) → 𝟘))). ax_false_elim(((p2 x) B), (snd(h) fst(hL))))) (λ(hR:(((p2 x) B) × ((p1 x) → 𝟘))). fst(hR))), snd(h)⟩)))))`
- **Axioms Used:** `ax_false_elim`
- **Definitions Used:** `(none)`

### NBG-256 `thm_xor_elim_right` (Derived)

- **Identifier:** `thm_xor_elim_right` (`NBG-256`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:(Class → (Class → Prop))), Π(p2:(Class → Prop)), Π(x:Class), Π(A:Class), (((Π(C:Prop), (((((p1 x) A) × ((p2 x) → 𝟘)) → C) → ((((p2 x) × (((p1 x) A) → 𝟘)) → C) → C))) × ((p2 x) → 𝟘)) → (((p1 x) A) × ((p2 x) → 𝟘)))`
- **Statement (ANSII):** `Pi(p1:(Class -> (Class -> Prop))), Pi(p2:(Class -> Prop)), Pi(x:Class), Pi(A:Class), (((Pi(C:Prop), (((((p1 x) A) * ((p2 x) -> Void)) -> C) -> ((((p2 x) * (((p1 x) A) -> Void)) -> C) -> C))) * ((p2 x) -> Void)) -> (((p1 x) A) * ((p2 x) -> Void)))`
- **Proof Term:** `(λ(p1:(Class → (Class → Prop))). (λ(p2:(Class → Prop)). (λ(x:Class). (λ(A:Class). (λ(h:((Π(C:Prop), (((((p1 x) A) × ((p2 x) → 𝟘)) → C) → ((((p2 x) × (((p1 x) A) → 𝟘)) → C) → C))) × ((p2 x) → 𝟘))). ⟨(((fst(h) ((p1 x) A)) (λ(hL:(((p1 x) A) × ((p2 x) → 𝟘))). fst(hL))) (λ(hR:((p2 x) × (((p1 x) A) → 𝟘))). ax_false_elim(((p1 x) A), (snd(h) fst(hR))))), snd(h)⟩)))))`
- **Axioms Used:** `ax_false_elim`
- **Definitions Used:** `(none)`

### NBG-257 `thm_modus_ponens_absurd` (Derived)

- **Identifier:** `thm_modus_ponens_absurd` (`NBG-257`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), Π(p3:Prop), (((p1 × (p1 → p2)) × (p3 × (p2 → 𝟘))) → 𝟘)`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), Pi(p3:Prop), (((p1 * (p1 -> p2)) * (p3 * (p2 -> Void))) -> Void)`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(p3:Prop). (λ(h:((p1 × (p1 → p2)) × (p3 × (p2 → 𝟘)))). (snd(snd(h)) (snd(fst(h)) fst(fst(h))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-258 `thm_and_map_both` (Derived)

- **Identifier:** `thm_and_map_both` (`NBG-258`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), Π(p3:Prop), Π(p4:Prop), (((p1 × p2) × ((p1 → p3) × (p2 → p4))) → (p3 × p4))`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), Pi(p3:Prop), Pi(p4:Prop), (((p1 * p2) * ((p1 -> p3) * (p2 -> p4))) -> (p3 * p4))`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(p3:Prop). (λ(p4:Prop). (λ(h:((p1 × p2) × ((p1 → p3) × (p2 → p4)))). ⟨(fst(snd(h)) fst(fst(h))), (snd(snd(h)) snd(fst(h)))⟩)))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-259 `thm_impl_then_and_rule` (Derived)

- **Identifier:** `thm_impl_then_and_rule` (`NBG-259`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), Π(p3:Prop), Π(p4:Prop), (((p1 → p2) × ((p2 × p3) → p4)) → ((p1 × p3) → p4))`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), Pi(p3:Prop), Pi(p4:Prop), (((p1 -> p2) * ((p2 * p3) -> p4)) -> ((p1 * p3) -> p4))`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(p3:Prop). (λ(p4:Prop). (λ(hSymTrans:((p1 → p2) × ((p2 × p3) → p4))). (λ(hPair:(p1 × p3)). (snd(hSymTrans) ⟨(fst(hSymTrans) fst(hPair)), snd(hPair)⟩)))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-260 `thm_forall_impl_and_intro` (Derived)

- **Identifier:** `thm_forall_impl_and_intro` (`NBG-260`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:(Class → Prop)), Π(p2:(Class → Prop)), Π(p3:(Class → Prop)), (((Π(X:Class), ((p1 X) → (p2 X))) × (Π(X:Class), ((p1 X) → (p3 X)))) → Π(X:Class), ((p1 X) → ((p2 X) × (p3 X))))`
- **Statement (ANSII):** `Pi(p1:(Class -> Prop)), Pi(p2:(Class -> Prop)), Pi(p3:(Class -> Prop)), (((Pi(X:Class), ((p1 X) -> (p2 X))) * (Pi(X:Class), ((p1 X) -> (p3 X)))) -> Pi(X:Class), ((p1 X) -> ((p2 X) * (p3 X))))`
- **Proof Term:** `(λ(p1:(Class → Prop)). (λ(p2:(Class → Prop)). (λ(p3:(Class → Prop)). (λ(hBoth:((Π(X:Class), ((p1 X) → (p2 X))) × (Π(X:Class), ((p1 X) → (p3 X))))). (λ(X:Class). (λ(hxA:(p1 X)). ⟨((fst(hBoth) X) hxA), ((snd(hBoth) X) hxA)⟩))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-261 `thm_forall_impl_trans_through_and` (Derived)

- **Identifier:** `thm_forall_impl_trans_through_and` (`NBG-261`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:(Class → Prop)), Π(p2:(Class → Prop)), Π(p3:(Class → Prop)), Π(p4:(Class → Prop)), (((Π(X:Class), (((p1 X) × (p2 X)) → (p3 X))) × (Π(X:Class), ((p4 X) → ((p1 X) × (p2 X))))) → Π(X:Class), ((p4 X) → (p3 X)))`
- **Statement (ANSII):** `Pi(p1:(Class -> Prop)), Pi(p2:(Class -> Prop)), Pi(p3:(Class -> Prop)), Pi(p4:(Class -> Prop)), (((Pi(X:Class), (((p1 X) * (p2 X)) -> (p3 X))) * (Pi(X:Class), ((p4 X) -> ((p1 X) * (p2 X))))) -> Pi(X:Class), ((p4 X) -> (p3 X)))`
- **Proof Term:** `(λ(p1:(Class → Prop)). (λ(p2:(Class → Prop)). (λ(p3:(Class → Prop)). (λ(p4:(Class → Prop)). (λ(h:((Π(X:Class), (((p1 X) × (p2 X)) → (p3 X))) × (Π(X:Class), ((p4 X) → ((p1 X) × (p2 X)))))). (λ(X:Class). (λ(hxD:(p4 X)). ((fst(h) X) ((snd(h) X) hxD)))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-262 `thm_impl_trans_and` (Derived)

- **Identifier:** `thm_impl_trans_and` (`NBG-262`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), Π(p3:Prop), (((p1 → p2) × (p2 → p3)) → (p1 → p3))`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), Pi(p3:Prop), (((p1 -> p2) * (p2 -> p3)) -> (p1 -> p3))`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(p3:Prop). (λ(h:((p1 → p2) × (p2 → p3))). (λ(hxy:p1). (snd(h) (fst(h) hxy)))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-263 `thm_modus_tollens_absurd` (Derived)

- **Identifier:** `thm_modus_tollens_absurd` (`NBG-263`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), (((p1 → p2) × ((p2 → 𝟘) × p1)) → 𝟘)`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), (((p1 -> p2) * ((p2 -> Void) * p1)) -> Void)`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(h:((p1 → p2) × ((p2 → 𝟘) × p1))). (fst(snd(h)) (fst(h) snd(snd(h)))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-264 `thm_impl_and_to_two_ors` (Derived)

- **Identifier:** `thm_impl_and_to_two_ors` (`NBG-264`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), Π(p3:Prop), Π(p4:Prop), Π(p5:Prop), (((p1 → (p2 × p3)) × p1) → ((Π(C:Prop), ((p2 → C) → ((p4 → C) → C))) × (Π(C:Prop), ((p5 → C) → ((p3 → C) → C)))))`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), Pi(p3:Prop), Pi(p4:Prop), Pi(p5:Prop), (((p1 -> (p2 * p3)) * p1) -> ((Pi(C:Prop), ((p2 -> C) -> ((p4 -> C) -> C))) * (Pi(C:Prop), ((p5 -> C) -> ((p3 -> C) -> C)))))`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(p3:Prop). (λ(p4:Prop). (λ(p5:Prop). (λ(h:((p1 → (p2 × p3)) × p1)). ⟨(λ(C:Prop). (λ(fL:(p2 → C)). (λ(fR:(p4 → C)). (fL fst((fst(h) snd(h))))))), (λ(C:Prop). (λ(gL:(p5 → C)). (λ(gR:(p3 → C)). (gR snd((fst(h) snd(h)))))))⟩))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-265 `thm_impl_back_and_forth` (Derived)

- **Identifier:** `thm_impl_back_and_forth` (`NBG-265`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), (((p1 → p2) × (p2 → (p1 × p1))) → (p1 → (p1 × p2)))`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), (((p1 -> p2) * (p2 -> (p1 * p1))) -> (p1 -> (p1 * p2)))`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(hDiag:((p1 → p2) × (p2 → (p1 × p1)))). (λ(hxA:p1). ⟨fst((snd(hDiag) (fst(hDiag) hxA))), (fst(hDiag) hxA)⟩))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-266 `thm_transitive_common_upper_bound` (Derived)

- **Identifier:** `thm_transitive_common_upper_bound` (`NBG-266`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:(Class → (Class → Prop))), Π(a:Class), Π(b:Class), Π(c:Class), Π(d:Class), ((Π(x:Class), Π(y:Class), Π(z:Class), ((((p1 x) y) × ((p1 y) z)) → ((p1 x) z))) → (((((p1 a) b) × ((p1 c) b)) × ((p1 b) d)) → (((p1 a) d) × ((p1 c) d))))`
- **Statement (ANSII):** `Pi(p1:(Class -> (Class -> Prop))), Pi(a:Class), Pi(b:Class), Pi(c:Class), Pi(d:Class), ((Pi(x:Class), Pi(y:Class), Pi(z:Class), ((((p1 x) y) * ((p1 y) z)) -> ((p1 x) z))) -> (((((p1 a) b) * ((p1 c) b)) * ((p1 b) d)) -> (((p1 a) d) * ((p1 c) d))))`
- **Proof Term:** `(λ(p1:(Class → (Class → Prop))). (λ(a:Class). (λ(b:Class). (λ(c:Class). (λ(d:Class). (λ(hTrans:Π(x:Class), Π(y:Class), Π(z:Class), ((((p1 x) y) × ((p1 y) z)) → ((p1 x) z))). (λ(hUB:((((p1 a) b) × ((p1 c) b)) × ((p1 b) d))). ⟨((((hTrans a) b) d) ⟨fst(fst(hUB)), snd(hUB)⟩), ((((hTrans c) b) d) ⟨snd(fst(hUB)), snd(hUB)⟩)⟩)))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-267 `thm_transitive_common_lower_bound` (Derived)

- **Identifier:** `thm_transitive_common_lower_bound` (`NBG-267`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:(Class → (Class → Prop))), Π(a:Class), Π(b:Class), Π(c:Class), Π(d:Class), ((Π(x:Class), Π(y:Class), Π(z:Class), ((((p1 x) y) × ((p1 y) z)) → ((p1 x) z))) → ((((p1 d) b) × (((p1 b) a) × ((p1 b) c))) → (((p1 d) a) × ((p1 d) c))))`
- **Statement (ANSII):** `Pi(p1:(Class -> (Class -> Prop))), Pi(a:Class), Pi(b:Class), Pi(c:Class), Pi(d:Class), ((Pi(x:Class), Pi(y:Class), Pi(z:Class), ((((p1 x) y) * ((p1 y) z)) -> ((p1 x) z))) -> ((((p1 d) b) * (((p1 b) a) * ((p1 b) c))) -> (((p1 d) a) * ((p1 d) c))))`
- **Proof Term:** `(λ(p1:(Class → (Class → Prop))). (λ(a:Class). (λ(b:Class). (λ(c:Class). (λ(d:Class). (λ(hTrans:Π(x:Class), Π(y:Class), Π(z:Class), ((((p1 x) y) × ((p1 y) z)) → ((p1 x) z))). (λ(hLB:(((p1 d) b) × (((p1 b) a) × ((p1 b) c)))). ⟨((((hTrans d) b) a) ⟨fst(hLB), fst(snd(hLB))⟩), ((((hTrans d) b) c) ⟨fst(hLB), snd(snd(hLB))⟩)⟩)))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-268 `thm_not_conclusion_to_not_and` (Derived)

- **Identifier:** `thm_not_conclusion_to_not_and` (`NBG-268`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), Π(p3:Prop), ((((p1 × p2) → p3) × (p3 → 𝟘)) → (p1 → (p2 → 𝟘)))`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), Pi(p3:Prop), ((((p1 * p2) -> p3) * (p3 -> Void)) -> (p1 -> (p2 -> Void)))`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(p3:Prop). (λ(h:(((p1 × p2) → p3) × (p3 → 𝟘))). (λ(h1:p1). (λ(h2:p2). (snd(h) (fst(h) ⟨h1, h2⟩))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-269 `thm_impl_chain_apply` (Derived)

- **Identifier:** `thm_impl_chain_apply` (`NBG-269`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), Π(p3:Prop), ((((p1 → p2) × (p2 → p3)) × p1) → p3)`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), Pi(p3:Prop), ((((p1 -> p2) * (p2 -> p3)) * p1) -> p3)`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(p3:Prop). (λ(h:(((p1 → p2) × (p2 → p3)) × p1)). (snd(fst(h)) (fst(fst(h)) snd(h)))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-270 `thm_or_elim_common_goal` (Derived)

- **Identifier:** `thm_or_elim_common_goal` (`NBG-270`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:(Class → (Class → Prop))), Π(p2:(Class → (Class → Prop))), Π(p3:(Class → (Class → Prop))), Π(x:Class), Π(A:Class), (((((p1 x) A) → ((p2 x) A)) × (((p3 x) A) → ((p2 x) A))) → ((Π(C:Prop), ((((p1 x) A) → C) → ((((p3 x) A) → C) → C))) → ((p2 x) A)))`
- **Statement (ANSII):** `Pi(p1:(Class -> (Class -> Prop))), Pi(p2:(Class -> (Class -> Prop))), Pi(p3:(Class -> (Class -> Prop))), Pi(x:Class), Pi(A:Class), (((((p1 x) A) -> ((p2 x) A)) * (((p3 x) A) -> ((p2 x) A))) -> ((Pi(C:Prop), ((((p1 x) A) -> C) -> ((((p3 x) A) -> C) -> C))) -> ((p2 x) A)))`
- **Proof Term:** `(λ(p1:(Class → (Class → Prop))). (λ(p2:(Class → (Class → Prop))). (λ(p3:(Class → (Class → Prop))). (λ(x:Class). (λ(A:Class). (λ(h:((((p1 x) A) → ((p2 x) A)) × (((p3 x) A) → ((p2 x) A)))). (λ(hOr:Π(C:Prop), ((((p1 x) A) → C) → ((((p3 x) A) → C) → C))). (((hOr ((p2 x) A)) fst(h)) snd(h)))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-271 `thm_impl_and_intro` (Derived)

- **Identifier:** `thm_impl_and_intro` (`NBG-271`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), Π(p3:Prop), (((p1 → p2) × (p1 → p3)) → (p1 → (p2 × p3)))`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), Pi(p3:Prop), (((p1 -> p2) * (p1 -> p3)) -> (p1 -> (p2 * p3)))`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(p3:Prop). (λ(h:((p1 → p2) × (p1 → p3))). (λ(hx:p1). ⟨(fst(h) hx), (snd(h) hx)⟩)))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-272 `thm_and_rule_then_rule` (Derived)

- **Identifier:** `thm_and_rule_then_rule` (`NBG-272`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), Π(p3:Prop), Π(p4:Prop), Π(p5:Prop), ((((p1 × p2) → p3) × ((p4 × p3) → p5)) → (((p1 × p2) × p4) → p5))`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), Pi(p3:Prop), Pi(p4:Prop), Pi(p5:Prop), ((((p1 * p2) -> p3) * ((p4 * p3) -> p5)) -> (((p1 * p2) * p4) -> p5))`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(p3:Prop). (λ(p4:Prop). (λ(p5:Prop). (λ(h:(((p1 × p2) → p3) × ((p4 × p3) → p5))). (λ(hIn:((p1 × p2) × p4)). (snd(h) ⟨snd(hIn), (fst(h) fst(hIn))⟩))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-273 `thm_member_forall_apply` (Derived)

- **Identifier:** `thm_member_forall_apply` (`NBG-273`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:(Class → Prop)), Π(p2:(Class → Prop)), Π(x:Class), (((p1 x) × (Π(Z:Class), ((p1 Z) → (p2 Z)))) → (p2 x))`
- **Statement (ANSII):** `Pi(p1:(Class -> Prop)), Pi(p2:(Class -> Prop)), Pi(x:Class), (((p1 x) * (Pi(Z:Class), ((p1 Z) -> (p2 Z)))) -> (p2 x))`
- **Proof Term:** `(λ(p1:(Class → Prop)). (λ(p2:(Class → Prop)). (λ(x:Class). (λ(h:((p1 x) × (Π(Z:Class), ((p1 Z) → (p2 Z))))). ((snd(h) x) fst(h))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-274 `thm_impl_trans_keep_premise` (Derived)

- **Identifier:** `thm_impl_trans_keep_premise` (`NBG-274`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), Π(p3:Prop), (((p1 → p2) × ((p1 × p2) → p3)) → (p1 → p3))`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), Pi(p3:Prop), (((p1 -> p2) * ((p1 * p2) -> p3)) -> (p1 -> p3))`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(p3:Prop). (λ(h:((p1 → p2) × ((p1 × p2) → p3))). (λ(hxfx:p1). (snd(h) ⟨hxfx, (fst(h) hxfx)⟩))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-275 `thm_apply_hypothesis` (Derived)

- **Identifier:** `thm_apply_hypothesis` (`NBG-275`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:(Class → Prop)), Π(p2:(Class → Prop)), Π(p3:Prop), (((Π(Y:Class), ((p1 Y) → (p2 Y))) × ((Π(Y:Class), ((p1 Y) → (p2 Y))) → p3)) → p3)`
- **Statement (ANSII):** `Pi(p1:(Class -> Prop)), Pi(p2:(Class -> Prop)), Pi(p3:Prop), (((Pi(Y:Class), ((p1 Y) -> (p2 Y))) * ((Pi(Y:Class), ((p1 Y) -> (p2 Y))) -> p3)) -> p3)`
- **Proof Term:** `(λ(p1:(Class → Prop)). (λ(p2:(Class → Prop)). (λ(p3:Prop). (λ(h:((Π(Y:Class), ((p1 Y) → (p2 Y))) × ((Π(Y:Class), ((p1 Y) → (p2 Y))) → p3))). (snd(h) fst(h))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-276 `thm_impl_and_apply_swap` (Derived)

- **Identifier:** `thm_impl_and_apply_swap` (`NBG-276`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), Π(p3:Prop), (((p1 → (p2 × p3)) × p1) → (p3 × p2))`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), Pi(p3:Prop), (((p1 -> (p2 * p3)) * p1) -> (p3 * p2))`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(p3:Prop). (λ(h:((p1 → (p2 × p3)) × p1)). ⟨snd((fst(h) snd(h))), fst((fst(h) snd(h)))⟩))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-277 `thm_modus_ponens_then_impl` (Derived)

- **Identifier:** `thm_modus_ponens_then_impl` (`NBG-277`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), Π(p3:Prop), (((p1 × (p1 → p2)) × (p2 → p3)) → (p1 × p3))`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), Pi(p3:Prop), (((p1 * (p1 -> p2)) * (p2 -> p3)) -> (p1 * p3))`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(p3:Prop). (λ(h:((p1 × (p1 → p2)) × (p2 → p3))). ⟨fst(fst(h)), (snd(h) (snd(fst(h)) fst(fst(h))))⟩))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-278 `thm_curry` (Derived)

- **Identifier:** `thm_curry` (`NBG-278`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), Π(p3:Prop), (((p1 × p2) → p3) → (p1 → (p2 → p3)))`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), Pi(p3:Prop), (((p1 * p2) -> p3) -> (p1 -> (p2 -> p3)))`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(p3:Prop). (λ(h:((p1 × p2) → p3)). (λ(hxA:p1). (λ(hxB:p2). (h ⟨hxA, hxB⟩)))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-279 `thm_uncurry` (Derived)

- **Identifier:** `thm_uncurry` (`NBG-279`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), Π(p3:Prop), ((p1 → (p2 → p3)) → ((p1 × p2) → p3))`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), Pi(p3:Prop), ((p1 -> (p2 -> p3)) -> ((p1 * p2) -> p3))`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(p3:Prop). (λ(h:(p1 → (p2 → p3))). (λ(hAB:(p1 × p2)). ((h fst(hAB)) snd(hAB)))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-280 `thm_or_both_refuted` (Derived)

- **Identifier:** `thm_or_both_refuted` (`NBG-280`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), Π(p3:Prop), ((((Π(C:Prop), ((p1 → C) → (((p2 × p3) → C) → C))) × (p1 → 𝟘)) × (p3 → 𝟘)) → 𝟘)`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), Pi(p3:Prop), ((((Pi(C:Prop), ((p1 -> C) -> (((p2 * p3) -> C) -> C))) * (p1 -> Void)) * (p3 -> Void)) -> Void)`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(p3:Prop). (λ(h:(((Π(C:Prop), ((p1 → C) → (((p2 × p3) → C) → C))) × (p1 → 𝟘)) × (p3 → 𝟘))). (((fst(fst(h)) 𝟘) snd(fst(h))) (λ(hR:(p2 × p3)). (snd(h) snd(hR))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-281 `thm_disjunctive_syllogism_under_impl` (Derived)

- **Identifier:** `thm_disjunctive_syllogism_under_impl` (`NBG-281`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:(Class → Prop)), Π(p2:(Class → Prop)), Π(p3:(Class → (Class → Prop))), Π(x:Class), Π(B2:Class), ((((p1 x) → Π(C:Prop), (((p2 x) → C) → ((((p3 x) B2) → C) → C))) × (((p1 x) × (p2 x)) → 𝟘)) → ((p1 x) → ((p3 x) B2)))`
- **Statement (ANSII):** `Pi(p1:(Class -> Prop)), Pi(p2:(Class -> Prop)), Pi(p3:(Class -> (Class -> Prop))), Pi(x:Class), Pi(B2:Class), ((((p1 x) -> Pi(C:Prop), (((p2 x) -> C) -> ((((p3 x) B2) -> C) -> C))) * (((p1 x) * (p2 x)) -> Void)) -> ((p1 x) -> ((p3 x) B2)))`
- **Proof Term:** `(λ(p1:(Class → Prop)). (λ(p2:(Class → Prop)). (λ(p3:(Class → (Class → Prop))). (λ(x:Class). (λ(B2:Class). (λ(h:(((p1 x) → Π(C:Prop), (((p2 x) → C) → ((((p3 x) B2) → C) → C))) × (((p1 x) × (p2 x)) → 𝟘))). (λ(hxB1:(p1 x)). ((((fst(h) hxB1) ((p3 x) B2)) (λ(hxA:(p2 x)). ax_false_elim(((p3 x) B2), (snd(h) ⟨hxB1, hxA⟩)))) (λ(hxB2:((p3 x) B2)). hxB2)))))))))`
- **Axioms Used:** `ax_false_elim`
- **Definitions Used:** `(none)`

### NBG-282 `thm_and3_drop_middle` (Derived)

- **Identifier:** `thm_and3_drop_middle` (`NBG-282`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), Π(p3:Prop), (((p1 × p2) × p3) → (p1 × p3))`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), Pi(p3:Prop), (((p1 * p2) * p3) -> (p1 * p3))`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(p3:Prop). (λ(h:((p1 × p2) × p3)). ⟨fst(fst(h)), snd(h)⟩))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-283 `thm_and3_drop_first` (Derived)

- **Identifier:** `thm_and3_drop_first` (`NBG-283`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), Π(p3:Prop), (((p1 × p2) × p3) → (p2 × p3))`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), Pi(p3:Prop), (((p1 * p2) * p3) -> (p2 * p3))`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(p3:Prop). (λ(h:((p1 × p2) × p3)). ⟨snd(fst(h)), snd(h)⟩))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-284 `thm_impl_and3_intro` (Derived)

- **Identifier:** `thm_impl_and3_intro` (`NBG-284`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), Π(p3:Prop), Π(p4:Prop), ((((p1 → p2) × (p1 → p3)) × (p1 → p4)) → (p1 → ((p2 × p3) × p4)))`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), Pi(p3:Prop), Pi(p4:Prop), ((((p1 -> p2) * (p1 -> p3)) * (p1 -> p4)) -> (p1 -> ((p2 * p3) * p4)))`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(p3:Prop). (λ(p4:Prop). (λ(h:(((p1 → p2) × (p1 → p3)) × (p1 → p4))). (λ(huP:p1). ⟨⟨(fst(fst(h)) huP), (snd(fst(h)) huP)⟩, (snd(h) huP)⟩))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-285 `thm_impl_and_proj_right` (Derived)

- **Identifier:** `thm_impl_and_proj_right` (`NBG-285`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), Π(p3:Prop), ((p1 → (p2 × p3)) → (p1 → p3))`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), Pi(p3:Prop), ((p1 -> (p2 * p3)) -> (p1 -> p3))`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(p3:Prop). (λ(h:(p1 → (p2 × p3))). (λ(hxEq:p1). snd((h hxEq)))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-286 `thm_impl_trans_three` (Derived)

- **Identifier:** `thm_impl_trans_three` (`NBG-286`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), Π(p3:Prop), Π(p4:Prop), ((((p1 → p2) × (p3 → p4)) × (p1 → p3)) → (p1 → p4))`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), Pi(p3:Prop), Pi(p4:Prop), ((((p1 -> p2) * (p3 -> p4)) * (p1 -> p3)) -> (p1 -> p4))`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(p3:Prop). (λ(p4:Prop). (λ(h:(((p1 → p2) × (p3 → p4)) × (p1 → p3))). (λ(huX:p1). (snd(fst(h)) (snd(h) huX))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-287 `thm_and_right_impl` (Derived)

- **Identifier:** `thm_and_right_impl` (`NBG-287`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), Π(p3:Prop), (((p1 × p2) × (p2 → p3)) → (p1 → p3))`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), Pi(p3:Prop), (((p1 * p2) * (p2 -> p3)) -> (p1 -> p3))`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(p3:Prop). (λ(h:((p1 × p2) × (p2 → p3))). (λ(hfHom:p1). (snd(h) snd(fst(h))))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-288 `thm_impl_and_intro_then_rule` (Derived)

- **Identifier:** `thm_impl_and_intro_then_rule` (`NBG-288`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), Π(p3:Prop), Π(p4:Prop), ((((p1 → p2) × (p1 → p3)) × ((p2 × p3) → p4)) → (p1 → p4))`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), Pi(p3:Prop), Pi(p4:Prop), ((((p1 -> p2) * (p1 -> p3)) * ((p2 * p3) -> p4)) -> (p1 -> p4))`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(p3:Prop). (λ(p4:Prop). (λ(h:(((p1 → p2) × (p1 → p3)) × ((p2 × p3) → p4))). (λ(hpOm:p1). (snd(h) ⟨(fst(fst(h)) hpOm), (snd(fst(h)) hpOm)⟩)))))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

### NBG-289 `thm_modus_ponens_and` (Derived)

- **Identifier:** `thm_modus_ponens_and` (`NBG-289`, kind: `Derived`)
- **Statement (Unicode):** `Π(p1:Prop), Π(p2:Prop), (((p1 → p2) × p1) → p2)`
- **Statement (ANSII):** `Pi(p1:Prop), Pi(p2:Prop), (((p1 -> p2) * p1) -> p2)`
- **Proof Term:** `(λ(p1:Prop). (λ(p2:Prop). (λ(h:((p1 → p2) × p1)). (fst(h) snd(h)))))`
- **Axioms Used:** `(none -- pure lambda-term)`
- **Definitions Used:** `(none)`

