import { useEffect, useRef, useState } from 'react'
import { src as buildSrc, srcSet as buildSrcSet } from '../data/images'

/**
 * Responsive image with a graceful failure state.
 *
 * If the CDN is unreachable or the asset is missing, the component
 * keeps its layout box and shows a quiet patterned placeholder
 * carrying the alt text, rather than a broken-image icon.
 *
 * @param {object}  props
 * @param {{id:string, alt:string}} props.image  Entry from the image manifest.
 * @param {string} [props.alt]       Overrides the manifest alt text.
 * @param {string} [props.ratio]     CSS aspect-ratio, e.g. '4 / 3'.
 * @param {number} [props.width]     Intrinsic width hint for the CDN.
 * @param {boolean}[props.priority]  Skips lazy loading for above-the-fold images.
 * @param {string} [props.sizes]     Sizes attribute for responsive selection.
 * @param {string} [props.caption]   Optional visible caption.
 */
export default function Figure({
  image,
  alt,
  ratio = '4 / 3',
  width = 1200,
  priority = false,
  sizes = '(max-width: 760px) 100vw, 50vw',
  caption,
  className = '',
  objectPosition,
}) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const imgRef = useRef(null)
  const text = alt ?? image?.alt ?? ''

  /* A cached image can finish decoding before React attaches onLoad,
     in which case the event never fires and the image would stay at
     opacity 0 forever. Check the element's own state on mount. */
  useEffect(() => {
    const img = imgRef.current
    if (!img) return
    if (img.complete) {
      if (img.naturalWidth > 0) setLoaded(true)
      else setFailed(true)
    }
  }, [image?.id])

  if (!image) return null

  return (
    <figure className={`figure ${className}`} style={{ aspectRatio: caption ? undefined : ratio }}>
      <div className="figure__frame" style={{ aspectRatio: ratio }}>
        {!failed && (
          <img
            ref={imgRef}
            src={buildSrc(image, width)}
            srcSet={buildSrcSet(image)}
            sizes={sizes}
            alt={text}
            loading={priority ? 'eager' : 'lazy'}
            fetchpriority={priority ? 'high' : undefined}
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            className={loaded ? 'is-loaded' : ''}
            style={objectPosition ? { objectPosition } : undefined}
          />
        )}
        {(failed || !loaded) && (
          <div className="figure__fallback" aria-hidden={!failed}>
            {failed ? <span>{text}</span> : null}
          </div>
        )}
      </div>
      {caption && <figcaption className="figure__caption">{caption}</figcaption>}
    </figure>
  )
}
