import Reveal from './Reveal'

/**
 * Shared section heading block. `split` places the supporting text
 * in a second column on wide screens, which keeps long sections from
 * all opening with the same centred stack.
 */
export default function SectionHead({ kicker, title, body, action, split = true, titleWide = false, id }) {
  return (
    <Reveal className={`section-head ${split ? 'section-head--split' : ''}`}>
      <div>
        {kicker && <p className="kicker">{kicker}</p>}
        {title && (
          <h2 id={id} className={`section-head__title ${titleWide ? 'section-head__title--wide' : ''}`}>
            {title}
          </h2>
        )}
      </div>
      {(body || action) && (
        <div className="section-head__aside">
          {typeof body === 'string' ? <p className="lead">{body}</p> : body}
          {action}
        </div>
      )}
    </Reveal>
  )
}
