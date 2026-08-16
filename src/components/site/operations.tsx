import { SectionHeading } from "./primitives";

const inventory = [
  { role: "Load balancers", nodes: "3 nodes", detail: "HAProxy + Keepalived, shared virtual IP" },
  { role: "DNS servers", nodes: "3 nodes", detail: "Bind9 cluster with VRRP failover" },
  { role: "Admin cluster", nodes: "7 nodes", detail: "HA control plane, platform tooling workers" },
  { role: "Workload cluster", nodes: "7 nodes", detail: "HA control plane, application workers" },
  { role: "Storage cluster", nodes: "6 nodes", detail: "Ceph monitors and OSD nodes" },
  { role: "GitLab server", nodes: "1 node", detail: "Dedicated source of truth, outside the clusters" },
];

const drills = [
  {
    title: "DNS failover",
    body: "The Keepalived VIP is moved between Bind9 nodes while resolution is under load — queries continue to answer without a dropped lookup.",
  },
  {
    title: "Load balancer failover",
    body: "The active HAProxy node is taken offline; the standby claims the VIP and ingress traffic keeps flowing to the workload cluster.",
  },
  {
    title: "Control plane node loss",
    body: "A control plane member is drained, etcd keeps quorum, the API server stays reachable through the VIP and workloads are untouched.",
  },
  {
    title: "Storage resilience",
    body: "A Ceph OSD node is removed to demonstrate replication, automatic rebalancing and uninterrupted persistent volume access.",
  },
];

export function Operations() {
  return (
    <>
      <section className="section-y border-b border-border bg-background">
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            align="left"
            eyebrow="Before day one"
            title="The hardware we start from"
            description="The recommended number of nodes for the platform is 27, to enable full high availability and better performance."
          />

          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-soft">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Role
                  </th>
                  <th className="p-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Nodes
                  </th>
                  <th className="hidden p-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:table-cell">
                    Detail
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {inventory.map((row) => (
                  <tr key={row.role}>
                    <td className="p-5 font-medium">{row.role}</td>
                    <td className="p-5 font-mono text-sm text-brand">{row.nodes}</td>
                    <td className="hidden p-5 text-muted-foreground sm:table-cell">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-y border-b border-border bg-surface">
        <div className="container-page space-y-14">
          <SectionHeading
            eyebrow="Day 07 · Proof"
            title={
              <>
                High availability, <span className="text-brand">demonstrated live</span>
              </>
            }
            description="We do not claim resilience — we break the platform in front of you and show it staying up."
          />

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {drills.map((drill) => (
              <article key={drill.title} className="bg-surface p-8">
                <h3 className="text-lg font-semibold">{drill.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{drill.body}</p>
              </article>
            ))}
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {[
              {
                title: "GitOps repositories",
                body: "Every cluster manifest, Helm value and pipeline definition, in GitLab, reconciled by Argo CD applications.",
              },
              {
                title: "Operational runbooks",
                body: "Step-by-step procedures for upgrades, certificate rotation, GitLab backup and restore, and node replacement.",
              },
              {
                title: "Credentials & access",
                body: "Kubeconfigs, registry robot accounts, Cosign keys and dashboard access transferred to your team.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-ink p-8 text-ink-foreground">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-foreground/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
