# Simulation Research Framework v1.0

**Date:** 2026-09-24  
**Purpose:** 用一套统一方法研究模拟经营，不靠“我觉得好玩 / 榜单高”做结论。

---

# 1. 研究必须回答的 8 个问题

## Q1. Market — 市场有没有钱？
看：
- Revenue
- Downloads
- growth
- category share
- region
- platform

结论不是“赛道大”，而是：
- 在增长还是衰退？
- 是老产品吃存量，还是新品还能切入？
- 哪个地区真正有机会？

---

## Q2. Acquisition — 用户怎么来的？
看：
- paid downloads
- organic downloads
- organic share
- creative volume
- platform recommendation
- creator spread
- IP / social effect

特别区分：
- Paid-led
- Organic-led
- IP-led
- Platform-led
- Creator-led
- Social-led

---

## Q3. Core — 前 30 秒为什么继续玩？
记录：
- first input
- first feedback
- first reward
- first transformation
- first goal
- first fail / friction

判断：
- 3秒能不能看懂？
- 30秒有没有结果？
- 操作本身是否有爽感？

---

## Q4. Progression — 为什么第 2 天还回来？
拆：
- tool upgrade
- new area
- production chain
- decor
- collection
- NPC
- story
- pet
- avatar
- economy
- social

---

## Q5. Meta — 为什么第 30 天还回来？
拆：
- album
- season
- pass
- events
- social
- guild
- leaderboard
- competition
- long collection
- prestige / rebirth
- RPG / SLG layer

---

## Q6. Monetization — 钱从哪里来？
拆：
- IAA
- IAP
- subscription
- starter pack
- currency
- energy
- cosmetics
- decor
- collection
- gacha
- pass
- D2C

不要只看总收入，要看收入和新增的关系。

---

## Q7. Content / Art — 团队能不能持续生产？
研究：
- asset count
- character count
- environment count
- animation cost
- new-event production cost
- monthly content cadence
- reuse ratio
- skinning ratio

一款产品即使收入高，如果需要 200 人长期供内容，对小工作室也未必是好 benchmark。

---

## Q8. Studio Fit — 我们能不能做？
最终必须回答：
- 6个月能不能出？
- 12个月能不能跑正？
- 18个月有没有扩展空间？
- 美术/程序/策划最大的瓶颈是什么？
- 有没有一条低成本验证路径？

---

# 2. Research Funnel

## Stage 1 — Universe Scan
目标：建立 60–100 款样本宇宙。

来源：
- AppMagic / 点点 / Sensor Tower
- Steam / SteamDB
- 微信小游戏
- 抖音小游戏
- App Store / Google Play
- YouTube / Twitch / TikTok / B站 / 小红书

样本必须覆盖：
- 头部
- 黑马
- 大厂新品
- 中小团队成功品
- 高自然量品
- 高收入品
- 高口碑品
- 失败/弱商业化对照组

---

## Stage 2 — Quant Filter
Mobile / mini-game 必录：
- monthly downloads
- monthly revenue
- paid / organic
- organic share
- top geo
- rating
- reviews
- ad creative count
- launch month
- version / event nodes

Steam 必录：
- rating
- review count
- review velocity
- followers
- current CCU
- peak CCU
- release date
- price
- major update / sale / creator nodes

---

## Stage 3 — 30 Minute Teardown
录像并拆：

### 0–3 min
- first action
- tutorial
- first reward
- first upgrade

### 3–10 min
- first new system
- first choice
- first friction
- first monetization exposure

### 10–30 min
- first meta goal
- first collection
- first event
- first new area / scene

输出：
- FTUE flow
- feature unlock timeline
- reward heartbeat
- economy source/sink
- screenshot set

---

## Stage 4 — D0–D7 Teardown
每天记录：
- return trigger
- new system
- new event
- new offer
- new social action
- new goal
- session length
- friction

重点不是“功能有多少”，而是：
> 每一天给了玩家什么新的理由回来？

---

## Stage 5 — Mid / Late Meta
重点看：
- 7d
- 30d
- 90d
- 180d

确认：
- 核心玩法是否仍重要
- Meta是否完全接管
- 内容是否模块化
- 是否进入Guild / PvP / SLG / long collection

---

# 3. Quant Signals

## 3.1 Organic Share
`Organic Share = Organic Downloads / Total Downloads`

## 3.2 Organic / Paid
`O/P = Organic Downloads / Paid Downloads`

用于看自然势能，不直接等于留存。

## 3.3 RPD
`RPD = Revenue / New Downloads`

只表示收入相对新增的深度。

**不是 ARPU / LTV。**

## 3.4 Download Decay
`D_ratio = Current Downloads / Peak Downloads`

## 3.5 Revenue Persistence
`R_ratio = Current Revenue / Peak Revenue`

如果：
- Download 已降很多
- Revenue 保持明显更强

则值得标记为：
**Stickiness / Existing-base candidate**

## 3.6 Revenue Carryover
`Carryover 3M = R(t+1)+R(t+2)+R(t+3) / D(t)`

只做混合盘 proxy，不冒充 cohort LTV。

---

# 4. Qualitative Scorecard — 100分内部评分

| Dimension | Weight | What it means |
|---|---:|---|
| Market proof | 10 | 收入/下载/趋势 |
| Organic potential | 15 | 自然量/口碑/平台/creator |
| Retention structure | 15 | ownership + goals + meta |
| Core clarity | 10 | 3秒理解、30秒反馈 |
| Creative hook | 10 | 素材可读性 / before-after / surprise |
| Monetization depth | 10 | IAP/IAA/Pass/collection |
| Content scalability | 10 | 内容能否模块化 |
| Studio feasibility | 10 | 6–18个月可生产 |
| Art differentiation | 5 | 是否有品牌辨识度 |
| AI-native potential | 5 | AI是否真正能改变世界/故事 |

### 使用规则
这个分数不是“游戏好坏排名”。

它只用于回答：
> **这个产品对我们的研究价值和制作价值有多高。**

---

# 5. 每款游戏最终必须输出 1 张 Product Card

## Identity
- Name
- Publisher
- Platform
- Launch
- Genre
- Region

## Business
- Downloads
- Revenue
- O/P
- RPD
- revenue persistence
- top geo

## Product
- Core action
- Core loop
- Meta
- Long-term progression
- Social
- LiveOps
- Monetization

## Art
- 2D / 2.5D / 3D
- camera
- character style
- environment
- UI
- content cost

## UA
- Top hooks
- before/after
- character
- satisfying
- story
- surprise
- social

## Our Take
- Learn
- Don't copy
- Cost
- Risk
- Prototype idea

---

# 6. 研究输出不是报告，而是决策

每一轮研究最终只允许进入三种状态：

### GREEN — Prototype
值得做一个 1–4 周 prototype。

### YELLOW — Watch
数据好，但团队成本 / 市场 / 技术还不确定。

### RED — Archive
看起来热，但不适合当前工作室。

---

# 7. 当前 SIMS 重点

第一轮不研究“所有模拟经营”。

优先：
1. Hands-on Cozy Management
2. Garden / Restoration / Decor
3. Cute Idle / Tycoon + Ownership
4. Lifestyle Light Sim
5. Casual Front + Long Meta

后续再扩：
- heavy city builder
- colony sim
- deep economy
- realistic professional simulator
