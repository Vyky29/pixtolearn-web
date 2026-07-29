#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate launch course hubs + gold modules (ASCII/UTF-8 safe)."""
from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]
COURSE_DIR = ROOT / "course"
CURR = ROOT / "curriculum"

def esc(s: str) -> str:
    return (
        s.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )

COURSES = [
  {
    "id": "visual-teaching-foundations",
    "title": "Visual Teaching Foundations for Professionals",
    "tag": "Method",
    "summary": "The global method layer: what visual teaching is, how to break skills into steps, prompt with dignity, and build one shared system.",
    "product": "Method (leads into Packs and App)",
    "image": "../../assets/photos/workshop.jpg",
    "modules": [
      {
        "id": "module-1",
        "title": "What visual teaching is (and is not)",
        "objective": "Define visual teaching as a clarity system, not decoration, and spot overload in real settings.",
        "use_today": "Audit one environment and remove three competing visuals.",
        "see_title": "Verbal-only vs visual-supported",
        "see_body": "Compare the same task taught with speech alone and with a clear sequence strip.",
        "video_brief": "Split or sequential clip: busy wall vs one clear sequence. 60s. Subtitles.",
        "poster": "../../assets/photos/workshop.jpg",
        "photo": "../../assets/photos/workshop.jpg",
        "photo_cap": "One clear strip beats a wall of competing notices.",
        "keys": [
          ("Clarity system", "Visuals make the next step knowable."),
          ("Shared meaning", "Staff and families use the same cues."),
          ("Not decoration", "If it does not reduce confusion, remove it."),
        ],
        "try": {"type": "match", "guide": "Match each example to helpful visual teaching or clutter.",
          "left": [("a", "Four step coat sequence at child height"), ("b", "Thirty posters on one wall"), ("c", "Same finished card used by all staff")],
          "right": [("b", "Clutter / overload"), ("a", "Helpful visual teaching"), ("c", "Helpful visual teaching")]},
        # wait match needs unique pairs - fix: use unique ids
        "case": {
          "scene": "../../assets/photos/workshop.jpg",
          "cap": "A support space with too many competing visuals.",
          "stem": "A learner freezes in a room covered with posters and charts. What is the strongest first move?",
          "options": [
            ("a", "Add more posters so every rule is visible."),
            ("b", "Reduce to one short sequence for the current task.", True),
            ("c", "Speak louder over the visual clutter."),
          ],
          "ok": "Yes. Clarity comes from fewer, better cues.",
          "bad": "More visuals can increase load. Reduce first.",
        },
        "take": [
          "Photograph one overloaded wall or station",
          "Remove or hide three non-essential visuals",
          "Keep one sequence for today only",
        ],
        "product_href": "../../shop.html",
        "product_img": "../../assets/packs/shop-full.png",
        "product_title": "Later: apply with PixtoLearn Packs",
        "product_sub": "Foundations first. Packs make the method physical.",
        "check": {
          "q": "Visual teaching works best when it is:",
          "options": [
            ("a", "As decorative as possible"),
            ("b", "A short, shared clarity system for the next step", True),
            ("c", "A replacement for all human relationships"),
          ],
          "ok": "Correct. Short, shared, actionable.",
          "bad": "Keep visuals practical and shared, not decorative.",
        },
      },
      {
        "id": "module-2",
        "title": "Breaking any skill into teachable steps",
        "objective": "Turn one skill into a short visual sequence a learner can follow.",
        "use_today": "Write one 4-step skill sheet for a real task you teach.",
        "see_title": "From complex skill to four cards",
        "see_body": "Watch a skill broken into essential steps only.",
        "video_brief": "Hands order 4 cards for coat or tidy-up, then learner follows. 60s.",
        "poster": "../../assets/photos/cards-hands.png",
        "photo": "../../assets/photos/cards-hands.png",
        "photo_cap": "One idea per card keeps the sequence teachable.",
        "keys": [
          ("Essential steps only", "Cut optional detail for later."),
          ("One idea per card", "Each card answers: what now?"),
          ("Teach before performance", "Show the order first when you can."),
        ],
        "try": {"type": "sequence", "guide": "Put the coat routine in order. Tap a card to move it up.",
          "items": ["Get coat", "Arm in first sleeve", "Arm in second sleeve", "Zip or fasten"],
          "ok": "Clear order. Short sequences are easier to follow.",
          "bad": "Not yet. Keep adjusting until the order makes sense."},
        "case": {
          "scene": "../../assets/photos/hands-cards.png",
          "cap": "A plan with too many micro-steps.",
          "stem": "A plan has 15 steps for a young learner. What should you do?",
          "options": [
            ("a", "Keep all 15 so nothing is missed."),
            ("b", "Split into two teaching blocks of fewer steps.", True),
            ("c", "Replace all cards with a long verbal script."),
          ],
          "ok": "Yes. Split complexity instead of overloading one sequence.",
          "bad": "Too many steps overwhelm. Split the skill.",
        },
        "take": [
          "Name one skill",
          "List only 4 essential steps",
          "Match each step to one image or card",
        ],
        "product_href": "../../shop.html",
        "product_img": "../../assets/packs/shop-full.png",
        "product_title": "PixtoLearn Packs",
        "product_sub": "Ready-made visual steps for swimming and routines.",
        "check": {
          "q": "A strong beginner sequence usually has:",
          "options": [
            ("a", "As many details as possible in one go"),
            ("b", "A short set of essential steps", True),
            ("c", "No order, so the learner can explore freely"),
          ],
          "ok": "Correct. Keep sequences short and essential.",
          "bad": "Short essential steps beat overloaded detail.",
        },
      },
      {
        "id": "module-3",
        "title": "Prompting, fading and consistency",
        "objective": "Use least-intrusive prompts and keep staff consistent.",
        "use_today": "Agree one prompt ladder with a colleague: point, wait, short word.",
        "see_title": "Prompt ladder in action",
        "see_body": "See point-wait versus talking over the visual.",
        "video_brief": "Two adults, same learner: overtalk vs point-and-wait. 75s.",
        "poster": "../../assets/photos/students.jpg",
        "photo": "../../assets/photos/students.jpg",
        "photo_cap": "Point to the visual before adding more talk.",
        "keys": [
          ("Visual first", "Prompt toward the card before speech."),
          ("Wait time", "Allow processing before repeating."),
          ("Fade", "Reduce help as independence grows."),
        ],
        "try": {"type": "sequence", "guide": "Order prompts from least to most support. Tap to move up.",
          "items": ["Point to the card and wait", "Short word cue", "Gesture plus word", "Hand-over-hand help"],
          "ok": "Good ladder. Start with the least intrusive prompt.",
          "bad": "Reorder toward least intrusive first."},
        "case": {
          "scene": "../../assets/photos/workshop-wide.jpg",
          "cap": "A team member talks over every visual.",
          "stem": "A colleague narrates every step while pointing at cards. What do you coach first?",
          "options": [
            ("a", "Remove the cards so speech leads."),
            ("b", "Point, wait, then use one short word if needed.", True),
            ("c", "Speak faster so the session stays on time."),
          ],
          "ok": "Yes. Protect wait time and least-intrusive prompting.",
          "bad": "Talking over visuals adds load. Point and wait first.",
        },
        "take": [
          "Write your prompt ladder on one card",
          "Practise one wait of 3-5 seconds today",
          "Share the ladder with one teammate",
        ],
        "product_href": "../../app.html",
        "product_img": "../../assets/photos/hero-app.jpg",
        "product_title": "PixtoLearn App",
        "product_sub": "Digital Focus sessions help teams rehearse the same sequence.",
        "check": {
          "q": "When a learner is unsure, the best first prompt is usually:",
          "options": [
            ("a", "A long verbal reset of the whole skill"),
            ("b", "Pointing them back to the current visual", True),
            ("c", "Removing all supports immediately"),
          ],
          "ok": "Correct. Return to the visual first.",
          "bad": "Prompt toward the visual before adding talk.",
        },
      },
      {
        "id": "module-4",
        "title": "Designing one visual system for your setting",
        "objective": "Create a shared start-skill-finish system that survives staff changes.",
        "use_today": "Draft a one-page setting plan: where sequences live and who updates them.",
        "see_title": "One language across a setting",
        "see_body": "See the same visual language used from arrival to activity to goodbye.",
        "video_brief": "Mini tour of shared strips in two rooms. 75-90s.",
        "poster": "../../assets/photos/impact-ghana-cards.jpg",
        "photo": "../../assets/photos/impact-ghana-cards.jpg",
        "photo_cap": "A shared system beats one-off cards.",
        "keys": [
          ("Start / skill / finish", "Predictable session frame."),
          ("Ownership", "Who updates the strip."),
          ("Portable backup", "App or photo for consistency."),
        ],
        "try": {"type": "match", "guide": "Match setting need to system choice.",
          "left": [("a", "Frequent staff changes"), ("b", "Learners need portable rehearsal"), ("c", "One main teaching station")],
          "right": [("a", "Photo handover + written sequence owner"), ("b", "App Focus sequences"), ("c", "Fixed board or stand strip")]},
        "case": {
          "scene": "../../assets/photos/workshop.jpg",
          "cap": "Three staff, three methods.",
          "stem": "Three adults teach the same transition three different ways. What should leadership do?",
          "options": [
            ("a", "Let each adult keep their personal style."),
            ("b", "Agree one shared sequence and place it where everyone can see it.", True),
            ("c", "Ban visuals so everyone relies on memory."),
          ],
          "ok": "Yes. Shared systems reduce uncertainty.",
          "bad": "Inconsistency recreates confusion. Agree one sequence.",
        },
        "take": [
          "Name your start, skill and finish cues",
          "Assign who can edit the strip",
          "Save a photo or App copy for handover",
        ],
        "product_href": "../../shop.html",
        "product_img": "../../assets/packs/shop-full.png",
        "product_title": "Build the system with PixtoLearn tools",
        "product_sub": "Packs for place-based teaching. App for portable Focus.",
        "check": {
          "q": "A visual system is more than a one-off card because it is:",
          "options": [
            ("a", "Shared, placed consistently and updated on purpose", True),
            ("b", "Different every day for novelty"),
            ("c", "Hidden in a drawer until assessments"),
          ],
          "ok": "Correct. Systems are shared and consistent.",
          "bad": "Systems need shared placement and ownership.",
        },
      },
    ],
  },
]

