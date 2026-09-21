# Lab 02 assets

## Plant sustainability CSV (learner source)

Use the shared Drive file (not a local copy):

[https://drive.google.com/file/d/1uRbv_qx4xjg4WvnlAMHV3qvWCysYQfVb/view?usp=drive_link](https://drive.google.com/file/d/1uRbv_qx4xjg4WvnlAMHV3qvWCysYQfVb/view?usp=drive_link)

- `holcim-sustainability-plant-data-synthetic.csv` — 100 rows: 25 synthetic plants (9 Europe, 8 Latin America, 8 Asia, Middle East and Africa) across 4 quarters of FY2025.

Columns: Plant ID, Country, Region, Plant Type (Integrated Plant or Grinding Station), Reporting Quarter, Cementitious Production (tonnes), Gross CO2 Emissions (tonnes), Specific Net CO2 (kg per tonne cementitious), Thermal Substitution Rate (%, Integrated Plants only), Renewable Electricity (%), Water Withdrawal (m3 per tonne), Transition Plan Published.

All plant IDs and figures are **synthetic training data**, generated for this lab. They do not represent real Holcim plants, emissions, or targets. The data has a gentle built-in quarter-over-quarter improvement trend (lower Specific Net CO2, higher thermal substitution and renewable electricity) so Gemini-built charts show a visible story.

No working-set sampling step is needed this time: at 100 rows the file is already well inside Gemini in Sheets' comfortable range, so learners import it directly into the sheet they analyze.
