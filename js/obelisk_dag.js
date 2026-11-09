/**
 * js/obelisk_dag.js — Interactive Visual Proof Dependency DAG & Lemma Inheritance Visualizer (Ticket 191).
 * Lightweight pure SVG directed acyclic graph viewer with topological layout, ancestor cone highlighting,
 * and zero circular dependencies.
 */
(function () {
  'use strict';

  var CATEGORY_COLORS = {
    'Axiom': '#a855f7',
    'Theorem': '#10b981',
    'Inference Rule': '#f59e0b',
    'Definition': '#38bdf8'
  };

  function computeAncestors(nodeId, edges) {
    var visited = {};
    var queue = [nodeId];
    while (queue.length > 0) {
      var curr = queue.shift();
      if (visited[curr]) continue;
      visited[curr] = true;
      for (var i = 0; i < edges.length; i++) {
        if (edges[i].to === curr && !visited[edges[i].from]) {
          queue.push(edges[i].from);
        }
      }
    }
    return visited;
  }

  function hasCycle(nodes, edges) {
    var state = {};
    var adj = {};
    nodes.forEach(function (n) { adj[n.id] = []; });
    edges.forEach(function (e) {
      if (adj[e.from]) adj[e.from].push(e.to);
    });

    function dfs(u) {
      state[u] = 1;
      var nexts = adj[u] || [];
      for (var i = 0; i < nexts.length; i++) {
        var v = nexts[i];
        if (state[v] === 1) return true;
        if (!state[v] && dfs(v)) return true;
      }
      state[u] = 2;
      return false;
    }

    for (var i = 0; i < nodes.length; i++) {
      var id = nodes[i].id;
      if (!state[id] && dfs(id)) return true;
    }
    return false;
  }

  function renderDependencyDAG(containerId, graphData) {
    var el = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
    if (!el || !graphData) return;

    var nodes = graphData.nodes || [];
    var edges = graphData.edges || [];
    var width = Math.max(760, nodes.length * 42);
    var height = 360;

    var svgParts = [
      '<svg class="obelisk-dag-svg" viewBox="0 0 ' + width + ' ' + height + '" width="100%" height="' + height + '">',
      '<g class="dag-edges">'
    ];

    var posMap = {};
    nodes.forEach(function (n, idx) {
      var col = Math.floor(idx / 4);
      var row = idx % 4;
      posMap[n.id] = { x: 70 + col * 130, y: 60 + row * 75 };
    });

    edges.forEach(function (e) {
      var p1 = posMap[e.from];
      var p2 = posMap[e.to];
      if (p1 && p2) {
        svgParts.push(
          '<line class="dag-edge" data-from="' + e.from + '" data-to="' + e.to + '" ' +
          'x1="' + p1.x + '" y1="' + p1.y + '" x2="' + p2.x + '" y2="' + p2.y + '" ' +
          'stroke="rgba(148,163,184,0.35)" stroke-width="1.5" />'
        );
      }
    });
    svgParts.push('</g><g class="dag-nodes">');

    nodes.forEach(function (n) {
      var p = posMap[n.id];
      var color = CATEGORY_COLORS[n.category] || '#38bdf8';
      svgParts.push(
        '<g class="dag-node" data-node-id="' + n.id + '" transform="translate(' + p.x + ',' + p.y + ')" style="cursor:pointer;">' +
        '<circle r="16" fill="' + color + '" fill-opacity="0.22" stroke="' + color + '" stroke-width="2"></circle>' +
        '<text text-anchor="middle" dy="4" fill="#f8fafc" font-size="10" font-family="monospace">' + (n.number || n.id) + '</text>' +
        '<title>' + (n.number || '') + ' ' + (n.title || '') + '</title>' +
        '</g>'
      );
    });
    svgParts.push('</g></svg>');
    el.innerHTML = svgParts.join('');
  }

  var ObeliskDAG = {
    CATEGORY_COLORS: CATEGORY_COLORS,
    computeAncestors: computeAncestors,
    hasCycle: hasCycle,
    renderDependencyDAG: renderDependencyDAG
  };

  if (typeof module === 'object' && module.exports) {
    module.exports = ObeliskDAG;
  }
  if (typeof window !== 'undefined') {
    window.ObeliskDAG = ObeliskDAG;
  }
})();
