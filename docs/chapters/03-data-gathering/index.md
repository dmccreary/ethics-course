---
title: Gathering Data
description: Finding reliable data in an imperfect world full of gaps, biases, and missing pieces
generated_by: claude skill chapter-content-generator
date: 2025-11-30
version: 0.03
---

# Gathering Data

*In a perfect world, every country would have a magnificent data.gov website—always accurate, perpetually up-to-date, and gloriously complete. You'd type "tobacco deaths by county" and receive a pristine spreadsheet within seconds, verified by three independent agencies and updated hourly.*

*This is not that world.*

Welcome to the reality of data gathering, where the information you need most is often the hardest to find, the data that does exist comes with caveats and asterisks, and the gaps in our knowledge are frequently shaped by the same powerful interests whose harm we're trying to measure.

But here's the good news: **being clever about data is a superpower**. The best ethical analysts aren't those with access to perfect datasets (nobody has those). They're the ones who know how to find hidden sources, triangulate across imperfect data, detect when they're being misled, and fill gaps with reasonable estimates while being honest about uncertainty.

This chapter is your guide to becoming one of those clever analysts. We'll explore how to gather reliable data ethically, recognize the biases that corrupt data at every stage, and develop the detective skills needed to piece together truth from fragments.

## The Data Landscape: Dreams vs. Reality

Before diving into methods, let's acknowledge the terrain we're navigating.

### What We Wish Existed

The ideal data infrastructure for ethical analysis would include:

- **Comprehensive government databases**: Every nation tracking every industry's impacts with standardized metrics
- **Real-time monitoring**: Continuous streams of environmental, health, and economic data
- **Universal reporting standards**: All companies disclosing comparable information
- **Historical depth**: Decades of consistent data enabling trend analysis
- **Granular detail**: Data at individual, community, and regional levels
- **Complete transparency**: No proprietary restrictions on public interest data

### What Actually Exists

The reality is considerably messier:

- **Patchy coverage**: Some countries have excellent data agencies; others have virtually none
- **Inconsistent standards**: Different definitions, time periods, and methodologies across sources
- **Self-reported industry data**: The fox guarding the statistical henhouse
- **Publication delays**: Health impacts may take years to appear in official statistics
- **Intentional gaps**: Data that powerful interests prefer not to collect
- **Access barriers**: Paywalls, bureaucracy, and proprietary claims on public interest data

| Dream | Reality |
|-------|---------|
| One authoritative source | Dozens of partial sources requiring synthesis |
| Standardized metrics | Different definitions requiring careful translation |
| Real-time updates | Data that's months or years old |
| Complete coverage | Systematic gaps in exactly the areas you need |
| Free and open access | Paywalls, FOIA requests, and license restrictions |

!!! tip "Embrace the Mess"
    Don't let imperfect data paralyze you. The choice isn't between perfect data and no analysis—it's between thoughtful analysis of imperfect data and letting harmful industries operate unchallenged. Document your limitations, acknowledge uncertainty, and proceed with appropriate humility.

## Ethical Data Collection: First Principles

Before we discuss *how* to gather data, we need to establish *how to do it ethically*. **Ethical data collection** isn't just about following rules—it's about ensuring our pursuit of truth doesn't create new harms.

### Informed Consent

**Informed consent** means that people understand what data is being collected about them and agree to its use. This principle applies whenever you're gathering data directly from human subjects.

Key elements include:

- **Clarity**: Explain in plain language what data you're collecting
- **Purpose**: Describe how the data will be used
- **Risks and benefits**: Be honest about potential downsides and upsides
- **Voluntariness**: Participation must be freely chosen, not coerced
- **Right to withdraw**: People can change their minds and have their data removed

!!! example "Consent in Practice"
    If you're surveying factory workers about health symptoms, informed consent means:

    - Explaining that responses will be used to assess industry health impacts
    - Assuring confidentiality so employers can't retaliate
    - Making participation genuinely voluntary (not tied to job security)
    - Providing contact information for questions or withdrawal

### Data Privacy

**Data privacy** protects individuals from harm that could result from exposure of their personal information. Even well-intentioned research can cause harm if it reveals sensitive details about identifiable people.

Privacy protection strategies include:

- **Minimization**: Collect only the data you actually need
- **Security**: Protect stored data from unauthorized access
- **Purpose limitation**: Use data only for stated purposes
- **Retention limits**: Delete data when no longer needed

### Anonymization and Aggregation

**Anonymization** removes identifying information so individuals can't be recognized. **Data aggregation** combines individual records into group-level statistics.

Both techniques protect privacy while preserving analytical value:

