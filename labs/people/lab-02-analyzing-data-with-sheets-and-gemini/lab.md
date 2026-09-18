# Analyze Holcim Workforce Data with Sheets and Gemini

## Time Required

60 minutes

## Overview

In this lab, you will import a Holcim People workforce CSV into Google Sheets, use Gemini in Sheets to format and visualize the data, and build a small Apps Script sidebar that lets you sort, filter, and chart the results interactively.

### You learn how to:
- Create a Google Sheet and import workforce CSV data from Google Drive.
- Use Gemini in Sheets to format a table, add header filters, apply conditional formatting, and insert a chart.
- Build an Apps Script sidebar form that sorts, filters, and charts a working dataset.

## Scenario

Holcim’s People team received an anonymized workforce extract for training. The file is large (about 100,000 rows), so you will keep the full import for reference, create a smaller **LabWorkingSet** for AI-assisted analysis, and then ship a simple explorer so colleagues can filter regions and employment status without writing formulas.

> [!NOTE]
> Gemini in Sheets works best on smaller, clean tables. Google documents more consistent Gemini performance on files below about 1 million cells. That is why this lab uses a working subset for Gemini and Apps Script.

## Lab Instructions

### Task 1: Create a Sheet and import the workforce CSV from Drive

In this task, you create a spreadsheet and load the shared Holcim workforce CSV from Google Drive.

