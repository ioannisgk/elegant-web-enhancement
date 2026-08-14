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
    tab: "HA Admin Cluster",
    kicker: "Management plane",
    title: "Admin & governance control cluster",
    body: "The platform's control center. Runs Argo CD, the Harbor container registry, and the centralized observability stack that aggregates metrics, logs, and traces from all clusters.",
    points: [
      "Native kubeadm installed HA Kubernetes cluster",
      "Calico networking and Gateway API",
      "GitOps ready with Argo CD projects",
      "Istio Ambient Mode as a Service Mesh",
      "Includes Prometheus, Grafana, Thanos, Harbor",
    ],
    specs: [
      ["Control nodes", "3× nodes"],
      ["Worker nodes", "4× nodes"],
      ["CPU per node", "16 vCPU"],
      ["RAM per node", "32 GB RAM"],
      ["Disk per node", "200 GB"],
      ["Network", "Static IP"],
    ],
  },
  {
    id: "compute",
    tab: "HA Workload Cluster",
    kicker: "Workload runtime",
    title: "Workload compute cluster with Jenkins",
    body: "This is where product environments run. Jenkins executes CI/CD pipeline stages here via on-demand agent pods; applications are deployed and promoted through Argo CD.",
    points: [
      "Native kubeadm installed HA Kubernetes cluster",
      "Calico networking and Gateway API",
      "GitOps ready with Argo CD projects",
      "Istio Ambient Mode as a Service Mesh",
      "Includes Jenkins and demo applications",
    ],
    specs: [
      ["Control nodes", "3× nodes"],
      ["Worker nodes", "4× nodes"],
      ["CPU per node", "16 vCPU"],
      ["RAM per node", "32 GB RAM"],
      ["Disk per node", "200 GB"],
      ["Network", "Static IP"],
    ],
  },
  {
    id: "storage",
    tab: "HA Storage Cluster",
    kicker: "Persistent storage",
    title: "Rook-Ceph distributed storage cluster",
    body: "A dedicated Ceph-backed storage layer via Rook-Ceph, exposing block and filesystem storage classes consumed by the other clusters — decoupling storage capacity from compute.",
    points: [
      "Native kubeadm installed HA Kubernetes cluster",
      "Calico networking and Gateway API",
      "GitOps ready with Argo CD projects",
      "Istio Ambient Mode as a Service Mesh",
      "Includes Rook-Ceph and demo applications",
    ],
    specs: [
      ["Control nodes", "3× nodes"],
      ["Worker nodes", "3× nodes"],
      ["CPU per node", "16 vCPU"],
      ["RAM per node", "32 GB RAM"],
      ["Disk per node", "2 TB"],
      ["Network", "Static IP"],
    ],
  },
  {
    id: "lb",
    tab: "LB Cluster",
    kicker: "Traffic ingress",
    title: "HA load balancer cluster",
    body: "The entry point for all external traffic. The load balancer nodes share a virtual IP, routing requests to the correct cluster based on domain and path rules.",
    points: [
      "Floating virtual IP with automatic failover",
      "Routes traffic to Admin, Workload and Storage clusters",
      "Health-checked backends with automatic removal",
      "TLS termination at the edge before forwarding",
    ],
    specs: [
      ["LB nodes", "3× nodes"],
      ["CPU per node", "4 vCPU"],
      ["RAM per node", "8 GB RAM"],
      ["Disk per node", "80 GB"],
      ["Network", "Static IP"],
    ],
  },
  {
    id: "dns",
    tab: "DNS Cluster",
    kicker: "Name resolution",
    title: "HA DNS Cluster",
    body: "The authoritative name-resolution layer. It resolves service domains to the LB's virtual IP, so client traffic reaches the right cluster through a single, highly available DNS endpoint.",
    points: [
      "Floating virtual IP for always-on DNS queries",
      "A records map service domains to the LB cluster VIP",
      "Zone changes propagate automatically across nodes",
      "Clients point to one DNS VIP, failover is transparent",
    ],
    specs: [
      ["DNS nodes", "3× nodes"],
      ["CPU per node", "4 vCPU"],
      ["RAM per node", "8 GB RAM"],
      ["Disk per node", "80 GB"],
      ["Network", "Static IP"],
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
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">{current.kicker}</p>
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
