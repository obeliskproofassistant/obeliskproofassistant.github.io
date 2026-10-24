# Formal Mathematical Proofs of Fundamental Theorems on Ordinals

**Repository:** `set_theory_prover`  
**File:** `formal/ORDINAL_THEOREMS_PROOFS.md`  
**Theory:** Von Neumann-Bernays-Gödel (NBG) Class Theory with Global Choice and Regularity (Foundation).  
**Mathematical Standards:** Classical First-Order Logic with Identity and Class Comprehension.

---

## 1. Foundational Definitions

Following `program/types/foundations.ML` (lines 2487–2570 and 3118–3160):

1. **Subclass Relation:**
   $$A \subseteq B \iff \forall z. (z \in A \implies z \in B)$$

2. **Transitive Class:**
   A class $A$ is transitive if every element of $A$ is a subset of $A$:
   $$\text{Trans}(A) \iff \forall B. (B \in A \implies B \subseteq A) \iff \forall x, y. (x \in y \land y \in A \implies x \in A)$$

3. **Von Neumann Ordinal Class:**
   A class $A$ is an ordinal if $A$ is transitive and every element of $A$ is transitive:
   $$\text{Ord}(A) \iff \text{Trans}(A) \land \forall B. (B \in A \implies \text{Trans}(B))$$
   *(Note: Under the Axiom of Regularity / Foundation, this definition is equivalent to $A$ being transitive and strictly well-ordered by $\in$.)*

4. **Class of All Ordinals $\text{On}$:**
   $$\text{On} = \{x \mid \text{isSet}(x) \land \text{Ord}(x)\}$$

5. **Ordinal Successor:**
   $$\alpha^+ = \alpha \cup \{\alpha\}$$

6. **Axiom of Regularity (Foundation):**
   Every non-empty set $S$ has an $\in$-minimal element disjoint from $S$:
   $$\forall S. (\text{isSet}(S) \land S \neq \emptyset \implies \exists m \in S. m \cap S = \emptyset)$$

---

## 2. Step-by-Step Formal Proofs

### Theorem O1: Empty Set is Transitive (`thm_O1_empty_trans`)
- **Statement:** $\vdash \text{Trans}(\emptyset)$
- **Proof:**
  1. By definition of `Trans`: $\text{Trans}(\emptyset) \iff \forall B. (B \in \emptyset \implies B \subseteq \emptyset)$.
  2. Let $B$ be an arbitrary class.
  3. Assume $B \in \emptyset$.
  4. By the Empty Set Axiom (`ax_empty_no_elements`), $\forall z. z \in \emptyset \implies \bot$. Specializing to $z := B$ yields $\bot$.
  5. By Principle of Explosion (*ex falso quodlibet*), $\bot \implies B \subseteq \emptyset$.
  6. Discharging assumption (3), $B \in \emptyset \implies B \subseteq \emptyset$.
  7. Since $B$ was arbitrary, by universal generalization: $\forall B. (B \in \emptyset \implies B \subseteq \emptyset)$.
  8. Thus $\text{Trans}(\emptyset)$ holds. $\blacksquare$

---

### Theorem O2: Empty Set is an Ordinal (`thm_O2_empty_ord`)
- **Statement:** $\vdash \text{Ord}(\emptyset) \land \emptyset \in \text{On}$
- **Proof:**
  1. By definition of `Ord`: $\text{Ord}(\emptyset) \iff \text{Trans}(\emptyset) \land \forall B. (B \in \emptyset \implies \text{Trans}(B))$.
  2. By Theorem O1, $\text{Trans}(\emptyset)$ holds.
  3. Let $B$ be arbitrary. Assume $B \in \emptyset$.
  4. By `ax_empty_no_elements`, $B \in \emptyset \implies \bot$.
  5. By *ex falso*, $\bot \implies \text{Trans}(B)$.
  6. Discharging assumption, $\forall B. (B \in \emptyset \implies \text{Trans}(B))$.
  7. Conjunction introduction yields $\text{Trans}(\emptyset) \land \forall B. (B \in \emptyset \implies \text{Trans}(B))$.
  8. Hence $\text{Ord}(\emptyset)$.
  9. By Axiom of Empty Set, $\text{isSet}(\emptyset)$.
  10. By Class Comprehension for $\text{On}$: $\emptyset \in \text{On} \iff \text{isSet}(\emptyset) \land \text{Ord}(\emptyset)$.
  11. Both conjuncts hold, so $\emptyset \in \text{On}$ (representing the ordinal $0$). $\blacksquare$

