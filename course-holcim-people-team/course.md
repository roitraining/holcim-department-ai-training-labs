<!-- course-title: AI for the Holcim People Team -->

<!-- layout: full-bleed -->
![ROI Logo](images/title-slide.png)

---


# Welcome!

- ROI leads the industry in designing and delivering customized technology and management training solutions
- Meet your instructor
  - Name
  - Background
  - Contact info
- Let's get started!

![Welcome](images/welcome.png)

---

# Course Objectives

- Apply Gemini across everyday Holcim People Team workflows: prompting, spreadsheets, reusable assistants, and grounded research
- Engineer structured prompts that produce Holcim-ready job postings, resume screens, and event flyers
- Use Gemini in Sheets to format, filter, and chart People Team workforce data
- Package reusable prompts into Gemini Gems for repeatable People Team workflows
- Build a Gemini Notebook research pack for a grounded People Team briefing
- Apply what you learned to a real People Team use case you bring to work

---

# Agenda

- Prompt Engineering
- Analyzing Data in Sheets with Gemini
- Build Reusable Prompts
- Gemini Notebook
- Bring Your Own Use Case

![Agenda](images/agenda.png)

---

# Who Should Attend

- Holcim People Team business partners and generalists
- Talent acquisition and recruiting specialists
- People analytics, reporting, and workforce planning staff
- People Team leaders who want practical, everyday Gemini skills

![Who Should Attend](images/who-should-attend.png)

---

# Prerequisites

- A Google account with access to Gemini, Sheets, and Gemini Notebook (NotebookLM)
- Basic familiarity with Google Sheets and Google Drive
- No prior AI or scripting experience required

![Prerequisites](images/prerequisites.png)

---

<!-- layout: stacked -->
# Five Skills, One Afternoon

- Five short sections, each pairs a concept with a hands-on lab
- Same Holcim People Team scenarios throughout: hiring, workforce data, meeting prep
- Every exercise uses synthetic or anonymized data: safe to explore
- By the end, you leave with techniques and artifacts you can reuse Monday

![Holcim People Team collaborating with Gemini](images/five-skills-hero.png)

---

<!-- layout: navigation -->
# Today's Sections

- **Prompt Engineering**
- Analyzing Data in Sheets with Gemini
- Build Reusable Prompts
- Gemini Notebook
- Bring Your Own Use Case

---

# Why Prompting Is a Skill

- A vague ask gets a vague answer: "write a job posting" returns something generic and un-Holcim
- Prompting is a craft you build in layers, not one perfect sentence
- Each layer narrows what "good" means before the model writes anything
- The payoff: output a recruiter or hiring manager can actually use

![Prompting is a skill](images/prompting.png)

---
<!-- layout: stacked -->
# The "Role-Task-Steps-Examples" Framework

![Prompt engineering framework: Role, Task, Steps, Examples](images/prompt-framework.svg)

---

<!-- layout: 2-column -->
# From Generic to Specific

### Generic prompt
- "Write a job posting for HR Business Partner"
- No audience, no region, no tone
- Reads like it could be any company
- You edit almost every line

### Structured prompt
- Role + Task + Steps + Examples, one chat
- Names the region, audience, word count
- Emphasizes safety, development, sustainability
- You edit a few lines, not the whole draft

---

# Lab 1: Prompt Engineering Mastery

**Time:** 30 minutes

