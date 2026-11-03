import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowUpRight, Search, X } from 'lucide-react'
import { getUniversities, studyFields, degreeLevels } from '../data/universities'
import { destinations } from '../data/destinations'
import { useSeo, breadcrumbSchema } from '../utils/seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Notice from '../components/Notice'
import ConsultationCTA from '../components/ConsultationCTA'
import { images } from '../data/images'

const trail = [{ label: 'Home', to: '/' }, { label: 'Universities' }]

export default function Universities() {
  /* Filters live in the URL so a filtered view can be shared or bookmarked. */
  const [params, setParams] = useSearchParams()
  const query = params.get('q') ?? ''
  const country = params.get('country') ?? ''
  const field = params.get('field') ?? ''
  const level = params.get('level') ?? ''

  const results = useMemo(
    () => getUniversities({ query, country, field, level }),
    [query, country, field, level],
  )

  const update = (key, value) => {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true })
  }

  const hasFilters = Boolean(query || country || field || level)

  useSeo({
    title: 'University finder',
    description:
      'Search universities across Canada, the UK, Australia, the USA, Ireland, Germany and New Zealand by country, subject area and degree level.',
    path: '/universities',
    jsonLd: breadcrumbSchema(trail),
  })

  return (
    <>
      <PageHero
        kicker="University finder"
        title="A directory with nothing invented in it"
        lead="Filter by country, subject area and level. We list what is publicly verifiable — no rankings, no fee estimates, and no partnerships we do not have."
        trail={trail}
      />

      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <form className="finder" role="search" onSubmit={(e) => e.preventDefault()}>
              <div className="finder__search">
                <label htmlFor="uni-search" className="visually-hidden">
                  Search universities
                </label>
                <Search size={17} aria-hidden="true" />
                <input
                  id="uni-search"
                  type="search"
                  placeholder="Search by name, city or subject"
                  value={query}
                  onChange={(e) => update('q', e.target.value)}
                />
                {query && (
                  <button type="button" onClick={() => update('q', '')} aria-label="Clear search">
                    <X size={16} aria-hidden="true" />
                  </button>
                )}
              </div>

              <div className="finder__filters">
                <div className="finder__filter">
                  <label htmlFor="filter-country">Country</label>
                  <select id="filter-country" value={country} onChange={(e) => update('country', e.target.value)}>
                    <option value="">All countries</option>
                    {destinations.map((d) => (
                      <option key={d.slug} value={d.slug}>
                        {d.shortName || d.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="finder__filter">
                  <label htmlFor="filter-field">Study field</label>
                  <select id="filter-field" value={field} onChange={(e) => update('field', e.target.value)}>
                    <option value="">All subject areas</option>
                    {studyFields.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="finder__filter">
                  <label htmlFor="filter-level">Degree level</label>
                  <select id="filter-level" value={level} onChange={(e) => update('level', e.target.value)}>
                    <option value="">All levels</option>
                    {degreeLevels.map((l) => (
                      <option key={l} value={l}>
                        {l}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </form>
          </Reveal>

          <div className="finder__status">
            <p aria-live="polite">
              <strong>{results.length}</strong> {results.length === 1 ? 'institution' : 'institutions'}
              {hasFilters ? ' match your filters' : ' in the directory'}
            </p>
            {hasFilters && (
              <button type="button" className="arrow-link" onClick={() => setParams({}, { replace: true })}>
                Clear all filters
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          {results.length === 0 ? (
            <Reveal className="empty-state">
              <h2>No institutions match those filters</h2>
              <p>
                Try widening the subject area or removing the country filter. The directory is a
                sample rather than a complete list of institutions in each country — if you are
                looking for somewhere specific that is not here, ask us.
              </p>
              <div className="btn-row">
                <button type="button" className="btn btn--ghost" onClick={() => setParams({}, { replace: true })}>
                  Clear filters
                </button>
                <Link to="/contact" className="btn btn--gold">
                  Ask about an institution
                </Link>
              </div>
            </Reveal>
          ) : (
            <ul className="uni-list">
              {results.map((u, i) => (
                <Reveal as="li" key={u.slug} delay={Math.min(i * 0.02, 0.2)}>
                  <Link to={`/universities/${u.slug}`} className="uni-list__row">
                    <div className="uni-list__main">
                      <h2>{u.name}</h2>
                      <p className="uni-list__location">
                        {u.city} · {u.type} · {u.setting}
                      </p>
                      <ul className="tag-row uni-list__fields">
                        {u.fields.slice(0, 4).map((f) => (
                          <li key={f} className="tag">
                            {f}
                          </li>
                        ))}
                        {u.fields.length > 4 && <li className="tag">+{u.fields.length - 4} more</li>}
                      </ul>
                    </div>
                    <ArrowUpRight size={18} aria-hidden="true" className="uni-list__arrow" />
                  </Link>
                </Reveal>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <Notice tone="policy" title="About this directory.">
              Entries hold only publicly verifiable attributes — name, location, institution type,
              broad subject areas and the institution&rsquo;s own website. We deliberately do not
              publish rankings, tuition figures or acceptance rates, and listing an institution is
              not a claim of affiliation, endorsement or representation. This is sample data
              designed to be replaced by a live feed; see the notes in{' '}
              <code>src/data/universities.js</code>.
            </Notice>
          </Reveal>
        </div>
      </section>

      <ConsultationCTA
        image={images.campusRedBrick}
        kicker="Shortlisting"
        heading="A directory will not build your shortlist"
        body="Filtering a list is the easy part. The useful work is deciding which departments suit your record and your field, and which offers are realistic — which is what a counselling session is for."
      />
    </>
  )
}
