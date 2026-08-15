import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./primitives";

const faqs = [
  {
    q: "What exactly do we get at the end of the engagement?",
    a: "A five-cluster sovereign private cloud running on your own hardware: an HA admin cluster, an HA workload cluster, a Rook-Ceph storage cluster, an HAProxy load balancer cluster and a Bind9 DNS cluster, all joined by Istio Ambient and driven by Argo CD. You also receive every repository, manifest and runbook.",
  },
  {
    q: "How long does delivery take, and what happens each day?",
    a: "One fixed week. Day 01 OS and TLS preparation, Day 02 DNS, load balancing and the three kubeadm clusters, Day 03 GitLab and Argo CD, Day 04 Rook-Ceph and Istio Ambient, Day 05 Harbor and Jenkins, Day 06 the observability stack, Day 07 live high-availability failover drills.",
  },
  {
    q: "What hardware do we need before day one?",
    a: "A minimum of 21 nodes running Ubuntu with static addressing and datacenter drives; 27 nodes is the recommended fully highly available footprint — 3 load balancers, 3 DNS, 7 admin, 7 workload, 6 storage and 1 dedicated GitLab server. We review your inventory during scoping and confirm the topology before the engagement starts.",
  },
  {
    q: "Can it run on rented bare metal such as Hetzner or OVHcloud?",
    a: "Yes. KubeSailor is built for bare metal rentals such as Hetzner Robot, OVHcloud and Equinix Metal, as well as company-owned racks, colocation and virtual servers. The only requirements are Ubuntu, static addressing and out-of-band access.",
  },
  {
    q: "How do you prove the platform is actually highly available?",
    a: "Day 07 is a live drill day. We move the DNS Keepalived VIP under load, fail the active HAProxy node to its standby, drain a Kubernetes control plane member while etcd keeps quorum, and remove a Ceph OSD node to show replication and rebalancing with persistent volumes still online.",
  },
  {
    q: "What does the platform cost, and are there licence fees?",
    a: "€55,000 for the one-week Private Cloud Platform delivery, €65,000 with 30 days of dedicated senior engineer support, and €750,000 for the whitelabel and IP licence. Every price is one-time and excludes VAT. There are no per-node charges, no subscriptions and no recurring licence fees — the entire stack is open source.",
  },
  {
    q: "How does this compare with AWS or a DIY bare-metal build?",
    a: "The Pricing page models it in full: production in one week instead of months, no egress billing, a complete observability stack with Prometheus, Thanos, Grafana Alloy, Loki and Tempo, and HA storage included. The interactive TCO calculator lets you enter your own vCPU, RAM, storage and bandwidth figures.",
  },
  {
    q: "What is the difference between Private Cloud Platform and Whitelabel?",
    a: "Private Cloud Platform is a service: our team deploys KubeSailor onto your servers. Whitelabel (€750,000) is a transfer of intellectual property — the full source repositories, delivery automation, documentation and an engineering workshop, with 100% ownership and no royalties, so you can deploy for clients, run training or sell support under your own brand.",
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