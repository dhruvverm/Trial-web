import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import {
  visaIntro,
  generalProcess,
  documentPreparation,
  financialEvidence,
  commonMistakes,
  interviewPreparation,
  officialResources,
} from '../data/studentVisa'
import { images } from '../data/images'
import { useSeo, breadcrumbSchema } from '../utils/seo'
import PageHero from '../components/PageHero'
import Figure from '../components/Figure'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import ProcessSteps from '../components/ProcessSteps'
import Notice from '../components/Notice'
import ConsultationCTA from '../components/ConsultationCTA'

const trail = [{ label: 'Home', to: '/' }, { label: 'Student visa guidance' }]

export default function StudentVisa() {
  useSeo({
    title: 'Student visa guidance',
    description:
      'How student visa applications work: the general process, document preparation, financial evidence, interview preparation, common mistakes, and links to the official immigration authority for each destination.',
    path: '/student-visa',
    jsonLd: breadcrumbSchema(trail),
  })

  return (
    <>
      <PageHero
        kicker={visaIntro.kicker}
        title={visaIntro.heading}
        lead={visaIntro.lead}
        trail={trail}
        variant="overlay"
        image={images.deskFlatlay}
      />

      <section className="section">
        <div className="container visa-intro">
          <Reveal className="visa-intro__body">
            {visaIntro.paragraphs.map((p) => (
              <p key={p.slice(0, 36)}>{p}</p>
            ))}
          </Reveal>
          <Reveal delay={0.08}>
            <Notice tone="warning" title="Visa decisions are made by governments.">
              No consultancy can guarantee a visa, influence an officer, or offer a meaningful
              success rate. Anyone who tells you otherwise is selling something they cannot deliver.
              What can be controlled is whether the file is complete, consistent and verifiable.
            </Notice>
          </Reveal>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <SectionHead
            kicker="The general process"
            title="Seven stages that hold across destinations"
            body="The instrument names change — a CAS in the UK, an I-20 in the United States, a Confirmation of Enrolment in Australia — but the sequence does not."
          />
          <ProcessSteps steps={generalProcess} layout="rows" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            kicker="Document preparation"
            title="What goes into the file"
            body="Grouped the way an officer reads it. Exact requirements depend on your nationality, your country of residence and your route."
          />
          <div className="doc-groups">
            {documentPreparation.map((group, i) => (
              <Reveal as="section" key={group.title} delay={Math.min(i * 0.05, 0.2)} className="doc-groups__item">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <SectionHead
            kicker="Financial evidence"
            title={financialEvidence.heading}
            body={financialEvidence.intro}
          />
          <div className="deflist">
            {financialEvidence.points.map((p) => (
              <Reveal key={p.title} className="deflist__row">
                <dt className="deflist__term">{p.title}</dt>
                <dd className="deflist__desc">{p.body}</dd>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Notice tone="warning" title="We do not publish threshold figures.">
              Required amounts, accepted account types and holding periods are set by each
              country&rsquo;s immigration authority and revised regularly. Take the figure from the
              official source for your route — linked further down this page — and hold a margin
              above it for exchange rate movement.
            </Notice>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            kicker="Common mistakes"
            title="Eight avoidable reasons applications fail"
            body="Almost every refusal we see in well-qualified applicants comes from this list rather than from anything substantive."
          />
          <Reveal className="table-scroll">
            <table className="data-table">
              <thead>
                <tr>
                  <th scope="col">Mistake</th>
                  <th scope="col">Why it matters</th>
                </tr>
              </thead>
              <tbody>
                {commonMistakes.map((m) => (
                  <tr key={m.mistake}>
                    <th scope="row">{m.mistake}</th>
                    <td>{m.consequence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <section className="section section--forest">
        <div className="container interview-block">
          <Reveal className="interview-block__text">
            <p className="kicker">Interview preparation</p>
            <h2>{interviewPreparation.heading}</h2>
            <p className="lead">{interviewPreparation.intro}</p>
            <ul className="numbered-plain">
              {interviewPreparation.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="interview-block__media">
            <Figure image={images.adviserDesk} ratio="3 / 4" sizes="(max-width: 900px) 100vw, 34vw" />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            kicker="Official sources"
            title="Go to the authority that makes the decision"
            body="Every destination below links to the government body that sets the rules and assesses the application. Where our guidance and theirs differ, theirs is correct."
          />
          <Reveal className="table-scroll">
            <table className="data-table">
              <thead>
                <tr>
                  <th scope="col">Destination</th>
                  <th scope="col">Visa route</th>
                  <th scope="col">Official authority</th>
                </tr>
              </thead>
              <tbody>
                {officialResources.map((r) => (
                  <tr key={r.slug}>
                    <th scope="row">
                      <Link to={`/destinations/${r.slug}`}>{r.country}</Link>
                    </th>
                    <td>{r.visaName}</td>
                    <td>
                      <a className="arrow-link" href={r.href} target="_blank" rel="noreferrer noopener">
                        {r.label}
                        <ExternalLink size={13} aria-hidden="true" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <ConsultationCTA
        image={images.counsellingNotes}
        kicker="Visa file review"
        heading="Have someone read the file before the officer does"
        body="We check documents against the current requirements for your route, look for the inconsistencies that cause avoidable refusals, and prepare you for an interview where your destination includes one."
      />
    </>
  )
}
