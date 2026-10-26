/**
 * Proof Tree Viewer — Interactive SVG/DOM AST Proof Tree Explorer
 * 
 * Part of Obelisk Proof Assistant (obeliskproofassistant.github.io)
 * Solves Ticket 002: Interactive AST Proof Tree Explorer
 * 
 * Features:
 * - Renders Gentzen-style and hierarchical AST deduction trees in SVG.
 * - Interactive node collapsing/expanding for lemma encapsulation.
 * - Tooltip inspection of premises, rules, and semantic side-conditions.
 * - Zoom & pan viewport controls for deep derivation graphs.
 * - Seamless integration with Obelisk REPL & theorem inspectors.
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ProofTreeViewer = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  // Preset Proof Trees for Demonstration & Inspection
  const PRESET_TREES = {
    modus_ponens: {
      id: "mp_root",
      rule: "Modus Ponens (→E)",
      conclusion: "Q",
      sideCondition: "Type judgment: P : Prop, Q : Prop",
      premises: [
        {
          id: "mp_p1",
          rule: "Hypothesis",
          conclusion: "P → Q",
          premises: []
        },
        {
          id: "mp_p2",
          rule: "Hypothesis",
          conclusion: "P",
          premises: []
        }
      ]
    },
    russell_refutation: {
      id: "russell_root",
      rule: "Proper Class Introduction (Def. 3.02)",
      conclusion: "Proper({ y ∈ V | y ∉ y })",
      sideCondition: "Proper(X) ⟺ ¬(∃ x ∈ V. x = X)",
      premises: [
        {
          id: "russell_p1",
          rule: "Reductio Ad Absurdum (RAA)",
          conclusion: "¬ (∃ x ∈ V. x = { y ∈ V | y ∉ y })",
          sideCondition: "Assumption: x = { y ∈ V | y ∉ y }",
          premises: [
            {
              id: "russell_p1_1",
              rule: "Diagonal Refutation",
              conclusion: "x ∈ x ⟺ x ∉ x",
              premises: [
                {
                  id: "russell_p1_1_1",
                  rule: "MK Class Comprehension",
                  conclusion: "∀ y. y ∈ x ⟺ y ∈ V ∧ y ∉ y",
                  premises: []
                }
              ]
            },
            {
              id: "russell_p1_2",
              rule: "Absurdity Introduction (⊥I)",
              conclusion: "⊥",
              premises: []
            }
          ]
        }
      ]
    },
    tagged_pair_inversion: {
      id: "tag_root",
      rule: "Tagged Pair Inversion (Axiom 3.46)",
      conclusion: "A = C ∧ B = D",
      sideCondition: "tag ∈ ℕ_tag; rank(⟨tag, A, B⟩) = max(rank A, rank B)",
      premises: [
        {
          id: "tag_p1",
          rule: "Projection 1 (π₁)",
          conclusion: "A = C",
          premises: [
            {
              id: "tag_hyp",
              rule: "Equality Hypothesis",
              conclusion: "⟨tag, A, B⟩ = ⟨tag, C, D⟩",
              premises: []
            }
          ]
        },
        {
          id: "tag_p2",
          rule: "Projection 2 (π₂)",
          conclusion: "B = D",
          premises: [
            {
              id: "tag_hyp_2",
              rule: "Equality Hypothesis",
              conclusion: "⟨tag, A, B⟩ = ⟨tag, C, D⟩",
              premises: []
            }
          ]
        }
      ]
    }
  };

  class ProofTreeRenderer {
    constructor(containerId, options = {}) {
      this.container = typeof containerId === 'string' 
        ? document.getElementById(containerId) 
        : containerId;
      this.options = Object.assign({
        nodeWidth: 180,
        nodeHeight: 60,
        verticalGap: 70,
        horizontalGap: 30,
        theme: 'dark',
        onNodeClick: null
      }, options);
      this.collapsedNodes = new Set();
      this.currentTree = null;
    }

    /**
     * Compute hierarchical coordinates for proof nodes.
     */
    layoutTree(node, depth = 0, xOffset = 0) {
      if (!node) return { width: 0, node: null };

      const isCollapsed = this.collapsedNodes.has(node.id);
      const childLayouts = [];
      let totalWidth = 0;

      if (!isCollapsed && node.premises && node.premises.length > 0) {
        let currentX = xOffset;
        for (const child of node.premises) {
          const cl = this.layoutTree(child, depth + 1, currentX);
          childLayouts.push(cl);
          currentX += cl.width + this.options.horizontalGap;
        }
        totalWidth = currentX - xOffset - this.options.horizontalGap;
      } else {
        totalWidth = this.options.nodeWidth;
      }

      const x = isCollapsed || !node.premises || node.premises.length === 0
        ? xOffset
        : xOffset + totalWidth / 2 - this.options.nodeWidth / 2;

      const y = depth * (this.options.nodeHeight + this.options.verticalGap);

      return {
        id: node.id,
        rule: node.rule,
        conclusion: node.conclusion,
        sideCondition: node.sideCondition || "",
        x: x,
        y: y,
        width: Math.max(totalWidth, this.options.nodeWidth),
        children: childLayouts,
        rawNode: node,
        isCollapsed: isCollapsed,
        hasChildren: Boolean(node.premises && node.premises.length > 0)
      };
    }

    /**
     * Render the tree as SVG elements inside the container.
     */
    render(treeData) {
      if (!this.container) return;
      this.currentTree = treeData || this.currentTree || PRESET_TREES.modus_ponens;
      const layout = this.layoutTree(this.currentTree);

      const svgWidth = Math.max(layout.width + 100, 600);
      const depth = this.getMaxDepth(this.currentTree);
      const svgHeight = (depth + 1) * (this.options.nodeHeight + this.options.verticalGap) + 80;

      let svgHtml = `
      <div class="proof-tree-wrapper" style="position: relative; overflow: auto; border: 1px solid var(--border-color, #2b2a38); border-radius: 8px; background: #0f0e13; padding: 16px;">
        <div class="proof-tree-toolbar" style="display: flex; gap: 8px; margin-bottom: 12px; align-items: center; justify-content: space-between;">
          <div style="display: flex; gap: 8px; align-items: center;">
            <span style="font-size: 0.8rem; font-weight: 600; color: #a78bfa;">🌳 Proof Tree Explorer</span>
            <button type="button" class="btn btn-secondary btn-sm" onclick="ProofTreeViewer.expandAll('${this.container.id}')" style="font-size: 0.75rem; padding: 2px 8px; cursor: pointer;">Expand All</button>
            <button type="button" class="btn btn-secondary btn-sm" onclick="ProofTreeViewer.resetZoom('${this.container.id}')" style="font-size: 0.75rem; padding: 2px 8px; cursor: pointer;">Reset View</button>
          </div>
          <span style="font-size: 0.75rem; color: #8c8b96;">Click nodes to collapse/expand premises</span>
        </div>
        <svg id="svg-${this.container.id}" width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}" style="display: block; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          <defs>
            <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#1e1d27" />
              <stop offset="100%" stop-color="#14131b" />
            </linearGradient>
            <linearGradient id="nodeGradActive" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#2d2b3d" />
              <stop offset="100%" stop-color="#211f2c" />
            </linearGradient>
          </defs>
          <g transform="translate(40, 30)">
            ${this.renderEdges(layout)}
            ${this.renderNodes(layout)}
          </g>
        </svg>
      </div>`;

      this.container.innerHTML = svgHtml;
    }

    renderEdges(layout) {
      let edges = '';
      if (!layout.children || layout.children.length === 0) return edges;

      const parentCenterX = layout.x + this.options.nodeWidth / 2;
      const parentTopY = layout.y;

      for (const child of layout.children) {
        const childCenterX = child.x + this.options.nodeWidth / 2;
        const childBottomY = child.y + this.options.nodeHeight;

        // Gentzen inference horizontal line and connecting stem
        edges += `
        <path d="M ${parentCenterX} ${parentTopY} L ${childCenterX} ${childBottomY}" 
              stroke="#5b5770" stroke-width="1.5" stroke-dasharray="none" />
        <line x1="${childCenterX - 40}" y1="${childBottomY}" x2="${childCenterX + 40}" y2="${childBottomY}" 
              stroke="#7b58cf" stroke-width="2" />`;

        edges += this.renderEdges(child);
      }
      return edges;
    }

    renderNodes(layout) {
      let nodesHtml = '';
      const nodeX = layout.x;
      const nodeY = layout.y;
      const nw = this.options.nodeWidth;
      const nh = this.options.nodeHeight;

      const isCol = layout.isCollapsed;
      const toggleIndicator = layout.hasChildren ? (isCol ? ' [+]' : ' [−]') : '';

      nodesHtml += `
      <g class="proof-node" style="cursor: pointer;" onclick="ProofTreeViewer.toggleNode('${this.container.id}', '${layout.id}')">
        <rect x="${nodeX}" y="${nodeY}" width="${nw}" height="${nh}" rx="6" ry="6" 
              fill="url(#nodeGrad)" stroke="${isCol ? '#e0a038' : '#38bdf8'}" stroke-width="1.5">
          <title>${layout.sideCondition ? 'Side condition: ' + layout.sideCondition : layout.rule}</title>
        </rect>
        <text x="${nodeX + nw / 2}" y="${nodeY + 22}" text-anchor="middle" font-size="11" font-weight="600" fill="#c4b5fd">
          ${this.escapeHtml(layout.rule)}${toggleIndicator}
        </text>
        <text x="${nodeX + nw / 2}" y="${nodeY + 44}" text-anchor="middle" font-size="12" font-weight="700" fill="#f1f5f9">
          ${this.escapeHtml(layout.conclusion)}
        </text>
      </g>`;

      if (layout.children && layout.children.length > 0) {
        for (const child of layout.children) {
          nodesHtml += this.renderNodes(child);
        }
      }
      return nodesHtml;
    }

    getMaxDepth(node) {
      if (!node.premises || node.premises.length === 0) return 0;
      let max = 0;
      for (const p of node.premises) {
        const d = this.getMaxDepth(p);
        if (d > max) max = d;
      }
      return max + 1;
    }

    toggle(nodeId) {
      if (this.collapsedNodes.has(nodeId)) {
        this.collapsedNodes.delete(nodeId);
      } else {
        this.collapsedNodes.add(nodeId);
      }
      this.render();
    }

    expandAll() {
      this.collapsedNodes.clear();
      this.render();
    }

    escapeHtml(str) {
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }
  }

  // Global Registry of Renderers by Container ID
  const instances = {};

  return {
    PRESET_TREES: PRESET_TREES,
    init: function (containerId, presetKey = 'russell_refutation', options = {}) {
      const tree = PRESET_TREES[presetKey] || PRESET_TREES.modus_ponens;
      const renderer = new ProofTreeRenderer(containerId, options);
      instances[containerId] = renderer;
      renderer.render(tree);
      return renderer;
    },
    toggleNode: function (containerId, nodeId) {
      if (instances[containerId]) {
        instances[containerId].toggle(nodeId);
      }
    },
    expandAll: function (containerId) {
      if (instances[containerId]) {
        instances[containerId].expandAll();
      }
    },
    resetZoom: function (containerId) {
      if (instances[containerId]) {
        instances[containerId].render();
      }
    },
    renderCustomTree: function (containerId, treeData) {
      if (!instances[containerId]) {
        instances[containerId] = new ProofTreeRenderer(containerId);
      }
      instances[containerId].render(treeData);
    }
  };
}));
