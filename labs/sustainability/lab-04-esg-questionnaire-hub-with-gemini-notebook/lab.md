# Build a Holcim ESG Questionnaire Hub with Gemini Notebook

## Time Required

30 minutes

## Overview

In this lab, you will build a Gemini Notebook (NotebookLM) ESG Questionnaire Hub for Holcim's Sustainability team. You add internal Holcim sources plus a customer's original ESG questionnaire, research public ESG rating criteria with web sources, draft cited answers in chat, then transfer those answers into a copy of the customer's original questionnaire document.

### You learn how to:
- Create a Gemini Notebook and add Holcim Sustainability sources, including a customer's original questionnaire.
- Research EcoVadis and public ESG rating criteria using web sources.
- Draft grounded, cited answers to customer ESG questionnaire questions in chat.
- Transfer grounded answers into a copy of the customer's original questionnaire and brief your manager with a Studio output.

## Scenario

![Holcim Logo](./images/holcim-logo.png)

You are on Holcim's Sustainability team, supporting commercial and key accounts. A customer, Nordvale Construction Group, has sent an ESG questionnaire as part of its supplier qualification process, with questions modeled on common third-party rating formats like EcoVadis. Digging through HARP chapters, the SD glossary, and last year's Annual Report for every question wastes time and risks inconsistent answers between colleagues. This lab is modeled on a real Holcim Germany approach: a Gemini Notebook "ESG Hub" grounded in Holcim's own sources, used to draft every answer with a citation, before a person places the finished answers into the customer's original file.

> [!NOTE]
> Gemini Notebook cannot edit an arbitrary Word or PDF file for you. This lab teaches the realistic workflow: draft grounded, cited answers in Notebook, then place them into a copy of the customer's original questionnaire yourself.

## Lab Instructions

### Task 1: Create a notebook and add Holcim Sustainability sources

In this task, you create the notebook and load the internal sources plus the customer's original questionnaire that will ground every later answer.

