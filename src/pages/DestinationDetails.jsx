import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check, ExternalLink } from 'lucide-react'
import { getDestination } from '../data/destinations'
import { universitiesByCountry } from '../data/universities'
import { useSeo, breadcrumbSchema, faqSchema } from '../utils/seo'
import { src as imageSrc } from '../data/images'
import PageHero from '../components/PageHero'
import Figure from '../components/Figure'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import ProcessSteps from '../components/ProcessSteps'
import FAQAccordion from '../components/FAQAccordion'
import ConsultationCTA from '../components/ConsultationCTA'
import Notice from '../components/Notice'

/**
 * One component, three compositions.
 *
 * `SECTION_ORDER` gives each country a different sequence and the
 * hero/section treatments vary by `layout`, so the seven country
 * pages do not read as one template with the name swapped.
 */
const SECTION_ORDER = {
  editorial: ['intro', 'why', 'fields', 'costs', 'universities', 'admissions', 'english', 'visa', 'documents', 'timeline', 'scholarships', 'faq'],
  classic: ['intro', 'why', 'admissions', 'english', 'fields', 'universities', 'costs', 'scholarships', 'visa', 'documents', 'timeline', 'faq'],
  wide: ['intro', 'why', 'universities', 'fields', 'admissions', 'english', 'costs', 'visa', 'documents', 'scholarships', 'timeline', 'faq'],
}

const HERO_VARIANT = { editorial: 'overlay', classic: 'aside', wide: 'plain' }

