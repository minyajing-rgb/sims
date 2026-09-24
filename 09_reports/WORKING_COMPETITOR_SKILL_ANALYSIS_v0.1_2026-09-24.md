# SIMS Competitor Trend × Cause — Working Analysis v0.1

**Date:** 2026-09-24  
**Status:** PARTIAL · analysis started with currently verified data  
**Method:** `skills/competitor-trend-cause-analysis/SKILL.md` v1.0  
**Current verified monthly dataset:** Heartopia Global, 2025-12 through 2026-08  
**Coverage status:** 1 / 19 requested product families has verified monthly trend data; 18 remain pending.

> This is a working report, not the final cross-product HTML. It deliberately keeps unavailable revenue / paid / organic fields as TBD instead of inferring them.

---

## 1. Evidence taxonomy

- **SOURCE** — DianDian monthly export; official store/version/event pages; named third-party market data.
- **OBSERVED** — values directly present in those sources.
- **CALCULATED** — deterministic ratios derived from observed values.
- **INFERRED** — interpretation consistent with evidence but not causal proof.
- **TBD** — missing or scope-mismatched data.

---

# 2. Heartopia — current verified trend

## 2.1 Classification

`Core → Meta → Side → LiveOps / Monetization`

**Core**
- exploration / hobbies / gathering / lifestyle interaction
- home and character expression

**Meta**
- home ownership / building
- fashion
- pets
- social relationships
- collections

**Side**
- photography
- party / parkour
- hot-air-balloon event
- build challenges

**LiveOps**
- festival cadence
- time-limited collaborations
- social/build events
- collectible / cosmetic rewards

Commercialization details are still pending in the DianDian dataset and should not be backfilled from inference.

---

## 2.2 Download curve

| Month | Downloads | MoM | Peak Ratio | iOS Share |
|---|---:|---:|---:|---:|
| 2026-01 | 10,886,824 | — | 100.00% | 49.32% |
| 2026-02 | 4,510,681 | -58.57% | 41.43% | 45.83% |
| 2026-03 | 2,898,880 | -35.73% | 26.63% | 43.00% |
| 2026-04 | 1,161,243 | -59.94% | 10.67% | 55.46% |
| 2026-05 | 684,986 | -41.01% | 6.29% | 57.36% |
| 2026-06 | 554,317 | -19.08% | 5.09% | 62.46% |
| 2026-07 | 495,881 | -10.54% | 4.55% | 62.67% |
| 2026-08 | 385,481 | -22.26% | 3.54% | 59.09% |

**OBSERVED:** Jan–Aug cumulative global downloads in the DianDian dataset = **21,578,293**.

**CALCULATED:** January → August monthly downloads declined **96.46%**.

**OBSERVED:** iOS share rose from **49.32%** in Jan to **59.09%** in Aug, peaking around **62.7%** in July. Google Play therefore decayed faster than iOS during the tail.

---

## 2.3 Geographic mix

### January top 5
- US: 13.58%
- Thailand: 10.33%
- Philippines: 9.86%
- Brazil: 9.17%
- Japan: 8.35%
- Top-5 concentration: **51.29%**

### August top 5
- US: 14.96%
- South Korea: 13.27%
- Japan: 10.98%
- Thailand: 10.65%
- Taiwan: 6.53%
- Top-5 concentration: **56.39%**

**INFERRED · E0:** launch acquisition was broader across Southeast Asia / Brazil, while the residual tail became relatively more concentrated in US / KR / JP / TW. This may indicate stronger long-tail fit or monetizable audience quality in higher-value Asian / US markets, but revenue and paid-organic data are required before using this for UA allocation.

---

# 3. Anomaly / event crosscheck

## Window A — January global launch spike
**Metric:** Downloads  
**Change:** launch month peak, 10.89M

**Evidence**
- DianDian: Jan 2026 formal global launch month and download peak.
- App Store version history states official release on **2026-01-08**.

**Evidence level:** **E1**  
Trend + official launch timing.

**Likely driver:** launch visibility / launch acquisition / accumulated preregistration demand.

**Counter evidence / limits**
- Paid vs organic is missing.
- Platform featuring / creator / campaign contribution is not quantified.
- Cannot split launch demand into UA vs organic.

---

## Window B — Feb 14 to Mar 24 My Little Pony collaboration
**Metric:** Downloads  
**Observed:** Feb -58.57% MoM; Mar -35.73% MoM.

**Evidence**
- Yodo1 confirms global Heartopia × My Little Pony event ran **2026-02-14 to 2026-03-24**, excluding China.

**Evidence level:** **E1**

**Interpretation**
The collaboration overlapped with continued download normalization. It therefore **does not support the claim that the IP collaboration reversed acquisition decline**.

