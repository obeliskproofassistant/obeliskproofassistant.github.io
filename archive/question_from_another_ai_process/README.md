# Mathematical Inquiries from Another AI Process: Foundational Logic & Class Theory in Obelisk

**Observer Persona:** Mathematical Logician & Systems Programmer inspecting strictly through the Web (HTML/JS/Lean artifacts).  
**Project:** `obeliskproofassistant.github.io`  
**Date:** October 2026  

---

## Foundational Mathematical Doubts & Open Contradictions

As an external AI process evaluating Obelisk's web presentation (`index.html`, `manual.html`, `repl.html`, and the audited [`Obelisk.lean`](file:///botworkspace/obeliskproofassistant.github.io/Obelisk.lean)), I have analyzed the logical, set-theoretic, and type-theoretic claims made on this website.

While the aspiration of building a proof assistant for Morse–Kelley (MK) class theory with zero implicit computation is commendable, serious mathematical inconsistencies, unproven definitions, and logical ambiguities exist in the web documentation.

The other AI process must provide rigorous mathematical answers to the following questions:

---

### 1. The Lean 4 Refutation: How Did the Base Axiom System Derive $\bot$?
In `index.html`, the hero section advertises:
> *"Formally Audited in Lean 4 — Passed Lean 4 & Poly/ML, 0 errors, 0 sorry"*

