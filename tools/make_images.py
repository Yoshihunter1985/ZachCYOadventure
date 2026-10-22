"""
Zach and the Stolen Hour - batch image generator.

Makes all 16 story images with the Gemini API and saves them with the
filenames the game expects. Villains are made first, then passed back in
as reference images so Tock / Ticklings / Sprocket stay consistent.

SETUP (once):
  1. Get an API key at https://aistudio.google.com  ("Get API key")
     Image generation may need billing switched on for that key.
  2. pip install google-genai pillow
  3. Put a picture of Riyu in this folder named  riyu.png  (optional but
     makes the dragon scenes match the show).

RUN:
  Windows:   set GEMINI_API_KEY=your_key_here
             python make_images.py
  Mac/Linux: export GEMINI_API_KEY=your_key_here
             python make_images.py

  Images land in ./images/. Re-running skips any image already made,
  so to redo one, delete that file and run again.
  Redo just one:  python make_images.py scene-bell.jpg
"""

import os
import sys
import time
from io import BytesIO

from google import genai
from google.genai import types
from PIL import Image

# If this model name stops working, open aistudio.google.com, pick the
# newest image model in the model list, and paste its ID here.
MODEL = "gemini-2.5-flash-image"

OUT = "images"

STYLE = (
    "Bright, colourful 3D animated movie look, set in a toy-brick world like a LEGO "
    "Ninjago animated episode: plastic minifigure-style characters, brick-built "
    "buildings, cheerful lighting. Kid-friendly: villains are funny and cross, never "
    "scary, nothing sad. No words, letters or numbers anywhere in the image."
)
CHAR = " Full body character design on a plain light grey background."
SCENE = (
    " Wide 16:9 landscape scene. Keep the bottom quarter of the image simple "
    "(plain ground, sky, water or floor) because a text box will cover it. "
    "Leave the ninja heroes out of the scene."
)

TOCK = (
    "TOCK, a clockwork villain: tall and spindly, built like a walking grandfather "
    "clock of tarnished brass and dark purple metal. Round clock-face head with two "
    "glowing yellow eyes and a grumpy jagged mouth; the two clock hands form a curly "
    "twirled moustache. Small dented top hat with a tiny bell, short tattered purple "
    "cape, big golden wind-up key in his back, springy legs, long bendy arms with "
    "pliers-like hands."
)
TICKLING = (
    "TICKLINGS, knee-high henchman robots shaped like round tin wind-up toys: shiny "
    "silver tin with purple stripes, two big googly eyes, wide toothy grin, stubby "
    "legs, small claw hands, golden wind-up key on the back. Silly and harmless."
)
SPROCKET = (
    "SPROCKET, a tiny older dented Tickling: one mismatched green arm, crooked "
    "wind-up key, bent bolt antenna, cheeky lopsided grin, grumpy but lovable."
)

