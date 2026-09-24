# SIMS 19-Game Competitor Trend × Cause Analysis v1.0

**Date:** 2026-09-24  
**Data window:** 2025-09 → 2026-08 only  
**Method:** `skills/competitor-trend-cause-analysis/SKILL.md` v1.0  
**Primary market lens:** **US-first · Global-secondary**  
**Input commit:** `16f98ab1ae072d4f33c518f6ab8883c8cbf0628e`  
**Status:** **EVIDENCE-BOUNDED CROSS-PRODUCT ANALYSIS · FINAL FOR CURRENT DATA WINDOW**  
**Not included:** full launch-to-date history, paid/organic attribution, complete monthly LiveOps/version history, final interactive HTML.

---

# 0. Facts and hard boundaries

## SOURCE
Current DianDian account exposes only **2025-09 through 2026-08**. Earlier months are permission-gated.

Coverage:
- 19 requested product families
- 228 monthly rows
- 16 products with monthly downloads
- 17 products with monthly IAP revenue
- QQ经典农场: native-store metrics are N/A
- Resortopia: monthly downloads unavailable
- 我的花园世界: monthly revenue unavailable
- 疯狂水世界 / Wild Water World: complete monthly downloads unavailable
- Heartopia downloads = Global-only; revenue = broader regional collection scope; **cross-scope RPD / persistence is invalid**
- Paid/organic, monthly creative volume, historical rating/version, and full monthly LiveOps/IP evidence are unavailable.

## US-first rule
The current 19-game monthly panel is primarily Global / product-collection scope.

Therefore:
- **US monthly downloads: TBD** for most products.
- **US monthly revenue: TBD** for most products.
- Global / collection trends are used as **structural evidence**, not relabeled as US performance.
- Any final US UA or revenue decision must wait for US-specific series.

Heartopia has monthly top-country mix in its separate Global export and shows the US as a major country, but that still does not create a full US monthly revenue series.

---

# 1. Method QA — important correction

The populated legacy field `3m_revenue_carryover` does not match the formula documented in schema v0.2.

QA shows the stored values equal:

```
Trailing 3M Revenue Hold vs Peak
= average(last 3 monthly revenues) / visible-window peak monthly revenue
```

Example — Gossip Harbor:
- Jun: $73.36M
- Jul: $79.32M
- Aug: $87.03M
- trailing 3M average ≈ $79.91M
- visible peak = $87.03M
- 3M Hold = **91.81%**

Therefore this report renames the concept:

> **CALCULATED · 3M Revenue Hold vs Peak**

It is **not** cohort retention, LTV, or forward revenue carryover.

See:
- `04_data_method/DIANDIAN_MONTHLY_SCHEMA_v0.3_2026-09-24.md`
- `09_reports/DIANDIAN_19_GAMES_DERIVED_MATRIX_v1.0_2026-09-24.csv`

---

# 2. Executive synthesis

## 2.1 The strongest durable businesses in the visible window

### Gossip Harbor
**OBSERVED**
- 12M visible downloads: **88.27M**
- 12M visible IAP: **$829.15M**
- latest downloads / visible peak: **83.87%**
- latest revenue / visible peak: **100%**
- 3M Revenue Hold: **91.81%**
- latest same-month RPD: **$9.13**

**Interpretation · E0**
This is the strongest “scale + monetization + reacceleration” sample in the panel. Downloads reaccelerate sharply in Jul 2026 (+61% MoM), while Aug revenue reaches the visible-window peak.

**Counter evidence**
Paid/organic and event history are missing, so the Jul download spike cannot be attributed to organic, UA, or a specific LiveOps event.

---

### Township
**OBSERVED**
- visible downloads: **105.34M**
- visible IAP: **$413.60M**
- latest downloads / peak: **72.59%**
- latest revenue / peak: **100%**
- 3M Revenue Hold: **95.24%**
- latest RPD: **$4.93**

