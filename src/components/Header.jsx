import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu } from 'lucide-react'
import { primaryNav } from '../data/navigation'
import { brand } from '../config/brand'
import Logo from './Logo'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const location = useLocation()

  /* Close everything when the route changes. */
  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
  }, [location.pathname])

  /* Hairline border appears once the page has scrolled past the hero edge. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Escape closes an open dropdown; a click outside does the same. */
  useEffect(() => {
    if (!openMenu) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenMenu(null)
    }
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [openMenu])

  return (
    <>
      <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container header__inner">
          <Logo />

          <nav className="header__nav" aria-label="Primary" ref={navRef}>
            <ul className="header__list">
              {primaryNav.map((item) => {
                if (!item.children) {
                  return (
                    <li key={item.to}>
                      <NavLink
                        to={item.to}
                        end={item.to === '/'}
                        className={({ isActive }) => `header__link ${isActive ? 'is-active' : ''}`}
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  )
                }

                const isOpen = openMenu === item.label
                return (
                  <li key={item.to} className="header__item--has-menu">
                    <button
                      type="button"
                      className={`header__link header__trigger ${isOpen ? 'is-open' : ''} ${
                        location.pathname.startsWith(item.to) ? 'is-active' : ''
                      }`}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onClick={() => setOpenMenu(isOpen ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown size={14} aria-hidden="true" />
                    </button>

                    <div className={`dropdown ${isOpen ? 'is-open' : ''}`} hidden={!isOpen}>
                      <div className="dropdown__inner">
                        <div className="dropdown__lead">
                          <p className="dropdown__title">{item.label}</p>
                          <Link to={item.to} className="arrow-link" onClick={() => setOpenMenu(null)}>
                            View all
                          </Link>
                        </div>
                        <ul className="dropdown__list">
                          {item.children.map((child) => (
                            <li key={child.to}>
                              <Link to={child.to} onClick={() => setOpenMenu(null)}>
                                <span className="dropdown__label">{child.label}</span>
                                {child.meta && <span className="dropdown__meta">{child.meta}</span>}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="header__actions">
            <Link to="/book-consultation" className="btn btn--gold header__cta">
              {brand.consultation.shortLabel}
            </Link>
            <button
              type="button"
              className="header__burger"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu size={22} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
