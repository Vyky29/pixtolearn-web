#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate Neurodiversity Visual Specialist full pathway (modules 1-15).

Parts A-D: foundations, tools, setting labs, mastery + optional Practitioner.
Uses Academy Open-Check gold shell with progress.js + module-blocks.js.

ASCII punctuation only in generated learner copy (no em dashes).
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COURSE_DIR = ROOT / "course" / "neurodiversity-visual-specialist"
COURSE_ID = "neurodiversity-visual-specialist"



def asset_mod(path: str) -> str:
    """Module page depth: course/id/module-n/ -> ../../../../assets/..."""
    if path.startswith("/assets/"):
        return "../../../../" + path.lstrip("/")
    if path.startswith("/"):
        return "../../../../" + path.lstrip("/")
    return path


def asset_hub(path: str) -> str:
    if path.startswith("/assets/"):
        return "../../../" + path.lstrip("/")
    if path.startswith("/"):
        return "../../../" + path.lstrip("/")
    return path

def esc(s: str) -> str:
    return (
        s.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )


COURSE = {
    "id": COURSE_ID,
    "title": "Neurodiversity Visual Specialist",
    "subtitle": "Visual Awareness for Neurodiverse and Non-Verbal Learners",
    "tag": "Level 2 flagship",
    "product": "Packs + WOW + Keyring + App",
    "summary": (
        "Visual Awareness for neurodiverse and non-verbal learners. "
        "Full specialist pathway: foundations, tools, setting labs, behaviour, teams, capstone and optional Practitioner."
    ),
    "image": "/assets/icons/audience/occupational-therapist.jpg",
    "modules": [
        # ----- PART A -----
        {
            "id": "module-1",
            "part": "A",
            "title": "Neurodiversity, communication and visual access",
            "minutes": "25-35",
            "objective": (
                "Explain neurodiversity and non-verbal communication in practical teaching terms, "
                "and treat visuals as access tools, not rewards."
            ),
            "use_today": "Fill one learner snapshot: strengths, sensory notes, communication preferences.",
            "see_title": "Talk-heavy vs short cue + visual",
            "see_body": (
                "Watch the same moment twice: long verbal instructions, then a short cue with a clear next card."
            ),
            "video_brief": (
                "Consented clip: learner looks away during long talk; then engages when shown a clear next card. "
                "60-75s. Subtitles. No diagnostic labels on screen."
            ),
            "poster": "/assets/icons/audience/occupational-therapist.jpg",
            "photo": "/assets/icons/audience/occupational-therapist.jpg",
            "photo_cap": "Visuals create access. They are not decoration or bribes.",
            "keys": [
                ("Processing differences", "Speed, sensory load and prediction needs vary. Teach for access."),
                ("Communication beyond speech", "Gesture, AAC, behaviour and body language all count."),
                ("Visuals as access", "Never use visuals as reward, bribe or punishment."),
            ],
            "try": {
                "type": "match",
                "guide": "Match each statement to helpful or unhelpful.",
                "left": [
                    ("a", '"Non-verbal means they cannot communicate."'),
                    ("b", "Show the next card, then wait."),
                    ("c", "Remove favourite cards after \"bad behaviour\"."),
                ],
                "right": [
                    ("a", "Unhelpful assumption"),
                    ("b", "Helpful practice"),
                    ("c", "Unhelpful / harmful"),
                ],
            },
            "case": {
                "scene": "/assets/photos/workshop.jpg",
                "cap": "A multi-step verbal instruction falls apart mid-task.",
                "stem": (
                    'Staff say "he understands everything if he wants to" after a meltdown during long verbal instructions. '
                    "What is the strongest first move?"
                ),
                "options": [
                    ("a", "Push the same verbal script louder and faster."),
                    ("b", "Switch to a short cue plus one clear next visual, then wait.", True),
                    ("c", "Withhold preferred visuals until compliance returns."),
                ],
                "ok": "Yes. Reduce verbal load and give visual access. Do not punish with the system.",
                "bad": "Louder speech or removing visuals increases load and shame. Lead with access.",
            },
            "take": [
                "Write a one-page learner snapshot (strengths, sensory, communication)",
                "List three unhelpful assumptions you will stop using",
                "Agree with one teammate: visuals stay available, never withheld",
            ],
            "product_href": "/routines.html",
            "product_img": "/assets/packs/wow-1.png",
            "product_title": "WOW and Packs support access",
            "product_sub": "Physical cards make the next step visible across settings.",
            "check": {
                "q": "Visual support for neurodiverse or non-verbal learners works best when it is:",
                "options": [
                    ("a", "A reward earned after compliance"),
                    ("b", "An access tool that makes the next step knowable", True),
                    ("c", "A replacement for all human connection"),
                ],
                "ok": "Correct. Visuals are access, not bribes.",
                "bad": "Keep the dignity rule: access first, never punishment.",
            },
        },
        {
            "id": "module-2",
            "part": "A",
            "title": "Sensory load and environment design",
            "minutes": "25-35",
            "objective": (
                "Spot sensory overload sources and redesign the environment so one visual focus can land."
            ),
            "use_today": "Audit your main setting: mark 5 overload risks and 3 quick fixes.",
            "see_title": "Cluttered space vs one focus strip",
            "see_body": "Compare a busy wall with a stripped focus strip and quieter background.",
            "video_brief": (
                "Camera pans cluttered support space, then the same space with one sequence strip. "
                "60-75s. Mute-friendly cut."
            ),
            "poster": "/assets/photos/workshop.jpg",
            "photo": "/assets/photos/workshop.jpg",
            "photo_cap": "Reduce load before you add teaching demand.",
            "keys": [
                ("Load sources", "Noise, light, proximity, clutter and competing displays."),
                ("One visual focus", "Strip, stand, keyring or App Focus. Hide the rest."),
                ("Reset by setting", "Home, classroom, therapy room, changing room, poolside each need a quick reset."),
            ],
            "try": {
                "type": "match",
                "guide": "Match each problem to the best first fix.",
                "left": [
                    ("a", "40 laminated cards on one wall"),
                    ("b", "Echo, whistle and three adults talking poolside"),
                    ("c", "Morning sequence buried behind fridge magnets"),
                ],
                "right": [
                    ("a", "Cut to one short strip for the current task"),
                    ("b", "Reduce people talk; show 1-4 cards only"),
                    ("c", "Place WOW at eye line, clear and fixed"),
                ],
            },
            "case": {
                "scene": "/assets/photos/ghana-1.jpg",
                "cap": "A noisy pool edge with too many competing cues.",
                "stem": "A learner covers their ears. An adult increases verbal volume. What should happen first?",
                "options": [
                    ("a", "Keep teaching the skill with louder instructions."),
                    ("b", "Reduce demand and sensory load, then return to one visual focus.", True),
                    ("c", "Add more cards so every rule is visible at once."),
                ],
                "ok": "Yes. Reduce before teach. Volume is not a visual strategy.",
                "bad": "More speech or more cards on overload makes things worse.",
            },
            "take": [
                "Photograph one overloaded station",
                "Hide or remove three competing visuals",
                "Set one active focus strip for tomorrow's first routine",
            ],
            "product_href": "/product-stands-holder.html",
            "product_img": "/assets/packs/shop-full.png",
            "product_title": "Stands and Packs keep one focus",
            "product_sub": "Place the active strip where the learner can see it without clutter.",
            "check": {
                "q": "When sensory overload is clear, what should you do first?",
                "options": [
                    ("a", "Add a longer teaching sequence"),
                    ("b", "Reduce load, then teach with one visual focus", True),
                    ("c", "Remove preferred visuals until they calm"),
                ],
                "ok": "Correct. Reduce, then teach.",
                "bad": "Teaching harder into overload rarely works.",
            },
        },
        {
            "id": "module-3",
            "part": "A",
            "title": "The visual toolkit that reduces uncertainty",
            "minutes": "30-40",
            "objective": (
                "Choose the right visual type (first-then, schedule, skill sequence, finished, wait, help, break, choice) "
                "and keep sequences short enough to use."
            ),
            "use_today": "Build one first-then and one 4-step sequence for this week.",
            "see_title": "Build first-then, then a short skill sequence",
            "see_body": "Hands build a first-then and a 4-step sequence, then a learner follows at a door or table.",
            "video_brief": (
                "Hands build first-then, then a 4-step sequence with PixtoLearn-style cards; cut to learner following. "
                "75s. Product visible but not salesy."
            ),
            "poster": "/assets/photos/library/dsc_0764.jpg",
            "photo": "/assets/photos/library/dsc_0764.jpg",
            "photo_cap": "Uncertainty drives anxiety. Short systems make the next step knowable.",
            "keys": [
                ("Match type to need", "Transition, full session, skill, wait, help or break each need a different tool."),
                ("Short beats complete", "Three to five steps beat a 12-card monster."),
                ("Finished must be real", "Help and break stay available. Never earn access to the system."),
            ],
            "try": {
                "type": "match",
                "guide": "Match each learner need to the best visual type.",
                "left": [
                    ("a", "Short bridge into an activity"),
                    ("b", "Teach one coat or wash skill"),
                    ("c", "Rising load; needs a dignified exit"),
                ],
                "right": [
                    ("a", "First-then"),
                    ("b", "Skill sequence (3-5 steps)"),
                    ("c", "Break / help cards"),
                ],
            },
            "case": {
                "scene": "/assets/icons/audience/families.jpg",
                "cap": "A leaving-the-house strip with too many cards.",
                "stem": "A family uses 20 cards for leaving the house. The child freezes at shoes. What should you do?",
                "options": [
                    ("a", "Add more detail cards so nothing is missed."),
                    ("b", "Cut to a first-then or 3-5 essential leaving steps.", True),
                    ("c", "Replace all cards with a long spoken checklist."),
                ],
                "ok": "Yes. Cut to what reduces uncertainty for this moment.",
                "bad": "More steps or more talk usually increases freeze.",
            },
            "take": [
                "Build one first-then for a hard transition",
                "Build one 4-step skill sequence",
                "Add finished + help or break to the same strip or keyring",
            ],
            "product_href": "/product-keyring.html",
            "product_img": "/assets/packs/wow-1.png",
            "product_title": "Keyring and WOW for micro systems",
            "product_sub": "Carry first-then, help, break and finished where life happens.",
            "check": {
                "q": "Best system for a short transition into an activity?",
                "options": [
                    ("a", "A full-day schedule with every detail"),
                    ("b", "A first-then (or now-next) with a real finished", True),
                    ("c", "A reward chart used as punishment later"),
                ],
                "ok": "Correct. Short transition tools reduce uncertainty fast.",
                "bad": "Match the tool to the need. Keep it short and usable.",
            },
        },
        # ----- PART B -----
        {
            "id": "module-4",
            "part": "B",
            "title": "Packs, WOW cards and App as one system",
            "minutes": "30-40",
            "objective": (
                "Use Packs, WOW, Keyring and App Focus as one shared visual language, not three separate habits."
            ),
            "use_today": "Write a same-language plan: which tool lives where for one learner this month.",
            "see_title": "Same symbols across home, bag and rehearsal",
            "see_body": "See WOW at home, a Keyring out of home, and App Focus rehearsing the same next step.",
            "video_brief": (
                "Mini tour: WOW morning strip, Keyring in bag, App Focus preview. Same symbols. 75-90s."
            ),
            "poster": "/assets/photos/hero-app.jpg",
            "photo": "/assets/packs/wow-1.png",
            "photo_cap": "One language. Different places. Same next step.",
            "keys": [
                ("Packs for place-based wet/skill work", "Waterproof sequences where water or wet hands matter."),
                ("WOW for everyday life", "Morning, leaving, meals, hygiene, bedtime at learner height."),
                ("App for portable Focus", "Rehearse and share the same strip before hard environments."),
            ],
            "try": {
                "type": "match",
                "guide": "Match each moment to the best PixtoLearn tool.",
                "left": [
                    ("a", "Poolside skill strip"),
                    ("b", "Bedtime wind-down at home"),
                    ("c", "Preview tomorrow's hard outing tonight"),
                ],
                "right": [
                    ("a", "Swimming Packs / waterproof cards"),
                    ("b", "WOW Routine Cards"),
                    ("c", "App Focus"),
                ],
            },
            "case": {
                "scene": "/assets/photos/hero-app.jpg",
                "cap": "Home, school and pool using different drawings for the same step.",
                "stem": (
                    "Home uses WOW. The pool instructor invents new drawings each week. "
                    "What strengthens the system?"
                ),
                "options": [
                    ("a", "Let every adult invent their own pictures."),
                    ("b", "Agree a shared symbol set and share a photo or App copy of the strip.", True),
                    ("c", "Stop visuals at home so the learner \"adapts\" to the pool."),
                ],
                "ok": "Yes. Shared language across adults reduces uncertainty.",
                "bad": "Inventing new symbols every week recreates the problem.",
            },
            "take": [
                "Map tools: home (WOW), outings (Keyring), wet/skill (Packs), rehearsal (App)",
                "Photograph one active strip for handover",
                "Mirror that strip in App Focus for one week",
            ],
            "product_href": "/app.html",
            "product_img": "/assets/photos/hero-app.jpg",
            "product_title": "PixtoLearn App Focus",
            "product_sub": "Rehearse the same sequence before the hard environment.",
            "check": {
                "q": "What makes Packs, WOW and App one system?",
                "options": [
                    ("a", "Using different symbols in every setting"),
                    ("b", "Shared symbols, clear placement, and a portable Focus copy", True),
                    ("c", "Using the App only as entertainment video"),
                ],
                "ok": "Correct. Same language, different places.",
                "bad": "Separate habits without shared symbols are not a system.",
            },
        },
        {
            "id": "module-5",
            "part": "B",
            "title": "AAC-friendly visuals and communication pairing",
            "minutes": "25-35",
            "objective": (
                "Pair visual teaching cards with the learner's communication method without blocking AAC."
            ),
            "use_today": "Write a pairing plan: task sequence + how the learner requests help or break.",
            "see_title": "Sequence plus a way to request help",
            "see_body": "An adult models the next step card and offers a choice or AAC opportunity for help or finished.",
            "video_brief": (
                "Consented therapy or home clip: task sequence + learner requests help or finished. "
                "On-screen note: follow the learner's AAC plan. 60-75s."
            ),
            "poster": "/assets/icons/audience/occupational-therapist.jpg",
            "photo": "/assets/icons/audience/occupational-therapist.jpg",
            "photo_cap": "Teaching visuals and AAC work together. Do not choose one against the other.",
            "keys": [
                ("Different jobs", "Sequences teach tasks. AAC / choice boards support expression."),
                ("Never block AAC", "Do not remove a device \"so they focus on the cards\"."),
                ("Shared vocabulary", "Agree words across home, school and therapy for the same card."),
            ],
            "try": {
                "type": "match",
                "guide": "Sort each tool by its job.",
                "left": [
                    ("a", "Four-step handwashing strip"),
                    ("b", "Board to request help / break / finished"),
                    ("c", "Sticker chart earned only after compliance"),
                ],
                "right": [
                    ("a", "Teaching sequence"),
                    ("b", "Communication / AAC support"),
                    ("c", "Not a teaching visual (avoid as control)"),
                ],
            },
            "case": {
                "scene": "/assets/photos/ghana-1.jpg",
                "cap": "A pool session where communication tools were put away.",
                "stem": 'Staff remove an AAC device "so they focus on the cards". What should happen?',
                "options": [
                    ("a", "Keep the device away until the skill is finished."),
                    ("b", "Keep AAC available and pair it with the teaching sequence (waterproof plan if needed).", True),
                    ("c", "Replace AAC permanently with swimming cards only."),
                ],
                "ok": "Yes. Pairing, not blocking. Plan for wet environments.",
                "bad": "Removing AAC for \"focus\" blocks communication access.",
            },
            "take": [
                "List teaching sequence vs communication tools for one learner",
                "Agree vocabulary for three key cards with the team",
                "Plan a wet or out-of-home AAC alternative if needed",
            ],
            "product_href": "/product-keyring.html",
            "product_img": "/assets/packs/wow-1.png",
            "product_title": "Help and break on the Keyring",
            "product_sub": "Keep request options available beside the teaching strip.",
            "check": {
                "q": "Correct relationship between visual teaching and AAC?",
                "options": [
                    ("a", "Visual teaching replaces AAC"),
                    ("b", "They work together: sequences for tasks, AAC for expression", True),
                    ("c", "AAC should be removed during all teaching"),
                ],
                "ok": "Correct. Pair them. Never block communication.",
                "bad": "Access to communication stays. Teaching visuals do a different job.",
            },
        },
        {
            "id": "module-6",
            "part": "B",
            "title": "Regulation first: calm before teaching",
            "minutes": "30-40",
            "objective": (
                "Prioritise co-regulation and known visual routines when a learner is dysregulated, "
                "then re-enter teaching with a shorter demand."
            ),
            "use_today": "Write a regulation plan: early signs + known calming visual routine.",
            "see_title": "Push through vs return to known calm visuals",
            "see_body": "Two endings of the same rising moment: force the skill, or return to a known calm visual.",
            "video_brief": (
                "Two endings, acted carefully or consented real calm recovery: push through vs return to finished/calm visual. "
                "75-90s. Prefer recovery, not spectacle."
            ),
            "poster": "/assets/icons/audience/families.jpg",
            "photo": "/assets/icons/audience/families.jpg",
            "photo_cap": "New skills cannot land on a nervous system in survival mode.",
            "keys": [
                ("Read early signs", "Body, voice, withdrawal and refusal are information."),
                ("Known visuals only", "Break, finished and calm routines beat new skill strips in escalation."),
                ("Re-enter gently", "Shorten the demand, return to first-then, celebrate recovery without shame."),
            ],
            "try": {
                "type": "sequence",
                "guide": "Order the regulation ladder. Tap a step to move it up.",
                "items": [
                    "Notice early signs",
                    "Reduce demand",
                    "Use known calm / break visuals",
                    "Re-enter with a shorter first-then",
                ],
                "ok": "Clear order: notice, reduce, regulate, then re-enter.",
                "bad": "Not yet. Regulation before new teaching.",
            },
            "case": {
                "scene": "/assets/photos/ghana-1.jpg",
                "cap": "A learner withdraws mid skill in a busy lesson.",
                "stem": (
                    "A learner hits or withdraws mid skill. The adult pushes to \"finish the set\". "
                    "What should you prioritise?"
                ),
                "options": [
                    ("a", "Finish the set at all costs so standards stay high."),
                    ("b", "Reduce demand, use known regulation visuals, teach later.", True),
                    ("c", "Remove preferred visuals until they finish."),
                ],
                "ok": "Yes. Regulate first. Teaching returns when access is possible again.",
                "bad": "Pushing or punishing with visuals escalates survival mode.",
            },
            "take": [
                "List early signs for one learner",
                "Prepare a known calm / break visual kit",
                "Agree with the team: no new skill strips during escalation",
            ],
            "product_href": "/routines.html",
            "product_img": "/assets/packs/wow-1.png",
            "product_title": "WOW calm and finished routines",
            "product_sub": "Known everyday visuals are the safest regulation anchors.",
            "check": {
                "q": "What do you prioritise when a learner is clearly dysregulated?",
                "options": [
                    ("a", "New skill teaching to \"push through\""),
                    ("b", "Reduce demand and use known regulation visuals", True),
                    ("c", "Withhold visuals until behaviour improves"),
                ],
                "ok": "Correct. Calm before teaching.",
                "bad": "Survival mode is not a teaching window.",
            },
        },
        # ----- PART C -----
        {
            "id": "module-7",
            "part": "C",
            "title": "Home and family life with WOW",
            "minutes": "30-40",
            "objective": (
                "Install calmer everyday routines with WOW cards at learner height, "
                "and keep family consistency when the house gets busy."
            ),
            "use_today": "Place one WOW routine (3-5 steps) at learner height in a fixed spot.",
            "see_title": "Morning strip at shoe height",
            "see_body": "See a short leaving-the-house WOW strip used in the same place every day, not buried in a drawer.",
            "video_brief": (
                "Home: parent points to a 4-step WOW leaving strip at shoe zone; child follows with almost no talk. "
                "75s. Consent and dignity first."
            ),
            "poster": "/assets/icons/audience/families.jpg",
            "photo": "/assets/packs/wow-1.png",
            "photo_cap": "Same place every day. Three to five steps. WOW does the talking.",
            "keys": [
                ("Place it where life happens", "Mirror edge, bedroom door, shoe zone, clear fridge side."),
                ("Short routines win", "Morning, leaving, meals, hygiene, bedtime: 3-5 steps max."),
                ("Handover for chaos days", "Photo or App copy for babysitter, grandparent or visitor days."),
            ],
            "try": {
                "type": "match",
                "guide": "Match each home moment to the best visual move.",
                "left": [
                    ("a", "Parent narrates 12 morning steps; child sits on floor"),
                    ("b", "Toothbrushing cards live in a drawer"),
                    ("c", "Weekend visitors; adults improvise"),
                ],
                "right": [
                    ("a", "Cut to a 3-5 step WOW strip"),
                    ("b", "Place WOW at sink height every night"),
                    ("c", "Use a simplified strip + photo handover"),
                ],
            },
            "case": {
                "scene": "/assets/icons/audience/families.jpg",
                "cap": "Leaving for school needs a bridge, not a full-day wall.",
                "stem": "Leaving for school keeps failing at shoes. What is the strongest visual move?",
                "options": [
                    ("a", "Post a full-day schedule with every detail by the door."),
                    ("b", "Use a first-then or short leaving strip at the shoe zone.", True),
                    ("c", "Stop using cards so the child learns to \"just hurry\"."),
                ],
                "ok": "Yes. Match the tool to the moment. Leaving needs a short bridge.",
                "bad": "A full-day wall or no system will not fix the shoe freeze.",
            },
            "take": [
                "Choose one home routine to fix this week",
                "Build a 3-5 step WOW strip and place it at learner height",
                "Send a photo of the strip to one other adult who helps",
            ],
            "product_href": "/routines.html",
            "product_img": "/assets/packs/wow-1.png",
            "product_title": "WOW Routine Cards",
            "product_sub": "Everyday sequences for home and early years at learner height.",
            "check": {
                "q": "Best practice for home WOW routines?",
                "options": [
                    ("a", "Keep cards in a drawer until there is a meltdown"),
                    ("b", "Short strip, fixed place, shared with other adults", True),
                    ("c", "Twenty cards for every possible detail every morning"),
                ],
                "ok": "Correct. Short, placed, shared.",
                "bad": "Hidden or overloaded systems do not reduce uncertainty.",
            },
        },
        {
            "id": "module-8",
            "part": "C",
            "title": "School, early years and classroom",
            "minutes": "30-40",
            "objective": (
                "Use visual systems for arrival, lessons, transitions and group time "
                "without turning the room into visual noise."
            ),
            "use_today": "Add one personal first-then or desk strip for a learner who freezes at a transition.",
            "see_title": "Personal strip beside a class schedule",
            "see_body": "A dense whole-class timetable stays on the wall. One learner also has a short personal first-then at desk height.",
            "video_brief": (
                "Classroom: arrival settle sequence, then playground-return first-then. TA points and waits. "
                "75s. Subtitles."
            ),
            "poster": "/assets/photos/workshop.jpg",
            "photo": "/assets/photos/workshop.jpg",
            "photo_cap": "Class schedule plus personal strip. Not forty competing posters.",
            "keys": [
                ("Layer, do not flood", "Whole-class visuals plus a personal short strip when needed."),
                ("Transitions are the risk", "Arrival, playground return, lunch, taxi: pre-teach with Focus."),
                ("Dignified exits", "Break cards beat shame removals from group time."),
            ],
            "try": {
                "type": "match",
                "guide": "Match each school problem to the best visual response.",
                "left": [
                    ("a", "Whole-class timetable too dense for one learner"),
                    ("b", "Supply teacher day with no portable system"),
                    ("c", "Meltdown every playground return"),
                ],
                "right": [
                    ("a", "Add a personal first-then / desk strip"),
                    ("b", "Keyring or App photo handover pack"),
                    ("c", "Pre-teach transition + short return strip"),
                ],
            },
            "case": {
                "scene": "/assets/photos/workshop.jpg",
                "cap": "A TA talks over the card every two seconds.",
                "stem": "A learner has a clear desk strip, but the TA narrates every micro-step. What should change first?",
                "options": [
                    ("a", "Remove the strip so the learner listens harder."),
                    ("b", "Point to the card, wait, and fade verbal prompts.", True),
                    ("c", "Add more cards so every micro-step is printed."),
                ],
                "ok": "Yes. The visual only works if adults stop drowning it in talk.",
                "bad": "More talk or more cards increases load.",
            },
            "take": [
                "Pick one school transition that fails most weeks",
                "Build a personal first-then and place it at learner height",
                "Share an App or photo pack for supply / cover staff",
            ],
            "product_href": "/product-keyring.html",
            "product_img": "/assets/packs/wow-1.png",
            "product_title": "Keyring for portable school moments",
            "product_sub": "First-then, help and break that travel between rooms.",
            "check": {
                "q": "How do you avoid visual noise in a classroom?",
                "options": [
                    ("a", "Cover every wall with laminated rules"),
                    ("b", "Keep class visuals lean and add a short personal strip when needed", True),
                    ("c", "Use only long verbal scripts for transitions"),
                ],
                "ok": "Correct. Lean class system plus personal access.",
                "bad": "More wall noise is not more support.",
            },
        },
        {
            "id": "module-9",
            "part": "C",
            "title": "Therapy and clinical-adjacent settings",
            "minutes": "25-35",
            "objective": (
                "Keep therapy sessions predictable with a start / work / break / finished strip, "
                "and hand the same symbols to family and school. Educational method only: do not diagnose."
            ),
            "use_today": "Build a four-part session strip and send a photo of it to the family.",
            "see_title": "Session strip before materials appear",
            "see_body": "A therapist shows start-work-break-finished, hides unused toys, then teaches one short skill sequence.",
            "video_brief": (
                "Clinic: session strip on table, materials hidden, one skill taught with minimal talk. "
                "End with photo handover. 60-75s. On-screen: follow the learner's clinical plans."
            ),
            "poster": "/assets/icons/audience/occupational-therapist.jpg",
            "photo": "/assets/icons/audience/occupational-therapist.jpg",
            "photo_cap": "Predictable session structure. Same symbols go home.",
            "keys": [
                ("Session skeleton", "Start, work, break, finished keeps the hour knowable."),
                ("Hide unused demand", "Visible toy mountains block starting."),
                ("Handover is the product", "Photo + App Focus beat a text-only home programme."),
            ],
            "try": {
                "type": "sequence",
                "guide": "Order a calm therapy session flow. Tap a step to move it up.",
                "items": [
                    "Show session strip",
                    "Hide unused materials",
                    "Teach one short skill sequence",
                    "Send photo / App handover home",
                ],
                "ok": "Clear flow: structure, reduce clutter, teach, then share.",
                "bad": "Not yet. Predictability before performance.",
            },
            "case": {
                "scene": "/assets/icons/audience/occupational-therapist.jpg",
                "cap": "A home programme arrives as a long paragraph.",
                "stem": "Family cannot run the home programme. What should the therapist send instead?",
                "options": [
                    ("a", "A longer written explanation with more detail."),
                    ("b", "A photo of the sequence plus App Focus using the same symbols.", True),
                    ("c", "No visuals, so the family relies on memory."),
                ],
                "ok": "Yes. Shared visuals travel better than paragraphs.",
                "bad": "More text without a strip rarely becomes practice at home.",
            },
            "take": [
                "Write a start / work / break / finished strip for your next session",
                "Hide or cover unused materials before the learner enters",
                "Send one photo or App copy to family or school the same day",
            ],
            "product_href": "/app.html",
            "product_img": "/assets/photos/hero-app.jpg",
            "product_title": "App Focus for therapy handover",
            "product_sub": "The same sequence the family can rehearse between sessions.",
            "check": {
                "q": "What is this module's clinical boundary?",
                "options": [
                    ("a", "It trains you to diagnose neurodivergence"),
                    ("b", "It is an educational visual method; follow existing clinical plans", True),
                    ("c", "It replaces speech and language therapy advice"),
                ],
                "ok": "Correct. Visual education, not diagnosis.",
                "bad": "Stay inside educational practice and team plans.",
            },
        },
        {
            "id": "module-10",
            "part": "C",
            "title": "Community, travel and appointments",
            "minutes": "30-40",
            "objective": (
                "Take visual awareness into shops, travel, waiting rooms and appointments "
                "with preview strips, wait/break options and change cards."
            ),
            "use_today": "Build one outing preview strip and rehearse it once in App Focus.",
            "see_title": "Preview tonight, Keyring tomorrow",
            "see_body": "A family rehearses a haircut or shop sequence on App Focus, then carries the same steps on a Keyring.",
            "video_brief": (
                "Bag Focus preview of a GP or shop visit, then Keyring wait/break/change cards in a bag. "
                "75s. No distress spectacle."
            ),
            "poster": "/assets/photos/hero-app.jpg",
            "photo": "/assets/packs/wow-1.png",
            "photo_cap": "Preview, wait, change, exit. Community success is still success.",
            "keys": [
                ("Preview the place", "What happens there strips reduce surprise."),
                ("Waiting needs a plan", "Wait card, break, headphones option, leave as valid success."),
                ("Change cards ready", "Closed shop, delay, different door: show the change, then the new next step."),
            ],
            "try": {
                "type": "match",
                "guide": "Match each community moment to the best visual tool.",
                "left": [
                    ("a", "Haircut cape goes on with no warning"),
                    ("b", "GP waiting room delay of 25 minutes"),
                    ("c", "Supermarket queue with no exit plan"),
                ],
                "right": [
                    ("a", "Preview strip including the cape step"),
                    ("b", "Change card + wait / break walk plan"),
                    ("c", "Wait + exit option on Keyring"),
                ],
            },
            "case": {
                "scene": "/assets/photos/hero-app.jpg",
                "cap": "An outing collapses when the plan changes.",
                "stem": "The bus is delayed and the learner escalates. What should adults show first?",
                "options": [
                    ("a", "A long spoken explanation of public transport policy."),
                    ("b", "A change card, then a short new next step (wait, break or leave).", True),
                    ("c", "Nothing visual, to toughen them up for real life."),
                ],
                "ok": "Yes. Name the change visually, then the next step.",
                "bad": "More talk without a change path increases panic.",
            },
            "take": [
                "Pick one real outing this week",
                "Build a preview strip and rehearse it in App Focus",
                "Pack Keyring: wait, break, change, finished / leave",
            ],
            "product_href": "/product-keyring.html",
            "product_img": "/assets/packs/wow-1.png",
            "product_title": "Keyring for community micro moments",
            "product_sub": "Wait, help, break and change cards that travel in the bag.",
            "check": {
                "q": "What makes a community visual system work?",
                "options": [
                    ("a", "Improvising new drawings at every shop"),
                    ("b", "Preview, portable cards, and a plan for change or exit", True),
                    ("c", "Forcing the full plan even when overload is clear"),
                ],
                "ok": "Correct. Preview plus portable options.",
                "bad": "Rigid plans without change or exit paths fail outside.",
            },
        },
        {
            "id": "module-11",
            "part": "C",
            "title": "Pool and leisure with visual structure",
            "minutes": "30-40",
            "objective": (
                "Apply PixtoLearn visual systems in wet, noisy leisure settings: changing room, pool entry, "
                "short poolside strips and regulation. This is the visual layer, not full aquatic pedagogy."
            ),
            "use_today": "Build a changing-room first-then and a 3-5 card poolside strip on a stand.",
            "see_title": "Changing room bridge, then a lean poolside strip",
            "see_body": "A learner moves through a short changing-room sequence, then sees three waterproof cards on a stand poolside.",
            "video_brief": (
                "Changing room first-then, then poolside stand with 3-5 Packs cards; instructor points and waits. "
                "75s. End card: deep aquatic pedagogy is the co-brand Aquatic Pathway."
            ),
            "poster": "/assets/photos/ghana-1.jpg",
            "photo": "/assets/photos/library/dsc_0764.jpg",
            "photo_cap": "Visual layer in the pool. Co-brand pathway covers deep aquatic skills.",
            "keys": [
                ("Changing room first", "High anxiety zone needs its own short sequence."),
                ("Three to five cards poolside", "One strip on a stand beats eight cards in a fan."),
                ("Stop teaching when overloaded", "Known calm visuals beat whistle-and-shout."),
            ],
            "try": {
                "type": "match",
                "guide": "Match each pool problem to the best visual fix.",
                "left": [
                    ("a", "Weekly refusal to leave the changing room"),
                    ("b", "Instructor holds eight cards and talks over echo"),
                    ("c", "Sensory overload; whistle and shout follow"),
                ],
                "right": [
                    ("a", "Changing-room first-then / short entry strip"),
                    ("b", "Cut to 3-5 cards on a stand; short cues"),
                    ("c", "Reduce demand; use known calm visuals"),
                ],
            },
            "case": {
                "scene": "/assets/photos/ghana-1.jpg",
                "cap": "A parent adds verbal demand from the poolside.",
                "stem": "The learner is following a clear strip. A parent starts shouting extra instructions. What should happen?",
                "options": [
                    ("a", "Let both adults talk so the learner gets more information."),
                    ("b", "Agree one adult leads; keep the strip as the shared cue.", True),
                    ("c", "Remove the strip so the parent can take over verbally."),
                ],
                "ok": "Yes. One lead adult and one visual language.",
                "bad": "Competing voices recreate uncertainty even with good cards.",
            },
            "take": [
                "Write a changing-room first-then for your next session",
                "Prepare a 3-5 card poolside strip on a stand",
                "Agree parent / instructor roles before the lesson",
            ],
            "product_href": "/swimming.html",
            "product_img": "/assets/packs/shop-full.png",
            "product_title": "PixtoLearn Swimming Packs",
            "product_sub": "Waterproof visuals for entry, skills and calm poolside structure. Deep pedagogy: Aquatic Pathway co-brand.",
            "check": {
                "q": "What is this module's job in the Academy pathway?",
                "options": [
                    ("a", "Full stroke pedagogy and Pathway II skills progression"),
                    ("b", "The visual layer for pool and leisure; co-brand covers deep aquatic practice", True),
                    ("c", "Replace all swimming teaching with home WOW cards only"),
                ],
                "ok": "Correct. Visuals here; deep aquatic practice in the co-brand pathway.",
                "bad": "Keep the brand split clear: visuals vs pool pedagogy depth.",
            },
        },
        # ----- PART D -----
        {
            "id": "module-12",
            "part": "D",
            "title": "Behaviour as communication",
            "minutes": "30-40",
            "objective": (
                "Read common behaviours as messages and use visuals to prevent and respond without shame. "
                "Never use visuals as punishment."
            ),
            "use_today": "Add help and break cards before the hardest transition of the week.",
            "see_title": "Prevention before the hard moment",
            "see_body": "See a preferred activity ending with a visual warning and finished cue, versus an abrupt stop that triggers hitting or running.",
            "video_brief": (
                "Prevention focus: help/break card introduced before escalation; ending warned with visuals. "
                "60-75s. Avoid meltdown spectacle."
            ),
            "poster": "/assets/icons/audience/occupational-therapist.jpg",
            "photo": "/assets/icons/audience/families.jpg",
            "photo_cap": "Behaviour often says: too much, too fast, unclear, or no way to request a break.",
            "keys": [
                ("Behaviour is a message", "Too much, too fast, unclear, sensory pain, or no break path."),
                ("Prevent with visuals", "Warn before endings; keep help and break available."),
                ("Never punish with the system", "Do not remove preferred visuals after distress."),
            ],
            "try": {
                "type": "match",
                "guide": "Match each behaviour moment to the best visual response.",
                "left": [
                    ("a", "Runs at transition time"),
                    ("b", "Shutdown after long verbal overload"),
                    ("c", "Hits when a preferred activity ends with no warning"),
                ],
                "right": [
                    ("a", "First-then + help/break before the move"),
                    ("b", "Reduce talk; return to known calm strip"),
                    ("c", "Warn with visuals before endings; finished cue"),
                ],
            },
            "case": {
                "scene": "/assets/photos/workshop.jpg",
                "cap": "A team withholds favourite cards after distress.",
                "stem": 'A team removes favourite visuals "until behaviour improves". What should happen?',
                "options": [
                    ("a", "Keep them away so the learner learns consequences."),
                    ("b", "Restore access immediately; visuals are access, not punishment.", True),
                    ("c", "Replace all visuals with louder verbal warnings."),
                ],
                "ok": "Yes. Restore the system. Teach prevention next time, not shame.",
                "bad": "Withholding visuals trains fear of the support system.",
            },
            "take": [
                "List early signs and likely messages for one learner",
                "Place help and break where the hard moment usually starts",
                "Agree with the team: visuals are never removed as consequence",
            ],
            "product_href": "/product-keyring.html",
            "product_img": "/assets/packs/wow-1.png",
            "product_title": "Help and break on the Keyring",
            "product_sub": "Preventive request options that travel between settings.",
            "check": {
                "q": "Why must visuals never be used as punishment?",
                "options": [
                    ("a", "Because learners should earn every card"),
                    ("b", "Because visuals are access tools; removing them increases uncertainty and shame", True),
                    ("c", "Because punishment always works faster"),
                ],
                "ok": "Correct. Access stays. Prevention and repair come next.",
                "bad": "Punishment-with-visuals breaks trust in the system.",
            },
        },
        {
            "id": "module-13",
            "part": "D",
            "title": "Consistency across people and settings",
            "minutes": "25-35",
            "objective": (
                "Design one shared visual language across home, school, therapy, pool and respite, "
                "with clear handover tools and a system owner."
            ),
            "use_today": "Write a one-page shared system agreement for one learner.",
            "see_title": "Same strip in two settings",
            "see_body": "The same leaving or settle sequence appears at a home door and again with a TA or instructor, plus an App copy.",
            "video_brief": (
                "Mini tour: same visual language in two settings. End: Packs for place-based use, App for portable Focus. "
                "75-90s."
            ),
            "poster": "/assets/photos/hero-app.jpg",
            "photo": "/assets/photos/workshop.jpg",
            "photo_cap": "Inconsistency between adults recreates uncertainty.",
            "keys": [
                ("Shared symbols", "Same steps and words across adults."),
                ("Handover tools", "Photo of strip, vocabulary list, App copy, who may edit."),
                ("System owner", "One person keeps the minimum viable strip current."),
            ],
            "try": {
                "type": "match",
                "guide": "Match each team failure to the best fix.",
                "left": [
                    ("a", "Three adults, three different getting-ready sequences"),
                    ("b", "Respite carer invents random phone photos"),
                    ("c", "School blocks outside visuals; home and pool use PixtoLearn"),
                ],
                "right": [
                    ("a", "Agree one shared sequence and owner"),
                    ("b", "Give App / photo pack as source of truth"),
                    ("c", "Negotiate a minimum viable strip school will run"),
                ],
            },
            "case": {
                "scene": "/assets/icons/audience/families.jpg",
                "cap": "Mum, TA and instructor each use different steps.",
                "stem": "Three adults use three different sequences for the same transition. What makes it a system again?",
                "options": [
                    ("a", "Let each adult keep their favourite version."),
                    ("b", "Pick one shared strip, photograph it, and name who updates it.", True),
                    ("c", "Stop visuals everywhere so nobody disagrees."),
                ],
                "ok": "Yes. One strip, shared, owned.",
                "bad": "Multiple versions recreate the uncertainty you are trying to remove.",
            },
            "take": [
                "List every adult who supports one learner this week",
                "Choose one shared strip and photograph it",
                "Complete a one-page team agreement (owner, vocabulary, App copy)",
            ],
            "product_href": "/app.html",
            "product_img": "/assets/photos/hero-app.jpg",
            "product_title": "App as portable source of truth",
            "product_sub": "Same symbols for home, school, therapy and leisure handovers.",
            "check": {
                "q": "What makes a visual approach a system (not a one-off)?",
                "options": [
                    ("a", "One adult improvises differently each day"),
                    ("b", "Shared symbols, handover tools and a named owner", True),
                    ("c", "More posters in every room with no agreement"),
                ],
                "ok": "Correct. Shared, handed over, owned.",
                "bad": "Without consistency, cards are just clutter.",
            },
        },
        {
            "id": "module-14",
            "part": "D",
            "title": "Capstone lab: one learner, one visual plan",
            "minutes": "40-55",
            "objective": (
                "Produce a complete, usable visual support plan for one real learner "
                "that a new adult could run tomorrow without a meeting."
            ),
            "use_today": "Complete a full plan draft: snapshot, systems, regulation, products, team, 7-day trial.",
            "see_title": "Worked example plan",
            "see_body": "Walk through an anonymised plan covering home, school and one leisure setting with short strips and a product map.",
            "video_brief": (
                "Screencast of building the plan template plus two real photo inserts of a finished strip in situ. "
                "90s."
            ),
            "poster": "/assets/photos/workshop.jpg",
            "photo": "/assets/packs/wow-1.png",
            "photo_cap": "Clear, short, placed, shared, regulable, product-backed.",
            "keys": [
                ("Quality bar", "Specific enough for tomorrow's first routine."),
                ("Core systems only", "First-then + one routine + one skill + regulation kit."),
                ("Product map", "WOW, Packs, Keyring and App each have a place."),
            ],
            "try": {
                "type": "sequence",
                "guide": "Order the capstone build. Tap a step to move it up.",
                "items": [
                    "Learner snapshot",
                    "Environment fixes",
                    "Core visual systems",
                    "Team share + 7-day trial",
                ],
                "ok": "Clear build order: know the learner, fix the space, build systems, then share and trial.",
                "bad": "Not yet. Snapshot and environment before complex systems.",
            },
            "case": {
                "scene": "/assets/photos/workshop.jpg",
                "cap": "A weak plan with too many steps and no handover.",
                "stem": "A plan has 18 steps, no finished cue, no team share and unused products. What do you fix first?",
                "options": [
                    ("a", "Add more steps so nothing is missed."),
                    ("b", "Cut to short systems, add finished, map products and share with the team.", True),
                    ("c", "Keep the long plan private so nobody interferes."),
                ],
                "ok": "Yes. Short, finished, product-backed and shared.",
                "bad": "Long private plans rarely become tomorrow's practice.",
            },
            "take": [
                "Write snapshot + environment fixes for one learner",
                "Build first-then + one routine + one skill + regulation kit",
                "Map WOW / Packs / Keyring / App and share the plan with one teammate",
            ],
            "product_href": "/shop.html",
            "product_img": "/assets/packs/shop-full.png",
            "product_title": "Make the plan physical",
            "product_sub": "Packs, WOW and App turn the capstone into daily practice.",
            "check": {
                "q": "A strong capstone plan is ready when:",
                "options": [
                    ("a", "It is long, private and decorative"),
                    ("b", "A new adult could run tomorrow's first routine without a meeting", True),
                    ("c", "It lists every possible skill for the next year"),
                ],
                "ok": "Correct. Usable tomorrow is the standard.",
                "bad": "Length is not quality. Clarity and shareability are.",
            },
        },
        {
            "id": "module-15",
            "part": "D",
            "optional": True,
            "title": "Practitioner portfolio (optional)",
            "minutes": "45-60",
            "objective": (
                "Gather evidence for the PixtoLearn Practitioner (Neurodiversity Visual Specialist) pathway. "
                "This is a practice standard, not a clinical diagnosis licence."
            ),
            "use_today": "Start a portfolio checklist: redacted plan, placement photos, reflection, team agreement, consent.",
            "see_title": "What a Practitioner portfolio looks like",
            "see_body": "Review a redacted example: plan, photos of placement, 7-day reflection, team agreement and consent record.",
            "video_brief": (
                "Brand film: what a Practitioner represents and where Packs/App fit in professional practice. "
                "60s. Ethics note on consent and dignity."
            ),
            "poster": "/assets/photos/workshop.jpg",
            "photo": "/assets/icons/audience/occupational-therapist.jpg",
            "photo_cap": "Evidence of practice with consent and dignity. Not a clinical licence.",
            "keys": [
                ("Evidence list", "Plan, photos, reflection, team agreement, consent."),
                ("Ethics first", "Consent, dignity, no shame content, no public posting of distress."),
                ("Practice standard", "Shows you can run the method; it does not licence diagnosis."),
            ],
            "try": {
                "type": "match",
                "guide": "Sort each portfolio action as ethical or not ethical.",
                "left": [
                    ("a", "Post a distress video publicly to \"prove impact\""),
                    ("b", "Submit a redacted plan with consent recorded"),
                    ("c", "Share placement photos that protect identity"),
                ],
                "right": [
                    ("a", "Not ethical"),
                    ("b", "Ethical evidence"),
                    ("c", "Ethical evidence"),
                ],
            },
            "case": {
                "scene": "/assets/photos/workshop.jpg",
                "cap": "Consent is refused for photos.",
                "stem": "A family refuses photo evidence for the portfolio. What should you do?",
                "options": [
                    ("a", "Take photos anyway because the certificate needs them."),
                    ("b", "Respect refusal; use written description and redacted plan only.", True),
                    ("c", "Pressure the learner until they agree on camera."),
                ],
                "ok": "Yes. Consent is non-negotiable. Evidence adapts.",
                "bad": "Certificates never outrank dignity and consent.",
            },
            "take": [
                "List portfolio evidence you can gather ethically this month",
                "Confirm consent boundaries in writing with the family or setting",
                "Attach your Module 14 plan as the portfolio centrepiece",
            ],
            "product_href": "/academy.html#specialist",
            "product_img": "/assets/icons/audience/occupational-therapist.jpg",
            "product_title": "Neurodiversity Visual Specialist",
            "product_sub": "Practitioner track builds on the full pathway you just completed.",
            "check": {
                "q": "What does PixtoLearn Practitioner certification represent?",
                "options": [
                    ("a", "A licence to diagnose autism or learning disabilities"),
                    ("b", "A practice standard for visual support using PixtoLearn methods", True),
                    ("c", "Permission to post learner distress publicly"),
                ],
                "ok": "Correct. Practice standard, not clinical licence.",
                "bad": "Stay inside educational practice and ethics.",
            },
        },
    ],
}


