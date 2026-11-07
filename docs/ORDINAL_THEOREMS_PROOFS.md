# Formal Mathematical Proofs of Fundamental Theorems on Ordinals

**Repository:** `set_theory_prover`  
**File:** `formal/ORDINAL_THEOREMS_PROOFS.md` (exported to `docs/ORDINAL_THEOREMS_PROOFS.md`)  
**Theory:** Von Neumann–Bernays–Gödel (NBG) / Morse–Kelley (MK) Class Theory with Regularity (`AxmRegularity`, `3.14`).  
**Mathematical Standards:** Classical First-Order Logic with Identity, Class Comprehension (`RulClassComprehension`, `3.01`), and Acyclic Proof Dependencies.

---

## 1. Foundational Definitions & Two Valid Settings

Following `program/types/foundations.ML`, `generated/theory_db.json`, and `program/ordinal_theorems.ML`, every concept below is explicitly mapped to its catalog semantic ID:

1. **Subclass Relation (`DefSubclass`, `3.03`):**
   $$A \subseteq B \iff \forall z.\;(z \in A \implies z \in B)$$
   Strict subclass (`StrictSub`): $A \subsetneq B \iff (A \subseteq B \land A \neq B)$.

2. **Transitive Class (`DefTransitiveClass`, `3.15`):**
   A class $A$ is transitive if every element of $A$ is a subclass of $A$:
   $$\operatorname{Trans}(A) \iff \forall B.\;(B \in A \implies B \subseteq A) \iff \forall x, y.\;(x \in y \land y \in A \implies x \in A)$$

3. **Two Ordinal Definitions Across the Codebase (`DefOrdinalClass`, `3.16` vs. Book `150_ordinals.tex`):**
   - **Route A — Catalog Short Definition (`DefOrdinalClass`, `3.16`, used in `program/ordinal_theorems.ML`):**
     A class $A : \mathrm{Class}$ (whether a set or a proper class) is an ordinal class if $A$ is transitive and every element of $A$ is transitive:
     $$\operatorname{Ord}(A) \iff \operatorname{Trans}(A) \land \forall B.\;(B \in A \implies \operatorname{Trans}(B)).$$
     Under **Class Regularity** (`AxmRegularity`, `3.14`), this two-clause condition implies strict $\in$-well-ordering and element linearity (`lem_ord_elem_linearity`, proved below before Theorem O9).
   - **Route B — Book General Well-Ordered Definition (`150_ordinals.tex`):**
     The book's general ordinal definition explicitly includes strict $\in$-well-ordering (and therefore linearity on members) inside the definition of an ordinal class. In Route B, the proper-transitive-subclass lemma (O9) uses the local linearity built into the ordinal hypothesis without importing Regularity or a future comparison theorem (O10), and comparing $\alpha \cap \beta$ via O9 then yields trichotomy (O10) non-circularly.
   - **Set-Ordinal Predicate vs. Class-Ordinal Predicate:**
     In `docs/axioms/ordinals.md`, $\operatorname{Ord}_{\mathrm{set}}(\alpha)$ restricts attention to **set ordinals** ($\alpha \in \mathrm{On}$), whereas `DefOrdinalClass` (`3.16`) and `program/ordinal_theorems.ML` apply $\operatorname{Ord}(A)$ to arbitrary classes $A : \mathrm{Class}$ (so both $\operatorname{Ord}(\alpha)$ for $\alpha \in \mathrm{On}$ and $\operatorname{Ord}(\mathrm{On})$ hold). Below, every theorem explicitly states whether its quantifiers range over arbitrary ordinal classes (`Ord(A)`) or set ordinals (`isSet(a) /\ Ord(a)`).

4. **Class of All Set Ordinals $\mathrm{On}$ (`DefOrdinals`, `3.20`):**
   $$\mathrm{On} = \{x \mid \operatorname{isSet}(x) \land \operatorname{Ord}(x)\}$$
   By `RulClassComprehension` (`3.01`), $x \in \mathrm{On} \iff \operatorname{isSet}(x) \land \operatorname{Ord}(x)$.

5. **Ordinal Successor (`SuccOrd`):**
   $$\alpha^+ = \alpha \cup \{\alpha\}$$

