# Motion & Depth Plan

The site's movement is slow, soft, elegant and photography-led. It supports the story; it never shows off.

## Which sections move, and how

| Section | Movement | Why |
|---|---|---|
| Hero (all pages) | Layered image + overlapping cream text panel; panel fades/rises softly on load; warm gradient overlay on the image | Immediate depth and a premium, editorial first impression |
| Section headings | Gentle fade-up on scroll (`.reveal`) | Calm rhythm as the visitor reads down the page |
| Service pillar cards | Staggered fade-up + soft lift and shadow on hover | Depth without distraction |
| Gallery/portfolio cards | Subtle lift + slow image zoom (`scale 1.04` over 1.2s) on hover | Makes photography feel alive but unhurried |
| About section | Overlapping editorial image composition with a floating secondary image and blush accent circle | Layered, magazine-like depth |
| Destination section | Full-bleed layered background image with warm charcoal overlay | Emotional, immersive positioning moment |
| Creative Direction section | Collage-style overlapping set-building imagery | Shows the set-building story visually |
| Social media section | Layered card/preview composition with soft background shapes | Content-feed feel without gimmicks |
| CTA sections | Soft floating background circles; button lift on hover | Subtle warmth around the enquiry moment |
| Page-to-page | Astro View Transitions (soft cross-fade) | Smooth, premium navigation |

## How it stays elegant

- One movement vocabulary: fade-up reveals, soft lifts, slow zooms. No bounce, spin, parallax abuse or fast easing.
- Durations 0.6–1.2s with a gentle `cubic-bezier(0.22, 1, 0.36, 1)` curve.
- Reveals trigger once and never replay.

## Reduced motion

`prefers-reduced-motion: reduce` disables everything: reveal elements render fully visible with no transition, hover zooms and lifts are switched off, and smooth scrolling is disabled (see `src/styles/global.css`). The reveal script also short-circuits and simply shows all content.

## Libraries and performance

- **No animation library.** Everything is CSS transitions plus a ~20-line IntersectionObserver script in `BaseLayout.astro`. Zero JS bundles shipped for motion.
- Astro View Transitions come from Astro itself (no dependency).
- Images are lazy-loaded (`loading="lazy"`) except the hero (`fetchpriority="high"`).
- `will-change` is limited to reveal elements; observers unobserve after reveal.

This was chosen over Motion/Motion One because the brief's motion style (slow, soft, minimal) is fully achievable in CSS, keeping the site fast, SEO-friendly and simple to maintain.
