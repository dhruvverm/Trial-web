import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { footerColumns, legalNav } from '../data/navigation'
import {
  brand,
  hasPhone,
  hasEmail,
  hasOffice,
  hasHours,
  telHref,
  mailHref,
  activeSocial,
} from '../config/brand'
import Logo from './Logo'

export default function Footer() {
  const social = activeSocial()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo tone="light" />
            <p className="footer__tagline">{brand.tagline}</p>

            <div className="footer__contact">
              {hasPhone() ? (
                <a href={telHref()}>
                  <Phone size={15} aria-hidden="true" />
                  {brand.contact.phone.value}
                </a>
              ) : null}
              {hasEmail() ? (
                <a href={mailHref()}>
                  <Mail size={15} aria-hidden="true" />
                  {brand.contact.email.value}
                </a>
              ) : null}
              {hasOffice() ? (
                <p>
                  <MapPin size={15} aria-hidden="true" />
                  <span>{brand.contact.office.lines.join(', ')}</span>
                </p>
              ) : null}
              {hasHours() ? (
                <p>
                  <Clock size={15} aria-hidden="true" />
                  <span>{brand.contact.hours.lines.join(' · ')}</span>
                </p>
              ) : null}
              {!hasPhone() && !hasEmail() && !hasOffice() && (
                <p className="footer__placeholder">
                  Contact details are not yet configured. Add them in{' '}
                  <code>src/config/brand.js</code> and they will appear here.
                </p>
              )}
            </div>
          </div>

          <div className="footer__columns">
            {footerColumns.map((col) => (
              <nav key={col.title} className="footer__column" aria-label={col.title}>
                <h2 className="footer__heading">{col.title}</h2>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} {brand.legalName}. {brand.isPlaceholderBrand && <span className="footer__flag">Placeholder brand — replace before launch.</span>}
          </p>

          <ul className="footer__legal">
            {legalNav.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>

          {social.length > 0 && (
            <ul className="footer__social">
              {social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer noopener">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <p className="footer__disclaimer">
          {brand.shortName} provides independent counselling and application support. Admission
          decisions are made by individual institutions and visa decisions are made by the relevant
          government authorities; neither can be guaranteed by any consultancy. Immigration rules,
          fees and requirements change — always verify current requirements with the official
          sources linked throughout this site.
        </p>
      </div>
    </footer>
  )
}