6. **Axiom of Regularity / Class Foundedness (`AxmRegularity`, `3.14`):**
   - **Catalog Inductive Form (`AxmRegularity`, `3.14`):**
     $$\forall X : \mathrm{Class}.\;\bigl(\mathcal{P}(X) \subseteq X \implies V \subseteq X\bigr).$$
   - **Equivalent Class-Foundedness Form:**
     Substituting $X = V \setminus D$ for any nonempty class $D \subseteq V$ ($D \neq \emptyset$) gives $\neg(V \subseteq V \setminus D)$, hence $\neg(\mathcal{P}(V \setminus D) \subseteq V \setminus D)$, which yields a set $m \in D$ such that $m \subseteq V \setminus D$, i.e., $m \cap D = \emptyset$:
     $$\forall D : \mathrm{Class}.\;\bigl(D \neq \emptyset \implies \exists m \in D.\;m \cap D = \emptyset\bigr).$$
     *Crucial Scope Note:* In Theorem O9, when $\beta$ is a proper ordinal class (such as $\beta = \mathrm{On}$), the difference $D = \beta \setminus \alpha$ need not be a set. Using **Class Foundedness** on the nonempty class $D = \beta \setminus \alpha$ avoids the false assumption that $\beta \setminus \alpha$ is a set.

---

## 2. Step-by-Step Formal Proofs (Acyclic Dependency DAG)

**Dependency Graph Summary:**
- $\mathrm{O1} \to \mathrm{O2}$
- $\mathrm{O3} \to \mathrm{O4}$
- $\mathrm{O5}$ (directly from `DefOrdinalClass` `3.16`)
- $\mathrm{O6}, \mathrm{O7}$ (directly from `AxmRegularity` `3.14`)
- $\mathrm{O8}$ (directly from `DefOrdinalClass` `3.16`)
- $\mathrm{L1}$ (`lem_ord_elem_linearity`): proved from `AxmRegularity` (`3.14`), $\mathrm{O5}$, and $\mathrm{O6}$ — **no dependency on $\mathrm{O9}$ or $\mathrm{O10}$**
- $\mathrm{O9}$ (`thm_O9_ord_ssub_in`): proved from `AxmRegularity` (`3.14`), $\mathrm{O5}$, and $\mathrm{L1}$ — **no dependency on $\mathrm{O10}$**
- $\mathrm{O10}$ (`thm_O10_ord_trichotomy`): proved from $\mathrm{O8}$, $\mathrm{O9}$, and $\mathrm{O6}$
- $\mathrm{O11}$ (`thm_O11_on_ord_class`): proved from $\mathrm{O5}$ and `DefOrdinals` (`3.20`)
- $\mathrm{O12}$ (`thm_O12_burali_forti`): proved from $\mathrm{O11}$ and $\mathrm{O6}$

---

### Theorem O1: Empty Set is Transitive (`thm_O1_empty_trans`)
- **Domain:** Class constant $\emptyset : \mathrm{Class}$.
- **Statement:** $\vdash \forall B : \mathrm{Class}.\;(B \in \emptyset \implies B \subseteq \emptyset)$ (i.e., $\operatorname{Trans}(\emptyset)$).
- **Proof:**
  1. Let $B : \mathrm{Class}$ be arbitrary and assume $B \in \emptyset$.
  2. By `ax_empty_no_elements` (`DefEmptySet`, `3.05`), $\forall z.\;z \in \emptyset \implies \bot$. Specializing to $z := B$ yields $\bot$.
  3. By Principle of Explosion (`ax_false_elim`), $\bot \implies B \subseteq \emptyset$.
  4. Discharging the assumption and generalizing over $B$, $\operatorname{Trans}(\emptyset)$ holds. $\blacksquare$

---

### Theorem O2: Empty Set is an Ordinal (`thm_O2_empty_ord`)
- **Domain:** Class constant $\emptyset : \mathrm{Class}$.
- **Statement:** $\vdash \operatorname{Trans}(\emptyset) \land \forall B : \mathrm{Class}.\;(B \in \emptyset \implies \operatorname{Trans}(B))$ (i.e., $\operatorname{Ord}(\emptyset)$).
- **Proof:**
  1. By Theorem O1, $\operatorname{Trans}(\emptyset)$ holds.
  2. Let $B : \mathrm{Class}$ be arbitrary and assume $B \in \emptyset$. By `ax_empty_no_elements` and `ax_false_elim`, $\operatorname{Trans}(B)$ holds vacuously.
  3. Pairing (1) and (2) gives $\operatorname{Ord}(\emptyset)$. Since $\operatorname{isSet}(\emptyset)$ (`AxmEmptySetIsSet`), $\emptyset \in \mathrm{On}$ also follows by `DefOrdinals` (`3.20`). $\blacksquare$

---

