<!-- course-title: AI for the Holcim Innovation Centre -->
<!-- course-theme: holcim-theme -->

<!-- layout: full-bleed -->
# AI for the Holcim Innovation Centre

![AI for the Holcim Innovation Centre title slide](images/title-slide.png)
---
<!-- layout: panel-right -->
# Welcome!

- ROI leads the industry in designing and delivering customized technology and management training solutions
- Meet your instructor
  - Name
  - Background
  - Contact info
- Let’s get started!

![Welcome](images/welcome.png)
---
# Course Objectives

- Use Gemini across everyday Holcim Innovation Centre work
- Write advanced prompts grounded in trial files, with no invented results
- Summarize, search, schedule, and reply with Gemini in Gmail
- Generate and edit Holcim-style decks from Docs and Sheets
- Analyze trial data in Sheets and build a Canvas dashboard
- Build an advanced briefing pack in Gemini Notebook
---
<!-- layout: panel-left -->
# Agenda

- Advanced Prompt Engineering
- Gemini in Gmail
- Holcim-Style Presentations in Slides
- Trial Data in Sheets, Formulas, and Canvas
- Advanced Gemini Notebook

![Agenda](images/agenda.png)
---
<!-- layout: panel-right -->
# Who Should Attend

- HIC scientists and technicians running trials
- Lab leads who write trial notes and review decks
- Specialists preparing trials for plant handover
- Innovation managers who brief internal reviews

![Who Should Attend](images/who-should-attend.png)
---
<!-- layout: panel-left -->
# Prerequisites

- A Holcim Workspace account with Gemini enabled
- Experience writing basic Gemini prompts
- Comfort with Drive, Sheets, and Slides
- No data-science background required

![Prerequisites](images/prerequisites.png)
---
<!-- layout: stacked -->
# Five Skills, One Afternoon

You already work in these tools. Today you make Gemini useful inside them.

![Five skills for the Holcim Innovation Centre](images/five-skills-hero.png)
---
<!-- layout: 2-column -->
# Ground Rules for Today

### Data

- Use the synthetic HIC-LC3-24 class files in every lab
- Unpublished results, mix cards, and partner names stay out of prompts
- You are accountable for every number that leaves the room

### Features

- Gemini features roll out to tenants at different times
- If a button in a slide or lab is missing, say so. Each lab has a fallback
- Labels move. Look for the intent of the step, not an identical screenshot
---
<!-- layout: navigation -->
# Today’s Sections

- **Advanced Prompt Engineering**
- Gemini in Gmail
- Holcim-Style Presentations in Slides
- Trial Data in Sheets, Formulas, and Canvas
- Advanced Gemini Notebook
---
# Do Now: Ask for a Trial Note

Try this before we talk about technique.

1. Open Gemini and start a new chat:

   ```text
   https://gemini.google.com
   ```

2. Send this prompt, with no files attached:

   ```text
   Write a short trial note about our LC3 binder trial for the plant team.
   ```

3. Read the results.
---
<!-- layout: panel-right -->
# What is wrong with the previous prompt?

- You gave Gemini no file, so every number in that note was invented
- Fluent text hides the invention. That is the dangerous part
- Gemini cannot guess your reader, your sources, or what must stay out
- The fix is structure, plus sources, plus a rule for what is missing

> [!IMPORTANT]
> If a number is not in the source, it does not belong in the answer.

![Prompt frustration](images/prompt-frustration.png)
---
<!-- layout: 2-column -->
# Role, Task, Steps, Examples Is the Floor

### Weak

```text
Write a trial note about LC3 for the plant.
```

- No reader, no source, no limits
- Gemini fills every gap with something plausible

### Structured

```text
Role: You are an HIC binder scientist writing
for Loire Plant quality staff.
Task: Write a one-page note on HIC-LC3-24.
Steps: Use only the attached protocol and
results. Sections: Purpose, What the plant
needs, Methods versus results, Open questions.
Example tone: "M12 cleared 42.5 MPa at 28 days.
90-day cubes pending."
```
---
<!-- layout: card-layout -->
# Four Advanced Techniques

### Constraint stacks

- List every limit once, in one block, and paste it at the end of the prompt.

