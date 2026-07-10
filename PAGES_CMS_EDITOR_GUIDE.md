# Pages CMS Editor Guide

How the CMS works and what each section edits. (For a friendlier task-based walkthrough, see HANDOVER_GUIDE.md. For a page-by-page map of which entry controls which part of the website, see WHERE_TO_EDIT_WHAT.md.)

**How to replace any image:** open the entry that uses it (see WHERE_TO_EDIT_WHAT.md) → click the image field → choose or upload the new photo → update the alt text next to it → Save. You never edit image files themselves; placeholder SVGs simply stop being used once no field points to them, and can then be deleted in Media.

## How Pages CMS works

Pages CMS (https://pagescms.org) is a free, open-source editor that sits directly on top of the GitHub repository — there's no separate database. When you save in the editor, it commits the change to GitHub. The `.pages.yml` file in the repo root defines every editable screen.

Login: https://app.pagescms.org → Sign in with GitHub → choose this repository.

## Editor sections

The menu is ordered like the website itself: pages first (🏠 Home page … 🔒 Privacy policy page), then 🖼️ Portfolio galleries, 💬 Testimonials and ⭐ Case studies, with ⚙️ Site settings last. Every field has a plain-language label saying where it appears on the site, plus a helper note underneath where useful (image sizes, what alt text means, what not to change).

### Site Settings
Contact details (phone, WhatsApp, email, location), social links, footer wording, availability line, travel note, default SEO title/description/share image, and the contact form endpoint.

Also here: **Google Reviews & Business Profile** (public reviews link, review request link, Business Profile link/name/location, optional review QR code image — the Read/Leave review buttons appear on the site automatically once real links replace the placeholders) and **Analytics & tracking IDs** (Google Tag Manager ID, GA4 Measurement ID, Search Console verification code, Google Ads conversion ID/label, optional Meta Pixel ID). Tracking stays completely off while these fields contain [placeholders] — paste only real values from your own Google accounts.

### Pages
One entry per page: **Home**, **About**, **Destination**, **Social Media**, **Creative Direction**, **Contact**, **Privacy Policy**. Each exposes its headings, paragraphs, button labels, hero image + alt text, and per-page SEO title and meta description.

### Services
- **Photography** — a list of 12 services; each has who-it's-for, what-to-expect, package placeholder, image and alt text. Reorder by dragging.
- **Social Media** — two services, the who-for and help-with lists, four package placeholders, and the international value section.
- **Creative Direction** — main copy and the capabilities list.
- **Destination** — value copy, ideal-for list and planning placeholders.

### Portfolio Galleries
Twelve entries (Weddings → Styled). Each has: title, description, cover image + alt, SEO title + meta description, homepage toggle, display order, and the image list (image + alt per item). Adding an image here is how new photos get on the site.

### Social Media Case Studies
Team Up Athletics placeholder. Fields for platforms, frequency, content type, results and testimonial — all `[to be confirmed]` until the client approves. The **Show on website?** toggle controls visibility, and **Client permission approved?** records that the client signed off on the published details.

### Testimonials
Each testimonial has: the client's real words (quote), name, **Source** (Google Review / Facebook Review / Direct Testimonial / WhatsApp Feedback / Email Feedback), optional star rating (only if the client actually gave one), date, **Service type** (routes the testimonial to the matching service page), **Featured?** (homepage set), optional image, optional link to the original review, **Client permission approved?** and **Show on website?**.

A testimonial only appears when BOTH permission and show-on-website are switched on. The homepage shows only Featured items; the Photography, Social Media, Creative Direction and Destination pages each show testimonials whose Service type matches. Never invent quotes, names, ratings or dates — see REVIEWS_AND_TESTIMONIALS_GUIDE.md.

## Media

Uploads go to `public/images/` — keep each image in its matching category folder. Follow IMAGE_GUIDE.md (web-exported JPG/WebP, under ~500 KB for gallery images, descriptive filenames, no raw files).

## SEO fields

Every page and gallery has its own SEO title and meta description. Guidelines: titles under ~60 characters including "Shaney Hansen", descriptions 140–160 characters, natural language, no keyword stuffing.

## Safety notes

- Changes are version-controlled — anything can be rolled back via GitHub history.
- The build-check workflow runs after each save; if a change breaks the build, it shows a red ✗ on the commit in GitHub.
- Don't edit `.pages.yml` itself unless you know what you're doing — it defines the editor.
