import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/primitives";
import { Faq } from "@/components/site/faq";
import { Cta } from "@/components/site/cta";

const title = "FAQ — KubeSailor Private Cloud Questions";
const description =
  "Hardware requirements, pricing tiers, hosting options, support and what happens after handover — answered before your discovery call.";

export const Route = createFileRoute("/faq")({
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
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Answers before the <span className="text-brand">discovery call</span>
          </>
        }
        description="The questions engineering and procurement teams ask us most often when evaluating a move to sovereign bare metal infrastructure."
      />
      <Faq />
      <Cta />
    </>
  );
}