| Technique | How It Works | Limitations |
|-----------|--------------|-------------|
| Anonymization | Remove names, addresses, identifiers | Re-identification possible with enough variables |
| Pseudonymization | Replace identifiers with codes | Keys can be compromised |
| Aggregation | Report group statistics only | Loses individual-level patterns |
| K-anonymity | Ensure each record matches at least k others | May still allow inference attacks |
| Differential privacy | Add statistical noise to protect individuals | Reduces precision |

!!! warning "Re-identification Risk"
    Seemingly anonymous data can often be re-identified. A famous study showed that 87% of Americans can be uniquely identified from just zip code, birth date, and gender. Be cautious about what you consider "anonymized."

## Sampling: The Art of Choosing Who to Ask

When you can't measure everyone (which is almost always), you need a sample. **Sampling methods** determine whose data you collect—and poor sampling is one of the most common sources of bias.

### Random Sampling

**Random sampling** gives every member of the population an equal chance of being selected. It's the gold standard because it produces samples that, on average, represent the population accurately.

The magic of random sampling: with a properly random sample of just 1,000 people, you can estimate the views of 300 million with remarkable accuracy. The key word is "properly"—true randomness is harder to achieve than it sounds.

### Stratified Sampling

**Stratified sampling** divides the population into subgroups (strata) and samples from each. This ensures important subgroups are represented even if they're small.

For example, if you're studying pollution impacts across income levels:

- Divide population into income quintiles
- Sample proportionally from each quintile
- Ensures low-income communities (often most affected) are adequately represented

#### Diagram: Sampling Methods Comparison

<details markdown="1">
    <summary>Sampling Methods Comparison</summary>
    Type: infographic

    Purpose: Compare different sampling methods and their appropriate use cases for ethical research

    Bloom Taxonomy: Understand (L2)

    Learning Objective: Students will understand when to use different sampling methods and the trade-offs of each approach

    Layout: Side-by-side comparison with visual representations

    Sampling methods to show:

    1. SIMPLE RANDOM SAMPLING
       Visual: Population circle with randomly scattered highlighted dots
       Pros: Unbiased if truly random; simple to understand
       Cons: Hard to achieve true randomness; may miss small subgroups
       Best for: Large, homogeneous populations

    2. STRATIFIED SAMPLING
       Visual: Population divided into colored layers, samples from each
       Pros: Ensures subgroup representation; more precise estimates
       Cons: Requires knowing population structure; more complex
       Best for: Populations with important subgroups

    3. CLUSTER SAMPLING
       Visual: Population divided into clusters, some clusters fully sampled
       Pros: Practical when population is geographically dispersed
       Cons: Less precise; cluster effects can introduce bias
       Best for: Geographic studies, school-based research

    4. CONVENIENCE SAMPLING
       Visual: Cluster of dots near researcher, rest of population faded
       Pros: Easy and cheap
       Cons: HIGH BIAS RISK - not representative
       Best for: Pilot testing only; never for final analysis

    Color coding:
    - Green: Recommended methods
    - Yellow: Use with caution
    - Red: Avoid for serious research

    Interactive features:
    - Click each method to see real-world examples
    - Hover for quick pros/cons summary
    - Toggle to show "bias risk level" for each

    Implementation: HTML/CSS/JavaScript with SVG graphics
</details>

## The Bias Zoo: Recognizing What Can Go Wrong

Data collection is a minefield of potential biases. Let's catalog the main threats so you can recognize them.

### Selection Bias

**Selection bias** occurs when your sample systematically differs from the population you're trying to study. Common forms include:

- **Self-selection**: Only motivated people respond to voluntary surveys
- **Survivorship bias**: Studying only successes while failures are invisible
- **Healthy worker effect**: Employed populations appear healthier because sick people leave work
- **Attrition bias**: People who drop out of long-term studies differ from those who stay

!!! example "Survivorship Bias in Action"
    During World War II, analysts studied bullet holes in returning bombers to decide where to add armor. They nearly made a fatal error: they were only seeing planes that survived. The bullet holes showed where planes could be hit and still return. The places with no holes were where hits were fatal—those planes never came back.

    Lesson: Always ask "What am I NOT seeing?"

### Reporting Bias

**Reporting bias** occurs when what gets reported differs systematically from what actually happens.

**Industry self-reporting** is a major source of this bias. When companies report their own environmental or safety data:

- Incentives favor underreporting problems
- Definitions may be interpreted favorably
- Unfavorable data may be "lost" or delayed
- Auditing is often weak or industry-funded

### Publication Bias

**Publication bias** distorts the scientific literature because studies with exciting, positive, or significant results are more likely to be published than those with null or negative findings.

