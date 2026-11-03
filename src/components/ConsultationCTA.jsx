import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import { brand, hasPhone, hasEmail, telHref, mailHref } from '../config/brand'
import Figure from './Figure'
import Reveal from './Reveal'

/**
 * Closing call to action. Two visual treatments so it does not read
 * identically at the foot of every page:
 *   'split'  — image beside the message (default)
 *   'band'   — full-width dark band, no image
 */
export default function ConsultationCTA({
  variant = 'split',
  kicker = 'Next step',
  heading = 'Talk to a counsellor about your plans',
  body = 'Bring your transcripts and a rough budget. We will tell you which destinations realistically fit, and what the next six months would look like.',
  image,
  tone = 'navy',
}) {
  const content = (
    <>
      <p className="kicker">{kicker}</p>
      <h2 className="cta__heading">{heading}</h2>
      <p className="lead cta__body">{body}</p>
      <div className="btn-row">
        <Link to="/book-consultation" className="btn btn--gold">
          {brand.consultation.label}
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
        <Link to="/contact" className="btn btn--ghost-light">
          Contact us
        </Link>
      </div>
      {(hasPhone() || hasEmail()) && (
        <div className="cta__direct">
          {hasPhone() && (
            <a href={telHref()}>
              <Phone size={15} aria-hidden="true" />
              {brand.contact.phone.value}
            </a>
          )}
          {hasEmail() && (
            <a href={mailHref()}>
              <Mail size={15} aria-hidden="true" />
              {brand.contact.email.value}
            </a>
          )}
        </div>
      )}
    </>
  )

  if (variant === 'band' || !image) {
    return (
      <section className={`section section--${tone} cta cta--band`}>
        <div className="container">
          <Reveal className="cta__band-inner">{content}</Reveal>
        </div>
      </section>
    )
  }

  return (
    <section className={`section section--${tone} cta cta--split`}>
      <div className="container cta__grid">
        <Reveal className="cta__text">{content}</Reveal>
        <Reveal delay={0.08} className="cta__media">
          <Figure image={image} ratio="4 / 5" sizes="(max-width: 900px) 100vw, 40vw" />
        </Reveal>
      </div>
    </section>
  )
}
