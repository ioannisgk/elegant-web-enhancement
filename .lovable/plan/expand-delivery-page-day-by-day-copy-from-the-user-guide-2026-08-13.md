Expand Delivery page day-by-day copy from the User Guide

Update only the `body` text for Day 01–06 in `src/components/site/blueprint.tsx`. No styling, component structure, or layout changes.

New copy (derived from User-Guide-2.md):

- **Day 01 — Server OS preparation**
  "Provision every node with Ubuntu 24.04 LTS and assign static IPs, hostnames and time synchronisation across the rack. We fix kernel inotify limits, generate wildcard TLS certificates for each cluster domain, and create the GitLab server certificate so every internal endpoint is trusted from day one. This foundation is validated before any Kubernetes binary is installed."

- **Day 02 — HA infrastructure & Kubernetes**
  "Deploy the three-node Bind9 DNS cluster with Keepalived VIP and automatic zone propagation, then build the HAProxy load balancer cluster with VRRP failover and configuration sync. With ingress and name resolution in place, we bootstrap the Admin, Workload and Storage Kubernetes clusters using kubeadm, joining control plane and worker nodes to a shared virtual IP."

- **Day 03 — GitLab & GitOps setup**
  "Stand up the dedicated GitLab CE server, harden the SSH port and enable automated backups. We import the Admin, Workload, Storage and demo application repositories, then deploy Argo CD on each cluster and wire every control plane to pull manifests from Git. From this point every cluster change is declarative and version controlled."

- **Day 04 — Rook-Ceph & Istio Ambient**
  "Deploy Istio Ambient mode for mTLS encryption and Gateway API ingress across all clusters, then expose the Bookinfo sample application through the mesh. Build the Rook-Ceph storage cluster on dedicated OSD nodes, create block and filesystem storage classes, and connect the Admin and Workload clusters to the external Ceph backend for shared persistent volumes."

- **Day 05 — Harbor & Jenkins pipelines**
  "Install the Harbor OCI registry on the Admin cluster, create per-project robot accounts and trust the internal CA across worker nodes. Deploy Jenkins on the Workload cluster, configure credentials for Harbor, GitLab and Argo CD, install Cosign for image signing, and create the CI/CD and deployment pipelines for the Spring MVC demo application."

- **Day 06 — Observability stack**
  "Roll out Prometheus with Thanos sidecars on every cluster, federate metrics into the Admin cluster and store long-term data in the Ceph object gateway. Add Grafana Alloy, Loki for cluster-labelled log search and Tempo for distributed tracing, so you have a single pane of glass for metrics, logs and traces before handover."

Verification: run the TypeScript typecheck after editing.