---

### Theorem O3: Successor of Transitive Set is Transitive (`thm_O3_succ_trans`)
- **Statement:** $\forall \alpha. \text{Trans}(\alpha) \implies \text{Trans}(\alpha \cup \{\alpha\})$
- **Proof:**
  1. Let $\alpha$ be given with $\text{Trans}(\alpha)$.
  2. We must show $\forall y. y \in (\alpha \cup \{\alpha\}) \implies y \subseteq (\alpha \cup \{\alpha\})$.
  3. Let $y \in \alpha \cup \{\alpha\}$.
  4. By definition of binary union, $y \in \alpha \lor y \in \{\alpha\}$.
  5. Case 1: $y \in \alpha$.
     - Since $\text{Trans}(\alpha)$, $y \subseteq \alpha$.
     - Since $\alpha \subseteq \alpha \cup \{\alpha\}$, by subset transitivity, $y \subseteq \alpha \cup \{\alpha\}$.
  6. Case 2: $y \in \{\alpha\}$.
     - By singleton definition, $y = \alpha$.
     - Since $\alpha \subseteq \alpha \cup \{\alpha\}$, we have $y \subseteq \alpha \cup \{\alpha\}$.
  7. In both cases, $y \subseteq \alpha \cup \{\alpha\}$.
  8. By universal generalization on $y$, $\text{Trans}(\alpha \cup \{\alpha\})$. $\blacksquare$

---

### Theorem O4: Successor of Ordinal is an Ordinal (`thm_O4_succ_ord`)
- **Statement:** $\forall \alpha. \text{isSet}(\alpha) \land \text{Ord}(\alpha) \implies \text{Ord}(\alpha \cup \{\alpha\}) \land (\alpha \cup \{\alpha\}) \in \text{On}$
- **Proof:**
  1. Let $\alpha$ be a set such that $\text{Ord}(\alpha)$.
  2. By definition of $\text{Ord}(\alpha)$, we have:
     (a) $\text{Trans}(\alpha)$
     (b) $\forall B \in \alpha. \text{Trans}(B)$.
  3. By Theorem O3, $\text{Trans}(\alpha \cup \{\alpha\})$.
  4. Now let $z \in \alpha \cup \{\alpha\}$. We must show $\text{Trans}(z)$.
  5. Either $z \in \alpha$ or $z = \alpha$.
     - If $z \in \alpha$, then $\text{Trans}(z)$ by 2(b).
     - If $z = \alpha$, then $\text{Trans}(z)$ by 2(a).
  6. Thus $\forall z \in (\alpha \cup \{\alpha\}). \text{Trans}(z)$.
  7. Combining with (3), $\text{Ord}(\alpha \cup \{\alpha\})$.
  8. Since $\alpha$ is a set, $\{\alpha\}$ is a set (Pairing), and $\alpha \cup \{\alpha\}$ is a set (Union).
  9. Therefore $(\alpha \cup \{\alpha\}) \in \text{On}$. $\blacksquare$

---

### Theorem O5: Elements of an Ordinal are Ordinals (`thm_O5_ord_heredity`)
- **Statement:** $\forall \alpha. \text{Ord}(\alpha) \implies \forall \beta \in \alpha. \text{Ord}(\beta)$
- **Proof:**
  1. Let $\alpha$ be an ordinal, and let $\beta \in \alpha$.
  2. We must show $\text{Ord}(\beta)$, which means:
     (a) $\text{Trans}(\beta)$
     (b) $\forall \gamma \in \beta. \text{Trans}(\gamma)$.
  3. Proof of (a): Since $\text{Ord}(\alpha)$ and $\beta \in \alpha$, by definition of $\text{Ord}$, $\text{Trans}(\beta)$ holds directly.
  4. Proof of (b): Let $\gamma \in \beta$.
     - Since $\text{Trans}(\alpha)$ and $\beta \in \alpha$, we have $\beta \subseteq \alpha$.
     - Since $\gamma \in \beta$, it follows that $\gamma \in \alpha$.
     - Since $\gamma \in \alpha$ and $\text{Ord}(\alpha)$, by definition of $\text{Ord}$, $\text{Trans}(\gamma)$ holds.
  5. Both (a) and (b) hold, so $\text{Ord}(\beta)$.
  6. Generalizing over $\beta \in \alpha$, every element of an ordinal is itself an ordinal. $\blacksquare$

