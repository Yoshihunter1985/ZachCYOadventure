"""
Zach and the Stolen Hour - recorded narration maker.

Reads every story page and has Gemini read it aloud like a lively kids'
audiobook narrator, with different voices for each character. Saves
audio/<pageId>.mp3 and audio/manifest.json. The game plays these when you
tap the speaker button (and falls back to the tablet voice for any page
that has no recording).

SETUP (once):
  pip install google-genai
  Install ffmpeg (makes small mp3s; without it you get big .wav files
  that the game won't use).
  Set GEMINI_API_KEY like in make_images.py.

RUN (from the main game folder):
  python tools/make_narration.py            # records any new or changed page
  python tools/make_narration.py c1-02      # re-record just one page
  python tools/make_narration.py --voice Kore   # try a different narrator

Only pages whose text has changed get re-recorded, so it's cheap to re-run
after story edits.
"""
import hashlib, json, os, re, shutil, subprocess, sys, time, wave
from google import genai
from google.genai import types

# If this stops working, look up the current Gemini text-to-speech model
# name in AI Studio and paste it here.
MODEL = "gemini-2.5-flash-preview-tts"
VOICE = "Puck"   # upbeat. Others to try: Kore, Zephyr, Fenrir, Leda, Aoede

DIRECTION = """Read the story text below aloud for a 6-year-old boy, like the most fun
children's audiobook narrator ever: warm, excited, and full of expression, with
clear pauses between paragraphs. Do character voices:
- Arin: bouncy, fast and excited.
- Sora: clever and a little cheeky.
- Wyldfyre: LOUD, wild and fearless.
- Sensei Wu: slow, calm, wise old man, a tiny bit funny.
- Tock: creaky, grumpy, bossy clockwork villain, funny not scary.
- Ticklings: tiny squeaky robots.
- Zach: quiet, thoughtful kid.
Make sound words like BONK, HONK, Whoosh and Splurt really punchy and fun.
Say the names like this: Spinjitzu = spin-JIT-zoo, Riyu = REE-you,
Sensei = SEN-say, Wyldfyre = wild-fire, Ninjago = NIN-ja-go.
Read every word exactly as written. Do not add or skip anything.

Story text:
"""

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "audio")


def pages():
    """Pull page ids and text out of story/chapterN.js."""
    found = {}
    story = os.path.join(ROOT, "story")
    for f in sorted(os.listdir(story)):
        if not re.match(r"chapter\d+\.js$", f):
            continue
        src = open(os.path.join(story, f), encoding="utf-8").read()
        for m in re.finditer(r'"(c\d+-[\w-]+)":\s*\{(.*?)text:\s*`(.*?)`', src, re.S):
            found[m.group(1)] = m.group(3).replace("*", "").strip()
    return found


def record(client, voice, text, wav_path):
    resp = client.models.generate_content(
        model=MODEL,
        contents=DIRECTION + text,
        config=types.GenerateContentConfig(
            response_modalities=["AUDIO"],
            speech_config=types.SpeechConfig(
                voice_config=types.VoiceConfig(
                    prebuilt_voice_config=types.PrebuiltVoiceConfig(voice_name=voice)))),
    )
    pcm = resp.candidates[0].content.parts[0].inline_data.data
    with wave.open(wav_path, "wb") as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(24000); w.writeframes(pcm)


def main():
    args = sys.argv[1:]
    voice = VOICE
    if "--voice" in args:
        i = args.index("--voice"); voice = args[i + 1]; del args[i:i + 2]
    key = os.environ.get("GEMINI_API_KEY")
    if not key:
        sys.exit("Set GEMINI_API_KEY first.")
    if not shutil.which("ffmpeg"):
        sys.exit("Please install ffmpeg first (it turns the recordings into small mp3s).")
    os.makedirs(OUT, exist_ok=True)
    man_path = os.path.join(OUT, "manifest.json")
    manifest = json.load(open(man_path)) if os.path.exists(man_path) else {"pages": {}}
    client = genai.Client(api_key=key)

    todo = pages()
    print(f"{len(todo)} pages in the story")
    for pid, text in todo.items():
        h = hashlib.sha1((voice + text).encode()).hexdigest()[:12]
        if args and pid not in args:
            continue
        if not args and manifest["pages"].get(pid) == h and os.path.exists(os.path.join(OUT, pid + ".mp3")):
            continue
        spoken = text
        print(f"  recording {pid} ...", end="", flush=True)
        wav = os.path.join(OUT, pid + ".wav")
        for attempt in range(3):
            try:
                record(client, voice, spoken, wav)
                break
            except Exception as e:
                print(f" (retrying: {e})", end="", flush=True)
                time.sleep(8 * (attempt + 1))
        else:
            print(" FAILED"); continue
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", wav, "-ac", "1", "-b:a", "48k",
                        os.path.join(OUT, pid + ".mp3")], check=True)
        os.remove(wav)
        manifest["pages"][pid] = h
        json.dump(manifest, open(man_path, "w"), indent=1)
        print(" done")
    print("All recorded. Upload the audio folder to GitHub.")


if __name__ == "__main__":
    main()
