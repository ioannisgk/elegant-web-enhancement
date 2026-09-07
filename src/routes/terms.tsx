import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/primitives";
import { Terms } from "@/components/site/terms";

const title = "Terms & Conditions — KubeSailor";
const description =
  "The terms governing KubeSailor engagements: fixed-scope pricing, the €5,000 initiation deposit, non-refundable payments, IP ownership, delivery and liability.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            Terms & <span className="text-brand">Conditions</span>
          </>
        }
        description="The terms that govern every KubeSailor engagement — from the initiation deposit and fixed-scope delivery to intellectual property and liability."
      />
      <Terms />
    </>
  );
}
