/**
 * Brand & business configuration
 * ---------------------------------------------------------------
 * Everything business-specific lives here. Nothing else in the app
 * should hard-code a phone number, an address or a company name.
 *
 * ⚠ PLACEHOLDERS — every value marked `isPlaceholder: true` is
 * invented scaffolding, not real business data. The UI deliberately
 * hides contact details that are still placeholders rather than
 * showing a number nobody answers. Replace the values, flip the
 * flags to false, and the matching links, buttons and schema.org
 * markup switch themselves on.
 */

export const brand = {
  name: 'Meridian Education Advisory',
  shortName: 'Meridian',
  legalName: 'Meridian Education Advisory',
  tagline: 'Independent counselling for students applying to universities abroad.',
  foundedYear: null, // e.g. 2014 — shown in the footer and About page once set
  isPlaceholderBrand: true,

  /** Canonical origin. Used for canonical tags, Open Graph and the sitemap. */
  siteUrl: 'https://www.example.com',

  /** Mirrors src/styles/tokens.css — keep the two in step. */
  colors: {
    navy: '#10243A',
    forest: '#174D3A',
    ivory: '#F7F5EF',
    gold: '#C5A46D',
    white: '#FFFFFF',
    charcoal: '#292F35',
    greySoft: '#E8E9E5',
  },

  /**
   * Contact channels. `isPlaceholder: true` hides the channel in the UI
   * and suppresses tel:/mailto:/wa.me links so nothing dials a fake number.
   */
  contact: {
    phone: { value: '+00 0000 000 000', isPlaceholder: true },
    whatsapp: { value: '', isPlaceholder: true }, // digits only, e.g. 919876543210
    email: { value: 'hello@example.com', isPlaceholder: true },
    office: {
      lines: ['Office address not yet configured'],
      city: '',
      country: '',
      mapQuery: '',
      isPlaceholder: true,
    },
    hours: {
      lines: ['Monday to Friday — hours to be confirmed', 'Saturday — hours to be confirmed'],
      isPlaceholder: true,
    },
  },

  social: [
    { label: 'Instagram', href: '', isPlaceholder: true },
    { label: 'LinkedIn', href: '', isPlaceholder: true },
    { label: 'YouTube', href: '', isPlaceholder: true },
    { label: 'Facebook', href: '', isPlaceholder: true },
  ],

  /**
   * Consultation CTA. `isFree` controls whether the word "free" appears
   * anywhere on the site — leave it false unless counselling really is free.
   */
  consultation: {
    label: 'Book a Consultation',
    shortLabel: 'Book a Consultation',
    isFree: false,
    /** Shown under the booking form so expectations are set honestly. */
    responseCommitment: 'A counsellor reviews every enquiry before replying.',
  },

  /**
   * Where enquiry forms go. Until an endpoint is configured the forms
   * validate normally but tell the user plainly that nothing was sent.
   * See src/utils/submitEnquiry.js.
   */
  forms: {
    endpoint: '', // e.g. 'https://api.example.com/enquiries'
    isConfigured: false,
    privacyPolicyPath: '/privacy-policy',
  },

  /** Destinations the consultancy actively advises on. */
  countries: [
    'canada',
    'uk',
    'australia',
    'usa',
    'ireland',
    'germany',
    'new-zealand',
  ],
}

/** Convenience helpers so components never repeat the placeholder checks. */
export const hasPhone = () => !brand.contact.phone.isPlaceholder && Boolean(brand.contact.phone.value)
export const hasWhatsApp = () => !brand.contact.whatsapp.isPlaceholder && Boolean(brand.contact.whatsapp.value)
export const hasEmail = () => !brand.contact.email.isPlaceholder && Boolean(brand.contact.email.value)
export const hasOffice = () => !brand.contact.office.isPlaceholder
export const hasHours = () => !brand.contact.hours.isPlaceholder

export const telHref = () => `tel:${brand.contact.phone.value.replace(/[^\d+]/g, '')}`
export const mailHref = () => `mailto:${brand.contact.email.value}`
export const whatsappHref = (message = '') =>
  `https://wa.me/${brand.contact.whatsapp.value}${message ? `?text=${encodeURIComponent(message)}` : ''}`

export const activeSocial = () => brand.social.filter((s) => !s.isPlaceholder && s.href)

export default brand
