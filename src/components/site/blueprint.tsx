import { SectionHeading } from "./primitives";

const days = [
  {
    day: "Day 01",
    tag: "Hardware & OS",
    title: "Server OS preparation",
    body: "Provision every node with Ubuntu, assign static IPs and sync time across the rack. Then increase the kernel limits, generate wildcard TLS certificates for each cluster and update all nodes with the latest security patches.",
    tools: "Linux · Bash · OpenSSL",
  },
  {
    day: "Day 02",
    tag: "Networking & K8s",
    title: "HA infrastructure & Kubernetes",
    body: "Deploy the Bind9 DNS cluster with Keepalived VIP, then build the HAProxy load balancer cluster with VRRP failover. With name resolution and ingress ready, bootstrap the Admin, Workload and Storage Kubernetes clusters via kubeadm.",
    tools: "Bind9 · HAProxy · kubeadm",
  },
  {
    day: "Day 03",
    tag: "GitOps platform",
    title: "GitLab & GitOps setup",
    body: "Stand up GitLab CE, harden SSH and enable automated backups of the GitLab instace. Import the platform repositories, deploy Argo CD on every cluster and wire each control plane to pull manifests from Git.",
    tools: "GitLab CE · Docker · Argo CD",
  },
  {
    day: "Day 04",
    tag: "Storage & mesh",
    title: "Rook-Ceph & Istio Ambient",
    body: "Deploy Istio Ambient mode for mTLS and Gateway API ingress, then build the Rook-Ceph storage cluster on dedicated OSD nodes and connect the Admin and Workload clusters to shared persistent volumes.",
    tools: "Rook-Ceph · Istio Ambient",
  },
  {
    day: "Day 05",
    tag: "CI/CD & registry",
    title: "Harbor & Jenkins pipelines",
    body: "Install the Harbor OCI registry on the Admin cluster with internal CA trust, then deploy Jenkins with dynamic Agents on the Workload cluster and create CI/CD pipelines with Cosign image signing.",
    tools: "Harbor · Cosign · Jenkins",
  },
  {
    day: "Day 06",
    tag: "Telemetry",
    title: "Observability stack",
    body: "Roll out Prometheus with Thanos sidecars, add Grafana Alloy, Loki and Tempo. Then federate metrics, logs and traces from other clusters into the Admin cluster for a single pane of glass before handover.",
    tools: "Prometheus · Thanos · Loki · Tempo",
  },
];

export function Blueprint() {
  return (
    <section id="blueprint" className="section-y border-b border-border bg-surface">
      <div className="container-page space-y-14">
        <SectionHeading
          eyebrow="Delivery timeline"
          title={
            <>
              A fixed <span className="text-brand">seven-day</span> build sequence
            </>
          }
          description="From a fresh server rack to production handoff in exactly one week, executed with automated shell scripts and GitOps pipelines."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {days.map((item) => (
            <article key={item.day} className="flex flex-col gap-3 bg-surface p-7">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-brand">{item.day}</span>
                <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              <p className="mt-auto pt-4 font-mono text-xs text-muted-foreground">{item.tools}</p>
            </article>
          ))}
        </div>

        <div className="flex flex-col gap-6 rounded-2xl border border-border bg-ink p-8 text-ink-foreground lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-xs font-semibold text-gold">Day 07 · Handoff</span>
            <h3 className="text-2xl font-semibold">Demo application & HA failover drills</h3>
            <p className="leading-relaxed text-ink-foreground/70">
              We deploy a Spring MVC reference application, run failover drills across DNS, load balancer and control
              plane VIPs, then hand over the GitOps repositories and operational documentation.
            </p>
          </div>
          <div className="shrink-0 rounded-xl border border-ink-foreground/15 px-6 py-5">
            <p className="text-[11px] uppercase tracking-[0.16em] text-ink-foreground/60">Deliverable</p>
            <p className="mt-1 font-display text-lg font-semibold">Production-ready platform</p>
          </div>
        </div>
      </div>
    </section>
  );
}
