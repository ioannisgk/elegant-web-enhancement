# Add HA DNS Cluster tab to Architecture section

## What to build
Add a fifth cluster tab labelled **"HA DNS Cluster"** to the `Architecture` component on `/architecture`, placed immediately after **"HA LB Cluster"**. When clicked, it reveals a card with the same two-column layout (description + recommended hardware) used by the existing cluster tabs.

## Proposed content

### Tab label
`HA DNS Cluster`

### Card content
- **Kicker:** `Name resolution`
- **Title:** `HA DNS Cluster`
- **Body:** `The authoritative name-resolution layer for the platform. Three Bind 9 nodes resolve service domains to the load balancer's virtual IP, so client traffic reaches the right cluster through a single, highly available DNS endpoint.`
- **Bullet points:**
  - `3-node Bind 9 primary/secondary cluster`
  - `Floating virtual IP for always-on DNS queries`
  - `A records map service domains to the LB cluster VIP`
  - `Zone changes propagate automatically across nodes`
  - `Clients point to one DNS VIP; failure is transparent`
- **Recommended hardware specs:**
  - `DNS nodes` → `3× nodes`
  - `CPU per node` → `4 vCPU`
  - `RAM per node` → `8 GB RAM`
  - `Disk per node` → `40 GB`
  - `Network` → `Static IP + VIP`
  - `Software` → `Bind 9 + Keepalived`

## Files to change
1. `src/components/site/architecture.tsx`
   - Append the new DNS Cluster object to the `tabs` array after the LB Cluster object.
   - No component structure changes are needed; the existing `active` state and rendering logic will handle the new tab automatically.
2. `src/components/site/operations.tsx`
   - Update the DNS-server inventory row from `2 nodes` to `3 nodes` so the site stays consistent with the new architecture spec.
   - Update the detail text from `Bind9 primary/secondary with VRRP failover` to reflect the 3-node HA cluster (e.g. `Bind9 primary/secondary cluster with VRRP failover`).

## Out of scope
- No routing changes are required; this is a single-page tab interaction within `/architecture`.
- No new components or styling tokens are needed; the existing card, tab and table styles will be reused.
