# Send contact form submissions to info@kubesailor.com

The site is a static GitHub Pages build, so there is no server to send mail. Web3Forms handles that: the form posts directly to their API, and they email you the fields.

There is only one form component in the codebase (`ContactProvider`), reused by all five triggers (header, footer, CTA, three pricing tiers, whitelabel). Fixing it once fixes every entry point.

## What you need to do (2 minutes, before I build)

1. Go to web3forms.com, enter `info@kubesailor.com`, and submit.
2. They email you an **Access Key** (a UUID like `a1b2c3d4-...`).
3. Paste that key into the chat.

The access key is a public, publishable value — it is safe in the front-end code and is required for a static site. It only ever delivers to the verified address you registered, so it cannot be abused to send mail elsewhere.

## What I will build

- Turn the modal form into a controlled, submitting form with real state: name, email, company, message, plus the hidden topic (which tier or "Discovery call" the visitor clicked).
- On submit, POST JSON to `https://api.web3forms.com/submit` with the access key, a `subject` line like `KubeSailor enquiry: Private Cloud Platform +`, and `from_name` set to the visitor's name so replies are easy.
- Add a honeypot field (`botcheck`) — Web3Forms' built-in spam filter, invisible to real users.
- Client-side validation with zod before sending: required name, valid email, required company, length caps on every field.
- Submit states: button shows "Sending…" and is disabled while in flight; the existing green "Request received" panel shows on success.
- Error state: if the request fails, show an inline error with a mailto fallback to info@kubesailor.com instead of silently swallowing it.

## Notes

- No styling or layout changes — the modal looks exactly as it does now.
- Free tier covers 250 submissions/month; no account dashboard or backend needed.
- Nothing about the GitHub Pages deployment changes.