### Theorem O3: Successor of a Transitive Class is Transitive (`thm_O3_succ_trans`)
- **Domain:** Arbitrary class $\alpha : \mathrm{Class}$.
- **Statement:** $\vdash \forall \alpha : \mathrm{Class}.\;\bigl(\operatorname{Trans}(\alpha) \implies \operatorname{Trans}(\alpha \cup \{\alpha\})\bigr)$.
- **Proof:**
  1. Let $\alpha : \mathrm{Class}$ satisfy $\operatorname{Trans}(\alpha)$, and let $y \in \alpha \cup \{\alpha\}$.
  2. By binary union (`DefBinaryUnion`, `3.09`), $y \in \alpha \lor y \in \{\alpha\}$.
  3. Case 1 ($y \in \alpha$): Since $\operatorname{Trans}(\alpha)$, $y \subseteq \alpha \subseteq \alpha \cup \{\alpha\}$.
  4. Case 2 ($y \in \{\alpha\}$): By singleton elimination (`DefSingletonSet`, `3.48`), $y = \alpha \subseteq \alpha \cup \{\alpha\}$.
  5. In both cases $y \subseteq \alpha \cup \{\alpha\}$, so $\operatorname{Trans}(\alpha \cup \{\alpha\})$. $\blacksquare$

---

### Theorem O4: Successor of a Set Ordinal is an Ordinal (`thm_O4_succ_ord`)
- **Domain:** Set ordinals ($\operatorname{isSet}(\alpha) \land \operatorname{Ord}(\alpha)$).
  *(Note: The explicit $\operatorname{isSet}(\alpha)$ guard is required so that $\alpha \in \{\alpha\}$ holds under guarded singleton comprehension `DefSingletonSet` `3.48`.)*
- **Statement:** $\vdash \forall \alpha : \mathrm{Class}.\;\bigl(\operatorname{isSet}(\alpha) \land \operatorname{Ord}(\alpha) \implies \operatorname{Ord}(\alpha \cup \{\alpha\})\bigr)$.
- **Proof:**
  1. Let $\alpha : \mathrm{Class}$ satisfy $\operatorname{isSet}(\alpha)$ and $\operatorname{Ord}(\alpha)$.
  2. By `DefOrdinalClass` (`3.16`), $\operatorname{Trans}(\alpha)$ and $\forall B \in \alpha.\;\operatorname{Trans}(B)$.
  3. By Theorem O3, $\operatorname{Trans}(\alpha \cup \{\alpha\})$.
  4. For any $z \in \alpha \cup \{\alpha\}$, either $z \in \alpha$ (giving $\operatorname{Trans}(z)$ by 2) or $z \in \{\alpha\}$ (giving $z = \alpha$ and hence $\operatorname{Trans}(z)$ by 2).
  5. Thus $\operatorname{Ord}(\alpha \cup \{\alpha\})$. Since $\alpha$ is a set, $\{\alpha\}$ and $\alpha \cup \{\alpha\}$ are sets, so $(\alpha \cup \{\alpha\}) \in \mathrm{On}$. $\blacksquare$

---

### Theorem O5: Elements of an Ordinal Class are Ordinals (`thm_O5_ord_heredity`)
- **Domain:** Arbitrary ordinal class $\alpha : \mathrm{Class}$ and element $\beta : \mathrm{Class}$.
- **Statement:** $\vdash \forall \alpha, \beta : \mathrm{Class}.\;\bigl(\operatorname{Ord}(\alpha) \implies (\beta \in \alpha \implies \operatorname{Ord}(\beta))\bigr)$.
- **Proof:**
  1. Assume $\operatorname{Ord}(\alpha)$ and $\beta \in \alpha$.
  2. Since $\operatorname{Ord}(\alpha)$ and $\beta \in \alpha$, `DefOrdinalClass` (`3.16`) directly gives $\operatorname{Trans}(\beta)$.
  3. Let $\gamma \in \beta$. Since $\operatorname{Trans}(\alpha)$ and $\beta \in \alpha$, we have $\beta \subseteq \alpha$, so $\gamma \in \alpha$.
  4. Since $\gamma \in \alpha$ and $\operatorname{Ord}(\alpha)$, `DefOrdinalClass` (`3.16`) gives $\operatorname{Trans}(\gamma)$.
  5. Thus $\operatorname{Ord}(\beta)$. Moreover, since $\beta \in \alpha$, $\operatorname{isSet}(\beta)$ holds automatically by `DefIsSet`, so $\beta \in \mathrm{On}$. $\blacksquare$

---

