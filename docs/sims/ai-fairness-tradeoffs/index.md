---
title: AI Fairness Trade-offs Explorer
description: Interactive simulation exploring why different algorithmic fairness definitions cannot all be satisfied simultaneously
quality_score: 88
---

# AI Fairness Trade-offs Explorer

<iframe src="./main.html" width="100%" height="522px" scrolling="no"></iframe>

[View Fullscreen](./main.html){ .md-button }

## About This MicroSim

This interactive simulation allows students to explore the fundamental trade-offs between different algorithmic fairness definitions. By adjusting the decision threshold and base rates for two population groups, students can directly observe the **impossibility theorem**—the mathematical result showing that when base rates differ between groups, it's impossible to satisfy multiple fairness criteria simultaneously.

## How to Use

1. **Adjust the Decision Threshold**: Use the slider to change where the algorithm draws the line between positive and negative predictions. Watch how this affects all four fairness metrics.

2. **Toggle Different Base Rates**: When enabled, you can set different "true positive" rates for each group. This simulates real-world scenarios where different populations have different underlying rates.

3. **Observe the Metrics**: Watch the four fairness metrics update in real-time. Can you find a threshold that satisfies all of them?

## Fairness Definitions Explained

### Demographic Parity
**Definition**: The proportion of positive predictions should be equal across groups.

**Formula**: P(Ŷ=1|A=a) = P(Ŷ=1|A=b)

**Intuition**: If 30% of Group A gets approved, 30% of Group B should also get approved.

**Limitation**: Ignores whether predictions are actually correct.

### Equalized Odds (True Positive Rate)
**Definition**: Among people who truly deserve a positive outcome, equal proportions from each group should receive it.

**Formula**: P(Ŷ=1|Y=1,A=a) = P(Ŷ=1|Y=1,A=b)

**Intuition**: Qualified candidates from both groups should have equal chances of being correctly identified.

### Equalized Odds (False Positive Rate)
**Definition**: Among people who truly don't deserve a positive outcome, equal proportions from each group should (incorrectly) receive it.

**Formula**: P(Ŷ=1|Y=0,A=a) = P(Ŷ=1|Y=0,A=b)

**Intuition**: Unqualified candidates from both groups should have equal chances of being incorrectly approved.

### Predictive Parity
**Definition**: When the algorithm predicts "positive," it should be equally accurate for both groups.

**Formula**: P(Y=1|Ŷ=1,A=a) = P(Y=1|Ŷ=1,A=b)

**Intuition**: If the algorithm says "yes," it should mean the same thing regardless of group.

## The Impossibility Theorem

The key insight this simulation demonstrates: **When base rates differ between groups, these fairness definitions become mathematically incompatible.**

This isn't a limitation of any particular algorithm—it's a fundamental mathematical constraint. To see it in action:

1. Enable "Different Base Rates"
2. Set Group A to 70% and Group B to 30%
3. Try to find a threshold that satisfies all four metrics
4. Notice that satisfying one metric typically violates another

## Learning Objectives

After exploring this MicroSim, students will be able to:

1. **Define** four common algorithmic fairness metrics (Bloom: Remember)
2. **Explain** why these metrics cannot be simultaneously satisfied when base rates differ (Bloom: Understand)
3. **Assess** the trade-offs between different fairness definitions (Bloom: Evaluate)
4. **Judge** which fairness metric is most appropriate for different real-world scenarios (Bloom: Evaluate)

## Discussion Questions

1. **Healthcare AI**: A model predicts disease risk. Should it use demographic parity (equal referral rates) or equalized odds (equal accuracy for detecting actual disease)? What are the consequences of each choice?

2. **Criminal Justice**: A risk assessment tool predicts recidivism. Which fairness metric should it prioritize? Who is harmed by each choice?

3. **Lending**: A loan approval algorithm must choose between fairness definitions. How might different stakeholders (applicants, lenders, regulators) prefer different definitions?

4. **Beyond Metrics**: If no single metric captures "fairness," how should we decide which trade-offs to accept? Who should make these decisions?

## Lesson Plan

**Duration:** 45-60 minutes

### Introduction (10 min)
Introduce the concept of algorithmic decision-making and the desire for "fair" AI systems. Ask students to write their intuitive definition of fairness.

### Exploration (15 min)
Students explore the simulation individually:
- First with equal base rates (observe all metrics can be satisfied)
- Then with different base rates (experience the impossibility theorem)
- Document which metrics trade off against each other

### Case Study Analysis (15 min)
In small groups, analyze a real-world scenario (COMPAS recidivism, healthcare risk scores, or hiring algorithms) and debate which fairness metric should take priority.

### Synthesis (10 min)
Class discussion: What does this impossibility result mean for how we should govern AI systems? Can technical solutions alone achieve fairness?

## Real-World Applications

The trade-offs demonstrated here appear in many consequential AI systems:

- **COMPAS** (criminal risk assessment): Controversy over whether the system was racially biased hinged on which fairness definition was used
- **Healthcare algorithms**: Widely-used algorithms were found to systematically disadvantage Black patients because they optimized for cost rather than health need
- **Hiring AI**: Amazon's recruiting tool was scrapped after it showed bias against women

## References

- Chouldechova, A. (2017). "Fair prediction with disparate impact: A study of bias in recidivism prediction instruments." *Big Data*, 5(2), 153-163.
- Kleinberg, J., Mullainathan, S., & Raghavan, M. (2016). "Inherent Trade-Offs in the Fair Determination of Risk Scores." *arXiv:1609.05807*.
- Corbett-Davies, S., & Goel, S. (2018). "The Measure and Mismeasure of Fairness: A Critical Review of Fair Machine Learning." *arXiv:1808.00023*.
