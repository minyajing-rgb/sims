# SIMS — Casual × Simulation Research & Product Lab

**Date:** 2026-09-25  
**Scope:** Mobile / 微信&抖音小游戏 / H5 / Steam-PC  
**Status:** ACTIVE RESEARCH + OPS CAT PROTOTYPING

这个仓库用于研究并推进：

> **Casual Core → Light Simulation → Management/Life Sim → AI-native Cozy Game → Optional Hybrid Midcore**

## 当前主线

- **市场优先级：US-first，Global-secondary**
- 父 Skill：`skills/sims-full-competitor-benchmark/SKILL.md`
- Trend/Cause 子 Skill：`skills/competitor-trend-cause-analysis/SKILL.md`
- 所有缺失数据明确标记 SOURCE / OBSERVED / CALCULATED / INFERRED / TBD。
- 不把 Global 改名 US，不把 network campaign ROAS 改成 blended product ROAS，不把 calendar ratio 改名 LTV。

## Repository Structure

```
00_master/            项目总纲 / Benchmark / Consolidated Context
01_watchlist/         高潜竞品与点点数据录入
02_art_style/         美术风格 / Visual Evidence
03_gameplay/          Core / FTUE / Progression / Meta
04_data_method/       Evidence / Trend-Cause / Source log
05_product_strategy/  Ops Cat / AI-native Product Translation
06_ua_liveops/        UA / Creative / LiveOps
07_build_publish/     Build / Publish / Prototype
08_assets/            Assets / Public Media Manifest
09_reports/           Full Atlas / Matrix / Status Audit / Release Notes
10_project_initiation/ 立项 Charter / Stage Gate / KPI / LiveOps / WBS / Kill Criteria
skills/               可复用分析方法
99_archive/
```

## Current Full Competitor Intelligence Atlas

- **Current HTML:** `09_reports/SIMS_FULL_COMPETITOR_INTELLIGENCE_ATLAS_v4.3_2026-09-26.html`
- **Release notes:** `09_reports/SIMS_FULL_COMPETITOR_INTELLIGENCE_ATLAS_v4.3_RELEASE_NOTES_2026-09-26.md`
- **Current pointer:** `09_reports/CURRENT_ATLAS_v4.3_2026-09-26.md`
- **Status audit:** `09_reports/STATUS_AUDIT_v4.3_2026-09-26.csv`
- **Benchmark-by-Objective:** `09_reports/BENCHMARK_BY_OBJECTIVE_v3.5_2026-09-26.csv`
- **Data-gap recovery:** `09_reports/PRIORITY8_DATA_GAP_RECOVERY_v0.2_2026-09-25.csv`
- **Current platform KPI recovery:** `01_watchlist/PRIORITY8_CURRENT_PLATFORM_KPI_RECOVERY_v0.1_2026-09-25.csv`
- **Current LiveOps calendar:** `06_ua_liveops/PRIORITY8_CURRENT_LIVEOPS_EVENT_CALENDAR_v0.3_2026-09-25.csv`
- **Review/version risk recovery:** `09_reports/PRIORITY8_REVIEW_VERSION_RISK_RECOVERY_v0.2_2026-09-25.csv`
- **UA / Creative recovery:** `06_ua_liveops/PRIORITY8_UA_CREATIVE_PERFORMANCE_RECOVERY_v0.4_2026-09-25.csv`
- **Event / Offer / Engagement recovery:** `09_reports/PRIORITY8_EVENT_OFFER_ENGAGEMENT_RECOVERY_v0.1_2026-09-25.csv`

Full Atlas scope:
**Executive / Market-KPI / Art / Core / FTUE / Progression-Meta-Side / Economy-Monetization / LiveOps / UA-Creative / Trend-Cause / Reviews-Versions / Focus Game / Production Burden / Product Translation / US-Global / Data Gap Recovery / Evidence-Gaps-Sources / Changelog**


## Current Project Initiation

Research has moved into a separate decision layer:

- **Initiation Pack:** `10_project_initiation/00_README_PROJECT_INITIATION.md`
- **Project Charter:** `10_project_initiation/01_PROJECT_CHARTER_v0.1.md`
- **Stage Gate:** `10_project_initiation/02_STAGE_GATE_METHOD_v0.1.csv`
- **Owner KPI Gate Matrix:** `10_project_initiation/03_OWNER_KPI_GATE_MATRIX_v0.1.csv`
- **Priority8 LiveOps Master Event Catalog:** `10_project_initiation/04_PRIORITY8_LIVEOPS_MASTER_EVENT_CATALOG_v0.3_2026-09-26.csv`
- **Ops Cat LiveOps Engine Selection:** `10_project_initiation/05_OPS_CAT_LIVEOPS_ENGINE_SELECTION_v0.1.csv`
- **Prototype Test Plan:** `10_project_initiation/06_PROTOTYPE_TEST_PLAN_v0.1.csv`
- **3-Month Content Runway:** `10_project_initiation/07_3M_CONTENT_RUNWAY_v0.1.csv`
- **Risk / Kill Criteria:** `10_project_initiation/08_RISK_KILL_CRITERIA_v0.1.csv`
- **WBS / Owner / Acceptance:** `10_project_initiation/09_WBS_OWNER_ACCEPTANCE_v0.1.csv`
- **Data Dashboard Requirements:** `10_project_initiation/10_DATA_DASHBOARD_REQUIREMENTS_v0.1.csv`
- **Current Decision:** `10_project_initiation/11_INITIATION_DECISION_v0.1.md`

