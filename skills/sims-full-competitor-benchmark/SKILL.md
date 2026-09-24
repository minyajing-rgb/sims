---
name: sims-full-competitor-benchmark
description: Full-stack competitor benchmark workflow for Cozy Sims, simulation/management, hybrid-casual and casual-front/long-meta games. Use for product research that must cover market/KPI, visual/art direction, core gameplay, FTUE, progression/meta/side systems, economy/monetization, LiveOps, UA/creative/promotion, version/review evidence, production cost, trend-cause analysis and translation into a US-first product/prototype plan. This is the parent skill; use competitor-trend-cause-analysis as the data/anomaly submodule.
metadata:
  version: 1.0
  owner: research
  priority: 1
  status: active
---

# SIMS Full Competitor Benchmark → Product / Launch Decision Skill

## 0. Why this skill exists

The existing `competitor-trend-cause-analysis` skill is a **data trend / evidence / causal-hypothesis module**. It is necessary but not sufficient for a full game competitor study.

A complete SIMS benchmark must answer:

> **What does the game look like? → What do players actually do? → What keeps them for weeks/months? → How does it monetize? → How is it operated and promoted? → What does the data say? → What can our team realistically build and test?**

Required analysis stack:

```
Market / KPI
→ Art / Visual Identity
→ Core Gameplay
→ FTUE / Session Rhythm
→ Progression / Meta / Side Systems
→ Economy / Monetization
→ LiveOps / Content Cadence
→ UA / Creative / Promotion
→ Trend × Cause / Reviews / Versions
→ Production Cost / Scalability
→ Studio Translation / Prototype / KPI Gates
```

Primary decision market: **United States**.  
Global: secondary context.  
Never relabel Global data as US.

---

# 1. Evidence taxonomy — mandatory

Every claim must be labeled when material:

- **RAW / SOURCE** — unchanged provider or first-party source.
- **OBSERVED** — directly visible in source / gameplay / store.
- **CALCULATED / DERIVED** — deterministic calculation.
- **INFERRED** — supported interpretation, not causal proof.
- **ASSUMPTION / SAMPLE** — proposed design/model input.
- **OWNER TARGET** — explicit internal target.
- **TBD / NOT AVAILABLE** — missing or access-gated.

For causal trend work, also use:
- **E0** trend only
- **E1** trend + one independent evidence class
- **E2** trend + two aligned classes
- **E3** trend + 3+ aligned classes with timing match

Never convert:
- RPD → LTV
- calendar ratio → cohort metric
- Global → US
- current snapshot → historical series
- event timing overlap → causal claim

---

# 2. Benchmark selection by objective

Do not create one generic “Top games” ranking.

For each research objective choose its own benchmark set:

## 2.1 Market / Revenue
High scale / high durable revenue.

## 2.2 Organic / Acquisition
High download or creator/social/store spread candidates.

## 2.3 Art / Brand
Distinctive, commercially readable, reproducible visual systems.

## 2.4 Core Gameplay
Strong first 30 seconds / tactile clarity / satisfying action.

## 2.5 Long Meta / Retention Structure
Ownership, collection, production, character, social, event depth.

## 2.6 Lean Studio
Small/medium team with high output efficiency.

## 2.7 LiveOps
Strong repeatable event cadence and orchestration.

## 2.8 UA / Promotion
Clear persona, creative system, media mix and campaign cadence.

Each benchmark row must state:
`Objective | Why this title | What to learn | What NOT to copy | Evidence`

---

# 3. Market / KPI layer

For every product collect where available:

## Identity
- title
- publisher / developer
- launch date(s)
- platform(s)
- market(s)
- business model
- current version
- rating / review volume

## Scale
- monthly downloads
- monthly IAP revenue
- cumulative download proxy
- peak / latest
- visible 3M revenue hold
- RPD (same scope only)
- platform split
- market split
- paid / organic / source mix when available

## Lifecycle
Required:
- launch / first visible scale window
- first peak
- decline / normalization
- secondary scale / reacquisition
- latest state
- revenue vs acquisition decoupling

Use `competitor-trend-cause-analysis` for trend, anomaly, source/event/version/review crosschecks.

---

# 4. Art / Visual Benchmark — REQUIRED

A full competitor report is incomplete without visual analysis.

For each selected art benchmark capture/record:

## 4.1 Camera / Composition
- top-down / isometric / side / portrait / landscape
- camera distance
- field of view
- scene depth
- object scale
- mobile readability

## 4.2 Rendering
- illustrated 2D
- pixel
- 2.5D
- stylized 3D
- realistic 3D
- hybrid 2D+3D
- pre-rendered / video transition

