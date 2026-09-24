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
99_archive/
```

## Start Here

- `00_master/BENCHMARK_BY_OBJECTIVE_v0.1.md`
- `00_master/PROJECT_CONTEXT_CONSOLIDATED_v0.2_2026-09-24.md`
- `01_watchlist/HIGH_POTENTIAL_WATCHLIST_v0.1.md`
- `01_watchlist/DIANDIAN_MONTHLY_INPUT_TEMPLATE.csv`
- `02_art_style/ART_STYLE_MAP_v0.1.md`
- `02_art_style/ART_REFINEMENT_10_30_PERCENT_v0.1.md`
- `03_gameplay/GAMEPLAY_ARCHETYPE_MAP_v0.1.md`
- `04_data_method/ORGANIC_RETENTION_PROXY_v0.1.md`
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
6. AI不直接控制经济、付费价值和关键进度；AI主要承担个性化、叙事和内容装配。
7. 先做可玩的 5–10 分钟 vertical slice，再扩世界。
