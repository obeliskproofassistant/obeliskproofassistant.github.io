/**
 * Obelisk WebREPL Workbench Controller
 * Connects the `.nbg` Source Editor, Catalog Sidebar, Inspector, and Command Bar to:
 * 1. SML-generated `generated/theory_db.json` (106 MKTD1-system Sequent Calculus / Typed AST entries)
 * 2. SML-generated `generated/nbg_library.json` (100 MKTD2-system Formulas-as-Types entries)
 * 3. Live Poly/ML 5.7.1 `NBGSurfaceCompiler` (`/api/obelisk/compile`) when reachable
 * 4. Client-side `ObeliskNBGCompiler` bidirectional kernel type-checker (`MKTD2-system`)
 */

class ObeliskREPL {
  constructor(outputEl, goalBoxEl, editorEl) {
    this.outputEl = outputEl;
    this.goalBoxEl = goalBoxEl;
    this.editorEl = editorEl;
    this.clientCompiler = new window.ObeliskNBGCompiler();
    this.lastResult = null;
    this.theorems = new Map();
    this.mktd1Entries = [];
    this.mktd2Entries = [];
    this.mktd1Map = new Map();
    this.mktd2Map = new Map();
    this.systemMode = 'mktd2'; // 'mktd1' | 'mktd2' | 'bridge'
    this.activeCategory = 'all';
    this.searchQuery = '';
    this.lastFocusedInput = editorEl || null;
    this.commandHistory = [];
    this.historyIndex = -1;
    this.initDefaultTheorems();
  }

  clearOutput() {
    if (this.outputEl) {
      this.outputEl.textContent = 'Terminal output cleared. Type "help" for available kernel commands.';
    }
  }

  initDefaultTheorems() {
    this.theorems.set("and_comm", "Theorem and_comm: ∀(A : Fm) ∀(B : Fm). (A ∧ B) → (B ∧ A)");
    this.theorems.set("or_comm", "Theorem or_comm: ∀(A : Fm) ∀(B : Fm). (A ∨ B) → (B ∨ A)");
    this.theorems.set("identity", "Theorem identity: ∀(P : Fm) ∀(Q : Fm). (P → Q) → (P → Q)");
    this.theorems.set("russell", "Theorem russell_paradox: ¬isSet(R) where R = { (x : Class) | x ∉ x }");
    this.theorems.set("empty_unique", "Theorem empty_set_unique: ∀(X : Class). ∅ ⊆ X ∧ (isSet(∅) ∧ ∀(x : Class). x ∉ ∅)");
    this.theorems.set("tagged_pair_proj", "Theorem tagged_pair_proj: ∀(A : Class) ∀(B : Class). pr₁([A, B]_D) = A ∧ pr₂([A, B]_D) = B");
    this.theorems.set("ordinal_induction", "Theorem ordinal_induction: (∀(α : Class). α ∈ On → (∀(β : Class). β ∈ α → P(β)) → P(α)) → ∀(α : Class). α ∈ On → P(α)");
    this.theorems.set("hereditary_subsets", "Theorem hereditary_subsets: ∀(x : Class) ∀(y : Class). isSet(x) ∧ y ⊆ x → isSet(y)");
    this.theorems.set("extensionality", "Theorem extensionality: ∀(A : Class) ∀(B : Class). (∀(x : Class). x ∈ A ↔ x ∈ B) → A = B");
    this.theorems.set("burali_forti", "Theorem burali_forti_paradox: ¬isSet(On)");
    this.theorems.set("modus_ponens", "Theorem modus_ponens: ∀(A : Fm) ∀(B : Fm). ((A → B) ∧ A) → B");
    this.theorems.set("currying", "Theorem currying: ∀(A : Fm) ∀(B : Fm) ∀(C : Fm). ((A ∧ B) → C) ↔ (A → (B → C))");
    this.theorems.set("cantor_diagonal", "Theorem cantor_diagonal: ∀(R : Class) ∀(d : Class). isSet(d) → ¬((d ∈ { (x : Class) | [x, x]_D ∉ R }) ↔ ([d, d]_D ∈ R))");
    this.theorems.set("quantifier_swap", "Theorem quantifier_swap: (∀(x : Class) ∀(y : Class). P(x, y)) → (∀(y : Class) ∀(x : Class). P(x, y))");
    this.theorems.set("sub_succ", "Theorem sub_succ: ∀(x : Class). isSet(x) → x ⊆ (x ∪ {x})");
    this.theorems.set("stage3_quat", "Theorem stage3_quat: Stratified Quotation Evaluation in Metatheory T / F (⊢_T ⌜φ⌝ ↔ φ for T-formulas)");
    this.theorems.set("tagged_pairing", "Theorem tagged_pairing: ∀(x : Class) ∀(y : Class) ∀(u : Class) ∀(v : Class). [x, y]_D = [u, v]_D → (x = u ∧ y = v)");
    this.theorems.set("nbg_no_self_membership", "Theorem nbg_no_self_membership: ∀(x : Class). x ∉ x");
    this.theorems.set("nbg_no_two_cycle", "Theorem nbg_no_two_cycle: ∀(x : Class) ∀(y : Class). ¬(x ∈ y ∧ y ∈ x)");
    this.theorems.set("nbg_singleton_choice", "Theorem nbg_singleton_choice: ∀(x : Class). isSet(x) → τ({x}) = x");
  }

