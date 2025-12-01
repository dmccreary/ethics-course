#!/usr/bin/env python3
"""
Validate and analyze learning graph for cycles and issues.
Version: 1.0
"""

import csv
import sys
from collections import defaultdict

def load_graph(filename):
    """Load the graph from CSV file."""
    nodes = {}
    edges = defaultdict(list)

    with open(filename, 'r') as f:
        reader = csv.DictReader(f)
        for row in reader:
            concept_id = int(row['ConceptID'])
            label = row['ConceptLabel']
            deps = row['Dependencies'].strip()

            nodes[concept_id] = label

            if deps:
                for dep in deps.split('|'):
                    dep_id = int(dep)
                    edges[concept_id].append(dep_id)

    return nodes, edges

def find_self_references(nodes, edges):
    """Find nodes that reference themselves."""
    self_refs = []
    for node_id, deps in edges.items():
        if node_id in deps:
            self_refs.append((node_id, nodes[node_id]))
    return self_refs

def find_cycles(nodes, edges):
    """Find all cycles in the graph using DFS."""
    WHITE, GRAY, BLACK = 0, 1, 2
    color = {n: WHITE for n in nodes}
    cycles = []

    def dfs(node, path):
        color[node] = GRAY
        path.append(node)

        for neighbor in edges.get(node, []):
            if neighbor not in nodes:
                continue
            if color[neighbor] == GRAY:
                # Found a cycle
                cycle_start = path.index(neighbor)
                cycle = path[cycle_start:] + [neighbor]
                cycles.append(cycle)
            elif color[neighbor] == WHITE:
                dfs(neighbor, path.copy())

        color[node] = BLACK

    for node in nodes:
        if color[node] == WHITE:
            dfs(node, [])

    return cycles

def count_dependencies(edges):
    """Count dependency statistics."""
    dep_counts = []
    for node_id, deps in edges.items():
        dep_counts.append(len(deps))

    zero_deps = sum(1 for c in dep_counts if c == 0)
    nodes_without_deps = [nid for nid, deps in edges.items() if len(deps) == 0]

    return {
        'zero_deps': zero_deps,
        'avg_deps': sum(dep_counts) / len(dep_counts) if dep_counts else 0,
        'max_deps': max(dep_counts) if dep_counts else 0,
        'nodes_without_deps': nodes_without_deps
    }

def main():
    if len(sys.argv) < 2:
        print("Usage: python validate_graph.py <csv_file>")
        sys.exit(1)

    filename = sys.argv[1]
    nodes, edges = load_graph(filename)

    print(f"Loaded {len(nodes)} nodes")

    # Find self-references
    self_refs = find_self_references(nodes, edges)
    if self_refs:
        print(f"\nSELF-REFERENCES FOUND ({len(self_refs)}):")
        for node_id, label in self_refs:
            print(f"  {node_id}: {label}")
    else:
        print("\nNo self-references found.")

    # Find cycles
    cycles = find_cycles(nodes, edges)
    if cycles:
        print(f"\nCYCLES FOUND ({len(cycles)}):")
        for cycle in cycles[:10]:  # Show first 10
            cycle_labels = [f"{n}:{nodes[n]}" for n in cycle if n in nodes]
            print(f"  {' -> '.join(cycle_labels)}")
    else:
        print("\nNo cycles found - graph is a valid DAG!")

    # Dependency stats
    stats = count_dependencies(edges)
    print(f"\nDEPENDENCY STATISTICS:")
    print(f"  Nodes with zero dependencies (foundational): {stats['zero_deps']}")
    print(f"  Average dependencies per node: {stats['avg_deps']:.2f}")
    print(f"  Maximum dependencies: {stats['max_deps']}")

if __name__ == "__main__":
    main()
