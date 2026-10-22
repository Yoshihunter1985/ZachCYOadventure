// Chapter 4: The Ticking Tower
// Text rules: *word* = bold tricky word he can tap to hear. Blank line = new paragraph.

STORY.addChapter({
  n: 4,
  title: "The Ticking Tower",
  start: "c4-01",
  gears: ["g10", "g11", "g12"],
  pages: {

    "c4-01": {
      img: "tower", speaker: "kai", anchor: true,
      text: `Nya's speedboat zipped across the dark sea. Kai sat at the front with his arms folded.

"A tower made of clocks," Kai said. "This guy is SO weird."

"Shh!" said Nya. "We're here."

Tock's tower ticked loudly above them. How could they get inside?`,
      choices: [
        { text: "Ask Sprocket for a secret way in", to: "c4-02secret", needFlag: "sprocket" },
        { text: "Crawl through the drain pipe", to: "c4-02pipe" },
        { text: "Ring the front doorbell", to: "c4-02bell" }
      ]
    },

    "c4-02secret": {
      img: "tower", speaker: "sprocket", gear: "g10",
      text: `Sprocket popped up from the bottom of the boat. "Psst! Follow me!"

He led them to a tiny door hidden behind some seaweed. "Tickling door," he whispered. "Tock doesn't even know about it."

Next to the door, half buried in sand, was a Golden Gear!`,
      next: { text: "Sneak inside", to: "c4-03" }
    },

    "c4-02pipe": {
      img: "tower", speaker: "kai",
      text: `They crawled into the big drain pipe. It was dark, wet and VERY stinky.

"Ugh! It smells like old socks and fish!" said Kai. "Why is it always the stinky pipe?"

"Keep crawling," said Nya, holding her nose.

At last, they popped out inside the tower.`,
      next: { text: "Look around", to: "c4-03" }
    },

    "c4-02bell": {
      img: "tower",
      fail: { hint: "Villains do not like visitors. Find a sneaky way in!" },
      text: `Zach pressed the big doorbell. *DING DONG!*

The giant spring under the doorstep went *BOING!*

Zach, Kai and Nya flew high into the air, did three somersaults, and landed in the sea. *SPLOSH!*

"Great idea," said Kai, spitting out a fish.`
    },

    "c4-03": {
      img: "factory", speaker: "nya",
      text: `Inside was a huge *factory* full of moving belts and spinning gears. Ticklings were everywhere!

Nya found a box of spare Tickling parts. "Disguises!" she whispered.

Soon they all had round tin tummies and wind-up keys. Kai's key kept falling off.`,
      choices: [
        { text: "March in line like a Tickling", to: "c4-04march" },
        { text: "Do a silly robot dance", to: "c4-04dance" },
        { text: "Talk in a robot voice", to: "c4-04talk" }
      ]
    },

    "c4-04march": {
      img: "factory",
      text: `Zach marched in line with the Ticklings. Left, right. Left, right. *Clank, clank.*

Nobody noticed a thing. It was a bit boring, but it worked!

Kai's key fell off again. He picked it up very, very quickly.`,
      next: { text: "Keep going", to: "c4-05" }
    },

    "c4-04dance": {
      img: "factory", gear: "g11", badge: "dance",
      text: `Zach did a silly robot dance. Wiggle, wiggle, spin!

The Ticklings stopped. They stared. Then they ALL started dancing too! *Clank,* wiggle, *clank,* spin!

One Tickling danced so hard that a Golden Gear popped out of its tummy.`,
      next: { text: "Dance away", to: "c4-05" }
    },

    "c4-04talk": {
      img: "factory",
      fail: { hint: "A quiet ninja does not need to talk." },
      text: `Zach used his best robot voice. "Beep. Boop. I am a Tickling."

That was fine. But then Kai tried. "BEEP... BOOP... ACHOO!"

Kai's whole disguise fell off. Every Tickling turned to look.

"Uh oh," said Nya.`
    },

    "c4-05": {
      img: "factory", speaker: "nya",
      text: `To reach Tock's office, they had to cross the room. But the floor was covered in fast belts, zooming every which way.

On the wall was a giant red *lever*.

"Hmm," said Nya. "How do we get across?"`,
      choices: [
        { text: "Pull the big red lever", to: "c4-06lever" },
        { text: "Ride on a belt", to: "c4-06ride" },
        { text: "Jump from belt to belt", to: "c4-06jump" }
      ]
    },

    "c4-06lever": {
      img: "factory", speaker: "nya",
      text: `Zach grabbed the lever and pulled with all his might. *Clunk!*

Every belt in the factory stopped. The Ticklings bumped into each other like *dominoes*. *Clank! Clank! Clank!*

"Nice," said Nya. They walked straight across.`,
      next: { text: "Go to the office", to: "c4-07" }
    },

    "c4-06ride": {
      img: "factory", speaker: "kai",
      text: `Zach jumped onto a belt. *Whoosh!* It carried him past spinning gears and puffing steam.

"Wheee!" yelled Kai, zooming past backwards.

It was a bit scary, but the belt dropped them right by Tock's office door.`,
      next: { text: "Go to the office", to: "c4-07" }
    },

    "c4-06jump": {
      img: "factory",
      fail: { hint: "Stop the machine. Don't race it!" },
      text: `Zach jumped onto the first belt. Then the next. Then the next.

But the belts were too fast. He slipped, rolled into a machine, and came out the other end...

...wrapped up like a birthday present, with a big pink bow on top!`
    },

    "c4-07": {
      img: "office", speaker: "nya", anchor: true,
      text: `Tock's office was a big mess. Springs and cogs were everywhere. A cuckoo clock ticked on the wall, and a glowing machine hummed in the corner.

"That must be the Freeze *Machine*," Nya whispered.

Tock was not here. Where could the last piece be?`,
      choices: [
        { text: "Read Tock's diary", to: "c4-08diary" },
        { text: "Open the desk drawer", to: "c4-08drawer" },
        { text: "Open the cuckoo clock", to: "c4-08cuckoo" }
      ]
    },

    "c4-08diary": {
      img: "office", speaker: "kai", gear: "g12",
      text: `Zach opened Tock's *diary* and read it out loud.

"Dear Diary. I hate Mondays. And Tuesdays. And ninjas. ESPECIALLY ninjas."

Kai snorted. A Golden Gear was tucked in the back of the diary, like a bookmark!`,
      choices: [
        { text: "Open the desk drawer", to: "c4-08drawer" },
        { text: "Open the cuckoo clock", to: "c4-08cuckoo" }
      ]
    },

    "c4-08drawer": {
      img: "office", flag: "sparekey",
      text: `Zach opened the desk drawer. Inside, glowing gold, was the third piece of the Golden Hour!

Under it was something else. A big golden key, just like the one in Tock's back.

"A spare key," Zach whispered. He put it in his pocket. It might be very useful.`,
      next: { text: "Keep going", to: "c4-09" }
    },

    "c4-08cuckoo": {
      img: "office",
      fail: { hint: "Not every clock is friendly." },
      text: `Zach opened the cuckoo clock door. Out popped a little bird... on a big spring... wearing a boxing glove.

*POW!*

Zach shot backwards across the room and landed in a bin full of springs. *Boing, boing, boing.*`
    },

    "c4-09": {
      img: "office", speaker: "tock",
      text: `Just then, the door banged open. It was Tock!

"NINJAS!" he roared. "In MY office?"

He pointed at the Freeze Machine. *ZAP!* A blue beam hit Kai and Nya. They froze solid, still pulling their crossest faces.

Zach held the piece tight and ran.`,
      next: { text: "RUN!", to: "c4-10" }
    },

    "c4-10": {
      img: "tower", speaker: "tock", end: 4,
      text: `Zach dived out of a window and swam to the boat as fast as he could.

Behind him, Tock's laugh echoed across the water. "Too late, little ninja! My Freeze Machine is ready. Tonight, ALL of Ninjago freezes!"

Zach started the boat. He had to get help. Fast!`
    }
  }
});
