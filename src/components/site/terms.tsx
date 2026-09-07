const lastUpdated = "7 September 2026";

const sections = [
  {
    title: "1. Introduction and acceptance",
    body: [
      "These Terms & Conditions govern all services provided by KubeSailor (\"KubeSailor\", \"we\", \"us\", \"our\") to the client (\"Client\", \"you\", \"your\"). By requesting a proposal, signing a contract, paying the initiation deposit, or using any KubeSailor deliverable, you accept these Terms in full.",
      "These Terms apply together with the individual contract issued for your engagement. Where the individual contract and these Terms conflict, the individual contract prevails.",
    ],
  },
  {
    title: "2. Services",
    body: [
      "KubeSailor offers three fixed-scope engagements, as published on the Pricing page:",
      "Private Cloud Platform (€55,000): a turnkey, five-cluster sovereign private cloud deployed on your own physical or virtual servers within one fixed week, including dedicated load balancer, DNS and storage clusters, a full observability stack and GitOps automation.",
      "Private Cloud Platform + (€65,000): everything in the base engagement, plus 30 days of dedicated senior engineer support, a priority communication channel, patch and upgrade guidance, and post-handover health checks.",
      "Whitelabel & IP licence (€750,000): full transfer of the platform source code and intellectual property, including an interactive engineering workshop, whitelabel licensing rights and unrestricted commercial use.",
    ],
  },
  {
    title: "3. Client responsibilities",
    body: [
      "Delivery within the fixed one-week schedule depends on the Client's environment being ready before day one. Unless otherwise agreed in writing, the Client must provide a minimum of 21 servers running Ubuntu with static addressing, datacenter-grade drives and out-of-band access; 27 servers is the recommended fully highly available footprint.",
      "The Client is responsible for timely access to infrastructure, accurate information during discovery, and the availability of personnel for handover and the day-7 failover drills. Delays caused by missing prerequisites extend the delivery schedule accordingly and do not entitle the Client to any refund or price reduction.",
    ],
  },
  {
    title: "4. Payments, deposit and refunds",
    body: [
      "All prices are one-time, fixed-scope fees and exclude VAT. EU and international B2B reverse charge rules apply where applicable. There are no per-node charges, subscriptions or recurring licence fees.",
      "A deposit of €5,000 is required to initiate any engagement. Payment of the deposit triggers the process: the contract is issued and a dedicated Kubernetes engineer is assigned to your project.",
      "All payments are final and non-refundable, including the deposit, in all cases and to the maximum extent permitted by applicable law. Invoicing details and payment schedule are defined in the individual contract.",
    ],
  },
  {
    title: "5. Intellectual property",
    body: [
      "Private Cloud Platform and Private Cloud Platform + tiers: the Client receives every repository, configuration and manifest file for their own deployment and may operate and modify them for their own internal use. KubeSailor retains ownership of the underlying platform IP; the Client may not resell, sublicense or redistribute the deliverables as a product or service to third parties.",
      "Whitelabel & IP licence tier: upon receipt of full payment, 100% of the platform intellectual property transfers to the Client, free of royalties, with unrestricted commercial use — including deploying for clients, running training programmes, and selling support under the Client's own brand.",
      "The platform is composed of open-source components (including Kubernetes, Istio, Rook-Ceph, Prometheus, Grafana, Harbor, Jenkins, Argo CD, HAProxy, Keepalived and Bind9), each governed by its own open-source licence, which is unaffected by these Terms.",
    ],
  },
  {
    title: "6. Delivery and acceptance",
    body: [
      "Delivery follows a fixed one-week schedule: environment preparation, cluster provisioning, GitOps tooling, storage and service mesh, registry and CI/CD, observability, and live high-availability failover drills on the final day.",
      "The engagement is complete, and the deliverables are deemed accepted, upon handover of the repositories and manifest files together with the successful completion of the day-7 failover drills. Any defect reported within 14 days of handover that stems from the delivered configuration will be corrected by us at no additional cost.",
    ],
  },
  {
    title: "7. Support",
    body: [
      "Thirty days of dedicated senior engineer support are included exclusively in the Private Cloud Platform + tier. The base Private Cloud Platform tier does not include post-handover support. Ongoing support, maintenance or managed operations beyond the included scope require a separate written agreement.",
    ],
  },
  {
    title: "8. Warranties and limitation of liability",
    body: [
      "We perform all services with professional care and in line with the published reference architecture. After handover, we do not warrant uninterrupted or error-free operation of the platform, which runs entirely on infrastructure controlled by the Client.",
      "We are not liable for any indirect, incidental or consequential damages, including loss of revenue, data or business opportunity, nor for issues arising from the Client's hardware, network, or third-party changes made after handover.",
      "To the maximum extent permitted by applicable law, our total aggregate liability arising from or in connection with an engagement is capped at the total amount actually paid by the Client for that engagement.",
    ],
  },
  {
    title: "9. Confidentiality",
    body: [
      "Both parties agree to keep confidential all non-public information exchanged during discovery and delivery, including infrastructure details, credentials, network topology and business information, and to use it solely for the purpose of the engagement. This obligation survives the completion of the engagement.",
    ],
  },
  {
    title: "10. Third-party software",
    body: [
      "The platform integrates third-party open-source software. We make no warranty regarding third-party components beyond their respective licences, and the Client's use of those components is subject to the terms of their respective open-source licences.",
    ],
  },
  {
    title: "11. Governing law and disputes",
    body: [
      "These Terms and any engagement are governed by the laws of Greece. The courts of Athens, Greece have exclusive jurisdiction over any dispute arising from or in connection with these Terms, unless mandatory law provides otherwise.",
      "[Placeholder: confirm governing jurisdiction and insert the legal company name and registration details before publishing.]",
    ],
  },
  {
    title: "12. Contact",
    body: [
      "For any question about these Terms & Conditions, contact us at info@kubesailor.com.",
    ],
  },
];

export function Terms() {
  return (
    <section className="section-y border-b border-border bg-background">
      <div className="container-page max-w-4xl">
        <p className="font-mono text-xs text-muted-foreground">Last updated: {lastUpdated}</p>
        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <article key={section.title} className="space-y-4">
              <h2 className="text-xl font-semibold tracking-tight">{section.title}</h2>
              {section.body.map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
