# Schroeder-Bernstein Theorem Formal Walkthrough in Obelisk

**Theorem Statement:**  
If there exists an injective class function $f: A \to B$ and an injective class function $g: B \to A$, then there exists a bijective class function $h: A \to B$.

$$\mathrm{Inj}(f, A, B) \land \mathrm{Inj}(g, B, A) \implies \exists h.\ \mathrm{Bij}(h, A, B)$$

---

## 1. Monotone Operation and Set-vs-Class Carrier Distinction

Let $f \colon A \to B$ and $g \colon B \to A$ be injective functions, so $g[B] \subseteq A$ and $f[A] \subseteq B$.
For any subclass $X \subseteq A$, consider the schematic class operation:
$$F(X) = A \setminus g[B \setminus f[X]]$$

### Monotonicity of $F$ on Subclasses $X \subseteq Y \subseteq A$
Suppose $X \subseteq Y \subseteq A$:
1. $f[X] \subseteq f[Y]$ (since $f$ is a function).
2. $B \setminus f[Y] \subseteq B \setminus f[X]$ (complement reverses inclusion).
3. $g[B \setminus f[Y]] \subseteq g[B \setminus f[X]]$.
4. $A \setminus g[B \setminus f[X]] \subseteq A \setminus g[B \setminus f[Y]]$.
5. Thus $F(X) \subseteq F(Y) \subseteq A$ (**$F$ is monotone with respect to subclass inclusion $\subseteq$**).

### Why the Guarded Powerclass $\mathcal{P}(A)$ Cannot Serve as Carrier for Proper Classes
In Obelisk's NBG/MK foundations, the powerclass $\mathcal{P}(A) = \{Z \mid \operatorname{Set}(Z) \land Z \subseteq A\}$ contains only **set** subclasses of $A$:
- **Case 1 — Set-Level Formulation ($\operatorname{Set}(A) \land \operatorname{Set}(B)$):** Every subclass $X \subseteq A$ is a set by Heredity/Separation ($\operatorname{Set}(X)$), so $X \in \mathcal{P}(A)$ and $F(X) \in \mathcal{P}(A)$. Here $\mathcal{P}(A)$ is a genuine set-sized complete lattice, and $F \colon \mathcal{P}(A) \to \mathcal{P}(A)$ is an ordinary set function to which the set-lattice Knaster-Tarski theorem (`160_some_order_theory.tex`) applies directly.
- **Case 2 — Arbitrary Class Formulation ($A, B : \mathrm{Class}$):** When $A$ is a proper class, $F(X)$ need not be a set even when $X$ is a set, so $F$ does **not** map $\mathcal{P}(A)$ into $\mathcal{P}(A)$.
  - **Concrete Counterexample ($A = B = V$):** Take $A = B = V$, let $f = \mathrm{id}_V \colon V \to V$ be the identity class bijection, and let $g \colon V \to V$ be the injective singleton map $g(x) = \{x\}$. Although $\emptyset \in \mathcal{P}(V)$ is a set,
    $$F(\emptyset) = V \setminus g[V \setminus f[\emptyset]] = V \setminus \{\{x\} \mid x \in V\}$$
    is the class of all non-singleton sets. Because $F(\emptyset)$ contains every ordinal $\alpha \ge 2$ and the ordinal tail $\{\alpha \in \mathrm{On} \mid \alpha \ge 2\}$ is a proper class, $F(\emptyset)$ is a proper class and therefore $F(\emptyset) \notin \mathcal{P}(V)$.
  - Moreover, proper subclasses of a proper class $A$ cannot be members of any object-theoretic class or set lattice.

---

## 2. Choice-Free Fixed-Point Constructions in Morse-Kelley

To prove Schroeder-Bernstein for **arbitrary classes** $A, B$ without Choice and without putting proper classes inside $\mathcal{P}(A)$, Obelisk uses schematic class comprehension in Morse-Kelley ($\tau_{\mathrm{MK}}$):

### Construction A: Impredicative MK Greatest Fixed Point ($C^*$)
Treating $F(X) = A \setminus g[B \setminus f[X]]$ as a schematic class operation on class variables $X$, define the subclass $C^* \subseteq A$ by impredicative Morse-Kelley comprehension:

$$C^* = \{a \in A \mid \exists X\,(X \subseteq A \land X \subseteq F(X) \land a \in X)\}$$

No proper class is ever required to be an element of another class (membership is tested only on set elements $a \in X$). The fixed-point identity $F(C^*) = C^*$ follows directly:
1. For every class $X \subseteq A$ satisfying $X \subseteq F(X)$, the definition of $C^*$ gives $X \subseteq C^*$.
2. By monotonicity of the schematic operation $F$, $X \subseteq C^*$ implies $X \subseteq F(X) \subseteq F(C^*)$. Since every $a \in C^*$ belongs to some such $X$, we obtain $C^* \subseteq F(C^*)$.
3. Applying monotonicity of $F$ to $C^* \subseteq F(C^*)$ yields $F(C^*) \subseteq F(F(C^*))$, with $F(C^*) \subseteq A$. Thus $X := F(C^*)$ is itself an admitted witness for the existential quantifier defining $C^*$, which implies $F(C^*) \subseteq C^*$.
4. By subclass antisymmetry, $F(C^*) = C^*$, i.e.,
   $$C^* = A \setminus g[B \setminus f[C^*]] \quad\Longleftrightarrow\quad A \setminus C^* = g[B \setminus f[C^*]].$$
   (In the singleton-map example $A = B = V$, $f = \mathrm{id}_V$, $g(x) = \{x\}$, $X = V$ satisfies $F(V) = V \setminus g[\emptyset] = V$, so $C^* = V$.)

### Construction B: Least-Class Closure ($C_*$)
Equivalently (`150_ordinals.tex`), define $C_* \subseteq A$ as the intersection of all subclasses $X \subseteq A$ closed under the deficit $A \setminus g[B] \subseteq X$ and under $g \circ f$ ($g[f[X]] \subseteq X$):
$$C_* = \{a \in A \mid \forall X\,(X \subseteq A \land (A \setminus g[B]) \subseteq X \land g[f[X]] \subseteq X \implies a \in X)\}.$$
This least fixed point satisfies $C_* = (A \setminus g[B]) \cup g[f[C_*]]$, so $A \setminus C^* = g[B \setminus f[C^*]]$ holds for $C^* = A \setminus C_*$ (and the piecewise bijection works with either fixed point).

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