This creates a systematically skewed evidence base:

- Drug trials showing benefits get published; those showing no effect don't
- Industry-funded studies with favorable results reach journals; unfavorable ones are buried
- Novel findings attract attention; replication studies struggle to get published

The result: published literature overestimates effect sizes and underrepresents null findings.

#### Diagram: Publication Bias Visualization

<details markdown="1">
    <summary>Publication Bias Funnel Plot</summary>
    Type: chart

    Purpose: Visualize how publication bias distorts the evidence base by showing asymmetric distribution of published studies

    Bloom Taxonomy: Analyze (L4)

    Learning Objective: Students will analyze funnel plots to detect publication bias in research literature

    Chart type: Scatter plot (funnel plot format)

    X-axis: Effect size (centered on true effect)
    Y-axis: Study precision (larger studies at top)

    Two versions to show:

    1. UNBIASED LITERATURE
       - Symmetric funnel shape
       - Small studies scattered widely
       - Large studies clustered near true effect
       - Both positive and negative results present

    2. BIASED LITERATURE (typical reality)
       - Asymmetric funnel
       - Bottom-left corner missing (small negative studies unpublished)
       - Excess of small positive studies
       - Apparent effect size shifted positive

    Annotations:
    - "Missing studies" shaded region showing where unpublished null results would appear
    - "Published studies overestimate effect" callout
    - Arrow showing "Direction of bias"

    Interactive features:
    - Slider to add/remove small negative studies showing impact on meta-analysis
    - Toggle between symmetric (unbiased) and asymmetric (biased) views
    - Hover to see individual study details

    Color scheme:
    - Blue: Published studies
    - Gray dashed: Expected position of unpublished studies
    - Red shading: "Missing" region indicating bias

    Implementation: Chart.js or D3.js scatter plot with custom funnel overlay
</details>

## Finding Data: Where to Look

Now let's get practical. Where do you actually find data for ethical analysis?

### Government Data Sources

Despite their limitations, government sources remain foundational:

- **Public health agencies**: CDC, WHO, national health ministries
- **Environmental agencies**: EPA, EEA, national environmental ministries
- **Statistical offices**: Census bureaus, labor statistics agencies
- **Regulatory filings**: Required corporate disclosures, inspection reports

!!! tip "The data.gov Dream (Partial Reality)"
    Many countries do have open data portals: data.gov (US), data.gov.uk (UK), data.europa.eu (EU). They're not perfect—far from it—but they're improving. Start here before assuming data doesn't exist. You might be surprised what's available, buried three clicks deep.

### Academic and Research Sources

Peer-reviewed research provides analyzed data and methodological rigor:

- **Academic databases**: PubMed, Web of Science, Google Scholar
- **Institutional repositories**: University data archives
- **Research consortiums**: Global Burden of Disease, Our World in Data
- **Systematic reviews**: Cochrane Collaboration, Campbell Collaboration

**Peer review** provides quality control—experts evaluate methodology before publication. But remember: peer review catches some errors, not all. It doesn't guarantee truth.

### NGO and Advocacy Sources

Non-governmental organizations often collect data that governments won't:

- **Watchdog groups**: Track industry behavior and impacts
- **Environmental organizations**: Monitor pollution, biodiversity, climate
- **Human rights groups**: Document labor conditions, displacement
- **Investigative journalists**: Uncover hidden data through FOIA and leaks

Evaluate carefully: NGOs have missions that may shape their data collection and presentation. This doesn't make their data wrong, but it requires awareness.

### Industry Sources

Yes, industry data can be useful—with appropriate skepticism:

- **Required disclosures**: SEC filings, environmental permits
- **Voluntary reports**: Sustainability reports, ESG disclosures
- **Trade associations**: Industry-wide statistics
- **Leaked documents**: Internal memos revealed through litigation or whistleblowers

#### Diagram: Data Source Ecosystem Map

<details markdown="1">
    <summary>Data Source Ecosystem for Ethical Analysis</summary>
    Type: diagram

    Purpose: Map the ecosystem of data sources available for ethical analysis, showing relationships and credibility levels

    Bloom Taxonomy: Understand (L2)

    Learning Objective: Students will understand the landscape of data sources and navigate to appropriate sources for different research needs

    Layout: Circular ecosystem diagram with concentric rings

    Center: "YOUR ANALYSIS"

    Inner ring (Primary sources - highest reliability):
    - Government statistical agencies
    - Peer-reviewed research
    - Court documents and legal proceedings
    - Regulatory filings

    Middle ring (Secondary sources - moderate reliability):
    - NGO reports and investigations
    - Investigative journalism
    - Academic meta-analyses
    - International organization reports (WHO, UN)

    Outer ring (Use with caution):
    - Industry self-reporting
    - Trade association data
    - Think tanks (check funding)
    - Social media and crowdsourced data

    Connecting lines showing:
    - Data flows between sources
    - Verification relationships
    - Potential conflict of interest paths

    Color coding:
    - Green ring: Generally trustworthy
    - Yellow ring: Verify carefully
    - Orange ring: High skepticism needed

    Icons for each source type

    Annotations:
    - "Always triangulate across rings"
    - "Follow the funding"
    - "Peer review is necessary but not sufficient"

    Interactive features:
    - Click source type to see examples and access points
    - Hover to see reliability considerations
    - Filter by topic area (health, environment, labor, etc.)

    Implementation: D3.js or vis-network with custom styling
