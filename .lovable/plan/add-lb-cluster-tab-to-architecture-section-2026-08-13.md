# Add LB Cluster tab to Architecture section

## What to build
Add a fourth cluster tab labelled **"LB Cluster"** to the `Architecture` component on `/architecture`, placed immediately after **"HA Storage Cluster"**. When clicked, it reveals a card with the same two-column layout (description + recommended hardware) used by the existing Admin, Workload and Storage tabs.

## Proposed content

### Tab label
`LB Cluster`

### Card content
- **Kicker:** `Traffic ingress`
- **Title:** `Load balancer & VIP cluster`
- **Body:** `The entry point for all external traffic. Three HAProxy nodes share a virtual IP through Keepalived, routing requests to the correct service in the Admin, Workload or Storage cluster based on domain and path rules.`
- **Bullet points:**
  - `3-node HAProxy + Keepalived cluster`
  - `Floating virtual IP (VIP) with automatic failover`
  - `Routes traffic to Admin, Workload and Storage clusters`
  - `Health-checked backends with automatic removal`
  - `TLS termination at the edge before forwarding`
- **Recommended hardware specs:**
  - `Load balancer nodes` → `3× nodes`
  - `CPU per node` → `8 vCPU`
  - `RAM per node` → `16 GB RAM`
  - `Disk per node` → `80 GB`
  - `Network` → `Static IP + VIP`
  - `Software` → `HAProxy + Keepalived`

## Files to change
1. `src/components/site/architecture.tsx`
   - Append the new LB Cluster object to the `tabs` array after the Storage cluster object.
   - No component structure changes are needed; the existing `active` state and rendering logic will handle the new tab automatically.
2. `src/components/site/operations.tsx`
   - Update the load-balancer inventory row from `2 nodes` to `3 nodes` so the site stays consistent with the new architecture spec.

## Out of scope
- No routing changes are required; this is a single-page tab interaction within `/architecture`.
- No new components or styling tokens are needed; the existing card, tab and table styles will be reused.
