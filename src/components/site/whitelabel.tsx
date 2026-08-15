import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./primitives";
import { useContact } from "./contact";

const items = [
  {
    label: "Resell as your own",
    title: "Deploy KubeSailor for your clients",
    body: "Take the platform to market under your own brand, on your own commercial terms, with no per-deployment fee back to us. You control the roadmap, the pricing and the customer relationship.",
  },
  {
    label: "Complete curriculum base",
    title: "Launch training programmes",
    body: "Turn the workshop content into live cohorts, recorded courses or certification tracks. HA networking, GitOps, service mesh, storage and observability is a genuine curriculum, not a webinar.",
  },
  {
    label: "Recurring SLA revenue",
    title: "Offer ongoing support as a service",
    body: "Become the operations partner for any organisation running KubeSailor — you set the scope, the terms and the pricing. Recurring support contracts become a predictable revenue stream.",
  },
  {
    label: "Unrestricted modification",
    title: "Extend and customise freely",
    body: "You hold the source, so you can build vertical variants — a compliance-heavy edition for fintech, a leaner one for smaller teams — and sell them as your own products.",
  },
  {
    label: "Single buyout fee",
    title: "One cost, unlimited use",
    body: "€750,000 (+VAT) transfers the underlying IP outright. Every deployment, course or support contract you build afterwards is yours to monetise.",
  },
];

export function Whitelabel() {
  const { open } = useContact();

  return (
    <section id="whitelabel" className="section-y border-b border-border bg-background">
      <div className="container-page space-y-14">
        <SectionHeading
        tone="gold"
          eyebrow="What you receive"
          title={
            <>
              Five ways the licence <span className="text-gold">pays for itself</span>
            </>
          }
          description="The whitelabel tier isn't a bigger deployment — it's a different purchase. Instead of KubeSailor being built once for your infrastructure, you receive the complete source and the knowledge to run it yourself, indefinitely, for as many clients as you choose."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="flex flex-col gap-3 bg-surface p-8">
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                {item.label}
              </span>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}

          <div className="flex flex-col justify-between gap-6 bg-ink p-8 text-ink-foreground">
            <p className="text-lg font-medium leading-relaxed">
              In short: whitelabel turns KubeSailor from{" "}
              <span className="text-ink-foreground/60">"a platform we bought"</span> into{" "}
              <span className="text-[oklch(0.75_0.10_80)]">"a product line we run"</span>.
            </p>
            <button
              onClick={() => open("Whitelabel & IP licence")}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[oklch(0.75_0.10_80)] px-5 py-3 text-sm font-semibold text-ink transition hover:brightness-95"
            >
              Enquire about the IP licence <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}