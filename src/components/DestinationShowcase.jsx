import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { destinations } from '../data/destinations'
import { ordinal } from '../utils/format'
import Figure from './Figure'

/**
 * Destination index as an editorial ruled list rather than a grid of
 * cards. On wide screens, hovering or focusing a row swaps the large
 * image beside it; on narrow screens each row carries its own thumbnail
 * so the content still works without hover.
 */
export default function DestinationShowcase() {
  const [active, setActive] = useState(0)
  const activeDestination = destinations[active]

  return (
    <div className="showcase">
      <div className="showcase__media" aria-hidden="true">
        {destinations.map((d, i) => (
          <div key={d.slug} className={`showcase__image ${i === active ? 'is-active' : ''}`}>
            <Figure image={d.heroImage} ratio="3 / 4" sizes="40vw" />
          </div>
        ))}
        <p className="showcase__caption">
          <span className="showcase__caption-name">{activeDestination.name}</span>
          <span className="showcase__caption-note">{activeDestination.cardNote}</span>
        </p>
      </div>

      <ol className="showcase__list">
        {destinations.map((d, i) => (
          <li
            key={d.slug}
            className={i === active ? 'is-active' : ''}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
          >
            <Link to={`/destinations/${d.slug}`} className="showcase__row">
              <span className="showcase__num">{ordinal(i + 1)}</span>
              <span className="showcase__thumb">
                <Figure image={d.cardImage} ratio="1 / 1" width={320} sizes="72px" />
              </span>
              <span className="showcase__text">
                <span className="showcase__name">{d.shortName || d.name}</span>
                <span className="showcase__summary">{d.summary}</span>
              </span>
              <span className="showcase__meta">{d.intakes[0]} intake</span>
              <ArrowUpRight size={18} aria-hidden="true" className="showcase__arrow" />
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}