# Fix foundations M1 try - unique match pairs
COURSES[0]["modules"][0]["try"] = {
  "type": "match",
  "guide": "Match each example to the best label.",
  "left": [
    ("a", "Four-step coat sequence at learner height"),
    ("b", "Thirty posters competing on one wall"),
    ("c", "Same finished card used by all staff"),
  ],
  "right": [
    ("b", "Clutter / overload"),
    ("c", "Helpful shared system"),
    ("a", "Helpful visual teaching"),
  ],
}

# Continue adding other courses in same structure via second list merge
PACKS = {
  "id": "using-pixtolearn-packs-and-app",
  "title": "Using PixtoLearn Packs and App",
  "tag": "Tools",
  "summary": "Turn PixtoLearn Packs and the App into a repeatable teaching system for pool, home and on the go.",
  "product": "All Packs + App",
  "image": "../../assets/photos/hero-app.jpg",
  "modules": [
    {
      "id": "module-1",
      "title": "What is in your PixtoLearn system",
      "objective": "Choose when to use Packs, when to use the App, and when to combine both.",
      "use_today": "List what you own and pick one first use this week.",
      "see_title": "Packs and App side by side",
      "see_body": "See physical cards for place-based teaching and the App for portable Focus.",
      "video_brief": "Product table top: Full Pack + phone App. Cuts for pool / home / travel. 60s.",
      "poster": "../../assets/photos/hero-app.jpg",
      "photo": "../../assets/packs/shop-full.png",
      "photo_cap": "Packs make the method physical. The App makes it portable.",
      "keys": [
        ("Packs", "Waterproof / durable cards for live environments."),
        ("App", "Digital Focus for rehearsal and travel."),
        ("Together", "Same sequence language across tools."),
      ],
      "try": {"type": "match", "guide": "Match the goal to the best tool.",
        "left": [("a", "Poolside skill block"), ("b", "Preview a routine on the train"), ("c", "Home bedtime station")],
        "right": [("b", "App Focus"), ("a", "Swimming Pack cards"), ("c", "WOW / routine cards")]},
      "case": {
        "scene": "../../assets/photos/pool-session.jpg",
        "cap": "Pack is in the bag, unused.",
        "stem": "An instructor teaches verbally with a Full Pack in their bag. Best next move?",
        "options": [
          ("a", "Keep verbal-only to save time."),
          ("b", "Place a short sequence from the pack where the learner can see it.", True),
          ("c", "Throw away the pack and buy different tools."),
        ],
        "ok": "Yes. Use the tools you already have.",
        "bad": "If you have the pack, put a short sequence in view.",
      },
      "take": ["Inventory what you own", "Choose one first use context", "Open App or pack before the next session"],
      "product_href": "../../shop.html",
      "product_img": "../../assets/packs/shop-full.png",
      "product_title": "Explore PixtoLearn Packs",
      "product_sub": "Swimming, WOW and accessories.",
      "check": {
        "q": "The App is especially useful for:",
        "options": [
          ("a", "Replacing all physical cards forever"),
          ("b", "Portable rehearsal and Focus away from the main station", True),
          ("c", "Decorating social media only"),
        ],
        "ok": "Correct. App = portable Focus.",
        "bad": "App supports portable rehearsal alongside packs.",
      },
    },
    {
      "id": "module-2",
      "title": "Running a session with swimming cards",
      "objective": "Select, order and run a short swimming skill sequence from your pack.",
      "use_today": "Build one 4-6 card skill sequence and place it on a stand or edge.",
      "see_title": "From closed pack to live lesson",
      "see_body": "Select cards, order them, teach one block, put them away.",
      "video_brief": "Instructor opens pack, builds sequence on stand, teaches one block. 75s.",
      "poster": "../../assets/photos/ghana-1.jpg",
      "photo": "../../assets/photos/library/dsc_0795.jpg",
      "photo_cap": "A stand keeps the active sequence visible.",
      "keys": [
        ("Select", "Only the cards for this skill block."),
        ("Order", "Left to right or your agreed direction."),
        ("Active card", "Make the current step obvious."),
      ],
      "try": {"type": "sequence", "guide": "Order a simple poolside flow. Tap to move up.",
        "items": ["Choose the skill", "Select 4 cards", "Place in order on stand", "Teach then finish"],
        "ok": "Strong session flow.",
        "bad": "Reorder toward prepare then teach."},
      "case": {
        "scene": "../../assets/photos/library/dsc_0764.jpg",
        "cap": "Too many cards on deck.",
        "stem": "Twelve cards are laid out for one beginner skill. Best action?",
        "options": [
          ("a", "Keep all twelve for completeness."),
          ("b", "Reduce to the essential short sequence for this block.", True),
          ("c", "Hide all cards and rely on memory."),
        ],
        "ok": "Yes. Short sequences win.",
        "bad": "Too many cards overload. Reduce.",
      },
      "take": ["Pick one swim skill", "Lay out 4-6 cards only", "Photograph the sequence for next time"],
      "product_href": "../../shop.html",
      "product_img": "../../assets/packs/pack-full.png",
      "product_title": "Swimming Packs",
      "product_sub": "Waterproof visual cards for aquatic teaching.",
      "check": {
        "q": "For one skill block, aim for:",
        "options": [
          ("a", "Every card you own on the deck"),
          ("b", "A short essential sequence only", True),
          ("c", "No cards after the first week"),
        ],
        "ok": "Correct. Keep blocks short.",
        "bad": "Essential short sequences beat card overload.",
      },
    },
    {
      "id": "module-3",
      "title": "Everyday routines with WOW cards",
      "objective": "Place and run one home or early-years routine with WOW-style cards.",
      "use_today": "Set one routine strip at decision height (door, basin, coat hooks).",
      "see_title": "Routine cards in a real home moment",
      "see_body": "See placement at learner height and a short leaving-home or self-care sequence.",
      "video_brief": "Home door or basin: 4 WOW steps, adult points, child acts. 60s.",
      "poster": "../../assets/icons/audience/families.jpg",
      "photo": "../../assets/icons/audience/families.jpg",
      "photo_cap": "Same method as the pool: short, visible, consistent.",
      "keys": [
        ("Visibility", "Cards must be in the decision place."),
        ("Height", "Readable for the learner."),
        ("One routine", "Start with a single friction point."),
      ],
      "try": {"type": "match", "guide": "Match the routine to the best placement.",
        "left": [("a", "Leaving the house"), ("b", "Handwashing"), ("c", "Bedtime wind-down")],
        "right": [("b", "By the basin"), ("a", "By the door at learner height"), ("c", "By the bed or bedroom door")]},
      "case": {
        "scene": "../../assets/icons/audience/families.jpg",
        "cap": "Cards live in a drawer.",
        "stem": "Cards are perfect but stored in a drawer. Result?",
        "options": [
          ("a", "They still work if adults remember them."),
          ("b", "Move them to the decision point so the learner can see them.", True),
          ("c", "Laminate more copies and keep them stored."),
        ],
        "ok": "Yes. Visibility is part of the method.",
        "bad": "Hidden cards do not support independence.",
      },
      "take": ["Choose one routine", "Place 3-5 cards at the decision point", "Practise once today"],
      "product_href": "../../routines.html",
      "product_img": "../../assets/icons/audience/families.jpg",
      "product_title": "WOW Routine Cards",
      "product_sub": "Everyday visual routines for home and early years.",
      "check": {
        "q": "Routine cards work best when they are:",
        "options": [
          ("a", "Stored neatly out of sight"),
          ("b", "Visible at the decision point", True),
          ("c", "Different every hour for novelty"),
        ],
        "ok": "Correct. Visibility matters.",
        "bad": "Place cards where decisions happen.",
      },
    },
    {
      "id": "module-4",
      "title": "Digital Focus with the PixtoLearn App",
      "objective": "Run a short App Focus session to rehearse a sequence before a live lesson or outing.",
      "use_today": "Create or open one Focus sequence and rehearse it once.",
      "see_title": "App Focus walkthrough",
      "see_body": "Choose a sequence, enter Focus, rehearse, then use the same order live.",
      "video_brief": "Screencast App + cut to learner preview before session. 60-75s.",
      "poster": "../../assets/photos/hero-app.jpg",
      "photo": "../../assets/photos/app-mock.png",
      "photo_cap": "Rehearse digitally, deliver with packs in the real environment.",
      "keys": [
        ("Preview", "Reduce surprise before the live moment."),
        ("Same order", "Keep App and physical cards aligned."),
        ("Short Focus", "One sequence, not an endless scroll."),
      ],
      "try": {"type": "sequence", "guide": "Order an App session flow. Tap to move up.",
        "items": ["Choose sequence", "Enter Focus", "Rehearse once", "Use same order live"],
        "ok": "Clear App-to-live flow.",
        "bad": "Reorder toward choose, Focus, rehearse, live."},
      "case": {
        "scene": "../../assets/photos/hero-app.jpg",
        "cap": "Anxious learner before a session.",
        "stem": "A learner is anxious before the pool. Best use of the App?",
        "options": [
          ("a", "Skip preview and hope for the best."),
          ("b", "Do a short Focus preview of today's sequence.", True),
          ("c", "Show unrelated videos to distract them."),
        ],
        "ok": "Yes. Short preview builds predictability.",
        "bad": "A short Focus preview reduces uncertainty.",
      },
      "take": ["Open one Focus sequence", "Align it with your physical cards", "Rehearse once before the live session"],
      "product_href": "../../app.html",
      "product_img": "../../assets/photos/hero-app.jpg",
      "product_title": "PixtoLearn App",
      "product_sub": "Digital visual support for structured Focus sessions.",
      "check": {
        "q": "App Focus is most powerful when:",
        "options": [
          ("a", "It uses a different order from your physical cards"),
          ("b", "It matches the live sequence you will teach", True),
          ("c", "It replaces all human support"),
        ],
        "ok": "Correct. Keep digital and physical aligned.",
        "bad": "Match App order to the live sequence.",
      },
    },
  ],
}

