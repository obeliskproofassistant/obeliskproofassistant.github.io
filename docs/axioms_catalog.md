# Obelisk Proof Assistant — Complete Morse–Kelley Axioms Catalog

Based on the Obelisk Demonstration (Higher-Order Logic Variant) and audited in Lean 4.

| Item | Name | Formal Statement | Status |
| :---: | :--- | :--- | :---: |
| **3.01** | Impredicative Comprehension | $\exists C. \forall x. (x \in C \iff \mathrm{isSet}(x) \land \varphi(x))$ | Verified |
| **3.02** | Sethood Predicate | $\mathrm{isSet}(X) \iff \exists Y. X \in Y$ | Core Definition |
| **3.12** | Heredity Axiom | $A \subseteq B \land \mathrm{isSet}(B) \implies \mathrm{isSet}(A)$ | Verified |
| **3.13** | Exponent / Powerclass | $\mathrm{isSet}(X) \implies \mathrm{isSet}(\mathcal{P}(X))$ | Verified |
| **3.14** | Regularity ($\in$-Induction) | $\mathcal{P}(X) \subseteq X \implies V \subseteq X$ | Verified |
| **3.34** | Strict Order Relation (Repaired) | Restored injectivity and domain conditions on $\preceq$ | Repaired |
| **3.37** | Limitation of Size | $X \in V \iff |X| \prec |V|$ | Verified |
| **3.45** | Tagged Pair Existence | $\mathrm{inj}_1(A) \cup \mathrm{inj}_2(B)$ for all classes $A, B$ | Independent Construction |
| **3.46** | Tagged Pair Left Projection | $\pi_1(\langle A, B \rangle_{\mathrm{tag}}) = A$ | Verified |
| **3.47** | Tagged Pair Right Projection | $\pi_2(\langle A, B \rangle_{\mathrm{tag}}) = B$ | Verified |
| **3.53** | Axiom of Infinity | $\mathrm{isSet}(\omega)$ | Verified |
| **3.66** | Tarski-Grothendieck Universes | $\forall X. \mathrm{isSet}(X) \implies \exists U. X \in U \land \mathrm{isUniverse}(U)$ | Verified |
