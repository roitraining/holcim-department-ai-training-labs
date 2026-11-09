# Innovation Centre Lab Review

**Date:** 2026-11-09
**Scope:** `labs/innovation-centre/lab-01` to `lab-05`, read against `course-holcim-innovation-centre/course.md`, the lab assets, and `shared/lab-markdown-rules.md`
**Method:** desk review. The labs were not run in a live Workspace tenant, so UI labels are checked against current Google docs where noted and marked unverified otherwise. No lab files were edited.

## Summary

| Lab | Verdict | Biggest problem |
| :--- | :--- | :--- |
| 1 Advanced Prompt Engineering | Fix before class | Task 1 never attaches the PDFs, so the Task 4 critique has nothing to check against |
| 2 Gemini in Gmail | Fix before class | A self-sent, one-message thread probably will not trigger suggested replies or a useful summary |
| 3 Presentations from Docs and Sheets | Minor fixes | A checklist example title (“LC3-50 clears 28-day spec”) is false for M13 |
| 4 Trial Data in Sheets | Fix before class | The lab writes the buggy Pass_vs_Spec formula the slides teach you to fix, and never fixes it |
| 5 Gemini Notebook Briefing | Fix before class | Task 3 step 6 asks chat to review notes before they are sources; a malformed table row in the trial brief |

Structure is mostly good: headings, tasks, alerts, and fences follow the rules, with no em-dashes or ampersands. Every image path resolves, but 19 of them are “TODO IMAGE” placeholder boxes.

---

## Cross-lab issues

| ID | Issue | Fix |
| :--- | :--- | :--- |
| X-1 | **Holcim color inconsistent.** The slides and `hic-lc3-brand-constraints.md` say white, navy, and blue and green from the logo. Lab 1 Task 3 step 6 and Lab 5 Task 4 step 4 say “Holcim red”. Lab 4 says “navy and sand”. The current Holcim logo is not red. | Use one palette everywhere: navy, Holcim blue and green, white, and optional warm sand. |
| X-2 | **90-day data contradicts itself.** The Lab 1 results PDF and the Lab 5 brief say 90-day cubes for M13 and M18 are pending. The Lab 3 Doc says “pending for eight mixes”. The Lab 4 CSV has 90-day values for all 25 mixes (M13 = 44.5 MPa, a pass). A learner in Lab 4 can “prove” M13 passes at 90 days. | Drop the 90-day rows for M13, M18, and six more mixes from the Lab 4 CSV (leave them blank or remove them). Lab 4 then has 92 rows, so update the “about 100 rows” text, or keep 100 rows with an empty strength column for pending cubes. |
| X-3 | **Lab titles do not match the slides.** Lab 1 is “…for HIC Trial Notes” and Lab 2 is “…for HIC Collaboration”, but the slides say “Advanced Prompt Engineering” and “Gemini in Gmail”. Labs 3 to 5 use “from” and “with”, and the slides use “From” and “With”. The README uses a third set of titles. | Pick one title per lab and use it in `lab.md`, the lab slide, and `README.md`. |
| X-4 | **19 placeholder images** render as navy “TODO IMAGE” boxes: Lab 1 (2), Lab 2 (5), Lab 3 (3), Lab 4 (4), Lab 5 (5). That is allowed by the rules, but it looks unfinished in front of the class. | Capture them in a class tenant before delivery. Remove the stale `TODO IMAGE` comments where real captures already exist (Lab 1 `hic-trial-note-stage4.png`, `hic-lc3-infographic-2.png`). |
| X-5 | The ROI logo closes Labs 1 and 5 only. | Add it to Labs 2, 3, and 4, or remove it from all five. |
| X-6 | **Congratulations does not mirror You learn how to.** Lab 3 has 4 objectives and 3 closing items (it drops “Refuse invented KPIs”). Lab 4 has 5 and 4 (it drops document search). Lab 5 has 5 and 4. | Make one closing line per objective. |
| X-7 | **Time.** Lab 1 (four tasks, three or more image generations) and Lab 5 (web research plus four Studio generations) will both run over 30 minutes for most learners. | Make Lab 1 Task 3 steps 6 to 8 and Lab 5 Task 5 optional, or state 40 minutes. |

---

## Lab 1: Advanced Prompt Engineering

