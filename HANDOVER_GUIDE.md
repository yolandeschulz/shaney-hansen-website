# Handover Guide — for Shaney

Welcome! This guide explains how to update your own website. No coding needed — everything happens through a friendly editor called **Pages CMS**.

> **Important: the website is not live on the internet yet.** The domain name and Xneelo hosting still need to be set up. You can already edit all content through Pages CMS — changes are saved safely — but nobody can visit the site until launch. See "Getting the website live" below.

## Getting the website live (still to do)

These steps happen in this order — your developer will help:

1. **Choose and register your domain name** in **your own Xneelo account** (so you own it). Names to check for availability:
   - shaneyhansenphotography.co.za
   - shaneyhansenphotography.com
   - shaneyhansencreative.co.za
   - shaneyhansen.co.za
   - shaneyhansenstudio.co.za
2. **Set up Xneelo hosting when you're ready to launch.** The only reason to do it sooner is if you want professional email addresses before the website goes live.
3. **Professional email addresses** (recommended once the domain exists):
   - `hello@[your domain]` — for general enquiries
   - `bookings@[your domain]` — for booking enquiries
   - `shaney@[your domain]` — your personal address
4. The website's files live on **GitHub** (the source of truth) and **Pages CMS stays connected to it** — that never changes, even after launch.
5. Once everything is checked and approved (QA), the finished website is uploaded to Xneelo and goes live.

The full technical checklist is in **PRE_LAUNCH_CHECKLIST.md**.

## Logging in

1. Go to **https://app.pagescms.org**
2. Click **Sign in with GitHub** and use the GitHub account you were given access with.
3. Choose the website repository from the list. You'll see a menu of everything you can edit.

When you save a change, the website rebuilds and updates automatically within a few minutes (once deployment is connected).

## Updating homepage text

Open **Page: Home** in the menu. Every heading, paragraph and button label on the homepage is a field you can type into — hero headline, intro, teasers, "How it works" steps and the final call-to-action. Click **Save** when done.

## Updating services

- **Services: Photography** — each photography service (weddings, family, newborn, etc.) is an item in a list. Click one to edit "who it is for", "what to expect" and package details. When your pricing is confirmed, replace the `[Package details to be confirmed]` text.
- **Services: Social Media** — edit the two services, the "who this is for" list, and the four package placeholders.
- **Services: Creative Direction** and **Services: Destination** — same idea.

## Adding photos to a gallery

1. Open **Portfolio Galleries** and choose a category (e.g. Weddings).
2. Scroll to **Gallery images** and click **Add**.
3. Upload or choose an image — please read IMAGE_GUIDE.md first (short version: export a web-sized JPG under 500 KB, never the original file).
4. Fill in the **Alt text** — a short sentence describing the photo, e.g. "Bride and groom laughing during their first dance". This matters for Google and for visitors using screen readers.
5. Save.

## Changing a gallery cover image

Open the gallery, click the **Cover image** field, upload/choose the new image, update the **Cover image alt text**, and save. Choose covers with strong emotion, good light and a clear subject.

## Updating contact details

Open **Site Settings**. Phone, WhatsApp number, email, location, footer wording and social links all live here. Note: the WhatsApp number field must be digits only (e.g. `27769978365`).

## Adding testimonials

Open **Testimonials** and add an item with the client's real words, their name, the **Source** (Google Review, Facebook Review, Direct Testimonial, WhatsApp Feedback or Email Feedback) and the **Service type** — the service type is what places the testimonial on the matching service page. Then switch on BOTH **Client permission approved?** (only after the client agreed) and **Show on website?**. A testimonial stays hidden until both are on — so nothing fake or unapproved ever appears. Tick **Featured?** for the few best ones you want on the homepage. Only add a star rating if the client actually gave one. Full guidance: REVIEWS_AND_TESTIMONIALS_GUIDE.md.

## Approving testimonials for display

The two switches are deliberate: **Client permission approved?** records that the client said yes; **Show on website?** controls visibility. To take a testimonial down temporarily, switch off **Show on website?** — you keep the text and permission record.

## Updating Google Review links

Open **Site Settings** and fill in, when you have them: **Google Reviews link** (your public reviews page), **Google Review request link** (the short link you send to clients), **Google Business Profile link**, and optionally the **Google Review QR code image**. The "Read Google Reviews" and "Leave a Google Review" buttons appear on the homepage, contact page and footer automatically once real links are saved — while the fields still say [to be added], the buttons stay hidden.

