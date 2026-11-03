import { Link } from 'react-router-dom'
import { getLegalPage } from '../data/legal'
import { legalNav } from '../data/navigation'
import { brand } from '../config/brand'
import { useSeo, breadcrumbSchema } from '../utils/seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Notice from '../components/Notice'
import { formatDate } from '../utils/format'

/**
 * Shared renderer for the three legal routes. Content comes from
 * src/data/legal.js, which carries clearly marked placeholder text.
 */
export default function LegalPage({ slug }) {
  const page = getLegalPage(slug)
  const trail = [{ label: 'Home', to: '/' }, { label: page.title }]
  const path = `/${slug}`

  useSeo({
    title: page.title,
    description: page.lead,
    path,
    jsonLd: breadcrumbSchema(trail),
    noIndex: !page.lastReviewed,
  })

  return (
    <>
      <PageHero kicker={page.kicker} title={page.title} lead={page.lead} trail={trail} />

      <section className="section">
        <div className="container legal-layout">
          <div className="legal-layout__main prose">
            <Reveal>
              {!page.lastReviewed && (
                <Notice tone="warning" title="Placeholder content — not legal advice.">
                  This document is a structural draft showing what such a policy normally covers. It
                  is not jurisdiction-specific and has not been reviewed by a lawyer. Have it
                  drafted or reviewed against the law applying to {brand.legalName} before
                  publishing, then set <code>lastReviewed</code> in{' '}
                  <code>src/data/legal.js</code>. While that field is empty this page is served with
                  a <code>noindex</code> directive.
                </Notice>
              )}

              {page.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.body?.map((p) => (
                    <p key={p.slice(0, 36)}>{p}</p>
                  ))}
                  {section.list && (
                    <ul>
                      {section.list.map((item) => (
                        <li key={item.slice(0, 36)}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <h2>Contact</h2>
              <p>
                Questions about this document can be sent through our{' '}
                <Link to="/contact">contact page</Link>. Add a dedicated postal address and email
                address here if the applicable law requires a specific contact route for these
                requests.
              </p>
            </Reveal>
          </div>

          <aside className="legal-layout__aside">
            <Reveal delay={0.08}>
              <div className="side-panel">
                <h2>Document status</h2>
                <dl>
                  <div>
                    <dt>Last reviewed</dt>
                    <dd>{page.lastReviewed ? formatDate(page.lastReviewed) : 'Not yet reviewed'}</dd>
                  </div>
                  <div>
                    <dt>Applies to</dt>
                    <dd>{brand.legalName}</dd>
                  </div>
                  <div>
                    <dt>Governing law</dt>
                    <dd>To be specified</dd>
                  </div>
                </dl>
              </div>

              <div className="side-panel">
                <h2>Other documents</h2>
                <ul className="side-panel__links">
                  {legalNav
                    .filter((l) => l.to !== path)
                    .map((l) => (
                      <li key={l.to}>
                        <Link to={l.to}>{l.label}</Link>
                      </li>
                    ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  )
}