**Interpretation · E0**
Revenue reaches a new window peak while downloads remain below their January peak. Same-month revenue and downloads are only weakly coupled in the visible window, consistent with a mature installed-base business rather than a business driven only by new downloads.

**Counter evidence**
No payer, DAU, cohort, or source-mix data; “old users caused it” is still an inference, not proof.

---

### Hay Day
**OBSERVED**
- visible downloads: **31.35M**
- visible IAP: **$159.92M**
- latest downloads / peak: **87.38%**
- latest revenue / peak: **96.45%**
- 3M Revenue Hold: **95.39%**
- latest RPD: **$5.33**

**Interpretation · E0**
The cleanest long-term stable profile in the sample: downloads and IAP both stay close to visible peaks with low volatility.

**Counter evidence**
The visible 12 months are only a tiny slice of a 2012 product lifecycle. This proves current durability, not why the product became durable.

---

# 3. Operational clusters

These are **SAMPLE / CALCULATED internal clusters**, not industry standards.

## A. Long-term stable
Rule used:
- latest downloads ≥70% of visible peak
- latest revenue ≥80% of visible peak
- trailing 3M revenue hold ≥80%

Products:
- **Gossip Harbor**
- **Township**
- **Hay Day**
- **My Perfect Hotel**
- **Eatventure**
- **Rent Please!**

Common pattern:
> Acquisition does not need to sit exactly at peak for revenue to remain strong.

Research value:
- Mature LiveOps
- repeatable goals
- installed-base monetization
- event / content cadence
- long progression

---

## B. Download decay, revenue holds
Rule used:
- latest downloads ≤55% of visible peak
- latest revenue ≥80% of visible peak
- trailing 3M revenue hold ≥80%

Products:
- **Big Farm Homestead**
- **向往的生活**
- **时尚百货城**

Strongest new-product example:
- **Big Farm Homestead:** downloads 52.49% of peak, revenue 92.17%, 3M hold 89.06%.

Extreme decoupling:
- **时尚百货城:** downloads 12.22% of peak, revenue 100%, 3M hold 90.55%.

**Interpretation · E0**
These are strong candidates for “new-download decline without equivalent IAP collapse.”

**Counter evidence**
High RPD can be inflated by a shrinking download denominator. Without DAU / payer / cohort data, do not call this LTV or retention.

---

## C. Secondary scale / reacceleration candidates

Transparent flag:
- after at least three visible data months, monthly downloads rebound ≥25%, or revenue rebounds ≥20%.

Notable candidates:
- **Gossip Harbor:** Jul downloads +61.3%; Aug revenue at new window peak.
- **Township:** Jul downloads +41.8%; Aug revenue at peak.
- **The Cozy Florist:** Aug downloads +94.8%.
- **My Perfect Hotel:** Jul downloads +26.9% and revenue +63.6%.
- **Rent Please!:** Jul downloads +35.8%; Aug becomes visible-window download peak.
- **我的花园世界:** Feb 2026 +240% download jump, then Mar peak.
- **向往的生活:** Jun downloads +273%; Jul revenue +70.6%.
- **Big Farm Homestead:** May downloads +25.0% and visible peak.

**Evidence level:** mostly **E0**.

Why not E1:
- source mix unavailable
- campaign spend unavailable
- monthly LiveOps/version evidence unavailable

So “secondary scale” describes the curve, not the cause.

---

## D. Download and revenue both weaken

### Cat Snack Bar
- downloads latest / peak: **49.36%**
- revenue latest / peak: **49.07%**
- 3M hold: **63.17%**

This is the cleanest synchronized decay case.

### Office Cat
- downloads latest / peak: **23.59%**
- revenue latest / peak: **56.12%**
- 3M hold: **56.88%**

Revenue decays much slower than downloads, but absolute revenue still falls to roughly half the visible peak. This is **partial monetization persistence**, not a fully stable long-term plate.

---

## E. Evidence insufficient / non-comparable

