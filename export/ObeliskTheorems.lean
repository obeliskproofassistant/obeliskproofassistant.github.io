-- Generated automatically by Obelisk Proof Assistant Lean 4 Exporter
import Mathlib.SetTheory.ZFC.Basic

namespace Obelisk.Export

open Set

/-- Schroeder-Bernstein Theorem mechanized in Obelisk and exported to Lean 4 -/
theorem schroeder_bernstein {α β : Type*} (f : α → β) (g : β → α)
    (hf : Function.Injective f) (hg : Function.Injective g) :
    ∃ h : α → β, Function.Bijective h := by
  exact Function.Embedding.schroeder_bernstein ⟨f, hf⟩ ⟨g, hg⟩

/-- Russell Class Non-Existence in Morse-Kelley Class Theory -/
theorem russell_class_not_set :
    ¬ ∃ (R : Set (Set α)), ∀ (x : Set α), x ∈ R ↔ x ∉ x := by
  intro ⟨R, hR⟩
  by_cases h : R ∈ R
  · have h_not := (hR R).mp h
    exact h_not h
  · have h_in := (hR R).mpr h
    exact h h_in

end Obelisk.Export
