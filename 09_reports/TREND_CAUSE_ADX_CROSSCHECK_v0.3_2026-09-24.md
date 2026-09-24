# SIMS Trend × Cause — DataEye AdXray Crosscheck v0.3

**Date:** 2026-09-24  
**Market priority:** US-first, Global-secondary  
**Parent skill:** `skills/sims-full-competitor-benchmark/SKILL.md`  
**Trend/Cause skill:** `skills/competitor-trend-cause-analysis/SKILL.md`

## Evidence boundary

- DataEye AdXray record counts, smart-de-dup counts, estimated exposure/downloads, run days, country/media labels and audience readouts are vendor-source observations.
- `smart_dedup_records` is a creative-volume proxy, not spend, campaigns, impressions, installs, CTR, CVR or ROAS.
- `facebook_coverage_proxy`, `google_coverage_proxy` and `us_coverage_proxy` are coverage indices, not budget or impression share. They are not additive.
- The current ADX snapshot is a two-year comparable window plus representative high-heat cards. It is **not** a 30/90/180-day concept time series.
- Therefore this round does not upgrade any E0/E1 lifecycle interpretation to E2/E3 solely because ADX evidence exists. Timing/source-mix alignment is still insufficient.

## A. What changed

1. Priority 8 now have a comparable two-year DataEye AdXray creative snapshot using exact Android package searches.
2. Comparable smart-de-dup proxies are now available: Township 37K; Gossip Harbor 27K; The Cozy Florist 16K; My Perfect Hotel 8,605; Heartopia 6,237; Hay Day 4,804; Big Farm Homestead 2,182; Office Cat 1,629.
3. Channel/geography coverage indices are now available. Notable observations:
   - The Cozy Florist: Facebook-family index 93.8%.
   - Big Farm Homestead: US index 60.6%.
   - My Perfect Hotel: Google-family index 42.1%.
   - Township: US index 51.4% with the largest library in the eight.
4. Representative creative cards now provide format/duration/run-days/high-heat hook evidence for all Priority 8.
5. Public lifecycle data remain the same; the new information strengthens UA/Creative and product-promise analysis, not causal attribution.

## B. What may explain it

### Gossip Harbor — large creative library + story-conflict hooks

**OBSERVED:** 27K smart-de-dup proxy; selected US card was a 47s 16:9 YouTube relationship-conflict video running 509 days.

**SOURCE / product truth:** official stores define the installed product as food merge → restaurant repair/decor → mystery/relationships.

**INFERRED · E1 remains:** emotional conflict is a plausible acquisition hook and may support reacquisition, but the snapshot does not establish that creative intensity caused the 2026-07 download reacceleration or 2026-08 revenue peak.

### Township — largest creative library + mature multi-engine product

**OBSERVED:** 37K smart-de-dup proxy; US coverage index 51.4%; selected 30s evergreen card ran 795 days and used reward urgency while copy anchored the farm identity.

**INFERRED · E0 for creative-volume causality:** always-on creative breadth is consistent with mature UA operations, but no time-series or spend/source-mix data show that creative volume caused current revenue resilience.

### Hay Day — durable business with much smaller creative library

**OBSERVED:** 4,804 smart-de-dup proxy, far below Township, while the DianDian panel shows latest revenue at 96.5% of visible five-year peak.

**INTERPRETATION:** this is strong counterevidence to the rule “more creatives = more durable revenue.” Brand, evergreen economy, community and installed-base monetization may matter more than library size.

### Big Farm Homestead — US-facing home/restoration promise

**OBSERVED:** 2,182 smart-de-dup proxy; US coverage index 60.6%; selected 30s 9:16 card ran 169 days and used “Build, grow, and relax / Welcome home, farmer.”

**INFERRED · E1 remains:** the promise is structurally aligned with persistent ownership and is compatible with strong post-peak revenue hold. Payer/retention/source-mix data are still missing.

### The Cozy Florist — Meta-heavy lifestyle craft positioning

**OBSERVED:** 16K smart-de-dup proxy; Facebook-family index 93.8%; selected Instagram card used real-world floral craft / “secret garden” imagery and a strongly female-skewed card-level audience readout.

**INFERRED · E1-low / UNEXPLAINED remains:** the creative system supports a lifestyle/female-first acquisition hypothesis, but does not explain the August download rebound because the current snapshot lacks a matched monthly creative time series and cohort quality.

