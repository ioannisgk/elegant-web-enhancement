import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/primitives";
import { Architecture } from "@/components/site/architecture";
import { PlatformServices } from "@/components/site/platform-services";
import { TechStack } from "@/components/site/stack";
import { Cta } from "@/components/site/cta";

const title = "Reference Architecture — KubeSailor Private Cloud";
const description =
  "Five highly available clusters on bare metal — admin tooling, application workloads, Rook-Ceph storage, HAProxy load balancing and Bind9 DNS — joined by Istio Ambient and GitOps into one sovereign private cloud.";

export const Route = createFileRoute("/architecture")({
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
  component: ArchitecturePage,
});

function ArchitecturePage() {
  return (
    <>
      <PageHero
        eyebrow="Reference architecture"
        title={
          <>
            Purpose-built clusters, one <span className="text-brand">sovereign platform</span>
          </>
        }
        description="KubeSailor splits platform tooling, application workloads, persistent storage, traffic ingress and DNS resolution into dedicated highly available clusters. Each layer runs its own control plane or virtual IP, so governance, compute, data, load balancing and name resolution fail, scale and upgrade independently — while the whole platform feels like one sovereign cloud."
        meta={["Ubuntu 24.04 LTS", "kubeadm HA control planes", "HAProxy + Keepalived", "Bind9 DNS cluster"]}
      />
      <Architecture />
      <PlatformServices />
      <TechStack />
      <Cta />
    </>
  );
}
