# Lab 04 assets

Supporting files for **Build a Holcim ESG Questionnaire Hub with Gemini Notebook**.

## Lab sources (added to the notebook in Task 1)

All five files live together in one shared Drive folder:

[https://drive.google.com/drive/u/1/folders/1VlwKZ8-UPqC119fZ8dNu64mLTO7nArzq](https://drive.google.com/drive/u/1/folders/1VlwKZ8-UPqC119fZ8dNu64mLTO7nArzq)

- `holcim-harp-chapter-14-sustainability-disclosures-synthetic.md` (same source as Lab 3)
- `holcim-sd-definitions-glossary-synthetic.md` (same source as Lab 3)
- `holcim-annual-report-fy2024-sustainability-excerpt-synthetic.md` (same source as Lab 3)
- `holcim-group-esg-response-pack-synthetic.md` — pre-approved Group facts organized under the four EcoVadis-style themes (Environment, Labor and Human Rights, Ethics, Sustainable Procurement).
- `holcim-customer-esg-questionnaire-synthetic` — a fictional "Nordvale Construction Group" supplier ESG questionnaire, 8 questions across the same four themes, with blank answer fields. This is both a notebook source (so Gemini can quote the exact questions) **and** the file participants duplicate and hand-fill in Task 4.

This folder is separate from the Lab 3 Drive folder (which holds only the first three files above) — Lab 4 uses its own folder with all five files together, so Task 1 is a single add-sources step.

## Why this design

The customer reference for this lab was a real internal example: a Holcim Germany NotebookLM "ESG Hub" used to populate customer ESG/EcoVadis questionnaires from grounded internal sources. NotebookLM cannot write into an arbitrary Word or PDF file on its own, so this lab teaches the realistic version of that workflow: draft grounded, cited answers in Notebook chat, then place them into a copy of the customer's original questionnaire document.

Do not treat any figure, policy name, or certification percentage in these files as a real Holcim disclosure. All of it, including the "Nordvale Construction Group" customer, is invented for this course.