</details>

## Data Quality: Separating Signal from Noise

Finding data is only half the battle. **Data quality assessment** determines whether what you've found is actually usable.

### The Dimensions of Data Quality

Quality data is:

- **Accurate**: Correctly measures what it claims to measure
- **Complete**: Doesn't have systematic gaps
- **Consistent**: Uses stable definitions and methods over time
- **Timely**: Recent enough to be relevant
- **Relevant**: Actually addresses your research question
- **Accessible**: Available in usable format

### Missing Data

**Missing data** is ubiquitous and dangerous. Data can be missing for many reasons:

- **Random missingness**: Genuinely random gaps (least problematic)
- **Systematic missingness**: Gaps correlated with what you're measuring (very problematic)
- **Intentional suppression**: Data deliberately not collected or hidden (most problematic)

How you handle missing data matters enormously. Options include:

| Approach | When to Use | Risk |
|----------|-------------|------|
| Complete case analysis | Missingness is truly random | Reduced sample size, potential bias |
| Mean imputation | Small amounts of random missing | Underestimates variance |
| Multiple imputation | Moderate missingness with predictors | Complex, assumptions required |
| Sensitivity analysis | When mechanism is uncertain | Shows range of possible results |

!!! warning "The Most Dangerous Missing Data"
    The scariest missing data is data that was never collected because it would be inconvenient. If no one measures pesticide exposure in agricultural workers, we can't quantify the harm—which is exactly what pesticide manufacturers might prefer.

    Always ask: "What data *should* exist but doesn't? Why not?"

### Data Cleaning and Outlier Detection

**Data cleaning** transforms raw data into analysis-ready datasets. This includes:

- Standardizing formats and units
- Correcting obvious errors
- Handling duplicates
- Resolving inconsistencies

**Outlier detection** identifies values that are unusually extreme. Outliers might be:

- **Errors**: Typos, measurement malfunctions, data entry mistakes
- **Genuine extremes**: Real but unusual values that should be kept
- **Signals**: Important findings that deserve attention

The challenge: distinguishing errors from genuine extremes. Document your decisions and consider sensitivity analyses with and without outliers.

#### Diagram: Data Quality Assessment MicroSim

<details markdown="1">
    <summary>Data Quality Detective Game</summary>
    Type: microsim

    Purpose: Train students to identify data quality issues through interactive analysis of sample datasets

    Bloom Taxonomy: Apply (L3)

    Learning Objective: Students will apply data quality assessment techniques to identify problems in realistic datasets

    Canvas layout (850x550px):
    - Left panel (550x550): Data table display with highlighting
    - Right panel (300x550): Issue identification panel and scoring

    Visual elements:
    - Scrollable data table with rows and columns
    - Cells that can be clicked to flag issues
    - Issue type selector (dropdown or buttons)
    - Score counter and progress bar
    - "Hint" and "Reveal" buttons

    Sample datasets (4 scenarios):

    1. INDUSTRY EMISSIONS DATA
       Issues embedded:
       - Missing values for worst polluters
       - Suspiciously round numbers (1000, 2000, 5000)
       - Definition change mid-series (scope changes)
       - One company's emissions jump 90% then return to normal (error vs. real?)

    2. HEALTH SURVEY RESULTS
       Issues embedded:
       - Response rate varies by income (selection bias)
       - Leading question wording visible
       - Outlier: 150-year-old respondent
       - Missing demographics for sensitive questions

    3. ENVIRONMENTAL MONITORING
       Issues embedded:
       - Gaps during equipment "maintenance" (always during high pollution periods)
       - Unit changes without documentation
       - Implausible negative values
       - Readings exactly at regulatory threshold (suspicious)

    4. WORKPLACE SAFETY RECORDS
       Issues embedded:
       - Reports drop right before inspections
       - Categories changed to reclassify serious injuries as minor
       - Missing data from night shifts
       - Seasonal patterns that don't make sense

    Interactive controls:
    - Dataset selector dropdown
    - Click cell to flag
    - Issue type selector: [Missing Data] [Outlier] [Suspicious Pattern] [Definition Change] [Bias Indicator]
    - "Check Answers" button
    - "Next Dataset" button

    Scoring:
    - +10 for correct identification
    - +5 for partially correct (right cell, wrong issue type)
    - -5 for flagging clean data
    - Explanation appears after each check

    Feedback:
    - Green highlight for correctly identified issues
    - Red highlight for missed issues
    - Yellow for false positives
    - Detailed explanation for each issue

    Implementation: p5.js with tabular data display
