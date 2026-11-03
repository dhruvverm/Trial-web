import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Search, X } from 'lucide-react'
import { faqGroups, allFaqs } from '../data/faqs'
import { useSeo, breadcrumbSchema, faqSchema } from '../utils/seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import FAQAccordion from '../components/FAQAccordion'
import Notice from '../components/Notice'
import ConsultationCTA from '../components/ConsultationCTA'

const trail = [{ label: 'Home', to: '/' }, { label: 'FAQ' }]

const RELATED = {
  'study-abroad': [{ label: 'Study destinations', to: '/destinations' }, { label: 'Our services', to: '/services' }],
  admissions: [{ label: 'University applications', to: '/services/university-admissions' }, { label: 'University finder', to: '/universities' }],
  visas: [{ label: 'Student visa guidance', to: '/student-visa' }, { label: 'Visa application support', to: '/services/student-visa-guidance' }],
  scholarships: [{ label: 'Scholarships', to: '/scholarships' }, { label: 'Scholarship guidance', to: '/services/scholarships' }],
  'english-tests': [{ label: 'IELTS and PTE guidance', to: '/services/ielts-pte-guidance' }],
  'financial-documents': [{ label: 'Student visa guidance', to: '/student-visa' }, { label: 'Pre-departure support', to: '/services/pre-departure' }],
}

export default function FAQ() {
  const [query, setQuery] = useState('')
  const normalised = query.trim().toLowerCase()

  const matches = normalised
    ? allFaqs.filter((f) => `${f.q} ${f.a}`.toLowerCase().includes(normalised))
    : null

  useSeo({
    title: 'Frequently asked questions',
    description:
      'Questions about studying abroad, admissions, student visas, scholarships, English language tests and financial documentation.',
    path: '/faq',
    jsonLd: [breadcrumbSchema(trail), faqSchema(allFaqs)],
  })

  return (
    <>
      <PageHero
        kicker="Frequently asked questions"
        title="Thirty-two answers, grouped by where you are in the process"
        lead="Where an answer depends on a rule that changes, it says so and points at the authority that sets it rather than quoting a figure that may already be wrong."
        trail={trail}
      />

      <section className="section section--tight">
        <div className="container">
          <Reveal className="faq-search">
            <label htmlFor="faq-search" className="visually-hidden">
              Search questions
            </label>
            <Search size={17} aria-hidden="true" />
            <input
              id="faq-search"
              type="search"
              placeholder="Search all questions"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button type="button" onClick={() => setQuery('')} aria-label="Clear search">
                <X size={16} aria-hidden="true" />
              </button>
            )}
          </Reveal>

          {matches && (
            <p className="faq-search__count" aria-live="polite">
              <strong>{matches.length}</strong> {matches.length === 1 ? 'question' : 'questions'} match
              &ldquo;{query}&rdquo;
            </p>
          )}
        </div>
      </section>

      {matches ? (
        <section className="section section--tight">
          <div className="container container--narrow">
            {matches.length > 0 ? (
              <FAQAccordion items={matches} allowMultiple />
            ) : (
              <div className="empty-state">
                <h2>Nothing matched that search</h2>
                <p>
                  Try a shorter phrase, or ask us directly — questions that are not on this page are
                  usually the more interesting ones.
                </p>
                <div className="btn-row">
                  <button type="button" className="btn btn--ghost" onClick={() => setQuery('')}>
                    Clear search
                  </button>
                  <Link to="/contact" className="btn btn--gold">
                    Ask a question
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      ) : (
        <>
          <section className="section section--tight">
            <div className="container">
              <Reveal>
                <nav className="faq-jump" aria-label="Question categories">
                  <h2 className="visually-hidden">Jump to a category</h2>
                  <ul>
                    {faqGroups.map((g) => (
                      <li key={g.id}>
                        <a href={`#${g.id}`}>{g.title}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </Reveal>
            </div>
          </section>

          {faqGroups.map((group, i) => (
            <section
              key={group.id}
              id={group.id}
              className={`section ${i % 2 === 1 ? 'section--ivory' : ''}`}
            >
              <div className="container faq-split">
                <Reveal className="faq-split__aside">
                  <p className="kicker">{`0${i + 1}`}</p>
                  <h2>{group.title}</h2>
                  <p className="lead">{group.intro}</p>
                  {RELATED[group.id] && (
                    <ul className="faq-related">
                      {RELATED[group.id].map((link) => (
                        <li key={link.to}>
                          <Link to={link.to} className="arrow-link">
                            {link.label}
                            <ArrowRight size={14} aria-hidden="true" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
                <Reveal delay={0.08} className="faq-split__main">
                  <FAQAccordion items={group.items} allowMultiple />
                </Reveal>
              </div>
            </section>
          ))}

          <section className="section section--tight">
            <div className="container">
              <Reveal>
                <Notice tone="warning" title="Rules change.">
                  Immigration requirements, financial thresholds, fees, processing times and
                  post-study work rights are revised regularly in every destination we advise on.
                  Where an answer above depends on one of those, treat the linked government source
                  as authoritative and this page as orientation.
                </Notice>
              </Reveal>
            </div>
          </section>
        </>
      )}

      <ConsultationCTA
        variant="band"
        kicker="Still unanswered"
        heading="Ask us the question that is not on this page"
        body="The questions students hesitate to ask — about a weak semester, a previous refusal, a gap in their education — are usually the ones most worth asking."
      />
    </>
  )
}