1. Open [https://notebooklm.google.com/](https://notebooklm.google.com/) and sign in with your account.

2. On the home page, create a **New notebook**.

![Gemini Notebook home page](images/new-notebook.png)

3. Rename the notebook to:

```text
Holcim Sustainability — ESG Questionnaire Hub
```

4. Click **Add sources**, and choose **Drive**. Enter the following URL in the Search box, drill into the folder, and add all five files.

[https://drive.google.com/drive/u/1/folders/1VlwKZ8-UPqC119fZ8dNu64mLTO7nArzq](https://drive.google.com/drive/u/1/folders/1VlwKZ8-UPqC119fZ8dNu64mLTO7nArzq)

You should see:
   - `holcim-harp-chapter-14-sustainability-disclosures-synthetic.md`
   - `holcim-sd-definitions-glossary-synthetic.md`
   - `holcim-annual-report-fy2024-sustainability-excerpt-synthetic.md`
   - `holcim-group-esg-response-pack-synthetic.md`
   - `holcim-customer-esg-questionnaire-synthetic` (the customer's original questionnaire)

<!-- TODO IMAGE: Screenshot of the Add sources dialog with the Drive folder link pasted and all five files visible -->
![Adding the five internal sources from Drive](images/add-drive-sources.png)

5. Wait until all five sources appear as ready in the **Sources** panel.

> [!WARNING]
> Every source in this lab, including the "Nordvale Construction Group" questionnaire, is **synthetic training content**. Do not attach a real customer questionnaire or real confidential Holcim documents during this lab.

### Task 2: Research EcoVadis and public ESG rating criteria with web sources

In this task, you use Gemini Notebook's **Search for Web Sources** feature to pull public context on how third-party ESG ratings actually evaluate a company, so your answers speak the same language as the questionnaire.

1. In the **Search the Web for new sources** tool, enter the following search and run it.

```text
EcoVadis sustainability rating methodology environment labor and human rights ethics sustainable procurement
```

<!-- TODO IMAGE: Screenshot of the Search the Web tool with the EcoVadis query and results listed -->
![Searching the web for EcoVadis methodology](images/search-web-esg-sources.png)

2. Review the results, and select **Import** to add one or two relevant results to your notebook.

3. Run a second search for the certifications your response pack references, and import the results.

```text
ISO 14001 environmental management and ISO 45001 occupational health and safety certification overview
```

4. Confirm the **Sources** panel now includes your five Holcim and customer files plus your web sources.

<!-- TODO IMAGE: Screenshot of the full Sources panel with internal, questionnaire, and web sources all listed -->
![All sources ready](images/all-sources-panel.png)

### Task 3: Draft cited answers to the customer questionnaire in chat

In this task, you use chat to extract the exact questions from the customer's file, then draft grounded, cited answers before you touch the original document.

1. Ensure all sources are selected.

2. In the chat in the middle of the page, ask Gemini to confirm it can read the customer's questions:

```text
List every question from the Nordvale Construction Group ESG questionnaire source, grouped by section.
```

3. Ask for drafted answers, cited to your own sources:

```text
Draft an answer to each question in the Nordvale Construction Group ESG questionnaire.
Use only the Holcim Group ESG Response Pack, the SD Definitions Glossary, the HARP chapter, and the FY2024 Annual Report excerpt as evidence.
For each answer, cite the source and section it came from, for example (ESG Response Pack: Environment) or (Annual Report FY2024, Group Sustainability KPIs table).
If nothing in the sources answers a question, say the answer needs input from the SD team instead of guessing.
```

4. Examine the results, then click the **Save to note** icon (_the push pin icon_) to save the draft answers in the **Gemini Notebook Studio** on the right.

<!-- TODO IMAGE: Screenshot of chat drafting a cited answer to one questionnaire question -->
![Chat drafting cited answers](images/chat-draft-answers.png)

5. Ask Gemini to stress-test the draft before you send it anywhere:

```text
Review the draft answers. Flag any answer that is not directly supported by a source, and suggest what additional evidence the SD team would need to strengthen a weak answer.
```

6. Save this review as a note as well.

### Task 4: Transfer grounded answers into the questionnaire and brief your manager

In this task, you place the grounded answers into a copy of the customer's original file, then generate a short Studio briefing for your manager before you send the completed questionnaire back.

1. Open the customer questionnaire source directly (open its Drive link in a new tab).

2. Choose **File** | **Make a copy**, and rename the copy, for example `Nordvale Construction Group ESG Questionnaire — Draft Response`.

3. Working section by section, paste each grounded answer from your chat and notes under the matching question in your copy. Keep the source citation in a short bracketed note after each answer for internal review, and remove it before the questionnaire is actually sent to a customer.

<!-- TODO IMAGE: Screenshot of the duplicated questionnaire with answers filled in under each question -->
![Answers placed into the questionnaire copy](images/questionnaire-copy-filled.png)

> [!IMPORTANT]
> This paste-in step is manual by design. Gemini Notebook drafts and grounds the answers; a person still reviews and places them in the customer's original file before it goes out.

4. Back in Gemini Notebook, open **Studio** and generate a short briefing output for your manager, for example a **Report** or an **Audio Overview**, with this description:

```text
Create a short briefing for my manager on the Nordvale Construction Group ESG questionnaire response.
Cover: which sections are fully grounded in our sources, which answers still need SD team input, and any figure that looks inconsistent between sources.
Keep it concise and suitable for a 5-minute update before we send the questionnaire back.
```

<!-- TODO IMAGE: Screenshot of the generated Studio briefing output -->
![Studio briefing note for your manager](images/studio-briefing-note.png)

> [!NOTE]
> Studio generation can take a few minutes. You can keep working in chat while it generates.

### Bonus Task 5: Rehearse the hub on a second question set

Harden your ESG Hub so it holds up under a different question mix.

1. Ask Gemini Notebook for a short EcoVadis-style readiness gap analysis using only the Environment-theme questions and sources:

```text
Based only on the Environment-theme sources, where are we strongest and weakest against typical EcoVadis Environment questions? Keep it to 5 bullets.
```

2. Optional: try generating a **Quiz** in Studio from the SD Definitions Glossary so a teammate can self-test the terminology before their own customer call.

## Congratulations!

In this lab, you have:
- Created a Gemini Notebook and added Holcim Sustainability sources, including a customer's original questionnaire.
- Researched EcoVadis and public ESG rating criteria using web sources.
- Drafted grounded, cited answers to customer ESG questionnaire questions in chat.
- Transferred grounded answers into a copy of the customer's original questionnaire and briefed your manager with a Studio output.

![ROI Training](./images/roi-logo-with-name.png)
