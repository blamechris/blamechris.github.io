'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const H = require('./history.js');
const source = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8'));
const clone = x => JSON.parse(JSON.stringify(x));
let passed = 0;
function test(name, fn) { fn(); passed++; console.log('PASS ' + name); }
const originalRows = H.rows(source);
test('published coverage is 14 runs, 548 planned, 547 scored/responses, 1 skipped, no missing; no published observations connect', () => {
  H.validate(source);
  const total = key => source.runs.reduce((sum, run) => sum + run.coverage[key], 0);
  assert.deepEqual(['planned_records','scored_answers','model_responses','skipped_records','missing_score_records','missing_call_records'].map(total), [548,547,547,1,0,0]);
  assert.equal(source.runs.length,14);
  assert.equal(originalRows.length,42);
  for (const metric of ['diagnostic','retention']) assert.deepEqual(H.segments(originalRows,metric,source.benchmark.id), []);
});
function futurePair() {
  const data = clone(source); data.runs = [data.runs[0]];
  const next = clone(data.runs[0]); next.id = 'synthetic-future'; next.date = '2026-11-14'; next.model = 'synthetic-declared-release'; data.runs.push(next);
  return data;
}
test('synthetic same-condition release history connects only scored groups, with separate metrics', () => {
  const data = futurePair(); H.validate(data);
  assert.equal(H.segments(H.rows(data),'diagnostic',data.benchmark.id).length,3);
  assert.equal(H.segments(H.rows(data),'retention',data.benchmark.id).length,3);
  const row = H.rows(data)[0];
  assert.notEqual(H.signature(row,'diagnostic',data.benchmark.id),H.signature(row,'retention',data.benchmark.id));
});
const breakChanges = [
 ['source_revision', r => r.source_revision = 'f'.repeat(40)],
 ['provider', r => r.provider = 'synthetic-provider'], ['effort', r => r.effort = 'high'], ['repetitions', r => r.repetitions = 2],
 ...['dataset_version','prompt_version','response_schema_version','scoring_version','token_estimator'].map(k => [k,r => r.methodology[k] += '-changed']),
 ...['generation_fingerprint','strategy_options_fingerprint','provider_extra_args_fingerprint'].map(k => [k,r => r.methodology[k] = 'sha256:'+'f'.repeat(64)]),
 ['seed',r => r.methodology.seed++],
 ['fixture hash',r => r.methodology.fixture_hashes[Object.keys(r.methodology.fixture_hashes)[0]] = 'f'.repeat(64)],
 ['scenario pool',r => {const m=r.methodology;m.scenarios=['different'];m.fixture_hashes={'different@1k':'f'.repeat(64)};}],
 ['size pool',r => {const m=r.methodology;m.sizes=['2k'];m.fixture_hashes={[m.scenarios[0]+'@2k']:'f'.repeat(64)};}]
];
for (const [name, change] of breakChanges) test('refuses a connecting line after ' + name + ' changes', () => {
  const data = futurePair(); change(data.runs[1]); H.validate(data);
  assert.deepEqual(H.segments(H.rows(data),'diagnostic',data.benchmark.id),[]);
});
test('strategy, budget and benchmark also partition otherwise comparable results', () => {
  const data=futurePair(); data.runs[1].results.forEach(r => r.strategy+='-different'); H.validate(data);
  assert.deepEqual(H.segments(H.rows(data),'diagnostic',data.benchmark.id),[]);
  const a=originalRows[0], b=clone(a); b.result.budget='different';
  assert.notEqual(H.signature(a,'diagnostic','one'),H.signature(b,'diagnostic','one'));
  assert.notEqual(H.signature(a,'diagnostic','one'),H.signature(a,'diagnostic','two'));
});
const missingFields = ['source_revision','provider','effort','repetitions','methodology',
 ...['dataset_version','prompt_version','response_schema_version','scoring_version','token_estimator','seed','scenarios','sizes','fixture_hashes','generation_fingerprint','strategy_options_fingerprint','provider_extra_args_fingerprint'].map(k=>'methodology.'+k)];
