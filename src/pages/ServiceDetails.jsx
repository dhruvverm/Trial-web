import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { getService, serviceDetails } from '../data/services'
import { useSeo, breadcrumbSchema, faqSchema } from '../utils/seo'
import { src as imageSrc } from '../data/images'
import PageHero from '../components/PageHero'
import Figure from '../components/Figure'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import ProcessSteps from '../components/ProcessSteps'
import FAQAccordion from '../components/FAQAccordion'
import EnquiryForm from '../components/EnquiryForm'
import Notice from '../components/Notice'

export default function ServiceDetails() {
  const { slug } = useParams()
  const service = getService(slug)

  if (!service) return <Navigate to="/services" replace />

  const trail = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: service.name },
  ]
  const related = service.related.map((s) => serviceDetails.find((item) => item.slug === s)).filter(Boolean)

  useSeo({
    title: service.name,
    description: service.lead,
    path: `/services/${service.slug}`,
    image: imageSrc(service.image, 1200),
    jsonLd: [breadcrumbSchema(trail), faqSchema(service.faqs)],
  })

  return (
    <>
      <PageHero
        kicker={service.kicker}
        title={service.name}
        lead={service.lead}
        trail={trail}
        variant="aside"
        image={service.image}
      />

      <section className="section">
        <div className="container service-intro">
          <Reveal className="service-intro__body">
            {service.intro.map((p) => (
              <p key={p.slice(0, 36)}>{p}</p>
            ))}
          </Reveal>
          <Reveal delay={0.08} className="service-intro__deliverables">
            <h2>What you end up with</h2>
            <ul className="ticks">
              {service.deliverables.map((item) => (
                <li key={item}>
                  <Check size={16} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <SectionHead
            kicker="What this includes"
            title="The work in detail"
            body="Each item below is something we do rather than something we say. If you only want some of it, that is a conversation worth having at the start."
          />
          <div className="deflist">
            {service.includes.map((item) => (
              <Reveal key={item.title} className="deflist__row">
                <dt className="deflist__term">{item.title}</dt>
                <dd className="deflist__desc">{item.body}</dd>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <SectionHead
            kicker="The process"
            title="How this runs, step by step"
            body="Timelines vary by destination and intake. The sequence does not."
          />
          <ProcessSteps steps={service.process} layout="rows" />
        </div>
      </section>

      <section className="section">
        <div className="container limits-block">
          <Reveal className="limits-block__text">
            <p className="kicker">What this does not do</p>
            <h2>The honest boundary</h2>
            <p className="lead">{service.limits}</p>
          </Reveal>
          <Reveal delay={0.08} className="limits-block__media">
            <Figure image={service.secondaryImage} ratio="4 / 3" sizes="(max-width: 900px) 100vw, 42vw" />
          </Reveal>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container faq-split">
          <Reveal className="faq-split__aside">
            <p className="kicker">Questions</p>
            <h2>About {service.name.toLowerCase()}</h2>
            <p className="lead">What students ask before committing to this part of the process.</p>
            <Link to="/faq" className="arrow-link">
              All frequently asked questions
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={0.08} className="faq-split__main">
            <FAQAccordion items={service.faqs} defaultOpen={[0]} />
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section--tight">
          <div className="container">
            <Reveal className="stage-head">
              <span className="stage-head__label">Related services</span>
              <span className="stage-head__rule" aria-hidden="true" />
            </Reveal>
            <div className="related-services">
              {related.map((item) => (
                <Reveal as="article" key={item.slug} className="related-services__item">
                  <h3>
                    <Link to={`/services/${item.slug}`}>{item.name}</Link>
                  </h3>
                  <p>{item.lead}</p>
                  <Link to={`/services/${item.slug}`} className="arrow-link">
                    Read more
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section section--navy" id="enquire">
        <div className="container enquiry-split">
          <Reveal className="enquiry-split__text">
            <p className="kicker">Enquire</p>
            <h2>Ask about {service.name.toLowerCase()}</h2>
            <p className="lead">
              Tell us where you have got to and what you are stuck on. A counsellor reads every
              enquiry before replying.
            </p>
            <Notice tone="info">
              Please do not send financial documents, passport scans or other identity documents by
              email or through this form. We will tell you how to share them securely once a
              counsellor has been in touch.
            </Notice>
          </Reveal>
          <Reveal delay={0.08} className="enquiry-split__form">
            <EnquiryForm formName={`service-${service.slug}`} compact topicDefault={service.name} />
          </Reveal>
        </div>
      </section>
    </>
  )
}