Current decision: **CONDITIONAL GO → G0 Project Initiation / bounded 6-week Vertical Slice.**  
This is not approval for full production or scale UA.

## v1.8 Data-Gap Recovery Highlights

### US / KPI
- Gossip Harbor: external Sensor Tower estimate for **Jan-2026 US = 1.28M downloads / $28.6M revenue**.
- Gossip Harbor: AdMapix US pull 2026-08-19 = **758,507 downloads**, provider period kept as-is.
- Township: AdMapix US pull 2026-08-19 = **850,227 downloads**, provider period kept as-is.
- Current Sep-2026 US monthly KPI for Priority8 remains incomplete.

### Paid / Source Mix / ROAS
- Gossip Harbor: analyst-reported **82.9% downloads from paid display** over a past-90d window; geography of that percentage is not silently relabeled US.
- My Perfect Hotel: **US Android Unity Ads** = 2.2× scale, +19% D7 ROAS, +50% D7 ARPU.
- Township: **US iOS Unity D28 IAP ROAS** = +14% D28 ROAS, ~+38% D28 retention, 2.4× D28 ARPU vs D7 cohort.
- Office Cat: KR Playio = D1/D7/D14 69/60/50%, D30 ROAS 209%; JP Playio = CVR 59%, D1/D3/D7 56/43/33%, D30 ROAS 234%.
- These are network / market / campaign results, **not** total-product ROAS.

### Creative History
- Gossip Harbor US 30d: 15 entries / 14 files / 6.382B estimated impressions; one 25s file = 70.5%; 7 entries >180d.
- CreativeScope: GH recent 30d = 31.9% of tracked 180d creative pool and 53.6% of 180d estimated impressions.
- Township US: 30 creative rows / 29 live; top asset 446d old; oldest active 910d.
- The Cozy Florist 30d: 2,291 creatives / 6,939 ad plans; Meta-family coverage dominates, but coverage ≠ spend.
- Heartopia 30d: 1,378 creatives / 2,807 campaign records / 505M estimated impressions.

### Event / Offer
- My Perfect Hotel Barbie: **700K+ players completed the event** by Jun-2026.
- Hay Day Farm Pass Bundle Subscription: Lv11+, select regions, seasonal renewal, progression + storage + choice-crate value.
- Township public US IAP snapshot: semantic price ladder $1.99–$19.99.
- Heartopia SANRIO pool: draw-dependent probability disclosure; pool-specific, not universal gacha rule.

### DataEye AdXray / UA Creative
- `06_ua_liveops/DATAEYE_PRIORITY8_ADX_OBSERVATIONS_2026-09-24.csv`
- `06_ua_liveops/DATAEYE_PRIORITY8_ADX_AUDIT_2026-09-24.md`
- `01_watchlist/PRIORITY8_AD_CREATIVE_PRIMARY_CROSSCHECK_2026-09-24.md`
- `09_reports/SIMS_PRIORITY8_ADX_UA_CREATIVE_ANALYSIS_v1.0_2026-09-24.html`
- `01_watchlist/DIANDIAN_PRIORITY8_US_CURRENT_MONTH_2026-08.csv`
- `09_reports/PRIORITY8_REQUESTED_DATA_COVERAGE_MATRIX_2026-09-25.csv`
- `09_reports/PRIORITY8_REMAINING_DATA_PRIMARY_SOURCE_AUDIT_2026-09-25.md`
- Scope: Priority 8 Android package exact-search, 2024-09-24 to 2026-09-24.
- Current US Downloads / IAP snapshot covers 2026-08; Heartopia download and revenue scopes are explicitly not merged for RPD.
- DataEye smart de-dup is a creative-volume proxy, not spend, CTR/CVR, paid share or verified campaign count.
- The standardized current 30/90/180-day refresh is blocked until the licensed DataEye session is logged in again.
- Licensed raw creatives remain local; the repository stores normalized observations, source/method and evidence-bounded conclusions.

### Team / Production
- Hay Day: **current title team >60** as of Jun-2026.
- Township: ~20 at creation → ~130 by 2023; historical only.
- Big Farm Homestead: current shared code/system + dedicated LiveOps process evidence; exact title-team count still TBD.

## Research Rules

1. **US-first, Global-secondary.**
2. Full competitor research follows the parent Skill; installs/revenue/RPD/source mix/anomalies/reviews/versions causality follows the child Skill.
3. A data trend dashboard is not a full competitor benchmark.
4. Every material claim retains evidence scope and uncertainty.
5. Reviews are early-warning signals, not causal proof.
6. Repeated release notes do not prove a feature first launched in that version.
7. Creative/ad coverage proxies are not spend, CTR/CVR, CPI or paid share.
8. Network ROAS cases are not blended title economics.
9. Current exact FTUE and organic retention remain separate from rewarded-UA case studies.
10. Ship versioned PARTIAL outputs rather than fabricate completeness.

## Still Missing

- Current Sep-2026 US-only monthly Downloads/IAP across Priority8.
- Full current paid/organic/web source mix by title.
- Absolute spend/CPI/CTR/CVR and blended ROAS for most titles.
- Same-vendor normalized Priority8 30/90/180 creative histories.
- Current T+0→30m FTUE + D1/D3/D7/D14 product unlock/retention.
- Complete review-by-version corpus.
- Offer trigger/frequency/segmentation/conversion for most titles.
- Payer counts/rates and standardized event participation.
- Current exact title-team size for most products.
- Asset-hours, time-to-new-area/event, QA staffing, outsourcing ratios.
