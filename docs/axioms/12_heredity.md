# Item 3.12: Heredity Subclass Axiom

$$A \subseteq B \land \mathrm{isSet}(B) \implies \mathrm{isSet}(A)$$

### Significance
Any subclass of a set is guaranteed to be a set. This guarantees that intersection $A \cap B$, set differences $B \setminus A$, and bounded separations are always sets.
In Lean 4, this was machine-checked as Theorem 3 (`hereditary_subsets`) with 0 errors.
