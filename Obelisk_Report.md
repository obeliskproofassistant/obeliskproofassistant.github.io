# The "Obelisk" Proof Assistant Axiomatics: Audit, Repair, and Verification of Independent Constructions

**A Machine-Checked Report · Formalized in Lean 4**  
*Based on the Obelisk Proof Assistant Demonstration (Higher-Order Logic Variant, dated 2026-05-05)*

- **Audited System:** [obeliskproofassistant.github.io](https://obeliskproofassistant.github.io/) / [georgydunaev.github.io](https://georgydunaev.github.io/)
- **System Author:** Georgy Dunaev
- **Formal Verification:** Lean 4 (Core Lean, self-contained, no Mathlib dependency)
- **Source Code:** [Obelisk.lean](file:///home/user/AI/AGY/Obelisk.lean)

---

### Executive Overview

| Metric | Result | Description |
| :--- | :---: | :--- |
| **Inconsistencies Identified** | **2** | Independent derivations of $\bot$ in the printed demo axiomatics |
| **Demo Theorems Verified** | **9** | Successfully proved from the printed core axioms alone |
| **Independent TBI Items Verified** | **3** | Items 3.45–3.47 (Dunaev tagged pairs & lists) fully implemented and verified |
| **Lean Status** | **0 errors, 0 sorry** | Full audit via `#print axioms` verifying exact dependencies |

---

## Executive Summary

The "Obelisk" proof assistant represents a serious, mathematically rich foundational system: an impredicative class theory at the level of Morse–Kelley (MK) equipped with Tarski–Grothendieck universes, $\in$-induction formulated via powerclasses (Item 3.14), and an innovative independent definition of ordered pairs and tagged lists capable of handling proper classes.

However, the axiom list printed in the demo contains a critical bug: in Definition 3.34 ($\preceq$, "not strictly larger than"), the requirement of **injectivity** is missing. Because of this omission, the empty function vacuously witnesses $A \preceq B$ for all classes $A$ and $B$. Consequently, the strict order relation $\prec$ never holds. This leads to an immediate derivation of $\bot$ along two independent pathways:
1. Through the von Neumann Limitation of Size axiom (3.37), forcing the universe $V$ to be empty and contradicting the Infinity axiom (3.53).
2. Through Tarski's Universe axiom (3.66) via the `Tight` predicate (3.41), which proves that no universe can exist.

The minimal repair for this inconsistency is straightforward: restore the injectivity and domain conditions to Definition 3.34.

**Clarification on Ordered Pairs:**  
In earlier audit notes (e.g., `FABLE.pdf`), it was mistakenly suggested that the core function machinery (specifically definition 3.29) *depends* on Dunaev's ordered pairs. In reality, the introduction of a new definition of an ordered pair and tagged lists (Items 3.44–3.47) is an **independent construction**. In the core function theory, definition 3.29 (`concentrated`) uses standard Kuratowski pairs; the potential issue with proper-class "phantom partners" only arises if the uniqueness quantifier $\exists!$ is read over all proper classes rather than over sets. Restricting $\exists!$ to sets resolves the issue entirely within standard Kuratowski pairing. 

Meanwhile, Dunaev's tagged pairs and lists stand on their own as an independent, elegant construction that achieves faithful pairing and list operations for arbitrary classes (proper classes included).

---

## 1. What "Obelisk" Is Mathematically

The core of Obelisk is a class theory where "being a set" is a defined predicate:
$$X \text{ is a set} \iff \exists Y.\, X \in Y \quad (\text{Item } 3.02)$$
Class comprehension is **impredicative** (Item 3.01: the formula $\varphi$ in $\{x \mid \varphi(x)\}$ may quantify over all classes). This places Obelisk at the deductive strength of Morse–Kelley (MK) set theory, which is strictly stronger than von Neumann–Bernays–Gödel (NBG).

On top of this core, Obelisk introduces:
- **Heredity (3.12):** Subclasses of sets are sets ($A \subseteq B \land \mathrm{isSet}(B) \implies \mathrm{isSet}(A)$).
- **Exponent (3.13):** The powerclass of a set is a set ($\mathrm{isSet}(X) \implies \mathrm{isSet}(\mathcal{P}(X))$).
- **"Regularity" (3.14):** Formulated elegantly as $\in$-induction over powerclasses:
  $$\mathcal{P}(X) \subseteq X \implies V \subseteq X$$
- **Infinity (3.53):** $\omega$ is a set ($\mathrm{isSet}(\omega)$).
- **Limitation of Size (3.37):** A class is a set if and only if its cardinality is strictly less than the universe: $X \in V \iff |X| \prec |V|$.
- **Tarski's Axiom (3.66):** Every set belongs to a Grothendieck-style universe (similar to Tarski–Grothendieck set theory used in Mizar).

The meta-theoretical component (Sections 4 and 6 of the demo) introduces quotation brackets $\langle-\rangle / \llbracket-\rrbracket$ and an internal provability predicate $\mathcal{F}$ aimed at formalizing Löb's theorem and Gödel's Second Incompleteness Theorem internally—a program reminiscent of Feferman's reflexive closures.

---

## 2. Audit Findings

### Finding 1: $\preceq$ Lacks Injectivity $\implies$ Contradiction via Limitation of Size (Axiom 3.37)

The demo prints Definition 3.34 as follows:
```text
3.34) Def. "Is not strictly larger than" binary relation:
(∀(A:Class)∀(B:Class)((A ≼ B) ⟷ (∃(f:Class)((f class-function) ∧ (f[A] ⊆ B)))))
```
*Issue:* The definition specifies neither injectivity of $f$ nor the domain condition $A \subseteq \mathrm{Dom}(f)$.

The empty class $\emptyset$ qualifies as a `class-function` under Definitions 3.29–3.33 (all domain conditions are vacuously satisfied since $\mathrm{Dom}(\emptyset) = \emptyset$). When evaluated on any element $a$, `app(∅, a)` falls into the default `ELSE V` branch (Definition 3.25). Because $V$ is a proper class (by Russell's paradox + Heredity), no set $b$ can equal $V$. Thus:
$$\emptyset[A] = \emptyset \subseteq B \quad \text{for all } A, B$$
Hence, $A \preceq B$ holds universally for any two classes $A$ and $B$.

The strict ordering relation $\prec$ is defined as $A \prec B \iff \neg(B \preceq A)$ (Item 3.36). Since $B \preceq A$ always holds, $A \prec B$ is **identically false**.

The Limitation of Size axiom (3.37) states:
$$X \in V \iff |X| \prec |V|$$
Because $|X| \prec |V|$ is always false, this axiom forces $V$ to have no members ($V = \emptyset$). However, the Infinity axiom (3.53) asserts that $\omega$ is a set, so $\omega \in V$. This is an immediate contradiction.

- **Lean Verification:** `PrintedWleq_total`, `printed_inconsistent_route1 : False` derived solely from `{CCR, ext, heredity, infinity}` + Hypothesis 3.37.

---

### Finding 2: The Same Bug Destroys Universes: Axiom 3.66 Is Contradictory and Theorem 3.65 Is Refutable

The predicate `Tight(U)` (Item 3.41) relies on the strict order $\prec$:
$$\mathrm{Tight}(U) \iff \forall B \subseteq U.\, (B \prec U \iff B \in U)$$
Since $\prec$ is never satisfied, $\mathrm{Tight}(U)$ simplifies to:
$$\forall B \subseteq U.\, B \notin U$$
However, by Definition 3.64, any universe $U$ satisfies:
1. $\omega \in U$
2. $\mathrm{Hereditary}(U)$ (if $B \in U$ and $X \subseteq B$, then $X \in U$)

Since $\emptyset \subseteq \omega$, we have $\emptyset \in U$. At the same time, $\emptyset \subseteq U$, which by `Tight(U)` forces $\emptyset \notin U$. 

Therefore, **no class can be a universe**:
- Tarski's Axiom 3.66 ($\forall x.\, \mathrm{isSet}(x) \implies \exists u.\, \mathrm{isUniverse}(u) \land x \in u$) directly derives $\bot$.
- Theorem 3.65 announced in the demo ("$V$ is a universe") is provably refutable.

- **Lean Verification:** `no_universe`, `printed_inconsistent_route2 : False`, `printed_3_65_refutable`.

---

### Finding 3: Proper-Class Quantification in 3.29 and Kuratowski Pairs

Definition 3.29 defines a relation $F$ to be `concentrated`:
$$\mathrm{concentrated}(F) \iff \forall x \in \mathrm{Dom}(F).\, \mathrm{isSet}(\mathrm{app}(F, x)) \implies \exists! y.\, (x, y) \in F$$

With standard Kuratowski pairs $(a, b) = \{\{a\}, \{a, b\}\}$ (Item 3.48), if $Y$ is a proper class, the unordered pair $\{x, Y\}$ collapses to $\{x\}$ because proper classes cannot be members of classes. Consequently:
$$(x, Y) = (x, x)$$
If the uniqueness quantifier $\exists! y$ in 3.29 is interpreted over all classes (`y : Class`), then for any diagonal pair $(x, x) \in F$, $y := V$ acts as a "phantom" second witness, causing uniqueness to fail.

**Important Logical Clarification:**  
This observation does **not** mean that the core function machinery must abandon Kuratowski pairs or depend on Dunaev's pairs. The natural and standard resolution in the core theory is simply to restrict the uniqueness quantifier in 3.29 to sets:
$$\exists! (y : \mathrm{Set}).\, (x, y) \in F$$
This matches the premise $\mathrm{isSet}(\mathrm{app}(F, x))$. Under this standard interpretation, Kuratowski pairs work seamlessly in the core. Dunaev's pairs (Items 3.45–3.47) remain an independent development.

- **Lean Verification:** `upair_proper_collapse`, `kpair_phantom`, `no_unique_partner`.

---

### Finding 4: Pairing and Union Axioms Are Absent from the Printed List

The printed axiom list omits the Pairing and Union axioms. However:
1. `Pairful` is an explicit condition in the definition of a universe (3.64), and Theorem 3.65 announces `Pairful V` (which is literally the pairing axiom).
2. The successor operation $\mathrm{succ}(a) = a \cup \{a\}$ for general non-transitive sets requires pairing and union to ensure $\mathrm{isSet}(\mathrm{succ}(a))$, which is necessary to prove $\mathrm{Ind}(V)$ (Item 3.54).
3. Pairing cannot be recovered from Limitation of Size without circularity, because the definition of $\preceq$ relies on class functions whose graphs are already built from ordered pairs.

Adding Pairing and Union to the core is standard for Morse–Kelley set theory and holds in all intended models.

- **Lean Verification:** `pairing`, `unionAx`, `isSet_succ`, `thm_3_54`, `V_Pairful`.

---

## 3. What Survives: Nine Demo Theorems Proven from the Printed Core

Despite the inconsistencies in the printed definitions of $\preceq$ and universes, the core algebraic and ordinal theory of Obelisk is solid. Nine major theorems announced in the demo have been verified in Lean 4 directly from the printed core axioms `{CCR, ext, heredity, exponent, regularity, infinity}`:

| Demo Item | Mathematical Statement | Lean Theorem Name | Axiom Footprint |
| :---: | :--- | :--- | :--- |
| **3.07** | $\emptyset \subseteq X$ | `thm_3_07` | `CCR` |
| **3.11** | Intensionality: $(\forall W.\, X \in W \leftrightarrow Y \in W) \to X = Y$ | `thm_3_11` | `CCR` |
| **3.18** | $\mathrm{Ord}(\mathrm{On})$: Class of all ordinals is ordinal | `thm_3_18` | `CCR` alone |
| **3.55** | $\mathrm{Ind}(\omega)$: $\omega$ is inductive | `thm_3_55` | `CCR`, `ext`, `heredity`, `infinity` |
| **3.56** | $\mathrm{Ind}(\mathrm{On})$: $\mathrm{On}$ is inductive | `thm_3_56` | `CCR`, `heredity`, `exponent`, `infinity` |
| **3.57** | $\mathrm{Tr}(\omega)$: $\omega$ is transitive | `thm_3_57` | `CCR`, `ext`, `heredity`, `infinity` |
| **3.58** | $\mathrm{Ord}(\omega)$: $\omega$ is an ordinal class | `thm_3_58` | `CCR`, `ext`, `heredity`, `infinity` |
| **3.59** | $\omega \in \mathrm{On}$ | `thm_3_59` | `CCR`, `ext`, `heredity`, `infinity` |
| **3.67** | Induction on a transitive class: $K \cap \mathcal{P}(A) \subseteq A \to K \subseteq A$ | `thm_3_67` | `CCR`, `regularity` |

### Key Mathematical Observations

1. **Regularity as $\in$-Induction (3.67):** Item 3.67 is derivable directly from Axiom 3.14 alone, confirming that Dunaev's "Regularity" axiom is exactly $\in$-induction in powerclass form ($\mathcal{P}(X) \subseteq X \implies V \subseteq X$). This formulation is elegant and powerful.
2. **Classical Detour for $\mathrm{Ind}(\omega)$ (3.55):** In Lean, $\mathrm{Ind}(\omega)$ is proved by a classical case split: either an inductive class exists, or $\omega = V$. But $\omega = V$ contradicts $\mathrm{isSet}(\omega)$ (3.53) combined with Russell's paradox ($V$ is proper). Hence an inductive class must exist (`exists_inductive`).
3. **Transitivity Rescues $\mathrm{Ind}(\mathrm{On})$ (3.56):** For any *transitive* set $a$, we have $a \cup \{a\} \subseteq \mathcal{P}(a)$. Thus, $\mathrm{succ}(a)$ is a set purely by Heredity + Exponent, without requiring Pairing or Union (`isSet_succ_of_Tr`). This allows $\mathrm{Ind}(\mathrm{On})$ to survive in the printed core.
4. **Tight-Free Components of $V$ as a Universe:** The components $\mathrm{Tr}(V)$, $\mathrm{Hereditary}(V)$, and $\mathrm{Powerful}(V)$ are all verified from the core.

---

## 4. An Independent Construction: Dunaev's Tagged Lists and Pairs (3.45–3.47)

In the demo, items 3.44–3.47 were marked "TBI" (To Be Implemented). In our analysis, they are fully implemented and verified in Lean 4 as an **independent construction**.

### Motivation

While Kuratowski pairs suffice for set-valued relations, they collapse when applied to proper classes: $(x, Y) = (x, x)$ whenever $Y$ is proper. Dunaev's tagged construction provides an independent, faithful encoding of ordered pairs and finite lists for **arbitrary classes**, including proper classes:

```text
3.44  Numerals:   0 := ∅,   1 := {0},   2 := {0, 1}
3.45  mark(A, n) := {{0, n}} ∪ { {{{a}}, n} | a ∈ A }
3.46  (A, B)     := mark(A, 1) ∪ mark(B, 2)
3.47  pr₁(L)     := { a | {{{a}}, 1} ∈ L },   pr₂(L) := { b | {{{b}}, 2} ∈ L }
```

### Verified Theorems in Lean 4

The entire theory of Dunaev pairs has been formalized without gaps:

```lean
dpr1_dpair            : pr1 (dpair A B) = A          -- holds for ALL classes A, B
dpr2_dpair            : pr2 (dpair A B) = B          -- holds for ALL classes A, B
dpair_inj             : dpair A B = dpair C D → A = C ∧ B = D
dpair_proper_showcase : pr1 (dpair V On) = V ∧ pr2 (dpair V On) = On  -- proper classes!
dsingle_ne_dnil       : markC A one ≠ Null           -- [A] ≠ [] even when A = ∅
```

### The Marker Device $\{0, n\}$

The defining architectural feature of Dunaev's construction is the inclusion of the marker $\{0, n\}$ in $\mathrm{mark}(A, n)$. In naive tagging schemes ($A \times \{1\} \cup B \times \{2\}$), if $A = \emptyset$, the first component vanishes, making $[\emptyset]$ indistinguishable from $[]$. In Dunaev's scheme, because $\{0, n\}$ is always present, a mark is **never empty** (`mark_ne_Null`). The length and components of a list are always unambiguously recoverable.

---

## 5. Minimal Repair

To restore consistency while preserving the intended strength of Obelisk, the following updated 5-step repair is recommended:

1. **Update Definition 3.34 ($\preceq$):**  
   Require injectivity and the domain condition:
   $$A \preceq B \iff \exists f.\, (f \text{ class-function} \land A \subseteq \mathrm{Dom}(f) \land f[A] \subseteq B \land f \text{ is injective on } A)$$
   With this correction, Axiom 3.37 becomes the standard von Neumann Limitation of Size, and the predicates `Tight` (3.41) and `isUniverse` (3.64) function as intended.

2. **Add Pairing and Union Axioms to the Core:**  
   Standard in Morse–Kelley and NBG set theories:
   $$\forall a, b.\, \mathrm{isSet}(a) \land \mathrm{isSet}(b) \implies \mathrm{isSet}(\{a, b\})$$
   $$\forall x.\, \mathrm{isSet}(x) \implies \mathrm{isSet}(\bigcup x)$$
   These axioms are required for $\mathrm{Ind}(V)$ (3.54), universe pairing closure (3.65), and general set manipulation.

3. **Clarify Uniqueness in Definition 3.29:**  
   Restrict the uniqueness quantifier in `concentrated` to sets:
   $$\forall x \in \mathrm{Dom}(F).\, \mathrm{isSet}(\mathrm{app}(F, x)) \implies \exists! (y : \mathrm{Set}).\, (x, y) \in F$$
   This keeps the core function theory simple and compatible with standard Kuratowski pairs, preserving the independent status of Dunaev's pairs.

4. **Acknowledge Global Choice:**  
   Under the corrected Limitation of Size axiom ($3.37'$), every proper class can be put into bijection with the universe $V$. As demonstrated by von Neumann (1925), this implies the Axiom of Global Choice. This should be explicitly documented as a theorem of the system.

5. **Calibrate Outer Metatheory in Section 6:**  
   In Section 6 of the demo, the outer theory referenced in 6.02/6.03 must be stronger than Robinson arithmetic $Q$ (e.g., Elementary Arithmetic $EA$ or $I\Sigma_1$), as $Q$ cannot prove the Hilbert–Bernays–Löb derivability conditions required for Löb's theorem.

### Consistency Model

The repaired core is consistent relative to large cardinals:
- A standard model is given by $V_{\kappa+1}$, where $\kappa$ is an inaccessible limit of inaccessible cardinals.
- Sets are interpreted as elements of $V_\kappa$, and classes as subsets of $V_\kappa$ (elements of $V_{\kappa+1}$).
- The system is calibrated around **Morse–Kelley + Limitation of Size + Tarski–Grothendieck Universes**, which is strictly stronger than ZFC.

---

## 6. Future Directions: A Roadmap for "First-Class Mathematics"

The Obelisk system offers an exceptional platform for formal foundational research:

- **Paper A: "The Obelisk Class Theory: A Machine-Checked Audit and Repair"**  
  Document the audit findings, the minimal repair, the verified surviving core, and Dunaev's independent class-pairing theory. (Target: ITP / CPP / arXiv).
- **Paper B: Strength Calibration and Class Cardinal Arithmetic**  
  Formally establish mutual interpretability with $\mathrm{MK} + \mathrm{LoS} + \mathrm{TG}$ and develop the class cardinal arithmetic outlined in demo items 3.60–3.63 ($|\mathrm{On}| = \mathrm{On}$, $\mathrm{Card}(\mathrm{On})$, $\neg\mathrm{Card}(V)$).
- **Paper C: Metatheory of Section 6 (Internal Reflection and Löb's Theorem)**  
  Investigate typed quoting and evaluation as modal operators in the style of GL (Gödel–Löb modal logic), connect $\mathcal{F}$ with Feferman reflexive closures, and formalize Gödel II and Löb's theorem internally.
- **Engineering: Proof Export Pipeline**  
  Implement an automated export backend from Obelisk to Lean 4 / Metamath, allowing Obelisk derivations to be independently verified by third-party checkers.

---

## 7. Reproduction & Verification

The formalization is entirely self-contained in a single file [Obelisk.lean](file:///home/user/AI/AGY/Obelisk.lean) (~850 lines) with no external library dependencies.

### Verification Instructions

```bash
# 1. Install Lean 4 (if not already installed)
curl https://elan.lean-lang.org/elan-init.sh -sSf | sh -s -- -y --default-toolchain

# 2. Check the Obelisk verification file
lean Obelisk.lean
```

Upon execution, `lean Obelisk.lean` succeeds with return code `0`, reporting **0 errors** and **0 sorrys**, followed by the axiom audit:

```text
'Obelisk.printed_inconsistent_route1' depends on axioms: [Obelisk.Class, Obelisk.Mem, Obelisk.cls, Obelisk.mem_cls, Obelisk.heredity, Classical.choice, propext, Quot.sound, Obelisk.extAx, Obelisk.infinity]
'Obelisk.printed_inconsistent_route2' depends on axioms: [Obelisk.Class, Obelisk.Mem, Obelisk.cls, Obelisk.heredity, Obelisk.mem_cls, Obelisk.infinity, Classical.choice, propext, Quot.sound, Obelisk.extAx]
'Obelisk.printed_3_65_refutable' depends on axioms: [Obelisk.Class, Obelisk.Mem, Obelisk.cls, Obelisk.mem_cls, Obelisk.heredity, Classical.choice, propext, Quot.sound, Obelisk.extAx]
'Obelisk.no_unique_partner' depends on axioms: [Obelisk.Class, Obelisk.Mem, Obelisk.cls, Obelisk.extAx, Obelisk.mem_cls, Obelisk.heredity, Classical.choice, propext, Quot.sound]
'Obelisk.thm_3_18' depends on axioms: [Obelisk.Class, Obelisk.Mem, Obelisk.cls, Obelisk.mem_cls]
'Obelisk.thm_3_55' depends on axioms: [Obelisk.Class, Obelisk.Mem, Obelisk.cls, Obelisk.mem_cls, Obelisk.heredity, Obelisk.infinity, Classical.choice, propext, Quot.sound, Obelisk.extAx]
'Obelisk.thm_3_56' depends on axioms: [Obelisk.Class, Obelisk.Mem, Obelisk.cls, Obelisk.mem_cls, Obelisk.heredity, Obelisk.infinity, Obelisk.exponent]
'Obelisk.thm_3_58' depends on axioms: [Obelisk.Class, Obelisk.Mem, Obelisk.cls, Obelisk.mem_cls, Obelisk.heredity, Obelisk.infinity, Classical.choice, propext, Quot.sound, Obelisk.extAx]
'Obelisk.thm_3_67' depends on axioms: [Obelisk.Class, Obelisk.Mem, Obelisk.cls, Obelisk.mem_cls, Obelisk.regularity]
'Obelisk.dpair_inj' depends on axioms: [Obelisk.Class, Obelisk.cls, Obelisk.Mem, Obelisk.extAx, Obelisk.mem_cls, Obelisk.heredity, Obelisk.infinity, Obelisk.pairing]
'Obelisk.dsingle_ne_dnil' depends on axioms: [Obelisk.Class, Obelisk.cls, Obelisk.Mem, Obelisk.mem_cls, Obelisk.pairing, Obelisk.heredity, Obelisk.infinity, Obelisk.extAx]
```