---

### Theorem O6: Irreflexivity of Membership on Ordinals (`thm_O6_ord_irreflexive`)
- **Statement:** $\forall \alpha. \text{isSet}(\alpha) \land \text{Ord}(\alpha) \implies \alpha \notin \alpha$
- **Proof:**
  1. Assume $\alpha \in \alpha$ for some set $\alpha$.
  2. Consider the singleton set $S = \{\alpha\}$.
  3. Since $\alpha$ is a set, $S$ is a non-empty set.
  4. By the Axiom of Regularity, there exists $m \in S$ such that $m \cap S = \emptyset$.
  5. The only element of $S$ is $\alpha$, so $m = \alpha$.
  6. Hence $\alpha \cap \{\alpha\} = \emptyset$.
  7. But by assumption (1), $\alpha \in \alpha$.
  8. Therefore $\alpha \in \alpha \cap \{\alpha\}$, which means $\alpha \cap \{\alpha\} \neq \emptyset$.
  9. Contradiction between (6) and (8).
  10. By *reductio ad absurdum*, $\alpha \notin \alpha$. $\blacksquare$

---

### Theorem O7: Asymmetry of Membership on Ordinals (`thm_O7_ord_asymmetric`)
- **Statement:** $\forall \alpha, \beta. \alpha \in \beta \implies \beta \notin \alpha$
- **Proof:**
  1. Assume $\alpha \in \beta$ and $\beta \in \alpha$.
  2. Form the unordered pair $S = \{\alpha, \beta\}$.
  3. By the Axiom of Pairing, $S$ is a non-empty set.
  4. By the Axiom of Regularity, there exists $m \in S$ such that $m \cap S = \emptyset$.
  5. Case 1: $m = \alpha$. Then $\alpha \cap \{\alpha, \beta\} = \emptyset$.
     - But $\beta \in \alpha$ and $\beta \in S$, so $\beta \in \alpha \cap S$, contradiction!
  6. Case 2: $m = \beta$. Then $\beta \cap \{\alpha, \beta\} = \emptyset$.
     - But $\alpha \in \beta$ and $\alpha \in S$, so $\alpha \in \beta \cap S$, contradiction!
  7. In both cases a contradiction arises.
  8. Hence $\alpha \in \beta \implies \beta \notin \alpha$. $\blacksquare$

---

### Theorem O8: Intersection of Two Ordinals is an Ordinal (`thm_O8_ord_inter`)
- **Statement:** $\forall \alpha, \beta. \text{Ord}(\alpha) \land \text{Ord}(\beta) \implies \text{Ord}(\alpha \cap \beta)$
- **Proof:**
  1. Let $\alpha, \beta$ be ordinals. We must show $\text{Trans}(\alpha \cap \beta)$ and every element is transitive.
  2. Transitivity: Let $x \in y$ and $y \in \alpha \cap \beta$.
     - Then $y \in \alpha$ and $y \in \beta$.
     - Since $\text{Trans}(\alpha)$, $x \in \alpha$.
     - Since $\text{Trans}(\beta)$, $x \in \beta$.
     - Hence $x \in \alpha \cap \beta$. Thus $\text{Trans}(\alpha \cap \beta)$.
  3. Elements: Let $z \in \alpha \cap \beta$.
     - Then $z \in \alpha$.
     - Since $\text{Ord}(\alpha)$, $\text{Trans}(z)$.
  4. Therefore $\text{Ord}(\alpha \cap \beta)$. $\blacksquare$

---