</details>

## Verification and Validation: Trust but Verify

Finding data is step one. Verifying it is step two.

### Independent Verification

**Independent verification** means checking data against sources that have no connection to the original. If industry self-reports match independent monitoring, confidence increases. If they diverge, investigate why.

Verification strategies:

- **Cross-source comparison**: Do different sources agree?
- **Physical verification**: Can you observe what the data claims?
- **Expert consultation**: Do specialists find the data plausible?
- **Historical consistency**: Does it fit with established trends?

### Cross-Validation

**Cross-validation** tests whether findings hold up under different analytical approaches:

- Split data and check if patterns appear in both halves
- Use different statistical methods on the same data
- Have multiple analysts independently analyze the data
- Test whether conclusions change with different assumptions

### Transparency and Reproducibility

**Transparency** means showing your work: data sources, methods, decisions, and limitations. **Reproducibility** means others can repeat your analysis and get the same results.

Best practices include:

- **Document everything**: Data sources, cleaning steps, analytical decisions
- **Share data when possible**: Enable independent verification
- **Publish code**: Let others run your analyses
- **Pre-register hypotheses**: Prevent p-hacking and HARKing (Hypothesizing After Results are Known)

**Open data** initiatives make verification easier by making datasets publicly accessible. Support them—and contribute when you can.

### Data Documentation

**Data documentation** (often called metadata) describes what a dataset contains and how it was created:

- **Variable definitions**: What does each column mean?
- **Collection methods**: How was data gathered?
- **Time and geography**: What period and places does it cover?
- **Known limitations**: What are the gaps and caveats?
- **Version history**: Has the data been updated or corrected?

Without documentation, data is dangerous. You might misinterpret what variables mean, miss important limitations, or compare incomparable datasets.

## Synthesis: Combining Imperfect Sources

Since no single source is perfect, skilled analysts synthesize across multiple sources.

### Meta-Analysis

**Meta-analysis** statistically combines results from multiple studies to produce more robust estimates. Benefits include:

- Increased statistical power
- Ability to detect patterns across studies
- Quantification of variation between studies
- Assessment of publication bias

### Systematic Review

**Systematic review** comprehensively searches for all relevant studies on a question, not just the convenient or famous ones. It follows rigorous protocols to minimize selection bias.

Key features:

- **Pre-specified search strategy**: Documented before searching
- **Inclusion/exclusion criteria**: Clear rules for what counts
- **Quality assessment**: Rating each study's methodology
- **Transparent reporting**: Publishing full list of included and excluded studies

Together, meta-analysis and systematic review are the strongest tools for synthesizing imperfect evidence.

#### Diagram: Evidence Synthesis Pyramid

<details markdown="1">
    <summary>Evidence Synthesis Hierarchy</summary>
    Type: diagram

    Purpose: Show the hierarchy of evidence quality from individual studies to synthesized reviews

    Bloom Taxonomy: Evaluate (L5)

    Learning Objective: Students will evaluate the relative strength of different types of evidence and understand why synthesis improves reliability

    Layout: Pyramid with levels, quality increasing toward top

    Levels (bottom to top):

    1. BOTTOM: Expert Opinion, Case Reports
       - Lowest evidence quality
       - Subject to individual bias
       - Limited generalizability

    2. CASE-CONTROL STUDIES
       - Observational
       - Retrospective
       - Selection bias risk

    3. COHORT STUDIES
       - Observational but prospective
       - Better for causation
       - Confounding possible

    4. RANDOMIZED CONTROLLED TRIALS
       - Experimental design
       - Gold standard for single studies
       - But still just one study

    5. SYSTEMATIC REVIEWS
       - Comprehensive search
       - Quality assessment
       - Minimizes selection bias

    6. TOP: META-ANALYSES OF RCTs
       - Quantitative synthesis
       - Maximum statistical power
       - Best single number estimate

    Side annotations:
    - "Increasing reliability" arrow pointing up
    - "Increasing complexity" arrow pointing up
    - "Industry influence harder to hide" note near top
    - "More vulnerable to bias" note near bottom

    Color coding:
    - Red at bottom (caution)
    - Gradient to green at top (stronger evidence)

    Interactive features:
    - Click level to see examples
    - Hover for strengths and limitations
    - Toggle to show "industry influence risk" at each level

    Implementation: HTML/CSS with SVG pyramid, JavaScript for interactivity