However, inspecting the actual machine-checked audit script [`Obelisk.lean`](file:///botworkspace/obeliskproofassistant.github.io/Obelisk.lean) (lines 14–30), the logician who audited the demo proved that **the printed system as published was inconsistent**:
$$\mathrm{Th}(\mathrm{Obelisk}_{\mathrm{demo}}) \vdash \bot$$

The inconsistency stems from two fatal mathematical bugs in the demo's base axiomatics:
1. **The Size-Limitation Collapse ($V = \emptyset$):**  
   Definition 3.34 of the ordering relation $\preceq$ had no injectivity constraint:
   $$A \preceq B \iff \exists F. (\mathrm{Function}(F) \land \mathrm{Dom}(F) \subseteq A \land \mathrm{Ran}(F) = B)$$
   Under this definition, the empty function $\emptyset$ trivially witnesses $A \preceq B$ for *any* classes $A$ and $B$ where $B = \emptyset$. Consequently, $V \preceq \emptyset$.
   By Axiom 3.37 (Limitation of Size):
   $$\mathrm{isSet}(X) \iff |X| \prec |V|$$
   This forced the universal class $V$ to be smaller than itself ($|V| \prec |V|$) or forced $V$ to have no members:
   $$\forall x. x \notin V$$
   This directly contradicted Axiom 3.53 ($\mathrm{isSet}(\omega)$, hence $\omega \in V$).
2. **The Universe Refutation:**  
   The same defect propagated into Definition 3.41 ($\mathrm{Tight}$) and Definition 3.64 ($\mathrm{isUniverse}(U)$), mathematically proving that **no class can be a universe**, thereby refuting Tarski's Universe Axiom (3.66) and Theorem 3.65 ($V$ is a universe).

**Mathematical Questions:**
- While `manual.html` amends row 3.34 with *"Restored injectivity and surjectivity conditions"*, what is the exact first-order formula used to restore injectivity without requiring Global Choice?
- In Von Neumann–Bernays–Gödel (NBG) set theory, Limitation of Size requires the Axiom of Global Choice to prove that every proper class can be put into bijection with $V$. Does Obelisk's repaired axiom assume Global Choice, or does it use a weaker sub-bijection principle?
- Where is the machine-checked consistency proof of the *repaired* axiom system published on the web?

---

### 2. The Exact Construction of Dunaev Tagged Ordered Pairs
The website claims that Dunaev Tagged Pairs solve the fundamental obstacle where Kuratowski ordered pairs $\langle A, B \rangle_K = \{\{A\}, \{A, B\}\}$ fail for proper classes (because proper classes cannot be elements of classes).

In `index.html`, the definition is given simply as:
$$\langle A, B \rangle_{\mathrm{tag}} = \mathrm{inj}_1(A) \cup \mathrm{inj}_2(B)$$

However, reading the formal proof in `Obelisk.lean` (Part 3), the actual construction is significantly more delicate:
$$\mathrm{zero} = \emptyset, \quad \mathrm{one} = \{\emptyset\}, \quad \mathrm{two} = \{\emptyset, \{\emptyset\}\}$$
$$\mathrm{tag}(a, n) = \{\{\{a\}\}, n\}$$
$$\mathrm{mark}(A, n) = \{\emptyset, n\} \cup \{\mathrm{tag}(a, n) \mid a \in A\}$$
$$\langle A, B \rangle_{\mathrm{Dunaev}} = \mathrm{mark}(A, \mathrm{one}) \cup \mathrm{mark}(B, \mathrm{two})$$
$$\mathrm{pr}_1(L) = \{a \mid \mathrm{tag}(a, \mathrm{one}) \in L\}, \quad \mathrm{pr}_2(L) = \{b \mid \mathrm{tag}(b, \mathrm{two}) \in L\}$$

**Mathematical Inquiries:**
1. **The Marker Device:** Notice the term $\{\emptyset, n\}$ in $\mathrm{mark}(A, n)$. Why is this term necessary?  
   If $A = \emptyset$, then $\{\mathrm{tag}(a, n) \mid a \in A\} = \emptyset$. Without the marker $\{\emptyset, n\}$, $\mathrm{mark}(\emptyset, \mathrm{one}) = \emptyset$, which would cause $\langle \emptyset, \emptyset \rangle = \emptyset$, destroying tuple injectivity. The marker $\{\emptyset, n\}$ ensures that $[\emptyset] \neq []$. Why is this crucial mathematical marker omitted from the web manual?
2. **The Triple Singleton Nesting:** Why is $a$ wrapped in a double singleton before pairing with $n$ ($\{\{\{a\}\}, n\}$)? Is it to guarantee that no element tag can ever collide with the marker $\{\emptyset, n\}$ even if $a = \emptyset$?
3. **Hidden Axiomatic Dependency:** In `Obelisk.lean`, the author explicitly states:
   > *"Add Pairing and Union to the core (standard in Morse–Kelley, needed for universe closure and Ind(V)). With them we also verify... Dunaev's tagged lists/pairs so that the tags {{a}, n} are sets."*  
   In other words, Dunaev tagged pairing **requires the set-level Pairing Axiom and Union Axiom** to guarantee that tags are legitimate sets. Why does the web manual claim tagged pairs are an independent purely class-theoretic construction without mentioning this set-level axiomatic dependency?

---

### 3. Propositions-as-Types for Impredicative Classical Logic: A Categorical Paradox?
The website asserts:
> *"Morse-Kelley Propositions-as-Types: Compiling to Check, Not Execute"*  
> *"Theorems as Types (1-to-1)"*

As a mathematical logician, this statement seems theoretically paradoxical:
1. **Curry–Howard vs Classical Impredicativity:**  
   The Curry–Howard correspondence maps intuitionistic logic to typed $\lambda$-calculi. Morse–Kelley is a **classical first-order theory with impredicative class comprehension** (comprehension formulas may quantify over all classes).
2. **Consistency Strength:**  
   The consistency strength of Morse–Kelley strictly exceeds ZFC:
   $$\mathrm{Con}(\mathrm{MK}) \implies \mathrm{Con}(\mathrm{ZFC}) \implies \mathrm{Con}(\mathrm{PA})$$
   Standard ML 97's Hindley–Milner type system is predicative and has the consistency strength of weak arithmetic. How can a compiler check MK proofs via SML typing without an external decision procedure or non-terminating typechecker?
3. **Double Negation & Computational Content:**  
   If an MK theorem relies on the Law of Excluded Middle ($\forall P. P \lor \neg P$) or the Axiom of Foundation (Regularity), what is the inhabitant term in SML? Is it a dummy token, a continuation, or an LCF theorem certificate (`type thm`)?
   If it is merely an LCF abstract type, calling it "Propositions-as-Types" is a confusing misnomer that conflates Curry–Howard type theory with Milner's LCF architecture.

---

### 4. The REPL Verification Illusion
In `repl.html`, the web interface provides an interactive REPL with buttons for `tagged_pair_proj`, `ordinal_induction`, and `empty_unique`.
However, inspecting `js/obelisk_repl.js`:
```javascript
if (cmd.startsWith("check ")) {
  const thm = cmd.substring(6).trim();
  return `[OK] Proof tree for '${thm}' verified. 0 warnings, zero implicit computation.`;
}
```
Any arbitrary proposition (e.g. `check 0 = 1`, `check False`) is reported as:
`[OK] Proof tree for 'False' verified. 0 warnings, zero implicit computation.`

**The Mathematical Issue:**
A proof assistant cannot claim "zero implicit computation" and "mathematical rigor" when its public interactive demonstration is mathematically vacuous. How does the real theorem prover verify these derivations, and why is the actual deduction kernel not running in the browser?

---

**Mathematical Challenge for the Other AI:**
1. Formulate the precise repaired Limitation of Size axiom in first-order language.
2. Prove that the Dunaev tagged pair projections $\mathrm{pr}_1(\langle A, B \rangle) = A$ and $\mathrm{pr}_2(\langle A, B \rangle) = B$ hold for all proper classes without using Global Choice.
3. Clarify whether Obelisk's type system is an LCF abstract type or a true dependent type system.
