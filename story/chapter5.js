// Chapter 5: The Last Second
// Text rules: *word* = bold tricky word he can tap to hear. Blank line = new paragraph.
// finale: 1 = good ending (Tock escapes), 2 = great ending (Tock caught).
// A great ending with all 15 gears goes to the bonus page (finale: 3 = awesome).

STORY.bonusPage = "c5-bonus";

STORY.addChapter({
  n: 5,
  title: "The Last Second",
  start: "c5-01",
  gears: ["g13", "g14", "g15"],
  pages: {

    "c5-01": {
      img: "frozen", anchor: true,
      text: `When Zach got back to the monastery, it was too late. Everything was frozen.

Birds hung in the sky. The fountain stood still, mid-splash. Sensei Wu was frozen with his teacup halfway to his mouth.

But Zach could still move. His time magic was keeping him safe!`,
      choices: [
        { text: "Unfreeze Lloyd first", to: "c5-02lloyd" },
        { text: "Unfreeze Riyu first", to: "c5-02riyu" },
        { text: "Rush to the tower alone", to: "c5-02alone" }
      ]
    },

    "c5-02lloyd": {
      img: "frozen", speaker: "lloyd",
      text: `Zach found Lloyd frozen in the courtyard, halfway through a kick. Zach touched his arm, and his hands glowed gold.

Lloyd blinked. "Whoa. What did I miss?"

Zach told him everything, very fast.

"Nice work, rookie," said Lloyd. "Let's wake up the team."`,
      next: { text: "Wake up the team", to: "c5-03" }
    },

    "c5-02riyu": {
      img: "frozen", speaker: "riyu", gear: "g13",
      text: `Zach ran to Riyu first. Riyu was frozen mid-yawn.

Zach's hands glowed gold. Riyu blinked, shook, and gave Zach a big slobbery lick. *SLURP!*

"Yuck!" Zach laughed. Something shiny was stuck in Riyu's *saddle*. A Golden Gear!`,
      next: { text: "Wake up the team", to: "c5-03" }
    },

    "c5-02alone": {
      img: "frozen",
      fail: { hint: "Even the best ninja needs a team." },
      text: `Zach ran all the way to the sea on his own.

But Tock had a whole army of Ticklings waiting on the beach. Hundreds of them!

They chased him round and round the sand, tickling and clanking, until he was too giggly to stand up.`
    },

    "c5-03": {
      img: "frozen", speaker: "sora",
      text: `One by one, Zach unfroze them all. Arin. Sora. Wyldfyre. Cole. Zane. Kai and Nya. And Sensei Wu, who finished his sip of tea like nothing had happened.

Zach held up the third piece. Sora had the other two.

"We have them all," said Sora. "But how do we use them?"`,
      choices: [
        { text: "Put them in Wu's big bell", to: "c5-04bell" },
        { text: "Use all three pieces at once!", to: "c5-04babies" }
      ]
    },

    "c5-04bell": {
      img: "frozen", speaker: "wu",
      text: `They put the three pieces into the big temple bell. Wu rang it. *BONNNG!*

A golden shield spread over Ninjago like a giant bubble. Inside it, nothing could freeze.

"Now," said Wu, "go and stop Tock. Before the last second ticks away."`,
      next: { text: "To the dragons!", to: "c5-05" }
    },

    "c5-04babies": {
      img: "frozen",
      fail: { hint: "Too much power is too much. Ask Sensei Wu.", badge: "babies" },
      text: `Zach held all three pieces together. They glowed brighter... and BRIGHTER... *FLASH!*

When Zach opened his eyes, every ninja was a toddler!

Baby Kai was sucking his thumb. Baby Zane was chewing a gear. Baby Cole was yelling, "I WANT A SNACK!"`
    },

    "c5-05": {
      img: "sky", speaker: "lloyd", anchor: true,
      text: `The dragons flew out over the sea, with Zach on Riyu. Ahead was Tock's giant purple Clock *Zeppelin*, with a huge propeller spinning on top.

"Here he comes!" yelled Lloyd. "How do we take it down?"`,
      choices: [
        { text: "Fly under it", to: "c5-06under" },
        { text: "Fly straight at it", to: "c5-06straight" },
        { text: "Fly over the top", to: "c5-06over" }
      ]
    },

    "c5-06under": {
      img: "sky", gear: "g14",
      text: `Riyu dived under the zeppelin. Stuck to a pipe was a Golden Gear! Zach grabbed it.

Then he spotted a loose bolt. Zach gave it a twist. *PFFFFT!* The zeppelin started to leak like a balloon.

It wobbled down, down, down, and landed on the beach with a *THUD*.`,
      next: { text: "Land on the beach", to: "c5-07" }
    },

    "c5-06straight": {
      img: "sky", speaker: "lloyd",
      text: `Lloyd's hands glowed green. "NINJA-GO!"

He blasted a huge ball of energy. *POP!* The zeppelin burst like a balloon.

It zoomed round and round, making a very rude noise, and crashed onto the beach.`,
      next: { text: "Land on the beach", to: "c5-07" }
    },

    "c5-06over": {
      img: "sky",
      fail: { hint: "Watch out for the spinning bits!" },
      text: `Riyu flew up over the top of the zeppelin. But the giant *propeller* was spinning right there!

*WHOOOSH!* The wind blew them away like a leaf, round and round, right into a big fluffy cloud.

Riyu sneezed. Zach was very, very dizzy.`
    },

    "c5-07": {
      img: "robot", speaker: "tock", anchor: true,
      text: `Out of the zeppelin stomped a GIANT clock robot, with Tock on top.

"You can't stop me!" he cackled. "In ten seconds, Ninjago freezes FOREVER!"

The robot's clock ticked. Ten. Nine. Eight...`,
      choices: [
        { text: "Pull the robot's wind-up key", to: "c5-08key", needFlag: "keytrick" },
        { text: "Use Tock's spare key", to: "c5-08spare", needFlag: "sparekey" },
        { text: "Call for Sprocket!", to: "c5-08sprocket", needFlag: "sprocket" },
        { text: "Rewind the Freeze Machine", to: "c5-08rewind" }
      ]
    },

    "c5-08key": {
      img: "robot", speaker: "tock", finale: 2,
      text: `Zach remembered the Ticklings. Every clockwork thing has a key!

He used Slow-Mo, ran up the robot's leg, grabbed the giant key and pulled. *POP!*

The robot wound down. Tick... tock... *clunk.*

"No... fair..." Tock grumbled, very, very slowly.`
    },

    "c5-08spare": {
      img: "robot", speaker: "tock", finale: 2,
      text: `Zach pulled out the spare key from Tock's drawer. He climbed up and pushed it into the robot's keyhole.

Then he turned it BACKWARDS. *Click, click, click!*

The robot spun round and round like a top, and Tock spun with it. "Make it STOOOP!" he wailed.`
    },

    "c5-08sprocket": {
      img: "robot", speaker: "sprocket", finale: 2, gear: "g15",
      text: `Sprocket climbed out of Zach's pocket. "Leave this to me!"

He scurried up the robot's back and yanked the giant key. *POP!* The robot clanked to a stop, and a Golden Gear fell out.

"That's for never winding me up!" Sprocket shouted.`
    },

    "c5-08rewind": {
      img: "robot", speaker: "tock", finale: 1,
      text: `Zach pointed his glowing hands at the robot. He spun its time backwards, faster and faster, until the Freeze Machine was just a pile of parts.

Three. Two. One... nothing froze!

"Grr! I'll be BACK!" Tock yelled. He leapt into his rocket and zoomed away.`
    },

    "c5-bonus": {
      img: "training", speaker: "wu", finale: 3,
      text: `The next day, Zach used all fifteen Golden Gears to fix the monastery's big old clock. It ticked again for the first time in a hundred years.

And Tock had a new job, as Sensei Wu's tea timer.

"Your tea is ready," Tock grumbled. "AGAIN."

Wu smiled. "Welcome to the team, Zach."`
    }
  }
});
