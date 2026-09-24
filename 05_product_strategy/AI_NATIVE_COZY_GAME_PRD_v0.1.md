# AI-Native Cozy Game PRD v0.1

**Working title:** Ops Cat Bright Life  
**Product shape:** Cozy casual-management game with AI-personalized spaces and stories.

## 1. MVP goal

Build a playable 5–10 minute loop that proves four things:

1. The tactile action is satisfying.
2. The space visibly transforms.
3. The player feels ownership.
4. AI personalization makes the experience feel meaningfully “mine,” not randomly generated.

## 2. First-session personalization

Ask only 3–5 lightweight questions, for example:
- What do you want today? Relax / tidy up / create / explore / help someone.
- Favorite setting? Garden / seaside / cozy room / little town.
- Preferred pace? Very calm / balanced / energetic.
- Favorite reward? Decoration / collection / story / character item.

Do not turn onboarding into a long questionnaire.

### Result

The game selects:
- starting scene variant,
- initial task chain,
- first NPC / narrative hook,
- decoration palette,
- reward emphasis.

## 3. Personalized world model

Each player gets a lightweight profile:

```
PlayerTaste
- preferred_mood
- preferred_activity
- preferred_visual_theme
- preferred_reward_type
- favorite_characters
- favorite_locations

WorldState
- current_area
- cleanliness
- decoration_score
- unlocked_objects
- completed_story_beats
- relationship_states
- collection_progress

NarrativeMemory
- important_choices
- recent_events
- recurring_NPCs
- player_preferences
```

The AI does not rewrite the whole world every time. It selects and fills bounded templates.

## 4. Core gameplay loop

### Example: Backyard

```
Overgrown yard
→ mow / clear / collect
→ reveal hidden object or story clue
→ earn materials / coins
→ repair or decorate
→ neighbor reacts / new micro-story appears
→ unlock next yard section
```

### AI layer

At each transition:
- choose one story beat from approved templates,
- generate short dialogue / caption,
- optionally select or generate a visual insert,
- reference one remembered player preference,
- preserve economy and unlock rules.

## 5. Content-generation hierarchy

### Level A — deterministic
Always authored / rules-based:
- movement,
- tool mechanics,
- scoring,
- economy,
- inventory,
- unlocks,
- collision,
- reward tables,
- progression gates.

### Level B — assembled
System picks from authored modules:
- task bundles,
- NPC combinations,
- weather,
- prop sets,
- decoration packs,
- reward bundles.

### Level C — AI generated
Allowed:
- micro dialogue,
- short diary / postcard,
- personalized task framing,
- event title,
- flavor text,
- optional image insert,
- small story branch.

Not allowed to control:
- currency grants,
- monetization values,
- progression requirements,
- competitive ranking logic.

## 6. Narrative design

The game should generate **small lived stories**, not endless prose.

Best unit:
- 1 visual change,
- 1 action,
- 1 character beat,
- 1 reward,
- 1 short memory.

Example:

> You clear the long grass behind the old bench.  
> A faded purple tag appears underneath.  
> The neighbor says it belonged to the previous gardener.  
> You can restore the bench, plant flowers around it, or save the tag for later.

The point is agency + place memory.

## 7. MVP content budget

### Scene
- 1 backyard
- 3 yard states: messy / improving / beautiful
- 4 unlockable micro-zones

### Core actions
- mow
- clear / collect
- place / decorate

### Tools
- mower
- rake / vacuum-like cleaner
- watering / repair tool

### NPC
- 3 reusable neighbor archetypes

### Story
- 20–30 authored story modules
- AI fills dialogue and personalization

### Decoration
- 30–50 items

### Collections
- 1 collection page
- 12–20 collectible items

## 8. Expansion path

After the backyard loop proves retention:
- home interior,
- flower garden,
- seaside trip,
- water-sports events,
- small-town neighbors,
- seasonal collections.

## 9. Key validation

The MVP is successful only if players can answer:
- “I knew what to do immediately.”
- “It felt satisfying.”
- “My place looked different because of me.”
- “The story felt like it was reacting to me.”
