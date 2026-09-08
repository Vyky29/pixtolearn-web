/* pixTOlearn Swimming x STA ILSP + Swim England Stages 1-7 */
const CATS = {
  entry: { label: "Entry / exit in the water safely", colour: "#d6315f" },
  move: { label: "Water movement", colour: "#e8608c" },
  breath: { label: "Aquatic breathing & submersion", colour: "#f0a3b6" },
  float: { label: "Floating & balance", colour: "#1d5a63" },
  stream: { label: "Streamlining, rotation & sculling", colour: "#79aeba" },
  safety: { label: "Water safety", colour: "#5bb8d4" },
  fcrawl: { label: "Front crawl", colour: "#c96a20" },
  back: { label: "Backstroke", colour: "#eda22a" },
  breast: { label: "Breastroke", colour: "#f2d63c" },
  fly: { label: "Butterfly", colour: "#ebdd86" },
  diving: { label: "Diving, starts & turns", colour: "#8c1c22" },
  games: { label: "Games", colour: "#9b83b8" },
  toys: { label: "Toys & equipment", colour: "#efe9a8" },
  extras: { label: "Extras", colour: "#7fc08a" },
};

const CARDS = {
  "sitting-safety-entry": { name: "sitting safety entry", cat: "entry", bd: true },
  "entry-ladder": { name: "entry in the water using the ladder", cat: "entry", bd: true },
  "exit-ladder": { name: "exit the water using the ladder", cat: "entry", bd: true },
  "climb-out": { name: "climb out", cat: "entry", bd: true },
  "jump-in": { name: "jump in", cat: "entry", bd: true },
  "pencil-jump": { name: "pencil jump", cat: "entry", bd: true },
  "cannonball-jump": { name: "cannonball jump", cat: "entry", bd: true },
  "straddle-entry": { name: "straddle entry", cat: "entry", bd: true },
  "splash": { name: "splash", cat: "move", bd: true },
  "move-in-the-water": { name: "move in the water", cat: "move", bd: true },
  "jumping": { name: "jumping", cat: "move", bd: true },
  "monkey-walk": { name: "monkey walk", cat: "move", bd: true },
  "seahorse": { name: "seahorse", cat: "move", bd: true },
  "kick-with-noodle": { name: "kick with noodle", cat: "move", bd: true },
  "kick-on-back-with-noodle": { name: "kick on back with noodle", cat: "move", bd: true },
  "airplane-on-back": { name: "airplane on back", cat: "move", bd: true },
  "airplane-on-front": { name: "airplane on front", cat: "move", bd: true },
  "kick-with-float": { name: "kick with float", cat: "move", bd: true },
  "kick-on-back-with-float": { name: "kick on back with float", cat: "move", bd: true },
  "front-paddle": { name: "front paddle", cat: "move", bd: true },
  "wash-your-face": { name: "wash your face", cat: "breath", bd: true },
  "pouring-water": { name: "pouring water", cat: "breath", bd: true },
  "hold-breath": { name: "hold breath", cat: "breath", bd: true },
  "blow-out": { name: "blow out", cat: "breath", bd: true },
  "hum": { name: "hum", cat: "breath", bd: true },
  "blow-toy-away": { name: "blow toy away", cat: "breath", bd: true },
  "blow-bubbles-pop-tube": { name: "blow bubbles with pop tube", cat: "breath", bd: true },
  "face-in-the-water": { name: "face in the water", cat: "breath", bd: true },
  "face-in-the-water-hum": { name: "face in the water & hum", cat: "breath", bd: true },
  "face-in-the-water-blow-bubbles": { name: "face in the water & blow bubbles", cat: "breath", bd: true },
  "face-in-the-water-walk": { name: "face in the water & walk", cat: "breath", bd: true },
  "swim-underwater": { name: "swim underwater", cat: "breath", bd: true },
  "feet-first-surface-dive": { name: "feet first surface dive", cat: "breath", bd: true },
  "head-first-surface-dive": { name: "head first surface dive", cat: "breath", bd: true },
  "handstand": { name: "handstand", cat: "breath", bd: true },
  "float-on-back": { name: "float on back", cat: "float", bd: true },
  "float-on-front": { name: "float on front", cat: "float", bd: true },
  "soldier-float-on-back": { name: "soldier float on back", cat: "float", bd: true },
  "soldier-float-on-front": { name: "soldier float on front", cat: "float", bd: true },
  "standing-from-floating-on-back": { name: "standing from floating on back", cat: "float", bd: true },
  "standing-from-floating-on-front": { name: "standing from floating on front", cat: "float", bd: true },
  "tuck-float": { name: "tuck float", cat: "float", bd: true },
  "forward-somersault": { name: "forward somersault", cat: "float", bd: true },
  "backwards-somersault": { name: "backwards somersault", cat: "float", bd: true },
  "roll-back-to-front": { name: "roll back to front", cat: "stream", bd: true },
  "roll-front-to-back": { name: "roll front to back", cat: "stream", bd: true },
  "soldier-roll-back-to-front": { name: "soldier roll back to front", cat: "stream", bd: true },
  "soldier-roll-front-to-back": { name: "soldier roll front to back", cat: "stream", bd: true },
  "push-off-soldier-glide-on-back": { name: "push off & soldier glide on back", cat: "stream", bd: true },
  "push-off-soldier-glide-on-front": { name: "push off & soldier glide on front", cat: "stream", bd: true },
  "swim-float-kick": { name: "swim - float - kick legs", cat: "stream", bd: true },
  "rocket-arms": { name: "rocket arms", cat: "stream", bd: true },
  "rocket-glide-on-front": { name: "rocket glide on front", cat: "stream", bd: true },
  "rocket-glide-on-back": { name: "rocket glide on back", cat: "stream", bd: true },
  "rocket-roll-back-to-front": { name: "rocket roll back to front", cat: "stream", bd: true },
  "rocket-roll-front-to-back": { name: "rocket roll front to back", cat: "stream", bd: true },
  "push-off-rocket-glide-on-back": { name: "push off & rocket glide on back", cat: "stream", bd: true },
  "push-off-rocket-glide-on-front": { name: "push off & rocket glide on front", cat: "stream", bd: true },
  "push-off-on-back-underwater": { name: "push off on back underwater", cat: "stream", bd: true },
  "push-off-on-front-underwater": { name: "push off on front underwater", cat: "stream", bd: true },
  "flat-sculling": { name: "flat sculling", cat: "stream", bd: true },
  "front-sculling": { name: "front sculling", cat: "stream", bd: true },
  "sign-shout-for-help": { name: "sign & shout for help", cat: "safety", bd: true },
  "treading-water": { name: "treading water", cat: "safety", bd: true },
  "treading-water-sign-shout": { name: "treading water & sign/shout for help", cat: "safety", bd: true },
  "swim-with-clothes-on": { name: "swim with clothes on", cat: "safety", bd: true },
  "float-to-live": { name: "float to live", cat: "safety", bd: true },
  "rescue-with-a-buoyant-aid": { name: "rescue with a buoyant aid", cat: "safety", bd: true },
  "front-crawl-kick": { name: "front crawl kick", cat: "fcrawl", bd: true },
  "side-kicking": { name: "side kicking", cat: "fcrawl", bd: true },
  "lateral-breathing": { name: "lateral breathing", cat: "fcrawl", bd: true },
  "front-crawl-arms": { name: "front crawl arms", cat: "fcrawl", bd: true },
  "single-arm-lateral-breathing": { name: "single arm & lateral breathing", cat: "fcrawl", bd: true },
  "front-crawl": { name: "front crawl", cat: "fcrawl", bd: true },
  "backstroke-kick": { name: "backstroke kick", cat: "back", bd: true },
  "backstroke-arm": { name: "backstroke arm", cat: "back", bd: true },
  "backstroke-single-arm": { name: "backstroke single arm", cat: "back", bd: true },
  "backstroke-double-arm": { name: "backstroke double arm", cat: "back", bd: true },
  "backstroke": { name: "backstroke", cat: "back", bd: true },
  "breastroke-kick-on-front": { name: "breastroke kick on front", cat: "breast", bd: true },
  "breastroke-kick-on-back": { name: "breastroke kick on back", cat: "breast", bd: true },
  "breastroke-arms": { name: "breastroke arms", cat: "breast", bd: true },
  "breastroke-arms-breathing": { name: "breastroke arms breathing", cat: "breast", bd: true },
  "breastroke": { name: "breastroke", cat: "breast", bd: true },
  "dolphin-kick": { name: "dolphin kick", cat: "fly", bd: true },
  "dolphin-kick-on-back": { name: "dolphin kick on back", cat: "fly", bd: true },
  "rocket-dolphin-kick": { name: "rocket & dolphin kick", cat: "fly", bd: true },
  "rocket-dolphin-kick-back": { name: "rocket & dolphin kick back", cat: "fly", bd: true },
  "butterfly-arms": { name: "butterfly arms", cat: "fly", bd: true },
  "butterfly-arms-breathing": { name: "butterfly arms (breathing)", cat: "fly", bd: true },
  "butterfly-no-breathing": { name: "butterfly no breathing", cat: "fly", bd: true },
  "butterfly": { name: "butterfly", cat: "fly", bd: true },
  "sitting-dive": { name: "sitting dive", cat: "diving", bd: true },
  "kneeling-dive": { name: "kneeling dive", cat: "diving", bd: true },
  "dive": { name: "dive", cat: "diving", bd: true },
  "start-from-block": { name: "start from block", cat: "diving", bd: true },
  "backstroke-start": { name: "backstroke start", cat: "diving", bd: true },
  "tumbleturn": { name: "tumbleturn", cat: "diving", bd: true },
  "backstroke-tumbleturn": { name: "backstroke tumbleturn", cat: "diving", bd: true },
  "fly-back-turn": { name: "fly back turn", cat: "diving", bd: true },
  "breastroke-pull-out": { name: "breastroke pull out", cat: "diving", bd: true },
  "sorting-balls": { name: "sorting balls", cat: "games", bd: true },
  "throw-catch-the-ball": { name: "throw & catch the ball", cat: "games", bd: true },
  "ball-in-the-hoop": { name: "ball in the hoop", cat: "games", bd: true },
  "jump-in-the-hoop": { name: "jump in the hoop", cat: "games", bd: true },
  "through-the-hoop": { name: "through the hoop", cat: "games", bd: true },
  "water-pistol-game": { name: "water pistol", cat: "games", bd: true },
  "mirror-game": { name: "mirror game", cat: "games", bd: true },
  "stay-on-the-boat": { name: "stay on the boat", cat: "games", bd: true },
  "pick-up-sinkers": { name: "pick up sinkers", cat: "games", bd: true },
  "obstacle-game": { name: "obstacle game", cat: "games", bd: true },
  "dumbbells-work": { name: "dumbbells work", cat: "games", bd: true },
  "jet-waves": { name: "jet / waves", cat: "games", bd: true },
  "toys": { name: "toys", cat: "toys", bd: false },
  "ball": { name: "ball", cat: "toys", bd: false },
  "water-bucket": { name: "water bucket", cat: "toys", bd: false },
  "water-pistol": { name: "water pistol", cat: "toys", bd: false },
  "sinkers": { name: "sinkers", cat: "toys", bd: false },
  "pop-tube": { name: "pop tube", cat: "toys", bd: false },
  "big-float": { name: "big float", cat: "toys", bd: false },
  "waves": { name: "waves", cat: "toys", bd: false },
  "noodle": { name: "noodle", cat: "toys", bd: false },
  "float": { name: "float", cat: "toys", bd: false },
  "hoop": { name: "hoop", cat: "toys", bd: false },
  "swimming-costume-on": { name: "swimming costume on", cat: "extras", bd: true },
  "clothes-on": { name: "clothes on", cat: "extras", bd: true },
  "swim-cap-on": { name: "swim cap on", cat: "extras", bd: true },
  "goggles-on": { name: "goggles on", cat: "extras", bd: true },
  "shower": { name: "shower", cat: "extras", bd: true },
  "finished": { name: "finished", cat: "extras", bd: true },
};

