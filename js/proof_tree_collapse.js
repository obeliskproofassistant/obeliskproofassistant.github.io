/**
 * Proof Tree Collapse Widget — Interactive Collapsible Sequent & Derivation Nodes
 *
 * Part of Obelisk Proof Assistant (obeliskproofassistant.github.io)
 * Solves Ticket 006: Collapsible Proof Tree Node Widget
 *
 * Features:
 * - Toggle collapse/expand for subtree nodes (`[data-proof-node]`, `.proof-tree-node`, `.proof-code-pane`, `.proof-audit-pane`)
 * - Subtle height & opacity transitions with SVG chevron indicators
 * - Master "Expand All" and "Collapse All" controls for long proof branches
 * - Accessible `aria-expanded` and `data-node-state="expanded|collapsed"` attributes
 * - Debounced `requestAnimationFrame` batch DOM updates
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ProofTreeCollapse = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  const CHEVRON_SVG = `<svg class="proof-chevron-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.22s ease; display: inline-block; vertical-align: middle;"><polyline points="6 9 12 15 18 9"></polyline></svg>`;

  function injectStyles() {
    if (typeof document === 'undefined') return;
    if (document.getElementById('obelisk-proof-collapse-styles')) return;
    const style = document.createElement('style');
    style.id = 'obelisk-proof-collapse-styles';
    style.textContent = `
      .proof-collapsible-body {
        overflow: hidden;
        transition: max-height 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease;
        max-height: 2400px;
        opacity: 1;
      }
      [data-node-state="collapsed"] > .proof-collapsible-body,
      .proof-node-collapsed > .proof-collapsible-body,
      [data-node-state="collapsed"] pre.code-block,
      [data-node-state="collapsed"] .audit-item {
        max-height: 0 !important;
        opacity: 0 !important;
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        overflow: hidden !important;
        pointer-events: none;
      }
      [data-node-state="collapsed"] .proof-chevron-svg {
        transform: rotate(-90deg);
      }
      .proof-collapse-toggle-btn {
        background: rgba(56, 189, 248, 0.1);
        border: 1px solid rgba(56, 189, 248, 0.28);
        color: #38bdf8;
        border-radius: 4px;
        padding: 2px 7px;
        font-size: 0.72rem;
        font-weight: 600;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 4px;
        transition: all 0.18s ease;
      }
      .proof-collapse-toggle-btn:hover {
        background: rgba(56, 189, 248, 0.22);
        border-color: #38bdf8;
      }
    `;
    document.head.appendChild(style);
  }

  function setNodeState(nodeEl, state) {
    if (!nodeEl) return;
    const normalized = state === 'collapsed' ? 'collapsed' : 'expanded';
    nodeEl.setAttribute('data-node-state', normalized);
    nodeEl.setAttribute('data-node', nodeEl.getAttribute('data-node') || nodeEl.id || 'proof-node');
    if (normalized === 'collapsed') {
      nodeEl.classList.add('proof-node-collapsed');
    } else {
      nodeEl.classList.remove('proof-node-collapsed');
    }
    const toggleBtn = nodeEl.querySelector('.proof-collapse-toggle-btn');
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-expanded', normalized === 'expanded' ? 'true' : 'false');
      const labelSpan = toggleBtn.querySelector('.proof-collapse-label');
      if (labelSpan) {
        labelSpan.textContent = normalized === 'expanded' ? 'Collapse' : 'Expand';
      }
    }
  }

  function toggleNode(nodeOrId) {
    if (typeof document === 'undefined') return null;
    const el = typeof nodeOrId === 'string' ? document.getElementById(nodeOrId) : nodeOrId;
    if (!el) return null;
    const current = el.getAttribute('data-node-state') || 'expanded';
    const next = current === 'collapsed' ? 'expanded' : 'collapsed';
    setNodeState(el, next);
    return next;
  }

  function expandAll(rootSelector) {
    if (typeof document === 'undefined') return 0;
    const rootEl = rootSelector ? document.querySelector(rootSelector) : document;
    if (!rootEl) return 0;
    const nodes = rootEl.querySelectorAll('[data-node-state], .proof-code-pane, .proof-tree-node');
    const apply = () => {
      nodes.forEach((n) => setNodeState(n, 'expanded'));
    };
    if (typeof window !== 'undefined' && typeof window.requestAnimationFrame === 'function') {
      window.requestAnimationFrame(apply);
    } else {
      apply();
    }
    return nodes.length;
  }

  function collapseAll(rootSelector) {
    if (typeof document === 'undefined') return 0;
    const rootEl = rootSelector ? document.querySelector(rootSelector) : document;
    if (!rootEl) return 0;
    const nodes = rootEl.querySelectorAll('[data-node-state], .proof-code-pane, .proof-tree-node');
    const apply = () => {
      nodes.forEach((n) => setNodeState(n, 'collapsed'));
    };
    if (typeof window !== 'undefined' && typeof window.requestAnimationFrame === 'function') {
      window.requestAnimationFrame(apply);
    } else {
      apply();
    }
    return nodes.length;
  }

  function decorateProofPanes(rootEl) {
    if (typeof document === 'undefined') return;
    injectStyles();
    const scope = rootEl || document;
    const panes = scope.querySelectorAll('.proof-code-pane, .proof-tree-node');
    panes.forEach((pane, idx) => {
      if (!pane.getAttribute('data-node')) {
        pane.setAttribute('data-node', pane.id || `proof-step-${idx + 1}`);
      }
      if (!pane.getAttribute('data-node-state')) {
        pane.setAttribute('data-node-state', 'expanded');
      }
      const header = pane.querySelector('.proof-pane-header');
      if (header && !header.querySelector('.proof-collapse-toggle-btn')) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'proof-collapse-toggle-btn';
        btn.setAttribute('aria-expanded', 'true');
        btn.setAttribute('title', 'Collapse or expand proof derivation subtree');
        btn.innerHTML = `${CHEVRON_SVG} <span class="proof-collapse-label">Collapse</span>`;
        btn.addEventListener('click', function (ev) {
          ev.stopPropagation();
          toggleNode(pane);
        });
        header.appendChild(btn);
      }
    });
  }

  // Handle embedded frame navigation: when embedded, redirect Portal links to interactive demo embedding.html
  function handleEmbeddedNav() {
    if (typeof window === 'undefined') return;
    const isEmbedded = window.self !== window.top;
    if (!isEmbedded) return;
    const links = document.querySelectorAll('a[href*="index.html"]');
    for (const a of links) {
      const text = (a.textContent || '').trim();
      if (text.includes('Obelisk Portal') || text.includes('Portal')) {
        const href = a.getAttribute('href') || '';
        if (href.includes('../../index.html')) {
          a.setAttribute('href', '../../embedding.html');
        } else if (href.includes('../index.html')) {
          a.setAttribute('href', '../embedding.html');
        } else if (href === 'index.html') {
          a.setAttribute('href', 'embedding.html');
        }
        a.textContent = '← Obelisk Demonstration';
        a.title = 'Return to Obelisk Interactive Demonstration';
      }
    }
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    window.addEventListener('DOMContentLoaded', function () {
      decorateProofPanes(document);
      handleEmbeddedNav();
    });
  }

  return {
    CHEVRON_SVG: CHEVRON_SVG,
    decorateProofPanes: decorateProofPanes,
    toggleNode: toggleNode,
    setNodeState: setNodeState,
    expandAll: expandAll,
    collapseAll: collapseAll
  };
}));