- **Heartopia** — download / revenue scope mismatch.
- **我的花园世界** — revenue unavailable.
- **疯狂水世界 / Wild Water World** — complete download series unavailable.
- **Resortopia** — downloads unavailable.
- **QQ经典农场** — mini-game, native-store metrics N/A.

These remain in the study but cannot be force-fitted into the same download-vs-revenue cluster.

---

# 4. Focus 8 — deep comparison

| Product | Download latest/peak | Revenue latest/peak | 3M revenue hold | Latest RPD | Working read |
|---|---:|---:|---:|---:|---|
| Gossip Harbor | 83.9% | 100% | 91.8% | $9.13 | Large durable/reaccelerating live business |
| Township | 72.6% | 100% | 95.2% | $4.93 | Mature revenue grows without matching download growth |
| Hay Day | 87.4% | 96.5% | 95.4% | $5.33 | Extremely stable long-term plate |
| Heartopia | 3.5% | 38.8%* | 40.1%* | N/A | Launch-download collapse; cross-metric comparison invalid |
| Big Farm Homestead | 52.5% | 92.2% | 89.1% | $2.22 | New product with strong revenue hold after download peak |
| The Cozy Florist | 71.1% | 68.3% | 67.3% | $0.57 | Good scale, but revenue broadly tracks downloads; Aug reacquisition candidate |
| Office Cat | 23.6% | 56.1% | 56.9% | $2.29 | Revenue lasts longer than downloads but business still decays materially |
| 时尚百货城 | 12.2% | 100% | 90.5% | $20.71 | Extreme revenue/download decoupling; RPD denominator warning |

* Heartopia revenue is broader collection scope than download scope; do not calculate RPD or persistence from the pair.

---

# 5. Focus 8 — Trend → Flag → Crosscheck → Evidence → Interpretation → Action

## 5.1 Gossip Harbor

### Trend — OBSERVED
- Sep 2025 downloads 6.73M → Dec 4.29M → Jan rebound 8.88M.
- Jul reaches visible peak **11.36M**.
- Aug remains **9.53M**.
- Revenue rises from $51.95M in Sep to visible peak **$87.03M in Aug**.

### Flag — CALCULATED
- Jan download rebound: +106.7% MoM.
- Jul download rebound: +61.3% MoM.
- latest 3M revenue hold: 91.8%.

### Crosscheck
- Historical review trend: TBD.
- Monthly version/content event: TBD.
- Source mix / paid-organic: TBD.
- Current snapshot only: rating 4.3 / 704K reviews, updated 2026-09-21.

### Evidence
**E0 for cause; high confidence for trend.**

### Interpretation — INFERRED
The product demonstrates that a mature content machine can simultaneously sustain high acquisition scale and continue lifting IAP.

### Counter Evidence
Cannot conclude Jul was organic, LiveOps-driven, or UA-driven.

### Testable Action
For our US prototype, separate:
- acquisition event
- collection event
- monetization event
and attach campaign/event IDs so a future July-like rebound can be attributed rather than guessed.

---

## 5.2 Township

### Trend — OBSERVED
Downloads stay in a broad 7.2M–11.4M monthly range; Jul rebounds to 11.35M. Revenue trends upward and peaks at **$40.89M in Aug**.

### Flag
- Jul downloads +41.8%.
- latest revenue = 100% of window peak.
- 3M revenue hold = 95.2%.
- revenue/download peak persistence = 1.38×.

### Crosscheck
Historical LiveOps / paid-organic unavailable.
Current snapshot: rating 4.7 / 12.9M reviews, updated 2026-09-23.

### Evidence
**E0 for cause.**

### Interpretation
A mature simulation economy can monetize independently of same-month new-user peaks.

### Counter Evidence
Revenue uplift could come from price/offer/event/payer-mix effects; no direct payer evidence.

### Testable Action
Do not design our long-term economy as “more new users = more revenue.” Build recurring sinks, collection and event purchase reasons for the retained base.

---

## 5.3 Hay Day

### Trend
Downloads are remarkably stable: 2.07M–3.11M visible range. Revenue stays around $11.1M–$15.0M and peaks in May.

