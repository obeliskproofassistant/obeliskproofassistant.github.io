/**
 * Obelisk SML/MKG Syntax Highlighter
 * Custom tokenizer and highlighter for Obelisk proof assistant definitions.
 *
 * ARCHITECTURAL INVARIANT:
 * 1. Token types and ordering mirror ObeliskNBGCompiler.tokenize() in js/obelisk_engine.js
 * 2. Token type strings are uppercase; CSS class lookup lowercases them
 * 3. No external dependencies — pure JS recursive-descent lexer
 * 4. Output HTML with span classes for CSS-styled highlighting
 * 5. CommonJS module format (module.exports) for Node.js compatibility
 */

// -------------------------------------------------------------------------
// Token Type Constants — must match OBELISK_TOKEN_TYPES in test_highlighter.py
// -------------------------------------------------------------------------
const OBELISK_TOKEN_TYPES = {
  LPAREN: 'token lparen',
  RPAREN: 'token rparen',
  LBRACE: 'token lbrace',
  RBRACE: 'token rbrace',
  LBRACK: 'token lbrack',
  RBRACK: 'token rbrack',
  COMMA: 'token comma',
  SEMICOLON: 'token semicolon',
  DOT: 'token dot',
  BAR: 'token bar',
  IFF: 'token iff',       // <->   (iff / equivalence)
  ARROW: 'token arrow',   // ->    (function type arrow)
  FATARROW: 'token fatarrow', // =>  (strong implication)
  AND: 'token and',       // /\\   (conjunction)
  OR: 'token or',         // \/    (disjunction)
  SUB: 'token sub',       // c=    (subset)
  NEG: 'token neg',       // ~     (negation)
  EQ: 'token eq',         // =     (equality)
  COLON: 'token colon',   // :     (sort annotation)
  UNIT: 'token unit',     // ()    (unit)
  WORD: 'token word',     // identifiers, constants, keywords
  EOF: 'token eof'        // end of file
};

// Mapping from lowercased token type to CSS class name
const TOKEN_CLASS_MAP = {
  'lparen': 'lparen', 'rparen': 'rparen', 'lbrace': 'lbrace', 'rbrace': 'rbrace',
  'lbrack': 'lbrack', 'rbrack': 'rbrack', 'comma': 'comma', 'semicolon': 'semicolon',
  'dot': 'dot', 'bar': 'bar', 'iff': 'iff', 'arrow': 'arrow', 'fatarrow': 'fatarrow',
  'and': 'and', 'or': 'or', 'sub': 'sub', 'neg': 'neg', 'eq': 'eq', 'colon': 'colon',
  'unit': 'unit', 'word': 'word', 'eof': 'eof', 'comment': 'comment'
};

