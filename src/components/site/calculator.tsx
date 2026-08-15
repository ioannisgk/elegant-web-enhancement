import { useMemo, useState } from "react";
import { ArrowDown } from "lucide-react";
import { SectionHeading } from "./primitives";
import tcoAuditPdf from "@/assets/KubeSailor_Bare_Metal_vs_Hyperscaler_TCO_Study.pdf.asset.json";

const euro = new Intl.NumberFormat("en-IE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const sliders = [
  { key: "vcpu", label: "Total vCPU cores", min: 32, max: 1024, step: 32, unit: "vCPU" },
  { key: "ram", label: "Total system RAM", min: 128, max: 4096, step: 128, unit: "GB" },
  { key: "storage", label: "NVMe SSD storage", min: 2, max: 200, step: 2, unit: "TB" },
  { key: "bandwidth", label: "Monthly egress traffic", min: 5, max: 100, step: 5, unit: "TB" },
] as const;

export function Calculator() {
  const [values, setValues] = useState({ vcpu: 344, ram: 688, storage: 52, bandwidth: 25 });

  const result = useMemo(() => {
    const aws = Math.round(values.vcpu * 42 + values.ram * 4.5 + values.storage * 120 + values.bandwidth * 90);
    const kube = Math.round(values.vcpu * 16 + values.ram * 1.7 + values.storage * 35 + values.bandwidth * 15 + 1600);
    const monthly = aws - kube;
    return {
      aws,
      kube,
      annual: monthly * 12,
      percent: Math.min(88, Math.round((monthly / aws) * 100)),
    };
  }, [values]);

  return (
    <section id="calculator" className="section-y border-b border-border bg-surface">
      <div className="container-page space-y-14">
        <SectionHeading
          eyebrow="Cost modelling"
          title={
            <>
              Bare metal versus <span className="text-brand">hyperscaler</span>
            </>
          }
          description="An indicative monthly run-rate comparison for the same compute, memory, storage and egress footprint."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-2">
          <div className="space-y-7 bg-surface p-8 lg:p-10">
            {sliders.map((slider) => (
              <div key={slider.key} className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <label htmlFor={slider.key} className="text-sm font-medium">
                    {slider.label}
                  </label>
                  <span className="font-mono text-sm font-semibold text-brand">
                    {values[slider.key].toLocaleString()} {slider.unit}
                  </span>
                </div>
                <input
                  id={slider.key}
                  type="range"
                  min={slider.min}
                  max={slider.max}
                  step={slider.step}
                  value={values[slider.key]}
                  onChange={(event) => setValues((prev) => ({ ...prev, [slider.key]: Number(event.target.value) }))}
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-border accent-brand"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-between gap-8 bg-ink p-8 text-ink-foreground lg:p-10">
            <div className="space-y-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-foreground/60">
                Estimated monthly run-rate
              </p>
              <div className="flex items-baseline justify-between border-b border-ink-foreground/10 pb-4">
                <span className="text-sm text-ink-foreground/70">AWS EKS + EBS + egress</span>
                <span className="font-mono text-lg font-semibold">{euro.format(result.aws)}</span>
              </div>
              <div className="flex items-baseline justify-between border-b border-ink-foreground/10 pb-4">
                <span className="text-sm text-ink-foreground/70">KubeSailor bare metal</span>
                <span className="font-mono text-lg font-semibold text-gold">{euro.format(result.kube)}</span>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-foreground/60">
                  Projected annual saving
                </p>
                <p className="mt-2 font-display text-4xl font-semibold tracking-tight">{euro.format(result.annual)}</p>
                <p className="mt-1 text-sm text-ink-foreground/70">
                  ≈ {result.percent}% lower monthly run-rate than the hyperscaler equivalent.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={tcoAuditPdf.url}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-surface px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-surface-muted"
              >
                Download the TCO audit report
                <ArrowDown className="h-4 w-4" />
              </a>
              <p className="text-xs leading-relaxed text-ink-foreground/50">
                Indicative modelling only, based on public list pricing and typical European bare metal rates. Your
                audit produces figures against your actual workloads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
