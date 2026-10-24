// Obelisk In-Browser Simulated REPL Engine
class ObeliskREPL {
  constructor(outputElement) {
    this.out = outputElement;
    this.history = [];
    this.theorems = new Map();
    this.initDefaultTheorems();
  }

  initDefaultTheorems() {
    this.theorems.set("empty_unique", "Theorem 1: forall A B. isEmpty(A) /\\ isEmpty(B) ==> A = B");
    this.theorems.set("russell", "Theorem 5: ~(isSet(V))");
    this.theorems.set("tagged_pair_proj", "Theorem 9: pi1(pair_tag(A, B)) = A /\\ pi2(pair_tag(A, B)) = B");
  }

  evalCommand(cmd) {
    cmd = cmd.trim();
    if (!cmd) return "";
    this.history.push(cmd);

    if (cmd === "help") {
      return "Commands: axioms, theorems, check <theorem>, #print <name>, reset";
    }
    if (cmd === "axioms") {
      return "Loaded Axioms: Comprehension (3.01), Heredity (3.12), Exponent (3.13), Regularity (3.14), TaggedPairs (3.45-3.47)";
    }
    if (cmd === "theorems") {
      return Array.from(this.theorems.values()).join("\n");
    }
    if (cmd.startsWith("check ")) {
      const thm = cmd.substring(6);
      return `[OK] Proof tree for '${thm}' verified with 0 errors. Zero implicit computation.`;
    }
    return `Syntactic verification complete: 1 goal closed. Result: True.`;
  }
}

if (typeof window !== 'undefined') {
  window.ObeliskREPL = ObeliskREPL;
}
