import { ArrowRight, ArrowDown, Check, ShieldCheck, Server, HardDrive } from "lucide-react";
import { ButtonLink } from "./primitives";
import { PreloaderLink } from "./preloader";

const clusters = [
  {
    icon: Server,
    name: "Load Balancers",
    detail: "HAProxy · Keepalived",
    nodes: "3 nodes",
  },
  {
    icon: Server,
    name: "DNS with failover",
    detail: "Bind9 · HAProxy · Keepalived",
    nodes: "3 nodes",
  },
  {
    icon: ShieldCheck,
    name: "Admin & control",
    detail: "Prometheus · Grafana · Tempo · Harbor",
    nodes: "7 nodes",
  },
  {
    icon: Server,
    name: "Workload compute",
    detail: "Istio Ambient · Argo CD · Jenkins",
    nodes: "7 nodes",
  },
  {
    icon: HardDrive,
    name: "HA storage layer",
    detail: "Rook · Ceph · OSDs · RBD · CephFS · S3",
    nodes: "6 nodes",
  },
];

const proof = [
  { value: "7 days", label: "Bare metal to production handoff" },
  { value: "60–80%", label: "Typical TCO reduction vs hyperscalers" },
  { value: "100%", label: "Data sovereignty, zero vendor lock-in" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border bg-surface pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.35] [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div className="container-page relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0 space-y-8">
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              <span className="text-brand">Your </span>
              private cloud,
              <br className="hidden sm:block" /> delivered in <span className="text-brand">one week</span>.
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              KubeSailor is a multi-cluster private cloud platform — based on Kubernetes, with dedicated LB, DNS and
              storage clusters, full observability and GitOps automation — engineered, deployed and handed over by
              senior Kubernetes architects.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/KubeSailor_Bare_Metal_vs_Hyperscaler_TCO_Study.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/20"
              >
                Download the TCO audit <ArrowDown className="h-4 w-4" />
              </a>
              <PreloaderLink to="/architecture">
                <ButtonLink variant="secondary" className="w-full sm:w-auto">
                  See the platform architecture
                </ButtonLink>
              </PreloaderLink>
            </div>

            <dl className="grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
              {proof.map((item) => (
                <div key={item.label}>
                  <dt className="font-display text-2xl font-semibold tracking-tight">{item.value}</dt>
                  <dd className="mt-1 text-sm leading-snug text-muted-foreground">{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="min-w-0 rounded-2xl border border-border bg-surface p-6 shadow-lift">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-success" />
                <span className="text-sm font-semibold">Private cloud platform</span>
              </div>
              <span className="hidden truncate font-mono text-xs text-muted-foreground sm:inline"></span>
            </div>

            <div className="divide-y divide-border">
              {clusters.map((cluster) => (
                <div key={cluster.name} className="flex items-center gap-4 py-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                    <cluster.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{cluster.name}</p>
                    <p className="truncate font-mono text-xs text-muted-foreground">{cluster.detail}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-success-soft px-2.5 py-1 font-mono text-[11px] font-medium text-success">
                    {cluster.nodes}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-2 grid gap-2 border-t border-border pt-4 text-sm text-muted-foreground">
              {[
                "5× HA purpose-built clusters",
                "HA storage and full observability",
                "Everything delivered preconfigured",
              ].map((item) => (
                <p key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-success" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
