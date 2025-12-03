# Feedback from Prof. David West

**Date Received:** December 3, 2025
**Date Processed:** December 3, 2025

## Original Feedback

Prof. David West provided feedback on the harm bubble chart and broader course content:

> The bubble chart is interesting and I pretty much agree with what is there. I would add four 'industries':
>
> **IT (as currently practiced)** — massively wasteful, data centers for same reason as bitcoin and AI, systems demean human work and abilities, vulnerability of centralized data, fragility to bad actors, and more. Harms both people and planet to great degree.
>
> **AI** — data centers, centralization of wealth, false equivalence of human and machine intelligence, looming financial collapse. Harms planet slightly more than people.
>
> **Education** — produces exact opposite of what it was supposed to do, people who cannot read, do math, evaluate data/information/news, be responsible citizens. Harms people, planet indirectly.
>
> **Government** — nothing works, bureaucracy only interested in maintaining itself. Harms both people and planet.
>
> Not industries, but centers of harm:
>
> **Extractive Capitalism** — business, especially for-profit healthcare and insurance, focused exclusively on generating profit that is then extracted (harming the business and anyone "served" by that business) into the pockets of billionaires. Harms both planet and people.
>
> **Fundamentalism** — lumping together both religious and political absolutes. Harms people and, indirectly, the planet.
>
> **Scientism** — the conceit that the only valid way of thinking is computational, formal, math-logical. The myth that science is a royal road to Truth.
>
> Would really like to engage in conversation about these kinds of things. Maybe some kind of "salon?" if such things exist anymore.

## Analysis

Prof. West's feedback falls into two distinct categories:

### Category 1: Additional Industries
- IT, AI, Education, Government

These have varying degrees of fit with the current bubble chart methodology, which emphasizes quantifiable harms (deaths, DALYs, economic costs). IT and AI have emerging quantifiable data (energy consumption, wealth concentration metrics). Education and Government are more systemic and harder to isolate as discrete "industries."

### Category 2: Systemic Drivers (Meta-Level Forces)
- Extractive Capitalism
- Fundamentalism
- Scientism

These represent a conceptually different layer of analysis—not industries that cause harm, but structural/ideological forces that *enable* and *amplify* harm across all industries. This is a valuable critique that the industry-focused approach may miss root causes.

The Scientism point is particularly relevant as self-critique: a "data-driven ethics" course inherently privileges what can be quantified, potentially missing harms that resist measurement.

## Actions Taken

### 1. Added AI to Harm Bubble Chart
**File:** `docs/sims/harm-bubble-chart/harm-bubble-chart.js`

Added AI Industry as a new bubble with:
- Harm to People: 45 (wealth concentration, job displacement, misinformation)
- Harm to Planet: 55 (data centers, training energy consumption)
- Economic Impact: 90 (massive investment and market cap)
- Summary: "Data center energy use; wealth centralization; job displacement; misinformation risks"

**Rationale:** AI has emerging quantifiable data and fits the bubble chart methodology. IT was not added because it overlaps significantly with existing entries (Crypto, Cybercrime) and is harder to bound as a discrete industry.

### 2. Added "Systemic Drivers of Harm" Section to Chapter 6
**File:** `docs/chapters/06-looking-for-leverage/index.md`

Added new section covering:
- **Extractive Capitalism** - profit extraction, externalization, short-termism
- **Fundamentalism** - religious and political absolutism blocking evidence-based policy
- **Government Dysfunction** - regulatory capture, enforcement gaps, bureaucratic failure
- **Interaction Effects** - how these drivers reinforce each other

This section frames these as "meta-level" forces that operate at Leverage Points 4-5 (Paradigms and Goals), complementing the industry-level analysis rather than replacing it.

### 3. Added "The Limits of Quantification: A Critical Reflection on Scientism" to Chapter 7
**File:** `docs/chapters/07-advocating-for-change/index.md`

Added section that:
- Defines scientism as distinct from science
- Acknowledges the course's potential blind spots
- Discusses what quantification misses (dignity, relationships, ways of knowing)
- Connects to AI and machine intelligence concerns
- Advocates for integrating multiple ways of knowing
- Provides practical implications for advocacy

This serves as methodological self-reflection, acknowledging that a data-driven approach has inherent limitations.

## Items Not Implemented

### IT as Separate Industry
**Reason:** Significant overlap with existing entries (Crypto/Bitcoin for energy, Cybercrime for fraud/fragility). IT is also extremely broad—would need to specify which aspects (data centers? software development? surveillance capitalism?).

### Education as Industry
**Reason:** Difficult to frame as an "industry" in the harm-causing sense. The critique is valid but operates at a different level—more about institutional failure than industry harm. Could be addressed in a future section on "institutional dysfunction."

### Government as Industry
**Reason:** Similar to education—more of a systemic failure than an industry. Partially addressed in the "Government Dysfunction" subsection of Systemic Drivers.

## Suggestions for Future Development

1. **Salon Format:** Prof. West's interest in ongoing discussion suggests the course could benefit from a discussion guide or seminar companion. Consider adding a "Discussion Questions" appendix or instructor guide.

2. **Education System Critique:** Could develop a separate analysis of how educational institutions fail their stated missions, perhaps in a new section on "Institutional Failures Beyond Markets."

3. **AI Deep Dive:** Given AI's rapid development and Prof. West's concerns about "false equivalence of human and machine intelligence," consider developing a dedicated case study chapter on AI ethics.

4. **Alternative Epistemologies:** The Scientism section could be expanded into a fuller treatment of indigenous knowledge systems, contemplative traditions, and other ways of knowing that complement data-driven approaches.

## Acknowledgment

Thanks to Prof. David West for this thoughtful and substantive feedback that has meaningfully improved the course content, particularly by prompting critical self-reflection on methodological assumptions.
