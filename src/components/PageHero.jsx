import Breadcrumbs from './Breadcrumbs'
import Figure from './Figure'
import Reveal from './Reveal'

/**
 * Inner-page hero.
 *
 * `variant`:
 *   'plain'   — type only on ivory (default; the quietest option)
 *   'aside'   — text with a tall image to one side
 *   'overlay' — full-bleed image with the heading laid over it
 */
export default function PageHero({
  kicker,
  title,
  lead,
  trail,
  image,
  variant = 'plain',
  tone = 'ivory',
  meta,
  actions,
  imagePosition,
}) {
  if (variant === 'overlay' && image) {
    return (
      <header className="page-hero page-hero--overlay">
        <div className="page-hero__bg">
          <Figure image={image} ratio="auto" priority width={1800} sizes="100vw" objectPosition={imagePosition} />
        </div>
        <div className="container page-hero__overlay-inner">
          {trail && <Breadcrumbs trail={trail} tone="dark" />}
          <Reveal>
            {kicker && <p className="kicker">{kicker}</p>}
            <h1>{title}</h1>
            {lead && <p className="lead page-hero__lead">{lead}</p>}
            {meta && <div className="page-hero__meta">{meta}</div>}
            {actions && <div className="btn-row page-hero__actions">{actions}</div>}
          </Reveal>
        </div>
      </header>
    )
  }

  if (variant === 'aside' && image) {
    return (
      <header className={`page-hero page-hero--aside page-hero--${tone}`}>
        <div className="container page-hero__grid">
          <div className="page-hero__text">
            {trail && <Breadcrumbs trail={trail} />}
            <Reveal>
              {kicker && <p className="kicker">{kicker}</p>}
              <h1>{title}</h1>
              {lead && <p className="lead page-hero__lead">{lead}</p>}
              {meta && <div className="page-hero__meta">{meta}</div>}
              {actions && <div className="btn-row page-hero__actions">{actions}</div>}
            </Reveal>
          </div>
          <Reveal delay={0.08} className="page-hero__media">
            <Figure image={image} ratio="3 / 4" priority sizes="(max-width: 900px) 100vw, 42vw" objectPosition={imagePosition} />
          </Reveal>
        </div>
      </header>
    )
  }

  return (
    <header className={`page-hero page-hero--plain page-hero--${tone}`}>
      <div className="container">
        {trail && <Breadcrumbs trail={trail} tone={tone === 'navy' ? 'dark' : 'light'} />}
        <Reveal className="page-hero__plain-inner">
          {kicker && <p className="kicker">{kicker}</p>}
          <h1>{title}</h1>
          {lead && <p className="lead page-hero__lead">{lead}</p>}
          {meta && <div className="page-hero__meta">{meta}</div>}
          {actions && <div className="btn-row page-hero__actions">{actions}</div>}
        </Reveal>
      </div>
    </header>
  )
}
