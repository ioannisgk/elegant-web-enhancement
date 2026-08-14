# Rewrite pricing tier bullets to highlight the 5-cluster architecture

## Goal
Update the feature bullets under each of the three pricing tiers in `src/components/site/pricing.tsx` so they:
- Specifically reference the 5-cluster sovereign architecture (Admin, Workload, Storage, LB, DNS).
- Stay under 39 characters per bullet (spaces included), so each fits on one line.
- Expand each tier from 5 to 8 bullet points while keeping the value-focused tone.

## Proposed copy

### Tier 1 — Private Cloud Platform (€55,000)
- 5-cluster sovereign platform
- Admin, compute, storage, LB, DNS
- 1-week fixed-scope delivery
- Runs on your bare-metal or VMs
- GitOps + Istio Ambient mesh
- Harbor registry & Jenkins CI/CD
- Rook-Ceph storage backend
- Full handover docs & scripts

### Tier 2 — Private Cloud Platform + (€65,000)
- Everything in base package
- 5-cluster sovereign platform
- 30 days senior engineer cover
- Priority Slack/Teams channel
- 1-hour incident response SLA
- Direct access to senior architects
- Patch & upgrade guidance
- Post-handover health checks

### Tier 3 — Whitelabel & IP licence (€750,000)
- Full source code transfer
- 5-cluster sovereign platform
- Interactive engineering workshop
- White-label resale rights
- Build training & managed services
- 100% IP ownership, no royalties
- Unrestricted commercial use
- Rebrand & resell to clients

## Verification
- Confirm every bullet is ≤ 39 characters.
- Run TypeScript typecheck after updating the array.
- No layout, styling, or component changes.
