# Benchmark history maintenance

This is a buildless static page at `/benchmarks/`. `data.json` is the only source of published results; `history.js` validates records and computes comparability, while `app.js` renders them using DOM text operations. There are no package installs, generated assets, runtime APIs or benchmark calls.

## Add a reviewed observation

1. Curate an aggregate publication record from reviewed evidence outside this repository. Confirm permission to publish every field. Never copy private prompts, logs, responses, paths, operational catalogs, credentials, usage costs or internal links here.
2. Append a run to `data.json`, preserving existing historical records byte-for-byte where possible. Update `updated` to the review date. Keep original scoring and schema versions; a new scorer is a new observation, never a silent historical rescore. Do not add synthetic demonstration points to the published data.
3. Record date, declared model/provider/effort, source revision, repetitions, exact methodology, coverage, notes and results. Model labels are declarations, not authenticated execution. Do not imply current performance from an old run.
4. Independently verify every value against the approved source. Verify counts, sample pools, partial diagnostic credit, missing/skip handling and fixture hashes. Small samples do not justify rankings, confidence intervals or a claim of improvement.
5. Run `node benchmarks/history.test.js` from the repository root. This validates the publication and exercises corruption rejection, comparison boundaries and the real browser controller. It does not execute a model, rescore a run or install anything.
6. Preview with `python3 -m http.server 8000 --bind 127.0.0.1` from the repository root, then visit `http://127.0.0.1:8000/benchmarks/`. Check desktop and narrow mobile widths, keyboard focus and filters, both metrics, empty selections, result links, run anchors, JSON download and a blocked-data/error view. Disable JavaScript and verify the download/methodology fallback. Stop the server when done.
7. Review the complete diff and privacy boundary. Publish through the repository's PR, review and branch gates to `gh-pages`; no domain, Pages setting, workflow or migration changes are needed. After merge, verify the Pages build and the live `/benchmarks/` page and data. A local test pass is not a deployment check.

## Schema 1

Top-level fields: `schema_version: 1`, ISO calendar `updated`, `benchmark` (`id`, `name`, `description`), `metric` (`id: mean_diagnostic_credit`, `unit: fraction`, `minimum: 0`, `maximum: 1`, definition) and nonempty `runs`.

Each run has a unique lowercase hyphenated `id` (used for permanent anchors), ISO calendar `date`, declared `model`, `status`, and the following evaluation declarations:

- `source_revision`: full 40-character revision; `provider`, `effort`, positive integer `repetitions`.
- `methodology`: `dataset_version`, `prompt_version`, `response_schema_version`, `scoring_version`, nonnegative integer `seed`, nonempty unique `scenarios` and `sizes`, `fixture_hashes` keyed as `scenario@size` with full SHA-256 values for the exact pool, `token_estimator`, and SHA-256-prefixed `generation_fingerprint`, `strategy_options_fingerprint`, `provider_extra_args_fingerprint`.
- `coverage`: nonnegative integer `planned_records`, `observed_call_records`, `observed_score_records`, `scored_answers`, `model_responses`, `skipped_records`, `missing_call_records`, `missing_score_records`.
- `notes`: public text array; `results`: nonempty groups unique by `strategy` + `budget`.

Each result has `strategy`, `budget`, nonnegative integer `planned`, `scored`, `skipped`, `missing`, `critical_retained`, `critical_total`, and integer `verdicts` counts. `planned` is positive and equals `scored + skipped + missing`; verdict counts cover all planned records, including unscored outcomes. `mean_outcome` is a finite diagnostic-credit fraction (0–1) if `scored > 0`, otherwise exactly `null`. Never coerce a missing value to 0. Retained critical counts cannot exceed totals; a zero critical total yields unavailable retention, not zero retention.

Group totals must reconcile with run coverage. Observed score/call records equal planned minus their respective missing counts. Responses must include all scored answers and cannot include skipped or missing-call records. A skipped call can have a saved score record marking it unscored. A missing score can still have a response. Keep those different denominators visible.

Omitted/null evaluation declarations can be displayed as unknown, but never authorize a trend. Present malformed fields fail validation. New schema/metric contracts require an explicit renderer and validation update; unsupported schemas fail closed. Stable run anchors are `#run-<id>`; table anchors include the run ID and result index, so preserve result order when updating an old record.

## Comparison policy

The page computes a complete signature; no declared cohort ID is trusted. Source revision, provider, effort, repetitions, scenario pool, sizes, fixture hashes, seed, dataset/prompt/response/scoring versions, token estimator and all three option fingerprints must be complete and equal. Each series also fixes benchmark, strategy, budget and metric. Model and date may vary. Equal unknowns never count as a match. Only scored known values on distinct, unambiguous dates can connect. Both original pilots are intentionally isolated because their pools and source revisions differ.

Critical retention is input evidence availability, separate from diagnosis quality or evidence-citation correctness. It can be shown for an unscored model call when the retained-input counts are known, but that unscored row cannot participate in a trend. Filtering never relaxes comparability or hides missing rows within the selected groups.

Tests create future/synthetic records only in memory to prove that comparable observations can connect and each changed or unknown condition prevents connection. Those records are not publication data.
