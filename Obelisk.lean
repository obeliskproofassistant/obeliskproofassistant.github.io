 /-
   ============================================================================
   A machine-checked analysis of the axiom system of the "Obelisk"
   proof assistant (higher-order-logic variant, demo dated 2026-05-05,
   https://obeliskproofassistant.github.io/), by Georgy Dunaev.


   Checked with Lean 4.32.0.     Self-contained: no Mathlib, only core Lean.


   Contents.
      Part 0.   The base theory exactly as printed in the demo:
                impredicative class comprehension (3.01), extensionality (3.10),
                heredity (3.12), exponent (3.13), regularity-as-∈-induction (3.14),
                infinity (3.53).    These axioms are consistent (model: take an
                uncountable stage V_α of the cumulative hierarchy with α a limit
                ordinal > ω, classes = subsets of V_α).
      Part 1.   THE PRINTED SYSTEM IS INCONSISTENT, in two independent ways:
                (a) definition 3.34 of ≼ has no injectivity requirement, so the
                    empty class-function witnesses A ≼ B for ALL A, B; hence the
                    size-limitation axiom 3.37 forces V to have no members,
                    contradicting axiom 3.53 (ω is a set);
                (b) the same ≼-bug propagates through "Tight" (3.41) into the
                    universe predicate (3.64): NO class can be a universe, so
                    Tarski's axiom 3.66 is itself contradictory, and the announced
                    theorem 3.65 ("V is a universe") is refutable as printed.
                Also: with Kuratowski pairs (3.48), "concentrated" (3.29) admits
                phantom partners if interpreted with an unrestricted quantifier
                over Class (y : Class): for a proper class Y, (x,Y) = (x,x) — so the
                uniqueness in 3.29 fails at every diagonal point. This is easily
                fixed in the core by restricting the quantifier to sets (y : Set).
                Meanwhile, Dunaev's tagged pairs and lists (3.45–3.47) provide an
                INDEPENDENT construction of faithful ordered pairs for arbitrary
                classes (including proper classes).
      Part 2.   What survives: the announced theorems that ARE derivable from the
                printed base axioms alone, machine-checked:
                3.07, 3.11, 3.18 (Ord(On)), 3.55 (Ind(ω)), 3.56 (Ind(On)),
                3.57 (Tr(ω)), 3.58 (Ord(ω)), 3.59 (ω ∈ On), 3.67 (∈-induction
                on a transitive class), and the components of "V is a universe"
                that do not mention Tight.


     Part 3.   Standard axioms and independent tagged pairs:
               Add Pairing and Union to the core (standard in Morse–Kelley,
               needed for universe closure and Ind(V)).
               With them we also verify the demo's independent TBI items
               3.44–3.47: Dunaev's tagged lists/pairs, which — unlike
               Kuratowski's — are faithful on PROPER classes:
               pr1(A,B) = A, pr2(A,B) = B, and (A,B) = (C,D) → A = C ∧ B = D
               for arbitrary classes, and [A] ≠ [] even for A = ∅
               (the {0,n} marker device works as designed).
  ============================================================================
-/


set_option linter.unusedVariables false


namespace Obelisk
noncomputable section


/-! ### Part 0.     Language and the printed base axioms -/


axiom Class : Type
axiom Mem : Class → Class → Prop
infix:50 " ∈' "     => Mem


/-- 3.02: `X` is a set iff it is a member of some class. -/
def isSet (X : Class) : Prop := ∃ Y, X ∈' Y
/-- 3.03. -/
def proper (K : Class) : Prop := ¬ isSet K


/-- 3.01 (CCR): the class `{x | φ}`.    The demo's `φ : Fm` ranges over formulas
     with quantifiers over `Class` (Morse–Kelley-style impredicative
     comprehension); we model it by a Lean-level predicate. -/
axiom cls : (Class → Prop) → Class
axiom mem_cls : ∀ (φ : Class → Prop) (x : Class), x ∈' cls φ ↔ (isSet x ∧ φ x)


/-- 3.10 Extensionality. (3.08/3.09 are Lean's `Eq` congruence, for free.) -/
axiom extAx : ∀ {X Y : Class}, (∀ z, z ∈' X ↔ z ∈' Y) → X = Y


/-- 3.06. -/
def Sub (X Y : Class) : Prop := ∀ a, a ∈' X → a ∈' Y
infix:50 " ⊆' " => Sub


/-- 3.04, 3.05. -/
def Null : Class := cls (fun _ => False)
def V     : Class := cls (fun _ => True)
/-- Powerclass (used by 3.13, 3.14). -/
def power (X : Class) : Class := cls (fun y => y ⊆' X)

/-- 3.12 Heredity. -/
axiom heredity : ∀ {A B : Class}, A ⊆' B → isSet B → isSet A
/-- 3.13 Exponent. -/
axiom exponent : ∀ {X : Class}, isSet X → isSet (power X)
/-- 3.14 "Regularity" — the powerclass form of ∈-induction. -/
axiom regularity : ∀ {X : Class}, power X ⊆' X → V ⊆' X


/-! Printed definitions 3.15–3.52, verbatim. -/


/-- 3.19, 3.20. -/
def sUnion (K : Class) : Class := cls (fun x => ∃ y, y ∈' K ∧ x ∈' y)
def sInter (K : Class) : Class := cls (fun x => ∀ y, y ∈' K → x ∈' y)
/-- 3.42, 3.43, 3.49, 3.50. -/
def sing   (a : Class)      : Class := cls (fun x => x = a)
def upair (a b : Class) : Class := cls (fun x => x = a ∨ x = b)
def bUnion (A B : Class) : Class := cls (fun x => x ∈' A ∨ x ∈' B)
def bInter (A B : Class) : Class := cls (fun x => x ∈' A ∧ x ∈' B)
/-- 3.48 Kuratowski pair (a,b) = {{a,a},{a,b}}. -/
def kpair (a b : Class) : Class := upair (upair a a) (upair a b)
/-- 3.21 Domain. -/
def Dom (F : Class) : Class := cls (fun x => ∃ b, kpair x b ∈' F)
/-- 3.22 IF-THEN-ELSE-FI (the demo's semantic definition). -/
def IfC (ψ : Prop) (A B : Class) : Class :=
  cls (fun v => (ψ ∧ v ∈' A) ∨ (¬ψ ∧ v ∈' B))
/-- 3.25 Evaluation, with the demo's `ELSE V` default. -/
def app (F a : Class) : Class :=
  IfC (∃ s, kpair a s ∈' F) (sUnion (cls (fun s => kpair a s ∈' F))) V
/-- 3.26 Image. -/
def img (f A : Class) : Class := cls (fun b => ∃ a, a ∈' A ∧ app f a = b)
/-- The demo's `∃!` quantifier (4.05): over ALL classes, proper included. -/
def ExistsU (p : Class → Prop) : Prop := ∃ y, p y ∧ ∀ z, p z → z = y


/-- 3.27–3.33. -/
def isSingleton     (s : Class) : Prop := ExistsU (fun x => x ∈' s)
def setValued       (F : Class) : Prop := ∀ x, x ∈' Dom F → isSet (app F x)
def concentrated (F : Class) : Prop :=
  ∀ x, x ∈' Dom F → isSet (app F x) → ExistsU (fun y => kpair x y ∈' F)
def flatProper      (F : Class) : Prop :=
  ∀ x, x ∈' Dom F → proper (app F x) → ∀ b, kpair x b ∈' F → isSingleton b
def isFamily          (F : Class) : Prop := concentrated F ∧ flatProper F
def isClassFunction (F : Class) : Prop := isFamily F ∧ setValued F


/-- 3.34 AS PRINTED — note: no injectivity, no domain condition. -/
def PrintedWleq (A B : Class) : Prop :=
  ∃ f, isClassFunction f ∧ img f A ⊆' B

/-- 3.36 as printed: A ≺ B ⟷ ¬(B ≼ A). -/
def PrintedWlt (A B : Class) : Prop := ¬ PrintedWleq B A


/-- 3.15, 3.16, 3.17. -/
def Tr (A : Class) : Prop := ∀ B, B ∈' A → B ⊆' A
def OrdC (A : Class) : Prop := Tr A ∧ ∀ B, B ∈' A → Tr B
def On : Class := cls OrdC
/-- 3.35 Class cardinality (as printed; uses the printed ≼). -/
def card (K : Class) : Class :=
  bInter On (sInter (cls (fun a => a ∈' On ∧ PrintedWleq K a)))


/-- 3.51, 3.52. -/
def IndC (X : Class) : Prop :=
  Null ∈' X ∧ ∀ a, a ∈' X → bUnion a (sing a) ∈' X
def omega : Class := cls (fun x => ∀ Q, IndC Q → x ∈' Q)
def succ (a : Class) : Class := bUnion a (sing a)


/-- 3.53 Infinity. -/
axiom infinity : isSet omega


/-- 3.38–3.41 and 3.64, verbatim (Tight uses the printed ≺). -/
def Hereditary (A : Class) : Prop :=
  ∀ B, B ∈' A → ∀ X, X ⊆' B → X ∈' A
def Powerful (U : Class) : Prop := ∀ B, B ∈' U → power B ∈' U
def Pairful   (U : Class) : Prop :=
  ∀ A B, A ∈' U → B ∈' U → upair A B ∈' U
def Tight (U : Class) : Prop :=
  ∀ B, B ⊆' U → (PrintedWlt B U ↔ B ∈' U)
def isUniverse (U : Class) : Prop :=
  ((omega ∈' U) ∧ ((Tr U ∧ Hereditary U) ∧ (Powerful U ∧ Tight U))) ∧ Pairful U


/-! ### Basic lemmas -/


theorem not_mem_Null (x : Class) : ¬ x ∈' Null :=
  fun h => ((mem_cls _ x).mp h).2


theorem Null_sub (X : Class) : Null ⊆' X :=
  fun a ha => absurd ha (not_mem_Null a)


theorem mem_V {x : Class} : x ∈' V ↔ isSet x :=
  ⟨fun h => ((mem_cls _ x).mp h).1, fun h => (mem_cls _ x).mpr ⟨h, trivial⟩⟩


theorem isSet_of_mem {x Y : Class} (h : x ∈' Y) : isSet x := ⟨Y, h⟩


/-- ∅ is a set (from Heredity and Infinity). -/


theorem isSet_Null : isSet Null := heredity (Null_sub omega) infinity


/-- Russell: the universal class is proper (uses CCR and Heredity). -/
theorem V_proper : proper V := fun hV =>
  have hsub : cls (fun x => ¬ x ∈' x) ⊆' V :=
    fun a ha => mem_V.mpr ((mem_cls _ a).mp ha).1
  have hset : isSet (cls (fun x => ¬ x ∈' x)) := heredity hsub hV
  have hiff := mem_cls (fun x => ¬ x ∈' x) (cls (fun x => ¬ x ∈' x))
  (Classical.em (cls (fun x => ¬ x ∈' x) ∈' cls (fun x => ¬ x ∈' x))).elim
    (fun h => (hiff.mp h).2 h)
    (fun h => h (hiff.mpr ⟨hset, h⟩))


theorem mem_upair {x a b : Class} :
    x ∈' upair a b ↔ isSet x ∧ (x = a ∨ x = b) := mem_cls _ _


theorem mem_sing {x a : Class} : x ∈' sing a ↔ isSet x ∧ x = a := mem_cls _ _


theorem self_mem_sing {a : Class} (h : isSet a) : a ∈' sing a :=
  mem_sing.mpr ⟨h, rfl⟩


theorem upair_self (a : Class) : upair a a = sing a :=
  extAx (fun z =>
    ⟨fun h => mem_sing.mpr ⟨(mem_upair.mp h).1, (mem_upair.mp h).2.elim id id⟩,
     fun h => mem_upair.mpr ⟨(mem_sing.mp h).1, Or.inl (mem_sing.mp h).2⟩⟩)


theorem sing_inj {a b : Class} (ha : isSet a) (h : sing a = sing b) : a = b :=
  (mem_sing.mp (h ▸ self_mem_sing ha)).2


/-! ### Part 1.     Inconsistency of the printed system -/


/-- The empty class has empty domain, hence is (vacuously) a class-function. -/
theorem Dom_Null_empty (x : Class) : ¬ x ∈' Dom Null := fun hx =>
  match ((mem_cls _ x).mp hx).2 with
  | ⟨_, hb⟩ => not_mem_Null _ hb


theorem Null_concentrated : concentrated Null :=
  fun x hx => absurd hx (Dom_Null_empty x)
theorem Null_flatProper : flatProper Null :=
  fun x hx => absurd hx (Dom_Null_empty x)
theorem Null_setValued : setValued Null :=
  fun x hx => absurd hx (Dom_Null_empty x)


theorem Null_isClassFunction : isClassFunction Null :=
  ⟨⟨Null_concentrated, Null_flatProper⟩, Null_setValued⟩


/-- Evaluation of the empty class-function falls into the `ELSE V` branch. -/


theorem app_Null (a : Class) : app Null a = V := by
  have hcond : ¬ ∃ s, kpair a s ∈' Null :=
    fun ⟨_, hs⟩ => not_mem_Null _ hs
  apply extAx
  intro v
  constructor
  · intro hv
    have h' := (mem_cls _ v).mp hv
    exact match h'.2 with
      | Or.inl ⟨hψ, _⟩ => absurd hψ hcond
      | Or.inr ⟨_, hvV⟩ => hvV
  · intro hv
    exact (mem_cls _ v).mpr ⟨isSet_of_mem hv, Or.inr ⟨hcond, hv⟩⟩


/-- Its image is empty: no SET can equal `V`, the default value. -/
theorem img_Null_empty (A b : Class) : ¬ b ∈' img Null A := fun hb =>
  match (mem_cls _ b).mp hb with
  | ⟨hbset, _, _, happ⟩ =>
      V_proper ((happ.symm.trans (app_Null _)) ▸ hbset)


/-- **Finding 1.** With definition 3.34 as printed, `A ≼ B` holds for ALL
    `A B` — the empty class-function is a witness. -/
theorem PrintedWleq_total (A B : Class) : PrintedWleq A B :=
  ⟨Null, Null_isClassFunction, fun b hb => absurd hb (img_Null_empty A b)⟩


/-- Hence `≺` never holds… -/
theorem PrintedWlt_never (A B : Class) : ¬ PrintedWlt A B :=
  fun h => h (PrintedWleq_total B A)


/-- **Theorem (inconsistency, route 1).**      The printed base axioms together
    with the printed size-limitation axiom 3.37 derive `False`:
    3.37 forces `V` to be empty, but ω ∈ V by 3.53. -/
theorem printed_inconsistent_route1
    (sizeLimitation : ∀ X : Class, X ∈' V ↔ PrintedWlt (card X) (card V)) :
    False :=
  PrintedWlt_never (card omega) (card V)
    ((sizeLimitation omega).mp (mem_V.mpr infinity))


/-- **Theorem (inconsistency, route 2).**      The ≼-bug propagates through
    `Tight` (3.41): no class is a universe — ∅ must both belong (via
    Hereditary, since ω ∈ U) and not belong (via Tight, since ≺ never
    holds) to it. -/
theorem no_universe (U : Class) (hU : isUniverse U) : False :=
  have hω       : omega ∈' U   := hU.1.1
  have hHer     : Hereditary U := hU.1.2.1.2
  have hTight : Tight U        := hU.1.2.2.2
  have hNull    : Null ∈' U    := hHer omega hω Null (Null_sub omega)
  PrintedWlt_never Null U ((hTight Null (Null_sub U)).mpr hNull)


/-- Hence Tarski's axiom 3.66 is itself contradictory over the base… -/
theorem printed_inconsistent_route2
    (tarski : ∀ x, isSet x → ∃ u, ((isUniverse u ∧ x ∈' u) ∧ isSet u)) :
    False :=
  match tarski Null isSet_Null with
  | ⟨u, ⟨hu, _⟩, _⟩ => no_universe u hu


/-- …and the demo's announced THEOREM 3.65 ("V is a universe") is refutable
    as printed. -/
theorem printed_3_65_refutable : ¬ isUniverse V := no_universe V


/-- **Finding (phantom partners under class quantification).**
    With Kuratowski pairs, a proper class `y` collapses the pair:
    `{x, y} = {x}` and hence `(x, y) = (x, x)`.
    If the uniqueness in "concentrated" (3.29) is read over ALL classes
    (`y : Class`), it fails at every diagonal point due to phantom partner `y := V`.
    In the core function theory, this is resolved by restricting `∃!` to sets
    (`∃! (y : Set)`), keeping standard Kuratowski pairs intact.
    Independently, Dunaev's pairs (3.46) solve pairing for arbitrary classes. -/
theorem upair_proper_collapse {x y : Class} (hy : proper y) :
    upair x y = sing x := by
  apply extAx
  intro z
  constructor
  · intro hz
    have h' := (mem_cls _ z).mp hz
    exact match h'.2 with
      | Or.inl h => mem_sing.mpr ⟨h'.1, h⟩
      | Or.inr h => absurd (h ▸ h'.1) hy
  · intro hz
    have h' := (mem_cls _ z).mp hz
    exact mem_upair.mpr ⟨h'.1, Or.inl h'.2⟩


theorem kpair_phantom {x y : Class} (hy : proper y) :
    kpair x y = kpair x x := by
  show upair (upair x x) (upair x y) = upair (upair x x) (upair x x)
  rw [upair_proper_collapse hy, upair_self]


/-- No `F` containing a diagonal pair `(x,x)` has a UNIQUE partner at `x`:
    `y := V` is a phantom second witness. -/
theorem no_unique_partner {F x : Class} (hx : isSet x)
    (hxx : kpair x x ∈' F) : ¬ ExistsU (fun y => kpair x y ∈' F) :=
  fun ⟨y₀, _, huniq⟩ =>
    have h1 : x = y₀ := huniq x hxx
    have h2 : V = y₀ := huniq V (by
      show kpair x V ∈' F
      rw [kpair_phantom V_proper]; exact hxx)
    V_proper ((h1.trans h2.symm) ▸ hx)


/-! ### Part 2.   What survives: theorems derivable from the printed base -/


/-- 3.07: ∅ ⊆ X. -/
theorem thm_3_07 (X : Class) : Null ⊆' X := Null_sub X


/-- 3.11 "Intensionality": sets with the same containers are equal. -/
theorem thm_3_11 {X Y : Class} (hX : isSet X) (_hY : isSet Y)
    (h : ∀ W, X ∈' W ↔ Y ∈' W) : X = Y :=
  have hXX : X ∈' sing X := self_mem_sing hX
  (((mem_cls _ Y).mp ((h (sing X)).mp hXX)).2).symm


/-- Members of `On` are exactly the ordinal sets. -/
theorem mem_On {B : Class} : B ∈' On ↔ isSet B ∧ OrdC B := mem_cls _ _


/-- 3.18: `On` is transitive… -/
theorem Tr_On : Tr On := fun B hB b hb =>
  have h := mem_On.mp hB
  mem_On.mpr ⟨isSet_of_mem hb,
    h.2.2 b hb,
    fun c hc => h.2.2 c (h.2.1 b hb c hc)⟩


/-- …and 3.18 in full: `Ord(On)` — the class of all ordinals is an ordinal
    class (no Burali-Forti paradox: `On` is proper, which is fine here). -/
theorem thm_3_18 : OrdC On :=
  ⟨Tr_On, fun B hB => (mem_On.mp hB).2.1⟩


theorem mem_omega {x : Class} :
    x ∈' omega ↔ isSet x ∧ ∀ Q, IndC Q → x ∈' Q := mem_cls _ _


theorem Null_mem_omega : Null ∈' omega :=
  mem_omega.mpr ⟨isSet_Null, fun _ hQ => hQ.1⟩


/-- A classical detour available in the printed system: SOME inductive class
    exists — otherwise ω = V, contradicting 3.53 + Russell. -/
theorem exists_inductive : ∃ Q, IndC Q :=
  (Classical.em (∃ Q, IndC Q)).elim id (fun hno => by
    have hωV : omega = V := extAx (fun x =>
      ⟨fun h => mem_V.mpr (isSet_of_mem h),
       fun h => mem_omega.mpr ⟨mem_V.mp h,
         fun Q hQ => absurd ⟨Q, hQ⟩ hno⟩⟩)
    exact absurd (hωV ▸ infinity) V_proper)


theorem isSet_succ_of_mem_omega {a : Class} (ha : a ∈' omega) :
    isSet (succ a) :=
  match exists_inductive with
  | ⟨Q, hQ⟩ => ⟨Q, hQ.2 a ((mem_omega.mp ha).2 Q hQ)⟩


/-- 3.55: ω is inductive — provable from the printed base alone. -/
theorem thm_3_55 : IndC omega :=
  ⟨Null_mem_omega,
   fun a ha => mem_omega.mpr
     ⟨isSet_succ_of_mem_omega ha,
      fun Q hQ => hQ.2 a ((mem_omega.mp ha).2 Q hQ)⟩⟩


/-- The induction principle of ω: ω is contained in every inductive class. -/
theorem omega_sub {Q : Class} (hQ : IndC Q) : omega ⊆' Q :=
  fun x hx => (mem_omega.mp hx).2 Q hQ


theorem mem_succ {x a : Class} :
    x ∈' succ a ↔ isSet x ∧ (x ∈' a ∨ x = a) := by
  constructor
  · intro h
    have h' := (mem_cls _ x).mp h
    exact ⟨h'.1, h'.2.elim Or.inl (fun hs => Or.inr ((mem_cls _ x).mp hs).2)⟩
  · intro ⟨hset, h⟩
    exact (mem_cls _ x).mpr ⟨hset,
      h.elim Or.inl (fun he => Or.inr ((mem_cls _ x).mpr ⟨hset, he⟩))⟩


theorem sub_succ {a : Class} : a ⊆' succ a :=
  fun x hx => mem_succ.mpr ⟨isSet_of_mem hx, Or.inl hx⟩


theorem mem_bInter {x A B : Class} :
    x ∈' bInter A B ↔ isSet x ∧ x ∈' A ∧ x ∈' B := mem_cls _ _


/-- 3.57: ω is transitive (by ω-induction on `{x ∈ ω | x ⊆ ω}`). -/
theorem thm_3_57 : Tr omega := by
  have hInd : IndC (bInter omega (cls (fun x => x ⊆' omega))) := by
    constructor
    · exact mem_bInter.mpr ⟨isSet_Null, Null_mem_omega,
        (mem_cls _ _).mpr ⟨isSet_Null, Null_sub omega⟩⟩
    · intro a ha
      have h := mem_bInter.mp ha
      have haω : a ∈' omega := h.2.1
      have hasub : a ⊆' omega := ((mem_cls _ a).mp h.2.2).2
      have hsω : succ a ∈' omega := thm_3_55.2 a haω
      exact mem_bInter.mpr ⟨isSet_of_mem hsω, hsω,
        (mem_cls _ _).mpr ⟨isSet_of_mem hsω,
          fun x hx => (mem_succ.mp hx).2.elim
             (fun h' => hasub x h') (fun h' => h'.symm ▸ haω)⟩⟩
  intro B hB
  exact ((mem_cls _ B).mp (mem_bInter.mp (omega_sub hInd B hB)).2.2).2


/-- Every member of ω is transitive (again by ω-induction). -/
theorem Tr_of_mem_omega {B : Class} (hB : B ∈' omega) : Tr B := by
  have hInd : IndC (bInter omega (cls Tr)) := by
    constructor
    · exact mem_bInter.mpr ⟨isSet_Null, Null_mem_omega,
        (mem_cls _ _).mpr ⟨isSet_Null,
          fun C hC => absurd hC (not_mem_Null C)⟩⟩
    · intro a ha
      have h := mem_bInter.mp ha
      have haω : a ∈' omega := h.2.1
      have haTr : Tr a := ((mem_cls _ a).mp h.2.2).2
      have hsω : succ a ∈' omega := thm_3_55.2 a haω
      refine mem_bInter.mpr ⟨isSet_of_mem hsω, hsω,
        (mem_cls _ _).mpr ⟨isSet_of_mem hsω, ?_⟩⟩
      intro C hC
      cases (mem_succ.mp hC).2 with
      | inl h' => exact fun x hx => sub_succ x (haTr C h' x hx)
      | inr h' => exact fun x hx => sub_succ x (h' ▸ hx)
  exact ((mem_cls _ B).mp (mem_bInter.mp (omega_sub hInd B hB)).2.2).2


/-- 3.58: ω is an ordinal class. -/
theorem thm_3_58 : OrdC omega :=
  ⟨thm_3_57, fun B hB => Tr_of_mem_omega hB⟩


/-- 3.59: ω ∈ On. -/
theorem thm_3_59 : omega ∈' On := mem_On.mpr ⟨infinity, thm_3_58⟩


/-- For a TRANSITIVE set, `succ a ⊆ 𝒫(a)`, so `succ a` is a set without any
    pairing/union axiom — this rescues Ind(On) in the printed base. -/
theorem isSet_succ_of_Tr {a : Class} (haTr : Tr a) (ha : isSet a) :
    isSet (succ a) :=
  heredity
    (fun x hx => (mem_cls _ x).mpr ⟨isSet_of_mem hx,
      (mem_succ.mp hx).2.elim (fun h => haTr x h)
        (fun h => fun z hz => h ▸ hz)⟩)
    (exponent ha)


/-- 3.56: On is inductive — provable from the printed base alone. -/
theorem thm_3_56 : IndC On := by
  constructor
  · exact mem_On.mpr ⟨isSet_Null,
      fun B hB => absurd hB (not_mem_Null B),


      fun B hB => absurd hB (not_mem_Null B)⟩
  · intro a ha
    have h := mem_On.mp ha
    have haTr : Tr a := h.2.1
    refine mem_On.mpr ⟨isSet_succ_of_Tr haTr h.1, ?_, ?_⟩
    · intro B hB
      cases (mem_succ.mp hB).2 with
      | inl h' => exact fun x hx => sub_succ x (haTr B h' x hx)
      | inr h' => exact fun x hx => sub_succ x (h' ▸ hx)
    · intro B hB
      cases (mem_succ.mp hB).2 with
      | inl h' => exact h.2.2 B h'
      | inr h' => exact h'.symm ▸ haTr


/-- 3.67: the general induction principle on a transitive class, derived
    from the printed "Regularity" 3.14 — which is exactly ∈-induction in
    powerclass form. -/
theorem thm_3_67 {K A : Class} (hK : Tr K) (h : bInter K (power A) ⊆' A) :
    K ⊆' A := by
  have step : power (cls (fun x => x ∈' K → x ∈' A)) ⊆'
      cls (fun x => x ∈' K → x ∈' A) := by
    intro y hy
    have h' := (mem_cls _ y).mp hy
    refine (mem_cls _ y).mpr ⟨h'.1, fun hyK => ?_⟩
    have hyA : y ⊆' A := fun x hx =>
      ((mem_cls _ x).mp (h'.2 x hx)).2 (hK y hyK x hx)
    exact h y (mem_bInter.mpr ⟨h'.1, hyK,
      (mem_cls _ y).mpr ⟨h'.1, hyA⟩⟩)
  intro k hk
  exact ((mem_cls _ k).mp
    (regularity step k (mem_V.mpr (isSet_of_mem hk)))).2 hk


/-- The Tight-free components of "V is a universe" (towards 3.65), provable
    from the printed base. -/
theorem V_Tr : Tr V := fun _B _hB b hb => mem_V.mpr (isSet_of_mem hb)
theorem V_Hereditary : Hereditary V :=
  fun _B hB X hX => mem_V.mpr (heredity hX (mem_V.mp hB))
theorem V_Powerful : Powerful V :=
  fun _B hB => mem_V.mpr (exponent (mem_V.mp hB))
theorem omega_mem_V : omega ∈' V := mem_V.mpr infinity


/-! ### Part 3.    Pairing & Union axioms, and independent Dunaev pairs (3.44–3.47)


    Pairing and Union are standard axioms of class theory (MK/NBG):
    (i)   `Pairful` is part of the universe definition 3.64, and 3.65
          announces `Pairful V` — i.e. the pairing axiom itself;


    (ii)  `IndC V` (3.54) requires pairing to form general successor sets;
    (iii) the independent Dunaev lists/pairs 3.45 (marked TBI in the demo)
          also utilize pairing so that the tags `{{{a}},n}` are sets.
    Both hold in every intended model. -/


axiom pairing : ∀ {a b : Class}, isSet a → isSet b → isSet (upair a b)
axiom unionAx : ∀ {x : Class}, isSet x → isSet (sUnion x)


theorem isSet_sing {a : Class} (h : isSet a) : isSet (sing a) :=
  upair_self a ▸ pairing h h


theorem bUnion_eq_sUnion_upair {A B : Class} (hA : isSet A) (hB : isSet B) :
    bUnion A B = sUnion (upair A B) :=
  extAx (fun x =>
    ⟨fun h =>
      have h' := (mem_cls _ x).mp h
      (mem_cls _ x).mpr ⟨h'.1, h'.2.elim
           (fun hx => ⟨A, mem_upair.mpr ⟨hA, Or.inl rfl⟩, hx⟩)
           (fun hx => ⟨B, mem_upair.mpr ⟨hB, Or.inr rfl⟩, hx⟩)⟩,
     fun h =>
      have h' := (mem_cls _ x).mp h
      (mem_cls _ x).mpr ⟨h'.1,
           match h'.2 with
           | ⟨_, hy, hxy⟩ => (mem_upair.mp hy).2.elim
              (fun e => Or.inl (e ▸ hxy)) (fun e => Or.inr (e ▸ hxy))⟩⟩)


theorem isSet_succ {a : Class} (ha : isSet a) : isSet (succ a) := by
  show isSet (bUnion a (sing a))
  rw [bUnion_eq_sUnion_upair ha (isSet_sing ha)]
  exact unionAx (pairing ha (isSet_sing ha))


/-- 3.54: V is inductive — NOW provable.      (This one genuinely needs the
    added axioms: for a non-transitive set `a`, the 𝒫-trick of
    `isSet_succ_of_Tr` does not apply.) -/
theorem thm_3_54 : IndC V :=
  ⟨mem_V.mpr isSet_Null, fun a ha => mem_V.mpr (isSet_succ (mem_V.mp ha))⟩


/-- The `Pairful` component of 3.65 — literally the pairing axiom. -/
theorem V_Pairful : Pairful V :=
  fun _A _B hA hB => mem_V.mpr (pairing (mem_V.mp hA) (mem_V.mp hB))


/-! #### The Dunaev tagged lists (3.44–3.47) — the demo's TBI, implemented.


    3.44 numerals;    3.45   mark(A,n) = {{0,n}} ∪ { {{{a}},n} | a ∈ A };
    3.46   (A,B) := [A,B] = mark(A,1) ∪ mark(B,2);
    3.47   pr1(L) = { a | {{{a}},1} ∈ L },    pr2(L) = { b | {{{b}},2} ∈ L }.


    The point of the construction: it is faithful on PROPER classes, where
    Kuratowski pairs collapse (see `kpair_phantom`).        We verify this. -/


def zero : Class := Null
def one    : Class := sing Null
def two    : Class := upair Null one


theorem isSet_one : isSet one := isSet_sing isSet_Null
theorem isSet_two : isSet two := pairing isSet_Null isSet_one


theorem Null_ne_one : Null ≠ one := fun h =>
  have h1 : Null ∈' one := self_mem_sing isSet_Null
  not_mem_Null Null (h.symm ▸ h1)


theorem Null_ne_two : Null ≠ two := fun h =>
  have h1 : one ∈' two := mem_upair.mpr ⟨isSet_one, Or.inr rfl⟩
  not_mem_Null one (h.symm ▸ h1)


theorem one_ne_two : one ≠ two := fun h =>
  have h2 : one ∈' two := mem_upair.mpr ⟨isSet_one, Or.inr rfl⟩
  have h3 : one ∈' one := h.symm ▸ h2
  Null_ne_one ((mem_sing.mp h3).2.symm)


/-- The tag `{{{a}}, n}`. -/
def tag (a n : Class) : Class := upair (sing (sing a)) n
/-- 3.45. -/
def markC (A n : Class) : Class :=
  cls (fun x => x = upair Null n ∨ ∃ a, a ∈' A ∧ x = tag a n)
/-- 3.46: the Dunaev ordered pair. -/
def dpair (A B : Class) : Class := bUnion (markC A one) (markC B two)
/-- 3.47. -/
def dpr1 (L : Class) : Class := cls (fun a => tag a one ∈' L)
def dpr2 (L : Class) : Class := cls (fun a => tag a two ∈' L)


theorem isSet_tag {a n : Class} (ha : isSet a) (hn : isSet n) :
    isSet (tag a n) := pairing (isSet_sing (isSet_sing ha)) hn


theorem mem_markC {x A n : Class} :
    x ∈' markC A n ↔ isSet x ∧
      (x = upair Null n ∨ ∃ a, a ∈' A ∧ x = tag a n) := mem_cls _ _


/-! Disambiguation kit: tags, markers and numerals never collide. -/



theorem sing_sing_ne_one {a : Class} (ha : isSet a) : sing (sing a) ≠ one :=
  fun h =>
    have h1 : sing a ∈' sing (sing a) := self_mem_sing (isSet_sing ha)
    have h2 : sing a ∈' one := h ▸ h1
    have h3 : sing a = Null := (mem_sing.mp h2).2
    not_mem_Null a (h3 ▸ self_mem_sing ha)


theorem sing_sing_ne_two {a : Class} (ha : isSet a) : sing (sing a) ≠ two :=
  fun h =>
    have h1 : Null ∈' two := mem_upair.mpr ⟨isSet_Null, Or.inl rfl⟩
    have h2 : Null = sing a := (mem_sing.mp (h.symm ▸ h1)).2
    not_mem_Null a (h2.symm ▸ self_mem_sing ha)


/-- A tag `{{{a}},n}` with `n ≠ ∅` is never a marker `{0,m}`. -/
theorem tag_ne_marker {a n m : Class} (ha : isSet a) (hn : n ≠ Null) :
    tag a n ≠ upair Null m :=
  fun h =>
    have h1 : Null ∈' upair Null m := mem_upair.mpr ⟨isSet_Null, Or.inl rfl⟩
    have h2 : Null ∈' tag a n := h.symm ▸ h1
    (mem_upair.mp h2).2.elim
      (fun e =>
        have h3 : sing a ∈' Null := e.symm ▸ self_mem_sing (isSet_sing ha)
        not_mem_Null _ h3)
      (fun e => hn e.symm)


theorem tag_one_ne_tag_two {a c : Class} (ha : isSet a) (hc : isSet c) :
    tag a one ≠ tag c two :=
  fun h =>
    have h1 : one ∈' tag a one := mem_upair.mpr ⟨isSet_one, Or.inr rfl⟩
    have h2 : one ∈' tag c two := h ▸ h1
    (mem_upair.mp h2).2.elim
      (fun e =>
        have h0 : Null ∈' one := self_mem_sing isSet_Null
        have h3 : Null ∈' sing (sing c) := e ▸ h0
        have h4 : Null = sing c := (mem_sing.mp h3).2
        not_mem_Null c (h4.symm ▸ self_mem_sing hc))
      one_ne_two


theorem tag_inj {a c n : Class} (ha : isSet a) (hc : isSet c)
    (hn : sing (sing a) ≠ n) (h : tag a n = tag c n) : a = c :=
  have h1 : sing (sing a) ∈' tag a n :=
    mem_upair.mpr ⟨isSet_sing (isSet_sing ha), Or.inl rfl⟩
  have h2 : sing (sing a) ∈' tag c n := h ▸ h1
  (mem_upair.mp h2).2.elim
    (fun e => sing_inj ha (sing_inj (isSet_sing ha) e))
    (fun e => absurd e hn)


theorem mem_dpair {x A B : Class} :
    x ∈' dpair A B ↔ isSet x ∧ (x ∈' markC A one ∨ x ∈' markC B two) :=
  mem_cls _ _


theorem tag1_mem_dpair {a A B : Class} (ha : a ∈' A) :
    tag a one ∈' dpair A B :=
  have ht : isSet (tag a one) := isSet_tag (isSet_of_mem ha) isSet_one
  mem_dpair.mpr ⟨ht, Or.inl (mem_markC.mpr ⟨ht, Or.inr ⟨a, ha, rfl⟩⟩)⟩


theorem tag2_mem_dpair {b A B : Class} (hb : b ∈' B) :
    tag b two ∈' dpair A B :=
  have ht : isSet (tag b two) := isSet_tag (isSet_of_mem hb) isSet_two
  mem_dpair.mpr ⟨ht, Or.inr (mem_markC.mpr ⟨ht, Or.inr ⟨b, hb, rfl⟩⟩)⟩


theorem mem_A_of_tag1 {a A B : Class} (ha : isSet a)
    (h : tag a one ∈' dpair A B) : a ∈' A :=
  (mem_dpair.mp h).2.elim
    (fun h1 => (mem_markC.mp h1).2.elim
      (fun e => absurd e (tag_ne_marker ha (Ne.symm Null_ne_one)))
      (fun ⟨a', ha', he⟩ =>
        (tag_inj ha (isSet_of_mem ha') (sing_sing_ne_one ha) he).symm ▸ ha'))
    (fun h2 => (mem_markC.mp h2).2.elim
      (fun e => absurd e (tag_ne_marker ha (Ne.symm Null_ne_one)))
      (fun ⟨b, hb, he⟩ =>
        absurd he (tag_one_ne_tag_two ha (isSet_of_mem hb))))


theorem mem_B_of_tag2 {b A B : Class} (hb : isSet b)
    (h : tag b two ∈' dpair A B) : b ∈' B :=
  (mem_dpair.mp h).2.elim
    (fun h1 => (mem_markC.mp h1).2.elim
      (fun e => absurd e (tag_ne_marker hb (Ne.symm Null_ne_two)))
      (fun ⟨a, ha, he⟩ =>
        absurd he.symm (tag_one_ne_tag_two (isSet_of_mem ha) hb)))
    (fun h2 => (mem_markC.mp h2).2.elim
      (fun e => absurd e (tag_ne_marker hb (Ne.symm Null_ne_two)))
      (fun ⟨b', hb', he⟩ =>
        (tag_inj hb (isSet_of_mem hb') (sing_sing_ne_two hb) he).symm ▸ hb'))


/-- **The TBI items, verified.**   First projection recovers the first
    component of a Dunaev pair — for ARBITRARY classes… -/
theorem dpr1_dpair (A B : Class) : dpr1 (dpair A B) = A :=
  extAx (fun x =>
    ⟨fun h =>
      have h' := (mem_cls _ x).mp h
      mem_A_of_tag1 h'.1 h'.2,

      fun h => (mem_cls _ x).mpr ⟨isSet_of_mem h, tag1_mem_dpair h⟩⟩)


/-- …and the second likewise. -/
theorem dpr2_dpair (A B : Class) : dpr2 (dpair A B) = B :=
  extAx (fun x =>
      ⟨fun h =>
       have h' := (mem_cls _ x).mp h
       mem_B_of_tag2 h'.1 h'.2,
      fun h => (mem_cls _ x).mpr ⟨isSet_of_mem h, tag2_mem_dpair h⟩⟩)


/-- Hence the Dunaev pair is injective on ARBITRARY classes (proper included)
      — exactly what Kuratowski pairs cannot deliver (`kpair_phantom`). -/
theorem dpair_inj {A B C D : Class} (h : dpair A B = dpair C D) :
      A = C ∧ B = D :=
  ⟨by rw [← dpr1_dpair A B, h, dpr1_dpair],
   by rw [← dpr2_dpair A B, h, dpr2_dpair]⟩


/-- Showcase: it works where Kuratowski provably fails — on proper classes. -/
theorem dpair_proper_showcase :
      dpr1 (dpair V On) = V ∧ dpr2 (dpair V On) = On :=
  ⟨dpr1_dpair V On, dpr2_dpair V On⟩


/-- The `{0,n}` marker device works: a mark is never empty, so list length
      is always recoverable — in particular `[A] ≠ []` even for `A = ∅`. -/
theorem mark_ne_Null (A n : Class) (hn : isSet n) : markC A n ≠ Null :=
  fun h =>
      have hm : upair Null n ∈' markC A n :=
       mem_markC.mpr ⟨pairing isSet_Null hn, Or.inl rfl⟩
      not_mem_Null _ (h ▸ hm)


theorem dsingle_ne_dnil (A : Class) : markC A one ≠ Null :=
  mark_ne_Null A one isSet_one


end
end Obelisk


/-! ### Audit: exact axiom dependencies of the main results -/
#print axioms Obelisk.printed_inconsistent_route1
#print axioms Obelisk.printed_inconsistent_route2
#print axioms Obelisk.printed_3_65_refutable
#print axioms Obelisk.no_unique_partner
#print axioms Obelisk.thm_3_18
#print axioms Obelisk.thm_3_55
#print axioms Obelisk.thm_3_56
#print axioms Obelisk.thm_3_58


    #print axioms Obelisk.thm_3_67
    #print axioms Obelisk.dpair_inj
    #print axioms Obelisk.dsingle_ne_dnil




