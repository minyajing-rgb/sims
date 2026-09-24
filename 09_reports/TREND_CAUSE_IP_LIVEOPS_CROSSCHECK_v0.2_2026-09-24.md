# SIMS Trend × Cause — IP / LiveOps Crosscheck v0.2

**Date:** 2026-09-24  
**Market priority:** US-first, Global-secondary  
**Parent Skill:** `skills/sims-full-competitor-benchmark/SKILL.md`  
**Child Skill:** `skills/competitor-trend-cause-analysis/SKILL.md`

Evidence labels: **SOURCE / OBSERVED / CALCULATED / INFERRED / TBD**. Causal confidence uses **E0 / E1 / E2 / E3**. Public competitor evidence normally stops at E0–E3; no record below is labeled CAUSAL.

---

## Unified anomaly records

### 1. My Perfect Hotel — June→July 2026 acceleration

- **Date Window:** 2026-06 → 2026-07
- **Product:** My Perfect Hotel
- **Platform / Geo:** Global collection KPI; US iOS version evidence
- **Metric:** downloads / IAP revenue
- **CALCULATED:** downloads 3,782,976 → 4,800,786 (**+26.9% MoM**)
- **CALCULATED:** IAP $395,511 → $647,059 (**+63.6% MoM**)
- **Install Flag:** `INSTALL_UP`
- **Revenue Flag:** `REVENUE_UP`
- **Review / Quality Flag:** US reviews repeatedly mention forced-ad frequency, progression cost and lag/performance; these are quality/value signals, not explanations of the rise.
- **Social / Event Flag:** `IP_EVENT / EVENT_PASS / LEADERBOARD`
- **Version / Content Flag:** US App Store version 1.34.0 (June 4) begins the **Barbie Dream Hotel** event; subsequent June–September notes continue Barbie characters/stories/skins, event pass and leaderboard unlocks.
- **Source Mix Flag:** **TBD / NOT AVAILABLE**
- **Evidence Level:** **E1** — trend + independent version/event evidence.
- **Candidate Driver:** licensed-IP event refresh is consistent with a product/creative refresh window.
- **Counter Evidence:** KPI is Global collection scope while event/version evidence is US iOS; no paid/organic, media spend, ad-revenue, IP campaign reach, event participation or market-by-market activation date; version date is not proven feature activation date for every market.
- **Interpretation:** Barbie Dream Hotel is a credible **candidate operating pattern**, not a causal explanation of the July lift.
- **Testable Action for Ops Cat:** if testing an IP/lifestyle skin later, attach campaign ID / deep link / exposed-cohort tagging and compare event entry, incremental installs/reactivation, D7, payer quality and cost. Do not evaluate from topline MoM alone.
- **Sources:**
  - Repo: `01_watchlist/DIANDIAN_PRIORITY8_MONTHLY_2021-09_2026-08.csv`
  - US App Store: https://apps.apple.com/us/app/my-perfect-hotel/id1635760774

### 2. Heartopia — My Little Pony collaboration

- **Date Window:** 2026-02-14 → 2026-03-24 collaboration window
- **Product:** Heartopia
- **Platform / Geo:** public global collaboration evidence; KPI scopes are mismatched
- **Metric:** event architecture reference only
- **Trend Flag:** **NOT CROSS-ATTRIBUTABLE**
- **Social / Event Flag:** `IP_COLLAB / COLLECTION / COSMETIC`
- **Version / Content Flag:** collaboration uses themed progression, collection/cosmetic content and event rewards.
- **Source Mix Flag:** **TBD / NOT AVAILABLE**
- **Evidence Level:** **E0 for KPI causality / OBSERVED for event architecture**
- **Counter Evidence:** available download series is Global launch scope while revenue is a broader regional collection scope. The child Skill prohibits cross-scope RPD and causal KPI interpretation.
- **Interpretation:** retain MLP as a benchmark for lifestyle-IP event architecture, not as evidence that the IP caused a download/revenue movement.
- **Testable Action:** for Ops Cat, only evaluate IP after same-scope market/platform data exists; pre-register event-exposed cohorts, creative IDs and payer/retention guardrails.
- **Sources:**
  - Repo scope note: `01_watchlist/DIANDIAN_PRIORITY8_MONTHLY_2021-09_2026-08.csv`
  - Public collaboration evidence: https://www.yodo1.com/press-releases/heartopia-welcomes-my-little-pony-in-a-global-re-launch-of-a-fan-favourite-collaboration

### 3. The Cozy Florist — August 2026 reacquisition

- **Date Window:** 2026-07 → 2026-08
- **Product:** The Cozy Florist
- **Platform / Geo:** Global collection KPI; US iOS version evidence
- **Metric:** downloads / IAP revenue
- **Flag:** strong acquisition rebound in the long-history panel; revenue rises more modestly.
- **Review / Quality Flag:** public review/value-pressure signals exist but no matching time series.
- **Version / Content Flag:** very high patch cadence across July–September; explicit `new game content and events` notes are visible from September.
- **Source Mix Flag:** **TBD / NOT AVAILABLE**
- **Evidence Level:** **E1-low / UNEXPLAINED**
- **Candidate Driver:** high operational cadence may support product stability/refresh, but does not establish why August acquisition rebounded.
- **Counter Evidence:** the clearest explicit new-content/event notes appear after the August KPI window; no paid/organic, ASO/store featuring, creative history or spend evidence.
- **Interpretation:** **UNEXPLAINED**. Do not write “event caused August growth.”
- **Testable Action:** when testing a narrow lifestyle fantasy, tag rare-discovery/social-visit creatives separately from content-update pushes to distinguish UA from product-driven return.
- **Sources:**
  - Repo: `01_watchlist/DIANDIAN_PRIORITY8_MONTHLY_2021-09_2026-08.csv`
  - US App Store: https://apps.apple.com/us/app/the-cozy-florist/id6754878717

