Update homepage phase card copy

Update the three phase blurbs in `src/components/site/home-overview.tsx` (`phases` array) so they reflect the detailed day-by-day content from the Delivery page, while keeping each blurb close to 220 characters including spaces.

Proposed copy:

- **Days 1–2 · Foundation**
  "Provision every node with Ubuntu 24.04 LTS, static IPs and synced time, then deploy the Bind9 DNS cluster, HAProxy load balancers with VRRP failover, and bootstrap the Admin, Workload and Storage Kubernetes clusters with kubeadm."
  (229 characters)

- **Days 3–5 · Platform**
  "Stand up GitLab CE with automated backups, deploy Argo CD on every cluster, build the Rook-Ceph storage cluster, enable Istio Ambient mTLS, install Harbor with robot accounts, and configure Jenkins with Cosign-signed CI/CD pipelines."
  (233 characters)

- **Days 6–7 · Proof & handover**
  "Roll out Prometheus with Thanos sidecars, Grafana Alloy, Loki and Tempo across every cluster. We deploy the Spring MVC demo application, run DNS, load balancer and control plane failover drills, then hand over the GitOps repositories."
  (234 characters)

No styling, layout, or component changes — only the `body` strings in the `phases` array.

Verification: run the TypeScript typecheck after editing.