# Diandian Monthly Schema v0.2

## Grain

One row is one `product_family + entity_scope + month`. Store entities must remain separate until a documented family-level rollup is applied.

`0` means the source reported a real zero. `n.a.` means the metric was not available or not applicable. Blank text fields mean no verified event, version or collaboration record was collected for that month.

## Required fields

- `total_downloads`: iOS plus Google Play for the same scope and month.
- `ios_downloads`: App Store downloads for the same scope and month.
- `google_play_downloads`: Google Play downloads for the same scope and month.
- `revenue_usd`: monthly IAP revenue in USD. Do not substitute ad revenue.
- `paid_downloads_proxy`: source-labelled paid traffic or install proxy. It is not a directly observed install count unless the source says so.
- `organic_downloads`: `total_downloads - paid_downloads_proxy` only when both inputs share the same scope and method.
- `organic_share`: `organic_downloads / total_downloads`.
- `top_5_countries`: five highest-download countries for that entity scope and month.
- `ad_creative_count`, `rating`, `review_count`, `major_version`, `liveops_event`, `ip_collab`: monthly snapshots or events only. Current values must not be backfilled into historical months.

## Derived fields

- `organic_paid_ratio = organic_downloads / paid_downloads_proxy` when the denominator is positive.
- `rpd_usd = revenue_usd / total_downloads` when downloads are positive. This is not ARPU, ARPPU or LTV.
- `download_peak_ratio = total_downloads / max monthly downloads` within the same product and entity scope.
- `revenue_peak_ratio = revenue_usd / max monthly revenue` within the same product and entity scope.
- `revenue_persistence = revenue_peak_ratio / download_peak_ratio`. Values above 1 mean revenue held up better than downloads relative to their own peaks. It is unavailable when either input is unavailable or download peak ratio is zero.
- `3m_revenue_carryover = (revenue_t+1 + revenue_t+2 + revenue_t+3) / downloads_t`. It is unavailable without three subsequent revenue months.

## Entity rules

- Heartopia China and global apps are separate. The global family row uses global App Store ID `6746151928` plus Google Play package `com.xd.xdtglobal.gp`; it excludes China App Store ID `1561903786`.
- Regional packages, relaunches and old or new editions are not merged unless a source-backed mapping exists.
- QQ经典农场 has no native App Store or Google Play entity. Native-store download fields are `n.a.`, not zero.

## Current extraction status

The first verified normalized series is Heartopia Global downloads from 2025-12 through 2026-08. Diandian's income page failed to finish loading for the same monthly range on 2026-09-24, so revenue and all revenue-derived fields remain `n.a.`. Paid or organic, historical rating or review, version, LiveOps and IP collaboration fields were not exported in this pass and remain `n.a.` or blank.