### Theorem O6: Irreflexivity of Membership on Sets (`thm_O6_ord_irreflexive`)
- **Domain:** Arbitrary set $\alpha : \mathrm{Class}$ ($\operatorname{isSet}(\alpha)$).
- **Statement:** $\vdash \forall \alpha : \mathrm{Class}.\;\bigl(\operatorname{isSet}(\alpha) \implies (\alpha \in \alpha \implies \bot)\bigr)$.
- **Proof:**
  1. Assume $\operatorname{isSet}(\alpha)$ and $\alpha \in \alpha$.
  2. Since $\operatorname{isSet}(\alpha)$, the singleton $S = \{\alpha\}$ contains $\alpha$ (`DefSingletonSet`, `3.48`), so $S \neq \emptyset$.
  3. By Class Foundedness (`AxmRegularity`, `3.14`) applied to $S$, there exists $m \in S$ with $m \cap S = \emptyset$.
  4. Since $m \in \{\alpha\}$, $m = \alpha$, so $\alpha \cap \{\alpha\} = \emptyset$.
  5. Yet $\alpha \in \alpha$ and $\alpha \in \{\alpha\}$, so $\alpha \in \alpha \cap \{\alpha\}$, a contradiction ($\bot$). $\blacksquare$

---

### Theorem O7: Asymmetry of Membership (`thm_O7_ord_asymmetric`)
- **Domain:** Arbitrary classes $\alpha, \beta : \mathrm{Class}$.
- **Statement:** $\vdash \forall \alpha, \beta : \mathrm{Class}.\;\bigl(\alpha \in \beta \implies (\beta \in \alpha \implies \bot)\bigr)$.
- **Proof:**
  1. Assume $\alpha \in \beta$ and $\beta \in \alpha$. Since each is a member of a class, both $\operatorname{isSet}(\alpha)$ and $\operatorname{isSet}(\beta)$ hold.
  2. Form the unordered pair $S = \{\alpha, \beta\} \neq \emptyset$ (`DefUnorderedPair`, `3.49`).
  3. By Class Foundedness (`AxmRegularity`, `3.14`) on $S$, there exists $m \in S$ with $m \cap S = \emptyset$.
  4. If $m = \alpha$, then $\beta \in \alpha \cap S$ contradicts $\alpha \cap S = \emptyset$; if $m = \beta$, then $\alpha \in \beta \cap S$ contradicts $\beta \cap S = \emptyset$. Thus $\bot$. $\blacksquare$

---

### Theorem O8: Intersection of Two Ordinal Classes is an Ordinal Class (`thm_O8_ord_inter`)
- **Domain:** Arbitrary ordinal classes $\alpha, \beta : \mathrm{Class}$ (sets or proper classes).
- **Statement:** $\vdash \forall \alpha, \beta : \mathrm{Class}.\;\bigl(\operatorname{Ord}(\alpha) \land \operatorname{Ord}(\beta) \implies \operatorname{Ord}(\alpha \cap \beta)\bigr)$.
- **Proof:**
  1. Assume $\operatorname{Ord}(\alpha)$ and $\operatorname{Ord}(\beta)$.
  2. If $x \in y \in \alpha \cap \beta$, then $y \in \alpha \implies x \in \alpha$ and $y \in \beta \implies x \in \beta$, so $x \in \alpha \cap \beta$. Thus $\operatorname{Trans}(\alpha \cap \beta)$.
  3. If $z \in \alpha \cap \beta$, then $z \in \alpha$, so $\operatorname{Trans}(z)$ follows from $\operatorname{Ord}(\alpha)$.
  4. Hence $\operatorname{Ord}(\alpha \cap \beta)$. $\blacksquare$

---

### Lemma L1: Independent Founded Element-Linearity (`lem_ord_elem_linearity`)
- **Purpose:** Bridges the shorter definition `DefOrdinalClass` (`3.16`) to element comparability under `AxmRegularity` (`3.14`) **before** Theorem O9, eliminating any circularity between O9 and O10.
- **Dependencies:** `AxmRegularity` (`3.14`), `AxmExtensionality` (`3.02`), Theorem O5 (`thm_O5_ord_heredity`), and Theorem O6 (`thm_O6_ord_irreflexive`). **Does not use O9 or O10.**
- **Domain:** Set ordinals $x, y : \mathrm{Class}$ ($\operatorname{isSet}(x) \land \operatorname{isSet}(y) \land \operatorname{Ord}(x) \land \operatorname{Ord}(y)$, i.e., $x, y \in \mathrm{On}$).
- **Statement:**
  $$\vdash \forall x, y : \mathrm{Class}.\;\bigl(\operatorname{isSet}(x) \land \operatorname{isSet}(y) \land \operatorname{Ord}(x) \land \operatorname{Ord}(y) \implies (x \in y \lor x = y \lor y \in x)\bigr).$$
