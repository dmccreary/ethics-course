---
title: Learning Graph Viewer
description: Interactive visualization for exploring the Data-Driven Ethics course concept dependencies
image: /sims/graph-viewer/graph-viewer.png
og:image: /sims/graph-viewer/graph-viewer.png
twitter:image: /sims/graph-viewer/graph-viewer.png
social:
  cards: false
---

# Learning Graph Viewer

<iframe src="./main.html" width="100%" height="600px" scrolling="no"></iframe>

[View Fullscreen](./main.html){ .md-button }

This viewer reads learning graph data from [../../learning-graph/learning-graph.json](../../learning-graph/learning-graph.json) and provides an interactive visualization for exploring the **Data-Driven Ethics and Systems Change** course concepts.

## Features

### Search

- Type-ahead search for node names
- Displays matching results in a dropdown
- Shows node group/category in results
- Clicking a result focuses and highlights the node on the graph
- Only searches visible nodes (respects taxonomy filters)

### Taxonomy Legend with Checkboxes

- Sidebar legend with all node categories
- Toggle visibility of entire node groups
- Color-coded categories matching the graph
- "Check All" and "Uncheck All" buttons for bulk operations
- Collapsible sidebar to maximize graph viewing area

### Graph Statistics

Real-time statistics that update as you filter:

- **Nodes**: Count of visible nodes
- **Edges**: Count of visible edges (both endpoints must be visible)
- **Orphans**: Nodes with no connections (indicates concepts that may need editing)

## Taxonomy Categories

This learning graph includes 13 taxonomy categories:

| Category | Description |
|----------|-------------|
| **Foundation Concepts** | Core ethics, research methods, and critical thinking |
| **Harm Measurement** | DALYs, social costs, and impact assessment |
| **Data Gathering** | Ethical data collection and bias detection |
| **Systems Foundations** | Feedback loops, stocks and flows |
| **System Archetypes** | Common patterns like Tragedy of the Commons |
| **Market and Power** | Market failures and power dynamics |
| **Industry Cases** | Tobacco, fossil fuels, fast fashion studies |
| **Leverage Points** | Donella Meadows' intervention framework |
| **Advocacy Strategies** | Policy design and movement building |
| **Behavioral Economics** | Nudges and choice architecture |
| **Communication** | Data visualization and persuasion |
| **Capstone and Reform** | Reform proposals and project skills |
| **Corporate Responsibility** | ESG, sustainability, accountability |

## Usage Tips

1. **Hide a category** - Uncheck a category in the sidebar to hide all nodes in that group
2. **Search within visible nodes** - Use search to quickly find specific concepts among visible nodes
3. **Focus on a topic** - Uncheck all categories, then check only the ones you want to study
4. **Collapse sidebar** - Click the menu button to hide the sidebar and expand the graph view
5. **Find orphans** - Check the statistics to see if any nodes lack connections

## Use Cases

- **Course planning** - Filter by topic area to design lesson sequences
- **Concept exploration** - Search for specific concepts and see their dependencies
- **Gap analysis** - Use orphan count to identify disconnected concepts
- **Progressive learning** - Start with foundation concepts, gradually enable advanced topics