1. Open [Google Sheets](https://sheets.google.com/) and sign in with the Google account your instructor provides.

2. Click **Blank spreadsheet**.

3. Rename the spreadsheet to `Holcim People Lab 02 Workforce Analysis`.

4. Rename the first tab from `Sheet1` to `WorkforceRaw`.

<!-- TODO IMAGE: New blank Google Sheet renamed with WorkforceRaw tab -->
![Create a new Google Sheet](images/create-google-sheet.png)

5. Open the shared CSV in Drive (confirm you can view it):

[https://drive.google.com/file/d/1ezcvB3UZD9calB087_P-HKNKsWgVeYpj/view](https://drive.google.com/file/d/1ezcvB3UZD9calB087_P-HKNKsWgVeYpj/view)

6. Return to your Sheet. Import the CSV:

   1. Choose **File** → **Import**.
   2. Open the **Upload** tab, or **My Drive** / **Shared with me**, and locate the workforce CSV.
   3. If needed, paste the Drive file link into Drive search, or download the CSV once and upload it in the import dialog.
   4. Import location: **Replace current sheet**.
   5. Separator type: **Detect automatically** (or **Comma**).
   6. Convert text to numbers, dates, and formulas: **Yes**.
   7. Click **Import data**.

<!-- TODO IMAGE: File Import dialog showing CSV import into WorkforceRaw -->
![Import CSV from Drive into Sheets](images/import-csv-from-drive.png)

7. Confirm row 1 contains these headers (25 columns):

`User ID`, `Gender`, `Job Level`, `Date Of Birth`, `Division`, `Sub Division`, `Employment Type`, `Home Designation`, `Job Classification`, `Job Function`, `Employment Status`, `Date1`, `Date2`, `GRU Name`, `Management Region`, `Date3`, `Date4`, `Date5`, `Code1`, `Code2`, `Code3`, `Code4`, `Code5`, `Code6`, `FTE`

8. Freeze the header row: select row 1 → **View** → **Freeze** → **1 row**.

> [!IMPORTANT]
> Expect on the order of **~100,000 data rows**. Do not ask Gemini to rewrite or reformat the entire `WorkforceRaw` sheet in one prompt. Use the working subset in the next task.

9. Create a manageable analysis sheet:

   1. Click **+** to add a sheet and rename it `LabWorkingSet`.
   2. In `LabWorkingSet!A1`, enter:

```text
=QUERY(WorkforceRaw!A:Y,"select * where Col11 = 'Active' and Col15 <> '' limit 5000",1)
```

   3. Press Enter and wait for the query to finish.
   4. Optional hardening: with the `LabWorkingSet` range selected, copy and **Paste special** → **Values only** into the same place so Gemini and Apps Script are not blocked by a live `QUERY`.

> [!NOTE]
> Column 11 is **Employment Status** and column 15 is **Management Region**. The query keeps Active employees with a region, capped at 5,000 rows for this lab.

**Success criteria**

- `WorkforceRaw` contains the imported CSV with header row frozen.
- `LabWorkingSet` shows Active employee rows and the same header names.

### Task 2: Format, filter, and chart with Gemini in Sheets

In this task, you use **Ask Gemini** in Sheets to turn `LabWorkingSet` into a clearer People analytics table with filters, conditional formatting, and a chart.

1. Open the `LabWorkingSet` sheet and select any cell inside the data.

2. At the top right, click **Ask Gemini** to open the side panel.

<!-- TODO IMAGE: Ask Gemini side panel open in Google Sheets -->
![Ask Gemini panel in Google Sheets](images/gemini-in-sheets-panel.png)

3. Ask Gemini to format the table. Paste:

```text
On LabWorkingSet, format the data as a clean table:
- Bold and freeze the header row if needed
- Autofit useful column widths for User ID, Gender, Job Level, Division, Employment Status, GRU Name, Management Region, and FTE
- Keep all existing columns
Do not delete rows.
```

4. Review Gemini’s proposal. Apply or insert the suggested formatting when it looks correct.

5. Add header filters with Gemini:

```text
On LabWorkingSet, turn on filters for the header row so I can filter Employment Status, Management Region, Gender, Job Level, and Division.
```

6. Manually verify filters: click a header filter arrow and confirm you can filter **Management Region** values such as `EU`, `LATAM`, and `AMEA`.

7. Add conditional formatting for employment status (or Active-only emphasis if your subset is already Active-only):

```text
On LabWorkingSet, apply conditional formatting to the Employment Status column:
- Active = light green fill
- Terminated = light red fill
If Terminated is not present in this sheet, only format Active.
```

8. Create a chart with Gemini:

```text
Using LabWorkingSet, create an editable column chart that shows total FTE by Management Region.
Title the chart "Active FTE by Management Region".
Insert it into a new sheet if needed.
```

9. Click **Insert** (or the equivalent confirm action) when Gemini previews the chart. Open the new chart sheet if Gemini creates one and confirm the chart is editable.

<!-- TODO IMAGE: LabWorkingSet with filters, conditional formatting, and chart -->
![Formatted filtered table with conditional formatting](images/formatted-filtered-table.png)

<!-- TODO IMAGE: Editable FTE by Management Region chart from Gemini -->
![Conditional formatting and chart from Gemini](images/conditional-formatting-chart.png)

> [!TIP]
> If Gemini cannot act on the full working set, select a smaller visible range first, or ask: `Summarize FTE by Management Region in a new sheet named RegionSummary, then chart that summary.`

**Success criteria**

- `LabWorkingSet` has working column filters.
- Conditional formatting is visible on **Employment Status** (or documented as Active-only).
- You have at least one chart showing FTE by Management Region.

### Task 3: Build an Apps Script explorer form for sort, filter, and chart

In this task, you add an Apps Script sidebar form that filters `LabWorkingSet`, writes results to `ExplorerResults`, and inserts a chart type you choose.

1. In your spreadsheet, open **Extensions** → **Apps Script**.

2. Rename the project to `Holcim Workforce Explorer`.

3. Replace any default `Code.gs` content with the lab script from:

```text
labs/people/lab-02-analyzing-data-with-sheets-and-gemini/assets/apps-script/Code.gs
```

   Or paste the full `Code.gs` contents from that file into the Apps Script editor.

4. In Apps Script, click **+** next to **Files** → **HTML**, name the file exactly `Sidebar` (Apps Script adds `.html`), and paste the contents of:

```text
labs/people/lab-02-analyzing-data-with-sheets-and-gemini/assets/apps-script/Sidebar.html
```

5. Save the project (disk icon / **Ctrl/Cmd + S**).

6. Return to the spreadsheet and reload the browser tab.

7. You should see a **Holcim Labs** menu. Choose **Holcim Labs** → **Open workforce explorer**.

> [!NOTE]
> The first run asks you to authorize the script. Review the permissions, choose your lab Google account, and allow access to the spreadsheet.

<!-- TODO IMAGE: Holcim Labs menu and Workforce explorer sidebar -->
![Apps Script workforce explorer sidebar](images/apps-script-sidebar.png)

8. In the sidebar form:

   1. Set **Employment Status** to `Active` (or `(All)` if your working set is already Active-only).
   2. Set **Management Region** to `EU`.
   3. Leave **Gender** and **Job Level** as `(All)`.
   4. Sort by `Job Level` ascending.
   5. Chart group-by: `Division`.
   6. Chart type: `Pie`.
   7. Click **Apply filters and build chart**.

9. Open the `ExplorerResults` sheet and confirm:

   - Filtered rows were written with a header filter
   - A summary block and chart appear to the right of the table

10. Run the sidebar again with different choices (for example region `LATAM`, chart type `Column`, group-by `Gender`) and confirm the sheet and chart refresh.

> [!WARNING]
> Do not point the explorer at `WorkforceRaw` (~100k rows) during class time. Keep `SOURCE_SHEET = 'LabWorkingSet'` in `Code.gs` unless your instructor asks you to scale up.

**Success criteria**

- The **Holcim Labs** menu opens the sidebar.
- `ExplorerResults` updates when you change filters.
- You can choose column, bar, or pie charts from the form.

### Bonus Task 4: Ask Gemini for People insights on your explorer output

With fewer step-by-step hints, use Gemini on `ExplorerResults` or your region summary sheet.

1. Ask Gemini a People-team question grounded in the sheet, for example:

```text
Using ExplorerResults, what are the top 3 Divisions by FTE in this filtered set?
Give a short People-team narrative a People Business Partner could share in a standup.
Do not invent columns that are not in the sheet.
```

2. Optional: ask Gemini to create a pivot table of FTE by Management Region and Job Level from `LabWorkingSet`.

3. Optional stretch: add one more dropdown to `Sidebar.html` (for example `Division`) and wire it through `runExplorer` in `Code.gs`.

## Congratulations!

In this lab, you have:
- Created a Google Sheet and imported workforce CSV data from Google Drive.
- Used Gemini in Sheets to format a table, add header filters, apply conditional formatting, and insert a chart.
- Built an Apps Script sidebar form that sorts, filters, and charts a working dataset.
