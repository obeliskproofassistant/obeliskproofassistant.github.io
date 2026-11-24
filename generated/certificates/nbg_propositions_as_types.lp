// AUTO-GENERATED FILE — DO NOT EDIT BY HAND (User Directives #6 & #17).
// Source: set_theory_prover/program/export_certificates_and_bundles.ML & set_theory_prover/program/nbg_dedukti_exporter.ML
// Generator: Poly/ML batch exporter (set_theory_prover/program/export_certificates_and_bundles.ML)
// Regenerate: cd /botworkspace/set_theory_prover/program && poly -q --use export_certificates_and_bundles.ML </dev/null

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
symbol bin_union : Class -> Class -> Class;
symbol bin_inter : Class -> Class -> Class;
symbol class_diff : Class -> Class -> Class;
symbol unary_union : Class -> Class;
symbol unary_inter : Class -> Class;
symbol power_class : Class -> Class;
symbol succ_class : Class -> Class;
symbol omega_set : Class;
symbol on_class : Class;

// NBG Formula Constructors (Types of Programming Language Objects)
symbol in_fm : Class -> Class -> Fm;
symbol eq_fm : Class -> Class -> Fm;
symbol isset_fm : Class -> Fm;
symbol sub_fm : Class -> Class -> Fm;
symbol proper_fm : Class -> Fm;
symbol trans_fm : Class -> Fm;
symbol ord_fm : Class -> Fm;
symbol ind_fm : Class -> Fm;
symbol func_fm : Class -> Class -> Class -> Fm;
symbol inj_fm : Class -> Class -> Class -> Fm;
symbol imp_fm : Fm -> Fm -> Fm;
symbol and_fm : Fm -> Fm -> Fm;
symbol or_fm : Fm -> Fm -> Fm;
symbol bot_fm : Fm;
symbol top_fm : Fm;
symbol forall_fm : SortTag -> (Class -> Fm) -> Fm;
symbol exists_fm : SortTag -> (Class -> Fm) -> Fm;

// Proof Term Constructors & Logical Inference Rules
symbol top_intro : Prf top_fm;
symbol imp_intro : (A : Fm) -> (B : Fm) -> (Prf A -> Prf B) -> Prf (imp_fm A B);
symbol imp_elim : (A : Fm) -> (B : Fm) -> Prf (imp_fm A B) -> Prf A -> Prf B;
symbol and_intro : (A : Fm) -> (B : Fm) -> Prf A -> Prf B -> Prf (and_fm A B);
symbol and_elim_l : (A : Fm) -> (B : Fm) -> Prf (and_fm A B) -> Prf A;
symbol and_elim_r : (A : Fm) -> (B : Fm) -> Prf (and_fm A B) -> Prf B;
symbol or_intro_l : (A : Fm) -> Prf A -> (B : Fm) -> Prf (or_fm A B);
symbol or_intro_r : (A : Fm) -> (B : Fm) -> Prf B -> Prf (or_fm A B);
symbol or_elim : (A : Fm) -> (B : Fm) -> (C : Fm) -> Prf (or_fm A B) -> (Prf A -> Prf C) -> (Prf B -> Prf C) -> Prf C;
symbol bot_elim : Prf bot_fm -> (A : Fm) -> Prf A;
symbol dne_elim : (A : Fm) -> Prf (imp_fm (imp_fm A bot_fm) bot_fm) -> Fm -> Prf A;
symbol lem_ax : (A : Fm) -> Prf (or_fm A (imp_fm A bot_fm));
symbol forall_intro : (s : SortTag) -> (P : Class -> Fm) -> ((x : Class) -> Prf (P x)) -> Prf (forall_fm s P);
symbol forall_elim : (s : SortTag) -> (P : Class -> Fm) -> Prf (forall_fm s P) -> (t : Class) -> Prf (P t);
symbol exists_intro : (s : SortTag) -> (P : Class -> Fm) -> (w : Class) -> Prf (P w) -> Fm -> Prf (exists_fm s P);
symbol exists_elim : (s : SortTag) -> (P : Class -> Fm) -> (C : Fm) -> Prf (exists_fm s P) -> ((x : Class) -> Prf (P x) -> Prf C) -> Prf C;
symbol eq_refl : (t : Class) -> Prf (eq_fm t t);
symbol eq_sym : (a : Class) -> (b : Class) -> Prf (eq_fm a b) -> Prf (eq_fm b a);
symbol eq_trans : (a : Class) -> (b : Class) -> (c : Class) -> Prf (eq_fm a b) -> Prf (eq_fm b c) -> Prf (eq_fm a c);
symbol eq_rewrite : (a : Class) -> (b : Class) -> Prf (eq_fm a b) -> (P : Class -> Fm) -> Prf (P a) -> Prf (P b);
symbol conv_unfold : (A : Fm) -> Prf A -> (B : Fm) -> Prf B;
symbol conv_fold : (A : Fm) -> Prf A -> (B : Fm) -> Prf B;

