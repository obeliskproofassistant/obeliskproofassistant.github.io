# Items 3.51–3.52 & 3.76–3.78 (Legacy Dossier 3.44–3.47): Ordered-Pair & Tagged-Pair Conventions for Sets and Proper Classes

Across the Obelisk catalog (`generated/theory_db.json`), the book (`070_ordered_pair.tex`), and the standalone SML/Lean 4 formalizations (`program/dunaev_tagged_pairs_proof.ML`), **four distinct pair encodings** appear. Because both `DefKuratowskiPair` (`3.52`, `CpKuratowskiPair`) and `DefDunaevOrderedPair` (`3.76`, `CpOPair`) render in surface notation as `(A, B)` while having different expansions and different values on $(\emptyset, \emptyset)$, this dossier explicitly distinguishes all four constructions, their empty-pair values, their sethood requirements, and their proof provenance.

---

### 1. Side-by-Side Comparison of the Four Pair Conventions

| Convention | Symbol / Semantic ID | Formal Definition | Value at $(\emptyset, \emptyset)$ | Domain of Injective Recovery |
| :--- | :--- | :--- | :--- | :--- |
| **1. Kuratowski Set Pair** | $K(a, b)$ — [`DefKuratowskiPair`](../../generated/proofs/DefKuratowskiPair.html) (`3.52`, AST `CpKuratowskiPair`) | $K(a, b) = \{\{a, a\}, \{a, b\}\} = \{\{a\}, \{a, b\}\}$ | $K(\emptyset, \emptyset) = \{\{\emptyset\}\} = \{1\} \neq \emptyset$ | **Sets only:** requires $\operatorname{Set}(a) \land \operatorname{Set}(b)$ |
| **2. Book Recursive Class Pair** | $P_{\mathrm{rec}}(A, B)$ — Book `070_ordered_pair.tex` | $P_{\mathrm{rec}}(A, B) = \{P_{\mathrm{rec}}(0, a) \mid a \in A\} \cup \{P_{\mathrm{rec}}(1, b) \mid b \in B\}$ | $P_{\mathrm{rec}}(\emptyset, \emptyset) = \emptyset$ | Arbitrary classes $A, B : \mathrm{Class}$ |
| **3. 3-Layer Marker-Tagged Dunaev Pair** | $D_{\mathrm{mark}}(A, B)$ — [`DefDunaevOrderedPair`](../../generated/proofs/DefDunaevOrderedPair.html) (`3.76`, AST `CpOPair`), [`3.77`](../../generated/proofs/ThmDunaevFirstProjection.html), [`3.78`](../../generated/proofs/ThmDunaevSecondProjection.html) | $S_3(a) = \{\{\{a\}\}\}$, $M_3(A, n) = \{\{0, n\}\} \cup \{\{S_3(a), n\} \mid a \in A\}$, $D_{\mathrm{mark}}(A, B) = M_3(A, 1) \cup M_3(B, 2)$ | $D_{\mathrm{mark}}(\emptyset, \emptyset) = \{\{0, 1\}, \{0, 2\}\} \neq \emptyset$ | Arbitrary classes $A, B : \mathrm{Class}$ |
| **4. Element-Wise Kuratowski-Tagged Class Pair** | $\langle A, B \rangle_{\mathrm{tag}}$ — `program/dunaev_tagged_pairs_proof.ML` & Lean 4 Theorem 9 (`tagged_pair_proj`) | $\operatorname{inj}_1(A) = \{K(0, x) \mid x \in A\}$, $\operatorname{inj}_2(B) = \{K(1, y) \mid y \in B\}$, $\langle A, B \rangle_{\mathrm{tag}} = \operatorname{inj}_1(A) \cup \operatorname{inj}_2(B)$ | $\langle \emptyset, \emptyset \rangle_{\mathrm{tag}} = \emptyset$ | Arbitrary classes $A, B : \mathrm{Class}$ (since $x \in A \implies \operatorname{Set}(x)$) |

---

### 2. Why Kuratowski Pairing Requires Sethood Guards (`DefKuratowskiPair`, `3.52`)

