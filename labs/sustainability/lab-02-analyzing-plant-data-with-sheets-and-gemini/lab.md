# Analyze Holcim Sustainability Plant Data with Sheets and Gemini

## Time Required

45 minutes

## Overview

In this lab, you will import a Holcim Sustainability plant data CSV into Google Sheets, use Gemini in Sheets to format and visualize the data, ask focused analysis questions on that sheet, and build a small Apps Script sidebar that charts one region's CO2 trend.

### You learn how to:

- Create a Google Sheet and import synthetic plant sustainability CSV data from Google Drive.
- Use Gemini in Sheets to format a table, add header filters, apply conditional formatting, and insert a chart.
- Ask Gemini one question at a time to find missing values, list unique categories, locate and look up plants, and calculate transition-plan coverage, including questions this file cannot answer.
- Build a simple Apps Script menu and sidebar that charts one region's CO2 emissions by quarter.

## Scenario

![Holcim Logo](./images/holcim-logo.png)

Holcim's Sustainability team receives a quarterly plant-level extract covering CO2 emissions, thermal substitution, renewable electricity, and water withdrawal for 25 plants. The file is small enough to work with directly, so you will import it, use Gemini in Sheets to turn it into a clean analytics table, and then ship a simple Apps Script chart builder so colleagues can review one region's emissions trend without writing formulas. You will also ask Gemini specific questions about missing values, plant categories, and transition-plan coverage. Pasting the CSV into a chat and asking for a finished analysis does not work, even on a file this small.

> [!NOTE]
> Gemini in Sheets works best on smaller, clean tables. Google documents more consistent Gemini performance on files below about 1 million cells. At 100 rows and 12 columns, this file is already well inside that range, so there is no need to build a smaller working subset first.

## Lab Instructions

### Task 1: Create a Sheet and import the plant sustainability CSV from Drive

In this task, you create a spreadsheet and load the shared Holcim Sustainability plant data CSV from Google Drive.

