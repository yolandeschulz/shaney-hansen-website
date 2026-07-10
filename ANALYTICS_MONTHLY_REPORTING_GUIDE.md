# Analytics & Monthly Reporting Guide — for Shaney

A beginner-friendly guide to understanding who visits the website, what they do there, and which services are creating interest. Nothing here is set up yet — the website is *ready* for all of it, and this guide explains what each piece is and how to connect it after launch.

## The tools, in plain language

### 1. Google Analytics 4 (GA4)

GA4 is Google's free tool that counts and describes website visitors: how many people visited, which pages they viewed, which country they came from, and which buttons they clicked. It answers "what is happening on my website?". Setup: create a free account at analytics.google.com, create a "property" for the website, and copy the Measurement ID (looks like G-XXXXXXXXXX).

### 2. Google Tag Manager (GTM)

GTM is a container that holds all your tracking "tags" (GA4, and later Google Ads conversion tags) in one place, so new tracking can be added without changing the website code. Think of it as a plug board: the website has one GTM socket, and everything else plugs into GTM. Setup: create a free account at tagmanager.google.com and copy the container ID (looks like GTM-XXXXXXX). **GTM is the preferred option for this website** — if a GTM ID is added, GA4 should be set up inside GTM.

### 3. Google Search Console

Search Console shows how the website appears in Google Search: which searches show your site, how many people click through, and whether Google has any problems reading the site. It answers "how do people find me on Google?". Setup: search.google.com/search-console, add the website, and verify ownership — the site already supports the meta-tag verification method (paste the code into Site Settings → Google Search Console verification code). The sitemap is at `/sitemap-index.xml` — submit that URL in Search Console.

### 4. Looker Studio

Looker Studio (free, lookerstudio.google.com) turns GA4 and Search Console data into a friendly visual dashboard — charts instead of tables. Once GA4 is collecting data, a monthly dashboard can be built once and then simply refreshed every month. The recommended dashboard structure is at the end of this guide.

### 5. Xneelo AWStats

The website is hosted on Xneelo, and Xneelo's control panel includes AWStats — basic, hosting-level visitor statistics. It is less detailed than GA4 but works even for visitors who block tracking, so it is a useful backup number. Find it in the Xneelo konsoleH control panel under statistics.

## How tracking is built into this website

The website already contains a tracking system that is **switched off until IDs are added**. In Pages CMS → Site Settings there are fields for the GTM ID, GA4 Measurement ID, Search Console verification, and (later) Google Ads conversion details. While these contain [placeholders], nothing loads and nothing is tracked. As soon as a real ID is saved, tracking starts — no rebuild of the tracking system needed.

Important buttons already carry tracking labels with consistent event names:

page_view, contact_form_submit, whatsapp_click, email_click, phone_click, quote_click, international_quote_click, social_media_enquiry_click, creative_direction_enquiry_click, destination_enquiry_click, gallery_view, gallery_category_click, service_cta_click, google_reviews_click, leave_review_click

In GTM these arrive as dataLayer events with the same names, plus a `track_label` with extra detail (for example which gallery was clicked). Note on phone clicks: the site currently uses WhatsApp links for phone contact, so phone interest shows up as whatsapp_click; the phone_click event name is reserved for if a tel: link is added later.

Privacy note: only activate tracking once the privacy policy wording and consent approach are confirmed (see the Privacy Policy page placeholder).

## Which numbers to look at monthly

Focus on a handful of numbers, not everything: total users and sessions (is the site being found?), top pages (what are people interested in?), traffic sources (Google, Facebook, Instagram, direct?), the enquiry events (contact_form_submit, whatsapp_click, email_click), and Search Console's top queries (which searches bring people in?).

## How to know which services are getting interest

Compare page views of the service pages: /photography, /social-media, /creative-direction, /destination — and the portfolio galleries (gallery_view events show which categories people open). If the Maternity gallery is viewed three times more than anything else, that tells you what to post more of and possibly what to advertise first.

## How to know where enquiries are coming from

In GA4, look at the traffic source of sessions that triggered contact_form_submit or whatsapp_click. That answers "do my enquiries come from Google, Facebook, Instagram or somewhere else?" — which is exactly what you need to know before spending money on ads.

## UTM links — tagging your own links

When you share links to the website, add UTM tags so GA4 can tell the sources apart. Example: `https://yourdomain.co.za/?utm_source=instagram&utm_medium=social&utm_campaign=portfolio_launch`. Use tagged links in: your Instagram bio, Facebook page, Google Business Profile website field, email signature, WhatsApp broadcast links, paid ads, and specific campaign posts. Keep it simple — consistent utm_source values (instagram, facebook, google_business, email, whatsapp) are enough.

## How this prepares for Google Ads

Google Ads needs conversion tracking to work well — it has to know which clicks became enquiries. Because the enquiry events above already exist, connecting Google Ads later is mostly configuration: link Google Ads to GA4, import the enquiry events as conversions, and add the conversion ID/label in Site Settings. See GOOGLE_ADS_STARTER_GUIDE.md.

## What needs to be set up after launch (in order)

1. Google Business Profile (see HANDOVER_GUIDE.md) — [to be done by Shaney]
2. Google Tag Manager account → paste GTM ID into Site Settings
3. Google Analytics 4 property → set up the GA4 tag inside GTM
4. Google Search Console → verify with the meta tag, submit the sitemap
5. Confirm privacy wording, then activate tracking
6. After a few weeks of data: build the Looker Studio dashboard
7. Only then: consider Google Ads

## Recommended Looker Studio dashboard structure

**Website overview** — users, sessions, page views, engagement rate, top pages.
**Traffic sources** — Google Search, Facebook, Instagram, direct, referral, paid ads (later).
**Enquiries and conversions** — contact form submissions, WhatsApp clicks, email clicks, phone clicks, quote clicks.
**Service interest** — photography page views, Social Media Management page views, Creative Direction page views, Destination page views, most clicked CTAs.
**Portfolio interest** — most viewed galleries, gallery category clicks, gallery page views.
**SEO performance** — Google Search clicks, impressions, top queries, top landing pages, country data.
**International interest** — visitors by country, destination page views, international quote clicks.
**Reviews and trust** — Google Reviews clicks, Leave a Review clicks, testimonial section engagement if trackable.

## Monthly analytics checklist

Work through these questions once a month (they are also in HANDOVER_GUIDE.md):

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
- Which content should Shaney post or update based on the data?
- Are people clicking Google Reviews?
- Are people leaving reviews?
- Which enquiry path works best?
