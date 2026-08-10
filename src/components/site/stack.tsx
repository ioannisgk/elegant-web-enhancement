import { SectionHeading } from "./primitives";

const stack = [
  { name: "Ubuntu 24.04 LTS", role: "Server operating system" },
  { name: "kubeadm Kubernetes", role: "Cluster orchestration" },
  { name: "Istio Ambient", role: "Sidecarless service mesh" },
  { name: "Rook-Ceph", role: "HA distributed storage" },
  { name: "ArgoCD", role: "GitOps delivery" },
  { name: "GitLab CE", role: "Source & pipelines" },
  { name: "Harbor + Cosign", role: "Registry & image signing" },
  { name: "HAProxy + Keepalived", role: "Load balancing & VIPs" },
  { name: "Prometheus + Thanos", role: "Metrics & long-term storage" },
  { name: "Loki + Tempo", role: "Logs & distributed tracing" },
];

export function TechStack() {
  return (
    <section id="stack" className="section-y border-b border-border bg-background">
      <div className="container-page space-y-14">
        <SectionHeading
          eyebrow="Open standards"
          title={
            <>
              A battle-tested <span className="text-brand">CNCF stack</span>
            </>
          }
          description="No proprietary black boxes. Every component is an open, industry-standard tool chosen for performance, stability and long-term supportability."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {stack.map((item) => (
            <div key={item.name} className="bg-surface p-6">
              <p className="font-mono text-sm font-medium">{item.name}</p>
              <p className="mt-1.5 text-sm text-muted-foreground">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}