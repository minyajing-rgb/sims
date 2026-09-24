# Casual vs Light Simulation — Product Decision v0.1

## 当前建议

**研究仓库只用一个 `sims` 就够。**

原因：你现在真正要决定的不是两个独立赛道，而是**同一个产品从轻到重的结构**：

```
Casual Hook
  ↓
Satisfying Core Action
  ↓
Light Management
  ↓
Ownership / Decor / Collection
  ↓
NPC / Lifestyle
  ↓
LiveOps
  ↓
Optional Midcore
```

因此仓库拆成track，而不是另开一个“Casual Game”研究仓库。

## 建议边界

### 留在 sims
- Hyper/Hybrid Casual中与经营可融合的mechanic
- 割草、清洁、切割、整理、烹饪、搬运、摆货
- Idle Tycoon
- Time Management
- Farming
- Shop/Hotel/Restaurant
- Life Sim
- Decoration / Collection
- Roguelite副玩法如何接经营
- 小游戏/H5轻量化版本

### 不放 sims
- 纯Match-3行业研究
- 纯射击
- 纯棋牌
- 纯休闲Puzzle，没有经营/成长关系的
- 完整SLG行业研究

这些如未来变成独立业务，再开repo。

## 6–18个月产品路径

### 0–6M
目标：证明一个“手感动作 + 经营循环”。
- 1个主场景
- 1个核心动作
- 5–10分钟可重复loop
- 升级/扩建
- 轻装修/收藏
- 广告Creative测试
- H5/Android/Steam Demo择2–3路测试

### 6–12M
数据成立后增加：
- 第二/第三场景
- NPC/角色
- 家/花园/宠物
- Collection / Season
- 轻社交
- 更系统化IAP+IAA

### 12–18M
只在Retention/LTV成立后增加：
- 大地图或更多街区
- UGC/拜访
- 合作
- Roguelite/轻战斗
- 排行/联盟等中度层

## 最关键的产品命题

不是：
- “做Casual Game”
- 或“做Simulation”

而是：

> **用 Casual 的获量效率做入口，用 Simulation 的 Ownership / Progression / Content 做留存和商业化。**
