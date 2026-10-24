# Item 3.02: Sethood Predicate

$$\mathrm{isSet}(X) \iff \exists Y. X \in Y$$

### Definition
In traditional class theories (von Neumann, Bernays, Gödel, Kelley), a class is defined to be a **set** if and only if it belongs to at least one class.
- **Set:** A class $X$ such that $\exists Y. X \in Y$.
- **Proper Class:** A class $X$ such that $\neg \exists Y. X \in Y$.

In Obelisk, sethood is not an ad-hoc primitive sort, but an elegant defined unary predicate over the single domain of classes.
