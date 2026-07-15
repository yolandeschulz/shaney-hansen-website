/**
 * Analytics helpers — Shaney Hansen Photography.
 *
 * The site is built "tracking ready": nothing loads or fires until real IDs
 * are added in Site Settings (src/content/site/settings.json, editable via
 * Pages CMS). Placeholder values in [square brackets] are treated as unset,
 * so the site can go live safely with placeholders everywhere.
 *
 * Preferred setup: Google Tag Manager (gtmId). GA4, Google Ads conversions
 * and any future tags are then managed inside GTM without code changes.
 * If only a GA4 Measurement ID is supplied, gtag.js is loaded directly.
 */

/** True only when a value is a real, usable ID/URL (not empty, not a [placeholder]). */
export function isConfigured(value: unknown): value is string {
  return (
    typeof value === 'string' &&
    value.trim().length > 0 &&
    !value.trim().startsWith('[')
  );
}

/**
 * Canonical event names used across the site.
 * Keep these in sync with data-track attributes, GTM triggers and the
 * ANALYTICS_MONTHLY_REPORTING_GUIDE.md / GOOGLE_ADS_STARTER_GUIDE.md docs.
 */
export const EVENTS = {
  PAGE_VIEW: 'page_view',
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  WHATSAPP_CLICK: 'whatsapp_click',
  WEDDING_WHATSAPP_CLICK: 'wedding_whatsapp_click',
  CORPORATE_WHATSAPP_CLICK: 'corporate_whatsapp_click',
  SCHOOL_WHATSAPP_CLICK: 'school_whatsapp_click',
  DESTINATION_WHATSAPP_CLICK: 'destination_whatsapp_click',
  SOCIAL_MEDIA_WHATSAPP_CLICK: 'social_media_whatsapp_click',
  EMAIL_CLICK: 'email_click',
  PHONE_CLICK: 'phone_click',
  QUOTE_CLICK: 'quote_click',
  INTERNATIONAL_QUOTE_CLICK: 'international_quote_click',
  SOCIAL_MEDIA_ENQUIRY_CLICK: 'social_media_enquiry_click',
  CREATIVE_DIRECTION_ENQUIRY_CLICK: 'creative_direction_enquiry_click',
  DESTINATION_ENQUIRY_CLICK: 'destination_enquiry_click',
  GALLERY_VIEW: 'gallery_view',
  GALLERY_CATEGORY_CLICK: 'gallery_category_click',
  SERVICE_CTA_CLICK: 'service_cta_click',
  GOOGLE_REVIEWS_CLICK: 'google_reviews_click',
  LEAVE_REVIEW_CLICK: 'leave_review_click',
  FAQ_OPEN: 'faq_open',
} as const;

export type EventName = (typeof EVENTS)[keyof typeof EVENTS];

export interface AnalyticsConfig {
  gtmId?: string;
  gaMeasurementId?: string;
  googleSiteVerification?: string;
  googleAdsConversionId?: string;
  googleAdsConversionLabel?: string;
  metaPixelId?: string;
}

/** Extract only the configured (real) tracking values from site settings. */
export function getAnalyticsConfig(settings: Record<string, unknown>): AnalyticsConfig {
  const pick = (key: string) => (isConfigured(settings[key]) ? (settings[key] as string) : undefined);
  return {
    gtmId: pick('gtmId'),
    gaMeasurementId: pick('gaMeasurementId'),
    googleSiteVerification: pick('googleSiteVerification'),
    googleAdsConversionId: pick('googleAdsConversionId'),
    googleAdsConversionLabel: pick('googleAdsConversionLabel'),
    metaPixelId: pick('metaPixelId'),
  };
}
