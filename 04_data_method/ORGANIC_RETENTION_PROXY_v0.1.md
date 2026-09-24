# Organic / Retention Proxy Method v0.1

## 重要：自然量高 ≠ 留存高

点点/AppMagic月度数据可以很好地做 **自然获量、产品势能、收入承接** 的proxy，但不能替代真实 D1/D7/D30 cohort。

## 基础字段

- D_t = 当月总下载
- P_t = 当月付费/买量下载（如果有同口径估算）
- O_t = 自然下载 = D_t - P_t
- R_t = 当月IAP收入
- RPD_t = R_t / D_t

## 建议计算

### 1. Organic Share
`Organic Share = O_t / D_t`

### 2. Organic / Paid Ratio
`O/P = O_t / P_t`

- >1：自然新增超过买量
- >2：很强的自然势能候选
- >4：优先检查是否有IP、平台推荐、病毒传播、版本事件或口碑扩散

**注意：** Paid install本身如果是模型估计，必须保留source与confidence。

### 3. Revenue Persistence
不能只看“当月下载高、当月收入高”。

更强的留存/存量信号是：

> **UA/新增回落后，收入没有同步快速塌。**

记录：
- `D_t / D_peak`
- `R_t / R_peak`
- 若下载降得比收入快很多，说明收入由存量玩家/长期payer承接的可能性更高。

### 4. Revenue Carryover Proxy
`Carryover_1m = R_(t+1) / D_t`
`Carryover_3m = (R_(t+1)+R_(t+2)+R_(t+3)) / D_t`

这不是LTV，只是混合盘的滞后承接proxy。

### 5. RPD
`RPD = 同期收入 / 同期下载`

- 用于“收入相对于新增规模的深度”
- **不是 ARPU / ARPDAU / ARPPU / LTV**
- 老产品低新增会天然抬高RPD

## 我们给样本打的信号标签

### O — Organic Candidate
满足：
- O/P长期明显>1，且不是单月事件
- 下载在低广告活动月份仍稳定
- 评价/社媒/榜位有自然扩散证据

### S — Stickiness Candidate
满足至少2项：
- 下载回落后收入保持
- 长期评论/评分仍稳定
- 版本与活动停止高峰后仍有下载/收入底盘
- 老产品多年仍保持较高收入

### V — Viral / Creator Candidate
- PC：CCU、评论增长、主播传播
- Mobile：UGC、短视频模板、before-after、稀有掉落、角色/装修截图

## 不允许的结论

- 仅凭“自然量高”写“留存一定高”
- 仅凭“RPD高”写“LTV高”
- 仅凭“下载高”写“产品赚钱”
- 把中国iOS/Google Play/小游戏榜位等不同口径直接相加
