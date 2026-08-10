import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./primitives";
import { useContact } from "./contact";

const tiers = [
  {
    name: "Private Cloud Platform",
    price: "€55,000",
    note: "one-time · excl. VAT",
    tagline:
      "Turnkey deployment on your own servers within one week by senior Kubernetes architects.",
    features: [
      "Complete setup on client servers within one week",
      "Three-cluster architecture (admin, compute, storage)",
      "Istio Ambient mesh on Ubuntu 24.04 LTS nodes",
      "Production shell scripts and GitOps pipeline",
      "Handover documentation and operational guides",
    ],
    featured: false,
    badge: "1-week deployment",
  },
  {
    name: "Private Cloud Platform +",
    price: "€65,000",
    note: "one-time · excl. VAT",
    tagline:
      "Everything in the base engagement plus 30 days of dedicated engineering support and SLA cover.",
    features: [
      "Everything in Private Cloud Platform",
      "One month of post-launch technical support",
      "Direct Slack / Teams channel with senior engineers",
      "One-hour priority incident response SLA",
      "Upgrade and security patch maintenance guidance",
    ],
    featured: true,
    badge: "Most chosen by enterprise",
  },
  {
    name: "Whitelabel & IP licence",
    price: "€750,000",
    note: "one-time · excl. VAT",
    tagline:
      "Full source delivery and workshop. Resell to clients, train teams or run managed services.",
    features: [
      "Full source repository (scripts, manifests)",
      "Interactive engineering workshop and walkthrough",
      "Unrestricted commercial right to resell",
      "Right to build proprietary training material",
      "100% IP ownership transfer, zero royalties",
    ],
    featured: false,
    badge: "Business IP transfer",
  },
];

export function Pricing() {
  const { open } = useContact();

  return (
    <section id="pricing" className="section-y border-b border-border bg-surface">
      <div className="container-page space-y-14">
        <SectionHeading
          eyebrow="Engagements"
          title={
            <>
              Transparent, fixed-scope <span className="text-brand">pricing</span>
            </>
          }
          description="From a one-week deployment on your hardware to full acquisition of the platform IP. All prices exclude VAT; EU/international B2B reverse charge applies."
        />

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-surface p-8",
                tier.featured
                  ? "border-brand/40 shadow-lift lg:-mt-4 lg:pb-12"
                  : "border-border shadow-soft",
              )}
            >
              {tier.featured ? (
                <span className="absolute -top-3 left-8 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-foreground">
                  Recommended
                </span>
              ) : null}

              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {tier.badge}
              </p>
              <h3 className="mt-3 text-xl font-semibold">{tier.name}</h3>
              <p className="mt-2 min-h-[3.5rem] text-sm leading-relaxed text-muted-foreground">
                {tier.tagline}
              </p>

              <div className="mt-6 border-y border-border py-6">
                <p className="font-display text-4xl font-semibold tracking-tight">{tier.price}</p>
                <p className="mt-1 text-sm text-muted-foreground">{tier.note}</p>
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      className={cn(
                        "mt-0.5 h-4 w-4 shrink-0",
                        tier.featured ? "text-brand" : "text-muted-foreground",
                      )}
                    />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => open(tier.name)}
                className={cn(
                  "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition",
                  tier.featured
                    ? "bg-brand text-primary-foreground hover:bg-brand-strong"
                    : "border border-border bg-surface hover:bg-surface-muted",
                )}
              >
                Request {tier.name} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}