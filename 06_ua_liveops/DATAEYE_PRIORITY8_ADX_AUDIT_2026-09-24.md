# DataEye AdXray Priority 8 — UA / Creative Audit

**Capture date:** 2026-09-24
**Source:** licensed DataEye AdXray session at `https://oversea-v2.dataeye.com/creative/material`
**Window:** 2024-09-24 through 2026-09-24
**Scope:** Android package exact-search for Gossip Harbor, Township, Hay Day, Big Farm Homestead, The Cozy Florist, Office Cat, My Perfect Hotel and Heartopia
**Companion sources:** `DIANDIAN_PRIORITY8_MONTHLY_2021-09_2026-08.csv` and `PRIORITY8_AD_CREATIVE_PRIMARY_CROSSCHECK_2026-09-24.md`

## Evidence boundary

- `[SOURCE]` Record counts, de-dup counts, estimated exposure/downloads, run days and audience data are vendor outputs displayed by DataEye. They are not first-party spend, impressions, installs, CTR or CVR.
- `[OBSERVED]` Copy, video cover, format, duration, media icon, countries and audience values were read from the visible card/detail page.
- `smart_dedup_records` is the best available **creative-volume proxy**. It is not a verified count of campaigns or original production files.
- `facebook_coverage_proxy`, `google_coverage_proxy` and `us_coverage_proxy` divide the filtered smart-de-dup count by the all-market smart-de-dup count. They are **coverage indices**, not budget or impression shares. A creative can appear in more than one media group, so the media indices are not additive.
- The search window is two years, but a re-run card can display a lifetime first-seen date earlier than the window.
- The Cozy Florist query covers the verified GB Android package. Other regional packages remain separate unless a publisher mapping is verified.
- Raw licensed exports and videos are intentionally not committed. The repository contains normalized observations, source URL, capture date and validation method only.

## 1. Comparable channel / geography matrix

| Game | Smart de-dup proxy | Facebook index | Google index | US index | What this supports |
|---|---:|---:|---:|---:|---|
| Gossip Harbor | 27,000 | 3.8% | 10.4% | 23.9% | Large multi-channel library; sampled long-run YouTube drama hook |
| Township | 37,000 | 40.5% | 13.7% | 51.4% | Largest library in the eight; meaningful Meta-family and US coverage |
| Hay Day | 4,804 | 57.8% | 20.6% | 49.2% | Smaller library than Township, despite extremely durable DianDian revenue |
| Big Farm Homestead | 2,182 | 72.6% | 16.4% | 60.6% | Facebook-heavy and strongly US-facing in the sampled window |
| The Cozy Florist | 16,000 | 93.8% | 3.7% | 46.3% | Extreme Facebook-family concentration; selected card was Instagram |
| Office Cat | 1,629 | 55.8% | 19.3% | 35.3% | Compact creative system with long-running evergreen cards |
| My Perfect Hotel | 8,605 | 4.3% | 42.1% | 28.2% | Google/YouTube-oriented; direct gameplay creative can run for years |
| Heartopia | 6,237 | 62.1% | 38.5% | 14.0% | Social-expression distribution across Meta and Google plus high-reach TikTok posts |

## 2. Representative high-heat observations

### Gossip Harbor

- `[OBSERVED]` The selected US card was a 47-second 16:9 YouTube video, estimated 7.0M exposure, 4K downloads and 509 run days.
- `[OBSERVED]` The opening frame showed relationship/casino conflict with stylized characters and no visible merge board.
- `[SOURCE]` Official stores define the product as food merge → restaurant repair/decor → mystery/relationships.
- `[INFERRED]` The hook maximizes emotional conflict before showing the real loop. It is a useful acquisition angle, but a poor onboarding promise unless the first-session story tone pays it off quickly.

### Township

- `[OBSERVED]` The selected 30-second card used “The #1 Farm Game” and a prize/timer screen; DataEye showed 12.1M estimated exposure and 795 run days.
- `[OBSERVED]` Audience readout: 74.75% female, 24.79% male, 0.46% unknown.
- `[SOURCE]` The real product includes farming, city building, Match-3, expeditions, passes and collections.
- `[INFERRED]` The evergreen unit sells reward urgency while the copy anchors the farm identity. Cozy Sims can borrow the clarity of the reward reveal, but should avoid presenting a timer/reward screen before a player can understand ownership and transformation.

