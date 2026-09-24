# Simulation Research SOP & Evidence Rules v1.0

**Date:** 2026-09-24

---

# 1. Research Sprint 标准流程

## Step 0 — 写假设
研究前先写一句：
> 我们想验证什么？

例如：
- 割草是否适合作为 Core 而非副玩法？
- 2.5D 手绘是否比 clean 3D 更适合自然量？
- Casual入口能否接 90天以上长Meta？
- 装修是不是比角色养成更适合第一年？

没有假设，不做无边界竞品抄录。

---

## Step 1 — 建样本组
每个问题最少 4 类样本：

1. **Head** — 已验证头部
2. **Black Horse** — 近2–3年新黑马
3. **Big Publisher New** — 大厂新品
4. **Contrast** — 下载高但收入弱 / 收入高但获量弱 / 口碑好但规模小

避免 survivorship bias。

---

## Step 2 — 数据录入
所有数值必须带：
- date
- region
- platform
- source
- metric definition

禁止把：
- AppMagic Net IAP
- Sensor Tower Gross Spend
- 点点估算
- 中国iOS
- 全球双端

直接混成同一列比较。

---

## Step 3 — 做 Curve，不只看累计
至少画：
- monthly downloads
- monthly revenue
- paid vs organic
- organic share
- RPD
- revenue persistence

关键不是累计多少，而是：
> 峰值以后怎么走？

---

## Step 4 — 录像拆实机
至少保存：
- first 3 min
- first 10 min
- first 30 min
- D1
- D3
- D7

重要页面截图：
- home
- core gameplay
- upgrade
- store
- event
- collection
- social
- paywall / offer

---

## Step 5 — 拆内容生产
估算：
- 新场景要多少资产？
- 新活动要多少图？
- 一个角色要多少动画？
- 每周活动多少是模板复用？
- 一个月至少需要多少美术人天？

这是决定“能不能学”的核心。

---

## Step 6 — 拆 Creative
把广告按Hook分类：

### Action
- cut
- mow
- clean
- cook
- merge
- place

### Transformation
- before/after
- repair
- renovate
- unlock

### Emotion
- cute
- healing
- relationship
- rescue
- home

### Surprise
- rare item
- hidden object
- mystery
- big reward

### Story
- conflict
- neighbor request
- life choice
- travel

---

## Step 7 — 输出可验证原型
研究结论必须落成：
- 1个 prototype
- 1个 fake / semi-playable creative
- 1个 art A/B
- 1个 KPI gate

否则只是信息搜集，不是产品研究。

---

# 2. Evidence Grade

## A — Primary / Direct
优先使用：
- App Store / Google Play
- Steam / SteamDB
- 官方公告
- developer / publisher
- AppMagic / 点点 / Sensor Tower原始报告
- 平台榜单

## B — Trade / Secondary
- PocketGamer
- GameLook
- GameMeca
- GameDeveloperReports
- DataEye转载
- 行业媒体

要求明确标注：
“reported by / citing X data”

## C — Community / Estimate
- Reddit
- forum
- YouTube comments
- non-transparent estimates

只用于：
- qualitative signal
- 玩家痛点
- creator reaction

不能单独支撑收入/下载结论。

---

# 3. Source Confidence

每条数据加：

- **A1** — first-party/direct dashboard
- **A2** — store/platform direct
- **B1** — named third-party data source
- **B2** — trade press citing source
- **C** — estimate/community

---

# 4. Platform-specific research

## Mobile
核心：
- acquisition
- retention proxy
- revenue
- liveops
- offers
- creative

## Mini-game
额外看：
- WeChat rank
- Douyin rank
- paid-spend rank
- hot rank
- cross-platform ranking
- IAA vs IAP vs hybrid
- platform social chain

## Steam
核心：
- rating
- reviews
- review velocity
- followers
- peak/current CCU
- price
- wishlists proxy
- demos / Next Fest
- streamer spread
- workshop/mod

Steam的“自然量”不能照搬 Mobile 的 organic install。

---

# 5. Research Cadence

## Weekly
- 新品
- 排名变化
- creative
- Steam trending
- mini-game top movers

## Monthly
- downloads/revenue curve
- paid/organic
- liveops
- version
- monetization changes

## Quarterly
- category strategy
- benchmark replacement
- studio-fit reevaluation
- prototype priorities

---

# 6. Red Flags

看到以下情况先不要学：

- 下载极高但收入不承接
- 收入高度依赖单一地区
- 只有IP推荐，没有自然底盘
- 内容量需要超大团队
- 玩法30秒都说不清
- 后期完全换成另一个游戏
- 广告素材与真实产品差太远
- LiveOps靠每天堆大量一次性内容
- RPD高只是因为老产品新增低
- Steam好评高但样本评论极少

---

# 7. Final Research Output

每个主题最终交付：

```
01 Market Snapshot
02 Benchmark Group
03 Quant Curves
04 FTUE Teardown
05 Core / Meta Map
06 Art / Content Cost
07 UA Creative Map
08 Monetization
09 Studio Fit
10 Prototype Recommendation
11 Source Log
```
