# Impact Analysis

After collecting reliable data, how do we understand the total impact of specific behaviors and industries? This chapter introduces visual and analytical methods for mapping complex cause-and-effect relationships and quantifying systemic harm.

## Visual Analysis Methods

### Causal Loop Diagrams
Causal loop diagrams help visualize the circular cause-and-effect relationships within systems.

**Key Elements**:
- **Variables**: Factors that can increase or decrease
- **Causal links**: Arrows showing cause-and-effect relationships
- **Polarity**: "+" (same direction) or "-" (opposite direction)
- **Delays**: Time gaps between cause and effect
- **Feedback loops**: Reinforcing (R) or balancing (B) cycles

**Example: Fast Fashion Industry**
```
Consumer Demand (+) í Production Volume (+) í Environmental Impact (+) 
                ë                                                    ì
         Low Prices (-)  ê  Labor Exploitation (+)  ê  Cost Pressure (+)
```

### Graph-Based Correlation Networks
Network visualizations show how different factors connect and influence each other.

**Components**:
- **Nodes**: Individual factors or entities
- **Edges**: Relationships or correlations
- **Edge weights**: Strength of relationships
- **Centrality measures**: Most influential factors
- **Clusters**: Related groups of factors

**Applications**:
- Industry supply chain networks
- Health impact correlation maps
- Policy influence networks
- Stakeholder relationship mapping

### Multivariate Harm Models
Statistical models that account for multiple variables simultaneously.

**Types**:
- **Multiple regression**: Linear relationships between variables
- **Path analysis**: Direct and indirect effects through mediating variables
- **Structural equation modeling**: Complex relationships with latent variables
- **Machine learning models**: Non-linear pattern detection

## Case Study: Analyzing Tobacco Industry Impact

Let's apply these methods to understand the comprehensive impact of the tobacco industry.

### Causal Loop Analysis
**Primary Loops**:

1. **Addiction Reinforcement Loop** (R)
   - Nicotine addiction í Continued use í Revenue í Marketing í New users í Nicotine addiction

2. **Health Cost Externalization Loop** (R)
   - Tobacco use í Health problems í Healthcare costs í Government burden í Weak regulation í Continued tobacco use

3. **Economic Dependency Loop** (R)
   - Rural tobacco farming í Economic dependence í Political influence í Regulatory capture í Industry protection í Rural tobacco farming

### Network Analysis
**Key Nodes**:
- **Central actors**: Tobacco companies, regulators, healthcare systems
- **Bridge nodes**: Lobbying firms, research institutions, trade associations
- **Peripheral nodes**: Individual consumers, farmers, retail outlets

**Critical Connections**:
- Industry funding í Research institutions í Favorable studies
- Lobbying expenditure í Political influence í Regulatory delays
- Marketing spend í Youth exposure í Addiction initiation

### Multivariate Impact Model
**Outcome Variable**: Total social cost per year
**Independent Variables**:
- Number of smokers
- Average consumption per smoker
- Healthcare cost per smoking-related illness
- Productivity loss per smoker
- Environmental cleanup costs
- Regulatory enforcement spending

**Model Results** (Hypothetical):
- Healthcare costs: 65% of total impact
- Productivity losses: 20% of total impact
- Environmental damage: 10% of total impact
- Other social costs: 5% of total impact

## Interactive Visualizations

### Dynamic Impact Dashboard
Create interactive charts showing:
- **Time series**: How impacts change over time
- **Geographic maps**: Regional variations in impact
- **Scenario analysis**: "What if" different policy interventions
- **Comparative analysis**: Multiple industries side-by-side

### Harm vs. Cost Analysis
**Scatter plots** showing:
- X-axis: Cost of intervention
- Y-axis: Potential harm reduction
- Bubble size: Feasibility of implementation
- Color: Time to impact

This helps identify the most cost-effective interventions.

### Supply Chain Impact Maps
**Sankey diagrams** showing:
- Flow of materials through supply chain
- Associated environmental and social impacts at each stage
- Cumulative impact buildup
- Geographic distribution of impacts

## Advanced Analytical Techniques

### Life Cycle Impact Assessment (LCIA)
Quantitative analysis of environmental impacts throughout a product's life cycle:
- **Impact categories**: Climate change, ozone depletion, acidification, eutrophication
- **Characterization factors**: Convert inventory data to impact scores
- **Normalization**: Compare different impact categories
- **Weighting**: Combine impacts into single scores