### Theorem O9: Strict Subset Between Ordinals Implies Membership (`thm_O9_ord_ssub_in`)
- **Statement:** $\forall \alpha, \beta. \text{Ord}(\alpha) \land \text{Ord}(\beta) \land \alpha \subsetneq \beta \implies \alpha \in \beta$
- **Proof:**
  1. Assume $\text{Ord}(\alpha)$, $\text{Ord}(\beta)$, and $\alpha \subsetneq \beta$.
  2. The difference set $D = \beta \setminus \alpha$ is non-empty.
  3. By Regularity on $D$, there exists an $\in$-minimal element $\gamma \in D$ such that $\gamma \cap D = \emptyset$.
  4. Since $\gamma \in \beta$ and $\text{Ord}(\beta)$, $\gamma$ is an ordinal and $\gamma \subseteq \beta$.
  5. We claim $\gamma = \alpha$:
     (a) Show $\gamma \subseteq \alpha$: Let $x \in \gamma$.
         - Since $\gamma \in \beta$ and $\text{Trans}(\beta)$, $x \in \beta$.
         - If $x \in D = \beta \setminus \alpha$, then $x \in \gamma \cap D$, contradicting $\gamma \cap D = \emptyset$.
         - Hence $x \notin D$, so $x \in \alpha$. Thus $\gamma \subseteq \alpha$.
     (b) Show $\alpha \subseteq \gamma$:
         - Let $y \in \alpha$.
         - Since $\gamma \in \beta$, both $\gamma, y \in \beta$, so both are ordinals.
         - By ordinal trichotomy on elements, if $\gamma \in y$, since $\alpha$ is transitive, $\gamma \in \alpha$, contradicting $\gamma \in D = \beta \setminus \alpha$.
         - If $y = \gamma$, then $\gamma \in \alpha$, contradiction.
         - Thus $y \in \gamma$. Hence $\alpha \subseteq \gamma$.
  6. From (a) and (b), $\gamma = \alpha$.
  7. Since $\gamma \in \beta$, it follows that $\alpha \in \beta$. $\blacksquare$

---

### Theorem O10: Trichotomy of Ordinals (`thm_O10_ord_trichotomy`)
- **Statement:** $\forall \alpha, \beta. \text{isSet}(\alpha) \land \text{isSet}(\beta) \land \text{Ord}(\alpha) \land \text{Ord}(\beta) \implies (\alpha \in \beta \lor \alpha = \beta \lor \beta \in \alpha)$
- **Proof:**
  1. Let $\alpha, \beta$ be set ordinals.
  2. Consider $\delta = \alpha \cap \beta$.
  3. By Theorem O8, $\delta$ is an ordinal.
  4. Clearly $\delta \subseteq \alpha$ and $\delta \subseteq \beta$.
  5. Case 1: $\delta = \alpha$.
     - Then $\alpha \subseteq \beta$.
     - If $\alpha = \beta$, done.
     - If $\alpha \subsetneq \beta$, by Theorem O9, $\alpha \in \beta$. Done.
  6. Case 2: $\delta = \beta$.
     - Then $\beta \subseteq \alpha$.
     - If $\beta = \alpha$, done.
     - If $\beta \subsetneq \alpha$, by Theorem O9, $\beta \in \alpha$. Done.
  7. Case 3: $\delta \subsetneq \alpha$ and $\delta \subsetneq \beta$.
     - By Theorem O9, $\delta \in \alpha$ and $\delta \in \beta$.
     - Therefore $\delta \in \alpha \cap \beta = \delta$.
     - This gives $\delta \in \delta$, which contradicts Theorem O6 (Irreflexivity).
     - Hence Case 3 is impossible.
  8. Therefore, exactly one holds: $\alpha \in \beta \lor \alpha = \beta \lor \beta \in \alpha$. $\blacksquare$

---

### Theorem O11: Class of All Ordinals is Transitive & Ordinal Class (`thm_O11_on_ord_class`)
- **Statement:** $\vdash \text{Trans}(\text{On}) \land \forall \alpha \in \text{On}. \text{Ord}(\alpha)$
- **Proof:**
  1. Show $\text{Trans}(\text{On})$:
     - Let $\alpha \in \text{On}$. By definition of $\text{On}$, $\text{isSet}(\alpha) \land \text{Ord}(\alpha)$.
     - We must show $\alpha \subseteq \text{On}$. Let $\beta \in \alpha$.
     - Since $\alpha$ is a set, by the Axiom of Heredity, $\beta$ is a set ($\text{isSet}(\beta)$).
     - By Theorem O5 (Heredity), $\text{Ord}(\beta)$.
     - By definition of $\text{On}$, $\beta \in \text{On}$.
     - Thus $\alpha \subseteq \text{On}$.
     - Since $\alpha$ was arbitrary, $\text{Trans}(\text{On})$.
  2. Every element $\alpha \in \text{On}$ satisfies $\text{Ord}(\alpha)$ by construction of $\text{On}$.
  3. Hence $\text{On}$ is an ordinal class. $\blacksquare$

