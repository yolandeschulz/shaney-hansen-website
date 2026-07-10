# Pre-Launch Checklist

**Current status (July 2026): domain, hosting and email are DONE. The website itself is NOT deployed/live yet.**

The GitHub repository is the website's source of truth and Pages CMS stays connected to it throughout. The final static Astro build is deployed to Xneelo only once QA is complete. Remaining work: sections 4–10 and final deployment.

## 1. Domain registration ✅ DONE

- [x] Final domain chosen and registered: **shaneyhansen.com** (July 2026, auto-renew on)
- [x] Registered in **Shaney's own Xneelo account** — she is the account owner
- [x] Domain ownership type: Individual

## 2. Xneelo hosting ✅ DONE

- [x] Hosting package: **Basic** (R99/month, billed yearly), hosted in **South Africa**
- [x] Domain linked to the hosting package
- [ ] Get FTP/SFTP/SSH details from konsoleH: **[to be confirmed — store as GitHub Secrets only, never in code]**
- [ ] Confirm the web root path: **[to be confirmed — usually /public_html/]**

## 3. Professional email ✅ DONE

- [x] Mailbox created: **hello@shaneyhansen.com** (general enquiries + website contact address)
- [x] bookings@ and shaney@ deliberately skipped — can be added free in konsoleH → Mail → Manage Accounts anytime
- [x] Website displays and contact form sends to: hello@shaneyhansen.com (updated in Site Settings)
- [ ] Send a test email to and from hello@shaneyhansen.com
- [ ] Set up the mailbox on Shaney's phone/computer (IMAP mail.shaneyhansen.com :993, SMTP smtp.shaneyhansen.com :465 SSL, or webmail at mail.shaneyhansen.com)

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

- [x] Final domain set in `astro.config.mjs` and `public/robots.txt` (shaneyhansen.com)
- [ ] Complete the content checklist in README.md (images, pricing, bio, testimonials, privacy policy…)
- [ ] QA sign-off
- [ ] Deploy `dist/` to Xneelo (manual FTP or the manual-trigger GitHub Actions workflow — see XNEELO_DEPLOYMENT_GUIDE.md)
- [ ] Post-launch test: HTTPS, navigation, direct URLs, 404 page, images, form, WhatsApp/email links on a phone
