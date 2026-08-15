# Restore Aug 15 12:09 PM site state

## Goal
Bring the project back to the state it was in on Aug 15 around 12:09 PM, which includes the Aug 15 morning edits that are currently missing after the recent revert.

## Changes to restore

1. **Pricing / TCO calculator (`src/components/site/calculator.tsx`)**
   - Replace the modal-opening "Get a custom TCO audit" button with a download link.
   - Text: "Download the TCO audit".
   - Icon: simple downward arrow (`ArrowDown`).
   - Link to the uploaded TCO PDF asset (`src/assets/KubeSailor_Bare_Metal_vs_Hyperscaler_TCO_Study.pdf.asset.json`).
   - Remove the `useContact` hook usage for this CTA.

2. **Pricing comparison table (`src/components/site/comparison.tsx`)**
   - Replace the "Ownership of tooling" row with "Observability stack".
   - KubeSailor column value: "Prometheus, Thanos, Grafana Alloy, Loki, Tempo".
   - Adjust other columns to match the original restored wording.

3. **Whitelabel page (`src/components/site/whitelabel.tsx`)**
   - Add the short follow-up sentence to the "Resell as your own" card: "You control the roadmap, the pricing and the customer relationship."
   - Add the short follow-up sentence to the "Recurring SLA revenue" card: "Recurring support contracts become a predictable revenue stream."

## Verification
- Run TypeScript typecheck (`tsgo` or `tsc --noEmit`).
- Confirm the Pricing page shows the download button and the comparison table row.
- Confirm the Whitelabel page shows the two added sentences.
