import { createFileRoute } from "@tanstack/react-router";
import { ContactProvider } from "@/components/site/contact";
import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Architecture } from "@/components/site/architecture";
import { Blueprint } from "@/components/site/blueprint";
import { TechStack } from "@/components/site/stack";
import { Pricing } from "@/components/site/pricing";
import { Whitelabel } from "@/components/site/whitelabel";
import { Calculator } from "@/components/site/calculator";
import { Comparison } from "@/components/site/comparison";
import { Faq } from "@/components/site/faq";
import { Cta } from "@/components/site/cta";
import { SiteFooter } from "@/components/site/footer";

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
    <ContactProvider>
      <SiteHeader />
      <main>
        <Hero />
        <Architecture />
        <Blueprint />
        <TechStack />
        <Pricing />
        <Whitelabel />
        <Calculator />
        <Comparison />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
    </ContactProvider>
  );
}
