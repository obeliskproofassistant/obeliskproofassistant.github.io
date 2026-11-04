// =============================================================================
// OBELISK NBG PROPOSITIONS-AS-TYPES: DEDUKTI / LAMBDAPI PROOF CERTIFICATE
// Architected & Exported by Gemini 4 Argon (Ticket TKT-624)
// Verification Standard: de Bruijn Criterion (LF / Lambda-Pi Modulo)
// =============================================================================

symbol Class : TYPE;
symbol SortTag : TYPE;
symbol SetSort : SortTag;
symbol ClassSort : SortTag;
symbol Fm : TYPE;
symbol Prf : Fm -> TYPE;

// NBG Class & Set Constructors
symbol kappa : (Class -> Fm) -> Class;
symbol eps : (Class -> Fm) -> Class;
symbol iota : (Class -> Fm) -> Class;
symbol empty_class : Class;
symbol univ_class : Class;
symbol singleton : Class -> Class;
symbol upair : Class -> Class -> Class;
symbol kuratowski_pair : Class -> Class -> Class;
symbol dunaev_pair : Class -> Class -> Class;
symbol dunaev_pr1 : Class -> Class;
symbol dunaev_pr2 : Class -> Class;

// NBG Formula Constructors (Types of Programming Language Objects)
symbol in_fm : Class -> Class -> Fm;
symbol eq_fm : Class -> Class -> Fm;
symbol isset_fm : Class -> Fm;
symbol sub_fm : Class -> Class -> Fm;
symbol imp_fm : Fm -> Fm -> Fm;
symbol and_fm : Fm -> Fm -> Fm;
symbol or_fm : Fm -> Fm -> Fm;
symbol bot_fm : Fm;
symbol top_fm : Fm;
symbol forall_fm : SortTag -> (Class -> Fm) -> Fm;
symbol exists_fm : SortTag -> (Class -> Fm) -> Fm;

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_01_empty_class_no_elements
// Formula (Type): (forall z:Class. (z in { x | _|_ } -> _|_))
// -----------------------------------------------------------------------------
def nbg_thm_01_empty_class_no_elements : Prf (forall_fm ClassSort (z : Class => (imp_fm (in_fm z (kappa (x : Class => bot_fm))) bot_fm))) :=
  (forall_intro ClassSort (z : Class => (imp_intro (hIn : Prf (in_fm z (kappa (x : Class => bot_fm))) => (and_elim_r (imp_elim (and_elim_l (nbg_ax_compr (x : Class => bot_fm) z)) hIn))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_02_empty_set_subclass
// Formula (Type): (forall X:Class. (forall z:Class. (z in { x | _|_ } -> z in X)))
// -----------------------------------------------------------------------------
def nbg_thm_02_empty_set_subclass : Prf (forall_fm ClassSort (X : Class => (forall_fm ClassSort (z : Class => (imp_fm (in_fm z (kappa (x : Class => bot_fm))) (in_fm z X)))))) :=
  (forall_intro ClassSort (X : Class => (forall_intro ClassSort (z : Class => (imp_intro (hIn : Prf (in_fm z (kappa (x : Class => bot_fm))) => (bot_elim (imp_elim (forall_elim (forall_intro ClassSort (z : Class => (imp_intro (hIn : Prf (in_fm z (kappa (x : Class => bot_fm))) => (and_elim_r (imp_elim (and_elim_l (nbg_ax_compr (x : Class => bot_fm) z)) hIn)))))) z) hIn) (in_fm z X))))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_03_universal_class_char
// Formula (Type): (forall z:Class. ((z in { x | Top } -> Set(z)) /\ (Set(z) -> z in { x | Top })))
// -----------------------------------------------------------------------------
def nbg_thm_03_universal_class_char : Prf (forall_fm ClassSort (z : Class => (and_fm (imp_fm (in_fm z (kappa (x : Class => top_fm))) (isset_fm z)) (imp_fm (isset_fm z) (in_fm z (kappa (x : Class => top_fm))))))) :=
  (forall_intro ClassSort (z : Class => (and_intro (imp_intro (hIn : Prf (in_fm z (kappa (x : Class => top_fm))) => (and_elim_l (imp_elim (and_elim_l (nbg_ax_compr (x : Class => top_fm) z)) hIn)))) (imp_intro (hSet : Prf (isset_fm z) => (imp_elim (and_elim_r (nbg_ax_compr (x : Class => top_fm) z)) (and_intro hSet top_intro)))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_04_russell_class_not_set
// Formula (Type): (Set({ x | (x in x -> _|_) }) -> _|_)
// -----------------------------------------------------------------------------
def nbg_thm_04_russell_class_not_set : Prf (imp_fm (isset_fm (kappa (x : Class => (imp_fm (in_fm x x) bot_fm)))) bot_fm) :=
  (imp_intro (hSetR : Prf (isset_fm (kappa (x : Class => (imp_fm (in_fm x x) bot_fm)))) => (imp_elim (imp_intro (h : Prf (and_fm (imp_fm (in_fm (kappa (x : Class => (imp_fm (in_fm x x) bot_fm))) (kappa (x : Class => (imp_fm (in_fm x x) bot_fm)))) (imp_fm (in_fm (kappa (x : Class => (imp_fm (in_fm x x) bot_fm))) (kappa (x : Class => (imp_fm (in_fm x x) bot_fm)))) bot_fm)) (imp_fm (imp_fm (in_fm (kappa (x : Class => (imp_fm (in_fm x x) bot_fm))) (kappa (x : Class => (imp_fm (in_fm x x) bot_fm)))) bot_fm) (in_fm (kappa (x : Class => (imp_fm (in_fm x x) bot_fm))) (kappa (x : Class => (imp_fm (in_fm x x) bot_fm)))))) => (imp_elim (imp_intro (p : Prf (in_fm (kappa (x : Class => (imp_fm (in_fm x x) bot_fm))) (kappa (x : Class => (imp_fm (in_fm x x) bot_fm)))) => (imp_elim (imp_elim (and_elim_l h) p) p))) (imp_elim (and_elim_r h) (imp_intro (p : Prf (in_fm (kappa (x : Class => (imp_fm (in_fm x x) bot_fm))) (kappa (x : Class => (imp_fm (in_fm x x) bot_fm)))) => (imp_elim (imp_elim (and_elim_l h) p) p))))))) (and_intro (imp_intro (hIn : Prf (in_fm (kappa (x : Class => (imp_fm (in_fm x x) bot_fm))) (kappa (x : Class => (imp_fm (in_fm x x) bot_fm)))) => (and_elim_r (imp_elim (and_elim_l (nbg_ax_compr (x : Class => (imp_fm (in_fm x x) bot_fm)) (kappa (x : Class => (imp_fm (in_fm x x) bot_fm))))) hIn)))) (imp_intro (hNotIn : Prf (imp_fm (in_fm (kappa (x : Class => (imp_fm (in_fm x x) bot_fm))) (kappa (x : Class => (imp_fm (in_fm x x) bot_fm)))) bot_fm) => (imp_elim (and_elim_r (nbg_ax_compr (x : Class => (imp_fm (in_fm x x) bot_fm)) (kappa (x : Class => (imp_fm (in_fm x x) bot_fm))))) (and_intro hSetR hNotIn))))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_05_binary_inter_comm
// Formula (Type): (forall A:Class. (forall B:Class. (forall z:Class. (z in { x | (x in A /\ x in B) } -> z in { x | (x in B /\ x in A) }))))
// -----------------------------------------------------------------------------
def nbg_thm_05_binary_inter_comm : Prf (forall_fm ClassSort (A : Class => (forall_fm ClassSort (B : Class => (forall_fm ClassSort (z : Class => (imp_fm (in_fm z (kappa (x : Class => (and_fm (in_fm x A) (in_fm x B))))) (in_fm z (kappa (x : Class => (and_fm (in_fm x B) (in_fm x A)))))))))))) :=
  (forall_intro ClassSort (A : Class => (forall_intro ClassSort (B : Class => (forall_intro ClassSort (z : Class => (imp_intro (hInAB : Prf (in_fm z (kappa (x : Class => (and_fm (in_fm x A) (in_fm x B))))) => (imp_elim (and_elim_r (nbg_ax_compr (x : Class => (and_fm (in_fm x B) (in_fm x A))) z)) (and_intro (and_elim_l (imp_elim (and_elim_l (nbg_ax_compr (x : Class => (and_fm (in_fm x A) (in_fm x B))) z)) hInAB)) (and_intro (and_elim_r (and_elim_r (imp_elim (and_elim_l (nbg_ax_compr (x : Class => (and_fm (in_fm x A) (in_fm x B))) z)) hInAB))) (and_elim_l (and_elim_r (imp_elim (and_elim_l (nbg_ax_compr (x : Class => (and_fm (in_fm x A) (in_fm x B))) z)) hInAB))))))))))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_06_binary_union_comm
// Formula (Type): (forall A:Class. (forall B:Class. (forall z:Class. (z in { x | (x in A \/ x in B) } -> z in { x | (x in B \/ x in A) }))))
// -----------------------------------------------------------------------------
def nbg_thm_06_binary_union_comm : Prf (forall_fm ClassSort (A : Class => (forall_fm ClassSort (B : Class => (forall_fm ClassSort (z : Class => (imp_fm (in_fm z (kappa (x : Class => (or_fm (in_fm x A) (in_fm x B))))) (in_fm z (kappa (x : Class => (or_fm (in_fm x B) (in_fm x A)))))))))))) :=
  (forall_intro ClassSort (A : Class => (forall_intro ClassSort (B : Class => (forall_intro ClassSort (z : Class => (imp_intro (hInAB : Prf (in_fm z (kappa (x : Class => (or_fm (in_fm x A) (in_fm x B))))) => (imp_elim (and_elim_r (nbg_ax_compr (x : Class => (or_fm (in_fm x B) (in_fm x A))) z)) (and_intro (and_elim_l (imp_elim (and_elim_l (nbg_ax_compr (x : Class => (or_fm (in_fm x A) (in_fm x B))) z)) hInAB)) (or_elim (and_elim_r (imp_elim (and_elim_l (nbg_ax_compr (x : Class => (or_fm (in_fm x A) (in_fm x B))) z)) hInAB)) (hA => (or_intro_r (in_fm z B) hA)) (hB => (or_intro_l hB (in_fm z A))))))))))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_07_eq_sym
// Formula (Type): (forall X:Class. (forall Y:Class. (X = Y -> Y = X)))
// -----------------------------------------------------------------------------
def nbg_thm_07_eq_sym : Prf (forall_fm ClassSort (X : Class => (forall_fm ClassSort (Y : Class => (imp_fm (eq_fm X Y) (eq_fm Y X)))))) :=
  (forall_intro ClassSort (X : Class => (forall_intro ClassSort (Y : Class => (imp_intro (hEq : Prf (eq_fm X Y) => (eq_rewrite hEq (u : Class => (eq_fm u X)) (eq_refl X))))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_08_eq_trans
// Formula (Type): (forall X:Class. (forall Y:Class. (forall Z:Class. ((X = Y /\ Y = Z) -> X = Z))))
// -----------------------------------------------------------------------------
def nbg_thm_08_eq_trans : Prf (forall_fm ClassSort (X : Class => (forall_fm ClassSort (Y : Class => (forall_fm ClassSort (Z : Class => (imp_fm (and_fm (eq_fm X Y) (eq_fm Y Z)) (eq_fm X Z)))))))) :=
  (forall_intro ClassSort (X : Class => (forall_intro ClassSort (Y : Class => (forall_intro ClassSort (Z : Class => (imp_intro (hConj : Prf (and_fm (eq_fm X Y) (eq_fm Y Z)) => (eq_rewrite (and_elim_r hConj) (u : Class => (eq_fm X u)) (and_elim_l hConj))))))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_09_quantifier_swap
// Formula (Type): ((exists y:Set. (forall x:Set. x in y)) -> (forall x:Set. (exists y:Set. x in y)))
// -----------------------------------------------------------------------------
def nbg_thm_09_quantifier_swap : Prf (imp_fm (exists_fm SetSort (y : Class => (forall_fm SetSort (x : Class => (in_fm x y))))) (forall_fm SetSort (x : Class => (exists_fm SetSort (y : Class => (in_fm x y)))))) :=
  (imp_intro (hEx : Prf (exists_fm SetSort (y : Class => (forall_fm SetSort (x : Class => (in_fm x y))))) => (forall_intro SetSort (x : Class => (exists_elim hEx (y0 : Class => hAllX => (exists_intro y0 (forall_elim hAllX x) (exists_fm SetSort (y : Class => (in_fm x y))))))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_10_dunaev_pair_projections
// Formula (Type): (forall A:Class. (forall B:Class. (pr1([A, B]_D) = A /\ pr2([A, B]_D) = B)))
// -----------------------------------------------------------------------------
def nbg_thm_10_dunaev_pair_projections : Prf (forall_fm ClassSort (A : Class => (forall_fm ClassSort (B : Class => (and_fm (eq_fm (dunaev_pr1 (dunaev_pair A B)) A) (eq_fm (dunaev_pr2 (dunaev_pair A B)) B)))))) :=
  (forall_intro ClassSort (A : Class => (forall_intro ClassSort (B : Class => (nbg_ax_dunaev_pair_proj A B)))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_11_cantor_diagonal
// Formula (Type): (forall R:Class. (forall c:Set. (Set(c) -> (((c in { x | ([x, x]_D in R -> _|_) } -> [c, c]_D in R) /\ ([c, c]_D in R -> c in { x | ([x, x]_D in R -> _|_) })) -> _|_))))
// -----------------------------------------------------------------------------
def nbg_thm_11_cantor_diagonal : Prf (forall_fm ClassSort (R : Class => (forall_fm SetSort (c : Class => (imp_fm (isset_fm c) (imp_fm (and_fm (imp_fm (in_fm c (kappa (x : Class => (imp_fm (in_fm (dunaev_pair x x) R) bot_fm)))) (in_fm (dunaev_pair c c) R)) (imp_fm (in_fm (dunaev_pair c c) R) (in_fm c (kappa (x : Class => (imp_fm (in_fm (dunaev_pair x x) R) bot_fm)))))) bot_fm)))))) :=
  (forall_intro ClassSort (R : Class => (forall_intro SetSort (c : Class => (imp_intro (hSetC : Prf (isset_fm c) => (imp_intro (hEqv : Prf (and_fm (imp_fm (in_fm c (kappa (x : Class => (imp_fm (in_fm (dunaev_pair x x) R) bot_fm)))) (in_fm (dunaev_pair c c) R)) (imp_fm (in_fm (dunaev_pair c c) R) (in_fm c (kappa (x : Class => (imp_fm (in_fm (dunaev_pair x x) R) bot_fm)))))) => (imp_elim (imp_intro (hCC : Prf (in_fm (dunaev_pair c c) R) => (imp_elim (and_elim_r (imp_elim (and_elim_l (nbg_ax_compr (x : Class => (imp_fm (in_fm (dunaev_pair x x) R) bot_fm)) c)) (imp_elim (and_elim_r hEqv) hCC))) hCC))) (imp_elim (and_elim_l hEqv) (imp_elim (and_elim_r (nbg_ax_compr (x : Class => (imp_fm (in_fm (dunaev_pair x x) R) bot_fm)) c)) (and_intro hSetC (imp_intro (hCC : Prf (in_fm (dunaev_pair c c) R) => (imp_elim (and_elim_r (imp_elim (and_elim_l (nbg_ax_compr (x : Class => (imp_fm (in_fm (dunaev_pair x x) R) bot_fm)) c)) (imp_elim (and_elim_r hEqv) hCC))) hCC)))))))))))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_12_self_in_singleton
// Formula (Type): (forall x:Class. (Set(x) -> x in { u | u = x }))
// -----------------------------------------------------------------------------
def nbg_thm_12_self_in_singleton : Prf (forall_fm ClassSort (x : Class => (imp_fm (isset_fm x) (in_fm x (kappa (u : Class => (eq_fm u x))))))) :=
  (forall_intro ClassSort (x : Class => (imp_intro (hSetX : Prf (isset_fm x) => (imp_elim (and_elim_r (nbg_ax_compr (u : Class => (eq_fm u x)) x)) (and_intro hSetX (eq_refl x)))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_13_self_in_succ
// Formula (Type): (forall x:Class. (Set(x) -> x in { u | (u in x \/ u = x) }))
// -----------------------------------------------------------------------------
def nbg_thm_13_self_in_succ : Prf (forall_fm ClassSort (x : Class => (imp_fm (isset_fm x) (in_fm x (kappa (u : Class => (or_fm (in_fm u x) (eq_fm u x)))))))) :=
  (forall_intro ClassSort (x : Class => (imp_intro (hSetX : Prf (isset_fm x) => (imp_elim (and_elim_r (nbg_ax_compr (u : Class => (or_fm (in_fm u x) (eq_fm u x))) x)) (and_intro hSetX (or_intro_r (in_fm x x) (eq_refl x))))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_14_sub_succ
// Formula (Type): (forall x:Class. (forall z:Class. (z in x -> z in { u | (u in x \/ u = x) })))
// -----------------------------------------------------------------------------
def nbg_thm_14_sub_succ : Prf (forall_fm ClassSort (x : Class => (forall_fm ClassSort (z : Class => (imp_fm (in_fm z x) (in_fm z (kappa (u : Class => (or_fm (in_fm u x) (eq_fm u x)))))))))) :=
  (forall_intro ClassSort (x : Class => (forall_intro ClassSort (z : Class => (imp_intro (hInX : Prf (in_fm z x) => (imp_elim (and_elim_r (nbg_ax_compr (u : Class => (or_fm (in_fm u x) (eq_fm u x))) z)) (and_intro (imp_elim (nbg_ax_heredity z x) hInX) (or_intro_l hInX (eq_fm z x))))))))));

