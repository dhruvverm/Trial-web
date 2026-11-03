import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check, FileSearch, Compass, ShieldCheck } from 'lucide-react'
import { images } from '../data/images'
import { serviceIndex } from '../data/services'
import { approach } from '../data/company'
import { faqGroups } from '../data/faqs'
import { universities } from '../data/universities'
import { destinations } from '../data/destinations'
import { sortedPosts } from '../data/blogPosts'
import { brand } from '../config/brand'
import { useSeo, organisationSchema } from '../utils/seo'
import Figure from '../components/Figure'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import ProcessSteps from '../components/ProcessSteps'
import FAQAccordion from '../components/FAQAccordion'
import ConsultationCTA from '../components/ConsultationCTA'
import DestinationShowcase from '../components/DestinationShowcase'
import BlogCard from '../components/BlogCard'
import Notice from '../components/Notice'

/* A small, honest set of trust signals. No invented statistics —
   each of these is a statement about how the practice works, which
   is something we can actually stand behind. */
const assurances = [
  { icon: Compass, title: 'Independent shortlists', body: 'Recommendations are built on fit, and any commercial relationship is disclosed when that institution is recommended.' },
  { icon: FileSearch, title: 'Checked against official sources', body: 'Visa and funding guidance is taken from the authority that sets the rules, with the link given to you.' },
  { icon: ShieldCheck, title: 'No guaranteed outcomes', body: 'Admission and visa decisions belong to universities and governments. We will not pretend otherwise.' },
]