### My Perfect Hotel — direct-gameplay evergreen acquisition

**OBSERVED:** Google-family index 42.1%; selected 25s square YouTube card showed direct top-down service/upgrade gameplay and ran 768 days.

**INFERRED:** direct gameplay is a strong evergreen acquisition template. It helps explain why the title can sustain broad acquisition, but does not prove any specific monthly anomaly or monetization depth.

### Heartopia — high-reach social-expression creative

**OBSERVED:** selected 14s TikTok matching-outfit card had very high vendor-estimated exposure and one-day delivery.

**COUNTER:** Global downloads later fell sharply; revenue scope is not comparable.

**INTERPRETATION:** social identity can generate reach, but reach does not establish retention, paid/organic mix or revenue carryover.

## C. What does NOT explain it

1. Creative-volume proxy alone does not explain durable revenue: Hay Day is the clearest counterexample.
2. A high-reach representative card does not prove durable acquisition or retention: Heartopia is the clearest counterexample.
3. Facebook/Google/US coverage indices are not spend share and cannot be used as paid-source mix.
4. A long-running card is not automatically a winning ROAS unit; no spend/CTR/CVR/ROAS is available.
5. Card-level gender readouts are not whole-product demographics and should not become hard targeting exclusions.
6. Creative and version/event co-occurrence is not causality without aligned time-series/source-mix evidence.

## D. What patterns repeat across products

### Pattern 1 — two creative production lanes

- Meta/TikTok: 9:16, short, identity/relationship/lifestyle, creator-native pacing.
- Google/YouTube: 1:1 or 16:9, 20–30s, legible action → reward → upgrade, evergreen variants.

### Pattern 2 — the best bridge is emotion → real interaction → owned transformation

Big Farm Homestead and Hay Day preserve product promise strongly. My Perfect Hotel demonstrates immediate core readability. The recommended combination for Ops Cat is:

`emotion/aspiration → real action by second 2–5 → persistent garden/home before-after → personal choice`

### Pattern 3 — creative library size is an operating signal, not a business-quality score

Township/Gossip Harbor operate large creative systems; Hay Day demonstrates durable value with a smaller library; Office Cat demonstrates a compact system. Product economics and installed-base value must be evaluated separately.

### Pattern 4 — social identity is a reach ceiling, not an MVP requirement

Heartopia shows strong social-expression creative potential. Big Farm/Cozy Florist evidence still supports staging social after ownership rather than front-loading it.

## E. What we should test

1. **Hook family:** calm craft vs light crisis→repair vs identity/social. Fixed US placement, optimization and landing page. Primary: IPM/install CVR. Guardrails: D1, core reach, promise-match.
2. **Product layer:** action vs ownership-before-after vs relationship/identity. Primary: CTR→install→first-session completion. Guardrail: D7 + first decor/return action.
3. **Channel format:** 9:16 15s vs 1:1 25s vs 16:9 30s. Primary: channel-normalized CPI/IPM. Guardrail: fatigue + cohort D1/D7.
4. **Honesty bridge:** show gameplay by second 2 vs second 5 vs second 8. Primary: install CVR. Guardrails: tutorial drop, uninstall/refund, promise-match survey.
5. **Audience hypothesis:** broad targeting first; female-first copy vs universal mastery vs social identity. Judge by qualified-install cost and retained cohorts, not CTR alone.

## F. What is still missing

| Gap | Why it matters | Shortest path |
|---|---|---|
| 30/90/180-day creative concept time series | fatigue / launch burst / event refresh | repeat exact package queries by fixed window and tag concepts |
| Spend / CPM / CTR / CVR | effectiveness, not just presence | licensed placement/detail export if available |
| Paid / organic / web source mix | attribution | DataEye source module / MMP-like external source |
| US-only monthly downloads/IAP | primary decision market | pull same-scope US iOS/Android series |
| Stratified creative sample | representative card ≠ distribution | sample by media × US/all market × time × sort rule |
| Cohort D1/D7 / payer quality | validate promise-match | own-product experiment instrumentation |

## Decision

ADX closes a material **UA/Creative evidence gap**, but not the attribution gap. Treat the new evidence as a product-promise/channel/creative-system benchmark. Keep lifecycle causality at existing E0/E1/UNEXPLAINED levels until a matched time series and source mix arrive.
