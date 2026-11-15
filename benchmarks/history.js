/* Shared data boundary and comparison rules; usable in a browser or Node. */
(function (root) {
  'use strict';
  const fail = message => { throw new Error(message); };
  const object = x => x !== null && typeof x === 'object' && !Array.isArray(x);
  const text = x => typeof x === 'string' && x.trim().length > 0;
  const knownText = x => text(x) && !/^(?:unknown|unspecified|unavailable|not[ _-]?(?:known|recorded|specified|available)|missing|none|null|undefined|n\/?a|\?)$/i.test(x.trim());
  const count = x => Number.isSafeInteger(x) && x >= 0;
  const fraction = x => typeof x === 'number' && Number.isFinite(x) && x >= 0 && x <= 1;
  const date = x => typeof x === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(x) && !Number.isNaN(Date.parse(x)) && new Date(x).toISOString().slice(0, 10) === x;
  const strings = x => Array.isArray(x) && x.length > 0 && x.every(text) && new Set(x).size === x.length;
  const sha = x => typeof x === 'string' && /^[a-f0-9]{40}$/.test(x);
  const hash = x => typeof x === 'string' && /^[a-f0-9]{64}$/.test(x);
  const fingerprint = x => typeof x === 'string' && /^sha256:[a-f0-9]{64}$/.test(x);
  const methodFields = ['dataset_version', 'prompt_version', 'response_schema_version', 'scoring_version', 'token_estimator'];
  const fingerprints = ['generation_fingerprint', 'strategy_options_fingerprint', 'provider_extra_args_fingerprint'];
  function canonical(x) {
    if (Array.isArray(x)) return '[' + x.map(canonical).join(',') + ']';
    if (object(x)) return '{' + Object.keys(x).sort().map(k => JSON.stringify(k) + ':' + canonical(x[k])).join(',') + '}';
    return JSON.stringify(x);
  }
  // Missing declarations are allowed for display, but never become known conditions.
  function conditions(run) {
    const m = run.methodology;
    if (!object(m) || !sha(run.source_revision) || !knownText(run.provider) || !knownText(run.effort) || !count(run.repetitions) || run.repetitions === 0 ||
        !methodFields.every(k => knownText(m[k])) || !fingerprints.every(k => fingerprint(m[k])) ||
        !count(m.seed) || !strings(m.scenarios) || !m.scenarios.every(knownText) || !strings(m.sizes) || !m.sizes.every(knownText) || !object(m.fixture_hashes)) return null;
    const expected = m.scenarios.flatMap(s => m.sizes.map(z => s + '@' + z)).sort();
    if (canonical(Object.keys(m.fixture_hashes).sort()) !== canonical(expected) || !expected.every(k => hash(m.fixture_hashes[k]))) return null;
    return canonical({ source_revision: run.source_revision, provider: run.provider, effort: run.effort, repetitions: run.repetitions,
      ...Object.fromEntries(methodFields.concat(fingerprints).map(k => [k, m[k]])), seed: m.seed,
      scenarios: [...m.scenarios].sort(), sizes: [...m.sizes].sort(), fixture_hashes: m.fixture_hashes });
  }
  function validate(data) {
    if (!object(data) || data.schema_version !== 1 || !date(data.updated) || !object(data.benchmark) || !text(data.benchmark.id) || !text(data.benchmark.name) || !text(data.benchmark.description) ||
        !object(data.metric) || data.metric.id !== 'mean_diagnostic_credit' || data.metric.minimum !== 0 || data.metric.maximum !== 1 || data.metric.unit !== 'fraction' || !text(data.metric.definition) ||
        !Array.isArray(data.runs) || !data.runs.length) fail('Unsupported or incomplete benchmark data.');
    const ids = new Set();
    for (const run of data.runs) {
      if (!object(run) || !text(run.id) || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(run.id) || ids.has(run.id) || !date(run.date) || run.date > data.updated || !text(run.model) || !text(run.status) || !object(run.coverage) || !Array.isArray(run.results) || !run.results.length || !Array.isArray(run.notes) || !run.notes.every(text)) fail('Invalid or duplicate run.');
      ids.add(run.id);
      for (const k of ['source_revision', 'provider', 'effort', 'repetitions', 'methodology']) {
        const v = run[k];
        if (v === undefined || v === null) continue;
        if (k === 'source_revision' ? !sha(v) : k === 'repetitions' ? !count(v) || v === 0 : k === 'methodology' ? !object(v) : !text(v)) fail('Invalid run declaration: ' + k);
      }
      const m = run.methodology || {};
      for (const k of methodFields.concat(fingerprints, ['seed', 'scenarios', 'sizes', 'fixture_hashes'])) {
        const v = m[k];
        if (v === undefined || v === null) continue;
        if (methodFields.includes(k) ? !text(v) : fingerprints.includes(k) ? !fingerprint(v) : k === 'seed' ? !count(v) : k === 'fixture_hashes' ? !object(v) || !Object.values(v).every(hash) : !strings(v)) fail('Invalid methodology declaration: ' + k);
      }
      const c = run.coverage;
      const counters = ['planned_records', 'observed_call_records', 'observed_score_records', 'scored_answers', 'model_responses', 'skipped_records', 'missing_call_records', 'missing_score_records'];
      if (!counters.every(k => count(c[k]))) fail('Invalid coverage counts.');
      const groups = new Set();
      let planned = 0, scored = 0, skipped = 0, missing = 0;
      for (const r of run.results) {
        if (!object(r) || !text(r.strategy) || !text(r.budget) || groups.has(canonical([r.strategy, r.budget])) || !['planned', 'scored', 'skipped', 'missing', 'critical_retained', 'critical_total'].every(k => count(r[k])) ||
            r.planned === 0 || r.scored + r.skipped + r.missing !== r.planned || r.critical_retained > r.critical_total ||
            (r.scored === 0 ? r.mean_outcome !== null : !fraction(r.mean_outcome)) || !object(r.verdicts) || !Object.values(r.verdicts).every(count) || Object.values(r.verdicts).reduce((a,b) => a+b,0) !== r.planned) fail('Invalid, duplicate or inconsistent result group.');
        groups.add(canonical([r.strategy, r.budget]));
        planned += r.planned; scored += r.scored; skipped += r.skipped; missing += r.missing;
      }
      if (c.planned_records !== planned || c.scored_answers !== scored || c.skipped_records !== skipped || c.missing_score_records !== missing ||
          c.observed_score_records !== planned - c.missing_score_records || c.observed_call_records !== planned - c.missing_call_records ||
          c.missing_call_records > missing || c.model_responses < scored || c.model_responses > planned - skipped - c.missing_call_records) fail('Run coverage disagrees with result groups.');
    }
    return data;
  }
  function rows(data) {
    return data.runs.flatMap(run => run.results.map((result, index) => ({ run, result, id: 'result-' + run.id + '-' + index })));
  }
  function value(row, metric) {
    if (metric === 'diagnostic') return row.result.mean_outcome;
    if (metric === 'retention') return row.result.critical_total > 0 ? row.result.critical_retained / row.result.critical_total : null;
    return null;
  }
  function signature(row, metric, benchmarkId) {
    const c = conditions(row.run);
    if (!c || !knownText(benchmarkId) || !['diagnostic', 'retention'].includes(metric) || !knownText(row.result.strategy) || !knownText(row.result.budget)) return null;
    return canonical([benchmarkId, c, row.result.strategy, row.result.budget, metric]);
  }
  function segments(selected, metric, benchmarkId) {
    const groups = new Map();
    for (const row of selected) {
      const key = signature(row, metric, benchmarkId);
      if (!key || row.result.scored === 0 || value(row, metric) === null) continue;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(row);
    }
    return [...groups.values()].flatMap(group => {
      group.sort((a,b) => a.run.date.localeCompare(b.run.date));
      // Multiple observations on one date have no unambiguous sequence.
      const unique = group.filter(row => group.filter(other => other.run.date === row.run.date).length === 1);
      return unique.slice(1).map((row, i) => [unique[i], row]);
    });
  }
  const api = { validate, conditions, rows, value, signature, segments };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.BenchmarkHistory = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
