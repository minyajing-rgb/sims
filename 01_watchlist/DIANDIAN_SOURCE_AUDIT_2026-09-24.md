# 点点数据 19 款模拟经营产品来源核验（2026-09-24）

## 结论先行

- 点点拉数必须以 **平台 + App Store ID / Google Play package** 为键，不能只按产品中文名合并。
- 19 个产品 family 对应至少 49 个已识别商店/分发实体；中国版、全球版、地区包和小游戏必须分开。
- 现有实体映射漏了两个中国独立 iOS 实体：Good Pizza 中国版《可口的比萨》`6736427807`、Animal Restaurant 中国版《动物餐厅》`1479366779`；后续拉数必须补入，且不得和全球版直接拼接。
- 本轮新增纠正：`The Cozy Florist` 的英国 Android 包 `com.riftsky.mhg.gb.gp` 在 Google Play 官方元数据中的首次发布日是 **2025-11-28**，iOS `6754878717` 的首次发布日是 **2025-12-04**，两端不能都写成 2025-12。
- Google Play 页面只显示 `Updated on`、没有可独立确认的首次发布日期时，本表把首发月保留为 `未知`；不得拿更新时间冒充上线月。
- 点点产品页的内部 hash 不是商店 ID，公开搜索也不稳定。本表因此给出可在 [点点高级搜索](https://app.diandian.com/advanced-search) 中直接粘贴的精确检索键；命中后再保存点点生成的产品页 URL。

## 字段口径

- **商店首发月**：Apple `releaseDate`、Google Play 页面内的首次发布字段，或官方入驻商店明确写出的上线日期。
- **正式上线月**：只有发行商/官方商店明确给出正式开服或全球发布时才填写；否则记为 `未确认`。
- **地区拆分**：不同 App ID/package 永远先分行存储；只有点点 family 映射和发行主体都确认后，才允许在 family 层汇总。
- **点点检索键**：优先粘贴 App ID/package；标题只作为备选，避免同名产品误命中。

## 19 款产品核验表

| # | 产品 family | 应使用的实体（平台 / ID） | 商店首发月 / 正式上线月 | 必须保留的拆分 | 点点精确检索键 | 一手来源 |
|---:|---|---|---|---|---|---|
| 1 | Heartopia / 心动小镇 | CN iOS `1561903786`；Global iOS `6746151928`；Global GP `com.xd.xdtglobal.gp` | CN iOS 2024-07；Global iOS 2026-01；Global GP listing 2025-12、正式全球上线 2026-01 | 中国 iOS 与全球 iOS/GP 分开；2025-12 的 GP listing 不等于正式开服 | `1561903786` / `6746151928` / `com.xd.xdtglobal.gp` | [CN App Store](https://apps.apple.com/cn/app/id1561903786) · [Global App Store](https://apps.apple.com/us/app/id6746151928) · [Google Play](https://play.google.com/store/apps/details?id=com.xd.xdtglobal.gp) |
| 2 | Township | Global iOS `638689075`；Global GP `com.playrix.township`；CN iOS `1612426573` | Global iOS 2013-10；Global GP 2013-11；CN iOS 2022-04；正式全球上线月未另证 | 2013 全球实体与 2022 中国实体分开 | `638689075` / `com.playrix.township` / `1612426573` | [Global App Store](https://apps.apple.com/us/app/id638689075) · [Google Play](https://play.google.com/store/apps/details?id=com.playrix.township) · [CN App Store](https://apps.apple.com/cn/app/id1612426573) |
| 3 | Hay Day | Global iOS `506627515`；Global GP `com.supercell.hayday`；CN iOS `6448143424` | Global iOS / 正式全球上线 2012-06；Global GP 2013-11；CN iOS 2024-05 | 2012 全球实体与 2024 腾讯中国实体分开 | `506627515` / `com.supercell.hayday` / `6448143424` | [Global App Store](https://apps.apple.com/us/app/id506627515) · [Google Play](https://play.google.com/store/apps/details?id=com.supercell.hayday) · [CN App Store](https://apps.apple.com/cn/app/id6448143424) |
| 4 | 我的花园世界 | CN iOS `6746321359`；TW/HK/MO iOS `6751560944`；TW/HK/MO GP `com.floralgames.hjxp`；VN/other GP `com.myflower.gp` | CN iOS 2025-08-05；TW iOS Apple `releaseDate` 2025-10-03（版本记录可追到 2025-09，冲突）；两个 GP 包首发月未确认 | 中国、台港澳、越南/其他地区分别拉；`com.myflower.gp` 与 `com.floralgames.hjxp` 的 family 关系待点点确认 | `6746321359` / `6751560944` / `com.floralgames.hjxp` / `com.myflower.gp` | [CN App Store](https://apps.apple.com/cn/app/id6746321359) · [TW App Store](https://apps.apple.com/tw/app/id6751560944) · [TW/HK/MO Google Play](https://play.google.com/store/apps/details?id=com.floralgames.hjxp) · [另一区域 Google Play](https://play.google.com/store/apps/details?id=com.myflower.gp) |
| 5 | The Cozy Florist | iOS `6754878717`；GB GP `com.riftsky.mhg.gb.gp`；其他 GP `com.riftsky.mhg.zd.gp`、`com.riftsky.mhg.kr.gp`、`com.riftsky.mhg.ru.gp` | GB GP 2025-11-28；iOS 2025-12-04；`zd/kr/ru` 首发月未确认（2026-09 页面日期只是当前更新时间）；统一正式上线月未确认 | 四个 Android package 不合并；`zd` 的市场含义仍未知 | `6754878717` / 四个完整 package | [App Store](https://apps.apple.com/us/app/id6754878717) · [GB Google Play](https://play.google.com/store/apps/details?id=com.riftsky.mhg.gb.gp) · [ZD Google Play](https://play.google.com/store/apps/details?id=com.riftsky.mhg.zd.gp) · [KR Google Play](https://play.google.com/store/apps/details?id=com.riftsky.mhg.kr.gp) · [RU Google Play](https://play.google.com/store/apps/details?id=com.riftsky.mhg.ru.gp) |
| 6 | Good Pizza, Great Pizza / 可口的比萨 | Global iOS `911121200`；Global GP `com.tapblaze.pizzabusiness`；CN iOS `6736427807` | Global iOS / 产品首发 2014-12-02；Global GP 2015-02-06；CN iOS 2024-12-08 | 中国 iOS 与全球实体分开；嘉文时代与 TapBlaze 的授权/发行链仅凭商店页未能独立证明；不能用当前 100M+ 商店档位代替逐月下载 | `911121200` / `com.tapblaze.pizzabusiness` / `6736427807` | [Global App Store](https://apps.apple.com/us/app/id911121200) · [Global Google Play](https://play.google.com/store/apps/details?id=com.tapblaze.pizzabusiness) · [CN App Store](https://apps.apple.com/cn/app/id6736427807) · [TapBlaze 产品页](https://tapblaze.com/app/good-pizza-great-pizza/) |
| 7 | My Perfect Hotel | iOS `1635760774`；GP `com.master.hotelmaster` | GP 2022-04-13；US iOS 2022-07-29；正式全球上线月未另证 | Android 先于 iOS，不能给 2022-04～06 的 iOS 补零；未发现 CN 独立包不等于绝对不存在 | `1635760774` / `com.master.hotelmaster` | [App Store](https://apps.apple.com/us/app/id1635760774) · [Google Play](https://play.google.com/store/apps/details?id=com.master.hotelmaster) |
| 8 | Eatventure | iOS `1600871388`；GP `com.hwqgrhhjfd.idlefastfood` | iOS 2022-02-10；GP 2022-02-28；正式上线月未另证 | 不得误用无关同名 package `com.tealseed.eatventure`；未发现 CN 独立包不等于绝对不存在 | `1600871388` / `com.hwqgrhhjfd.idlefastfood` | [App Store](https://apps.apple.com/us/app/id1600871388) · [Google Play](https://play.google.com/store/apps/details?id=com.hwqgrhhjfd.idlefastfood) |
| 9 | Office Cat | iOS `6471960010`；GP `com.tree.idle.cat.office` | iOS 2024-05；GP 2024-05（Google Play 首发 2024-05-03）；正式上线月未另证 | 与 Treeplla 的其他猫咪经营产品分开 | `6471960010` / `com.tree.idle.cat.office` | [App Store](https://apps.apple.com/us/app/id6471960010) · [Google Play](https://play.google.com/store/apps/details?id=com.tree.idle.cat.office) |
| 10 | Rent Please! | iOS `1645842987`；GP `com.shimmergames.tenants.gp` | iOS 2022-10；GP 2022-10；正式上线月未另证 | iOS bundle 与 Android package 字符串不同，但同属一个 family；按平台拉数后汇总 | `1645842987` / `com.shimmergames.tenants.gp` | [App Store](https://apps.apple.com/us/app/id1645842987) · [Google Play](https://play.google.com/store/apps/details?id=com.shimmergames.tenants.gp) |
| 11 | 疯狂水世界 / Wild Water World | CN iOS `6757172630`；CN TapTap `790816`；Global iOS `6780387121`；Global GP `com.iyagames.flotshelter` | CN TapTap / 正式上线 2026-01-08；CN iOS 2026-01-21；Global GP listing 2026-08-31；Global iOS / 正式全球上线 2026-09-01 | 中国与全球分开；CN Android 是 TapTap 实体，不是 Google Play | `6757172630` / `790816` / `6780387121` / `com.iyagames.flotshelter` | [CN App Store](https://apps.apple.com/cn/app/id6757172630) · [官方 TapTap](https://www.taptap.cn/app/790816) · [Global App Store](https://apps.apple.com/us/app/id6780387121) · [Global Google Play](https://play.google.com/store/apps/details?id=com.iyagames.flotshelter) |
| 12 | Animal Restaurant / 动物餐厅 | Global iOS `1460564684`；Global GP `droidhang.twgame.restaurant`；CN iOS `1479366779` | Global GP 2019-09-11；Global iOS 2019-09-18；CN iOS 2019-09-25；正式上线月未另证 | 中国 iOS `inland.twgame.restaurant` 与全球实体分开 | `1460564684` / `droidhang.twgame.restaurant` / `1479366779` | [Global App Store](https://apps.apple.com/us/app/id1460564684) · [Global Google Play](https://play.google.com/store/apps/details?id=droidhang.twgame.restaurant) · [CN App Store](https://apps.apple.com/cn/app/id1479366779) |
| 13 | Big Farm Homestead | iOS `6742455668`；GP `com.newmoonproduction.bigfarmhomestead` | GP 2025-06-16；iOS 2025-11；正式全球上线月未另证 | Android 先于 iOS；2025-06～10 的 iOS 应为 `N/A`，不能填 0 | `6742455668` / `com.newmoonproduction.bigfarmhomestead` | [App Store](https://apps.apple.com/us/app/id6742455668) · [Google Play](https://play.google.com/store/apps/details?id=com.newmoonproduction.bigfarmhomestead) |
| 14 | Resortopia | iOS `1580026385`；GP `global.hotel.twgame` | iOS 2021-10-19；GP 2021-10-19；正式上线月未另证 | 台港澳商店标题“乌冬的旅店/烏冬的旅店”仍是同一 ID/package | `1580026385` / `global.hotel.twgame` | [App Store](https://apps.apple.com/us/app/id1580026385) · [Google Play](https://play.google.com/store/apps/details?id=global.hotel.twgame) |
| 15 | Cat Snack Bar | iOS `6443895159`；GP `com.tree.idle.catsnackbar` | iOS 2023-01；GP 2023-01；正式上线月未另证 | 不得替换为 `com.tree.idle.cat.city` 或 `com.tree.puzzle.triplematch` | `6443895159` / `com.tree.idle.catsnackbar` | [App Store](https://apps.apple.com/us/app/id6443895159) · [Google Play](https://play.google.com/store/apps/details?id=com.tree.idle.catsnackbar) |
| 16 | QQ经典农场 | QQ / 微信小游戏，无原生 App Store ID、Google Play package | 腾讯应用宝官方账号在 2026-02-06 标注“今日上线”；Apple 编辑页同期确认其为微信小程序 | 原生下载、收入字段记 `N/A` 而不是 0；改用小游戏活跃、畅销、收入及投放口径 | 点点原生商店无有效键；备选标题 `QQ经典农场` 仅用于确认无结果 | [Apple 微信小程序专题（含 QQ经典农场）](https://apps.apple.com/cn/iphone/story/id1857606814) · [腾讯应用宝官方账号检索页](https://weibo.com/downloadapp) |
| 17 | 向往的生活 | 当前 2025 BeeFun iOS `6751826673`；未找到一手 Google Play package | 当前 iOS 2025-10-02；其他原生平台首发未确认 | 2025 BeeFun 合成经营版与 2023 芒果互娱旧版是不同产品；旧版历史不得接到当前 ID | `6751826673`；标题备选 `向往的生活官方游戏` | [当前 CN App Store](https://apps.apple.com/cn/app/id6751826673) · [BeeFun 开发者页](https://apps.apple.com/cn/developer/beefun/id1540241136) |
| 18 | 时尚百货城 | CN iOS `6752632961`；GP `com.tomato.and.hkssbhc` | Apple `releaseDate` 2026-01-28，但版本历史最早可见 2025-12，存在冲突；GP 首发月未确认（2026-09 页面日期为更新时间） | iOS 日期冲突保留；不能把 GP 最近更新时间写成首发 | `6752632961` / `com.tomato.and.hkssbhc` | [CN App Store](https://apps.apple.com/cn/app/id6752632961) · [Google Play](https://play.google.com/store/apps/details?id=com.tomato.and.hkssbhc) |
| 19 | 浪漫餐厅 / Gossip Harbor | Global iOS `1623318294`；Global GP `com.mergegames.gossipharbor`；CN iOS `6472696051` | Global iOS 2022-07-07；Global GP 2022-09-09；CN iOS 2024-04-17；正式上线月未另证 | 全球与中国实体分开，最终仅在 family 层汇总 | `1623318294` / `com.mergegames.gossipharbor` / `6472696051` | [Global App Store](https://apps.apple.com/us/app/id1623318294) · [Global Google Play](https://play.google.com/store/apps/details?id=com.mergegames.gossipharbor) · [CN App Store](https://apps.apple.com/cn/app/id6472696051) |

## 点点拉数顺序

1. 在点点首页切到“商店”，逐个粘贴上表 App ID/package；标题只作备选。
2. 每次进入产品页后，记录点点内部产品页 URL、平台、国家/地区、App ID/package，防止后续页面 hash 变化造成误配。
3. 先按独立实体导出下载与收入，再在本地按 `product_family + month` 聚合；禁止先在点点中把区域包机械合并。
4. 商店首发前月份写 `N/A`；点点有覆盖但数值不可见写 `unavailable`；只有点点明确返回 0 才能写 0。
5. QQ经典农场不进入 App Store/Google Play 月度下载表，另建 `minigame` 数据表。

## 已确认的未知项

- `The Cozy Florist` 的 `zd` 市场含义、`zd/kr/ru` 独立包的首次发布月，以及它们是否应在点点 family 层合并。
- `我的花园世界` 两个 Android 包的首次发布月；`com.myflower.gp` 与台港澳实体的发行 family 关系。
- `向往的生活` 当前 2025 产品的一手 Google Play package，以及 2023 旧版的可靠商店主键。
- `时尚百货城` Google Play 首次发布月；App Store `releaseDate` 与版本历史的月份冲突。
- Good Pizza 中国 iOS 发行主体与 TapBlaze 全球产品之间的授权/发行链，仅凭当前商店页不能完全独立证明；现阶段按独立中国实体存储。
- 多数产品没有独立的一手“正式全球开服”公告；在这种情况下只能使用各商店 listing 月，不能擅自把最早商店月改写成正式上线月。

## 来源说明

- Apple 日期来自 App Store 官方页面及 Apple Lookup 元数据；同一 App 在不同 storefront 的可见时间可能不同。
- Google Play 日期只在官方页面明确给出首次发布字段时用于首发月；`Updated on` 仅是更新日期。
- 疯狂水世界中国 Android 上线日来自官方入驻 TapTap 页面。
- 点点页面用于后续数据提取，不作为 App ID/package 身份的唯一证明；身份以官方商店和发行商一手页面为准。
