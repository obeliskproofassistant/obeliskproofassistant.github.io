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

Ordinal addition is defined by transfinite recursion on the second argument:
1. **Base Case:**
   $$\alpha + 0 = \alpha$$
2. **Successor Case:**
   $$\alpha + S(\beta) = S(\alpha + \beta) = (\alpha + \beta) \cup \{\alpha + \beta\}$$
3. **Limit Case (for limit ordinal $\lambda$):**
   $$\alpha + \lambda = \bigcup_{\beta < \lambda} (\alpha + \beta)$$

### Key Properties
* **Associativity:** $(\alpha + \beta) + \gamma = \alpha + (\beta + \gamma)$ (Verified PASS).
* **Non-Commutativity:**
  $$1 + \omega = \bigcup_{n < \omega} (1 + n) = \omega \neq \omega + 1$$
* **Left-Cancellation:** If $\alpha + \beta = \alpha + \gamma$, then $\beta = \gamma$.

---

## 3. Ordinal Multiplication

Defined by transfinite recursion:
1. **Base Case:**
   $$\alpha \cdot 0 = 0$$
2. **Successor Case:**
   $$\alpha \cdot S(\beta) = (\alpha \cdot \beta) + \alpha$$
3. **Limit Case:**
   $$\alpha \cdot \lambda = \bigcup_{\beta < \lambda} (\alpha \cdot \beta)$$

### Key Properties
* **Associativity:** $(\alpha \cdot \beta) \cdot \gamma = \alpha \cdot (\beta \cdot \gamma)$ (Verified PASS).
* **Left-Distributivity:** $\alpha \cdot (\beta + \gamma) = \alpha \cdot \beta + \alpha \cdot \gamma$.
* **Non-Commutativity:**
  $$2 \cdot \omega = \bigcup_{n < \omega} (2 \cdot n) = \omega \neq \omega \cdot 2 = \omega + \omega$$

---

## 4. Ordinal Exponentiation

1. $\alpha^0 = 1$
2. $\alpha^{S(\beta)} = \alpha^\beta \cdot \alpha$
3. $\alpha^\lambda = \bigcup_{\beta < \lambda} \alpha^\beta$ for limit $\lambda$.

### Verified Power Laws
$$\alpha^{\beta + \gamma} = \alpha^\beta \cdot \alpha^\gamma$$
$$(\alpha^\beta)^\gamma = \alpha^{\beta \cdot \gamma}$$
