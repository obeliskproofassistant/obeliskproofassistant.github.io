# Minimal Repair Guide: Definition 3.34 (Precedence Relation)

### The Defect in the Printed Demo
In Definition 3.34 of the demo axiomatics, the relation $A \preceq B$ was defined without requiring **injectivity** or domain conditions. As a result:
$$\emptyset \text{ witnesses } A \preceq B \text{ vacuously for all } A, B$$
This led to $\neg (A \prec B)$ everywhere, collapsing the Limitation of Size axiom and deriving $\bot$.

### The Minimal Repair
Restore injectivity and domain conditions:
$$A \preceq B \iff \exists f. \mathrm{isFunc}(f) \land \mathrm{dom}(f) = A \land \mathrm{ran}(f) \subseteq B \land \mathrm{isInjective}(f)$$
Strict order is defined as:
$$A \prec B \iff A \preceq B \land \neg (B \preceq A)$$

### Verification in Lean 4
With this single repair, all 9 core theorems succeed, and both contradiction pathways are completely closed.