const STA_SERIES = [
  {
    "id": "stanley",
    "name": "STAnley First Steps Series",
    "blurb": "7 progressive awards plus the Star Award, for learners from 2 years with or without an accompanying adult.",
    "accent": "#1f5fa8",
    "awards": [
      {
        "level": "Level 1",
        "colour": "#e8362f",
        "outcomes": [
          {
            "text": "Identify the teacher.",
            "cards": [
              "mirror-game",
              "sign-shout-for-help"
            ],
            "note": "Communication first. The mirror game and signal cards make \"find your teacher\" a visual cue rather than a name call."
          },
          {
            "text": "Move through the water for 2 metres on the back, roll to regain feet.",
            "cards": [
              "airplane-on-back",
              "roll-back-to-front",
              "standing-from-floating-on-back"
            ],
            "note": "Travel, roll, stand. Three cards for the whole chain."
          },
          {
            "text": "Enter the water safely.",
            "cards": [
              "sitting-safety-entry",
              "entry-ladder",
              "jump-in"
            ],
            "note": "Three entry options for pool type and learner readiness."
          },
          {
            "text": "Blow a small object across the pool for 2 metres.",
            "cards": [
              "blow-toy-away",
              "blow-out"
            ],
            "note": "Blow toy away is the exact assessed action."
          },
          {
            "text": "Splash feet at water's surface while supported by wall / woggle / adult and then return to a standing position.",
            "cards": [
              "splash",
              "kick-with-noodle",
              "seahorse"
            ],
            "note": "Splash for the feet action, noodle or seahorse for the support."
          },
          {
            "text": "Travel under a woggle bridge and through a shower created by a watering can.",
            "cards": [
              "pouring-water",
              "through-the-hoop",
              "noodle"
            ],
            "note": "Shower sensation plus travel under an object. Hoop stands in for the bridge shape."
          },
          {
            "text": "Walk forwards, backwards and sideways through the water unaided for 5 metres.",
            "cards": [
              "move-in-the-water",
              "monkey-walk"
            ],
            "note": "Forward / back on move in the water, sideways on monkey walk."
          },
          {
            "text": "Push and glide on the front.",
            "cards": [
              "rocket-arms",
              "push-off-soldier-glide-on-front",
              "push-off-rocket-glide-on-front"
            ],
            "note": "Arms cue, then the push."
          },
          {
            "text": "Move through the water on the front for 2 metres, turn around and move back to start position.",
            "cards": [
              "front-paddle",
              "move-in-the-water"
            ],
            "note": "Front paddle for the travel, move in the water for the turn."
          },
          {
            "text": "Exit pool safely.",
            "cards": [
              "climb-out",
              "exit-ladder"
            ],
            "note": "Climb out or ladder, matching the pool."
          }
        ]
      },
      {
        "level": "Level 2",
        "colour": "#e87722",
        "outcomes": [
          {
            "text": "Show an understanding of poolside safety.",
            "cards": [
              "sign-shout-for-help",
              "float-to-live"
            ],
            "note": "Water Safety cards give a visual hook for the rules the teacher then names."
          },
          {
            "text": "Perform a star floating position on front or back.",
            "cards": [
              "float-on-back",
              "float-on-front"
            ],
            "note": "Star float is the open limb float card on either side."
          },
          {
            "text": "Enter the water safely from the poolside.",
            "cards": [
              "sitting-safety-entry",
              "jump-in"
            ],
            "note": "Poolside entry without the ladder as the default."
          },
          {
            "text": "Use front paddle action to move a ball across the pool.",
            "cards": [
              "front-paddle",
              "ball",
              "throw-catch-the-ball"
            ],
            "note": "Front paddle plus the ball toy card."
          },
          {
            "text": "Blow bubbles into the water, with mouth or nose and mouth submerged.",
            "cards": [
              "blow-out",
              "face-in-the-water-blow-bubbles"
            ],
            "note": "Surface blow first, then face in and blow."
          },
          {
            "text": "Push and glide on the back.",
            "cards": [
              "push-off-soldier-glide-on-back",
              "push-off-rocket-glide-on-back"
            ],
            "note": "Arms by side or above the head."
          },
          {
            "text": "Move through the water for 2 metres on the front while blowing bubbles, return to an upright / standing position.",
            "cards": [
              "front-paddle",
              "face-in-the-water-blow-bubbles",
              "standing-from-floating-on-front"
            ],
            "note": "Travel, breathe, stand."
          },
          {
            "text": "Roll from front to back, looking at the ceiling.",
            "cards": [
              "roll-front-to-back",
              "float-on-back"
            ],
            "note": "Log roll finishing on the back float."
          },
          {
            "text": "Move through the water for 2 metres on the back using an alternating leg action, ears in water and return to an upright / standing position.",
            "cards": [
              "kick-on-back-with-float",
              "backstroke-kick",
              "standing-from-floating-on-back"
            ],
            "note": "Alternating kick with ears in, then regain feet."
          },
          {
            "text": "Climb out of the pool safely.",
            "cards": [
              "climb-out",
              "exit-ladder"
            ],
            "note": "Unaided exit."
          }
        ]
      },
      {
        "level": "Level 3",
        "colour": "#f0b323",
        "outcomes": [
          {
            "text": "Answer a question on poolside safety rules.",
            "cards": [
              "sign-shout-for-help",
              "float-to-live"
            ],
            "note": "Knowledge outcome with a visual prompt."
          },
          {
            "text": "Move through the water 5 metres on the front, using front paddle action.",
            "cards": [
              "front-paddle",
              "kick-with-float"
            ],
            "note": "Front paddle is the assessed travel."
          },
          {
            "text": "Enter the water from poolside, move forward 1 metre, then return and exit the pool unassisted.",
            "cards": [
              "jump-in",
              "move-in-the-water",
              "climb-out"
            ],
            "note": "Entry, short travel, exit as one strip."
          },
          {
            "text": "Complete a 360 degree turntable with feet off the pool floor.",
            "cards": [
              "move-in-the-water",
              "treading-water"
            ],
            "note": "Spin with feet off. Treading water holds the body up."
          },
          {
            "text": "Blow bubbles into the water with face submerged.",
            "cards": [
              "face-in-the-water-blow-bubbles",
              "face-in-the-water"
            ],
            "note": "Face in is the threshold, blow bubbles is the assessed action."
          },
          {
            "text": "Roll from back to front and return onto the back.",
            "cards": [
              "roll-back-to-front",
              "roll-front-to-back"
            ],
            "note": "Both directions of the log roll."
          },
          {
            "text": "Perform a star float while on the back and regain the feet.",
            "cards": [
              "float-on-back",
              "standing-from-floating-on-back"
            ],
            "note": "Float then stand."
          },
          {
            "text": "Jump or step into the water from poolside with hand support from a swimming teacher or assistant.",
            "cards": [
              "jump-in",
              "sitting-safety-entry"
            ],
            "note": "Supported entry. Sitting entry is the safer teaching bridge."
          },
          {
            "text": "Move through the water while on the back, using an alternating leg action for 5 metres.",
            "cards": [
              "backstroke-kick",
              "kick-on-back-with-noodle",
              "airplane-on-back"
            ],
            "note": "Alternating legs on the back."
          },
          {
            "text": "Show treading water action with legs on woggle (seahorses).",
            "cards": [
              "seahorse",
              "treading-water",
              "noodle"
            ],
            "note": "Seahorse is the woggle treading card."
          }
        ]
      },
      {
        "level": "Level 4",
        "colour": "#3aa8dc",
        "outcomes": [
          {
            "text": "Answer 2 questions on poolside safety.",
            "cards": [
              "sign-shout-for-help",
              "float-to-live"
            ],
            "note": "Two questions, same visual prompts."
          },
          {
            "text": "Push and glide on back, tuck and roll forward to return to poolside.",
            "cards": [
              "push-off-rocket-glide-on-back",
              "tuck-float",
              "forward-somersault"
            ],
            "note": "Glide, tuck, roll forward."
          },
          {
            "text": "Swim 5 metres of front paddle, roll onto back and swim 5 metres on the back.",
            "cards": [
              "front-paddle",
              "roll-front-to-back",
              "backstroke-kick"
            ],
            "note": "Front, roll, back as one continuous strip."
          },
          {
            "text": "Tread water, using arms and legs.",
            "cards": [
              "treading-water",
              "seahorse"
            ],
            "note": "Full treading water."
          },
          {
            "text": "Bob up and down, submerging the face 4 times, exhaling underwater.",
            "cards": [
              "face-in-the-water-blow-bubbles",
              "jumping",
              "hold-breath"
            ],
            "note": "Bobbing with exhalation on each submersion."
          },
          {
            "text": "Attempt a circular action of either arms or legs.",
            "cards": [
              "breastroke-arms",
              "breastroke-kick-on-front",
              "dumbbells-work"
            ],
            "note": "Circular action preview of breaststroke."
          },
          {
            "text": "Pick up an object from below the water surface.",
            "cards": [
              "pick-up-sinkers",
              "sinkers",
              "face-in-the-water"
            ],
            "note": "First object retrieve of the pathway."
          },
          {
            "text": "Jump or step into pool safely unaided.",
            "cards": [
              "jump-in",
              "pencil-jump"
            ],
            "note": "Unaided entry."
          },
          {
            "text": "Perform 2 float positions, which may be in a sequence and performed on the front or the back.",
            "cards": [
              "float-on-back",
              "float-on-front",
              "tuck-float"
            ],
            "note": "Any two shapes from the float family."
          },
          {
            "text": "Climb out of pool safely unaided.",
            "cards": [
              "climb-out"
            ],
            "note": "Climb out only."
          }
        ]
      },
      {
        "level": "Level 5",
        "colour": "#5cb85c",
        "outcomes": [
          {
            "text": "Answer 2 questions on poolside rules.",
            "cards": [
              "sign-shout-for-help",
              "float-to-live"
            ],
            "note": "Rules check with Water Safety cards."
          },
          {
            "text": "Push off on the back and kick with a simultaneous leg action for 5 metres using a woggle or float.",
            "cards": [
              "kick-on-back-with-noodle",
              "kick-on-back-with-float",
              "breastroke-kick-on-back"
            ],
            "note": "Simultaneous kick on the back."
          },
          {
            "text": "Swim 2 metres of front paddle or back paddle, without support.",
            "cards": [
              "front-paddle",
              "backstroke-kick"
            ],
            "note": "Unaided paddle either side."
          },
          {
            "text": "Perform a push and glide on the front, keeping the face in the water and blowing bubbles.",
            "cards": [
              "push-off-rocket-glide-on-front",
              "face-in-the-water-blow-bubbles"
            ],
            "note": "Glide with face in and bubbles."
          },
          {
            "text": "Hold 3 different types of floating positions, each for 3 seconds.",
            "cards": [
              "float-on-back",
              "float-on-front",
              "tuck-float",
              "soldier-float-on-back"
            ],
            "note": "Three shapes from the float set."
          },
          {
            "text": "Retrieve an object from bottom of pool.",
            "cards": [
              "pick-up-sinkers",
              "swim-underwater",
              "sinkers"
            ],
            "note": "Full submersion retrieve."
          },
          {
            "text": "Breathe rhythmically for 4 cycles, either supported or moving.",
            "cards": [
              "lateral-breathing",
              "face-in-the-water-blow-bubbles",
              "blow-out"
            ],
            "note": "Four breath cycles. Lateral breathing is the rhythm cue."
          },
          {
            "text": "Demonstrate front crawl arm action.",
            "cards": [
              "front-crawl-arms"
            ],
            "note": "Arms only demonstration."
          },
          {
            "text": "Jump or step in from poolside, tread water, turn and swim back to poolside.",
            "cards": [
              "jump-in",
              "treading-water",
              "front-paddle",
              "climb-out"
            ],
            "note": "Entry, tread, turn, return."
          },
          {
            "text": "Demonstrate back crawl arm action.",
            "cards": [
              "backstroke-arm",
              "backstroke-single-arm"
            ],
            "note": "Arms only on the back."
          }
        ]
      },
      {
        "level": "Level 6",
        "colour": "#c85fa8",
        "outcomes": [
          {
            "text": "Answer 2 water safety questions.",
            "cards": [
              "sign-shout-for-help",
              "float-to-live"
            ],
            "note": "Water safety knowledge check."
          },
          {
            "text": "Step, star or pencil jump into the pool, tread water then return to poolside.",
            "cards": [
              "jump-in",
              "pencil-jump",
              "straddle-entry",
              "treading-water"
            ],
            "note": "Three jump shapes, then tread and return."
          },
          {
            "text": "Push and glide on the back, arms by side, ears in water.",
            "cards": [
              "push-off-soldier-glide-on-back",
              "soldier-float-on-back"
            ],
            "note": "Soldier position on the back."
          },
          {
            "text": "Hold the side of the pool and push off on the side under water.",
            "cards": [
              "push-off-on-front-underwater",
              "side-kicking",
              "hold-breath"
            ],
            "note": "Side push under water."
          },
          {
            "text": "Swim through a submerged hoop.",
            "cards": [
              "through-the-hoop",
              "swim-underwater",
              "hoop"
            ],
            "note": "Games folder owns this skill."
          },
          {
            "text": "Swim on the front, tuck up and return swimming on the back.",
            "cards": [
              "front-paddle",
              "tuck-float",
              "roll-front-to-back",
              "backstroke-kick"
            ],
            "note": "Front, tuck, return on back."
          },
          {
            "text": "Swim 3 metres on front using a breaststroke type leg action, holding 2 floats or woggle.",
            "cards": [
              "breastroke-kick-on-front",
              "float",
              "noodle"
            ],
            "note": "Breaststroke kick with optional support."
          },
          {
            "text": "Swim 5 metres of either front crawl or back crawl.",
            "cards": [
              "front-crawl",
              "backstroke"
            ],
            "note": "Learner choice of stroke."
          },
          {
            "text": "Swim 2 metres on the front and 2 metres back, paddle with a smooth transition in between (log roll).",
            "cards": [
              "front-paddle",
              "roll-front-to-back",
              "backstroke-kick"
            ],
            "note": "Continuous log roll transition."
          },
          {
            "text": "Scull forwards, backwards or in a circle, using a woggle.",
            "cards": [
              "flat-sculling",
              "front-sculling",
              "noodle"
            ],
            "note": "Either scull direction with woggle support."
          }
        ]
      },
      {
        "level": "Level 7",
        "colour": "#2fb5ad",
        "outcomes": [
          {
            "text": "Answer 3 water safety questions.",
            "cards": [
              "sign-shout-for-help",
              "float-to-live",
              "treading-water-sign-shout"
            ],
            "note": "Three questions, three safety cards."
          },
          {
            "text": "Swim 5 metres using a frog breaststroke type action of the arms and legs.",
            "cards": [
              "breastroke-kick-on-front",
              "breastroke-arms",
              "breastroke"
            ],
            "note": "Full breaststroke build."
          },
          {
            "text": "Perform a star float, slowly change to a narrow float and return to a star float on either the front or back.",
            "cards": [
              "float-on-back",
              "soldier-float-on-back",
              "float-on-front",
              "soldier-float-on-front"
            ],
            "note": "Star to narrow to star. Soldier is the narrow float."
          },
          {
            "text": "Swim 10 metres of front crawl confidently, attempt side breathing.",
            "cards": [
              "front-crawl-kick",
              "lateral-breathing",
              "front-crawl"
            ],
            "note": "Side breathing is the focus."
          },
          {
            "text": "Push and glide on back with arms stretched then roll onto front.",
            "cards": [
              "push-off-rocket-glide-on-back",
              "rocket-roll-back-to-front"
            ],
            "note": "Glide then roll."
          },
          {
            "text": "Swim 10 metres on the back confidently.",
            "cards": [
              "backstroke-kick",
              "backstroke-arm",
              "backstroke"
            ],
            "note": "Full backstroke 10 metres."
          },
          {
            "text": "Swim 2 metres, dolphin leg kick on the front or back.",
            "cards": [
              "dolphin-kick",
              "dolphin-kick-on-back"
            ],
            "note": "Either side accepted."
          },
          {
            "text": "Swim through a submerged hoop and retrieve an object.",
            "cards": [
              "through-the-hoop",
              "pick-up-sinkers",
              "swim-underwater"
            ],
            "note": "Hoop then retrieve in one sequence."
          },
          {
            "text": "Tread water for 10 seconds.",
            "cards": [
              "treading-water",
              "seahorse"
            ],
            "note": "Short tread assessment."
          },
          {
            "text": "Scull / scoop head first, using a woggle, and arms only.",
            "cards": [
              "front-sculling",
              "flat-sculling",
              "noodle"
            ],
            "note": "Head first scull with support."
          }
        ]
      },
      {
        "level": "Star Award",
        "colour": "#f2994a",
        "outcomes": [
          {
            "text": "Answer 4 water safety questions.",
            "cards": [
              "sign-shout-for-help",
              "float-to-live",
              "treading-water-sign-shout",
              "rescue-with-a-buoyant-aid"
            ],
            "note": "Four questions across the Water Safety set."
          },
          {
            "text": "Push and glide from poolside on the back and kick for 2 metres, tuck up and roll forward on the vertical to swim back to poolside.",
            "cards": [
              "push-off-rocket-glide-on-back",
              "backstroke-kick",
              "tuck-float",
              "forward-somersault"
            ],
            "note": "Glide, kick, tuck, vertical roll, return."
          },
          {
            "text": "Push and glide into a confident 10-metre swim.",
            "cards": [
              "push-off-rocket-glide-on-front",
              "front-crawl",
              "backstroke"
            ],
            "note": "Push then any confident 10 metre swim."
          },
          {
            "text": "Kick for 5 metres on the back, balancing a toy on a float.",
            "cards": [
              "kick-on-back-with-float",
              "float",
              "toys"
            ],
            "note": "Balance challenge on the back kick."
          },
          {
            "text": "Push and glide or swim, travel through a submerged hoop, retrieve an object, and return to poolside.",
            "cards": [
              "through-the-hoop",
              "pick-up-sinkers",
              "swim-underwater",
              "climb-out"
            ],
            "note": "Hoop, retrieve, return."
          },
          {
            "text": "Jump into the water, swim to a raft (play raft) and climb onto it to sit down.",
            "cards": [
              "jump-in",
              "front-paddle",
              "stay-on-the-boat",
              "big-float"
            ],
            "note": "Raft climb using the stay on the boat card."
          },
          {
            "text": "Use a float and kick on the front to collect 4 floating objects that are scattered around the pool. Return to poolside.",
            "cards": [
              "kick-with-float",
              "toys",
              "ball",
              "sorting-balls"
            ],
            "note": "Collect and return with float kick."
          },
          {
            "text": "Jump into the water, tread water while turning around, swim back to poolside.",
            "cards": [
              "jump-in",
              "treading-water",
              "front-paddle"
            ],
            "note": "Jump, tread and turn, return."
          },
          {
            "text": "Swim 2 metres on back, rolling over horizontally to swim 2 metres on front, rolling over horizontally to finish with a back star float.",
            "cards": [
              "backstroke-kick",
              "roll-back-to-front",
              "front-paddle",
              "roll-front-to-back",
              "float-on-back"
            ],
            "note": "Five beat sequence ending on a star float."
          },
          {
            "text": "Exit the pool safely and continue off poolside to changing room.",
            "cards": [
              "climb-out",
              "finished",
              "shower"
            ],
            "note": "Exit plus the changing room routine cards."
          }
        ]
      }
    ]
  },
  {
    "id": "octopus",
    "name": "Octopus Series",
    "blurb": "3 progressive awards for children aged 5 to 8 entering the Learn to Swim pathway later.",
    "accent": "#e87722",
    "awards": [
      {
        "level": "Award 1",
        "colour": "#e8362f",
        "outcomes": [
          {
            "text": "Answer 2 water safety questions.",
            "cards": [
              "sign-shout-for-help",
              "float-to-live"
            ],
            "note": "Safety knowledge check."
          },
          {
            "text": "Attempt a simultaneous circle action with legs while on the back for 2 metres, using a woggle or floats.",
            "cards": [
              "breastroke-kick-on-back",
              "kick-on-back-with-noodle",
              "float"
            ],
            "note": "Circular leg action on the back."
          },
          {
            "text": "Enter the pool safely, steps, ramp, swivel.",
            "cards": [
              "sitting-safety-entry",
              "entry-ladder"
            ],
            "note": "Swivel and ladder entries."
          },
          {
            "text": "Travel under a woggle waterfall, experiencing water over the head.",
            "cards": [
              "pouring-water",
              "through-the-hoop",
              "noodle"
            ],
            "note": "Water over the head while travelling."
          },
          {
            "text": "Move through the water confidently in different ways - walk, hop, jump, skip, gallop, march.",
            "cards": [
              "move-in-the-water",
              "jumping",
              "monkey-walk"
            ],
            "note": "Varied travel patterns."
          },
          {
            "text": "Return to standing from a star float on the back.",
            "cards": [
              "float-on-back",
              "standing-from-floating-on-back"
            ],
            "note": "Star float then stand."
          },
          {
            "text": "Use a woggle to swim front paddle and back paddle for 5 metres.",
            "cards": [
              "kick-with-noodle",
              "kick-on-back-with-noodle",
              "front-paddle"
            ],
            "note": "Front and back with woggle."
          },
          {
            "text": "Perform a treading water action with legs using a woggle (sea horses), or floats.",
            "cards": [
              "seahorse",
              "treading-water",
              "float"
            ],
            "note": "Seahorse treading."
          },
          {
            "text": "Push and glide on the front and back.",
            "cards": [
              "push-off-rocket-glide-on-front",
              "push-off-rocket-glide-on-back"
            ],
            "note": "Both directions."
          },
          {
            "text": "Exit the pool safely and unassisted.",
            "cards": [
              "climb-out",
              "exit-ladder"
            ],
            "note": "Unaided exit."
          }
        ]
      },
      {
        "level": "Award 2",
        "colour": "#e87722",
        "outcomes": [
          {
            "text": "Answer 2 water safety questions.",
            "cards": [
              "sign-shout-for-help",
              "float-to-live"
            ],
            "note": "Safety check."
          },
          {
            "text": "Demonstrate back crawl arm action while standing.",
            "cards": [
              "backstroke-arm",
              "backstroke-single-arm"
            ],
            "note": "Standing drill for back crawl arms."
          },
          {
            "text": "Enter the pool safely with a step or jump.",
            "cards": [
              "jump-in",
              "sitting-safety-entry"
            ],
            "note": "Step or jump entry."
          },
          {
            "text": "Push and glide on the front with face in the water.",
            "cards": [
              "push-off-rocket-glide-on-front",
              "face-in-the-water"
            ],
            "note": "Glide with face in."
          },
          {
            "text": "Swim 2 metres of front paddle, and 2 metres of back paddle, unaided.",
            "cards": [
              "front-paddle",
              "backstroke-kick"
            ],
            "note": "Unaided both sides."
          },
          {
            "text": "Push and glide on the back arms by the side.",
            "cards": [
              "push-off-soldier-glide-on-back"
            ],
            "note": "Soldier glide on the back."
          },
          {
            "text": "Use a woggle to kick across pool while blowing bubbles.",
            "cards": [
              "kick-with-noodle",
              "face-in-the-water-blow-bubbles"
            ],
            "note": "Kick and bubbles together."
          },
          {
            "text": "Rotate from back float to front float, and return back to a back float, using a woggle.",
            "cards": [
              "float-on-back",
              "roll-back-to-front",
              "float-on-front",
              "noodle"
            ],
            "note": "Supported rotation sequence."
          },
          {
            "text": "Demonstrate front crawl arm action while standing.",
            "cards": [
              "front-crawl-arms"
            ],
            "note": "Standing front crawl arms."
          },
          {
            "text": "Submerge under water and retrieve an object.",
            "cards": [
              "swim-underwater",
              "pick-up-sinkers",
              "sinkers"
            ],
            "note": "Submerge and retrieve."
          }
        ]
      },
      {
        "level": "Award 3",
        "colour": "#2f9e4f",
        "outcomes": [
          {
            "text": "Answer 2 water safety questions.",
            "cards": [
              "sign-shout-for-help",
              "float-to-live"
            ],
            "note": "Safety check."
          },
          {
            "text": "Perform dolphin leg kick on the front or back for 2 metres.",
            "cards": [
              "dolphin-kick",
              "dolphin-kick-on-back"
            ],
            "note": "Either side."
          },
          {
            "text": "Enter the water with a step or jump entry, turn around and swim back to poolside.",
            "cards": [
              "jump-in",
              "front-paddle",
              "climb-out"
            ],
            "note": "Entry, turn, return."
          },
          {
            "text": "Scull head first, using a woggle.",
            "cards": [
              "front-sculling",
              "flat-sculling",
              "noodle"
            ],
            "note": "Head first scull with support."
          },
          {
            "text": "Push and glide into either front crawl or breaststroke for 5 metres.",
            "cards": [
              "push-off-rocket-glide-on-front",
              "front-crawl",
              "breastroke"
            ],
            "note": "Choice of front stroke."
          },
          {
            "text": "Attempt breaststroke - may use a woggle for support.",
            "cards": [
              "breastroke-kick-on-front",
              "breastroke-arms",
              "noodle",
              "breastroke"
            ],
            "note": "Breaststroke attempt with optional support."
          },
          {
            "text": "Push and glide into back crawl, and swim for 5 metres.",
            "cards": [
              "push-off-rocket-glide-on-back",
              "backstroke"
            ],
            "note": "Back crawl 5 metres."
          },
          {
            "text": "Tread water for 10 seconds.",
            "cards": [
              "treading-water"
            ],
            "note": "Short tread."
          },
          {
            "text": "Perform a star float on the front or back, and hold for 3 seconds.",
            "cards": [
              "float-on-back",
              "float-on-front"
            ],
            "note": "Star float hold."
          },
          {
            "text": "Swim forward for 2 metres and then roll onto back, swim on the back for 2 metres and roll into a standing position (regaining feet).",
            "cards": [
              "front-paddle",
              "roll-front-to-back",
              "backstroke-kick",
              "standing-from-floating-on-back"
            ],
            "note": "Travel, roll, travel, stand."
          }
        ]
      }
    ]
  },
  {
    "id": "goldfish",
    "name": "Goldfish Series",
    "blurb": "3 progressive awards taking swimmers to 15 metres unaided with basic floats.",
    "accent": "#e8362f",
    "awards": [
      {
        "level": "Award 1",
        "colour": "#e8362f",
        "outcomes": [
          {
            "text": "Answer 2 water safety questions.",
            "cards": [
              "sign-shout-for-help",
              "float-to-live"
            ],
            "note": "Safety check."
          },
          {
            "text": "Perform dolphin leg kick on the front or back for 5 metres.",
            "cards": [
              "dolphin-kick",
              "dolphin-kick-on-back",
              "rocket-dolphin-kick"
            ],
            "note": "Dolphin kick either side."
          },
          {
            "text": "Enter the water with a step or jump entry, tread water for 5 seconds, swim to poolside.",
            "cards": [
              "jump-in",
              "treading-water",
              "front-paddle"
            ],
            "note": "Entry, tread, return."
          },
          {
            "text": "Scull head first for 2 metres.",
            "cards": [
              "front-sculling",
              "flat-sculling"
            ],
            "note": "Head first scull."
          },
          {
            "text": "Push and glide, and hold the streamlined position for 5 seconds.",
            "cards": [
              "rocket-arms",
              "push-off-rocket-glide-on-front",
              "rocket-glide-on-front"
            ],
            "note": "Streamline hold."
          },
          {
            "text": "Scull feet first, using a woggle for support.",
            "cards": [
              "flat-sculling",
              "noodle",
              "soldier-float-on-back"
            ],
            "note": "Feet first scull with support."
          },
          {
            "text": "Push and glide, or swim to the bottom of the pool, to retrieve an object.",
            "cards": [
              "push-off-on-front-underwater",
              "pick-up-sinkers",
              "sinkers"
            ],
            "note": "Bottom retrieve."
          },
          {
            "text": "Show rhythmical breathing in front crawl for 10 metres, using a woggle or float.",
            "cards": [
              "lateral-breathing",
              "kick-with-float",
              "front-crawl-kick"
            ],
            "note": "Rhythmical breathing focus."
          },
          {
            "text": "Swim 5 metres on front, roll over and swim 5 metres on back.",
            "cards": [
              "front-crawl",
              "roll-front-to-back",
              "backstroke"
            ],
            "note": "Front, roll, back."
          },
          {
            "text": "Swim a recognisable breaststroke for 5 metres.",
            "cards": [
              "breastroke-kick-on-front",
              "breastroke-arms",
              "breastroke"
            ],
            "note": "Recognisable breaststroke."
          }
        ]
      },
      {
        "level": "Award 2",
        "colour": "#e87722",
        "outcomes": [
          {
            "text": "Answer 2 water safety questions.",
            "cards": [
              "sign-shout-for-help",
              "float-to-live"
            ],
            "note": "Safety check."
          },
          {
            "text": "Swim back crawl for 10 metres.",
            "cards": [
              "backstroke-kick",
              "backstroke-arm",
              "backstroke"
            ],
            "note": "Back crawl 10 metres."
          },
          {
            "text": "Perform a back float, tuck to a front float and return to a standing position.",
            "cards": [
              "float-on-back",
              "tuck-float",
              "float-on-front",
              "standing-from-floating-on-front"
            ],
            "note": "Float, tuck, float, stand."
          },
          {
            "text": "Swim 5 metres of a recognised front stroke. Learner's second choice.",
            "cards": [
              "breastroke-kick-on-front",
              "breastroke-arms",
              "breastroke"
            ],
            "note": "Second choice evidenced with breaststroke."
          },
          {
            "text": "Scull head first for 5 metres, and feet first for 3 metres.",
            "cards": [
              "front-sculling",
              "flat-sculling"
            ],
            "note": "Both scull directions."
          },
          {
            "text": "Push and glide to the bottom of the pool, tuck, place feet on the bottom and spring up.",
            "cards": [
              "push-off-on-front-underwater",
              "tuck-float",
              "jumping"
            ],
            "note": "Bottom tuck and spring."
          },
          {
            "text": "Push and glide on the back, tuck, rotate to the front and return to the starting point.",
            "cards": [
              "push-off-rocket-glide-on-back",
              "tuck-float",
              "roll-back-to-front"
            ],
            "note": "Back glide, tuck, rotate, return."
          },
          {
            "text": "Perform a mushroom float and hold for 3 seconds, extend to a front float and return to a standing position.",
            "cards": [
              "tuck-float",
              "float-on-front",
              "standing-from-floating-on-front"
            ],
            "note": "Mushroom is the tuck float card."
          },
          {
            "text": "Swim 10 metres of a recognised front stroke, either front crawl or breaststroke. Learner's first choice.",
            "cards": [
              "front-crawl",
              "lateral-breathing",
              "breastroke"
            ],
            "note": "First choice front stroke."
          },
          {
            "text": "Enter the water with a step or jump entry, swim 5 metres on the front, then swim to poolside and exit water safely.",
            "cards": [
              "jump-in",
              "front-crawl",
              "climb-out"
            ],
            "note": "Entry, swim, exit."
          }
        ]
      },
      {
        "level": "Award 3",
        "colour": "#2f9e4f",
        "outcomes": [
          {
            "text": "Answer 2 water safety questions.",
            "cards": [
              "sign-shout-for-help",
              "float-to-live"
            ],
            "note": "Safety check."
          },
          {
            "text": "Swim 5 metres, dolphin leg kick on front.",
            "cards": [
              "dolphin-kick",
              "rocket-dolphin-kick"
            ],
            "note": "Dolphin kick on front."
          },
          {
            "text": "Perform 2 different types of entries and tread water for 15 seconds each time; performed in shoulder-deep water.",
            "cards": [
              "jump-in",
              "pencil-jump",
              "straddle-entry",
              "treading-water"
            ],
            "note": "Two entries, tread after each."
          },
          {
            "text": "Swim 5 metres, dolphin leg kick on back.",
            "cards": [
              "dolphin-kick-on-back",
              "rocket-dolphin-kick-back"
            ],
            "note": "Dolphin kick on back."
          },
          {
            "text": "Swim 15 metres of back crawl.",
            "cards": [
              "backstroke-kick",
              "backstroke-arm",
              "backstroke"
            ],
            "note": "Back crawl 15 metres."
          },
          {
            "text": "Perform a handstand with both hands on the pool floor; performed in chest-deep water.",
            "cards": [
              "handstand",
              "hold-breath"
            ],
            "note": "Handstand hold."
          },
          {
            "text": "Swim 15 metres of a recognised front stroke, either front crawl or breaststroke.",
            "cards": [
              "front-crawl",
              "breastroke",
              "lateral-breathing"
            ],
            "note": "Front stroke 15 metres."
          },
          {
            "text": "Perform a horizontal float on the back and hold for 5 seconds, roll on to the front, hold for 5 seconds, roll to the original back float position and hold for 5 seconds.",
            "cards": [
              "float-on-back",
              "roll-back-to-front",
              "float-on-front",
              "roll-front-to-back"
            ],
            "note": "Timed float and roll sequence."
          },
          {
            "text": "Swim 10 metres, holding a float under each arm, using lifesaving backstroke leg kick.",
            "cards": [
              "float",
              "breastroke-kick-on-back",
              "backstroke-double-arm"
            ],
            "note": "Lifesaving backstroke kick with floats."
          },
          {
            "text": "Submerge, push and glide on the side, roll to a face down position.",
            "cards": [
              "push-off-on-front-underwater",
              "side-kicking",
              "roll-back-to-front"
            ],
            "note": "Side glide then roll face down."
          }
        ]
      }
    ]
  },
  {
    "id": "angelfish",
    "name": "Angelfish Series",
    "blurb": "3 progressive awards taking swimmers to 25 metres unaided, butterfly, sculling and entries.",
    "accent": "#2f9e4f",
    "awards": [
      {
        "level": "Award 1",
        "colour": "#e8362f",
        "outcomes": [
          {
            "text": "Be rescued by a reaching aid.",
            "cards": [
              "sign-shout-for-help",
              "noodle",
              "rescue-with-a-buoyant-aid"
            ],
            "note": "Casualty side of a reaching rescue."
          },
          {
            "text": "Swim 10 metres of front stroke with correct breathing. Learner's second choice.",
            "cards": [
              "breastroke-kick-on-front",
              "breastroke-arms-breathing",
              "breastroke"
            ],
            "note": "Second choice with breathing."
          },
          {
            "text": "Perform a straddle entry and tread water for 30 seconds. If the water is too shallow, substitute step entry and support scull for 30 seconds.",
            "cards": [
              "straddle-entry",
              "treading-water",
              "flat-sculling"
            ],
            "note": "Straddle or shallow water substitute."
          },
          {
            "text": "Swim 20 metres of back crawl.",
            "cards": [
              "backstroke-kick",
              "backstroke-arm",
              "backstroke"
            ],
            "note": "Back crawl 20 metres."
          },
          {
            "text": "Push and glide into a forward somersault.",
            "cards": [
              "push-off-rocket-glide-on-front",
              "forward-somersault",
              "tuck-float"
            ],
            "note": "Glide into somersault."
          },
          {
            "text": "Swim 10 metres on the front, using dolphin leg kick, without aids.",
            "cards": [
              "dolphin-kick",
              "rocket-dolphin-kick"
            ],
            "note": "Unaided dolphin kick travel."
          },
          {
            "text": "Scull head first for 5 metres and feet first for 5 metres.",
            "cards": [
              "front-sculling",
              "flat-sculling"
            ],
            "note": "Both scull directions at 5 metres."
          },
          {
            "text": "Start in a crouch position in the water, spring up before gliding to bottom of pool, then glide to surface.",
            "cards": [
              "jumping",
              "push-off-on-front-underwater",
              "feet-first-surface-dive",
              "rocket-glide-on-front"
            ],
            "note": "Four beat crouch spring sequence."
          },
          {
            "text": "Swim 15 metres of a recognised front stroke with correct breathing. Learner's first choice.",
            "cards": [
              "front-crawl",
              "lateral-breathing",
              "front-crawl-arms"
            ],
            "note": "First choice with breathing."
          },
          {
            "text": "Swim 5 metres of lifesaving backstroke without aids.",
            "cards": [
              "backstroke-kick",
              "backstroke-double-arm",
              "backstroke"
            ],
            "note": "Double arm lifesaving backstroke."
          }
        ]
      },
      {
        "level": "Award 2",
        "colour": "#e87722",
        "outcomes": [
          {
            "text": "Be rescued by catching a buoyant aid.",
            "cards": [
              "treading-water-sign-shout",
              "big-float",
              "rescue-with-a-buoyant-aid"
            ],
            "note": "Catching the aid as casualty."
          },
          {
            "text": "Perform a straddle entry, tread water for 30 seconds, perform a 360 degree turn in a vertical position while wearing a T-shirt.",
            "cards": [
              "straddle-entry",
              "clothes-on",
              "treading-water",
              "swim-with-clothes-on"
            ],
            "note": "Clothed tread and turn."
          },
          {
            "text": "Swim 5 metres, perform a forward somersault and continue to swim forward for 5 metres.",
            "cards": [
              "front-crawl",
              "forward-somersault",
              "front-paddle"
            ],
            "note": "Swim, somersault, continue."
          },
          {
            "text": "Swim 20 metres of a recognised front stroke using a correct touch finish. Learner's first choice.",
            "cards": [
              "front-crawl",
              "lateral-breathing",
              "tumbleturn"
            ],
            "note": "Touch finish with turn awareness."
          },
          {
            "text": "Swim 15 metres of a recognised front stroke using a correct touch finish. Learner's second choice.",
            "cards": [
              "breastroke-arms-breathing",
              "breastroke",
              "tumbleturn"
            ],
            "note": "Second choice touch finish."
          },
          {
            "text": "Swim 20 metres of back crawl using a correct touch finish.",
            "cards": [
              "backstroke",
              "backstroke-tumbleturn"
            ],
            "note": "Back crawl with finish."
          },
          {
            "text": "Swim 5 metres on the back using a double arm action and dolphin leg kick.",
            "cards": [
              "dolphin-kick-on-back",
              "backstroke-double-arm",
              "rocket-dolphin-kick-back"
            ],
            "note": "Double arm plus dolphin kick."
          },
          {
            "text": "Swim 5 metres on the side using a dolphin leg kick.",
            "cards": [
              "side-kicking",
              "dolphin-kick",
              "rocket-dolphin-kick"
            ],
            "note": "Side dolphin kick."
          },
          {
            "text": "Start in a crouch position in the water, spring up before gliding to the bottom of the pool, tuck, place both feet on the bottom and spring up.",
            "cards": [
              "jumping",
              "push-off-on-front-underwater",
              "tuck-float",
              "feet-first-surface-dive"
            ],
            "note": "Crouch spring with tuck."
          },
          {
            "text": "Swim underwater for 5 metres.",
            "cards": [
              "hold-breath",
              "face-in-the-water",
              "swim-underwater"
            ],
            "note": "Underwater swim."
          }
        ]
      },
      {
        "level": "Award 3",
        "colour": "#2f9e4f",
        "outcomes": [
          {
            "text": "Be rescued by catching a rope.",
            "cards": [
              "sign-shout-for-help",
              "treading-water-sign-shout",
              "rescue-with-a-buoyant-aid"
            ],
            "note": "Rope rescue variant."
          },
          {
            "text": "Perform a straddle entry and tread water for 30 seconds while wearing a T-shirt. Remove the T-shirt and climb out unassisted.",
            "cards": [
              "straddle-entry",
              "clothes-on",
              "treading-water",
              "swim-with-clothes-on",
              "climb-out"
            ],
            "note": "Clothed tread, remove, exit."
          },
          {
            "text": "Perform a head-first and feet-first surface dive.",
            "cards": [
              "head-first-surface-dive",
              "feet-first-surface-dive"
            ],
            "note": "Both surface dives."
          },
          {
            "text": "Scull feet first for 10 metres and head first for 10 metres.",
            "cards": [
              "flat-sculling",
              "front-sculling"
            ],
            "note": "Both sculls at 10 metres."
          },
          {
            "text": "Perform a sitting dive, depending on the depth of water.",
            "cards": [
              "sitting-dive",
              "dive",
              "push-off-on-front-underwater"
            ],
            "note": "Sitting dive or shallow substitute."
          },
          {
            "text": "Swim 25 metres of a recognised front stroke, incorporating a correct finish. Learner's first choice.",
            "cards": [
              "front-crawl",
              "lateral-breathing",
              "tumbleturn"
            ],
            "note": "25 metres first choice."
          },
          {
            "text": "Swim 20 metres of recognised front stroke, incorporating a correct finish. Learner's second choice.",
            "cards": [
              "breastroke-arms-breathing",
              "breastroke",
              "tumbleturn"
            ],
            "note": "20 metres second choice."
          },
          {
            "text": "Swim 5 metres of butterfly.",
            "cards": [
              "dolphin-kick",
              "butterfly-arms",
              "butterfly"
            ],
            "note": "First butterfly swim."
          },
          {
            "text": "Push and glide into a handstand.",
            "cards": [
              "push-off-on-front-underwater",
              "handstand"
            ],
            "note": "Glide into handstand."
          },
          {
            "text": "Swim 25 metres of back crawl using a correct finish.",
            "cards": [
              "backstroke",
              "backstroke-tumbleturn",
              "backstroke-start"
            ],
            "note": "Back crawl 25 metres with finish."
          }
        ]
      }
    ]
  },
  {
    "id": "shark",
    "name": "Shark Series",
    "blurb": "3 progressive awards covering rescue, survival, competitive starts and turns, up to 100 metres.",
    "accent": "#8c1c22",
    "awards": [
      {
        "level": "Award 1",
        "colour": "#c0392b",
        "outcomes": [
          {
            "text": "Perform a shout and signal rescue to a weak swimmer, 5 metres away.",
            "cards": [
              "sign-shout-for-help",
              "treading-water-sign-shout",
              "rescue-with-a-buoyant-aid"
            ],
            "note": "Rescuer role."
          },
          {
            "text": "Enter the water with a slide-in entry, swim 10 metres in a T-shirt, tread water for 30 seconds, remove T-shirt, and climb out.",
            "cards": [
              "sitting-safety-entry",
              "clothes-on",
              "swim-with-clothes-on",
              "treading-water",
              "climb-out"
            ],
            "note": "Five step survival sequence."
          },
          {
            "text": "Swim 5 metres of a recognised front stroke, perform a head-first surface dive and swim 5 metres underwater.",
            "cards": [
              "front-crawl",
              "head-first-surface-dive",
              "swim-underwater"
            ],
            "note": "Stroke, dive, underwater."
          },
          {
            "text": "Swim 5 metres of a recognised front stroke, perform a feet-first surface dive, tuck, and swim 5 metres underwater.",
            "cards": [
              "front-crawl",
              "feet-first-surface-dive",
              "tuck-float",
              "swim-underwater"
            ],
            "note": "Feet first variant."
          },
          {
            "text": "Swim 50 metres of a recognised front stroke. Learner's first choice.",
            "cards": [
              "front-crawl-kick",
              "lateral-breathing",
              "front-crawl-arms",
              "front-crawl"
            ],
            "note": "50 metres first choice."
          },
          {
            "text": "Swim 50 metres of back crawl.",
            "cards": [
              "backstroke-kick",
              "backstroke-arm",
              "backstroke-double-arm",
              "backstroke"
            ],
            "note": "Back crawl 50 metres."
          },
          {
            "text": "Swim 25 metres of a recognised front stroke. Learner's second choice.",
            "cards": [
              "breastroke-kick-on-front",
              "breastroke-arms-breathing",
              "breastroke"
            ],
            "note": "Second choice 25 metres."
          },
          {
            "text": "Swim 25 metres of Old English backstroke.",
            "cards": [
              "backstroke-double-arm",
              "breastroke-kick-on-back",
              "backstroke"
            ],
            "note": "Double arm plus breaststroke kick."
          },
          {
            "text": "Swim 25 metres of front crawl, demonstrating bilateral breathing.",
            "cards": [
              "front-crawl-kick",
              "lateral-breathing",
              "single-arm-lateral-breathing",
              "front-crawl"
            ],
            "note": "Bilateral breathing focus."
          },
          {
            "text": "Perform a kneeling dive, depth of water permitting. If in shallow water, perform underwater push and glide for 5 metres.",
            "cards": [
              "kneeling-dive",
              "push-off-on-front-underwater",
              "rocket-glide-on-front"
            ],
            "note": "Kneeling dive or shallow substitute."
          }
        ]
      },
      {
        "level": "Award 2",
        "colour": "#e87722",
        "outcomes": [
          {
            "text": "Perform a reaching rescue to a casualty up to 2 metres from the side.",
            "cards": [
              "sign-shout-for-help",
              "noodle",
              "rescue-with-a-buoyant-aid"
            ],
            "note": "Reaching rescue."
          },
          {
            "text": "Throw a buoyant aid 3 metres to a target point in the pool.",
            "cards": [
              "throw-catch-the-ball",
              "big-float",
              "rescue-with-a-buoyant-aid"
            ],
            "note": "Throwing the aid."
          },
          {
            "text": "Enter the water with a step-in entry, swim 10 metres of a recognised stroke in a T-shirt and shorts, tread water for 1 minute, swim 5 metres of a recognised stroke, surface dive, swim 3 metres underwater, surface, climb out of the pool unassisted.",
            "cards": [
              "sitting-safety-entry",
              "clothes-on",
              "swim-with-clothes-on",
              "treading-water",
              "head-first-surface-dive",
              "swim-underwater",
              "climb-out"
            ],
            "note": "Seven linked survival actions."
          },
          {
            "text": "Swim 75 metres during which the learners perform 3 recognised strokes with a smooth transition and the correct turns.",
            "cards": [
              "front-crawl",
              "backstroke",
              "breastroke",
              "tumbleturn"
            ],
            "note": "Three strokes with turns."
          },
          {
            "text": "Scull head first for 20 metres.",
            "cards": [
              "front-sculling",
              "rocket-arms"
            ],
            "note": "Head first scull 20 metres."
          },
          {
            "text": "Swim 10 metres of butterfly.",
            "cards": [
              "dolphin-kick",
              "butterfly-arms",
              "butterfly-arms-breathing",
              "butterfly"
            ],
            "note": "Butterfly 10 metres."
          },
          {
            "text": "Swim 20 metres of side stroke, wearing a T-shirt and shorts.",
            "cards": [
              "clothes-on",
              "side-kicking",
              "swim-with-clothes-on"
            ],
            "note": "Clothed side stroke. Side kicking carries the body position."
          },
          {
            "text": "Perform a plunge dive, swim width of pool or 7 metres, depth of water permitting.",
            "cards": [
              "dive",
              "start-from-block",
              "push-off-on-front-underwater",
              "rocket-dolphin-kick"
            ],
            "note": "Plunge dive or shallow substitute."
          },
          {
            "text": "Swim 4 x 1 width of individual medley, incorporating the appropriate transition procedure at the end of each stroke.",
            "cards": [
              "butterfly",
              "backstroke",
              "breastroke",
              "front-crawl",
              "fly-back-turn"
            ],
            "note": "IM order as a visual sequence."
          },
          {
            "text": "Perform a backwards somersault.",
            "cards": [
              "backwards-somersault",
              "tuck-float"
            ],
            "note": "Backwards somersault."
          }
        ]
      },
      {
        "level": "Award 3",
        "colour": "#2fa79b",
        "outcomes": [
          {
            "text": "Throw a rope over 5 metres.",
            "cards": [
              "sign-shout-for-help",
              "throw-catch-the-ball",
              "rescue-with-a-buoyant-aid"
            ],
            "note": "Rope throw rescue."
          },
          {
            "text": "Enter the water with a straddle entry, swim 25 metres in a recognised stroke in a T-shirt and shorts, tread water or scull support for 1 minute, tread water for 1 minute waving one arm, surface dive, swim 5 metres underwater, surface and remove clothing.",
            "cards": [
              "straddle-entry",
              "clothes-on",
              "swim-with-clothes-on",
              "treading-water-sign-shout",
              "flat-sculling",
              "head-first-surface-dive",
              "swim-underwater"
            ],
            "note": "Longest single survival outcome."
          },
          {
            "text": "Swim 100 metres of a recognised stroke on the front, incorporating the appropriate start, turns, and finish. Learner's first choice.",
            "cards": [
              "start-from-block",
              "front-crawl",
              "tumbleturn"
            ],
            "note": "Start, stroke, turn."
          },
          {
            "text": "Swim 50 metres of a recognised front stroke, incorporating the appropriate start, turns and finish. Learner's second choice.",
            "cards": [
              "start-from-block",
              "breastroke",
              "breastroke-pull-out"
            ],
            "note": "Second choice with pull out."
          },
          {
            "text": "Swim 100 metres of back crawl incorporating the appropriate start, turns and finish.",
            "cards": [
              "backstroke-start",
              "backstroke",
              "backstroke-tumbleturn"
            ],
            "note": "Back crawl race skills."
          },
          {
            "text": "Swim 25 metres of a fourth recognised stroke, not undertaken in the other tests.",
            "cards": [
              "butterfly-arms",
              "butterfly-no-breathing",
              "butterfly"
            ],
            "note": "Fourth stroke, usually butterfly."
          },
          {
            "text": "Swim 4 x 1 length of individual medley, incorporating the appropriate transition procedure at the end of each stroke.",
            "cards": [
              "butterfly",
              "backstroke",
              "breastroke",
              "front-crawl",
              "fly-back-turn"
            ],
            "note": "IM at length distance."
          },
          {
            "text": "Perform a competitive start for two separate strokes using two different stances that is legal for the depth of water available.",
            "cards": [
              "start-from-block",
              "backstroke-start",
              "dive"
            ],
            "note": "Two stances side by side."
          },
          {
            "text": "Swim 50 metres of side stroke or old English backstroke.",
            "cards": [
              "side-kicking",
              "backstroke-double-arm",
              "breastroke-kick-on-back"
            ],
            "note": "Learner choice between the two."
          },
          {
            "text": "Perform a head-first surface dive and pick up a sinkable toy from the bottom of the pool, minimum depth of 1.5 metres.",
            "cards": [
              "head-first-surface-dive",
              "sinkers",
              "pick-up-sinkers"
            ],
            "note": "Surface dive and retrieve."
          }
        ]
      }
    ]
  }
];

