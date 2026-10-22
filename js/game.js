(() => {
"use strict";
const S = window.STORY;
const SAVE_KEY = "stolen-hour-save-v1";
const $ = id => document.getElementById(id);

/* ---------------- icons ---------------- */
const ICON = {
  home: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3 2 12h3v8h5v-5h4v5h5v-8h3z"/></svg>',
  speaker: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 4V5L7 9zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z"/></svg>',
  stop: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  rewind: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/><path d="M12 8v4l3 2"/></svg>',
  anchor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="12" cy="5" r="2.5"/><path d="M12 7.5V21M7 11h10M4 14a8 8 0 0 0 16 0"/></svg>',
  trophy: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 3h10v3h3v2a5 5 0 0 1-4.3 5A5 5 0 0 1 13 15.9V18h3v3H8v-3h3v-2.1A5 5 0 0 1 8.3 13 5 5 0 0 1 4 8V6h3zm0 5V8H6a3 3 0 0 0 1 2.2zm10 0v2.2A3 3 0 0 0 18 8z"/></svg>',
  picture: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.8"/><path d="m21 16-5-5-9 9"/></svg>',
  // badge pictures
  goose: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M15 3a3 3 0 0 0-3 3v5.3C9.4 11.8 4 13 4 17c0 2.2 2.5 4 7 4s8-2 8-6c0-2.4-1.6-3.8-4-4.5V7h3l-1.2-2.2A3 3 0 0 0 15 3z"/></svg>',
  feather: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M20 4C11 4 6 10 6 17l-2 3"/><path d="M20 4c0 9-6 13-14 13M10 13h6M8 9h8"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z"/></svg>',
  boom: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 2.2 5.6L20 5l-2.6 5.8L22 12l-4.6 1.2L20 19l-5.8-2.6L12 22l-2.2-5.6L4 19l2.6-5.8L2 12l4.6-1.2L4 5l5.8 2.6z"/></svg>',
  snow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7M9 4l3 2 3-2M9 20l3-2 3 2"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
  music: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 4v10.3A3.5 3.5 0 1 0 11 17.5V8h8V4z"/></svg>',
  baby: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="11" r="7"/><circle cx="9.5" cy="10.5" r="1" fill="#fff"/><circle cx="14.5" cy="10.5" r="1" fill="#fff"/><path d="M10 14a2.5 2.5 0 0 0 4 0" stroke="#fff" stroke-width="1.4" fill="none"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3 6.6 7.2.8-5.4 4.9 1.5 7.1L12 17.8l-6.3 3.6 1.5-7.1L1.8 9.4 9 8.6z"/></svg>'
};
function gearSVG(cls = "") {
  // 10-tooth cog drawn as a polygon
  const teeth = 10, R = 46, r = 37, pts = [];
  for (let i = 0; i < teeth; i++) {
    const a = (i / teeth) * Math.PI * 2, w = Math.PI / teeth;
    [[a - w * .55, r], [a - w * .32, R], [a + w * .32, R], [a + w * .55, r]].forEach(([t, rad]) =>
      pts.push((50 + rad * Math.cos(t)).toFixed(1) + "," + (50 + rad * Math.sin(t)).toFixed(1)));
  }
  return `<svg class="${cls}" viewBox="0 0 100 100" fill="currentColor"><polygon points="${pts.join(" ")}"/><circle cx="50" cy="50" r="15" fill="rgba(0,0,0,.28)"/><circle cx="50" cy="50" r="9" fill="var(--paper, #fbf1df)"/></svg>`;
}
ICON.gear = gearSVG();
ICON.rewindBadge = ICON.rewind;

function tornSVG() {
  let d = "M22 0 L10 0", y = 0;
  while (y < 100) { y += 1.2 + Math.random() * 2.2; d += ` L${(3 + Math.random() * 12).toFixed(1)} ${Math.min(y, 100).toFixed(1)}`; }
  return `<svg viewBox="0 0 22 100" preserveAspectRatio="none"><path d="${d} L22 100 Z" fill="currentColor"/></svg>`;
}

/* ---------------- save ---------------- */
const fresh = () => ({ page: null, anchor: null, gears: [], badges: [], flags: {}, rewinds: 0, flip: false, started: false });
let state = fresh();
function load() {
  try { const raw = localStorage.getItem(SAVE_KEY); if (raw) state = Object.assign(fresh(), JSON.parse(raw)); } catch (e) {}
}
function save() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); } catch (e) {} }