### Multi-file grounding

- Tell Gemini which file owns methods, which owns numbers, and which owns caveats.

### Critique loops

- Make Gemini check its own draft against the sources before anyone else reads it.

### Meta-prompting

- Ask Gemini to improve your prompt and ask you questions before it does the work.
---
# Constraint Stacks

```text
Audience: Loire Plant quality team
Length: one page, 250 words maximum
Units: MPa and days; clinker factor as 0.00
Sources: protocol for methods, results PDF for numbers
Banned: ECOPlanet or ECOPact claims; averages across mixes
If missing: write Not found
```

- Each line closes one door Gemini would otherwise walk through
- When Gemini drifts on a follow-up, paste the stack again. Do not start over with a vague prompt
---
# Multi-File Grounding

```text
Use the three attached PDFs:
- hic-lc3-24-trial-protocol.pdf owns methods
- hic-lc3-24-interim-results.pdf owns numbers
- hic-lc3-24-limitations.pdf owns caveats
For each mix, return a Markdown table:
Mix | Age (days) | Strength (MPa) | Spec (MPa) | Source file
Write Not found in any empty cell. Do not estimate.
```

> [!TIP]
> `Not found` is a valid answer. A made-up megapascal is not. The table makes the gaps visible at a glance.
---
<!-- layout: 3-column -->
# Critique Loops and Audience Rewrites

### 1. Generate

- Draft the trial note with your role, task, and constraint stack
- Keep the source files attached

### 2. Critique

- “Check this draft against the attached files. List every claim with its source file. Mark any claim with no source as INVENTED.”

### 3. Rewrite

- “Rewrite this for an executive in five lines. Same facts. Add nothing.”
- Repeat for a scientist and a plant reader
---

<!-- layout: 2-column -->
# Image Prompts Without Invented Numbers

### Simple prompt

- “Create an infographic about an HIC LC3 trial.”
- The result looks polished
- It invents percentages, charts, and extra logos

### Locked prompt

- Attach the Holcim logo image
- Give the exact text: title, headers, lines, footer
- Add style: palette, layout, aspect ratio
- Ban invented percentages, fake charts, and extra logos

<!-- below-columns -->

> [!WARNING]
> Text inside a generated image can still be misspelled. Proofread every word.
---
# Meta-Prompting: Let Gemini Write the Prompt

```text
I want an infographic for Loire Plant quality staff about
HIC-LC3-24. Before you create any image, rewrite my prompt
to be clearer and more specific. Ask me up to three
questions if something is missing. Then wait for me.
```

- Gemini’s rewrite is usually more specific than your first draft
- Review the rewrite, fix any facts, then run it
- Works for text prompts too. Save the final version as a reusable template
---
<!-- layout: stacked -->
# Lab 1: Advanced Prompt Engineering

**Time:** 30 minutes