| ID | Task / step | Issue | Fix |
| :--- | :--- | :--- | :--- |
| L1-1 | Task 1 | **No sources are attached.** The note is built from nothing, so every number is “Not found”. The slide being practiced (“Role, Task, Steps, Examples Is the Floor”) says “Use only the attached protocol and results.” | Move the Drive-folder table and the **Add from Drive** step into Task 1, before the Role/Task prompt. Task 2 then stays in a new chat for extraction. |
| L1-2 | Task 4 step 1 | “Return to the Task 1 chat… against the three attached PDFs”, but no PDFs were attached in that chat. The critique fails on the default path. | It works once L1-1 is fixed. Otherwise, make “start a new chat and attach the three PDFs plus your note” the main instruction. |
| L1-3 | Task 1 | **Constraint stacks** are one of the four techniques on the slides, but the lab never has learners write one. | Add a step after step 5: paste the slide’s constraint-stack block (Audience, Length, Units, Sources, Banned, If missing) and ask for a revision. |
| L1-4 | Task 3 step 7 | The meta-prompt is sent in the chat where **Create images** is still selected, so Gemini may generate an image instead of critiquing the prompt. Also, the slide’s meta-prompt asks Gemini to “ask me up to three questions… then wait”, and the lab’s version leaves that out. | Tell learners to deselect the image tool, or send the meta-prompt in a new text chat. Add the “ask me up to three questions” line. |
| L1-5 | Task 3 step 1 | The label “create image tool” is lowercase and not bolded. | Use **Tools → Create images** (verify the label in the class tenant). |
| L1-6 | Task 2 | The slide uses a Markdown table (Mix, Age, Strength, Spec, Source file). The lab uses a per-mix block. Both are fine, but learners see two formats for the same skill. | Optional: switch to the slide’s table. |

## Lab 2: Gemini in Gmail