def side_nav(active_id: str) -> str:
    items = []
    for i, m in enumerate(COURSE["modules"], 1):
        href = "index.html" if m["id"] == active_id else f"../{m['id']}/index.html"
        cur = ' aria-current="page"' if m["id"] == active_id else ""
        opt = " (optional)" if m.get("optional") else ""
        label = f"{i}. {m['title']}{opt}"
        if len(label) > 52:
            label = label[:49] + "..."
        items.append(f"<li><a href=\"{href}\"{cur}>{esc(label)}</a></li>")
    return "".join(items)


def try_html(mod: dict) -> str:
    t = mod["try"]
    mid = mod["id"]
    if t["type"] == "match":
        left = "".join(
            f'<button type="button" class="mod-match-item" data-match-pair="{esc(pid)}">{esc(lab)}</button>'
            for pid, lab in t["left"]
        )
        right = "".join(
            f'<button type="button" class="mod-match-item" data-match-pair="{esc(pid)}">{esc(lab)}</button>'
            for pid, lab in t["right"]
        )
        return f'''<section class="mod-block" id="try" data-block="match">
        <p class="mod-block-kicker">4. Try it</p>
        <h2>Interactive practice</h2>
        <p class="learn-activity-guide">{esc(t["guide"])}</p>
        <input type="hidden" data-block-done data-try-done value="0" />
        <div class="mod-match">
          <div class="mod-match-col" data-match-side="left"><h3>Need or example</h3>{left}</div>
          <div class="mod-match-col" data-match-side="right"><h3>Best match</h3>{right}</div>
        </div>
        <p class="learn-feedback" data-match-feedback hidden></p>
      </section>'''

    items = list(t["items"])
    display = items[1:] + items[:1]
    buttons = "".join(
        f'<button type="button" class="mod-match-item" data-seq="{items.index(lab)+1}">{esc(lab)}</button>'
        for lab in display
    )
    return f'''<section class="mod-block" id="try" data-block="sequence" data-feedback-ok="{esc(t["ok"])}" data-feedback-bad="{esc(t["bad"])}">
        <p class="mod-block-kicker">4. Try it</p>
        <h2>Interactive practice</h2>
        <p class="learn-activity-guide">{esc(t["guide"])}</p>
        <p class="mod-seq-hint">Tap a step to move it up until the order is right, then check.</p>
        <input type="hidden" data-block-done data-try-done value="0" />
        <div class="mod-seq-list" data-sequence-list>{buttons}</div>
        <button type="button" class="learn-btn learn-btn-amber" data-sequence-check>Check order</button>
        <p class="learn-feedback" data-sequence-feedback hidden></p>
      </section>'''


