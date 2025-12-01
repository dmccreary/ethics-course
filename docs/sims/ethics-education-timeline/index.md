# Evolution of Ethics Education Timeline

This interactive timeline traces the historical development of ethics education from classical philosophy to modern data-driven approaches, spanning over 2,500 years of ethical thought.

[Run the Evolution of Ethics Education Timeline](./main.html){ .md-button .md-button--primary }

[View the Timeline Data](./timeline.json){ .md-button }

<iframe src="./main.html" width="100%" height="700px" style="border: 1px solid #ccc; border-radius: 8px;"></iframe>

## Overview

This timeline visualization shows how ethics education has evolved through three major eras:

1. **Classical Philosophy Era (500 BCE - 1950)**: The foundational period when systematic ethical frameworks were developed by Greek philosophers and later refined by Enlightenment thinkers like Kant and Mill.

2. **Applied Ethics Era (1950 - 2000)**: A transitional period when ethical thinking became institutionalized in professional settings, research protocols, and business education.

3. **Data Ethics Era (2000 - Present)**: The current era where empirical methods, data analysis, and quantitative approaches are increasingly integrated with traditional ethical reasoning.

## Learning Objective

Students will understand how ethics education has evolved and where data-driven ethics fits in this progression, recognizing that modern approaches build upon centuries of philosophical inquiry while adding new tools for measuring harm and evaluating interventions.

## Interactive Features

### Navigation Controls
- **Zoom**: Scroll with your mouse wheel or trackpad to zoom in/out
- **Pan**: Click and drag to move along the timeline
- **Event Details**: Click any event to see its full description and historical context

### Category Filtering
Use the filter buttons to focus on specific eras:
- **All Events**: View the complete timeline
- **Classical Philosophy Era**: Focus on foundational philosophical developments
- **Applied Ethics Era**: See how ethics became institutionalized
- **Data Ethics Era**: Explore the modern integration of data and ethics

### Hover Tooltips
Hover over any event to see a brief context note about its significance.

## Key Milestones

| Year | Event | Significance |
|------|-------|--------------|
| 500 BCE | Greek Virtue Ethics | Established ethics as formal philosophical inquiry |
| 1785 | Kant's Categorical Imperative | Introduced duty-based ethical reasoning |
| 1863 | Mill's Utilitarianism | Provided quantitative approach to ethics |
| 1971 | Rawls' Theory of Justice | Bridged philosophy with policy analysis |
| 1979 | Belmont Report | Codified ethical standards for research |
| 2018 | Cambridge Analytica Scandal | Brought data ethics to mainstream consciousness |
| 2025 | Data-Driven Ethics Curriculum | Integration of empirical and philosophical methods |

## Relevance to This Course

This timeline demonstrates why this course takes a data-driven approach to ethics:

- **Building on History**: We inherit rich philosophical traditions that provide frameworks for ethical reasoning
- **Adding New Tools**: Modern data science allows us to measure harm, analyze systems, and evaluate interventions empirically
- **Addressing New Challenges**: Big data, AI, and global connectivity create ethical challenges that require quantitative analysis
- **Effective Advocacy**: Data-driven approaches strengthen ethical arguments and policy recommendations

## Technical Details

- **Timeline Library**: vis-timeline 7.7.3
- **Data Format**: JSON (TimelineJS-compatible)
- **Bloom's Taxonomy Level**: Understand (L2)

## Data Structure

The timeline data is stored in `timeline.json`. Each event includes:

```json
{
  "start_date": {
    "year": "1785",
    "display_date": "1785"
  },
  "text": {
    "headline": "Event Title",
    "text": "Detailed description..."
  },
  "group": "Category Name",
  "notes": "Historical context for tooltips"
}
```

## Customization

To add new events, edit `timeline.json` and add an event object to the `events` array following the structure above. The timeline will automatically incorporate new events when reloaded.
