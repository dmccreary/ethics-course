---
title: Harmful Industries Bubble Chart
creator: Claude Code
subject: Ethics, Data Visualization
description: Interactive 2D bubble chart comparing industries by harm to people (Y-axis) versus harm to planet (X-axis), with bubble size representing economic impact.
date: 2025-10-25
type: InteractiveResource
format: text/html
language: en
rights: Apache 2.0
gradeLevel: 9-12, Higher Education
subjectArea: Ethics, Social Studies, Environmental Science
topic: Industry Impact Analysis, Ethical Harm Measurement, Systems Thinking
learningObjectives:
  - Compare relative harm of different industries across multiple dimensions
  - Understand trade-offs between human health impacts and environmental impacts
  - Analyze the relationship between industry size and harm metrics
  - Identify industries with disproportionate harm relative to economic scale
framework: p5.js
canvasDimensions: { width: 800, height: 650 }
dependencies:
  - p5.js v1.9.0
controls:
  - type: button
    id: resetView
    label: Reset View
    description: Reset zoom and pan to default view
simulation:
  model: Static bubble chart with hover tooltips
  variables:
    - harmToPeople: Quantified harm to human health and wellbeing (deaths, DALYs)
    - harmToPlanet: Environmental externalities and ecosystem damage
    - economicImpact: Relative size of industry economic footprint
---

# Harmful Industries Bubble Chart

<div id="sketch-container" style="position: relative;">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
  <script src="./harm-bubble-chart.js"></script>
</div>

## About This Visualization

This interactive bubble chart visualizes the comparative harm of 16 major industries across two critical dimensions:

- **Y-Axis (Vertical)**: Harm to People - measured through deaths, DALYs (Disability-Adjusted Life Years), and direct human suffering
- **X-Axis (Horizontal)**: Harm to Planet - measured through environmental externalities, carbon emissions, and ecosystem damage
- **Bubble Size**: Economic Impact - relative economic footprint of the industry

### How to Use

- **Hover** over any bubble to see detailed information about that industry
- Each industry is represented by a different colored circle
- Industries in the upper-right quadrant cause high harm to both people and planet
- Larger bubbles represent industries with greater economic impact

### Key Insights

The visualization helps identify:
- Industries with disproportionate harm relative to their economic contribution
- Trade-offs between human health impacts and environmental damage
- High-impact targets for ethical reform and intervention
- Patterns in how different sectors concentrate harm

### Data Source

Industry rankings and harm metrics are based on the research compiled in [Chapter 2: Measuring Harm](../../chapters/02-measuring-harm/ranking.md), drawing from authoritative sources including WHO, FAO, ILO, and peer-reviewed epidemiological studies.

### Learning Applications

This visualization supports:
- **Systems Thinking**: Understanding interconnected harm across multiple dimensions
- **Leverage Point Analysis**: Identifying high-impact intervention opportunities
- **Ethical Decision Making**: Comparing industries using data-driven frameworks
- **Advocacy Planning**: Prioritizing reform efforts based on quantified harm
