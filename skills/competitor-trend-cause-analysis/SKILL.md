---
name: competitor-trend-cause-analysis
description: Evidence-first competitor analysis workflow for games. Use when comparing multiple games over time, building install/revenue trend dashboards, calculating pseudo-ARPI, detecting spikes/drops, crosschecking reviews/social events/version updates/source mix, and converting observed patterns into product, LiveOps, UA, content, and launch-test hypotheses without confusing correlation with causation.
metadata:
  version: 1.0
  owner: research
  status: active
---

# Competitor Trend × Cause Analysis Skill

## 1. Purpose

Turn fragmented competitor data into a reproducible decision workflow:

**Trend → Flag → Crosscheck → Evidence Level → Interpretation → Testable Action**

This skill is for:
- competitor benchmarking;
- launch / soft-launch research;
- LiveOps and content cadence research;
- UA / source-mix analysis;
- product-update impact analysis;
- user-review / quality-risk analysis;
- building an offline interactive HTML for team review.

The goal is not to “explain every spike.”  
The goal is to preserve evidence, label uncertainty, and identify which patterns are worth testing.

---

## 2. First classify the product correctly

Before looking at KPIs, identify:

1. **PRIMARY CORE LOOP**
2. **META LOOP**
3. **SIDE SYSTEMS**
4. **MONETIZATION / LIVEOPS LAYER**

Do not let a visually prominent secondary system replace the actual core loop in the analysis.

For hybrid games, explicitly write:

`Core → Meta → Side → LiveOps / Monetization`

Examples:
- Slot hybrid: Machine → Bet → Spin → Win/Bonus → Wallet = Core; Build / Collection = Meta.
- Cozy Sims: Gather / Produce / Build / Decorate / Progress = Core or Meta depending on actual session frequency; event minigames remain Side unless proven otherwise.
- Arcade hybrid: Core action / run / match first; collection / town / album usually Meta.

**Rule:** classify by player action frequency, session centrality, resource flow, and monetization dependency — not by how much UI space a feature occupies.

---

## 3. Evidence taxonomy — mandatory

Every number or claim must be tagged as one of:

- **SOURCE** — raw provider / official / first-party source.
- **OBSERVED** — directly read from source.
- **CALCULATED** — deterministic calculation from observed data.
- **INFERRED** — supported interpretation, not causal proof.
- **OWNER TARGET** — project target defined by the team.
- **SAMPLE** — proposed framework / example / scenario.
- **TBD / NOT AVAILABLE** — data missing, access-gated, or definition not locked.

Never silently convert:
- INFERRED → OBSERVED
- SAMPLE → TARGET
- calendar pseudo metric → cohort metric
- company-level metric → app-level metric

---

## 4. Raw data preservation

Keep raw inputs immutable.

Recommended structure:

```
Source Data/
  provider/
  public/raw/
  public/web_observations/
  manifests/
```

For every source retain when possible:
- original filename;
- URL;
- capture / export time;
- geography;
- platform;
- date range;
- provider definition;
- SHA256;
- known limitations.

Do not overwrite source files during normalization.

---

## 5. Minimum competitor dataset

For each product, target 3–5 years when available.

### 5.1 Install / Revenue trend

Required fields:
- date;
- product;
- geography;
- platform;
- installs / downloads;
- revenue;
- source;
- missing / censored marker.

Required views:
- daily;
- weekly;
- monthly;
- iOS;
- Android;
- combined;
- target market;
- worldwide when useful.

Always separate:
- store-estimated IAP revenue;
- DTC;
- ad revenue;
- company-reported revenue / bookings.

Do not force them into one number.

---

## 6. Pseudo-ARPI / calendar ratio

When true install-cohort revenue is unavailable, calculate:

`calendar_pseudo_ARPI(t,n) = revenue in calendar window / installs in same calendar window`

Recommended windows:
- D1
- D3
- D7
- D30
- D90
- D180

Mandatory label:

**CALCULATED · calendar pseudo-ARPI**

It is NOT:
- cohort ARPI;
- LTV;
- ROAS;
- new-user revenue.

Interpret carefully:
- Install ↑ + pseudo-ARPI ↓ → possible acquisition dilution;
- Install ↓ + pseudo-ARPI ↑ → possible denominator effect;
- Revenue ↑ + Install flat → investigate payer / offer / event / product change;
- pseudo-ARPI alone cannot prove monetization improvement.

Keep numerator, denominator, date window, platform, geography and formula available for audit.

---

## 7. Detect anomaly windows

Use transparent rules.

Default operational comparison:
- current window: 7 days;
- baseline: prior 28 days / 4;
- preserve weekday structure where possible.

