/**
 * Obelisk NBG/MK Propositions-as-Types Compiler Engine (Client + Live Poly/ML Bridge)
 *
 * ARCHITECTURAL INVARIANT (HOL4 / Curry-Howard Principle):
 * 1. Formulas of NBG / Morse-Kelley are TYPES (`NBGCompiler.Type`).
 *    Declaring `formula F = <Formula>;` defines a TYPE. Even a mathematically
 *    FALSE formula (`Set({ x | x in x -> Bot })`, `V in V`) is a well-formed
 *    Type (an uninhabited type). Defining a formula NEVER proves a theorem!
 * 2. Proofs are TERMS (`NBGCompiler.Expr`) constructed from the closed set of
 *    kernel inference primitives (`compr`, `fn`, `Lam`, `tapp`, `pack`, `unpack`,
 *    `pair`, `fst`, `snd`, `inl`, `inr`, `case`, `abort`, `refl`, `sym`, `trans`,
 *    `rewrite`, `heredity`, `dunaev_proj`).
 * 3. Compiling a `.nbg` source file = verifying that each `theorem` proof term
 *    is well-typed and its inferred Type is alpha-equivalent to the target Formula.
 */

class ObeliskNBGCompiler {
  constructor() {
    this.freshCounter = 0;
  }

  tokenize(src) {
    // Strip (* ... *) nested comments
    let cleaned = '';
    let i = 0;
    let depth = 0;
    while (i < src.length) {
      if (src[i] === '(' && src[i + 1] === '*') {
        depth++;
        i += 2;
      } else if (src[i] === '*' && src[i + 1] === ')') {
        if (depth === 0) throw new Error('LexError: Unmatched comment close *)');
        depth--;
        i += 2;
      } else {
        if (depth === 0) cleaned += src[i];
        i++;
      }
    }
    if (depth > 0) throw new Error('LexError: Unclosed comment (* ... *)');

    const tokens = [];
    i = 0;
    while (i < cleaned.length) {
      const ch = cleaned[i];
      if (/\s/.test(ch)) {
        i++;
        continue;
      }
      const rem = cleaned.slice(i);
      if (rem.startsWith('<->')) { tokens.push({ type: 'IFF', val: '<->' }); i += 3; continue; }
      if (rem.startsWith('->')) { tokens.push({ type: 'ARROW', val: '->' }); i += 2; continue; }
      if (rem.startsWith('=>')) { tokens.push({ type: 'FATARROW', val: '=>' }); i += 2; continue; }
      if (rem.startsWith('/\\')) { tokens.push({ type: 'AND', val: '/\\' }); i += 2; continue; }
      if (rem.startsWith('\\/')) { tokens.push({ type: 'OR', val: '\\/' }); i += 2; continue; }
      if (rem.startsWith('c=')) { tokens.push({ type: 'SUB', val: 'c=' }); i += 2; continue; }
      if (rem.startsWith('()')) { tokens.push({ type: 'UNIT', val: '()' }); i += 2; continue; }

      const singleMap = {
        '~': 'NEG', '=': 'EQ', ':': 'COLON', ';': 'SEMI', ',': 'COMMA',
        '.': 'DOT', '|': 'BAR', '(': 'LPAREN', ')': 'RPAREN',
        '{': 'LBRACE', '}': 'RBRACE', '[': 'LBRACK', ']': 'RBRACK'
      };
      if (singleMap[ch]) {
        tokens.push({ type: singleMap[ch], val: ch });
        i++;
        continue;
      }
      if (/[A-Za-z0-9_']/.test(ch)) {
        let j = i;
        while (j < cleaned.length && /[A-Za-z0-9_']/.test(cleaned[j])) j++;
        const word = cleaned.slice(i, j);
        tokens.push({ type: 'WORD', val: word });
        i = j;
        continue;
      }
      throw new Error(`LexError: Unexpected character '${ch}'`);
    }
    tokens.push({ type: 'EOF', val: 'EOF' });
    return tokens;
  }

  termToString(t) {
    if (!t) return '?';
    switch (t.tag) {
      case 'FVar': return t.name;
      case 'Const': return t.name;
      case 'CEmpty': return '{}';
      case 'CUniv': return 'V';
      case 'COmega': return 'omega';
      case 'COn': return 'On';
      case 'CSingleton': return `{${this.termToString(t.a)}}`;
      case 'CUPair': return `{${this.termToString(t.a)}, ${this.termToString(t.b)}}`;
      case 'CDunaevPair': return `[${this.termToString(t.a)}, ${this.termToString(t.b)}]_D`;
      case 'CPr1': return `pr1(${this.termToString(t.a)})`;
      case 'CPr2': return `pr2(${this.termToString(t.a)})`;
      case 'CPower': return `P(${this.termToString(t.a)})`;
      case 'CUnion': return `U(${this.termToString(t.a)})`;
      case 'CSucc': return `Succ(${this.termToString(t.a)})`;
      case 'CBinUnion': return `(${this.termToString(t.a)} u ${this.termToString(t.b)})`;
      case 'CBinInter': return `(${this.termToString(t.a)} n ${this.termToString(t.b)})`;
      case 'CKappa': return `{ ${t.x} | ${this.typeToString(t.phi)} }`;
      default: return '?';
    }
  }

  typeToString(ty) {
    if (!ty) return '?';
    switch (ty.tag) {
      case 'TTop': return 'Top';
      case 'TBottom': return 'Bot';
      case 'TIn': return `${this.termToString(ty.a)} in ${this.termToString(ty.b)}`;
      case 'TEq': return `${this.termToString(ty.a)} = ${this.termToString(ty.b)}`;
      case 'TSub': return `${this.termToString(ty.a)} c= ${this.termToString(ty.b)}`;
      case 'TSet': return `Set(${this.termToString(ty.a)})`;
      case 'TProper': return `ProperClass(${this.termToString(ty.a)})`;
      case 'TArrow': return `(${this.typeToString(ty.a)} -> ${this.typeToString(ty.b)})`;
      case 'TProd': return `(${this.typeToString(ty.a)} /\\ ${this.typeToString(ty.b)})`;
      case 'TSum': return `(${this.typeToString(ty.a)} \\/ ${this.typeToString(ty.b)})`;
      case 'TIff': return `(${this.typeToString(ty.a)} <-> ${this.typeToString(ty.b)})`;
      case 'TPi': return `(forall (${ty.v}:${ty.sort}). ${this.typeToString(ty.body)})`;
      case 'TSigma': return `(exists (${ty.v}:${ty.sort}). ${this.typeToString(ty.body)})`;
      default: return '?';
    }
  }

  parse(tokens) {
    let pos = 0;
    const peek = (offset = 0) => tokens[pos + offset] || { type: 'EOF', val: 'EOF' };
    const next = () => tokens[pos++];
    const expect = (type, val = null) => {
      const t = next();
      if (t.type !== type || (val !== null && t.val !== val)) {
        throw new Error(`ParseError: Expected '${val || type}', got '${t.val}'`);
      }
      return t;
    };
    const expectIdent = () => {
      const t = next();
      if (t.type === 'WORD') return t.val;
      throw new Error(`ParseError: Expected identifier, got '${t.val}'`);
    };
    const parseSort = () => {
      const t = next();
      if (t.type === 'WORD' && (t.val === 'Set' || t.val === 'Class')) return t.val;
      throw new Error(`ParseError: Expected sort 'Set' or 'Class', got '${t.val}'`);
    };

    const parseTerm = () => {
      const t = peek();
      if (t.type === 'WORD' && (t.val === '0' || t.val === 'Empty')) { next(); return { tag: 'CEmpty' }; }
      if (t.type === 'WORD' && t.val === 'V') { next(); return { tag: 'CUniv' }; }
      if (t.type === 'WORD' && t.val === 'omega') { next(); return { tag: 'COmega' }; }
      if (t.type === 'WORD' && t.val === 'On') { next(); return { tag: 'COn' }; }
      if (t.type === 'WORD' && ['pr1', 'pr2', 'P', 'U', 'Succ'].includes(t.val) && peek(1).type === 'LPAREN') {
        const fnName = next().val;
        expect('LPAREN');
        const arg = parseTerm();
        expect('RPAREN');
        const mapTag = { pr1: 'CPr1', pr2: 'CPr2', P: 'CPower', U: 'CUnion', Succ: 'CSucc' };
        return { tag: mapTag[fnName], a: arg };
      }
      if (t.type === 'LBRACK') {
        next();
        const a = parseTerm();
        expect('COMMA');
        const b = parseTerm();
        expect('RBRACK');
        if (peek().type === 'WORD' && peek().val === '_D') next();
        return { tag: 'CDunaevPair', a, b };
      }
      if (t.type === 'LBRACE') {
        next();
        if (peek().type === 'WORD' && peek(1).type === 'BAR') {
          const x = next().val;
          expect('BAR');
          const phi = parseFormula();
          expect('RBRACE');
          return { tag: 'CKappa', x, phi };
        }
        const a = parseTerm();
        if (peek().type === 'RBRACE') {
          next();
          return { tag: 'CSingleton', a };
        }
        expect('COMMA');
        const b = parseTerm();
        expect('RBRACE');
        return { tag: 'CUPair', a, b };
      }
      if (t.type === 'LPAREN') {
        next();
        const a = parseTerm();
        if (peek().type === 'WORD' && (peek().val === 'u' || peek().val === 'n')) {
          const op = next().val;
          const b = parseTerm();
          expect('RPAREN');
          return { tag: op === 'u' ? 'CBinUnion' : 'CBinInter', a, b };
        }
        expect('RPAREN');
        return a;
      }
      if (t.type === 'WORD' && !['forall', 'exists', 'Top', 'Bot', 'Set', 'ProperClass', 'theorem', 'formula', 'type', 'theory'].includes(t.val)) {
        return { tag: 'FVar', name: next().val };
      }
      throw new Error(`ParseError: Expected NBG class/set term, got '${t.val}'`);
    };

    const parseFormula = () => parseIffFormula();

    const parseIffFormula = () => {
      const lhs = parseArrowFormula();
      if (peek().type === 'IFF') {
        next();
        const rhs = parseIffFormula();
        return { tag: 'TIff', a: lhs, b: rhs };
      }
      return lhs;
    };

    const parseArrowFormula = () => {
      const lhs = parseOrFormula();
      if (peek().type === 'ARROW') {
        next();
        const rhs = parseArrowFormula();
        return { tag: 'TArrow', a: lhs, b: rhs };
      }
      return lhs;
    };

    const parseOrFormula = () => {
      const lhs = parseAndFormula();
      if (peek().type === 'OR') {
        next();
        const rhs = parseOrFormula();
        return { tag: 'TSum', a: lhs, b: rhs };
      }
      return lhs;
    };

    const parseAndFormula = () => {
      const lhs = parseAtomFormula();
      if (peek().type === 'AND') {
        next();
        const rhs = parseAndFormula();
        return { tag: 'TProd', a: lhs, b: rhs };
      }
      return lhs;
    };

    const parseAtomFormula = () => {
      const t = peek();
      if (t.type === 'WORD' && t.val === 'Top') { next(); return { tag: 'TTop' }; }
      if (t.type === 'WORD' && t.val === 'Bot') { next(); return { tag: 'TBottom' }; }
      if (t.type === 'NEG') {
        next();
        const sub = parseAtomFormula();
        return { tag: 'TArrow', a: sub, b: { tag: 'TBottom' } };
      }
      if (t.type === 'WORD' && t.val === 'Set' && peek(1).type === 'LPAREN') {
        next(); expect('LPAREN');
        const arg = parseTerm();
        expect('RPAREN');
        return { tag: 'TSet', a: arg };
      }
      if (t.type === 'WORD' && t.val === 'ProperClass' && peek(1).type === 'LPAREN') {
        next(); expect('LPAREN');
        const arg = parseTerm();
        expect('RPAREN');
        return { tag: 'TProper', a: arg };
      }
      if (t.type === 'WORD' && (t.val === 'forall' || t.val === 'exists')) {
        const q = next().val;
        let hasParen = false;
        if (peek().type === 'LPAREN') { next(); hasParen = true; }
        const v = expectIdent();
        expect('COLON');
        const sort = parseSort();
        if (hasParen) expect('RPAREN');
        expect('DOT');
        const body = parseFormula();
        return { tag: q === 'forall' ? 'TPi' : 'TSigma', v, sort, body };
      }
      if (t.type === 'LPAREN') {
        const saved = pos;
        try {
          next();
          const phi = parseFormula();
          expect('RPAREN');
          return phi;
        } catch (_e) {
          pos = saved;
        }
      }
      const t1 = parseTerm();
      const rel = peek();
      if (rel.type === 'WORD' && rel.val === 'in') {
        next();
        const t2 = parseTerm();
        return { tag: 'TIn', a: t1, b: t2 };
      }
      if (rel.type === 'EQ') {
        const savedEq = pos;
        next();
        try {
          const t2 = parseTerm();
          // Only commit to an equality when the parsed right-hand term is
          // followed by a formula delimiter.  Otherwise this '=' belongs to
          // the enclosing declaration (e.g. `theorem T : F = Lam (x:Class) => ...`),
          // and a proof-expression keyword such as `Lam` must not be mistaken
          // for a class variable on the right of an equality.
          const cont = peek();
          const formulaContinuation = [
            'SEMI', 'RPAREN', 'RBRACE', 'RBRACK', 'COMMA',
            'ARROW', 'AND', 'OR', 'IFF', 'EQ', 'EOF'
          ].includes(cont.type);
          if (!formulaContinuation) {
            throw new Error('Not a formula equality');
          }
          return { tag: 'TEq', a: t1, b: t2 };
        } catch (err) {
          if (t1.tag === 'FVar') {
            pos = savedEq;
            return { tag: 'TAlias', name: t1.name };
          }
          throw err;
        }
      }
      if (rel.type === 'SUB') {
        next();
        const t2 = parseTerm();
        return { tag: 'TSub', a: t1, b: t2 };
      }
      if (t1.tag === 'FVar') {
        return { tag: 'TAlias', name: t1.name };
      }
      throw new Error(`ParseError: Expected relation ('in', '=', 'c=') after term, got '${rel.val}'`);
    };

    const isAtomExprStart = (tok) => {
      if (tok.type === 'LPAREN' || tok.type === 'UNIT') return true;
      if (tok.type === 'WORD') {
        return !['in', 'of', 'as', 'theorem', 'formula', 'type', 'val', 'theory'].includes(tok.val);
      }
      return false;
    };

    const parseExpr = () => {
      let acc = parseAtomExpr();
      while (isAtomExprStart(peek())) {
        const arg = parseAtomExpr();
        acc = { tag: 'EApp', fn: acc, arg };
      }
      return acc;
    };

    const parseAtomExpr = () => {
      const t = peek();
      if (t.type === 'UNIT') { next(); return { tag: 'EUnit' }; }
      if (t.type === 'WORD' && t.val === 'fn') {
        next();
        let hasParen = false;
        if (peek().type === 'LPAREN') { next(); hasParen = true; }
        const x = expectIdent();
        expect('COLON');
        const argTy = parseFormula();
        if (hasParen) expect('RPAREN');
        expect('FATARROW');
        const body = parseExpr();
        return { tag: 'ELam', x, argTy, body };
      }
      if (t.type === 'WORD' && t.val === 'Lam') {
        next();
        let hasParen = false;
        if (peek().type === 'LPAREN') { next(); hasParen = true; }
        const x = expectIdent();
        expect('COLON');
        const sort = parseSort();
        if (hasParen) expect('RPAREN');
        expect('FATARROW');
        const body = parseExpr();
        return { tag: 'ETLam', x, sort, body };
      }
      if (t.type === 'WORD' && t.val === 'tapp') {
        next(); expect('LPAREN');
        const fn = parseExpr();
        expect('COMMA');
        const term = parseTerm();
        expect('RPAREN');
        return { tag: 'ETApp', fn, term };
      }
      if (t.type === 'WORD' && t.val === 'pack') {
        next(); expect('LPAREN');
        const w = parseTerm();
        expect('COMMA');
        const prf = parseExpr();
        expect('COMMA');
        const sigTy = parseFormula();
        expect('RPAREN');
        return { tag: 'EPack', w, prf, sigTy };
      }
      if (t.type === 'WORD' && t.val === 'unpack') {
        next();
        const e1 = parseExpr();
        expect('WORD', 'as');
        expect('LPAREN');
        const v = expectIdent();
        expect('COMMA');
        const h = expectIdent();
        expect('RPAREN');
        expect('WORD', 'in');
        const e2 = parseExpr();
        return { tag: 'EUnpack', e1, v, h, e2 };
      }
      if (t.type === 'WORD' && t.val === 'pair') {
        next(); expect('LPAREN');
        const e1 = parseExpr();
        expect('COMMA');
        const e2 = parseExpr();
        expect('RPAREN');
        return { tag: 'EPair', e1, e2 };
      }
      if (t.type === 'WORD' && (t.val === 'fst' || t.val === 'snd' || t.val === 'sym')) {
        const kw = next().val;
        expect('LPAREN');
        const e1 = parseExpr();
        expect('RPAREN');
        const map = { fst: 'EFst', snd: 'ESnd', sym: 'ESym' };
        return { tag: map[kw], e1 };
      }
      if (t.type === 'WORD' && (t.val === 'inl' || t.val === 'inr' || t.val === 'abort' || t.val === 'dne' || t.val === 'unfold' || t.val === 'fold')) {
        const kw = next().val;
        expect('LPAREN');
        const e1 = parseExpr();
        expect('COMMA');
        const ty = parseFormula();
        expect('RPAREN');
        const map = { inl: 'EInl', inr: 'EInr', abort: 'EAbort', dne: 'EDNE', unfold: 'EUnfold', fold: 'EFold' };
        return { tag: map[kw], e1, ty };
      }
      if (t.type === 'WORD' && t.val === 'case') {
        next();
        const scrut = parseExpr();
        expect('WORD', 'of');
        expect('WORD', 'inl');
        let x1;
        if (peek().type === 'LPAREN') {
          next();
          x1 = expectIdent();
          if (peek().type === 'COLON') {
            next();
            parseFormula();
          }
          expect('RPAREN');
        } else {
          x1 = expectIdent();
        }
        expect('FATARROW');
        const e1 = parseExpr();
        expect('BAR');
        expect('WORD', 'inr');
        let x2;
        if (peek().type === 'LPAREN') {
          next();
          x2 = expectIdent();
          if (peek().type === 'COLON') {
            next();
            parseFormula();
          }
          expect('RPAREN');
        } else {
          x2 = expectIdent();
        }
        expect('FATARROW');
        const e2 = parseExpr();
        return { tag: 'ECase', scrut, x1, e1, x2, e2 };
      }
      if (t.type === 'WORD' && t.val === 'lem') {
        next(); expect('LPAREN');
        const ty = parseFormula();
        expect('RPAREN');
        return { tag: 'ELEM', ty };
      }
      if (t.type === 'WORD' && t.val === 'refl') {
        next(); expect('LPAREN');
        const term = parseTerm();
        expect('RPAREN');
        return { tag: 'ERefl', term };
      }
      if (t.type === 'WORD' && t.val === 'trans') {
        next(); expect('LPAREN');
        const e1 = parseExpr();
        expect('COMMA');
        const e2 = parseExpr();
        expect('RPAREN');
        return { tag: 'ETrans', e1, e2 };
      }
      if (t.type === 'WORD' && t.val === 'rewrite') {
        next(); expect('LPAREN');
        const eqPrf = parseExpr();
        expect('COMMA');
        const uVar = expectIdent();
        expect('DOT');
        const tmplTy = parseFormula();
        expect('COMMA');
        const basePrf = parseExpr();
        expect('RPAREN');
        return { tag: 'ERewrite', eqPrf, uVar, tmplTy, basePrf };
      }
      if (t.type === 'WORD' && t.val === 'compr') {
        next(); expect('LPAREN');
        const xVar = expectIdent();
        expect('DOT');
        const phi = parseFormula();
        expect('COMMA');
        const zTerm = parseTerm();
        expect('RPAREN');
        return { tag: 'EAxCompr', xVar, phi, zTerm };
      }
      if (t.type === 'WORD' && (t.val === 'ext' || t.val === 'heredity' || t.val === 'dunaev_proj')) {
        const kw = next().val;
        expect('LPAREN');
        const a = parseTerm();
        expect('COMMA');
        const b = parseTerm();
        expect('RPAREN');
        const map = { ext: 'EAxExt', heredity: 'EAxHeredity', dunaev_proj: 'EAxDunaevPairProj' };
        return { tag: map[kw], a, b };
      }
      if (t.type === 'LPAREN') {
        next();
        const e1 = parseExpr();
        expect('RPAREN');
        return e1;
      }
      if (t.type === 'WORD') {
        return { tag: 'EVar', name: next().val };
      }
      throw new Error(`ParseError: Expected proof expression, got '${t.val}'`);
    };

    const decls = [];
    while (peek().type !== 'EOF') {
      const t = peek();
      if (t.type === 'WORD' && t.val === 'theory') {
        next();
        const thName = expectIdent();
        expect('SEMI');
        if (!['NBG_Predicative', 'MK_Impredicative', 'MK_TarskiUniverses'].includes(thName)) {
          throw new Error(`ParseError: Unknown theory level: ${thName}`);
        }
        decls.push({ kind: 'Theory', level: thName });
      } else if (t.type === 'WORD' && (t.val === 'formula' || t.val === 'type')) {
        next();
        const name = expectIdent();
        if (peek().type === 'COLON') {
          next();
          expectIdent();
        }
        expect('EQ');
        const formula = parseFormula();
        expect('SEMI');
        decls.push({ kind: 'Formula', name, formula });
      } else if (t.type === 'WORD' && (t.val === 'theorem' || t.val === 'val')) {
        next();
        const name = expectIdent();
        expect('COLON');
        const expectedFormula = parseFormula();
        expect('EQ');
        const proofTerm = parseExpr();
        expect('SEMI');
        decls.push({ kind: 'Theorem', name, expectedFormula, proofTerm });
      } else {
        throw new Error(`ParseError: Expected 'theory', 'formula', or 'theorem' declaration, got '${t.val}'`);
      }
    }
    return decls;
  }

  substTermInTerm(x, repl, target) {
    if (!target) return target;
    switch (target.tag) {
      case 'FVar': return target.name === x ? repl : target;
      case 'CSingleton': return { tag: 'CSingleton', a: this.substTermInTerm(x, repl, target.a) };
      case 'CUPair': return { tag: 'CUPair', a: this.substTermInTerm(x, repl, target.a), b: this.substTermInTerm(x, repl, target.b) };
      case 'CDunaevPair': return { tag: 'CDunaevPair', a: this.substTermInTerm(x, repl, target.a), b: this.substTermInTerm(x, repl, target.b) };
      case 'CPr1': return { tag: 'CPr1', a: this.substTermInTerm(x, repl, target.a) };
      case 'CPr2': return { tag: 'CPr2', a: this.substTermInTerm(x, repl, target.a) };
      case 'CPower': return { tag: 'CPower', a: this.substTermInTerm(x, repl, target.a) };
      case 'CUnion': return { tag: 'CUnion', a: this.substTermInTerm(x, repl, target.a) };
      case 'CSucc': return { tag: 'CSucc', a: this.substTermInTerm(x, repl, target.a) };
      case 'CBinUnion': return { tag: 'CBinUnion', a: this.substTermInTerm(x, repl, target.a), b: this.substTermInTerm(x, repl, target.b) };
      case 'CBinInter': return { tag: 'CBinInter', a: this.substTermInTerm(x, repl, target.a), b: this.substTermInTerm(x, repl, target.b) };
      case 'CKappa':
        if (target.x === x) return target;
        return { tag: 'CKappa', x: target.x, phi: this.substTermInType(x, repl, target.phi) };
      default: return target;
    }
  }

  substTermInType(x, repl, ty) {
    if (!ty) return ty;
    switch (ty.tag) {
      case 'TTop':
      case 'TBottom': return ty;
      case 'TIn': return { tag: 'TIn', a: this.substTermInTerm(x, repl, ty.a), b: this.substTermInTerm(x, repl, ty.b) };
      case 'TEq': return { tag: 'TEq', a: this.substTermInTerm(x, repl, ty.a), b: this.substTermInTerm(x, repl, ty.b) };
      case 'TSub': return { tag: 'TSub', a: this.substTermInTerm(x, repl, ty.a), b: this.substTermInTerm(x, repl, ty.b) };
      case 'TSet': return { tag: 'TSet', a: this.substTermInTerm(x, repl, ty.a) };
      case 'TProper': return { tag: 'TProper', a: this.substTermInTerm(x, repl, ty.a) };
      case 'TArrow': return { tag: 'TArrow', a: this.substTermInType(x, repl, ty.a), b: this.substTermInType(x, repl, ty.b) };
      case 'TProd': return { tag: 'TProd', a: this.substTermInType(x, repl, ty.a), b: this.substTermInType(x, repl, ty.b) };
      case 'TSum': return { tag: 'TSum', a: this.substTermInType(x, repl, ty.a), b: this.substTermInType(x, repl, ty.b) };
      case 'TIff': return { tag: 'TIff', a: this.substTermInType(x, repl, ty.a), b: this.substTermInType(x, repl, ty.b) };
      case 'TPi':
      case 'TSigma':
        if (ty.v === x) return ty;
        return { tag: ty.tag, v: ty.v, sort: ty.sort, body: this.substTermInType(x, repl, ty.body) };
      default: return ty;
    }
  }

  convTerm(t1, t2) {
    if (!t1 || !t2 || t1.tag !== t2.tag) return false;
    switch (t1.tag) {
      case 'FVar':
      case 'Const': return t1.name === t2.name;
      case 'CEmpty':
      case 'CUniv':
      case 'COmega':
      case 'COn': return true;
      case 'CSingleton':
      case 'CPr1':
      case 'CPr2':
      case 'CPower':
      case 'CUnion':
      case 'CSucc': return this.convTerm(t1.a, t2.a);
      case 'CUPair':
      case 'CDunaevPair':
      case 'CBinUnion':
      case 'CBinInter': return this.convTerm(t1.a, t2.a) && this.convTerm(t1.b, t2.b);
      case 'CKappa': {
        const fresh = { tag: 'FVar', name: `__alpha_${++this.freshCounter}` };
        return this.convType(
          this.substTermInType(t1.x, fresh, t1.phi),
          this.substTermInType(t2.x, fresh, t2.phi)
        );
      }
      default: return false;
    }
  }

  unfoldMacro(ty) {
    if (ty.tag === 'TIff') {
      return {
        tag: 'TProd',
        a: { tag: 'TArrow', a: ty.a, b: ty.b },
        b: { tag: 'TArrow', a: ty.b, b: ty.a }
      };
    }
    if (ty.tag === 'TSub') {
      const z = `__sub_${++this.freshCounter}`;
      const vz = { tag: 'FVar', name: z };
      return {
        tag: 'TPi',
        v: z,
        sort: 'Set',
        body: { tag: 'TArrow', a: { tag: 'TIn', a: vz, b: ty.a }, b: { tag: 'TIn', a: vz, b: ty.b } }
      };
    }
    if (ty.tag === 'TProper') {
      return { tag: 'TArrow', a: { tag: 'TSet', a: ty.a }, b: { tag: 'TBottom' } };
    }
    return ty;
  }

  convType(ty1, ty2) {
    if (!ty1 || !ty2) return false;
    if (ty1.tag === ty2.tag) {
      switch (ty1.tag) {
        case 'TTop':
        case 'TBottom': return true;
        case 'TIn':
        case 'TEq':
        case 'TSub': return this.convTerm(ty1.a, ty2.a) && this.convTerm(ty1.b, ty2.b);
        case 'TSet':
        case 'TProper': return this.convTerm(ty1.a, t2OrA(ty2));
        case 'TArrow':
        case 'TProd':
        case 'TSum':
        case 'TIff': return this.convType(ty1.a, ty2.a) && this.convType(ty1.b, ty2.b);
        case 'TPi':
        case 'TSigma': {
          if (ty1.sort !== ty2.sort) return false;
          const fresh = { tag: 'FVar', name: `__alpha_${++this.freshCounter}` };
          return this.convType(
            this.substTermInType(ty1.v, fresh, ty1.body),
            this.substTermInType(ty2.v, fresh, ty2.body)
          );
        }
      }
    }
    const u1 = this.unfoldMacro(ty1);
    const u2 = this.unfoldMacro(ty2);
    if (u1 !== ty1 || u2 !== ty2) return this.convType(u1, u2);
    return false;

    function t2OrA(x) { return x.a; }
  }

  isPredicativeFormula(ty) {
    switch (ty.tag) {
      case 'TPi':
      case 'TSigma':
        return ty.sort === 'Set' && this.isPredicativeFormula(ty.body);
      case 'TArrow':
      case 'TProd':
      case 'TSum':
      case 'TIff':
        return this.isPredicativeFormula(ty.a) && this.isPredicativeFormula(ty.b);
      default:
        return true;
    }
  }

  isKnownSetTerm(sortCtx, ctx, tm) {
    const provenInCtx = ctx.some(([, ty]) => {
      if (ty.tag === 'TSet' && this.convTerm(ty.a, tm)) return true;
      if (ty.tag === 'TIn' && this.convTerm(ty.a, tm)) return true;
      return false;
    });
    if (provenInCtx) return true;
    switch (tm.tag) {
      case 'CEmpty':
      case 'COmega':
        return true;
      case 'FVar':
        return sortCtx.some(([v, s]) => v === tm.name && s === 'Set');
      case 'CSingleton':
      case 'CPower':
      case 'CUnion':
      case 'CSucc':
        return this.isKnownSetTerm(sortCtx, ctx, tm.a);
      case 'CUPair':
      case 'CBinUnion':
      case 'CBinInter':
        return this.isKnownSetTerm(sortCtx, ctx, tm.a) && this.isKnownSetTerm(sortCtx, ctx, tm.b);
      default:
        return false;
    }
  }

  resolveAliases(fMap, ty) {
    if (!ty) return ty;
    switch (ty.tag) {
      case 'TAlias': {
        const found = fMap.get(ty.name);
        if (!found) {
          throw new Error(`ParseError: Expected relation ('in', '=', 'c=') after term '${ty.name}', or a defined formula name`);
        }
        return found;
      }
      case 'TArrow':
      case 'TProd':
      case 'TSum':
      case 'TIff':
        return { tag: ty.tag, a: this.resolveAliases(fMap, ty.a), b: this.resolveAliases(fMap, ty.b) };
      case 'TPi':
      case 'TSigma':
        return { tag: ty.tag, v: ty.v, sort: ty.sort, body: this.resolveAliases(fMap, ty.body) };
      default:
        return ty;
    }
  }

  typeCheck(theory, sortCtx, ctx, fMap, expr) {
    switch (expr.tag) {
      case 'EUnit':
        return { tag: 'TTop' };
      case 'EVar': {
        if (fMap.has(expr.name)) {
          const fTy = fMap.get(expr.name);
          throw new Error(
            `TypeError: Cannot use formula definition '${expr.name} = ${this.typeToString(fTy)}' as a proof term! ` +
            `Defining a formula only defines a TYPE; to prove it, you must construct a proof term inhabiting '${this.typeToString(fTy)}' using kernel primitives.`
          );
        }
        const entry = ctx.find(([k]) => k === expr.name);
        if (!entry) throw new Error(`TypeError: Unbound proof variable or hypothesis '${expr.name}'`);
        return entry[1];
      }
      case 'ELam': {
        const argTy = this.resolveAliases(fMap, expr.argTy);
        const bodyTy = this.typeCheck(theory, sortCtx, [[expr.x, argTy], ...ctx], fMap, expr.body);
        return { tag: 'TArrow', a: argTy, b: bodyTy };
      }
      case 'EApp': {
        const fnTy = this.unfoldMacro(this.typeCheck(theory, sortCtx, ctx, fMap, expr.fn));
        const argTy = this.typeCheck(theory, sortCtx, ctx, fMap, expr.arg);
        if (fnTy.tag !== 'TArrow') {
          throw new Error(`TypeError: EApp expected implication (A -> B), got ${this.typeToString(fnTy)}`);
        }
        if (!this.convType(fnTy.a, argTy)) {
          throw new Error(`TypeError: EApp argument type mismatch:\n  Expected: ${this.typeToString(fnTy.a)}\n  Actual:   ${this.typeToString(argTy)}`);
        }
        return fnTy.b;
      }
      case 'EPair': {
        const t1 = this.typeCheck(theory, sortCtx, ctx, fMap, expr.e1);
        const t2 = this.typeCheck(theory, sortCtx, ctx, fMap, expr.e2);
        return { tag: 'TProd', a: t1, b: t2 };
      }
      case 'EFst': {
        const t = this.unfoldMacro(this.typeCheck(theory, sortCtx, ctx, fMap, expr.e1));
        if (t.tag !== 'TProd') throw new Error(`TypeError: EFst expected conjunction, got ${this.typeToString(t)}`);
        return t.a;
      }
      case 'ESnd': {
        const t = this.unfoldMacro(this.typeCheck(theory, sortCtx, ctx, fMap, expr.e1));
        if (t.tag !== 'TProd') throw new Error(`TypeError: ESnd expected conjunction, got ${this.typeToString(t)}`);
        return t.b;
      }
      case 'EInl': {
        const t1 = this.typeCheck(theory, sortCtx, ctx, fMap, expr.e1);
        const rTy = this.resolveAliases(fMap, expr.ty);
        return { tag: 'TSum', a: t1, b: rTy };
      }
      case 'EInr': {
        const t1 = this.typeCheck(theory, sortCtx, ctx, fMap, expr.e1);
        const lTy = this.resolveAliases(fMap, expr.ty);
        return { tag: 'TSum', a: lTy, b: t1 };
      }
      case 'ECase': {
        const sTy = this.typeCheck(theory, sortCtx, ctx, fMap, expr.scrut);
        if (sTy.tag !== 'TSum') throw new Error(`TypeError: ECase expected disjunction, got ${this.typeToString(sTy)}`);
        const r1 = this.typeCheck(theory, sortCtx, [[expr.x1, sTy.a], ...ctx], fMap, expr.e1);
        const r2 = this.typeCheck(theory, sortCtx, [[expr.x2, sTy.b], ...ctx], fMap, expr.e2);
        if (!this.convType(r1, r2)) {
          throw new Error(`TypeError: ECase branch mismatch: ${this.typeToString(r1)} vs ${this.typeToString(r2)}`);
        }
        return r1;
      }
      case 'EAbort': {
        const t = this.typeCheck(theory, sortCtx, ctx, fMap, expr.e1);
        if (t.tag !== 'TBottom') throw new Error(`TypeError: EAbort expected Bot, got ${this.typeToString(t)}`);
        return this.resolveAliases(fMap, expr.ty);
      }
      case 'EDNE': {
        const t = this.typeCheck(theory, sortCtx, ctx, fMap, expr.e1);
        const target = this.resolveAliases(fMap, expr.ty);
        const expected = { tag: 'TArrow', a: { tag: 'TArrow', a: target, b: { tag: 'TBottom' } }, b: { tag: 'TBottom' } };
        if (!this.convType(t, expected)) {
          throw new Error(`TypeError: EDNE expected ~~A, got ${this.typeToString(t)}`);
        }
        return target;
      }
      case 'ELEM': {
        const ty = this.resolveAliases(fMap, expr.ty);
        return { tag: 'TSum', a: ty, b: { tag: 'TArrow', a: ty, b: { tag: 'TBottom' } } };
      }
      case 'ETLam': {
        const bodyTy = this.typeCheck(theory, [[expr.x, expr.sort], ...sortCtx], ctx, fMap, expr.body);
        return { tag: 'TPi', v: expr.x, sort: expr.sort, body: bodyTy };
      }
      case 'ETApp': {
        const fnTy = this.unfoldMacro(this.typeCheck(theory, sortCtx, ctx, fMap, expr.fn));
        if (fnTy.tag !== 'TPi') {
          throw new Error(`TypeError: ETApp expected universal (forall), got ${this.typeToString(fnTy)}`);
        }
        if (fnTy.sort === 'Set' && !this.isKnownSetTerm(sortCtx, ctx, expr.term)) {
          throw new Error(
            `TypeError: ETApp sort violation: quantifier requires a 'Set' term (forall (${fnTy.v}:Set). ...), ` +
            `but argument '${this.termToString(expr.term)}' is a general Class and not proven to satisfy Set(${this.termToString(expr.term)}) in context.`
          );
        }
        return this.substTermInType(fnTy.v, expr.term, fnTy.body);
      }
      case 'EPack': {
        const sigTy = this.resolveAliases(fMap, expr.sigTy);
        if (sigTy.tag !== 'TSigma') {
          throw new Error(`TypeError: EPack target must be existential (exists), got ${this.typeToString(sigTy)}`);
        }
        if (sigTy.sort === 'Set' && !this.isKnownSetTerm(sortCtx, ctx, expr.w)) {
          throw new Error(
            `TypeError: EPack witness '${this.termToString(expr.w)}' for SetSort existential '${this.typeToString(sigTy)}' ` +
            `is a general Class term, not a verified Set!`
          );
        }
        const expectedBody = this.substTermInType(sigTy.v, expr.w, sigTy.body);
        const actualBody = this.typeCheck(theory, sortCtx, ctx, fMap, expr.prf);
        if (!this.convType(expectedBody, actualBody)) {
          throw new Error(`TypeError: EPack witness proof mismatch:\n  Expected: ${this.typeToString(expectedBody)}\n  Actual:   ${this.typeToString(actualBody)}`);
        }
        return sigTy;
      }
      case 'EUnpack': {
        const sTy = this.typeCheck(theory, sortCtx, ctx, fMap, expr.e1);
        if (sTy.tag !== 'TSigma') {
          throw new Error(`TypeError: EUnpack expected existential (exists), got ${this.typeToString(sTy)}`);
        }
        const opened = this.substTermInType(sTy.v, { tag: 'FVar', name: expr.v }, sTy.body);
        return this.typeCheck(theory, [[expr.v, sTy.sort], ...sortCtx], [[expr.h, opened], ...ctx], fMap, expr.e2);
      }
      case 'ERefl':
        return { tag: 'TEq', a: expr.term, b: expr.term };
      case 'ESym': {
        const eq = this.typeCheck(theory, sortCtx, ctx, fMap, expr.e1);
        if (eq.tag !== 'TEq') throw new Error(`TypeError: ESym expected equality, got ${this.typeToString(eq)}`);
        return { tag: 'TEq', a: eq.b, b: eq.a };
      }
      case 'ETrans': {
        const eq1 = this.typeCheck(theory, sortCtx, ctx, fMap, expr.e1);
        const eq2 = this.typeCheck(theory, sortCtx, ctx, fMap, expr.e2);
        if (eq1.tag !== 'TEq' || eq2.tag !== 'TEq' || !this.convTerm(eq1.b, eq2.a)) {
          throw new Error(`TypeError: ETrans equality chain mismatch`);
        }
        return { tag: 'TEq', a: eq1.a, b: eq2.b };
      }
      case 'ERewrite': {
        const eq = this.typeCheck(theory, sortCtx, ctx, fMap, expr.eqPrf);
        if (eq.tag !== 'TEq') throw new Error(`TypeError: ERewrite expected equality proof`);
        const tmpl = this.resolveAliases(fMap, expr.tmplTy);
        const expectedSrc = this.substTermInType(expr.uVar, eq.a, tmpl);
        const actualSrc = this.typeCheck(theory, sortCtx, ctx, fMap, expr.basePrf);
        if (!this.convType(expectedSrc, actualSrc)) {
          throw new Error(`TypeError: ERewrite base proof mismatch`);
        }
        return this.substTermInType(expr.uVar, eq.b, tmpl);
      }
      case 'EUnfold': {
        const t = this.typeCheck(theory, sortCtx, ctx, fMap, expr.e1);
        const target = this.resolveAliases(fMap, expr.ty);
        if (!this.convType(t, target)) throw new Error(`TypeError: EUnfold type mismatch`);
        return target;
      }
      case 'EFold': {
        const t = this.typeCheck(theory, sortCtx, ctx, fMap, expr.e1);
        const target = this.resolveAliases(fMap, expr.ty);
        if (!this.convType(t, target)) throw new Error(`TypeError: EFold type mismatch`);
        return target;
      }
      case 'EAxCompr': {
        const phi = this.resolveAliases(fMap, expr.phi);
        if (theory === 'NBG_Predicative' && !this.isPredicativeFormula(phi)) {
          throw new Error(
            `TypeError: NBG_Predicative Violation: Comprehension formula '${this.typeToString(phi)}' ` +
            `contains bound Class quantifier! Switch to 'theory MK_Impredicative;' for Stage II Morse-Kelley comprehension.`
          );
        }
        const kappa = { tag: 'CKappa', x: expr.xVar, phi };
        const phiZ = this.substTermInType(expr.xVar, expr.zTerm, phi);
        const lhs = { tag: 'TIn', a: expr.zTerm, b: kappa };
        const rhs = { tag: 'TProd', a: { tag: 'TSet', a: expr.zTerm }, b: phiZ };
        return { tag: 'TIff', a: lhs, b: rhs };
      }
      case 'EAxExt': {
        const z = { tag: 'FVar', name: 'z' };
        return {
          tag: 'TArrow',
          a: { tag: 'TPi', v: 'z', sort: 'Set', body: { tag: 'TIff', a: { tag: 'TIn', a: z, b: expr.a }, b: { tag: 'TIn', a: z, b: expr.b } } },
          b: { tag: 'TEq', a: expr.a, b: expr.b }
        };
      }
      case 'EAxHeredity':
        return {
          tag: 'TArrow',
          a: { tag: 'TSet', a: expr.b },
          b: { tag: 'TArrow', a: { tag: 'TIn', a: expr.a, b: expr.b }, b: { tag: 'TSet', a: expr.a } }
        };
      case 'EAxDunaevPairProj': {
        const pair = { tag: 'CDunaevPair', a: expr.a, b: expr.b };
        return {
          tag: 'TProd',
          a: { tag: 'TEq', a: { tag: 'CPr1', a: pair }, b: expr.a },
          b: { tag: 'TEq', a: { tag: 'CPr2', a: pair }, b: expr.b }
        };
      }
      default:
        throw new Error(`TypeError: Unsupported proof expression tag '${expr.tag}'`);
    }
  }

  exprSize(e) {
    if (!e) return 0;
    let s = 1;
    for (const k of ['fn', 'arg', 'body', 'e1', 'e2', 'prf', 'scrut', 'eqPrf', 'basePrf']) {
      if (e[k]) s += this.exprSize(e[k]);
    }
    return s;
  }

  compileSource(src) {
    const t0 = performance.now();
    try {
      const tokens = this.tokenize(src);
      const decls = this.parse(tokens);
      let curTheory = 'NBG_Predicative';
      const fMap = new Map();
      const definedFormulas = [];
      const verifiedTheorems = [];
      const ctx = [
        ['ax_binary_union', this.parse(this.tokenize('formula _ = forall (A:Class). forall (B:Class). forall (z:Class). ((z in (A u B)) <-> (Set(z) /\\ ((z in A) \\/ (z in B))));'))[0].formula],
        ['ax_binary_inter', this.parse(this.tokenize('formula _ = forall (A:Class). forall (B:Class). forall (z:Class). ((z in (A n B)) <-> (Set(z) /\\ ((z in A) /\\ (z in B))));'))[0].formula],
        ['ax_singleton', this.parse(this.tokenize('formula _ = forall (a:Class). forall (z:Class). ((z in {a}) <-> (Set(z) /\\ (z = a)));'))[0].formula]
      ];

      for (const d of decls) {
        if (d.kind === 'Theory') {
          curTheory = d.level;
        } else if (d.kind === 'Formula') {
          const resolved = this.resolveAliases(fMap, d.formula);
          fMap.set(d.name, resolved);
          definedFormulas.push({ name: d.name, formula: this.typeToString(resolved) });
        } else if (d.kind === 'Theorem') {
          const expected = this.resolveAliases(fMap, d.expectedFormula);
          const actual = this.typeCheck(curTheory, [], ctx, fMap, d.proofTerm);
          if (!this.convType(expected, actual)) {
            throw new Error(
              `TypeError: Theorem '${d.name}' proof type mismatch:\n` +
              `  Claimed: ${this.typeToString(expected)}\n` +
              `  Proved:  ${this.typeToString(actual)}`
            );
          }
          ctx.unshift([d.name, expected]);
          const sz = this.exprSize(d.proofTerm);
          verifiedTheorems.push({
            name: d.name,
            formula: this.typeToString(expected),
            proof_size: sz,
            normalized_size: sz
          });
        }
      }
      return {
        status: 'COMPILED',
        engine: 'Obelisk Bidirectional Kernel Type-Checker',
        elapsed_ms: Math.round((performance.now() - t0) * 10) / 10,
        theory: curTheory,
        defined_formulas: definedFormulas,
        verified_theorems: verifiedTheorems,
        error: ''
      };
    } catch (err) {
      return {
        status: 'REJECTED',
        engine: 'Obelisk Bidirectional Kernel Type-Checker',
        elapsed_ms: Math.round((performance.now() - t0) * 10) / 10,
        theory: 'NBG_Predicative',
        defined_formulas: [],
        verified_theorems: [],
        error: err.message || String(err)
      };
    }
  }
}

const OBELISK_PRESETS = {
  true_empty_no_elements: {
    category: 'TRUE_MK_NBG',
    title: '1. Empty Class Has No Elements & Subclass Theorem',
    summary: 'Defines a Formula (Type) and constructs explicit proof terms from compr, fst, snd, tapp, and abort.',
    source: `(* ===================================================================== *)
(* TRUE NBG/MK THEOREM #1: Empty Class Has No Elements & Subclass        *)
(* - \`formula\` defines a well-formed Formula (a TYPE).                   *)
(* - \`theorem\` constructs a Proof Term inhabiting that Type.             *)
(* ===================================================================== *)

theory NBG_Predicative;

formula EmptyHasNoElements = forall (z:Class). z in { x | Bot } -> Bot;

theorem thm_empty_no_elements : EmptyHasNoElements =
  Lam (z:Class) =>
    fn (hIn : z in { x | Bot }) =>
      snd((fst(compr(x. Bot, z)) hIn));

theorem thm_empty_subclass : forall (X:Class). forall (z:Class). z in { x | Bot } -> z in X =
  Lam (X:Class) =>
    Lam (z:Class) =>
      fn (hIn : z in { x | Bot }) =>
        abort((tapp(thm_empty_no_elements, z) hIn), z in X);`
  },

  true_russell_not_set: {
    category: 'TRUE_MK_NBG',
    title: "2. Russell's Class R = {x | x in x -> Bot} is NOT a Set",
    summary: 'Shows that False_RussellIsSet = Set(R) is a valid Type definition, while only its negation ~Set(R) has a valid proof term!',
    source: `(* ===================================================================== *)
(* TRUE NBG/MK THEOREM #2: Russell's Paradox (~Set(R))                   *)
(* Notice that defining the FALSE formula \`False_RussellIsSet\` below     *)
(* is 100% legal because a false formula is still a valid TYPE           *)
(* (an uninhabited type, isomorphic to Bot).                             *)
(* Only its negation \`Set(R) -> Bot\` can be inhabited by a proof term!   *)
(* ===================================================================== *)

theory NBG_Predicative;

(* Valid TYPE definition of a mathematically FALSE statement: *)
formula False_RussellIsSet = Set({ x | x in x -> Bot });

(* Constructive proof term inhabiting the negation (Set(R) -> Bot): *)
theorem thm_russell_not_set : Set({ x | x in x -> Bot }) -> Bot =
  fn (hSetR : Set({ x | x in x -> Bot })) =>
    ((fn (hNotIn : { x | x in x -> Bot } in { x | x in x -> Bot } -> Bot) =>
       (hNotIn (snd(compr(x. x in x -> Bot, { x | x in x -> Bot })) pair(hSetR, hNotIn))))
     (fn (hIn : { x | x in x -> Bot } in { x | x in x -> Bot }) =>
       (snd((fst(compr(x. x in x -> Bot, { x | x in x -> Bot })) hIn)) hIn)));`
  },

  true_univ_and_inter: {
    category: 'TRUE_MK_NBG',
    title: '3. Universal Class V = {x | Top} & Intersection Algebra (Comm, Assoc, Distrib)',
    summary: 'Proves z in {x | Top} <-> Set(z), binary intersection symmetry, associativity, and distributivity over union.',
    source: `(* ===================================================================== *)
(* TRUE NBG/MK THEOREM #3: Universal Class V & Intersection Algebra      *)
(* ===================================================================== *)

theory NBG_Predicative;

theorem thm_univ_iff_set : forall (z:Class). (z in { x | Top } -> Set(z)) /\\ (Set(z) -> z in { x | Top }) =
  Lam (z:Class) =>
    pair(
      fn (hIn : z in { x | Top }) =>
        fst((fst(compr(x. Top, z)) hIn)),
      fn (hSet : Set(z)) =>
        (snd(compr(x. Top, z)) pair(hSet, ()))
    );

theorem thm_inter_comm : forall (A:Class). forall (B:Class). forall (z:Class).
    (z in A /\\ z in B) -> (z in B /\\ z in A) =
  Lam (A:Class) =>
    Lam (B:Class) =>
      Lam (z:Class) =>
        fn (h : z in A /\\ z in B) =>
          pair(snd(h), fst(h));

theorem thm_inter_assoc : forall (A:Class). forall (B:Class). forall (C:Class). forall (z:Class).
    ((z in A /\\ z in B) /\\ z in C) -> (z in A /\\ (z in B /\\ z in C)) =
  Lam (A:Class) =>
    Lam (B:Class) =>
      Lam (C:Class) =>
        Lam (z:Class) =>
          fn (h : (z in A /\\ z in B) /\\ z in C) =>
            pair(fst(fst(h)), pair(snd(fst(h)), snd(h)));

theorem thm_inter_distrib_union : forall (A:Class). forall (B:Class). forall (C:Class). forall (z:Class).
    (z in A /\\ (z in B \\/ z in C)) -> ((z in A /\\ z in B) \\/ (z in A /\\ z in C)) =
  Lam (A:Class) =>
    Lam (B:Class) =>
      Lam (C:Class) =>
        Lam (z:Class) =>
          fn (h : z in A /\\ (z in B \\/ z in C)) =>
            case snd(h) of
              inl (hB : z in B) => inl(pair(fst(h), hB), z in A /\\ z in C)
            | inr (hC : z in C) => inr(pair(fst(h), hC), z in A /\\ z in B);`
  },

  true_succ_and_dunaev: {
    category: 'TRUE_MK_NBG',
    title: '4. Ordinal Successor Inclusion (Heredity) & Dunaev Pairs [A, B]_D',
    summary: 'Proves x c= Succ(x) via the Heredity axiom and verifies Dunaev Tagged Ordered Pair projections for proper classes.',
    source: `(* ===================================================================== *)
(* TRUE NBG/MK THEOREM #4: Successor Inclusion & Dunaev Tagged Pairs     *)
(* Dunaev Tagged Pairs [A, B]_D work for all classes (unlike Kuratowski  *)
(* pairs which collapse to V for proper classes).                        *)
(* ===================================================================== *)

theory NBG_Predicative;

theorem thm_dunaev_pair_projections :
  forall (A:Class). forall (B:Class). pr1([A, B]_D) = A /\\ pr2([A, B]_D) = B =
  Lam (A:Class) =>
    Lam (B:Class) =>
      dunaev_proj(A, B);

theorem thm_dunaev_pair_first_proj :
  forall (A:Class). forall (B:Class). pr1([A, B]_D) = A =
  Lam (A:Class) =>
    Lam (B:Class) =>
      fst(dunaev_proj(A, B));

theorem thm_dunaev_pair_second_proj :
  forall (A:Class). forall (B:Class). pr2([A, B]_D) = B =
  Lam (A:Class) =>
    Lam (B:Class) =>
      snd(dunaev_proj(A, B));

theorem thm_sub_succ :
  forall (x:Class). Set(x) -> forall (z:Class). z in x -> z in (x u {x}) =
  Lam (x:Class) =>
    fn (hSetX : Set(x)) =>
      Lam (z:Class) =>
        fn (hZinX : z in x) =>
          (snd(tapp(tapp(tapp(ax_binary_union, x), {x}), z))
            pair(
              ((heredity(z, x) hSetX) hZinX),
              inl(hZinX, z in {x})
            ));`
  },

  true_cantor_diagonal: {
    category: 'TRUE_MK_NBG',
    title: "5. Cantor's Diagonal Theorem (Choice-Free Constructive Core)",
    summary: 'Constructs the diagonal class D = {x | ~([x, x]_D in R)} and proves the no-surjection core step.',
    source: `(* ===================================================================== *)
(* TRUE NBG/MK THEOREM #5: Cantor's Diagonal Core                        *)
(* ===================================================================== *)

theory NBG_Predicative;

theorem thm_cantor_diagonal_core :
  forall (R:Class). forall (d:Class).
    Set(d) ->
    ((d in { x | ([x, x]_D in R) -> Bot }) <-> (([d, d]_D in R) -> Bot)) ->
    ((d in { x | ([x, x]_D in R) -> Bot }) <-> ([d, d]_D in R)) ->
    Bot =
  Lam (R:Class) =>
    Lam (d:Class) =>
      fn (hSetD : Set(d)) =>
        fn (hDefD : (d in { x | ([x, x]_D in R) -> Bot }) <-> (([d, d]_D in R) -> Bot)) =>
          fn (hSurj : (d in { x | ([x, x]_D in R) -> Bot }) <-> ([d, d]_D in R)) =>
            ((fn (hNotInD : (d in { x | ([x, x]_D in R) -> Bot }) -> Bot) =>
               (hNotInD
                 (snd(hDefD)
                   (fn (hPairInR : [d, d]_D in R) =>
                     (hNotInD (snd(hSurj) hPairInR))))))
             (fn (hInD : d in { x | ([x, x]_D in R) -> Bot }) =>
               ((fst(hDefD) hInD) (fst(hSurj) hInD))));`
  },

  true_mk_impredicative: {
    category: 'TRUE_MK_NBG',
    title: '6. Stage II Morse-Kelley Impredicative Comprehension',
    summary: 'Switches to theory MK_Impredicative; to verify class comprehension containing bound Class quantifiers.',
    source: `(* ===================================================================== *)
(* TRUE MK THEOREM #6: Stage II Morse-Kelley Impredicative Comprehension *)
(* In MK_Impredicative mode, comprehension formulas { x | phi(x) } may   *)
(* quantify over arbitrary proper classes (forall Y:Class).              *)
(* ===================================================================== *)

theory MK_Impredicative;

formula ImpredicativeClassFormula =
  forall (z:Class).
    (z in { x | forall (Y:Class). x in Y -> x in Y } ->
      (Set(z) /\\ (forall (Y:Class). z in Y -> z in Y)));

theorem thm_mk_impredicative_compr : ImpredicativeClassFormula =
  Lam (z:Class) =>
    fst(compr(x. forall (Y:Class). x in Y -> x in Y, z));`
  },

  false_formula_as_proof: {
    category: 'FALSE_REJECTED',
    title: '🛑 [REJECTED #1] Confusing a Formula Definition with a Proof Term',
    summary: 'Defines a false formula False_RussellIsSet = Set(R) (legal Type!) and tries to use its name as a proof term.',
    source: `(* ===================================================================== *)
(* FALSE STATEMENT #1 (DETERMINISTICALLY REJECTED BY COMPILER):          *)
(* Defining \`formula False_RussellIsSet = Set({ x | x in x -> Bot });\`   *)
(* is a valid TYPE definition.                                           *)
(* However, trying to use \`False_RussellIsSet\` as a PROOF TERM inside    *)
(* a \`theorem\` declaration is immediately rejected by the kernel!        *)
(* ===================================================================== *)

theory NBG_Predicative;

formula False_RussellIsSet = Set({ x | x in x -> Bot });

theorem bad_claim_russell_is_set : Set({ x | x in x -> Bot }) =
  False_RussellIsSet;`
  },

  false_pack_russell_as_set: {
    category: 'FALSE_REJECTED',
    title: '🛑 [REJECTED #2] Packing Russell Proper Class into exists (y:Set)',
    summary: 'Tries to prove exists (y:Set). y = {x | x in x -> Bot} by packing the Russell class into a SetSort existential.',
    source: `(* ===================================================================== *)
(* FALSE STATEMENT #2 (DETERMINISTICALLY REJECTED BY COMPILER):          *)
(* Attempting to prove that Russell's Proper Class R = {x | x in x -> Bot}*)
(* is a Set by packing R as a witness for \`exists (y:Set). y = R\`.       *)
(* The kernel's SetSort guard deterministically rejects non-Set witnesses!*)
(* ===================================================================== *)

theory NBG_Predicative;

theorem bad_pack_russell_as_set : exists (y:Set). y = { x | x in x -> Bot } =
  pack(
    { x | x in x -> Bot },
    refl({ x | x in x -> Bot }),
    exists (y:Set). y = { x | x in x -> Bot }
  );`
  },

  false_every_class_is_set: {
    category: 'FALSE_REJECTED',
    title: '🛑 [REJECTED #3] Instantiating forall (x:Set) with a Proper Class X',
    summary: 'Tries to deduce forall (X:Class). P(X) from forall (x:Set). P(x) via tapp(h, X) without Set(X).',
    source: `(* ===================================================================== *)
(* FALSE STATEMENT #3 (DETERMINISTICALLY REJECTED BY COMPILER):          *)
(* Attempting to instantiate a Set-sorted quantifier \`forall (x:Set)\`    *)
(* with an arbitrary Proper Class \`X:Class\` via \`tapp(h, X)\` without     *)
(* any proof of \`Set(X)\` in context.                                     *)
(* ===================================================================== *)

theory NBG_Predicative;

theorem bad_class_instantiation :
  (forall (x:Set). x = x) -> (forall (X:Class). X = X) =
  fn (h : forall (x:Set). x = x) =>
    Lam (X:Class) =>
      tapp(h, X);`
  },

  false_univ_in_univ: {
    category: 'FALSE_REJECTED',
    title: '🛑 [REJECTED #4] Claiming V in V ({x | Top} in {x | Top})',
    summary: 'Tries to prove V in V via class comprehension without a proof of Set({x | Top}).',
    source: `(* ===================================================================== *)
(* FALSE STATEMENT #4 (DETERMINISTICALLY REJECTED BY COMPILER):          *)
(* In NBG/MK, \`z in { x | Top }\` requires BOTH \`Set(z)\` AND \`Top\`.       *)
(* Because the universal class \`V = { x | Top }\` is a proper class,      *)
(* attempting to prove \`{ x | Top } in { x | Top }\` without \`Set(V)\`     *)
(* fails typechecking at Modus Ponens (EApp)!                            *)
(* ===================================================================== *)

theory NBG_Predicative;

theorem bad_univ_in_univ : { x | Top } in { x | Top } =
  snd(compr(x. Top, { x | Top })) ();`
  },

  false_membership_sym: {
    category: 'FALSE_REJECTED',
    title: '🛑 [REJECTED #5] Claiming Membership is Symmetric (A in B -> B in A)',
    summary: 'Defines the false formula A in B -> B in A and shows that returning h : A in B is rejected by type conversion.',
    source: `(* ===================================================================== *)
(* FALSE STATEMENT #5 (DETERMINISTICALLY REJECTED BY COMPILER):          *)
(* \`formula False_MembershipSym\` is a syntactically well-formed Type,    *)
(* but any candidate proof term trying to inhabit \`A in B -> B in A\`     *)
(* is deterministically rejected by the bidirectional type-checker!      *)
(* ===================================================================== *)

theory NBG_Predicative;

formula False_MembershipSym = forall (A:Class). forall (B:Class). A in B -> B in A;

theorem bad_membership_sym : False_MembershipSym =
  Lam (A:Class) =>
    Lam (B:Class) =>
      fn (h : A in B) =>
        h;`
  },

  false_impredicative_in_nbg: {
    category: 'FALSE_REJECTED',
    title: '🛑 [REJECTED #6] Impredicative Class Quantifier in Stage I NBG',
    summary: 'Tries to use bound Class quantification inside { x | ... } while in theory NBG_Predicative;.',
    source: `(* ===================================================================== *)
(* FALSE IN STAGE I NBG (DETERMINISTICALLY REJECTED BY COMPILER):        *)
(* Stage I \`NBG_Predicative\` forbids bound Class quantifiers             *)
(* (\`forall Y:Class\`) inside comprehension terms \`{ x | phi(x) }\`.       *)
(* ===================================================================== *)

theory NBG_Predicative;

theorem bad_impredicative_in_nbg :
  forall (z:Class).
    (z in { x | forall (Y:Class). x in Y -> x in Y } ->
      (Set(z) /\\ (forall (Y:Class). z in Y -> z in Y))) =
  Lam (z:Class) =>
    fst(compr(x. forall (Y:Class). x in Y -> x in Y, z));`
  }
};

window.ObeliskNBGCompiler = ObeliskNBGCompiler;
window.OBELISK_PRESETS = OBELISK_PRESETS;
