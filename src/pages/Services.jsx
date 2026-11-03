import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { serviceIndex, serviceStages } from '../data/services'
import { approach } from '../data/company'
import { images } from '../data/images'
import { useSeo, breadcrumbSchema } from '../utils/seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import ProcessSteps from '../components/ProcessSteps'
import ConsultationCTA from '../components/ConsultationCTA'
import Figure from '../components/Figure'

const trail = [{ label: 'Home', to: '/' }, { label: 'Services' }]

export default function Services() {
  useSeo({
    title: 'Services',
    description:
      'Study abroad counselling, university and course selection, application assistance, visa guidance, scholarships, IELTS and PTE guidance, financial documentation and pre-departure support.',
    path: '/services',
    jsonLd: breadcrumbSchema(trail),
  })

  return (
    <>
      <PageHero
        kicker="Services"
        title="Ten pieces of work, in the order they actually happen"
        lead="Some students want all of it. Many want two or three parts and to handle the rest themselves, which is a perfectly sensible way to use a consultancy."
        trail={trail}
        variant="aside"
        image={images.adviserDesk}
      />

      {serviceStages.map((stage, stageIndex) => {
        const stageServices = serviceIndex.filter((s) => s.stage === stage)
        if (!stageServices.length) return null

        return (
          <section
            key={stage}
            className={`section section--tight ${stageIndex % 2 === 1 ? 'section--ivory' : ''}`}
          >
            <div className="container">
              <Reveal className="stage-head">
                <span className="stage-head__label">{stage}</span>
                <span className="stage-head__rule" aria-hidden="true" />
              </Reveal>

              <div className="service-rows">
                {stageServices.map((service, i) => (
                  <Reveal
                    as="article"
                    key={service.name}
                    delay={Math.min(i * 0.05, 0.15)}
                    className="service-row"
                  >
                    <div className="service-row__head">
                      <h2>
                        {service.slug ? (
                          <Link to={`/services/${service.slug}`}>{service.name}</Link>
                        ) : (
                          service.name
                        )}
                      </h2>
                      {service.slug && (
                        <Link to={`/services/${service.slug}`} className="arrow-link">
                          Details
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </Link>
                      )}
                    </div>
                    <p className="service-row__summary">{service.summary}</p>
                    <ul className="ticks service-row__includes">
                      {service.includes.map((item) => (
                        <li key={item}>
                          <Check size={15} aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      <section className="section section--navy">
        <div className="container">
          <SectionHead
            kicker="How it fits together"
            title="One counsellor, seven stages, written reasoning at each"
            body="You can join at any stage. Students who come to us only for the visa file are common, and welcome."
          />
          <ProcessSteps steps={approach} layout="rows" />
        </div>
      </section>

      <section className="section">
        <div className="container getting-started">
          <Reveal className="getting-started__text">
            <p className="kicker">Getting started</p>
            <h2>How students usually begin</h2>
            <ol className="numbered-list">
              <li>
                <h3>Send us a short enquiry</h3>
                <p>
                  What you are studying now, where you are thinking of going, and roughly when. Two
                  or three sentences is enough.
                </p>
              </li>
              <li>
                <h3>Have the first conversation</h3>
                <p>
                  Around an hour. Bring transcripts and a realistic budget. We will tell you what
                  looks feasible and what does not.
                </p>
              </li>
              <li>
                <h3>Decide what you want help with</h3>
                <p>
                  The full process, or the parts you would rather not handle alone. You will get the
                  reasoning in writing either way.
                </p>
              </li>
            </ol>
            <div className="btn-row">
              <Link to="/book-consultation" className="btn btn--gold">
                Book a consultation
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/contact" className="btn btn--ghost">
                Send an enquiry
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="getting-started__media">
            <Figure image={images.counsellingNotes} ratio="4 / 5" sizes="(max-width: 900px) 100vw, 38vw" />
          </Reveal>
        </div>
      </section>

      <ConsultationCTA
        variant="band"
        kicker="Next step"
        heading="Not sure which of these you need?"
        body="That is a reasonable place to start. Most students do not know which parts they want help with until someone has walked them through what the next twelve months involve."
      />
    </>
  )
}
