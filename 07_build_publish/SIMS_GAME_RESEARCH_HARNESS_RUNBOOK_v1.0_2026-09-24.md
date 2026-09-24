# SIMS Focus-4 Research Execution Runbook v1.0

**Date:** 2026-09-24  
**Scope:** Office Cat / My Perfect Hotel / Big Farm Homestead / The Cozy Florist  
**Market:** US-first, Global-secondary  
**Goal:** 用同一套采集与分析流程回答六个产品问题：

1. 3秒该怎么玩？
2. 30分钟该开什么？
3. 第7天以后拿什么养？
4. 美术要做到多少？
5. 活动做多重？
6. 小团队承受得住多少内容？

---

# 1. 两条并行研究线

## Track A — Game Capture / Product Teardown

输入：
- Android 真机 / Emulator
- YouTube / Bilibili / official gameplay
- App Store / Google Play
- 版本历史 / 活动说明

输出：
- FTUE 时间线
- Core Loop
- Feature Unlock
- Meta / Side System
- Economy / Monetization
- LiveOps
- Art screenshots
- Production burden

## Track B — ADX / Creative Intelligence

输入：
- ADX creative crawl
- asset URL / video / image
- first seen / last seen
- geo / OS / placement
- spend / impression proxy
- landing / store destination

输出：
- Persona
- Hook
- 1–3s opening
- gameplay promise
- meta promise
- creative format
- fatigue / winner signal
- creative-to-product truthfulness
- US creative angle map

---

# 2. Focus-4 Role

| Product | Primary question | Secondary question |
|---|---|---|
| My Perfect Hotel | 3秒怎么玩 / D0 action clarity | 轻Core如何快速形成容量成长 |
| Office Cat | 小团队能做到多少内容 | cute 3D / modular room / idle meta |
| Big Farm Homestead | D7以后养什么 / 活动做多重 | 新品如何把 ownership 接 Pass / collection / festival |
| The Cozy Florist | 美术做到多少 / cozy如何获量 | 花园题材是否需要更深meta才能承接收入 |

---

# 3. Game Capture 实操

## 3.1 首选硬件

### Primary
Android 真机 + USB + ADB + scrcpy

用途：
- 真实当前版本
- 录屏
- 截图
- UI/性能/登录真实性

### Secondary
Android Studio Emulator

用途：
- reset
- 自动化重复跑
- 多分辨率
- scripted FTUE

### Web Video
用于：
- 历史版本
- D7+ / 后期系统
- 无法快速实机解锁的内容
- 活动 / 高等级账号

---

# 4. 每款游戏至少跑 3 个 Session

## Run A — Fresh Account FTUE
目标：0–30分钟。

记录：
- T+0 App Launch
- First Visible Frame
- First Input
- First Feedback
- First Reward
- First Upgrade
- First Area/Room/Plot
- First Ownership action
- First Meta surface
- First Event surface
- First Offer
- T+5m
- T+10m
- T+30m

## Run B — Returning Player
目标：D1–D3。

记录：
- return trigger
- offline reward
- daily reward
- mission
- first event reminder
- first progression wall
- first monetization pressure

## Run C — Mid-game Evidence
目标：D7+ / advanced state。

不强求自己玩7天：
- public gameplay video
- high-level account recording
- creator video
- official feature demo
- app release/event page

记录：
- long meta
- collection
- production chain
- event hub
- pass
- social
- recurring sinks

---

# 5. 录屏文件结构

```
08_assets/research_capture/
  office_cat/
    2026-09-24_ftue/
      raw.mp4
      timeline.csv
      screenshots/
      ui_states/
      notes.md
  my_perfect_hotel/
  big_farm_homestead/
  the_cozy_florist/
```

GitHub public repo 不上传受版权限制的大体积整段视频时：
- 保存 manifest
- 保存 source URL
- 保存时间戳
- 保存允许公开使用的截图/缩略图
- 原始视频放 private working storage

---

# 6. FTUE Timeline Schema

Required row:

`product | run_id | milestone | t_seconds | screen | input | feedback | reward | currency | unlock | friction | offer | evidence | video_timestamp`

