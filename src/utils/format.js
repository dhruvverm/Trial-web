/** Shared formatting helpers. */

export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

export const formatDateShort = (iso) =>
  new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

/** Zero-padded index, used for editorial numbering (01, 02, …). */
export const ordinal = (n) => String(n).padStart(2, '0')
