# SIMS — Casual × Simulation Research & Product Lab

**Date:** 2026-09-24  
**Scope:** Mobile / 微信&抖音小游戏 / H5 / Steam-PC  
**Status:** ACTIVE RESEARCH + OPS CAT PROTOTYPING

这个仓库用于研究并推进：

> **Casual Core → Light Simulation → Management/Life Sim → AI-native Cozy Game → Optional Hybrid Midcore**

## 当前主线

### 1. 市场与数据
- **市场优先级：US-first，Global-secondary**
- 高潜模拟经营 / hybrid-casual 样本池
- 点点 / AppMagic 月度下载、收入、自然量、买量数据
- Organic / Retention proxy
- Steam 口碑、评论、CCU、Creator传播

### 2. 美术
- 先测美术，再决定重生产
- 当前重点：**Bright Cozy + 10–30% Handcrafted**
- 保留清晰明亮和商业可读性
- 增加水粉 / 水彩 / 手绘叙事细节与环境故事

### 3. 产品
当前产品假设：

> **Satisfying Casual Core + Light Management + Ownership/Decoration + AI-personalized Narrative + Lightweight LiveOps**

不是第一天做开放世界 Life Sim，也不是只做一次性 Hypercasual。

### 4. Ops Cat / AI-native Cozy Game
核心体验：
- 割草 / 清理 / 修复
- 收集资源
- 工具升级
- 后院 / 家居装饰
- 邻居订单与小故事
- AI根据玩家偏好改变起始空间、任务、叙事和内容
- 后续可扩到海边 / 旅行 / 水上运动等活动主题

## Repository Structure

```
00_master/            项目总纲 / Benchmark / Consolidated Context
01_watchlist/         高潜竞品与点点数据录入
02_art_style/         美术风格 / 10–30%精修方向
03_gameplay/          主玩法 / 副玩法 / 割草等mechanic
04_data_method/       Organic / retention proxy / source log
05_product_strategy/  Casual→Light Sim / AI-native PRD / 0–18M roadmap
06_ua_liveops/        美术测试 / creative test / LiveOps
07_build_publish/     Base44 / Codex / Native发布架构与当前prototype状态
08_assets/            Ops Cat资产索引
09_reports/           竞品分析 / derived matrix / HTML / release notes / final delivery
skills/               可复用分析方法
99_archive/
```

## Start Here

### Research Framework v1
- `00_master/FULL_COMPETITOR_ANALYSIS_SCOPE_v1.0_2026-09-24.md`
- `00_master/SIMULATION_CATEGORY_TAXONOMY_v1.0_2026-09-24.md`
- `00_master/SIMULATION_RESEARCH_FRAMEWORK_v1.0_2026-09-24.md`
- `00_master/MARKET_SNAPSHOT_2026Q3.md`
- `01_watchlist/BENCHMARK_SAMPLE_SELECTION_RULES_v1.0_2026-09-24.md`
- `04_data_method/RESEARCH_SOP_AND_EVIDENCE_RULES_v1.0_2026-09-24.md`
- `04_data_method/SIM_PRODUCT_CARD_TEMPLATE_v1.0_2026-09-24.md`
- `03_gameplay/SIM_GENRE_PRODUCT_MATRIX_v1.0_2026-09-24.csv`

### Competitor Analysis Skills
- **Parent / full scope:** `skills/sims-full-competitor-benchmark/SKILL.md`
- **Data / anomaly submodule:** `skills/competitor-trend-cause-analysis/SKILL.md`
- Full scope: **Market/KPI → Art → Core Gameplay → FTUE → Progression/Meta/Side Systems → Economy/Monetization → LiveOps → UA/Creative/Promotion → Trend/Cause → Production Cost → Product Translation**
- Trend submodule workflow: **Trend → Flag → Crosscheck → Evidence Level → Interpretation → Testable Action**
- Full HTML must be a competitor-intelligence atlas, not only a KPI dashboard.

