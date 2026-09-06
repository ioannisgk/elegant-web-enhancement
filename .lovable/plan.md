# Homepage hero card: dark "control panel" redesign

## Goal
Replace the current light "Private cloud platform" card in the homepage hero with a completely different design: a dark, terminal-style control panel. All existing information is preserved — five clusters with their software stacks and node counts, plus the three checkmark highlights.

## The new design (already mocked live — see attached screenshots)

```text
 ● PRIVATE CLOUD PLATFORM            5 clusters · 26 nodes
 ─────────────────────────────────────────────────────────
 LB-01   Load balancers                         ■ ■ ■
         haproxy · keepalived
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 DNS-02  DNS with failover                      ■ ■ ■
         bind9 · haproxy · keepalived
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 ADM-03  Admin & control                  ■ ■ ■ ■ ■ ■ ■
         prometheus · grafana · tempo · harbor
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 WRK-04  Workload compute                 ■ ■ ■ ■ ■ ■ ■
         istio ambient · argo cd · jenkins
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 STR-05  HA storage layer                  ■ ■ ■ ■ ■ ■
         rook · ceph · rbd · cephfs · s3
 ─────────────────────────────────────────────────────────
 ✓  5× HA purpose-built clusters
 ✓  HA storage and full observability
 ✓  Everything delivered preconfigured
```

- **Dark ink panel** (near-black navy, rounded-2xl, soft deep shadow) — a deliberate contrast accent against the light hero, like a live console window.
- **Header**: pulsing green status dot + "PRIVATE CLOUD PLATFORM" in monospace caps, with "5 clusters · 26 nodes" summary on the right.
- **Five cluster rows**: each with a monospace cluster code (LB-01, DNS-02, ADM-03, WRK-04, STR-05), the cluster name in Inter Tight, the software stack in JetBrains Mono lowercase, dashed separators between rows.
- **Node counts as small green squares** (one square per node) instead of "N nodes" pills — a visual rack/LED feel.
- **Footer**: the same three checkmark lines in monospace on a slightly darker strip.

## What stays the same
- No other homepage element changes — hero text, buttons, stats, and all sections below are untouched.
- All current information is kept: 5 clusters, stacks, node counts (3/3/7/7/6), 3 checkmarks.

## Technical notes
- Changes confined to the card markup in `src/components/site/hero.tsx`; the green accent reuses the existing status color, and mono text uses the already-loaded JetBrains Mono.
- The "5 clusters · 26 nodes" summary is computed from the same data (3+3+7+7+6 = 26).

## Verification
- `bun run build` passes; Playwright screenshot of the homepage hero confirms the new card renders correctly at desktop and mobile widths.
