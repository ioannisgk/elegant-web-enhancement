# FAQ page: default-open first answer + make answers crawlable

## Diagnosis (confirmed)

The feedback is correct. The FAQ uses the shared shadcn/Radix accordion in `src/components/ui/accordion.tsx`. Radix's `Accordion.Content` **unmounts its children when the item is closed** — so for 7 of 8 questions the answer text is not in the HTML at all; it only enters the DOM after a click runs client-side JS. Since the site is prerendered for GitHub Pages, the static `/faq` HTML contains the questions but almost none of the answers. Search engines and simple fetchers see an empty FAQ.

## Changes

### 1. Keep answers in the DOM (SEO fix)
File: `src/components/ui/accordion.tsx`
- Add `forceMount` to `AccordionPrimitive.Content` inside `AccordionContent`. Radix then always renders the content and toggles visibility with the `hidden` attribute + `data-state`, so all 8 answers ship in the prerendered HTML and are indexable. The open/close animation and styling keep working because they key off `data-state`.
- This is one shared component used only by the FAQ, so no other page is affected. No visual change for visitors.

### 2. First question open by default
File: `src/components/site/faq.tsx`
- Add `defaultValue={faqs[0].q}` to the `<Accordion type="single" collapsible>` root, so "What exactly do we get at the end of the engagement?" starts expanded. Users can still collapse it.

### 3. FAQ structured data (bonus, makes the SEO fix actually pay off)
File: `src/routes/faq.tsx`
- Add a `FAQPage` JSON-LD block in the route's `head().scripts` listing all 8 questions and answers. This is what Google's Rich Results Test checks for and makes the page eligible for FAQ rich results. The questions/answers are exported from the faq component module so the copy stays in one place.

## Technical detail

- No layout, styling, spacing or typography changes anywhere.
- The accordion still behaves identically for users; only the underlying DOM mounting changes.
- Verification: fetch the prerendered `/faq` HTML and confirm all 8 answers are present in the markup; re-check the first item renders expanded.