### Social Network Analysis
Examine relationships between actors in harmful systems:
- **Centrality measures**: Who has the most influence?
- **Community detection**: What coalitions exist?
- **Information flow**: How do narratives spread?
- **Power dynamics**: Who controls key resources?

### Time Series Analysis
Understanding how impacts evolve over time:
- **Trend analysis**: Long-term directions
- **Seasonal patterns**: Cyclical variations
- **Intervention effects**: Before/after comparisons
- **Leading indicators**: Early warning signals

## Common Analytical Pitfalls

### Correlation vs. Causation
Just because two variables are correlated doesn't mean one causes the other:
- **Confounding variables**: Hidden factors affecting both
- **Reverse causation**: Effect actually causing the supposed cause
- **Spurious correlations**: Coincidental relationships

### Simpson's Paradox
When trends in subgroups reverse when combined:
- Always examine data at multiple levels of aggregation
- Consider demographic and geographic breakdowns
- Look for interaction effects between variables

### Survivorship Bias in Impact Analysis
- Don't ignore companies or practices that failed
- Include discontinued products or policies in analysis
- Consider "what didn't happen" scenarios

## Quantifying Uncertainty

### Sensitivity Analysis
Test how results change when assumptions vary:
- **One-at-a-time sensitivity**: Change one parameter at a time
- **Global sensitivity**: Vary all parameters simultaneously
- **Scenario analysis**: Test different plausible futures

### Monte Carlo Simulation
Use probability distributions for uncertain parameters:
- Generate thousands of possible outcomes
- Identify confidence intervals for results
- Understand risk distributions

### Expert Elicitation
When data is limited, systematically gather expert opinions:
- **Delphi method**: Anonymous, iterative expert surveys
- **Structured expert judgment**: Formal protocols for combining opinions
- **Calibration training**: Improve expert accuracy

## Case Study Exercises

### Fast Fashion Analysis
Students analyze the fast fashion industry using:
1. **Causal loop diagrams**: Map feedback between consumer behavior, production, and environmental impact
2. **Network analysis**: Identify key players in global supply chains
3. **Impact quantification**: Calculate total environmental and social costs

### Cryptocurrency Mining Impact
Comprehensive analysis including:
1. **Energy consumption modeling**: Geographic and temporal patterns
2. **Environmental impact assessment**: Carbon footprint, electronic waste
3. **Economic effects**: Energy market disruption, inequality
4. **Social implications**: Speculation, financial inclusion

## Visualization Tools and Software

### Free/Open Source Tools
- **R packages**: ggplot2, networkD3, plotly
- **Python libraries**: matplotlib, seaborn, networkx, plotly
- **Web-based**: D3.js, Observable notebooks
- **Specialized software**: Gephi (networks), Vensim (system dynamics)

### Commercial Tools
- **Tableau**: Business intelligence and visualization
- **PowerBI**: Microsoft's visualization platform
- **Kumu**: Network visualization and analysis
- **SimaPro**: Life cycle assessment software

## Best Practices for Impact Visualization

### Design Principles
- **Clarity**: Clear labels, legends, and explanations
- **Accuracy**: Proportional representations, appropriate scales
- **Accessibility**: Color-blind friendly, screen reader compatible
- **Honesty**: Avoid misleading scales or cherry-picked timeframes

### Storytelling with Data
- Start with the key message
- Use progressive disclosure for complex information
- Provide context and comparison points
- Include uncertainty and limitations

## Learning Outcomes

By the end of this chapter, you should be able to:
- Create causal loop diagrams to map system feedback
- Build network visualizations of complex relationships
- Apply multivariate statistical models to quantify impacts
- Design interactive visualizations that communicate insights effectively
- Recognize and avoid common analytical pitfalls
- Quantify uncertainty in impact assessments

## Reflection Questions

1. How might different stakeholder perspectives lead to different impact assessments of the same industry?
2. What are the ethical implications of uncertainty in impact analysis?
3. When is it appropriate to simplify complex systems for public communication?
4. How can we balance comprehensive analysis with actionable insights?

## Next Steps

In the next chapter, we'll explore systems thinking approaches that help us understand how individual industries connect to broader societal patterns and identify the root causes of systemic harm.