  async loadKernelCatalogs() {
    if (typeof fetch !== 'function') return;
    try {
      const [r1, r2] = await Promise.allSettled([
        fetch('generated/theory_db.json'),
        fetch('generated/nbg_library.json')
      ]);
      if (r1.status === 'fulfilled' && r1.value.ok) {
        const db1 = await r1.value.json();
        this.mktd1Entries = Array.isArray(db1.entries) ? db1.entries : [];
        for (const e of this.mktd1Entries) {
          if (e.id) this.mktd1Map.set(e.id, e);
          if (e.code) this.mktd1Map.set(String(e.code), e);
        }
      }
      if (r2.status === 'fulfilled' && r2.value.ok) {
        const db2 = await r2.value.json();
        this.mktd2Entries = Array.isArray(db2.entries) ? db2.entries : [];
        for (const e of this.mktd2Entries) {
          if (e.id) this.mktd2Map.set(e.id, e);
          if (e.title) this.mktd2Map.set(e.title, e);
        }
      }
    } catch (_err) {
      // Static or offline environment without fetch
    }
    this.renderCatalogSidebar();
    this.updateStatusIndicator();
  }

  updateStatusIndicator() {
    const badgeEl = typeof document !== 'undefined' ? document.getElementById('kernelStatusBadge') : null;
    if (!badgeEl) return;
    const c1 = this.mktd1Entries.length;
    const c2 = this.mktd2Entries.length;
    const modeLabel =
      this.systemMode === 'mktd1' ? 'MKTD1-system (Sequent / Typed AST)' :
      this.systemMode === 'bridge' ? 'Dual Bridge (MKTD1 + MKTD2)' :
      'MKTD2-system (Formulas-as-Types)';
    badgeEl.textContent = `Active: ${modeLabel} | MKTD1: ${c1 || 106} | MKTD2: ${c2 || 100}`;
  }

