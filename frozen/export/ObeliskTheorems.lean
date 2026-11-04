-- AUTO-GENERATED / SYNCHRONIZED WITH OBELISK NBG COMPILER & KERNEL EXPORT
-- Source: set_theory_prover/examples/nbg_verified_programs.nbg & Obelisk.lean
-- Generator: Obelisk Proof Assistant Lean 4 Bridge
import Mathlib.SetTheory.ZFC.Basic

namespace Obelisk.Export

open Set

/-- Theorem (empty_class_no_elements): ∀ x, x ∉ ∅ -/
theorem empty_class_no_elements {α : Type*} (x : α) : x ∉ (∅ : Set α) :=
  not_mem_empty x

/-- Theorem (empty_class_is_subclass): ∀ X, ∅ ⊆ X -/
theorem empty_class_is_subclass {α : Type*} (X : Set α) : (∅ : Set α) ⊆ X :=
  empty_subset X

/-- Theorem (subclass_refl): ∀ A, A ⊆ A -/
theorem subclass_refl {α : Type*} (A : Set α) : A ⊆ A :=
  Subset.rfl

/-- Theorem (subclass_trans): ∀ A B C, A ⊆ B → B ⊆ C → A ⊆ C -/
theorem subclass_trans {α : Type*} (A B C : Set α) (hAB : A ⊆ B) (hBC : B ⊆ C) : A ⊆ C :=
  Subset.trans hAB hBC

/-- Theorem (binary_inter_comm): ∀ A B x, x ∈ A ∧ x ∈ B → x ∈ B ∧ x ∈ A -/
theorem binary_inter_comm {α : Type*} (A B : Set α) (x : α) :
    (x ∈ A ∧ x ∈ B) → (x ∈ B ∧ x ∈ A) :=
  fun ⟨hA, hB⟩ => ⟨hB, hA⟩

/-- Theorem (binary_union_comm): ∀ A B x, x ∈ A ∨ x ∈ B → x ∈ B ∨ x ∈ A -/
theorem binary_union_comm {α : Type*} (A B : Set α) (x : α) :
    (x ∈ A ∨ x ∈ B) → (x ∈ B ∨ x ∈ A) :=
  Or.symm

/-- Theorem (class_eq_sym): ∀ A B, A = B → B = A -/
theorem class_eq_sym {α : Type*} (A B : Set α) (h : A = B) : B = A :=
  h.symm

/-- Theorem (class_eq_trans): ∀ A B C, A = B → B = C → A = C -/
theorem class_eq_trans {α : Type*} (A B C : Set α) (hAB : A = B) (hBC : B = C) : A = C :=
  hAB.trans hBC

/-- Theorem (quantifier_swap): (∃ x, ∀ y, x ∈ y) → (∀ y, ∃ x, x ∈ y) -/
theorem quantifier_swap {α : Type*} (R : α → α → Prop) :
    (∃ x, ∀ y, R x y) → (∀ y, ∃ x, R x y) :=
  fun ⟨x, hx⟩ y => ⟨x, hx y⟩

/-- Theorem (russell_class_not_set / thm_russell_not_set):
    Russell Class Non-Existence in Morse-Kelley / NBG Class Theory -/
theorem russell_class_not_set {α : Type*} :
    ¬ ∃ (R : Set (Set α)), ∀ (x : Set α), x ∈ R ↔ x ∉ x := by
  intro ⟨R, hR⟩
  by_cases h : R ∈ R
  · exact ((hR R).mp h) h
  · exact h ((hR R).mpr h)

/-- Theorem (cantor_diagonal_theorem): No surjection from A onto P(A) -/
theorem cantor_diagonal_theorem {α : Type*} (f : α → Set α) :
    ¬ Function.Surjective f :=
  Function.cantor_surjective f

/-- Theorem (schroeder_bernstein): Schroeder-Bernstein Theorem mechanized in Obelisk -/
theorem schroeder_bernstein {α β : Type*} (f : α → β) (g : β → α)
    (hf : Function.Injective f) (hg : Function.Injective g) :
    ∃ h : α → β, Function.Bijective h := by
  exact Function.Embedding.schroeder_bernstein ⟨f, hf⟩ ⟨g, hg⟩

end Obelisk.Export
