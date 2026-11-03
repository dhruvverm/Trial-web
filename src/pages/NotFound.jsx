import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { destinations } from '../data/destinations'
import { useSeo } from '../utils/seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'

export default function NotFound() {
  useSeo({
    title: 'Page not found',
    description: 'The page you were looking for could not be found.',
    path: '/404',
    noIndex: true,
  })

  return (
    <>
      <PageHero
        kicker="404"
        title="That page does not exist"
        lead="The link may be out of date, or the address may have been mistyped. Here is where most people are heading."
        trail={[{ label: 'Home', to: '/' }, { label: 'Page not found' }]}
      />

      <section className="section">
        <div className="container not-found">
          <Reveal className="not-found__col">
            <h2>Popular pages</h2>
            <ul>
              <li>
                <Link to="/destinations">Study destinations</Link>
              </li>
              <li>
                <Link to="/services">Our services</Link>
              </li>
              <li>
                <Link to="/universities">University finder</Link>
              </li>
              <li>
                <Link to="/student-visa">Student visa guidance</Link>
              </li>
              <li>
                <Link to="/scholarships">Scholarships</Link>
              </li>
              <li>
                <Link to="/faq">Frequently asked questions</Link>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="not-found__col">
            <h2>Destinations</h2>
            <ul>
              {destinations.map((d) => (
                <li key={d.slug}>
                  <Link to={`/destinations/${d.slug}`}>Studying in {d.name}</Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.14} className="not-found__col">
            <h2>Still stuck?</h2>
            <p>
              Tell us what you were looking for and we will point you at it — or write it, if it is
              not there yet.
            </p>
            <Link to="/contact" className="btn btn--gold">
              Contact us
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