## Setting up your Google Business Profile

Before reviews can exist, you need a Google Business Profile — create or claim it at business.google.com. Fill in: business name, website URL, phone number, email, service categories (photographer, social media agency), a business description, photos, service areas, and opening/contact hours if relevant. Google then gives you a review request link (and QR code) — add those to Site Settings as above. Make a habit of requesting a Google review after each successful shoot or client project.

## Updating social media case studies

Open **Social Media Case Studies** → **Team Up Athletics**. Fill in the confirmed details (platforms, posting frequency, content type, results) and switch on **Client permission approved?** only once the client has confirmed the wording, location and any screenshots. Please confirm the exact spelling and location with the client first — the current placeholder is [Confirm: Team Up Athletics, Katy, Texas, USA].

## Replacing hero images

Hero images are set per page (e.g. **Page: Home** → **Hero image**). Use your strongest images — they set the first impression. Heroes can be slightly larger files (up to ~800 KB) but still must be web-exported, around 2000px wide.

## Keeping image sizes web-friendly

Golden rules (full detail in IMAGE_GUIDE.md):

- Export from Lightroom/Photoshop as JPG, quality ~75–80%
- Gallery images: about 1600px on the longest side, under 500 KB
- Never upload straight-from-camera files — they will make the site slow

## Connecting analytics and tracking (after launch)

The website is already "tracking ready" but everything stays OFF until real IDs are saved in **Site Settings**. The order to do this in (full beginner explanations in ANALYTICS_MONTHLY_REPORTING_GUIDE.md):

1. **Google Tag Manager** — create a free account at tagmanager.google.com, copy the container ID (GTM-XXXXXXX) and paste it into **Site Settings → Google Tag Manager ID**. This is the preferred setup.
2. **Google Analytics 4** — create a property at analytics.google.com and set up its tag inside Tag Manager (or paste the G-XXXXXXXXXX ID into **Site Settings → Google Analytics 4 Measurement ID** if not using GTM).
3. **Google Search Console** — add the site at search.google.com/search-console, choose the meta-tag verification method, and paste the verification code into **Site Settings → Google Search Console verification code**. Then submit the sitemap: `/sitemap-index.xml`.
4. **Privacy first** — only activate tracking once the Privacy Policy wording and consent approach are confirmed.

## Updating tracking IDs

All tracking IDs live in **Site Settings** (Tag Manager ID, GA4 Measurement ID, Search Console verification, Google Ads conversion ID/label, Meta Pixel ID). While a field still contains a [placeholder], that tracking simply stays off — you can never break the site by leaving them empty. Do not invent or guess IDs; only paste real values from the Google accounts.

## Preparing for Google Ads

Do not create campaigns yet. Read GOOGLE_ADS_STARTER_GUIDE.md — it explains what Google Ads is, what must be in place first (Business Profile, analytics, reviews, finished landing pages, conversion tracking), and what still needs to be decided (target area, budget, first service to promote). The Google Ads conversion ID and label fields in Site Settings stay as placeholders until then.

## Reading the monthly report

Once analytics is connected, a Looker Studio dashboard will show visitors, traffic sources, enquiries, service interest, portfolio interest, search performance, international interest, and review clicks — section by section, explained in ANALYTICS_MONTHLY_REPORTING_GUIDE.md.

## What to check each month

- How many people visited the site?
- Which pages were viewed most?
- Which service got the most interest?
- How many WhatsApp, email, phone and form enquiries happened?
- Where did visitors come from?
- Which Google searches brought people to the site?
- Which country or city did visitors come from?
- Did any paid ads bring enquiries?
- Which gallery categories are most viewed?
- Which service pages need improvement?
- Which content should you post or update based on the data?
- Are people clicking Google Reviews?
- Are people leaving reviews?
- Which enquiry path works best?

## What NOT to touch

- Anything outside the Pages CMS editor (the code files on GitHub)
- The `.pages.yml`, `astro.config.mjs` and files in `src/components/`, `src/pages/` or `src/lib/`
- The **formEndpoint** field in Site Settings (unless your developer tells you the new value)
- The tracking ID fields — only paste values from your own Google accounts, never guesses; ask for technical help if unsure
- Don't delete gallery files — empty them instead if a category must go quiet

## Who to contact for technical changes

For anything beyond text and images (new pages, design changes, form issues, hosting/domain problems):

**[Developer/maintainer contact to be added — Yolande]**

For hosting, domain and email issues, Xneelo support: https://xneelo.co.za/support/
