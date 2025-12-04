---
title: Cognitive Bias Recognition Quiz
description: An interactive quiz game that helps students recognize common cognitive biases in real-world scenarios and understand how these biases affect ethical reasoning.
image: /sims/bias-classifier-quiz/bias-classifier-quiz.png
og:image: /sims/bias-classifier-quiz/bias-classifier-quiz.png
twitter:image: /sims/bias-classifier-quiz/bias-classifier-quiz.png
social:
   cards: false
---

# Cognitive Bias Recognition Quiz

<iframe src="main.html" height="532px" width="100%" scrolling="no"></iframe>

[Run the Cognitive Bias Quiz Fullscreen](./main.html){ .md-button .md-button--primary }

## About This MicroSim

This interactive quiz helps students identify cognitive biases in real-world scenarios. Recognizing these biases is essential for ethical reasoning and data-driven decision making.

### Features

- **8 Scenario-Based Questions**: Each scenario presents a realistic situation demonstrating a cognitive bias
- **Multiple Choice Format**: Select from 4 bias options per scenario
- **Hint System**: Get a hint if you're stuck (reduces points earned)
- **Detailed Explanations**: Learn why each answer is correct after responding
- **Score Tracking**: Earn 10 points for correct answers (5 with hint)
- **Encouraging Feedback**: Supportive messages whether right or wrong
- **Randomized Order**: Questions appear in random order each time

### Cognitive Biases Covered

| Bias | Description |
|------|-------------|
| **Cherry Picking** | Selecting only data that supports your conclusion |
| **Availability Heuristic** | Overestimating likelihood of easily recalled events |
| **Ad Hominem Bias** | Rejecting arguments based on the source, not the content |
| **Anchoring** | Over-relying on the first piece of information encountered |
| **Framing Effect** | Being influenced by how information is presented |
| **Survivorship Bias** | Drawing conclusions only from "winners" |
| **Confirmation Bias** | Seeking information that confirms existing beliefs |
| **Correlation-Causation Fallacy** | Assuming correlation implies causation |

## Embedding This MicroSim

You can include this MicroSim on your website using the following `iframe`:

```html
<iframe src="https://dmccreary.github.io/ethics-course/sims/bias-classifier-quiz/main.html"
        height="502px"
        width="100%"
        scrolling="no">
</iframe>
```

## Lesson Plan

### Learning Objectives

By completing this quiz, students will be able to:

1. **Identify** common cognitive biases in realistic scenarios
2. **Distinguish** between similar biases (e.g., Cherry Picking vs. Confirmation Bias)
3. **Explain** why specific reasoning patterns qualify as biased
4. **Apply** bias recognition to evaluate arguments and data presentations

### Bloom's Taxonomy Level

This activity primarily addresses **Application (Level 3)** - students must apply their knowledge of cognitive biases to analyze new scenarios they haven't seen before.

### Pre-Quiz Discussion (5 minutes)

Before starting the quiz, discuss:

- What is a cognitive bias?
- Why might recognizing biases be important for ethical decision-making?
- Can you think of a time when a bias might have affected your own thinking?

### Quiz Activity (15-20 minutes)

1. Have students complete the quiz individually
2. Encourage them to use the "Show Hint" feature only after careful consideration
3. Ask them to read each explanation carefully after answering

### Post-Quiz Reflection (10 minutes)

Discussion questions:

1. Which bias was hardest to identify? Why?
2. Which bias do you think you might be most susceptible to in your own life?
3. How might these biases affect ethical analysis of industries or policies?
4. What strategies could help you avoid these biases when gathering data?

### Extension Activity

Have students find a real news article, company report, or policy document and identify any cognitive biases present in how information is presented.

## Technical Details

- **Framework**: p5.js 1.11.10
- **Data Format**: Questions stored in `data.json` for easy editing
- **Canvas Size**: 800×500 pixels (responsive width)
- **Accessibility**: Includes screen reader description

## Customizing Questions

The quiz questions are stored in `data.json` and can be easily modified. Each scenario includes:

```json
{
  "id": 1,
  "scenario": "Description of the scenario...",
  "correctBias": "Name of the correct bias",
  "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
  "explanation": "Why this answer is correct...",
  "hint": "A helpful hint for students..."
}
```

To add new scenarios, simply add new objects to the `scenarios` array in `data.json`.