TODDLERS = {
  "id": "everyday-visual-routines-toddlers",
  "title": "Everyday Visual Routines for Toddlers and Young Children",
  "tag": "Early years",
  "summary": "Build calm, clear everyday routines at home and in early years settings with visual sequences.",
  "product": "WOW Routine Cards",
  "image": "../../assets/icons/audience/families.jpg",
  "modules": [
    {
      "id": "module-1",
      "title": "Why routines need visuals at home",
      "objective": "Explain why visuals reduce conflict at everyday transitions for toddlers and young children.",
      "use_today": "Pick one daily friction moment to support with visuals this week.",
      "see_title": "Morning rush with and without visuals",
      "see_body": "Compare verbal nagging with a short visible leaving-home sequence.",
      "video_brief": "Home hallway: verbal overload vs 3 cards (shoes, coat, go). 60s.",
      "poster": "../../assets/icons/audience/families.jpg",
      "photo": "../../assets/icons/audience/families.jpg",
      "photo_cap": "Predictable steps reduce the need for repeated verbal prompts.",
      "keys": [
        ("Transitions", "Most friction sits between activities."),
        ("Predictability", "Children know what comes next."),
        ("Less nagging", "The visual carries the demand."),
      ],
      "try": {"type": "match", "guide": "Match the moment to a routine type.",
        "left": [("a", "Leaving the house"), ("b", "Bedtime"), ("c", "Cleaning up toys")],
        "right": [("c", "Tidy-up sequence"), ("a", "Out-the-door sequence"), ("b", "Wind-down sequence")]},
      "case": {
        "scene": "../../assets/icons/audience/families.jpg",
        "cap": "Coat and shoes meltdown.",
        "stem": "A toddler melts down at coat and shoes. Best first move?",
        "options": [
          ("a", "Give a longer verbal lecture."),
          ("b", "Point to the next visual step and wait.", True),
          ("c", "Remove all structure so they choose freely."),
        ],
        "ok": "Yes. Point to the next step and wait.",
        "bad": "More talk often escalates. Use the visual next step.",
      },
      "take": ["Choose one friction routine", "Keep only 3-5 steps", "Place cards where the transition happens"],
      "product_href": "../../routines.html",
      "product_img": "../../assets/icons/audience/families.jpg",
      "product_title": "WOW Routine Cards",
      "product_sub": "Built for everyday home and early-years routines.",
      "check": {
        "q": "Visuals help everyday routines mainly by:",
        "options": [
          ("a", "Making adults talk more"),
          ("b", "Making the next step visible and predictable", True),
          ("c", "Replacing play and connection"),
        ],
        "ok": "Correct. Predictable next steps calm transitions.",
        "bad": "Visibility and predictability are the point.",
      },
    },
    {
      "id": "module-2",
      "title": "Building a clear everyday sequence",
      "objective": "Build a 3-6 step routine sequence with simple language and a clear finished.",
      "use_today": "Draft one 4-step routine on paper or cards.",
      "see_title": "Building a brush-teeth or tidy sequence",
      "see_body": "Watch a short sequence assembled and used once.",
      "video_brief": "Hands build 4 cards; child follows at basin. 60s.",
      "poster": "../../assets/photos/cards-hands.png",
      "photo": "../../assets/photos/cards-hands.png",
      "photo_cap": "First, next, then, finished keeps language light.",
      "keys": [
        ("3-6 steps", "Short enough to succeed."),
        ("Simple words", "Match the card meaning."),
        ("Finished", "Show when the routine ends."),
      ],
      "try": {"type": "sequence", "guide": "Order a handwashing routine. Tap to move up.",
        "items": ["Turn on water", "Wash hands", "Rinse", "Dry hands"],
        "ok": "Clear routine order.",
        "bad": "Keep adjusting until the order is practical."},
      "case": {
        "scene": "../../assets/photos/hands-cards.png",
        "cap": "A 10-step bedtime chart.",
        "stem": "Bedtime has 10 steps and nightly battles. What should you do?",
        "options": [
          ("a", "Add more steps for completeness."),
          ("b", "Cut to the essential 4-5 steps.", True),
          ("c", "Abandon visuals forever."),
        ],
        "ok": "Yes. Shorter sequences succeed more often.",
        "bad": "Cut to essentials instead of adding load.",
      },
      "take": ["Write 4 steps for one routine", "Add a finished cue", "Try it once tonight or tomorrow morning"],
      "product_href": "../../routines.html",
      "product_img": "../../assets/icons/audience/families.jpg",
      "product_title": "WOW Routine Cards",
      "product_sub": "Ready sequences for real home moments.",
      "check": {
        "q": "For most toddler routines, aim for:",
        "options": [
          ("a", "10+ detailed steps"),
          ("b", "A short essential sequence", True),
          ("c", "No finished cue"),
        ],
        "ok": "Correct. Short sequences win.",
        "bad": "Keep toddler sequences short and clear.",
      },
    },
    {
      "id": "module-3",
      "title": "Using routine cards in real moments",
      "objective": "Place cards well, prompt lightly, and fade help as independence grows.",
      "use_today": "Move one routine to the true decision point at child height.",
      "see_title": "Placement and prompting",
      "see_body": "Cards at child height; adult points; waits; celebrates the step.",
      "video_brief": "Door routine at child height, point and wait. 60-75s.",
      "poster": "../../assets/icons/audience/families.jpg",
      "photo": "../../assets/photos/cards-hands.png",
      "photo_cap": "If children cannot see the cards, the routine cannot work.",
      "keys": [
        ("Decision point", "Door, basin, hooks, bed."),
        ("Point and wait", "Least talk first."),
        ("Fade", "Less help over days."),
      ],
      "try": {"type": "match", "guide": "Match problem to fix.",
        "left": [("a", "Cards above adult eye line"), ("b", "Adult talks over every card"), ("c", "Cards change every day")],
        "right": [("b", "Point, wait, short cue only if needed"), ("a", "Lower to child height"), ("c", "Keep the same order this week")]},
      "case": {
        "scene": "../../assets/icons/audience/families.jpg",
        "cap": "Child ignores cards in a drawer.",
        "stem": "Best fix?",
        "options": [
          ("a", "Scold the child for not remembering."),
          ("b", "Place the sequence at the decision point at child height.", True),
          ("c", "Write longer instructions on the cards."),
        ],
        "ok": "Yes. Placement is part of teaching.",
        "bad": "Bring cards into the moment at child height.",
      },
      "take": ["Place cards at child height", "Practise point-and-wait once", "Keep the same order for a week"],
      "product_href": "../../routines.html",
      "product_img": "../../assets/icons/audience/families.jpg",
      "product_title": "WOW Routine Cards",
      "product_sub": "Designed for real home placement and daily use.",
      "check": {
        "q": "The best place for routine cards is:",
        "options": [
          ("a", "Wherever looks tidy to adults"),
          ("b", "Where the decision happens, at child height", True),
          ("c", "In a folder for parents only"),
        ],
        "ok": "Correct. Decision point + child height.",
        "bad": "Cards must be visible where the routine happens.",
      },
    },
    {
      "id": "module-4",
      "title": "Calm transitions and regulation with visuals",
      "objective": "Use warnings, next cues and finished to support regulation during transitions.",
      "use_today": "Add a simple warning + next + finished to one hard transition.",
      "see_title": "From play to leave with calm cues",
      "see_body": "See a 2-minute warning, next card, and finished used without escalation.",
      "video_brief": "Park or play to leave: warning, next, finished. 75s.",
      "poster": "../../assets/icons/audience/families.jpg",
      "photo": "../../assets/photos/students.jpg",
      "photo_cap": "Regulation first. New demands later.",
      "keys": [
        ("Warning", "Reduce surprise."),
        ("Next", "Show what comes after."),
        ("Finished", "Close the loop calmly."),
      ],
      "try": {"type": "sequence", "guide": "Order a calm transition. Tap to move up.",
        "items": ["Give warning", "Show next", "Support the move", "Show finished"],
        "ok": "Strong transition flow.",
        "bad": "Reorder toward warn, next, move, finished."},
      "case": {
        "scene": "../../assets/icons/audience/families.jpg",
        "cap": "Sudden leave from the park.",
        "stem": "Leaving the park usually causes a crisis. Best plan?",
        "options": [
          ("a", "Leave with no cue to stay in control."),
          ("b", "Use warning, next and finished consistently.", True),
          ("c", "Argue until the child complies."),
        ],
        "ok": "Yes. Predictable transitions reduce distress.",
        "bad": "Warnings and next cues prevent surprise.",
      },
      "take": ["Write a warning phrase", "Add next and finished cards", "Use the same pattern for one week"],
      "product_href": "../../routines.html",
      "product_img": "../../assets/icons/audience/families.jpg",
      "product_title": "WOW Routine Cards",
      "product_sub": "Support calm transitions at home and in early years.",
      "check": {
        "q": "When a child is dysregulated at a transition, prioritise:",
        "options": [
          ("a", "Pushing a brand-new skill immediately"),
          ("b", "A known calm visual routine before new demands", True),
          ("c", "Removing all predictability"),
        ],
        "ok": "Correct. Known calm routines first.",
        "bad": "Regulation before new demands.",
      },
    },
  ],
}

