# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an MkDocs-based educational course website on **Ethics in Modern Society**, focusing on data-driven ethical analysis, systems thinking, and advocacy for positive change. The course teaches students to measure harm, gather unbiased data, analyze complex systems, identify leverage points, and design effective advocacy strategies.

**Live Site**: https://dmccreary.github.io/ethics-course/

## Build and Development Commands

### Local Development
```bash
# Serve the site locally with live reload
mkdocs serve
# Site will be available at http://localhost:8000

# Serve with specific address (alternative)
timeout 5s mkdocs serve --dev-addr=127.0.0.1:8000
```

### Production Build
```bash
# Build the static site
mkdocs build
# Output will be in the site/ directory
```

### Deployment
The site is deployed to GitHub Pages automatically. The `site/` directory is built locally and committed to the repository (note: this is non-standard as most MkDocs projects gitignore the site directory).

## Content Structure

### Chapter Organization
Content is organized into 8 sequential chapters in `docs/chapters/`:
1. **01-introduction** - Data-driven ethics introduction
2. **02-measuring-harm** - Frameworks for quantifying harm (includes sub-pages: ranking.md, scorecard.md)
3. **03-data-gathering** - Ethical data collection methods
4. **04-impact-analysis** - Mapping impact networks
5. **05-systems-thinking** - Root cause analysis and systems archetypes
6. **06-looking-for-leverage** - Donella Meadows' leverage points framework
7. **07-advocating-for-change** - Advocacy strategies and behavioral economics
8. **08-capstone-project** - Data-driven ethical reform project

Each chapter follows the pattern: `docs/chapters/[number]-[name]/index.md`

### Interactive Simulations
Located in `docs/sims/` - interactive MicroSimulations for hands-on learning (e.g., ranking simulation for comparing industry harm).

### Generative AI Prompts
The `docs/prompts/` directory contains prompt templates for generating course content:
- `glossary.md` - Specifications for glossary term format and creation
- `learning-graph/` - Prompts for concept enumeration and dependency mapping

## Custom MkDocs Plugin

This project includes a custom **social_override** plugin (`plugins/social_override.py`) that:
- Overrides MkDocs Material's default social card images
- Allows custom Open Graph and Twitter card images via page metadata
- Enables per-page social media preview customization

The plugin is installed via `setup.py` and registered in `mkdocs.yml`.

## Content Conventions

### Glossary Terms
When adding glossary terms to `docs/glossary.md`, follow this format:
```markdown
#### Term Name

[Single sentence definition.]

[1-3 sentences explaining why the term is important.]

**Example:** Example of usage in the course.
```

Terms should be:
- In alphabetical order
- Defined for high school student comprehension level
- Precise, concise, distinct, non-circular
- Free of business rules

### Navigation Structure
The site navigation is explicitly defined in `mkdocs.yml` under the `nav:` section. When adding new pages:
1. Create the markdown file in the appropriate directory
2. Add the entry to `mkdocs.yml` navigation in the correct position
3. Follow the existing naming pattern (chapters use numbered prefixes)

## Key Learning Frameworks Referenced

The course emphasizes:
- **Social cost accounting** and life-cycle analysis
- **DALYs** (Disability-Adjusted Life Years) for harm measurement
- **Causal loop diagrams** and systems archetypes
- **Donella Meadows' leverage points** framework
- **Behavioral economics** for intervention design
- Visual learning through charts, graphs, and graphical storytelling

## File Patterns to Ignore

- `site/` - Built output (tracked in git, but regenerated on each build)
- `.cache/` - MkDocs cache
- `.DS_Store` - macOS metadata
- `~$*` - Temporary Office files
