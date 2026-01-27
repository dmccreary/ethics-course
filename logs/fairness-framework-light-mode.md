# Fairness Frameworks MicroSim Redesign Log

**Date:** 2026-01-27
**MicroSim:** Cultural Fairness Frameworks
**Location:** `docs/sims/fairness-frameworks/`

## Overview

Refactored the fairness-frameworks MicroSim from a single monolithic HTML file (645 lines) into a clean separation of concerns with external files, converted from dark theme to light theme matching other MicroSims.

## Original Structure

Single `main.html` file containing:
- Embedded CSS (~260 lines)
- Embedded JavaScript (~100 lines)
- Embedded JSON data (~230 lines)
- HTML structure

Dark theme with:
- Dark gradient background (`#1a1a2e` to `#16213e`)
- Light text (`#fff`, `#a0a0a0`)
- Semi-transparent colored cells

## New Structure

### Files Created

1. **data.json** - All traditions and dimensions data
   - 6 cultural traditions (Western Liberal, Confucian, Ubuntu, Indigenous American, Islamic, Utilitarian)
   - 5 dimensions per tradition
   - Each cell contains: value, emphasis level, description, example
   - Key thinkers for each tradition

2. **style.css** - Light theme styles
   - Aliceblue background
   - Dark text for readability
   - Compact layout for MkDocs iframe
   - Responsive design preserved

3. **script.js** - JavaScript logic
   - Async data loading from data.json
   - Matrix generation
   - Detail panel interactions
   - Event listeners

4. **main.html** - Minimal HTML structure
   - Links to external CSS and JS
   - Table skeleton
   - Detail panel markup
   - Legend

### Theme Changes (Dark → Light)

| Element | Dark Theme | Light Theme |
|---------|------------|-------------|
| Background | `linear-gradient(#1a1a2e, #16213e)` | `aliceblue` |
| Text color | `#fff` | `#333` |
| Secondary text | `#a0a0a0` | `#666` |
| Table header bg | `rgba(255,255,255,0.1)` | `#e8f4f8` |
| Cell background | `rgba(255,255,255,0.05)` | `#f8fafc` |
| Matrix wrapper | `rgba(255,255,255,0.03)` | `rgba(255,255,255,0.9)` |
| Detail panel | `rgba(26,26,46,0.98)` | `#fff` |
| Overlay | `rgba(0,0,0,0.5)` | `rgba(0,0,0,0.3)` |

### Emphasis Colors (Adjusted for Light Theme)

| Emphasis | Dark Theme | Light Theme |
|----------|------------|-------------|
| High | `rgba(78,205,196,0.3)` | `rgba(20,184,166,0.2)` |
| Medium | `rgba(167,139,250,0.3)` | `rgba(139,92,246,0.15)` |
| Low | `rgba(255,107,107,0.2)` | `rgba(239,68,68,0.12)` |
| Balanced | `rgba(255,230,109,0.25)` | `rgba(245,158,11,0.18)` |
| Unique | `rgba(139,233,253,0.3)` | `rgba(6,182,212,0.18)` |

### Compact Layout Adjustments

To fit within MkDocs iframe:

| Property | Original | Compact |
|----------|----------|---------|
| Body padding | 20px | 10px |
| Matrix wrapper padding | 20px | 10px |
| Cell padding | 12px 10px | 8px 6px |
| Tradition header min-width | 160px | 120px |
| Dimension header min-width | 100px | 80px |
| H1 font-size | 1.6rem | 1.4rem |
| Cell font-size | 0.75rem | 0.7rem |
| Legend gap | 15px | 12px |
| Legend font-size | 0.8rem | 0.7rem |

## Key Design Patterns

### 1. Async Data Loading
```javascript
async function init() {
    const response = await fetch('./data.json');
    frameworkData = await response.json();
    generateMatrix();
}
```

### 2. Dynamic Matrix Generation
- Iterate through traditions (rows)
- Iterate through dimensions (columns)
- Apply emphasis class based on data
- Attach click handlers for detail panel

### 3. Sliding Detail Panel
- Fixed position panel slides in from right
- Overlay dims background
- ESC key and overlay click to close
- Displays: tradition name, dimension, description, example, key thinkers

### 4. Responsive Considerations
- `overflow-x: auto` on matrix wrapper for horizontal scroll on small screens
- Detail panel goes full-width on mobile (`@media max-width: 768px`)

## Screenshot

Updated screenshot captured at 74K showing compact light theme layout.

## Lessons Learned

1. **Separation of concerns** makes maintenance easier - data changes don't require touching HTML/CSS/JS
2. **Light themes** need adjusted opacity values - colors that work on dark backgrounds appear washed out on light
3. **Compact layouts** require systematic reduction of padding, margins, and font sizes throughout
4. **MkDocs iframes** have limited width (~750-800px) so tables need to be designed with this constraint
