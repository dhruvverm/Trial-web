import { Link } from 'react-router-dom'
import { readingMinutes } from '../data/blogPosts'
import { formatDateShort } from '../utils/format'
import Figure from './Figure'

/**
 * Article teaser. `variant`:
 *   'feature' — large, image-led, for the top of /blog
 *   'row'     — ruled horizontal row, the default listing shape
 *   'compact' — stacked, for related-article sidebars
 */
export default function BlogCard({ post, variant = 'row' }) {
  const meta = (
    <p className="blog-card__meta">
      <span className="tag">{post.category}</span>
      <span>{formatDateShort(post.publishedAt)}</span>
      <span aria-hidden="true">·</span>
      <span>{readingMinutes(post)} min read</span>
    </p>
  )

  if (variant === 'feature') {
    return (
      <article className="blog-card blog-card--feature">
        <Link to={`/blog/${post.slug}`} className="blog-card__media">
          <Figure image={post.image} ratio="16 / 9" sizes="(max-width: 900px) 100vw, 60vw" />
        </Link>
        <div className="blog-card__body">
          {meta}
          <h3>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          <p>{post.excerpt}</p>
        </div>
      </article>
    )
  }

  if (variant === 'compact') {
    return (
      <article className="blog-card blog-card--compact">
        <Link to={`/blog/${post.slug}`} className="blog-card__media">
          <Figure image={post.image} ratio="3 / 2" width={480} sizes="200px" />
        </Link>
        <div className="blog-card__body">
          <p className="blog-card__meta">
            <span>{post.category}</span>
            <span aria-hidden="true">·</span>
            <span>{readingMinutes(post)} min</span>
          </p>
          <h3>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
        </div>
      </article>
    )
  }

  return (
    <article className="blog-card blog-card--row">
      <Link to={`/blog/${post.slug}`} className="blog-card__media">
        <Figure image={post.image} ratio="4 / 3" width={640} sizes="(max-width: 760px) 100vw, 260px" />
      </Link>
      <div className="blog-card__body">
        {meta}
        <h3>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
      </div>
    </article>
  )
}