The classical Kuratowski pair (`DefKuratowskiPair`, `3.52`, AST constructor `CpKuratowskiPair`) is defined by
$$K(a, b) = \{\{a, a\}, \{a, b\}\}.$$
Under guarded class comprehension (`RulClassComprehension`, `3.01` and `DefSingletonSet`, `3.48`), a proper class $P$ cannot be a member of any class, so $\{P\} = \emptyset$ and $\{a, P\} = \{a\}$. Consequently:
- If $A = V$ (a proper class) and $b \in V$ is a set, $K(V, b) = \{\emptyset, \{b\}\}$, which does not recover $V$.
- If both $A$ and $B$ are proper classes, $K(A, B) = \{\emptyset\} = 1$, losing both components completely.
- Therefore, the ordered-pair injectivity law $K(a, b) = K(c, d) \implies (a = c \land b = d)$ holds **only under the explicit sethood guard $\operatorname{Set}(a) \land \operatorname{Set}(b) \land \operatorname{Set}(c) \land \operatorname{Set}(d)$**.

---

### 3. Catalog 3-Layer Marker-Tagged Construction (`DefDunaevOrderedPair`, `3.76`–`3.78`) vs. `DefClassLists` (`3.51`)

In the primary Variant 1 catalog (`generated/theory_db.json` and `generated/proofs/DefDunaevOrderedPair.html`), the class-level ordered pair constructor `CpOPair` (`DefDunaevOrderedPair`, `3.76`) uses **purely unordered set braces** (`CpSingleton` and `CpUPair`) with a 3-layer singleton wrapper:
1. **3-Layer Payload Wrapper:** For any set element $a \in A$, let
   $$S_3(a) = \{\{\{a\}\}\}.$$
2. **Marker Tagging (`M_3(A, n)`):** For tag $n \in \{1, 2\}$ (where $0 = \emptyset$, $1 = \{0\} = \{\emptyset\}$, $2 = \{1\} = \{\{\emptyset\}\}$),
   $$M_3(A, n) = \{\{0, n\}\} \;\cup\; \bigl\{\{S_3(a), n\} \;\big|\; a \in A\bigr\}.$$
   In `DefDunaevOrderedPair` (`3.76`), the payload for tag $1 = \{\emptyset\}$ is written in fully expanded primitive form as $\{\{\{\{a\}\}\}, \{\emptyset\}\} = \{S_3(a), 1\}$.
3. **Ordered Class Pair (`DefDunaevOrderedPair`, `3.76`):**
   $$D_{\mathrm{mark}}(A, B) = M_3(A, 1) \cup M_3(B, 2).$$
4. **Unconditional Class Projections (`3.77` & `3.78`):**
   - [`ThmDunaevFirstProjection`](../../generated/proofs/ThmDunaevFirstProjection.html) (`3.77`): $\operatorname{pr}_1(L) = \{a \mid \{S_3(a), 1\} \in L\}$ satisfies $\operatorname{pr}_1(D_{\mathrm{mark}}(A, B)) = A$ for all classes $A, B : \mathrm{Class}$.
   - [`ThmDunaevSecondProjection`](../../generated/proofs/ThmDunaevSecondProjection.html) (`3.78`): $\operatorname{pr}_2(L) = \{b \mid \{S_3(b), 2\} \in L\}$ satisfies $\operatorname{pr}_2(D_{\mathrm{mark}}(A, B)) = B$ for all classes $A, B : \mathrm{Class}$.
5. **Relationship to `DefClassLists` (`3.51`):**
   - `DefClassLists` (`3.51`) is an earlier schematic overview entry introducing the notation `mark`, `pr1`, and `pr2` with a 2-layer wrapper $\{\{a\}\}$.
   - `DefDunaevOrderedPair` (`3.76`) and its projection theorems (`3.77`, `3.78`) provide the canonical, fully expanded 3-layer unordered-set definition used by the kernel proofs: wrapping $a$ three times as $S_3(a) = \{\{\{a\}\}\}$ guarantees that $S_3(a)$ has rank $\ge 3$ and can never collide with the empty set $0 = \emptyset$ or the tags $1 = \{\emptyset\}$ and $2 = \{\{\emptyset\}\}$ inside unordered pairs $\{S_3(a), n\}$ or the sentinel $\{\{0, n\}\}$.
