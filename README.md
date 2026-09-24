# SIMS — Casual × Simulation Research Lab

**Date:** 2026-09-24  
**Scope:** Mobile / 微信&抖音小游戏 / H5 / Steam-PC  
**Status:** ACTIVE RESEARCH

这个仓库用于研究 **Casual Core → Light Simulation → Management/Life Sim → Hybrid Midcore** 的产品机会。

## 研究原则

1. **先看美术和获量，再看玩法深度。**
2. 不把“畅销”“自然量”“留存”“商业化”混成一个排名；按研究目标分别选 Benchmark。
3. AppMagic / 点点 / Sensor Tower 等第三方数据统一保留原始月份与口径。
4. 自然量只能作为 PMF / stickiness proxy，**不能直接等同于 D1/D7/D30 留存**。
5. PC/Steam 与 Mobile/小游戏使用不同指标体系：
   - Mobile：Downloads / Revenue / Paid vs Organic / Rating / Review Velocity / LiveOps
   - Steam：Reviews / Rating / Peak CCU / Followers / Wishlist proxy / Creator spread
6. 研究仓库保持一个即可；真正进入制作的具体游戏，再单独开 production repo。

## 当前工作流

```
00_master/
01_watchlist/
02_art_style/
03_gameplay/
04_data_method/
05_product_strategy/
06_ua_liveops/
99_archive/
```

## 第一阶段问题

- 哪些产品属于真正的“高潜样本”，值得长期录月度数据？
- 哪些美术风格兼顾：辨识度、自然传播、素材生产效率、中小团队成本？
- 应该做 Pure Casual，还是 Casual Core + Light Sim Meta？
- 割草/清理/切割/烹饪等轻操作，应该是广告玩法、独立玩法，还是经营核心动作？
- 6 / 12 / 18 个月分别做到什么程度才不失控？

## 当前产品假设

优先验证：

> **Satisfying Casual Core + Light Management + Ownership/Decoration + Collection + Lightweight LiveOps**

而不是一开始做完整开放世界 Life Sim，也不是只做一次性 Hypercasual。

详见：
- `01_watchlist/HIGH_POTENTIAL_WATCHLIST_v0.1.md`
- `01_watchlist/DIANDIAN_MONTHLY_INPUT_TEMPLATE.csv`
- `02_art_style/ART_STYLE_MAP_v0.1.md`
- `04_data_method/ORGANIC_RETENTION_PROXY_v0.1.md`
- `05_product_strategy/CASUAL_VS_LIGHT_SIM_v0.1.md`