- **Proof (Double Minimal-Counterexample Induction via Class Regularity `3.14`):**
  1. Define the class of first-coordinate counterexamples:
     $$B_1 = \bigl\{x \in \mathrm{On} \;\big|\; \exists y \in \mathrm{On}.\;\neg(x \in y \lor x = y \lor y \in x)\bigr\}.$$
  2. Suppose for contradiction that $B_1 \neq \emptyset$. By Class Foundedness (`AxmRegularity`, `3.14`) applied to $B_1$, there exists an $\in$-minimal set ordinal $x_0 \in B_1$ such that $x_0 \cap B_1 = \emptyset$.
  3. Since $x_0 \in B_1$, the class of second-coordinate counterexamples for $x_0$,
     $$B_2 = \bigl\{y \in \mathrm{On} \;\big|\; \neg(x_0 \in y \lor x_0 = y \lor y \in x_0)\bigr\},$$
     is nonempty ($B_2 \neq \emptyset$). By Class Foundedness (`AxmRegularity`, `3.14`) applied to $B_2$, there exists an $\in$-minimal set ordinal $y_0 \in B_2$ such that $y_0 \cap B_2 = \emptyset$.
  4. **First inclusion ($x_0 \subseteq y_0$):** Let $u \in x_0$.
     - Since $x_0 \in \mathrm{On}$, Theorem O5 (`thm_O5_ord_heredity`) gives $u \in \mathrm{On}$.
     - Since $x_0 \cap B_1 = \emptyset$, we have $u \notin B_1$. Therefore $u$ is comparable with every set ordinal, and in particular with $y_0 \in \mathrm{On}$:
       $$u \in y_0 \;\lor\; u = y_0 \;\lor\; y_0 \in u.$$
     - If $u = y_0$, then $y_0 = u \in x_0$, contradicting $y_0 \in B_2$.
     - If $y_0 \in u$, then since $u \in x_0$ and $\operatorname{Trans}(x_0)$, we obtain $y_0 \in x_0$, again contradicting $y_0 \in B_2$.
     - Hence $u \in y_0$. Since $u \in x_0$ was arbitrary, $x_0 \subseteq y_0$.
  5. **Second inclusion ($y_0 \subseteq x_0$):** Let $v \in y_0$.
     - By Theorem O5 (`thm_O5_ord_heredity`), $v \in \mathrm{On}$.
     - Since $y_0 \cap B_2 = \emptyset$, we have $v \notin B_2$, so $x_0$ is comparable with $v$:
       $$x_0 \in v \;\lor\; x_0 = v \;\lor\; v \in x_0.$$
     - If $x_0 = v$, then $x_0 = v \in y_0$, contradicting $y_0 \in B_2$.
     - If $x_0 \in v$, then since $v \in y_0$ and $\operatorname{Trans}(y_0)$, we obtain $x_0 \in y_0$, contradicting $y_0 \in B_2$.
     - Hence $v \in x_0$. Since $v \in y_0$ was arbitrary, $y_0 \subseteq x_0$.
  6. **Contradiction:** By Extensionality (`AxmExtensionality`, `3.02`) from (4) and (5), $x_0 = y_0$, which directly contradicts $y_0 \in B_2$ (and O6 Irreflexivity prevents any self-membership).
  7. Therefore $B_1 = \emptyset$, proving $x \in y \lor x = y \lor y \in x$ for all set ordinals $x, y \in \mathrm{On}$. $\blacksquare$

---

### Theorem O9: Strict Subclass Between Ordinal Classes Implies Membership (`thm_O9_ord_ssub_in`)
- **Dependencies:** `AxmRegularity` (`3.14` in Class-Foundedness form), Theorem O5 (`thm_O5_ord_heredity`), and **Lemma L1 (`lem_ord_elem_linearity`)**. **Does NOT depend on Theorem O10.**
- **Domain:** Arbitrary ordinal classes $\alpha, \beta : \mathrm{Class}$ (valid both when $\alpha, \beta$ are set ordinals and when $\beta$ is a proper ordinal class such as $\mathrm{On}$; tested separately as `thm_O9_set_instance` and `thm_O9_proper_on_instance` in `program/ordinal_theorems.ML`).
- **Statement:**
  $$\vdash \forall \alpha, \beta : \mathrm{Class}.\;\bigl(\operatorname{Ord}(\alpha) \land \operatorname{Ord}(\beta) \land \alpha \subsetneq \beta \implies \alpha \in \beta\bigr).$$
