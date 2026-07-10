# Shaney Hansen Photography & Social Media Management — Website

A warm, premium, mobile-first static website for **Shaney Hansen Photography & Social Media Management** (Lichtenburg, South Africa), positioning three connected service pillars — Photography, Creative Direction & Styled Setups, and Social Media Management — for local and international clients.

Built with **Astro + Tailwind CSS**, fully static output, editable through **Pages CMS**, to be hosted on **Xneelo**.

> **Current status: pre-launch.** The domain **shaneyhansen.com** is registered (Shaney's own Xneelo account), Basic hosting is active (South Africa) and **hello@shaneyhansen.com** exists — but the website is **not deployed yet**. The GitHub repository is the source of truth and Pages CMS stays connected to it. Deployment to Xneelo happens only once QA is complete. See **PRE_LAUNCH_CHECKLIST.md**.

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
| `src/content/testimonials/` | Testimonials (hidden until `published` AND `permissionApproved` are true) |
| `src/content/site/settings.json` | Contact details, footer, SEO defaults, form endpoint, Google Review links, tracking IDs |
| `src/lib/analytics.ts` | Analytics helpers + canonical event names |
| `src/components/Analytics.astro` | GTM/GA4 loader + data-track click listener (inert until IDs configured) |
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

Form submission tracking: `contact_form_submit` fires only when a configured endpoint receives a real submission — never for plain button clicks. The mailto fallback is tracked as `email_click` instead. If the endpoint is later called via AJAX, move the event into the success callback for true success-only tracking.

## Analytics, tracking & Google Ads readiness

The site is **tracking ready but switched off**. All IDs live in `src/content/site/settings.json` (editable via Pages CMS) and are placeholders like `[to be added]` — while a value is a placeholder, nothing loads and nothing fires. `.env.example` documents the same placeholders.

- `src/components/Analytics.astro` (included in `BaseLayout` head) loads **Google Tag Manager** when `gtmId` is set (preferred), or **GA4 gtag.js** when only `gaMeasurementId` is set, renders the **Google Search Console** verification meta tag when set, and always installs a safe click listener for `data-track` attributes (no-ops when no tracking is present, keeps working if scripts are blocked).
- Important CTAs carry `data-track` (and optional `data-track-label`) attributes with these canonical event names (see `src/lib/analytics.ts`): `page_view`, `contact_form_submit`, `whatsapp_click`, `email_click`, `phone_click`, `quote_click`, `international_quote_click`, `social_media_enquiry_click`, `creative_direction_enquiry_click`, `destination_enquiry_click`, `gallery_view`, `gallery_category_click`, `service_cta_click`, `google_reviews_click`, `leave_review_click`.
- `gallery_view` fires automatically on `/portfolio/<slug>` pages.
- Google Ads conversion ID/label fields exist as placeholders (`googleAdsConversionId`, `googleAdsConversionLabel`) — do not activate until campaigns are planned. See **GOOGLE_ADS_STARTER_GUIDE.md**.
- Sitemap (`/sitemap-index.xml` via @astrojs/sitemap) and `public/robots.txt` are in place for Search Console.
- Reviews: Google Review buttons (`GoogleReviewsCTA.astro`) appear on the homepage, contact page and footer once real links are saved in Site Settings. Testimonials render only when `published` **and** `permissionApproved` are both true — no fake reviews, star ratings or review counts anywhere, and no Review/AggregateRating schema is emitted.
- Privacy: activate tracking only after the privacy wording and consent approach are confirmed (see the Privacy Policy placeholder page).

## Deployment (Xneelo — hosting ready, site not deployed)

Domain: **shaneyhansen.com** · Hosting: **Basic, South Africa** · Email: **hello@shaneyhansen.com** — all active in Shaney's own Xneelo account. The final static build is deployed once QA is complete.

Two deployment options — see **XNEELO_DEPLOYMENT_GUIDE.md**:

1. **Manual**: `npm run build`, upload `dist/` to the Xneelo web root (`public_html`).
2. **GitHub Actions**: manually triggered `deploy-xneelo.yml` workflow using GitHub Secrets (`XNEELO_HOST`, `XNEELO_USERNAME`, `XNEELO_PASSWORD` or `XNEELO_SSH_KEY`, `XNEELO_PORT`, `XNEELO_REMOTE_PATH`).

A GitHub Pages or Netlify preview can be pointed at the same repo for staging.

## Before launch — replace all placeholders

Work through **PRE_LAUNCH_CHECKLIST.md** (domain, hosting, email, SSL, form endpoint, analytics, Search Console, Business Profile, reviews). Once the domain is registered, set it in `astro.config.mjs` (or `SITE_URL` env var) and `public/robots.txt`, then work through the content checklist below.

### Missing content checklist

- [ ] Final logo
- [ ] Final brand colours (current palette is a starting direction)
- [ ] Final selected images (curated, optimised)
- [ ] Final hero images
- [ ] Social links (Facebook, Instagram)
- [x] Final domain — shaneyhansen.com (registered, auto-renew on)
- [x] Xneelo account owner — Shaney's own account
- [x] Xneelo hosting package — Basic, South Africa
- [x] Professional email — hello@shaneyhansen.com (bookings@/shaney@ optional later)
- [ ] Xneelo FTP/SFTP/SSH credentials (as GitHub Secrets)
- [ ] Web root path (usually /public_html/)
- [ ] SSL (Let's Encrypt via konsoleH)
- [ ] Google Search Console verification
- [ ] GA4 Measurement ID and GTM Container ID
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
- [ ] Google Business Profile created/claimed (business.google.com)
- [ ] Google Reviews link + review request link (Site Settings)
- [ ] Google Review QR code image (optional)
- [ ] Google Tag Manager ID
- [ ] GA4 Measurement ID
- [ ] Google Search Console verification + sitemap submitted
- [ ] Consent approach confirmed before activating tracking
- [ ] Google Ads conversion ID/label (only when campaigns are planned)

## Documentation index

- `PRE_LAUNCH_CHECKLIST.md` — everything that must happen before the site goes live
- `HANDOVER_GUIDE.md` — non-technical guide for Shaney
- `WHERE_TO_EDIT_WHAT.md` — page-by-page map: site section → Pages CMS entry/field
- `PAGES_CMS_EDITOR_GUIDE.md` — how to edit every part of the site
- `IMAGE_GUIDE.md` — image sizes, naming, alt text
- `XNEELO_DEPLOYMENT_GUIDE.md` — deployment, SSL, DNS
- `CONTENT_UPDATE_GUIDE.md` — where every piece of content lives
- `MOTION_AND_DEPTH_PLAN.md` — the animation/depth system and accessibility approach
- `REVIEWS_AND_TESTIMONIALS_GUIDE.md` — collecting, labelling and publishing reviews honestly
- `ANALYTICS_MONTHLY_REPORTING_GUIDE.md` — GA4/GTM/Search Console/Looker Studio, monthly checklist
- `GOOGLE_ADS_STARTER_GUIDE.md` — Google Ads readiness (no campaigns yet)
