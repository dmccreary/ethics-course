---
title: Harmful Industries Bubble Chart
description: Interactive 2D bubble chart comparing industries by gross harm to people (Y-axis) versus gross harm to planet (X-axis), with bubble size representing economic impact.
image: /img/cover-preview.png
og:image: /img/cover-preview.png
twitter:image: /img/cover-preview.png
social:
   cards: false
hide:
  - toc
---

# Harmful Industries Bubble Chart

<iframe src="./main.html" height="550px" scrolling="no"
  style="overflow: hidden;"></iframe>

You can include this MicroSim in your course by pasting the following HTML directly into your web page.

```html
<iframe src="https://dmccreary.github.io/ethics-course/sims/harm-bubble-chart/main.html" height="500px" scrolling="no"
  style="overflow: hidden;"></iframe>
```

[Run the Harmful Industries Bubble Chart MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }

[Edit the Harmful Industries Bubble Chart MicroSim on the p5.js editor](https://editor.p5js.org/dmccreary/sketches/jTICnWooR)

## About This Visualization

This interactive bubble chart visualizes the comparative **gross harm** of 17 major industries across two critical dimensions:

- **Y-Axis (Vertical)**: Gross Harm to People - measured through deaths, DALYs (Disability-Adjusted Life Years), and direct human suffering
- **X-Axis (Horizontal)**: Gross Harm to Planet - measured through environmental externalities, carbon emissions, and ecosystem damage
- **Bubble Size**: Economic Impact - relative economic footprint of the industry

### Understanding Gross Harm vs. Net Harm

This visualization measures **gross harm**—the total negative impacts of an industry—without accounting for benefits. This is an important distinction:

| Measure | Definition | Example |
|---------|------------|---------|
| **Gross Harm** | Total negative impacts only | AI uses significant energy (harm) |
| **Net Harm** | Harms minus benefits | AI energy use minus efficiency gains from AI optimization |

**Why gross harm?**

- Provides a clear "harm inventory" useful for advocacy and awareness
- Benefits are often harder to quantify and more subjective
- Separating harms from benefits allows clearer analysis of each

**Limitations of this approach:**

Industries like AI, Healthcare, and Renewable Energy may appear more harmful than their net impact suggests because their significant benefits are not factored in. For example:

- **AI Industry** (center of chart): High energy use and job displacement risks, but also enables medical breakthroughs, accessibility tools, and scientific research
- **Healthcare**: Can cause harm through fraud and over-treatment, but obviously provides enormous benefits

### How to Use

- **Hover** over any bubble to see detailed information about that industry
- Each industry is represented by a different colored circle
- Industries in the upper-right quadrant cause high gross harm to both people and planet
- Larger bubbles represent industries with greater economic impact

### Key Insights

The visualization helps identify:

- Industries with disproportionate gross harm relative to their economic contribution
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

### Future Enhancement: Net Harm Visualization

A valuable next step would be creating a companion **Net Harm Bubble Chart** that attempts to quantify benefits and show `Net Harm = Gross Harm - Benefits`. This would:

- Provide a more nuanced view of industry impacts
- Better represent industries with significant positive contributions
- Enable comparison between gross and net perspectives
- Spark discussion about how to quantify benefits

Challenges include the subjectivity of benefit quantification and the difficulty of comparing different types of benefits (economic, health, convenience, innovation) on a single scale.
