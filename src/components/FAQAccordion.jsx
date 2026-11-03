import { useId, useState } from 'react'
import { Plus, Minus } from 'lucide-react'

/**
 * Accessible accordion. Each row is a real <button> with
 * aria-expanded and aria-controls, so it is reachable and operable
 * from the keyboard and announced correctly by screen readers.
 *
 * `allowMultiple` lets several rows stay open at once, which suits
 * long reference lists better than a strict one-at-a-time accordion.
 */
export default function FAQAccordion({ items, allowMultiple = false, defaultOpen = [] }) {
  const baseId = useId()
  const [open, setOpen] = useState(() => new Set(defaultOpen))

  const toggle = (index) => {
    setOpen((previous) => {
      const next = new Set(allowMultiple ? previous : [])
      if (previous.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = open.has(index)
        const buttonId = `${baseId}-q-${index}`
        const panelId = `${baseId}-a-${index}`
        return (
          <div className={`accordion__item ${isOpen ? 'is-open' : ''}`} key={item.q}>
            <h3 className="accordion__heading">
              <button
                type="button"
                id={buttonId}
                className="accordion__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                <span>{item.q}</span>
                {isOpen ? <Minus size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="accordion__panel"
              hidden={!isOpen}
            >
              <p>{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