// -------------------------------------------------------------------------
// Tokenizer — recursive-descent lexer for Obelisk source
// -------------------------------------------------------------------------
function tokenize(src) {
  // Phase 1: Strip nested comments (* ... *)
  let cleaned = '';
  let i = 0;
  let depth = 0;
  const len = src.length;

  while (i < len) {
    if (src[i] === '(' && src[i + 1] === '*') {
      depth++;
      i += 2;
      // Collect comment content; if not closed, just skip to end
      let commentClosed = false;
      while (i < len) {
        if (src[i] === '*' && src[i + 1] === ')') {
          depth--;
          i += 2;
          if (depth === 0) {
            commentClosed = true;
            break;
          }
        } else {
          i++;
        }
      }
      if (!commentClosed) {
        // Unclosed comment — stop tokenizing what we have so far
        // (cleaned is already partially built; we'll tokenize what we have)
        break;
      }
      continue;
    }
    if (src[i] === '*' && src[i + 1] === ')') {
      throw new Error('LexError: Unmatched comment close *)');
    }
    // Regular character: include in cleaned output
    cleaned += src[i];
    i++;
  }
  // If we broke due to unclosed comment, tokenize what we have

  // Phase 2: Tokenize the cleaned source
  const tokens = [];
  i = 0;

  while (i < cleaned.length) {
    const ch = cleaned[i];

    // Skip whitespace
    if (/\s/.test(ch)) {
      i++;
      continue;
    }

    // Two-character symbols — must match obelisk_engine.js order
    // 1. => (fat arrow: = followed by >)
    if (ch === '=' && i + 1 < cleaned.length && cleaned[i + 1] === '>') {
      if (cleaned.slice(i, i + 2) === '=>') {
        tokens.push({ type: 'FATARROW', val: '=>', start: i, end: i + 2 });
        i += 2;
        continue;
      }
    }
    // 2. -> (implication arrow: - followed by >)
    if (ch === '-' && i + 1 < cleaned.length && cleaned[i + 1] === '>') {
      if (cleaned.slice(i, i + 2) === '->') {
        tokens.push({ type: 'ARROW', val: '->', start: i, end: i + 2 });
        i += 2;
        continue;
      }
    }
    // 3. <-> (iff: < followed by - followed by >)
    if (ch === '<' && i + 2 < cleaned.length && cleaned[i + 1] === '-' && cleaned[i + 2] === '>') {
      if (cleaned.slice(i, i + 3) === '<->') {
        tokens.push({ type: 'IFF', val: '<->', start: i, end: i + 3 });
        i += 3;
        continue;
      }
    }
    // 4. /\\ (AND)
    if (ch === '/' && i + 1 < cleaned.length && cleaned[i + 1] === '\\') {
      if (cleaned.slice(i, i + 2) === '/\\') {
        tokens.push({ type: 'AND', val: '/\\', start: i, end: i + 2 });
        i += 2;
        continue;
      }
    }
    // 5. \/ (OR)
    if (ch === '\\' && i + 1 < cleaned.length && cleaned[i + 1] === '/') {
      if (cleaned.slice(i, i + 2) === '\\/') {
        tokens.push({ type: 'OR', val: '\\/', start: i, end: i + 2 });
        i += 2;
        continue;
      }
    }
    // 6. c= (subset)
    if (ch === 'c' && i + 1 < cleaned.length && cleaned[i + 1] === '=') {
      tokens.push({ type: 'SUB', val: 'c=', start: i, end: i + 2 });
      i += 2;
      continue;
    }
    // 7. () (unit)
    if (ch === '(' && i + 1 < cleaned.length && cleaned[i + 1] === ')') {
      tokens.push({ type: 'UNIT', val: '()', start: i, end: i + 2 });
      i += 2;
      continue;
    }

    // Single-character map
    const singleMap = {
      '~': 'NEG', '=': 'EQ', ':': 'COLON', ';': 'SEMI', ',': 'COMMA',
      '.': 'DOT', '|': 'BAR', '(': 'LPAREN', ')': 'RPAREN',
      '{': 'LBRACE', '}': 'RBRACE', '[': 'LBRACK', ']': 'RBRACK'
    };
    if (ch in singleMap) {
      tokens.push({ type: singleMap[ch], val: ch, start: i, end: i + 1 });
      i++;
      continue;
    }

    // Words / identifiers / keywords
    if (/[A-Za-z0-9_]/.test(ch)) {
      let j = i;
      while (j < cleaned.length && /[A-Za-z0-9_]/.test(cleaned[j])) j++;
      const word = cleaned.slice(i, j);
      tokens.push({ type: 'WORD', val: word, start: i, end: j });
      i = j;
      continue;
    }

    throw new Error(`LexError: Unexpected character '${ch}'`);
  }

  // Append EOF token
  tokens.push({ type: 'EOF', val: 'EOF', start: i, end: i });
  return tokens;
}

// -------------------------------------------------------------------------
// Renderer — render tokens as HTML with appropriate CSS classes
// -------------------------------------------------------------------------
function renderTokens(tokens) {
  let html = '';

  for (const tok of tokens) {
    // Lowercase the token type for class map lookup (types are uppercase from tokenizer)
    const typeKey = tok.type.toLowerCase();
    const className = TOKEN_CLASS_MAP[typeKey] || 'word';
    // Escape the value for HTML safety
    const escapedVal = String(tok.val)
      .replace(/&/g, '&')
      .replace(/</g, '<')
      .replace(/>/g, '>');

    // Special handling for comments — wrap in comment class
    if (tok.type === 'COMMENT') {
      html += '<span class="comment">' + escapedVal + '</span>';
    } else {
      html += '<span class="' + className + '">' + escapedVal + '</span>';
    }
  }

  return html;
}