It may still have improved:
- engagement,
- payer conversion,
- ARPPU,
- revenue,
- reactivation.

Those cannot be tested yet because monthly revenue / cohort / paid-organic fields are missing.

**Counter evidence**
- Download curve alone cannot judge collaboration ROI.
- IP events can be monetization/retention events rather than acquisition events.

---

## Window C — April 25 Build Challenge / May version support
**Metric:** Downloads  
**Observed:** Apr 1.16M; May 0.685M.

**Evidence**
- Official App Store version history references the first Beaver Build Challenge beginning April 25 and social team participation / visiting / likes / photo behavior.

**Evidence level:** **E1**

**Interpretation**
The build/social layer is consistent with Heartopia using ownership + UGC-like social expression as a retention system, but the available download data does not show an acquisition rebound.

**Counter evidence**
- No DAU / D1-D30 cohort.
- No event participation.
- No revenue.
- No creator/social traffic data.

---

## Window D — June / July tail stabilization
**Metric:** Downloads  
**Observed:** decline moderates to -19.08% in June and -10.54% in July after much steeper early declines.

**Evidence level:** **E0**

**Interpretation**
Candidate signal that the product is approaching a more stable acquisition base after launch normalization.

**Counter evidence**
- Could be seasonality.
- Could be paid-spend stabilization.
- Could be store-ranking floor.
- Organic / paid mix is unavailable.

Label: **UNEXPLAINED pending source-mix data.**

---

# 4. Revenue / retention interpretation — evidence-bounded

The DianDian monthly revenue export is **not yet available**, so the working dataset cannot calculate:
- monthly revenue trend
- RPD
- revenue peak ratio
- revenue persistence
- organic / paid ratio
- calendar pseudo-ARPI

A separate public AppMagic report cited by Mobilegamer.biz in Sep 2026 says Heartopia is making about **$20M monthly IAP**, with >$130M lifetime IAP from about 37M downloads.

This is useful as an **independent market signal**, but it is not directly merged into the DianDian table because:
1. source/provider differs;
2. geographic scope may differ;
3. timing differs;
4. China Android coverage may differ.

**INFERRED · E1:** strong ongoing IAP despite a sharply normalized global DianDian download curve is consistent with a substantial retained / paying installed base.

It is **not yet enough** to calculate Heartopia retention or LTV.

---

# 5. What Heartopia currently teaches us

## A. What changed
- Huge Jan launch spike.
- Fast Feb–May acquisition normalization.
- June–July decline rate flattened.
- Tail shifted toward iOS.
- Tail country mix became more US/KR/JP/TW weighted.

## B. What may explain it
- E1: January = global launch.
- E1: Feb–Mar = major IP collaboration overlapped with the curve, but did not reverse download decline.
- E1: April/May = build/social events deepen ownership and social expression.
- E0: June/July stabilization remains unexplained without source mix.

## C. What does NOT explain it
- My Little Pony cannot be claimed as the cause of acquisition growth; there was no download rebound in the same window.
- Build Challenge cannot be claimed as an acquisition driver from current data.
- High ongoing revenue cannot yet be converted into a retention percentage.

## D. Repeating product pattern worth carrying forward
Heartopia reinforces a long-meta stack:
```
Low-pressure activities
→ Personal space / avatar ownership
→ Collection / pet / fashion
→ Social visits / build expression
→ Time-limited festival / IP / event
```

This is a stronger reference for **ownership + lifestyle retention** than for the first 30-second casual hook.

## E. What we should test in our product
Do not copy Heartopia's world size.

Prototype:
```
Mow / Clean
→ Visible transformation
→ Hidden collectible / story object
→ Decorate one zone
→ NPC reacts
→ Personalized next task
```

Primary KPI:
- first-action completion
- time to first visible transformation
- D1
- D3
- D7
- decorate-return rate

Guardrail:
- content production time per new zone
- onboarding complexity
- AI generation latency/cost

## F. What is still missing
For Heartopia:
- monthly revenue
- paid / organic split
- ad creative volume
- rating/review trend
- exact LiveOps/version markers by month
- social/creator signals

For full competitor report:
- **18 remaining requested product families** still need verified monthly trend data.

---

# 6. Current report gate

**FINAL HTML: NOT READY**

Reason:
The skill requires cross-product trend comparison and evidence-backed patterns. One verified monthly product is enough to start the pipeline, but not enough to make the final multi-product decision report.

Next gate:
- all P0 titles with monthly downloads + revenue where available,
- missing paid/organic explicitly marked TBD,
- normalized entity map preserved,
- then build the final self-contained HTML.
