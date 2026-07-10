# Google Ads Starter Guide — for Shaney

A beginner-friendly explanation of Google Ads and how this website is prepared for it. **No campaigns exist yet and none should be created until the groundwork below is done.** No budgets are suggested here — budget and campaign decisions still need to be made together when the time comes.

## 1. What Google Ads is

Google Ads is Google's advertising platform. You pay to appear at the top of Google search results for searches you choose (for example "family photographer Lichtenburg"), or to show image ads across websites and YouTube. You typically pay per click, so every click should land on a page that can turn that visitor into an enquiry.

## 2. What Google Ads can be used for

For this business it can promote specific services to specific people: local family, cake smash, maternity or wedding photography to people searching nearby; corporate photography to businesses; social media management to small businesses and sports teams; and destination photography to international searchers. It is precise — which is why it needs data and preparation to work.

## 3. Why the website must track conversions

Without conversion tracking, Google Ads only knows which ads got *clicks*, not which got *enquiries*. That means you cannot tell which keyword earned its money and Google's automatic bidding optimises blindly. With conversion tracking, the system learns which clicks become enquiries and gets better over time. This is the single biggest difference between profitable and wasteful small-business ad accounts.

## 4. What a conversion is

A conversion is a visitor doing the thing you actually want. On this website the planned conversions are:

**Primary conversions** (a real enquiry): contact form submission (contact_form_submit), WhatsApp click (whatsapp_click), phone click (phone_click), email click (email_click).

**Secondary conversions** (strong interest): quote clicks (quote_click), international quote clicks (international_quote_click), social media enquiry clicks (social_media_enquiry_click), creative direction enquiry clicks (creative_direction_enquiry_click), destination enquiry clicks (destination_enquiry_click), portfolio gallery views (gallery_view), Google Reviews clicks (google_reviews_click).

All these events are already wired into the website's buttons and links. When ads are set up, they get imported into Google Ads via GA4/GTM, and the conversion ID and label go into Site Settings:

GOOGLE_ADS_CONVERSION_ID = [to be added later]
GOOGLE_ADS_CONVERSION_LABEL = [to be added later]

Do not activate Google Ads conversion tracking until these IDs are supplied and the privacy wording is confirmed.

## 5. Which pages could be used as landing pages

An ad should never just point at the homepage. Each important service page is built to work as a landing page — clear headline, strong photography, enquiry CTA, trust section, mobile-first, SEO metadata: Wedding Photography, Family Photography, Maternity Photography, Newborn Photography, Cake Smash Photography, Corporate Photography (sections on /photography), plus /creative-direction, /social-media and /destination. Before running ads to any page, check it has real testimonials, confirmed package/pricing placeholders filled in, and an FAQ section if useful — [FAQ content to be added per service before its first campaign].

## 6. What Shaney should advertise first

Advertise the service that is easiest to buy and closest to home first. Sensible first campaign areas to consider (a planning note, not a plan):

1. Local family photography
2. Cake smash photography
3. Maternity and newborn photography
4. Wedding photography
5. Corporate photography
6. Social media management for small businesses
7. Social media management for sports teams
8. Destination lifestyle and content photography

Start with one or two, learn, then expand.

## 7. Why not to boost everything randomly

"Boosting" scattered posts or running ads to every service at once spreads a small budget so thin that nothing gets enough data to learn from, and you cannot tell what worked. One focused campaign, one clear landing page, one measurable conversion goal — that is how a small budget produces learnings instead of just spend.

## 8. Why Google reviews help trust

Search ads often appear next to your Google Business Profile. A profile with genuine reviews makes the ad click-worthy and the enquiry feel safe; an empty profile makes even a good ad feel risky. Collecting reviews (see REVIEWS_AND_TESTIMONIALS_GUIDE.md) is genuinely part of ads preparation.

## 9. What must be set up before running ads

In order: (1) Google Business Profile created and filled in; (2) GTM + GA4 connected and collecting data; (3) privacy wording confirmed and tracking activated; (4) conversion events verified as firing (do a test enquiry); (5) at least a handful of real reviews/testimonials live; (6) the chosen landing page finished — real packages, testimonials, FAQ; (7) contact method confirmed (form endpoint connected, or WhatsApp-first decided); (8) target area, budget and the first service to promote decided — [to be decided together].

## 10. How Google Ads links to GA4

Google Ads and GA4 are linked inside their settings (Admin → Product links). Once linked, GA4's events can be imported into Google Ads as conversions, and GA4 reports show which campaigns brought engaged visitors versus bouncers. This link is also how remarketing audiences (people who visited but did not enquire) become available later.

## 11. Why monthly reporting matters

Ads are not "set and forget". A monthly look at the Looker Studio dashboard (see ANALYTICS_MONTHLY_REPORTING_GUIDE.md) answers: did ads bring enquiries, what did an enquiry cost, which service earned interest, and should budget move? Small monthly adjustments based on real numbers are what make a modest budget effective.

## 12. Decisions that still need to be made

Before the first campaign: target area (Lichtenburg only? North West? Gauteng? international for destination work?), monthly budget, first service to promote, whether the contact form endpoint or WhatsApp is the primary conversion, and who manages the ads account. None of these are decided in this guide — [to be confirmed with Shaney].
