import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/hero";
import {
  PlatformPillars,
  PlatformPreview,
  DeliveryStrip,
  PricingTeaser,
} from "@/components/site/home-overview";
import { Cta } from "@/components/site/cta";

const title = "KubeSailor — Multi-Cluster Private Cloud on Bare Metal";
const description =
  "A productized three-cluster private cloud platform deployed on your bare metal in one week: Istio Ambient, Rook-Ceph, GitOps and full data sovereignty.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <PlatformPillars />
      <PlatformPreview />
      <DeliveryStrip />
      <PricingTeaser />
      <Cta />
    </>
  );
}