/* ---------------- helpers ---------------- */
function findPage(id) {
  for (const n in S.chapters) { const p = S.chapters[n].pages[id]; if (p) return { page: p, chapter: S.chapters[n] }; }
  return null;
}
function show(screenId) {
  ["title", "book", "shelf", "chapterEnd"].forEach(id => $(id).hidden = id !== screenId);
  stopSpeaking();
}
function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
function badgeDef(id) { return S.badges.find(b => b.id === id); }
function badgeIcon(b, big) {
  return `<div class="badge-icon ${b.kind}">${b.icon === "gear" ? gearSVG() : (ICON[b.icon === "rewind" ? "rewindBadge" : b.icon] || ICON.star)}</div>`;
}
function wait(ms) { return new Promise(r => setTimeout(r, ms)); }

/* ---------------- speech ----------------
   Two ways of reading aloud:
   1. Recorded narration: audio/<pageId>.mp3, listed in audio/manifest.json (made by tools/make_narration.py).
   2. The tablet's own voice, split into sentences and given more bounce on ! and ? and SHOUTY words. */
let voices = [], voice = null, narration = {}, nowPlaying = null;
function voiceScore(v) {
  let n = 0;
  if (/en-AU/i.test(v.lang)) n += 3; else if (/en-GB/i.test(v.lang)) n += 2; else if (/en-US/i.test(v.lang)) n += 1;
  if (/google|natural|neural|online|enhanced|premium/i.test(v.name)) n += 4;
  if (v.localService === false) n += 2;
  return n;
}
function pickVoice() {
  if (!("speechSynthesis" in window)) return;
  voices = speechSynthesis.getVoices().filter(v => /^en/i.test(v.lang)).sort((a, b) => voiceScore(b) - voiceScore(a));
  voice = voices.find(v => v.name === state.voiceName) || voices[0] || null;
}
if ("speechSynthesis" in window) { pickVoice(); speechSynthesis.onvoiceschanged = () => { pickVoice(); if (!$("title").hidden) titleScreen(); }; }
fetch("audio/manifest.json").then(r => r.ok ? r.json() : {}).then(m => { narration = m.pages || {}; }).catch(() => {});