### Codex Data Pull
- `01_watchlist/DIANDIAN_PRIORITY8_MONTHLY_2021-09_2026-08.csv`
- `01_watchlist/DIANDIAN_PRIORITY8_SUMMARY_2026-09-24.csv`
- `01_watchlist/DIANDIAN_PRIORITY8_LONG_HISTORY_ANALYSIS_2026-09-24.md`
- `01_watchlist/DIANDIAN_19_GAMES_MONTHLY_2025-09_2026-08.csv`
- `01_watchlist/DIANDIAN_19_GAMES_SUMMARY_2026-09-24.csv`
- `01_watchlist/DIANDIAN_19_GAMES_CURRENT_SNAPSHOT_2026-09-24.csv`
- `01_watchlist/DIANDIAN_19_GAMES_ANALYSIS_2026-09-24.md`
- `01_watchlist/DIANDIAN_SOURCE_AUDIT_2026-09-24.md`
- `01_watchlist/DIANDIAN_PRIORITY_WATCHLIST_v0.2_2026-09-24.csv`
- `01_watchlist/DIANDIAN_PRIORITY_WATCHLIST_v0.2_2026-09-24.md`
- `01_watchlist/DIANDIAN_MONTHLY_INPUT_TEMPLATE.csv`
- `01_watchlist/DIANDIAN_ENTITY_MAP_2026-09-24.md`
- `01_watchlist/DIANDIAN_MONTHLY_HEARTOPIA_GLOBAL_2025-12_2026-08.csv`
- `01_watchlist/HEARTOPIA_DOWNLOAD_TRAJECTORY_2026-09-24.md`
- `04_data_method/DIANDIAN_MONTHLY_SCHEMA_v0.2.md`

### Current Full Competitor Intelligence Atlas
- **Current HTML:** `09_reports/SIMS_FULL_COMPETITOR_INTELLIGENCE_ATLAS_v1.0_2026-09-25.html`
- **Release notes:** `09_reports/SIMS_FULL_COMPETITOR_INTELLIGENCE_ATLAS_v1.0_RELEASE_NOTES_2026-09-25.md`
- **Current pointer:** `09_reports/CURRENT_ATLAS_v1.0_2026-09-25.md`
- Full 16-tab scope: Executive / Market-KPI / Art / Core / FTUE / Progression-Meta-Side / Economy-Monetization / LiveOps / UA-Creative / Trend-Cause / Reviews-Versions / Focus Game / Product Translation / US-Global / Evidence-Gaps-Sources / Changelog.
- **Fresh Focus-4 US storefront:** `09_reports/FOCUS4_US_STORE_CURRENT_SNAPSHOT_v0.1_2026-09-25.csv`
- **Fresh Review/LiveOps audit:** `09_reports/FOCUS4_CURRENT_REVIEW_LIVEOPS_AUDIT_v0.1_2026-09-25.md`
- **Focus-4 visual source index:** `02_art_style/FOCUS4_VISUAL_EVIDENCE_INDEX_v0.1_2026-09-25.csv`
- **Focus-4 annotated visual evidence:** `02_art_style/FOCUS4_ANNOTATED_VISUAL_EVIDENCE_v0.2_2026-09-25.csv`
- **Focus-4 visual synthesis:** `02_art_style/FOCUS4_VISUAL_SYNTHESIS_v0.3_2026-09-25.md`
- **Full benchmark status audit:** `09_reports/STATUS_AUDIT_v1.0_2026-09-25.csv`
- **Benchmark-by-Objective:** `09_reports/BENCHMARK_BY_OBJECTIVE_v0.7_2026-09-25.csv`
- **Production burden:** `09_reports/PRODUCTION_BURDEN_MATRIX_v0.2_2026-09-24.csv`
- **Trend/Cause ADX crosscheck:** `09_reports/TREND_CAUSE_ADX_CROSSCHECK_v0.3_2026-09-24.md`
- Supporting matrices/evidence remain versioned under `02_art_style/`, `03_gameplay/`, `06_ua_liveops/`, and `09_reports/`.

