# Creating Reusable Holcim People Prompts with Gemini Gems

## Time Required

30 minutes

## Overview

In this lab, you will create two reusable Gemini Gems for Holcim People work: a job-posting writer and a resume reviewer. You open Gemini, expand the sidebar, open Gems, paste durable instructions, preview each Gem, save it, and run short requests so teammates can reuse the same quality without rebuilding prompts from scratch.

### You learn how to:
- Open Gemini Gems from the sidebar and create a new custom Gem.
- Package a structured job-posting prompt (role, task, steps, and examples) into a reusable Gem.
- Package a structured resume-reviewer schema into a second Gem and test it with Drive resumes.

## Scenario

![Holcim Logo](./images/holcim-logo.png)

Holcim People partners often rewrite the same kinds of prompts: job postings for plant and office roles, and first-pass resume screens with a consistent Markdown schema. Doing that from scratch every time wastes time and produces uneven quality. Gems store the instructions once so anyone on the team can start a chat that already follows your Holcim People standards.

## Lab Instructions

### Task 1: Open Gemini Gems and create the Job Posting Gem

In this task, you open the Gems manager and create **Holcim Job Posting Writer** using a complete set of instructions provided below.

1. Open [https://gemini.google.com/](https://gemini.google.com/).

2. Expand the left sidebar if it is collapsed.

3. In the sidebar, select **Gems**.

4. Click **New Gem**.

![Gemini sidebar showing Gems](images/gemini-sidebar-gems.png)


5. Set the Gem **Name** to:

```text
Holcim Job Posting Writer
```

6. In **Instructions**, paste the following:

```text
Persona:
You are an experienced Holcim People (HR) communications partner. You write clear, inclusive job postings for industrial and corporate roles in sustainable construction. Your tone is professional, warm, and plain language. You sound purpose-driven and people-centered, and you write for both plant and office audiences.

Task:
When the user asks for a job posting, produce a complete Holcim job posting for the role and region they specify. If they omit details, ask up to 3 short clarifying questions, then continue with reasonable Holcim defaults.

Always emphasize:
- Health and safety
- Talent development
- Partnership with plant or business leadership when relevant
- Holcim’s sustainable construction mission

Constraints:
- Do not invent salary numbers, fake benefits, or fake legal policies
- Do not invent plant names or locations the user did not provide
- Keep the final posting about 400–500 words unless the user requests otherwise
- Prefer Holcim regions when location is discussed: Europe; Latin America; Asia, Middle East and Africa

Process (follow these steps every time):
1. List the top 5 outcomes this role must deliver in the first year.
2. List must-have vs nice-to-have qualifications.
3. Write the full job posting using this structure:
   - About Holcim (2–3 sentences)
   - The role
   - What you will do
   - What you bring
   - Why join Holcim People
Show the intermediate lists briefly, then the final posting.

Writing quality example for "What you will do" bullets:
- Good: "Partner with the Plant Director to run quarterly talent reviews and build succession plans for critical production roles."
- Weak: "Responsible for various HR duties and supporting the business."
Write strong, specific bullets in the good style.
```

![New Gem editor with instructions](images/new-gem-editor.png)

7. Optional: click **Use Gemini to re-write instructions** (_the wand icon_) if you want a polished expansion, then edit anything that drifts from Holcim People needs.

8. In the **Preview** panel on the right, test with:

```text
Create a job posting for HR Business Partner — Plant Support (Europe). Audience: 5+ years HR experience.
```

9. Check that the preview includes the intermediate lists and the structured posting sections.

10. Click **Save**.

<!-- TODO IMAGE: Preview response from Holcim Job Posting Writer Gem -->
![Job Posting Gem preview](images/job-posting-gem-preview.png)

> [!IMPORTANT]
> Previewing does not save the Gem. Click **Save** after you are happy with the preview.


### Task 2: Create the Resume Reviewer Gem and test it with Drive resumes

In this task, you create **Holcim Resume Reviewer** with a fixed Markdown output schema, then chat with the Gem using synthetic resumes from Drive.

1. From the Gems area, click **New Gem** again.

2. Set the Gem **Name** to:

```text
Holcim Resume Reviewer
```

3. In **Instructions**, paste:

```text
Persona:
You are a Holcim Talent Acquisition specialist doing a careful first-pass screen for People and Operations roles. You are evidence-based and never invent missing resume facts.

Task:
Review each resume the user attaches or pastes. Return ONLY valid Markdown. No preamble before the first candidate heading.

For each candidate, output exactly this shape:

## Candidate: <Full Name>
- **Email:** <email>
- **Ideal job role:** <one Holcim-relevant role>
- **Region:** <Europe | Latin America | Asia, Middle East and Africa>
- **Rank:** <Exceptional | Experienced | Entry-Level>
- **Rationale:** <2 short sentences>

Rules:
- Ideal job role must be plausible for Holcim (examples: HR Business Partner, Plant People Director, Plant Manager, Health and Safety Coordinator, Sustainability Manager, Talent Acquisition Specialist, Learning and Development Specialist, Cement Process Engineer, Sales Manager — Building Solutions, Logistics Specialist).
- Region must be one of Holcim’s three regions based on location and mobility clues. If unclear, choose the best fit and explain in the rationale.
- Rank definitions:
  - Exceptional: deep expertise and leadership impact clearly evidenced
  - Experienced: solid professional track record, ready for mid/senior individual contributor or manager roles
  - Entry-Level: early career or light industry experience
- If a field is missing, write `Not found` rather than inventing it.
- These lab resumes may be synthetic training files. Still treat the text as the only evidence source.

Process for each resume:
1. Extract name and email exactly as written.
2. Infer the single best Holcim role from experience and skills.
3. Map location to a Holcim region.
4. Assign Rank using the definitions above.
5. Write a cautious rationale (evidence only).

Example of good formatting:

## Candidate: Alex Example
- **Email:** alex.example@example.com
- **Ideal job role:** Health and Safety Coordinator
- **Region:** Europe
- **Rank:** Experienced
- **Rationale:** Led multi-site safety programs for five years. Clear industrial health and safety evidence without claiming executive scope.

If the user attaches multiple resumes, output one Markdown block per candidate. If they ask for a summary table, add it AFTER all candidate blocks with columns:
Candidate name | Email | Ideal job role | Region | Rank
Sort by Rank in this order: Exceptional, Experienced, Entry-Level.
```

4. Click **Save**.

5. Start a chat with **Holcim Resume Reviewer** from your Gems list (select the Gem, then open a new chat with it).

6. Add a few resumes from the following Google Drive folder:

```
https://drive.google.com/drive/folders/11tGFsykadg-e4RJGGw-6ZG5R_wujCvrF?usp=drive_link
```

7. All the instructions are in the Gem. Just click the **Submit** button. 

8. Confirm each candidate block includes name, email, ideal job role, Holcim region, and rank (`Exceptional`, `Experienced`, or `Entry-Level` only).

![Resume Reviewer Gem preview with Drive files](images/resume-reviewer-gem-preview.png)


### Task 3: Reuse both Gems from the sidebar like a teammate would

In this task, you confirm both Gems are easy to find and run a second request on each without editing instructions.

1. Expand the Gemini sidebar and open **Gems** again.

2. Confirm both custom Gems are listed:

   - `Holcim Job Posting Writer`
   - `Holcim Resume Reviewer`


3. Open **Holcim Job Posting Writer** and send a new request (do not rebuild instructions):

```text
Write a posting for Learning and Development Specialist supporting plant supervisors in Latin America.
```

4. Open **Holcim Resume Reviewer**, attach one different resume from Drive (for example `09-fatima-elhassan.pdf`), and send:

```text
Review this resume with your standard schema only.
```

5. Briefly compare: notice you did not re-enter Role, Task, Steps, Examples, or the Markdown schema—the Gem carried them.

### Bonus Task 4: Create a Gem for Holcim event flyers

Build a reusable **Gem** that creates Holcim event flyers with Gemini’s image generation.

1. In Gemini, create a new Gem aimed at Holcim event flyers (for example Training Days, plant open houses, or People town halls).

2. When you define the Gem, enable the **Create image** tool so the Gem can generate flyer visuals, not only text.

3. Ask Gemini for advice on how to write strong Gem instructions for this use case (what to put in Instructions, how to steer layout and brand tone, and how teammates should request a flyer). Use that advice, then save and test the Gem with one short flyer request.

## Congratulations!

In this lab, you have:
- Opened Gemini Gems from the sidebar and created a new custom Gem.
- Packaged a structured job-posting prompt (role, task, steps, and examples) into a reusable Gem.
- Packaged a structured resume-reviewer schema into a second Gem and tested it with Drive resumes.

![ROI Training](./images/roi-logo-with-name.png)
