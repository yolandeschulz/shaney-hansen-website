# Pages CMS Editor Guide

How the CMS works and what each section edits. (For a friendlier task-based walkthrough, see HANDOVER_GUIDE.md.)

## How Pages CMS works

Pages CMS (https://pagescms.org) is a free, open-source editor that sits directly on top of the GitHub repository — there's no separate database. When you save in the editor, it commits the change to GitHub. The `.pages.yml` file in the repo root defines every editable screen.

Login: https://app.pagescms.org → Sign in with GitHub → choose this repository.

## Editor sections

### Site Settings
Contact details (phone, WhatsApp, email, location), social links, footer wording, availability line, travel note, default SEO title/description/share image, and the contact form endpoint.

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
Team Up Athletics placeholder. Fields for platforms, frequency, content type, results and testimonial — all `[to be confirmed]` until the client approves. The **Show on website?** toggle controls visibility.

### Testimonials
List of quotes with a per-item **Show on website?** toggle. The whole section stays hidden on the site until at least one item is published.

## Media

Uploads go to `public/images/` — keep each image in its matching category folder. Follow IMAGE_GUIDE.md (web-exported JPG/WebP, under ~500 KB for gallery images, descriptive filenames, no raw files).

## SEO fields

Every page and gallery has its own SEO title and meta description. Guidelines: titles under ~60 characters including "Shaney Hansen", descriptions 140–160 characters, natural language, no keyword stuffing.

## Safety notes

- Changes are version-controlled — anything can be rolled back via GitHub history.
- The build-check workflow runs after each save; if a change breaks the build, it shows a red ✗ on the commit in GitHub.
- Don't edit `.pages.yml` itself unless you know what you're doing — it defines the editor.
