# SIMS Trend × Cause — Version / Review Crosscheck v0.1

**Date:** 2026-09-24  
**Market priority:** US-first, Global-secondary  
**Method:** `skills/competitor-trend-cause-analysis/SKILL.md`  
**Important:** monthly KPI series below remain DianDian Global/product-collection scope unless otherwise stated. US App Store version/review evidence is an independent evidence class; it does **not** convert Global KPI into US KPI.

## A. What changed

| Product | KPI window | Downloads | IAP revenue | Observed US iOS evidence | Evidence |
|---|---|---:|---:|---|---|
| Gossip Harbor | 2026-06→07 | **+61.3%** | **+8.1%** | Jul releases carried Global Goblet, Ancient Egypt, Dollhouse event content; weekly episodes continued | E1 |
| Gossip Harbor | 2026-07→08 | -16.1% | **+9.7%** | Aug releases continued biweekly themed event packaging | E1 |
| Township | 2026-06→07 | **+41.8%** | **+8.9%** | Beach Collection + Voyage/Summer Pass + adventures + regatta + new building/match-3 element | E1 |
| Township | 2026-07→08 | -26.9% | **+3.3%** | Harvest Collection + Undersea/Harvest Pass + adventures/regatta continued | E1 |
| Hay Day | 2026-05→06 | -4.5% | -7.2% | 14th anniversary + Boat Orders test + Beach Expansion launched in June | E1 counterexample |
| Hay Day | 2026-06→07 | +5.1% | +4.4% | Anniversary/event content remained active | E1 |
| Big Farm Homestead | 2026-05→06 | -36.4% | -12.7% | Season Pass + fishing expansion + Crab Control + Fireworks/Dino/County Fair calendar | E1 |
| Big Farm Homestead | 2026-06→07 | -21.5% | **+0.5%** | Vacation Vibes Festival + Claire's Picnic + Chapter 11 + anniversary pass | E1 |
| Big Farm Homestead | 2026-07→08 | +5.2% | **+5.1%** | 1st anniversary Fireworks Festival; guild upgrade; QoL | E1 |
| The Cozy Florist | 2026-07→08 | **+94.8%** | **+10.8%** | Aug had very high client-update frequency, mostly generic gameplay/QoL optimization; explicit content/event notes appear in Sep | E1-low specificity |
| Office Cat | 2026-07→08 | **-31.4%** | **+2.6%** | Aug added City 7 + Payment Challenge, plus ranking/data-save fixes | E1 counterexample |

## B. What may explain it

### Gossip Harbor — event machine + weekly narrative cadence

**OBSERVED:** US iOS version history repeatedly states a new episode every Friday, while client updates roughly every 1–2 weeks rotate themed exploration events. 2026 Jul included Global Goblet, Ancient Egypt and Dollhouse content.

**CALCULATED:** Global monthly downloads rose 61.3% in Jul while IAP rose 8.1%; in Aug downloads normalized -16.1% while revenue increased another 9.7%.

**INFERRED · E1:** the timing is consistent with a high-frequency content/event machine supporting reacquisition and monetization, but it is **not causal proof**. Paid media, store featuring and source mix are missing.

**Counter evidence:** revenue growth continued after downloads normalized. Therefore July acquisition and August monetization should not be reduced to one event-causality story.

### Township — mature multi-engine orchestration

**OBSERVED:** Jul US iOS updates packaged Beach Collection, Voyage/Summer Pass, two adventures, regatta seasons, a new match-3 element and a new town building. Aug moved into Harvest Collection and new passes/adventures.

**CALCULATED:** Jul Global downloads +41.8%, revenue +8.9%; Aug downloads -26.9% while revenue +3.3%.

**INFERRED · E1:** overlapping mature engines are consistent with both reacquisition bursts and installed-base monetization. They do not prove which engine moved KPI.

**Counter evidence:** the same multi-engine cadence continues in Aug while acquisition falls, so cadence alone does not explain the Jul download spike.

### Hay Day — important counterexample: major content does not guarantee an acquisition spike

**OBSERVED:** Jun US iOS releases included the 14th anniversary, music/reward events, Boat Orders experiment and Beach Expansion. Earlier spring releases explicitly tested Boat/Truck rewards and early-game improvements.

**CALCULATED:** May→Jun Global downloads -4.5% and revenue -7.2%; Jun→Jul only +5.1% downloads and +4.4% revenue.

**INFERRED · E1 counterexample:** a major anniversary/content package did not coincide with a large acquisition spike in the monthly Global panel. This is useful negative evidence against the simplistic rule “big event = download spike.”

**Product lesson:** durable mature products can use updates to improve loop quality, pass depth and retention without requiring every release to create a large new-user wave.

### Big Farm Homestead — strong event density, revenue hold stronger than download hold

**OBSERVED:** Mar–Sep US iOS version history shows a dense reusable cadence: Season Festivals/Passes, Heart of the Herd, Dino Drama, Fishing expansion, Crab Control, Fireworks, County Fair Collection, Vacation Vibes, Claire's Picnic, Chapter 11 and anniversary content.

**CALCULATED:** after the May download/revenue peak, Jun downloads fell 36.4%, Jul another 21.5%; revenue fell only 12.7% in Jun, was flat in Jul, then grew 5.1% in Aug.

**INFERRED · E1:** this pattern is consistent with deeper installed-base monetization and event/collection sinks carrying value after launch-scale acquisition cools.

**Counter evidence:** no payer count, DAU, offer participation or paid/organic source mix. We cannot claim the events caused revenue resilience.

### The Cozy Florist — very high release frequency, rebound driver still unresolved

