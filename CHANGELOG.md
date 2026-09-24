# CHANGELOG

## v0.9 — 2026-09-24
- Read and accepted commit `16f98ab1ae072d4f33c518f6ab8883c8cbf0628e` as the current 19-game DianDian dataset.
- Ran the formal cross-product analysis using `skills/competitor-trend-cause-analysis/SKILL.md`.
- Added `09_reports/SIMS_19_GAME_COMPETITOR_TREND_CAUSE_ANALYSIS_v1.0_2026-09-24.md`.
- Added `09_reports/DIANDIAN_19_GAMES_DERIVED_MATRIX_v1.0_2026-09-24.csv`.
- Added schema QA correction `04_data_method/DIANDIAN_MONTHLY_SCHEMA_v0.3_2026-09-24.md`.
- Corrected the analysis semantics of the legacy `3m_revenue_carryover` field: populated panel values are trailing 3-month average revenue / visible-window peak revenue, so reports now label it **3M Revenue Hold vs Peak** rather than cohort carryover.
- Clustered products into long-term stable, download-decay/revenue-hold, reacceleration candidates, synchronized decay and evidence-insufficient groups.
- Added required 19-product lifecycle answers and deep dives for Gossip Harbor, Township, Hay Day, Heartopia, Big Farm Homestead, The Cozy Florist, Office Cat and 时尚百货城.
- Kept US-first as the decision lens while explicitly marking current monthly Global/collection data as non-US; no Global metric is relabeled as US.
- Final interactive HTML remains gated on US/source-mix/event evidence and is not claimed complete.

## v0.8 — 2026-09-24
- Added a 228-row monthly panel for all 19 requested product families covering the visible 2025-09 to 2026-08 Diandian window.
- Added monthly downloads for 16 products and monthly revenue for 17 products; QQ经典农场 remains N/A because it is a mini-game without native store entities.
- Added product-level peak, latest/peak, RPD, revenue persistence and trailing 3-month revenue carryover calculations with scope checks.
- Added current rating, review, version and cumulative-download snapshots separately from historical monthly rows.
- Added a source audit, explicit data gaps and a quick lifecycle analysis; earlier-than-2025-09 history remains unavailable under the current account permission.
- Corrected the entity map to 49 identified entities, including Good Pizza and Animal Restaurant China iOS listings and The Cozy Florist GB Android launch month.

## v0.7 — 2026-09-24
- Changed competitor-analysis market priority to **US-first, Global-secondary**.
- Updated DianDian pull order: P0 US monthly series first, then P0 Global for context.
- Updated the working Heartopia analysis to treat US as the primary decision market and global as supporting context.
- Required future final HTML to lead with US acquisition, monetization, source mix and trend conclusions, with global comparison as a secondary layer.


## v0.6 — 2026-09-24
- Started the actual competitor analysis using `skills/competitor-trend-cause-analysis/SKILL.md`.
- Added `09_reports/WORKING_COMPETITOR_SKILL_ANALYSIS_v0.1_2026-09-24.md`.
- Analyzed the verified Heartopia Global monthly download curve (2026-01 to 2026-08), iOS/Google Play mix, geographic tail shift and event windows.
- Assigned evidence levels and counter-evidence; kept revenue / paid-organic / retention metrics as TBD where the current DianDian export is missing.
- Final cross-product interactive HTML remains gated on the remaining P0 monthly datasets.

## v0.5 — 2026-09-24
- Added a 47-row product/store entity map covering the 19 requested simulation-management product families, with regional and platform splits kept explicit.
- Expanded the monthly input template to the requested source and derived fields.
- Added verified Heartopia Global monthly downloads for 2025-12 through 2026-08, including iOS/Google Play split, top-five countries and download peak ratios.
- Added an evidence-bounded Heartopia launch-to-tail analysis and the v0.2 field/formula methodology.
- Recorded monthly revenue, paid/organic traffic, ad creative, rating/reviews, version, LiveOps and IP collaboration as unavailable rather than zero where no verified source value exists.
- Kept licensed raw exports local and excluded from the public repository; 18 product families remain pending.

## v0.4 — 2026-09-24
- Added and indexed `skills/competitor-trend-cause-analysis/SKILL.md` as the required method for the upcoming DianDian competitor report.
- Defined the report pipeline: wait for Codex data completion → normalize/QA → trend/anomaly/cause crosscheck → offline interactive HTML → local delivery + GitHub `09_reports/`.
- Reserved `09_reports/` for versioned HTML reports and release notes.
- Required report version history to include data cutoff, input files, method version, major conclusion changes, and commit SHA.

## v0.3 — 2026-09-24
- Added a full cross-platform simulation / management taxonomy.
- Added a reusable simulation research framework covering market, acquisition, core loop, retention/meta, monetization, art/content cost and studio fit.
- Added 2026 Q3 market snapshot for Mobile, Steam and China mini-games.
- Added research sprint SOP, evidence grading and metric-normalization rules.
- Added benchmark sample-selection rules to avoid only studying top-grossing winners.
- Added genre/product matrix CSV for product comparisons.
- Added standardized product-card teardown template.
- Defined five priority research tracks: Hands-on Cozy Management, Garden/Restoration/Decor, Cute Idle/Tycoon + Ownership, Lifestyle Light Sim, Casual Front + Long Meta.

## v0.2 — 2026-09-24
- Consolidated current and earlier Ops Cat / cozy-game project context.
- Added AI-native cozy-game PRD.
- Added 10–30% handcrafted art-refinement direction.
- Added art / video / playable creative test plan.
- Added Base44 × Codex × native-release architecture.
- Inspected current Base44 build and recorded that it is currently an app/auth scaffold, not yet the playable game loop.
- Added Ops Cat asset manifest.
- Added 0–18 month product roadmap.
- Expanded README into the canonical project index.

## v0.1 — 2026-09-24
- Initialized SIMS as a cross-platform simulation/casual-hybrid research lab.
- Added high-potential watchlist for Mobile, mini-games and Steam.
- Added Diandian/AppMagic monthly data input template.
- Added art-style research map.
- Added gameplay layer map including mowing/cleaning/satisfying-action integration.
- Added organic/retention proxy methodology.
- Added Casual vs Light Simulation repository/product decision.