// -------------------------------------------------------------------------
// Highlighter class
// -------------------------------------------------------------------------
class ObeliskHighlighter {
  constructor() {
    this.freshCounter = 0;
  }

  // -----------------------------------------------------------------
  // Public API: highlight(source) -> { tokens, highlightedHtml }
  // -----------------------------------------------------------------
  highlight(source) {
    const tokens = tokenize(source);
    const highlightedHtml = renderTokens(tokens);
    return { tokens, highlightedHtml };
  }

  // -----------------------------------------------------------------
  // Tokenize the source string into an array of token objects.
  // -----------------------------------------------------------------
  tokenize(src) {
    return tokenize(src);
  }
}

// -------------------------------------------------------------------------
// Ticket 7502: Modular WebREPL Code Editor Binding & Custom Element
// -------------------------------------------------------------------------
class ObeliskCodeEditorBinding {
  constructor(element, options = {}) {
    this.element = element;
    this.options = options;
    this.highlighter = new ObeliskHighlighter();
    this.value = (element && (element.value || element.textContent)) || '';
    this.listeners = [];
  }

  getValue() {
    return this.value;
  }

  setValue(nextSource) {
    this.value = String(nextSource || '');
    const result = this.highlighter.highlight(this.value);
    if (this.element) {
      if ('value' in this.element) {
        this.element.value = this.value;
      } else {
        this.element.innerHTML = result.highlightedHtml;
      }
    }
    for (const cb of this.listeners) {
      cb({ value: this.value, tokens: result.tokens, highlightedHtml: result.highlightedHtml });
    }
    return result;
  }

  onChange(callback) {
    if (typeof callback === 'function') {
      this.listeners.push(callback);
    }
    return () => {
      this.listeners = this.listeners.filter(fn => fn !== callback);
    };
  }
}

function createEditorBinding(element, options = {}) {
  return new ObeliskCodeEditorBinding(element, options);
}

if (typeof window !== 'undefined' && typeof window.customElements !== 'undefined' && typeof HTMLElement !== 'undefined') {
  if (!window.customElements.get('obelisk-code-editor')) {
    class ObeliskCodeEditorElement extends HTMLElement {
      connectedCallback() {
        this._binding = new ObeliskCodeEditorBinding(this);
        if (this.textContent) {
          this._binding.setValue(this.textContent);
        }
      }
      get value() {
        return this._binding ? this._binding.getValue() : '';
      }
      set value(v) {
        if (!this._binding) this._binding = new ObeliskCodeEditorBinding(this);
        this._binding.setValue(v);
      }
    }
    window.customElements.define('obelisk-code-editor', ObeliskCodeEditorElement);
  }
}

// -------------------------------------------------------------------------
// Export — CommonJS module format
// -------------------------------------------------------------------------
function applyHighlighting(codeElement) {
  if (!codeElement || !codeElement.classList) return;

  const source = codeElement.textContent || codeElement.innerHTML;
  const highlighter = new ObeliskHighlighter();
  const { tokens, highlightedHtml } = highlighter.highlight(source);
  codeElement.innerHTML = highlightedHtml;
}

// Export the module
if (typeof module === 'object' && module.exports) {
  module.exports = {
    ObeliskHighlighter: ObeliskHighlighter,
    ObeliskCodeEditorBinding: ObeliskCodeEditorBinding,
    createEditorBinding: createEditorBinding,
    highlight: function (source) {
      return new ObeliskHighlighter().highlight(source);
    },
    tokenize: function (src) {
      return new ObeliskHighlighter().tokenize(src);
    },
    applyHighlighting: applyHighlighting,
    OBELISK_TOKEN_TYPES: OBELISK_TOKEN_TYPES
  };
}

// Also expose for direct inclusion via <script> tag
if (typeof window !== 'undefined') {
  window.ObeliskHighlighter = window.ObeliskHighlighter || {};
  Object.assign(window.ObeliskHighlighter, {
    ObeliskHighlighter: ObeliskHighlighter,
    ObeliskCodeEditorBinding: ObeliskCodeEditorBinding,
    createEditorBinding: createEditorBinding,
    highlight: function (source) {
      return new ObeliskHighlighter().highlight(source);
    },
    tokenize: function (src) {
      return new ObeliskHighlighter().tokenize(src);
    },
    applyHighlighting: applyHighlighting
  });
}