for (const field of missingFields) test('equal unknown ' + field + ' never establishes comparability', () => {
  const data=futurePair();
  for(const r of data.runs) { const parts=field.split('.'); if(parts.length===1) delete r[field]; else delete r[parts[0]][parts[1]]; }
  H.validate(data); assert.equal(H.conditions(data.runs[0]),null);
  assert.deepEqual(H.segments(H.rows(data),'diagnostic',data.benchmark.id),[]);
});
test('placeholder declarations are unknown, even when both records use the same words', () => {
  for (const unknown of ['unknown','UNKNOWN','N/A','not recorded','unspecified','?']) {
    const data=futurePair(); for(const r of data.runs) r.methodology.prompt_version=unknown;
    H.validate(data); assert.equal(H.conditions(data.runs[0]),null);
    assert.deepEqual(H.segments(H.rows(data),'diagnostic',data.benchmark.id),[]);
  }
  for (const key of ['provider','effort']) {
    const data=futurePair();for(const r of data.runs)r[key]='unknown';
    H.validate(data);assert.equal(H.conditions(data.runs[0]),null);
  }
  const data=futurePair();for(const r of data.runs){r.methodology.scenarios=['unknown'];r.methodology.fixture_hashes={'unknown@1k':'a'.repeat(64)};}
  H.validate(data);assert.equal(H.conditions(data.runs[0]),null);
  const row=clone(originalRows[0]); row.result.strategy='unknown';
  assert.equal(H.signature(row,'diagnostic',source.benchmark.id),null);
});
test('unknown and incomplete fixture pools cannot be overridden by cohort labels', () => {
  const data=futurePair(); for(const r of data.runs) {r.cohort='same';r.methodology.fixture_hashes={};}
  H.validate(data); assert.deepEqual(H.segments(H.rows(data),'diagnostic',data.benchmark.id),[]);
});
test('metadata key ordering does not fabricate a version boundary; duplicate dates never imply a sequence', () => {
  const data=futurePair(); const next=data.runs[1]; next.methodology=Object.fromEntries(Object.entries(next.methodology).reverse());
  assert.equal(H.conditions(data.runs[0]),H.conditions(next));
  next.date=data.runs[0].date;
  assert.deepEqual(H.segments(H.rows(data),'diagnostic',data.benchmark.id),[]);
});
test('skipped and missing diagnostic values remain null, while measured critical retention stays separate', () => {
  const skipped=originalRows.find(row => row.result.skipped);
  assert.equal(H.value(skipped,'diagnostic'),null); assert.equal(H.value(skipped,'retention'),1);
  const data=clone(source), run=data.runs[0], r=run.results[0];
  r.scored=0;r.missing=1;r.mean_outcome=null;r.verdicts={not_scored:1};run.coverage.scored_answers--;run.coverage.missing_score_records++;run.coverage.observed_score_records--;
  H.validate(data);assert.equal(H.value(H.rows(data)[0],'diagnostic'),null);
});
const corruptions = [
 ['schema',d=>d.schema_version=2], ['bad date',d=>d.runs[0].date='2026-02-30'], ['duplicate run',d=>d.runs.push(clone(d.runs[0]))],
 ['duplicate result',d=>d.runs[0].results.push(clone(d.runs[0].results[0]))], ['counter type',d=>d.runs[0].results[0].scored='1'],
 ['negative counter',d=>d.runs[0].results[0].missing=-1], ['unsafe integer',d=>d.runs[0].coverage.model_responses=Number.MAX_SAFE_INTEGER+1],
 ['inconsistent group',d=>d.runs[0].results[0].planned=2], ['inconsistent coverage',d=>d.runs[0].coverage.model_responses=1],
 ['inconsistent observed scores',d=>d.runs[0].coverage.observed_score_records=3], ['inconsistent verdict total',d=>d.runs[0].results[0].verdicts.correct=1],
 ['retained greater than total',d=>d.runs[0].results[0].critical_retained=3], ['NaN',d=>d.runs[0].results[0].mean_outcome=NaN],
 ['Infinity',d=>d.runs[0].results[0].mean_outcome=Infinity], ['string score',d=>d.runs[0].results[0].mean_outcome='0'],
 ['out of range',d=>d.runs[0].results[0].mean_outcome=1.01], ['null scored value',d=>d.runs[0].results[0].mean_outcome=null],
 ['zero skipped value',d=>d.runs[0].results[2].mean_outcome=0], ['malformed fingerprint',d=>d.runs[0].methodology.generation_fingerprint='unknown']
];
for(const [name,change] of corruptions) test('rejects corrupt data: '+name,()=>{const d=clone(source);change(d);assert.throws(()=>H.validate(d));});
test('malformed JSON is rejected before the data boundary',()=>assert.throws(()=>JSON.parse('{broken')));
// A small DOM harness executes the real browser controller without installing dependencies.
// Assertions concern rendered records, links, filters and failure behavior, not CSS implementation.
class Node {
  constructor(tag) {this.tag=tag;this.children=[];this.attributes={};this.style={};this.listeners={};this.hidden=false;this.value='all';this._text='';this.scrolls=[];}
  set textContent(v) {this._text=String(v);this.children=[];} get textContent(){return this._text+this.children.map(c=>c.textContent).join('');}
  append(...nodes){this.children.push(...nodes);} replaceChildren(...nodes){this._text='';this.children=[...nodes];}
  scrollIntoView(options){this.scrolls.push(options);}
  setAttribute(k,v){this.attributes[k]=String(v);} addEventListener(k,fn){this.listeners[k]=fn;}
}
async function browser(data, failure=false, options={}) {
  const nodes=new Map(); const get=id=>{if(!nodes.has(id))nodes.set(id,new Node(id));return nodes.get(id);};
  get('metric').value='diagnostic'; const form=new Node('form');
  const find=id=>{
    if (id === 'run-details' || !/^(run-|result-)/.test(id)) return get(id);
    const search=node=>node.id===id?node:node.children.map(search).find(Boolean);
    return [...nodes.values()].map(search).find(Boolean) || null;
  };
  const document={getElementById:find,createElement:tag=>new Node(tag),createElementNS:(_,tag)=>new Node(tag),createTextNode:t=>{const n=new Node('#text');n.textContent=t;return n;},querySelector:()=>form};
  let resolveData;
  const payload=options.deferred?new Promise(resolve=>{resolveData=resolve;}):Promise.resolve(clone(data));
  const location={hash:options.hash || ''};
  const context={window:{BenchmarkHistory:H,location},document,setTimeout:fn=>fn(),fetch:()=>Promise.resolve({ok:!failure,json:()=>payload})};
  vm.runInNewContext(fs.readFileSync(path.join(__dirname,'app.js'),'utf8'),context);
  const settle=async()=>{for(let i=0;i<10;i++) await Promise.resolve();};
  await settle();
  return {nodes,get,form,find,location,resolve:async()=>{resolveData(clone(data));await settle();}};
}
function descendants(node,tag){return node.children.flatMap(c=>[...(c.tag===tag?[c]:[]),...descendants(c,tag)]);}
(async()=>{
  const b=await browser(source);
  test('controller renders every group including skipped, stable anchors and no fabricated trend',()=>{
    assert.equal(b.get('explorer').hidden,false); assert.equal(b.get('results').children.length,originalRows.length);
    assert.equal(descendants(b.get('history-chart'),'a').length,originalRows.length);
    assert.equal(descendants(b.get('history-chart'),'line').filter(n=>n.attributes.class==='trend').length,0);
    const skip=b.get('results').children[2];assert.match(skip.textContent,/Unscored0 scored answers/);assert.match(skip.textContent,/1 skipped/);
    assert.equal(skip.id,originalRows[2].id);assert.equal(descendants(b.get('history-chart'),'a')[2].attributes.href,'#'+skip.id);
    assert.equal(b.get('run-details').children[0].id,'run-'+source.runs[0].id);
  });
  test('run and strategy filters retain exact rows; an empty intersection is explicit',()=>{
    b.get('run').value=source.runs[1].id;b.form.listeners.change();assert.equal(b.get('results').children.length,2);
    b.get('strategy').value='raw';b.form.listeners.change();assert.equal(b.get('results').children.length,1);assert.match(b.get('results').textContent,/2026-11-13/);
    b.get('cohort').value='0';b.form.listeners.change();assert.match(b.get('results').textContent,/No groups match/);assert.equal(descendants(b.get('history-chart'),'a').length,0);
  });
  test('Reset filters explicitly restores all defaults and all rows from an empty retention selection',()=>{
    b.get('metric').value='retention';b.get('cohort').value='0';b.get('run').value=source.runs[1].id;b.get('strategy').value='raw';
    b.form.listeners.change();assert.match(b.get('results').textContent,/No groups match/);
    b.get('reset-filters').listeners.click();
    assert.deepEqual(['metric','cohort','run','strategy'].map(id=>b.get(id).value),['diagnostic','all','all','all']);
    assert.equal(b.get('results').children.length,originalRows.length);assert.match(b.get('view-summary').textContent,new RegExp('^'+originalRows.length+' of '+originalRows.length+' result groups shown'));
    assert.match(b.get('view-summary').textContent,/diagnostic credit/);assert.equal(descendants(b.get('history-chart'),'a').length,originalRows.length);
  });
  for (const targetId of ['run-'+source.runs[0].id,originalRows[2].id]) {
    const hash='#'+targetId;
    const initial=await browser(source,false,{hash,deferred:true});
    test('fresh fragment waits for asynchronous data then reveals '+targetId,()=>{
      assert.equal(initial.find(targetId),null);
    });
    await initial.resolve();
    test('loaded fragment reveals generated target '+targetId+' without changing the URL',()=>{
      assert.equal(initial.find(targetId).scrolls.length,1);
      assert.equal(initial.find(targetId).scrolls[0].block,'start');
      assert.equal(initial.location.hash,hash);
      assert.equal(initial.get('results').children.length,originalRows.length);
    });
  }
  for (const hash of ['','#run-does-not-exist','#result-does-not-exist','#run-%E0%A4%A','#run-%ZZ','#observations','#run-%22%5D%20script']) {
    const initial=await browser(source,false,{hash,deferred:true});await initial.resolve();
    test('missing, static or malformed fragment is harmless: '+JSON.stringify(hash),()=>{
      assert.equal(initial.get('explorer').hidden,false);
      assert.equal(initial.get('results').children.length,originalRows.length);
      assert.equal(initial.location.hash,hash);
      assert.equal(initial.get('run-details').children.reduce((n,node)=>n+node.scrolls.length,0),0);
      assert.equal(initial.get('results').children.reduce((n,node)=>n+node.scrolls.length,0),0);
    });
  }
  const malicious=clone(source);malicious.runs[0].model='<img src=x onerror=alert(1)>';malicious.runs[0].results[0].strategy='<script>bad()</script>';
  const safe=await browser(malicious);
  test('arbitrary labels remain literal text, never parsed DOM',()=>{assert.match(safe.get('results').textContent,/<img src=x/);assert.equal(descendants(safe.get('results'),'img').length,0);assert.equal(descendants(safe.get('results'),'script').length,0);});
  const corrupt=clone(source);corrupt.runs[0].results[0].mean_outcome=7;
  const bad=await browser(corrupt),offline=await browser(source,true);
  test('corrupt data and network errors hide chart and scores with a useful failure message',()=>{for(const b of [bad,offline]){assert.equal(b.get('explorer').hidden,true);assert.match(b.get('load-status').textContent,/could not be loaded or validated/);assert.equal(b.get('summary').children.length,0);}});
  console.log(passed+' tests passed. No benchmark execution or historical rescoring performed.');
})().catch(error=>{console.error(error);process.exitCode=1;});
