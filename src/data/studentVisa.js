/**
 * Student visa guidance (/student-visa)
 * ---------------------------------------------------------------
 * General process guidance that holds across destinations, plus
 * links to the official authority for each country.
 *
 * ⚠ Nothing here states a current requirement as fact. Specific
 * rules live with the authority that sets them, and every country
 * links out to it. Visa decisions are made by governments.
 */

import { destinations } from './destinations.js'

export const visaIntro = {
  kicker: 'Student visas',
  heading: 'A complete file, and an honest account of what nobody can promise',
  lead:
    'Visa decisions are made by governments. What you can control is whether the application in front of the officer is complete, consistent and verifiable — which is where most refusals are actually decided.',
  paragraphs: [
    'Students arrive at the visa stage expecting it to be the hard part and discover it is mostly the meticulous part. The officer is answering a narrow question: do these documents demonstrate that this applicant is a genuine student, admitted to a real programme, able to pay for it, who will comply with the conditions of their stay.',
    'Almost every avoidable refusal we see is a failure of evidence rather than of substance. The money existed but sat in the wrong account. The funds were sufficient but had not been held long enough. The statement said one thing and the application form said another. The applicant was genuine; the file did not show it.',
  ],
}

export const generalProcess = [
  {
    title: 'Secure and confirm your admission',
    body:
      'Nearly every student visa route begins with documentary proof of admission — a letter of acceptance, a confirmation of enrolment, a CAS or an I-20. The exact instrument differs by country, and in sponsorship-based systems it carries a reference the whole application is built around. Check every detail on it against your passport and documents the day it arrives.',
  },
  {
    title: 'Establish what the authority actually requires',
    body:
      'Requirements differ by destination and by your country of residence, and they are revised. Work from the official government source for your route rather than from a general checklist, including one of ours.',
  },
  {
    title: 'Prepare financial evidence early',
    body:
      'This is usually the longest step, because several countries require funds to be held for a specified consecutive period before you apply. Plan the holding period backwards from your intended application date, not forwards from when money becomes available.',
  },
  {
    title: 'Complete the application form carefully',
    body:
      'Travel history, previous visa applications, refusals and family details are frequently answered carelessly and are checked against other records. An omission that looks trivial can read as concealment.',
  },
  {
    title: 'Assemble and review the whole file',
    body:
      'Read it once as the officer would, looking only for inconsistency: names, dates, addresses, institution details, amounts. Contradictions between documents are the thing a reviewer is trained to notice.',
  },
  {
    title: 'Biometrics, medicals and the interview',
    body:
      'Depending on the destination, you may need biometrics, a medical examination, a tuberculosis test or an interview. The United States interviews most applicants; most other destinations assess documentarily but may request one.',
  },
  {
    title: 'Decision, conditions and arrival',
    body:
      'A granted visa carries conditions governing work, course changes, travel and reporting. Read them yourself — they differ by route, course and year of entry, and the consequences of breaching them are serious.',
  },
]

export const documentPreparation = [
  {
    title: 'Identity and travel',
    items: [
      'Passport valid well beyond your intended period of study',
      'Previous passports where they show relevant travel history',
      'Photographs to the exact specification stated — size, background and recency all matter',
    ],
  },
  {
    title: 'Academic',
    items: [
      'Transcripts and certificates for every qualification claimed',
      'Certified translations where documents are not in an accepted language',
      'Credential evaluation where the institution or authority requires one',
      'English language test result in the version accepted for visa purposes',
    ],
  },
  {
    title: 'Admission',
    items: [
      'The admission instrument for your route — acceptance letter, CoE, CAS or I-20',
      'Fee receipts or deposit confirmation where required',
      'Any attestation or eligibility letter your destination requires',
    ],
  },
  {
    title: 'Financial',
    items: [
      'Official bank statements covering the required period',
      'Sponsorship letter and proof of relationship, where someone else is funding you',
      'Education loan sanction letter showing amount and disbursement arrangement',
      'Documentary explanation for any large recent credit',
    ],
  },
  {
    title: 'Health and character',
    items: [
      'Medical examination or chest x-ray where required for your country of residence',
      'Health insurance meeting the destination’s requirement',
      'Police certificates where the route requires them',
    ],
  },
]