SWIM = {
  "id": "teaching-swimming-visual-systems",
  "title": "Teaching Swimming with Visual Systems",
  "tag": "Swimming",
  "summary": "Use waterproof visual supports to make swim skills clearer, calmer and easier to follow.",
  "product": "Swimming Packs",
  "image": "../../assets/photos/ghana-1.jpg",
  "skip_module_ids": {"module-1"},  # already gold
  "modules": [
    {
      "id": "module-2",
      "title": "Breaking a swim skill into clear steps",
      "objective": "Turn one swimming skill into a short visual sequence a learner can follow.",
      "use_today": "Choose one skill and write 4 essential steps only.",
      "see_title": "From complex skill to poolside cards",
      "see_body": "See a skill reduced to a short ordered sequence at the pool edge.",
      "video_brief": "Table/poolside: order cards for push-and-glide or face-in; learner follows. 60s.",
      "poster": "../../assets/photos/library/dsc_0764.jpg",
      "photo": "../../assets/photos/library/dsc_0764.jpg",
      "photo_cap": "Short sequences keep skill order visible.",
      "has_video_file": False,
      "keys": [
        ("One skill", "Do not mix multiple outcomes."),
        ("Essential steps", "Cut optional detail."),
        ("Teach the order", "Show sequence before busy water work when possible."),
      ],
      "try": {"type": "sequence", "guide": "Order a simple push-and-glide teaching flow. Tap to move up.",
        "items": ["Ready position", "Push from wall", "Glide", "Stand / finish"],
        "ok": "Clear skill order.",
        "bad": "Keep adjusting until the swim order is practical."},
      "case": {
        "scene": "../../assets/photos/library/dsc_0764.jpg",
        "cap": "Twelve cards for one beginner skill.",
        "stem": "Best action?",
        "options": [
          ("a", "Keep all twelve cards out."),
          ("b", "Reduce to a short essential sequence.", True),
          ("c", "Stop using visuals."),
        ],
        "ok": "Yes. Short sequences win in the pool.",
        "bad": "Reduce card count for one skill block.",
      },
      "take": ["Name one swim skill", "List 4 steps", "Match each to a card"],
      "product_href": "../../shop.html",
      "product_img": "../../assets/packs/shop-full.png",
      "product_title": "PixtoLearn Swimming Packs",
      "product_sub": "Waterproof cards for clear aquatic sequences.",
      "check": {
        "q": "A visual sequence should usually:",
        "options": [
          ("a", "Include every possible detail at once"),
          ("b", "Keep only essential steps for that skill", True),
          ("c", "Change order every length for novelty"),
        ],
        "ok": "Correct. Essential steps only.",
        "bad": "Keep sequences short and essential.",
      },
    },
    {
      "id": "module-3",
      "title": "Using waterproof cards in a live lesson",
      "objective": "Place, pace and prompt with waterproof cards so visuals support teaching without distraction.",
      "use_today": "Set one sequence on a stand or edge before learners enter.",
      "see_title": "Placement and prompting poolside",
      "see_body": "See poor placement fixed, then a point-and-wait prompt.",
      "video_brief": "Cards behind learner vs edge/stand; prompt look at next picture. 75s.",
      "poster": "../../assets/photos/library/dsc_0795.jpg",
      "photo": "../../assets/photos/library/dsc_0795.jpg",
      "photo_cap": "Boards and stands keep sequences visible.",
      "has_video_file": False,
      "keys": [
        ("Line of sight", "Learners must see the active card."),
        ("Prompt to card", "Before long talk."),
        ("Calm flow", "Change cards between attempts."),
      ],
      "try": {"type": "match", "guide": "Match problem to fix.",
        "left": [("a", "Cards behind the learner"), ("b", "Learner unsure mid-skill"), ("c", "Instructors use different orders")],
        "right": [("b", "Point to current card, short cue"), ("a", "Move sequence into line of sight"), ("c", "Agree one shared sequence")]},
      "case": {
        "scene": "../../assets/photos/pool-session.jpg",
        "cap": "Busy lesson, unsure learner.",
        "stem": "Learner freezes after a long verbal chain. Cards are on the stand. Best move?",
        "options": [
          ("a", "Repeat the full verbal chain louder."),
          ("b", "Point to the first card and invite that step only.", True),
          ("c", "Remove the cards immediately."),
        ],
        "ok": "Yes. Point to the card and simplify.",
        "bad": "Use the visual first, then a short cue.",
      },
      "take": ["Pre-set sequence before entry", "Check line of sight", "Plan one short cue per card"],
      "product_href": "../../shop.html",
      "product_img": "../../assets/packs/shop-full.png",
      "product_title": "Swimming Packs + stands",
      "product_sub": "Make placement easy in live lessons.",
      "check": {
        "q": "When a learner is unsure, first:",
        "options": [
          ("a", "Give a longer explanation"),
          ("b", "Prompt them to the current visual card", True),
          ("c", "Abandon structure"),
        ],
        "ok": "Correct. Prompt to the card first.",
        "bad": "Return to the visual before more talk.",
      },
    },
    {
      "id": "module-4",
      "title": "Supporting neurodiverse swimmers with visual structure",
      "objective": "Adapt visual systems for sensory needs, transitions and emotional safety in the pool.",
      "use_today": "Add a clear start and finished visual to your next lesson.",
      "see_title": "Start, skill, finished in the water",
      "see_body": "See a predictable lesson frame supporting regulation and skill work.",
      "video_brief": "Entry with next/then/finished, one skill block, calm finished. 75-90s.",
      "poster": "../../assets/icons/audience/swimming-instructors.jpg",
      "photo": "../../assets/icons/audience/swimming-instructors.jpg",
      "photo_cap": "Predictable structure supports neurodiverse swimmers.",
      "has_video_file": False,
      "keys": [
        ("Predictability", "Same start and finish."),
        ("Less clutter", "Only cards for this block."),
        ("Regulation first", "Known routine before new skill."),
      ],
      "try": {"type": "match", "guide": "Match need to support.",
        "left": [("a", "Anxious at water entry"), ("b", "Overloaded by many cards"), ("c", "Dysregulated mid-lesson")],
        "right": [("b", "Reduce to essential sequence"), ("a", "Next / then / finished entry routine"), ("c", "Return to known calm visual routine")]},
      "case": {
        "scene": "../../assets/photos/ghana-1.jpg",
        "cap": "Dysregulated mid-lesson.",
        "stem": "Learner becomes dysregulated during a new skill. Best priority?",
        "options": [
          ("a", "Push through the full skill to finish on time."),
          ("b", "Support regulation with a known visual routine, then return to teaching.", True),
          ("c", "Remove all structure."),
        ],
        "ok": "Yes. Regulation before new skill teaching.",
        "bad": "Safety and regulation first.",
      },
      "take": ["Define start cue", "Define finished cue", "Plan one regulation fallback routine"],
      "product_href": "../../shop.html",
      "product_img": "../../assets/packs/shop-full.png",
      "product_title": "Swimming Packs",
      "product_sub": "Structure skills and transitions in the water.",
      "check": {
        "q": "If a swimmer is dysregulated, prioritise:",
        "options": [
          ("a", "New skill intensity"),
          ("b", "Known visual routine and regulation support", True),
          ("c", "No cues at all"),
        ],
        "ok": "Correct. Regulation first.",
        "bad": "Return to known structure before new demands.",
      },
    },
  ],
}

