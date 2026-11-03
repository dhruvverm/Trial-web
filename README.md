# Meridian Education Advisory

A multi-page study abroad and student visa consultancy website, built
with React, Vite and React Router.

> **The brand is a placeholder.** "Meridian Education Advisory" and every
> contact detail in `src/config/brand.js` are scaffolding. See
> [DEPLOYMENT.md](DEPLOYMENT.md) for the pre-launch checklist.

## Getting started

```bash
npm install
npm run dev
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Vite dev server with hot reload |
| `npm run build` | Production build, then generates `dist/sitemap.xml` |
| `npm run preview` | Serve the production build locally |
| `npm run sitemap` | Regenerate the sitemap without rebuilding |

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/about` | About us |
| `/destinations` | Destination index with region filter |
| `/destinations/:slug` | 7 country pages — Canada, UK, Australia, USA, Ireland, Germany, New Zealand |
| `/services` | Services, grouped by stage |
| `/services/:slug` | 6 detailed service pages |
| `/universities` | University finder — search and filters, state held in the URL |
| `/universities/:slug` | 45 institution profiles |
| `/scholarships` | Scholarship guidance and enquiry form |
| `/student-visa` | General visa process, documents, financial evidence, official sources |
| `/success-stories` | Student stories — empty by design, see below |
| `/blog` | Resource index with search, category filter and load-more |
| `/blog/:slug` | 9 articles with table of contents and sharing |
| `/contact` | Contact details and enquiry form |
| `/book-consultation` | Four-step consultation request |
| `/faq` | 32 questions in 6 groups, with search |
| `/privacy-policy`, `/terms-and-conditions`, `/disclaimer` | Legal (placeholder content) |
| anything else | 404 with navigation |

## Structure

```
src/
  config/brand.js        All business-specific values. Nothing else hard-codes
                         a name, number, address or colour.
  data/                  Content layer — plain ESM, no JSX, so build scripts
                         can import it directly.
    images.js            Image manifest with alt text travelling alongside
    destinations.js      7 countries
    services.js          10 services, 6 with detail pages
    universities.js      45 institutions + the filter/access layer
    blogPosts.js         9 articles as structured blocks
    faqs.js  scholarships.js  studentVisa.js  company.js  legal.js
    successStories.js    Empty by design
    navigation.js        Header, mobile menu and footer, from one source
  components/            Reusable UI
  layouts/MainLayout.jsx
  pages/                 One file per route
  utils/
    seo.js               Document head management + schema.org builders
    submitEnquiry.js     The single integration point for every form
  styles/
    tokens.css           Colour, type and spacing tokens
    global.css           Base, typography, layout primitives
    components.css       Component styles
    pages.css            Page compositions
    responsive.css       Cross-cutting responsive and print rules
scripts/generate-sitemap.mjs
```

## Design system

Tokens live in `src/styles/tokens.css` and are mirrored in
`brand.colors` — change both together.

- **Colour** — navy `#10243A`, forest `#174D3A`, ivory `#F7F5EF`, muted gold `#C5A46D`, charcoal `#292F35`, soft grey `#E8E9E5`
- **Type** — Source Serif 4 for display headings, Inter for body and navigation
- **Shape** — 2–3px radii only, hairline borders, shadows reserved for overlays
- **Motion** — one entrance animation (`components/Reveal.jsx`) and hover states; nothing else

`Reveal` observes intersection itself rather than using framer-motion's
`whileInView`, because `whileInView` leaves content at `opacity: 0`
forever if the element is never intersected — opening the page at an
anchor, or a restored scroll position, would hide real content. Anything
scrolled past without intersecting is shown immediately.

## Editing content

Everything is data. A new destination is an entry in
`destinations.js`; the route, the header dropdown, the footer column,
the sitemap and the homepage showcase all pick it up with no further
changes.

Country pages share one component but not one layout — `SECTION_ORDER`
and `HERO_VARIANT` in `pages/DestinationDetails.jsx` give each country a
different sequence and hero treatment, keyed off `layout` in the data.

## Honesty constraints

These are deliberate and worth preserving:

- **No invented contact details.** Channels marked `isPlaceholder` are hidden; `tel:`, `mailto:` and WhatsApp links are suppressed, and the WhatsApp button renders nothing until a real number is configured.
- **No fabricated testimonials.** `successStories.js` is empty. `/success-stories` renders the consent policy instead, and switches to the story layout automatically once an entry with `consentOnFile: true` is added.
- **No invented statistics, success rates or partnerships.** The homepage trust signals are statements about method, not numbers.
- **No current legal requirements stated as fact.** Immigration thresholds, fees, processing times and work rights change, so the content describes the *shape* of a requirement and links to the authority that sets it. Each destination carries a `verifyBeforePublishing` list.
- **No invented university data.** The directory holds name, location, type, subject areas and the official website. No rankings, fees or acceptance rates, and listing is not a claim of affiliation.
- **Forms do not fake success.** With no endpoint configured, `submitEnquiry` returns `not-configured` and the UI says plainly that nothing was sent.
- **No student data in browser storage.** Enquiries go to your backend over HTTPS and nowhere else.

## Connecting a backend

Set `forms.endpoint` and `forms.isConfigured` in `src/config/brand.js`.
Every form posts JSON to that endpoint through
`src/utils/submitEnquiry.js`:

```json
{ "form": "book-consultation", "submittedAt": "2026-11-02T10:00:00.000Z", "fullName": "…", "email": "…" }
```

Loading, success and error states are already wired. To use a CRM SDK
instead of `fetch`, replace the body of `submitEnquiry` — it is the only
place any form touches the network.

## Replacing the university directory

`getUniversities(filters)` and `getUniversity(slug)` in
`src/data/universities.js` are the only read paths. Swap them for API
calls returning the same shape and nothing else changes.

## Accessibility

Semantic landmarks, a skip link, one `h1` per page with ordered
headings beneath it, visible focus rings, accordions as real buttons
with `aria-expanded`/`aria-controls`, form errors wired with
`aria-invalid` and `aria-describedby` and conveyed as text rather than
colour alone, 16px inputs on mobile to prevent iOS zoom, and
`prefers-reduced-motion` honoured throughout.

## SEO

Per-page titles and meta descriptions, canonical URLs, Open Graph and
Twitter tags, and schema.org `EducationalOrganization`, `BreadcrumbList`,
`FAQPage` and `Article` data. Pages that should not be indexed — the 404,
and legal documents not yet reviewed — carry `noindex` and are excluded
from the sitemap.

**Deep links need host configuration.** See [DEPLOYMENT.md](DEPLOYMENT.md).
