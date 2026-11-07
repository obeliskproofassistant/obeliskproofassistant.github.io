# Morse-Kelley Ordinal Arithmetic Formal Dossier

**Component:** Obelisk Mathematical Foundation Library  
**Status:** Mechanized and Verified in Obelisk Core  
**Theory:** Morse-Kelley Class Theory (MK)

---

## 1. Von Neumann Ordinals Definition

In the Obelisk Morse-Kelley class theory, an ordinal is defined as a hereditarily transitive set:

$$\mathrm{Trans}(X) \iff \forall y \in X.\ y \subseteq X$$
$$\mathrm{Ord}(\alpha) \iff \mathrm{Trans}(\alpha) \land \forall y \in \alpha.\ \mathrm{Trans}(y) \land \mathrm{Set}(\alpha)$$

### Trichotomy of Ordinals
For any two ordinals $\alpha, \beta$:
$$\alpha \in \beta \lor \alpha = \beta \lor \beta \in \alpha$$

---

## 2. Ordinal Addition

Ordinal addition is defined by transfinite recursion on the second argument (with limit clauses restricted to **nonzero** limit ordinals $\lambda > 0$, since under the convention that $0$ is a limit ordinal, applying the limit union at $\lambda = 0$ would yield $\emptyset = 0$ and conflict with $\alpha + 0 = \alpha$ for $\alpha > 0$):
1. **Base Case ($\beta = 0$):**
   $$\alpha + 0 = \alpha$$
2. **Successor Case ($\beta = S(\gamma)$):**
   $$\alpha + S(\gamma) = S(\alpha + \gamma) = (\alpha + \gamma) \cup \{\alpha + \gamma\}$$
3. **Nonzero Limit Case (for limit ordinal $\lambda > 0$):**
   $$\alpha + \lambda = \bigcup_{\beta < \lambda} (\alpha + \beta)$$

### Key Properties
* **Zero Identity:** $0 + \alpha = \alpha + 0 = \alpha$ for all $\alpha \in \mathrm{On}$.
* **Associativity:** $(\alpha + \beta) + \gamma = \alpha + (\beta + \gamma)$ for all $\alpha, \beta, \gamma \in \mathrm{On}$ (Verified PASS).
* **Non-Commutativity:**
  $$1 + \omega = \bigcup_{n < \omega} (1 + n) = \omega \neq \omega + 1$$
* **Left-Cancellation:** If $\alpha + \beta = \alpha + \gamma$, then $\beta = \gamma$.

---

## 3. Ordinal Multiplication

Defined by transfinite recursion on the second argument:
1. **Base Case ($\beta = 0$):**
   $$\alpha \cdot 0 = 0$$
2. **Successor Case ($\beta = S(\gamma)$):**
   $$\alpha \cdot S(\gamma) = (\alpha \cdot \gamma) + \alpha$$
3. **Nonzero Limit Case (for limit ordinal $\lambda > 0$):**
   $$\alpha \cdot \lambda = \bigcup_{\beta < \lambda} (\alpha \cdot \beta)$$

### Key Properties
* **Zero Annihilation:** $\alpha \cdot 0 = 0 \cdot \alpha = 0$ for all $\alpha \in \mathrm{On}$.
* **Associativity:** $(\alpha \cdot \beta) \cdot \gamma = \alpha \cdot (\beta \cdot \gamma)$ for all $\alpha, \beta, \gamma \in \mathrm{On}$ (Verified PASS).
* **Left-Distributivity:** $\alpha \cdot (\beta + \gamma) = \alpha \cdot \beta + \alpha \cdot \gamma$.
* **Non-Commutativity:**
  $$2 \cdot \omega = \bigcup_{n < \omega} (2 \cdot n) = \omega \neq \omega \cdot 2 = \omega + \omega$$

---

## 4. Ordinal Exponentiation

Ordinal exponentiation $\alpha^\beta$ requires separating the **zero base ($\alpha = 0$)** from **positive bases ($\alpha > 0$)** so that the limit-stage supremum does not include $0^0 = 1$:

### Base $\alpha = 0$
1. **Zero Exponent:**
   $$0^0 = 1$$
2. **Positive Exponents ($\beta > 0$, both successor and nonzero limit):**
   $$0^\beta = 0 \quad (\forall \beta > 0)$$

### Positive Base ($\alpha > 0$)
1. **Base Case ($\beta = 0$):**
   $$\alpha^0 = 1$$
2. **Successor Case ($\beta = S(\gamma)$):**
   $$\alpha^{S(\gamma)} = \alpha^\gamma \cdot \alpha$$
3. **Nonzero Limit Case (for $\alpha > 0$ and limit ordinal $\lambda > 0$):**
   $$\alpha^\lambda = \bigcup_{\beta < \lambda} \alpha^\beta$$

### Why the Zero-Base and Nonzero-Limit Guards Are Necessary
If the limit clause $\alpha^\lambda = \bigcup_{\beta < \lambda} \alpha^\beta$ were applied unrestrictedly at base $\alpha = 0$ and $\lambda = \omega$, the $\beta = 0$ term $0^0 = 1$ in the union would yield $0^\omega = 1$ even though $0^n = 0$ for every finite $n \ge 1$. Combined with $1 + \omega = \omega$, that would falsify the exponent-addition law at $\alpha = 0, \beta = 1, \gamma = \omega$:
$$0^{1+\omega} = 0^\omega \quad\text{vs.}\quad 0^1 \cdot 0^\omega = 0 \cdot 0^\omega = 0.$$
With the separated zero-base definition ($0^0 = 1$ and $0^\beta = 0$ for all $\beta > 0$) and the restriction of the limit union to $\alpha > 0, \lambda > 0$:
- $0^0 = 1$, $0^1 = 0$, and $0^\omega = 0$;
- $1^\omega = \bigcup_{n < \omega} 1^n = 1$ and $2^\omega = \bigcup_{n < \omega} 2^n = \omega$;
- At $\alpha = 0, \beta = 1, \gamma = \omega$, both sides of $\alpha^{\beta + \gamma} = \alpha^\beta \cdot \alpha^\gamma$ evaluate to $0$ ($0^{1+\omega} = 0^\omega = 0 = 0 \cdot 0 = 0^1 \cdot 0^\omega$).

### Verified Power Laws (for all $\alpha, \beta, \gamma \in \mathrm{On}$, verified by case analysis on $\alpha = 0$ vs. $\alpha > 0$)
$$\alpha^{\beta + \gamma} = \alpha^\beta \cdot \alpha^\gamma$$
$$(\alpha^\beta)^\gamma = \alpha^{\beta \cdot \gamma}$$
