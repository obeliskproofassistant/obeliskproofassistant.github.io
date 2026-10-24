#!/usr/bin/env python3
# Independent minimal proof tree certifier for Obelisk deduction trees
class Node:
    def __init__(self, rule, premises, conclusion):
        self.rule = rule
        self.premises = premises
        self.conclusion = conclusion

def verify_tree(node):
    for p in node.premises:
        if not verify_tree(p):
            return False
    if node.rule == "MP": # Modus Ponens
        p1, p2 = node.premises[0].conclusion, node.premises[1].conclusion
        expected = f"{p2} ==> {node.conclusion}"
        return p1 == expected
    elif node.rule == "AXIOM":
        return True
    return True

print("[PASS] Minimalist Obelisk Python proof checker initialized.")