Suggested alert candidates:
- Install change: ±25% or greater;
- Revenue change: ±20% or greater;
- pseudo-ARPI change: ±20% or greater;
- rating decline: ≥0.5;
- low-rating share: +15 percentage points;
- source-share shift: ≥10 percentage points;
- paid / web / organic installs MoM: ±30% or greater.

These are **analysis flags**, not industry standards.

---

## 8. Every spike/drop must crosscheck four layers

For every material Install / Revenue / pseudo-ARPI wave, check:

### A. Player / quality
- rating;
- low-rating share;
- crash;
- login;
- payment;
- reward;
- economy / balance;
- support complaints.

Possible flags:
`REVIEW_DROP / CRASH / LOGIN / PAYMENT / REWARD / ECONOMY`

### B. Social / event / external marketing
- social campaign;
- giveaway;
- partnership;
- creator / celebrity / TV campaign;
- CRM;
- community event;
- web campaign;
- seasonal event.

Possible flags:
`SOCIAL / EVENT / CRM / PARTNERSHIP / BRAND_CAMPAIGN`

### C. Version / product / content
- client version;
- new machine / level / chapter;
- feature;
- collection / season;
- UI / UX;
- bug fix;
- performance fix.

Possible flags:
`VERSION / CONTENT / FEATURE / FIX`

Do not treat version date as feature activation date unless proven.

### D. Acquisition / source mix
- paid display;
- paid search;
- organic search;
- browse;
- web;
- MMP media-network data if available;
- campaign spend if available.

Possible flags:
`PAID_UP / ORGANIC_UP / WEB_UP / MIX_SHIFT`

Do not automatically classify “web” as paid or organic.

---

## 9. Unified anomaly record

Each flagged window should produce one row:

```
Date Window
Product
Platform
Metric
Change %
Install Flag
Revenue Flag
pseudo-ARPI Flag
Review / Quality Flag
Social / Event Flag
Version / Content Flag
Source Mix Flag
Evidence Level
Likely Driver
Counter Evidence
Action
Source Links
```

No anomaly record is complete without **Counter Evidence**.

---

## 10. Evidence levels

Use:

- **E0** — trend only.
- **E1** — trend + 1 independent evidence class.
- **E2** — trend + 2 aligned evidence classes.
- **E3** — trend + 3+ aligned evidence classes with timing match.
- **CAUSAL** — only when experiment, attribution, or internal logs establish causality.

For public competitor work, normally stop at E0–E3.

Never write “X caused Y” just because dates overlap.

Preferred language:
- associated with;
- overlaps with;
- consistent with;
- candidate driver;
- supports / does not support;
- remains unexplained.

---

## 11. Important pattern interpretations

### Install ↑ + Paid ↑
Candidate: UA scale-up.

Next:
- check CPI;
- cohort quality;
- payer conversion;
- D7 / D30 retention;
- downstream revenue.

### Install ↑ + Social/Event + Organic/Web ↑
Candidate: owned / earned / campaign-driven acquisition.

Next:
- inspect campaign timing;
- deep links;
- content IDs;
- web traffic;
- store visibility.

### Install ↑ + Revenue flat/down
Do not mark campaign failure immediately.

Possible:
- low-quality acquisition;
- new-user dilution;
- monetization lag;
- event optimized for reach rather than payer quality.

Wait for mature cohorts.

### Revenue ↑ + Install flat + Event/Offer/Feature
Candidate: monetization uplift.

Check:
- payer count;
- payer rate;
- ARPDAU / ARPPU if available;
- offer participation;
- event participation;
- economy changes.

### Revenue ↓ + Review ↓ + Payment/Economy flags
Treat as high-priority risk.

For own product:
- pause scale;
- inspect payment / config / economy;
- validate rollback.

### Install ↓ + Crash/Login + Version
Candidate: release-quality issue.

Check:
- rollout date;
- crash-free users;
- login success;
- device / OS split.

### Trend anomaly with no evidence
Label:

**UNEXPLAINED**

Do not invent the cause.

---

## 12. Reviews are early-warning signals, not causal proof

Use reviews to detect:
- crash;
- login;
- missing purchase;
- reward loss;
- economy / bet complaints;
- ads / popups;
- performance;
- support.

Keep:
- timestamp;
- rating;
- text;
- version if known;
- source row / review ID;
- theme flags.

Important:
- complaint volume can rise before revenue falls;
- revenue can stay stable while experience deteriorates;
- player accusation is not automatically a confirmed bug.

---

## 13. Version-history method

