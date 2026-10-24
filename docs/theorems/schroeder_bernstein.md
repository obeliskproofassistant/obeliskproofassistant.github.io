# Schroeder-Bernstein Theorem Formal Walkthrough in Obelisk

**Theorem Statement:**  
If there exists an injective class function $f: A \to B$ and an injective class function $g: B \to A$, then there exists a bijective class function $h: A \to B$.

$$\mathrm{Inj}(f, A, B) \land \mathrm{Inj}(g, B, A) \implies \exists h.\ \mathrm{Bij}(h, A, B)$$

---

## 1. Classical Proof Construction via Fixed-Point

Let $g(B) \subseteq A$ and $f(A) \subseteq B$.
Define operator $F: \mathcal{P}(A) \to \mathcal{P}(A)$:
$$F(X) = A \setminus g(B \setminus f(X))$$

### Monotonicity of $F$
Suppose $X \subseteq Y \subseteq A$.
1. $f(X) \subseteq f(Y)$ (since $f$ is a function).
2. $B \setminus f(Y) \subseteq B \setminus f(X)$ (order reversal).
3. $g(B \setminus f(Y)) \subseteq g(B \setminus f(X))$.
4. $A \setminus g(B \setminus f(X)) \subseteq A \setminus g(B \setminus f(Y))$.
5. Thus $F(X) \subseteq F(Y)$ (**$F$ is monotone**).

---

## 2. Knaster-Tarski Fixed-Point Application

In Morse-Kelley class theory, the Knaster-Tarski fixed point theorem implies that every monotone operator on a complete lattice possesses a fixed point:

$$C^* = \bigcup \{X \subseteq A \mid X \subseteq F(X)\}$$
Then $F(C^*) = C^*$, meaning:
$$C^* = A \setminus g(B \setminus f(C^*))$$
Rearranging:
$$A \setminus C^* = g(B \setminus f(C^*))$$

---

## 3. Definition of Bijection $h$

Define $h: A \to B$ piecewise:
$$h(x) = \begin{cases} f(x) & \text{if } x \in C^* \\ g^{-1}(x) & \text{if } x \in A \setminus C^* \end{cases}$$

### Verification in Obelisk Sequent Calculus
1. **Well-Definedness:** Since $A \setminus C^* = g(B \setminus f(C^*))$ and $g$ is injective, $g^{-1}(x)$ is uniquely defined for all $x \in A \setminus C^*$.
2. **Injectivity:**
   * On $C^*$, $h = f$ is injective.
   * On $A \setminus C^*$, $h = g^{-1}$ is injective.
   * Cross-terms: $f(C^*) \cap (B \setminus f(C^*)) = \emptyset$.
3. **Surjectivity:**
   $$h(A) = f(C^*) \cup g^{-1}(A \setminus C^*) = f(C^*) \cup (B \setminus f(C^*)) = B$$

**Conclusion:** $h$ is a verified bijection between $A$ and $B$, proving $|A| = |B|$ without requiring the Axiom of Choice.