### Flag
- latest downloads = 87.4% of peak.
- latest revenue = 96.5%.
- 3M hold = 95.4%.
- no major late-window acquisition spike is required to sustain IAP.

### Crosscheck
Current snapshot: rating 4.4 / 13.1M reviews.
Historical event/source mix: TBD.

### Evidence
**E0 for causal mechanisms; strong OBSERVED durability.**

### Interpretation
This is the panel’s cleanest benchmark for “stable loop + stable long-term monetization.”

### Counter Evidence
The 12-month window cannot explain the product’s decade-long retention architecture.

### Testable Action
Use Hay Day as the “minimum content durability” reference: recurring production, orders, collection/social goals and long-term asset ownership should remain understandable without a constant stream of new modes.

---

## 5.4 Heartopia

### Trend
Global downloads:
- Jan launch peak 10.89M
- Aug 0.385M = **3.54%** of peak

Revenue collection:
- Feb peak $22.20M
- Aug $8.62M

### Flag
- acquisition normalization is extreme.
- Jul revenue rebounds +31.7%.

### Crosscheck
- official global launch timing supports the Jan acquisition spike.
- existing working report crosschecked My Little Pony and Build Challenge timing.
- paid/organic remains TBD.
- revenue scope does not match download scope.

### Evidence
- launch spike: **E1**
- download-vs-revenue persistence: **NOT COMPARABLE**
- US revenue performance: **TBD**

### Interpretation
Heartopia remains a strong **product-design** benchmark for ownership/lifestyle/social expression, but current DianDian data is not safe for RPD or retained-revenue comparison.

### Counter Evidence
A broader revenue collection can mechanically make revenue appear to hold much better than Global-only downloads.

### Testable Action
Use Heartopia to learn:
```
low-pressure action
→ home/avatar ownership
→ pet/collection
→ social expression
→ seasonal/IP content
```
Do not use this data to set US LTV or CPI gates.

---

## 5.5 Big Farm Homestead

### Trend
Visible ramp:
- Nov 2025: 104K downloads / $23K revenue
- Jan 2026: 840K / $530K
- Mar: 730K / $1.15M
- May visible peak: 964K / $1.22M
- Aug: 506K / $1.13M

### Flag
- downloads fall to 52.5% of peak.
- revenue remains 92.2%.
- 3M revenue hold 89.1%.
- persistence ratio 1.76×.

### Crosscheck
Paid/organic and monthly event evidence: TBD.
Current snapshot: 4.6 rating / 62K reviews.

### Evidence
**E0 for cause; strong CALCULATED decoupling.**

### Interpretation
Among newer Western-facing cozy/farming products, this is one of the best candidates for a real long-meta study: revenue becomes far less dependent on new download volume after ramp.

### Counter Evidence
No DAU/payer data; we cannot tell whether the effect comes from retention, payer rate, price, whales, or event spend.

### Testable Action
Prioritize teardown of:
- D7–D30 unlock structure
- production-chain depth
- recurring event sinks
- payer segmentation
rather than only its farming surface.

---

## 5.6 The Cozy Florist

### Trend
- Dec 139K downloads
- Jan 282K
- Feb 980K
- Mar peak **1.95M**
- Jul trough 710K
- Aug rebound **1.38M (+94.8%)**
- Revenue peaks Mar at $1.16M; Aug $0.79M.

### Flag
Clear acquisition reacceleration in Aug.
Revenue does not reaccelerate at the same magnitude.

### Crosscheck
Paid/organic / ad creative / event source unavailable.
Current snapshot: rating 4.7 / 157K reviews.

### Evidence
**E0.**

### Interpretation
This is a particularly useful **cozy acquisition** benchmark: the product can reacquire scale, but IAP appears more tied to download volume than Big Farm Homestead.

### Counter Evidence
Aug cohorts may not yet have matured; same-month IAP can lag new-user acquisition.