export default function Home() {
  const featuredUniversities = universities.filter((u) =>
    ['university-of-toronto', 'university-of-edinburgh', 'university-of-melbourne', 'trinity-college-dublin', 'technical-university-of-munich', 'university-of-auckland'].includes(u.slug),
  )
  const latestPosts = sortedPosts().slice(0, 3)
  const homeFaqs = [
    faqGroups[0].items[0],
    faqGroups[2].items[0],
    faqGroups[1].items[0],
    faqGroups[3].items[0],
  ]

  useSeo({
    title: 'Study Abroad Counselling & Student Visa Guidance',
    description:
      'Independent study abroad counselling, university applications and student visa guidance for students planning to study in Canada, the UK, Australia, the USA, Ireland, Germany and New Zealand.',
    path: '/',
    jsonLd: organisationSchema(),
  })

  return (
    <>
      {/* ---------------------------------------------------- Hero */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__text">
            <Reveal>
              <p className="kicker">Study abroad advisory</p>
              <h1 className="hero__title">
                Your journey to studying abroad starts with an honest conversation
              </h1>
              <p className="lead hero__lead">
                We counsel students through course and university selection, applications,
                scholarships and student visas — across seven destinations, working from the
                official requirements that actually apply.
              </p>
              <div className="btn-row hero__actions">
                <Link to="/book-consultation" className="btn btn--gold">
                  {brand.consultation.label}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link to="/destinations" className="btn btn--ghost">
                  Explore study destinations
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="hero__media">
            <Figure
              image={images.campusQuad}
              ratio="4 / 5"
              priority
              width={1400}
              sizes="(max-width: 980px) 100vw, 46vw"
            />
          </Reveal>
        </div>

        <div className="container">
          <ul className="assurances">
            {assurances.map(({ icon: Icon, title, body }, i) => (
              <Reveal as="li" key={title} delay={0.05 * i}>
                <Icon size={19} aria-hidden="true" />
                <h2>{title}</h2>
                <p>{body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* -------------------------------------------- What we do */}
      <section className="section section--ivory">
        <div className="container">
          <div className="statement">
            <Reveal>
              <p className="kicker">What we do</p>
              <h2 className="statement__heading">
                Most of this work is research, paperwork and timing. We treat it that way.
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="statement__body">
              <p>
                Choosing where to study is presented as an inspirational decision and is mostly a
                practical one: which programmes your record supports, what you can fund without
                strain, which intake you can realistically be ready for, and whether your documents
                will survive scrutiny.
              </p>
              <p>
                We work through those questions in order, write down the reasoning, and tell you
                plainly when the answer is not yet.
              </p>
              <Link to="/about" className="arrow-link">
                How we work
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <div className="services-index">
            <Reveal className="services-index__head">
              <h3>Services</h3>
              <Link to="/services" className="arrow-link">
                All services
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </Reveal>
            <ul>
              {serviceIndex.map((service, i) => (
                <Reveal as="li" key={service.name} delay={Math.min(i * 0.03, 0.18)}>
                  {service.slug ? (
                    <Link to={`/services/${service.slug}`}>
                      <span className="services-index__stage">{service.stage}</span>
                      <span className="services-index__name">{service.name}</span>
                      <span className="services-index__summary">{service.summary}</span>
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </Link>
                  ) : (
                    <div>
                      <span className="services-index__stage">{service.stage}</span>
                      <span className="services-index__name">{service.name}</span>
                      <span className="services-index__summary">{service.summary}</span>
                    </div>
                  )}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------------------- Destinations */}
      <section className="section section--navy">
        <div className="container">
          <SectionHead
            kicker="Study destinations"
            title="Seven destinations, compared on what actually differs"
            body="Programme length, how the system is governed, when the academic year begins and what the visa process asks of you. Reputation is the least useful way to choose between them."
            action={
              <Link to="/destinations" className="arrow-link">
                Compare all destinations
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            }
          />
          <DestinationShowcase />
        </div>
      </section>

      {/* --------------------------------------- How we help you */}
      <section className="section">
        <div className="container">
          <SectionHead
            kicker="How we help you"
            title="From the first conversation to your first week on campus"
            body="Seven stages. You keep the same counsellor throughout, and the reasoning at each stage is written down so you can check it."
          />
          <ProcessSteps steps={approach} layout="rows" />
        </div>
      </section>

      {/* ------------------------------------------- Universities */}
      <section className="section section--ivory">
        <div className="container">
          <SectionHead
            kicker="University finder"
            title="A searchable directory, with nothing invented in it"
            body="Filter by country, subject area and level. We list what is publicly verifiable — no rankings, no fees, no claimed partnerships."
            action={
              <Link to="/universities" className="arrow-link">
                Open the directory
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            }
          />

          <Reveal className="table-scroll">
            <table className="data-table uni-preview">
              <caption>
                Reference information compiled for this directory. We are not affiliated with,
                endorsed by, or an official representative of any institution listed. Confirm entry
                requirements on each institution&rsquo;s own website.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Institution</th>
                  <th scope="col">Location</th>
                  <th scope="col">Type</th>
                  <th scope="col"><span className="visually-hidden">Profile</span></th>
                </tr>
              </thead>
              <tbody>
                {featuredUniversities.map((u) => (
                  <tr key={u.slug}>
                    <th scope="row">{u.name}</th>
                    <td>{u.city}</td>
                    <td>{u.type}</td>
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
        </div>
      </section>

      {/* ------------------------------- Application process band */}
      <section className="section section--forest">
        <div className="container application-band">
          <Reveal className="application-band__text">
            <p className="kicker">The application itself</p>
            <h2>Applications are lost to deadlines far more often than to grades</h2>
            <p className="lead">
              Different portals, different document formats, different reference procedures,
              different deadlines — across six or eight institutions. We run it as one project with
              a single checklist.
            </p>
            <ul className="ticks">
              {[
                'One calendar covering application, scholarship and deposit deadlines',
                'Every document in the format that specific institution asked for',
                'Statements edited across several drafts — written by you, not for you',
                'Offers compared on conditions and total cost, not just on name',
              ].map((item) => (
                <li key={item}>
                  <Check size={16} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="btn-row">
              <Link to="/services/university-admissions" className="btn btn--light">
                Application assistance
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="application-band__media">
            <Figure image={images.studentsLaptopTable} ratio="3 / 4" sizes="(max-width: 900px) 100vw, 36vw" />
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------- Stories empty state */}
      <section className="section section--tight">
        <div className="container">
          <div className="stories-note">
            <Reveal>
              <p className="kicker">Student stories</p>
              <h2>We have not published any testimonials</h2>
              <p className="lead">
                Not because there is nothing to say, but because we publish a student&rsquo;s story
                only once that student has given written permission and reviewed what we wrote.
                Until then this space stays empty rather than filled with words we invented.
              </p>
              <Link to="/success-stories" className="arrow-link">
                Read our policy on student stories
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- Resources */}
      <section className="section section--ivory">
        <div className="container">
          <SectionHead
            kicker="Resources"
            title="Guides written for students in the middle of this"
            body="Practical pieces on applications, visas, funding and arrival — the questions that come up once the brochure stage is over."
            action={
              <Link to="/blog" className="arrow-link">
                All resources
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            }
          />
          <div className="post-grid">
            {latestPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.06}>
                <BlogCard post={post} variant="compact" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- FAQ */}
      <section className="section">
        <div className="container faq-split">
          <Reveal className="faq-split__aside">
            <p className="kicker">Common questions</p>
            <h2>Before you get in touch</h2>
            <p className="lead">
              The questions students ask first. Longer answers, grouped by stage, are on the FAQ
              page.
            </p>
            <Link to="/faq" className="arrow-link">
              All frequently asked questions
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Notice tone="info">
              Immigration rules, financial thresholds and work rights change. Where an answer
              depends on a current requirement, we link to the authority that sets it instead of
              quoting a figure that may already be out of date.
            </Notice>
          </Reveal>
          <Reveal delay={0.08} className="faq-split__main">
            <FAQAccordion items={homeFaqs} defaultOpen={[0]} />
          </Reveal>
        </div>
      </section>

      <ConsultationCTA
        image={images.counsellingNotes}
        heading="Start with a conversation, not a brochure"
        body={`Bring your transcripts and a realistic budget. We will tell you which of our ${destinations.length} destinations fit, what the next six months look like, and where the honest obstacles are.`}
      />
    </>
  )
}
