import { SectionHeading } from "./primitives";

const rows: [string, string, string, string][] = [
  ["Deployment time", "1 day", "3–6 months", "1 week"],
  ["Data sovereignty", "US Cloud Act subject", "100% private", "100% private (EU / self-hosted)"],
  ["Egress bandwidth", "$0.09 / GB", "Free or flat rate", "Included / flat rate"],
  ["Networking", "AWS-VPC CNI", "Flannel / Calico", "Istio Ambient mode"],
  ["HA storage engine", "AWS EBS / EFS", "Manual setup required", "Rook-Ceph HA NVMe pool"],
  ["Observability stack", "CloudWatch / Cloud Monitoring, priced per metric", "Assembled and maintained by you", "Prometheus, Thanos, Grafana Alloy, Loki, Tempo"],
];

export function Comparison() {
  return (
    <section id="comparison" className="section-y border-b border-border bg-background">
      <div className="container-page space-y-14">
        <SectionHeading
          eyebrow="Vendor-neutral"
          title={
            <>
              Managed cloud, DIY, or <span className="text-brand">KubeSailor</span>
            </>
          }
          description="Where each approach genuinely wins — and what it costs you elsewhere."
        />

        <div className="overflow-x-auto rounded-2xl border border-border bg-surface shadow-soft">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="p-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Dimension
                </th>
                <th className="p-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  AWS EKS / GKE
                </th>
                <th className="p-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  DIY bare metal
                </th>
                <th className="bg-brand-soft p-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-foreground">
                  KubeSailor
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((row) => (
                <tr key={row[0]}>
                  <td className="p-5 font-medium">{row[0]}</td>
                  <td className="p-5 text-muted-foreground">{row[1]}</td>
                  <td className="p-5 text-muted-foreground">{row[2]}</td>
                  <td className="bg-brand-soft/50 p-5 font-medium">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}