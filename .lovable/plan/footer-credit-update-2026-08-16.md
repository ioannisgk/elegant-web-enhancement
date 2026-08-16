# Footer credit update

## Goal
Update the footer credit line and link it to the founder's LinkedIn profile.

## Changes
1. In `src/components/site/footer.tsx`, replace the current footer meta text:
   - From: `CNCF-native · zero vendor lock-in · Ubuntu 24.04 LTS`
   - To: `Created by Ioannis Gkourtzounis`
2. Wrap "Ioannis Gkourtzounis" in an external `<a>` link to `https://www.linkedin.com/in/ioannisgko`.
3. Open the link in a new tab (`target="_blank"`, `rel="noopener noreferrer"`).
4. Keep the existing footer text styling (muted, small) so the credit remains subtle.
5. Optionally add a tiny external-link icon if it does not clutter the layout; default to no icon unless it improves clarity.

## Verification
- Typecheck passes.
- Footer renders the new credit line and the name is clickable.
- Clicking the name opens LinkedIn in a new tab.