</details>

## Filling Gaps: Creative Data Strategies

Sometimes the data you need simply doesn't exist in clean, official form. That's when creativity becomes essential.

### Proxy Indicators

When direct measurement isn't available, **proxy indicators** provide indirect evidence:

- **Satellite imagery**: Night lights as economic activity proxy, vegetation as environmental health
- **Consumer data**: Credit card spending patterns as economic indicators
- **Social media**: Sentiment as public opinion proxy
- **Search trends**: Google searches as early warning for disease outbreaks

### Crowdsourced Data

Citizens can collect data that official sources miss:

- **Air quality sensors**: Networks of personal monitors
- **Pollution reporting**: Photo documentation of violations
- **Health surveys**: Community-based symptom tracking
- **Worker reports**: Anonymous safety concern reporting

!!! example "Clever Gap-Filling: Safecast"
    After the Fukushima nuclear disaster, official radiation data was sparse and distrusted. Citizens created Safecast, a crowdsourced radiation monitoring network. Volunteers with Geiger counters mapped radiation levels across Japan, creating the most detailed dataset available.

    Lesson: When official data fails, organized citizens can fill the gap.

### Data Fusion

Combining multiple imperfect datasets can produce better estimates than any single source:

- **Triangulation**: Do health data, environmental data, and economic data tell consistent stories?
- **Bayesian integration**: Formally combine prior knowledge with new observations
- **Ensemble methods**: Average across multiple estimates to reduce individual biases

### Expert Elicitation

When data is sparse, structured expert judgment can provide estimates:

- **Delphi method**: Anonymous iterative surveying of experts
- **Probability encoding**: Experts provide uncertainty ranges, not just point estimates
- **Calibration**: Weight experts by their track record on verifiable questions

## Case Study: Reconstructing Tobacco Harm Data

Let's see these principles in action through a historical example.

### The Challenge

In the 1950s, scientists suspected tobacco caused cancer, but industry controlled most data and funded research designed to create doubt. How did researchers piece together truth from fragments?

### Data Sources Used

**Independent epidemiological studies**:
- Doll and Hill's British Doctors Study tracked 40,000 physicians over decades
- Hammond and Horn's American Cancer Society study followed nearly 200,000 men
- Neither study used industry funding

**Triangulation across methods**:
- Case-control studies (comparing cancer patients to controls)
- Cohort studies (following smokers and non-smokers over time)
- Biological mechanism research (how does smoke cause cell damage?)

**Eventually: Industry documents**:
- Litigation forced disclosure of internal company research
- Companies had known tobacco was harmful for decades
- Internal documents revealed deliberate doubt-manufacturing campaigns

### Lessons Learned

- **Independent funding matters**: Industry-funded research consistently found weaker effects
- **Multiple methods strengthen conclusions**: Different study designs converging on same answer
- **Time reveals truth**: Long-term studies eventually overcame short-term doubt campaigns
- **Document everything**: Preserved internal documents later proved intentional deception
- **Systematic review cuts through noise**: Meta-analyses of all studies showed clear harm

#### Diagram: Tobacco Data Investigation Timeline

<details markdown="1">
    <summary>Tobacco Research: From Doubt to Certainty</summary>
    Type: timeline

    Purpose: Show how independent researchers pieced together tobacco harm evidence despite industry obstruction

    Bloom Taxonomy: Analyze (L4)

    Learning Objective: Students will analyze how researchers overcame data manipulation to establish causal links between tobacco and disease

    Time period: 1950-2000

    Orientation: Horizontal with events above and below line

    Events (above line - Scientific progress):
    - 1950: Doll & Hill publish first major case-control study linking smoking to lung cancer
    - 1954: British Doctors Study begins (40,000 physicians followed)
    - 1964: US Surgeon General report declares smoking causes cancer
    - 1988: Surgeon General declares nicotine addictive
    - 1994: Tobacco executives testify under oath that nicotine is not addictive
    - 1998: Master Settlement Agreement; industry documents become public
    - 2000: Meta-analyses confirm secondhand smoke harms

    Events (below line - Industry obstruction):
    - 1953: Tobacco industry creates "Tobacco Industry Research Committee" to fund doubt
    - 1954: "Frank Statement" ad campaign: "We accept responsibility" while doing nothing
    - 1960s: Internal documents show companies knew tobacco caused cancer
    - 1970s: Industry funds research questioning methodology of independent studies
    - 1980s: Industry creates front groups to dispute secondhand smoke evidence
    - 1994: Internal documents leaked revealing decades of deception

    Color coding:
    - Blue: Scientific milestones
    - Red: Industry obstruction
    - Green: Regulatory/legal victories

    Annotations:
    - "40-year gap between first evidence and industry admission"
    - Arrow connecting internal documents to public exposure
    - "Data existed, but was suppressed" note

    Interactive features:
    - Click events to see detailed description
    - Hover to see key documents or quotes
    - Toggle to show "death toll during delay" (millions of preventable deaths)

    Visual style: Clean timeline with color-coded events above and below

    Implementation: vis-timeline JavaScript library