COURSES.extend([PACKS, TODDLERS, SWIM])


def render_video(mod, depth_prefix):
    poster = depth_prefix + mod["poster"].replace("../../", "") if False else mod["poster"]
    # paths in data are already relative from module folder as ../../assets - wait
    # From course/X/module-N/ assets are ../../../../assets
    # Data uses ../../assets which is wrong for module depth.
    # Fix: store as assets/... and prefix
    return ""  # handled below


def asset(path_from_assets: str, rel: str) -> str:
    """path_from_assets like photos/x.jpg ; rel is ../../../../ or ../../../"""
    p = path_from_assets
    if p.startswith("../../assets/"):
        p = p[len("../../assets/"):]
    if p.startswith("assets/"):
        p = p[len("assets/"):]
    return rel + "assets/" + p


def module_html(course, mod, mod_index, total, rel_mod):
    """rel_mod = ../../../../ for module pages"""
    rel = rel_mod
    side = []
    for i, m in enumerate(course["modules"], 1):
        href = f"../{m['id']}/index.html" if m["id"] != mod["id"] else "index.html"
        cur = ' aria-current="page"' if m["id"] == mod["id"] else ""
        side.append(f'<li><a href="{href}"{cur}>{i}. {esc(m["title"][:42])}</a></li>')

    next_mod = None
    if mod_index < total:
        next_mod = course["modules"][mod_index]  # 1-based index passed as mod_index
    # fix: mod_index is 1-based position
    idx0 = mod_index - 1
    nxt = course["modules"][idx0 + 1]["id"] if idx0 + 1 < total else None
    next_href = f"../{nxt}/index.html" if nxt else "../index.html"
    next_label = "Mark complete and go to next module" if nxt else "Mark course module complete"
    hub = "../index.html"

    poster = asset(mod["poster"], rel)
    photo = asset(mod["photo"], rel)
    product_img = asset(mod["product_img"], rel)
    # product_href in data is ../../shop - from module need ../../../../shop
    ph = mod["product_href"]
    if ph.startswith("../../"):
        ph = rel + ph[len("../../"):]
    scene = asset(mod["case"]["scene"], rel)

    has_video = mod.get("has_video_file")
    video_src = mod.get("video_src")
    if has_video and video_src:
        video_block = f'''<div class="mod-video">
          <video controls playsinline preload="metadata" poster="{esc(poster)}">
            <source src="{esc(asset(video_src, rel))}" type="video/mp4" />
          </video>
        </div>
        <p class="mod-video-note">{esc(mod.get("video_note", "Watch once for the method, once for the learner response."))}</p>'''
    else:
        video_block = f'''<div class="mod-video is-placeholder" role="img" aria-label="Video placeholder">
          <img src="{esc(poster)}" alt="" />
          <div class="mod-video-ph">
            <strong>Video to film</strong>
            <span>{esc(mod["video_brief"])}</span>
          </div>
        </div>
        <p class="mod-video-note">Placeholder: final clip not filmed yet. Photo reference below.</p>'''

    keys = "".join(
        f'''<article class="mod-key"><span class="mod-key-n">{i}</span><div><h3>{esc(t)}</h3><p>{esc(b)}</p></div></article>'''
        for i, (t, b) in enumerate(mod["keys"], 1)
    )

    try_block = mod["try"]
    if try_block["type"] == "match":
        left = "".join(
            f'<button type="button" class="mod-match-item" data-match-pair="{esc(pid)}">{esc(lab)}</button>'
            for pid, lab in try_block["left"]
        )
        right = "".join(
            f'<button type="button" class="mod-match-item" data-match-pair="{esc(pid)}">{esc(lab)}</button>'
            for pid, lab in try_block["right"]
        )
        try_html = f'''<section class="mod-block" id="try" data-block="match">
        <p class="mod-block-kicker">4. Try it</p>
        <h2>Interactive practice</h2>
        <p class="learn-activity-guide">{esc(try_block["guide"])}</p>
        <input type="hidden" data-block-done data-try-done value="0" />
        <div class="mod-match">
          <div class="mod-match-col" data-match-side="left"><h3>Left</h3>{left}</div>
          <div class="mod-match-col" data-match-side="right"><h3>Right</h3>{right}</div>
        </div>
        <p class="learn-feedback" data-match-feedback hidden></p>
      </section>'''
    else:
        # shuffle display order: reverse items for starting disorder
        items = list(try_block["items"])
        display = items[1:] + items[:1]
        buttons = "".join(
            f'<button type="button" class="mod-match-item" data-seq="{items.index(lab)+1}">{esc(lab)}</button>'
            for lab in display
        )
        try_html = f'''<section class="mod-block" id="try" data-block="sequence" data-feedback-ok="{esc(try_block.get("ok",""))}" data-feedback-bad="{esc(try_block.get("bad",""))}">
        <p class="mod-block-kicker">4. Try it</p>
        <h2>Interactive practice</h2>
        <p class="learn-activity-guide">{esc(try_block["guide"])}</p>
        <p class="mod-seq-hint">Tap a step to move it up until the order is right, then check.</p>
        <input type="hidden" data-block-done data-try-done value="0" />
        <div class="mod-seq-list" data-sequence-list>{buttons}</div>
        <button type="button" class="learn-btn learn-btn-amber" data-sequence-check>Check order</button>
        <p class="learn-feedback" data-sequence-feedback hidden></p>
      </section>'''

    case = mod["case"]
    opts = []
    for val, lab, *rest in [
        (o[0], o[1], True) if len(o) > 2 and o[2] else (o[0], o[1], False) for o in case["options"]
    ]:
        # options are tuples (id, label) or (id, label, True)
        pass
    opt_html = []
    for o in case["options"]:
        oid, lab = o[0], o[1]
        correct = ' data-correct="1"' if len(o) > 2 and o[2] else ""
        opt_html.append(
            f'<label class="learn-option"><input type="radio" name="case_{mod["id"]}" value="{esc(oid)}"{correct} /> {esc(lab)}</label>'
        )
    case_html = f'''<section class="mod-block" id="case" data-block="scenario" data-scenario-name="case_{mod["id"]}" data-feedback-ok="{esc(case["ok"])}" data-feedback-bad="{esc(case["bad"])}">
        <p class="mod-block-kicker">5. Case it</p>
        <h2>What would you do?</h2>
        <div class="mod-case-scene">
          <figure>
            <img src="{esc(scene)}" alt="" />
            <figcaption>{esc(case["cap"])}</figcaption>
          </figure>
          <div>
            <p class="learn-activity-q">{esc(case["stem"])}</p>
            <input type="hidden" data-block-done data-case-done value="0" />
            <div class="learn-options" role="radiogroup">{''.join(opt_html)}</div>
            <button type="button" class="learn-btn learn-btn-amber" data-scenario-check>Check decision</button>
            <p class="learn-feedback" data-scenario-feedback hidden></p>
          </div>
        </div>
      </section>'''

    take_items = "".join(
        f'<li><label><input type="checkbox" data-takeaway /> {esc(t)}</label></li>' for t in mod["take"]
    )
    take_html = f'''<section class="mod-block" id="take" data-block="checklist">
        <p class="mod-block-kicker">6. Take it</p>
        <h2>Use it this week</h2>
        <p>Tick at least two actions to make this module practical.</p>
        <div class="mod-takeaway">
          <input type="hidden" data-block-done data-take-done value="0" />
          <ul class="mod-takeaway-list">{take_items}</ul>
          <p class="learn-muted" data-checklist-note>0 ready.</p>
          <a class="mod-product-link" href="{esc(ph)}">
            <img src="{esc(product_img)}" alt="" />
            <span><strong>{esc(mod["product_title"])}</strong><span>{esc(mod["product_sub"])}</span></span>
          </a>
        </div>
      </section>'''

    chk = mod["check"]
    chk_opts = []
    for o in chk["options"]:
        oid, lab = o[0], o[1]
        correct = ' data-correct="1"' if len(o) > 2 and o[2] else ""
        chk_opts.append(
            f'<label class="learn-option"><input type="radio" name="check_{mod["id"]}" value="{esc(oid)}"{correct} /> {esc(lab)}</label>'
        )
    check_html = f'''<section class="mod-block" id="check" data-block="mcq" data-mcq-name="check_{mod["id"]}" data-feedback-ok="{esc(chk["ok"])}" data-feedback-bad="{esc(chk["bad"])}">
        <p class="mod-block-kicker">7. Check</p>
        <h2>Confirm the key idea</h2>
        <p class="learn-activity-guide">Answer correctly to continue.</p>
        <input type="hidden" data-block-done data-check-done value="0" />
        <p class="learn-activity-q">{esc(chk["q"])}</p>
        <div class="learn-options" role="radiogroup">{''.join(chk_opts)}</div>
        <button type="button" class="learn-btn learn-btn-amber" data-mcq-check>Check answer</button>
        <p class="learn-feedback" data-mcq-feedback hidden></p>
      </section>'''

    return f'''<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <title>Module {mod_index}: {esc(mod["title"])} | PixtoLearn Academy</title>
  <meta name="description" content="{esc(mod["objective"])}" />
  <link rel="icon" href="{rel}assets/brand/favicon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..800&family=Figtree:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../../../css/academy-learn.css" />
</head>
<body class="learn-body">
  <a class="learn-skip" href="#main">Skip to content</a>
  <header class="learn-header">
    <div class="learn-wrap learn-nav">
      <a class="learn-brand" href="../../../index.html"><img src="{rel}assets/brand/logo.png" alt="PixtoLearn" />
        <span class="learn-brand-text"><strong>Academy</strong><span>Module {mod_index}</span></span></a>
      <ul class="learn-nav-links">
        <li><a href="../../../index.html">Dashboard</a></li>
        <li><a href="{hub}">Course hub</a></li>
        <li><a href="{rel}account.html">Account</a></li>
      </ul>
    </div>
  </header>
  <div class="learn-wrap learn-player">
    <aside class="learn-side" aria-label="Course modules">
      <h2>Course modules</h2>
      <ul class="learn-side-list">{''.join(side)}</ul>
      <a class="learn-side-back" href="{hub}">Back to course hub</a>
    </aside>
    <main id="main" class="learn-content">
      <p class="learn-eyebrow">Module {mod_index} of {total} | about 10-15 minutes</p>
      <h1>{esc(mod["title"])}</h1>
      <nav class="mod-progress-rail" aria-label="Module sections">
        <a href="#open">Open</a><a href="#see">See it</a><a href="#get">Get it</a><a href="#try">Try it</a><a href="#case">Case it</a><a href="#take">Take it</a><a href="#check">Check</a>
      </nav>
      <section class="mod-block" id="open">
        <p class="mod-block-kicker">1. Open</p>
        <div class="learn-objective"><strong>Learning objective</strong>{esc(mod["objective"])}</div>
        <p><strong>Use this today:</strong> {esc(mod["use_today"])}</p>
      </section>
      <section class="mod-block" id="see">
        <p class="mod-block-kicker">2. See it</p>
        <h2>{esc(mod["see_title"])}</h2>
        <p>{esc(mod["see_body"])}</p>
        {video_block}
        <figure class="learn-figure" style="margin-top:1rem">
          <img src="{esc(photo)}" alt="" />
          <figcaption>{esc(mod["photo_cap"])}</figcaption>
        </figure>
      </section>
      <section class="mod-block" id="get">
        <p class="mod-block-kicker">3. Get it</p>
        <h2>Key ideas</h2>
        <div class="mod-key-grid">{keys}</div>
      </section>
      {try_html}
      {case_html}
      {take_html}
      {check_html}
      <div class="learn-player-actions">
        <p class="mod-gate-msg" data-gate-msg hidden></p>
        <button type="button" class="learn-btn learn-btn-primary" data-complete>{esc(next_label)}</button>
        <a class="learn-btn learn-btn-ghost" href="{hub}">Save and return to hub</a>
      </div>
    </main>
  </div>
  <footer class="learn-footer"><div class="learn-wrap learn-footer-inner"><span>{esc(course["title"])}</span><a href="{hub}">Course hub</a></div></footer>
  <script src="../../../js/progress.js"></script>
  <script src="../../../js/module-blocks.js"></script>
  <script>
  (function(){{
    var COURSE_ID = "{course["id"]}";
    var MODULE_ID = "{mod["id"]}";
    var NEXT = "{next_href}";
    var P = window.PixtoAcademyProgress;
    if (P) P.markInProgress(COURSE_ID, MODULE_ID);
    var completeBtn = document.querySelector("[data-complete]");
    var gateMsg = document.querySelector("[data-gate-msg]");
    if (completeBtn) {{
      completeBtn.addEventListener("click", function () {{
        var tryDone = document.querySelector("[data-try-done]");
        var caseDone = document.querySelector("[data-case-done]");
        var checkDone = document.querySelector("[data-check-done]");
        if (!tryDone || tryDone.value !== "1" || !caseDone || caseDone.value !== "1" || !checkDone || checkDone.value !== "1") {{
          if (gateMsg) {{ gateMsg.hidden = false; gateMsg.textContent = "Complete Try it, Case it and Check before finishing this module."; }}
          var target = document.querySelector("#try");
          if (tryDone && tryDone.value === "1") target = document.querySelector("#case");
          if (tryDone && tryDone.value === "1" && caseDone && caseDone.value === "1") target = document.querySelector("#check");
          if (target) target.scrollIntoView({{ behavior: "smooth", block: "start" }});
          return;
        }}
        if (P) P.markComplete(COURSE_ID, MODULE_ID);
        location.href = NEXT;
      }});
    }}
  }})();
  </script>
</body>
</html>
'''


