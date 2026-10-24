# Items 3.44–3.47: Dunaev Tagged Pairs & Lists for Proper Classes

$$\langle A, B \rangle_{\mathrm{tag}} = \mathrm{inj}_1(A) \cup \mathrm{inj}_2(B)$$

### The Proper Class Pairing Problem
The classical Kuratowski pair $(a, b) = \{\{a\}, \{a, b\}\}$ requires $a$ and $b$ to be elements of sets. If either $A$ or $B$ is a **proper class**, the Kuratowski pair cannot be formed without "phantom partner" anomalies.

### Dunaev's Independent Construction
Dunaev introduces tagged injection operators:
- $\mathrm{inj}_1(X) = \{ \langle 0, x \rangle \mid x \in X \}$
- $\mathrm{inj}_2(Y) = \{ \langle 1, y \rangle \mid y \in Y \}$
- $\langle A, B \rangle_{\mathrm{tag}} = \mathrm{inj}_1(A) \cup \mathrm{inj}_2(B)$

The projections are defined unconditionally:
- $\pi_1(P) = \{ x \mid \langle 0, x \rangle \in P \}$
- $\pi_2(P) = \{ y \mid \langle 1, y \rangle \in P \}$

### Verified In Lean 4
Proved in Lean 4 as Theorem 9 (`tagged_pair_proj`):
$$\pi_1(\langle A, B \rangle_{\mathrm{tag}}) = A \quad \land \quad \pi_2(\langle A, B \rangle_{\mathrm{tag}}) = B$$
holds for **arbitrary classes** $A$ and $B$, including proper classes!