---

### Theorem O12: Burali-Forti Paradox — $\text{On}$ is a Proper Class (`thm_O12_burali_forti`)
- **Statement:** $\vdash \neg \text{isSet}(\text{On}) \land \text{isProper}(\text{On})$
- **Proof:**
  1. Assume for contradiction that $\text{isSet}(\text{On})$.
  2. By Theorem O11, $\text{On}$ is an ordinal class.
  3. Since $\text{isSet}(\text{On})$ and $\text{OrdClass}(\text{On})$, $\text{On}$ is an ordinal set ($\text{Ord}(\text{On})$).
  4. By definition of $\text{On} = \{x \mid \text{isSet}(x) \land \text{Ord}(x)\}$:
     $$\text{On} \in \text{On} \iff \text{isSet}(\text{On}) \land \text{Ord}(\text{On})$$
  5. Both conjuncts on the RHS hold, so $\text{On} \in \text{On}$.
  6. But by Theorem O6 (Irreflexivity), for any set ordinal $\alpha$, $\alpha \notin \alpha$.
  7. Specializing to $\alpha := \text{On}$ yields $\text{On} \notin \text{On}$.
  8. Contradiction: $\text{On} \in \text{On} \land \text{On} \notin \text{On}$.
  9. By *reductio ad absurdum*, the assumption $\text{isSet}(\text{On})$ is false.
  10. Therefore $\neg \text{isSet}(\text{On})$, meaning $\text{On}$ is a proper class ($\text{isProper}(\text{On})$). $\blacksquare$

---

## 3. Poly/ML Typed Verification Mapping

Every theorem above corresponds to a typed program verified in [`program/ordinal_theorems.ML`](file:///botworkspace/set_theory_prover/program/ordinal_theorems.ML):

| Theorem | Name | Mathematical Statement | Proof Term Construction in Obelisk |
| :--- | :--- | :--- | :--- |
| **O1** | `thm_O1_empty_trans` | $\text{Trans}(\emptyset)$ | Universal implication abstraction with Ex Falso on $\bot$ |
| **O2** | `thm_O2_empty_ord` | $\text{Ord}(\emptyset)$ | Dependent pair `(thm_O1, vacuous_elements_proof)` |
| **O3** | `thm_O3_succ_trans` | $\text{Trans}(\alpha) \to \text{Trans}(\alpha^+)$ | Disjunction elimination on $y \in \alpha \lor y = \alpha$ |
| **O4** | `thm_O4_succ_ord` | $\text{Ord}(\alpha) \to \text{Ord}(\alpha^+)$ | Pairing of `thm_O3` with element transitivity |
| **O5** | `thm_O5_ord_heredity` | $\text{Ord}(\alpha) \to \beta \in \alpha \to \text{Ord}(\beta)$ | Extraction of `snd (fst (snd ord_alpha))` |
| **O6** | `thm_O6_ord_irreflexive` | $\text{Ord}(\alpha) \to \alpha \notin \alpha$ | Regularity on $\{\alpha\}$ producing $\bot$ |
| **O7** | `thm_O7_ord_asymmetric` | $\alpha \in \beta \to \beta \notin \alpha$ | Regularity on $\{\alpha, \beta\}$ |
| **O8** | `thm_O8_ord_inter` | $\text{Ord}(\alpha) \land \text{Ord}(\beta) \to \text{Ord}(\alpha \cap \beta)$ | Conjunction of sub-transitivity on intersection |
| **O9** | `thm_O9_ord_ssub_in` | $\alpha \subsetneq \beta \to \alpha \in \beta$ | Minimality of $\beta \setminus \alpha$ under Regularity |
| **O10** | `thm_O10_ord_trichotomy`| $\alpha \in \beta \lor \alpha = \beta \lor \beta \in \alpha$ | Trichotomy case analysis on $\alpha \cap \beta$ |
| **O11** | `thm_O11_on_ord_class` | $\text{Trans}(\text{On}) \land \forall \alpha \in \text{On}. \text{Ord}(\alpha)$| Heredity of set-hood and ordinality |
| **O12** | `thm_O12_burali_forti` | $\neg \text{isSet}(\text{On}) \land \text{isProper}(\text{On})$ | Refutation: $\text{isSet}(\text{On}) \to \text{On} \in \text{On} \to \bot$ |