def case_html(mod: dict) -> str:
    c = mod["case"]
    name = f"case_{mod['id']}"
    parts = []
    for o in c["options"]:
        v, lab = o[0], o[1]
        correct = ' data-correct="1"' if len(o) > 2 and o[2] else ""
        parts.append(
            f'<label class="learn-option"><input type="radio" name="{name}" value="{esc(v)}"{correct} /> {esc(lab)}</label>'
        )
    opts = "".join(parts)
    return f'''<section class="mod-block" id="case" data-block="scenario" data-scenario-name="{name}" data-feedback-ok="{esc(c["ok"])}" data-feedback-bad="{esc(c["bad"])}">
        <p class="mod-block-kicker">5. Case it</p>
        <h2>What would you do?</h2>
        <div class="mod-case-scene">
          <figure>
            <img src="{esc(c["scene"])}" alt="" />
            <figcaption>{esc(c["cap"])}</figcaption>
          </figure>
          <div>
            <p class="learn-activity-q">{esc(c["stem"])}</p>
            <input type="hidden" data-block-done data-case-done value="0" />
            <div class="learn-options" role="radiogroup">{opts}</div>
            <button type="button" class="learn-btn learn-btn-amber" data-scenario-check>Check decision</button>
            <p class="learn-feedback" data-scenario-feedback hidden></p>
          </div>
        </div>
      </section>'''


