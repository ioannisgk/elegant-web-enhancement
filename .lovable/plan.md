# Terms & Conditions page

## Goal
Create a `/terms` page with complete Terms & Conditions covering KubeSailor as a company, grounded in the actual commercial facts published across the site. No navigation-bar link — only a footer link.

## Page structure

New route `src/routes/terms.tsx` (with its own `head()` metadata: title "Terms & Conditions — KubeSailor", description, og tags) rendering a new `src/components/site/terms.tsx` component. Styled consistently with the site: `PageHero`-style header, max-w-3xl readable prose, numbered sections, same typography and color tokens as the rest of the site. A "Last updated" date at the top.

## Content sections (all facts sourced from existing pages)

1. **Introduction & acceptance** — who KubeSailor is, scope of the terms, acceptance by engaging services or paying a deposit.
2. **Services** — the three engagements as published on Pricing:
   - Private Cloud Platform (€55,000) — one-week, fixed-scope deployment on client hardware (5-cluster platform).
   - Private Cloud Platform + (€65,000) — adds 30 days of dedicated senior engineer support.
   - Whitelabel & IP licence (€750,000) — full source code and IP transfer with unrestricted commercial use.
3. **Client responsibilities** — hardware prerequisites per FAQ/Delivery: minimum 21 Ubuntu nodes (27 recommended for full HA) with static addressing and out-of-band access, plus timely access and cooperation; delivery timeline depends on these being ready before day one.
4. **Payments, deposit & refunds** — all prices one-time, excluding VAT; EU/international B2B reverse charge applies. A €5,000 deposit is required to initiate the process, send the contract and assign a dedicated engineer. **All payments are final and non-refundable** (as published on the Pricing page). Invoicing and payment timing per the individual contract.
5. **Intellectual property** — Private Cloud Platform tiers: client receives configurations/manifests for their own deployment; the platform stack is open source. Whitelabel tier: upon full payment, 100% IP ownership transfers with no royalties and unrestricted commercial use (resale, training, managed services).
6. **Delivery & acceptance** — fixed one-week delivery schedule; engagement is complete on handover of repositories and manifest files; day-7 HA failover drills serve as the acceptance demonstration.
7. **Support** — 30 days of dedicated senior engineer support included only in the Plus tier; ongoing support otherwise under separate agreement.
8. **Warranties & liability** — services provided with professional care; no warranty of uninterrupted operation after handover; liability capped at the amount paid; no liability for indirect/consequential damages or for issues arising from client hardware, network, or third-party changes after handover.
9. **Confidentiality** — mutual confidentiality of infrastructure details, credentials and business information shared during discovery and delivery.
10. **Third-party software** — the platform is composed of open-source components (Kubernetes, Istio, Rook-Ceph, etc.), each under its own licence.
11. **Governing law & disputes** — governing law and jurisdiction clause.
12. **Contact** — info@kubesailor.com for questions about these terms.

## Footer link

Add a "Terms & Conditions" link (with the existing PreloaderLink treatment) in the footer — placed in the bottom bar next to the copyright line, not in the navigation column groups, so it reads as a legal link. No change to the header navigation.

## Placeholders the user must confirm

The terms need a few real legal details I will mark clearly as placeholders for review:
- Legal company name and registration details
- Governing country/jurisdiction (default drafted as Greece, since the founder is Athens-based — user to confirm)

## Technical notes
- New files: `src/routes/terms.tsx`, `src/components/site/terms.tsx`; one edit in `src/components/site/footer.tsx`.
- Route string `/terms` matches the filename; route tree regenerates automatically.
- Unique head() metadata on the route (title, description, og:title, og:description); no og:image (no absolute hero image for this page).

## Verification
- `bun run build` passes; Playwright check that `/terms` renders, the footer link navigates to it (with preloader), and no nav-bar link was added.
