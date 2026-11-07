# Item 3.43 (Legacy Dossier 3.37): Limitation of Size — Cardinal-Default vs. Class-Map Formulations

$$X \in V \iff |X| \prec |V| \qquad (\text{Catalog ID: }\mathtt{AxmSizeLimitation},\; 3.43)$$

$$\operatorname{Proper}(K) \iff K \sim V \qquad (\text{Class-Bijection Form, Variant 2 }\mathtt{ax\_limitation\_of\_size})$$

$$\operatorname{Proper}(K) \implies \exists F : \operatorname{ClassFunction},\; F[K] = V \qquad (\text{Class-Surjection Form, Book }\mathtt{060\_axioms.tex})$$

---

### 1. Catalog Semantic IDs & Provenance Mapping

In the current generated catalog (`generated/theory_db.json` and `generated/manual.html`), the definitions and axioms governing cardinality and size limitation carry the following semantic IDs (replacing the older dossier number `3.37`):

| Semantic ID | Catalog Number | Formal Statement | Role |
| :--- | :---: | :--- | :--- |
| [`DefCardLessEq`](../../generated/proofs/DefCardLessEq.html) | `3.40` | $A \preccurlyeq B \iff \exists f\;(\operatorname{Injective}(f) \land A \subseteq \operatorname{Dom}(f) \land f[A] \subseteq B)$ | Actual class-injection preorder between classes $A$ and $B$ |
| [`DefCardinality`](../../generated/proofs/DefCardinality.html) | `3.41` | $\|K\| = \mathrm{On} \cap \bigcap\{\alpha \in \mathrm{On} \mid K \preccurlyeq \alpha\}$ | Initial-ordinal cardinal assignment with default $\mathrm{On}$ when no $\alpha \in \mathrm{On}$ satisfies $K \preccurlyeq \alpha$ |
| [`DefCardLess`](../../generated/proofs/DefCardLess.html) | `3.42` | $A \prec B \iff \neg(B \preccurlyeq A)$ | Negated reverse class-injection relation |
| [`AxmSizeLimitation`](../../generated/proofs/AxmSizeLimitation.html) | `3.43` | $X \in V \iff \|X\| \prec \|V\|$ | Cardinal-default size comparison axiom |
| [`DefTightClass`](../../generated/proofs/DefTightClass.html) | `3.47` | $\operatorname{Tight}(U) \iff \forall B \subseteq U,\;(B \prec U \iff B \in U)$ | Direct class-map tightness on subclasses of $U$ |
| [`ThmUniversalClassIsUniverse`](../../generated/proofs/ThmUniversalClassIsUniverse.html) | `3.69` | $\operatorname{Universe}(V)$ (including $\operatorname{Tight}(V)$) | Links $V$ to direct class-map comparison on subclasses |

---

### 2. Mathematical Distinction: Cardinal Defaults vs. Actual Class Maps

Two mathematically distinct principles share the name "Limitation of Size" across the literature and the Obelisk codebase. They must not be conflated:

#### A. Cardinal-Default Comparison (`AxmSizeLimitation`, `3.43`: $X \in V \iff |X| \prec |V|$)
Work locally in ordinary Gödel–Bernays (GB / NBG) class theory with Class Replacement and the Axiom of Choice for sets ($\mathrm{AC}_{\mathrm{set}}$), *without* assuming Global Choice:
1. **No proper class injects into a set**: If a class $K$ admitted an injective class-function $f$ into a set $s \in V$, the inverse relation $f^{-1}$ restricted to the set-sized image $f[K] \subseteq s$ would be a class-function mapping a set onto $K$, making $K \in V$ by Class Replacement.
2. **Default cardinal value on proper classes (`On` and `V`)**: Because no proper class $K$ injects into any ordinal set $\alpha \in \mathrm{On}$, the indexing class $\{\alpha \in \mathrm{On} \mid K \preccurlyeq \alpha\}$ in `DefCardinality` (`3.41`) is empty ($\emptyset$). Under the restricted intersection convention $\mathrm{On} \cap \bigcap \emptyset = \mathrm{On} \cap V = \mathrm{On}$, every proper class $K$ receives the default cardinal value
   $$|K| = \mathrm{On}.$$
   In particular, $|\mathrm{On}| = \mathrm{On}$ and $|V| = \mathrm{On}$.
3. **Separate evaluation on sets, $\mathrm{On}$, and $V$**:
   - **Case 1 ($X \in V$ is a set)**: By $\mathrm{AC}_{\mathrm{set}}$, $X$ injects into some ordinal set, so $|X| = \kappa \in \mathrm{On}$ is the least ordinal set with $X \preccurlyeq \kappa$. Since $\mathrm{On}$ is a proper class, there is no injection $\mathrm{On} \hookrightarrow \kappa$, so $\neg(\mathrm{On} \preccurlyeq \kappa)$, which by `DefCardLess` (`3.42`) means $\kappa \prec \mathrm{On}$, i.e., $|X| \prec |V|$.
   - **Case 2 ($X = \mathrm{On}$)**: $\mathrm{On}$ is a proper class ($\mathrm{On} \notin V$ by Burali-Forti), and $|\mathrm{On}| = \mathrm{On} = |V|$. Since the identity map $\mathrm{Id}_{\mathrm{On}}$ is an injection $\mathrm{On} \hookrightarrow \mathrm{On}$, we have $\mathrm{On} \preccurlyeq \mathrm{On}$, so $\mathrm{On} \prec \mathrm{On}$ is false. Both sides of $\mathrm{On} \in V \iff |\mathrm{On}| \prec |V|$ are false.
   - **Case 3 ($X = V$ or any proper class $K \notin V$)**: $|K| = \mathrm{On} = |V|$, so $|K| \prec |V|$ is $\mathrm{On} \prec \mathrm{On}$, which is false; both sides of $K \in V \iff |K| \prec |V|$ are false.