### Testable Action
For a US garden/cozy product, test this surface:
- flowers / collection
- tactile care
- personalized garden
against a deeper progression variant.
Primary question: can the same creative hook produce stronger D30 / payer depth?

---

## 5.7 Office Cat

### Trend
- Sep 2025 visible download peak 429K / revenue peak $413K
- Aug 2026: 101K / $232K

### Flag
- downloads: 23.6% of peak
- revenue: 56.1%
- 3M hold: 56.9%
- revenue decays slower than downloads, but still materially declines.

### Crosscheck
Current snapshot: 4.6 / 510K reviews.
Monthly event/source mix: TBD.

### Evidence
**E0 for why; high confidence for curve shape.**

### Interpretation
Cute isometric/idle art can support monetization beyond acquisition decay, but this visible window does not support calling the business “stable.”

### Counter Evidence
The visible peak is the first month in our window, not necessarily lifecycle peak; full launch-to-date is unavailable.

### Testable Action
Use Office Cat mainly for:
- production efficiency
- cute IP packaging
- modular rooms
- idle upgrade readability
not as the sole retention benchmark.

---

## 5.8 时尚百货城

### Trend
- Jan 399K downloads / $128K revenue
- Feb download peak 2.45M / $3.08M
- Mar downloads 870K while revenue rises to $5.57M
- Aug downloads 299K, revenue reaches visible peak **$6.19M**

### Flag
- downloads fall to **12.2%** of peak.
- revenue reaches **100%** of peak.
- 3M revenue hold **90.5%**.
- latest RPD $20.71.

### Crosscheck
Current snapshot rating 3.81 from only 244 reviews.
No historical review/offer/event/source data.

### Evidence
**E0 for cause; very strong OBSERVED/CALCULATED decoupling.**

### Interpretation
This is the panel’s strongest “new downloads collapse, IAP continues to strengthen” curve.

### Counter Evidence
- RPD is strongly denominator-sensitive.
- Small public review sample cannot validate broad satisfaction.
- Without DAU/payer split, the curve may be driven by a small high-value payer base.
- US relevance is unproven.

### Testable Action
Study monetization architecture, not art/theme:
- payer ladder
- VIP / offer cadence
- collection/event sinks
- late-game progression pressure
but do not use the RPD number as an LTV target.

---

# 6. All 19 products — required lifecycle answers

