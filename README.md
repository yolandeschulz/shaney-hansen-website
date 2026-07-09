# Shaney Hansen Photography & Social Media Management — Website

A warm, premium, mobile-first static website for **Shaney Hansen Photography & Social Media Management** (Lichtenburg, South Africa), positioning three connected service pillars — Photography, Creative Direction & Styled Setups, and Social Media Management — for local and international clients.

Built with **Astro + Tailwind CSS**, fully static output, editable through **Pages CMS**, hosted on **Xneelo**.

## Quick start (local development)

Requirements: Node.js 20+ and npm.

```bash
npm install     # install dependencies
npm run dev     # start dev server at http://localhost:4321
npm run build   # build the production site into dist/
npm run preview # preview the built site locally
```

## How the site is structured

| Folder | What it is |
|---|---|
| `src/content/pages/` | Editable page copy (Markdown with frontmatter) |
| `src/content/services/` | Editable service definitions (JSON) |
| `src/content/galleries/` | One JSON file per portfolio category |
| `src/content/case-studies/` | Social media case studies (Team Up Athletics placeholder) |
| `src/content/testimonials/` | Testimonials (hidden until `published: true`) |
| `src/content/site/settings.json` | Contact details, footer, SEO defaults, form endpoint |
| `src/components/` | Reusable Astro components |
| `src/layouts/BaseLayout.astro` | Shared layout, SEO tags, schema, motion system |
| `src/pages/` | Routes (each file = a page) |
| `public/images/<category>/` | Images, organised per portfolio category |
| `.pages.yml` | Pages CMS configuration |

**Do not hard-code copy into components** — content lives in `src/content/` so Shaney can edit it via Pages CMS.

## Editing content (Pages CMS)

1. Push this repository to GitHub.
2. Go to <https://app.pagescms.org> and sign in with the GitHub account that has access to the repo.
3. Select the repository — the editing interface is generated from `.pages.yml`.
4. Edits are committed back to the repo; the build-check workflow verifies each change.

Full non-technical instructions: **PAGES_CMS_EDITOR_GUIDE.md** and **HANDOVER_GUIDE.md**.

## Images

All images live under `public/images/` in category folders. **Never upload original full-resolution shoot files.** Export optimised web versions first — see **IMAGE_GUIDE.md** for sizes, naming and alt text. The current images are placeholder SVGs; replace them with real, optimised photographs.

## Contact form

The site is static, so the form needs an endpoint. Set `formEndpoint` in `src/content/site/settings.json` (also editable in Pages CMS) to one of:

- **Web3Forms** (free): create an access key at web3forms.com, use `https://api.web3forms.com/submit` and add a hidden `access_key` input, or
- **Formspree**: `https://formspree.io/f/YOUR_ID`, or
- **A PHP mailer on Xneelo** (Xneelo supports PHP): upload a small mail script and point the endpoint at it, or
- **Netlify Forms** if the site is ever hosted there.

Until an endpoint is set, the form opens a pre-filled **email draft** (mailto) and WhatsApp buttons act as backup. No paid service is hard-coded.

## Deployment (Xneelo)

Two options — see **XNEELO_DEPLOYMENT_GUIDE.md**:

1. **Manual**: `npm run build`, upload `dist/` to the Xneelo web root (`public_html`).
2. **GitHub Actions**: manually triggered `deploy-xneelo.yml` workflow using GitHub Secrets (`XNEELO_HOST`, `XNEELO_USERNAME`, `XNEELO_PASSWORD` or `XNEELO_SSH_KEY`, `XNEELO_PORT`, `XNEELO_REMOTE_PATH`).

A GitHub Pages or Netlify preview can be pointed at the same repo for staging.

## Before launch — replace all placeholders

Set the final domain in `astro.config.mjs` (or `SITE_URL` env var) and `public/robots.txt`, then work through the checklist below.

### Missing content checklist

- [ ] Final logo
- [ ] Final brand colours (current palette is a starting direction)
- [ ] Final selected images (curated, optimised)
- [ ] Final hero images
- [ ] Social links (Facebook, Instagram)
- [ ] Final domain
- [ ] Xneelo hosting details
- [ ] Xneelo FTP/SFTP/SSH credentials (as GitHub Secrets)
- [ ] Contact form endpoint
- [ ] Package/pricing details (all currently `[to be confirmed]`)
- [ ] Testimonials (currently hidden placeholders)
- [ ] Shaney's personal bio
- [ ] Team Up Athletics exact spelling/location
- [ ] Team Up Athletics approval for the case study
- [ ] Team Up Athletics screenshots/images (if allowed)
- [ ] Areas Shaney travels to
- [ ] Gallery turnaround time
- [ ] Deposit/payment terms
- [ ] Cancellation/rescheduling policy
- [ ] Travel and destination booking policy
- [ ] Usage rights for influencer/corporate content
- [ ] Privacy policy wording
- [ ] POPIA/privacy requirements for the contact form

## Documentation index

- `HANDOVER_GUIDE.md` — non-technical guide for Shaney
- `PAGES_CMS_EDITOR_GUIDE.md` — how to edit every part of the site
- `IMAGE_GUIDE.md` — image sizes, naming, alt text
- `XNEELO_DEPLOYMENT_GUIDE.md` — deployment, SSL, DNS
- `CONTENT_UPDATE_GUIDE.md` — where every piece of content lives
- `MOTION_AND_DEPTH_PLAN.md` — the animation/depth system and accessibility approach
