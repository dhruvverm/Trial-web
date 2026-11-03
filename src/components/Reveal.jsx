import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * A single, restrained entrance animation used across the site:
 * a short rise and fade as a block enters the viewport, once.
 *
 * Deliberately the only scroll animation in the project — applying
 * motion to everything is what makes a site feel templated.
 *
 * Why this does not use framer's `whileInView`
 * -------------------------------------------
 * `whileInView` reveals on intersection only. An element that is
 * never intersected — because the page was opened at an anchor, the
 * browser restored a deep scroll position, or the user jumped past
 * it — stays at opacity 0 forever, which hides real content. So we
 * observe intersection ourselves and add one rule: anything that has
 * already gone past the top of the viewport is shown immediately.
 *
 * Content is never left invisible, whatever the scroll does.
 */
export default function Reveal({ children, delay = 0, y = 16, as = 'div', className, ...rest }) {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || shown) return undefined

    const show = () => setShown(true)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) show()
      },
      { rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(el)

    /* Scrolled past without ever intersecting — show it rather than
       leaving the content hidden. */
    const checkPassed = () => {
      if (el.getBoundingClientRect().bottom < 0) show()
    }
    checkPassed()
    window.addEventListener('scroll', checkPassed, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', checkPassed)
    }
  }, [shown])

  if (reduced) {
    const Static = as
    return (
      <Static ref={ref} className={className} {...rest}>
        {children}
      </Static>
    )
  }

  const Component = motion[as] ?? motion.div

  return (
    <Component
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.5, delay: shown ? delay : 0, ease: [0.22, 0.61, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Component>
  )
}
