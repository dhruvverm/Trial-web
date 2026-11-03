import { Check } from 'lucide-react'
import {
  aboutIntro,
  mission,
  principles,
  approach,
  whyStudentsChooseUs,
  team,
  teamRoles,
  commitments,
} from '../data/company'
import { images } from '../data/images'
import { brand } from '../config/brand'
import { useSeo, breadcrumbSchema } from '../utils/seo'
import PageHero from '../components/PageHero'
import Figure from '../components/Figure'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import ProcessSteps from '../components/ProcessSteps'
import ConsultationCTA from '../components/ConsultationCTA'
import Notice from '../components/Notice'

const trail = [{ label: 'Home', to: '/' }, { label: 'About' }]

export default function About() {
  useSeo({
    title: 'About us',
    description:
      'An independent study abroad consultancy: how we counsel students, how we handle commercial relationships, and what we will not promise.',
    path: '/about',
    jsonLd: breadcrumbSchema(trail),
  })

  return (
    <>
      <PageHero
        kicker={aboutIntro.kicker}
        title={aboutIntro.heading}
        lead={aboutIntro.lead}
        trail={trail}
        variant="aside"
        image={aboutIntro.image}
      />

      {/* ------------------------------------------------ The practice */}
      <section className="section">
        <div className="container about-intro">
          <Reveal className="about-intro__body">
            {aboutIntro.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </Reveal>
          <Reveal delay={0.08} className="about-intro__aside">
            <div className="pull-quote">
              <p>{mission.body}</p>
              <cite>{mission.heading}</cite>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------- Principles */}
      <section className="section section--ivory">
        <div className="container">
          <SectionHead
            kicker="How we work"
            title="Six things that shape the advice you get"
            body="International education advice has an incentive problem. These are the commitments we have built the practice around, and they are testable rather than decorative."
          />
          <div className="principles">
            {principles.map((p, i) => (
              <Reveal as="article" key={p.title} delay={Math.min(i * 0.05, 0.2)} className="principles__item">
                <span className="principles__rule" aria-hidden="true" />
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------- Student-first philosophy */}
      <section className="section section--navy">
        <div className="container philosophy">
          <Reveal className="philosophy__media">
            <Figure image={images.studentsTalking} ratio="4 / 5" sizes="(max-width: 900px) 100vw, 38vw" />
          </Reveal>
          <Reveal delay={0.08} className="philosophy__text">
            <p className="kicker">Student-first counselling</p>
            <h2>The student decides. Our job is to make that decision an informed one.</h2>
            <p className="lead">
              A counsellor who tells you only what you want to hear is not being kind. The cost of
              an over-optimistic shortlist is a wasted year, a refused visa, or a programme that was
              never the right fit.
            </p>
            <ul className="ticks">
              {whyStudentsChooseUs.map((item) => (
                <li key={item.title}>
                  <Check size={16} aria-hidden="true" />
                  <span>
                    <strong>{item.title}.</strong> {item.body}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ----------------------------------------- Counselling workflow */}
      <section className="section">
        <div className="container">
          <SectionHead
            kicker="Counselling and application workflow"
            title="What working with us actually looks like"
            body="Seven stages with one counsellor throughout. Each stage produces something written, so you can check the reasoning rather than take it on trust."
          />
          <ProcessSteps steps={approach} layout="rows" />
        </div>
      </section>

      {/* -------------------------------------------------------- Team */}
      <section className="section section--ivory">
        <div className="container">
          <SectionHead
            kicker="The team"
            title={team.length ? 'Who you will work with' : 'Who you will work with'}
            body={
              team.length
                ? 'One counsellor holds your case from the first conversation to arrival.'
                : 'One counsellor holds your case from the first conversation to arrival, supported by the roles below.'
            }
          />

          {team.length > 0 ? (
            <div className="team-grid">
              {team.map((member, i) => (
                <Reveal as="article" key={member.id} delay={i * 0.05} className="team-card">
                  {member.photo && <Figure image={member.photo} ratio="4 / 5" width={640} sizes="(max-width: 760px) 50vw, 260px" />}
                  <h3>{member.name}</h3>
                  <p className="team-card__role">{member.role}</p>
                  <p>{member.bio}</p>
                  {member.qualifications?.length > 0 && (
                    <ul className="team-card__quals">
                      {member.qualifications.map((q) => (
                        <li key={q}>{q}</li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              ))}
            </div>
          ) : (
            <>
              <div className="deflist">
                {teamRoles.map((role) => (
                  <Reveal key={role.role} className="deflist__row">
                    <dt className="deflist__term">{role.role}</dt>
                    <dd className="deflist__desc">{role.body}</dd>
                  </Reveal>
                ))}
              </div>
              <Reveal>
                <Notice tone="policy" title="No team members are published yet.">
                  We have not filled this section with stock photographs and invented biographies.
                  Real counsellor profiles, with their actual qualifications, are added in{' '}
                  <code>src/data/company.js</code> and will replace the role descriptions above.
                </Notice>
              </Reveal>
            </>
          )}
        </div>
      </section>

      {/* -------------------------------------------------- Commitments */}
      <section className="section">
        <div className="container commitments">
          <Reveal className="commitments__text">
            <p className="kicker">Plainly stated</p>
            <h2>{commitments.heading}</h2>
            <p className="lead">
              Worth putting in writing, because every item on this list is something students are
              routinely offered elsewhere.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="commitments__list">
            <ol>
              {commitments.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <ConsultationCTA
        variant="band"
        kicker="Work with us"
        heading="Bring us a difficult question"
        body={`The first conversation costs you an hour. If ${brand.shortName} is not the right fit, or if the honest answer is to wait a year, we will say so then rather than after you have paid a deposit.`}
      />
    </>
  )
}
