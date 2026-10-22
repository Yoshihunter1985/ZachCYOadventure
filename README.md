# Zach and the Stolen Hour

A choose-your-own-adventure ninja story for Zach. Zach is the newest ninja recruit, and he discovers he has Time Spinjitzu just as Tock, a grumpy clockwork villain, steals the Golden Hour.

## Playing it
Turn on GitHub Pages (Settings → Pages → Deploy from branch → `main`, folder `/ (root)`). The game will be at
`https://yoshihunter1985.github.io/zachcyoadventure/`

On the tablet, open that link in Chrome, then use the ⋮ menu → **Add to Home screen**. It then opens full screen like an app, and it saves his place automatically.

## Folders
| Folder | What's in it |
|---|---|
| `story/` | The story. `world.js` lists the pictures, characters, badges and how to say tricky words. Each `chapterN.js` is one chapter. |
| `images/` | Scene pictures (`scene-*.jpg`), talking portraits (`portrait-*.jpg`), and the villain pictures. |
| `audio/` | Recorded narration, one mp3 per page (made by `tools/make_narration.py`). Optional. |
| `js/`, `css/` | The game itself. |
| `tools/` | Helper scripts (see below). |

## Writing story pages
In `story/chapterN.js`, put `*stars*` around a word to make it bold and tappable. A blank line starts a new paragraph.

## Tools
- `node tools/check_story.js` checks that every button leads somewhere, every page can be reached, and the gears add up.
- `python tools/make_images.py` makes pictures with Gemini.
- `python tools/make_narration.py` records lively narration for every page with Gemini. It only re-records pages whose text has changed.

## The story
Five chapters, 96 pages. The quickest read is about 57 pages; exploring every path takes much longer.

| # | Chapter | With | Gears |
|---|---|---|---|
| 1 | The New Recruit | Arin, Sora, Sensei Wu | tree, hiding from Ticklings, Wu's tea room |
| 2 | The Frozen Market | Sora, Wyldfyre, Riyu, Sprocket | fly low, pot helmet, top of the bell |
| 3 | Clock Mountain | Cole, Zane | dark cave, pulling keys, bird's nest |
| 4 | The Ticking Tower | Kai, Nya | Sprocket's door, robot dance, Tock's diary |
| 5 | The Last Second | Lloyd and everyone | Riyu's saddle, under the zeppelin, Sprocket |

**Endings:** ★ Tock escapes (rewind the Freeze Machine) · ★★ Tock caught (key trick from Ch 1, spare key from Ch 4, or Sprocket from Ch 2) · ★★★ caught with all 15 gears, which unlocks a bonus scene.

## Optional extras
- A portrait of Zach as a ninja (`images/portrait-zach.jpg`).
- Recorded narration (`tools/make_narration.py`).
- Background music: drop mp3s in an `audio/music/` folder and ask Claude to wire them up.