**OBSERVED:** US iOS visible history shows a median update gap of roughly **5 days** in the May–Sep sample; Aug alone had many gameplay/QoL optimization releases. Explicit “new content and events” notes appear Sep 2 and Sep 11.

**CALCULATED:** Aug Global downloads +94.8% MoM while revenue +10.8%.

**INFERRED · E1-low specificity:** release activity overlaps with the rebound, but the notes are too generic to identify a content driver. UA, ASO/store featuring, creator activity and paid/organic mix are still missing.

**Counter evidence:** the explicit content/event releases visible in the US App Store are in September, after the August monthly rebound.

### Office Cat — new city/event monetization did not reverse acquisition decay

**OBSERVED:** Jul/Aug US iOS updates added Cat Day, daily event rankings, City 7 and Payment Challenge; subsequent releases fixed seasonal ranking reset and data-saving issues.

**CALCULATED:** Jul→Aug Global downloads -31.4% while revenue +2.6%.

**INFERRED · E1 counterexample:** new content/monetization and events can support revenue without restoring acquisition. The product's long-history decline remains the dominant lifecycle signal.

**Counter evidence:** fixes indicate quality risk during the same period, but there is no review-volume time series or crash/login telemetry to quantify impact.

## C. What does NOT explain it

1. **Event timing alone does not establish causality.** All six cases remain E1 or weaker.
2. **Version frequency is not automatically product health.** The Cozy Florist ships extremely frequently, but most notes are low-specificity optimizations/fixes.
3. **Major anniversary content does not automatically generate acquisition.** Hay Day is a direct counterexample in the current Global monthly panel.
4. **New area/content does not automatically reverse lifecycle decline.** Office Cat added City 7 while downloads continued to fall.
5. **Revenue hold cannot be relabeled retention/LTV.** Big Farm Homestead's strong revenue hold is a calendar-level business signal, not cohort retention.

## D. What patterns repeat across products

### Pattern 1 — reusable event engines matter more than isolated event names

Repeated systems visible across products:
- Season / Pass
- Collection / Album
- Themed exploration / story event
- Limited-time production event
- Social / ranking wrapper
- New area / city / chapter

The operational advantage is reuse: one engine supports repeated skins/themes/rewards without rebuilding the entire feature.

### Pattern 2 — mature products separate acquisition and monetization cycles

Gossip Harbor, Township, Hay Day and Office Cat all show periods where revenue direction differs from download direction. For our own product, acquisition and payer/retention decisions must be read separately.

### Pattern 3 — client cadence varies widely by production model

Visible 2026 US iOS samples:
- **The Cozy Florist:** median gap ~5 days — very high patch/optimization cadence.
- **Gossip Harbor:** median gap ~14 days — event/content train with weekly narrative underneath.
- **Township:** median gap ~12 days in Jun–Sep visible sample — major package + hotfix pattern.
- **Big Farm Homestead:** median gap ~14 days — dense event/pass/content train.
- **Hay Day:** median gap ~21 days — fewer but larger QoL/experiment/content packages.
- **Office Cat:** median gap ~22 days — event/city packages plus fixes.

These are **visible App Store sample medians**, not full engineering deployment frequency.

## E. What we should test for Ops Cat

### Test 1 — acquisition hook and long-meta must be separate layers

**Observation:** My Perfect Hotel/Office Cat style low-friction actions are good for comprehension, while mature revenue leaders rely on ownership/event systems.

**Hypothesis:** Mow/Clean can win the first 30 seconds, but persistent garden ownership is required for D7+ value.

**Test:**
- A: Mow/Clean only
- B: A + persistent garden/decor
- C: B + collection/NPC/story + one reusable weekly event

**Primary KPI:** creative CVR, tutorial completion, first visible transformation, D1/D3/D7, second-session ownership return.

### Test 2 — one reusable event mother engine before multiple mini-games

Build one configurable engine:
`Task progress → event currency → milestone track → collection/decor reward → optional pass`.

Reskin it for 4 themes before building a second event engine.

**Guardrail:** monthly art/design/config burden.

### Test 3 — avoid ultra-high client cadence as a strategy

The Cozy Florist cadence should be treated as a production signal, not a target. Ops Cat should aim for config-driven LiveOps and remote content where possible; client updates should be reserved for features, assets and fixes that require code changes.

## F. What is still missing

| Gap | Why it matters | Shortest path |
|---|---|---|
| US-only monthly downloads/revenue | fixed primary market | pull same-scope US iOS/Android series |
| Paid / organic / source mix | distinguish reacquisition vs UA burst | DianDian source module / MMP-like external source if available |
| Spend / creative history | validate UA explanation | ad-intelligence / creative library export |
| Full historical review series | quantify quality-risk timing | App Store/Google Play review export by date/version |
| FTUE timed capture | required parent-skill layer | record first 30m + D1/D3/D7/D14 unlocks |
| Offer screenshots/prices | monetization architecture | in-game capture by progression stage |
| Event participation / payer metrics | test LiveOps value | unavailable publicly; use own-product instrumentation |

## Sources

- Gossip Harbor US App Store: https://apps.apple.com/us/app/gossip-harbor-merge-story/id1623318294
- Township US App Store: https://apps.apple.com/us/app/township/id638689075
- Hay Day US App Store: https://apps.apple.com/us/app/hay-day/id506627515
- Big Farm Homestead US App Store: https://apps.apple.com/us/app/big-farm-homestead/id6742455668
- The Cozy Florist US App Store: https://apps.apple.com/us/app/the-cozy-florist/id6754878717
- Office Cat US App Store: https://apps.apple.com/us/app/office-cat-idle-tycoon-games/id6471960010
- KPI series: repository `01_watchlist/DIANDIAN_PRIORITY8_MONTHLY_2021-09_2026-08.csv`