4. **Why default equality does not construct a class bijection**: Thus `AxmSizeLimitation` ($X \in V \iff |X| \prec |V|$) already holds over $\mathrm{GB} + \text{Class Replacement} + \mathrm{AC}_{\mathrm{set}}$. However, the equality of default values $|K| = \mathrm{On} = |V|$ for proper classes $K$ and $V$ arises purely from the emptiness of $\{\alpha \in \mathrm{On} \mid K \preccurlyeq \alpha\}$ and **does not construct a class bijection $K \leftrightarrow V$ or an injection $V \hookrightarrow \mathrm{On}$**. Over GB/NBG or MK, set Choice ($\mathrm{AC}_{\mathrm{set}}$) does not imply Global Choice (see J. D. Hamkins, *The global choice principle in Gödel–Bernays set theory*, and J. D. Hamkins & L. Yao, *Reflection in second-order set theory*, for models of ZFC equipped with definable classes where $\mathrm{AC}_{\mathrm{set}}$ holds but Global Choice fails).

#### B. Direct Class-Map Limitation of Size (`DefTightClass` at $U = V$, Variant 2 `ax_limitation_of_size`, and Book `060_axioms.tex`)
To obtain Global Choice ($V \sim \mathrm{On}$) or bijections/surjections between every proper class $K$ and $V$, the theory must compare classes directly by **actual class-function graphs** rather than by their default cardinal values:
1. **Direct class comparison (`DefTightClass`, `3.47` at $U = V$)**:
   $$\operatorname{Tight}(V) \iff \forall B \subseteq V,\;(B \prec V \iff B \in V).$$
   Unlike `AxmSizeLimitation` (`3.43`), which writes $|B| \prec |V|$, $\operatorname{Tight}(V)$ writes $B \prec V$, i.e., $\neg(V \preccurlyeq B)$ directly on the class $B$.
2. **The exact bridge constructing a map $V \to \mathrm{On}$**:
   Instantiating $\operatorname{Tight}(V)$ (in `ThmUniversalClassIsUniverse`, `3.69`) at the proper class $B = \mathrm{On} \subseteq V$:
   - By the Burali-Forti theorem, $\mathrm{On} \notin V$.
   - The contrapositive of $B \prec V \iff B \in V$ at $B = \mathrm{On}$ yields $\neg(\mathrm{On} \prec V)$.
   - By `DefCardLess` (`3.42`), $\neg(\mathrm{On} \prec V) \iff \neg\neg(V \preccurlyeq \mathrm{On}) \iff V \preccurlyeq \mathrm{On}$.
   - By `DefCardLessEq` (`3.40`), $V \preccurlyeq \mathrm{On}$ asserts the existence of an actual injective class-function $F : V \hookrightarrow \mathrm{On}$ with $\operatorname{Dom}(F) = V$ and $F[V] \subseteq \mathrm{On}$.
   - Pulling back the canonical well-ordering of $\mathrm{On}$ along $F : V \hookrightarrow \mathrm{On}$ well-orders the entire universe $V$, yielding Global Choice and, via the class Schröder–Bernstein theorem ($\mathrm{On} \preccurlyeq K \preccurlyeq V \preccurlyeq \mathrm{On}$), an explicit class bijection $K \sim \mathrm{On} \sim V$ for every proper class $K$.
3. **Book surjection formulation (`060_axioms.tex`) and Variant 2 (`ax_limitation_of_size`)**:
   - In the book's `060_axioms.tex`, Limitation of Size is formulated directly in terms of class maps: a class $K$ is proper if and only if there exists a class-function surjection from $K$ onto $V$.
   - In Variant 2 (`set_theory_prover/program/verified_theorems.ML`), `ax_limitation_of_size` states $\forall K,\;(\operatorname{isProper}(K) \leftrightarrow K \sim V)$, where $K \sim V$ (`Equinum`) is actual class equinumerosity via a bijective class-function graph.
   - Connecting the cardinal-default formula $X \in V \iff |X| \prec |V|$ (`3.43`) to $\operatorname{Tight}(V)$ (`3.47` / `3.69`) requires the additional class-cardinal reflection bridge $|B| \prec |V| \implies B \prec V$ (specifically, that $|V| = \mathrm{On}$ implies $V \preccurlyeq \mathrm{On}$), which carries the exact Global Choice strength separating $\mathrm{AC}_{\mathrm{set}}$ from $V \sim \mathrm{On}$.