def take_html(mod: dict) -> str:
    items = "".join(
        f"<li><label><input type=\"checkbox\" data-takeaway /> {esc(x)}</label></li>" for x in mod["take"]
    )
    return f'''<section class="mod-block" id="take" data-block="checklist">
        <p class="mod-block-kicker">6. Take it</p>
        <h2>Use it this week</h2>
        <p>Tick at least two actions to make this module practical.</p>
        <div class="mod-takeaway">
          <input type="hidden" data-block-done data-take-done value="0" />
          <ul class="mod-takeaway-list">{items}</ul>
          <p class="learn-muted" data-checklist-note>0 ready.</p>
          <a class="mod-product-link" href="{esc(mod["product_href"])}">
            <img src="{esc(mod["product_img"])}" alt="" />
            <span><strong>{esc(mod["product_title"])}</strong><span>{esc(mod["product_sub"])}</span></span>
          </a>
        </div>
      </section>'''


def check_html(mod: dict) -> str:
    c = mod["check"]
    name = f"check_{mod['id']}"
    parts = []
    for o in c["options"]:
        v, lab = o[0], o[1]
        correct = ' data-correct="1"' if len(o) > 2 and o[2] else ""
        parts.append(
            f'<label class="learn-option"><input type="radio" name="{name}" value="{esc(v)}"{correct} /> {esc(lab)}</label>'
        )
    return f'''<section class="mod-block" id="check" data-block="mcq" data-mcq-name="{name}" data-feedback-ok="{esc(c["ok"])}" data-feedback-bad="{esc(c["bad"])}">
        <p class="mod-block-kicker">7. Check</p>
        <h2>Confirm the key idea</h2>
        <p class="learn-activity-guide">Answer correctly to continue.</p>
        <input type="hidden" data-block-done data-check-done value="0" />
        <p class="learn-activity-q">{esc(c["q"])}</p>
        <div class="learn-options" role="radiogroup">{"".join(parts)}</div>
        <button type="button" class="learn-btn learn-btn-amber" data-mcq-check>Check answer</button>
        <p class="learn-feedback" data-mcq-feedback hidden></p>
      </section>'''


