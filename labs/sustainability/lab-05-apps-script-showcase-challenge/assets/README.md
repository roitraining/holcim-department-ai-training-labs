# Lab 05 assets

## Base spreadsheet (live, not committed to this repo)

Students work directly from the customer's own Google Sheet — its content is not duplicated into this repo, since it is customer-supplied and the lab only needs a "make a copy" link.

Copy link (opens the Make a copy dialog directly):

[https://docs.google.com/spreadsheets/d/1c3OpaP37NETH2IVMGxFRJbzfFHKqcyqQroeH40QmxhY/copy](https://docs.google.com/spreadsheets/d/1c3OpaP37NETH2IVMGxFRJbzfFHKqcyqQroeH40QmxhY/copy)

Original link (fallback, if the copy link does not fire): [https://docs.google.com/spreadsheets/d/1c3OpaP37NETH2IVMGxFRJbzfFHKqcyqQroeH40QmxhY/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1c3OpaP37NETH2IVMGxFRJbzfFHKqcyqQroeH40QmxhY/edit?usp=sharing)

The workbook has three tabs:

- **Read me** — one-line context and mission statement.
- **SD APP Tab examples** — the challenge brief (open Apps Script, read `Nature data_dummy`, sort the GRU data, recreate the layout).
- **Nature data_dummy** — the data: `Total | Region | Country/OpCo` plus three metric groups (each with a blank column, `YTD AY`, `YTD PY`): Cementitious Materials volume [Kt], Freshwater withdrawal Cement (FWW) [m3,'000], Specific freshwater withdrawal (Cement) [L/t cem mat]. 52 rows, grouped by region (Europe, AMEA, Latin America, North America, Others) under a grand-total row. Values are internally consistent (region totals sum to the grand total) and explicitly named `_dummy` by the customer, so treat it as already-sanitized placeholder data, not a real disclosed Holcim figure.

> [!IMPORTANT]
> **Human TODO:** Confirm the customer's Sheet stays shared at this link for the class (Viewer access is enough — `/copy` works for viewers unless the owner disabled copying). If the link ever changes, update it in `lab.md` Task 1.

## Reference image

- `sd-performance-app-country-ranking-example.png` — a real screenshot the customer provided of their existing "SD Performance APP" mobile dashboard (Country Ranking view), showing the sort/rank pattern the Apps Script challenge should recreate: rank by an Impact/share percentage, show a per-tonne KPI, and color-code the change versus prior year (green down-arrow = improved, red up-arrow = worsened).

Note the metric mismatch: the reference image shows a **CO2** KPI ("CO2 NET / T CEM"), but `Nature data_dummy` has no CO2 columns — only Cementitious Materials volume and Freshwater withdrawal. The image is showing the *pattern* to recreate, not a literal column match. `lab.md` points students to the closest analog already in the data (Specific freshwater withdrawal, a per-tonne KPI in the same shape as the CO2 metric) without being prescriptive about it, since this lab is intentionally exploratory.
