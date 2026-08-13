# Update Architecture Page Hero Copy

## Current state
The `PageHero` on `/architecture` reads:
- Title: “Three clusters, one sovereign platform”
- Description: “KubeSailor separates platform tooling, application workloads and storage into dedicated highly available clusters, each with its own control plane and a shared HA edge.”
- Meta pills: `Ubuntu 24.04 LTS`, `kubeadm HA control planes`, `Istio Ambient mesh`, `Rook-Ceph NVMe`
- Route `head()` meta description also says “Three highly available Kubernetes clusters…”

The page now presents five tabs: HA Admin, HA Workload, HA Storage, LB Cluster and DNS Cluster. The hero copy should reflect that expanded topology.

## Proposed changes

### 1. Title options (keeps “one sovereign platform”)
Choose one of the following:
- **A. “Five clusters, one sovereign platform”** — literal, matches the tabs exactly.
- **B. “Dedicated clusters, one sovereign platform”** — abstracts the count, emphasizes purpose-built separation.
- **C. “Purpose-built clusters, one sovereign platform”** — highlights that each layer is engineered for a specific role.

### 2. New description
> KubeSailor splits platform tooling, application workloads, persistent storage, traffic ingress and DNS resolution into dedicated highly available clusters. Each layer runs its own control plane or virtual IP, so governance, compute, data, load balancing and name resolution fail, scale and upgrade independently — while the whole platform feels like one sovereign cloud.

### 3. Updated meta pills
Replace the four pills with a mix that includes the new edge layer:
- `Ubuntu 24.04 LTS`
- `kubeadm HA control planes`
- `HAProxy + Keepalived`
- `Bind9 DNS cluster`

(If you prefer to keep storage visible here, swap one of the last two for `Rook-Ceph NVMe`.)

### 4. SEO meta description
Update the route `head()` description to:
> Five highly available clusters on bare metal — admin tooling, application workloads, Rook-Ceph storage, HAProxy load balancing and Bind9 DNS — joined by Istio Ambient and GitOps into one sovereign private cloud.

## Files to edit
- `src/routes/architecture.tsx` — title, description, meta pills and route `head()` meta description.

## Out of scope
No visual or layout changes; only the hero text and SEO metadata on the Architecture page.
