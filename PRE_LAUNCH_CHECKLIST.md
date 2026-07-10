# Pre-Launch Checklist

**Current status: the domain and Xneelo hosting are NOT set up yet. Nothing is live.**

The GitHub repository is the website's source of truth and Pages CMS stays connected to it throughout. The final static Astro build is deployed to Xneelo only once QA is complete. Work through the sections below in order.

## 1. Domain registration

- [ ] Check availability of the candidate domains:
  - [ ] shaneyhansenphotography.co.za
  - [ ] shaneyhansenphotography.com
  - [ ] shaneyhansencreative.co.za
  - [ ] shaneyhansen.co.za
  - [ ] shaneyhansenstudio.co.za
- [ ] Choose the final domain: **[to be confirmed]**
- [ ] Register it in **Shaney's own Xneelo account** (she must be the account owner)
- [ ] Record the Xneelo account owner: **[to be confirmed]**

## 2. Xneelo hosting

Set up hosting **only when ready to launch** — unless Shaney wants professional email sooner.

- [ ] Choose a hosting package (any Linux/Apache package — the site is static): **[to be confirmed]**
- [ ] Point the domain at the hosting (konsoleH → Domains/DNS)
- [ ] Get FTP/SFTP/SSH details: **[to be confirmed — store as GitHub Secrets only, never in code]**
- [ ] Confirm the web root path: **[to be confirmed — usually /public_html/]**

## 3. Professional email

- [ ] Create mailboxes on the domain:
  - [ ] hello@[domain] — general enquiries
  - [ ] bookings@[domain] — booking enquiries
  - [ ] shaney@[domain] — personal/direct
- [ ] Decide which address the website displays and the contact form sends to
- [ ] Update **Site Settings** (email field) and the professional email placeholders

## 4. SSL

- [ ] Enable free Let's Encrypt SSL in konsoleH
- [ ] Verify `https://` works
- [ ] Uncomment the "Force HTTPS" block in `public/.htaccess` and redeploy

## 5. Contact form endpoint

- [ ] Choose an endpoint (Web3Forms, Formspree, or PHP mailer on Xneelo — see README)
- [ ] Set `formEndpoint` in **Site Settings**
- [ ] Test a real submission end to end (until then the form falls back to an email draft)

## 6. Google Analytics (GA4)

- [ ] Create a GA4 property at analytics.google.com
- [ ] GA4 Measurement ID: **[to be added — Site Settings → gaMeasurementId]**
- [ ] Prefer configuring the GA4 tag inside Tag Manager (below)

## 7. Google Tag Manager

- [ ] Create a container at tagmanager.google.com
- [ ] GTM Container ID: **[to be added — Site Settings → gtmId]**
- [ ] Confirm privacy wording and consent approach **before** activating any tracking

## 8. Google Search Console

- [ ] Add the site at search.google.com/search-console (only possible once the domain is live)
- [ ] Verification code: **[to be added — Site Settings → googleSiteVerification]**
- [ ] Submit the sitemap: `/sitemap-index.xml`

## 9. Google Business Profile

- [ ] Create or claim the profile at business.google.com
- [ ] Fill in: business name, website URL, phone, email, categories (photographer, social media agency), description, photos, service areas
- [ ] Record the profile name and location in **Site Settings**

## 10. Google Reviews link

- [ ] Get the review request link (and QR code) from the Business Profile
- [ ] Fill in **Site Settings**: Google Reviews link, Google Review request link, Google Business Profile link
- [ ] Verify the review buttons appear on the homepage, contact page and footer

## Final deployment (after all of the above + QA)

- [ ] Set the final domain in `astro.config.mjs` (or `SITE_URL` env var) and `public/robots.txt`
- [ ] Complete the content checklist in README.md (images, pricing, bio, testimonials, privacy policy…)
- [ ] QA sign-off
- [ ] Deploy `dist/` to Xneelo (manual FTP or the manual-trigger GitHub Actions workflow — see XNEELO_DEPLOYMENT_GUIDE.md)
- [ ] Post-launch test: HTTPS, navigation, direct URLs, 404 page, images, form, WhatsApp/email links on a phone