### Hay Day

- `[OBSERVED]` A high-heat 12-second source-post style card used: “After a long day… my farm is my peaceful place,” with #cozygaming and #haydaydesign.
- `[SOURCE]` The actual product supports farming, decoration, trading, neighborhoods and recurring seasonal systems.
- `[INFERRED]` This is the cleanest promise-product fit in the sample: emotional decompression is delivered by the real farm and ownership loop.

### Big Farm Homestead

- `[OBSERVED]` A 30-second 9:16 Meta-family card ran 169 days across 26 countries. Copy: “Build, grow, and relax” / “Welcome home, farmer.”
- `[OBSERVED]` The selected card's audience was 68.12% female, 31.24% male and 0.64% unknown.
- `[OBSERVED]` The frame used a warm, realistic homestead diorama rather than dense UI.
- `[SOURCE]` The product extends the farm loop into three-farm restoration, mystery/relationships and LiveOps passes.
- `[INFERRED]` “home” and restoration are stronger long-term bridges than generic “relax”: they connect acquisition emotion to an owned asset.

### The Cozy Florist

- `[OBSERVED]` A selected 18-second 9:16 Instagram card ran 109 days across eight countries. Copy: “Try it now” / “Create your own secret garden.”
- `[OBSERVED]` The frame showed first-person real-world flower craft imagery rather than visible game UI.
- `[OBSERVED]` Audience readout was 98.29% female, 1.37% male and 0.34% unknown.
- `[SOURCE]` The actual product is garden + flower-shop management, customization, visits/likes and real-bouquet rewards.
- `[INFERRED]` The creative packages the fantasy as tactile lifestyle craft. This is attractive for Cozy Sims, but the first playable minute must rapidly reveal the in-game garden and avoid a bait-and-switch gap.

### Office Cat

- `[OBSERVED]` The selected US card was 30 seconds, estimated 4.8M exposure and 377 run days; copy stayed close to the product name and tycoon framing.
- `[SOURCE]` The real loop is idle income → office/company upgrades → city expansion, with cute cats and side systems.
- `[INFERRED]` The production advantage is readable growth and a reusable character skin, not deep lifestyle identity.

### My Perfect Hotel

- `[OBSERVED]` The selected 25-second square YouTube card had no copy, showed direct top-down hotel service/upgrade gameplay, and ran 768 days with 11.7M estimated exposure.
- `[SOURCE]` The real loop is manual service → cash/tips → upgrades → staff automation → hotel expansion.
- `[INFERRED]` This is the best “show the loop, not the fantasy” benchmark. It is well suited to Google/YouTube and evergreen production, but needs a stronger ownership/identity layer for a deeper Cozy Sims product.

### Heartopia

- `[OBSERVED]` The selected 14-second TikTok card showed matching couple outfits. DataEye estimated 51.2M exposure, 69.7K downloads and one day of delivery in the US and Indonesia.
- `[SOURCE]` Matching outfits, multiplayer, fashion, photography and UGC are real product capabilities.
- `[INFERRED]` Social identity can generate reach far beyond a task-loop demonstration. The DianDian launch curve still fell sharply, so one-day reach is not evidence of durable retention or monetization.

## 3. Cross-validation against DianDian lifecycle data