| Product | Launch / visible start | Download peak → latest | Revenue peak → latest | 3M revenue hold | Working conclusion |
|---|---|---|---|---:|---|
| Heartopia | Global launch Jan-26; revenue has pre-global regional history | 10.89M Jan → 0.385M Aug (3.5%) | $22.20M Feb → $8.62M Aug* | 40.1%* | Launch-download collapse; cross-scope revenue comparison invalid |
| Township | 2013 launch; visible Sep-25 | 11.42M Jan → 8.29M (72.6%) | $40.89M Aug → $40.89M | 95.2% | Long-term stable; revenue stronger than download trend |
| Hay Day | 2012 launch; visible Sep-25 | 3.11M Nov → 2.72M (87.4%) | $15.04M May → $14.51M (96.5%) | 95.4% | Strongest stable long-tail profile |
| 我的花园世界 | Aug-25 launch; visible Sep-25 | 1.81M Mar → 0.73M (40.3%) | TBD | TBD | Download secondary scale visible; revenue conclusion unavailable |
| The Cozy Florist | Nov/Dec-25 listings | 1.95M Mar → 1.38M (71.1%) | $1.16M Mar → $0.79M (68.3%) | 67.3% | Mid-retention + Aug reacquisition candidate |
| Good Pizza, Great Pizza | 2014 launch | 2.56M Jan → 2.00M (78.1%) | $38.8K Sep → $27.2K (70.1%) | 67.7% | Durable acquisition; IAP-only view understates ad/premium business |
| My Perfect Hotel | 2022 launch | 5.66M Dec → 4.92M (86.9%) | $0.676M Aug peak | 84.8% | Stable/reaccelerating acquisition; IAP remains secondary signal |
| Eatventure | 2022 launch | 0.67M Jun → 0.63M (94.2%) | $0.484M May → $0.405M (83.8%) | 93.9% | Stable compact hybrid-casual/idle plate |
| Office Cat | 2024 launch; visible peak Sep-25 | 0.429M → 0.101M (23.6%) | $0.413M → $0.232M (56.1%) | 56.9% | Revenue decays slower than downloads, but not stable |
| Rent Please! | 2022 launch | Aug-26 is visible peak 1.14M | $0.581M Apr → $0.556M (95.8%) | 86.6% | Reacceleration / durable ownership candidate |
| 疯狂水世界 | Jan-26 CN launch | Downloads TBD | Aug revenue peak $6.77M | 74.2% | Strong revenue ramp; acquisition comparison unavailable |
| Animal Restaurant | 2019 launch | 0.180M Dec → 0.137M (75.8%) | $49.7K May → $36.1K (72.5%) | 64.5% | Durable audience, weaker visible IAP hold |
| Big Farm Homestead | Jun-25 Android; visible Nov-25 | 0.964M May → 0.506M (52.5%) | $1.22M May → $1.13M (92.2%) | 89.1% | Strong new-product revenue hold |
| Resortopia | 2021 launch | Downloads TBD | $3.86K Jul → $2.98K (77.2%) | 83.8% | Revenue only; cross-metric conclusion unavailable |
| Cat Snack Bar | 2023 launch | 0.138M Oct → 0.068M (49.4%) | $26.0K Oct → $12.8K (49.1%) | 63.2% | Synchronized decay |
| QQ经典农场 | Feb-26 mini-game | N/A | N/A | N/A | Requires mini-game rank/revenue/traffic dataset |
| 向往的生活 | Oct-25 current edition | 0.143M Jun → 0.031M (21.6%) | Aug revenue peak $0.508M | 83.7% | Download decay + revenue hold; US relevance TBD |
| 时尚百货城 | Jan-26 | 2.45M Feb → 0.299M (12.2%) | Aug revenue peak $6.19M | 90.5% | Extreme revenue/download decoupling |
| Gossip Harbor | 2022 global; visible Sep-25 | 11.36M Jul → 9.53M (83.9%) | Aug revenue peak $87.03M | 91.8% | Large durable/reaccelerating engine |

* Heartopia scope mismatch. Ratios shown only as within-series descriptors, not cross-series RPD/persistence.

---

# 7. What the 19-game panel says about our product direction

## 7.1 Casual action is useful, but ownership + long meta decides the business

The panel separates two ideas:

### Acquisition-friendly
- Good Pizza
- My Perfect Hotel
- The Cozy Florist
- Heartopia launch

### Revenue durable
- Gossip Harbor
- Township
- Hay Day
- Big Farm Homestead
- 时尚百货城

The products with the strongest revenue hold are not simply the products with the most downloads.

**INFERRED**
For our studio, the best structure remains:

```
Satisfying low-friction action
→ ownership / visible transformation
→ collection / progression
→ recurring LiveOps / monetization sinks
```

---

## 7.2 “割草” should be tested as a Core Acquisition Action, not as the whole game

Evidence pattern:
- light-action titles can keep large download volume,
- but durable IAP requires a meta that survives when acquisition falls.

Recommended experiment:

```
Mow / Clean
→ reveal object / material
→ improve one space
→ choose decoration
→ collection / NPC story
→ unlock next zone
```

### Test A
Pure satisfying mowing.

### Test B
Same mowing + persistent garden/home ownership.

### Test C
Same as B + collection / story / weekly event.

Primary US KPIs:
- creative CTR
- install CVR
- first-action completion
- first transformation time
- D1 / D3 / D7
- first decor action
- second-session ownership return

The hypothesis is not “mowing retains.”  
The hypothesis is:
> mowing acquires; ownership + progression retain.

---

## 7.3 Best structural references for our studio

