# Deployment notes

## SPA fallback routing — required

This is a client-routed single-page app. Any host serving it **must**
rewrite unknown paths to `index.html`, or a direct visit to a deep
link such as `/destinations/canada` returns the host's own 404 and
search engines never index the page.

Configuration is already included for:

| Host | File | Status |
| --- | --- | --- |
| Netlify, Cloudflare Pages | `public/_redirects` | included |
| Vercel | `vercel.json` | included |

For other hosts:

**nginx**

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**Apache** — place in `.htaccess` beside `index.html`:

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

**Amazon S3 + CloudFront** — set both the index document and the error
document to `index.html`, and map 403/404 to `/index.html` with a 200
response code in the CloudFront error pages configuration.

## Prerendering and SSR

Titles, meta descriptions, canonical URLs, Open Graph tags and
structured data are written at runtime by `src/utils/seo.js`. Google
executes JavaScript and will see them; several other crawlers and most
social-media link unfurlers will not.

If link previews or non-Google crawlers matter, add prerendering.
The content is fully static, so the simplest route is a prerender step
over the same URL list the sitemap already builds from:

1. `npm run build`
2. Serve `dist/`
3. Visit each URL in `dist/sitemap.xml` with a headless browser and
   write the resulting HTML to the matching path

`vite-plugin-prerender` or `react-snap` both do this. Migrating to a
framework with built-in SSR is the other option, and is a larger
change than it sounds — the data layer would port unchanged, but every
`useSeo` call becomes framework metadata.

## Before launch

- [ ] Replace every placeholder in `src/config/brand.js` and set each channel's `isPlaceholder` to `false`
- [ ] Set `brand.siteUrl` to the production origin — the sitemap, canonical tags and Open Graph URLs all derive from it
- [ ] Connect a form endpoint (`brand.forms.endpoint`) and set `isConfigured: true`
- [ ] Have the three legal documents reviewed, then set `lastReviewed` in `src/data/legal.js`
- [ ] Verify each destination's `verifyBeforePublishing` list against the current official sources
- [ ] Replace the Unsplash photography in `src/data/images.js` with licensed or commissioned assets
- [ ] Add real team members to `src/data/company.js`, or leave the role descriptions
- [ ] Add student stories to `src/data/successStories.js` only with written consent on file
