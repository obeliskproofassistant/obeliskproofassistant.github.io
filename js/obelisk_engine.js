/**
 * obelisk_engine.js — Interactive Browser-Side Deduction Kernel for Obelisk Proof Assistant
 * Implements pure-client LCF goal state and tactic engine. Zero backend required.
 * Architect: Georgy Dunaev
 */

(function(window) {
  'use strict';

  // --- Terms ---
  function FreeVar(name) { return { type: 'FreeVar', name: name, toString: () => name }; }
  function Const(name) { return { type: 'Const', name: name, toString: () => name }; }
  function In(l, r) { return { type: 'In', left: l, right: r, toString: () => `(${l} ∈ ${r})` }; }
  function Eq(l, r) { return { type: 'Eq', left: l, right: r, toString: () => `(${l} = ${r})` }; }
  function Not(b) { return { type: 'Not', body: b, toString: () => `~${b}` }; }
  function And(l, r) { return { type: 'And', left: l, right: r, toString: () => `(${l} ∧ ${r})` }; }
  function Or(l, r) { return { type: 'Or', left: l, right: r, toString: () => `(${l} ∨ ${r})` }; }
  function Imp(l, r) { return { type: 'Imp', left: l, right: r, toString: () => `(${l} → ${r})` }; }
  function Forall(v, b) { return { type: 'Forall', var: v, body: b, toString: () => `(∀${v}. ${b})` }; }

  function termEquals(t1, t2) {
    if (!t1 || !t2) return false;
    if (t1.type !== t2.type) return false;
    if (t1.type === 'FreeVar' || t1.type === 'Const') return t1.name === t2.name;
    if (t1.type === 'Not') return termEquals(t1.body, t2.body);
    if (t1.type === 'Forall') return t1.var === t2.var && termEquals(t1.body, t2.body);
    return termEquals(t1.left, t2.left) && termEquals(t1.right, t2.right);
  }

  // --- Proof Goal ---
  class Goal {
    constructor(hypotheses, conclusion) {
      this.hypotheses = Object.assign({}, hypotheses);
      this.conclusion = conclusion;
    }
  }

  // --- Interactive Proof State ---
  class ProofState {
    constructor(name, formula) {
      this.name = name;
      this.initialFormula = formula;
      this.goals = [new Goal({}, formula)];
      this.history = [];
      this.varIndex = 0;
    }

    currentGoal() {
      return this.goals.length > 0 ? this.goals[0] : null;
    }

    isSolved() {
      return this.goals.length === 0;
    }

    freshName(prefix = "H") {
      this.varIndex++;
      return `${prefix}_${this.varIndex}`;
    }

    execute(tacticCmd) {
      const parts = tacticCmd.trim().split(/\s+/);
      const cmd = parts[0];
      const arg = parts.slice(1).join(" ");

      const g = this.currentGoal();
      if (!g && cmd !== 'qed') {
        return { success: false, msg: "No active subgoals. Type 'qed' to seal proof." };
      }

      switch (cmd) {
        case 'intro': {
          if (g.conclusion.type === 'Imp') {
            const hName = arg || this.freshName("H");
            const newHyps = Object.assign({}, g.hypotheses);
            newHyps[hName] = g.conclusion.left;
            this.goals[0] = new Goal(newHyps, g.conclusion.right);
            this.history.push(`intro ${hName}`);
            return { success: true, msg: `Introduced hypothesis '${hName}'` };
          } else if (g.conclusion.type === 'Forall') {
            const vName = arg || g.conclusion.var;
            this.goals[0] = new Goal(g.hypotheses, g.conclusion.body);
            this.history.push(`intro ${vName}`);
            return { success: true, msg: `Introduced bound variable '${vName}'` };
          }
          return { success: false, msg: "Tactic 'intro' applies to Implication (→) or Universal (∀) goals." };
        }

        case 'exact': {
          const hName = arg.trim();
          if (!g.hypotheses[hName]) {
            return { success: false, msg: `Hypothesis '${hName}' not found in local context.` };
          }
          if (termEquals(g.hypotheses[hName], g.conclusion)) {
            this.goals.shift();
            this.history.push(`exact ${hName}`);
            return { success: true, msg: `Subgoal solved by exact match '${hName}'!` };
          }
          return { success: false, msg: `Hypothesis '${hName}' (${g.hypotheses[hName]}) does not match goal (${g.conclusion}).` };
        }

        case 'split': {
          if (g.conclusion.type !== 'And') {
            return { success: false, msg: "Tactic 'split' requires a Conjunction (∧) goal." };
          }
          const g1 = new Goal(g.hypotheses, g.conclusion.left);
          const g2 = new Goal(g.hypotheses, g.conclusion.right);
          this.goals.shift();
          this.goals.unshift(g2);
          this.goals.unshift(g1);
          this.history.push("split");
          return { success: true, msg: "Goal split into 2 independent subgoals." };
        }

        case 'left': {
          if (g.conclusion.type !== 'Or') {
            return { success: false, msg: "Tactic 'left' requires a Disjunction (∨) goal." };
          }
          this.goals[0] = new Goal(g.hypotheses, g.conclusion.left);
          this.history.push("left");
          return { success: true, msg: "Chose left disjunct." };
        }

        case 'right': {
          if (g.conclusion.type !== 'Or') {
            return { success: false, msg: "Tactic 'right' requires a Disjunction (∨) goal." };
          }
          this.goals[0] = new Goal(g.hypotheses, g.conclusion.right);
          this.history.push("right");
          return { success: true, msg: "Chose right disjunct." };
        }

        case 'destruct': {
          const hName = arg.trim();
          const hyp = g.hypotheses[hName];
          if (!hyp) return { success: false, msg: `Hypothesis '${hName}' not found.` };

          if (hyp.type === 'And') {
            const h1 = `${hName}_1`;
            const h2 = `${hName}_2`;
            const newHyps = Object.assign({}, g.hypotheses);
            delete newHyps[hName];
            newHyps[h1] = hyp.left;
            newHyps[h2] = hyp.right;
            this.goals[0] = new Goal(newHyps, g.conclusion);
            this.history.push(`destruct ${hName}`);
            return { success: true, msg: `Conjunction '${hName}' unpacked into '${h1}' and '${h2}'.` };
          } else if (hyp.type === 'Or') {
            const hyps1 = Object.assign({}, g.hypotheses);
            delete hyps1[hName];
            hyps1[`${hName}_l`] = hyp.left;

            const hyps2 = Object.assign({}, g.hypotheses);
            delete hyps2[hName];
            hyps2[`${hName}_r`] = hyp.right;

            this.goals.shift();
            this.goals.unshift(new Goal(hyps2, g.conclusion));
            this.goals.unshift(new Goal(hyps1, g.conclusion));
            this.history.push(`destruct ${hName}`);
            return { success: true, msg: `Disjunction '${hName}' branched into 2 subgoals.` };
          }
          return { success: false, msg: "Tactic 'destruct' requires a Conjunction (∧) or Disjunction (∨) hypothesis." };
        }

        case 'contradiction': {
          for (const k1 in g.hypotheses) {
            const v1 = g.hypotheses[k1];
            if (v1.type === 'Not') {
              for (const k2 in g.hypotheses) {
                if (termEquals(v1.body, g.hypotheses[k2])) {
                  this.goals.shift();
                  this.history.push(`contradiction`);
                  return { success: true, msg: `Contradiction detected between ${k1} and ${k2}! Subgoal solved.` };
                }
              }
            }
          }
          return { success: false, msg: "No direct contradiction (P and ~P) found in local hypotheses." };
        }

        case 'auto': {
          let steps = 0;
          while (this.goals.length > 0 && steps < 12) {
            steps++;
            const cur = this.currentGoal();
            let solved = false;
            // Check exact
            for (const h in cur.hypotheses) {
              if (termEquals(cur.hypotheses[h], cur.conclusion)) {
                this.execute(`exact ${h}`);
                solved = true;
                break;
              }
            }
            if (solved) continue;

            // Check intro
            if (cur.conclusion.type === 'Imp' || cur.conclusion.type === 'Forall') {
              this.execute('intro');
              continue;
            }

            // Check split
            if (cur.conclusion.type === 'And') {
              this.execute('split');
              continue;
            }
            break;
          }
          return { success: true, msg: `Auto solver executed (${steps} inference steps).` };
        }

        case 'qed': {
          if (this.isSolved()) {
            return { success: true, solved: true, msg: `🎉 Q.E.D.! Theorem '${this.name}' is fully verified and machine-checked!` };
          }
          return { success: false, msg: `Cannot close proof: ${this.goals.length} subgoal(s) remain open.` };
        }

        default:
          return { success: false, msg: `Unknown tactic '${cmd}'. Available: intro, exact, split, left, right, destruct, contradiction, auto, qed.` };
      }
    }
  }

  // Pre-configured demonstration theorems
  const PRESETS = {
    and_comm: {
      name: "and_comm",
      desc: "Conjunction Commutativity: (A ∧ B) → (B ∧ A)",
      formula: Imp(And(FreeVar("A"), FreeVar("B")), And(FreeVar("B"), FreeVar("A"))),
      proofScript: ["intro H", "destruct H", "split", "exact H_2", "exact H_1", "qed"]
    },
    or_comm: {
      name: "or_comm",
      desc: "Disjunction Commutativity: (A ∨ B) → (B ∨ A)",
      formula: Imp(Or(FreeVar("A"), FreeVar("B")), Or(FreeVar("B"), FreeVar("A"))),
      proofScript: ["intro H", "destruct H", "right", "exact H_l", "left", "exact H_r", "qed"]
    },
    identity: {
      name: "identity",
      desc: "Law of Identity: (P → Q) → (P → Q)",
      formula: Imp(Imp(FreeVar("P"), FreeVar("Q")), Imp(FreeVar("P"), FreeVar("Q"))),
      proofScript: ["intro H1", "intro H2", "auto", "qed"]
    }
  };

  window.Obelisk = {
    FreeVar, Const, In, Eq, Not, And, Or, Imp, Forall,
    ProofState, PRESETS
  };

})(window);
