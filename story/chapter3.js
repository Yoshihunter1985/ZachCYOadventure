// Chapter 3: Clock Mountain
// Text rules: *word* = bold tricky word he can tap to hear. Blank line = new paragraph.
// clock: "12:00" on a page shows a drawn clock on the picture; clock on a choice draws a small clock on the button.

STORY.addChapter({
  n: 3,
  title: "Clock Mountain",
  start: "c3-01",
  gears: ["g7", "g8", "g9"],
  pages: {

    "c3-01": {
      img: "mountain", speaker: "cole", anchor: true, clearFlags: ["clockmiss"],
      text: `Riyu dropped Zach at the bottom of Clock Mountain. Two ninjas were waiting in the snow.

"I'm Cole," said the one in black. "This mountain is totally ROCKING. Get it? ROCK-ing?"

"I do not get it," said Zane, the silver ninja.

There were three ways up.`,
      choices: [
        { text: "Cross the rope bridge", to: "c3-02bridge" },
        { text: "Go through the dark cave", to: "c3-02cave" },
        { text: "Zoom up the ice slide shortcut", to: "c3-02slide" }
      ]
    },

    "c3-02bridge": {
      img: "mountain", speaker: "zane",
      text: `The rope bridge swung in the wind. *Creak. Creak.*

"Do not look down," said Zane.

Zach looked down. It was a very long way! He held the rope tight and took tiny, careful steps.

At last, they made it to the other side. Phew!`,
      next: { text: "Keep climbing", to: "c3-03" }
    },

    "c3-02cave": {
      img: "mountain", speaker: "zane", gear: "g7",
      text: `The cave was VERY dark.

Zane's eyes lit up like two torches. "I have a built-in light," he said. "It is very useful."

In the glow, Zach spotted something shining on a rock. A Golden Gear!

"Nice find," said Cole.`,
      next: { text: "Keep climbing", to: "c3-03" }
    },

    "c3-02slide": {
      img: "mountain",
      fail: { hint: "The fast way is not always the best way.", badge: "snowball" },
      text: `Zach jumped onto the ice slide. "Wheeeee!"

It was super fast. Too fast! He hit a bump, flew into the snow, and started to roll.

Over and over he went, getting bigger and bigger, until he was a GIANT snowball with two feet sticking out.`
    },

    "c3-03": {
      img: "mountain", speaker: "cole",
      text: `Halfway up, the path went through a stone gate. Two huge golden *pendulums* swung back and forth across it. *Swish! Swoosh!*

"Those would knock a ninja right off the mountain," said Cole.

Zach watched them swing. Then he looked down at his hands.`,
      choices: [
        { text: "Run through when they swing away", to: "c3-04run" },
        { text: "Try to slow down time", to: "c3-04slow" }
      ]
    },

    "c3-04run": {
      img: "mountain",
      fail: { hint: "Your power can do more than rewind..." },
      text: `Zach waited, then ran. He was nearly through!

Then the second pendulum swung back.

*BONG!*

It hit him like a giant bell. Zach flew through the air and landed head first in a snowdrift, with his legs waving.`
    },

    "c3-04slow": {
      img: "mountain", speaker: "cole", badge: "slow-mo",
      text: `Zach closed his eyes and *concentrated*. His hands glowed gold, but this time the glow was soft and slow.

The pendulums slowed down, and down, until they crept like snails.

"Whoa," said Cole. "You can do SLOW-MO?"

They strolled through the gate, easy peasy.`,
      next: { text: "Keep climbing", to: "c3-05" }
    },

    "c3-05": {
      img: "mountain", speaker: "cole",
      text: `Near the top, three Ticklings blocked the path. But these ones were made of grey stone!

"Rock Ticklings," Cole grinned. "Finally, my kind of robot."

The Ticklings clanked toward them, waving their stony claws.`,
      choices: [
        { text: "Pull out their keys", to: "c3-06keys", needFlag: "keytrick" },
        { text: "Let Cole smash them", to: "c3-06smash" },
        { text: "Let Zane freeze them", to: "c3-06freeze" }
      ]
    },

    "c3-06keys": {
      img: "mountain", speaker: "zane", gear: "g8",
      text: `Zach remembered the training grounds. He sneaked behind the first Tickling and pulled its key. *Clunk!* It stopped dead. Then the next. *Clunk!* And the last. *Clunk!*

A Golden Gear rolled out of the last one.

Zane raised an eyebrow. "That was very clever."`,
      next: { text: "Climb to the top", to: "c3-07" }
    },

    "c3-06smash": {
      img: "mountain", speaker: "cole",
      text: `Cole cracked his knuckles. "Stand back!"

*SMASH! CRASH! BASH!*

In three seconds, the Rock Ticklings were a pile of *pebbles*.

"That's how I ROCK," said Cole, blowing dust off his fist.`,
      next: { text: "Climb to the top", to: "c3-07" }
    },

    "c3-06freeze": {
      img: "mountain", speaker: "zane",
      text: `Zane held up his hands. A blast of ice shot out. *Fwoosh!*

The Rock Ticklings froze solid.

"Now they are rock-icles," said Zane.

Cole stared at him. "Did you just make a JOKE?"

Zane smiled. "Maybe."`,
      next: { text: "Climb to the top", to: "c3-07" }
    },

    "c3-07": {
      img: "summit", anchor: true,
      text: `At the very top stood an *enormous* clock, carved into the mountain. Next to it was a cuckoo clock door, and a little bird's nest on a ledge.

A sign said, "Open when the little hand is on the 3."

The clock hands were stuck, but Zach could turn them.`,
      choices: [
        { text: "Peek in the bird's nest", to: "c3-08nest" },
        { text: "Fix the clock", to: "c3-09" }
      ]
    },

    "c3-08nest": {
      img: "summit", gear: "g9",
      text: `Zach tiptoed to the nest and peeked in. Something shiny was hiding under a feather. A Golden Gear!

Then the cuckoo door creaked open. A grumpy cuckoo bird glared at him.

"Cuckoo," it said, very crossly. Zach backed away slowly.`,
      next: { text: "Fix the clock", to: "c3-09" }
    },

    "c3-09": {
      img: "summit", clock: "12:00", clockSign: "3",
      text: `Zach looked at the sign again. The little hand had to point to the 3.

The little hand is the short black one. The big hand is the long red one.

Which clock is right?`,
      choices: [
        { text: "Set the hands like this", to: "c3-10wrong", clock: "9:00" },
        { text: "Set the hands like this", to: "c3-10right", clock: "3:00" },
        { text: "Set the hands like this", to: "c3-10wrong", clock: "6:00" }
      ]
    },

    "c3-10wrong": {
      img: "summit", flag: "clockmiss",
      fail: { hint: "The little hand shows the hour. Find the 3!" },
      text: `Zach turned the hands. *Click... clunk.*

The cuckoo door burst open. Out shot the grumpy cuckoo bird.

*BOP!* It bonked Zach on the head. *BOP!* It bonked Cole. *BOP!* It even bonked Zane.

"Cuckoo," it said, and slammed the door.`
    },

    "c3-10right": {
      img: "summit", badge: "clock-reader", badgeUnless: "clockmiss",
      text: `Zach turned the little hand to the 3. *CLICK!*

The giant clock rumbled. Gears turned. A secret door slid open in the middle of the clock face.

Inside, something glowed like sunshine. The second piece of the Golden Hour!`,
      next: { text: "Grab it!", to: "c3-11" }
    },

    "c3-11": {
      img: "summit", speaker: "tock", end: 3,
      text: `Then there was a ROAR of engines. A purple rocket shaped like an alarm clock blasted out from behind the mountain.

Tock was inside, shaking his fist. "TWO pieces? NOT fair!" he yelled. "You'll never get into my tower!"

And off he zoomed, leaving a long trail of smoke.`
    }
  }
});