export const financialEvidence = {
  heading: 'Preparing financial evidence',
  intro:
    'More applications fail here than anywhere else, and almost all of those failures are preventable with planning.',
  points: [
    {
      title: 'Hold a margin above the minimum',
      body: 'Meeting the threshold exactly is technically sufficient and practically risky, because exchange rate movement between preparing documents and the decision can take you below it.',
    },
    {
      title: 'Respect the holding period',
      body: 'Where a consecutive holding period applies, a lump sum deposited days before the application does not satisfy it, however large. Count backwards from your application date.',
    },
    {
      title: 'Be clear whose money it is',
      body: 'Your own account is simplest. A sponsor is normally acceptable with proof of relationship, a sponsorship letter and often their own financial documentation.',
    },
    {
      title: 'Explain large recent credits',
      body: 'A sale deed, loan sanction letter or gift declaration turns a suspicious deposit into a documented one. Unexplained, it reads as funds borrowed to pass a check.',
    },
    {
      title: 'Use accepted formats and account types',
      body: 'Statements usually need to be bank-issued and verifiable. Some authorities exclude investments, fixed deposits or provident funds entirely.',
    },
    {
      title: 'Keep the figures consistent',
      body: 'The amount on your financial documents, on your admission instrument and on the application form should agree, or a document should explain why they differ.',
    },
  ],
}

export const commonMistakes = [
  { mistake: 'Funds deposited too late', consequence: 'Fails a holding-period requirement regardless of the amount held.' },
  { mistake: 'Statements in an unofficial format', consequence: 'App screenshots and unstamped printouts are frequently rejected as unverifiable.' },
  { mistake: 'Name or date mismatches between documents', consequence: 'Reads as inconsistency and invites scrutiny of the whole file.' },
  { mistake: 'Omitting a previous visa refusal', consequence: 'Refusals are recorded and shared between some authorities. Omission looks like concealment.' },
  { mistake: 'A generic statement of purpose', consequence: 'A study plan that could apply to any applicant does not demonstrate a genuine intention to study.' },
  { mistake: 'Contradicting your own application form', consequence: 'A statement that says one thing while the form says another is the most damaging single error in a file.' },
  { mistake: 'Applying too close to the intake', consequence: 'Leaves no margin for a document request, an administrative delay or a second attempt.' },
  { mistake: 'Ignoring the visa conditions after approval', consequence: 'Breaching work or reporting conditions carries consequences for your current and future immigration status.' },
]

export const interviewPreparation = {
  heading: 'If your route includes an interview',
  intro:
    'The United States interviews most student applicants; other destinations may request one. These are short conversations, often only a few minutes, and they are about coherence rather than performance.',
  points: [
    'Be able to explain why this course, this institution and this country — specifically, not in general terms.',
    'Know how your studies are funded and by whom, in enough detail to answer a follow-up question.',
    'Be able to describe what you intend to do after you graduate, plainly and without rehearsal.',
    'Know what is in your own application. If you cannot speak to your statement of purpose, that is a problem in itself.',
    'Answer the question asked, briefly. Long prepared speeches are counterproductive.',
    'Be honest about anything difficult — a weak semester, a gap, a previous refusal. Consistency with your documents matters more than a flattering account.',
  ],
}

/** Official immigration authority per destination, drawn from the destination data. */
export const officialResources = destinations.map((d) => ({
  country: d.shortName || d.name,
  slug: d.slug,
  visaName: d.visa.name,
  label: d.visa.official.label,
  href: d.visa.official.href,
}))

export default visaIntro
