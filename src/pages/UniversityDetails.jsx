import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { getUniversity, universitiesByCountry } from '../data/universities'
import { getDestination } from '../data/destinations'
import { useSeo, breadcrumbSchema } from '../utils/seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Notice from '../components/Notice'
import EnquiryForm from '../components/EnquiryForm'
import SectionHead from '../components/SectionHead'

export default function UniversityDetails() {
  const { slug } = useParams()
  const uni = getUniversity(slug)

  if (!uni) return <Navigate to="/universities" replace />

  const destination = getDestination(uni.country)
  const countryName = destination?.shortName || destination?.name || uni.country
  const trail = [
    { label: 'Home', to: '/' },
    { label: 'Universities', to: '/universities' },
    { label: uni.name },
  ]
  const siblings = universitiesByCountry(uni.country).filter((u) => u.slug !== uni.slug).slice(0, 5)

  useSeo({
    title: uni.name,
    description: `${uni.name} in ${uni.city} — subject areas, degree levels and how to approach an application, with a link to the institution's own admissions information.`,
    path: `/universities/${uni.slug}`,
    jsonLd: breadcrumbSchema(trail),
  })

  return (
    <>
      <PageHero
        kicker={`${countryName} · ${uni.type}`}
        title={uni.name}
        lead={uni.note}
        trail={trail}
        meta={
          <>
            <span>
              <strong>Location</strong> {uni.city}
            </span>
            <span>
              <strong>Setting</strong> {uni.setting}
            </span>
            {destination && (
              <span>
                <strong>Intakes</strong> {destination.intakes.join(' · ')}
              </span>
            )}
          </>
        }
        actions={
          <>
            <a className="btn btn--ghost" href={uni.website} target="_blank" rel="noreferrer noopener">
              Official website
              <ExternalLink size={15} aria-hidden="true" />
            </a>
            <a className="btn btn--gold" href="#enquire">
              Ask about this institution
            </a>
          </>
        }
      />

      <section className="section">
        <div className="container uni-detail">
          <div className="uni-detail__main">
            <Reveal>
              <h2>Subject areas taught</h2>
              <ul className="tag-row uni-detail__fields">
                {uni.fields.map((f) => (
                  <li key={f} className="tag">
                    {f}
                  </li>
                ))}
              </ul>

              <h2>Degree levels</h2>
              <ul className="tag-row uni-detail__fields">
                {uni.levels.map((l) => (
                  <li key={l} className="tag tag--gold">
                    {l}
                  </li>
                ))}
              </ul>

              <h2>How to approach an application here</h2>
              <p>
                Entry requirements at {uni.name} are set per programme rather than per institution,
                and often per faculty. Start from the programme page on the institution&rsquo;s own
                site: it carries the authoritative entry requirement, the fee for that specific
                programme and the application deadline, all of which can differ from the general
                admissions pages.
              </p>
              {destination && (
                <p>
                  Everything on our{' '}
                  <Link to={`/destinations/${destination.slug}`}>studying in {destination.name}</Link>{' '}
                  page applies here too — the {destination.visa.name.toLowerCase()} process, the
                  English language requirements and the intake calendar are set nationally rather
                  than by the institution.
                </p>
              )}

              <Notice tone="warning" title="What this page deliberately does not tell you.">
                We do not publish tuition figures, rankings, acceptance rates or scholarship amounts
                for any institution. Those change annually and differ by programme, and a stale
                figure on a consultancy website is worse than none. The institution&rsquo;s own site
                is the only reliable source.
              </Notice>

              <div className="btn-row uni-detail__actions">
                <a className="btn btn--ghost" href={uni.website} target="_blank" rel="noreferrer noopener">
                  Visit {uni.name}
                  <ExternalLink size={15} aria-hidden="true" />
                </a>
                {destination && (
                  <Link className="btn btn--ghost" to={`/destinations/${destination.slug}`}>
                    Studying in {countryName}
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                )}
              </div>
            </Reveal>
          </div>

          <aside className="uni-detail__aside">
            <Reveal delay={0.08}>
              <div className="side-panel">
                <h2>At a glance</h2>
                <dl>
                  <div>
                    <dt>Country</dt>
                    <dd>{countryName}</dd>
                  </div>
                  <div>
                    <dt>City</dt>
                    <dd>{uni.city}</dd>
                  </div>
                  <div>
                    <dt>Institution type</dt>
                    <dd>{uni.type}</dd>
                  </div>
                  <div>
                    <dt>Campus setting</dt>
                    <dd>{uni.setting}</dd>
                  </div>
                </dl>
              </div>

              {siblings.length > 0 && (
                <div className="side-panel">
                  <h2>Other institutions in {countryName}</h2>
                  <ul className="side-panel__links">
                    {siblings.map((s) => (
                      <li key={s.slug}>
                        <Link to={`/universities/${s.slug}`}>{s.name}</Link>
                      </li>
                    ))}
                  </ul>
                  <Link to={`/universities?country=${uni.country}`} className="arrow-link">
                    All {countryName} institutions
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              )}
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="section section--navy" id="enquire">
        <div className="container enquiry-split">
          <Reveal className="enquiry-split__text">
            <p className="kicker">Enquire</p>
            <h2>Ask us about {uni.name}</h2>
            <p className="lead">
              Tell us which programme you are considering and where you are in your studies. We
              will come back with whether your record supports it and what the application involves.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="enquiry-split__form">
            <EnquiryForm formName={`university-${uni.slug}`} compact topicDefault="University applications" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
