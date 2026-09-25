# Priority 8 Public Data Gap Research v1.0 — 2026-09-25

**Market priority:** US-first / Global-secondary  
**Evidence rule:** provider-scoped public estimates remain provider-scoped. Never convert estimated impressions to spend, weekly US evidence to current monthly US KPI, active users to DAU, or channel coverage to budget share.

## A. What changed
- US-only evidence is no longer blank: Sensor Tower Q4 2025 US weekly evidence covers Gossip Harbor, Township, Hay Day and My Perfect Hotel; Office Cat has Q3 2025 US weekly evidence.
- AdMapix adds near-current 2026-08-19 US download estimates for Gossip Harbor and Township.
- Creative/source evidence improved for Gossip Harbor, Township, Heartopia and The Cozy Florist.
- Existing v1.7 production evidence remains active and is merged in the same branch.

## B. What may explain it
Only retain E1 when an existing KPI anomaly has at least one aligned independent evidence class. The new public data improves source/creative context but usually lacks matched spend or paid/organic attribution.

## C. What does NOT explain it
- 30-day estimated impressions != spend or ROAS.
- Campaign/ad-plan counts != unique campaigns or budget.
- Long creative life != proof of winner status.
- US Q4 2025 weekly KPI != Sep 2026 current monthly KPI.
- Weekly active users != DAU.
- Channel coverage != paid source share.

## D. What patterns repeat across products
1. Evergreen winner + refresh layer: Gossip Harbor and Township keep old active assets while adding new creatives.
2. Creative-library size is provider/method dependent; fingerprinting and platform merge matter.
3. Meta-heavy scaling can coexist with broad market targeting: The Cozy Florist is the clearest current example.
4. Heartopia modularizes home, avatar, social, hobby and event into separate creative jobs.
5. Revenue durability and acquisition volume can decouple, consistent with the existing 19-game lifecycle analysis.

## E. What we should test
- Maintain an evergreen gameplay-proof lane and a faster refresh lane.
- Track creative by file fingerprint, not ad-entry count.
- Standardize first_seen / last_seen / live_days / format / hook / promise / market / platform.
- Judge channel tests on CPI → qualified install → FTUE completion → promised-feature reach → D1/D7, not CTR alone.
- Keep paid/organic attribution as a hard requirement before scale decisions.

## F. What is still missing
- Current Sep-2026 US-only monthly downloads + IAP for all Priority8.
- Verified paid / organic split and spend-weighted source mix.
- Spend, CPI, CTR, CVR, ROAS.
- Same-provider normalized 30/90/180-day creative histories for all Priority8.
- Current exact FTUE T+0→30m and D1/D3/D7/D14.
- Full review-by-version corpus.
- In-game offer trigger / segmentation / probability / frequency.
- Event participation, payer counts/rates and current DAU.
- Current exact title-team size plus asset-hours, time-to-area/event, QA staffing and outsourcing ratio.

## Sources
- https://sensortower.com/blog/2025-q4-unified-top-5-drama-games-revenue-us-602160ea241bc16eb8940bf3
- https://sensortower.com/blog/2025-q4-unified-top-5-business-games-units-us-6023dfa3241bc16eb8392c45
- https://sensortower.com/blog/2025-q4-unified-top-5-tycoon-games-units-us-602ae798241bc16eb86ec5ed
- https://sensortower.com/blog/2025-q3-unified-top-5-cat%20games-revenue-us-608810b928293296047965a0
- https://www.admapix.com/blog/ad-intelligence/gossip-harbor-ad-strategy-2026
- https://www.admapix.com/zh/blog/ad-intelligence/township-ad-strategy-2026
- https://www.creativescope.ai/blog/gossip-harbor-ua-teardown-drama-before-gameplay
- https://www.creativescope.ai/blog/heartopia-s-cozy-creative-system
- https://www.creativescope.ai/blog/the-cozy-florist-ads-breakdown
