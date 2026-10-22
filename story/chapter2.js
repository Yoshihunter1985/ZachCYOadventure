// Chapter 2: The Frozen Market
// Text rules: *word* = bold tricky word he can tap to hear. Blank line = new paragraph.

STORY.addChapter({
  n: 2,
  title: "The Frozen Market",
  start: "c2-01",
  gears: ["g4", "g5", "g6"],
  pages: {

    "c2-01": {
      img: "flight", speaker: "wyldfyre", anchor: true,
      text: `Riyu flapped hard and zoomed up into the sky. Zach held on tight behind Sora and Wyldfyre.

"FASTER, Riyu!" Wyldfyre yelled. "FASTER!"

Far below was the market town. Nothing down there was moving. Not one person. Not one bird.

"It's *frozen*," Sora said. "This is Tock's work."`,
      choices: [
        { text: "Fly down low", to: "c2-02low" },
        { text: "Fly up high", to: "c2-02high" }
      ]
    },

    "c2-02low": {
      img: "flight", gear: "g4",
      text: `Riyu swooped down over the rooftops.

A pigeon hung in the air, frozen mid-flap. Wyldfyre poked it. "Weird," she said.

Then Zach saw something shine on a roof. He leaned down and grabbed it. A Golden Gear!`,
      next: { text: "Land in the market", to: "c2-03" }
    },

    "c2-02high": {
      img: "flight",
      text: `Riyu flew up, up, up, until the town looked tiny.

From up here, Zach could see everything. In the middle of the market stood a tall tower. At the top, a big bell glowed with icy blue *magic*.

"There!" Zach pointed. "I bet that bell is doing it."`,
      next: { text: "Land in the market", to: "c2-03" }
    },

    "c2-03": {
      img: "market", speaker: "wyldfyre",
      text: `Riyu landed in the market with a soft thump.

Everyone was stuck like *statues*. A man was frozen mid-sneeze. A noodle seller had noodles flying in the air above his bowl.

Wyldfyre grabbed a frozen noodle and bit it. *Crunch.* "Ew," she said. "Ice noodles."`,
      choices: [
        { text: "Unfreeze the noodle seller", to: "c2-04seller" },
        { text: "Search the stalls", to: "c2-04stalls" }
      ]
    },

    "c2-04seller": {
      img: "market",
      text: `Zach put his glowing hand on the noodle seller's arm.

The man blinked. The noodles fell. *Splat!* Right on his own head.

"Oh! Thank you, little ninja!" he said, pulling a noodle off his nose. "The bell rang, and then everything stopped!" He pointed to the tall tower.`,
      next: { text: "Head for the tower", to: "c2-05" }
    },

    "c2-04stalls": {
      img: "market", speaker: "sora",
      text: `Zach searched the stalls one by one.

Frozen fish. Frozen fruit. A frozen chicken in the middle of a squawk.

"Nothing useful," Sora said, tapping the chicken. *Tink, tink.*

Zach looked around. Maybe one of the frozen people knew what had happened.`,
      next: { text: "Try something else", to: "c2-03" }
    },

    "c2-05": {
      img: "market", speaker: "sora",
      text: `*Clank. Clank. Clank.*

A line of Ticklings marched around the corner. There were ten of them, with ten big grins and ten wind-up keys.

"Uh oh," Sora whispered. "A *patrol*!"

Zach looked around fast. There was a big barrel and a big cooking pot.`,
      choices: [
        { text: "Hide in the barrel", to: "c2-06barrel" },
        { text: "Wear the pot as a helmet", to: "c2-06pot" },
        { text: "Fight them all!", to: "c2-06fight" }
      ]
    },

    "c2-06barrel": {
      img: "market", speaker: "wyldfyre",
      text: `Zach jumped into the barrel. So did Sora. So did Wyldfyre.

It was VERY squishy. Wyldfyre's elbow was in Zach's ear.

"Move your foot," she hissed.

"That's not my foot," said Sora.

The Ticklings clanked right past. Phew!`,
      next: { text: "Climb out", to: "c2-07" }
    },

    "c2-06pot": {
      img: "market", gear: "g5",
      text: `Zach plonked the pot on his head and marched like a robot. *Clank, clank.*

The Ticklings looked at him. Zach held his breath. Then they marched right past!

Something rattled inside the pot. Zach took it off and peeked in. A Golden Gear!`,
      next: { text: "Keep going", to: "c2-07" }
    },

    "c2-06fight": {
      img: "market",
      fail: { hint: "Ten Ticklings is too many. A clever ninja hides!" },
      text: `Zach jumped out. "Hi-YAH!"

He kicked one Tickling. Two more jumped on him. Then three more. Then ALL of them!

They wrapped him up in party *streamers* until only his nose stuck out.

"Mmmf!" said Zach.`
    },

    "c2-07": {
      img: "market", speaker: "sprocket",
      text: `Behind the noodle stall, Zach found one more Tickling. It was tiny and dented, with a crooked key. It was not moving at all.

"Grr. Out of wind AGAIN," it grumbled. "Tock never winds me up. He's so *bossy*!"

It saw Zach and jumped. "Don't tell! I'm Sprocket."`,
      choices: [
        { text: "Wind him up", to: "c2-08wind" },
        { text: "Leave him be", to: "c2-08leave" }
      ]
    },

    "c2-08wind": {
      img: "market", speaker: "sprocket", flag: "sprocket", badge: "new-friend",
      text: `Zach turned Sprocket's key. Once. Twice. Three times.

Sprocket's eyes lit up. He did a happy little spin. "Whee! Thanks, kid!"

"Tock isn't nice to you," Zach said quietly.

"Nope," said Sprocket. "So I'm on YOUR team now. Follow me!"`,
      next: { text: "Follow Sprocket", to: "c2-09" }
    },

    "c2-08leave": {
      img: "market", speaker: "sora",
      text: `Zach gave Sprocket a pat on the head and tiptoed away.

"Hey! Come back!" Sprocket called. "Typical."

"Was that a Tickling?" asked Sora.

"A very grumpy one," said Zach.

They hurried on toward the bell tower.`,
      next: { text: "Keep going", to: "c2-09" }
    },

    "c2-09": {
      img: "bell", speaker: "wyldfyre", anchor: true,
      text: `The bell tower was covered in *icicles*. The giant bell at the top hummed and glowed with frosty blue magic.

"Let me at it!" Wyldfyre said. Her hands burst into flames. "I'll melt that thing!"

Zach thought hard. A long rope hung all the way down to the ground.`,
      choices: [
        { text: "Climb up to the bell", to: "c2-10climb" },
        { text: "Ring it backwards with time magic", to: "c2-11" },
        { text: "Let Wyldfyre blast it with fire", to: "c2-10blast" }
      ]
    },

    "c2-10climb": {
      img: "bell", gear: "g6",
      text: `Zach climbed the rope, hand over hand, all the way to the top.

Up close, the bell was freezing cold. Tucked in a crack in the wall was a Golden Gear!

Zach put it in his pocket. Now, how should he stop the bell?`,
      choices: [
        { text: "Ring it backwards with time magic", to: "c2-11" },
        { text: "Let Wyldfyre blast it with fire", to: "c2-10blast" }
      ]
    },

    "c2-10blast": {
      img: "bell",
      fail: { hint: "Fire cannot fix a time problem. Use your time magic!", badge: "kaboom" },
      text: `Wyldfyre threw a huge fireball. *WHOOSH!*

It missed the bell. It hit the fireworks stall instead.

*BANG! FIZZ! KABOOM!*

When the smoke cleared, everyone was covered in sparkly black soot.

"Oops," said Wyldfyre.`
    },

    "c2-11": {
      img: "bell",
      text: `Zach grabbed the rope. He made his hands glow gold. Then he pulled the bell BACKWARDS.

*Dong... gnoD!*

The ice cracked. The blue glow fizzled out. All over the market, people blinked and stretched.

The noodle seller's noodles finally landed in his bowl.`,
      next: { text: "Keep going", to: "c2-12" }
    },

    "c2-12": {
      img: "bell", speaker: "tock",
      text: `Something shiny dropped out of the bell, right into Zach's hands. It glowed like a piece of sunshine. A piece of the Golden *Hour*!

Then a big screen flickered on. It was Tock, and he was *furious*.

"ONE piece?" he shrieked. "Big deal! You'll never get the other two!"`,
      choices: [
        { text: "Bring Sprocket along", to: "c2-13s", needFlag: "sprocket" },
        { text: "Head for Clock Mountain", to: "c2-13" }
      ]
    },

    "c2-13": {
      img: "flight", speaker: "sora", end: 2,
      text: `The ninjas climbed back onto Riyu.

"One piece down, two to go," said Sora, tucking it safely into her bag.

"Where's the next one?" asked Zach.

Sora checked her map. The next glowing dot was high up on a snowy peak. "Clock Mountain," she said. "Wrap up warm!"`
    },

    "c2-13s": {
      img: "flight", speaker: "sprocket", end: 2,
      text: `The ninjas climbed back onto Riyu. Sprocket climbed into Sora's bag and poked his head out.

"One piece down, two to go!" he cheered.

"Who said you could come?" said Sora. But she was smiling.

The next glowing dot on the map was high up on a snowy peak. Clock Mountain!`
    }
  }
});