</details>

## Building Your Data Strategy

Let's synthesize these lessons into a practical framework.

### Step 1: Define Your Question Precisely

Vague questions lead to scattered data collection. Specify:

- What exactly are you trying to measure?
- Over what time period and geography?
- At what level of detail?
- What would convince a skeptic?

### Step 2: Map the Data Landscape

Before collecting, survey what exists:

- What government sources cover your topic?
- What academic research has been done?
- What do NGOs and journalists know?
- What does industry disclose (voluntarily or by requirement)?

### Step 3: Assess Quality and Bias

For each potential source:

- Who created it and why?
- What methodology was used?
- What are the known limitations?
- What biases might be present?

### Step 4: Triangulate and Synthesize

- Compare across independent sources
- Note where sources agree and disagree
- Investigate discrepancies
- Weight sources by quality

### Step 5: Document Everything

- Record all sources with access dates
- Note data cleaning and processing steps
- Document assumptions and decisions
- Acknowledge limitations explicitly

### Step 6: Enable Verification

- Share data when possible
- Publish code and methodology
- Welcome challenges and corrections
- Update analyses as new data emerges

#### Diagram: Data Gathering Workflow

<details markdown="1">
    <summary>Data Gathering Workflow</summary>
    Type: workflow

    Purpose: Provide a step-by-step process for systematic, ethical data gathering

    Bloom Taxonomy: Apply (L3)

    Learning Objective: Students will apply a systematic workflow to gather data for ethical analysis projects

    Visual style: Flowchart with decision points and process boxes

    Main flow:

    1. START: "Define Research Question"
       Hover: "Be specific about what you're measuring and why"

    2. PROCESS: "Map Data Landscape"
       Hover: "Survey government, academic, NGO, and industry sources"

    3. DECISION: "Adequate data exists?"
       - YES → Continue to quality assessment
       - NO → "Identify proxy indicators and alternative methods"

    4. PROCESS: "Assess Source Quality"
       Hover: "Evaluate methodology, bias, completeness for each source"

    5. PROCESS: "Collect and Clean Data"
       Hover: "Download, standardize, handle missing values, detect outliers"

    6. DECISION: "Sources agree?"
       - YES → Continue to synthesis
       - NO → "Investigate discrepancies; weight by quality"

    7. PROCESS: "Triangulate and Synthesize"
       Hover: "Combine sources; conduct sensitivity analyses"

    8. PROCESS: "Document and Share"
       Hover: "Record all decisions; enable verification"

    9. END: "Analysis-Ready Dataset"

    Feedback loops:
    - From quality assessment back to mapping (find better sources)
    - From synthesis back to collection (gather additional data)
    - From documentation back to whole process (iterate and improve)

    Side annotations:
    - "Ethical checkpoints" at each stage
    - "Common pitfall" warnings at decision points
    - "Time estimate" indicators

    Color coding:
    - Blue: Research phase
    - Green: Collection phase
    - Gold: Verification phase

    Implementation: HTML/CSS/JavaScript with SVG elements
</details>

## Tools and Resources

A brief tour of practical tools for data gathering:

### Data Access Platforms

- **data.gov** and international equivalents: Government open data
- **Google Dataset Search**: Finds datasets across the web
- **Kaggle Datasets**: Curated datasets (check provenance carefully)
- **ICPSR**: Social science data archive
- **WHO Global Health Observatory**: International health statistics

### Search and Discovery

- **Google Scholar**: Academic literature
- **PubMed**: Biomedical research
- **FOIA request tools**: MuckRock, FOIA Machine
- **Patent databases**: Reveal industry knowledge

### Quality and Bias Assessment

- **Cochrane Risk of Bias Tool**: For evaluating clinical trials
- **GRADE system**: Rating evidence quality
- **CRAAP test**: Currency, Relevance, Authority, Accuracy, Purpose

