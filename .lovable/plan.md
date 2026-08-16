Refresh homepage hero description

Update the sub-headline paragraph in `src/components/site/hero.tsx` (currently line 51–54) so it highlights KubeSailor’s strongest benefits: sovereignty, the five-cluster architecture, Istio Ambient, Rook-Ceph, full observability, GitOps automation, and the one-week bare-metal handover.

Current text:
"KubeSailor is a multi-cluster private cloud platform — based on Kubernetes, Istio Ambient, Rook-Ceph storage and full GitOps automation — engineered, deployed and handed over by senior Kubernetes architects."

Proposed replacement:
"KubeSailor is a sovereign multi-cluster private cloud — Kubernetes, Istio Ambient, Rook-Ceph storage, full observability and GitOps automation — engineered and handed over on your bare metal in one week."

This keeps the same em-dash structure and similar length (~200 characters) while explicitly surfacing:
- Sovereignty / on-your-own-hardware
- Full observability stack (Prometheus, Thanos, Loki, Tempo, Grafana Alloy)
- The one-week delivery promise
- The core technology stack

No styling, layout, or component changes — only the paragraph text.

Verification: run the TypeScript typecheck after editing.
