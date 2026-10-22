// Shared story data: images, characters, badges, how to say tricky words.
window.STORY = {
  title: "Zach and the Stolen Hour",
  totalGears: 15,
  chapters: {},
  addChapter(ch) { this.chapters[ch.n] = ch; },

  // Scene pictures. focus = which part to keep when the picture is cropped
  // to fit half the screen (CSS object-position).
  images: {
    "training":   { file: "images/scene-training.jpg",   label: "The training grounds", focus: "50% 60%" },
    "tock-clock": { file: "images/scene-tock-clock.jpg", label: "Tock on the clock tower", focus: "50% 35%" },
    "flight":     { file: "images/scene-flight.jpg",     label: "Flying on Riyu", focus: "50% 50%" },
    "market":     { file: "images/scene-market.jpg",     label: "The Frozen Market", focus: "50% 50%" },
    "bell":       { file: "images/scene-bell.jpg",       label: "The Freeze Bell", focus: "50% 40%" },
    "mountain":   { file: "images/scene-mountain.jpg",   label: "Clock Mountain", focus: "50% 50%" },
    "summit":     { file: "images/scene-summit.jpg",     label: "The Summit Clock", focus: "50% 50%" },
    "tower":      { file: "images/scene-tower.jpg",      label: "The Ticking Tower", focus: "50% 50%" },
    "factory":    { file: "images/scene-factory.jpg",    label: "Tock's factory", focus: "50% 50%" },
    "office":     { file: "images/scene-office.jpg",     label: "Tock's office", focus: "50% 50%" },
    "frozen":     { file: "images/scene-frozen.jpg",     label: "Frozen Ninjago", focus: "50% 50%" },
    "sky":        { file: "images/scene-sky.jpg",        label: "The sky battle", focus: "50% 50%" },
    "robot":      { file: "images/tock-robot.jpg",       label: "Tock's giant robot", focus: "50% 40%" }
  },

  // Little portrait that pops up when someone is talking.
  characters: {
    zach:     { name: "Zach",       file: "images/portrait-zach.jpg",     color: "#2f7d5b" },
    arin:     { name: "Arin",       file: "images/portrait-arin.jpg",     color: "#c0392b" },
    sora:     { name: "Sora",       file: "images/portrait-sora.jpg",     color: "#2e86c1" },
    wyldfyre: { name: "Wyldfyre",   file: "images/portrait-wyldfyre.jpg", color: "#e67e22" },
    riyu:     { name: "Riyu",       file: "images/portrait-riyu.jpg",     color: "#7d3c98" },
    wu:       { name: "Sensei Wu",  file: "images/portrait-wu.jpg",       color: "#b7950b" },
    cole:     { name: "Cole",       file: "images/portrait-cole.jpg",     color: "#4d4d4d" },
    zane:     { name: "Zane",       file: "images/portrait-zane.jpg",     color: "#5dade2" },
    kai:      { name: "Kai",        file: "images/portrait-kai.jpg",      color: "#cb4335" },
    nya:      { name: "Nya",        file: "images/portrait-nya.jpg",      color: "#1f618d" },
    lloyd:    { name: "Lloyd",      file: "images/portrait-lloyd.jpg",    color: "#239b56" },
    tock:     { name: "Tock",       file: "images/portrait-tock.jpg",              color: "#6c3483" },
    sprocket: { name: "Sprocket",   file: "images/portrait-sprocket.jpg",          color: "#7f8c8d" }
  },

  // How the tablet voice should say tricky words (only where it gets them wrong).
  say: {
    "sensei": "sen-say",
    "spinjitzu": "spin jitsu",
    "wyldfyre": "wild fire",
    "riyu": "ree you",
    "ninjago": "ninja go",
    "tock": "tock",
    "ticklings": "tickle-ings"
  },

  // Badges. kind: story / clever / funny (funny fail) / collector
  badges: [
    { id: "first-rewind", name: "First Rewind!",  icon: "rewind",  kind: "story",   how: "Discover your time power" },
    { id: "honked",       name: "Honked!",        icon: "goose",   kind: "funny",   how: "Get chased by the geese" },
    { id: "tickled",      name: "Tickle Trouble", icon: "feather", kind: "funny",   how: "Get caught by the Ticklings" },
    { id: "ch1-gears",    name: "Gear Hunter I",  icon: "gear",    kind: "collector", how: "Find all 3 gears in Chapter 1" },
    { id: "new-friend",   name: "New Friend",     icon: "heart",   kind: "clever",  how: "Make friends with Sprocket" },
    { id: "kaboom",       name: "Kaboom!",        icon: "boom",    kind: "funny",   how: "Wyldfyre hits the fireworks" },
    { id: "ch2-gears",    name: "Gear Hunter II", icon: "gear",    kind: "collector", how: "Find all 3 gears in Chapter 2" },
    { id: "snowball",     name: "Snowball!",      icon: "snow",    kind: "funny",   how: "Take the ice slide" },
    { id: "slow-mo",      name: "Slow-Mo!",       icon: "clock",   kind: "story",   how: "Learn to slow down time" },
    { id: "clock-reader", name: "Clock Reader",   icon: "clock",   kind: "clever",  how: "Solve the summit clock first try" },
    { id: "ch3-gears",    name: "Gear Hunter III",icon: "gear",    kind: "collector", how: "Find all 3 gears in Chapter 3" },
    { id: "dance",        name: "Dance Machine",  icon: "music",   kind: "clever",  how: "Dance with the Ticklings" },
    { id: "ch4-gears",    name: "Gear Hunter IV", icon: "gear",    kind: "collector", how: "Find all 3 gears in Chapter 4" },
    { id: "babies",       name: "Baby Ninjas",    icon: "baby",    kind: "funny",   how: "Use all three pieces at once" },
    { id: "ch5-gears",    name: "Gear Hunter V",  icon: "gear",    kind: "collector", how: "Find all 3 gears in Chapter 5" },
    { id: "time-master",  name: "Time Master",    icon: "star",    kind: "story",   how: "Finish the story" },
    { id: "awesome",      name: "Awesome Ending", icon: "star",    kind: "collector", how: "Get all three stars" }
  ]
};
