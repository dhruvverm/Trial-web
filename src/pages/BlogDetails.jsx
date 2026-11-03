import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, Link2, Linkedin, Twitter, Facebook, Check } from 'lucide-react'
import { useState } from 'react'
import { getPost, readingMinutes, relatedPosts, tableOfContents, slugifyHeading } from '../data/blogPosts'
import { brand } from '../config/brand'
import { useSeo, breadcrumbSchema, articleSchema } from '../utils/seo'
import { src as imageSrc } from '../data/images'
import { formatDate } from '../utils/format'
import Figure from '../components/Figure'
import Reveal from '../components/Reveal'
import Breadcrumbs from '../components/Breadcrumbs'
import BlogCard from '../components/BlogCard'
import Notice from '../components/Notice'
import ConsultationCTA from '../components/ConsultationCTA'

/** Renders one structured content block. */
function Block({ block }) {
  switch (block.type) {
    case 'h2':
      return <h2 id={slugifyHeading(block.text)}>{block.text}</h2>
    case 'h3':
      return <h3>{block.text}</h3>
    case 'ul':
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      )
    case 'note':
      return <Notice tone="warning">{block.text}</Notice>
    case 'pull':
      return (
        <aside className="article-pull">
          <p>{block.text}</p>
        </aside>
      )
    default:
      return <p>{block.text}</p>
  }
}

export default function BlogDetails() {
  const { slug } = useParams()
  const post = getPost(slug)
  const [copied, setCopied] = useState(false)

  if (!post) return <Navigate to="/blog" replace />

  const path = `/blog/${post.slug}`
  const url = `${brand.siteUrl.replace(/\/$/, '')}${path}`
  const trail = [{ label: 'Home', to: '/' }, { label: 'Resources', to: '/blog' }, { label: post.title }]
  const toc = tableOfContents(post)
  const related = relatedPosts(post, 3)

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(false)
    }
  }

  useSeo({
    title: post.title,
    description: post.excerpt,
    path,
    type: 'article',
    image: imageSrc(post.image, 1200),
    jsonLd: [breadcrumbSchema(trail), articleSchema(post, path, imageSrc(post.image, 1200))],
  })

  return (
    <>
      <article className="article">
        <header className="article__head">
          <div className="container container--narrow">
            <Breadcrumbs trail={trail} />
            <Reveal>
              <p className="article__category">
                <span className="tag tag--gold">{post.category}</span>
              </p>
              <h1>{post.title}</h1>
              <p className="lead article__excerpt">{post.excerpt}</p>
              <div className="article__byline">
                <span>
                  <strong>{post.author.name}</strong>
                </span>
                <span aria-hidden="true">·</span>
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                <span aria-hidden="true">·</span>
                <span>{readingMinutes(post)} min read</span>
              </div>
            </Reveal>
          </div>

          <div className="container">
            <Reveal delay={0.06} className="article__hero">
              <Figure image={post.image} ratio="21 / 9" priority width={1600} sizes="100vw" />
            </Reveal>
          </div>
        </header>

        <div className="container article__layout">
          <aside className="article__aside">
            <div className="article__sticky">
              {toc.length > 0 && (
                <nav className="toc" aria-label="On this page">
                  <h2>On this page</h2>
                  <ol>
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`}>{item.text}</a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              <div className="share">
                <h2>Share</h2>
                <ul>
                  <li>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin size={16} aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Share on X"
                    >
                      <Twitter size={16} aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Share on Facebook"
                    >
                      <Facebook size={16} aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <button type="button" onClick={copyLink} aria-label="Copy link to this article">
                      {copied ? <Check size={16} aria-hidden="true" /> : <Link2 size={16} aria-hidden="true" />}
                    </button>
                  </li>
                </ul>
                <p aria-live="polite" className="share__status">
                  {copied ? 'Link copied' : ''}
                </p>
              </div>
            </div>
          </aside>

          <div className="article__body prose">
            {post.body.map((block, i) => (
              <Block key={`${block.type}-${i}`} block={block} />
            ))}

            <div className="article__tags">
              {post.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            {post.author.isPlaceholder && (
              <Notice tone="policy" title="Byline.">
                Published under the consultancy&rsquo;s editorial team rather than an invented
                individual author. Replace <code>author</code> in{' '}
                <code>src/data/blogPosts.js</code> with a real name once your team is published.
              </Notice>
            )}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section section--ivory">
          <div className="container">
            <Reveal className="stage-head">
              <span className="stage-head__label">Related reading</span>
              <span className="stage-head__rule" aria-hidden="true" />
            </Reveal>
            <div className="post-grid">
              {related.map((item, i) => (
                <Reveal key={item.slug} delay={i * 0.06}>
                  <BlogCard post={item} variant="compact" />
                </Reveal>
              ))}
            </div>
            <div className="blog-more">
              <Link to="/blog" className="arrow-link">
                All resources
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <ConsultationCTA
        variant="band"
        kicker="Apply this to your own case"
        heading="General guidance only takes you so far"
        body="Which of this applies to you depends on your academic record, your funding and your destination. A counselling session turns an article into a plan."
      />
    </>
  )
}
