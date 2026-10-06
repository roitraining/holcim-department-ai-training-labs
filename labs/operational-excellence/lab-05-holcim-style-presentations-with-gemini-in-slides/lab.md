# Creating Holcim-Style Presentations with Gemini in Slides

## Time Required

30 minutes

## Overview

In this lab, you will use Gemini in Google Slides to draft a multi-slide Operational Excellence leadership deck about CEM clinker-factor progress and Geocycle alternative-fuel performance. You write a Holcim-style presentation brief, generate multiple slides, then refine structure, visuals, and speaker notes so the deck is usable in a real OE review.

### You learn how to:

- Open Google Slides and start a deck with Gemini assistance.
- Prompt Gemini for a multi-slide Holcim-style structure (title, agenda, two lever sections, actions).
- Refine slides for Holcim look-and-feel cues: clear titles, sparse bullets, red/gray professional tone, no invented KPIs.
- Add speaker notes and a final quality pass before sharing.

## Scenario

![Holcim Logo](./images/holcim-logo.png)

Your OE manager wants a short leadership update tomorrow morning: where CEM clinker factor is heading, how Geocycle thermal substitution supports the low-carbon agenda, and what the team should do next. You already have synthetic talking points from Labs 2–4. Gemini in Slides can draft the deck quickly—if you give it Holcim presentation constraints and refuse invented numbers.

> [!NOTE]
> Google’s Gemini-in-Slides controls can vary by account. If a button label differs slightly, use the nearest “Help me create / Generate slides / Gemini” entry point and keep the same prompting craft.

## Lab Instructions

### Task 1: Open Slides and prepare your approved facts

In this task, you create a blank presentation and collect only approved synthetic facts to feed Gemini.

1. Open [Google Slides](https://slides.google.com/) and sign in.

2. Click **Blank presentation**.

3. Rename the file to:

```text
Holcim OE Lab 05 — CEM and Geocycle Leadership Update
```

<!-- TODO IMAGE: Screenshot of a new blank Google Slides deck renamed for the OE lab -->
![New blank Google Slides deck](images/new-blank-slides-deck.png)

4. Keep this approved fact block handy (synthetic training facts only):

```text
Approved synthetic facts for this deck:
- Topic: Operational Excellence update on CEM and Geocycle
- CEM: product mix discussion uses EN 197-1 families (CEM I–V); lower clinker factor is a primary lever
- In the training SiteData sample, average clinker factor eased from Q1 to Q4 2025
- ECOPlanet volume share and SCM share are discussed as formulation signals, not as proof of a specific market claim
- Geocycle: thermal substitution rate generally rose across the same quarters in the training sample
- CEM and Geocycle are related low-carbon levers but are not the same metric
- Do not invent 2030 targets, country rankings, or customer contract tonnes
```

### Task 2: Generate a multi-slide deck with a Holcim-style brief

In this task, you ask Gemini in Slides to create several slides at once from a structured brief.

1. Open the Gemini / **Help me create** (or equivalent) panel in Slides.

<!-- TODO IMAGE: Screenshot of Gemini panel in Google Slides -->
![Gemini panel in Google Slides](images/gemini-in-slides-panel.png)

2. Paste this prompt and generate:

```text
Create a 6-slide Holcim-style leadership presentation for Operational Excellence.

Holcim presentation style constraints:
- Clean corporate look: strong slide titles, sparse bullets (max 4 per slide), generous whitespace
- Professional industrial tone; Holcim red and gray accents if themes allow; avoid playful clip art
- No stock-photo collage slides
- No invented statistics; use ONLY the approved synthetic facts I provide
- Prefer short bullets over paragraphs
- Include a clear recommended-actions slide

Slide outline:
1. Title: Operational Excellence Update — CEM and Geocycle
2. Agenda
3. CEM lever: clinker factor and product mix (CEM I–V / ECOPlanet)
4. Geocycle lever: thermal substitution and AF
5. How the two levers work together (and what not to confuse)
6. Recommended OE actions for the next 30 days

Approved synthetic facts:
- Topic: Operational Excellence update on CEM and Geocycle
- CEM: product mix discussion uses EN 197-1 families (CEM I–V); lower clinker factor is a primary lever
- In the training SiteData sample, average clinker factor eased from Q1 to Q4 2025
- ECOPlanet volume share and SCM share are discussed as formulation signals, not as proof of a specific market claim
- Geocycle: thermal substitution rate generally rose across the same quarters in the training sample
- CEM and Geocycle are related low-carbon levers but are not the same metric
- Do not invent 2030 targets, country rankings, or customer contract tonnes
```

3. Insert / accept the generated slides when the structure matches the outline.

<!-- TODO IMAGE: Screenshot of the generated 6-slide deck overview -->
![Generated multi-slide OE deck](images/generated-oe-deck-overview.png)

> [!IMPORTANT]
> If Gemini invents a KPI (for example a “22% reduction” that you did not supply), delete that number before you continue.

### Task 3: Refine structure and Holcim look-and-feel

In this task, you use follow-up prompts and manual edits to make the deck presentation-ready.

1. Ask Gemini (in Slides or by selecting a slide and using Gemini) to tighten wording:

```text
Rewrite bullets on slides 3–5 to be shorter and more executive. Keep every factual claim limited to the approved synthetic facts. Remove any hype adjectives.
```

2. Manually check each slide:

   - One idea per slide
   - Titles are specific (“CEM: clinker factor and product mix”, not “Overview”)
   - No more than four bullets
   - No decorative text boxes colliding with titles

3. On the actions slide, ensure next steps are operational, for example:

   - Validate Q4 priority sites in the regional OE review
   - Pair CEM product-mix actions with Geocycle AF opportunities where both apply
   - Keep confidential plant targets out of public AI tools

4. Optional: apply a simple theme or brand colors available in your Slides theme gallery that approximate Holcim red/gray. Do not spend the whole lab hunting for a perfect master.

<!-- TODO IMAGE: Screenshot of refined actions slide -->
![Refined OE actions slide](images/refined-oe-actions-slide.png)

### Task 4: Add speaker notes and do a final quality pass

1. Open **Speaker notes** on slides 3, 4, and 5.

2. For each, add 2–3 sentences a presenter could say, including one explicit caution not to invent KPIs beyond the training sample.

3. Ask Gemini for help if useful:

```text
Draft speaker notes for this slide in 3 short sentences for an OE manager audience. Do not add new statistics.
```

4. Run a final checklist:

   - [ ] Six slides, Holcim-style sparse layout
   - [ ] CEM and Geocycle both covered
   - [ ] No invented targets or customer tonnes
   - [ ] Actions slide is concrete
   - [ ] Speaker notes present on the three content slides

5. Share the deck with a classmate or instructor for a 60-second review.

### Bonus Task 5: Generate an alternate title slide

1. Ask Gemini for two alternate title-slide options that still say **Operational Excellence**, **CEM**, and **Geocycle**.

2. Keep the clearer option; discard anything that looks like generic AI marketing.

## Congratulations!

You generated a multi-slide Holcim-style OE leadership deck with Gemini in Google Slides, refined it against approved synthetic CEM and Geocycle facts, and left with speaker notes you can actually present.
