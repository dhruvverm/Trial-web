/**
 * Sitemap generator
 * ---------------------------------------------------------------
 * Builds dist/sitemap.xml from the same data the app routes from, so
 * a new destination, service, university or article is included
 * automatically and the sitemap cannot drift from the router.
 *
 * Runs as part of `npm run build`, or on its own with `npm run sitemap`.
 *
 * Pages that are deliberately not indexed — the 404 route, and legal
 * pages that have not yet been reviewed — are excluded here as well
 * as carrying a noindex directive at runtime.
 */

import { writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

/* The data modules are plain ESM with no JSX, so they can be imported
   directly — no build step and no duplicated route list. */
const load = async (file) => import(pathToFileURL(resolve(root, 'src', file)).href)

const { brand } = await load('config/brand.js')
const { destinations } = await load('data/destinations.js')
const { serviceDetails } = await load('data/services.js')
const { universities } = await load('data/universities.js')
const { blogPosts } = await load('data/blogPosts.js')
const { legalPages } = await load('data/legal.js')

const origin = brand.siteUrl.replace(/\/$/, '')
const today = new Date().toISOString().slice(0, 10)

/** @type {Array<{path:string, priority:number, changefreq:string, lastmod?:string}>} */
const urls = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/about', priority: 0.7, changefreq: 'monthly' },
  { path: '/destinations', priority: 0.9, changefreq: 'monthly' },
  { path: '/services', priority: 0.9, changefreq: 'monthly' },
  { path: '/universities', priority: 0.8, changefreq: 'weekly' },
  { path: '/scholarships', priority: 0.8, changefreq: 'monthly' },
  { path: '/student-visa', priority: 0.8, changefreq: 'monthly' },
  { path: '/success-stories', priority: 0.4, changefreq: 'monthly' },
  { path: '/blog', priority: 0.8, changefreq: 'weekly' },
  { path: '/contact', priority: 0.7, changefreq: 'yearly' },
  { path: '/book-consultation', priority: 0.9, changefreq: 'yearly' },
  { path: '/faq', priority: 0.7, changefreq: 'monthly' },
]

for (const d of destinations) {
  urls.push({ path: `/destinations/${d.slug}`, priority: 0.8, changefreq: 'monthly' })
}
for (const s of serviceDetails) {
  urls.push({ path: `/services/${s.slug}`, priority: 0.7, changefreq: 'monthly' })
}
for (const u of universities) {
  urls.push({ path: `/universities/${u.slug}`, priority: 0.5, changefreq: 'monthly' })
}
for (const p of blogPosts) {
  urls.push({ path: `/blog/${p.slug}`, priority: 0.6, changefreq: 'yearly', lastmod: p.publishedAt })
}

/* Legal pages are only listed once a real review has been recorded. */
let skippedLegal = 0
for (const [slug, page] of Object.entries(legalPages)) {
  if (page.lastReviewed) {
    urls.push({ path: `/${slug}`, priority: 0.3, changefreq: 'yearly', lastmod: page.lastReviewed })
  } else {
    skippedLegal += 1
  }
}

const body = urls
  .map(
    (u) => `  <url>
    <loc>${origin}${u.path}</loc>
    <lastmod>${u.lastmod ?? today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority.toFixed(1)}</priority>
  </url>`,
  )
  .join('\n')

const document = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`

const outDir = resolve(root, 'dist')
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })
writeFileSync(resolve(outDir, 'sitemap.xml'), document, 'utf8')

/* Keep robots.txt in step with the configured origin. */
const robots = `# ${brand.name}
User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`
writeFileSync(resolve(outDir, 'robots.txt'), robots, 'utf8')

console.log(`sitemap.xml written with ${urls.length} URLs`)
if (skippedLegal) {
  console.log(
    `  ${skippedLegal} legal page(s) omitted — set lastReviewed in src/data/legal.js once reviewed.`,
  )
}
if (origin.includes('example.com')) {
  console.log('  ⚠ siteUrl is still the placeholder. Set brand.siteUrl in src/config/brand.js.')
}
