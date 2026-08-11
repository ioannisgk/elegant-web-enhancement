# Polished Presence Project

I have this website, but I want it to feel more professional to attract visitors. Check the overall theme, layouts, etc. and make all the changes you think are necessary in order to make this a production ready website and to feel like it was designed by a professional. You can change font sizes or whatever you think is better. Check the whole website, from navigation bar to footer. I want to present it to my client

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/133d0820-adc7-4975-af61-924006b0f02c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Deploying to GitHub Pages

The site is fully static — every route is prerendered to HTML, so it can be
hosted on GitHub Pages with no server.

```bash
bun run build:pages   # output in dist/client
```

This produces prerendered HTML for `/`, `/architecture`, `/delivery`,
`/pricing`, `/whitelabel` and `/faq`, plus `.nojekyll` and a `404.html`
fallback for deep links.

### One-time repository setup

1. Push this repository to GitHub (default branch `main`).
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. `.github/workflows/deploy.yml` then builds and deploys on every push to
   `main` (and on manual dispatch).

### Custom domain

`public/CNAME` contains `kubesailor.com`, which is copied into the build, so the
site serves from the domain root. At your DNS provider point the apex domain at
GitHub Pages:

```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   <your-github-username>.github.io.
```

Then enable **Enforce HTTPS** in Settings → Pages once the certificate is issued.
