# Item 3.01: Impredicative Class Comprehension

$$\exists C. \forall x. (x \in C \iff \mathrm{isSet}(x) \land \varphi(x))$$

### Mathematical Content
In the Obelisk foundational framework, class comprehension is **impredicative**: the qualifying formula $\varphi(x)$ may quantify over the collection of all classes, not merely sets. This endows Obelisk with the deductive consistency strength of Morse–Kelley (MK) class theory, strictly stronger than von Neumann–Bernays–Gödel (NBG) or ZFC.

### Sethood Restriction
Notice that only *sets* are eligible to be elements of $C$. If a proper class $X$ satisfies $\varphi(X)$, it is still excluded from $C$ because $\mathrm{isSet}(X)$ is false. This prevents Russell-style paradoxes while retaining maximum class comprehension power.