| ID | Task / step | Issue | Fix |
| :--- | :--- | :--- | :--- |
| L2-1 | Task 1, Task 4 | **The thread is one message sent to yourself.** Suggested replies are designed for mail you *receive* and very likely will not appear on a self-sent message. A one-message “thread” also makes the summary trivial, but the slides sell summarizing “a long handover thread”. The auto-detected or suggested replies feature is a stated customer priority. | Pair learners: each learner sends the canned email to a partner, and the partner replies once with constraints (supply a second canned body, such as a Loire Plant reply with silo and fineness concerns). Each learner then has a received, two-message thread. |
| L2-2 | Task 4 | **Suggested replies roll-out:** the 2026 “Suggested Replies” launch was US English first ([Workspace Updates](https://workspaceupdates.googleblog.com/2024/09/contextual-smart-replies.html), January 2026 coverage). A European Holcim tenant may not have it. | Keep the existing fallback note. Tell the instructor to check before class. |
| L2-3 | Task 4 step 4 | The slides teach refining with formalize, elaborate, and shorten. The lab never uses them. | Add one step: “Click **Refine**, then **Shorten**. Compare.” |
| L2-4 | Task 2 step 3 | “Click **Add source** (or the Drive control in the Gemini panel)”: unverified that the Gmail side panel can attach a Drive file. | Verify in the tenant. If it cannot, change the step to name the file in the prompt (“Find hic-lc3-24-trial-protocol.pdf in Drive”). |
| L2-5 | Task 3 step 4 | “Adjust duration to 45 minutes”: unverified that the Help me schedule card exposes duration. | Verify, and name the control. |
| L2-6 | Assets | `hic-lc3-24-meeting-note` and `handover-checklist` are only search targets. Fine, but the meeting note would make a good partner reply for L2-1. | Optional. |

## Lab 3: Presentations from Docs and Sheets

| ID | Task / step | Issue | Fix |
| :--- | :--- | :--- | :--- |
| L3-1 | Task 3 step 5 | The example title “LC3-50 clears 28-day spec” is false: M13 is LC3-50 and fails. The trial brief in Lab 5 warns against exactly this. | Use “M12 clears 28-day spec” (as in the slides and the constraints file). |
| L3-2 | Task 3 steps 2–3 | Learners are told to attach `assets/hic-lc3-brand-constraints.md`. Gemini in Slides attaches Drive Docs, Sheets, Slides, and PDFs, not a local `.md`. | Point to the Google Doc **HIC-LC3-24 brand constraints** (already in the assets README). Fallback: paste its text into a new Doc. |
| L3-3 | Task 1 step 4 | The slides teach **Match presentation style** and call it “the fastest route to the Holcim look”. The lab never uses it. | Add an approved Holcim template deck to the class folder and a step that uses Match presentation style, or say why it is skipped. |
| L3-4 | Task 2 step 2 | The slides teach `@` file references. The lab only uses Add from Drive. | Optional: mention `@HIC-LC3-24 Project Update` as an alternative. |
| L3-5 | Task 2 step 4 | The slides make the plan the checkpoint (“Delete any step that invents a KPI”). The lab says “Approve the plan when it matches”. | Add: “Delete or fix any plan step that adds a figure not in the Doc.” |
| L3-6 | Task 4 step 2 | Adds 2 slides after the scenario fixes six. Not wrong, but it clashes with “Do not add slides” in Task 3. | Optional: say “The board asked for a summary and Q&A; it is fine to add them now.” |

## Lab 4: Trial Data in Sheets

| ID | Task / step | Issue | Fix |
| :--- | :--- | :--- | :--- |
| L4-1 | Task 3 step 1 | **The lab writes the bug the slides teach learners to catch.** The CSV puts a 42.5 MPa spec on every age, so “Yes if strength ≥ spec” marks almost every 1-day and 7-day row No. The slides (“Do Now: Find the Bug”, “The Fix”, Quiz 2) are about exactly this, but the lab never practices the fix. The Canvas then counts on this column. | Keep step 1 as is (so learners see the bug), then add: “Filter Age_days to 7. Why are these No? Ask Gemini: `Judge only rows where Age_days is 28. Write n/a for other ages.`” Expect `=IF(F2<>28,"n/a",IF(I2>=J2,"Yes","No"))`. Make the spot-check one pass, one fail, and one non-28-day row, as on the slide. |
| L4-2 | Task 1 step 6 | Conditional formatting on “strength below spec” turns most 1-day and 7-day rows red, for the same reason. | Scope it: “…when Age_days is 28 and it is below Spec_Strength_MPa.” |
| L4-3 | Task 3 step 1 | Refers to a “TrialData tab”, which no step creates. | Task 1 step 2: choose **Insert new sheet(s)** (as the slides say) and rename the tab `TrialData`. |
| L4-4 | Task 4 | The objective says the canvas “stays synced with the data tab”, and the slide demo shows it, but learners never test it. | Add a step: change one Handover_Ready cell, return to the canvas, confirm it updated, then undo. |
| L4-5 | Task 4 step 5 | The slides warn that one refinement can move other elements. The lab does not ask learners to check. | Add: “Confirm the scorecards did not change.” |
| L4-6 | Task 3 step 5 | Glossary rule 3 (water demand acknowledged) is not in the CSV, so Gemini cannot check it. That is a good teaching moment that is not used. | Optional: ask “Which glossary criterion can this sheet not check?” |

Verified: **Insert → Create a canvas**, the side panel, and the bottom-bar entry points all exist, and a canvas reads one tab ([Create a Sheets canvas](https://support.google.com/docs/answer/17035851), checked 2026-11-09).

## Lab 5: Gemini Notebook Briefing

| ID | Task / step | Issue | Fix |
| :--- | :--- | :--- | :--- |
| L5-1 | Task 3 step 6 | **Order bug.** “Review my saved notes” in chat fails: chat answers from sources, and notes become readable only after **Convert to source**, which happens in Task 4 step 1 ([NotebookLM notes help](https://support.google.com/notebooklm/answer/16262519)). | Move the conversion to Task 3, before step 6, and then run the stress test against the converted notes source. |
| L5-2 | Assets | **Malformed table row** in `hic-lc3-24-trial-brief.md` and `.pdf`: `\| M12 \| LC3-50 \| 7 \| 31.4 \| (no 7-day spec) \|` is missing the clinker-factor cell, so it reads as clinker factor 7, age 31.4 days. | `\| M12 \| LC3-50 \| 0.52 \| 7 \| 31.4 \| No 7-day spec \|`, and regenerate the PDF. |
| L5-3 | Task 1 step 4 | Adds `.md` files from Drive. Unverified that NotebookLM’s Drive picker accepts Markdown files. | Tell learners to use the PDFs (or Google Docs) from Drive, and upload `.md` only from their computer. |
| L5-4 | Overview, slides | Product name: the course says “Gemini Notebook”, and the lab sends learners to notebooklm.google.com. | Confirm the name the Holcim tenant shows. Use one name, with the other in parentheses once. |
| L5-5 | Task 2 step 1 | “Search the web for new sources” label is unverified and likely to change. | Verify in the tenant before class. |
| L5-6 | Task 4 step 4 | “Holcim red”: see X-1. | Use the shared palette. |

---

## Customer priorities coverage

| Priority | Covered? |
| :--- | :--- |
| Advanced prompt engineering | Yes (Lab 1), but constraint stacks are not practiced (L1-3) |
| Gmail: side-panel search across Chat, Gmail, and Drive | Yes |
| Gmail: Help me schedule | Yes |
| Gmail: auto-detected or suggested replies | At risk (L2-1, L2-2) |
| Slides from Doc or Sheet templates, edit with reference files | Yes; Match presentation style not practiced (L3-3) |
| Sheets: analysis, doc search, formulas, import, auto-format, Canvas | Yes; formula fix not practiced (L4-1) |
| Advanced Gemini Notebook use case | Yes, with the order bug L5-1 |

## Recommended order of fixes

1. L4-1 and L4-2 (formula bug and the slides’ main Sheets lesson)
2. L1-1 and L1-2 (ungrounded note, broken critique)
3. L2-1 (pair learners so suggested replies and summaries work)
4. L5-1 and L5-2 (notes order, bad table row)
5. X-1 and X-2 (palette and 90-day data consistency)
6. L3-1 and L3-2, then the rest

## Could not test

- No live Holcim Workspace session. Gmail, Slides, Sheets, Gemini, and NotebookLM labels are unverified except where a source is cited.
- Image generation quality and timing were not measured.
- Drive folder URLs are still `TODO` in every `assets/README.md`.
