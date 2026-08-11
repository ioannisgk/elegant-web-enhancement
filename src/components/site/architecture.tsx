import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./primitives";

type Tab = {
  id: string;
  tab: string;
  kicker: string;
  title: string;
  body: string;
  points: string[];
  specs: [string, string][];
};

const tabs: [Tab, ...Tab[]] = [
  {
    id: "admin",
    tab: "Admin & control",
    kicker: "Management plane",
    title: "Admin & governance control cluster",
    body: "An isolated, hardened management plane running GitLab CE, the ArgoCD GitOps engine, the Harbor registry and a Prometheus/Thanos telemetry stack.",
    points: [
      "Ubuntu 24.04 LTS control plane nodes",
      "Automated GitOps sync via ArgoCD",
      "Centralised GitLab and Harbor credential management",
    ],
    specs: [
      ["Control nodes", "3× control plane + worker"],
      ["CPU per node", "8 vCPU / 16 GB RAM"],
      ["Disk", "SSD / NVMe"],
      ["Network", "Static IP topology"],
    ],
  },
  {
    id: "compute",
    tab: "Workload compute",
    kicker: "Workload runtime",
    title: "Workload compute cluster with Istio Ambient",
    body: "A high-throughput bare metal execution layer running Istio Ambient for sidecarless L7 routing, HAProxy + Keepalived load balancing and Jenkins CI/CD integration.",
    points: [
      "Sidecarless L7 proxy routing with Istio Ambient",
      "Containerised workloads via kubeadm and ArgoCD",
      "HAProxy + Keepalived VRRP virtual IP load balancing",
    ],
    specs: [
      ["Compute nodes", "4× bare metal (1 CP + 3 worker)"],
      ["CPU per node", "8 vCPU / 16 GB RAM minimum"],
      ["Disk", "SSD / NVMe OS drive"],
      ["Network", "Static IP interface"],
    ],
  },
  {
    id: "storage",
    tab: "Rook-Ceph storage",
    kicker: "Persistent storage",
    title: "Rook-Ceph distributed storage cluster",
    body: "An enterprise distributed storage pool built on raw NVMe drives, providing HA block storage (RWO/RWX), a shared filesystem (CephFS) and an S3-compatible object endpoint.",
    points: [
      "Sub-millisecond NVMe OSD throughput",
      "Automatic 3× replication and failover recovery",
      "Built-in S3 object storage API endpoint",
    ],
    specs: [
      ["Storage nodes", "3× dedicated storage servers"],
      ["OSDs per node", "4–8 datacenter NVMe SSDs"],
      ["RAM", "64 GB+ for Ceph caching"],
      ["Network", "Dedicated storage topology"],
    ],
  },
];

export function Architecture() {
  const [active, setActive] = useState<string>(tabs[0].id);
  const current = tabs.find((tab) => tab.id === active) ?? tabs[0];

  return (
    <section id="architecture" className="section-y border-b border-border bg-background">
      <div className="container-page space-y-14">
        <SectionHeading
          eyebrow="Cluster topology"
          title={
            <>
              Inside each <span className="text-brand">cluster</span>
            </>
          }
          description="Control, compute and storage are separated by design — so governance, workloads and data each fail, scale and upgrade independently."
        />

        <div className="space-y-8">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={cn(
                  "cursor-pointer rounded-xl px-4 py-2.5 text-sm font-medium transition",
                  tab.id === active
                    ? "bg-ink text-ink-foreground"
                    : "border border-border bg-surface text-muted-foreground hover:text-foreground",
                )}
              >
                {tab.tab}
              </button>
            ))}
          </div>

          <div className="grid gap-8 rounded-2xl border border-border bg-surface p-8 shadow-card lg:grid-cols-2 lg:p-10">
            <div className="space-y-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
                {current.kicker}
              </p>
              <h3 className="text-2xl font-semibold">{current.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{current.body}</p>
              <ul className="space-y-2.5 pt-2">
                {current.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-surface-muted p-6">
              <p className="border-b border-border pb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Recommended hardware
              </p>
              <dl className="divide-y divide-border font-mono text-sm">
                {current.specs.map(([key, value]) => (
                  <div key={key} className="flex items-baseline justify-between gap-6 py-3">
                    <dt className="text-muted-foreground">{key}</dt>
                    <dd className="text-right font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}