import { defineCollection, z } from 'astro:content';

/**
 * Content collections.
 * All of these files are editable through Pages CMS (see .pages.yml).
 * Schemas are intentionally permissive (.passthrough()) so adding a field
 * in the CMS never breaks the build.
 */

const pages = defineCollection({
  type: 'content',
  schema: z
    .object({
      title: z.string(),
      seoTitle: z.string().optional(),
      seoDescription: z.string().optional(),
      ogImage: z.string().optional(),
    })
    .passthrough(),
});

const services = defineCollection({
  type: 'data',
  schema: z
    .object({
      title: z.string(),
      intro: z.string().optional(),
      services: z
        .array(
          z
            .object({
              name: z.string(),
              whoFor: z.string().optional(),
              expect: z.string().optional(),
              packageDetails: z.string().optional(),
              image: z.string().optional(),
              imageAlt: z.string().optional(),
            })
            .passthrough()
        )
        .optional(),
    })
    .passthrough(),
});

const galleries = defineCollection({
  type: 'data',
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      coverImage: z.string(),
      coverAlt: z.string(),
      seoTitle: z.string().optional(),
      seoDescription: z.string().optional(),
      featuredOnHomepage: z.boolean().default(false),
      order: z.number().default(99),
      images: z
        .array(
          z.object({
            src: z.string(),
            alt: z.string(),
          })
        )
        .default([]),
    })
    .passthrough(),
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z
    .object({
      title: z.string(),
      location: z.string().optional(),
      service: z.string().optional(),
      overview: z.string().optional(),
      platforms: z.string().optional(),
      postingFrequency: z.string().optional(),
      contentType: z.string().optional(),
      results: z.string().optional(),
      testimonial: z.string().optional(),
      image: z.string().optional(),
      imageAlt: z.string().optional(),
      /** Client permission to show details/screenshots publicly. */
      permissionApproved: z.boolean().default(false),
      published: z.boolean().default(true),
    })
    .passthrough(),
});

const testimonials = defineCollection({
  type: 'data',
  schema: z
    .object({
      heading: z.string().optional(),
      note: z.string().optional(),
      items: z
        .array(
          z
            .object({
              quote: z.string(),
              name: z.string(),
              /** Google Review / Facebook Review / Direct Testimonial / WhatsApp Feedback / Email Feedback */
              source: z.string().optional(),
              /** Only if the client actually gave a star rating — never invented. */
              rating: z.number().min(1).max(5).nullable().optional(),
              date: z.string().optional(),
              serviceType: z.string().optional(),
              /** Featured testimonials appear in the small homepage set. */
              featured: z.boolean().default(false),
              image: z.string().optional(),
              reviewLink: z.string().optional(),
              /** The client agreed to appear on the website. Required to display. */
              permissionApproved: z.boolean().default(false),
              published: z.boolean().default(false),
            })
            .passthrough()
        )
        .default([]),
    })
    .passthrough(),
});

const site = defineCollection({
  type: 'data',
  schema: z.object({}).passthrough(),
});

export const collections = {
  pages,
  services,
  galleries,
  'case-studies': caseStudies,
  testimonials,
  site,
};
