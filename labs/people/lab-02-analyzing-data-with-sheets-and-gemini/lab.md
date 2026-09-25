# Analyzing Holcim Workforce Data with Sheets and Gemini

## Time Required

45 minutes

## Overview

In this lab, you will import a Holcim People workforce CSV into Google Sheets, use Gemini in Sheets to format and visualize the data, ask focused analysis questions on a working subset, and build a small Apps Script sidebar that charts one region from your working set.

### You learn how to:

- Create a Google Sheet and import workforce CSV data from Google Drive.
- Use Gemini in Sheets to format a table, add header filters, apply conditional formatting, and insert a chart.
- Ask Gemini one question at a time to find blanks, list unique values, locate and look up IDs, and calculate female representation, including questions this file cannot answer.
- Build a simple Apps Script menu and sidebar that charts one region from a working dataset.



## Scenario

![Holcim Logo](./images/holcim-logo.png)

Holcim’s People team received an anonymized workforce extract for training. The file is large (about 100,000 rows), so you will keep the full import for reference, create a smaller **LabWorkingSet** for AI-assisted analysis, and then ship a simple Apps Script chart builder so colleagues can summarize one region without writing formulas. You will also ask Gemini specific questions about blanks, categories, headcount, and representation. Pasting the CSV into a chat and asking for a finished analysis does not work.

> [!NOTE]
> Gemini in Sheets works best on smaller, clean tables. Google documents more consistent Gemini performance on files below about 1 million cells. That is why this lab uses a working subset for Gemini and Apps Script.



## Lab Instructions



### Task 1: Create a Sheet and import the workforce CSV from Drive

In this task, you create a spreadsheet and load the shared Holcim workforce CSV from Google Drive.

