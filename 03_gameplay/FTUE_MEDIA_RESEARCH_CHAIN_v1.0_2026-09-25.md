# FTUE + Media Evidence Research Chain v1.0

**Date:** 2026-09-25  
**Goal:** turn gameplay videos, real-device recordings and Store evidence into reproducible competitor research.

## A. Evidence sources

Priority:
1. own current real-device/emulator recording;
2. current official App Store / Google Play;
3. current public gameplay walkthrough;
4. historical public gameplay walkthrough;
5. official blog/support/release notes;
6. guides/community only as secondary evidence.

## B. Capture chain

```
Source
→ Source manifest
→ Version/date/market label
→ Timestamp map
→ Evidence frames
→ Milestone table
→ FTUE / Core / Meta / Monetization / LiveOps classification
→ Cross-product matrix
→ Ops Cat test
```

## C. Required milestone vocabulary

- APP_OPEN
- FIRST_FRAME
- FIRST_ACTION
- FIRST_FEEDBACK
- FIRST_REWARD
- FIRST_UPGRADE
- FIRST_OWNERSHIP
- FIRST_HELPER
- FIRST_AUTOMATION
- FIRST_SECONDARY_SYSTEM
- FIRST_EVENT
- FIRST_SOCIAL
- FIRST_AD
- FIRST_OFFER
- T5
- T10
- T30
- D1
- D3
- D7
- D14

## D. Evidence row

`product | source_id | build/date | market | milestone | t_seconds | action | feedback | reward | unlock | friction | monetization | screenshot_id | confidence | note`

## E. Screenshot / image rule

For each focus title, target:
- 3 Core frames
- 2 Before/After frames
- 2 Ownership/Meta frames
- 2 Event frames
- 1 Offer/Store frame
- 1 Art/Environment frame
- 1 UI-density frame

Minimum = 8; target = 12–15.

## F. Public video rule

Do:
- keep public URL;
- record exact timestamp;
- state recorded version/date if visible;
- save short evidence descriptions;
- compare against current Store/version evidence.

Do not:
- rehost full third-party video;
- treat historical timing as current;
- infer US monetization from a non-US video;
- infer D7 unlock timing from an edited montage.

## G. Device harness

Current-product confirmation:
- Android real device + ADB + scrcpy
- Android Emulator for repeatable reset/test
- Maestro/Appium for deterministic actions
- Codex for frame extraction, timeline, CSV and HTML
- Jev only later for high-level action selection

## H. Output integration

Every product card should link:
- FTUE timeline
- screenshot IDs
- public video/source IDs
- art matrix
- unlock matrix
- LiveOps matrix
- ADX creative truthfulness
- evidence gaps
