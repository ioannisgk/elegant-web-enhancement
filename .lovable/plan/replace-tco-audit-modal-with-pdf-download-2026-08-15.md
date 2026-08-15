# Replace TCO audit modal with PDF download

## Goal
On the Pricing page, change the "Get a custom TCO audit" button so it downloads the uploaded TCO study PDF instead of opening the contact modal.

## Changes
1. **Asset handling**
   - Upload `KubeSailor_Bare_Metal_vs_Hyperscaler_TCO_Study.pdf` to Lovable Assets using the sandbox CLI:
     ```bash
     mkdir -p src/assets
     lovable-assets create \
       --file /mnt/user-uploads/KubeSailor_Bare_Metal_vs_Hyperscaler_TCO_Study.pdf \
       --filename KubeSailor_Bare_Metal_vs_Hyperscaler_TCO_Study.pdf \
       > src/assets/KubeSailor_Bare_Metal_vs_Hyperscaler_TCO_Study.pdf.asset.json
     ```
   - Import the generated asset pointer in `src/components/site/calculator.tsx` and use its `url` field.

2. **Calculator CTA update (`src/components/site/calculator.tsx`)**
   - Remove the `useContact()` and `ArrowRight` imports.
   - Import the `Download` icon from `lucide-react`.
   - Replace the current modal-opening `<button>` with an `<a>` element:
     - Text: **"Download the TCO audit"**
     - Icon: `Download` (same 16×16 size as the previous arrow)
     - `href` points to the asset URL
     - `download` attribute present
     - `target="_blank"` and `rel="noopener noreferrer"`
     - Keep the existing button styling (`inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-surface px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-surface-muted`).

3. **Verification**
   - Run the TypeScript typecheck.
   - Open the Pricing page preview and confirm the button label, icon, and PDF download/open behavior.

## Out of scope
- No changes to the TCO calculator logic, slider values, or surrounding layout.
- No changes to the contact modal or other "Book a call" buttons.
