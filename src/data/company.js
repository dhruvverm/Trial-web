/**
 * About / company content
 * ---------------------------------------------------------------
 * Editorial copy for /about, plus the shared "how we work" sequence
 * used on the homepage and several service pages.
 *
 * `team` is empty by design — see the note on that export. Replace
 * the placeholder copy throughout with the consultancy's own story
 * before launch; nothing here should survive into production
 * unchanged.
 */

import { images } from './images.js'

export const aboutIntro = {
  kicker: 'About the practice',
  heading: 'Advice you can check, from people who will tell you when the answer is no',
  lead:
    'We counsel students applying to universities abroad. The work is mostly unglamorous — reading transcripts properly, checking documents against official requirements, and keeping a timeline honest.',
  paragraphs: [
    'International education advice has an incentive problem. A consultancy paid on placement has a reason to recommend the institution that pays, to say yes when the honest answer is not yet, and to imply influence over decisions that belong to admissions committees and visa officers. Students usually cannot tell the difference until much later.',
    'We built this practice around removing those incentives where we can and disclosing them where we cannot. Where a commercial relationship with an institution exists, you are told at the point that institution is recommended. Our fees do not depend on which university you choose or on whether you receive a scholarship.',
    'The rest is method. We assess your record as it is rather than as you would like it to be, map destinations against your field and budget rather than against reputation, and prepare applications and visa files against the official requirements that actually apply — not against a template from three years ago.',
  ],
  image: images.counselling,
  secondaryImage: images.adviserDesk,
}

export const mission = {
  heading: 'What we are trying to do',
  body:
    'Put students in programmes that fit them, with applications strong enough to deserve a yes and documents complete enough to survive scrutiny. Then tell the truth about the parts nobody controls.',
}

export const principles = [
  {
    title: 'We will tell you when the answer is no',
    body:
      'If your profile does not support the programme you want, or your funds will not satisfy a visa requirement, or this intake is too soon, we say so. An honest no now is worth more than an expensive yes that fails later.',
  },
  {
    title: 'We do not guarantee outcomes we do not control',
    body:
      'Admission decisions belong to universities. Visa decisions belong to governments. Anyone offering a guarantee on either is describing something they cannot deliver, and the promise usually costs the student.',
  },
  {
    title: 'We disclose commercial relationships',
    body:
      'Where we have an arrangement with an institution, you are told when that institution is recommended, not buried in a footnote. You can then weigh the advice accordingly.',
  },
  {
    title: 'We work from official sources',
    body:
      'Immigration rules, financial thresholds and work rights change frequently. We check the authority that sets them rather than repeating what was true last year, and we link you to the same source.',
  },
  {
    title: 'The writing stays yours',
    body:
      'We structure, question and edit your statement of purpose. We do not write it. Besides the integrity point, a statement you cannot speak to is a liability at interview.',
  },
  {
    title: 'We publish nothing we invented',
    body:
      'No fabricated testimonials, no invented success rates, no partnerships we do not have. Where we have nothing real to show, the page says so.',
  },
]

export const approach = [
  {
    step: 'Assess',
    title: 'Your record, honestly read',
    body:
      'Transcripts, grading scale, test scores, gaps and work history, benchmarked against the entry standards that actually apply. This is where unrealistic targets get identified, while there is still time to do something about it.',
  },
  {
    step: 'Map',
    title: 'Destinations against your constraints',
    body:
      'Field, budget, intake timing and what you want afterwards. Countries get compared on the things that differ structurally, not on general reputation.',
  },
  {
    step: 'Shortlist',
    title: 'Institutions and programmes',
    body:
      'A balanced list across ambitious, well-matched and safer options, each checked for accreditation and recognition, each with the reasoning written down.',
  },
  {
    step: 'Apply',
    title: 'Documents, statements, deadlines',
    body:
      'One checklist, one calendar. Portals set up, references briefed, statements edited across several drafts, every document in the format that institution asked for.',
  },
  {
    step: 'Fund',
    title: 'Scholarships and financial evidence',
    body:
      'Awards you are genuinely eligible for, prepared properly. Financial documents structured to meet the requirement that will actually be applied.',
  },
  {
    step: 'Visa',
    title: 'A file that holds together',
    body:
      'Prepared against current official requirements, checked for internal consistency, with interview preparation where the process includes one.',
  },
  {
    step: 'Depart',
    title: 'Accommodation, money, arrival',
    body:
      'The practical ground between a granted visa and a first lecture — and someone reachable during the first few weeks, when questions actually come up.',
  },
]

export const whyStudentsChooseUs = [
  {
    title: 'A counsellor who stays with you',
    body: 'One person holds your case from the first conversation to arrival, rather than passing you between departments at each stage.',
  },
  {
    title: 'Written reasoning, not verbal assurance',
    body: 'Recommendations come with the reasoning on paper, so you can review it, question it and show it to the people funding your studies.',
  },
  {
    title: 'Document work taken seriously',
    body: 'Most refusals are documentary. We treat the paperwork as the substantive task it is rather than as an afterthought once the exciting decisions are made.',
  },
  {
    title: 'Support that continues after departure',
    body: 'We stay reachable through your first weeks, which is when registration deadlines and practical problems actually surface.',
  },
]

/**
 * ⚠ EMPTY BY DESIGN.
 *
 * We will not invent counsellors, qualifications or photographs. The
 * About page renders a short explanation in place of this section
 * until real team members are added.
 *
 * Shape:
 *   { id, name, role, bio, qualifications: [], photo: imageEntry|null }
 */
export const team = []

/** Roles a student actually deals with. Honest, and useful without naming people. */
export const teamRoles = [
  {
    role: 'Lead counsellor',
    body: 'Holds your case from first conversation to arrival. Responsible for the shortlist, the timeline and the advice you act on.',
  },
  {
    role: 'Applications coordinator',
    body: 'Runs the portals, deadlines, document formats and reference chasing. The reason nothing is lost to an administrative slip.',
  },
  {
    role: 'Visa documentation reviewer',
    body: 'Checks the file against current official requirements and reads it once as an officer would, looking for inconsistencies.',
  },
  {
    role: 'Pre-departure adviser',
    body: 'Accommodation, banking, insurance, registration deadlines and the first-fortnight list.',
  },
]

export const commitments = {
  heading: 'What we will not do',
  items: [
    'Guarantee admission or a visa, or quote a success rate that cannot be verified.',
    'Write your statement of purpose or any document you must personally stand behind.',
    'Recommend an institution because of a commercial arrangement without telling you about it.',
    'Publish a testimonial, photograph or story without the student’s written consent.',
    'Quote fees, thresholds or processing times as current fact when the authority revises them.',
    'Encourage an application we believe is unlikely to succeed in order to bill for it.',
  ],
}

export default aboutIntro
