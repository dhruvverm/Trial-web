import { useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import { blogCategories, sortedPosts } from '../data/blogPosts'
import { useSeo, breadcrumbSchema } from '../utils/seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import BlogCard from '../components/BlogCard'
import ConsultationCTA from '../components/ConsultationCTA'

const trail = [{ label: 'Home', to: '/' }, { label: 'Resources' }]
const PAGE_SIZE = 4

export default function Blog() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [visible, setVisible] = useState(PAGE_SIZE)

  const posts = sortedPosts()
  const featured = posts.find((p) => p.featured) ?? posts[0]

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return posts
      .filter((p) => p.slug !== featured.slug || q || category !== 'All')
      .filter((p) => (category === 'All' ? true : p.category === category))
      .filter((p) => (q ? `${p.title} ${p.excerpt} ${p.tags.join(' ')}`.toLowerCase().includes(q) : true))
  }, [posts, featured.slug, category, query])

  const isFiltering = Boolean(query.trim()) || category !== 'All'
  const shown = filtered.slice(0, visible)

  const reset = (updater) => {
    updater()
    setVisible(PAGE_SIZE)
  }

  useSeo({
    title: 'Resources',
    description:
      'Guides on studying abroad: university applications, student visas, scholarships, English language tests, student finance and settling in.',
    path: '/blog',
    jsonLd: breadcrumbSchema(trail),
  })

  return (
    <>
      <PageHero
        kicker="Resources"
        title="Guides for students in the middle of this"
        lead="Written for the stage after the brochures — when the question is which intake, which document, and what the officer is actually looking at."
        trail={trail}
      />

      {!isFiltering && (
        <section className="section section--tight">
          <div className="container">
            <Reveal className="stage-head">
              <span className="stage-head__label">Featured</span>
              <span className="stage-head__rule" aria-hidden="true" />
            </Reveal>
            <Reveal delay={0.05}>
              <BlogCard post={featured} variant="feature" />
            </Reveal>
          </div>
        </section>
      )}

      <section className="section section--tight">
        <div className="container">
          <Reveal className="blog-controls">
            <div className="blog-controls__search">
              <label htmlFor="blog-search" className="visually-hidden">
                Search articles
              </label>
              <Search size={17} aria-hidden="true" />
              <input
                id="blog-search"
                type="search"
                placeholder="Search articles"
                value={query}
                onChange={(e) => reset(() => setQuery(e.target.value))}
              />
              {query && (
                <button type="button" onClick={() => reset(() => setQuery(''))} aria-label="Clear search">
                  <X size={16} aria-hidden="true" />
                </button>
              )}
            </div>

            <div className="blog-controls__cats">
              <fieldset>
                <legend className="visually-hidden">Filter by category</legend>
                {['All', ...blogCategories].map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={`filter-chip ${category === c ? 'is-active' : ''}`}
                    aria-pressed={category === c}
                    onClick={() => reset(() => setCategory(c))}
                  >
                    {c}
                  </button>
                ))}
              </fieldset>
            </div>
          </Reveal>

          <p className="blog-controls__count" aria-live="polite">
            Showing <strong>{shown.length}</strong> of {filtered.length}{' '}
            {filtered.length === 1 ? 'article' : 'articles'}
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          {shown.length === 0 ? (
            <div className="empty-state">
              <h2>No articles match that</h2>
              <p>Try a different category, or clear the search to see everything.</p>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() =>
                  reset(() => {
                    setQuery('')
                    setCategory('All')
                  })
                }
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="blog-list">
              {shown.map((post, i) => (
                <Reveal key={post.slug} delay={Math.min(i * 0.04, 0.16)}>
                  <BlogCard post={post} variant="row" />
                </Reveal>
              ))}
            </div>
          )}

          {visible < filtered.length && (
            <div className="blog-more">
              <button type="button" className="btn btn--ghost" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
                Load more articles
              </button>
            </div>
          )}
        </div>
      </section>

      <ConsultationCTA
        variant="band"
        kicker="Beyond the reading"
        heading="A guide cannot read your transcripts"
        body="These articles cover what is generally true. Which of it applies to you depends on your record, your budget and your destination — which is what a counselling session is for."
      />
    </>
  )
}
