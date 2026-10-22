// Chapter 1: The New Recruit
// Text rules: *word* = bold tricky word he can tap to hear. Blank line = new paragraph.
// Page fields: img, speaker, text, next {text,to} OR choices [{text,to,needFlag}],
//   anchor, gear, badge, flag, effect ("swirl"), fail {hint, badge}, end (chapter number)

STORY.addChapter({
  n: 1,
  title: "The New Recruit",
  start: "c1-01",
  gears: ["g1", "g2", "g3"],
  pages: {

    "c1-01": {
      img: "training", anchor: true,
      text: `Zach walked up the long stone steps with his bag on his back. At the top was the *monastery*, with red roofs and a big round clock.

Today was his first day as a ninja *recruit*. His tummy did a little flip. Would he be good enough?`,
      next: { text: "Climb to the top", to: "c1-02" }
    },

    "c1-02": {
      img: "training", speaker: "arin",
      text: `"You made it!" A boy ran over, grinning from ear to ear. "I'm Arin! I was the new kid last year. Now YOU are!"

Behind him, Sora was fixing a little robot. *Splurt!* It squirted oil right in her face.

An old man with a long white beard was watching. It was *Sensei* Wu.`,
      choices: [
        { text: "Bow to Sensei Wu", to: "c1-03a" },
        { text: "Wave hello", to: "c1-03b" }
      ]
    },

    "c1-03a": {
      img: "training", speaker: "wu",
      text: `Zach put his hands together and gave a deep bow.

Sensei Wu bowed back, very slowly. "A *polite* ninja," he said. "That is a good start."

Arin whispered, "He likes you already. It took me a WEEK to get a nod!"`,
      next: { text: "Keep going", to: "c1-04" }
    },

    "c1-03b": {
      img: "training", speaker: "sora",
      text: `Zach gave a little wave. "Hello!"

Sensei Wu looked at him for a long moment. Then he waved back, very, very slowly.

Arin tried not to giggle. Sora wiped the oil off her face and laughed so hard she snorted.`,
      next: { text: "Keep going", to: "c1-04" }
    },

    "c1-04": {
      img: "training", speaker: "arin",
      text: `Arin led Zach to the training course. There was a *wobbly* beam over a pit of mud. There were big punching bags swinging back and forth.

"Get to the other side," Arin said. "Pick your path, rookie!"

Zach looked carefully at both.`,
      choices: [
        { text: "Walk the wobbly beam", to: "c1-05a" },
        { text: "Dodge the punching bags", to: "c1-05b" }
      ]
    },

    "c1-05a": {
      img: "training",
      text: `Zach stepped onto the beam. It wobbled to the left, so he leaned right. It wobbled to the right, so he leaned left.

He was nearly halfway! Then a *butterfly* landed on his nose.

"Ah... ah... ACHOO!"

Zach's feet flew up into the air.`,
      next: { text: "Uh oh...", to: "c1-06" }
    },

    "c1-05b": {
      img: "training",
      text: `Zach ducked under the first bag. He jumped past the second. He was doing it!

He turned to give Arin a thumbs up.

*BONK!*

The third bag hit him right on the bottom, and Zach flew up into the air.`,
      next: { text: "Uh oh...", to: "c1-06" }
    },

    "c1-06": {
      img: "training",
      text: `Zach tumbled down, down, down toward the pit of *squelchy* mud. He shut his eyes tight.

"Nooooo!" he yelled.

Then something strange happened. His hands began to glow gold, and the whole world went... *backwards*.`,
      next: { text: "What's happening?!", to: "c1-07" }
    },

    "c1-07": {
      img: "training", effect: "swirl",
      text: `The mud zoomed away. The bag swung back. Zach zoomed up and up, feet first, like a movie playing backwards.

*Whoosh!*

Then he was standing at the start of the course again, without one speck of mud on him.

Arin's mouth fell open. "Did you just... do that?"`,
      next: { text: "Keep going", to: "c1-08" }
    },

    "c1-08": {
      img: "training", speaker: "wu",
      text: `Sensei Wu hurried over, faster than Zach had ever seen an old man move.

"Time *Spinjitzu*," he said softly. "I have not seen it in a hundred years."

He looked at Zach's glowing hands. "You can turn back time, young one. That is a very rare *power*."`,
      next: { text: "Keep going", to: "c1-09" }
    },

    "c1-09": {
      img: "training", speaker: "wu", badge: "first-rewind",
      text: `"But be careful," Wu said. "You can only go back to your Time *Anchor*."

He showed Zach how to press his glowing hand to the ground. A gold circle spun under his feet, like the face of a clock.

"Now, if things go wrong, you can come back here."`,
      next: { text: "Plant the anchor!", to: "c1-10" }
    },

    "c1-10": {
      img: "training", speaker: "sora", anchor: true,
      text: `Sora held up a shiny Golden Gear. "Time for a test, rookie," she said with a grin. "I hid one of these. Find it!"

Zach thought hard. Sora was clever. She would hide it somewhere tricky.

He looked at the tall tree, the duck pond and the old shed.`,
      choices: [
        { text: "Climb the tall tree", to: "c1-11tree" },
        { text: "Look by the duck pond", to: "c1-11pond" },
        { text: "Search the old shed", to: "c1-11shed" }
      ]
    },

    "c1-11tree": {
      img: "training", speaker: "sora", gear: "g1",
      text: `Zach climbed up the tall tree, branch by branch. Near the top, something shone in the sun.

It was the Golden Gear, tucked into a bird's nest! The bird did not look happy about it.

"Nice!" Sora called. "You think like an *engineer*."`,
      next: { text: "Climb down", to: "c1-12" }
    },

    "c1-11shed": {
      img: "training",
      text: `Zach opened the *creaky* shed door. Inside were brooms, buckets and one very sleepy cat.

The cat opened one eye. It did not have a gear. It closed its eye again.

Zach shut the door very quietly.`,
      next: { text: "Look somewhere else", to: "c1-10" }
    },

    "c1-11pond": {
      img: "training",
      fail: { hint: "Geese guard their ponds. A clever ninja looks somewhere higher.", badge: "honked" },
      text: `Zach tiptoed to the duck pond and peeked into the reeds.

*HONK!*

A huge, angry goose burst out. Then another. Then FIVE more!

They chased Zach round and round the yard, flapping and pecking at his pants. "HONK HONK HONK!"`
    },

    "c1-12": {
      img: "training", speaker: "arin",
      text: `Just then, every clock went *silent*. Tick... tick... nothing.

Up the steps marched a line of little tin robots. They had googly eyes, toothy grins and big wind-up keys on their backs.

"*Ticklings*!" Arin shouted. "Get ready!"

Zach had to think fast.`,
      choices: [
        { text: "Hide and watch them", to: "c1-13hide" },
        { text: "Shout for Arin", to: "c1-13shout" },
        { text: "Charge at them!", to: "c1-13charge" }
      ]
    },

    "c1-13hide": {
      img: "training", gear: "g2", flag: "keytrick",
      text: `Zach hid behind a barrel and watched carefully.

One Tickling bumped into a post. Its key popped out of its back, and it stopped dead, like a toy with no *batteries*!

"Their keys!" Zach whispered. "That's how they work!"

Something rolled out of the Tickling's tummy. A Golden Gear!`,
      next: { text: "Keep going", to: "c1-14" }
    },

    "c1-13shout": {
      img: "training", speaker: "arin",
      text: `"ARIN!" Zach yelled.

Arin leapt in, spinning like a tornado. Ticklings went flying everywhere. *Clang! Bonk! Clatter!*

"Thanks!" Zach said. But he wished he had seen how the robots worked. Maybe there was a smarter way to stop them.`,
      next: { text: "Keep going", to: "c1-14" }
    },

    "c1-13charge": {
      img: "training",
      fail: { hint: "A quiet ninja watches first, then acts.", badge: "tickled" },
      text: `Zach ran straight at the Ticklings. "Hi-YAH!"

The Ticklings looked at each other. Then they threw a big sticky net. *Fwump!*

Zach was stuck. Then the Ticklings started to tickle. They tickled his feet. They tickled his tummy. He laughed so hard he could not move!`
    },

    "c1-14": {
      img: "tock-clock", speaker: "tock",
      text: `Suddenly, the big clock on the tower changed. Its face grew two yellow eyes and a grumpy mouth.

"Greetings, ninja!" it boomed. "I am *Tock*, and I have stolen the Golden Hour!"

The clock hands twirled like a moustache. "Soon all of Ninjago will be *frozen*, and it will be MINE!"`,
      next: { text: "Keep going", to: "c1-15" }
    },

    "c1-15": {
      img: "tock-clock", speaker: "tock",
      text: `"I split the Golden Hour into three pieces," Tock *bragged*. "You will NEVER find them. Your time is UP!"

He laughed a creaky laugh. Then the clock face went back to normal, ticking like nothing had happened.

Sora stamped her foot. "Ugh! What a show-off."`,
      next: { text: "Keep going", to: "c1-16" }
    },

    "c1-16": {
      img: "training", speaker: "wu",
      text: `Sensei Wu turned to Zach. "Only a ninja with time *magic* can stop Tock," he said. "Will you help us, Zach?"

Zach felt his tummy flip again. But this time it was a brave flip.

He nodded. "I'll do it."`,
      choices: [
        { text: "Peek in Wu's tea room first", to: "c1-17tea" },
        { text: "Run to the dragon!", to: "c1-18" }
      ]
    },

    "c1-17tea": {
      img: "training", speaker: "wu", gear: "g3",
      text: `Zach slipped into Wu's tea room. It smelled of *jasmine* tea and old books.

Something shiny was hiding behind the teapot. A Golden Gear!

"Ahem." Wu stood in the doorway with one eyebrow up. "Most ninjas never find that one," he said, with a tiny smile.`,
      next: { text: "Run to the dragon!", to: "c1-18" }
    },

    "c1-18": {
      img: "training", speaker: "wyldfyre", end: 1,
      text: `Riyu the dragon was waiting in the courtyard, flapping happily. Sora and Wyldfyre were already on board.

"Hop on, rookie!" Wyldfyre yelled. "Let's go smash some clocks!"

"We are NOT smashing clocks," said Sora.

Zach climbed up. His first real mission was about to begin.`
    }
  }
});
