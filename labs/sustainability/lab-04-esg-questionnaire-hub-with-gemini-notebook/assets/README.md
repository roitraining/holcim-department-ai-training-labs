# Lab 04 assets

Supporting files for **Build a Holcim ESG Questionnaire Hub with Gemini Notebook**.

## Internal grounding sources (added to the notebook in Task 1)

Reuses the same shared Drive folder from Lab 3:

[https://drive.google.com/drive/folders/19sR6xrg_Fq3z4RwNyn88MT9rh4ExSHTK?usp=sharing](https://drive.google.com/drive/folders/19sR6xrg_Fq3z4RwNyn88MT9rh4ExSHTK?usp=sharing)

- `holcim-harp-chapter-14-sustainability-disclosures-synthetic.md` (already in the folder from Lab 3)
- `holcim-sd-definitions-glossary-synthetic.md` (already in the folder from Lab 3)
- `holcim-annual-report-fy2024-sustainability-excerpt-synthetic.md` (already in the folder from Lab 3)
- `holcim-group-esg-response-pack-synthetic.md` — **new for this lab**, pre-approved Group facts organized under the four EcoVadis-style themes (Environment, Labor and Human Rights, Ethics, Sustainable Procurement).

> [!IMPORTANT]
> **Human TODO (1 of 2):** Add `holcim-group-esg-response-pack-synthetic.md` to the same shared Drive folder used in Lab 3, so all four internal sources live in one place for Task 1.

## Customer questionnaire (the document learners fill in)

- `holcim-customer-esg-questionnaire-synthetic.md` — a fictional "Nordvale Construction Group" supplier ESG questionnaire, 8 questions across the same four themes, with blank answer fields.

> [!IMPORTANT]
> **Human TODO (2 of 2):** Turn `holcim-customer-esg-questionnaire-synthetic.md` into a Google Doc (or Word doc uploaded to Drive), share it so participants can view and copy it, then replace the placeholder link in `lab.md` Task 1 (`YOUR_DRIVE_QUESTIONNAIRE_LINK_HERE`) with the real link. This is deliberately a separate file from the four grounding sources above: it is added to the notebook as a source (so Gemini can quote the exact questions) **and** it is the file participants duplicate and hand-fill in Task 4.

## Why this design

The customer reference for this lab was a real internal example: a Holcim Germany NotebookLM "ESG Hub" used to populate customer ESG/EcoVadis questionnaires from grounded internal sources. NotebookLM cannot write into an arbitrary Word or PDF file on its own, so this lab teaches the realistic version of that workflow: draft grounded, cited answers in Notebook chat, then place them into a copy of the customer's original questionnaire document.

Do not treat any figure, policy name, or certification percentage in these files as a real Holcim disclosure. All of it, including the "Nordvale Construction Group" customer, is invented for this course.