| Signal | Crosscheck | Evidence-bounded interpretation |
|---|---|---|
| Township has the largest smart-de-dup library and 2026-08 revenue at its visible peak | Five-year DianDian history shows durable scale and revenue | Compatible with always-on UA + mature LiveOps; not proof that creative volume caused revenue |
| Hay Day's library is far smaller than Township's while latest revenue is 96.5% of its five-year visible peak | DianDian shows long-run revenue durability | Strong counterexample to “more creatives = more durable business” |
| The Cozy Florist is extremely Facebook-heavy and female-skewed in the selected card | Downloads and revenue peaked together in 2026-03; Aug downloads rebounded faster than revenue | Supports testing lifestyle/female-first acquisition, but current data does not prove cohort depth |
| Big Farm Homestead has a smaller library but US-heavy coverage and a home/restoration promise | Aug revenue remained 92.2% of peak while downloads were 52.5% | Compatible with better monetization persistence; payer and retention mechanisms remain TBD |
| My Perfect Hotel uses long-lived direct-gameplay YouTube units | It retains large download volume but has much lower IAP depth than narrative/farm leaders | Efficient acquisition template, not a complete Cozy product strategy |
| Heartopia shows high-reach social-expression cards | Global downloads fell to 3.5% of launch peak while the revenue scope is not comparable | Viral social reach does not establish paid/organic mix, retention or revenue carryover |
| Gossip Harbor has a very large library and story-conflict hooks | Downloads reaccelerated in 2026-07 and revenue peaked in 2026-08 | UA activity is plausible; no source mix or matched event series proves the driver |

## 4. Cozy Sims acquisition and product requirements

### Use now

1. **Promise architecture:** every ad must name its product layer: `Core`, `Ownership Meta`, `Relationship/Identity`, `LiveOps/IP`.
2. **First-five-second bridge:** hook with emotion or aspiration, then show the actual interaction and a persistent before/after asset before second 5.
3. **Two production lanes:**
   - Meta/TikTok: 9:16, 12–20 seconds, identity/relationship/tactile lifestyle, creator-native pacing.
   - Google/YouTube: 1:1 or 16:9, 20–30 seconds, legible action→reward→upgrade loop, evergreen variants.
4. **Female-first, not female-only:** representative Township, Big Farm and Cozy Florist cards skewed 68%–98% female. Use broad targeting with female-first creative hypotheses; do not hard-code age or gender exclusions from one vendor sample.
5. **Match the landing/onboarding:** if an ad leads with couple outfits, secret garden, restoration or pet companionship, the same payoff must be reachable in the first session.
6. **Owned transformation:** borrow Big Farm's “welcome home” and My Perfect Hotel's immediate readable action; combine them as `satisfying action → visible home/garden improvement → personal choice`.
7. **Social-expression ceiling:** build photo, outfit, pet, visit/like or co-create outputs only after the owned space is already satisfying alone.

### Do not copy blindly

- Relationship crisis that the early product cannot repay.
- Real-world craft footage that hides the game for the whole ad.
- Prize/timer screens as the only value proposition.
- “#1 / most popular” claims without substantiation.
- Physical reward/lottery mechanics before country rules, odds, fulfillment, privacy and platform compliance are known.
- Ad-record counts used as spend, CPI, paid share or effectiveness.

## 5. Minimum test matrix

| Test | Fixed controls | Variants | Primary decision metric | Product-quality guardrail |
|---|---|---|---|---|
| Hook family | US, placement, bid/optimization, landing page, edit length | calm craft / light crisis→repair / identity-social | IPM or install CVR | D1, core-reach, promise-match survey |
| Product layer | same footage and voiceover | action / ownership before-after / relationship-meta | CTR → install → first-session completion | D7 and first decor/return action |
| Channel format | same proposition | 9:16 15s vs 1:1 25s vs 16:9 30s | channel-normalized CPI/IPM | creative fatigue and cohort D1/D7 |
| Audience hypothesis | broad age; no exclusions at start | female-first copy / universal mastery copy / social identity copy | qualified install cost | gender/age cohort retention, not CTR alone |
| Honesty bridge | same hook | gameplay by second 2 / second 5 / second 8 | CVR | refund/uninstall, tutorial drop-off |

## 6. Remaining gaps

- DataEye spend, CPM, CTR, CVR and placement-level delivery were not exposed in the sampled view.
- Exact age-bucket labels were not text-exposed in the captured detail cards; only gender ratios are reported here.
- `paid_downloads`, `organic_downloads` and organic share remain unavailable; ADX counts do not fill those fields.
- Creative counts need a 30/90/180-day time series before fatigue or launch-burst conclusions can be made.
- A representative card is not the distribution of all creative concepts. Full concept tagging requires a stratified sample by media, country, time and sort rule.
- The Cozy Florist real-bouquet eligibility/odds/fulfillment and Big Farm launch/anniversary scope remain unresolved.