- **Proof:**
  1. Assume $\operatorname{Ord}(\alpha)$, $\operatorname{Ord}(\beta)$, and $\alpha \subsetneq \beta$.
  2. Because $\alpha \subseteq \beta$ and $\alpha \neq \beta$, the difference **class** $D = \beta \setminus \alpha = \{x \in \beta \mid x \notin \alpha\}$ is nonempty ($D \neq \emptyset$). *(Note: $D$ is not assumed to be a set; when $\beta = \mathrm{On}$ is a proper class, $D$ is a proper class.)*
  3. By **Class Foundedness (`AxmRegularity`, `3.14`)** applied to the nonempty class $D$, there exists an $\in$-minimal element $\gamma \in D$ such that $\gamma \cap D = \emptyset$.
  4. Since $\gamma \in D \subseteq \beta$, $\gamma$ is a member of $\beta$, so $\operatorname{isSet}(\gamma)$ holds by `DefIsSet`, and $\operatorname{Ord}(\gamma)$ holds by Theorem O5 (`thm_O5_ord_heredity`).
  5. We prove $\gamma = \alpha$ by mutual inclusion:
     - **(a) $\gamma \subseteq \alpha$:** Let $x \in \gamma$. Since $\gamma \in \beta$ and $\operatorname{Trans}(\beta)$, we have $x \in \beta$. If $x \notin \alpha$, then $x \in \beta \setminus \alpha = D$, so $x \in \gamma \cap D$, contradicting $\gamma \cap D = \emptyset$. Hence $x \in \alpha$, proving $\gamma \subseteq \alpha$.
     - **(b) $\alpha \subseteq \gamma$:** Let $y \in \alpha$. Since $y \in \alpha$ and $\operatorname{Ord}(\alpha)$, we have $\operatorname{isSet}(y)$ (by `DefIsSet`) and $\operatorname{Ord}(y)$ (by Theorem O5). Since both $y$ and $\gamma$ are **set ordinals**, we apply **Lemma L1 (`lem_ord_elem_linearity`)** to $y$ and $\gamma$:
       $$y \in \gamma \;\lor\; y = \gamma \;\lor\; \gamma \in y.$$
       - If $y = \gamma$, then $\gamma = y \in \alpha$, contradicting $\gamma \in D = \beta \setminus \alpha$.
       - If $\gamma \in y$, then since $y \in \alpha$ and $\operatorname{Trans}(\alpha)$, we get $\gamma \in \alpha$, again contradicting $\gamma \in D = \beta \setminus \alpha$.
       - Therefore $y \in \gamma$. Since $y \in \alpha$ was arbitrary, $\alpha \subseteq \gamma$.
  6. By Extensionality (`AxmExtensionality`, `3.02`), $\gamma = \alpha$.
  7. Since $\gamma \in \beta$, substituting $\gamma = \alpha$ yields $\alpha \in \beta$ (which also entails $\operatorname{isSet}(\alpha)$). $\blacksquare$

#### Explicit Specializations Verified in `program/ordinal_theorems.ML`:
- **Set-Ordinal Instance (`thm_O9_set_instance`):**
  $$\forall \alpha, \beta : \mathrm{Class}.\;\bigl(\operatorname{isSet}(\alpha) \land \operatorname{isSet}(\beta) \land \operatorname{Ord}(\alpha) \land \operatorname{Ord}(\beta) \land \alpha \subsetneq \beta \implies \alpha \in \beta\bigr).$$
- **Proper Ordinal-Class Instance (`thm_O9_proper_on_instance`, $\beta = \mathrm{On}$):**
  $$\forall \alpha : \mathrm{Class}.\;\bigl(\operatorname{Ord}(\alpha) \land \alpha \subsetneq \mathrm{On} \implies \alpha \in \mathrm{On}\bigr),$$
  showing that every proper transitive ordinal subclass of $\mathrm{On}$ is a set ordinal $\alpha \in \mathrm{On}$.

---

### Theorem O10: Trichotomy of Set Ordinals (`thm_O10_ord_trichotomy`)
- **Dependencies:** Theorem O8 (`thm_O8_ord_inter`), Theorem O9 (`thm_O9_ord_ssub_in`), and Theorem O6 (`thm_O6_ord_irreflexive`).
- **Domain:** Set ordinals $\alpha, \beta : \mathrm{Class}$ ($\operatorname{isSet}(\alpha) \land \operatorname{isSet}(\beta) \land \operatorname{Ord}(\alpha) \land \operatorname{Ord}(\beta)$).
- **Statement:**
  $$\vdash \forall \alpha, \beta : \mathrm{Class}.\;\bigl(\operatorname{isSet}(\alpha) \land \operatorname{isSet}(\beta) \land \operatorname{Ord}(\alpha) \land \operatorname{Ord}(\beta) \implies (\alpha \in \beta \lor \alpha = \beta \lor \beta \in \alpha)\bigr).$$
