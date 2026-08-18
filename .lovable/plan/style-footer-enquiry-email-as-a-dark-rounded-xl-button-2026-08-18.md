# Style footer enquiry email as a dark rounded-xl button

Apply the selected "Ink button style" direction to the enquiry email link in the footer "Start a project" column.

## Changes

1. **Footer email element (`src/components/site/footer.tsx`)**
   - Change the current muted text link into a dark solid button.
   - Use the site's existing `bg-ink` / `text-ink-foreground` tokens (same as the header "Book a call" button).
   - Use `rounded-xl` corners to match the "Book a call" button.
   - Apply `px-6 py-3`, `text-sm font-semibold`, and a subtle shadow.
   - Add `hover:bg-ink/90`, `hover:-translate-y-0.5`, and `active:translate-y-0 active:scale-[0.98]` for the selected hover/active feel.
   - Keep the `mailto:info@kubesailor.com` href and the existing surrounding footer layout unchanged.

2. **No other pages or components affected**
   - Header, contact modal, pricing page, and other CTAs remain unchanged.
