import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import {
  scholarshipTypes,
  eligibilityFactors,
  namedSchemes,
  applicationTips,
  requiredDocuments,
} from '../data/scholarships'
import { images } from '../data/images'
import { useSeo, breadcrumbSchema } from '../utils/seo'
import PageHero from '../components/PageHero'
import Figure from '../components/Figure'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import Notice from '../components/Notice'
import EnquiryForm from '../components/EnquiryForm'

const trail = [{ label: 'Home', to: '/' }, { label: 'Scholarships' }]

export default function Scholarships() {
  useSeo({
    title: 'Scholarships and funding',
    description:
      'How scholarships for international students actually work — types of award, eligibility, application tips, required documents and the national schemes worth knowing about.',
    path: '/scholarships',
    jsonLd: breadcrumbSchema(trail),
  })

  return (
    <>
      <PageHero
        kicker="Scholarships"
        title="Fewer applications, better prepared, aimed at awards you can actually win"
        lead="Everyone applies to the famous schemes. The awards with realistic odds are usually the ones that are badly advertised — which is where most of the useful work is."
        trail={trail}
        variant="aside"
        image={images.booksApple}
      />

      <section className="section">
        <div className="container scholarship-intro">
          <Reveal className="scholarship-intro__body">
            <p>
              Scholarship searching tends to go one of two ways. Either a student applies to nothing
              because the headline schemes look unreachable, or they apply to forty things
              indiscriminately and prepare none of them properly. Both produce the same result.
            </p>
            <p>
              The better approach is narrower: work out what you are genuinely eligible for,
              including the departmental awards nobody advertises, and prepare a small number of
              applications properly.
            </p>
            <p>
              It is also worth being plain about the realistic outcome. For most taught postgraduate
              students, a partial fee reduction is what funding looks like. Full funding is
              concentrated at doctoral level and in a small number of national schemes.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="scholarship-intro__notice">
            <Notice tone="warning" title="Nothing here is a promise.">
              Scholarship decisions are made by universities, governments and foundations. No
              consultancy can influence them or guarantee an award, and we do not claim past awards
              as our own achievement. Build your plan on funding you have secured, not on funding
              you hope for.
            </Notice>
          </Reveal>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <SectionHead
            kicker="Types of scholarship"
            title="Seven instruments, with different obligations attached"
            body="The terminology matters. A scholarship, a fellowship, an assistantship and a tuition waiver are different things, and only one of them involves work."
          />
          <Reveal className="table-scroll">
            <table className="data-table">
              <thead>
                <tr>
                  <th scope="col">Award type</th>
                  <th scope="col">Assessed on</th>
                  <th scope="col">What it is</th>
                  <th scope="col">Mostly at</th>
                </tr>
              </thead>
              <tbody>
                {scholarshipTypes.map((t) => (
                  <tr key={t.name}>
                    <th scope="row">{t.name}</th>
                    <td>{t.basis}</td>
                    <td>{t.body}</td>
                    <td>{t.appliesTo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            kicker="Eligibility"
            title="What determines whether you can apply at all"
            body="Mapping these against your profile before writing anything is the single highest-return hour in the whole process."
          />
          <div className="deflist">
            {eligibilityFactors.map((f) => (
              <Reveal key={f.factor} className="deflist__row">
                <dt className="deflist__term">{f.factor}</dt>
                <dd className="deflist__desc">{f.detail}</dd>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <SectionHead
            kicker="Country-specific schemes"
            title="National programmes worth knowing about"
            body="Long-running government and government-backed schemes. Eligibility, deadlines and value change annually, so each one links to the body that administers it rather than repeating details here."
          />
          <div className="scheme-list">
            {namedSchemes.map((scheme, i) => (
              <Reveal as="article" key={scheme.name} delay={Math.min(i * 0.04, 0.2)} className="scheme-list__item">
                <p className="scheme-list__meta">
                  <span className="tag tag--gold">{scheme.country}</span>
                  <span>{scheme.level}</span>
                </p>
                <h3>{scheme.name}</h3>
                <p>{scheme.body}</p>
                <a className="arrow-link" href={scheme.href} target="_blank" rel="noreferrer noopener">
                  Official information
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            kicker="Application tips"
            title="Six things that change the odds"
            body="None of these are secrets. They are the things students skip because the deadline felt further away than it was."
          />
          <div className="tips-grid">
            {applicationTips.map((tip, i) => (
              <Reveal as="article" key={tip.title} delay={Math.min(i * 0.05, 0.2)} className="tips-grid__item">
                <span className="tips-grid__num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3>{tip.title}</h3>
                <p>{tip.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container document-block">
          <Reveal className="document-block__text">
            <p className="kicker">Required documents</p>
            <h2>What a scholarship application usually asks for</h2>
            <p className="lead">
              Indicative rather than exhaustive — each scheme sets its own list, and the
              scheme&rsquo;s own guidance is the authority.
            </p>
            <Link to="/services/scholarships" className="arrow-link">
              How we help with scholarship applications
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={0.08} className="document-block__list">
            <ol>
              {requiredDocuments.map((doc) => (
                <li key={doc}>{doc}</li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="section section--navy" id="enquire">
        <div className="container enquiry-split">
          <Reveal className="enquiry-split__text">
            <p className="kicker">Scholarship enquiry</p>
            <h2>Find out what you are eligible for</h2>
            <p className="lead">
              Tell us your qualification, your field, your intended level of study and your
              nationality. Those four things determine most of what is open to you.
            </p>
            <Figure image={images.libraryReading} ratio="16 / 9" sizes="(max-width: 900px) 100vw, 42vw" />
          </Reveal>
          <Reveal delay={0.08} className="enquiry-split__form">
            <EnquiryForm formName="scholarship-enquiry" compact topicDefault="Scholarships and funding" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
