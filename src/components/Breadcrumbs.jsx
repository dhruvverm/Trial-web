import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

/**
 * @param {{trail: Array<{label:string, to?:string}>}} props
 * The final item is rendered as the current page and is not a link.
 */
export default function Breadcrumbs({ trail, tone = 'light' }) {
  if (!trail?.length) return null

  return (
    <nav aria-label="Breadcrumb" className={`breadcrumbs breadcrumbs--${tone}`}>
      <ol>
        {trail.map((crumb, i) => {
          const isLast = i === trail.length - 1
          return (
            <li key={`${crumb.label}-${i}`}>
              {isLast || !crumb.to ? (
                <span aria-current={isLast ? 'page' : undefined}>{crumb.label}</span>
              ) : (
                <Link to={crumb.to}>{crumb.label}</Link>
              )}
              {!isLast && <ChevronRight size={13} aria-hidden="true" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
