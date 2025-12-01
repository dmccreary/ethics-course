---
title: System Archetypes and Root Cause Analysis
description: Learning the vocabulary of systems archetypes to diagnose complex problems and find their root causes
generated_by: claude skill chapter-content-generator
date: 2025-11-30
version: 0.03
---

# System Archetypes and Root Cause Analysis

*You've now learned to draw causal loop diagrams—those interconnected webs of reinforcing and balancing loops that reveal how systems actually behave. But here's the exciting part: you're about to discover that many CLDs you'll encounter share common patterns. These patterns have names. They're called archetypes.*

*Learning these archetype names is like learning the vocabulary of a new language. At first, it takes effort to recognize "Tragedy of the Commons" or "Shifting the Burden." But once you've internalized a dozen or so archetypes, something magical happens: you can walk into any complex situation—a company struggling with quality, an environmental crisis, a public health challenge—and almost immediately say, "Ah, this looks like a 'Fixes that Fail' pattern." Suddenly, you're communicating with super high bandwidth. In one phrase, you've conveyed an entire structural story that would otherwise take twenty minutes to explain.*

*This chapter builds your archetype vocabulary and teaches you the detective work of root cause analysis. By the end, you'll be able to look at messy, confusing problems and see the elegant (if sometimes frustrating) patterns underneath.*

## Why Archetypes Matter: The Power of Pattern Recognition

Imagine two doctors examining a patient. The first doctor says, "The patient has elevated temperature, increased white blood cell count, localized pain in the lower right abdomen, and tenderness upon palpation." The second doctor simply says, "Appendicitis." Both are describing the same condition, but the second doctor has compressed all that information into a single word that any other physician immediately understands—along with the likely causes, prognosis, and treatment options.

Archetypes work the same way for systems thinkers. When you say "This is a Tragedy of the Commons situation," everyone who knows that archetype immediately understands:

- There's a shared resource being overused
- Individual actors are behaving rationally but collectively creating irrational outcomes
- Without intervention, the resource will be depleted
- Solutions require either regulation, privatization, or community-based management

That's an enormous amount of information packed into five words!

| Communication Approach | Time to Explain | Shared Understanding | Intervention Clarity |
|------------------------|-----------------|---------------------|---------------------|
| Describing raw symptoms | 20-30 minutes | Variable | Low |
| Drawing a full CLD | 10-15 minutes | Good | Medium |
| Naming the archetype | 10 seconds | Excellent (if known) | High |

!!! tip "Building Your Vocabulary"
    Systems thinkers who can fluently name and apply archetypes have a superpower: they can diagnose problems faster, communicate insights more clearly, and propose solutions more confidently. It's worth investing time to truly learn these patterns.

## The Core Archetypes: Your Essential Toolkit

Let's build your archetype vocabulary systematically, starting with the most common patterns you'll encounter when analyzing harmful industries and ethical challenges.

### Tragedy of the Commons

**The Pattern in One Sentence:** Individual rational behavior leads to collective irrational outcomes when people share a common resource.

This archetype gets its name from a famous essay by Garrett Hardin (1968), who described how farmers sharing a common pasture each had an incentive to add more cattle—since the individual farmer captured all the benefit of an extra cow while sharing the cost of overgrazing with everyone else.

**The Structure:**

- A shared resource (the "commons")
- Multiple users with individual incentives to use more
- No coordination mechanism or regulation
- Delayed feedback about resource degradation
- Eventual depletion or collapse

#### Diagram: Tragedy of the Commons CLD