[Open Lab 1](https://labv.roitraining.com/?lab=https%3A%2F%2Fgithub.com%2Froitraining%2Fholcim-department-ai-training-labs%2Fblob%2Fmain%2Flabs%2Finnovation-centre%2Flab-01-advanced-prompt-engineering%2Flab.md)

![Bring it to work](images/bring-it-to-work.png)
---
<!-- layout: navigation -->
# Today’s Sections

- Advanced Prompt Engineering
- **Gemini in Gmail**
- Holcim-Style Presentations in Slides
- Trial Data in Sheets, Formulas, and Canvas
- Advanced Gemini Notebook
---
# Gemini in Gmail: The Full Toolkit

| Feature | Where | Use it for |
| :--- | :--- | :--- |
| Summarize | **Ask Gemini** side panel, or **Summarize this email** on a thread | Catch up on a long handover thread |
| Ask about your mail | **Ask Gemini** side panel | “What did the plant ask for last week?” |
| Search Gmail, Chat, and Drive | **Ask Gemini** side panel | Find the protocol, the decision, the file |
| Help me write | Compose window or side panel | Draft a reply, then formalize, elaborate, or shorten it |
| Suggested replies | Bottom of an email you received | Short replies drafted from the whole thread |
| Help me schedule | Bottom of a draft or reply | Offer meeting times that fit everyone’s calendar |
---

<!-- layout: panel-right -->
# Search Gmail, Chat, and Drive

- Ask in plain language: “Find the HIC-LC3-24 protocol and the last Chat decision on silo allocation.”
- Gemini searches the sources that are selected in the panel. Check them before you blame the answer
- Name the file or the thread. “Find my LC3 stuff” returns the wrong PDF
- Chat results depend on your Workspace setup. If Chat returns nothing, open the Drive file from the answer and keep going

![Gmail collaboration](images/gmail-collaboration.png)

---
# Help Me Schedule

- Reply to the thread, or compose with recipients added
- Click **Help me schedule** at the bottom. If you do not see it, open **More options**
- Gemini offers four slots from your calendar and the guests’ calendars you can see
- Adjust the slots with the pencil icon, then click **Send**
- Nothing is booked until a recipient picks a slot

![Help me schedule card in a Gmail draft, showing four suggested meeting times on two days](images/gmail-help-me-schedule-slots.png)


---
<!-- layout: 2-column -->
# Suggested Replies Versus Help Me Write

### Suggested replies

- Gemini detects that a reply is due and offers short drafts at the bottom of the email
- Drafted from the whole thread, not only the last message
- Good for “Received. I will review the protocol by Friday.”
- Read before you send. They state facts with confidence

### Help me write

- You describe the reply: owners, dates, and next steps
- Refine the draft: formalize, elaborate, or shorten
- Good for the handover reply that settles three decisions
- Still yours to check. No number that is not in the thread
---
<!-- layout: 2-column -->
# Discuss: What should always happen before a Suggested Reply in sent?

### Prompt

A plant manager asks whether mix M13 is ready for handover. Gemini offers a one-click reply: “Yes, M13 is on track.”

### Discuss

- What could that reply get wrong?
- Which HIC emails should always be written, not clicked?
- Who is accountable if the reply is wrong?
---
<!-- layout: stacked -->
# Lab 2: Gemini in Gmail

**Time:** 30 minutes

[Open Lab 2](https://labv.roitraining.com/?lab=https%3A%2F%2Fgithub.com%2Froitraining%2Fholcim-department-ai-training-labs%2Fblob%2Fmain%2Flabs%2Finnovation-centre%2Flab-02-gemini-in-gmail%2Flab.md)

![Bring it to work](images/bring-it-to-work.png)
---
<!-- layout: navigation -->
# Today’s Sections

- Advanced Prompt Engineering
- Gemini in Gmail
- **Holcim-Style Presentations in Slides**
- Trial Data in Sheets, Formulas, and Canvas
- Advanced Gemini Notebook
---
<!-- layout: panel-right -->
# How Gemini Builds a Deck

1. Open a new presentation and click **Ask Gemini**
2. Describe the deck. Add files with **Add sources → Add from Drive**
3. Optional: **Match presentation style** with an approved Holcim deck
4. Click **Next** and review the plan: one step per slide
5. Edit, add, or delete steps, then click **Approve**
6. Keep the tab open while Gemini builds the slides

![Slides from documents](images/slides-from-docs.png)
---
<!-- layout: 2-column -->
# Generate From a Doc or a Sheet

### The Doc owns the story

- A project-update template: status, risks, the ask of the review board
- Gives Gemini the slide order and the argument

### The Sheet owns the numbers

- The 28-day results: strength, spec, clinker factor
- Gives Gemini the only figures it may quote

<!-- below-columns -->

> [!IMPORTANT]
> Say which file owns what. Otherwise Gemini mixes them and fills the gaps itself.
---
# A Prompt That Assigns Ownership

```text
Create a six-slide review deck for the HIC innovation board.
Use @HIC-LC3-24 Project Update for slide order and narrative.
Use @HIC-LC3-24 28-day Results for every number.
If a figure is not in those files, leave it off the slide.
Titles state the finding, for example "M12 clears 28-day spec".
```

- Type `@` and the file name to reference a Drive file, or add it with **Add sources**
- The plan is your checkpoint. Delete any step that invents a KPI, a customer, or a plant
---
# Demo: Generate a Six-Slide Review Deck

1. Open a blank presentation and click **Ask Gemini**. No attachments are needed

2. Send this prompt. The project update and the results are pasted in, so they are the only sources:

   ```text
   Create a six-slide review deck for the Holcim Innovation Centre review board.
   Use only the project update and results below. If a figure is not below,
   leave it off the slide. Titles state the finding, for example
   "M12 clears 28-day spec".

   Slides:
   1. Title: HIC-LC3-24 toward Loire Plant handover
   2. Why this trial exists
   3. 28-day results
   4. Risks and open plant items
   5. The ask of the review board
   6. Next 30 days

   PROJECT UPDATE (synthetic training data)
   Project: HIC-LC3-24, low-clinker calcined-clay (LC3) binder
   Target plant: Loire Plant
   Goal: meet the 42.5 MPa 28-day spec (CEM 42.5 class) at a lower
   clinker factor than the CEM I control, and hand over a plant-ready mix card.
   Stage: scale-up. 90-day results are pending for eight mixes.
   This period:
   - Locked the 28-day spec at 42.5 MPa in the trial protocol
   - Flagged mix M13 as below spec at 28 days
   - Opened the plant conversation on calcined-clay silo allocation
   Risks:
   - LC3 water demand is about 8 percent higher than CEM I
   - Loire Plant clay calcination capacity is 80 t/day
   - Calcined clay fineness has varied; the target is 4200 cm2/g Blaine
   Ask of the board: keep M12 in the plant-ready set for Loire?
   Recast or drop M13?
   Next 30 days:
   1. Finish the 90-day cubes
   2. Agree silo allocation and a fineness gate with Loire Plant
   3. Issue mix cards only for mixes that pass 28-day spec and are Plant-ready

   28-DAY RESULTS (spec 42.5 MPa)
   Mix | Binder      | Clinker factor | Strength (MPa) | Result
   M01 | CEM I       | 0.95           | 52.4           | Pass (control)
   M12 | LC3-50      | 0.52           | 44.8           | Pass
   M13 | LC3-50      | 0.50           | 41.2           | Fail
   M21 | LC3-35      | 0.65           | 47.1           | Pass

   Rules: label 90-day work as pending. Do not mention ECOPlanet or ECOPact.
   Do not add customers, tonnages, or other plants. Do not average mixes.
   ```

3. Click **Next** and stop at the plan. Show the room its steps and sources

4. Delete or fix one step that does not belong, then click **Approve**

5. When the deck is done, check the figures on the results slide against the table in the prompt. Look for an invented 90-day number or an averaged KPI
---
<!-- layout: panel-left -->
# Edit Slides With Reference Materials

- After the first draft, stay in the same Gemini chat
- Attach the results Sheet and the brand-constraints file
- Say **edit**, not create: “Edit slides 3 and 4 using these files. Do not add slides.”
- Fix one slide at a time and name the slide number
- Ask Gemini to replace or edit an image when the picture is wrong

![Slides from documents](images/slides-from-docs.png)
---
<!-- layout: 2-column -->
# Holcim-Style Constraints

### Look

- White background, navy text
- Blue and green accents from the Holcim logo
- Logo in a corner, clear of the title
- No more than four bullets per slide

### Content

- Quote a figure only if it is in the attached files
- Label targets as targets, not results
- Label pending 90-day results as pending
- No invented plants, customers, or tonnages

<!-- below-columns -->

> [!TIP]
> The fastest route to the Holcim look is **Match presentation style** with an approved Holcim template. Prompts then only fix the exceptions.
---
<!-- layout: stacked -->
# Lab 3: Holcim-Style Presentations From Docs and Sheets

**Time:** 30 minutes

[Open Lab 3](https://labv.roitraining.com/?lab=https%3A%2F%2Fgithub.com%2Froitraining%2Fholcim-department-ai-training-labs%2Fblob%2Fmain%2Flabs%2Finnovation-centre%2Flab-03-presentations-from-docs-and-sheets%2Flab.md)

![Bring it to work](images/bring-it-to-work.png)
---
<!-- layout: navigation -->
# Today’s Sections

- Advanced Prompt Engineering
- Gemini in Gmail
- Holcim-Style Presentations in Slides
- **Trial Data in Sheets, Formulas, and Canvas**
- Advanced Gemini Notebook
---
# Gemini in Sheets: Six Jobs

| Job | How | Check |
| :--- | :--- | :--- |
| Import | **File → Import** a CSV from Drive or your computer | Row and column counts match the file |
| Auto-format | Ask Gemini for headers, number formats, filters, and conditional formatting | No rows added, deleted, or reordered |
| Analyze | One scoped question per prompt | Every Mix_ID it names is in the sheet |
| Formulas | Ask for a real formula in a named column | Which rows and ages it judges |
| Search documents | Ask Gemini to find a Drive file from the side panel | Definitions are quoted, not paraphrased |
| Canvas dashboard | **Insert → Create a canvas** | It shows only what the tab contains |
---
<!-- layout: 2-column -->
# Import and Auto-Format

### Import

- **File → Import**, choose the CSV, then **Insert new sheet(s)**
- Check the shape: about 100 rows and 12 columns, headers in row 1
- Class files only. No live LIMS extracts in this room

### Format with one prompt

```text
Format this sheet for analysis: freeze and
bold the header row, auto-size columns,
2 decimals for Clinker_Factor, 1 decimal
for the strength columns, turn on filters.
Do not add or delete rows.
```
---
<!-- layout: 2-column -->
# Analyze One Question at a Time

### Vague

- “Analyze this data.”
- You get a generic essay about LC3
- Nothing you can check against a row

### Scoped

- “Among rows where Age_days is 28, compare average strength for LC3-50 and CEM I. Use only this sheet.”
- Names the ages, the families, and the source
- Every number traces back to rows you can filter

<!-- below-columns -->

> [!WARNING]
> If Gemini names a mix you do not recognize, reply: “Use only rows in this sheet. Quote the Mix_ID values you used.”
---
# Formulas Gemini Writes

The prompt:

```text
In column M, add Pass_vs_Spec: Yes if Compressive_Strength_MPa
is at least Spec_Strength_MPa, otherwise No. Use a real formula
and fill it down.
```

What Gemini typically writes in M2:

```text
=IF(I2>=J2,"Yes","No")
```

- The formula goes in the cells, not only in the chat. You can read it, and it updates when the data changes
---
# Do Now: Find the Bug

1. Read the formula Gemini wrote for Pass_vs_Spec (F is Age_days, I is strength, J is spec):

   ```text
   =IF(I2>=J2,"Yes","No")
   ```

2. Work out what it shows for each row below

3. Apply the glossary rule: the 42.5 MPa spec applies at **28 days only**. Which result is wrong?

| Mix_ID | Age_days | Strength (MPa) | Spec (MPa) |
| :--- | :--- | :--- | :--- |
| M12 | 28 | 44.8 | 42.5 |
| M13 | 28 | 41.2 | 42.5 |
| M12 | 7 | 31.4 | 42.5 |
---
# The Fix: Tell Gemini Which Rows Count

```text
=IF(F2<>28,"n/a",IF(I2>=J2,"Yes","No"))
```

- The first formula was valid syntax with the wrong logic. Sheets will not warn you
- Put the rule in the prompt: “Judge only rows where Age_days is 28. Write n/a for other ages.”
- Spot-check three rows by hand: one pass, one fail, and one row that is not 28-day

> [!IMPORTANT]
> A wrong formula feeds a confident dashboard. Check the column before you build on it.
---
<!-- layout: panel-right -->
# Search Documents From the Side Panel

- Definitions live in Drive, not in the CSV
- Ask: “Search Drive for hic-trial-glossary. Quote the definition of Handover ready.”
- If search misses, add the file: **Add sources → Add from Drive**
- Then test the data: “Which Mix_ID values break that definition?”

![Working in Sheets](images/sheets-1.png)
---
<!-- layout: 2-column -->
# Chart or Canvas?

### Chart

- One view of the data, inserted in the grid
- Good for a single trend or comparison
- Pasted into Slides, it becomes a snapshot

### Canvas

- An interactive dashboard Gemini builds from one tab
- Scorecards, filters, and lists in one view
- Stays synced: change the tab, and the canvas updates
- Refined with follow-up prompts, not rebuilt
---
<!-- layout: panel-right -->
# Build a Canvas Dashboard

- Click the tab that holds the data. A canvas reads one tab
- Click **Insert → Create a canvas**, or **Create canvas** in the Gemini side panel
- Describe it: pass rate by binder family, a filter by Mix_ID, a handover-ready list
- Refine with follow-ups, then recheck the whole canvas. One change can move another element

> [!NOTE]
> Canvas is newer than the rest of Gemini in Sheets. It needs a desktop browser, English, and an eligible account. If it is missing, build a chart and label it a snapshot.

![Canvas dashboard](images/canvas-dashboard-metaphor.png)
---
# Demo: Build the Handover Dashboard

1. Open the formatted trial tab, with Pass_vs_Spec fixed to judge 28-day rows only

2. Click **Insert → Create a canvas** and send:

   ```text
   Build a plant handover dashboard: 28-day pass rate by Binder_Family, a filter by Binder_Family, and a list of Mix_ID values where Handover_Ready is Yes.
   ```

3. Change one Handover_Ready cell in the tab, return to the canvas, and show the room that it updated

4. Send one refinement, then check that nothing else moved:

   ```text
   Make the pass-rate scorecards larger. Change nothing else.
   ```
---
<!-- layout: stacked -->
# Lab 4: Analyzing Trial Data With Sheets and Gemini

**Time:** 45 minutes

[Open Lab 4](https://labv.roitraining.com/?lab=https%3A%2F%2Fgithub.com%2Froitraining%2Fholcim-department-ai-training-labs%2Fblob%2Fmain%2Flabs%2Finnovation-centre%2Flab-04-analyzing-trial-data-with-sheets-and-gemini%2Flab.md)

![Bring it to work](images/bring-it-to-work.png)
---
<!-- layout: navigation -->
# Today’s Sections

- Advanced Prompt Engineering
- Gemini in Gmail
- Holcim-Style Presentations in Slides
- Trial Data in Sheets, Formulas, and Canvas
- **Advanced Gemini Notebook**
---
<!-- layout: panel-right -->
# Gemini Notebook 

- A notebook is a set of sources plus a chat that answers only from them
- Every answer carries citations. Click one to see the exact passage
- HIC uses: innovation reviews, plant handover, literature plus trial notes
- Sources on the left, chat in the middle, Studio on the right

![Gemini Notebook](images/notebook.png)
---
# Advanced Use Case: The Innovation Review Pack

| Step | Move | Why it matters |
| :--- | :--- | :--- |
| 1 | Add five HIC sources: trial brief, literature excerpt, handover note, glossary, review agenda | The notebook knows your trial, not the internet |
| 2 | Add web sources on LC3 and calcined clay. Keep only the ones you would cite | Outside evidence, chosen on purpose |
| 3 | Ask decision questions, not “summarize” | Answers to what the board will ask |
| 4 | Save strong answers as notes. Convert the notes to sources | Reviewed answers become ground truth |
| 5 | Deselect the web sources, then generate a Report, an Infographic, and a Slide Deck | Only HIC-owned facts leave the room |
| 6 | Generate an Audio Overview or a Quiz to rehearse | The same sources, reused for prep |
---

<!-- layout: 2-column -->
# Ask Sharp Questions

### Weak

- “Summarize these files.”
- “What is LC3?”
- “Make a report.”

### Sharp

- “Which mixes meet 28-day spec, and which source says so?”
- “What does Loire Plant still need before handover?”
- “Where does the literature disagree with our trial? Cite both.”
---
<!-- layout: panel-left -->
# Studio Outputs

- **Report**, **Infographic**, and **Slide Deck** make the review pack
- **Audio Overview**, **Mind Map**, or **Quiz** help a colleague rehearse
- Each output uses the sources selected when you click it
- Generation takes minutes. Start the next output while one runs

![Notebook Studio](images/notebook-studio.png)
---
<!-- layout: 2-column -->
# Discuss: When Sources Disagree

### Prompt

Suppose a web paper reports a higher 28-day strength for LC3-50 than your trial brief does.

### Discuss

- Which number goes in the board Report?
- Should the web source stay selected for Studio?
- How do you show the disagreement honestly?
---
<!-- layout: stacked -->
# Lab 5: Advanced Binder Trial Briefing With Gemini Notebook

**Time:** 30 minutes

[Open Lab 5](https://labv.roitraining.com/?lab=https%3A%2F%2Fgithub.com%2Froitraining%2Fholcim-department-ai-training-labs%2Fblob%2Fmain%2Flabs%2Finnovation-centre%2Flab-05-advanced-binder-trial-briefing-with-gemini-notebook%2Flab.md)

![Bring it to work](images/bring-it-to-work.png)
---
# What You Can Reuse Tomorrow

| Tool | First move on Monday |
| :--- | :--- |
| Prompting | Save your constraint stack as a template |
| Gmail | Summarize your longest thread, then use Help me schedule for the follow-up |
| Slides | Generate your next review deck from its Doc, with Match presentation style |
| Sheets | Ask Gemini for one formula, then check three rows by hand |
| Gemini Notebook | Build one notebook for your next innovation review |
---
# What You Learned

- Used Gemini across everyday Holcim Innovation Centre work
- Wrote advanced prompts grounded in trial files, with no invented results
- Summarized, searched, scheduled, and replied with Gemini in Gmail
- Generated and edited Holcim-style decks from Docs and Sheets
- Analyzed trial data in Sheets and built a Canvas dashboard
- Built an advanced briefing pack in Gemini Notebook
---
# Quiz 1 of 3

**A Gemini trial note says mix M12 reached 51.4 MPa at 28 days. The attached results file says 44.8 MPa. What should you do?**

- A. Keep 51.4 MPa, because Gemini may have averaged similar mixes
- B. Keep 51.4 MPa if it is typical for LC3 mixes
- C. Replace it with 44.8 MPa and run a critique pass on the rest of the note
- D. Remove every number from the note so nobody can check it
---
# Quiz 1: Answer

**A Gemini trial note says mix M12 reached 51.4 MPa at 28 days. The attached results file says 44.8 MPa. What should you do?**

**Correct: C.** Replace it with 44.8 MPa and run a critique pass on the rest of the note

- The source file owns the numbers. “Typical” is not evidence
- One invented number means there may be others. The critique pass finds them
- Removing every number hides the problem instead of fixing it
---
# Quiz 2 of 3

**Gemini wrote `=IF(I2>=J2,"Yes","No")` for Pass_vs_Spec. Most 7-day rows now show No. What is the best next step?**

- A. Delete the 7-day rows so the column looks right
- B. Accept it, because 7-day strength is below the 42.5 MPa spec
- C. Tell Gemini to judge only 28-day rows against spec, then spot-check three rows
- D. Replace the formula with a chart of strength by age
---
# Quiz 2: Answer

**Gemini wrote `=IF(I2>=J2,"Yes","No")` for Pass_vs_Spec. Most 7-day rows now show No. What is the best next step?**

**Correct: C.** Tell Gemini to judge only 28-day rows against spec, then spot-check three rows

- The 42.5 MPa spec applies at 28 days only, so a 7-day “No” is not a failure
- Deleting rows throws away trial data that the 7-day trend needs
- A chart does not fix the logic. A Canvas built on this column would repeat the error
---
<!-- layout: 2-column -->
# Quiz 3 of 3: Discussion

### Prompt

Your director wants an innovation review pack on HIC-LC3-24 by tomorrow morning.

### Discuss

- Which of today’s tools would you chain together, and in what order?
- Where must a person check before anything moves on?
- What would you never let Gemini send or publish for you?
---
<!-- layout: 2-column -->
# Quiz 3: Discussion Points

**Your director wants an innovation review pack on HIC-LC3-24 by tomorrow morning.**

### Strong Answers Mention

- Gemini Notebook for cited answers, then Slides generated from the Doc and the results Sheet
- A check of the plan before approving the deck
- Every figure checked against the Sheet
- Help me schedule for a dry run with the trial lead

### Watch For

- Generating the deck with web sources still selected
- Approving the plan without reading it
- A suggested reply used for a technical answer
- “Gemini checked it, so it is right”
---
<!-- layout: stacked -->
# Questions and Answers

![Questions and Answers](images/qa.png)