核心输出：
- Time to First Action
- Time to First Reward
- Time to First Upgrade
- Time to First Ownership
- Time to First Event
- Time to First Offer
- Systems visible by 5m/10m/30m

---

# 7. 3秒怎么玩 — Core Test

每款只回答四件事：

## 7.1 What is the first verb?
例如：
- My Perfect Hotel: Move / serve / collect
- Office Cat: Build / upgrade / collect
- Big Farm: Restore / harvest / produce
- Cozy Florist: plant / collect / arrange

## 7.2 Is the result visible?
30秒内必须看到：
- before → after
- empty → full
- dirty → clean
- locked → unlocked
- poor → rich
- plain → beautiful

## 7.3 What is the reward heartbeat?
记录奖励间隔：
- <5s
- 5–15s
- 15–30s
- >30s

## 7.4 Can it be shown in a 10–20s ad?
如果不能清晰拍出来，就不适合作为首要UA Core。

Ops Cat candidate:
`Mow → Grass clears → Hidden object → Coin/material → Garden visibly improves`

---

# 8. 30分钟开什么 — Unlock Map

每款生成：

```
0–1m Core
1–3m Reward/Upgrade
3–5m Ownership
5–10m Second system
10–20m Meta
20–30m Event / Offer / Collection / Story
```

记录：
- unlock condition
- tutorial burden
- number of simultaneous surfaces
- whether the core is interrupted
- whether monetization appears before value proof

输出：
`FTUE_UNLOCK_MATRIX.csv`

---

# 9. 第7天以后拿什么养 — Long Meta Map

按系统分：

## Ownership
- room
- hotel
- office
- garden
- farm
- town

## Progression
- tool
- machine
- area
- capacity
- character
- NPC
- production chain

## Collection
- album
- rare item
- decor
- fashion
- pets

## Social
- visit
- gift
- leaderboard
- guild
- co-op

## LiveOps
- daily
- weekly
- season
- pass
- event currency
- collection event

## Monetization
- energy
- speed
- pass
- piggy
- bundle
- cosmetic
- VIP

最终判断：
> Core 到 D7 还重要吗？还是已经只是入口？

---

# 10. 美术做到多少 — Art Benchmark

对每款截至少：

1. Home / Main scene
2. Core action
3. Upgrade
4. Character
5. Environment
6. Event
7. Store / offer
8. Before / After

每张图记录：
- camera
- render mode
- palette
- saturation
- lighting
- material
- silhouette
- prop density
- UI density
- VFX
- handcrafted layer
- thumbnail readability
- production burden

Ops Cat A/B/C:
- A = market-clean 3D
- B = A + ~15% painterly/storybook
- C = A + ~30% authored watercolor/gouache detail

不改角色/构图/玩法，只改 visual layer 做 creative A/B。

---

# 11. 活动做多重 — LiveOps Weight

每款活动按复杂度分 4 级：

## L0 — Wrapper
- bonus
- login
- simple mission

## L1 — Reusable Event
- event currency
- milestone
- reward track
- themed decor

## L2 — Multi-system Event
- pass
- collection
- leaderboard
- mini-game
- story wrapper

## L3 — Heavy Event
- new map
- bespoke gameplay
- new narrative arc
- major IP
- high unique asset count

记录：
`Event | Level | Duration | Assets | Systems | Rewards | Monetization | Social | Reuse | Production Burden`

Ops Cat first 6 months target:
- mostly L0/L1
- max 1 reusable L2 mother engine
- avoid L3 until retention proven

---

# 12. 小团队承受多少内容 — Production Budget Model

每款估算：
- new environment modules/month
- characters/month
- animations/month
- UI/event assets/month
- narrative beats/week
- new system features/quarter
- client releases/month
- config-only events/month
- reusable-event ratio

内部标签：
- Lean
- Medium
- Heavy
- AAA-like

重点不是猜团队人数，而是估算：
> 一个新内容单位需要多少“不同类型的工作”。