<details markdown="1">
    <summary>Tragedy of the Commons Causal Loop Diagram</summary>
    Type: diagram

    Purpose: Illustrate the core feedback structure of the Tragedy of the Commons archetype

    Bloom Level: Understand (L2) - Help students grasp the structural dynamics

    Learning Objective: Students will understand why rational individual behavior produces irrational collective outcomes

    Components:
    - Individual User Benefit (stock)
    - Resource Availability (stock)
    - Total Usage Rate (flow)
    - Number of Users (variable)
    - Individual Usage (variable)

    Loops:
    1. Reinforcing Loop R1 (labeled "Individual Gain"):
       - More Resource Availability → More Individual Usage → More Individual Benefit → (back to) More Individual Usage

    2. Balancing Loop B1 (labeled "Resource Depletion"):
       - More Total Usage Rate → Less Resource Availability → Less Individual Usage
       - Note: This loop operates with DELAY (mark with delay marks)

    3. Reinforcing Loop R2 (labeled "Race to Grab"):
       - Less Resource Availability → More perceived scarcity → More Individual Usage (trying to get share before it's gone)

    Key insight annotation: "R1 dominates in short term; B1 eventually dominates but often too late"

    Visual style: Standard CLD notation with R/B labels, arrow polarities (+/-)
    Color scheme: Green for resource, blue for individual actions, red for depletion dynamics

    Implementation: Static diagram or simple animated p5.js showing loops activating over time
</details>

**Real-World Examples in Harmful Industries:**

- **Overfishing:** Each fishing fleet maximizes catch; global fish stocks collapse
- **Groundwater depletion:** Each farm pumps more water; aquifers are exhausted
- **Antibiotic overuse:** Each doctor prescribes liberally; resistance develops for everyone
- **Carbon emissions:** Each nation or company emits freely; climate changes for all

**The Telltale Symptoms:**

- "Everyone else is doing it, so I have to as well"
- Race to the bottom in environmental or labor standards
- Short-term thinking dominating long-term sustainability
- Collective action problems that seem impossible to solve

### Shifting the Burden

**The Pattern in One Sentence:** Using quick fixes to address symptoms while the underlying problem-solving capability erodes.

This is perhaps the most insidious archetype because the quick fix *works*—at least temporarily. That success masks the slow erosion of fundamental solutions, creating a dangerous dependency.

**The Structure:**

- A problem symptom appears
- A quick "symptomatic solution" provides relief
- The underlying "fundamental solution" capability weakens from neglect
- Dependence on the symptomatic solution increases
- The problem returns, often worse

#### Diagram: Shifting the Burden Dynamic

<details markdown="1">
    <summary>Shifting the Burden Archetype Structure</summary>
    Type: diagram

    Purpose: Show the two-loop structure that makes this archetype so dangerous

    Bloom Level: Analyze (L4) - Help students see relationship between symptom relief and capability erosion

    Learning Objective: Students will recognize how quick fixes can trap systems in destructive cycles

    Components:
    - Problem Symptom (central variable)
    - Symptomatic Solution (quick fix)
    - Fundamental Solution (real fix)
    - Side Effects (unintended consequences)
    - Capability for Fundamental Solution (erodes over time)

    Loops:
    1. Balancing Loop B1 (labeled "Quick Fix"):
       - Problem Symptom → Symptomatic Solution → (reduces) Problem Symptom
       - Note: This loop works FAST

    2. Balancing Loop B2 (labeled "Fundamental Solution"):
       - Problem Symptom → Fundamental Solution → (reduces) Problem Symptom
       - Note: This loop works SLOW and requires investment

    3. Reinforcing Loop R1 (labeled "Addiction"):
       - Using Symptomatic Solution → (reduces) Capability for Fundamental Solution → (harder to use) Fundamental Solution → (more reliance on) Symptomatic Solution

    4. Potential Reinforcing Loop R2 (labeled "Side Effects"):
       - Symptomatic Solution → Side Effects → (worsens) Problem Symptom

    Key insight annotations:
    - "The quick fix works!" near B1
    - "But at what hidden cost?" near R1
    - Time delay marks on all connections to Fundamental Solution

    Visual style: Two parallel balancing loops with addiction loop connecting them
    Color scheme: Orange for symptomatic path, green for fundamental path, red for addiction loop

    Implementation: Static CLD with clear labeling
</details>

**Real-World Examples in Harmful Industries:**

| Industry | Problem Symptom | Quick Fix | Fundamental Solution | Capability Lost |
|----------|----------------|-----------|---------------------|-----------------|
| Agriculture | Pest damage | Pesticides | Ecosystem-based pest management | Natural predator populations |
| Healthcare | Pain | Opioids | Physical therapy, lifestyle changes | Patient coping skills |
| Fast Fashion | Low-cost demand | Overseas sweatshops | Sustainable local manufacturing | Domestic textile industry |
| Social Media | Low engagement | Algorithmic outrage | Quality content | User attention spans |

**The Telltale Symptoms:**

- "We know it's not ideal, but we need it to get through the current crisis"
- The same problems keep recurring, often worse each time
- Solutions become increasingly expensive or extreme
- Loss of natural problem-solving capabilities

!!! warning "The Addiction Trap"
    The most dangerous aspect of Shifting the Burden is that it feels like success. The symptom goes away! It's only later—sometimes much later—that the hidden costs become apparent. By then, the capability for fundamental solutions may be severely degraded.

### Success to the Successful

**The Pattern in One Sentence:** Initial advantages compound over time, leading to increasing inequality as winners attract more resources to win again.

This archetype explains why "the rich get richer" and why market concentration tends to increase without intervention. It's not necessarily about morality—it's about structural dynamics that amplify initial advantages.

**The Structure:**

- Two or more actors/entities competing for resources
- A allocation process that directs resources based on past success
- Winners receive more resources to compete
- Losers receive fewer resources
- Gap widens over time in a reinforcing loop

#### Diagram: Success to the Successful Dynamics

<details markdown="1">
    <summary>Success to the Successful Feedback Structure</summary>
    Type: diagram

    Purpose: Illustrate how initial advantages compound through resource allocation

    Bloom Level: Analyze (L4) - Students examine the structural causes of inequality

    Learning Objective: Students will understand how neutral-seeming allocation rules can produce extreme inequality

    Components:
    - Entity A Success (variable)
    - Entity B Success (variable)
    - Total Resources Available (stock)
    - Resources Allocated to A (flow)
    - Resources Allocated to B (flow)
    - Allocation Decision (based on past success)

    Loops:
    1. Reinforcing Loop R1 (labeled "A's Advantage"):
       - A's Success → More Resources to A → More A Success

    2. Reinforcing Loop R2 (labeled "B's Decline"):
       - B's Lower Success → Fewer Resources to B → Lower B Success
       - Note: This is a reinforcing loop moving in a negative direction

    Key insight: "Both loops are reinforcing—one spiraling up, one spiraling down"

    Visual element: Show A and B starting at similar positions, then diverging dramatically over time

    Visual style: Side-by-side CLD showing both reinforcing loops
    Color scheme: Gold for A's ascending loop, gray for B's descending loop

    Implementation: Static diagram or simple animation showing divergence over time
</details>

**Real-World Examples:**

- **Tech Platform Monopolies:** More users → more developers → better product → more users
- **Wealth Inequality:** More capital → more investment returns → more capital
- **Academic Publishing:** More citations → more visibility → more citations
- **Media Attention:** More followers → more features → more followers

**The Telltale Symptoms:**

- "Natural" market concentration that keeps increasing
- Barriers to entry that seem to grow over time
- "Winner take all" dynamics
- Previously competitive markets becoming monopolistic

### Fixes that Fail

**The Pattern in One Sentence:** A fix works temporarily but has unintended consequences that eventually make the original problem worse.

This archetype is closely related to Shifting the Burden, but the key difference is that here the fix doesn't just erode capability—it actively creates new problems that feed back to worsen the original issue.

**The Structure:**

- A problem occurs
- A fix is applied and provides temporary relief
- The fix has unintended consequences (with delay)
- These consequences worsen the original problem
- The worsened problem triggers more aggressive application of the same fix

#### Diagram: Fixes that Fail Loop Structure

<details markdown="1">
    <summary>Fixes that Fail Causal Structure</summary>
    Type: diagram

    Purpose: Show how fixes can backfire through unintended consequences

    Bloom Level: Analyze (L4) - Students trace consequence chains

    Learning Objective: Students will anticipate how well-intentioned solutions can make problems worse

    Components:
    - Problem (central)
    - Fix (action taken)
    - Intended Consequence (problem reduction)
    - Unintended Consequence (delayed side effect)

    Loops:
    1. Balancing Loop B1 (labeled "The Fix"):
       - Problem → Apply Fix → (reduces) Problem
       - This loop works quickly

    2. Reinforcing Loop R1 (labeled "Backfire"):
       - Apply Fix → Unintended Consequence (DELAY) → Worsens Problem → Apply More Fix
       - This loop has significant time delay

    Key insight: "The delay between fix and unintended consequence is what makes this pattern so tricky"

    Annotations:
    - "Works!" near B1
    - "Wait for it..." near the delay
    - "Oops" near R1 closing

    Visual style: Standard CLD with clear delay marks
    Color scheme: Blue for intended effects, red for unintended consequences

    Implementation: Animated diagram showing time progression
</details>

**Real-World Examples:**

| Problem | Fix | Unintended Consequence | Worsened Problem |
|---------|-----|----------------------|------------------|
| Traffic congestion | More highways | Induced demand, sprawl | Worse congestion |
| Pest infestations | Pesticides | Kill predators, resistance | Worse infestations |
| Crime | More police, prisons | Community distrust, recidivism | More crime |
| Obesity epidemic | Artificial sweeteners | Metabolic disruption, increased cravings | More obesity |

**The Telltale Symptoms:**

- "We've tried this before and it didn't work, but maybe if we do MORE of it..."
- Solutions need to be increasingly aggressive
- Side effects becoming as problematic as original issue
- Historical pattern of escalating interventions

### Limits to Growth

**The Pattern in One Sentence:** A growth engine eventually encounters constraints that slow or stop expansion, often with destructive consequences if limits aren't recognized.

Every reinforcing growth process eventually hits limits. The question is whether the system adapts gracefully or crashes into the constraint.

**The Structure:**

- A reinforcing loop drives growth
- Growth continues exponentially for a time
- Eventually, a limiting condition is reached
- A balancing loop activates, slowing or stopping growth
- If limits aren't anticipated, system may overshoot and collapse

#### Diagram: Limits to Growth S-Curve

<details markdown="1">
    <summary>Limits to Growth Dynamic Behavior</summary>
    Type: chart

    Purpose: Show the characteristic S-curve and potential overshoot patterns

    Bloom Level: Apply (L3) - Students use this pattern to predict system behavior

    Learning Objective: Students will recognize growth limits before systems crash into them

    Chart type: Line chart showing behavior over time

    X-axis: Time (arbitrary units, 0-100)
    Y-axis: System Size/Performance

    Data series:
    1. "Ideal S-Curve" (green line):
       - Exponential growth early (0-40)
       - Gradual leveling (40-70)
       - Stable plateau at carrying capacity (70-100)

    2. "Overshoot and Oscillate" (yellow line):
       - Exponential growth (0-40)
       - Overshoots carrying capacity (40-50)
       - Drops below capacity (50-60)
       - Oscillates with decreasing amplitude (60-100)

    3. "Overshoot and Collapse" (red line):
       - Exponential growth (0-45)
       - Significantly overshoots (45-55)
       - Carrying capacity is degraded (drawn as dotted line dropping)
       - System collapses well below original capacity (55-100)

    Annotations:
    - "Carrying Capacity" horizontal line
    - Arrow showing "Growth engine dominates here"
    - Arrow showing "Limiting loop kicks in"
    - "Permanent damage" label on collapsed carrying capacity

    Title: "Three Possible Outcomes When Growth Meets Limits"

    Implementation: Chart.js with clear legends
</details>

**Real-World Examples:**

- **Fast Fashion:** Consumer demand growth → planetary absorption capacity exceeded → resource depletion
- **Antibiotic Use:** Effectiveness growth → resistance development → antibiotic failures
- **Economic Growth:** GDP growth → ecological limits → climate destabilization
- **Population:** Human population growth → carrying capacity → resource constraints

### Additional Archetypes: Completing Your Vocabulary

Beyond the "big five" archetypes above, several other patterns are crucial for analyzing harmful industries:

#### Escalation

**Pattern:** Two or more parties engage in competitive actions that continually one-up each other.

**Example:** Advertising wars between fast food companies, each spending more to capture attention, raising costs for all without increasing total market size.

**Structure:** Two reinforcing loops linked by threat perception, each party's actions triggering the other's response.

#### Eroding Goals

**Pattern:** When there's a gap between goals and performance, the system lowers goals rather than improving performance.

**Example:** Regulators gradually weakening environmental standards because industry "can't meet" original targets.

**Structure:** A balancing loop that closes the gap by adjusting the goal rather than the performance.

#### Growth and Underinvestment

**Pattern:** Growth is limited because capacity investment is delayed or insufficient, leading to performance problems that further discourage investment.

**Example:** Public transit systems that become overcrowded, prompting riders to switch to cars, reducing ridership and funding, leading to further service cuts.

**Structure:** A reinforcing loop where underinvestment leads to poor performance, which leads to less demand, which justifies continued underinvestment.

#### MicroSim: Archetype Pattern Matcher Game

<details markdown="1">
    <summary>Archetype Pattern Matcher Interactive Game</summary>
    Type: microsim

    Learning Objective: Students will practice rapid archetype recognition by matching scenarios to archetype names (Bloom Level: Apply - L3)

    Canvas layout:
    - Top area (600x200): Scenario description panel
    - Middle area (600x300): Interactive drag-and-drop matching zone
    - Bottom area (600x100): Score and feedback panel

    Visual elements:
    - Scenario card with real-world situation description
    - Six archetype name buttons (draggable or clickable)
    - Feedback area showing correct/incorrect
    - Progress bar showing scenarios completed
    - Score counter

    Archetypes to include:
    - Tragedy of the Commons
    - Shifting the Burden
    - Success to the Successful
    - Fixes that Fail
    - Limits to Growth
    - Escalation

    Scenarios (10 total, randomized):
    1. "Fishing fleets each try to catch more fish before others deplete the stock" → Tragedy of the Commons
    2. "A company keeps using temporary contractors instead of training permanent staff" → Shifting the Burden
    3. "A popular social media platform keeps getting more users while competitors shrink" → Success to the Successful
    4. "Adding more highway lanes leads to more traffic" → Fixes that Fail
    5. "A subscription service grows rapidly then hits market saturation" → Limits to Growth
    6. "Two companies keep lowering prices to undercut each other" → Escalation
    7. "Farmers share an irrigation canal and each tries to take more water" → Tragedy of the Commons
    8. "A city keeps using emergency homeless shelters instead of building affordable housing" → Shifting the Burden
    9. "Students who get early recognition get more opportunities for recognition" → Success to the Successful
    10. "Antibiotics overuse creates resistant bacteria requiring stronger antibiotics" → Fixes that Fail

    Interactive controls:
    - "Next Scenario" button
    - "Show Hint" button (shows key structural features)
    - "Show Answer" button (after attempt)
    - "Reset Game" button

    Scoring:
    - Correct on first try: 10 points
    - Correct after hint: 5 points
    - Correct after reveal: 0 points

    Feedback:
    - Correct: Green highlight, brief explanation of why this archetype fits
    - Incorrect: Red highlight, show the structural difference

    Default parameters:
    - Random scenario order
    - All archetypes available for each scenario
    - Hints available after 10 seconds

    Implementation: p5.js with clickable buttons and text rendering
</details>

## Root Cause Analysis: The Detective Work

Recognizing archetypes is powerful, but to design effective interventions, you need to dig deeper. Root cause analysis helps you move from symptoms to sources, from events to underlying structures.

### The Iceberg Model: Four Levels of Understanding

Imagine an iceberg floating in the ocean. What you see above the waterline—the visible tip—is only about 10% of the total mass. The other 90% is hidden beneath the surface. Problems work the same way.

**Level 1: Events (Above the Waterline)**
What happened? The visible occurrences that catch our attention.

- "A factory was caught using child labor"
- "Fish stocks collapsed in the North Atlantic"
- "Opioid overdose deaths spiked"

**Level 2: Patterns (Just Below Surface)**
What trends are occurring? The recurring behaviors over time.

- "Child labor violations have been increasing for five years"
- "Fish catches have declined 40% over two decades"
- "Prescription opioid use tripled from 2000-2015"

**Level 3: Structures (Deep Underwater)**
What influences the patterns? The system components, relationships, and incentives.

- Economic dependency relationships between brands and suppliers
- Fishing quota systems that incentivize overfishing
- Pharmaceutical marketing and physician incentive structures

**Level 4: Mental Models (Ocean Floor)**
What beliefs create these structures? The deep assumptions and worldviews.

- "Cheap goods are a consumer right"
- "The ocean is an inexhaustible resource"
- "Pain should be eliminated, not managed"

#### Diagram: Iceberg Model Infographic

<details markdown="1">
    <summary>Interactive Iceberg Model Visualization</summary>
    Type: infographic

    Purpose: Illustrate the four levels of system understanding with interactive exploration

    Bloom Level: Analyze (L4) - Students examine multiple levels of causation

    Learning Objective: Students will practice moving from surface events to deep mental models

    Layout: Vertical iceberg shape with water line clearly marked

    Visual elements:
    - Blue gradient water background
    - White/light blue iceberg shape
    - Clear waterline with "VISIBLE" above and "HIDDEN" below labels
    - Four horizontal sections within iceberg

    Level content (from top to bottom):
    1. Events (10% above water, light colored):
       - Icon: newspaper/alert
       - Label: "EVENTS - What happened?"
       - Hover text: "The visible occurrences that make the news"

    2. Patterns (25% just below, medium colored):
       - Icon: trend line
       - Label: "PATTERNS - What trends are occurring?"
       - Hover text: "Recurring behaviors we notice over time"

    3. Structures (35%, darker colored):
       - Icon: network/org chart
       - Label: "STRUCTURES - What influences the patterns?"
       - Hover text: "Incentives, relationships, and system design"

    4. Mental Models (30% at bottom, darkest):
       - Icon: brain/thought bubble
       - Label: "MENTAL MODELS - What beliefs create these structures?"
       - Hover text: "Deep assumptions about how the world works"

    Interactive elements:
    - Hover over each level to see detailed description
    - Click each level to see example for a selected case study
    - Dropdown to switch between case studies (Opioids, Child Labor, Overfishing)

    Case study content for Opioids:
    - Events: "Record overdose deaths in 2021"
    - Patterns: "Prescription rates tripled 2000-2015, then shifted to illegal opioids"
    - Structures: "Pharmaceutical marketing, physician incentives, for-profit healthcare"
    - Mental Models: "Pain is an enemy to eliminate; pills solve problems"

    Visual style: Clean, modern infographic with clear visual hierarchy
    Color scheme: Blues and whites for iceberg, with level-specific accent colors

    Implementation: HTML/CSS/JavaScript with SVG iceberg graphic
</details>

### The Five Whys Technique: Digging to Root Causes

The Five Whys is a deceptively simple but powerful technique. When you encounter a problem, ask "Why?" five times, with each answer becoming the subject of the next question.

**Example: Child Labor in Cocoa Production**

**Problem:** Children are working on cocoa farms.

1. **Why do children work on cocoa farms?**
   → Families need the income to survive.

2. **Why do families need children's income?**
   → Adult wages from cocoa farming are insufficient.

3. **Why are cocoa farming wages insufficient?**
   → Cocoa prices paid to farmers are very low.

4. **Why are cocoa prices so low?**
   → Market concentration gives chocolate companies pricing power.

5. **Why do chocolate companies have such pricing power?**
   → Farmers have no alternative buyers, and consumers don't see the connection between prices and labor conditions.

**Systems Insight:** The root cause isn't just poverty—it's a power structure that keeps cocoa farmers dependent on low prices set by a concentrated market.

!!! tip "Five Whys Best Practices"
    - Don't stop at comfortable answers—keep pushing
    - When you hit "people are just greedy" or "that's how things are," you've likely stopped too soon
    - Multiple root causes are normal—branch your analysis
    - Look for structural and mental model answers, not just individual failings

#### MicroSim: Five Whys Root Cause Explorer

<details markdown="1">
    <summary>Interactive Five Whys Analysis Tool</summary>
    Type: microsim

    Learning Objective: Students will practice systematic root cause analysis using the Five Whys technique (Bloom Level: Analyze - L4)

    Canvas layout:
    - Left panel (300x600): Problem selection and guidance
    - Center area (400x600): Interactive why-chain builder
    - Right panel (200x600): Depth meter and analysis summary

    Visual elements:
    - Problem statement at top (editable text)
    - Five connected boxes arranged vertically
    - Each box: "Why?" prompt → Answer input field
    - Arrows connecting boxes showing causal chain
    - Depth meter showing progression through levels (Events → Patterns → Structures → Mental Models)
    - Color coding matching Iceberg Model levels

    Pre-loaded problems to explore:
    1. "Fast fashion produces billions of unworn garments annually"
    2. "Ultra-processed foods are replacing traditional diets globally"
    3. "Pharmaceutical companies charge high prices in the US"
    4. "Social media platforms optimize for engagement over wellbeing"

    Interactive controls:
    - Dropdown: Select pre-loaded problem or enter custom
    - Text fields: Enter each "why" answer
    - Button: "Get Hint" - suggests possible answers
    - Button: "See Example Analysis" - shows expert analysis
    - Button: "Share Analysis" - generates shareable summary

    Depth meter labels:
    - Why 1-2: "Event/Pattern Level"
    - Why 3: "Structure Level"
    - Why 4-5: "Mental Model Level"

    Hints system:
    Each problem has suggested prompts:
    - For fast fashion: "Think about pricing incentives, consumer behavior, production systems..."
    - Hints become more specific with each click

    Default parameters:
    - Start with first pre-loaded problem
    - Empty answer fields
    - Hints available

    Behavior:
    - As user types answers, depth meter fills
    - Color shifts from surface (light blue) to deep (dark blue)
    - Final summary generated when all five whys completed

    Implementation: p5.js with text input handling
</details>

### Unintended Consequences: What Could Go Wrong?

Every intervention in a complex system produces effects beyond what was intended. Understanding the types of unintended consequences helps us anticipate and mitigate them.

**Side Effects:** Immediate unintended impacts on other parts of the system.

- Banning plastic straws → increased use of paper straws → higher water usage in production

**Rebound Effects:** Efficiency improvements that lead to increased total consumption.

- More fuel-efficient cars → cheaper to drive → people drive more → similar total emissions

**Problem Shifting:** Solving a problem in one place while creating or worsening it elsewhere.

- Stricter environmental regulations in one country → industry moves to countries with lax regulations

**Time Shifting:** Solving a problem now while making it worse in the future.

- Using debt to fund current consumption → future generations pay the bill

**Geographic Shifting:** Moving problems from visible to invisible locations.

- Exporting e-waste to developing countries → same pollution, different victims

| Type | Timing | Location | Example |
|------|--------|----------|---------|
| Side Effects | Immediate | Same system | Pesticide kills beneficial insects |
| Rebound Effects | Delayed | Same system | Efficiency gains increase total use |
| Problem Shifting | Varies | Different system | Regulation moves pollution elsewhere |
| Time Shifting | Delayed | Same system | Borrowing from the future |
| Geographic Shifting | Immediate | Different location | Exporting waste overseas |

??? question "How would you classify this unintended consequence? A city bans single-use plastic bags. Shoppers start buying thicker 'reusable' bags but treat them as disposable, resulting in MORE plastic by weight."
    This is primarily a **Rebound Effect** combined with **Side Effects**. The intended efficiency (less plastic) backfired because the solution was implemented without understanding consumer behavior. The "reusable" bags require more resources to produce, and if they're not actually reused many times, the net environmental impact is worse.

## Connecting Archetypes to Root Causes

Now let's see how archetype recognition and root cause analysis work together to provide deep system understanding.

### Case Study: The Opioid Crisis Through Systems Lenses

**Archetype Analysis: Shifting the Burden + Addiction**

The opioid crisis is a textbook example of Shifting the Burden:

- **Problem symptom:** Patient pain (physical or emotional)
- **Symptomatic solution:** Opioid prescription (quick, effective pain relief)
- **Fundamental solution:** Comprehensive pain management, addressing root causes (lifestyle, mental health, physical therapy)
- **Capability erosion:** Natural pain management capabilities, emotional resilience, patient coping skills
- **Side effect:** Physical dependence, tolerance, addiction

But there's a second Shifting the Burden loop at the societal level:

- **Problem symptom:** People suffering from addiction
- **Symptomatic solution:** Criminalization and punishment
- **Fundamental solution:** Treatment, harm reduction, addressing despair
- **Capability erosion:** Community support systems, treatment infrastructure
- **Side effect:** Incarceration, stigma, underground markets, more dangerous drugs

**Iceberg Analysis:**

| Level | Opioid Crisis |
|-------|---------------|
| Events | Record overdose deaths; fentanyl seizures; celebrity deaths |
| Patterns | Prescription rates rose for decades; shift from pills to heroin to fentanyl; geographic spread from Appalachia to nationwide |
| Structures | Pharmaceutical marketing; for-profit healthcare; physician incentives; weak FDA oversight; punitive drug policy |
| Mental Models | "Pain should be eliminated"; "Pills solve problems"; "Addiction is moral failure"; "Healthcare should be profitable" |

**Five Whys:**

1. Why are people dying from opioids?
   → They're using powerful opioids in dangerous ways.

2. Why are they using opioids dangerously?
   → They developed dependence through prescriptions or turned to street drugs.

3. Why did prescriptions lead to dependence?
   → Opioids were prescribed for conditions where they were inappropriate, and risks were minimized.

4. Why were risks minimized?
   → Pharmaceutical companies marketed opioids as safe while suppressing evidence of addiction.

5. Why could pharmaceutical companies do this?
   → Regulatory capture, lobbying power, and a healthcare system where profit motives override patient welfare.

#### Diagram: Opioid Crisis Multi-Archetype Map

<details markdown="1">
    <summary>Opioid Crisis Systems Map Showing Multiple Archetypes</summary>
    Type: diagram

    Purpose: Show how multiple archetypes interact in a single complex problem

    Bloom Level: Analyze (L4) - Students synthesize multiple system patterns

    Learning Objective: Students will see how real-world problems often involve multiple interacting archetypes

    Components (clustered by archetype):

    Shifting the Burden #1 (Individual Level):
    - Patient Pain (problem)
    - Opioid Prescription (symptomatic solution)
    - Comprehensive Pain Management (fundamental solution)
    - Natural Coping Ability (eroding capability)

    Shifting the Burden #2 (Societal Level):
    - Addiction Epidemic (problem)
    - Criminalization (symptomatic solution)
    - Treatment & Harm Reduction (fundamental solution)
    - Community Support (eroding capability)

    Success to the Successful:
    - Pharmaceutical Profits (A success)
    - Treatment Resources (B struggling)
    - Marketing Budget allocated by profit
    - Purdue Pharma vs. public health clinics

    Fixes that Fail:
    - More potent opioids (fix for tolerance)
    - Tolerance development (unintended consequence)
    - Need for even stronger opioids

    Connections between archetypes:
    - Arrow from "Opioid Prescription" to "Pharmaceutical Profits"
    - Arrow from "Criminalization" to "Less Treatment Investment"
    - Arrow from "Tolerance" back to "More Prescribing"

    Layout: Three archetype clusters connected by inter-system flows

    Visual style: Each archetype in its own visual box with connecting arrows between boxes
    Color scheme:
    - Blue for Shifting the Burden loops
    - Gold for Success to Successful
    - Red for Fixes that Fail

    Implementation: Complex CLD, possibly implemented as interactive vis-network
</details>

## Applying Archetypes to Harmful Industries

Let's practice archetype recognition across the industries we've studied throughout this course.

### Industry Archetype Quick Reference

| Industry | Primary Archetype | Secondary | Key Loop |
|----------|------------------|-----------|----------|
| Tobacco | Shifting the Burden (addiction) | Fixes that Fail | Nicotine relief erodes natural stress coping |
| Fossil Fuels | Tragedy of the Commons | Limits to Growth | Atmospheric CO2 as shared resource being depleted |
| Fast Fashion | Limits to Growth | Success to Successful | Planetary boundaries vs. exponential consumption |
| Ultra-Processed Food | Shifting the Burden | Fixes that Fail | Convenience undermines cooking skills |
| Social Media | Success to Successful | Escalation | Platform network effects + attention arms race |
| Pharmaceuticals | Success to Successful | Shifting the Burden | R&D goes to profitable drugs, not needed ones |
| Industrial Agriculture | Tragedy of the Commons | Fixes that Fail | Soil, water as commons; pesticide resistance |

### Deep Dive: Fast Fashion Archetypes

Fast fashion exemplifies multiple archetypes working together:

**Limits to Growth:** The growth engine (consumer demand for cheap, trendy clothes) has hit planetary limits (resource extraction, waste absorption, climate change).

**Tragedy of the Commons:** Environmental resources (water, clean air, stable climate) are treated as free commons that everyone exploits.

**Success to the Successful:** Major brands (Zara, H&M, Shein) gain advantages (economies of scale, marketing reach, supply chain power) that make it harder for sustainable alternatives to compete.

**Shifting the Burden:** Quick fashion "fixes" the symptom (desire for newness) while eroding the fundamental capability (satisfaction from quality, durability, personal style).

#### MicroSim: Industry Archetype Analyzer

<details markdown="1">
    <summary>Industry Archetype Analysis Tool</summary>
    Type: microsim

    Learning Objective: Students will apply archetype recognition to analyze harmful industries systematically (Bloom Level: Apply/Analyze - L3/L4)

    Canvas layout:
    - Left panel (250x600): Industry selector and info
    - Center area (450x600): Archetype matching workspace
    - Right panel (200x600): Analysis summary

    Industries available:
    1. Tobacco Industry
    2. Fossil Fuels
    3. Fast Fashion
    4. Ultra-Processed Foods
    5. Social Media Platforms
    6. Industrial Agriculture
    7. Pharmaceutical Industry
    8. Gambling Industry

    Archetypes to assign (draggable cards):
    - Tragedy of the Commons
    - Shifting the Burden
    - Success to the Successful
    - Fixes that Fail
    - Limits to Growth
    - Escalation
    - Eroding Goals
    - Growth and Underinvestment

    Workspace features:
    - Industry description displayed
    - Drop zones for "Primary Archetype" and "Secondary Archetype"
    - Text field for "Key Loop Description"
    - "Check Answer" button

    Feedback system:
    - Correct primary: Full points
    - Correct secondary: Bonus points
    - Reasonable loop description: Additional points
    - Show model answer after attempt

    Scoring:
    - Track correct identifications
    - Badge system (Apprentice → Analyst → Expert → Master)

    Default parameters:
    - Start with Tobacco (clearest example)
    - Progress to more complex industries
    - All archetypes available for each

    Implementation: p5.js with draggable elements
</details>

## Building Your Archetype Fluency

Like learning any language, fluency with archetypes requires practice. Here are strategies to build your vocabulary:

### Practice Recognition Daily

Start seeing archetypes everywhere:

- Read news stories and ask "What archetype is this?"
- Watch for pattern phrases like "despite our best efforts" (Fixes that Fail) or "everyone's doing it" (Tragedy of the Commons)
- When someone describes a recurring problem, mentally map the structure

### Draw Quick Sketches

When you recognize an archetype, sketch its basic structure. Even rough drawings reinforce the pattern in your memory.

### Name It in Conversation

Start using archetype names with others:

- "I think this is a Shifting the Burden situation"
- "This looks like classic Success to the Successful"
- "Are we setting up a Tragedy of the Commons here?"

The more you articulate archetypes, the faster you'll recognize them.

### Build an Archetype Journal

Keep a collection of real-world examples you encounter. For each:

- Brief description of the situation
- Archetype(s) identified
- Key structural elements
- Potential leverage points

!!! example "Sample Journal Entry"
    **Situation:** My company keeps hiring contractors for "temporary" projects that become permanent.

    **Archetype:** Shifting the Burden

    **Structure:**
    - Problem: Need specialized skills
    - Quick fix: Hire contractors
    - Fundamental solution: Train existing staff or hire permanent employees
    - Eroding capability: Internal skill development

    **Leverage point:** Invest in training; change hiring metrics to include long-term capability building

## Learning Outcomes

By completing this chapter, you should be able to:

- **Recognize** the major systems archetypes (Tragedy of the Commons, Shifting the Burden, Success to the Successful, Fixes that Fail, Limits to Growth, Escalation, Eroding Goals) when they appear in real-world situations

- **Apply** the Iceberg Model to analyze problems at event, pattern, structure, and mental model levels

- **Use** the Five Whys technique to trace surface symptoms to root causes

- **Anticipate** unintended consequences including side effects, rebound effects, and problem shifting

- **Communicate** complex system dynamics efficiently using archetype vocabulary

- **Analyze** harmful industries by identifying which archetypes are operating and how they interact

??? question "Self-Assessment: Can you name the archetype? A government provides subsidies to farmers, which lowers food prices, which reduces farmer income, which requires more subsidies..."
    This is a **Fixes that Fail** pattern. The subsidy (fix) creates unintended consequences (lower prices, reduced income) that worsen the original problem (farmer livelihood), requiring more of the same fix.

??? question "Self-Assessment: What level of the Iceberg Model is this? 'The economy prioritizes short-term profits over long-term sustainability'"
    This is a **Mental Model** statement—a deep belief about how the economy should work that shapes the structures, patterns, and events we observe.

??? question "Self-Assessment: Apply the Five Whys to this problem: 'Plastic pollution is increasing in oceans'"
    Sample analysis:
    1. Why is plastic in oceans? → It's dumped or washes from land
    2. Why is it dumped? → No infrastructure for recycling; it's cheapest disposal
    3. Why is dumping cheapest? → Producers don't pay disposal costs (externality)
    4. Why don't producers pay? → Weak extended producer responsibility laws
    5. Why weak laws? → Industry lobbying + belief that regulation hurts economy

## Summary: Your New Superpower

You now possess something valuable: a vocabulary for naming complex patterns that most people struggle to describe. When others see chaos, you see archetypes. When others are surprised by unintended consequences, you anticipated them. When others treat symptoms, you dig for root causes.

This is more than academic knowledge—it's a practical superpower for making change. In the next chapter, we'll turn this diagnostic capability into action, exploring how to find and use leverage points to shift harmful systems toward beneficial outcomes.

Remember: the goal isn't just to understand why things are broken. The goal is to fix them. And now you have the vocabulary to communicate clearly with others who share that goal. When everyone in a room knows what "Shifting the Burden" means, you can move from explanation to action in seconds rather than hours.

*Welcome to the community of systems thinkers. Use your new vocabulary wisely.*

---

## Concepts Covered in This Chapter

This chapter covers the following 22 concepts from the learning graph:

1. System Archetypes
2. Tragedy of the Commons
3. Shifting the Burden
4. Success to the Successful
5. Fixes That Fail
6. Limits to Growth
7. Escalation
8. Eroding Goals
9. Growth and Underinvestment
10. Root Cause Analysis
11. Five Whys Technique
12. Iceberg Model
13. Events Level
14. Patterns Level
15. Structures Level
16. Mental Models Level
17. Unintended Consequences
18. Side Effects
19. Rebound Effects
20. Problem Shifting
21. Time Shifting
22. Geographic Shifting

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Introduction to Data-Driven Ethics](../01-introduction/index.md)
- [Chapter 2: Measuring Harm](../02-measuring-harm/index.md)
- [Chapter 3: Ethical Data Gathering](../03-data-gathering/index.md)
- [Chapter 4: Systems Thinking and Impact Analysis](../04-impact-analysis/index.md)
