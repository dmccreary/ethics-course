---
title: Tobacco Industry System Components
description: An interactive network diagram showing the interconnected stakeholders and dynamics of the tobacco industry as a complex system.
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
- Mouse zoom/pan disabled to prevent scroll interference
- Navigation buttons enabled for accessibility
- Data stored in separate `data.json` for easy editing

## Editor Mode

To reposition nodes and save the layout:

1. Open the MicroSim with `?enable-save=true` appended to the URL:
   ```
   main.html?enable-save=true
   ```
2. Drag nodes to reposition them on the canvas
3. Use mouse wheel to zoom and drag to pan
4. Click **Save Positions** to download the updated `data.json`
5. Replace the existing `data.json` file with the downloaded version

[Open Editor Mode](./main.html?enable-save=true){ .md-button }

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