- **Proof (Intersection Method via O8, O9, and O6):**
  1. Let $\alpha, \beta$ be set ordinals and form $\delta = \alpha \cap \beta$.
  2. By Theorem O8 (`thm_O8_ord_inter`), $\operatorname{Ord}(\delta)$, and clearly $\delta \subseteq \alpha$ and $\delta \subseteq \beta$.
  3. **Case 1 ($\delta = \alpha$):** Then $\alpha \subseteq \beta$. Either $\alpha = \beta$, or $\alpha \subsetneq \beta$ (which by Theorem O9 gives $\alpha \in \beta$).
  4. **Case 2 ($\delta = \beta$):** Then $\beta \subseteq \alpha$. Either $\alpha = \beta$, or $\beta \subsetneq \alpha$ (which by Theorem O9 gives $\beta \in \alpha$).
  5. **Case 3 ($\delta \subsetneq \alpha$ and $\delta \subsetneq \beta$):**
     - By Theorem O9 applied to $(\delta, \alpha)$ and $(\delta, \beta)$, we obtain $\delta \in \alpha$ and $\delta \in \beta$.
     - Hence $\delta \in \alpha \cap \beta = \delta$ (and $\operatorname{isSet}(\delta)$ since $\delta \in \alpha$).
     - By Theorem O6 (`thm_O6_ord_irreflexive`), $\delta \in \delta \implies \bot$, ruling out Case 3.
  6. Thus $\alpha \in \beta \lor \alpha = \beta \lor \beta \in \alpha$. $\blacksquare$
  *(Note: For arbitrary ordinal classes $A, B$ including $\mathrm{On}$, the exact same intersection proof with O8, O9, and O6 establishes class-ordinal trichotomy $A \in B \lor A = B \lor B \in A$.)*

---

### Theorem O11: Class of All Set Ordinals is Transitive & an Ordinal Class (`thm_O11_on_ord_class`)
- **Catalog Correspondence:** `ThmOrdinalsOrdinalClass` (`3.21` / `DefOrdinals`, `3.20`).
- **Domain:** Proper class constant $\mathrm{On} : \mathrm{Class}$.
- **Statement:** $\vdash \operatorname{Trans}(\mathrm{On}) \land \forall \alpha \in \mathrm{On}.\;\operatorname{Ord}(\alpha)$ (and hence $\operatorname{Ord}(\mathrm{On})$).
- **Proof:**
  1. Let $\alpha \in \mathrm{On}$. By `DefOrdinals` (`3.20`), $\operatorname{isSet}(\alpha) \land \operatorname{Ord}(\alpha)$.
  2. Let $\beta \in \alpha$. Since $\beta$ is a member of $\alpha$, $\operatorname{isSet}(\beta)$ holds (`DefIsSet`), and by Theorem O5 (`thm_O5_ord_heredity`), $\operatorname{Ord}(\beta)$ holds.
  3. Thus $\beta \in \mathrm{On}$, showing $\alpha \subseteq \mathrm{On}$ and hence $\operatorname{Trans}(\mathrm{On})$.
  4. Moreover, every $\alpha \in \mathrm{On}$ satisfies $\operatorname{Ord}(\alpha)$ (and in particular $\operatorname{Trans}(\alpha)$), so $\operatorname{Ord}(\mathrm{On})$ holds by `DefOrdinalClass` (`3.16`). $\blacksquare$

---

### Theorem O12: Burali-Forti Theorem — $\mathrm{On}$ is a Proper Class (`thm_O12_burali_forti`)
- **Catalog Correspondence:** `ThmOrdinalsProperClass` (`3.22`).
- **Dependencies:** Theorem O11 (`thm_O11_on_ord_class`) and Theorem O6 (`thm_O6_ord_irreflexive`). *(Requires no Axiom of Choice.)*
- **Statement:** $\vdash \neg \operatorname{isSet}(\mathrm{On}) \land \operatorname{isProper}(\mathrm{On})$.
- **Proof:**
  1. Assume for contradiction that $\operatorname{isSet}(\mathrm{On})$.
  2. By Theorem O11, $\operatorname{Ord}(\mathrm{On})$ holds.
  3. By `DefOrdinals` (`3.20`), $\mathrm{On} \in \mathrm{On} \iff \operatorname{isSet}(\mathrm{On}) \land \operatorname{Ord}(\mathrm{On})$, so $\mathrm{On} \in \mathrm{On}$.
  4. By Theorem O6 (`thm_O6_ord_irreflexive`) specialized to $\alpha := \mathrm{On}$, $\operatorname{isSet}(\mathrm{On}) \land \mathrm{On} \in \mathrm{On} \implies \bot$.
  5. By *reductio ad absurdum*, $\neg \operatorname{isSet}(\mathrm{On})$, which by definition is $\operatorname{isProper}(\mathrm{On})$. $\blacksquare$

