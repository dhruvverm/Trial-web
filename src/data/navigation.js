/**
 * Site navigation
 * ---------------------------------------------------------------
 * One source of truth for the header, the mobile menu and the
 * footer, so a new route only has to be registered once.
 */

import { destinations } from './destinations.js'
import { serviceDetails } from './services.js'

export const primaryNav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Study Destinations',
    to: '/destinations',
    children: destinations.map((d) => ({
      label: d.shortName || d.name,
      to: `/destinations/${d.slug}`,
      meta: d.region,
    })),
  },
  {
    label: 'Services',
    to: '/services',
    children: serviceDetails.map((s) => ({
      label: s.name,
      to: `/services/${s.slug}`,
      meta: s.kicker,
    })),
  },
  { label: 'Universities', to: '/universities' },
  { label: 'Scholarships', to: '/scholarships' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export const footerColumns = [
  {
    title: 'Explore',
    links: [
      { label: 'About us', to: '/about' },
      { label: 'Study destinations', to: '/destinations' },
      { label: 'University finder', to: '/universities' },
      { label: 'Student visa guidance', to: '/student-visa' },
      { label: 'Success stories', to: '/success-stories' },
      { label: 'Resources', to: '/blog' },
      { label: 'FAQ', to: '/faq' },
    ],
  },
  {
    title: 'Destinations',
    links: destinations.map((d) => ({
      label: d.shortName || d.name,
      to: `/destinations/${d.slug}`,
    })),
  },
  {
    title: 'Services',
    links: [
      ...serviceDetails.map((s) => ({ label: s.name, to: `/services/${s.slug}` })),
      { label: 'All services', to: '/services' },
    ],
  },
]

export const legalNav = [
  { label: 'Privacy policy', to: '/privacy-policy' },
  { label: 'Terms and conditions', to: '/terms-and-conditions' },
  { label: 'Disclaimer', to: '/disclaimer' },
]

export default primaryNav
