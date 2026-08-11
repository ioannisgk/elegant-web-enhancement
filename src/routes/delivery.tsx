import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/primitives";
import { Blueprint } from "@/components/site/blueprint";
import { Operations } from "@/components/site/operations";
import { Cta } from "@/components/site/cta";

const title = "Delivery & Operations — KubeSailor in Seven Days";
const description =
  "A fixed seven-day build sequence: hardware preparation, HA networking, GitOps, storage, CI/CD, observability and live failover drills before handover.";

export const Route = createFileRoute("/delivery")({
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
  component: DeliveryPage,
});

function DeliveryPage() {
  return (
    <>
      <PageHero
        eyebrow="Delivery & operations"
        title={
          <>
            One week from bare metal to <span className="text-brand">production</span>
          </>
        }
        description="Every engagement runs the same scripted sequence, so the timeline, the scope and the outcome are known before we start."
        meta={["19 nodes minimum", "25 nodes recommended", "Fixed one-week schedule", "Full handover"]}
      />
      <Blueprint />
      <Operations />
      <Cta />
    </>
  );
}