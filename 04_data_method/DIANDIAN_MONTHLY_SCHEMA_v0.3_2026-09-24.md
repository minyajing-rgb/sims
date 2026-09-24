# Diandian Monthly Schema v0.3 — Method QA Correction

**Date:** 2026-09-24  
**Status:** CURRENT for analysis outputs

## Why v0.3 exists

During the formal 19-product competitor analysis, QA found that the existing CSV field named `3m_revenue_carryover` does **not** match the formula documented in v0.2.

The populated values in the 19-game panel equal:

```
trailing_3m_revenue_hold_vs_peak
= average(revenue[t-2], revenue[t-1], revenue[t])
  / max(monthly_revenue_in_visible_window)
```

Example:
- Gossip Harbor Aug 2026:
  - Jun $73.36M
  - Jul $79.32M
  - Aug $87.03M
  - trailing 3M average ≈ $79.91M
  - peak monthly revenue = $87.03M
  - hold ratio ≈ **0.9181**

This matches the stored value `0.9180968534`.

## Analysis rule

For all reports generated from commit `16f98ab1ae072d4f33c518f6ab8883c8cbf0628e`:

- Treat the legacy column `3m_revenue_carryover` as:
  **CALCULATED · trailing 3M revenue hold vs peak**
- Do **not** interpret it as future 3-month revenue per install.
- Do **not** call it cohort carryover, LTV, or retention.

## Separate metric reserved for future use

If a forward revenue-per-install proxy is later needed, use a new explicit field:

```
forward_3m_revenue_per_download
= (revenue[t+1] + revenue[t+2] + revenue[t+3]) / downloads[t]
```

Mandatory label:
**CALCULATED · calendar forward 3M revenue/download proxy**

It is not cohort LTV.

## Other existing formulas remain

- `rpd_usd = revenue_usd / total_downloads`
- `download_peak_ratio = downloads / visible-window peak downloads`
- `revenue_peak_ratio = revenue / visible-window peak revenue`
- `revenue_persistence = revenue_peak_ratio / download_peak_ratio`

Only calculate cross-download/revenue metrics when scopes match.

## US-first rule

Current 19-game monthly panel is Global / product-collection visible-window data.

Therefore:
- `US monthly downloads`: TBD unless a US-specific series exists.
- `US monthly revenue`: TBD unless a US-specific series exists.
- Global / collection data may be used for structural pattern analysis only.
- It must not be relabeled as US performance.

