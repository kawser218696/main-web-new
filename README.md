# PomPom Hub Static Website

Static, Netlify-ready landing page for `https://pompomhub.xyz` that points adult visitors to `https://pompomhub.com`.

## Files

- `index.html` - SEO-friendly homepage with visible adult keyword and trending video sections.
- `404.html` - custom not-found page for Netlify.
- `robots.txt` - allows crawling and points to the sitemap.
- `sitemap.xml` - includes the canonical homepage URL.
- `netlify.toml` - publish settings, security headers, and custom 404 behavior.
- `assets/` - CSS, JavaScript, favicon, generated hero image, Open Graph image, and app icons.

## Deploy on Netlify

1. Upload this folder to a GitHub repository.
2. In Netlify, create a new site from that repository.
3. Use these settings:
   - Build command: leave empty
   - Publish directory: `.`
4. Add the custom domain `pompomhub.xyz`.
5. Point your domain DNS to Netlify as Netlify instructs.

## Google indexing steps

1. Verify `pompomhub.xyz` in Google Search Console. DNS verification is usually the cleanest option.
2. Submit this sitemap: `https://pompomhub.xyz/sitemap.xml`.
3. Use URL Inspection for `https://pompomhub.xyz/` and request indexing after deploy.
4. Keep the page useful and updated. Add real trending video titles and keywords in the visible sections instead of hidden keyword blocks.
5. Do not block Googlebot behind a server-side age gate. This page uses a client-side adult notice while keeping the HTML crawlable.

## Editing trending content

In `index.html`, look for:

- `id="trending-videos"` to edit the video cards.
- `id="keywords"` to edit the keyword chips.

Avoid unsafe or illegal terms. Do not add underage, coercive, or non-consensual keywords. Use only lawful 18+ categories that match the real content on the destination site.

## SEO notes

Google does not guarantee ranking from metadata alone. This site includes the technical basics: crawlable HTML, canonical URL, sitemap, robots.txt, unique title and meta description, structured data, adult labeling, responsive layout, and fast static assets.

References used:

- Google SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google technical requirements: https://developers.google.com/search/docs/essentials/technical
- Google sitemap guidance: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google explicit content guidance: https://developers.google.com/search/docs/crawling-indexing/safesearch
- Google spam policies: https://developers.google.com/search/docs/essentials/spam-policies
- RTA adult label: https://www.rtalabel.org/page.php?content=howtofaq
