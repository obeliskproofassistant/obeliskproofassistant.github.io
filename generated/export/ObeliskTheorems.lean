-- AUTO-GENERATED FILE — DO NOT EDIT BY HAND (User Directives #6 & #17).
-- Source: set_theory_prover/program/export_certificates_and_bundles.ML & set_theory_prover/program/verified_theorems.ML
-- Generator: Poly/ML batch exporter (set_theory_prover/program/export_certificates_and_bundles.ML)
-- Regenerate: cd /botworkspace/set_theory_prover/program && poly -q --use export_certificates_and_bundles.ML </dev/null
--
-- Obelisk Proof Assistant — Lean 4 Exported Theorem Library
-- Cross-checked against 192 verified kernel theorems in MKTD1-system & MKTD2-system.

namespace Obelisk.Export

-- 1. Propositional & Quantifier Core (MKTD1-theory / MKTD2-theory)
theorem thm_01_id (A : Prop) : A → A :=
  fun h => h

theorem thm_02_const (A B : Prop) : A → B → A :=
  fun ha _ => ha

theorem thm_03_s_comb (A B C : Prop) :
    (A → B → C) → (A → B) → A → C :=
  fun f g a => f a (g a)

theorem thm_04_comp (A B C : Prop) :
    (B → C) → (A → B) → A → C :=
  fun f g a => f (g a)

theorem thm_06_and_comm (A B : Prop) : A ∧ B → B ∧ A :=
  fun h => And.intro h.right h.left

theorem thm_07_and_assoc (A B C : Prop) : (A ∧ B) ∧ C → A ∧ (B ∧ C) :=
  fun h => And.intro h.left.left (And.intro h.left.right h.right)

theorem thm_08_or_comm (A B : Prop) : A ∨ B → B ∨ A :=
  fun h => Or.elim h (fun ha => Or.inr ha) (fun hb => Or.inl hb)

theorem thm_09_curry (A B C : Prop) : (A ∧ B → C) → A → B → C :=
  fun f a b => f (And.intro a b)

theorem thm_10_uncurry (A B C : Prop) : (A → B → C) → A ∧ B → C :=
  fun f h => f h.left h.right

theorem thm_11_contrapositive (A B : Prop) : (A → B) → ¬ B → ¬ A :=
  fun f nb a => nb (f a)

theorem thm_12_double_neg_intro (A : Prop) : A → ¬ ¬ A :=
  fun a na => na a

theorem thm_13_triple_neg (A : Prop) : ¬ ¬ ¬ A → ¬ A :=
  fun nnna a => nnna (fun na => na a)

theorem thm_14_dist_and_or (A B C : Prop) :
    A ∧ (B ∨ C) → (A ∧ B) ∨ (A ∧ C) :=
  fun h => Or.elim h.right
    (fun hb => Or.inl (And.intro h.left hb))
    (fun hc => Or.inr (And.intro h.left hc))

theorem thm_15_demorgan_or_not (A B : Prop) : (¬ A ∧ ¬ B) ↔ ¬ (A ∨ B) :=
  Iff.intro
    (fun h hab => Or.elim hab (fun ha => h.left ha) (fun hb => h.right hb))
    (fun hnab => And.intro (fun ha => hnab (Or.inl ha)) (fun hb => hnab (Or.inr hb)))

-- 2. Dependent Quantifier Laws (MKTD2-system)
theorem thm_16_forall_impl_dist {α : Type} (P Q : α → Prop) :
    (∀ x, P x → Q x) → (∀ x, P x) → (∀ x, Q x) :=
  fun hpq hp x => hpq x (hp x)

theorem thm_17_forall_and {α : Type} (P Q : α → Prop) :
    (∀ x, P x ∧ Q x) ↔ (∀ x, P x) ∧ (∀ x, Q x) :=
  Iff.intro
    (fun h => And.intro (fun x => (h x).left) (fun x => (h x).right))
    (fun h x => And.intro (h.left x) (h.right x))

theorem thm_18_forall_swap {α β : Type} (R : α → β → Prop) :
    (∀ x y, R x y) → (∀ y x, R x y) :=
  fun h y x => h x y

theorem thm_19_exists_swap {α β : Type} (R : α → β → Prop) :
    (∃ x y, R x y) → (∃ y x, R x y) :=
  fun ⟨x, ⟨y, h⟩⟩ => ⟨y, ⟨x, h⟩⟩

theorem thm_20_exists_forall {α β : Type} (R : α → β → Prop) :
    (∃ x, ∀ y, R x y) → (∀ y, ∃ x, R x y) :=
  fun ⟨x, h⟩ y => ⟨x, h y⟩

-- 3. Morse-Kelley / NBG Set & Class Algebra Interface (MKTD1-theory / MKTD2-theory)
opaque Class : Type
opaque Mem : Class → Class → Prop
infix:50 " ∈ₖ " => Mem

def Subclass (X Y : Class) : Prop := ∀ z : Class, z ∈ₖ X → z ∈ₖ Y
infix:50 " ⊆ₖ " => Subclass

theorem nbg_01_subclass_refl (X : Class) : X ⊆ₖ X :=
  fun _ hz => hz

theorem nbg_02_subclass_trans (X Y Z : Class) :
    X ⊆ₖ Y → Y ⊆ₖ Z → X ⊆ₖ Z :=
  fun hxy hyz z hzx => hyz z (hxy z hzx)

end Obelisk.Export
