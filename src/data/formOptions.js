/** Shared option lists for enquiry forms. */

import { destinations } from './destinations.js'

export const destinationOptions = [
  ...destinations.map((d) => ({ value: d.slug, label: d.shortName || d.name })),
  { value: 'undecided', label: 'Not decided yet' },
]

export const studyFieldOptions = [
  'Business and management',
  'Computer science and IT',
  'Engineering',
  'Health and medicine',
  'Natural sciences',
  'Social sciences',
  'Arts and humanities',
  'Law',
  'Agriculture and environment',
  'Education',
  'Other / not decided',
]

export const qualificationOptions = [
  'Secondary school (in progress)',
  'Secondary school (completed)',
  'Diploma',
  'Bachelor’s degree (in progress)',
  'Bachelor’s degree (completed)',
  'Master’s degree',
  'Doctoral degree',
]

export const intakeOptions = [
  'Next available intake',
  'Early 2027',
  'Mid 2027',
  'Late 2027',
  'During 2028',
  'Not decided yet',
]

export const englishTestOptions = [
  'Not taken yet',
  'Booked, not yet taken',
  'IELTS — result available',
  'PTE — result available',
  'TOEFL — result available',
  'Other test — result available',
  'Exempt / prior education in English',
]

export const consultationMethods = [
  'Video call',
  'Telephone call',
  'In person at your office',
  'WhatsApp message',
  'Email',
]

export const enquiryTopics = [
  'Study abroad counselling',
  'University applications',
  'Student visa guidance',
  'Scholarships and funding',
  'IELTS / PTE guidance',
  'Pre-departure support',
  'Something else',
]
