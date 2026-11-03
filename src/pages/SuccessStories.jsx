import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { publishedStories, storyPolicy } from '../data/successStories'
import { getDestination } from '../data/destinations'
import { images } from '../data/images'
import { useSeo, breadcrumbSchema } from '../utils/seo'
import PageHero from '../components/PageHero'
import Figure from '../components/Figure'
import Reveal from '../components/Reveal'
import ConsultationCTA from '../components/ConsultationCTA'

const trail = [{ label: 'Home', to: '/' }, { label: 'Success stories' }]

export default function SuccessStories() {
  const stories = publishedStories()

  useSeo({
    title: 'Student stories',
    description:
      'Student stories published only with written consent. Our policy on testimonials, and why this page is empty until students have given permission.',
    path: '/success-stories',
    jsonLd: breadcrumbSchema(trail),
    noIndex: stories.length === 0,
  })

  return (
    <>
      <PageHero
        kicker="Student stories"
        title={stories.length ? 'Students who have been through this' : 'An empty page, on purpose'}
        lead={
          stories.length
            ? 'Published with each student’s written permission, in their own words.'
            : 'We publish student stories only with written consent. Until students who have worked with us have given it, we would rather show you nothing than show you something we made up.'
        }
        trail={trail}
        variant={stories.length ? 'aside' : 'plain'}
        image={stories.length ? images.graduationPortrait : undefined}
      />

      {stories.length > 0 ? (
        <section className="section">
          <div className="container">
            <div className="story-list">
              {stories.map((story, i) => {
                const destination = getDestination(story.destination)
                return (
                  <Reveal
                    as="article"
                    key={story.id}
                    delay={Math.min(i * 0.06, 0.2)}
                    className={`story ${i % 2 === 1 ? 'story--flip' : ''}`}
                  >
                    {story.photo && (
                      <div className="story__media">
                        <Figure image={story.photo} ratio="4 / 5" sizes="(max-width: 860px) 100vw, 38vw" />
                      </div>
                    )}
                    <div className="story__text">
                      <p className="story__meta">
                        <span className="tag tag--gold">
                          {destination?.shortName || destination?.name || story.destination}
                        </span>
                        <span>{story.year}</span>
                      </p>
                      <h2>{story.name}</h2>
                      <p className="story__course">
                        {story.course} · {story.level}
                        <br />
                        {story.university}
                      </p>
                      {story.quote && (
                        <blockquote className="story__quote">
                          <p>{story.quote}</p>
                        </blockquote>
                      )}
                      {story.story?.map((p) => (
                        <p key={p.slice(0, 32)}>{p}</p>
                      ))}
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>
      ) : (
        <>
          <section className="section">
            <div className="container policy-block">
              <Reveal className="policy-block__text">
                <p className="kicker">Our policy</p>
                <h2>{storyPolicy.heading}</h2>
                {storyPolicy.body.map((p) => (
                  <p key={p.slice(0, 36)}>{p}</p>
                ))}
              </Reveal>
              <Reveal delay={0.08} className="policy-block__media">
                <Figure image={images.graduationCaps} ratio="3 / 4" sizes="(max-width: 900px) 100vw, 36vw" />
                <p className="figure__caption">
                  Stock photography, clearly labelled as such. Not a student we have worked with.
                </p>
              </Reveal>
            </div>
          </section>

          <section className="section section--navy">
            <div className="container">
              <div className="empty-state empty-state--dark">
                <Reveal>
                  <h2>Would you rather hear it from a student?</h2>
                  <p className="lead">{storyPolicy.alternative}</p>
                  <div className="btn-row">
                    <Link to="/book-consultation" className="btn btn--gold">
                      Book a consultation
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                    <Link to="/about" className="btn btn--ghost-light">
                      How we work
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          <section className="section section--tight">
            <div className="container">
              <Reveal className="dev-note">
                <h2>For whoever maintains this site</h2>
                <p>
                  Adding a story is a matter of appending an object to the{' '}
                  <code>successStories</code> array in <code>src/data/successStories.js</code>. The
                  shape is documented at the top of that file. Nothing renders unless{' '}
                  <code>consentOnFile</code> is <code>true</code>, and this page switches from the
                  policy layout above to the story layout automatically once the first entry is
                  added.
                </p>
              </Reveal>
            </div>
          </section>
        </>
      )}

      <ConsultationCTA
        variant="band"
        kicker="Next step"
        heading="Talk to us about your own application"
        body="The conversation covers what your record supports, what it will cost, and which intake you can realistically be ready for."
      />
    </>
  )
}
