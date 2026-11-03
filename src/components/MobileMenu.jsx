import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown, X } from 'lucide-react'
import { primaryNav, legalNav } from '../data/navigation'
import { brand, hasPhone, hasEmail, telHref, mailHref } from '../config/brand'
import Logo from './Logo'

/**
 * Full-screen mobile navigation. Groups with children expand in
 * place as accordions so dropdowns work on touch, where hover does
 * not exist.
 */
export default function MobileMenu({ open, onClose }) {
  const [expanded, setExpanded] = useState(null)

  /* Lock body scroll and trap Escape while the menu is open. */
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <div className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open} role="dialog" aria-modal="true" aria-label="Site menu">
      <div className="mobile-menu__bar container">
        <Logo />
        <button type="button" onClick={onClose} className="mobile-menu__close" aria-label="Close menu">
          <X size={22} aria-hidden="true" />
        </button>
      </div>

      <nav className="mobile-menu__nav container" aria-label="Mobile">
        <ul>
          {primaryNav.map((item) => {
            if (!item.children) {
              return (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) => (isActive ? 'is-active' : '')}
                    onClick={onClose}
                  >
                    {item.label}
                  </NavLink>
                </li>
              )
            }

            const isExpanded = expanded === item.label
            return (
              <li key={item.to} className="mobile-menu__group">
                <button
                  type="button"
                  className={isExpanded ? 'is-open' : ''}
                  aria-expanded={isExpanded}
                  onClick={() => setExpanded(isExpanded ? null : item.label)}
                >
                  {item.label}
                  <ChevronDown size={18} aria-hidden="true" />
                </button>
                <ul className="mobile-menu__sub" hidden={!isExpanded}>
                  <li>
                    <Link to={item.to} onClick={onClose}>
                      All {item.label.toLowerCase()}
                    </Link>
                  </li>
                  {item.children.map((child) => (
                    <li key={child.to}>
                      <Link to={child.to} onClick={onClose}>
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="mobile-menu__foot container">
        <Link to="/book-consultation" className="btn btn--gold" onClick={onClose}>
          {brand.consultation.label}
        </Link>
        {(hasPhone() || hasEmail()) && (
          <div className="mobile-menu__contact">
            {hasPhone() && <a href={telHref()}>{brand.contact.phone.value}</a>}
            {hasEmail() && <a href={mailHref()}>{brand.contact.email.value}</a>}
          </div>
        )}
        <ul className="mobile-menu__legal">
          {legalNav.map((l) => (
            <li key={l.to}>
              <Link to={l.to} onClick={onClose}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