### DataEye AdXray / UA Creative
- `06_ua_liveops/DATAEYE_PRIORITY8_ADX_OBSERVATIONS_2026-09-24.csv`
- `06_ua_liveops/DATAEYE_PRIORITY8_ADX_AUDIT_2026-09-24.md`
- `01_watchlist/PRIORITY8_AD_CREATIVE_PRIMARY_CROSSCHECK_2026-09-24.md`
- `09_reports/SIMS_PRIORITY8_ADX_UA_CREATIVE_ANALYSIS_v1.0_2026-09-24.html`
- Scope: Priority 8 Android package exact-search, 2024-09-24 to 2026-09-24.
- DataEye smart de-dup is a creative-volume proxy, not spend, CTR/CVR, paid share or verified campaign count.
- Licensed raw creatives remain local; the repository stores normalized observations, source/method and evidence-bounded conclusions.

### Current Formal Trend × Cause Analysis
- `09_reports/SIMS_19_GAME_COMPETITOR_TREND_CAUSE_ANALYSIS_v1.0_2026-09-24.md`
- `09_reports/DIANDIAN_19_GAMES_DERIVED_MATRIX_v1.0_2026-09-24.csv`
- `04_data_method/DIANDIAN_MONTHLY_SCHEMA_v0.3_2026-09-24.md`
- This is a **submodule of the full competitor benchmark**, not the complete competitor report.

### Existing Benchmark / Product Work
- `00_master/BENCHMARK_BY_OBJECTIVE_v0.1.md`
- `00_master/PROJECT_CONTEXT_CONSOLIDATED_v0.2_2026-09-24.md`
- `01_watchlist/HIGH_POTENTIAL_WATCHLIST_v0.1.md`
- `02_art_style/ART_STYLE_MAP_v0.1.md`
- `02_art_style/ART_REFINEMENT_10_30_PERCENT_v0.1.md`
- `03_gameplay/GAMEPLAY_ARCHETYPE_MAP_v0.1.md`
- `04_data_method/ORGANIC_RETENTION_PROXY_v0.1.md`
- `04_data_method/DIANDIAN_MONTHLY_SCHEMA_v0.2.md`
- `05_product_strategy/CASUAL_VS_LIGHT_SIM_v0.1.md`
- `05_product_strategy/AI_NATIVE_COZY_GAME_PRD_v0.1.md`
- `05_product_strategy/OPS_CAT_ROADMAP_0_18M_v0.1.md`
- `06_ua_liveops/ART_CREATIVE_TEST_PLAN_v0.1.md`
- `07_build_publish/BASE44_CODEX_NATIVE_ARCHITECTURE_v0.1.md`
- `07_build_publish/CURRENT_PROTOTYPE_STATUS_2026-09-24.md`
- `08_assets/OPS_CAT_ASSET_MANIFEST_v0.1.md`

## Research Rules

1. **先看美术和获量，再看玩法深度。**
2. 不把畅销、自然量、留存、商业化混成一个排名。
3. 自然量是 PMF / stickiness proxy，不直接等同 D1/D7/D30。
4. RPD 不等于 ARPU / ARPPU / LTV。
5. PC/Steam 与 Mobile/小游戏使用不同指标体系。
6. 所有趋势结论必须区分 SOURCE / OBSERVED / CALCULATED / INFERRED / TBD。
7. 重要波动必须做 Review / Event / Version / Source Mix 四层交叉验证并记录 Counter Evidence。
8. AI不直接控制经济、付费价值和关键进度；AI主要承担个性化、叙事和内容装配。
9. 先做可玩的 5–10 分钟 vertical slice，再扩世界。
10. 点点原始导出为授权数据，仅本地留存且不提交公开仓库；仓库只保存可复核的规范化结果、实体映射、来源与验算口径。
11. 全部 19 款的统一基线表暂覆盖 2025-09 至 2026-08；Priority 8 已另外补到近 5 年或上线月。点点长区间表默认分页为 50 条，必须切到 100 条或翻第二页，不能把第一页 49 个月误判为权限上限。
12. ADX 素材记录、智能去重、预估曝光和受众为供应商口径；媒体/地区覆盖指数不可当预算份额，代表卡不可当全产品受众分布。

## Focus-4 Research Harness
- `07_build_publish/SIMS_GAME_RESEARCH_HARNESS_RUNBOOK_v1.0_2026-09-24.md`
- `06_ua_liveops/ADX_CREATIVE_DATA_SCHEMA_v1.0_2026-09-24.csv`
- `09_reports/FOCUS4_EXECUTION_MANIFEST_v1.0_2026-09-24.csv`