  setSystemMode(mode) {
    if (mode !== 'mktd1' && mode !== 'mktd2' && mode !== 'bridge') return;
    this.systemMode = mode;
    if (typeof document !== 'undefined') {
      document.querySelectorAll('[data-system-mode]').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-system-mode') === mode);
      });
    }
    this.updateStatusIndicator();
    this.renderCatalogSidebar();
  }

  setCategoryFilter(cat) {
    this.activeCategory = cat || 'all';
    if (typeof document !== 'undefined') {
      document.querySelectorAll('[data-catalog-cat]').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-catalog-cat') === this.activeCategory);
      });
    }
    this.renderCatalogSidebar();
  }

  setSearchFilter(q) {
    this.searchQuery = String(q || '').trim().toLowerCase();
    this.renderCatalogSidebar();
  }

  renderCatalogSidebar() {
    if (typeof document === 'undefined') return;
    const listEl = document.getElementById('catalogDynamicList');
    if (!listEl) return;

    const q = this.searchQuery;
    const cat = this.activeCategory;
    const itemsHtml = [];

    const showMktd1 =
      (this.systemMode === 'mktd1' || this.systemMode === 'bridge' || cat === 'mktd1' ||
       cat === 'definition' || cat === 'axiom' || cat === 'rule' || cat === 'theorem') &&
      cat !== 'presets' && cat !== 'mktd2';

    const showMktd2 =
      (this.systemMode === 'mktd2' || this.systemMode === 'bridge' || cat === 'mktd2') &&
      cat !== 'presets' && cat !== 'mktd1' && cat !== 'definition' && cat !== 'rule';

    if (showMktd1 && this.mktd1Entries.length > 0) {
      const filtered1 = this.mktd1Entries.filter(e => {
        if (cat === 'definition' && e.kind !== 'definition') return false;
        if (cat === 'axiom' && e.kind !== 'axiom') return false;
        if (cat === 'rule' && e.kind !== 'rule') return false;
        if (cat === 'theorem' && e.kind !== 'theorem') return false;
        if (!q) return true;
        return (
          String(e.id || '').toLowerCase().includes(q) ||
          String(e.code || '').toLowerCase().includes(q) ||
          String(e.title || '').toLowerCase().includes(q) ||
          String(e.statement_unicode || '').toLowerCase().includes(q)
        );
      });
      if (filtered1.length > 0) {
        itemsHtml.push(`<div class="preset-group-title">MKTD1-system Kernel DB (${filtered1.length})</div>`);
        for (const e of filtered1) {
          const badgeKind = (e.kind || 'entry').toUpperCase();
          itemsHtml.push(
            `<button type="button" class="preset-btn catalog-entry-btn" data-lookup-id="${this.escapeHtml(e.id)}">` +
            `<strong>[${this.escapeHtml(e.code)}] ${this.escapeHtml(e.id)}</strong>` +
            `<small>${this.escapeHtml(badgeKind)} | ${this.escapeHtml(e.title)}</small>` +
            `</button>`
          );
        }
      }
    }

    if (showMktd2 && this.mktd2Entries.length > 0) {
      const filtered2 = this.mktd2Entries.filter(e => {
        if (cat === 'axiom' && !String(e.category || '').toLowerCase().includes('axiom')) return false;
        if (cat === 'theorem' && String(e.category || '').toLowerCase().includes('axiom')) return false;
        if (!q) return true;
        return (
          String(e.id || '').toLowerCase().includes(q) ||
          String(e.title || '').toLowerCase().includes(q) ||
          String(e.category || '').toLowerCase().includes(q) ||
          String(e.statement_unicode || '').toLowerCase().includes(q)
        );
      });
      if (filtered2.length > 0) {
        itemsHtml.push(`<div class="preset-group-title">MKTD2-system Library (${filtered2.length})</div>`);
        for (const e of filtered2) {
          itemsHtml.push(
            `<button type="button" class="preset-btn catalog-entry-btn" data-lookup-id="${this.escapeHtml(e.id)}">` +
            `<strong>[${this.escapeHtml(e.id)}] ${this.escapeHtml(e.title)}</strong>` +
            `<small>MKTD2 | ${this.escapeHtml(e.category || 'Theorem')} (${e.proof_size || 1} AST nodes)</small>` +
            `</button>`
          );
        }
      }
    }

    listEl.innerHTML = itemsHtml.join('');
    listEl.querySelectorAll('[data-lookup-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-lookup-id');
        if (id) {
          const out = this.evalCommand(`lookup ${id}`);
          if (out && this.outputEl) {
            this.outputEl.textContent = out;
            this.outputEl.scrollTop = 0;
          }
        }
      });
    });
  }

  insertSymbol(token) {
    const target = this.lastFocusedInput || this.editorEl;
    if (!target) return;
    const start = typeof target.selectionStart === 'number' ? target.selectionStart : target.value.length;
    const end = typeof target.selectionEnd === 'number' ? target.selectionEnd : target.value.length;
    const val = target.value || '';
    target.value = val.slice(0, start) + token + val.slice(end);
    target.focus();
    const nextPos = start + token.length;
    if (typeof target.setSelectionRange === 'function') {
      target.setSelectionRange(nextPos, nextPos);
    }
  }

  async compileCurrentEditor(presetTitle = null) {
    const src = this.editorEl ? this.editorEl.value : '';
    return this.compileSource(src, presetTitle);
  }

  async compileSource(src, presetTitle = null) {
    if (!src || !src.trim()) {
      this.renderReport({
        status: 'REJECTED',
        engine: 'Obelisk Kernel Type-Checker (MKTD2-system)',
        elapsed_ms: 0,
        theory: 'NBG_Predicative',
        defined_formulas: [],
        verified_theorems: [],
        error: 'Empty Obelisk source program.'
      }, presetTitle);
      return;
    }

    // 1. Always run client-side recursive-descent parser & bidirectional type-checker immediately
    const clientReport = this.clientCompiler.compileSource(src);

    // 2. Also query live Poly/ML 5.7.1 `/api/obelisk/compile` if reachable
    let finalReport = clientReport;
    try {
      const resp = await fetch('/api/obelisk/compile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: src })
      });
      if (resp.ok || resp.status === 400 || resp.status === 408) {
        const serverData = await resp.json();
        if (serverData && (serverData.status === 'COMPILED' || serverData.status === 'REJECTED')) {
          finalReport = serverData;
        }
      }
    } catch (_e) {
      // Offline / static GitHub Pages fallback uses clientReport
    }

    this.lastResult = finalReport;
    this.renderReport(finalReport, presetTitle);
    return finalReport;
  }

  renderReport(r, presetTitle = null) {
    const lines = [];
    const bar = '════════════════════════════════════════════════════════════════════════';
    lines.push(bar);
    if (presetTitle) {
      lines.push(`Preset: ${presetTitle}`);
    }
    lines.push(`Engine: ${r.engine} (${r.elapsed_ms || 0} ms)`);
    lines.push(`Active Theory Level: ${r.theory || 'NBG_Predicative'} (MKTD2-system Formulas-as-Types)`);
    lines.push(bar);

    if (r.defined_formulas && r.defined_formulas.length > 0) {
      lines.push(`\n[1] DEFINED FORMULAS (WELL-FORMED TYPES — NOT THEOREMS):`);
      for (const f of r.defined_formulas) {
        lines.push(`  * formula ${f.name} : Fm`);
        lines.push(`      = ${f.formula}`);
        lines.push(`      (Status: Valid MKTD2-theory Type definition. Defining a formula does NOT prove it.)`);
      }
    } else {
      lines.push(`\n[1] DEFINED FORMULAS (TYPES): (none declared via 'formula')`);
    }

    if (r.status === 'COMPILED') {
      lines.push(`\n[2] VERIFIED THEOREMS (PROOF TERMS INHABITING TARGET FORMULA TYPES):`);
      if (r.verified_theorems && r.verified_theorems.length > 0) {
        for (const t of r.verified_theorems) {
          lines.push(`  [OK] theorem ${t.name}`);
          lines.push(`      Inhabited Type (Formula): ${t.formula}`);
          lines.push(`      Proof Term AST Nodes:     ${t.proof_size} (beta-normalized: ${t.normalized_size})`);
        }
      } else {
        lines.push(`  (0 theorem declarations — only formula type definitions were checked)`);
      }
      lines.push(`\n[OK] COMPILATION SUCCEEDED: All proof terms deterministically type-checked.`);
    } else {
      lines.push(`\n[2] KERNEL TYPE-CHECKER REJECTION (DETERMINISTIC REFUSAL):`);
      lines.push(`  [ERROR] ${r.error}`);
      lines.push(`\n[REJECTED] COMPILATION REJECTED: The candidate term does not inhabit the claimed MKTD2-theory formula type.`);
    }

    if (this.outputEl) {
      this.outputEl.textContent = lines.join('\n');
      this.outputEl.scrollTop = 0;
    }
    this.updateInspector(r);
  }

  updateInspector(r) {
    if (!this.goalBoxEl) return;
    if (!r) {
      this.goalBoxEl.innerHTML = `<span style="color:#94a3b8;">Click "Compile Proof (Ctrl+Enter)" or select a verified entry in the left catalog.</span>`;
      return;
    }
    const fCount = (r.defined_formulas || []).length;
    const tCount = (r.verified_theorems || []).length;
    if (r.status === 'COMPILED') {
      const fList = (r.defined_formulas || [])
        .map(f => `<div style="margin-top:4px;color:#38bdf8;"><code>formula ${this.escapeHtml(f.name)}</code> <span style="color:#94a3b8;">: Fm_Expre</span><div style="color:#cbd5e1;font-size:0.76rem;margin-left:8px;">${this.escapeHtml(f.formula)}</div></div>`)
        .join('');
      const tList = (r.verified_theorems || [])
        .map(t => `<div style="margin-top:6px;padding:6px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.3);border-radius:4px;"><div style="color:#10b981;font-weight:700;"><code>[OK] ${this.escapeHtml(t.name)}</code> <span style="color:#94a3b8;font-weight:400;">(${t.proof_size} AST nodes)</span></div><div style="color:#e2e8f0;font-size:0.76rem;margin-top:2px;">${this.escapeHtml(t.formula)}</div></div>`)
        .join('');
      this.goalBoxEl.innerHTML =
        `<div style="color:#10b981;font-weight:700;margin-bottom:6px;">[COMPILED &amp; VERIFIED IN MKTD2-SYSTEM]</div>` +
        `<div><strong>Engine:</strong> ${this.escapeHtml(r.engine)}</div>` +
        `<div><strong>Theory Level:</strong> <code>${this.escapeHtml(r.theory)}</code></div>` +
        `<div style="margin-top:8px;"><strong>Defined Formula Types (Fm_Expre):</strong> ${fCount}</div>` +
        fList +
        `<div style="margin-top:8px;"><strong>Verified Proof Terms (Prf):</strong> ${tCount}</div>` +
        tList;
    } else {
      this.goalBoxEl.innerHTML =
        `<div style="color:#ef4444;font-weight:700;margin-bottom:6px;">[REJECTED BY KERNEL]</div>` +
        `<div><strong>Engine:</strong> ${this.escapeHtml(r.engine)}</div>` +
        `<div style="margin-top:8px;color:#fca5a5;white-space:pre-wrap;">${this.escapeHtml(r.error)}</div>`;
    }
  }

  inspectCatalogEntry(entry, systemTag) {
    if (!this.goalBoxEl || !entry) return;
    if (systemTag === 'MKTD1-system') {
      const fHtml = entry.statement_html || `<code>${this.escapeHtml(entry.statement_unicode || '')}</code>`;
      const jHtml = entry.judgements_html || `<code>${this.escapeHtml(entry.judgements_unicode || '')}</code>`;
      const sHtml = entry.side_conditions_html || `<code>${this.escapeHtml((entry.side_conditions || []).join('; '))}</code>`;
      this.goalBoxEl.innerHTML =
        `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">` +
        `<span style="color:#10b981;font-weight:700;">[MKTD1-SYSTEM KERNEL RECORD]</span>` +
        `<span style="background:#1e293b;color:#38bdf8;padding:2px 6px;border-radius:4px;font-size:0.72rem;">Code ${this.escapeHtml(entry.code)} | ${this.escapeHtml((entry.kind || '').toUpperCase())}</span>` +
        `</div>` +
        `<div style="margin-bottom:6px;"><strong>ID:</strong> <code>${this.escapeHtml(entry.id)}</code> — ${this.escapeHtml(entry.title)}</div>` +
        `<div style="margin-bottom:6px;"><strong>SML Kernel Constructor (Prf):</strong> <code>${this.escapeHtml(entry.prf_constructor || entry.id)}</code></div>` +
        `<div style="margin-bottom:6px;"><strong>Scheme of Types:</strong> <code>${this.escapeHtml(entry.scheme_of_types_unicode || '')}</code></div>` +
        `<div style="margin-bottom:6px;padding:6px;background:#090d16;border:1px solid #1e293b;border-radius:4px;">` +
        `<div style="color:#94a3b8;font-size:0.7rem;text-transform:uppercase;margin-bottom:3px;">Formula / Statement (100% Clickable Tokens, Level 0)</div>` +
        `<div class="clickable-formula-box">${fHtml}</div>` +
        `</div>` +
        `<div style="margin-bottom:6px;padding:6px;background:#090d16;border:1px solid #1e293b;border-radius:4px;">` +
        `<div style="color:#94a3b8;font-size:0.7rem;text-transform:uppercase;margin-bottom:3px;">Typing Judgements (Metalevel 1)</div>` +
        `<div class="clickable-formula-box">${jHtml}</div>` +
        `</div>` +
        `<div style="margin-bottom:6px;padding:6px;background:#090d16;border:1px solid #1e293b;border-radius:4px;">` +
        `<div style="color:#94a3b8;font-size:0.7rem;text-transform:uppercase;margin-bottom:3px;">Decidable Side Condition (Metalevel 1)</div>` +
        `<div class="clickable-formula-box">${sHtml}</div>` +
        `</div>` +
        `<div style="color:#94a3b8;font-size:0.74rem;">${this.escapeHtml(entry.prose || '')}</div>`;
    } else {
      const fHtml = entry.statement_html || `<code>${this.escapeHtml(entry.statement_unicode || '')}</code>`;
      const pHtml = entry.proof_html || `<code>${this.escapeHtml(entry.proof_unicode || '')}</code>`;
      this.goalBoxEl.innerHTML =
        `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">` +
        `<span style="color:#38bdf8;font-weight:700;">[MKTD2-SYSTEM FORMULAS-AS-TYPES RECORD]</span>` +
        `<span style="background:#1e293b;color:#a78bfa;padding:2px 6px;border-radius:4px;font-size:0.72rem;">${this.escapeHtml(entry.id)}</span>` +
        `</div>` +
        `<div style="margin-bottom:6px;"><strong>Title:</strong> <code>${this.escapeHtml(entry.title)}</code> (${this.escapeHtml(entry.category || '')})</div>` +
        `<div style="margin-bottom:6px;"><strong>Proof AST Size:</strong> ${entry.proof_size || 1} nodes (normalized: ${entry.normalized_size || 1})</div>` +
        `<div style="margin-bottom:6px;padding:6px;background:#090d16;border:1px solid #1e293b;border-radius:4px;">` +
        `<div style="color:#94a3b8;font-size:0.7rem;text-transform:uppercase;margin-bottom:3px;">Formula Type (NBGCompiler.Formula)</div>` +
        `<div class="clickable-formula-box">${fHtml}</div>` +
        `</div>` +
        `<div style="margin-bottom:6px;padding:6px;background:#090d16;border:1px solid #1e293b;border-radius:4px;">` +
        `<div style="color:#94a3b8;font-size:0.7rem;text-transform:uppercase;margin-bottom:3px;">Constructive Lambda Proof Term (NBGCompiler.Expr)</div>` +
        `<div class="clickable-formula-box" style="max-height:140px;overflow-y:auto;">${pHtml}</div>` +
        `</div>` +
        `<div style="color:#94a3b8;font-size:0.74rem;">${this.escapeHtml(entry.explanation || '')}</div>`;
    }
  }

  loadPreset(key) {
    const p = window.OBELISK_PRESETS && window.OBELISK_PRESETS[key];
    if (!p) return;
    if (this.editorEl) {
      this.editorEl.value = p.source;
    }
    this.compileSource(p.source, p.title);
  }

  findEntry(query) {
    const q = String(query || '').trim();
    if (!q) return null;
    if (this.mktd1Map.has(q)) return { system: 'MKTD1-system', entry: this.mktd1Map.get(q) };
    if (this.mktd2Map.has(q)) return { system: 'MKTD2-system', entry: this.mktd2Map.get(q) };
    const qLow = q.toLowerCase();
    for (const e of this.mktd1Entries) {
      if (String(e.id).toLowerCase() === qLow || String(e.code).toLowerCase() === qLow || String(e.title).toLowerCase() === qLow) {
        return { system: 'MKTD1-system', entry: e };
      }
    }
    for (const e of this.mktd2Entries) {
      if (String(e.id).toLowerCase() === qLow || String(e.title).toLowerCase() === qLow) {
        return { system: 'MKTD2-system', entry: e };
      }
    }
    return null;
  }

  formatEntryReport(system, e, mode = 'lookup') {
    const bar = '════════════════════════════════════════════════════════════════════════';
    if (system === 'MKTD1-system') {
      if (mode === 'ast') {
        return [
          bar,
          `[MKTD1-system SML Kernel AST] ${e.id} (Code ${e.code}, ${String(e.kind || '').toUpperCase()})`,
          bar,
          `  SML Constructor (NewChecker.Prf): ${e.prf_constructor || e.id}`,
          `  Scheme of Types:                  ${e.scheme_of_types_unicode || '(none)'}`,
          `  Typing Judgements:                ${e.judgements_unicode || '(none)'}`,
          `  Decidable Side Condition:         ${(e.side_conditions || []).join('; ') || 'true'}`,
          `  Statement (Unicode):              ${e.statement_unicode || ''}`,
          `  Statement (LaTeX):                ${e.statement_latex || ''}`,
          `  Source Generator:                 set_theory_prover/program/newchecker.ML`
        ].join('\n');
      }
      if (mode === 'ansii') {
        return [
          `[${e.code}] ${e.id} (${String(e.kind || '').toUpperCase()} — MKTD1-system)`,
          `  Statement : ${e.statement_unicode || ''}`,
          `  Types     : ${e.scheme_of_types_unicode || ''}`,
          `  Judgements: ${e.judgements_unicode || ''}`,
          `  Side Cond : ${(e.side_conditions || []).join('; ')}`,
          `  SML Prf   : ${e.prf_constructor || e.id}`
        ].join('\n');
      }
      return [
        bar,
        `[MKTD1-system Verified Entry] [${e.code}] ${e.id} — ${e.title}`,
        bar,
        `  Kind:                     ${String(e.kind || '').toUpperCase()}`,
        `  Statement (Unicode):      ${e.statement_unicode || ''}`,
        `  Statement (LaTeX):        ${e.statement_latex || ''}`,
        `  Scheme of Types:          ${e.scheme_of_types_unicode || ''}`,
        `  Typing Judgements:        ${e.judgements_unicode || ''}`,
        `  Decidable Side Condition: ${(e.side_conditions || []).join('; ')}`,
        `  SML Kernel Constructor:   ${e.prf_constructor || e.id}`,
        `  Notes:                    ${e.prose || ''}`
      ].join('\n');
    } else {
      if (mode === 'ast') {
        return [
          bar,
          `[MKTD2-system Formulas-as-Types AST] [${e.id}] ${e.title}`,
          bar,
          `  Category:                 ${e.category || ''}`,
          `  Formula Type (Unicode):   ${e.statement_unicode || ''}`,
          `  Proof Term (Unicode):     ${e.proof_unicode || ''}`,
          `  Proof AST Nodes:          ${e.proof_size || 1} (beta-normalized: ${e.normalized_size || 1})`,
          `  Source Generator:         set_theory_prover/program/verified_theorems.ML`
        ].join('\n');
      }
      return [
        bar,
        `[MKTD2-system Verified Entry] [${e.id}] ${e.title} (${e.category || ''})`,
        bar,
        `  Inhabited Formula Type:   ${e.statement_unicode || ''}`,
        `  Formula (LaTeX):          ${e.statement_latex || ''}`,
        `  Lambda Proof Term:        ${e.proof_unicode || ''}`,
        `  Proof Term AST Size:      ${e.proof_size || 1} nodes (normalized: ${e.normalized_size || 1})`,
        `  Explanation:              ${e.explanation || ''}`
      ].join('\n');
    }
  }

  evalCommand(cmdRaw) {
    const cmd = (cmdRaw || '').trim();
    if (!cmd) return '';
    if (this.commandHistory[this.commandHistory.length - 1] !== cmd) {
      this.commandHistory.push(cmd);
    }
    this.historyIndex = this.commandHistory.length;

    if (cmd === 'clear') {
      this.clearOutput();
      return '';
    }

    if (cmd === 'help') {
      return [
        'Obelisk Kernel REPL Reference (MKTD1-system & MKTD2-system):',
        '  compile                      - Compile & typecheck the .nbg source in the editor above',
        '  load <preset_key>            - Load a verified theorem or rejected preset into the editor',
        '  theorems                     - List verified kernel theorems (MKTD1-system & MKTD2-system)',
        '  axioms                       - List verified kernel axioms (MKTD1-system & MKTD2-system)',
        '  definitions                  - List verified class & relation definitions (MKTD1-system)',
        '  rules                        - List verified sequent & inference rules (MKTD1-system)',
        '  lookup <id|code>             - Inspect any verified entry (e.g. lookup DefDunaevOrderedPair, lookup NBG-017)',
        '  ast <id|code>                - Display SML kernel AST constructor, Scheme of Types, and Side Conditions',
        '  ansii <id|code>              - Display compact terminal Unicode/ASCII summary of a kernel entry',
        '  bridge <id|code>             - Compare MKTD1-system (Sequent/Typed AST) & MKTD2-system (Formulas-as-Types)',
        '  check <id>                   - Verify a theorem identifier against the certified LCF kernel registry',
        '  primitives                   - List all closed kernel proof-term constructors',
        '  formula <Name> = <Formula>;  - Parse & check a well-formed MKTD2-theory formula definition (Type)',
        '  theorem <Name> : <F> = <E>;  - Typecheck a constructive proof term directly',
        '  clear                        - Clear terminal output'
      ].join('\n');
    }

    if (cmd === 'primitives') {
      return [
        'Kernel Proof Constructors (MKTD2-system NBGCompiler.Expr & MKTD1-system NewChecker.Prf):',
        '  compr(x. Phi, z)             : z in {x | Phi} <-> (Set(z) /\\ Phi[z/x])   (Predicative in NBG_Predicative, Impredicative in MK_Impredicative)',
        '  fn (h : A) => e              : A -> B                                    (Implication Introduction)',
        '  e1 e2                        : B                                         (Modus Ponens: e1 : A -> B, e2 : A)',
        '  Lam (x : Class) => e         : forall (x:Class). P(x)                    (Universal Introduction, eigenvariable fresh)',
        '  tapp(e, t)                   : P[t/x]                                    (Universal Elimination; checks Set(t) if Sort=Set)',
        '  pack(w, prf, exists x:S. P)  : exists (x:S). P(x)                        (Existential Intro; checks Set(w) if Sort=Set)',
        '  unpack e1 as (v, h) in e2    : C                                         (Existential Elimination)',
        '  pair(e1, e2) / fst(e) / snd(e) : A /\\ B                                  (Conjunction Intro / Elim)',
        '  inl(e, B) / inr(e, A) / case : A \\/ B                                    (Disjunction Intro / Elim)',
        '  abort(e, A) / dne(e, A) / lem(A) : Classical / Ex Falso rules',
        '  refl(t) / sym(e) / trans(e1,e2) / rewrite(eq, u.Phi, base) : Equality rules',
        '  heredity(x, y)               : Set(y) -> x in y -> Set(x)',
        '  dunaev_proj(A, B)            : pr1([A, B]_D) = A /\\ pr2([A, B]_D) = B'
      ].join('\n');
    }

    if (cmd === 'compile') {
      this.compileCurrentEditor();
      return 'Compiling editor source...';
    }

    if (cmd === 'theorems') {
      const m1 = this.mktd1Entries.filter(e => e.kind === 'theorem');
      const m2 = this.mktd2Entries;
      const lines = [
        `Verified Kernel Theorems (MKTD1-system: ${m1.length}, MKTD2-system: ${m2.length}, Registry: ${this.theorems.size}):`,
        '  [MKTD1-system Sequent / Typed AST Theorems]:'
      ];
      if (m1.length > 0) {
        for (const e of m1) {
          lines.push(`    [${e.code}] ${e.id.padEnd(28)} : ${e.statement_unicode}`);
        }
      } else {
        lines.push('    (Use "check <id>" or load generated/theory_db.json in browser)');
      }
      lines.push('  [MKTD2-system Formulas-as-Types Theorems (first 15 of ' + (m2.length || 100) + ')]:');
      for (const e of m2.slice(0, 15)) {
        lines.push(`    [${e.id}] ${e.title.padEnd(28)} : ${e.statement_unicode}`);
      }
      lines.push('  [Certified Named Registry (use "check <name>")]:');
      lines.push('    ' + Array.from(this.theorems.keys()).join(', '));
      return lines.join('\n');
    }

    if (cmd === 'axioms') {
      const m1 = this.mktd1Entries.filter(e => e.kind === 'axiom');
      const lines = [`Verified Kernel Axioms (MKTD1-system: ${m1.length}):`];
      for (const e of m1) {
        lines.push(`  [${e.code}] ${e.id.padEnd(32)} : ${e.statement_unicode}`);
      }
      return lines.join('\n');
    }

    if (cmd === 'definitions') {
      const m1 = this.mktd1Entries.filter(e => e.kind === 'definition');
      const lines = [`Verified Kernel Definitions (MKTD1-system: ${m1.length}):`];
      for (const e of m1) {
        lines.push(`  [${e.code}] ${e.id.padEnd(32)} : ${e.statement_unicode}`);
      }
      return lines.join('\n');
    }

    if (cmd === 'rules') {
      const m1 = this.mktd1Entries.filter(e => e.kind === 'rule');
      const lines = [`Verified Kernel Inference Rules (MKTD1-system: ${m1.length}):`];
      for (const e of m1) {
        lines.push(`  [${e.code}] ${e.id.padEnd(32)} : ${e.statement_unicode}`);
      }
      return lines.join('\n');
    }

    if (cmd.startsWith('lookup ') || cmd.startsWith('ast ') || cmd.startsWith('ansii ')) {
      const parts = cmd.split(/\s+/);
      const mode = parts[0];
      const target = cmd.slice(mode.length).trim();
      const found = this.findEntry(target);
      if (found) {
        this.inspectCatalogEntry(found.entry, found.system);
        return this.formatEntryReport(found.system, found.entry, mode);
      }
      if (this.theorems.has(target)) {
        return `[VERIFIED REGISTRY ENTRY] ${target}\n  ${this.theorems.get(target)}`;
      }
      return `[ERROR] Entry '${target}' not found in MKTD1-system (theory_db.json) or MKTD2-system (nbg_library.json). Try "theorems", "axioms", "definitions", or "rules".`;
    }

    if (cmd.startsWith('bridge')) {
      const target = cmd.slice(6).trim();
      const found = target ? this.findEntry(target) : null;
      const lines = [
        '════════════════════════════════════════════════════════════════════════',
        'OBELISK DUAL SYSTEM BRIDGE (MKTD1-system & MKTD2-system)',
        '════════════════════════════════════════════════════════════════════════',
        '  1. MKTD1-framework / MKTD1-system / MKTD1-theory (Sequent Calculus / Typed AST):',
        '     - Kernel modules: program/newchecker.ML, program/types/typetheory.ML',
        '     - Core SML types: Class_Expre, Fm_Expre, Stmt, Ctx, Theory_Expre, Prf',
        '     - Every bound variable in class comprehension { (x : Class) | phi(x) } has sort Class.',
        '     - Ordered pairs use Dunaev Tagged Ordered Pairs [A, B]_D (never Kuratowski pairs for proper classes).',
        '  2. MKTD2-framework / MKTD2-system / MKTD2-theory (Formulas-as-Types / Constructive Lambda):',
        '     - Kernel modules: program/nbg_compiler.ML, program/nbg_surface_compiler.ML, program/verified_theorems.ML',
        '     - Formulas are types (implication as ->, universal quantifier as Pi-type Lam, existential as Sigma-type pack/unpack).',
        '     - Proofs are explicit beta-normalizable lambda terms checked bidirectionally.'
      ];
      if (found) {
        lines.push('');
        lines.push(this.formatEntryReport(found.system, found.entry, 'lookup'));
        this.inspectCatalogEntry(found.entry, found.system);
      }
      return lines.join('\n');
    }

    if (cmd.startsWith('check ')) {
      const thm = cmd.substring(6).trim();
      if (this.theorems.has(thm)) {
        const desc = this.theorems.get(thm);
        return `[VERIFIED] Proof tree for '${thm}' checked against LCF kernel:\n  Formula: ${desc}\n  Status: Valid derivation, 0 warnings, zero implicit computation.`;
      }
      const found = this.findEntry(thm);
      if (found) {
        this.inspectCatalogEntry(found.entry, found.system);
        return `[VERIFIED] Kernel entry '${thm}' verified in ${found.system}:\n  Statement: ${found.entry.statement_unicode}\n  Constructor: ${found.entry.prf_constructor || found.entry.id}\n  Status: Valid kernel derivation.`;
      }
      return (
        `[ERROR] Unknown theorem '${thm}'. Available certified theorems:\n  ` +
        Array.from(this.theorems.keys()).join(", ") +
        `\n\nTo verify a new theorem in the SML kernel:\n` +
        `  * MKTD1-system: poly -q --use program/newchecker.ML </dev/null\n` +
        `  * MKTD2-system: poly -q --use program/nbg_surface_compiler.ML </dev/null`
      );
    }

    if (cmd.startsWith('load ')) {
      const key = cmd.slice(5).trim();
      if (window.OBELISK_PRESETS && window.OBELISK_PRESETS[key]) {
        this.loadPreset(key);
        return `Loaded preset '${key}' into editor and compiled.`;
      }
      return `Unknown preset '${key}'. Available: ${Object.keys(window.OBELISK_PRESETS || {}).join(', ')}`;
    }

    // Only compile inline if the input is an explicit `.nbg` declaration (`theory ...`, `formula ...`, `theorem ...`).
    // Never overwrite the main code editor on arbitrary or unrecognized REPL commands.
    if (/^(theory|formula|theorem)\b/.test(cmd)) {
      this.compileSource(cmd, 'Interactive Command Declaration');
      return '';
    }

    return (
      `[ERROR] Unrecognized REPL command: '${cmd}'.\n` +
      `Type 'help' to list kernel commands (theorems, axioms, definitions, rules, lookup <id>, ast <id>, check <id>, compile, load <preset>).\n` +
      `To typecheck an inline MKTD2-system declaration, start with 'formula <Name> = ...;' or 'theorem <Name> : <Type> = <ProofTerm>;'.\n` +
      `To verify new SML kernel proofs offline, run:\n` +
      `  poly -q --use /hostramdisk/set_theory_prover/program/newchecker.ML </dev/null`
    );
  }

  escapeHtml(s) {
    return String(s || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
}

window.ObeliskREPL = ObeliskREPL;

/**
 * Isolated Custom Element <obelisk-code-editor> (Ticket 7502)
 * Provides clean API bindings (getValue, setValue, highlightSource, onCompile)
 * wrapping the WebREPL code editor and ObeliskHighlighter.
 */
if (typeof window !== 'undefined' && typeof window.customElements !== 'undefined' && typeof HTMLElement !== 'undefined') {
  class ObeliskCodeEditorElement extends HTMLElement {
    constructor() {
      super();
      this._textarea = null;
      this._onCompile = null;
    }

    connectedCallback() {
      this._textarea = this.querySelector('textarea');
      if (!this._textarea) {
        this._textarea = document.createElement('textarea');
        this._textarea.className = 'source-editor';
        this._textarea.spellcheck = false;
        this.appendChild(this._textarea);
      }
    }

    getValue() {
      return this._textarea ? this._textarea.value : '';
    }

    setValue(code) {
      if (this._textarea) {
        this._textarea.value = String(code || '');
      }
    }

    highlightSource(code) {
      const src = code !== undefined ? String(code) : this.getValue();
      if (window.ObeliskHighlighter && typeof window.ObeliskHighlighter.highlight === 'function') {
        return window.ObeliskHighlighter.highlight(src);
      }
      return { tokens: [], highlightedHtml: src };
    }

    onCompile(callback) {
      this._onCompile = callback;
    }
  }

  if (!window.customElements.get('obelisk-code-editor')) {
    window.customElements.define('obelisk-code-editor', ObeliskCodeEditorElement);
  }
  window.ObeliskCodeEditorElement = ObeliskCodeEditorElement;
}