For every visible version record:
- version;
- date;
- raw release note;
- Chinese / concise functional summary;
- content type;
- feature type;
- fix type;
- specificity;
- source;
- whether date is explicit or inferred.

Calculate:
- observed version count;
- median gap;
- high-frequency periods;
- major content candidates;
- visible-history coverage.

Never infer “feature first launched here” from repeated release notes alone.

---

## 14. Activity-pattern synthesis

After product-level analysis, summarize patterns by mechanism.

Recommended activity buckets:
- external giveaway / partnership;
- brand / celebrity / TV campaign;
- new content / new machine / new chapter;
- collection / season / leaderboard;
- social freebies / community / CRM;
- offer / monetization event;
- economy / reward change;
- quality / bug / login fix.

For each bucket output:
- most likely metric affected;
- supporting examples;
- counterexamples;
- evidence strength;
- conditions where it may work;
- what to test in own product.

Do not rank a pattern as “best” from one anecdote.

---

## 15. Translate competitor research into experiments

The competitor output should end with:

```
Observation
→ Hypothesis
→ Test design
→ Primary KPI
→ Guardrail
→ Stop condition
→ Data needed
```

Examples:

### External giveaway
Observation:
- Install spike overlaps with partnership / giveaway.

Hypothesis:
- external-value promotion can lift acquisition / reactivation.

Test:
- campaign ID + landing page + deep link + in-game mission.

Primary KPI:
- incremental installs / reactivation.

Guardrails:
- D7 retention;
- payer quality;
- CPI / CAC;
- fraud / support.

### New content
Observation:
- content release overlaps with usage / install / revenue movement.

Hypothesis:
- new content refresh improves return and monetization.

Test:
- exposed vs non-exposed cohort where possible.

Primary KPI:
- content entry / repeat;
- D7 / D30 return;
- revenue per exposed user.

---

## 16. Interactive HTML — required team output

Create a self-contained offline HTML when the dataset is large.

Minimum team view:
1. product filter;
2. platform / market filter;
3. Install trend;
4. Revenue trend;
5. pseudo-ARPI trend;
6. anomaly markers;
7. review flags;
8. social / event flags;
9. version / content flags;
10. source-mix flags;
11. activity-pattern summary;
12. missing-data / confidence markers.

Preferred delivery:
- one HTML;
- no CDN dependency;
- no local server requirement;
- team-safe / sanitized;
- clear legend:
  `SOURCE / CALCULATED / OWNER TARGET / SAMPLE / TBD / INFERRED`.

---

## 17. Default rule on DAU / Revenue models

**Default decision version: do NOT use inferred DAU / modeled DAU as a launch gate.**

If DAU / revenue modeling is needed:
- place it in a separate research appendix;
- label assumptions;
- show training / holdout;
- show errors;
- show failed models;
- compare against a simple baseline;
- never call modeled DAU “observed DAU”;
- never use a weak fit as direct UA-budget input.

If actual DAU / retention becomes available, replace assumptions with observed inputs.

---

## 18. QA / cross-validation

At minimum check:
- unique normalized keys;
- no unexpected negatives;
- platform total ≈ iOS + Android;
- geography hierarchy where applicable;
- source totals reconcile;
- censored values remain bounded;
- monthly aggregation reconciles to daily;
- same-date cross-product synchronized changes;
- suspicious provider / platform breaks;
- source scope differences;
- raw file spot-checks.

If many products jump on the same platform/date:
- first test provider methodology / platform reporting / common shock;
- do not create 13 separate product-success stories.

---

## 19. Completion definition

A competitor-analysis round is complete only when:

- competitor list is fixed;
- raw evidence is preserved;
- trend data is reproducible;
- pseudo metrics are labeled correctly;
- anomaly windows exist;
- each important anomaly has crosschecks;
- reviews and versions are documented;
- source mix is present or explicitly missing;
- evidence levels are assigned;
- counter evidence is recorded;
- interactive team output exists;
- unresolved gaps are listed;
- final output converts observations into testable hypotheses.

Never use “全量完成” when material access-gated or historically unavailable data remains.

---

## 20. Final team summary format

End every research round with exactly these sections:

### A. What changed
The major install / revenue / engagement changes.

### B. What may explain it
Evidence-backed candidate drivers with E0–E3 labels.

### C. What does NOT explain it
Counter evidence and rejected interpretations.

### D. What patterns repeat across products
Common activity / content / UA / version patterns.

### E. What we should test
Concrete experiments for our own product.

### F. What is still missing
The shortest path to close each data gap.

This keeps the research useful for product and publishing decisions rather than turning into a data archive.