### 4. Township — concurrent LiveOps stack

- **Date Window:** current US App Store / Playrix help snapshot on 2026-09-24
- **Product:** Township
- **Platform / Geo:** US iOS + first-party help
- **Metric:** operating-pattern evidence; no event-attribution KPI claim
- **Social / Event Flags:** `PASS / PARTNER_PROGRESS / EXPEDITION / COLLECTION / REGATTA`
- **OBSERVED:** current US App Store surfaces Harvest Pass, Frozen Fortune, Guest from Space and Harvest Collection concurrently.
- **OBSERVED:** current Regatta structure exposes 12 tasks = 6 match-3 + 6 town tasks.
- **Evidence Level:** **OBSERVED operating architecture; E0 for causal KPI effect**
- **Counter Evidence:** no US event participation, source mix, payer data or exposed/unexposed cohort. Mature overlapping systems also make isolation difficult.
- **Interpretation:** Township is useful for studying **orchestration and reusable engine density**, not for saying any one current event caused revenue strength.
- **Testable Action:** Ops Cat should start with one event mother engine; add a second only after measuring participation, return, production cost and interference with the ownership core.
- **Sources:**
  - https://apps.apple.com/us/app/township/id638689075
  - https://playrix.helpshift.com/hc/en/3-township/faq/16605-about-the-regatta-1765929812/

---

# A. What changed

1. **My Perfect Hotel:** June→July 2026 Global downloads **+26.9%** and IAP **+63.6%** in the repo long-history panel; US version history simultaneously enters the Barbie Dream Hotel IP-event/pass/leaderboard period.
2. **The Cozy Florist:** August acquisition rebound remains material, while visible explicit US `new content and events` notes are clearer in September than in the rebound month.
3. **Heartopia:** IP/lifestyle LiveOps evidence is richer, but the KPI scopes remain mismatched, preventing valid cross-scope monetization attribution.
4. **Township:** current US surfaces demonstrate simultaneous multi-engine LiveOps orchestration, but no clean event-attribution dataset exists.

# B. What may explain it

- **My Perfect Hotel — E1:** licensed-IP event + pass/leaderboard is a credible candidate product/creative refresh associated with the June→July acceleration.
- **The Cozy Florist — E1-low:** high product-operation cadence is associated with the period, but the rebound driver remains unresolved.
- **Township:** pass/collection/expedition/social-competition coexistence is an observed mature operating model, not a KPI cause claim.

# C. What does NOT explain it

- Version/event date overlap alone does **not** prove lift.
- Heartopia’s mismatched download/revenue scopes cannot support RPD, LTV or IP-event ROI claims.
- The Cozy Florist’s patch frequency alone does not explain August acquisition.
- Township’s current event stack cannot be credited for mature revenue without US event participation/source-mix evidence.

# D. What patterns repeat across products

1. **Reusable wrapper > one-off event name.** Pass, collection, event currency, leaderboard and themed-area engines recur under different skins.
2. **Core-preserving refresh.** My Perfect Hotel changes the IP/event layer while retaining the hotel-service core; Hay Day/Big Farm/Township similarly wrap operations around persistent ownership.
3. **Mature monetization decouples from acquisition.** Several products hold revenue better than downloads, but this does not by itself reveal payer retention or cohort quality.
4. **Operations quality is monetization quality.** Ranking resets, paid-pass issues, reward persistence and purchase/reward reconciliation are part of the business system.

# E. What we should test

### Test 1 — Ops Cat themed/IP event wrapper
- **Observation:** My Perfect Hotel refreshes product/creative with an IP event without replacing its core.
- **Hypothesis:** one themed event area + pass can improve reactivation/monetization without harming D0 clarity.
- **Test:** Core B baseline vs Core B + themed event wrapper; use campaign IDs / event-exposed cohorts.
- **Primary KPI:** event entry, incremental return, payer conversion / revenue per exposed user.
- **Guardrails:** D1/D7, time-to-first-action, CPI/CAC, support issues, creative/product promise match.
- **Stop condition:** no incremental event return/value after two themes or event harms core completion.
- **Data needed:** source mix, campaign spend, event exposure, cohort retention/revenue.

### Test 2 — One event mother engine before event proliferation
- **Observation:** mature Township runs many engines; smaller products use fewer reusable wrappers.
- **Hypothesis:** one configurable event mother engine can support 4 themes at much lower production cost than four independent minigames.
- **Primary KPI:** participation / repeat / production hours per theme / incremental return.
- **Guardrail:** ownership-core session share must not collapse.

# F. What is still missing

Shortest path to higher evidence levels:
1. **US-only monthly KPI** for the Priority titles.
2. **Paid / organic / web / source mix** around flagged windows.
3. **Historical creative first/last seen + spend/impression proxies**.
4. **Event participation / payer / exposed-cohort data** where obtainable.
5. **Timestamped FTUE** and version-linked historical review series.

Until these exist, public competitor explanations should remain E0–E1 (occasionally E2 if another independent evidence class is added), never CAUSAL.
