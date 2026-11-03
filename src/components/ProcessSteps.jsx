import Reveal from './Reveal'
import { ordinal } from '../utils/format'

/**
 * Numbered sequence rendered as a ruled list rather than a row of
 * cards — a deliberately different shape from the rest of the page.
 *
 * `layout`:
 *   'rows'    — full-width ruled rows (default)
 *   'columns' — compact multi-column track for shorter sequences
 */
export default function ProcessSteps({ steps, layout = 'rows', labelKey = 'title', bodyKey = 'body' }) {
  if (layout === 'columns') {
    return (
      <ol className="steps steps--columns">
        {steps.map((step, i) => (
          <Reveal as="li" key={step[labelKey]} delay={i * 0.05} className="steps__col">
            <span className="steps__num">{step.step ?? ordinal(i + 1)}</span>
            <h3>{step[labelKey]}</h3>
            <p>{step[bodyKey]}</p>
          </Reveal>
        ))}
      </ol>
    )
  }

  return (
    <ol className="steps steps--rows">
      {steps.map((step, i) => (
        <Reveal as="li" key={step[labelKey]} delay={Math.min(i * 0.04, 0.2)} className="steps__row">
          <span className="steps__num">{step.step ?? ordinal(i + 1)}</span>
          <div className="steps__content">
            <h3>{step[labelKey]}</h3>
            <p>{step[bodyKey]}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  )
}