1. Open [Google Sheets](https://sheets.google.com/) and sign in with your account.

2. Click **Blank spreadsheet**.

3. Rename the spreadsheet to `Holcim Sustainability Lab 02 Plant Data`.

4. Rename the first tab from `Sheet1` to `PlantData`.

![Create a new Google Sheet](images/create-google-sheet.png)

5. Open the shared CSV in Drive (confirm you can view it):

[https://drive.google.com/file/d/1uRbv_qx4xjg4WvnlAMHV3qvWCysYQfVb/view?usp=drive_link](https://drive.google.com/file/d/1uRbv_qx4xjg4WvnlAMHV3qvWCysYQfVb/view?usp=drive_link)

6. Return to your Sheet. Choose **File** | **Import**, and paste the Drive file link into the search box. Select the file and choose **Insert**. In the Import dialog set the following and click **Import data**.
   - Import location: **Replace current sheet**.
   - Separator type: **Detect automatically** (or **Comma**).
   - Convert text to numbers, dates, and formulas: **Checked**.


![Import CSV from Drive](images/import-csv-from-drive.png)

7. Confirm row 1 contains these headers (12 columns):

`Plant ID`, `Country`, `Region`, `Plant Type`, `Reporting Quarter`, `Cementitious Production (tonnes)`, `Gross CO2 Emissions (tonnes)`, `Specific Net CO2 (kg per tonne cementitious)`, `Thermal Substitution Rate (%)`, `Renewable Electricity (%)`, `Water Withdrawal (m3 per tonne)`, `Transition Plan Published`

8. Freeze the header row: select row 1, then **View** | **Freeze** | **1 row**.

> [!NOTE]
> This is **100 rows**: 25 synthetic plants across 4 quarters of FY2025. All plant IDs and figures are synthetic training data, not real Holcim emissions.

### Task 2: Format, filter, and chart with Gemini in Sheets

In this task, you use **Ask Gemini** in Sheets to turn `PlantData` into a clearer Sustainability analytics table with filters, conditional formatting, and a chart.

1. Open the `PlantData` sheet and select any cell inside the data.

2. At the top right, click **Ask Gemini** to open the side panel, if it is not already open.

![Ask Gemini panel in Google Sheets](images/gemini-in-sheets-panel.png)

3. Ask Gemini to format the table. Paste:

```text
On PlantData, format the data as a clean table:
- Bold and freeze the header row if needed
- Autofit useful column widths for Plant ID, Country, Region, Plant Type, Reporting Quarter, and Transition Plan Published
- Keep all existing columns
Do not delete rows.
```

4. Review Gemini's proposal. If asked, apply or insert the suggested formatting when it looks correct.

5. Add header filters with Gemini:

```text
On PlantData, turn on filters for the header row so I can filter Region, Plant Type, Reporting Quarter, and Transition Plan Published.
```

6. Manually verify filters: click a header filter arrow and confirm you can filter **Region** values such as `Europe`, `Latin America`, and `Asia, Middle East and Africa`.

7. Add conditional formatting for transition plan status:

```text
On PlantData, apply conditional formatting to the rows based on the Transition Plan Published column:
- Yes = light green fill
- No = light red fill
```

8. Create a chart with Gemini:

```text
Using PlantData, create an editable column chart that shows average Specific Net CO2 (kg per tonne cementitious) by Region.
Title the chart "Average Specific Net CO2 by Region".
Insert it into a new sheet.
```

9. Click **Insert** when Gemini previews the chart. Open the new chart sheet if Gemini creates one and confirm the chart is editable.

![Formatted filtered table with conditional formatting](images/formatted-filtered-table.png)

![Conditional formatting and chart from Gemini](images/conditional-formatting-chart.png)

> [!TIP]
> If Gemini cannot act on the full table, select a smaller visible range first, or ask: `Summarize average Specific Net CO2 by Region in a new sheet named RegionSummary, then chart that summary.`

### Task 3: Ask Gemini focused analysis questions

In this task, you use **Ask Gemini** on `PlantData` to answer questions a Sustainability analyst actually asks. Each prompt names the sheet, the columns, and one result. You check that result before you trust it.

> [!IMPORTANT]
> Do not ask Gemini to "analyze this CSV." `PlantData` is only 100 rows, so Gemini can read it, but one vague prompt still invents a story. Ask one question per prompt, and read the proposal before you apply it. If a proposal deletes rows, changes Plant ID, or replaces `N/A` with a number, cancel it or undo until `PlantData` again has 100 data rows.
>
> Gemini can count, list, filter, and calculate averages from columns that are already in the sheet. It should not invent Specific Net CO2, emissions, or a thermal substitution rate, and it cannot forecast next year's emissions from four quarters of training data.

1. Open the `PlantData` sheet. If the side panel is closed, click **Ask Gemini**.

2. Find missing or blank values. Paste:

```text
On PlantData only, find missing or blank cells.
For each column, report how many blank cells there are.
Do not fill or guess any values yet.
List the columns with the most blanks first.
```

3. Spot-check one column. Filter that column for blanks (empty) and compare the count with Gemini's number. A count of zero blanks matches this file.

4. Ask what the non-numeric thermal values mean, and leave them unchanged. Paste:

```text
On PlantData, some rows store N/A in Thermal Substitution Rate (%).
How many rows show N/A, and which Plant Type are they?
Do not replace N/A with a number, with zero, or with Unknown.
Do not change any other column.
Tell me the row count and the Plant Type. If you would have filled those cells, say what you refused to write and why.
```

5. Confirm the `N/A` rows are **Grinding Station** and that **Integrated Plant** rows contain a number. If Gemini proposes a filled-in rate, reject it.

> [!WARNING]
> `N/A` means thermal substitution does not apply to that plant type. It is not a blank for Gemini to guess. Reject any proposal that writes a thermal substitution rate, Specific Net CO2, or emissions value that was not already in the cell.

6. List the unique values in use. Paste:

```text
Using PlantData, create a new sheet named MasterData.
For each of these columns, list the unique values and how many rows use each value:
Region, Country, Plant Type, Reporting Quarter, Transition Plan Published.
Sort each list by count, highest first.
Do not delete or rewrite PlantData.
```

7. Open `MasterData`. Confirm each list is a short set of labels. Plant Type should list `Integrated Plant` and `Grinding Station`. Transition Plan Published should list `Yes` and `No`. Reporting Quarter should list `Q1 2025`, `Q2 2025`, `Q3 2025`, and `Q4 2025`.

> [!NOTE]
> This is a master-data check. Near-duplicate labels (for example Europe and EU) will split your charts. Plant ID is an identifier. Each plant appears on four rows, one per quarter, so a row count is not a plant count.

8. Count plants and average Specific Net CO2. The region chart already shows the average. This step adds a table you can audit, including a plant count that does not treat four quarters as four plants. Paste:

```text
Using PlantData, create a new sheet named RegionMetrics.
For each Region, calculate:
- Count of distinct Plant ID
- Count of rows
- Average Specific Net CO2 (kg per tonne cementitious)
Sort by the average, highest first.
Do not add a chart. I want the numbers so I can check them.
Do not change PlantData.
```

9. Compare `RegionMetrics` with the Average Specific Net CO2 by Region chart. The region order should agree. Row count for each region should be about four times the distinct plant count. If Gemini counted rows as plants, ask it to count distinct Plant ID.

10. Locate plants that meet several conditions. Paste:

```text
On PlantData, list rows that meet all of these conditions:
- Region is Europe
- Plant Type is Grinding Station
- Transition Plan Published is No
- Reporting Quarter is Q4 2025
Return Plant ID, Country, Region, Plant Type, Reporting Quarter, Specific Net CO2 (kg per tonne cementitious), and Transition Plan Published.
Put the matching rows on a new sheet named LocatedPlants.
If none match, say so and tell me which condition removed everyone.
Do not change PlantData.
```

11. If `LocatedPlants` has no data rows, run the prompt again without the Reporting Quarter condition.

12. Look up one plant by ID. Copy a Plant ID from `LocatedPlants`. If that sheet is empty, copy any Plant ID from `PlantData`. Replace `PASTE_PLANT_ID` in this prompt, then paste:

```text
On PlantData, look up Plant ID PASTE_PLANT_ID.
Return every column for that ID on a new sheet named PlantLookup.
If the ID appears more than once, return every matching row and say how many.
Do not summarize. Show the stored values.
Do not change PlantData.
```

13. Confirm `PlantLookup` has one row per quarter for that plant, and that one of those rows matches the source row on `PlantData` (Ctrl/Cmd + F).

14. Calculate transition-plan coverage on two dimensions. Paste:

```text
Using PlantData, create a new sheet named TransitionCoverage.
Calculate the percentage of plants where Transition Plan Published is Yes, grouped separately by:
- Region
- Plant Type
Count distinct Plant ID, not rows. Each plant appears once per quarter.
For each group show plant count, count of plants with Yes, and Yes percent.
Round percents to one decimal place.
Above the tables, state that these figures come from the synthetic FY2025 training file, not a published Holcim report.
Do not change PlantData.
```

15. Check one percent by hand: plants with `Yes` divided by plant count for that group. If Gemini counted quarterly rows instead of distinct Plant ID, ask it to recalculate.

16. Ask for an insight the sheets can support, and for the limit Gemini must state. Paste:

```text
Using only RegionMetrics, TransitionCoverage, and PlantData:
1. Write three short observations. Each observation must cite a number from RegionMetrics or TransitionCoverage.
2. On Integrated Plant rows only, say whether Specific Net CO2 (kg per tonne cementitious) and Thermal Substitution Rate (%) move together. Ignore rows where Thermal Substitution Rate (%) is N/A.
3. Answer this: can you forecast each plant's Specific Net CO2 for 2026? If four quarters of synthetic training data are not enough, answer no, and name what data would be required instead.
Do not create a forecast, a model, or filled-in N/A values.
```

> [!IMPORTANT]
> Treat a 2026 forecast as a failed answer. Four quarters can show a direction. They do not justify a plant-level prediction. Use Gemini to build a table you can check.

**Success criteria**

- Gemini reports the blank counts, and it did not replace Thermal Substitution Rate `N/A` with a number.
- `MasterData` lists the category values, including `Integrated Plant`, `Grinding Station`, `Yes`, and `No`.
- `RegionMetrics` shows a distinct plant count, a row count, and an average Specific Net CO2 per region, and the average order agrees with the region chart.
- `LocatedPlants` lists Europe grinding stations with no published transition plan in `Q4 2025`, or Gemini explains which condition matched nobody.
- `PlantLookup` shows every quarter for the Plant ID you pasted.
- One `TransitionCoverage` percent matches plants with `Yes` divided by plant count.
- The written observations cite those tables and decline to forecast 2026 emissions.

### Task 4: Build a simple Apps Script region chart builder

In this task, you add a small Apps Script project that shows the core pattern: a custom menu, an HTML sidebar, a server function that reads the sheet, and a chart written back to Sheets.

1. In your spreadsheet, open **Extensions** | **Apps Script**.

2. Rename the project to `Holcim Sustainability Region Chart Builder`.

3. Replace any default `Code.gs` content with:

```javascript
/**
 * Holcim Sustainability Lab 02 — simple Apps Script demo
 * Custom menu + HTML sidebar + sheet read/write + chart
 */

var SOURCE_SHEET = 'PlantData';
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

/** Return sorted unique Region values from PlantData. */
function getRegions() {
  var sheet = SpreadsheetApp.getActive().getSheetByName(SOURCE_SHEET);
  if (!sheet) {
    throw new Error('Missing sheet: ' + SOURCE_SHEET);
  }
  var data = sheet.getDataRange().getDisplayValues();
  var regionCol = data[0].indexOf('Region');
  if (regionCol < 0) {
    throw new Error('Region column not found.');
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
 * Filter PlantData to one region, write Gross CO2 Emissions by Reporting
 * Quarter, and insert a column chart on RegionSummary.
 */
function buildRegionChart(region) {
  var ss = SpreadsheetApp.getActive();
  var source = ss.getSheetByName(SOURCE_SHEET);
  if (!source) {
    throw new Error('Missing sheet: ' + SOURCE_SHEET);
  }

  var data = source.getDataRange().getDisplayValues();
  var headers = data[0];
  var regionCol = headers.indexOf('Region');
  var quarterCol = headers.indexOf('Reporting Quarter');
  var co2Col = headers.indexOf('Gross CO2 Emissions (tonnes)');

  var totals = {};
  for (var i = 1; i < data.length; i++) {
    if (String(data[i][regionCol] || '').trim() !== region) {
      continue;
    }
    var quarter = String(data[i][quarterCol] || 'Unknown').trim() || 'Unknown';
    var co2 = Number(data[i][co2Col]);
    if (isNaN(co2)) {
      co2 = 0;
    }
    totals[quarter] = (totals[quarter] || 0) + co2;
  }

  var out = ss.getSheetByName(OUTPUT_SHEET);
  if (!out) {
    out = ss.insertSheet(OUTPUT_SHEET);
  }
  out.clear();
  out.getCharts().forEach(function (chart) {
    out.removeChart(chart);
  });

  var rows = [['Reporting Quarter', 'Gross CO2 Emissions (tonnes)']];
  Object.keys(totals).sort().forEach(function (quarter) {
    rows.push([quarter, totals[quarter]]);
  });
  out.getRange(1, 1, rows.length, 2).setValues(rows);
  out.getRange(1, 1, 1, 2).setFontWeight('bold');

  if (rows.length > 1) {
    var chart = out.newChart()
      .setChartType(Charts.ChartType.COLUMN)
      .addRange(out.getRange(1, 1, rows.length, 2))
      .setOption('title', 'Gross CO2 Emissions by Quarter — ' + region)
      .setPosition(2, 4, 0, 0)
      .build();
    out.insertChart(chart);
  }

  return {
    region: region,
    quarters: rows.length - 1
  };
}
```

4. In Apps Script, click **+** next to **Files** | **HTML**. Name the file `Sidebar` (Apps Script adds `.html`). Replace the default contents with:

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
    <p>Pick a <strong>Region</strong> from <code>PlantData</code>. Apps Script will write a summary and column chart to <code>RegionSummary</code>.</p>

    <label for="region">Region</label>
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

7. Choose **Holcim Labs** | **Open region chart builder**.

> [!NOTE]
> The first run asks you to authorize the script. Review the permissions, choose your lab Google account, and allow access to the spreadsheet.

![Apps Script region chart builder sidebar](images/apps-script-sidebar.png)

8. In the sidebar, choose the Region `Asia, Middle East and Africa`, and then click **Build chart**. Open the `RegionSummary` sheet and confirm a quarterly table and column chart appear.

9. Run it again with a different region, and confirm `RegionSummary` refreshes.


**What this demo teaches**

| Piece               | What it does                                        |
| ------------------- | --------------------------------------------------- |
| `onOpen`            | Adds the **Holcim Labs** menu when the Sheet opens  |
| `Sidebar.html`      | Simple HTML UI in a sidebar                         |
| `google.script.run` | Lets the sidebar call functions in `Code.gs`        |
| `buildRegionChart`  | Reads sheet data, writes a summary, inserts a chart |

### Bonus Task 5: Extend the Apps Script sidebar with Gemini

Use Gemini to turn your simple region chart builder into a richer Sustainability analytics sidebar.

1. With the help of Gemini, try to upgrade the sidebar so it can filter on more columns and build more than one chart type. Try things like:

```text
Upgrade this Apps Script sidebar and Code.gs for a Holcim Sustainability plant sheet named PlantData.
Add dropdowns for Region, Plant Type, and Reporting Quarter.
When I click Build, filter PlantData with those choices, write the matching rows to a sheet named ExplorerResults, and create a column chart of average Specific Net CO2 by Plant Type.
Keep the code short and commented. Return complete Code.gs and Sidebar.html files I can paste.
```

```text
Using the same Apps Script project, add a Chart type dropdown with Column and Line options.
Also add a Metric dropdown with Specific Net CO2, Thermal Substitution Rate, and Renewable Electricity.
Build the selected chart type from the selected metric, averaged by Reporting Quarter, after applying the region and plant type filters.
Return the full updated Code.gs and Sidebar.html.
```

2. Paste Gemini's updated files into Apps Script, save, reload the Sheet, and test the new sidebar. Fix any errors by pasting the error message back into Gemini and asking for a corrected version.

## Congratulations!

In this lab, you have:

- Created a Google Sheet and imported synthetic plant sustainability CSV data from Google Drive.
- Used Gemini in Sheets to format a table, add header filters, apply conditional formatting, and insert a chart.
- Asked Gemini one question at a time to find missing values, list unique categories, locate and look up plants, and calculate transition-plan coverage, including questions this file cannot answer.
- Built a simple Apps Script menu and sidebar that charted one region's CO2 emissions by quarter.

![ROI Training](./images/roi-logo-with-name.png)