### For mature retention / LiveOps
- Gossip Harbor
- Township
- Hay Day

### For newer cozy/farming monetization
- Big Farm Homestead
- The Cozy Florist

### For production-efficient cute management
- Office Cat
- My Perfect Hotel
- Rent Please!

### For high-value monetization architecture
- 时尚百货城  
Use for economy/offer study only; US applicability is TBD.

### For lifestyle identity ceiling
- Heartopia  
Use for product/art/ownership study, not current cross-scope monetization math.

---

# 8. US-first decision layer

## What we can say now
**GLOBAL / COLLECTION STRUCTURAL SIGNAL**
- Long-lived farming/management products can sustain revenue with downloads below peak.
- Some newer products show strong revenue persistence after acquisition peak.
- Reacceleration events are common; stable businesses are not necessarily monotonic.
- IAP depth differs massively across product structures.

## What we cannot say yet
**US TBD**
- which product has the highest US organic share
- which title has the best US CPI
- which title is US paid-led vs organic-led
- US RPD / payer depth by title
- whether the same events work in the US
- whether Asia-heavy products transfer to US audiences

## Next US data pull priority
1. Gossip Harbor
2. Township
3. Hay Day
4. Big Farm Homestead
5. The Cozy Florist
6. Office Cat
7. My Perfect Hotel
8. Heartopia — strict US entity/scope match only

Required:
- US monthly downloads
- US monthly IAP
- US source mix / paid proxy
- US store ranking / review trend
- event/version timestamps
- creative / spend proxy if licensed access allows

---

# 9. A–F team summary required by Skill

## A. What changed
- Mature leaders remain near peak revenue across the visible year.
- Several new products show much faster download decay than revenue decay.
- Multiple products show late-window reacquisition/reacceleration.
- Heartopia’s global launch downloads collapse rapidly, but scope mismatch blocks valid revenue persistence math.

## B. What may explain it
Current evidence supports **curve descriptions**, not most causal drivers.
Potential mechanisms:
- installed-base monetization
- recurring content/events
- payer-mix deepening
- reacquisition / UA bursts
- collection and ownership progression

Most remain **E0** until source/event data is added.

## C. What does NOT explain it
- “Downloads fell, therefore retention is bad” — not supported.
- “Revenue stayed high, therefore D30 is high” — not supported.
- “RPD is high, therefore LTV is high” — false.
- “Late download spike = organic growth” — not supported without source mix.
- Global data cannot be relabeled as US.

## D. What patterns repeat
1. Long-term businesses decouple revenue from same-month acquisition.
2. Stable products can reaccelerate; curves are not one-way decay.
3. New cozy/farming products can develop meaningful payer depth after download peak.
4. Cute/light art alone does not guarantee durable revenue.
5. A simple core needs ownership/collection/event depth to become a long-lived F2P business.

## E. What we should test
US-first prototype:
- **Core:** mowing / cleaning / satisfying transformation
- **Meta:** personal garden/home
- **Retention:** collection + NPC story + unlock zones
- **AI-native:** personalized task/story framing, not AI-controlled economy
- **LiveOps:** one weekly reusable event template
- **Art:** bright cozy base + 10–30% handcrafted authored detail

## F. What is still missing
- US-specific monthly panel
- paid/organic / source mix
- historical reviews
- historical versions
- monthly LiveOps / collab map
- ad creative history
- full launch-to-date before 2025-09
- mini-game-specific metrics for QQ经典农场
- native download coverage for 疯狂水世界 and Resortopia
- revenue coverage for 我的花园世界

---

# 10. Release decision

This report is sufficient for:
- cross-product lifecycle clustering
- choosing teardown priorities
- defining product hypotheses
- designing the first US prototype tests

It is **not** sufficient for:
- US CPI/LTV targets
- organic-vs-paid attribution
- causal LiveOps claims
- final launch budget
- final self-contained HTML presented as complete evidence

The interactive HTML remains the next evidence stage after US/source/event coverage improves.
