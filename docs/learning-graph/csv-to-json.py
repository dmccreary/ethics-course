#!/usr/bin/env python3
"""
Convert learning graph CSV to JSON format for vis-network.js visualization.
Version: 1.0
"""

import csv
import json
import sys
from collections import defaultdict

# Define colors for each taxonomy category
TAXONOMY_COLORS = {
    "FOUND": {"classifierName": "Foundation Concepts", "color": "LightCoral", "font": {"color": "black"}},
    "HARM": {"classifierName": "Harm Measurement", "color": "PeachPuff", "font": {"color": "black"}},
    "DATA": {"classifierName": "Data Gathering", "color": "LightYellow", "font": {"color": "black"}},
    "SYSF": {"classifierName": "Systems Foundations", "color": "PaleGreen", "font": {"color": "black"}},
    "ARCH": {"classifierName": "System Archetypes", "color": "Aquamarine", "font": {"color": "black"}},
    "MRKT": {"classifierName": "Market and Power", "color": "PowderBlue", "font": {"color": "black"}},
    "CASE": {"classifierName": "Industry Cases", "color": "Thistle", "font": {"color": "black"}},
    "LEVR": {"classifierName": "Leverage Points", "color": "LightSteelBlue", "font": {"color": "black"}},
    "ADVOC": {"classifierName": "Advocacy Strategies", "color": "Lavender", "font": {"color": "black"}},
    "BEHAV": {"classifierName": "Behavioral Economics", "color": "MistyRose", "font": {"color": "black"}},
    "COMM": {"classifierName": "Communication", "color": "Honeydew", "font": {"color": "black"}},
    "CAP": {"classifierName": "Capstone and Reform", "color": "Plum", "font": {"color": "black"}},
    "CORP": {"classifierName": "Corporate Responsibility", "color": "Gainsboro", "font": {"color": "black"}},
    "MISC": {"classifierName": "Miscellaneous", "color": "LightGray", "font": {"color": "black"}}
}

def load_metadata(metadata_file):
    """Load metadata from JSON file."""
    with open(metadata_file, 'r') as f:
        return json.load(f)

def load_csv(csv_file):
    """Load the learning graph from CSV file."""
    nodes = []
    edges = []
    taxonomies_used = set()

    with open(csv_file, 'r') as f:
        reader = csv.DictReader(f)
        for row in reader:
            concept_id = int(row['ConceptID'])
            label = row['ConceptLabel']
            deps = row['Dependencies'].strip()
            taxonomy = row.get('TaxonomyID', 'MISC').strip()

            if not taxonomy:
                taxonomy = 'MISC'

            taxonomies_used.add(taxonomy)

            # Create node
            node = {
                "id": concept_id,
                "label": label,
                "group": taxonomy
            }
            nodes.append(node)

            # Create edges
            if deps:
                for dep in deps.split('|'):
                    dep_id = int(dep.strip())
                    edge = {
                        "from": dep_id,
                        "to": concept_id
                    }
                    edges.append(edge)

    return nodes, edges, taxonomies_used

def build_groups(taxonomies_used):
    """Build the groups section based on taxonomies used."""
    groups = {}
    for tax_id in taxonomies_used:
        if tax_id in TAXONOMY_COLORS:
            groups[tax_id] = TAXONOMY_COLORS[tax_id]
        else:
            groups[tax_id] = TAXONOMY_COLORS["MISC"]
    return groups

def main():
    if len(sys.argv) < 3:
        print("Usage: python csv-to-json.py <csv_file> <output_json> [metadata_json]")
        sys.exit(1)

    csv_file = sys.argv[1]
    output_file = sys.argv[2]
    metadata_file = sys.argv[3] if len(sys.argv) > 3 else None

    # Load metadata
    if metadata_file:
        metadata = load_metadata(metadata_file)
    else:
        metadata = {
            "title": "Learning Graph",
            "description": "A learning graph generated from CSV",
            "date": "2025-11-30",
            "version": "1.0",
            "format": "Learning Graph JSON v1.0"
        }

    # Load CSV
    nodes, edges, taxonomies_used = load_csv(csv_file)

    # Build groups
    groups = build_groups(taxonomies_used)

    # Build final structure
    learning_graph = {
        "metadata": metadata,
        "groups": groups,
        "nodes": nodes,
        "edges": edges
    }

    # Write output
    with open(output_file, 'w') as f:
        json.dump(learning_graph, f, indent=2)

    print(f"Generated {output_file} with:")
    print(f"  - {len(nodes)} nodes")
    print(f"  - {len(edges)} edges")
    print(f"  - {len(groups)} taxonomy groups")

if __name__ == "__main__":
    main()
