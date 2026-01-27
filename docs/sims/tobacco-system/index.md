---
title: Tobacco Industry System Components
description: Interactive network diagram showing the interconnected stakeholders and dynamics of the tobacco industry
image: /sims/tobacco-system/tobacco-system.png
og:image: /sims/tobacco-system/tobacco-system.png
twitter:image: /sims/tobacco-system/tobacco-system.png
social:
  cards: false
---

# Tobacco Industry System Components

<iframe src="main.html" height="560" width="100%" scrolling="no" style="border: 1px solid #ddd; border-radius: 8px;"></iframe>

[Run Fullscreen](./main.html){ .md-button .md-button--primary }
[Edit](./main.html?enable-save=true){ .md-button }

## About This Visualization

This interactive network diagram illustrates **the tobacco industry as a complex system**, showing how various stakeholders are interconnected through money flows, influence, products, and regulatory relationships.

### Learning Objectives

By interacting with this visualization, students will:

- **Identify system components**: Recognize the four main categories of stakeholders (Industry, Government, Health, Society)
- **Map interconnections**: Understand how different types of relationships connect stakeholders
- **Recognize problematic dynamics**: Identify connections that create conflicts of interest or information asymmetries
- **Apply systems thinking**: See how interventions at one point can ripple through the entire system

### Node Categories

| Category | Color | Components |
|----------|-------|------------|
| **Industry** | Red | Tobacco companies, Advertising agencies, Retail outlets, Tobacco farmers |
| **Government** | Blue | Regulatory agencies, Tax authorities, Public health departments, Legislators |
| **Health** | Green | Healthcare systems, Insurance companies, Medical researchers, Treatment providers |
| **Society** | Yellow | Consumers/smokers, Youth, Advocacy groups, Media |

### Connection Types

| Line Style | Type | Description |
|------------|------|-------------|
| **Solid** | Money flows | Financial transactions between stakeholders |
| **Dashed** | Information/influence | Communication, marketing, advocacy, evidence |
| **Dotted** | Products/materials | Physical goods moving through the system |
| **Bold** | Regulatory | Laws, regulations, and enforcement actions |

### Key System Dynamics

Three critical dynamics are highlighted in this system:

1. **Regulatory Capture**: Industry lobbying can lead regulators to serve industry interests rather than public health
2. **Information Asymmetry**: The industry has more information about product harms than consumers
3. **Externalized Costs**: Healthcare costs of smoking are borne by consumers and society, not the industry

### How to Use

1. **Hover** over any node to see its description
2. **Click** a node to highlight all its connections
3. **Use the filter** dropdown to show only specific connection types
4. **Select "Problematic Only"** to see connections that create conflicts of interest
5. **Click Reset** to restore the full view

## Educational Context

### Bloom's Taxonomy Level

**Understand (L2)**: Students will comprehend how to identify system components and map their interconnections.

### Related Concepts

- [Systems Thinking for Impact](../../chapters/04-impact-analysis/index.md)
- [Systems Thinking Archetypes](../../chapters/05-systems-thinking/index.md)
- [Looking for Leverage](../../chapters/06-looking-for-leverage/index.md)

### Discussion Questions

1. Which connections do you think are most problematic for public health? Why?
2. If you could remove or weaken one connection in this system, which would have the greatest positive impact?
3. What feedback loops can you identify in this system? Are they reinforcing or balancing?
4. How might adding a new stakeholder (e.g., e-cigarette companies) change the system dynamics?

## Technical Notes

- Built with vis-network.js
- Responsive design optimized for narrow iframes
- Navigation buttons enabled for zoom control
- Data stored in separate `data.json` for easy editing

## File Structure

```
tobacco-system/
├── main.html           # HTML wrapper
├── tobacco-system.js   # Visualization logic
├── style.css           # Styling
├── data.json           # Node positions, edges, and metadata
├── index.md            # This documentation
└── metadata.json       # Dublin Core metadata
```

## Editor Mode

To reposition nodes and save the layout:

1. Click the **Edit** button below the diagram or append `?enable-save=true` to the URL
2. **Drag nodes** to reposition them on the canvas
3. **Mouse wheel** to zoom in/out
4. **Drag canvas** to pan the view
5. Click **Save Positions** to download the updated `data.json`
6. Replace the existing `data.json` file in the project with the downloaded version

[Open Editor Mode](./main.html?enable-save=true){ .md-button }

## Customization Guide

### Modifying Node Positions

Node positions are stored in `data.json` under the `nodes` array. Each node has `x` and `y` coordinates:

```json
{
  "id": "tobacco_companies",
  "label": "Tobacco\nCompanies",
  "category": "industry",
  "x": -163,
  "y": -107,
  "description": "Major tobacco corporations...",
  "title": "Tobacco Companies"
}
```

**Two ways to modify positions:**

1. **Visual Editor** (recommended): Use Editor Mode to drag nodes, then save
2. **Manual Edit**: Directly edit `x` and `y` values in `data.json`

### Setting Initial View (Zoom and Pan)

The initial view position is controlled in `tobacco-system.js` in the `positionView()` function:

```javascript
function positionView() {
    if (network) {
        network.moveTo({
            position: { x: -10, y: -20 },  // Pan position
            scale: 0.9,                     // Zoom level
            animation: false
        });
    }
}
```

**Parameters:**

| Parameter | Effect |
|-----------|--------|
| `position.x` | Increase to move view left (shows more right side) |
| `position.y` | Increase to move view up (shows more bottom) |
| `scale` | `1.0` = default, `< 1.0` = zoomed out, `> 1.0` = zoomed in |

### Adding New Nodes

Add a new node object to the `nodes` array in `data.json`:

```json
{
  "id": "new_node_id",
  "label": "Node\nLabel",
  "category": "industry",
  "x": 0,
  "y": 0,
  "description": "Description shown on hover",
  "title": "Full Node Title"
}
```

**Categories:** `industry` (red), `government` (blue), `health` (green), `society` (yellow)

### Adding New Edges

Add a new edge object to the `edges` array in `data.json`:

```json
{
  "from": "source_node_id",
  "to": "target_node_id",
  "type": "money",
  "label": "Edge Label",
  "description": "Description shown on hover",
  "problematic": false
}
```

**Edge types:** `money`, `information`, `influence`, `products`, `regulatory`

### Saving Your Changes

After downloading `data.json` from Editor Mode:

1. Locate the downloaded file (usually in your Downloads folder)
2. Copy it to replace `docs/sims/tobacco-system/data.json` in the project
3. Refresh the page to see your changes
4. Commit to git if satisfied with the layout

## Embedding

```html
<iframe
  src="https://dmccreary.github.io/ethics-course/sims/tobacco-system/main.html"
  height="560"
  width="100%"
  scrolling="no"
  style="border: 1px solid #ddd; border-radius: 8px;">
</iframe>
```