def module_html(mod: dict, index: int, total: int) -> str:
    mod = dict(mod)
    mod["poster"] = asset_mod(mod["poster"])
    mod["photo"] = asset_mod(mod["photo"])
    mod["product_img"] = asset_mod(mod["product_img"])
    mod["product_href"] = asset_mod(mod["product_href"]) if mod["product_href"].startswith("/") else mod["product_href"]
    case = dict(mod["case"])
    case["scene"] = asset_mod(case["scene"])
    mod["case"] = case
    nxt = COURSE["modules"][index]["id"] if index < total else None
    next_href = f"../{nxt}/index.html" if nxt else "../index.html"
    next_label = "Mark complete and go to next module" if nxt else "Mark complete and return to hub"
    part_label = f"Part {mod['part']}"
    keys = "".join(
        f'<article class="mod-key"><span class="mod-key-n">{i}</span><div><h3>{esc(t)}</h3><p>{esc(b)}</p></div></article>'
        for i, (t, b) in enumerate(mod["keys"], 1)
    )
    return f'''<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <title>Module {index}: {esc(mod["title"])} | PixtoLearn Academy</title>
  <meta name="description" content="{esc(mod["objective"])}" />
  <link rel="icon" href="../../../../assets/brand/favicon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..800&family=Figtree:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../../../css/academy-learn.css" />
</head>
<body class="learn-body">
  <a class="learn-skip" href="#main">Skip to content</a>
  <header class="learn-header">
    <div class="learn-wrap learn-nav">
      <a class="learn-brand" href="../../../index.html"><img src="../../../../assets/brand/logo.png" alt="PixtoLearn" />
        <span class="learn-brand-text"><strong>Academy</strong><span>Module {index}</span></span></a>
      <ul class="learn-nav-links">
        <li><a href="../../../index.html">Dashboard</a></li>
        <li><a href="../index.html">Course hub</a></li>
        <li><a href="../../../../account.html">Account</a></li>
      </ul>
    </div>
  </header>
  <div class="learn-wrap learn-player">
    <aside class="learn-side" aria-label="Course modules">
      <h2>Neurodiversity Visual Specialist</h2>
      <p class="learn-muted" style="margin:0 0 0.75rem;font-size:0.82rem">{esc(part_label)} | Full pathway</p>
      <ul class="learn-side-list">{side_nav(mod["id"])}</ul>
      <a class="learn-side-back" href="../index.html">Back to course hub</a>
    </aside>
    <main id="main" class="learn-content">
      <p class="learn-eyebrow">{esc(part_label)} | Module {index} of {total} | about {esc(mod["minutes"])} minutes</p>
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
        <div class="mod-video is-placeholder" role="img" aria-label="Video placeholder">
          <img src="{esc(mod["poster"])}" alt="" />
          <div class="mod-video-ph">
            <strong>Video to film</strong>
            <span>{esc(mod["video_brief"])}</span>
          </div>
        </div>
        <p class="mod-video-note">Placeholder: final clip not filmed yet. Photo reference below.</p>
        <figure class="learn-figure" style="margin-top:1rem">
          <img src="{esc(mod["photo"])}" alt="" />
          <figcaption>{esc(mod["photo_cap"])}</figcaption>
        </figure>
      </section>
      <section class="mod-block" id="get">
        <p class="mod-block-kicker">3. Get it</p>
        <h2>Key ideas</h2>
        <div class="mod-key-grid">{keys}</div>
      </section>
      {try_html(mod)}
      {case_html(mod)}
      {take_html(mod)}
      {check_html(mod)}
      <div class="learn-player-actions">
        <p class="mod-gate-msg" data-gate-msg hidden></p>
        <button type="button" class="learn-btn learn-btn-primary" data-complete>{esc(next_label)}</button>
        <a class="learn-btn learn-btn-ghost" href="../index.html">Save and return to hub</a>
      </div>
    </main>
  </div>
  <footer class="learn-footer"><div class="learn-wrap learn-footer-inner"><span>{esc(COURSE["title"])}</span><a href="../index.html">Course hub</a></div></footer>
  <script src="../../../js/progress.js"></script>
  <script src="../../../js/module-blocks.js"></script>
  <script>
  (function(){{
    var COURSE_ID = "{COURSE_ID}";
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


def hub_html() -> str:
    cards = []
    for i, m in enumerate(COURSE["modules"], 1):
        part = f"Part {m['part']}"
        if m.get("optional"):
            part += " | Optional"
        cards.append(f'''<article class="learn-module-card" data-module="{m["id"]}">
            <div class="learn-module-num">{i}</div>
            <div class="learn-module-copy">
              <p class="learn-muted" style="margin:0 0 0.25rem;font-size:0.75rem;font-weight:700;letter-spacing:0.04em;text-transform:uppercase">{esc(part)}</p>
              <h3>{esc(m["title"])}</h3>
              <p>{esc(m["objective"])}</p>
              <span class="learn-status" data-status>Not started</span>
            </div>
            <a class="learn-btn learn-btn-ghost" href="{m["id"]}/index.html" data-module-cta>Start</a>
          </article>''')
    ids = ",".join(f'"{m["id"]}"' for m in COURSE["modules"])
    n = len(COURSE["modules"])
    core_n = sum(1 for m in COURSE["modules"] if not m.get("optional"))
    return f'''<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <title>{esc(COURSE["title"])} | PixtoLearn Academy</title>
  <meta name="description" content="{esc(COURSE["summary"])}" />
  <link rel="icon" href="../../../assets/brand/favicon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..800&family=Figtree:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../../css/academy-learn.css" />