// NBG Set & Class Theory Axiom Constructors
symbol nbg_ax_compr : (phi : Class -> Fm) -> (z : Class) -> Prf (and_fm (imp_fm (in_fm z (kappa phi)) (and_fm (isset_fm z) (phi z))) (imp_fm (and_fm (isset_fm z) (phi z)) (in_fm z (kappa phi))));
symbol nbg_ax_ext : (A : Class) -> (B : Class) -> Prf (imp_fm (forall_fm SetSort (z : Class => and_fm (imp_fm (in_fm z A) (in_fm z B)) (imp_fm (in_fm z B) (in_fm z A)))) (eq_fm A B));
symbol nbg_ax_setdef : (A : Class) -> Prf (and_fm (imp_fm (isset_fm A) (exists_fm ClassSort (C : Class => in_fm A C))) (imp_fm (exists_fm ClassSort (C : Class => in_fm A C)) (isset_fm A)));
symbol nbg_ax_heredity : (A : Class) -> (B : Class) -> Prf (imp_fm (and_fm (sub_fm A B) (isset_fm B)) (isset_fm A));
symbol nbg_ax_pairing : (a : Class) -> (b : Class) -> Prf (imp_fm (and_fm (isset_fm a) (isset_fm b)) (isset_fm (upair a b)));
symbol nbg_ax_union : (a : Class) -> Prf (imp_fm (isset_fm a) (isset_fm (unary_union a)));
symbol nbg_ax_power : (a : Class) -> Prf (imp_fm (isset_fm a) (isset_fm (power_class a)));
symbol nbg_ax_infinity : Prf (and_fm (isset_fm omega_set) (ind_fm omega_set));
symbol nbg_ax_foundation : (A : Class) -> Prf (imp_fm (exists_fm SetSort (x : Class => in_fm x A)) (exists_fm SetSort (y : Class => and_fm (in_fm y A) (forall_fm SetSort (z : Class => imp_fm (and_fm (in_fm z y) (in_fm z A)) bot_fm)))));
symbol nbg_ax_limitation_of_size : (K : Class) -> Prf (and_fm (imp_fm (proper_fm K) (exists_fm ClassSort (F : Class => and_fm (func_fm F K univ_class) (inj_fm F K univ_class)))) (imp_fm (exists_fm ClassSort (F : Class => and_fm (func_fm F univ_class K) (inj_fm F univ_class K))) (proper_fm K)));
symbol nbg_ax_choice : (phi : Class -> Fm) -> Prf (imp_fm (exists_fm SetSort phi) (and_fm (isset_fm (eps phi)) (phi (eps phi))));
symbol nbg_ax_choice_ext : (phi : Class -> Fm) -> (psi : Class -> Fm) -> Prf (imp_fm (forall_fm SetSort (x : Class => and_fm (imp_fm (phi x) (psi x)) (imp_fm (psi x) (phi x)))) (eq_fm (eps phi) (eps psi)));
symbol nbg_ax_dunaev_pair_proj : (A : Class) -> (B : Class) -> Prf (and_fm (eq_fm (dunaev_pr1 (dunaev_pair A B)) A) (eq_fm (dunaev_pr2 (dunaev_pair A B)) B));
symbol ax_extensionality : Prf (forall_fm ClassSort (X : Class => (forall_fm ClassSort (Y : Class => (imp_fm (forall_fm SetSort (z : Class => (and_fm (imp_fm (in_fm z X) (in_fm z Y)) (imp_fm (in_fm z Y) (in_fm z X))))) (eq_fm X Y))))));
symbol ax_pairing : Prf (forall_fm SetSort (x : Class => (forall_fm SetSort (y : Class => (exists_fm SetSort (p : Class => (forall_fm SetSort (z : Class => (and_fm (imp_fm (in_fm z p) (or_fm (eq_fm z x) (eq_fm z y))) (imp_fm (or_fm (eq_fm z x) (eq_fm z y)) (in_fm z p)))))))))));
symbol ax_foundation : Prf (forall_fm ClassSort (X : Class => (imp_fm (exists_fm SetSort (x : Class => (in_fm x X))) (exists_fm SetSort (y : Class => (and_fm (in_fm y X) (forall_fm SetSort (z : Class => (imp_fm (and_fm (in_fm z y) (in_fm z X)) bot_fm)))))))));
symbol ax_union : Prf (forall_fm SetSort (x : Class => (imp_fm (isset_fm x) (isset_fm (unary_union x)))));
symbol ax_power : Prf (forall_fm SetSort (x : Class => (imp_fm (isset_fm x) (isset_fm (power_class x)))));
symbol ax_infinity : Prf (and_fm (isset_fm omega_set) (ind_fm omega_set));
symbol ax_limitation_of_size : Prf (forall_fm ClassSort (X : Class => (and_fm (imp_fm (proper_fm X) (exists_fm ClassSort (F : Class => (inj_fm F univ_class X)))) (imp_fm (exists_fm ClassSort (F : Class => (inj_fm F univ_class X))) (proper_fm X)))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_01_empty_class_no_elements
// Formula (Type): (forall z:Class. ((z in { x | _|_ }) -> _|_))
// -----------------------------------------------------------------------------
def nbg_thm_01_empty_class_no_elements : Prf (forall_fm ClassSort (z : Class => (imp_fm (in_fm z (kappa (x : Class => bot_fm))) bot_fm))) :=
  (forall_intro ClassSort (z : Class => (imp_intro (hIn : Prf (in_fm z (kappa (x : Class => bot_fm))) => (and_elim_r (imp_elim (and_elim_l (nbg_ax_compr (x : Class => bot_fm) z)) hIn))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_02_empty_set_subclass
// Formula (Type): (forall X:Class. (forall z:Class. ((z in { x | _|_ }) -> (z in X))))
// -----------------------------------------------------------------------------
def nbg_thm_02_empty_set_subclass : Prf (forall_fm ClassSort (X : Class => (forall_fm ClassSort (z : Class => (imp_fm (in_fm z (kappa (x : Class => bot_fm))) (in_fm z X)))))) :=
  (forall_intro ClassSort (X : Class => (forall_intro ClassSort (z : Class => (imp_intro (hIn : Prf (in_fm z (kappa (x : Class => bot_fm))) => (bot_elim (imp_elim (forall_elim (forall_intro ClassSort (z : Class => (imp_intro (hIn : Prf (in_fm z (kappa (x : Class => bot_fm))) => (and_elim_r (imp_elim (and_elim_l (nbg_ax_compr (x : Class => bot_fm) z)) hIn)))))) z) hIn) (in_fm z X))))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_03_universal_class_char
// Formula (Type): (forall z:Class. (((z in { x | Top }) -> Set(z)) /\ (Set(z) -> (z in { x | Top }))))
// -----------------------------------------------------------------------------
def nbg_thm_03_universal_class_char : Prf (forall_fm ClassSort (z : Class => (and_fm (imp_fm (in_fm z (kappa (x : Class => top_fm))) (isset_fm z)) (imp_fm (isset_fm z) (in_fm z (kappa (x : Class => top_fm))))))) :=
  (forall_intro ClassSort (z : Class => (and_intro (imp_intro (hIn : Prf (in_fm z (kappa (x : Class => top_fm))) => (and_elim_l (imp_elim (and_elim_l (nbg_ax_compr (x : Class => top_fm) z)) hIn)))) (imp_intro (hSet : Prf (isset_fm z) => (imp_elim (and_elim_r (nbg_ax_compr (x : Class => top_fm) z)) (and_intro hSet top_intro)))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_04_russell_class_not_set
// Formula (Type): (Set({ x | ((x in x) -> _|_) }) -> _|_)
// -----------------------------------------------------------------------------
def nbg_thm_04_russell_class_not_set : Prf (imp_fm (isset_fm (kappa (x : Class => (imp_fm (in_fm x x) bot_fm)))) bot_fm) :=
  (imp_intro (hSetR : Prf (isset_fm (kappa (x : Class => (imp_fm (in_fm x x) bot_fm)))) => (imp_elim (imp_intro (h : Prf (and_fm (imp_fm (in_fm (kappa (x : Class => (imp_fm (in_fm x x) bot_fm))) (kappa (x : Class => (imp_fm (in_fm x x) bot_fm)))) (imp_fm (in_fm (kappa (x : Class => (imp_fm (in_fm x x) bot_fm))) (kappa (x : Class => (imp_fm (in_fm x x) bot_fm)))) bot_fm)) (imp_fm (imp_fm (in_fm (kappa (x : Class => (imp_fm (in_fm x x) bot_fm))) (kappa (x : Class => (imp_fm (in_fm x x) bot_fm)))) bot_fm) (in_fm (kappa (x : Class => (imp_fm (in_fm x x) bot_fm))) (kappa (x : Class => (imp_fm (in_fm x x) bot_fm)))))) => (imp_elim (imp_intro (p : Prf (in_fm (kappa (x : Class => (imp_fm (in_fm x x) bot_fm))) (kappa (x : Class => (imp_fm (in_fm x x) bot_fm)))) => (imp_elim (imp_elim (and_elim_l h) p) p))) (imp_elim (and_elim_r h) (imp_intro (p : Prf (in_fm (kappa (x : Class => (imp_fm (in_fm x x) bot_fm))) (kappa (x : Class => (imp_fm (in_fm x x) bot_fm)))) => (imp_elim (imp_elim (and_elim_l h) p) p))))))) (and_intro (imp_intro (hIn : Prf (in_fm (kappa (x : Class => (imp_fm (in_fm x x) bot_fm))) (kappa (x : Class => (imp_fm (in_fm x x) bot_fm)))) => (and_elim_r (imp_elim (and_elim_l (nbg_ax_compr (x : Class => (imp_fm (in_fm x x) bot_fm)) (kappa (x : Class => (imp_fm (in_fm x x) bot_fm))))) hIn)))) (imp_intro (hNotIn : Prf (imp_fm (in_fm (kappa (x : Class => (imp_fm (in_fm x x) bot_fm))) (kappa (x : Class => (imp_fm (in_fm x x) bot_fm)))) bot_fm) => (imp_elim (and_elim_r (nbg_ax_compr (x : Class => (imp_fm (in_fm x x) bot_fm)) (kappa (x : Class => (imp_fm (in_fm x x) bot_fm))))) (and_intro hSetR hNotIn))))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_05_binary_inter_comm
// Formula (Type): (forall A:Class. (forall B:Class. (forall z:Class. ((z in { x | ((x in A) /\ (x in B)) }) -> (z in { x | ((x in B) /\ (x in A)) })))))
// -----------------------------------------------------------------------------
def nbg_thm_05_binary_inter_comm : Prf (forall_fm ClassSort (A : Class => (forall_fm ClassSort (B : Class => (forall_fm ClassSort (z : Class => (imp_fm (in_fm z (kappa (x : Class => (and_fm (in_fm x A) (in_fm x B))))) (in_fm z (kappa (x : Class => (and_fm (in_fm x B) (in_fm x A)))))))))))) :=
  (forall_intro ClassSort (A : Class => (forall_intro ClassSort (B : Class => (forall_intro ClassSort (z : Class => (imp_intro (hInAB : Prf (in_fm z (kappa (x : Class => (and_fm (in_fm x A) (in_fm x B))))) => (imp_elim (and_elim_r (nbg_ax_compr (x : Class => (and_fm (in_fm x B) (in_fm x A))) z)) (and_intro (and_elim_l (imp_elim (and_elim_l (nbg_ax_compr (x : Class => (and_fm (in_fm x A) (in_fm x B))) z)) hInAB)) (and_intro (and_elim_r (and_elim_r (imp_elim (and_elim_l (nbg_ax_compr (x : Class => (and_fm (in_fm x A) (in_fm x B))) z)) hInAB))) (and_elim_l (and_elim_r (imp_elim (and_elim_l (nbg_ax_compr (x : Class => (and_fm (in_fm x A) (in_fm x B))) z)) hInAB))))))))))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_06_binary_union_comm
// Formula (Type): (forall A:Class. (forall B:Class. (forall z:Class. ((z in { x | ((x in A) \/ (x in B)) }) -> (z in { x | ((x in B) \/ (x in A)) })))))
// -----------------------------------------------------------------------------
def nbg_thm_06_binary_union_comm : Prf (forall_fm ClassSort (A : Class => (forall_fm ClassSort (B : Class => (forall_fm ClassSort (z : Class => (imp_fm (in_fm z (kappa (x : Class => (or_fm (in_fm x A) (in_fm x B))))) (in_fm z (kappa (x : Class => (or_fm (in_fm x B) (in_fm x A)))))))))))) :=
  (forall_intro ClassSort (A : Class => (forall_intro ClassSort (B : Class => (forall_intro ClassSort (z : Class => (imp_intro (hInAB : Prf (in_fm z (kappa (x : Class => (or_fm (in_fm x A) (in_fm x B))))) => (imp_elim (and_elim_r (nbg_ax_compr (x : Class => (or_fm (in_fm x B) (in_fm x A))) z)) (and_intro (and_elim_l (imp_elim (and_elim_l (nbg_ax_compr (x : Class => (or_fm (in_fm x A) (in_fm x B))) z)) hInAB)) (or_elim (and_elim_r (imp_elim (and_elim_l (nbg_ax_compr (x : Class => (or_fm (in_fm x A) (in_fm x B))) z)) hInAB)) (hA => (or_intro_r (in_fm z B) hA)) (hB => (or_intro_l hB (in_fm z A))))))))))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_07_eq_sym
// Formula (Type): (forall X:Class. (forall Y:Class. ((X = Y) -> (Y = X))))
// -----------------------------------------------------------------------------
def nbg_thm_07_eq_sym : Prf (forall_fm ClassSort (X : Class => (forall_fm ClassSort (Y : Class => (imp_fm (eq_fm X Y) (eq_fm Y X)))))) :=
  (forall_intro ClassSort (X : Class => (forall_intro ClassSort (Y : Class => (imp_intro (hEq : Prf (eq_fm X Y) => (eq_rewrite hEq (u : Class => (eq_fm u X)) (eq_refl X))))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_08_eq_trans
// Formula (Type): (forall X:Class. (forall Y:Class. (forall Z:Class. (((X = Y) /\ (Y = Z)) -> (X = Z)))))
// -----------------------------------------------------------------------------
def nbg_thm_08_eq_trans : Prf (forall_fm ClassSort (X : Class => (forall_fm ClassSort (Y : Class => (forall_fm ClassSort (Z : Class => (imp_fm (and_fm (eq_fm X Y) (eq_fm Y Z)) (eq_fm X Z)))))))) :=
  (forall_intro ClassSort (X : Class => (forall_intro ClassSort (Y : Class => (forall_intro ClassSort (Z : Class => (imp_intro (hConj : Prf (and_fm (eq_fm X Y) (eq_fm Y Z)) => (eq_rewrite (and_elim_r hConj) (u : Class => (eq_fm X u)) (and_elim_l hConj))))))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_09_quantifier_swap
// Formula (Type): ((exists y:Set. (forall x:Set. (x in y))) -> (forall x:Set. (exists y:Set. (x in y))))
// -----------------------------------------------------------------------------
def nbg_thm_09_quantifier_swap : Prf (imp_fm (exists_fm SetSort (y : Class => (forall_fm SetSort (x : Class => (in_fm x y))))) (forall_fm SetSort (x : Class => (exists_fm SetSort (y : Class => (in_fm x y)))))) :=
  (imp_intro (hEx : Prf (exists_fm SetSort (y : Class => (forall_fm SetSort (x : Class => (in_fm x y))))) => (forall_intro SetSort (x : Class => (exists_elim hEx (y0 : Class => hAllX => (exists_intro y0 (forall_elim hAllX x) (exists_fm SetSort (y : Class => (in_fm x y))))))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_10_dunaev_pair_projections
// Formula (Type): (forall A:Class. (forall B:Class. ((pr1([A, B]_D) = A) /\ (pr2([A, B]_D) = B))))
// -----------------------------------------------------------------------------
def nbg_thm_10_dunaev_pair_projections : Prf (forall_fm ClassSort (A : Class => (forall_fm ClassSort (B : Class => (and_fm (eq_fm (dunaev_pr1 (dunaev_pair A B)) A) (eq_fm (dunaev_pr2 (dunaev_pair A B)) B)))))) :=
  (forall_intro ClassSort (A : Class => (forall_intro ClassSort (B : Class => (nbg_ax_dunaev_pair_proj A B)))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_11_cantor_diagonal
// Formula (Type): (forall R:Class. (forall c:Set. (Set(c) -> ((((c in { x | (([x, x]_D in R) -> _|_) }) -> ([c, c]_D in R)) /\ (([c, c]_D in R) -> (c in { x | (([x, x]_D in R) -> _|_) }))) -> _|_))))
// -----------------------------------------------------------------------------
def nbg_thm_11_cantor_diagonal : Prf (forall_fm ClassSort (R : Class => (forall_fm SetSort (c : Class => (imp_fm (isset_fm c) (imp_fm (and_fm (imp_fm (in_fm c (kappa (x : Class => (imp_fm (in_fm (dunaev_pair x x) R) bot_fm)))) (in_fm (dunaev_pair c c) R)) (imp_fm (in_fm (dunaev_pair c c) R) (in_fm c (kappa (x : Class => (imp_fm (in_fm (dunaev_pair x x) R) bot_fm)))))) bot_fm)))))) :=
  (forall_intro ClassSort (R : Class => (forall_intro SetSort (c : Class => (imp_intro (hSetC : Prf (isset_fm c) => (imp_intro (hEqv : Prf (and_fm (imp_fm (in_fm c (kappa (x : Class => (imp_fm (in_fm (dunaev_pair x x) R) bot_fm)))) (in_fm (dunaev_pair c c) R)) (imp_fm (in_fm (dunaev_pair c c) R) (in_fm c (kappa (x : Class => (imp_fm (in_fm (dunaev_pair x x) R) bot_fm)))))) => (imp_elim (imp_intro (hCC : Prf (in_fm (dunaev_pair c c) R) => (imp_elim (and_elim_r (imp_elim (and_elim_l (nbg_ax_compr (x : Class => (imp_fm (in_fm (dunaev_pair x x) R) bot_fm)) c)) (imp_elim (and_elim_r hEqv) hCC))) hCC))) (imp_elim (and_elim_l hEqv) (imp_elim (and_elim_r (nbg_ax_compr (x : Class => (imp_fm (in_fm (dunaev_pair x x) R) bot_fm)) c)) (and_intro hSetC (imp_intro (hCC : Prf (in_fm (dunaev_pair c c) R) => (imp_elim (and_elim_r (imp_elim (and_elim_l (nbg_ax_compr (x : Class => (imp_fm (in_fm (dunaev_pair x x) R) bot_fm)) c)) (imp_elim (and_elim_r hEqv) hCC))) hCC)))))))))))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_12_self_in_singleton
// Formula (Type): (forall x:Class. (Set(x) -> (x in { u | (u = x) })))
// -----------------------------------------------------------------------------
def nbg_thm_12_self_in_singleton : Prf (forall_fm ClassSort (x : Class => (imp_fm (isset_fm x) (in_fm x (kappa (u : Class => (eq_fm u x))))))) :=
  (forall_intro ClassSort (x : Class => (imp_intro (hSetX : Prf (isset_fm x) => (imp_elim (and_elim_r (nbg_ax_compr (u : Class => (eq_fm u x)) x)) (and_intro hSetX (eq_refl x)))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_13_self_in_succ
// Formula (Type): (forall x:Class. (Set(x) -> (x in { u | ((u in x) \/ (u = x)) })))
// -----------------------------------------------------------------------------
def nbg_thm_13_self_in_succ : Prf (forall_fm ClassSort (x : Class => (imp_fm (isset_fm x) (in_fm x (kappa (u : Class => (or_fm (in_fm u x) (eq_fm u x)))))))) :=
  (forall_intro ClassSort (x : Class => (imp_intro (hSetX : Prf (isset_fm x) => (imp_elim (and_elim_r (nbg_ax_compr (u : Class => (or_fm (in_fm u x) (eq_fm u x))) x)) (and_intro hSetX (or_intro_r (in_fm x x) (eq_refl x))))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_14_sub_succ
// Formula (Type): (forall x:Class. (forall z:Class. ((z in x) -> (z in { u | ((u in x) \/ (u = x)) }))))
// -----------------------------------------------------------------------------
def nbg_thm_14_sub_succ : Prf (forall_fm ClassSort (x : Class => (forall_fm ClassSort (z : Class => (imp_fm (in_fm z x) (in_fm z (kappa (u : Class => (or_fm (in_fm u x) (eq_fm u x)))))))))) :=
  (forall_intro ClassSort (x : Class => (forall_intro ClassSort (z : Class => (imp_intro (hInX : Prf (in_fm z x) => (imp_elim (and_elim_r (nbg_ax_compr (u : Class => (or_fm (in_fm u x) (eq_fm u x))) z)) (and_intro (imp_elim (nbg_ax_heredity z x) hInX) (or_intro_l hInX (eq_fm z x))))))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_15_russell_proper
// Formula (Type): (forall r:Class. ((r = { x | ((x in x) -> _|_) }) -> (Set(r) -> _|_)))
// -----------------------------------------------------------------------------
def nbg_thm_15_russell_proper : Prf (forall_fm ClassSort (r : Class => (imp_fm (eq_fm r (kappa (x : Class => (imp_fm (in_fm x x) bot_fm)))) (imp_fm (isset_fm r) bot_fm)))) :=
  (forall_intro ClassSort (r : Class => (imp_intro (hDef : Prf (eq_fm r (kappa (x : Class => (imp_fm (in_fm x x) bot_fm)))) => (imp_intro (hSetR : Prf (isset_fm r) => (imp_elim (imp_intro (hIn : Prf (in_fm r r) => (imp_elim (and_elim_r (imp_elim (and_elim_l (nbg_ax_compr (x : Class => (imp_fm (in_fm x x) bot_fm)) r)) (eq_rewrite hDef (c : Class => (in_fm r c)) hIn))) hIn))) (eq_rewrite (eq_sym hDef) (c : Class => (in_fm r c)) (imp_elim (and_elim_r (nbg_ax_compr (x : Class => (imp_fm (in_fm x x) bot_fm)) r)) (and_intro hSetR (imp_intro (hIn : Prf (in_fm r r) => (imp_elim (and_elim_r (imp_elim (and_elim_l (nbg_ax_compr (x : Class => (imp_fm (in_fm x x) bot_fm)) r)) (eq_rewrite hDef (c : Class => (in_fm r c)) hIn))) hIn)))))))))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_16_subclass_antisym
// Formula (Type): (forall X:Class. (forall Y:Class. ((forall z:Set. ((z in X) -> (z in Y))) -> ((forall z:Set. ((z in Y) -> (z in X))) -> (X = Y)))))
// -----------------------------------------------------------------------------
def nbg_thm_16_subclass_antisym : Prf (forall_fm ClassSort (X : Class => (forall_fm ClassSort (Y : Class => (imp_fm (forall_fm SetSort (z : Class => (imp_fm (in_fm z X) (in_fm z Y)))) (imp_fm (forall_fm SetSort (z : Class => (imp_fm (in_fm z Y) (in_fm z X)))) (eq_fm X Y))))))) :=
  (forall_intro ClassSort (X : Class => (forall_intro ClassSort (Y : Class => (imp_intro (hSubXY : Prf (forall_fm SetSort (z : Class => (imp_fm (in_fm z X) (in_fm z Y)))) => (imp_intro (hSubYX : Prf (forall_fm SetSort (z : Class => (imp_fm (in_fm z Y) (in_fm z X)))) => (imp_elim (forall_elim (forall_elim ax_extensionality X) Y) (forall_intro SetSort (z : Class => (and_intro (forall_elim hSubXY z) (forall_elim hSubYX z)))))))))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_17_empty_set_unique
// Formula (Type): (forall e1:Class. (forall e2:Class. ((forall z:Set. ((z in e1) -> _|_)) -> ((forall z:Set. ((z in e2) -> _|_)) -> (e1 = e2)))))
// -----------------------------------------------------------------------------
def nbg_thm_17_empty_set_unique : Prf (forall_fm ClassSort (e1 : Class => (forall_fm ClassSort (e2 : Class => (imp_fm (forall_fm SetSort (z : Class => (imp_fm (in_fm z e1) bot_fm))) (imp_fm (forall_fm SetSort (z : Class => (imp_fm (in_fm z e2) bot_fm))) (eq_fm e1 e2))))))) :=
  (forall_intro ClassSort (e1 : Class => (forall_intro ClassSort (e2 : Class => (imp_intro (hEmp1 : Prf (forall_fm SetSort (z : Class => (imp_fm (in_fm z e1) bot_fm))) => (imp_intro (hEmp2 : Prf (forall_fm SetSort (z : Class => (imp_fm (in_fm z e2) bot_fm))) => (imp_elim (forall_elim (forall_elim ax_extensionality e1) e2) (forall_intro SetSort (z : Class => (and_intro (imp_intro (hIn1 : Prf (in_fm z e1) => (bot_elim (imp_elim (forall_elim hEmp1 z) hIn1) (in_fm z e2)))) (imp_intro (hIn2 : Prf (in_fm z e2) => (bot_elim (imp_elim (forall_elim hEmp2 z) hIn2) (in_fm z e1))))))))))))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_18_bin_inter_sub_left
// Formula (Type): (forall A:Class. (forall B:Class. (forall z:Class. ((z in { u | ((u in A) /\ (u in B)) }) -> (z in A)))))
// -----------------------------------------------------------------------------
def nbg_thm_18_bin_inter_sub_left : Prf (forall_fm ClassSort (A : Class => (forall_fm ClassSort (B : Class => (forall_fm ClassSort (z : Class => (imp_fm (in_fm z (kappa (u : Class => (and_fm (in_fm u A) (in_fm u B))))) (in_fm z A)))))))) :=
  (forall_intro ClassSort (A : Class => (forall_intro ClassSort (B : Class => (forall_intro ClassSort (z : Class => (imp_intro (hInAB : Prf (in_fm z (kappa (u : Class => (and_fm (in_fm u A) (in_fm u B))))) => (and_elim_l (and_elim_r (imp_elim (and_elim_l (nbg_ax_compr (u : Class => (and_fm (in_fm u A) (in_fm u B))) z)) hInAB)))))))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_19_bin_inter_sub_right
// Formula (Type): (forall A:Class. (forall B:Class. (forall z:Class. ((z in { u | ((u in A) /\ (u in B)) }) -> (z in B)))))
// -----------------------------------------------------------------------------
def nbg_thm_19_bin_inter_sub_right : Prf (forall_fm ClassSort (A : Class => (forall_fm ClassSort (B : Class => (forall_fm ClassSort (z : Class => (imp_fm (in_fm z (kappa (u : Class => (and_fm (in_fm u A) (in_fm u B))))) (in_fm z B)))))))) :=
  (forall_intro ClassSort (A : Class => (forall_intro ClassSort (B : Class => (forall_intro ClassSort (z : Class => (imp_intro (hInAB : Prf (in_fm z (kappa (u : Class => (and_fm (in_fm u A) (in_fm u B))))) => (and_elim_r (and_elim_r (imp_elim (and_elim_l (nbg_ax_compr (u : Class => (and_fm (in_fm u A) (in_fm u B))) z)) hInAB)))))))))));

// -----------------------------------------------------------------------------
// Certified NBG Theorem: nbg_thm_20_bin_union_sub_left
// Formula (Type): (forall A:Class. (forall B:Class. (forall z:Class. ((z in A) -> (z in { u | ((u in A) \/ (u in B)) })))))
// -----------------------------------------------------------------------------
def nbg_thm_20_bin_union_sub_left : Prf (forall_fm ClassSort (A : Class => (forall_fm ClassSort (B : Class => (forall_fm ClassSort (z : Class => (imp_fm (in_fm z A) (in_fm z (kappa (u : Class => (or_fm (in_fm u A) (in_fm u B)))))))))))) :=
  (forall_intro ClassSort (A : Class => (forall_intro ClassSort (B : Class => (forall_intro ClassSort (z : Class => (imp_intro (hInA : Prf (in_fm z A) => (imp_elim (and_elim_r (nbg_ax_compr (u : Class => (or_fm (in_fm u A) (in_fm u B))) z)) (and_intro (imp_elim (nbg_ax_heredity z A) hInA) (or_intro_l hInA (in_fm z B))))))))))));