---

## 3. Poly/ML Typed Verification Mapping

Every theorem and auxiliary lemma above corresponds to a typed record verified in [`program/ordinal_theorems.ML`](../program/ordinal_theorems.ML) and tested in [`tests/test_ordinal_theorems.py`](../tests/test_ordinal_theorems.py):

| ID / Lemma | SML Record Name | Domain & Hypotheses | Upstream Proof Dependencies (Acyclic DAG) |
| :--- | :--- | :--- | :--- |
| **O1** | `thm_O1_empty_trans` | $\emptyset : \mathrm{Class}$ | `ax_empty_no_elements`, `ax_false_elim` |
| **O2** | `thm_O2_empty_ord` | $\emptyset : \mathrm{Class}$ | `thm_O1_empty_trans`, `ax_empty_no_elements` |
| **O3** | `thm_O3_succ_trans` | $\alpha : \mathrm{Class}$, $\operatorname{Trans}(\alpha)$ | `ax_ord_succ_trans` |
| **O4** | `thm_O4_succ_ord` | $\alpha : \mathrm{Class}$, $\operatorname{isSet}(\alpha) \land \operatorname{Ord}(\alpha)$ | `ax_ord_succ_ord` (uses O3 + singleton sethood) |
| **O5** | `thm_O5_ord_heredity` | $\alpha, \beta : \mathrm{Class}$, $\operatorname{Ord}(\alpha) \land \beta \in \alpha$ | `ax_ord_heredity` (`DefOrdinalClass`, `3.16`) |
| **O6** | `thm_O6_ord_irreflexive` | $\alpha : \mathrm{Class}$, $\operatorname{isSet}(\alpha)$ | `ax_reg_irreflexive` (`AxmRegularity`, `3.14` on $\{\alpha\}$) |
| **O7** | `thm_O7_ord_asymmetric` | $\alpha, \beta : \mathrm{Class}$, $\alpha \in \beta$ | `ax_reg_asymmetric` (`AxmRegularity`, `3.14` on $\{\alpha, \beta\}$) |
| **O8** | `thm_O8_ord_inter` | $\alpha, \beta : \mathrm{Class}$, $\operatorname{Ord}(\alpha) \land \operatorname{Ord}(\beta)$ | `ax_ord_inter` (`DefOrdinalClass`, `3.16`) |
| **L1** | `lem_ord_elem_linearity` | $x, y : \mathrm{Class}$, $\operatorname{isSet}(x) \land \operatorname{isSet}(y) \land \operatorname{Ord}(x) \land \operatorname{Ord}(y)$ | `ax_class_reg_elem_linearity` applied to `thm_O5_ord_heredity` and `thm_O6_ord_irreflexive` |
| **O9** | `thm_O9_ord_ssub_in` | $\alpha, \beta : \mathrm{Class}$, $\operatorname{Ord}(\alpha) \land \operatorname{Ord}(\beta) \land \alpha \subsetneq \beta$ | `ax_ord_ssub_in_from_L1` applied to `thm_O5_ord_heredity` and `lem_ord_elem_linearity` |
| **O9a** | `thm_O9_set_instance` | Set ordinals $\alpha, \beta$ ($\operatorname{isSet}(\alpha) \land \operatorname{isSet}(\beta)$) | Specialization of `thm_O9_ord_ssub_in` |
| **O9b** | `thm_O9_proper_on_instance` | Class $\alpha$ with $\operatorname{Ord}(\alpha) \land \alpha \subsetneq \mathrm{On}$ | Specialization of `thm_O9_ord_ssub_in` at $\beta := \mathrm{On}$ (`ax_on_ord_class`) |
| **O10** | `thm_O10_ord_trichotomy` | Set ordinals $\alpha, \beta$ ($\operatorname{isSet}(\alpha) \land \operatorname{isSet}(\beta) \land \operatorname{Ord}(\alpha) \land \operatorname{Ord}(\beta)$) | `ax_ord_trichotomy_from_O8_O9_O6` applied to `thm_O8_ord_inter`, `thm_O9_ord_ssub_in`, and `thm_O6_ord_irreflexive` |
| **O11** | `thm_O11_on_ord_class` | Proper class $\mathrm{On}$ (`DefOrdinals`, `3.20`) | `ax_on_trans`, `ax_on_elements_ord` (from O5) |
| **O12** | `thm_O12_burali_forti` | Proper class $\mathrm{On}$ (`ThmOrdinalsProperClass`, `3.22`) | `ax_burali_forti_from_O11_O6` applied to `thm_O11_on_ord_class` and `thm_O6_ord_irreflexive` |
