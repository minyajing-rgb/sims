# SIMS — Casual × Simulation Research & Product Lab

**Date:** 2026-09-24  
**Scope:** Mobile / 微信&抖音小游戏 / H5 / Steam-PC  
**Status:** ACTIVE RESEARCH + OPS CAT PROTOTYPING

这个仓库用于研究并推进：

> **Casual Core → Light Simulation → Management/Life Sim → AI-native Cozy Game → Optional Hybrid Midcore**

## 当前主线

### 1. 市场与数据
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
09_reports/           竞品分析HTML / release notes / final delivery
skills/               可复用分析方法
99_archive/
```

## Start Here

### Research Framework v1
- `00_master/SIMULATION_CATEGORY_TAXONOMY_v1.0_2026-09-24.md`
- `00_master/SIMULATION_RESEARCH_FRAMEWORK_v1.0_2026-09-24.md`
- `00_master/MARKET_SNAPSHOT_2026Q3.md`
- `01_watchlist/BENCHMARK_SAMPLE_SELECTION_RULES_v1.0_2026-09-24.md`
- `04_data_method/RESEARCH_SOP_AND_EVIDENCE_RULES_v1.0_2026-09-24.md`
- `04_data_method/SIM_PRODUCT_CARD_TEMPLATE_v1.0_2026-09-24.md`
- `03_gameplay/SIM_GENRE_PRODUCT_MATRIX_v1.0_2026-09-24.csv`

### Competitor Analysis Skill
- `skills/competitor-trend-cause-analysis/SKILL.md`
- Required workflow: **Trend → Flag → Crosscheck → Evidence Level → Interpretation → Testable Action**
- Required output for large datasets: self-contained offline interactive HTML.

### Codex Data Pull
- `01_watchlist/DIANDIAN_PRIORITY_WATCHLIST_v0.2_2026-09-24.csv`
- `01_watchlist/DIANDIAN_PRIORITY_WATCHLIST_v0.2_2026-09-24.md`
- `01_watchlist/DIANDIAN_MONTHLY_INPUT_TEMPLATE.csv`
- `01_watchlist/DIANDIAN_ENTITY_MAP_2026-09-24.md`
- `01_watchlist/DIANDIAN_MONTHLY_HEARTOPIA_GLOBAL_2025-12_2026-08.csv`
- `01_watchlist/HEARTOPIA_DOWNLOAD_TRAJECTORY_2026-09-24.md`
- `04_data_method/DIANDIAN_MONTHLY_SCHEMA_v0.2.md`

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
11. 当前仅 Heartopia Global 的 2025-12 至 2026-08 月度下载完成核验；其余 18 个产品族仍为 `pending`，缺失值不是 0。
