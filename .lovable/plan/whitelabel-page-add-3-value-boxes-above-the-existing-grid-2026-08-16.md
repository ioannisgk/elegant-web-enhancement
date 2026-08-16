# Whitelabel page: add 3 value boxes above the existing grid

## Goal
Add three new value-proposition boxes at the top of the existing "What you receive" table on the Whitelabel page, using the text provided by the user, lightly edited for tone consistency with the rest of the site.

## Proposed text (minor consistency edits)

| Position | Eyebrow | Headline | Body |
|----------|---------|----------|------|
| Top left | Proven, not experimental | Launch with a battle-tested architecture | You're not licensing an idea — you're licensing a build that already runs end to end: HA networking, GitOps, service mesh and a working CI/CD pipeline validated with a live demo deployment. When you pitch a client, you're pointing at something real, not a concept. |
| Top middle | Skip the R&D investment | Avoid months of platform engineering | Building a system like this from scratch is a multi-month effort even for an experienced team, with real technical risk along the way. The licence hands you the finished result instead of the build — no trial and error, no wrong turns, no wasted engineering time. |
| Top right | A business asset, not an expense | Build equity you can grow — or sell | Unlike a service contract, licensed IP sits on your balance sheet as an asset, not a recurring cost. It can become a genuine part of your company's own valuation story, and later, part of a fundraising or acquisition conversation. |

## Layout changes
- Add the three new boxes as the first row of the existing grid, before the current five items.
- Keep the existing grid structure (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`, `gap-px`, `rounded-2xl`, `border`, `bg-border`).
- Use the same card styling as the existing items (gold eyebrow, `bg-surface`, `p-8`).
- Keep the dark CTA card in its current position at the end of the grid.
- Update the section heading title to reflect that there are now more than five ways the licence pays for itself, or keep it generic: "Ways the licence pays for itself".

## Verification
- Run `tsgo` to confirm type safety.
- Take a Playwright screenshot of the Whitelabel page to show the updated table.
