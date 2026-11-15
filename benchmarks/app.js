(function () {
  'use strict';
  const H = window.BenchmarkHistory;
  const $ = id => document.getElementById(id);
  const ns = 'http://www.w3.org/2000/svg';
  function el(tag, text, className) {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
  }
  function svg(tag, attributes, text) {
    const node = document.createElementNS(ns, tag);
    for (const [name, value] of Object.entries(attributes || {})) node.setAttribute(name, value);
    if (text !== undefined) node.textContent = text;
    return node;
  }
  const fixed = x => x === null ? 'Unscored' : x.toFixed(2);
  function option(select, value, label) {
    const node = el('option', label); node.value = value; select.append(node);
  }
  function link(label, href) {
    const node = el('a', label); node.href = href; return node;
  }
  function describe(row, metric) {
    const r = row.result;
    const v = H.value(row, metric);
    return row.run.date + ', ' + row.run.model + ', ' + r.strategy + ', ' + r.budget + ': ' +
      (metric === 'diagnostic' ? 'diagnostic credit ' + fixed(v) : 'critical retention ' + (v === null ? 'unavailable' : (v * 100).toFixed(0) + '%')) +
      '; ' + r.scored + ' scored, ' + r.skipped + ' skipped, ' + r.missing + ' missing of ' + r.planned + ' planned.';
  }
  function tableRows(selected) {
    const body = $('results'); body.replaceChildren();
    for (const row of selected) {
      const {run, result: r} = row;
      const tr = el('tr'); tr.id = row.id;
      const a = el('td'); a.append(link(run.date, '#run-' + run.id), el('small', run.model), el('small', run.id));
      const b = el('td', r.strategy); b.append(el('small', r.budget));
      const c = el('td'); c.append(el('span', fixed(r.mean_outcome), r.mean_outcome === null ? 'unscored' : 'score'), el('small', r.scored + ' scored answer' + (r.scored === 1 ? '' : 's')));
      const d = el('td', r.critical_retained + ' / ' + r.critical_total); d.append(el('small', r.critical_total ? (100 * r.critical_retained / r.critical_total).toFixed(0) + '% of critical input items' : 'No critical items measured'));
      const e = el('td', r.planned + ' planned'); e.append(el('small', r.scored + ' scored · ' + r.skipped + ' skipped · ' + r.missing + ' missing'));
      const f = el('td'); for (const [verdict, n] of Object.entries(r.verdicts)) f.append(el('div', verdict.replaceAll('_', ' ') + ': ' + n));
      tr.append(a,b,c,d,e,f); body.append(tr);
    }
    if (!selected.length) { const tr = el('tr'); const td = el('td', 'No groups match these filters. Reset filters to see all observations.'); td.colSpan = 6; tr.append(td); body.append(tr); }
  }
  function draw(selected, metric, data, color) {
    const chart = $('history-chart'); chart.replaceChildren();
    const label = metric === 'diagnostic' ? 'Mean diagnostic credit (0–1)' : 'Critical evidence retained (fraction, 0–1)';
    const lines = H.segments(selected, metric, data.benchmark.id);
    const count = selected.filter(row => H.value(row, metric) !== null).length;
    chart.append(svg('title', {id: 'chart-title'}, label + ' over observation dates'));
    chart.append(svg('desc', {id: 'chart-desc'}, selected.length + ' selected groups; ' + count + ' measured points. ' + lines.length + ' comparable connecting segments. Unscored or unavailable values appear in a separate strip below the scale, never at zero. Dates are offset slightly within each day to separate markers. The complete values and coverage are in the following table.'));
    chart.append(svg('text', {x: 68, y: 24}, label));
    for (const v of [0, .25, .5, .75, 1]) {
      const y = 275 - v * 220;
      chart.append(svg('line', {x1: 68, x2: 920, y1: y, y2: y, class: 'gridline'}), svg('text', {x: 22, y: y + 5}, v.toFixed(2)));
    }
    // Use the full published date domain so filtering cannot visually move a run.
    const dates = [...new Set(data.runs.map(run => run.date))].sort();
    const start = Date.parse(dates[0]), end = Date.parse(dates[dates.length - 1]);
    const xDate = d => start === end ? 490 : 140 + (Date.parse(d) - start) / (end - start) * 690;
    const xRow = row => {
      const siblings = data.runs.flatMap(run => run.date === row.run.date ? H.rows({runs: [run]}) : []);
      const index = siblings.findIndex(s => s.id === row.id);
      return xDate(row.run.date) + (index - (siblings.length - 1) / 2) * 17;
    };
    const yRow = row => H.value(row, metric) === null ? 319 : 275 - H.value(row, metric) * 220;
    chart.append(svg('line', {x1: 68, x2: 920, y1: 319, y2: 319, class: 'gridline'}), svg('text', {x: 5, y: 341}, 'Unscored / unavailable'));
    for (const d of dates) chart.append(svg('text', {x: xDate(d), y: 366, 'text-anchor': 'middle'}, d));
    for (const [a,b] of lines) chart.append(svg('line', {x1: xRow(a), x2: xRow(b), y1: yRow(a), y2: yRow(b), stroke: color(a.result.strategy), class: 'trend'}));
    for (const row of selected) {
      const x = xRow(row), y = yRow(row), r = row.result;
      const a = svg('a', {href: '#' + row.id, 'aria-label': describe(row, metric), tabindex: '0'});
      a.append(svg('title', {}, describe(row, metric)));
      const attrs = {fill: H.value(row, metric) === null ? '#ffd087' : color(r.strategy), class: 'marker'};
      if (r.budget === 'unrestricted') a.append(svg('rect', {...attrs, x: x-6, y: y-6, width: 12, height: 12, rx: 1}));
      else a.append(svg('circle', {...attrs, cx: x, cy: y, r: 7}));
      chart.append(a);
    }
    $('chart-caption').textContent = lines.length ? 'Lines connect only complete matching evaluation signatures on distinct dates. Points remain small-sample observations. Markers are offset within each date for readability.' : 'No comparable time series in this selection. Isolated points are observations, not a trend. Markers are offset within each date for readability.';
  }
  function details(data, cohortNames) {
    const container = $('run-details'); container.replaceChildren();
    for (const run of data.runs) {
      const article = el('article', undefined, 'run-card'); article.id = 'run-' + run.id;
      article.append(el('h3', run.date + ' / ' + run.id));
      const dl = el('dl', undefined, 'run-meta');
      const c = run.coverage, m = run.methodology || {};
      const facts = [
        ['Status', run.status], ['Declared execution', run.model + ' · ' + (run.provider || 'unknown provider') + ' · ' + (run.effort || 'unknown effort') + ' effort'],
        ['Evaluation conditions', cohortNames.get(H.conditions(run)) || 'Incomplete declarations · no trend eligibility'],
        ['Source revision', run.source_revision || 'Unknown'], ['Versions', ['dataset_version','prompt_version','response_schema_version','scoring_version'].map(k => m[k] || 'unknown').join(' / ')],
        ['Selected pool', (m.scenarios || []).join(', ') || 'Unknown'], ['Input sizes / repetitions', (m.sizes || []).join(', ') + ' / ' + (run.repetitions || 'unknown')],
        ['Coverage', c.planned_records + ' planned · ' + c.model_responses + ' model responses · ' + c.scored_answers + ' scored answers · ' + c.skipped_records + ' skipped'],
        ['Record completeness', c.observed_call_records + ' call records / ' + c.observed_score_records + ' score records · ' + c.missing_call_records + ' missing calls · ' + c.missing_score_records + ' missing scores']
      ];
      for (const [name, value] of facts) dl.append(el('dt', name), el('dd', value));
      article.append(dl);
      const list = el('ul'); for (const note of run.notes) list.append(el('li', note)); article.append(list);
      const disclosure = el('details'); disclosure.append(el('summary', 'Declared fixture hashes and execution options'), el('pre', JSON.stringify(m, null, 2))); article.append(disclosure, link('Permanent link to this run', '#run-' + run.id)); container.append(article);
    }
  }
  function revealInitialFragment() {
    let id;
    try { id = decodeURIComponent(window.location.hash.slice(1)); }
    catch { return; }
    if (!/^(run-|result-)/.test(id)) return;
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({block: 'start'});
  }
  function mount(data) {
    const all = H.rows(data);
    const names = new Map();
    for (const run of data.runs) {
      const key = H.conditions(run);
      if (key && !names.has(key)) names.set(key, 'Conditions ' + (names.size + 1) + ' · ' + run.methodology.scenarios.length + ' scenario(s) / ' + run.methodology.sizes.length + ' size(s)');
    }
    const keys = [...names.keys()];
    keys.forEach((key, i) => option($('cohort'), String(i), names.get(key)));
    if (data.runs.some(run => H.conditions(run) === null)) option($('cohort'), 'unknown', 'Incomplete declarations · no trend eligibility');
    data.runs.forEach(run => option($('run'), run.id, run.date + ' · ' + run.id));
    const strategies = [...new Set(all.map(row => row.result.strategy))].sort();
    strategies.forEach(s => option($('strategy'), s, s));
    const colors = ['#00f0ff', '#caa1ff', '#83e5a9', '#ffc576', '#ff9faf'];
    const color = s => colors[strategies.indexOf(s) % colors.length];
    const summary = $('summary');
    const sum = k => data.runs.reduce((n,run) => n + run.coverage[k],0);
    for (const [value, label] of [[data.runs.length, 'pilot runs'], [sum('model_responses') + ' / ' + sum('planned_records'), 'responses / planned records'], [sum('scored_answers'), 'scored answers'], [sum('skipped_records') + ' / ' + sum('missing_score_records'), 'skipped / missing scores']]) {
      const card = el('div', undefined, 'summary-card'); card.append(el('strong', String(value)), el('span', label)); summary.append(card);
    }
    details(data, names);
    const legend = $('legend');
    for (const s of strategies) { const label = el('span'); const swatch = el('i', undefined, 'swatch'); swatch.style.backgroundColor = color(s); swatch.setAttribute('aria-hidden', 'true'); label.append(swatch, document.createTextNode(s)); legend.append(label); }
    legend.append(el('span', '■ unrestricted budget · ● capped budget'), el('span', 'Amber: unscored / unavailable'));
    function render() {
      const metric = $('metric').value, runId = $('run').value, strategy = $('strategy').value, cohort = $('cohort').value;
      const selected = all.filter(row => (runId === 'all' || row.run.id === runId) && (strategy === 'all' || row.result.strategy === strategy) &&
        (cohort === 'all' || (cohort === 'unknown' ? H.conditions(row.run) === null : H.conditions(row.run) === keys[Number(cohort)])));
      tableRows(selected); draw(selected, metric, data, color);
      $('view-summary').textContent = selected.length + ' of ' + all.length + ' result groups shown · ' + new Set(selected.map(row => row.run.id)).size + ' run(s) · ' + (metric === 'diagnostic' ? 'diagnostic credit' : 'critical evidence retention') + '. Filters do not change evaluation comparability.';
    }
    document.querySelector('.filters').addEventListener('change', render);
    $('reset-filters').addEventListener('click', () => {
      for (const [id, value] of Object.entries({metric: 'diagnostic', cohort: 'all', run: 'all', strategy: 'all'})) $(id).value = value;
      render();
    });
    $('load-status').textContent = 'Curated data updated ' + data.updated + '. Historical model declarations; no current-performance claim.';
    $('explorer').hidden = false; render();
    revealInitialFragment();
  }
  fetch('data.json', {cache: 'no-cache'}).then(response => {
    if (!response.ok) throw new Error('Data request failed.');
    return response.json();
  }).then(data => mount(H.validate(data))).catch(() => {
    $('explorer').hidden = true; $('summary').replaceChildren();
    $('load-status').textContent = 'The curated observations could not be loaded or validated. No chart or scores are shown. Download the JSON to inspect the records, or try again later.';
    $('load-status').className = 'notice';
    $('run-details').replaceChildren(el('p', 'Run details are unavailable. The curated JSON download and methodology remain available.'));
  });
})();