## 4.3 Character
- body/head proportion
- silhouette
- facial detail
- costume complexity
- animation density
- avatar customization
- pet / companion visual role

## 4.4 Environment
- density
- modularity
- prop count
- vegetation
- architecture
- biome / travel variation
- before/after readability
- lived-in storytelling objects

## 4.5 Color / Light / Material
- palette
- saturation
- temperature
- lighting
- shadow softness
- material response
- painterly/handmade texture
- VFX / particles

## 4.6 UI / Graphic Language
- UI density
- card / icon language
- typography
- event rail
- currency visibility
- store/paywall style
- notification pressure
- handcrafted vs digital UI layer

## 4.7 Brand / Marketing Readability
- 1-second thumbnail recognition
- icon identity
- screenshot identity
- character/IP recognition
- creator-video readability
- ad readability
- “looks generic” risk

## 4.8 Production Cost
Estimate comparatively:
- character asset burden
- environment burden
- animation burden
- VFX burden
- monthly content burden
- reuse / reskin ratio
- small-team feasibility

## Mandatory output
- visual comparison matrix
- 3–8 annotated screenshots per key benchmark when legally/technically available
- “70–90% market readability + 10–30% differentiation” recommendation where relevant
- art prototype A/B/C test plan

---

# 5. Core Gameplay — REQUIRED

Never let Meta visually replace the actual Core.

Record:

## 5.1 First 30 seconds
- first input
- first feedback
- first reward
- first visible transformation
- first failure/friction
- first “wow/satisfying” beat

## 5.2 Core action
Examples:
- mow / clean / cut
- tap / drag / swipe
- harvest / plant
- cook / serve
- move / collect
- place / build
- merge
- match
- idle collect
- explore
- combat / run

## 5.3 Core loop
Write explicitly:

`Action → Feedback → Reward → Sink → Progress → New Goal → Return`

## 5.4 Feel
- active vs idle
- skill vs deterministic
- session length
- frequency
- one-hand friendliness
- failure state
- retry
- pacing
- haptics/audio/VFX
- “satisfying” mechanism

## 5.5 Core longevity
Answer:
- Is the core still important at D30/D90?
- Or does Meta fully replace it?
- Does the core generate content for creators?
- Can one mechanic support 100 sessions without fatigue?

---

# 6. FTUE / D0-D14 — REQUIRED

Use a timed observation sheet.

Minimum milestones:

- App tap
- first visible frame
- home/lobby usable
- tutorial begin
- first core action
- first reward
- first meaningful reward
- first upgrade
- first unlock
- first meta exposure
- first event exposure
- first shop / offer exposure
- first decoration / ownership action
- first NPC/story beat
- first social exposure
- T+5m
- T+10m
- T+30m
- D1 return trigger
- D3 new system
- D7 new system
- D14 stable loop

For each:
`T+ time | action | prompt | reward | friction | player choice | required currency | screenshot/video timestamp`

Output:
- FTUE timeline
- feature unlock timeline
- monetization exposure timeline
- content density curve

---

# 7. Progression / Meta / Side Systems — REQUIRED

Build a complete taxonomy; do not only list 5 obvious systems.

For Cozy / Management / Hybrid products, check at least:

1. Tool / production upgrade
2. Area / map unlock
3. Home / garden ownership
4. Decoration
5. Collection / album
6. Duplicate sink / exchange
7. Avatar / fashion
8. Pet / companion
9. NPC relationship
10. Story / chapter
11. Orders / customer loop
12. Production chain
13. Crafting
14. Travel / expedition / map
15. Exploration
16. Daily / weekly missions
17. Timed return rewards
18. Pass
19. Piggy / deferred bank
20. Wheel / pick / scratch
21. Merge / puzzle side game
22. Mini-job / hobby mini-game
23. Leaderboard / tournament
24. Small-team partner / co-op
25. Clan / guild / club
26. Visit / gifting
27. P2P trade / request
28. Community milestone
29. UGC / player-created content
30. Seasonal theme / IP takeover
31. Event hub / event-within-event
32. Reward storage / claim-all
33. Booster / temporary modifier
34. VIP / loyalty
35. Purchase loyalty
36. WebShop / D2C
37. Social identity / profile / showcase
38. Prestige / rebirth
39. RPG gear / skill / hero
40. SLG / map / alliance escalation

For each system record:
`Player Job | Unlock | Frequency | Input | Output | Core Link | Meta Link | Monetization | Social | LiveOps Use | Production Cost | Risk | Evidence`

