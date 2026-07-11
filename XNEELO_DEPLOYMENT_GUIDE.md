# Xneelo Deployment Guide

> **Current status (July 2026): domain registered, hosting active, email created — website NOT deployed yet.**
> `shaneyhansen.com` is registered in Shaney's own Xneelo account with a Basic hosting package (South Africa) and the mailbox `hello@shaneyhansen.com`. The GitHub repository remains the source of truth for the website, and Pages CMS stays connected to it — deployment to Xneelo only happens once QA is complete.

## Recommended launch sequence

1. **Choose and register the final domain** in **Shaney's own Xneelo account** (so she owns it directly). Suggested domains to check for availability:
   - shaneyhansenphotography.co.za
   - shaneyhansenphotography.com
   - shaneyhansencreative.co.za
   - shaneyhansen.co.za
   - shaneyhansenstudio.co.za
2. **Set up Xneelo hosting only when ready to launch** — unless Shaney wants professional email addresses sooner, in which case hosting (or at least a mail package) can be activated earlier.
3. **Create professional email addresses** on the domain. Recommended:
   - `hello@[domain]` — general enquiries (public-facing)
   - `bookings@[domain]` — booking enquiries
   - `shaney@[domain]` — personal/direct
4. **Keep the GitHub repository as the website source of truth**, with Pages CMS connected to it for content editing.
5. **Deploy the final static Astro build to Xneelo once QA is complete** (see the deployment options below).

Work through **PRE_LAUNCH_CHECKLIST.md** before the first deployment.

## Launch details

| Item | Value |
|---|---|
| Final domain | shaneyhansen.com ✅ (registered July 2026, auto-renew on) |
| Xneelo account owner | Shaney Hansen (her own account) ✅ |
| Hosting package | Basic, hosted in South Africa ✅ |
| FTP/SFTP/SSH details | [to be confirmed — in konsoleH; store as GitHub Secrets, never in code] |
| Web root path | [to be confirmed — usually /public_html/] |
| Email addresses | hello@shaneyhansen.com ✅ (bookings@/shaney@ optional later) |
| Mail settings | IMAP mail.shaneyhansen.com :993 · SMTP smtp.shaneyhansen.com :465 (SSL) · Webmail: mail.shaneyhansen.com |
| SSL setup | Let's Encrypt active ✅ (auto-issued; Force-HTTPS + www redirect enabled in .htaccess) |
| Google Search Console verification | [to be added — Site Settings] |
| GA4 Measurement ID | [to be added — Site Settings] |
| GTM Container ID | [to be added — Site Settings] |

## How deployment works (once hosting exists)

The site builds to a plain static folder (`dist/`), which is exactly what Xneelo shared hosting serves. Two deployment options below.

## What you need from Xneelo first

- An active hosting package (any Linux/Apache package works — the site is static)
- The domain pointed at the hosting (managed in konsoleH → Domains/DNS)
- FTP/SFTP credentials (konsoleH → Manage Services → FTP). **Note:** SSH/SFTP access may need to be enabled in konsoleH or requested from Xneelo support; plain FTPS works out of the box.
- SSL certificate enabled (konsoleH offers free Let's Encrypt SSL — switch it on)

## Option 1 — Manual build and upload

1. On your computer: `npm install` then `npm run build` (set the final domain first — see "Domain" below).
2. Connect to the hosting with an FTP client (FileZilla) using your Xneelo FTP details.
3. Upload the **contents of `dist/`** (not the folder itself) into the web root — usually `public_html/`.
4. Also confirm `dist/.htaccess` was uploaded (it handles the 404 page and caching; FTP clients sometimes hide dotfiles).
5. Test:
   - Homepage loads over `https://`
   - Navigation works, including direct URLs like `/portfolio/weddings/`
   - The 404 page appears for a nonsense URL
   - Images load
   - Contact form: submits (if endpoint configured) or opens an email draft
   - WhatsApp and email links open correctly on a phone

## Option 2 — GitHub Actions automatic deploy

The repo contains `.github/workflows/deploy-xneelo.yml`. It is **manual-trigger only** (you run it from the GitHub → Actions tab and type `DEPLOY` to confirm), so nothing deploys by accident.

Setup:

1. In the GitHub repo: Settings → Secrets and variables → Actions → **New repository secret**, add:
   - `XNEELO_HOST` — e.g. `ftp.yourdomain.co.za`
   - `XNEELO_USERNAME`
   - `XNEELO_PASSWORD` (or set up an SSH key as `XNEELO_SSH_KEY` and adjust the workflow to SFTP)
   - `XNEELO_PORT` — `21` for FTPS (default) or `22` for SFTP
   - `XNEELO_REMOTE_PATH` — usually `/public_html/`
2. Optionally add a repository **variable** `SITE_URL` with the final domain.
3. Actions tab → "Deploy to Xneelo (manual)" → Run workflow → type `DEPLOY`.

Never put credentials in the code or workflow file — secrets only.

## Domain / final URL

The final domain is **shaneyhansen.com** and is already set in both places:

1. `astro.config.mjs` — `https://shaneyhansen.com` (can be overridden with the `SITE_URL` env variable at build time)
2. `public/robots.txt` — the Sitemap line

This makes canonical URLs, Open Graph URLs and the sitemap correct.

## SSL

Enable Let's Encrypt SSL in konsoleH, verify `https://` works, then uncomment the "Force HTTPS" block in `public/.htaccess` and redeploy.

## Preview hosting (optional)

For a staging preview before Xneelo goes live, the same repo can be deployed to GitHub Pages or Netlify (both free for static sites). The build-check workflow already uploads the built site as an artifact on every push for inspection.