### Synthesis Tools

- **RevMan**: Systematic review and meta-analysis
- **PRISMA**: Reporting guidelines for systematic reviews
- **Meta-analysis packages**: metafor (R), meta (Stata)

## Key Takeaways

Let's consolidate the wisdom of this chapter:

1. **Perfect data doesn't exist**: Work skillfully with imperfect information while acknowledging limitations.

2. **Bias lurks everywhere**: Selection bias, reporting bias, publication bias—they're always present. Detect and mitigate, don't ignore.

3. **Ethics first**: Informed consent, privacy protection, and transparency aren't obstacles to research—they're foundations for trustworthy research.

4. **Triangulate relentlessly**: No single source is reliable enough. Compare, cross-validate, and synthesize.

5. **Follow the incentives**: Who created this data? What did they want to show? Whose interests does it serve?

6. **Document obsessively**: Your future self and other researchers need to know what you did and why.

7. **Fill gaps creatively**: Proxy indicators, crowdsourcing, expert elicitation—clever analysts find ways when official data fails.

8. **Be humble and transparent**: State your limitations. Share your data. Welcome correction.

## Chapter Summary

Gathering data for ethical analysis is detective work in an imperfect world. The ideal data infrastructure—comprehensive, timely, unbiased, open—remains largely aspirational. Real-world data comes with gaps, biases, and strategic manipulations by those who benefit from obscuring truth.

But this isn't cause for despair. Armed with understanding of bias types, quality assessment techniques, and verification strategies, you can navigate the data landscape effectively. **Ethical data collection** protects subjects while enabling research. **Triangulation** cuts through individual source biases. **Transparency** and **reproducibility** build trust and enable improvement.

The tobacco case shows that truth can emerge even when powerful interests work to suppress it—but it takes independent researchers, multiple methodologies, long-term persistence, and eventually, access to hidden documents. Every industry creating harm today is generating similar data trails. Your job is to find them.

In the next chapter, we'll explore how to analyze the data we've gathered—mapping complex cause-and-effect relationships and understanding systemic patterns of harm. The detective work continues.

## Reflection Questions

??? question "1. Why might governments choose NOT to collect certain types of data?"
    Consider both innocent reasons (cost, complexity, privacy concerns) and concerning reasons (political pressure, regulatory capture, protecting industries). How would you advocate for better data collection?

??? question "2. How do you balance the value of crowdsourced data with its potential quality problems?"
    Crowdsourced data can fill critical gaps but may lack standardization and verification. What validation strategies would you apply before using citizen-collected data?

??? question "3. When industry self-reported data is the only source available, how do you proceed?"
    Sometimes there's no independent alternative. How do you use industry data while maintaining appropriate skepticism? What caveats would you include?

??? question "4. What responsibility do researchers have to make their data open, and what are legitimate exceptions?"
    Consider competing values: transparency enables verification, but privacy, security, and proprietary concerns create exceptions. Where do you draw the line?

## Learning Outcomes

By the end of this chapter, you should be able to:

- Apply ethical principles (informed consent, privacy, transparency) to data collection
- Identify selection bias, reporting bias, and publication bias in data sources
- Evaluate data quality using standard assessment frameworks
- Navigate government, academic, NGO, and industry data sources
- Employ triangulation and cross-validation to verify findings
- Conduct or critically evaluate systematic reviews and meta-analyses
- Handle missing data and outliers appropriately
- Document data gathering processes for reproducibility

## Next Steps

With data in hand, we're ready to analyze it. In the next chapter, we'll explore **systems thinking and impact analysis**—techniques for mapping complex cause-and-effect relationships, understanding feedback loops, and visualizing how industries create systemic harm. The data you've gathered will become the foundation for powerful analytical frameworks.

The gaps in our data are real, but so is our cleverness. Let's use it wisely.

---

## Concepts Covered in This Chapter

This chapter covers the following 25 concepts from the learning graph:

1. Ethical Data Collection
2. Informed Consent
3. Data Privacy
4. Anonymization
5. Data Aggregation
6. Sampling Methods
7. Random Sampling
8. Stratified Sampling
9. Selection Bias
10. Reporting Bias
11. Publication Bias
12. Industry Self-Reporting
13. Independent Verification
14. Peer Review
15. Meta-Analysis
16. Systematic Review
17. Data Quality Assessment
18. Missing Data
19. Data Cleaning
20. Outlier Detection
21. Cross-Validation
22. Reproducibility
23. Transparency
24. Open Data
25. Data Documentation

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Introduction to Data-Driven Ethics](../01-introduction/index.md)
- [Chapter 2: Measuring Harm](../02-measuring-harm/index.md)