6. **Concrete Calculations (Empty & Proper-Class Components):**
   - **Empty Pair ($A = \emptyset, B = \emptyset$):**
     $$D_{\mathrm{mark}}(\emptyset, \emptyset) = \{\{0, 1\}, \{0, 2\}\} \neq \emptyset, \qquad \operatorname{pr}_1(D_{\mathrm{mark}}(\emptyset, \emptyset)) = \emptyset, \quad \operatorname{pr}_2(D_{\mathrm{mark}}(\emptyset, \emptyset)) = \emptyset.$$
     *(Note: Because $D_{\mathrm{mark}}(\emptyset, \emptyset)$ contains the two sentinel markers $\{0,1\}$ and $\{0,2\}$, `3.76`–`3.78` do **not** satisfy the book's recursive equation $P_{\mathrm{rec}}(\emptyset, \emptyset) = \emptyset$ from `070_ordered_pair.tex`; they verify the marker-tagged encoding $D_{\mathrm{mark}}$.)*
   - **Proper Class & Empty Class ($A = V, B = \emptyset$):**
     $$D_{\mathrm{mark}}(V, \emptyset) = \{\{0, 1\}, \{0, 2\}\} \cup \bigl\{\{\{\{\{a\}\}\}, 1\} \;\big|\; a \in V\bigr\},$$
     and $\operatorname{pr}_1(D_{\mathrm{mark}}(V, \emptyset)) = V$, $\operatorname{pr}_2(D_{\mathrm{mark}}(V, \emptyset)) = \emptyset$.

---

### 4. Element-Wise Kuratowski-Tagged Pair in `dunaev_tagged_pairs_proof.ML` & Lean 4

In `set_theory_prover/program/dunaev_tagged_pairs_proof.ML` and the Lean 4 verification (`Theorem 9: tagged_pair_proj`), the inner pair constructor $\langle i, x \rangle$ used inside $\operatorname{inj}_1$ and $\operatorname{inj}_2$ is the **set-level Kuratowski pair** $K(i, x) = \{\{i\}, \{i, x\}\}$ applied to the set tags $0 = \emptyset$, $1 = \{\emptyset\}$ and the **set elements** $x \in A$, $y \in B$:
- $\operatorname{inj}_1(A) = \{ K(0, x) \mid x \in A \}$
- $\operatorname{inj}_2(B) = \{ K(1, y) \mid y \in B \}$
- $\langle A, B \rangle_{\mathrm{tag}} = \operatorname{inj}_1(A) \cup \operatorname{inj}_2(B)$
- $\pi_1(P) = \{ x \mid K(0, x) \in P \}$ and $\pi_2(P) = \{ y \mid K(1, y) \in P \}$.

Because every member $x \in A$ of any class $A$ (even when $A = V$ is a proper class) is automatically a **set** ($\operatorname{Set}(x)$ by `DefIsSet`), and $0, 1$ are sets, each element-level Kuratowski pair $K(0, x)$ and $K(1, y)$ is a well-formed set in $V$ satisfying $K(i, x) = K(j, y) \implies (i = j \land x = y)$. This gives
$$\pi_1(\langle A, B \rangle_{\mathrm{tag}}) = A \quad \land \quad \pi_2(\langle A, B \rangle_{\mathrm{tag}}) = B$$
for all classes $A, B : \mathrm{Class}$ (with $\langle \emptyset, \emptyset \rangle_{\mathrm{tag}} = \emptyset$).

---

### 5. Convention Used by Cartesian Products & Relations in the Catalog

In the Variant 1 catalog (`generated/theory_db.json`):
- Binary relations, domains (`DefBigDomain`, `3.22`), evaluations (`DefValueAtArg`, `3.25`), and dependent sum/product models (`DefSigmaModel`, `3.37`, `DefPiPredicateModel`, `3.39`) use the `CpOPair` constructor (`DefDunaevOrderedPair`, `3.76`, $D_{\mathrm{mark}}(x, y)$), where elements of a relation $R \subseteq V$ are set-sized Dunaev pairs $(x, y) = D_{\mathrm{mark}}(x, y)$ of set arguments $x, y \in V$.
- `DefKuratowskiPair` (`3.52`, `CpKuratowskiPair`) is a separate constructor defined specifically for the classical set-theoretic Kuratowski encoding $K(a, b) = \{\{a, a\}, \{a, b\}\}$ on sets.
