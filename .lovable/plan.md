# Pricing page: initiation deposit & refund policy

## Goal
Add a visible payment-policy notice to the Pricing page so prospects understand that every engagement requires a €5,000 deposit to start and that all payments are non-refundable.

## Proposed change
1. Add an asterisk to each tier's price note in `src/components/site/pricing.tsx`.
   - Change `note: "one-time · excl. VAT"` to `note: "one-time · excl. VAT*"` for all three tiers.
2. Add a footnote block directly under the three pricing cards, before the section ends.
   - Text: "*A €5,000 deposit is required to initiate the process and assign a dedicated Kubernetes engineer to your project. All payments are final and non-refundable."
   - Style: small, muted text, left-aligned or centered, consistent with the page's existing muted-foreground typography.
3. No other pricing values, calculator logic, comparison table, or layout breakpoints change.

## Verification
- Build passes (`bun run build`).
- Pricing page preview shows the asterisk on every card and the footnote directly underneath the cards.