const SE_STAGES = [
  {
    id: 'stage-1',
    level: 'Stage 1',
    colour: '#e8362f',
    blurb: 'Water confidence. Floatation equipment or support allowed.',
    outcomes: [
      { text: 'Enter the water safely.',
        cards: ['sitting-safety-entry', 'entry-ladder', 'jump-in'],
        note: 'Three entry options let the teacher match the pool and the learner. Start with sitting entry for sensory seekers who need contact before leaving the wall.' },
      { text: 'Move forward for a distance of 5 metres, feet may be on or off the floor.',
        cards: ['move-in-the-water', 'front-paddle', 'kick-with-float'],
        note: 'Feet on the floor first, then feet off. The float card is the bridge between walking and swimming.' },
      { text: 'Move backwards for a distance of 5 metres, feet may be on or off the floor.',
        cards: ['move-in-the-water', 'airplane-on-back', 'kick-on-back-with-float'],
        note: 'The airplane on back card keeps the learner looking at the ceiling, which is the position this outcome is quietly testing.' },
      { text: 'Move sideways for a distance of 5 metres, feet may be on or off the floor.',
        cards: ['monkey-walk', 'move-in-the-water'],
        note: 'Monkey walk is the sideways travel card. It turns a vague instruction into a clear action on the wall.' },
      { text: 'Scoop the water and wash the face.',
        cards: ['wash-your-face', 'splash', 'pouring-water'],
        note: 'The first aquatic breathing family. Face contact before submersion.' },
      { text: 'Be comfortable with water showered from overhead.',
        cards: ['pouring-water', 'shower', 'wash-your-face'],
        note: 'Pouring water is the poolside version. The shower card carries the same sensation into the changing room routine.' },
      { text: 'Move from a flat floating position on the back and return to standing.',
        cards: ['float-on-back', 'standing-from-floating-on-back'],
        note: 'Two cards, one skill. Regaining the feet is as important as the float itself.' },
      { text: 'Move from a flat floating position on the front and return to standing.',
        cards: ['float-on-front', 'standing-from-floating-on-front'],
        note: 'Mirrors the back float pair so the learner sees the same pattern on both sides.' },
      { text: 'Push and glide in a flat position on the front from a wall.',
        cards: ['rocket-arms', 'push-off-soldier-glide-on-front', 'push-off-rocket-glide-on-front'],
        note: 'Arms by ears first, then the push. The rocket arms card is the streamline cue Swim England calls a flat position.' },
      { text: 'Push and glide in a flat position on the back from a wall.',
        cards: ['push-off-soldier-glide-on-back', 'push-off-rocket-glide-on-back'],
        note: 'Soldier glide for arms by side, rocket glide for arms above the head. Both are valid under this outcome.' },
      { text: 'Give examples of two pool rules.',
        cards: ['sign-shout-for-help', 'float-to-live'],
        note: 'Knowledge outcome. The Water Safety cards give the learner a visual prompt for the rules the teacher then names aloud.' },
      { text: 'Exit the water safely.',
        cards: ['climb-out', 'exit-ladder'],
        note: 'Climb out without steps for deeper pools, ladder for the rest. Same exit grammar used through Stage 3.' }
    ]
  },
  {
    id: 'stage-2',
    level: 'Stage 2',
    colour: '#e87722',
    blurb: 'Independent breathing and travel. Floatation equipment or support still allowed on most outcomes.',
    outcomes: [
      { text: 'Jump in from poolside safely.',
        cards: ['jump-in', 'pencil-jump'],
        note: 'Jump in is the default. Pencil jump is the shaped version that Stage 5 will ask for next.' },
      { text: 'Blow bubbles a minimum of three times rhythmically, with nose and mouth submerged.',
        cards: ['blow-out', 'face-in-the-water', 'face-in-the-water-blow-bubbles'],
        note: 'Three beat build: blow on the surface, face in, then face in and blow. Rhythm is the teaching point.' },
      { text: 'Move from a flat floating position on the back and return to standing without support.',
        cards: ['float-on-back', 'standing-from-floating-on-back'],
        note: 'Same pair as Stage 1, now without support. The cards stay the same so the learner recognises the skill.' },
      { text: 'Move from a flat floating position on the front and return to standing without support.',
        cards: ['float-on-front', 'standing-from-floating-on-front'],
        note: 'Unaided version of the Stage 1 front float outcome.' },
      { text: 'Push from a wall and glide on the back - arms can be by the side or above the head.',
        cards: ['push-off-soldier-glide-on-back', 'push-off-rocket-glide-on-back'],
        note: 'Both arm positions are written into the outcome. The two glide cards cover them exactly.' },
      { text: 'Push from a wall and glide on the front with arms extended.',
        cards: ['rocket-arms', 'push-off-rocket-glide-on-front'],
        note: 'Arms extended means rocket. No soldier option on the front for this outcome.' },
      { text: 'Travel using a recognised leg action with feet off the pool floor on the back for 5 metres, without the use of floatation equipment.',
        cards: ['kick-on-back-with-float', 'backstroke-kick', 'airplane-on-back'],
        note: 'Teach with the float card, assess without it. The kick card is the assessed action.' },
      { text: 'Travel using a recognised leg action with feet off the pool floor on the front for 5 metres, without the use of floatation equipment.',
        cards: ['kick-with-float', 'front-crawl-kick', 'front-paddle'],
        note: 'Same teach-then-assess pattern as the back travel row.' },
      { text: 'Perform a tuck to rotate from a flat floating position on the front, to a back floating position, then return to standing.',
        cards: ['float-on-front', 'tuck-float', 'roll-front-to-back', 'standing-from-floating-on-back'],
        note: 'Four cards for a four beat action. The tuck is the rotation trigger.' },
      { text: 'Perform a tuck to rotate from a flat floating position on the back, to a front floating position, then return to standing.',
        cards: ['float-on-back', 'tuck-float', 'roll-back-to-front', 'standing-from-floating-on-front'],
        note: 'Mirror of the previous row. Same cards, reversed order.' },
      { text: 'Perform a log roll from the back to the front.',
        cards: ['roll-back-to-front', 'soldier-roll-back-to-front', 'rocket-roll-back-to-front'],
        note: 'Three versions of the same roll: free, soldier and rocket. The teacher picks the body position the learner can hold.' },
      { text: 'Perform a log roll from the front to the back.',
        cards: ['roll-front-to-back', 'soldier-roll-front-to-back', 'rocket-roll-front-to-back'],
        note: 'Completes the log roll pair. Continuous travel with a roll arrives at Stage 4.' },
      { text: 'Exit the water without support.',
        cards: ['climb-out', 'exit-ladder'],
        note: 'No adult contact. Climb out is the assessed exit when the pool has no steps.' }
    ]
  },
  {
    id: 'stage-3',
    level: 'Stage 3',
    colour: '#f0b323',
    blurb: 'No floatation equipment or support. Streamline, submersion and the four key water safety messages.',
    outcomes: [
      { text: 'Jump in from poolside and submerge.',
        cards: ['jump-in', 'face-in-the-water', 'hold-breath'],
        note: 'The jump plus a deliberate go under. Hold breath is the preparation card before the entry.' },
      { text: 'Sink, push away from wall and maintain a streamlined position.',
        cards: ['hold-breath', 'rocket-arms', 'push-off-on-front-underwater', 'rocket-glide-on-front'],
        note: 'Four cards for sink, push, hold and glide. This is the first fully underwater streamline of the pathway.' },
      { text: 'Push and glide on the front with arms extended and log roll onto the back.',
        cards: ['push-off-rocket-glide-on-front', 'rocket-roll-front-to-back'],
        note: 'Glide then roll. Two cards, one continuous movement.' },
      { text: 'Push and glide on the back with arms extended and log roll onto the front.',
        cards: ['push-off-rocket-glide-on-back', 'rocket-roll-back-to-front'],
        note: 'Mirror of the previous outcome.' },
      { text: 'Travel 5 metres on the front, perform a tuck to rotate onto the back and return on the back.',
        cards: ['front-paddle', 'tuck-float', 'roll-front-to-back', 'backstroke-kick'],
        note: 'Travel, tuck, rotate, return. A visual routine the learner can rehearse on poolside before the attempt.' },
      { text: 'Fully submerge to pick up an object.',
        cards: ['hold-breath', 'swim-underwater', 'sinkers', 'pick-up-sinkers'],
        note: 'The Games folder already owns this skill. Sinkers plus pick up sinkers is the exact assessment set.' },
      { text: 'Correctly identify three of the four key water safety messages.',
        cards: ['float-to-live', 'sign-shout-for-help', 'treading-water-sign-shout'],
        note: 'Stop and Think / Stay Together / Float / Call 999. The three Water Safety cards give a visual hook for the messages the teacher then names.' },
      { text: 'Push and glide and travel 10 metres on the back.',
        cards: ['push-off-rocket-glide-on-back', 'backstroke-kick', 'backstroke'],
        note: 'Push, kick, then full stroke. Distance doubles from Stage 2.' },
      { text: 'Push and glide and travel 10 metres on the front.',
        cards: ['push-off-rocket-glide-on-front', 'front-crawl-kick', 'front-paddle', 'front-crawl'],
        note: 'Front paddle is the bridge between kick and a recognisable front crawl.' },
      { text: 'Perform a tuck float and hold for three seconds.',
        cards: ['tuck-float'],
        note: 'One card. Hold for three seconds is a timing cue the teacher counts aloud against the image.' },
      { text: 'Exit the water without using steps.',
        cards: ['climb-out'],
        note: 'Climb out only. The ladder card is deliberately left out of this row.' }
    ]
  },
  {
    id: 'stage-4',
    level: 'Stage 4',
    colour: '#3aa8dc',
    blurb: 'Stroke kick introduction across all four strokes, head first sculling and continuous log rolls.',
    outcomes: [
      { text: 'Perform a sequence of changing shapes (minimum of three) whilst floating on the surface and demonstrate an understanding of floating.',
        cards: ['float-on-back', 'float-on-front', 'tuck-float', 'soldier-float-on-back'],
        note: 'Four shape cards. The learner picks three and lays them out as the sequence before entering the water.' },
      { text: 'Push and glide from the wall towards the pool floor.',
        cards: ['hold-breath', 'push-off-on-front-underwater', 'swim-underwater'],
        note: 'Toward the floor, not along the surface. The underwater push off card is the assessed action.' },
      { text: 'Kick 10 metres backstroke (one item of equipment optional).',
        cards: ['kick-on-back-with-float', 'backstroke-kick'],
        note: 'Float optional for teaching, kick card for the assessed 10 metres.' },
      { text: 'Kick 10 metres front crawl (one item of equipment optional).',
        cards: ['kick-with-float', 'front-crawl-kick'],
        note: 'Same optional equipment pattern as the backstroke kick row.' },
      { text: 'Kick 10 metres butterfly on the front or on the back.',
        cards: ['dolphin-kick', 'dolphin-kick-on-back', 'rocket-dolphin-kick'],
        note: 'Front or back are both written into the outcome. All three dolphin cards already exist in Folder 3.' },
      { text: 'Kick 10 metres breaststroke on the front (one item of equipment optional).',
        cards: ['breastroke-kick-on-front', 'float', 'noodle'],
        note: 'Equipment optional. The breastroke kick card carries the assessed action.' },
      { text: 'Perform a head first sculling action for 5 metres in a flat position on the back.',
        cards: ['flat-sculling', 'front-sculling', 'rocket-arms'],
        note: 'Flat sculling is the head first action on the back. Rocket arms holds the flat body line.' },
      { text: 'Travel on back and log roll in one continuous movement onto front.',
        cards: ['backstroke-kick', 'swim-float-kick', 'roll-back-to-front'],
        note: 'Continuous is the key word. Travel and roll are laid as one strip, not two separate skills.' },
      { text: 'Travel on front and log roll in one continuous movement onto back.',
        cards: ['front-paddle', 'front-crawl-kick', 'roll-front-to-back'],
        note: 'Mirror of the previous continuous roll.' },
      { text: 'Push and glide and swim 10 metres, choice of stroke is optional.',
        cards: ['push-off-rocket-glide-on-front', 'front-crawl', 'backstroke', 'breastroke'],
        note: 'Choice of stroke. Three full stroke cards let the learner pick, then the same push and glide starts every attempt.' }
    ]
  },
  {
    id: 'stage-5',
    level: 'Stage 5',
    colour: '#5cb85c',
    blurb: 'Sculling, treading water, all four strokes to expected standards, handstand and getting help.',
    outcomes: [
      { text: 'Perform a flat stationary scull on the back.',
        cards: ['flat-sculling'],
        note: 'Stationary, not travelling. One card, hold position.' },
      { text: 'Perform a feet first sculling action for 5 metres in a flat position on the back.',
        cards: ['flat-sculling', 'soldier-float-on-back'],
        note: 'Feet first travel on the back. Soldier float holds the arm position while the hands scull at the hips.' },
      { text: 'Perform a sculling sequence with a partner for 30-45 seconds to include a rotation.',
        cards: ['flat-sculling', 'front-sculling', 'roll-back-to-front', 'mirror-game'],
        note: 'The mirror game card is the partner cue. Scull, rotate, copy.' },
      { text: 'Tread water for 30 seconds.',
        cards: ['treading-water', 'seahorse'],
        note: 'Teach with the seahorse noodle, assess on the treading water card alone.' },
      { text: 'Perform three different shaped jumps into deep water.',
        cards: ['jump-in', 'pencil-jump', 'cannonball-jump', 'straddle-entry'],
        note: 'Four shaped entries. The learner picks any three and lays them out before the first jump.' },
      { text: 'Push and glide and swim 10 metres backstroke (performed to Swim England expected standards).',
        cards: ['push-off-rocket-glide-on-back', 'backstroke-kick', 'backstroke-arm', 'backstroke'],
        note: 'Full backstroke build. Expected standards are met by sequencing kick then arm then whole stroke.' },
      { text: 'Push and glide and swim 10 metres front crawl (performed to Swim England expected standards).',
        cards: ['push-off-rocket-glide-on-front', 'front-crawl-kick', 'lateral-breathing', 'front-crawl'],
        note: 'Lateral breathing is the expected standards discriminator at this stage.' },
      { text: 'Push and glide and swim 10 metres breaststroke (performed to Swim England expected standards).',
        cards: ['breastroke-kick-on-front', 'breastroke-arms', 'breastroke-arms-breathing', 'breastroke'],
        note: 'Kick, arms, breathing, whole stroke. The printed pack spelling breastroke is kept on the cards.' },
      { text: 'Push and glide and swim 10 metres butterfly (performed to Swim England expected standards).',
        cards: ['dolphin-kick', 'butterfly-arms', 'butterfly-arms-breathing', 'butterfly'],
        note: 'First full butterfly swim of the framework. The build up is already in Folder 3.' },
      { text: 'Perform a handstand and hold for a minimum of three seconds.',
        cards: ['handstand', 'hold-breath'],
        note: 'Handstand card plus hold breath for the three second count.' },
      { text: 'Perform a forward somersault.',
        cards: ['forward-somersault', 'tuck-float'],
        note: 'Tuck float is the start shape. Forward somersault is the assessed skill.' },
      { text: 'Demonstrate an action for getting help.',
        cards: ['sign-shout-for-help', 'treading-water-sign-shout'],
        note: 'The getting help outcome is a communication task. That is exactly what a visual card is for.' }
    ]
  },
  {
    id: 'stage-6',
    level: 'Stage 6',
    colour: '#c85fa8',
    blurb: 'Side push offs into stroke, swimming in clothes, rhythmical breathing and a shout and signal rescue.',
    outcomes: [
      { text: 'Give two examples of how to prepare for exercise and understand why it is important.',
        cards: ['swimming-costume-on', 'swim-cap-on', 'goggles-on', 'shower'],
        note: 'Preparation is a changing room routine. Four Extras cards turn it into a visual checklist before the lesson starts.' },
      { text: 'Sink, push off on side from the wall, glide, kick and rotate into backstroke.',
        cards: ['push-off-on-front-underwater', 'side-kicking', 'roll-back-to-front', 'backstroke'],
        note: 'Side push, kick, rotate, stroke. Four cards for a chain that is almost always over-explained verbally.' },
      { text: 'Sink, push off on side from the wall, glide, kick and rotate into front crawl.',
        cards: ['push-off-on-front-underwater', 'side-kicking', 'roll-front-to-back', 'front-crawl'],
        note: 'Same chain as the backstroke row, finishing on front crawl.' },
      { text: 'Swim 10 metres wearing clothes.',
        cards: ['clothes-on', 'swim-with-clothes-on', 'front-paddle'],
        note: 'Clothes on before entry, then the swim with clothes on card for the assessed 10 metres.' },
      { text: 'Push and glide and swim front crawl to include at least six rhythmical breaths.',
        cards: ['push-off-rocket-glide-on-front', 'lateral-breathing', 'single-arm-lateral-breathing', 'front-crawl'],
        note: 'Six breaths is a counting task. The lateral breathing card is the focus of the whole row.' },
      { text: 'Push and glide and swim breaststroke to include at least six rhythmical breaths.',
        cards: ['breastroke-arms-breathing', 'breastroke'],
        note: 'The dedicated breastroke breathing card carries the rhythm this outcome is testing.' },
      { text: 'Push and glide and swim butterfly to include at least three rhythmical breaths.',
        cards: ['butterfly-arms-breathing', 'butterfly'],
        note: 'Three breaths on butterfly. Shorter distance, higher technical demand.' },
      { text: 'Push and glide and swim backstroke to include at least six regular breaths.',
        cards: ['push-off-rocket-glide-on-back', 'backstroke-arm', 'backstroke'],
        note: 'Regular breathing on backstroke is the open face position. The arm card keeps the timing honest.' },
      { text: 'Push and glide and swim 25 metres, choice of stroke is optional (performed to Swim England expected standards).',
        cards: ['front-crawl', 'backstroke', 'breastroke', 'butterfly'],
        note: 'First continuous 25 metres. Four stroke cards for learner choice, same push and glide start.' },
      { text: "Perform a 'shout and signal' rescue.",
        cards: ['sign-shout-for-help', 'treading-water-sign-shout', 'rescue-with-a-buoyant-aid'],
        note: 'Rescuer and casualty sides of the same skill. Three cards, no spoken script required.' },
      { text: 'Perform a surface dive.',
        cards: ['head-first-surface-dive', 'feet-first-surface-dive', 'swim-underwater'],
        note: 'Either surface dive is accepted. Both cards sit next to each other so the learner can see the choice.' }
    ]
  },
  {
    id: 'stage-7',
    level: 'Stage 7',
    colour: '#2f9e4f',
    blurb: '25 metres of all four strokes, a one minute sequence, dive, 50 and 100 metre swims, eggbeater and an obstacle course.',
    outcomes: [
      { text: 'Push and glide and swim 25 metres backstroke (performed to Swim England expected standards).',
        cards: ['push-off-rocket-glide-on-back', 'backstroke-kick', 'backstroke-arm', 'backstroke'],
        note: 'Full backstroke build at 25 metres. Same cards as Stage 5, longer distance.' },
      { text: 'Push and glide and swim 25 metres front crawl (performed to Swim England expected standards).',
        cards: ['push-off-rocket-glide-on-front', 'front-crawl-kick', 'lateral-breathing', 'front-crawl'],
        note: 'Front crawl to expected standards at 25 metres.' },
      { text: 'Push and glide and swim 25 metres breaststroke (performed to Swim England expected standards).',
        cards: ['breastroke-kick-on-front', 'breastroke-arms-breathing', 'breastroke'],
        note: 'Breaststroke 25 metres. Breathing card stays in the sequence at this distance.' },
      { text: 'Push and glide and swim 25 metres butterfly (performed to Swim England expected standards).',
        cards: ['dolphin-kick', 'butterfly-arms-breathing', 'butterfly'],
        note: 'Full length butterfly. The breathing card prevents a kick only attempt.' },
      { text: 'Perform a movement sequence (linking skills with strokes and sculls) of one minute duration, in a group of three or more, incorporating sculling, rotation, floating and eggbeater.',
        cards: ['flat-sculling', 'front-sculling', 'forward-somersault', 'float-on-back', 'tuck-float', 'treading-water', 'mirror-game'],
        note: 'The longest creative outcome in the framework. Seven cards become a menu the group lays out and then performs for one minute.' },
      { text: 'Perform a sitting dive or dive.',
        cards: ['sitting-dive', 'kneeling-dive', 'dive'],
        note: 'Three entries on a progression. Sitting dive for shallow water, standing dive when depth allows.' },
      { text: 'Push and glide and swim 50 metres continuously using one stroke (performed to Swim England expected standards).',
        cards: ['front-crawl', 'backstroke', 'breastroke'],
        note: 'One stroke, 50 metres, no pause. Learner chooses the stroke card before the swim.' },
      { text: 'Push and glide and swim 100 metres, using a minimum of three different strokes (performed to Swim England expected standards).',
        cards: ['front-crawl', 'backstroke', 'breastroke', 'butterfly'],
        note: 'Three strokes minimum. Four cards on the side so the order can be set before the swimmer leaves the wall.' },
      { text: 'Tread water using eggbeater action for 30 seconds.',
        cards: ['treading-water', 'seahorse'],
        note: 'Eggbeater is the efficient form of the treading water card. Seahorse is still the teaching bridge.' },
      { text: 'Complete an obstacle course (using minimum of four objects) with feet off the pool floor throughout.',
        cards: ['obstacle-game', 'through-the-hoop', 'jump-in-the-hoop', 'pick-up-sinkers', 'hoop'],
        note: 'Four objects, feet off the floor. The Games folder is the obstacle course. This is the strongest Stage 7 demonstration of the pack.' }
    ]
  }
];