</head>
<body class="learn-body">
  <a class="learn-skip" href="#main">Skip to content</a>
  <header class="learn-header">
    <div class="learn-wrap learn-nav">
      <a class="learn-brand" href="../../index.html"><img src="../../../assets/brand/logo.png" alt="PixtoLearn" />
        <span class="learn-brand-text"><strong>Academy</strong><span>Specialist</span></span></a>
      <ul class="learn-nav-links">
        <li><a href="../../index.html">Dashboard</a></li>
        <li><a href="../../catalog.html">Catalogue</a></li>
        <li><a href="../../../academy.html#specialist">Marketing</a></li>
        <li><a href="../../../cart.html">Cart</a></li>
      </ul>
    </div>
  </header>
  <main id="main">
    <section class="learn-hero course-hub-hero">
      <div class="learn-wrap course-hub-hero-grid">
        <div>
          <p class="learn-eyebrow">Specialist flagship | {esc(COURSE["product"])}</p>
          <h1>{esc(COURSE["title"])}</h1>
          <p class="lede">{esc(COURSE["summary"])}</p>
          <p class="learn-muted" style="margin-top:0.75rem">{esc(COURSE["subtitle"])}. Full pathway live: {core_n} core modules + optional Practitioner.</p>
          <div class="learn-progress" style="max-width:28rem;margin-top:1.1rem">
            <div class="learn-progress-meta"><span data-progress-label>0 of {n} modules</span><span data-progress-pct>0%</span></div>
            <div class="learn-progress-bar" aria-hidden="true"><span data-progress-bar style="width:0%"></span></div>
          </div>
          <div class="learn-hero-actions">
            <a class="learn-btn learn-btn-primary" href="module-1/index.html" data-start-cta>Start Module 1</a>
            <button
              class="learn-btn learn-btn-ghost"
              type="button"
              data-aca-buy
              data-product-id="aca-neuro-specialist"
              data-product-name="Academy: Neurodiversity Visual Specialist"
              data-product-price="199"
              data-product-image="../../../assets/icons/audience/occupational-therapist.jpg"
              data-product-href="index.html"
            >Buy Specialist &pound;199</button>
            <a class="learn-btn learn-btn-ghost" href="../../curriculum/neurodiverse-nonverbal-outline.html">Full brief</a>
          </div>
        </div>
        <figure class="course-hub-hero-media"><img src="{esc(asset_hub(COURSE["image"]))}" alt="Professional supporting a learner with visual sequence cards" /></figure>
      </div>
    </section>

    <section class="learn-section">
      <div class="learn-wrap">
        <div class="learn-section-head">
          <div>
            <p class="learn-eyebrow">Full pathway</p>
            <h2>Parts A, B, C and D</h2>
            <p class="learn-muted">Foundations, tools, setting labs, behaviour, team consistency, capstone plan, and optional Practitioner portfolio. Videos are film placeholders until shoot day.</p>
          </div>
        </div>
        <div class="learn-module-list">{"".join(cards)}</div>
      </div>
    </section>
  </main>
  <footer class="learn-footer"><div class="learn-wrap learn-footer-inner"><span>&copy; 2026 PixtoLearn Academy</span><a href="../../../academy.html#specialist">Academy flagship</a></div></footer>
  <script src="../../../js/cart.js"></script>
  <script src="../../js/academy-buy.js"></script>
  <script src="../../js/progress.js"></script>
  <script>
  (function(){{
    var COURSE_ID = "{COURSE_ID}";
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
    if (start && prog.nextId) {{
      start.href = prog.nextId + "/index.html";
      start.textContent = prog.percent === 0 ? "Start Module 1" : "Continue learning";
    }}
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


def main() -> None:
    COURSE_DIR.mkdir(parents=True, exist_ok=True)
    (COURSE_DIR / "index.html").write_text(hub_html(), encoding="utf-8")
    print("wrote hub")
    total = len(COURSE["modules"])
    for i, mod in enumerate(COURSE["modules"], 1):
        mdir = COURSE_DIR / mod["id"]
        mdir.mkdir(parents=True, exist_ok=True)
        (mdir / "index.html").write_text(module_html(mod, i, total), encoding="utf-8")
        print("wrote", mod["id"])
    # quick validation
    for p in COURSE_DIR.rglob("*.html"):
        text = p.read_text(encoding="utf-8")
        assert "\ufffd" not in text
        assert "\u2014" not in text
    print("utf-8 ok")


if __name__ == "__main__":
    main()