# (filename, aspect ratio, prompt, reference images to attach)
IMAGES = [
    ("tock.png", "1:1",
     f"Character design. {TOCK} Front three-quarter view, hands on hips, looking cross.{CHAR}",
     []),
    ("ticklings.png", "16:9",
     f"Character design. {TICKLING} Show four of them marching in a line in slightly "
     f"different poses, one tripping over another.{CHAR}",
     []),
    ("sprocket.png", "1:1",
     f"Character design. {SPROCKET} Arms folded, looking a bit grumpy.{CHAR}",
     ["ticklings.png"]),
    ("scene-training.jpg", "16:9",
     "A ninja training ground beside a mountain monastery with curved red roofs. A "
     "wooden obstacle course with a wobbly balance beam and swinging punching bags, a "
     "tall tree, a duck pond with grumpy geese, a small wooden shed. Morning sunshine, "
     "cherry blossoms, mountains behind. No people." + SCENE,
     []),
    ("scene-flight.jpg", "16:9",
     "View from the back of the flying dragon in the reference picture, high above a "
     "market town of colourful stalls and paper lanterns. Everything below is frozen "
     "still with a faint icy blue shimmer; a pigeon is frozen mid-flap in the air. In "
     "the distance a tall bell tower glows with frosty blue magic. Blue sky, fluffy "
     "clouds." + SCENE,
     ["riyu.png"]),
    ("scene-tock-clock.jpg", "16:9",
     "The big round clock on a monastery tower, but its face has become Tock's angry "
     "face (match the reference), glaring down at the courtyard. Purple glow around "
     "it, a few Ticklings marching in the courtyard below. Late afternoon light." + SCENE,
     ["tock.png", "ticklings.png"]),
    ("scene-market.jpg", "16:9",
     "A market street frozen in time with an icy blue shimmer: a noodle seller frozen "
     "mid-toss with noodles hanging in the air, a man frozen mid-sneeze, frozen "
     "chickens, a stack of barrels, pots and pans on a stall. Ticklings (match the "
     "reference) marching around a corner. Funny and magical." + SCENE,
     ["ticklings.png"]),
    ("scene-bell.jpg", "16:9",
     "A tall stone bell tower in a market square with a giant bronze bell at the top, "
     "swirling with frosty blue magic and icicles. A fireworks stall nearby, a long "
     "bell rope hanging down, frozen townspeople around the square." + SCENE,
     []),
    ("scene-mountain.jpg", "16:9",
     "A snowy mountain path leading up to a giant clock built into the peak. Along the "
     "way: a wobbly rope bridge, a dark cave entrance, a long shiny ice slide, and a "
     "stone gateway with huge golden pendulums swinging across the path. A few "
     "Ticklings made of grey stone (same shape as the reference) block the trail. "
     "Crisp blue sky." + SCENE,
     ["ticklings.png"]),
    ("scene-summit.jpg", "16:9",
     "A snowy mountain top with an enormous clock face set into the rock, a wooden "
     "cuckoo-clock door with a grumpy cuckoo bird peeking out, a bird's nest on a "
     "ledge. A small purple rocket shaped like an alarm clock blasting off in the "
     "background with a smoke trail." + SCENE,
     []),
    ("scene-tower.jpg", "16:9",
     "Tock's tall crooked tower made of brass, purple metal and giant gears, shaped "
     "like a stack of clocks, on a rocky island in a dark choppy sea. Steam from "
     "pipes, a huge clock on top, a front door with a giant spring doorbell, a big "
     "drain pipe near the waterline. Purple dusk sky, a small speedboat approaching. "
     "Spooky-fun, not scary." + SCENE,
     []),
    ("scene-factory.jpg", "16:9",
     "Inside Tock's factory: long moving conveyor belts carrying gears and machine "
     "parts, a giant red lever on the wall, steam, spinning cogs on the ceiling, a "
     "line of Ticklings (match the reference) marching, one of them dancing. Warm "
     "orange and purple lighting. Busy and silly." + SCENE,
     ["ticklings.png"]),
    ("scene-office.jpg", "16:9",
     "Tock's messy office inside his clock tower: a big desk covered in clock parts "
     "and springs, an open drawer, a diary on the desk, a cuckoo clock on the wall, "
     "drawings of a big freezing machine pinned up, a glowing machine in the corner, "
     "a round window showing the sea. No characters." + SCENE,
     []),
    ("scene-frozen.jpg", "16:9",
     "A mountain monastery courtyard and town frozen in time with an icy blue "
     "shimmer: birds stuck in the sky, a fountain frozen mid-splash, leaves hanging "
     "in the air, a big temple bell. A giant faint purple clock face across the sky. "
     "Magical and a little eerie, but not scary." + SCENE,
     []),
    ("scene-sky.jpg", "16:9",
     "A sky battle above the clouds: the dragon from the reference picture and "
     "several other colourful dragons flying toward a big purple airship shaped like "
     "an alarm clock, with a spinning propeller on top and gears on the sides. Golden "
     "sunset light, sparks of energy. Exciting but kid-friendly." + SCENE,
     ["riyu.png"]),
    ("tock-robot.jpg", "16:9",
     "The finale: a giant battle robot shaped like a huge grandfather clock on "
     "stomping mechanical legs, tarnished brass and dark purple, a big clock face on "
     "its chest, steam puffing from pipes, a giant golden wind-up key spinning on its "
     "back. Tock (match the reference) sits in a glass cockpit on top, shaking his "
     "fist. Stone courtyard, stormy purple sky." + SCENE,
     ["tock.png"]),
]


def load_ref(name):
    """Look for a reference image in ./images first, then this folder."""
    for path in (os.path.join(OUT, name), name):
        if os.path.exists(path):
            return Image.open(path)
    return None


def make(client, filename, aspect, prompt, refs):
    contents = [f"{prompt}\n\nStyle: {STYLE}"]
    for r in refs:
        img = load_ref(r)
        if img is not None:
            contents.append(img)
        else:
            print(f"   (no {r} found, going without it)")

    for attempt in range(3):
        try:
            resp = client.models.generate_content(
                model=MODEL,
                contents=contents,
                config=types.GenerateContentConfig(
                    response_modalities=["IMAGE"],
                    image_config=types.ImageConfig(aspect_ratio=aspect),
                ),
            )
            for part in resp.candidates[0].content.parts:
                if getattr(part, "inline_data", None) and part.inline_data.data:
                    img = Image.open(BytesIO(part.inline_data.data))
                    path = os.path.join(OUT, filename)
                    if filename.endswith(".jpg"):
                        img.convert("RGB").save(path, quality=88)
                    else:
                        img.save(path)
                    return True
            print("   no image came back, trying again...")
        except Exception as e:
            print(f"   error: {e}")
        time.sleep(5 * (attempt + 1))
    return False


def main():
    key = os.environ.get("GEMINI_API_KEY")
    if not key:
        sys.exit("Set GEMINI_API_KEY first (see the top of this file).")
    os.makedirs(OUT, exist_ok=True)
    client = genai.Client(api_key=key)

    only = set(sys.argv[1:])
    failed = []
    for i, (filename, aspect, prompt, refs) in enumerate(IMAGES, 1):
        if only and filename not in only:
            continue
        if not only and os.path.exists(os.path.join(OUT, filename)):
            print(f"{i:2}/16  {filename}  already made, skipping")
            continue
        print(f"{i:2}/16  {filename} ...")
        if make(client, filename, aspect, prompt, refs):
            print("        saved")
        else:
            failed.append(filename)

    print("\nDone." if not failed else f"\nThese didn't work, run again to retry: {', '.join(failed)}")


if __name__ == "__main__":
    main()
