import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { destinations } from '../data/destinations'
import { images } from '../data/images'
import { useSeo, breadcrumbSchema } from '../utils/seo'
import PageHero from '../components/PageHero'
import Figure from '../components/Figure'
import Reveal from '../components/Reveal'
import ConsultationCTA from '../components/ConsultationCTA'
import Notice from '../components/Notice'
import { ordinal } from '../utils/format'

const trail = [{ label: 'Home', to: '/' }, { label: 'Study destinations' }]

const REGIONS = ['All regions', ...Array.from(new Set(destinations.map((d) => d.region)))]

export default function Destinations() {
  const [region, setRegion] = useState('All regions')

  const visible = useMemo(
    () => (region === 'All regions' ? destinations : destinations.filter((d) => d.region === region)),
    [region],
  )

  useSeo({
    title: 'Study destinations',
    description:
      'Compare studying in Canada, the UK, Australia, the USA, Ireland, Germany and New Zealand — programme length, admission systems, costs and student visa routes.',
    path: '/destinations',
    jsonLd: breadcrumbSchema(trail),
  })

  return (
    <>
      <PageHero
        kicker="Study destinations"
        title="Seven destinations, and the structural differences that actually matter"
        lead="Programme length, how the system is governed, when the academic year starts and what the visa process asks of you. These differ far more than the marketing does."
        trail={trail}
      />

      <section className="section section--tight">
        <div className="container">
          <Reveal className="filter-bar">
            <fieldset>
              <legend className="visually-hidden">Filter destinations by region</legend>
              {REGIONS.map((r) => (
                <button
                  key={r}
                  type="button"
                  className={`filter-chip ${region === r ? 'is-active' : ''}`}
                  aria-pressed={region === r}
                  onClick={() => setRegion(r)}
                >
                  {r}
                </button>
              ))}
            </fieldset>
            <p className="filter-bar__count" aria-live="polite">
              {visible.length} {visible.length === 1 ? 'destination' : 'destinations'}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="destination-list">
            {visible.map((d, i) => (
              <Reveal
                as="article"
                key={d.slug}
                delay={Math.min(i * 0.05, 0.2)}
                className={`destination-row ${i % 2 === 1 ? 'destination-row--flip' : ''}`}
              >
                <div className="destination-row__media">
                  <Figure image={d.cardImage} ratio="4 / 3" sizes="(max-width: 860px) 100vw, 46vw" />
                </div>
                <div className="destination-row__text">
                  <p className="destination-row__index">
                    <span>{ordinal(i + 1)}</span>
                    <span className="tag">{d.region}</span>
                  </p>
                  <h2>
                    <Link to={`/destinations/${d.slug}`}>{d.name}</Link>
                  </h2>
                  <p className="lead">{d.summary}</p>
                  <ul className="destination-row__highlights">
                    {d.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <dl className="destination-row__facts">
                    <div>
                      <dt>Language of instruction</dt>
                      <dd>{d.language}</dd>
                    </div>
                    <div>
                      <dt>Main intakes</dt>
                      <dd>{d.intakes.join(', ')}</dd>
                    </div>
                  </dl>
                  <Link to={`/destinations/${d.slug}`} className="arrow-link">
                    Studying in {d.shortName || d.name}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <Notice tone="warning" title="Rules change, and so do the numbers.">
              Immigration requirements, financial thresholds, fees, processing times and post-study
              work rights are revised regularly in every destination on this page. Each country page
              links directly to the government authority that sets them — treat that as the source,
              and this site as orientation.
            </Notice>
          </Reveal>
        </div>
      </section>

      <ConsultationCTA
        image={images.counselling}
        kicker="Not sure which fits"
        heading="Narrowing seven down to two"
        body="Most students arrive with a country already in mind. Sometimes that instinct is right. A counselling session tests it against your record, your budget and what you want to do afterwards."
      />
    </>
  )
}
