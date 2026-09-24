# Build Architecture — Base44 × Codex × Native Release v0.1

**Date:** 2026-09-24

## 1. Short answer

Yes, this game is technically feasible.

The practical split should be:

- **Base44:** fast AI-native web prototype, account/data/memory/admin flows, playable UI prototype.
- **Codex:** production codebase, real game loop, test harness, build pipeline, asset tooling, native-wrapper/native-client work.
- **Native store release:** not the first milestone; package only after the playable loop is validated.

## 2. Current Base44 prototype

A Base44 prototype was created on 2026-09-24.

- App ID: `6ab488ecdeea96658793d036`
- Editor: https://app.base44.com/apps/6ab488ecdeea96658793d036/editor/preview

Current inspection shows the generated project is a React/Vite app scaffold with authentication/UI infrastructure. It is **not yet the actual game loop**. The game still needs dedicated scene, state, interaction, and content-generation implementation.

## 3. What Base44 is good for here

Use Base44 for:
- login / profile,
- player preference onboarding,
- data schemas,
- player memory,
- story state,
- content management,
- lightweight web game shell,
- admin / experiment switches,
- AI-generated narrative calls,
- rapid UI iteration.

Base44 publicly describes its apps as web-based/mobile-responsive rather than standalone native store binaries; therefore it is best treated as the fast prototype/backend layer, not the final store-packaging assumption.

Reference:
- https://base44.com/ai-app-builder
- https://base44.com/blog/what-are-the-best-app-creators
- https://base44.com/blog/how-base44-delivers-ai-agents

## 4. What Codex is good for here

Codex can work on a real repository end-to-end:
- implement features,
- refactor,
- run tests,
- operate terminal/dev tools,
- maintain CI,
- build a full application codebase.

OpenAI has publicly documented internal products built from an empty repo with Codex generating the codebase and tests, so using Codex for a small game codebase is a realistic engineering workflow when the repository, tests, and checkpoints are structured correctly.

References:
- https://openai.com/codex/
- https://openai.com/index/harness-engineering/
- https://openai.com/index/open-source-codex-orchestration-symphony/

## 5. Recommended MVP stack

### Option A — fastest
**React / TypeScript + Canvas / PixiJS or Phaser + Base44 backend**

Good for:
- 2D / 2.5D,
- H5,
- browser tests,
- mobile web,
- quick playable ads / prototypes.

### Option B — stronger game production
**Godot 4 (2D/2.5D) + web/mobile export + external AI/backend services**

Good for:
- tactile game loop,
- scene tooling,
- animation,
- performance,
- later native packaging.

### Option C — only after validation
**Unity / full 3D**

Use only if:
- 3D navigation itself is the product,
- avatar/world scale justifies the extra content cost,
- test data proves the style adds conversion/retention.

## 6. Native store path

Do not make App Store packaging the first constraint.

Recommended sequence:

```
Web playable / H5
→ retention + art/UA validation
→ freeze game architecture
→ native wrapper or native client
→ IAP / privacy / account / analytics compliance
→ TestFlight / closed testing
→ App Store / Google Play
```

Base44's current public positioning is web-first, so a final downloadable store app may require a wrapper or a separate native client.

## 7. 2D vs 3D recommendation

For the first playable:

> **2D / 2.5D gameplay + selective 3D / video transition assets**

This is sufficient.

Use 3D selectively for:
- opening shot,
- area unlock,
- travel transition,
- reward celebration,
- hero marketing creative.

Do not build a fully navigable 3D world for MVP.

## 8. Blender

Blender is optional in MVP.

Use it only for:
- reusable hero character rig,
- a few reusable props,
- camera-turn transition shots,
- pre-rendered clips,
- later 2.5D sprite/sequence generation.

Do not make a full Blender asset pipeline a dependency for the first retention test.

## 9. Production principle

The game must work with temporary / modular assets first.

Only after:
- the loop is fun,
- D1/D7 signals are promising,
- creative CTR/CVR identifies a strong visual direction,

should high-cost 3D assets be scaled.