Ops Cat goal:
- Core system: reusable
- Event system: reusable
- Art skin: replaceable
- Story: short modular
- Client releases: low frequency
- LiveOps config: high frequency

---

# 13. ADX 实操

ADX crawler 每条素材至少保存：

```
creative_id
product
market
platform
network
placement
first_seen
last_seen
days_live
format
duration_sec
video_url/image_url
landing_url
impression_proxy
spend_proxy
copy
cta
```

然后自动二次标注：

```
persona
hook
first_1_3s
core_shown
meta_shown
story_shown
before_after
fail_fix
cute_character
ownership
collection
offer
truthfulness_risk
```

---

# 14. ADX Winner Detection

不要只看 spend proxy。

候选 Winner 定义建议：

- days_live >= 14
- repeated / refreshed variants
- cross-network appearance
- meaningful impression/spend proxy
- same hook appears in multiple creative variants

Candidate Fatigue:
- high early density
- rapidly disappears
- replacement variants decline
- hook stops recurring

全部标：
**ADX proxy**, 不冒充真实 campaign ROAS。

---

# 15. Creative → Product Crosscheck

每条高价值 Creative 必须回答：

1. 广告前3秒卖什么？
2. 游戏里真实存在吗？
3. 多久能玩到？
4. 是Core还是Side？
5. 是FTUE可见还是D7才可见？
6. 广告是不是把Side冒充Core？
7. Creative promise 和 store screenshots 一致吗？
8. 如果我们学，能不能真实做进产品？

输出：
`CREATIVE_PRODUCT_TRUTH_MATRIX.csv`

---

# 16. Focus-4 最终比较

最终四款不做一个总分，而是回答六个 objective：

## Q1 — 3秒怎么玩？
Primary: My Perfect Hotel
Secondary: Office Cat

## Q2 — 30分钟开什么？
Primary: My Perfect Hotel / Office Cat
Secondary: Big Farm Homestead

## Q3 — D7以后养什么？
Primary: Big Farm Homestead
Secondary: Office Cat / Hay Day reference

## Q4 — 美术做到多少？
Primary: The Cozy Florist / Office Cat
Ceiling: Heartopia
Durable readability: Hay Day

## Q5 — 活动做多重？
Primary: Big Farm Homestead
Secondary: Gossip Harbor / Hay Day

## Q6 — 小团队承受多少？
Primary: Office Cat / My Perfect Hotel
Counterexample: Heartopia

---

# 17. One-week Execution Sprint

## Day 1
- install four games
- create fresh accounts
- record 0–30m FTUE
- crawl ADX current creatives

## Day 2
- annotate FTUE
- extract 8 art screenshots/game
- build Core / Unlock matrix

## Day 3
- collect D7+ public gameplay evidence
- fill Meta / Side System matrix
- collect store/version/event history

## Day 4
- classify ADX creatives
- winner/fatigue candidates
- creative-product truth matrix

## Day 5
- LiveOps complexity / production burden
- compare Focus-4 by six questions

## Day 6
- Ops Cat A/B/C product translation
- UA creative test plan

## Day 7
- QA evidence
- update full HTML Atlas
- status audit / changelog

---

# 18. Tool split

## Human / researcher
- account/login
- judgment calls
- edge cases
- paid flow only when authorized

## ADB / Maestro / Appium
- deterministic tap/swipe
- reset/replay
- screenshot
- milestone automation

## scrcpy
- real-device screen control
- MP4 recording

## Codex
- scripts
- frame extraction
- timeline generation
- CSV normalization
- matrix generation
- HTML build
- GitHub update

## Jev (optional later)
- choose among high-level macros when exploration becomes non-deterministic
- do not use as low-level continuous controller

---

# 19. Definition of done for one game

A focus game is teardown-complete only if it has:

- D0 30m recording or equivalent high-confidence evidence
- 8+ visual reference frames
- Core loop
- FTUE unlock map
- D7+ long-meta evidence
- monetization surfaces
- LiveOps/event evidence
- ADX creative set
- creative-product crosscheck
- production burden
- Learn / Do-not-copy
- Ops Cat test implication
- source / confidence / gaps
