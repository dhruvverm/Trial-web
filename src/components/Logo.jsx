import { Link } from 'react-router-dom'
import { brand } from '../config/brand'

/**
 * Wordmark. The meridian device is drawn inline so it inherits
 * currentColor and works on both light and dark sections.
 */
export default function Logo({ tone = 'dark', compact = false }) {
  return (
    <Link to="/" className={`logo logo--${tone}`} aria-label={`${brand.name} — home`}>
      <svg className="logo__mark" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
        <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1.25" />
        <ellipse cx="20" cy="20" rx="8" ry="18" fill="none" stroke="currentColor" strokeWidth="1.25" />
        <line x1="2" y1="20" x2="38" y2="20" stroke="currentColor" strokeWidth="1.25" />
      </svg>
      <span className="logo__text">
        <span className="logo__name">{brand.shortName}</span>
        {!compact && <span className="logo__sub">Education Advisory</span>}
      </span>
    </Link>
  )
}
