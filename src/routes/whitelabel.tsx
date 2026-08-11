import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/primitives";
import { Whitelabel } from "@/components/site/whitelabel";
import { Cta } from "@/components/site/cta";

const title = "Whitelabel & IP Licence — Resell KubeSailor as Your Own";
const description =
  "A single buyout transfers the complete KubeSailor source, documentation and commercial rights so you can deploy, train and support under your own brand.";

export const Route = createFileRoute("/whitelabel")({
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
  component: WhitelabelPage,
});

function WhitelabelPage() {
  return (
    <>
      <PageHero
        eyebrow="Whitelabel & IP"
        title={
          <>
            Buy the platform, <span className="text-gold">build the product line</span>
          </>
        }
        description="The whitelabel tier is a transfer of intellectual property: the full source repositories, the delivery automation and the right to commercialise KubeSailor however you choose."
        meta={["€750,000 + VAT", "Unlimited deployments", "Full source & runbooks"]}
      />
      <Whitelabel />
      <Cta />
    </>
  );
}