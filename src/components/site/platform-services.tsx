import { SectionHeading } from "./primitives";

const services = [
  {
    group: "Edge & availability",
    items: [
      "Bind9 primary/secondary DNS with a Keepalived virtual IP",
      "HAProxy load balancer pair fronting every control plane and ingress",
      "Keepalived VRRP failover for DNS, ingress and API server VIPs",
      "Internal TLS certificate authority issued during build",
    ],
  },
  {
    group: "Delivery & supply chain",
    items: [
      "GitLab CE on a dedicated server as the single source of truth",
      "Argo CD controllers reconciling every cluster from Git",
      "Harbor OCI registry with per-project robot accounts",
      "Jenkins pipelines with Cosign image signing and verified deploys",
    ],
  },
  {
    group: "Runtime & data",
    items: [
      "Istio Ambient mode — mTLS without sidecar overhead",
      "Rook-Ceph OSD pools for block, file and object storage",
      "Replicated persistent volumes for stateful workloads",
      "Spring MVC reference application deployed as a demo",
    ],
  },
  {
    group: "Observability",
    items: [
      "Prometheus per cluster with Thanos for long-term retention",
      "Grafana Alloy collecting metrics, logs and traces",
      "Loki for centralised, cluster-labelled log search",
      "Tempo for distributed tracing across meshed services",
    ],
  },
];

export function PlatformServices() {
  return (
    <section className="section-y border-b border-border bg-surface">
      <div className="container-page space-y-14">
        <SectionHeading
          eyebrow="Platform services"
          title={
            <>
              Everything is <span className="text-brand">wired together</span> before handover
            </>
          }
          description="Each service is deployed through GitOps, exposed on internal DNS names and documented in the runbooks you receive."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {services.map((service) => (
            <div key={service.group} className="bg-surface p-8">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">{service.group}</h3>
              <ul className="mt-5 space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
