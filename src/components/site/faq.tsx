import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./primitives";

const faqs = [
  {
    q: "Can KubeSailor run on Hetzner or OVHcloud bare metal?",
    a: "Yes. KubeSailor is engineered specifically for bare metal rentals such as Hetzner Robot, OVHcloud and Equinix Metal, as well as company-owned hardware racks and colocation.",
  },
  {
    q: "What is the difference between Private Cloud Platform and Whitelabel?",
    a: "Private Cloud Platform (€55k / €65k) is a service: our platform team deploys KubeSailor on your servers. Whitelabel (€750k) transfers the full source repository, documentation and commercial rights so you can resell it to your own clients or run it as a white-label service.",
  },
  {
    q: "Are all prices subject to VAT?",
    a: "All listed prices exclude VAT. Standard EU and international B2B reverse charge rules apply based on your company location.",
  },
  {
    q: "What hardware do we need before day one?",
    a: "A minimum of 19 nodes — load balancer and DNS pairs, three HA clusters (admin, workload, storage) and a dedicated GitLab server — running Ubuntu 24.04 LTS with datacenter NVMe drives, static addressing and out-of-band access. 25 nodes is the recommended footprint. We review your inventory during scoping and confirm the topology before the engagement starts.",
  },
  {
    q: "What happens after handover?",
    a: "You own every repository, manifest and runbook. Platform + includes 30 days of dedicated support with a one-hour incident response SLA; ongoing support can be arranged separately.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="section-y border-b border-border bg-surface">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          align="left"
          eyebrow="Common questions"
          title="What teams ask us first"
          description="If something isn't covered here, a senior engineer will answer it directly on the call."
        />

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.q} value={faq.q} className="border-border">
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}