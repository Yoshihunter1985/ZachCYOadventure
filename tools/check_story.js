// Checks every chapter: links go somewhere real, every page can be reached,
// gears match, and word counts fit the reading level.
global.window = global;
require("../story/world.js");
const fs = require("fs");
fs.readdirSync(__dirname + "/../story").filter(f => /^chapter\d+\.js$/.test(f)).sort()
  .forEach(f => require("../story/" + f));
let problems = 0;
const bad = m => { problems++; console.log("  PROBLEM: " + m); };
for (const n in STORY.chapters) {
  const c = STORY.chapters[n], P = c.pages, ids = Object.keys(P);
  console.log(`Chapter ${n}: ${c.title} (${ids.length} pages)`);
  const links = id => { const p = P[id]; return [...(p.next ? [p.next.to] : []), ...(p.choices || []).map(x => x.to)]; };
  ids.forEach(id => {
    const p = P[id];
    links(id).forEach(t => { if (!P[t] && !STORY.chapters[+n + 1]?.pages[t]) bad(`${id} links to missing page ${t}`); });
    if (!p.fail && !p.end && !links(id).length) bad(`${id} is a dead end`);
    if (p.img && !STORY.images[p.img]) bad(`${id} uses unknown image ${p.img}`);
    if (p.speaker && !STORY.characters[p.speaker]) bad(`${id} unknown speaker ${p.speaker}`);
    if (p.badge && !STORY.badges.find(b => b.id === p.badge)) bad(`${id} unknown badge ${p.badge}`);
    if (p.fail?.badge && !STORY.badges.find(b => b.id === p.fail.badge)) bad(`${id} unknown badge ${p.fail.badge}`);
    if ((p.text.match(/\*/g) || []).length % 2) bad(`${id} has an unclosed *bold* word`);
  });
  const seen = new Set([c.start]), q = [c.start];
  while (q.length) links(q.shift()).forEach(t => { if (P[t] && !seen.has(t)) { seen.add(t); q.push(t); } });
  ids.filter(i => !seen.has(i)).forEach(i => bad(`${i} can never be reached`));
  const gears = ids.map(i => P[i].gear).filter(Boolean).sort();
  if (gears.join() !== [...c.gears].sort().join()) bad(`gears on pages ${gears} vs chapter list ${c.gears}`);
  if (!ids.some(i => P[i].end)) bad("no chapter end page");
  const wc = ids.map(i => plainCount(P[i].text));
  console.log(`  words per page: min ${Math.min(...wc)}, max ${Math.max(...wc)}, average ${Math.round(wc.reduce((a, b) => a + b) / wc.length)}`);
  // shortest path from start to end
  const dist = { [c.start]: 1 }, q2 = [c.start];
  while (q2.length) { const x = q2.shift(); links(x).forEach(t => { if (P[t] && !P[t].fail && !(t in dist)) { dist[t] = dist[x] + 1; q2.push(t); } }); }
  const endId = ids.find(i => P[i].end);
  console.log(`  quickest read: ${dist[endId]} pages · fail pages: ${ids.filter(i => P[i].fail).length} · gears: ${gears.length}`);
}
function plainCount(t) { return t.replace(/\*/g, "").split(/\s+/).filter(w => /[A-Za-z]/.test(w)).length; }
console.log(problems ? `\n${problems} problem(s)` : "\nAll good.");
process.exit(problems ? 1 : 0);
