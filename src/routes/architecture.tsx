import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/primitives";
import { Architecture } from "@/components/site/architecture";
import { PlatformServices } from "@/components/site/platform-services";
import { TechStack } from "@/components/site/stack";
import { Cta } from "@/components/site/cta";

const title = "Reference Architecture — KubeSailor Private Cloud";
const description =
  "Three highly available Kubernetes clusters on bare metal: admin tooling, application workloads and Rook-Ceph storage, joined by Istio Ambient and GitOps.";

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
            Three clusters, one <span className="text-brand">sovereign platform</span>
          </>
        }
        description="KubeSailor separates platform tooling, application workloads and storage into dedicated highly available clusters, each with its own control plane and a shared HA edge."
        meta={["Ubuntu 24.04 LTS", "kubeadm HA control planes", "Istio Ambient mesh", "Rook-Ceph NVMe"]}
      />
      <Architecture />
      <PlatformServices />
      <TechStack />
      <Cta />
    </>
  );
}