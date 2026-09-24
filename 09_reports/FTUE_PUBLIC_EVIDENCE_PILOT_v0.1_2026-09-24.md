# SIMS FTUE Public Evidence Pilot v0.1

**Date:** 2026-09-24  
**Market priority:** US-first, Global-secondary  
**Parent Skill:** `skills/sims-full-competitor-benchmark/SKILL.md`

> This file does **not** claim full timed FTUE completion. It converts publicly observable first-session evidence into the parent Skill schema and keeps missing timestamps as TBD. Public guides are external evidence, not first-party telemetry.

## Evidence labels
- **OBSERVED-FIRST-PARTY:** official US App Store / Google Play text.
- **OBSERVED-EXTERNAL:** public gameplay/beginner guide.
- **INFERRED:** interpretation only.
- **TBD:** still needs recorded gameplay capture.

---

## 1. Heartopia — PARTIAL

### First-session sequence
| Milestone | Evidence | Status |
|---|---|---|
| Character creation | Public beginner guides describe appearance setup before tutorial | OBSERVED-EXTERNAL |
| Movement / camera / interaction | Tutorial teaches navigation and interaction | OBSERVED-EXTERNAL |
| First ownership | Starter home / plots are granted early | OBSERVED-EXTERNAL |
| First decoration | Player places first furniture in starter home | OBSERVED-EXTERNAL |
| First hobby | Fishing mentor / first hobby appears in beginner flow | OBSERVED-EXTERNAL |
| Main progression | D.G. progression / guild system begins in early tutorial | OBSERVED-EXTERNAL |
| Builder Tablet | Public guide places it after roughly 10–15 minutes of tutorial quests | OBSERVED-EXTERNAL |
| First shop / offer | not normalized | TBD |
| First event exposure | not normalized | TBD |
| D1/D3/D7/D14 systems | not normalized | TBD |

### Sources
- US App Store: https://apps.apple.com/us/app/heartopia/id6746151928
- External beginner guide: https://heartopia.gg/beginner-guide
- Secondary day-one guide: https://heartopia.sbs/beginner.html

### Product read
- **INFERRED:** Heartopia intentionally front-loads identity/ownership before deep economic optimization: character → home → hobby → guild/progression.
- **Ops Cat implication:** if Ops Cat adopts lifestyle layers later, first ownership must appear before broad world exploration; do not make D0 a long questionnaire or open-world tour.

---

## 2. My Perfect Hotel — PARTIAL

### First-session sequence
| Milestone | Evidence | Status |
|---|---|---|
| First input | move character around hotel; stand near task to act | OBSERVED-EXTERNAL |
| First core action | cleaning / reception / payment collection are stated as starting duties | OBSERVED-FIRST-PARTY |
| First reward | cash / tips from hotel service | OBSERVED-FIRST-PARTY |
| First sink | room/facility upgrade | OBSERVED-FIRST-PARTY |
| First capacity expansion | additional rooms / amenities / staff | OBSERVED-FIRST-PARTY |
| Staff automation | hire employees as demand grows | OBSERVED-FIRST-PARTY |
| First 5 min | external guides describe service → cash → first upgrades within the opening minutes | OBSERVED-EXTERNAL |
| First monetization exposure | exact timestamp unavailable | TBD |
| First live event exposure | exact timestamp unavailable | TBD |
| D1/D3/D7/D14 systems | not normalized | TBD |

### Sources
- US App Store: https://apps.apple.com/us/app/my-perfect-hotel/id1635760774
- External control/first-session guide: https://myperfecthotel.net/

### Product read
- **INFERRED:** D0 is deliberately action-first and nearly zero-cognitive-load: move → auto-do task → get cash → spend → see capacity grow.
- **Ops Cat implication:** target the same clarity for `move/drag → mow/clean → reveal → collect → repair/decor`; ownership can deepen later without blocking the first satisfying action.

---

## 3. The Cozy Florist — EVIDENCE LOCATED, TIMING TBD

### Evidence located
- Official US App Store confirms the high-level promise: garden + flower shop + social flower stealing / visiting.
- Public full gameplay walkthrough exists: https://www.youtube.com/watch?v=Dglh6Rjx90c

### Current status
- The walkthrough has **not** yet been converted into exact `T+ time | action | prompt | reward | friction | choice | currency | screenshot timestamp` rows.
- Do not call this FTUE complete.

---

## 4. Township — TBD TIMED CAPTURE

### Public product evidence
- US App Store clearly exposes the mature product stack: town/farm + match-3 + Regatta + collections + passes + expeditions.
- Current Regatta help confirms 6 match-3 + 6 town tasks.

### Current status
- Exact first-session unlock order and T+ timings are not established from first-party/public timed capture.
- Store listing cannot substitute for FTUE telemetry.

Sources:
- https://apps.apple.com/us/app/township/id638689075
- https://playrix.helpshift.com/hc/en/3-township/faq/16605-about-the-regatta-1765929812/

---

# What this closes
- FTUE is no longer entirely empty: Heartopia and My Perfect Hotel now have **PARTIAL external/first-party sequence evidence**.
- The parent Skill completion requirement is still **PARTIAL**, because exact time-coded observations and D1/D3/D7/D14 unlocks remain missing.

# Next capture priority
1. My Perfect Hotel — easiest D0 benchmark; record exact first action/reward/upgrade/offer.
2. The Cozy Florist — convert existing walkthrough to T+0→30m rows.
3. Heartopia — verify mobile US tutorial timings against public guide sequence.
4. Township — record actual new-user path to determine when match-3, pass, events and social systems first intrude on the town/farm fantasy.
