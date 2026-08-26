import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/primitives";
import { PlatformGallery } from "@/components/site/platform-gallery";
import { Cta } from "@/components/site/cta";

const title = "The Platform — Inside KubeSailor";
const description =
  "A guided tour of the running KubeSailor platform: GitLab and Argo CD GitOps, Jenkins and Harbor supply chain, Prometheus, Thanos and Grafana observability, Rook-Ceph storage and the Istio Ambient mesh.";

export const Route = createFileRoute("/platform")({
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
  component: PlatformPage,
});

function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="The platform"
        title={
          <>
            The platform, as you will <span className="text-brand">actually see it</span>
          </>
        }
        description="These are real consoles from a delivered KubeSailor environment — source control, pipelines, registries, dashboards, storage and service mesh, all self-hosted on your own bare metal."
        meta={["GitOps with Argo CD", "Secure supply chain", "Full observability", "HA storage & mesh"]}
      />
      <PlatformGallery />
      <Cta />
    </>
  );
}
