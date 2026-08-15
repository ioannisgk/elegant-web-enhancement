import { ArrowRight, Boxes, GitBranch, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "./primitives";
import { PreloaderLink } from "./preloader";

const pillars = [
  {
    icon: Boxes,
    title: "Three purpose-built clusters",
    body: "An Admin cluster for platform tooling, a Workload cluster for your applications and a dedicated Rook-Ceph Storage cluster — each highly available on its own control plane.",
    to: "/architecture" as const,
    cta: "Explore the architecture",
  },
  {
    icon: GitBranch,
    title: "GitOps from day one",
    body: "GitLab CE, ArgoCD, Harbor with Cosign signing and Jenkins pipelines with dynamic agents are wired together before handover, so every change to the platform ships through Git.",
    to: "/delivery" as const,
    cta: "See how we deliver",
  },
  {
    icon: ShieldCheck,
    title: "Sovereign and yours to keep",
    body: "Your data never leaves your hardware. You receive the repositories, automation scripts and credentials — no licences, no per-node fees, no vendor lock-in.",
    to: "/pricing" as const,
    cta: "Review pricing",
  },
];

export function PlatformPillars() {
  return (
    <section className="section-y border-b border-border bg-surface">
      <div className="container-page space-y-14">
        <SectionHeading
          eyebrow="What KubeSailor is"
          title={
            <>
              A complete private cloud, <span className="text-brand">not a cluster</span>
            </>
          }
          description="Networking, storage, service mesh, CI/CD, registry and observability arrive as one engineered system on your own bare metal."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="flex flex-col gap-4 bg-surface p-8">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand">
                <pillar.icon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
              <PreloaderLink
                to={pillar.to}
                className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-brand"
              >
                {pillar.cta} <ArrowRight className="h-4 w-4" />
              </PreloaderLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const phases = [
  {
    range: "Days 01–02",
    title: "Foundation",
    body: "Setup Ubuntu across every node, HA DNS and load balancers with Keepalived VIPs, then kubeadm control planes.",
  },
  {
    range: "Days 03–05",
    title: "Platform",
    body: "GitLab, ArgoCD, Rook-Ceph, Istio Ambient, Harbor and Jenkins deployed and reconciled through GitOps.",
  },
  {
    range: "Days 06–07",
    title: "Proof & handover",
    body: "Full observability stack, a live reference application, HA failover drills and the repositories signed over to you.",
  },
];

export function DeliveryStrip() {
  return (
    <section className="section-y border-b border-border bg-background">
      <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeading
          align="left"
          eyebrow="Fixed one-week delivery"
          title={
            <>
              From rack to production in <span className="text-brand">seven days</span>
            </>
          }
          description="A scripted, repeatable build sequence — no open-ended consulting engagement."
        />

        <div className="space-y-px overflow-hidden rounded-2xl border border-border bg-border">
          {phases.map((phase) => (
            <div key={phase.range} className="bg-surface p-7 sm:flex sm:gap-8">
              <p className="font-mono text-xs font-semibold text-brand sm:w-28 sm:shrink-0 sm:pt-1">{phase.range}</p>
              <div className="mt-2 space-y-1.5 sm:mt-0">
                <h3 className="text-base font-semibold">{phase.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{phase.body}</p>
              </div>
            </div>
          ))}
          <div className="bg-surface p-7">
            <PreloaderLink to="/delivery" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
              See the day-by-day plan <ArrowRight className="h-4 w-4" />
            </PreloaderLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PricingTeaser() {
  return (
    <section className="section-y border-b border-border bg-surface">
      <div className="container-page grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
        {[
          { label: "Platform", value: "€55,000", body: "Full three-cluster build, delivered in one week." },
          { label: "Platform +", value: "€65,000", body: "Adds 30 days of dedicated post-handover support." },
          { label: "Whitelabel & IP", value: "€750,000", body: "The complete source and the right to resell it." },
        ].map((tier) => (
          <div key={tier.label} className="bg-surface p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{tier.label}</p>
            <p className="mt-3 font-display text-3xl font-semibold">{tier.value}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tier.body}</p>
          </div>
        ))}
      </div>
      <div className="container-page mt-8 text-center">
        <PreloaderLink to="/pricing" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
          Compare tiers and model your TCO <ArrowRight className="h-4 w-4" />
        </PreloaderLink>
      </div>
    </section>
  );
}
