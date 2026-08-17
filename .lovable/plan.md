# Add enquiry email to footer and remove duplicate CTA

Add `info@kubesailor.com` to the footer "Start a project" column and remove the "Book a call" button from the footer, since that button is already available in the sticky navigation bar.

## Changes

1. **Footer contact column (`src/components/site/footer.tsx`)**
   - Remove the "Book a call" button.
   - Add a clickable `mailto:info@kubesailor.com` line below the existing description text.
   - Style the email link as a secondary action (muted text with hover color change) so it does not compete with the main CTA.

2. **No other pages affected**
   - The header, contact modal, pricing page and other CTAs remain unchanged.
