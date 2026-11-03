/**
 * Document head management
 * ---------------------------------------------------------------
 * A small, dependency-free alternative to react-helmet. Each page
 * calls `useSeo()` once; the hook writes the title, meta tags,
 * canonical link and any structured data, and removes what it added
 * when the route changes.
 *
 * Tags created here are marked with data-managed="seo" so a stale
 * tag from a previous route can never be left behind.
 */

import { useEffect } from 'react'
import { brand } from '../config/brand'

const MANAGED = 'data-managed'

function upsertMeta(attr, key, content) {
  if (!content) return null
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    el.setAttribute(MANAGED, 'seo')
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
  return el
}

function upsertLink(rel, href) {
  if (!href) return null
  let el = document.head.querySelector(`link[rel="${rel}"][${MANAGED}="seo"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    el.setAttribute(MANAGED, 'seo')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
  return el
}

/**
 * @param {object} options
 * @param {string}  options.title        Page title, without the brand suffix.
 * @param {string}  options.description  Meta description.
 * @param {string}  options.path         Route path, for the canonical URL.
 * @param {string} [options.image]       Absolute or CDN image URL for Open Graph.
 * @param {string} [options.type]        Open Graph type. Defaults to 'website'.
 * @param {object|object[]} [options.jsonLd] Structured data to embed.
 * @param {boolean} [options.noIndex]    Adds a robots noindex directive.
 */
export function useSeo({ title, description, path, image, type = 'website', jsonLd, noIndex = false }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${brand.name}` : brand.name
    document.title = fullTitle

    const canonical = path ? `${brand.siteUrl.replace(/\/$/, '')}${path}` : brand.siteUrl

    upsertMeta('name', 'description', description)
    upsertLink('canonical', canonical)
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:site_name', brand.name)
    upsertMeta('name', 'twitter:card', image ? 'summary_large_image' : 'summary')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', description)
    if (image) {
      upsertMeta('property', 'og:image', image)
      upsertMeta('name', 'twitter:image', image)
    }
    upsertMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow')

    let scripts = []
    if (jsonLd) {
      const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd]
      scripts = blocks.map((block) => {
        const s = document.createElement('script')
        s.type = 'application/ld+json'
        s.setAttribute(MANAGED, 'seo')
        s.textContent = JSON.stringify(block)
        document.head.appendChild(s)
        return s
      })
    }

    return () => {
      scripts.forEach((s) => s.remove())
    }
  }, [title, description, path, image, type, noIndex, JSON.stringify(jsonLd)])
}

/* ---------------- Structured data builders ---------------------- */
/* Only emit schema for facts we can actually stand behind. Contact
   details that are still placeholders are omitted entirely rather
   than published as structured data. */

export function organisationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: brand.name,
    description: brand.tagline,
    url: brand.siteUrl,
  }
  if (!brand.contact.email.isPlaceholder) schema.email = brand.contact.email.value
  if (!brand.contact.phone.isPlaceholder) schema.telephone = brand.contact.phone.value
  if (!brand.contact.office.isPlaceholder) {
    schema.address = {
      '@type': 'PostalAddress',
      streetAddress: brand.contact.office.lines.join(', '),
      addressLocality: brand.contact.office.city,
      addressCountry: brand.contact.office.country,
    }
  }
  const social = brand.social.filter((s) => !s.isPlaceholder && s.href).map((s) => s.href)
  if (social.length) schema.sameAs = social
  return schema
}

export function breadcrumbSchema(trail) {
  const base = brand.siteUrl.replace(/\/$/, '')
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.label,
      item: crumb.to ? `${base}${crumb.to}` : undefined,
    })),
  }
}

export function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}

export function articleSchema(post, path, imageUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { '@type': 'Organization', name: brand.name },
    publisher: { '@type': 'Organization', name: brand.name },
    mainEntityOfPage: `${brand.siteUrl.replace(/\/$/, '')}${path}`,
    image: imageUrl,
  }
}