function sayFix(text) { return text.replace(/[A-Za-z]+/g, w => S.say[w.toLowerCase()] || w); }
function chunks(text) {
  // sentence-sized pieces, each with its own mood
  const out = [];
  text.split(/\n\s*\n/).forEach((par, pi) => {
    (par.match(/[^.!?]+[.!?]+["']?|[^.!?]+$/g) || [par]).forEach(sen => {
      const t = sen.trim(); if (!t) return;
      const shout = /\b[A-Z]{3,}\b/.test(t), excl = /!/.test(t), q = /\?/.test(t), talk = /^["']/.test(t);
      let pitch = 1.12, rate = 0.94;
      if (talk) pitch = 1.2;
      if (q) { pitch = 1.28; }
      if (excl) { pitch = 1.32; rate = 1.0; }
      if (shout) { pitch = 1.4; rate = 0.9; }
      if (/\.\.\./.test(t)) rate = 0.82;
      out.push({ t: t.replace(/\b([A-Z]{3,})\b/g, m => m.charAt(0) + m.slice(1).toLowerCase() + "!"), pitch, rate });
    });
    out.push({ pause: true });
  });
  return out;
}
function speakLively(text, onend) {
  if (!("speechSynthesis" in window)) { onend && onend(); return false; }
  speechSynthesis.cancel();
  const parts = chunks(text).filter((c, i, a) => !c.pause || i < a.length - 1);
  let last = null;
  parts.forEach(c => {
    const u = new SpeechSynthesisUtterance(c.pause ? " " : sayFix(c.t));
    if (voice) u.voice = voice;
    u.lang = voice ? voice.lang : "en-AU";
    u.pitch = c.pause ? 1 : c.pitch; u.rate = c.pause ? 1 : c.rate; u.volume = c.pause ? 0 : 1;
    speechSynthesis.speak(u); last = u;
  });
  if (last && onend) { last.onend = onend; last.onerror = onend; }
  return true;
}
function speak(text, onend) { return speakLively(text, onend); }
function playPage(id, text, onend) {
  stopAudio();
  if (narration[id]) {
    const a = new Audio(`audio/${id}.mp3`);
    nowPlaying = a;
    a.onended = onend; a.onerror = () => { nowPlaying = null; speakLively(text, onend); };
    a.play().catch(() => { nowPlaying = null; speakLively(text, onend); });
    return true;
  }
  return speakLively(text, onend);
}
function stopAudio() { if (nowPlaying) { nowPlaying.pause(); nowPlaying = null; } }
function stopSpeaking() {
  try { speechSynthesis.cancel(); } catch (e) {}
  stopAudio();
  const b = $("readBtn"); if (b) { b.classList.remove("reading"); b.innerHTML = ICON.speaker; }
}
function readCurrentPage() {
  const f = findPage(state.page), b = $("readBtn"); if (!f) return;
  if (playPage(state.page, plain(f.page.text), stopSpeaking)) { b.classList.add("reading"); b.innerHTML = ICON.stop; }
}

/* ---------------- text ---------------- */
function renderText(text) {
  return text.trim().split(/\n\s*\n/).map(par => {
    const html = esc(par.trim()).replace(/\*([^*]+)\*/g, (_, w) =>
      `<button class="word" data-say="${w.replace(/[^A-Za-z' -]/g, "")}">${w}</button>`);
    return `<p>${html}</p>`;
  }).join("");
}
function plain(text) { return text.replace(/\*/g, ""); }

/* ---------------- popups ---------------- */
function overlay(html, cls = "") {
  const el = document.createElement("div");
  el.className = "overlay " + cls; el.innerHTML = html;
  $("app").appendChild(el);
  return el;
}
function popup(html) {
  return new Promise(resolve => {
    const el = overlay(`<div class="card">${html}<button class="big-btn gold" data-ok>Yay!</button></div>`);
    const btn = el.querySelector("[data-ok]");
    setTimeout(() => btn.focus(), 50);
    btn.addEventListener("click", () => { el.remove(); resolve(); });
  });
}
function toast(html) {
  const el = document.createElement("div"); el.className = "toast"; el.innerHTML = html;
  $("app").appendChild(el); setTimeout(() => el.remove(), 2700);
}
async function giveGear(id) {
  if (state.gears.includes(id)) return;
  state.gears.push(id); save();
  speak("You found a Golden Gear!");
  await popup(`${gearSVG("reward-gear")}<h2>You found a Golden Gear!</h2><p class="sub">${state.gears.length} of ${S.totalGears} found</p>`);
}
async function giveBadge(id) {
  if (!id || state.badges.includes(id)) return;
  const b = badgeDef(id); if (!b) return;
  state.badges.push(id); save();
  speak("New badge! " + b.name);
  await popup(`${badgeIcon(b, true)}<h2>New badge!</h2><p>${esc(b.name)}</p><p class="sub">${esc(b.how)}</p>`);
}

/* ---------------- time effects ---------------- */
function rewindAnim(label = "Rewinding time...") {
  return new Promise(resolve => {
    const el = overlay(`
      <svg class="clock" viewBox="0 0 200 200" aria-hidden="true">
        <g class="ring">${Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6;
          return `<circle cx="${100 + 80 * Math.sin(a)}" cy="${100 - 80 * Math.cos(a)}" r="${i % 3 ? 4 : 7}" fill="#e3a72f"/>`; }).join("")}</g>
        <circle cx="100" cy="100" r="92" fill="none" stroke="#e3a72f" stroke-width="6" stroke-dasharray="18 10"/>
        <rect class="h1" x="96" y="50" width="8" height="54" rx="4" fill="#fbf1df"/>
        <rect class="h2" x="97.5" y="30" width="5" height="74" rx="2.5" fill="#e3a72f"/>
        <circle cx="100" cy="100" r="10" fill="#fbf1df"/>
      </svg>
      <div class="label">${esc(label)}</div>`, "");
    el.id = "rewind";
    const fast = matchMedia("(prefers-reduced-motion: reduce)").matches;
    setTimeout(() => { el.remove(); resolve(); }, fast ? 500 : 1800);
  });
}
function hintCard(hint) {
  return new Promise(resolve => {
    const wu = S.characters.wu;
    const el = overlay(`<div class="card">
      <h2>Back to your Time Anchor!</h2>
      <div class="wu-hint"><div class="face" data-face>${wu.name.split(" ").pop()[0]}</div><p>"${esc(hint)}"</p></div>
      <button class="big-btn" data-ok>Try again ${ICON.arrow}</button></div>`);
    const face = el.querySelector("[data-face]");
    const img = new Image(); img.onload = () => { face.textContent = ""; face.appendChild(img); }; img.src = wu.file;
    speak("Sensei Wu says: " + hint);
    el.querySelector("[data-ok]").addEventListener("click", () => { el.remove(); stopSpeaking(); resolve(); });
  });
}

/* ---------------- book page ---------------- */
let busy = false;
function setPicture(imgKey, speakerKey) {
  const pic = $("pic"), im = S.images[imgKey] || { file: "", label: imgKey, focus: "50% 50%" };
  pic.innerHTML = `<div class="placeholder">${ICON.picture}<div>${esc(im.label)}</div><small>${esc(im.file)}</small></div>`;
  if (im.file) {
    const img = new Image();
    img.alt = im.label; img.style.objectPosition = im.focus || "50% 50%";
    img.onload = () => { const ph = pic.querySelector(".placeholder"); if (ph) ph.replaceWith(img); };
    img.src = im.file;
  }
  if (speakerKey && S.characters[speakerKey]) {
    const c = S.characters[speakerKey];
    const wrap = document.createElement("div");
    wrap.className = "portrait";
    wrap.innerHTML = `<div class="face" style="--c:${c.color}">${esc(c.name.split(" ").pop()[0])}</div><div class="name">${esc(c.name)}</div>`;
    const face = wrap.querySelector(".face");
    const fi = new Image(); fi.alt = c.name;
    fi.onload = () => { face.textContent = ""; face.appendChild(fi); };
    fi.src = c.file;
    pic.appendChild(wrap);
  }
}
function preload(page) {
  const next = [];
  if (page.next) next.push(page.next.to);
  (page.choices || []).forEach(c => next.push(c.to));
  next.forEach(id => { const f = findPage(id); if (f) { const im = S.images[f.page.img]; if (im) new Image().src = im.file; } });
}

async function goTo(id, opts = {}) {
  const found = findPage(id);
  if (!found) { console.warn("Missing page", id); return; }
  const { page, chapter } = found;
  stopSpeaking();
  if (page.effect === "swirl" && !opts.quiet) await rewindAnim("Whoooosh!");

  state.page = id; state.started = true;
  if (!opts.keepFlip) state.flip = !state.flip;
  if (page.flag) state.flags[page.flag] = true;
  let anchorSet = false;
  if (page.anchor && state.anchor !== id) { state.anchor = id; anchorSet = true; }
  save();

  const book = $("book");
  book.classList.toggle("flip", state.flip);
  book.classList.toggle("fail", !!page.fail);
  $("chapLabel").textContent = `Chapter ${chapter.n} · ${chapter.title}`;
  $("gearBtn").innerHTML = `${ICON.gear}<span>${state.gears.length}</span>`;
  setPicture(page.img, page.speaker);

  const words = $("words");
  words.innerHTML = (page.fail ? `<div class="oops">Uh oh!</div>` : "") + renderText(page.text);
  words.scrollTop = 0;

  const ch = $("choices"); ch.innerHTML = "";
  const addBtn = (label, cls, fn) => {
    const b = document.createElement("button");
    b.className = "choice " + cls;
    b.innerHTML = `<span>${esc(label)}</span>${cls === "rewind" ? "" : `<span class="arrow">${ICON.arrow}</span>`}`;
    if (cls === "rewind") b.innerHTML = `${ICON.rewind.replace("<svg", '<svg width="30" height="30"')}<span>${esc(label)}</span>`;
    b.addEventListener("click", () => { if (!busy) fn(); });
    ch.appendChild(b);
  };

  if (page.fail) {
    addBtn("Rewind time!", "rewind", () => doRewind(page));
  } else if (page.end) {
    addBtn("Finish the chapter!", "go", () => leave(page, () => chapterEnd(page.end)));
  } else if (page.choices) {
    page.choices
      .filter(c => !c.needFlag || state.flags[c.needFlag])
      .filter(c => !c.hideIfFlag || !state.flags[c.hideIfFlag])
      .forEach(c => addBtn(c.text, "", () => leave(page, () => goTo(c.to))));
  } else if (page.next) {
    addBtn(page.next.text, "go", () => leave(page, () => goTo(page.next.to)));
  }

  show("book");
  if (state.autoRead) setTimeout(() => { if (state.page === id && !$("book").hidden) readCurrentPage(); }, page.effect === "swirl" && !opts.quiet ? 200 : 500);
  if (anchorSet && id !== chapter.start) toast(`${ICON.anchor}<span>Time Anchor set!</span>`);
  preload(page);
}

// Rewards are handed out when he finishes reading the page and taps on.
async function leave(page, then) {
  busy = true;
  try {
    if (page.gear) await giveGear(page.gear);
    if (page.badge) await giveBadge(page.badge);
  } finally { busy = false; }
  then();
}

async function doRewind(page) {
  busy = true;
  stopSpeaking();
  state.rewinds++; save();
  await rewindAnim();
  await hintCard(page.fail.hint);
  const target = state.anchor || findPage(state.page).chapter.start;
  busy = false;
  await goTo(target, { quiet: true });
  if (page.fail.badge) await giveBadge(page.fail.badge);
}

/* ---------------- chapter end ---------------- */
async function chapterEnd(n) {
  const chapter = S.chapters[n];
  const found = chapter.gears.filter(g => state.gears.includes(g)).length;
  const all = found === chapter.gears.length;
  if (all) await giveBadge(`ch${n}-gears`);
  const nextCh = S.chapters[n + 1];
  const msg = all ? "You found every gear in this chapter!"
    : `${chapter.gears.length - found === 1 ? "One gear is" : (chapter.gears.length - found) + " gears are"} still hiding in this chapter. Can you find ${chapter.gears.length - found === 1 ? "it" : "them"}?`;
  $("chapterEnd").innerHTML = `<div class="shelf-inner" style="align-items:center;text-align:center;padding-top:4vh">
    <h2 style="font-family:var(--f-display);font-weight:400;font-size:clamp(36px,5vw,60px);margin:0;color:#ffd98a">Chapter ${n} complete!</h2>
    <p style="font-size:26px;margin:0;font-weight:700">${esc(chapter.title)}</p>
    <div class="end-gears">${chapter.gears.map(g => gearSVG(state.gears.includes(g) ? "" : "off")).join("")}</div>
    <p style="font-size:24px;margin:0;font-weight:600;max-width:30ch">${msg}</p>
    <div class="title-buttons">
      ${nextCh ? `<button class="big-btn" data-next>Chapter ${n + 1} ${ICON.arrow}</button>`
               : `<button class="big-btn" disabled>Chapter ${n + 1} coming soon!</button>`}
      <button class="big-btn purple" data-again>${ICON.rewind} Play Chapter ${n} again</button>
      <button class="big-btn gold" data-shelf>${ICON.trophy} Trophy Shelf</button>
    </div></div>`;
  state.page = null; state.anchor = null; state.lastDone = n; save();
  const ce = $("chapterEnd");
  ce.querySelector("[data-again]").onclick = () => startChapter(n);
  ce.querySelector("[data-shelf]").onclick = () => openShelf("chapterEnd");
  const nb = ce.querySelector("[data-next]"); if (nb) nb.onclick = () => startChapter(n + 1);
  show("chapterEnd");
  speak(`Chapter ${n} complete! ${msg}`);
}
function startChapter(n) {
  const c = S.chapters[n]; if (!c) return;
  state.anchor = c.start; save();
  goTo(c.start);
}

/* ---------------- trophy shelf ---------------- */
function openShelf(back) {
  const rows = [1, 2, 3, 4, 5].map(n => {
    const c = S.chapters[n];
    const ids = c ? c.gears : [`c${n}a`, `c${n}b`, `c${n}c`];
    return `<div class="gear-row"><span class="lbl">Chapter ${n}${c ? ": " + esc(c.title) : ""}</span>
      <div class="gs">${ids.map(g => gearSVG(state.gears.includes(g) ? "" : "off")).join("")}</div></div>`;
  }).join("");
  const badges = S.badges.map(b => {
    const got = state.badges.includes(b.id);
    return `<div class="bdg ${got ? "" : "locked"}">${badgeIcon(b)}<b>${got ? esc(b.name) : "???"}</b><span>${esc(b.how)}</span></div>`;
  }).join("");
  $("shelf").innerHTML = `<div class="shelf-inner">
    <div class="shelf-head"><h2>Trophy Shelf</h2><button class="big-btn gold" data-back>Back ${ICON.arrow}</button></div>
    <div class="plank"><h3>Golden Gears · ${state.gears.length} of ${S.totalGears}</h3><div class="gear-rows">${rows}</div></div>
    <div class="plank"><h3>Badges · ${state.badges.length} of ${S.badges.length}</h3><div class="badge-grid">${badges}</div></div>
    <p style="opacity:.6;margin:0">Times rewound: ${state.rewinds}</p>
  </div>`;
  $("shelf").querySelector("[data-back]").onclick = () => back === "book" && state.page ? goTo(state.page, { quiet: true, keepFlip: true }) : (back === "chapterEnd" ? show("chapterEnd") : titleScreen());
  show("shelf");
}

/* ---------------- title ---------------- */
function goFull() {
  try { if (!document.fullscreenElement && document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(() => {}); } catch (e) {}
}
function titleScreen() {
  const tb = $("titleButtons");
  const canContinue = state.page && findPage(state.page);
  const nextCh = !state.page && state.lastDone && S.chapters[state.lastDone + 1];
  tb.innerHTML = "";
  const mk = (html, cls, fn) => { const b = document.createElement("button"); b.className = "big-btn " + cls; b.innerHTML = html; b.onclick = fn; tb.appendChild(b); };
  if (canContinue) mk(`Keep reading ${ICON.arrow}`, "", () => { goFull(); goTo(state.page, { quiet: true, keepFlip: true }); });
  else if (nextCh) mk(`Chapter ${state.lastDone + 1} ${ICON.arrow}`, "", () => { goFull(); startChapter(state.lastDone + 1); });
  mk(state.started ? "New adventure" : `Start the adventure ${ICON.arrow}`, state.started ? "ghost" : "", () => {
    if (!state.started) { goFull(); return newGame(); }
    tb.innerHTML = `<div class="confirm"><span>Start again from the very beginning?<br><small style="opacity:.8">Your gears and badges stay on your shelf.</small></span>
      <div class="title-buttons"><button class="big-btn purple" data-yes>Yes, start again</button><button class="big-btn ghost" data-no>No</button></div></div>`;
    tb.querySelector("[data-yes]").onclick = () => { goFull(); newGame(); };
    tb.querySelector("[data-no]").onclick = titleScreen;
  });
  mk(`${ICON.trophy} Trophy Shelf`, "gold", () => openShelf("title"));
  // reading settings
  const set = document.createElement("div"); set.className = "settings";
  const auto = document.createElement("button"); auto.className = "pill" + (state.autoRead ? " on" : "");
  auto.innerHTML = `${ICON.speaker}<span>Read every page to me: <b>${state.autoRead ? "On" : "Off"}</b></span>`;
  auto.onclick = () => { state.autoRead = !state.autoRead; save(); titleScreen(); if (state.autoRead) speak("Okay! I will read every page to you."); };
  set.appendChild(auto);
  if (voices.length > 1) {
    const vb = document.createElement("button"); vb.className = "pill";
    vb.innerHTML = `<span>Voice: <b>${esc((voice && voice.name || "").replace(/\s*\(.*\)/, "").slice(0, 28))}</b> · tap to try another</span>`;
    vb.onclick = () => {
      const i = voices.indexOf(voice); voice = voices[(i + 1) % voices.length]; state.voiceName = voice.name; save();
      titleScreen(); speak("Hi Zach! Ready for a ninja adventure? Let's GO!");
    };
    set.appendChild(vb);
  }
  tb.after(set);
  document.querySelectorAll("#title .settings").forEach(el => { if (el !== set) el.remove(); });
  const bg = document.querySelector("#title .bg");
  const im = new Image(); im.onload = () => bg.style.backgroundImage = `url(${S.images.training.file})`; im.src = S.images.training.file;
  show("title");
}
function newGame() {
  state.page = null; state.anchor = null; state.flags = {}; state.lastDone = 0; state.started = true;
  startChapter(1);
}

/* ---------------- wire up ---------------- */
document.querySelector(".torn").innerHTML = tornSVG();
$("homeBtn").innerHTML = ICON.home;
$("readBtn").innerHTML = ICON.speaker;
$("homeBtn").onclick = () => { if (!busy) titleScreen(); };
$("gearBtn").onclick = () => { if (!busy) openShelf("book"); };
$("readBtn").onclick = () => {
  const b = $("readBtn");
  if (b.classList.contains("reading")) return stopSpeaking();
  readCurrentPage();
};
$("words").addEventListener("click", e => {
  const w = e.target.closest(".word"); if (!w) return;
  speak(w.dataset.say || w.textContent);
  w.classList.remove("say"); void w.offsetWidth; w.classList.add("say");
});

load();
titleScreen();
})();
