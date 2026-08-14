# Rewrite the comparison table: 8 dimensions

Update only the `rows` array in `src/components/site/comparison.tsx`. No layout, styling or component changes.

## Proposed rows

| Dimension | AWS EKS / GKE | DIY bare metal | KubeSailor |
| --- | --- | --- | --- |
| Time to production | 1 day (control plane only) | 3–6 months | 1 week, fixed scope |
| Data sovereignty | US Cloud Act subject | 100% private | 100% private (EU / self-hosted) |
| Platform topology | Single cluster, add-ons extra | Whatever you build | 5 HA clusters: admin, workload, storage, LB, DNS |
| Egress bandwidth | $0.09 / GB | Free or flat rate | Included / flat rate |
| Service mesh & networking | AWS-VPC CNI, mesh extra | Flannel / Calico, mesh DIY | Calico + Istio Ambient, mTLS by default |
| HA storage engine | AWS EBS / EFS, per-GB billed | Manual setup required | Rook-Ceph HA NVMe pool |
| CI/CD, registry & GitOps | Bring your own, priced per service | Assembled and maintained by you | Argo CD, Jenkins and Harbor pre-wired |
| Ownership of tooling | Vendor-managed | Yours, unsupported | Yours, documented and handed over |

Kept from the current table: deployment time (renamed), data sovereignty, egress bandwidth, HA storage engine, ownership of tooling, networking (expanded to cover the mesh).
Added: platform topology (the 5-cluster architecture) and CI/CD, registry & GitOps (the Delivery-page stack).

## Note
Observability (Prometheus / Grafana / Thanos, delivered on Day 06) is a strong differentiator too. If you prefer it over one of the rows above, say which one to swap.
