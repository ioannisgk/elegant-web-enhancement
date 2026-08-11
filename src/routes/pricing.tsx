import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/primitives";
import { Pricing } from "@/components/site/pricing";
import { Comparison } from "@/components/site/comparison";
import { Calculator } from "@/components/site/calculator";
import { Cta } from "@/components/site/cta";

const title = "Pricing & TCO — KubeSailor Private Cloud Platform";
const description =
  "Fixed-price private cloud delivery from €55,000, with a transparent comparison against managed Kubernetes and an interactive total cost of ownership model.";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing & TCO"
        title={
          <>
            Fixed scope, fixed price, <span className="text-brand">no licence fees</span>
          </>
        }
        description="One engagement fee covers the entire build. There are no per-node charges, no subscriptions and nothing to renew — the platform belongs to you after handover."
        meta={["Prices exclude VAT", "No per-node licensing", "EU B2B reverse charge"]}
      />
      <Pricing />
      <Comparison />
      <Calculator />
      <Cta />
    </>
  );
}