def hub_html(course):
    rel = "../../../"
    cards = []
    for i, m in enumerate(course["modules"], 1):
        cards.append(f'''<article class="learn-module-card" data-module="{m["id"]}">
            <div class="learn-module-num">{i}</div>
            <div class="learn-module-copy">
              <h3>{esc(m["title"])}</h3>
              <p>{esc(m["objective"])}</p>
              <span class="learn-status" data-status>Not started</span>
            </div>
            <a class="learn-btn learn-btn-ghost" href="{m["id"]}/index.html" data-module-cta>Start</a>
          </article>''')
    ids = ",".join(f'"{m["id"]}"' for m in course["modules"])
    img = asset(course["image"], rel)
    return f'''<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <title>{esc(course["title"])} | PixtoLearn Academy</title>
  <meta name="description" content="{esc(course["summary"])}" />
  <link rel="icon" href="{rel}assets/brand/favicon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..800&family=Figtree:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../../css/academy-learn.css" />
</head>
<body class="learn-body">
  <a class="learn-skip" href="#main">Skip to content</a>
  <header class="learn-header">
    <div class="learn-wrap learn-nav">
      <a class="learn-brand" href="../../index.html"><img src="{rel}assets/brand/logo.png" alt="PixtoLearn" />
        <span class="learn-brand-text"><strong>Academy</strong><span>Course</span></span></a>
      <ul class="learn-nav-links">
        <li><a href="../../index.html">Dashboard</a></li>
        <li><a href="../../catalog.html">Catalogue</a></li>
        <li><a href="{rel}account.html">Account</a></li>
      </ul>
    </div>
  </header>
  <main id="main">
    <section class="learn-hero course-hub-hero">
      <div class="learn-wrap course-hub-hero-grid">
        <div>
          <p class="learn-eyebrow">{esc(course["tag"])} | {esc(course["product"])}</p>
          <h1>{esc(course["title"])}</h1>
          <p class="lede">{esc(course["summary"])}</p>
          <div class="learn-progress" style="max-width:28rem;margin-top:1.1rem">
            <div class="learn-progress-meta"><span data-progress-label>0 of {len(course["modules"])} modules</span><span data-progress-pct>0%</span></div>
            <div class="learn-progress-bar" aria-hidden="true"><span data-progress-bar style="width:0%"></span></div>
          </div>
          <div class="learn-hero-actions">
            <a class="learn-btn learn-btn-primary" href="{course["modules"][0]["id"]}/index.html" data-start-cta>Start Module 1</a>
            <a class="learn-btn learn-btn-ghost" href="../../catalog.html">Catalogue</a>
          </div>
        </div>
        <figure class="course-hub-hero-media"><img src="{esc(img)}" alt="" /></figure>
      </div>
    </section>
    <section class="learn-section"><div class="learn-wrap">
      <div class="learn-section-head"><div><p class="learn-eyebrow">Pathway</p><h2>Modules</h2></div></div>
      <div class="learn-module-list">{''.join(cards)}</div>
    </div></section>
  </main>
  <footer class="learn-footer"><div class="learn-wrap learn-footer-inner"><span>PixtoLearn Academy</span><a href="../../index.html">Dashboard</a></div></footer>
  <script src="../../js/progress.js"></script>
  <script>
  (function(){{
    var COURSE_ID = "{course["id"]}";
    var MODULE_IDS = [{ids}];
    var P = window.PixtoAcademyProgress; if (!P) return;
    var prog = P.getProgress(COURSE_ID, MODULE_IDS);
    var label = document.querySelector("[data-progress-label]");
    var pct = document.querySelector("[data-progress-pct]");
    var bar = document.querySelector("[data-progress-bar]");
    if (label) label.textContent = prog.completed + " of " + prog.total + " modules";
    if (pct) pct.textContent = prog.percent + "%";
    if (bar) bar.style.width = prog.percent + "%";
    var start = document.querySelector("[data-start-cta]");
    if (start && prog.nextId) {{ start.href = prog.nextId + "/index.html"; start.textContent = prog.percent === 0 ? "Start Module 1" : "Continue learning"; }}
    document.querySelectorAll("[data-module]").forEach(function(card){{
      var id = card.getAttribute("data-module");
      var st = P.getModuleStatus(COURSE_ID, id);
      card.classList.add(P.statusClass(st));
      var statusEl = card.querySelector("[data-status]");
      if (statusEl) statusEl.textContent = P.statusLabel(st);
      var cta = card.querySelector("[data-module-cta]");
      if (cta) {{
        cta.textContent = st === "completed" ? "Review" : st === "in-progress" ? "Continue" : "Start";
        cta.className = "learn-btn " + (prog.nextId === id ? "learn-btn-primary" : "learn-btn-ghost");
      }}
    }});
  }})();
  </script>
</body>
</html>
'''


