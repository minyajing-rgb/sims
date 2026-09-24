# 点点数据实体映射说明（2026-09-24）

配套文件：`DIANDIAN_ENTITY_MAP_2026-09-24.csv`

## 使用口径

- CSV 一行代表一个独立商店实体或明确的非原生分发实体，不代表一个可直接合并的产品 family。
- `store_launch_month` 是该 listing / storefront 的首次上架月；`formal_launch_month` 只在一手来源明确正式开服或全球发布口径时填写。两者不同必须同时保留。
- 空白表示一手来源未确认，不是 `0`，也不能用最近更新时间代替。
- `source_url` 保留官方商店、开发商或官方入驻页链接；未用第三方估算补字段。
- 点点数据拉取时以 `platform + store_id` 为主键；`product_family` 只用于后续 family 层汇总。

## 禁止直接合并

1. **Heartopia / 心动小镇**
   - 中国 iOS `1561903786` 与全球 iOS `6746151928`、全球 Android `com.xd.xdtglobal.gp` 分开。
   - 全球 Android 2025-12 是商店 listing 月，2026-01 才是已确认的正式全球开服月。

2. **Township / Hay Day**
   - 全球历史实体与中国大陆现行 App Store 实体分开。
   - Township 中国 ID `1612426573` 的 2022-04、Hay Day 中国 ID `6448143424` 的 2024-05 都不是全球产品首发月。

3. **The Cozy Florist**
   - `com.riftsky.mhg.gb.gp`、`com.riftsky.mhg.zd.gp`、`com.riftsky.mhg.kr.gp`、`com.riftsky.mhg.ru.gp` 是独立 Android package。
   - 只有美国 iOS 与英国 Android 的 2025-12 上架月已核实；其他地区包在拿到发行商或数据商 family 映射前不得机械求和。

4. **我的花园世界**
   - 中国 iOS `6746321359`、台港澳 iOS `6751560944`、台港澳 Android `com.floralgames.hjxp`、越南 Android `com.myflower.gp` 分开。
   - 越南包与台港澳包的 family 关系仍需点点数据侧确认。

5. **疯狂水世界 / Wild Water World**
   - 中国 iOS、中国 TapTap Android、全球 iOS、全球 Google Play 四个实体分开。
   - 中国监管运营单位与商店发行主体是不同字段，不能互相覆盖。

6. **向往的生活**
   - 当前 `6751826673` 是 2025 BeeFun 合成经营版。
   - 2023 芒果互娱同名旧版是另一产品，历史下载、收入、版本与 LiveOps 不得拼接。

7. **浪漫餐厅 / Gossip Harbor**
   - 全球 iOS `1623318294`、全球 Android `com.mergegames.gossipharbor`、中国 iOS `6472696051` 分开存储，只在 family 层汇总。

8. **Cat Snack Bar / Eatventure**
   - Cat Snack Bar 主产品不得替换为 `com.tree.idle.cat.city` 或 `com.tree.puzzle.triplematch`。
   - Eatventure 模拟经营游戏是 `com.hwqgrhhjfd.idlefastfood`；`com.tealseed.eatventure` 是无关同名产品。

9. **QQ经典农场**
   - 这是 QQ / 微信小游戏，不存在独立原生 App Store 或 Google Play ID。
   - 原生下载字段应为 `N/A` / 空值，不得填 `0`；需要改用小游戏活跃、畅销榜、收入与投放口径。

## 日期冲突与未知项

- **我的花园世界台港澳 iOS**：Apple Lookup 为 2025-10，版本历史最早到 2025-09。CSV 保留 Lookup 月并标 `date_conflict`；拉数时以点点数据实际首条记录复核。
- **时尚百货城中国 iOS**：Apple Lookup 为 2026-01，版本历史最早到 2025-12。CSV 标 `date_conflict`，不擅自选择较早月份。
- **Heartopia 全球 Android**：2025-12-23 listing 的性质未由 XD 一手正文明确为预下载、软启动或完整可玩；正式上线月仍单列 2026-01。
- **The Cozy Florist**：未确认所有国家统一在 2025-12-04 开服；`zd` 的实际市场含义也未确认。
- **我的花园世界台港澳 Android、越南 Android、时尚百货城 Android**：Google Play 首发月未确认。
- **当前版《向往的生活官方游戏》**：未找到一手 Google Play package，小游戏首发日也未确认。
- **官方中文名**：My Perfect Hotel、Eatventure、The Cozy Florist、Big Farm Homestead 等未找到官方中文商品标题；不要自行翻译后作为抓数键。

## `status` 含义

| status | 含义 |
|---|---|
| `verified` | 商店 ID、标题、主体及上架月至少由一手商店页确认。 |
| `verified_separate_regional_entity` | 已确认的地区独立包，必须与全球包分开。 |
| `verified_store_scope_only` | 仅确认该 storefront / 地区记录，不外推全球统一上线。 |
| `verified_non_google_store` | 已确认的 Android 非 Google Play 商店实体。 |
| `prelaunch_listing_formal_launch_verified` | listing 月早于已确认正式开服月。 |
| `verified_listing_after_formal_launch` | 当前平台 listing 晚于产品正式首发月。 |
| `date_conflict` | 同一官方来源体系中的发布日期字段冲突，需保留审计痕迹。 |
| `launch_month_unknown` | ID / package 已确认，但首发月未确认。 |
| `family_mapping_unconfirmed` | 商店实体存在，但跨地区 family 归属仍待确认。 |
| `package_verified_metadata_incomplete` | package 已识别，地区、标题或上线月仍不完整。 |
| `no_native_store_listing` | 非原生商店产品，不存在可填的 App Store / Google Play ID。 |