1. Open [Google Sheets](https://sheets.google.com/) and sign in with your account.
2. Click **Blank spreadsheet**.
3. Rename the spreadsheet to `Holcim People Lab 02 Workforce Analysis`.
4. Rename the first tab from `Sheet1` to `WorkforceRaw`.

![Create a new Google Sheet](images/create-google-sheet.png)

5. Open the shared CSV in Drive (confirm you can view it):

  [https://drive.google.com/file/d/1ezcvB3UZD9calB087_P-HKNKsWgVeYpj/view](https://drive.google.com/file/d/1ezcvB3UZD9calB087_P-HKNKsWgVeYpj/view)

6. Return to your Sheet. Choose **File** | **Import**, and paste the Drive file link into the search box. Select the file and choose **Insert**. In the Import dialog, set the following and click **Import data**.
  - Import location: **Replace current sheet**.
  - Separator type: **Detect automatically** (or **Comma**).
  - Convert text to numbers, dates, and formulas: **Checked**.
7. Confirm row 1 contains these headers (25 columns):

`User ID`, `Gender`, `Job Level`, `Date Of Birth`, `Division`, `Sub Division`, `Employment Type`, `Home Designation`, `Job Classification`, `Job Function`, `Employment Status`, `Date1`, `Date2`, `GRU Name`, `Management Region`, `Date3`, `Date4`, `Date5`, `Code1`, `Code2`, `Code3`, `Code4`, `Code5`, `Code6`, `FTE`

8. Freeze the header row: select row 1, then **View** | **Freeze** | **1 row**.

> [!IMPORTANT]
> Expect about **~100,000 data rows**. Do not ask Gemini to rewrite or reformat the entire `WorkforceRaw` sheet in one prompt. Use the working subset in the next task.

9. To create a manageable analysis sheet, click **+** to add a sheet and rename it `LabWorkingSet`. In `LabWorkingSet!A1`, enter the following formula, and press ENTER:

```text
={WorkforceRaw!A1:Y1; SORTN(FILTER(WorkforceRaw!A2:Y, WorkforceRaw!A2:A<>""), 500, 0, RANDARRAY(COUNTA(WorkforceRaw!A2:A)), TRUE)}
```

10. After the sample loads, select the entire `LabWorkingSet` data sheet with the button in the upper-left corner. Copy it, then **Paste special** → **Values only** into `A1`. This freezes the random sample so it does not reshuffle when the sheet recalculates.

> [!NOTE]
> The formula keeps the header row, then randomly samples **500** data rows from `WorkforceRaw`.

### Task 2: Format, filter, and chart with Gemini in Sheets

In this task, you use **Ask Gemini** in Sheets to turn `LabWorkingSet` into a clearer People analytics table with filters, conditional formatting, and a chart.

1. Open the `LabWorkingSet` sheet and select any cell inside the data.
2. At the top right, click **Ask Gemini** to open the side panel.

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
7. Add conditional formatting for employment status:

```text
On LabWorkingSet, apply conditional formatting to the rows based on the Employment Status column:
- Active = light green fill
- Terminated = light red fill
```

8. Create a chart with Gemini:

```text
Using LabWorkingSet, create an editable column chart that shows total FTE by Management Region.
Title the chart "FTE by Management Region".
Insert it into a new sheet.
```

9. Click **Insert** when Gemini previews the chart. Open the new chart sheet if Gemini creates one and confirm the chart is editable.

![Formatted filtered table with conditional formatting](images/formatted-filtered-table.png)

![Conditional formatting and chart from Gemini](images/conditional-formatting-chart.png)

> [!TIP]
> If Gemini cannot act on the full working set, select a smaller visible range first, or ask: `Summarize FTE by Management Region in a new sheet named RegionSummary, then chart that summary.`

### Task 3: Ask Gemini focused analysis questions

In this task, you use **Ask Gemini** on `LabWorkingSet` to answer questions a People analyst actually asks. Each prompt names the sheet, the columns, and one result. You check that result before you trust it.

> [!IMPORTANT]
> Do not ask Gemini to “analyze this CSV.” On a file this size that prompt fails or invents a story. Stay on `LabWorkingSet`, ask one question per prompt, and read the proposal before you apply it. If a proposal deletes rows, changes User ID, or edits `WorkforceRaw`, cancel it or undo until `LabWorkingSet` again has about 500 data rows.
>
> Gemini can count, list, filter, and calculate percentages from columns that are already in the sheet. It cannot reliably invent missing Gender, Date of Birth, User ID, or FTE, and it cannot predict who will leave from this sample.

1. Open the `LabWorkingSet` sheet. If the side panel is closed, click **Ask Gemini**.

2. Find missing or blank values. Paste:

```text
On LabWorkingSet only, find missing or blank cells.
For each column, report how many blank cells there are.
Do not change WorkforceRaw.
Do not fill or guess any values yet.
List the columns with the most blanks first.
```

3. Spot-check one column Gemini calls blank. Turn on the header filter if it is off, filter that column for blanks (empty), and compare the row count with Gemini’s number. If they disagree, tell Gemini what the filter shows and ask it to recount.

4. Fill the safest blank category, and leave identity fields alone. Paste:

```text
On LabWorkingSet, fill blank cells in the one column that has the most blanks.
If that column is User ID, Gender, Date Of Birth, FTE, or any date column, do not fill it. Explain why, and instead fill the category column with the most blanks.
Category columns you may fill: Job Level, Division, Sub Division, Employment Type, Home Designation, Job Classification, Job Function, Employment Status, GRU Name, Management Region.
Write the exact text Unknown.
Do not overwrite a cell that already has a value.
Do not change WorkforceRaw.
Tell me the column you filled, how many cells changed, and which columns you refused to fill.
```

> [!WARNING]
> Reject any proposal that fills Gender, Date of Birth, User ID, or FTE, or that writes anything other than Unknown into a blank category. A blank identity field is a missing fact. Unknown is only a label so a missing category is visible.

5. List the unique values in use. Paste:

```text
Using LabWorkingSet, create a new sheet named MasterData.
For each of these columns, list the unique values and how many rows use each value:
Gender, Job Level, Division, Employment Type, Employment Status, Management Region.
Sort each list by count, highest first.
Do not delete or rewrite LabWorkingSet.
```

6. Open `MasterData`. Confirm each list is a short set of labels, not a different value on every row. Gender should list `Male` and `Female`.

> [!NOTE]
> This is a master-data check. Near-duplicate labels (for example EU and Europe) will split your charts. A column with a different value on every row, such as User ID, is an identifier, not a category.

7. Count people and sum FTE. The FTE by Management Region chart already shows the sum. This step adds a table you can audit, including a headcount next to that sum. Paste:

```text
Using LabWorkingSet, create a new sheet named HeadcountFte.
For each Management Region, calculate:
- Count of User ID (headcount)
- Sum of FTE
Sort by Sum of FTE, highest first.
Do not add a chart. I want the numbers so I can check them.
```

8. Compare `HeadcountFte` with the FTE by Management Region chart. The region order by FTE should agree. If it does not, tell Gemini and ask it to rebuild `HeadcountFte` from `LabWorkingSet` only.

9. Locate IDs that meet three conditions. Paste:

```text
On LabWorkingSet, list User ID values that meet all of these conditions:
- Employment Status is Active
- Management Region is AMEA
- Gender is Female
Return only User ID, Gender, Job Level, Division, Employment Status, Management Region, and FTE.
Put the matching rows on a new sheet named LocatedIds.
If none match, say so and tell me which condition removed everyone.
Do not change LabWorkingSet.
```

10. If `LocatedIds` has no data rows, run the prompt again with a Management Region that `MasterData` shows is actually present. Keep Employment Status as Active and Gender as `Female`.

11. Look up one person by ID. Copy a User ID from `LocatedIds`. If that sheet is empty, copy any User ID from `LabWorkingSet`. Replace `PASTE_USER_ID` in this prompt, then paste:

```text
On LabWorkingSet, look up User ID PASTE_USER_ID.
Return every column for that ID on a new sheet named IdLookup.
If the ID appears more than once, return every matching row and say how many.
Do not summarize. Show the stored values.
Do not change LabWorkingSet.
```

12. On `LabWorkingSet`, find that same User ID (Ctrl/Cmd + F) and confirm the `IdLookup` row matches the source row.

13. Calculate female representation on three dimensions. Paste:

```text
Using LabWorkingSet, create a new sheet named FemaleShare.
Calculate the percentage of rows where Gender is Female, grouped separately by:
- Management Region
- Division
- Job Level
For each group show headcount, female headcount, and female percent.
Use headcount (count of User ID), not sum of FTE.
Round percents to one decimal place.
Above the tables, state that these figures come from the 500-row working sample, not the full workforce extract.
Do not change LabWorkingSet.
```

14. Check one percent by hand: female headcount divided by headcount for that group. If Gemini used sum of FTE as the denominator, ask it to recalculate with count of User ID.

> [!NOTE]
> Female percent of headcount and female percent of FTE answer different questions. This lab uses headcount so the denominator is people. When you ask again at work, say which denominator you mean.

15. Ask for an insight the sheets can support, and for the limit Gemini must state. Paste:

```text
Using only HeadcountFte, FemaleShare, and LabWorkingSet:
1. Write three short observations. Each observation must cite a number from HeadcountFte or FemaleShare.
2. Say whether any two numeric columns on LabWorkingSet support a correlation. If FTE is the only reliable number, say that a correlation is not supported.
3. Answer this: can you predict which employees will leave Holcim? If the sheet has no history you can train on, answer no, and name what data would be required instead.
Do not create a forecast, a model, or new personal data.
```

> [!IMPORTANT]
> Treat a confident forecast as a failed answer. `LabWorkingSet` is a 500-row random sample. Most columns are categories or anonymized codes, not a work history. Use Gemini to build a table you can check. Do not use it to predict attrition, hiring, or promotion.

**Success criteria**

- You can name the columns with blanks, and Gemini did not guess Gender, Date of Birth, User ID, or FTE.
- `MasterData` lists unique values and counts for the six category columns.
- `HeadcountFte` has a User ID count and an FTE sum per region, and the FTE order agrees with the region chart.
- `LocatedIds` lists IDs that match all three conditions, or Gemini explains which condition matched nobody.
- `IdLookup` matches the source row for the ID you pasted.
- One `FemaleShare` percent matches female headcount divided by headcount.
- The written observations cite those tables and decline to predict who will leave.

### Task 4: Build a simple Apps Script region chart builder

In this task, you add a small Apps Script project that shows the core pattern: a custom menu, an HTML sidebar, a server function that reads the sheet, and a chart written back to Sheets.

1. In your spreadsheet, open **Extensions** → **Apps Script**.
2. Rename the project to `Holcim Region Chart Builder`.
3. Replace any default `Code.gs` content with:

```javascript
/**
 * Holcim People Lab 02 — simple Apps Script demo
 * Custom menu + HTML sidebar + sheet read/write + chart
 */

var SOURCE_SHEET = 'LabWorkingSet';
var OUTPUT_SHEET = 'RegionSummary';

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Holcim Labs')
    .addItem('Open region chart builder', 'showSidebar')
    .addToUi();
}

function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('Sidebar')
    .setTitle('Region chart builder')
    .setWidth(280);
  SpreadsheetApp.getUi().showSidebar(html);
}

/** Return sorted unique Management Region values from LabWorkingSet. */
function getRegions() {
  var sheet = SpreadsheetApp.getActive().getSheetByName(SOURCE_SHEET);
  if (!sheet) {
    throw new Error('Missing sheet: ' + SOURCE_SHEET);
  }
  var data = sheet.getDataRange().getDisplayValues();
  var regionCol = data[0].indexOf('Management Region');
  if (regionCol < 0) {
    throw new Error('Management Region column not found.');
  }
  var seen = {};
  for (var i = 1; i < data.length; i++) {
    var value = String(data[i][regionCol] || '').trim();
    if (value) {
      seen[value] = true;
    }
  }
  return Object.keys(seen).sort();
}

/**
 * Filter LabWorkingSet to one region, write FTE by Employment Status,
 * and insert a pie chart on RegionSummary.
 */
function buildRegionChart(region) {
  var ss = SpreadsheetApp.getActive();
  var source = ss.getSheetByName(SOURCE_SHEET);
  if (!source) {
    throw new Error('Missing sheet: ' + SOURCE_SHEET);
  }

  var data = source.getDataRange().getDisplayValues();
  var headers = data[0];
  var regionCol = headers.indexOf('Management Region');
  var statusCol = headers.indexOf('Employment Status');
  var fteCol = headers.indexOf('FTE');

  var totals = {};
  for (var i = 1; i < data.length; i++) {
    if (String(data[i][regionCol] || '').trim() !== region) {
      continue;
    }
    var status = String(data[i][statusCol] || 'Unknown').trim() || 'Unknown';
    var fte = Number(data[i][fteCol]);
    if (isNaN(fte)) {
      fte = 1;
    }
    totals[status] = (totals[status] || 0) + fte;
  }

  var out = ss.getSheetByName(OUTPUT_SHEET);
  if (!out) {
    out = ss.insertSheet(OUTPUT_SHEET);
  }
  out.clear();
  out.getCharts().forEach(function (chart) {
    out.removeChart(chart);
  });

  var rows = [['Employment Status', 'FTE']];
  Object.keys(totals).sort().forEach(function (status) {
    rows.push([status, totals[status]]);
  });
  out.getRange(1, 1, rows.length, 2).setValues(rows);
  out.getRange(1, 1, 1, 2).setFontWeight('bold');

  if (rows.length > 1) {
    var chart = out.newChart()
      .setChartType(Charts.ChartType.PIE)
      .addRange(out.getRange(1, 1, rows.length, 2))
      .setOption('title', 'FTE by Employment Status — ' + region)
      .setPosition(2, 4, 0, 0)
      .build();
    out.insertChart(chart);
  }

  return {
    region: region,
    categories: rows.length - 1
  };
}
```

4. In Apps Script, click **+** next to **Files** → **HTML**. Name the file `Sidebar` (Apps Script adds `.html`). Replace the default contents with:

```html
<!DOCTYPE html>
<html>
  <head>
    <base target="_top" />
    <style>
      body { font-family: Arial, sans-serif; font-size: 13px; margin: 12px; color: #202124; }
      select, button { width: 100%; margin-top: 6px; padding: 8px; box-sizing: border-box; }
      button { background: #0b3d2e; color: #fff; border: 0; font-weight: 600; cursor: pointer; }
      #msg { margin-top: 12px; color: #5f6368; }
      .error { color: #b3261e; }
    </style>
  </head>
  <body>
    <p>Pick a <strong>Management Region</strong> from <code>LabWorkingSet</code>. Apps Script will write a summary and pie chart to <code>RegionSummary</code>.</p>

    <label for="region">Management Region</label>
    <select id="region"></select>
    <button onclick="buildChart()">Build chart</button>
    <div id="msg">Loading regions…</div>

    <script>
      function setMsg(text, isError) {
        var el = document.getElementById('msg');
        el.className = isError ? 'error' : '';
        el.textContent = text;
      }

      google.script.run
        .withSuccessHandler(function (regions) {
          var select = document.getElementById('region');
          regions.forEach(function (region) {
            var option = document.createElement('option');
            option.value = region;
            option.textContent = region;
            select.appendChild(option);
          });
          setMsg('Ready.');
        })
        .withFailureHandler(function (err) {
          setMsg(err.message || String(err), true);
        })
        .getRegions();

      function buildChart() {
        var region = document.getElementById('region').value;
        setMsg('Building chart for ' + region + '…');
        google.script.run
          .withSuccessHandler(function (result) {
            setMsg('Done. Open the RegionSummary sheet for ' + result.region + '.');
          })
          .withFailureHandler(function (err) {
            setMsg(err.message || String(err), true);
          })
          .buildRegionChart(region);
      }
    </script>
  </body>
</html>
```

5. Save the project (**Ctrl/Cmd + S**).
6. Return to the spreadsheet and reload the browser tab.
7. Choose **Holcim Labs** → **Open region chart builder**.

> [!NOTE] The first run asks you to authorize the script. Review the permissions, choose your lab Google account, and allow access to the spreadsheet.

![Apps Script region chart builder sidebar](images/apps-script-sidebar.png)

8. In the sidebar, choose the Management Region `AMEA`, and then click **Build chart**. Open the `RegionSummary` sheet and confirm a status table and pie chart appear.
9. Run it again with a different region, and confirm `RegionSummary` refreshes.

> [!IMPORTANT]
> Use `LabWorkingSet`, not `WorkforceRaw`. The demo is meant to stay fast on the smaller sample.

**What this demo teaches**


| Piece               | What it does                                        |
| ------------------- | --------------------------------------------------- |
| `onOpen`            | Adds the **Holcim Labs** menu when the Sheet opens  |
| `Sidebar.html`      | Simple HTML UI in a sidebar                         |
| `google.script.run` | Lets the sidebar call functions in `Code.gs`        |
| `buildRegionChart`  | Reads sheet data, writes a summary, inserts a chart |


### Bonus Task 5: Extend the Apps Script sidebar with Gemini

Use Gemini to turn your simple region chart builder into a richer People analytics sidebar.

1. With the help of Gemini, try to upgrade the sidebar so it can filter on more columns and build more than one chart type. Try things like:

```text
Upgrade this Apps Script sidebar and Code.gs for a Holcim People workforce sheet named LabWorkingSet.
Add dropdowns for Management Region, Employment Status, and Job Level.
When I click Build, filter LabWorkingSet with those choices, write the matching rows to a sheet named ExplorerResults, and create a column chart of total FTE by Division.
Keep the code short and commented. Return complete Code.gs and Sidebar.html files I can paste.
```

```text
Using the same Apps Script project, add a Chart type dropdown with Pie and Column options.
Also add a Group by dropdown with Division, Job Level, and Gender.
Build the selected chart type from FTE totals for the selected group-by field after applying the region and status filters.
Return the full updated Code.gs and Sidebar.html.
```

2. Paste Gemini’s updated files into Apps Script, save, reload the Sheet, and test the new sidebar. Fix any errors by pasting the error message back into Gemini and asking for a corrected version.



## Congratulations!

In this lab, you have:

- Created a Google Sheet and imported workforce CSV data from Google Drive.
- Used Gemini in Sheets to format a table, add header filters, apply conditional formatting, and insert a chart.
- Asked Gemini one question at a time to find blanks, list unique values, locate and look up IDs, and calculate female representation, including questions this file cannot answer.
- Built a simple Apps Script menu and sidebar that charts one region from a working dataset.

![ROI Training](./images/roi-logo-with-name.png)
