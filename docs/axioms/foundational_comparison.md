# Foundational Consistency Strength & Choice Hierarchy Comparison

| System | Ontology | Class Comprehension | Choice / Size Principle | Consistency Strength & Conservativity |
| :--- | :--- | :--- | :--- | :---: |
| **ZFC** | Sets only | First-order separation & replacement schemas | Set Choice ($\mathrm{AC}_{\mathrm{set}}$) | $\mathrm{Con}(\mathrm{ZFC})$ |
| **GB / NBG (Set Choice)** | Sets & Classes | Predicative (quantifiers over sets only) | Set Choice ($\mathrm{AC}_{\mathrm{set}}$); satisfies cardinal-default `AxmSizeLimitation` (`3.43`) | Conservative over ZFC; **does not** prove Global Choice |
| **NBG + Global Choice (von Neumann NBG)** | Sets & Classes | Predicative (quantifiers over sets only) | Global Choice ($\tau$) $\equiv$ Class-Map Limitation of Size ($K \sim V$ for proper $K$, `Tight(V)` `3.47`) | Conservative over ZFC (by Easton / forcing) |
| **Morse–Kelley ($\mathrm{MK}_{\mathrm{set}}$)** | Sets & Classes | **Impredicative** (`RulClassComprehension`, `3.01`) | Set Choice ($\mathrm{AC}_{\mathrm{set}}$) only | **Strictly stronger than ZFC** (proves $\mathrm{Con}(\mathrm{ZFC})$); Global Choice remains independent |
| **Morse–Kelley + Global Choice ($\mathrm{MK} + \mathrm{GC}$)** | Sets & Classes | **Impredicative** (`3.01`) | Global Choice / Class-Map Limitation of Size (`Tight(V)` `3.47`, `ax_limitation_of_size`) | **Strictly stronger than ZFC**; $V \sim \mathrm{On}$ |
| **Obelisk Core (`MKTD1` as Variant 1, `MKTD2` as Variant 2)** | Sets & Classes | **Impredicative (`3.01`)** | Cardinal-Default Size (`AxmSizeLimitation`, `3.43`) + Class-Map Tightness (`DefTightClass`, `3.47` / `ThmUniversalClassIsUniverse`, `3.69` / `ax_limitation_of_size`) | $\ge \mathrm{MK} + \mathrm{GC}$ |
| **Obelisk + Tarski (`AxmTarskiUniverses`, `3.74`)** | Sets, Classes, Universes | Impredicative (`3.01`) | Global Choice + Tarski Universe Hierarchy ($\forall X \in V,\;\exists U \in V\text{ universe with }X \in U$) | ZFC / MK + unboundedly many strongly inaccessible cardinals |

---

### Qualification of Axiom Dependencies and Semantic IDs

1. **Predicative (NBG/GB) vs. Impredicative (MK) Comprehension**:
   - **NBG / GB** restricts the comprehension formula $\varphi(x)$ in $\{x \in V \mid \varphi(x)\}$ so that all bound variables range over **sets** ($x \in V$).
   - **Morse–Kelley (MK)** and **Obelisk Core** (`RulClassComprehension`, `3.01`) allow arbitrary class quantifiers $\forall Y : \mathrm{Class},\;\exists Z : \mathrm{Class}$ inside $\varphi(x)$, enabling impredicative truth definitions for set structures and proving $\mathrm{Con}(\mathrm{ZFC})$.

2. **Set Choice ($\mathrm{AC}_{\mathrm{set}}$) vs. Global Choice ($\mathrm{GC}$) and the Two Forms of Limitation of Size**:
   - **Model-Theoretic Separation**: Over both GB/NBG and MK, Set Choice ($\forall x \in V,\;\exists \alpha \in \mathrm{On},\;x \preccurlyeq \alpha$) does **not** imply Global Choice ($V \preccurlyeq \mathrm{On}$ or existence of a class choice function on all nonempty sets). In particular, a model $M \models \mathrm{ZFC}$ equipped with its definable classes satisfies GB + $\mathrm{AC}_{\mathrm{set}}$ + Class Replacement, yet can fail to have any definable global well-ordering of $V$ (see J. D. Hamkins, *The global choice principle in Gödel–Bernays set theory*, and J. D. Hamkins & L. Yao, *Reflection in second-order set theory*).
   - **Cardinal-Default Axiom (`AxmSizeLimitation`, `3.43`, legacy dossier `3.37`)**:
     $$X \in V \iff |X| \prec |V|$$
     where $|K| = \mathrm{On} \cap \bigcap\{\alpha \in \mathrm{On} \mid K \preccurlyeq \alpha\}$ (`DefCardinality`, `3.41`) and $A \prec B \iff \neg(B \preccurlyeq A)$ (`DefCardLess`, `3.42`). Because no proper class injects into a set under Class Replacement, every proper class $K$ (including $\mathrm{On}$ and $V$) has empty ordinal-injection index set and defaults to $|K| = \mathrm{On}$. Thus `AxmSizeLimitation` (`3.43`) already holds in $\mathrm{GB} + \text{Class Replacement} + \mathrm{AC}_{\mathrm{set}}$ without constructing a map $V \to \mathrm{On}$.
   - **Class-Map Limitation of Size (`DefTightClass`, `3.47` at $U = V$ in `ThmUniversalClassIsUniverse`, `3.69`; Variant 2 `ax_limitation_of_size`; Book `060_axioms.tex`)**:
     Asserts direct class-map comparison on proper classes: either $\forall B \subseteq V,\;(B \prec V \iff B \in V)$ (`Tight(V)`), or $\operatorname{Proper}(K) \iff K \sim V$ (`ax_limitation_of_size`), or existence of a class-function surjection $K \twoheadrightarrow V$ (`060_axioms.tex`). Setting $B = \mathrm{On}$ in $\operatorname{Tight}(V)$ yields $\mathrm{On} \notin V \implies \neg(\mathrm{On} \prec V) \implies V \preccurlyeq \mathrm{On}$, providing an actual injective class-function $V \hookrightarrow \mathrm{On}$ and hence Global Choice. See [`docs/axioms/37_limitation_of_size.md`](37_limitation_of_size.md) for the complete analysis.
