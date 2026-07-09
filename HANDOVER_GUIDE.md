# Handover Guide — for Shaney

Welcome! This guide explains how to update your own website. No coding needed — everything happens through a friendly editor called **Pages CMS**.

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

Open **Testimonials**, add an item with the client's words and name, and switch **Show on website?** on. Testimonials stay hidden until you switch that on — so nothing fake ever appears. Only use real client words, with permission.

## Updating social media case studies

Open **Social Media Case Studies** → **Team Up Athletics**. Fill in the confirmed details (platforms, posting frequency, content type, results) and only then keep **Show on website?** switched on. Please confirm the exact spelling and location with the client first, and get their approval before publishing screenshots or results.

## Replacing hero images

Hero images are set per page (e.g. **Page: Home** → **Hero image**). Use your strongest images — they set the first impression. Heroes can be slightly larger files (up to ~800 KB) but still must be web-exported, around 2000px wide.

## Keeping image sizes web-friendly

Golden rules (full detail in IMAGE_GUIDE.md):

- Export from Lightroom/Photoshop as JPG, quality ~75–80%
- Gallery images: about 1600px on the longest side, under 500 KB
- Never upload straight-from-camera files — they will make the site slow

## What NOT to touch

- Anything outside the Pages CMS editor (the code files on GitHub)
- The `.pages.yml`, `astro.config.mjs` and files in `src/components/` or `src/pages/`
- The **formEndpoint** field in Site Settings (unless your developer tells you the new value)
- Don't delete gallery files — empty them instead if a category must go quiet

## Who to contact for technical changes

For anything beyond text and images (new pages, design changes, form issues, hosting/domain problems):

**[Developer/maintainer contact to be added — Yolande]**

For hosting, domain and email issues, Xneelo support: https://xneelo.co.za/support/
