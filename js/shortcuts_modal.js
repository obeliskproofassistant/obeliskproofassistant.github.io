/**
 * Web REPL Keyboard Shortcuts Cheat Sheet Modal
 *
 * Part of Obelisk Proof Assistant (obeliskproofassistant.github.io)
 * Solves Ticket 007: Web REPL Keyboard Shortcuts Cheat Sheet Modal
 *
 * Features:
 * - Triggered by clicking the "⌨️ Shortcuts" button or pressing `?`
 * - Accessible modal dialog (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`)
 * - Focus trapping (Tab / Shift+Tab cycle within focusable modal controls)
 * - `Escape` key and backdrop click close listeners
 * - Styled with `--bg-card` and purple proof assistant accent (`#a855f7` / `#7b58cf`)
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ObeliskShortcutsModal = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  const SHORTCUTS = [
    { keys: 'Ctrl + Enter', description: 'Compile & type-check current .nbg proof buffer' },
    { keys: 'Ctrl + L', description: 'Clear terminal output panel' },
    { keys: 'Alt + Up / Down', description: 'Cycle through REPL command history' },
    { keys: '?', description: 'Toggle this Keyboard Shortcuts Cheat Sheet modal' },
    { keys: 'Escape', description: 'Close modal dialog and return focus to workbench' }
  ];

  let modalOverlayEl = null;
  let previouslyFocusedEl = null;

  function buildModalMarkup() {
    const rows = SHORTCUTS.map((item) => `
      <tr class="shortcut-row">
        <td class="shortcut-key-cell"><kbd class="shortcut-kbd">${item.keys}</kbd></td>
        <td class="shortcut-desc-cell">${item.description}</td>
      </tr>
    `).join('');

    return `
      <div id="obelisk-shortcuts-backdrop" class="shortcuts-modal-backdrop" role="presentation" style="display: none;">
        <div id="obelisk-shortcuts-dialog"
             class="shortcuts-modal-card"
             role="dialog"
             aria-modal="true"
             aria-labelledby="shortcuts-modal-title"
             aria-describedby="shortcuts-modal-desc"
             tabindex="-1">
          <div class="shortcuts-modal-header">
            <div>
              <h2 id="shortcuts-modal-title" class="shortcuts-modal-title">⌨️ Web REPL Keyboard Shortcuts</h2>
              <p id="shortcuts-modal-desc" class="shortcuts-modal-subtitle">
                Obelisk Propositions-as-Types Compiler Workbench quick navigation &amp; evaluation keys
              </p>
            </div>
            <button type="button"
                    id="obelisk-shortcuts-close-btn"
                    class="shortcuts-close-btn"
                    aria-label="Close Keyboard Shortcuts Modal">✕</button>
          </div>
          <div class="shortcuts-modal-body">
            <table class="shortcuts-table" aria-label="Keyboard Shortcuts List">
              <thead>
                <tr>
                  <th>Shortcut</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                ${rows}
              </tbody>
            </table>
          </div>
          <div class="shortcuts-modal-footer">
            <span class="shortcuts-tip">Tip: Press <kbd class="shortcut-kbd">?</kbd> anywhere outside an input field to open this cheat sheet.</span>
            <button type="button" id="obelisk-shortcuts-done-btn" class="shortcuts-done-btn">Got it</button>
          </div>
        </div>
      </div>
    `;
  }

  function injectStyles() {
    if (typeof document === 'undefined') return;
    if (document.getElementById('obelisk-shortcuts-modal-styles')) return;
    const style = document.createElement('style');
    style.id = 'obelisk-shortcuts-modal-styles';
    style.textContent = `
      .shortcuts-modal-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(3, 7, 18, 0.78);
        backdrop-filter: blur(4px);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
      }
      .shortcuts-modal-card {
        background: var(--bg-card, #0f172a);
        border: 1px solid rgba(168, 85, 247, 0.45);
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.75), 0 0 24px rgba(123, 88, 207, 0.25);
        border-radius: 12px;
        width: 100%;
        max-width: 540px;
        color: var(--text, #f8fafc);
        overflow: hidden;
        outline: none;
      }
      .shortcuts-modal-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 1.1rem 1.25rem;
        border-bottom: 1px solid rgba(168, 85, 247, 0.25);
        background: linear-gradient(135deg, rgba(123, 88, 207, 0.16), rgba(15, 23, 42, 0.95));
      }
      .shortcuts-modal-title {
        font-size: 1.05rem;
        font-weight: 700;
        color: #f8fafc;
        margin: 0;
      }
      .shortcuts-modal-subtitle {
        font-size: 0.78rem;
        color: var(--muted, #94a3b8);
        margin: 0.25rem 0 0 0;
      }
      .shortcuts-close-btn {
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid rgba(255, 255, 255, 0.15);
        color: #cbd5e1;
        border-radius: 6px;
        width: 30px;
        height: 30px;
        cursor: pointer;
        font-size: 0.9rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .shortcuts-close-btn:hover,
      .shortcuts-close-btn:focus {
        border-color: #a855f7;
        color: #f8fafc;
        outline: 2px solid rgba(168, 85, 247, 0.45);
      }
      .shortcuts-modal-body {
        padding: 1rem 1.25rem;
      }
      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.85rem;
      }
      .shortcuts-table th {
        text-align: left;
        padding: 0.45rem 0.5rem;
        color: #c084fc;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
      .shortcuts-table td {
        padding: 0.6rem 0.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      }
      .shortcut-kbd {
        background: rgba(123, 88, 207, 0.2);
        border: 1px solid rgba(168, 85, 247, 0.45);
        border-radius: 5px;
        padding: 0.18rem 0.5rem;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.78rem;
        color: #e9d5ff;
        white-space: nowrap;
      }
      .shortcuts-modal-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.8rem 1.25rem;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        background: rgba(3, 7, 18, 0.6);
        font-size: 0.76rem;
        color: #94a3b8;
      }
      .shortcuts-done-btn {
        background: linear-gradient(135deg, #7b58cf, #a855f7);
        border: none;
        color: #fff;
        font-weight: 600;
        padding: 0.38rem 0.9rem;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.8rem;
      }
    `;
    document.head.appendChild(style);
  }

  function getFocusableElements(dialogEl) {
    if (!dialogEl) return [];
    return Array.from(
      dialogEl.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    );
  }

  function trapFocus(e) {
    if (!isOpen() || e.key !== 'Tab') return;
    const dialogEl = document.getElementById('obelisk-shortcuts-dialog');
    const focusables = getFocusableElements(dialogEl);
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first || document.activeElement === dialogEl) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  function isOpen() {
    return Boolean(modalOverlayEl && modalOverlayEl.style.display !== 'none');
  }

  function open() {
    if (typeof document === 'undefined') return;
    ensureInitialized();
    previouslyFocusedEl = document.activeElement;
    modalOverlayEl.style.display = 'flex';
    const closeBtn = document.getElementById('obelisk-shortcuts-close-btn');
    if (closeBtn) closeBtn.focus();
  }

  function close() {
    if (!modalOverlayEl) return;
    modalOverlayEl.style.display = 'none';
    if (previouslyFocusedEl && typeof previouslyFocusedEl.focus === 'function') {
      previouslyFocusedEl.focus();
    }
  }

  function toggle() {
    if (isOpen()) {
      close();
    } else {
      open();
    }
  }

  function ensureInitialized() {
    if (typeof document === 'undefined') return;
    injectStyles();
    if (!document.getElementById('obelisk-shortcuts-backdrop')) {
      const wrap = document.createElement('div');
      wrap.innerHTML = buildModalMarkup().trim();
      modalOverlayEl = wrap.firstElementChild;
      document.body.appendChild(modalOverlayEl);

      const closeBtn = document.getElementById('obelisk-shortcuts-close-btn');
      const doneBtn = document.getElementById('obelisk-shortcuts-done-btn');
      if (closeBtn) closeBtn.addEventListener('click', close);
      if (doneBtn) doneBtn.addEventListener('click', close);
      modalOverlayEl.addEventListener('click', function (e) {
        if (e.target === modalOverlayEl) close();
      });
    } else {
      modalOverlayEl = document.getElementById('obelisk-shortcuts-backdrop');
    }
  }

  function handleGlobalKeydown(e) {
    if (e.key === 'Escape' && isOpen()) {
      e.preventDefault();
      close();
      return;
    }
    if (isOpen() && e.key === 'Tab') {
      trapFocus(e);
      return;
    }
    const tag = (e.target && e.target.tagName) ? e.target.tagName.toUpperCase() : '';
    const isInput = tag === 'INPUT' || tag === 'TEXTAREA' || (e.target && e.target.isContentEditable);
    if (!isInput && e.key === '?' && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      toggle();
    }
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    window.addEventListener('DOMContentLoaded', function () {
      ensureInitialized();
      document.addEventListener('keydown', handleGlobalKeydown);
    });
  }

  return {
    SHORTCUTS: SHORTCUTS,
    buildModalMarkup: buildModalMarkup,
    ensureInitialized: ensureInitialized,
    open: open,
    close: close,
    toggle: toggle,
    isOpen: isOpen,
    trapFocus: trapFocus
  };
}));