[Open Lab 1](https://labv.roitraining.com/?lab=https%3A%2F%2Fgithub.com%2Froitraining%2Fholcim-department-ai-training-labs%2Fblob%2Fmain%2Flabs%2Fpeople%2Flab-01-prompt-engineering-mastery%2Flab.md)

---

<!-- layout: navigation -->
# Today's Sections

- Prompt Engineering
- **Analyzing Data in Sheets with Gemini**
- Build Reusable Prompts
- Gemini Notebook
- Bring Your Own Use Case

---

# AI Meets Your Spreadsheets

- Ask Gemini in Sheets for what you want, in plain language: no formulas required
- Format tables, add header filters, apply conditional formatting, insert charts
- Gemini proposes the change; you review and apply it
- Great for People Team analysts who know the data but not every Sheets function

![Chat with AI in Sheets](images/sheets-1.png)

---

# Big Data, Small Working Set

- Holcim's workforce extract runs about 100,000 rows across 25 columns
- Gemini in Sheets performs best on smaller, clean tables
- The lab samples **500 rows** into a `LabWorkingSet` and freezes it with Paste Special
- `WorkforceRaw` stays untouched as the full source of record

> [!IMPORTANT]
> Never ask Gemini to reformat an entire 100,000-row sheet in one prompt. Work from the sampled set.

---

<!-- layout: stacked -->
# From Data to Decisions


![Workforce data pipeline: WorkforceRaw to LabWorkingSet to Gemini in Sheets to Apps Script](images/data-pipeline.svg)

---

# Lab 2: Analyzing Data with Sheets and Gemini

**Time:** 30 minutes

[Open Lab 2](https://labv.roitraining.com/?lab=https%3A%2F%2Fgithub.com%2Froitraining%2Fholcim-department-ai-training-labs%2Fblob%2Fmain%2Flabs%2Fpeople%2Flab-02-analyzing-data-with-sheets-and-gemini%2Flab.md)

---

<!-- layout: navigation -->
# Today's Sections

- Prompt Engineering
- Analyzing Data in Sheets with Gemini
- **Build Reusable Prompts**
- Gemini Notebook
- Bring Your Own Use Case

---

# Stop Rewriting the Same Prompt

- Great prompts don't survive the next new chat: Role, Task, Steps, and Examples get retyped from memory
- Different teammates end up with different quality and different formats
- A resume screen should look the same whether you or a colleague ran it
- Gems save the instructions once, so everyone starts from the same standard

![Stop rewriting the same prompt](images/prompt-frustration.png)

---

<!-- layout: stacked -->
# What's a Gem

- A Gem is a saved Gemini assistant: instructions live in the Gem, not in your head
- Preview before you save; edit anytime the standard changes

![Anatomy of a Gem: Persona, Task, Constraints, Process, Examples](images/gem-anatomy.svg)

---

<!-- layout: 2-column -->
# Gems Your Team Can Reuse

### Holcim Job Posting Writer
- Persona: Holcim People Team comms partner
- Always covers safety, development, mission
- Outputs the same five-section structure every time

### Holcim Resume Reviewer
- Persona: Talent Acquisition specialist
- Fixed Markdown schema: role, region, rank, rationale
- Never invents a missing fact: writes "Not found"

---

# Lab 3: Creating Reusable Prompts with Gems

**Time:** 30 minutes

[Open Lab 3](https://labv.roitraining.com/?lab=https%3A%2F%2Fgithub.com%2Froitraining%2Fholcim-department-ai-training-labs%2Fblob%2Fmain%2Flabs%2Fpeople%2Flab-03-creating-reusable-prompts-with-gems%2Flab.md)

---

<!-- layout: navigation -->
# Today's Sections

- Prompt Engineering
- Analyzing Data in Sheets with Gemini
- Build Reusable Prompts
- **Gemini Notebook**
- Bring Your Own Use Case

---

# Gemini Notebook

![Gemini Notebook](images/notebook.png)

---

# From Chat to Grounded Research

- A regular chat can drift or invent details - a Notebook cannot leave its sources
- You choose what goes in: internal guidelines, snapshots, and web research
- Every answer traces back to a source you selected
- Built for a briefing you have to defend in the room

---

<!-- layout: stacked -->
# Sources In, Insights Out

![Gemini Notebook flow: sources to chat to Studio outputs](images/notebook-flow.svg)

---

# Ask Sharper Questions

- Ask for talking points structured the way you'll speak them: situation, context, risk, ask
- Ask for **gotcha questions** leadership might raise, with a source-grounded answer for each
- If sources don't fully answer a question, the Notebook says so: it does not invent data
- Save the strongest answers as notes; convert them into Studio sources

![Using Gemini Notebook](./images/using-notebook.png)

---

# Gemini Notebook Studio

- Save chat respnses as notes
- Create polished assets
  - Slide presentations
  - Infographics
  - Audio summaries
  - Reports
  - and more...

![Gemini Notebook Studio](images/notebook-studio.png)

---


# Lab 4: Labor Market Briefings with Gemini Notebook

**Time:** 30 minutes

[Open Lab 4](https://labv.roitraining.com/?lab=https%3A%2F%2Fgithub.com%2Froitraining%2Fholcim-department-ai-training-labs%2Fblob%2Fmain%2Flabs%2Fpeople%2Flab-04-labor-market-briefings-with-gemini-notebook%2Flab.md)

---

<!-- layout: navigation -->
# Today's Sections

- Prompt Engineering
- Analyzing Data in Sheets with Gemini
- Build Reusable Prompts
- Gemini Notebook
- **Bring Your Own Use Case**

---

# Make It Stick

- Training sticks when it hits Monday morning work: not a scripted scenario
- Pick one real People Team task: hiring, screening, workforce insight, or a briefing
- Apply at least two techniques from the last four sections
- Leave with something a colleague could actually review

![Applying an AI-drafted artifact to real People Team work](images/bring-it-to-work.png)

---

<!-- layout: stacked -->
# Four Tools, One Toolkit

![Four tools converging on your use case: Prompt Engineering, Sheets and Gemini, Gems, Gemini Notebook](images/toolkit-recap.svg)

---

# Keep Data Safe

- Every exercise today used synthetic or anonymized data: carry that habit forward
- Do not paste confidential employee data, applicant PII, medical information, or performance ratings into public AI tools
- When the ideal input is confidential, substitute a sanitized or synthetic version
- When in doubt, ask before you paste

> [!WARNING]
> Real Holcim employee and applicant data does not belong in a public AI chat. Anonymize or use a synthetic sample.

---

# Lab 5: Bring Your Own Use Case

**Time:** 20 minutes

[Open Lab 5](https://labv.roitraining.com/?lab=https%3A%2F%2Fgithub.com%2Froitraining%2Fholcim-department-ai-training-labs%2Fblob%2Fmain%2Flabs%2Fpeople%2Flab-05-bring-your-own-use-case%2Flab.md)

---

# What You Learned

- Engineered structured Gemini prompts using Role, Task, Steps, and Examples
- Used Gemini in Sheets to format, filter, and chart Holcim People Team data
- Packaged a reusable prompt into a Gemini Gem
- Built a Gemini Notebook briefing grounded in real and synthetic sources
- Applied these techniques to a Holcim People Team use case of your own

---

# Quiz 1 of 3

**Why is a Gemini Gem more useful than retyping your prompt every time for the Holcim People Team?**

- A. It runs faster than a normal Gemini chat
- B. It saves the Role, Task, Steps, and Examples once so anyone on the team gets the same quality without rebuilding the prompt
- C. It automatically emails the output to People Team leadership
- D. It removes the need to review AI output before using it

---

# Quiz 1 - Answer

**Why is a Gemini Gem more useful than retyping your prompt every time for the Holcim People Team?**

**Correct: B.** It saves the Role, Task, Steps, and Examples once so anyone on the team gets the same quality without rebuilding the prompt

- Gems store durable instructions, not just a one-off message
- Teammates get consistent quality without knowing the underlying prompt craft
- You still preview and review output - a Gem does not remove that step
- Speed is a side effect, not the main reason to build one

---

# Quiz 2 of 3

**In Lab 2, why does the course have you build a 500-row `LabWorkingSet` instead of asking Gemini to act on the full ~100,000-row `WorkforceRaw` sheet?**

- A. `WorkforceRaw` is read-only
- B. Gemini in Sheets performs best on smaller, clean tables, well under Google's guidance of about 1 million cells
- C. Apps Script cannot read more than 500 rows
- D. FTE totals only calculate correctly below 500 rows

---

# Quiz 2 - Answer

**In Lab 2, why does the course have you build a 500-row `LabWorkingSet` instead of asking Gemini to act on the full ~100,000-row `WorkforceRaw` sheet?**

**Correct: B.** Gemini in Sheets performs best on smaller, clean tables, well under Google's guidance of about 1 million cells

- A 100,000-row, 25-column sheet is well over 2 million cells
- Sampling and freezing the set keeps Gemini prompts fast and reliable
- `WorkforceRaw` still exists as the full source of record
- Apps Script and formulas can still reach the full sheet when needed

---

<!-- layout: 2-column -->
# Quiz 3 of 3 - Discussion

### Prompt
You have one real People Team task you handle every week or month: hiring, screening, a workforce report, or a leadership briefing.

### Discuss
- Which tool from today fits that task best, and why?
- What data would you need to sanitize or synthesize first?
- Who else on the team would reuse it if you built it once?

---

<!-- layout: 2-column -->
# Quiz 3 - Discussion Points

**Which tool fits your recurring People Team task, and who else would reuse it?**

### Strong Answers Mention
- A specific, recurring task - not a vague "AI will help somewhere"
- A tool matched to the task's shape (one-off vs. repeatable vs. data-heavy vs. research-heavy)
- A concrete plan to keep any real employee or applicant data safe

### Watch For
- Ambition without a named artifact or owner
- Confidential data mentioned without a sanitization plan
- No teammate identified who would actually reuse the result

---

<!-- layout: stacked -->
# Questions and Answers

![Questions and Answers](images/qa.png)
