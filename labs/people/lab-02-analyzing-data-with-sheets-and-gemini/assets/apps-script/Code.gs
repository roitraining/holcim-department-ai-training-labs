/**
 * Holcim People Lab 02 — Workforce Explorer sidebar
 * Paste into Apps Script (Code.gs). Pair with Sidebar.html.
 */

var SOURCE_SHEET = 'LabWorkingSet';
var RESULTS_SHEET = 'ExplorerResults';

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Holcim Labs')
    .addItem('Open workforce explorer', 'showExplorerSidebar')
    .addToUi();
}

function showExplorerSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('Sidebar')
    .setTitle('Workforce explorer')
    .setWidth(320);
  SpreadsheetApp.getUi().showSidebar(html);
}

/** Returns distinct values for sidebar dropdowns. */
function getFilterOptions() {
  var sheet = SpreadsheetApp.getActive().getSheetByName(SOURCE_SHEET);
  if (!sheet) {
    throw new Error('Missing sheet: ' + SOURCE_SHEET + '. Complete the earlier lab tasks first.');
  }
  var values = sheet.getDataRange().getDisplayValues();
  if (values.length < 2) {
    throw new Error(SOURCE_SHEET + ' has no data rows.');
  }
  var headers = values[0];
  var idx = {
    status: headers.indexOf('Employment Status'),
    region: headers.indexOf('Management Region'),
    gender: headers.indexOf('Gender'),
    jobLevel: headers.indexOf('Job Level')
  };
  Object.keys(idx).forEach(function (key) {
    if (idx[key] < 0) {
      throw new Error('Required column missing for ' + key);
    }
  });

  return {
    headers: headers,
    statuses: uniqueSorted(values, idx.status),
    regions: uniqueSorted(values, idx.region),
    genders: uniqueSorted(values, idx.gender),
    jobLevels: uniqueSorted(values, idx.jobLevel)
  };
}

function uniqueSorted(values, colIndex) {
  var seen = {};
  for (var r = 1; r < values.length; r++) {
    var v = String(values[r][colIndex] || '').trim();
    if (v) {
      seen[v] = true;
    }
  }
  return Object.keys(seen).sort();
}

/**
 * Filters LabWorkingSet, writes ExplorerResults, builds a chart.
 * @param {Object} criteria
 */
function runExplorer(criteria) {
  var ss = SpreadsheetApp.getActive();
  var source = ss.getSheetByName(SOURCE_SHEET);
  if (!source) {
    throw new Error('Missing sheet: ' + SOURCE_SHEET);
  }

  var data = source.getDataRange().getDisplayValues();
  var headers = data[0];
  var col = {
    status: headers.indexOf('Employment Status'),
    region: headers.indexOf('Management Region'),
    gender: headers.indexOf('Gender'),
    jobLevel: headers.indexOf('Job Level'),
    fte: headers.indexOf('FTE')
  };

  var filtered = data.slice(1).filter(function (row) {
    if (criteria.status && criteria.status !== '(All)' && row[col.status] !== criteria.status) {
      return false;
    }
    if (criteria.region && criteria.region !== '(All)' && row[col.region] !== criteria.region) {
      return false;
    }
    if (criteria.gender && criteria.gender !== '(All)' && row[col.gender] !== criteria.gender) {
      return false;
    }
    if (criteria.jobLevel && criteria.jobLevel !== '(All)' && row[col.jobLevel] !== criteria.jobLevel) {
      return false;
    }
    return true;
  });

  var sortCol = headers.indexOf(criteria.sortColumn || 'User ID');
  if (sortCol < 0) {
    sortCol = 0;
  }
  var ascending = criteria.sortDirection !== 'DESC';
  filtered.sort(function (a, b) {
    var av = a[sortCol] || '';
    var bv = b[sortCol] || '';
    if (av < bv) {
      return ascending ? -1 : 1;
    }
    if (av > bv) {
      return ascending ? 1 : -1;
    }
    return 0;
  });

  var out = ss.getSheetByName(RESULTS_SHEET);
  if (!out) {
    out = ss.insertSheet(RESULTS_SHEET);
  }
  out.clear();
  out.getCharts().forEach(function (chart) {
    out.removeChart(chart);
  });

  var output = [headers].concat(filtered);
  out.getRange(1, 1, output.length, headers.length).setValues(output);
  out.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  out.setFrozenRows(1);
  if (output.length > 1) {
    out.getRange(1, 1, output.length, headers.length).createFilter();
  }

  var groupColName = criteria.chartGroupBy || 'Management Region';
  var groupCol = headers.indexOf(groupColName);
  if (groupCol < 0) {
    groupCol = col.region;
    groupColName = 'Management Region';
  }

  var counts = {};
  filtered.forEach(function (row) {
    var key = String(row[groupCol] || 'Unknown').trim() || 'Unknown';
    var fte = parseFloat(row[col.fte]);
    if (isNaN(fte)) {
      fte = 1;
    }
    counts[key] = (counts[key] || 0) + fte;
  });

  var summaryStartCol = headers.length + 3;
  out.getRange(1, summaryStartCol, 1, 2).setValues([[groupColName, 'FTE total']]);
  var keys = Object.keys(counts).sort();
  var summaryRows = keys.map(function (k) {
    return [k, counts[k]];
  });
  if (summaryRows.length) {
    out.getRange(2, summaryStartCol, summaryRows.length, 2).setValues(summaryRows);
  }

  var chartType = (criteria.chartType || 'COLUMN').toUpperCase();
  var chartBuilder = out.newChart()
    .addRange(out.getRange(1, summaryStartCol, Math.max(summaryRows.length, 1) + 1, 2))
    .setOption('title', 'FTE by ' + groupColName)
    .setPosition(2, summaryStartCol + 3, 0, 0);

  if (chartType === 'PIE') {
    chartBuilder.setChartType(Charts.ChartType.PIE);
  } else if (chartType === 'BAR') {
    chartBuilder.setChartType(Charts.ChartType.BAR);
  } else {
    chartBuilder.setChartType(Charts.ChartType.COLUMN);
  }

  out.insertChart(chartBuilder.build());

  return {
    rowCount: filtered.length,
    resultsSheet: RESULTS_SHEET
  };
}