export default function DestinationDetails() {
  const { slug } = useParams()
  const destination = getDestination(slug)

  if (!destination) return <Navigate to="/destinations" replace />

  const d = destination
  const name = d.shortName || d.name
  const trail = [
    { label: 'Home', to: '/' },
    { label: 'Study destinations', to: '/destinations' },
    { label: name },
  ]
  const countryUniversities = universitiesByCountry(d.slug)
  const order = SECTION_ORDER[d.layout] ?? SECTION_ORDER.classic

  useSeo({
    title: `Study in ${d.name}`,
    description: `Studying in ${d.name}: universities and courses, admission and English requirements, costs, scholarships, the ${d.visa.name.toLowerCase()} process and an application timeline.`,
    path: `/destinations/${d.slug}`,
    image: imageSrc(d.heroImage, 1200),
    jsonLd: [breadcrumbSchema(trail), faqSchema(d.faqs)],
  })

  /* ---- Section renderers -------------------------------------- */
  const sections = {
    intro: (
      <section className="section" key="intro">
        <div className="container country-intro">
          <Reveal className="country-intro__body">
            {d.intro.map((p) => (
              <p key={p.slice(0, 36)}>{p}</p>
            ))}
          </Reveal>
          <Reveal delay={0.08} className="country-intro__facts">
            <dl>
              <div>
                <dt>Region</dt>
                <dd>{d.region}</dd>
              </div>
              <div>
                <dt>Language of instruction</dt>
                <dd>{d.language}</dd>
              </div>
              <div>
                <dt>Main intakes</dt>
                <dd>{d.intakes.join(', ')}</dd>
              </div>
              <div>
                <dt>Student visa route</dt>
                <dd>{d.visa.name}</dd>
              </div>
            </dl>
            <a className="arrow-link" href={d.visa.official.href} target="_blank" rel="noreferrer noopener">
              {d.visa.official.label}
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </section>
    ),

    why: (
      <section className={`section ${d.accent === 'forest' ? 'section--forest' : 'section--navy'}`} key="why">
        <div className="container">
          <SectionHead
            kicker={`Why ${name}`}
            title={`What makes studying in ${name} different`}
            body={d.cardNote}
          />
          <div className="why-grid">
            {d.whyStudy.map((item, i) => (
              <Reveal as="article" key={item.title} delay={Math.min(i * 0.05, 0.2)} className="why-grid__item">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    ),

    fields: (
      <section className="section section--ivory" key="fields">
        <div className="container">
          <SectionHead
            kicker="Popular courses and study fields"
            title={`What students most often study in ${name}`}
            body="Popularity is not the same as suitability. These are the fields we are asked about most, with the thing worth knowing about each."
          />
          <div className="deflist">
            {d.popularFields.map((f) => (
              <Reveal key={f.name} className="deflist__row">
                <dt className="deflist__term">{f.name}</dt>
                <dd className="deflist__desc">{f.note}</dd>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    ),

    universities: (
      <section className="section" key="universities">
        <div className="container">
          <SectionHead
            kicker="University selection"
            title={d.universityGuidance.intro}
            titleWide
            body={
              <ul className="ticks">
                {d.universityGuidance.points.map((p) => (
                  <li key={p}>
                    <Check size={16} aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            }
          />

          {countryUniversities.length > 0 && (
            <Reveal className="table-scroll country-unis">
              <table className="data-table">
                <caption>
                  Reference information only. We claim no affiliation with, endorsement by or
                  representation of any institution listed. Confirm programmes and entry
                  requirements on each institution&rsquo;s own website.
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Institution</th>
                    <th scope="col">Location</th>
                    <th scope="col">Setting</th>
                    <th scope="col"><span className="visually-hidden">Profile</span></th>
                  </tr>
                </thead>
                <tbody>
                  {countryUniversities.map((u) => (
                    <tr key={u.slug}>
                      <th scope="row">{u.name}</th>
                      <td>{u.city}</td>
                      <td>{u.setting}</td>
                      <td className="uni-preview__action">
                        <Link to={`/universities/${u.slug}`} className="arrow-link">
                          Profile
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          )}
        </div>
      </section>
    ),

    admissions: (
      <section className="section section--ivory" key="admissions">
        <div className="container">
          <SectionHead
            kicker="Admission requirements"
            title={`What ${name} institutions ask for`}
            body="Requirements are set per programme rather than per country. This is the shape of a typical application; the programme page is always the authority."
          />
          <div className="deflist">
            {d.admissionRequirements.map((r) => (
              <Reveal key={r.label} className="deflist__row">
                <dt className="deflist__term">{r.label}</dt>
                <dd className="deflist__desc">{r.detail}</dd>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    ),

    english: (
      <section className="section" key="english">
        <div className="container english-block">
          <Reveal className="english-block__text">
            <p className="kicker">English language requirements</p>
            <h2>Two requirements, not one</h2>
            <p className="lead">{d.englishTests.intro}</p>
            <h3>Commonly accepted tests</h3>
            <ul className="tag-row english-block__tests">
              {d.englishTests.accepted.map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
            <Notice tone="warning">{d.englishTests.note}</Notice>
            <Link to="/services/ielts-pte-guidance" className="arrow-link">
              IELTS and PTE guidance
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={0.08} className="english-block__media">
            <Figure image={d.secondaryImage} ratio="3 / 4" sizes="(max-width: 900px) 100vw, 36vw" />
          </Reveal>
        </div>
      </section>
    ),

    costs: (
      <section className="section section--ivory" key="costs">
        <div className="container">
          <SectionHead
            kicker="Tuition and living costs"
            title="What you will be paying for, and where the figures come from"
            body={d.costs.intro}
          />
          <Reveal className="table-scroll">
            <table className="data-table">
              <thead>
                <tr>
                  <th scope="col">Cost</th>
                  <th scope="col">What determines it</th>
                </tr>
              </thead>
              <tbody>
                {d.costs.rows.map((row) => (
                  <tr key={row.item}>
                    <th scope="row">{row.item}</th>
                    <td>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <Reveal>
            <Notice tone="warning" title="No figures on this page.">
              {d.costs.caveat}
            </Notice>
          </Reveal>
        </div>
      </section>
    ),

    scholarships: (
      <section className="section" key="scholarships">
        <div className="container">
          <SectionHead
            kicker="Scholarships and funding"
            title={`Funding study in ${name}`}
            body={d.scholarships.intro}
            action={
              <Link to="/scholarships" className="arrow-link">
                Scholarship guidance
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            }
          />
          <div className="funding-list">
            {d.scholarships.items.map((item, i) => (
              <Reveal as="article" key={item.name} delay={Math.min(i * 0.05, 0.2)} className="funding-list__item">
                <h3>{item.name}</h3>
                <p>{item.body}</p>
                {item.href && (
                  <a className="arrow-link" href={item.href} target="_blank" rel="noreferrer noopener">
                    Official information
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    ),

    visa: (
      <section className={`section ${d.accent === 'forest' ? 'section--forest' : 'section--navy'}`} key="visa">
        <div className="container">
          <SectionHead
            kicker="Student visa"
            title={d.visa.name}
            body={d.visa.intro}
            action={
              <a className="arrow-link" href={d.visa.official.href} target="_blank" rel="noreferrer noopener">
                {d.visa.official.label}
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            }
          />
          <ProcessSteps steps={d.visa.steps} layout="rows" />
          <Reveal>
            <Notice tone="warning" title="Visa decisions are made by government authorities.">
              No consultancy can guarantee a visa or influence a decision. The requirements, fees
              and processing times for this route change — check the official source above before
              acting on anything here.
            </Notice>
          </Reveal>
        </div>
      </section>
    ),

    documents: (
      <section className="section" key="documents">
        <div className="container document-block">
          <Reveal className="document-block__text">
            <p className="kicker">Required documentation</p>
            <h2>What a complete {name} application file contains</h2>
            <p className="lead">
              An indicative list. Exact requirements depend on your nationality, your country of
              residence and your programme, and are specified by the authority handling your
              application.
            </p>
            <Link to="/student-visa" className="arrow-link">
              General visa documentation guidance
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={0.08} className="document-block__list">
            <ol>
              {d.documents.map((doc) => (
                <li key={doc}>{doc}</li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>
    ),

    timeline: (
      <section className="section section--ivory" key="timeline">
        <div className="container">
          <SectionHead
            kicker="Application timeline"
            title={`Planning backwards from a ${name} intake`}
            body="Count backwards from the intake date rather than forwards from today. If the arithmetic puts the starting point in the past, you have found the wrong intake — early enough to change it."
          />
          <ProcessSteps steps={d.timeline} layout="rows" labelKey="phase" bodyKey="detail" />
        </div>
      </section>
    ),

    faq: (
      <section className="section" key="faq">
        <div className="container faq-split">
          <Reveal className="faq-split__aside">
            <p className="kicker">Questions about {name}</p>
            <h2>What students ask us</h2>
            <p className="lead">
              The questions that come up most often once a shortlist starts taking shape.
            </p>
            <Link to="/faq" className="arrow-link">
              All frequently asked questions
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={0.08} className="faq-split__main">
            <FAQAccordion items={d.faqs} defaultOpen={[0]} />
          </Reveal>
        </div>
      </section>
    ),
  }

  return (
    <>
      <PageHero
        kicker={`Study in ${d.name}`}
        title={`Studying in ${d.name}`}
        lead={d.summary}
        trail={trail}
        variant={HERO_VARIANT[d.layout] ?? 'aside'}
        tone={d.layout === 'wide' ? 'navy' : 'ivory'}
        image={d.heroImage}
        meta={
          <>
            <span>
              <strong>Intakes</strong> {d.intakes.join(' · ')}
            </span>
            <span>
              <strong>Visa route</strong> {d.visa.name}
            </span>
            <span>
              <strong>Instruction</strong> {d.language}
            </span>
          </>
        }
      />

      {order.map((key) => sections[key])}

      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <Notice tone="policy" title="Before this page goes live.">
              A counsellor should verify the following against current official sources for{' '}
              {d.name}: {d.verifyBeforePublishing.join('; ').toLowerCase()}. This note is rendered
              from <code>verifyBeforePublishing</code> in the destination data and can be removed
              once the checks are recorded.
            </Notice>
          </Reveal>
        </div>
      </section>

      <ConsultationCTA
        image={d.tertiaryImage}
        kicker={`${name} consultation`}
        heading={`Talk through a ${name} application`}
        body={`We will look at whether your record supports the programmes you are considering, what the ${d.visa.name.toLowerCase()} will require of you, and which intake you can realistically be ready for.`}
      />
    </>
  )
}
