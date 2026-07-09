# Content Update Guide

A map of where every piece of content lives. Everything here is editable in Pages CMS (labels in **bold**) or directly in the files.

| Content | File | Pages CMS section |
|---|---|---|
| Contact details, footer, social links, SEO defaults, form endpoint | `src/content/site/settings.json` | **Site Settings** |
| Homepage (hero, intro, all teasers, how-it-works, CTAs) | `src/content/pages/home.md` | **Page: Home** |
| About page | `src/content/pages/about.md` | **Page: About** |
| Destination page hero + CTA | `src/content/pages/destination.md` | **Page: Destination** |
| Destination service copy, ideal-for list, planning placeholders | `src/content/services/destination.json` | **Services: Destination** |
| Social Media page hero + CTAs | `src/content/pages/social-media.md` | **Page: Social Media** |
| Social media services, lists, packages, international copy | `src/content/services/social-media.json` | **Services: Social Media** |
| Creative Direction page hero | `src/content/pages/creative-direction.md` | **Page: Creative Direction** |
| Creative Direction copy + capabilities | `src/content/services/creative-direction.json` | **Services: Creative Direction** |
| All 12 photography services | `src/content/services/photography.json` | **Services: Photography** |
| Portfolio categories, covers, descriptions, image lists, per-gallery SEO | `src/content/galleries/*.json` | **Portfolio Galleries** |
| Team Up Athletics case study | `src/content/case-studies/team-up-athletics.md` | **Social Media Case Studies** |
| Testimonials | `src/content/testimonials/testimonials.json` | **Testimonials** |
| Contact page wording + consent text | `src/content/pages/contact.md` | **Page: Contact** |
| Privacy policy | `src/content/pages/privacy.md` | **Page: Privacy Policy** |
| Images | `public/images/<category>/` | Media library |

## Things that are code, not content (developer changes)

- Navigation labels/order — `src/components/Header.astro`
- Homepage service pillar cards — `src/pages/index.astro` (`pillars` array)
- Contact form fields and enquiry options — `src/components/ContactForm.astro`
- Colours and fonts — `tailwind.config.mjs`
- Final domain — `astro.config.mjs` + `public/robots.txt`

## Placeholder conventions

Anything in square brackets, e.g. `[Package details to be confirmed]`, is an intentional placeholder — replace it with confirmed facts only. Never invent pricing, testimonials, results or client details.