Also classify:
- Core
- Meta
- Side
- LiveOps wrapper

---

# 8. Economy / Monetization — REQUIRED

## 8.1 Economy map
- hard / soft currency
- energy / stamina
- production resources
- crafting materials
- collection items
- event currencies
- sinks
- inflation controls
- timers
- inventory limits
- loss / fail pressure
- rescue mechanics

## 8.2 Monetization
Check:
- IAA
- IAP currency
- starter pack
- time-limited offers
- energy
- speed-up
- decor/cosmetic
- collection packs
- gacha
- pass
- piggy
- subscription
- VIP
- D2C / WebShop
- purchase loyalty
- ad removal
- rewarded video

## 8.3 Offer architecture
For observable offers:
- trigger
- price
- anchoring
- discount
- content
- duration
- segmentation hint
- progression gate
- frequency
- surface

Never infer payer segmentation rules without evidence.

---

# 9. LiveOps / Operations — REQUIRED

The report must show **what happens after launch**, not just static features.

## 9.1 Event calendar
For each observable event:
- product
- market
- platform
- announce date
- start/end
- event type
- core action
- event action
- currency
- reward
- monetization
- social layer
- asset requirement
- reskin/reuse
- overlap with other events
- source

## 9.2 Event taxonomy
At least:
- daily / weekly mission
- collection season
- pass
- leaderboard
- co-op
- holiday
- IP collab
- new-area / new-content
- narrative event
- mini-game
- challenge
- comeback / reactivation
- community milestone
- sale / offer
- cross-feature scavenger
- UGC event

## 9.3 Cadence
Calculate/estimate from visible evidence:
- client version cadence
- content cadence
- major season cadence
- mini-event frequency
- overlapping-event count
- reusable event-engine ratio
- live-asset burden

## 9.4 Operations quality
Research:
- reward persistence
- compensation
- support
- event recovery
- rollback/hotfix
- clutter
- progress clarity
- event discoverability

Use trend-cause module for event impact; never assume event caused a KPI shift.

---

# 10. UA / Promotion / Creative — REQUIRED

A full competitor analysis must answer:

> **Who → where → what channel → what campaign structure → what creative → how long → what message → what landing/store experience → what post-install product promise?**

## 10.1 Persona
- demographic only if evidence exists
- motivation
- fantasy
- emotional job
- gameplay job
- payer/value hypothesis
- lapsed/re-engagement persona

## 10.2 Geo / OS
- US-first
- iOS vs Android
- global comparison
- regional package differences

## 10.3 Media map
Where observable:
- Meta
- Google
- Apple Search Ads
- TikTok
- YouTube
- AppLovin
- Unity
- DSP
- playable networks
- influencer / creator
- PR
- community
- cross-promo
- email / CRM
- D2C / web
- store featuring / ASO

## 10.4 Campaign architecture
Separate:
- evergreen acquisition
- launch burst
- content update burst
- seasonal
- IP/brand
- retargeting
- reactivation
- value/payer acquisition
- creator/UGC
- web/D2C

## 10.5 Creative matrix
For representative creative record:
`Persona | Hook | first 1–3s | format | duration | main visual | copy | CTA | offer | core gameplay shown | meta shown | story | before/after | first seen | last seen | days live | spend/impression proxy | winner/fatigue signal`

Creative hook taxonomy for SIMS:
- satisfying action
- before/after
- makeover
- rescue
- relationship
- cute character
- home ownership
- collection
- rare discovery
- problem/choice
- fail/fix
- travel/escape
- humor
- ASMR
- “I built this”
- UGC / creator challenge

## 10.6 Promotion plan reconstruction
Attempt to reconstruct:
- soft launch
- prereg
- launch
- scale
- content update
- seasonal
- brand/IP
- reactivation
- creator/community
- D2C

All budget/spend estimates must retain source and uncertainty.

---

# 11. Reviews / Version / Quality — REQUIRED

## Reviews
Track themes:
- crash/login
- purchase/reward
- ads
- grind
- economy
- event
- story
- content
- customer support
- performance
- feature requests
- art/character reactions

## Version history
Record:
- version
- date
- raw note
- functional summary
- content
- feature
- fix
- specificity
- source

Do not infer “feature first launched” merely from repeated release-note text.

---

# 12. Trend × Cause submodule

For installs/downloads/revenue/RPD/source mix/anomalies, invoke and follow:

`skills/competitor-trend-cause-analysis/SKILL.md`

Required chain:

**Trend → Flag → Review/Quality → Social/Event/Promotion → Version/Feature → Source Mix → Evidence Level → Counter Evidence → Interpretation → Testable Action**

Do not duplicate or weaken that skill’s evidence rules.

---

# 13. Production / Team / Scalability — REQUIRED

A visually successful competitor may still be impossible for our studio.

Estimate comparatively:

- team-size signal if public
- character production
- environment production
- animation
- VFX
- UI
- narrative content
- localization
- event configuration
- QA
- backend/social
- community
- monthly art burden
- monthly design burden
- reusable engines
- reskin ratio
- time to add new area
- time to add new event

Classify:
- Lean
- Medium
- Heavy
- AAA-like content burden

---

# 14. Product Translation — REQUIRED

Competitor report must end with a design decision layer.

For each useful pattern:

```
Observation
→ Principle
→ What we copy
→ What we do NOT copy
→ Prototype
→ KPI
→ Guardrail
→ Stop condition
→ Required data
```

For current Ops Cat direction, test separately:

## Core A
Pure satisfying mow/clean.

## Core B
Mow/clean + persistent ownership/decor.

## Core C
B + collection/NPC/story/event.

Compare:
- creative CTR / CVR
- CPI when available
- tutorial completion
- first-action completion
- time to first visible transformation
- first decor rate
- D1 / D3 / D7
- second-session ownership return
- event entry
- payer/IAA quality when mature

---

# 15. KPI / Launch Gate layer

Competitor evidence does **not** automatically become our target.

Maintain:
- research benchmark
- prototype KPI
- soft-launch KPI
- scale KPI

separately.

Each KPI needs:
- formula
- denominator
- market
- platform
- cohort maturity
- source
- current baseline
- test target
- scale target
- owner
- stop/hold/scale rule

For US launch decisions, do not set final CPI/LTV/ROAS from Global data.

---

# 16. Required per-game deliverable

Each selected competitor must have a Product Card with:

1. Identity / market
2. Business trend
3. Art style
4. Core loop
5. FTUE
6. Progression
7. Meta / side systems
8. Economy
9. Monetization
10. LiveOps
11. Version cadence
12. Reviews / risks
13. UA / promotion
14. Creative hooks
15. Production burden
16. Trend-cause anomalies
17. Learn
18. Do-not-copy
19. Prototype implication
20. Evidence / gaps

A product is **not fully benchmarked** because we have download/revenue curves.

---

# 17. Required cross-product outputs

At minimum:

- Market/KPI matrix
- Art/visual matrix
- Core-loop matrix
- FTUE/unlock matrix
- Meta/side-system matrix
- Economy/monetization matrix
- LiveOps/event calendar
- Version cadence matrix
- Review issue matrix
- UA/media/creative matrix
- Trend/cause atlas
- Production-cost matrix
- Benchmark-by-objective table
- Studio decision matrix
- Source / evidence log
- Status audit

---

# 18. Required Interactive HTML

The HTML should feel like a **competitor intelligence product**, not a single analytics page.

Minimum tabs:

1. Executive
2. Market / KPI
3. Art / Visual
4. Core Gameplay
5. FTUE
6. Progression / Meta / Side Systems
7. Economy / Monetization
8. LiveOps / Event Calendar
9. UA / Creative / Promotion
10. Data Trend / Cause Atlas
11. Reviews / Versions
12. Focus Game Deep Dive
13. Our Product Translation
14. US-first / Global Comparison
15. Evidence / Gaps / Sources
16. Version Changelog

Requirements:
- self-contained/offline when private data exists
- no CDN dependency
- filters by product / market / platform / category
- visual screenshots when available
- source/confidence badge on claims
- clear TBD / unavailable states
- browser-tested
- versioned
- local copy + GitHub copy

---

# 19. Status audit — mandatory

Every research round must output:

`Requirement | Status (DONE/PARTIAL/BLOCKED/TBD) | File | Coverage | Limitation | Next Action | Evidence Needed`

A section is not DONE merely because there is a narrative paragraph.

---

# 20. Completion definition

Do not call the full benchmark complete until:

- benchmark list fixed
- market/KPI data normalized
- art matrix populated
- core gameplay recorded
- FTUE recorded
- meta/side system matrix populated
- economy/monetization mapped
- LiveOps calendar populated
- UA/creative/promotion evidence populated
- trend-cause analysis run
- version/review coverage documented
- production burden assessed
- benchmark-by-objective completed
- product translation completed
- HTML browser-tested
- source/gaps/status audit included

When evidence is missing, ship a **versioned partial release** with explicit coverage rather than fabricating completeness.