def outline_html(course):
    mods = []
    for i, m in enumerate(course["modules"], 1):
        rows = f"""
        <tr><th>Open</th><td>{esc(m["objective"])} | Use today: {esc(m["use_today"])}</td></tr>
        <tr><th>See it</th><td>{esc(m["see_title"])}. {esc(m["see_body"])}</td></tr>
        <tr><th>Get it</th><td>{esc("; ".join(k[0] for k in m["keys"]))}</td></tr>
        <tr><th>Try it</th><td>{esc(m["try"]["guide"])} ({m["try"]["type"]})</td></tr>
        <tr><th>Case it</th><td>{esc(m["case"]["stem"])}</td></tr>
        <tr><th>Take it</th><td>{esc(" / ".join(m["take"]))}</td></tr>
        <tr><th>Check</th><td>{esc(m["check"]["q"])}</td></tr>
        """
        mods.append(f'''<article class="curr-mod" id="m{i}">
      <h2>Module {i}: {esc(m["title"])}</h2>
      <p class="mod-time">About 10-15 minutes</p>
      <table class="curr-table">{rows}</table>
      <div class="curr-video"><strong>Video to film</strong>{esc(m["video_brief"])}</div>
    </article>''')
    toc = "".join(f'<li><a href="#m{i}">{i}. {esc(m["title"])}</a></li>' for i, m in enumerate(course["modules"], 1))
    return f'''<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <title>Outline | {esc(course["title"])}</title>
  <link rel="icon" href="../../assets/brand/favicon.png" />
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..800&family=Figtree:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../css/academy-learn.css" />
  <link rel="stylesheet" href="../css/curriculum-outline.css" />
</head>
<body class="learn-body">
  <header class="learn-header"><div class="learn-wrap learn-nav">
    <a class="learn-brand" href="../index.html"><img src="../../assets/brand/logo.png" alt="PixtoLearn" /><span class="learn-brand-text"><strong>Academy</strong><span>Curriculum</span></span></a>
    <ul class="learn-nav-links"><li><a href="index.html">All outlines</a></li><li><a href="../course/{course["id"]}/index.html">Open course</a></li></ul>
  </div></header>
  <main id="main" class="curr-wrap">
    <p class="learn-eyebrow">Launch course | production outline</p>
    <h1>{esc(course["title"])}</h1>
    <p class="lede">{esc(course["summary"])}</p>
    <div class="curr-meta">
      <div><strong>Product:</strong> {esc(course["product"])}</div>
      <div><strong>Modules:</strong> {len(course["modules"])}</div>
      <div><strong>Status:</strong> Content built in learn/course/{course["id"]}/ (videos pending where noted)</div>
    </div>
    <ol class="curr-toc">{toc}</ol>
    {''.join(mods)}
    <p><a class="learn-btn learn-btn-primary" href="../course/{course["id"]}/index.html">Open course hub</a>
    <a class="learn-btn learn-btn-ghost" href="index.html">All outlines</a></p>
  </main>
</body>
</html>
'''


def main():
    for course in COURSES:
        cdir = COURSE_DIR / course["id"]
        cdir.mkdir(parents=True, exist_ok=True)
        skip = set(course.get("skip_module_ids") or [])
        # Always write hub
        (cdir / "index.html").write_text(hub_html(course), encoding="utf-8")
        # Outline (for non-swim or all)
        outline_name = {
            "visual-teaching-foundations": "foundations-outline.html",
            "using-pixtolearn-packs-and-app": "packs-app-outline.html",
            "everyday-visual-routines-toddlers": "toddlers-routines-outline.html",
            "teaching-swimming-visual-systems": "swimming-visual-systems-outline.html",
        }[course["id"]]
        (CURR / outline_name).write_text(outline_html(course), encoding="utf-8")

        total = len(course["modules"])
        for i, mod in enumerate(course["modules"], 1):
            if mod["id"] in skip:
                continue
            mdir = cdir / mod["id"]
            mdir.mkdir(parents=True, exist_ok=True)
            html = module_html(course, mod, i, total, "../../../../")
            (mdir / "index.html").write_text(html, encoding="utf-8")
            print("wrote", course["id"], mod["id"])
        print("hub", course["id"])


if __name__ == "__main__":
    main()
