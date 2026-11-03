/**
 * Scholarship guidance content
 * ---------------------------------------------------------------
 * ⚠ No award amounts, no success rates, no guarantees.
 *
 * Named schemes below are real, long-running programmes listed with
 * a link to their own site. Eligibility, deadlines and value are
 * deliberately not reproduced here — they change annually and the
 * administering body is the only reliable source.
 */

export const scholarshipTypes = [
  {
    name: 'Merit scholarships',
    basis: 'Academic record',
    body:
      'Awarded on the strength of your results, usually at the point of admission and often automatically. Frequently a percentage reduction in tuition rather than full funding.',
    appliesTo: 'Undergraduate and postgraduate taught',
  },
  {
    name: 'Need-based awards',
    basis: 'Financial circumstances',
    body:
      'Assessed against documented financial need. Less common for international students than for domestic ones, and concentrated in a small number of institutions.',
    appliesTo: 'Mainly undergraduate',
  },
  {
    name: 'Departmental and faculty awards',
    basis: 'Subject and department',
    body:
      'Administered within a school or faculty, often small and poorly advertised — which is precisely why they are worth finding. Frequently listed on departmental pages rather than central admissions pages.',
    appliesTo: 'All levels',
  },
  {
    name: 'Government scholarships',
    basis: 'Nationality and policy objectives',
    body:
      'Funded by the destination government, usually with eligibility tied to your country of citizenship and often with development or return-home objectives attached.',
    appliesTo: 'Mainly postgraduate',
  },
  {
    name: 'Assistantships',
    basis: 'Work in exchange for funding',
    body:
      'Teaching or research work in exchange for a tuition waiver and a stipend. The dominant funding route for graduate study in the United States, negotiated with a department rather than an admissions office.',
    appliesTo: 'Postgraduate, mainly research',
  },
  {
    name: 'Sport, music and performance awards',
    basis: 'Demonstrated ability',
    body:
      'Tied to participation at a defined standard, usually with ongoing obligations. Audition or trial requirements apply and deadlines are often early.',
    appliesTo: 'Mainly undergraduate',
  },
  {
    name: 'External and foundation funding',
    basis: 'Varies by funder',
    body:
      'Trusts, charitable foundations, professional bodies and employers each set their own criteria. Narrow eligibility usually means smaller applicant pools.',
    appliesTo: 'All levels',
  },
]

export const eligibilityFactors = [
  { factor: 'Academic results', detail: 'The most common basis, usually assessed against a converted equivalent of your grades.' },
  { factor: 'Country of citizenship', detail: 'Many government and foundation schemes are restricted to specific nationalities or regions.' },
  { factor: 'Field of study', detail: 'Funding concentrates in some disciplines and is scarce in others, often reflecting the funder’s own priorities.' },
  { factor: 'Level of study', detail: 'Research degrees attract more funding than taught master’s programmes, by a wide margin.' },
  { factor: 'Professional experience', detail: 'Some schemes require a minimum period of work, and a few require a commitment to return home afterwards.' },
  { factor: 'Financial circumstances', detail: 'Need-assessed awards require documented evidence, sometimes including family income.' },
  { factor: 'Admission status', detail: 'Many awards require you to hold an offer, or at least to have applied, before you can be considered.' },
]

export const namedSchemes = [
  {
    name: 'Chevening Scholarships',
    country: 'United Kingdom',
    level: 'Postgraduate taught',
    body: 'A UK government scheme with its own eligibility criteria, work experience requirement and annual application window.',
    href: 'https://www.chevening.org/',
  },
  {
    name: 'Commonwealth Scholarships',
    country: 'United Kingdom',
    level: 'Postgraduate',
    body: 'For students from eligible Commonwealth countries, administered by the Commonwealth Scholarship Commission.',
    href: 'https://cscuk.fcdo.gov.uk/',
  },
  {
    name: 'Fulbright Foreign Student Program',
    country: 'United States',
    level: 'Postgraduate',
    body: 'A US government exchange programme administered through binational commissions and embassies, each with its own national deadline.',
    href: 'https://foreign.fulbrightonline.org/',
  },
  {
    name: 'DAAD Scholarships',
    country: 'Germany',
    level: 'All levels',
    body: 'The German Academic Exchange Service maintains a searchable database of scholarships by country, level and subject.',
    href: 'https://www.daad.de/en/study-and-research-in-germany/scholarships/',
  },
  {
    name: 'Australia Awards',
    country: 'Australia',
    level: 'Postgraduate',
    body: 'Australian government scholarships for students from eligible countries, with development objectives attached.',
    href: 'https://www.dfat.gov.au/people-to-people/australia-awards',
  },
  {
    name: 'New Zealand Scholarships',
    country: 'New Zealand',
    level: 'Postgraduate',
    body: 'Government-funded scholarships for students from eligible countries, administered by the Ministry of Foreign Affairs and Trade.',
    href: 'https://www.mfat.govt.nz/en/aid-and-development/new-zealand-scholarships/',
  },
  {
    name: 'Government of Ireland Scholarships',
    country: 'Ireland',
    level: 'All levels',
    body: 'Awards for international students administered by the Higher Education Authority, with an annual call and published criteria.',
    href: 'https://hea.ie/',
  },
]

export const applicationTips = [
  {
    title: 'Start before you are admitted',
    body:
      'A large share of scholarship deadlines fall before or alongside admission deadlines. Students who wait for an offer have already missed several.',
  },
  {
    title: 'Read what the award exists to do',
    body:
      'A scholarship essay answers a different question from a statement of purpose. If the fund was established to support students entering public service, write about public service.',
  },
  {
    title: 'Go narrow',
    body:
      'The tighter the eligibility criteria, the smaller the applicant pool. A fund restricted to students from your country studying your subject may receive very few applications.',
  },
  {
    title: 'Check for separate forms',
    body:
      'Some entrance awards are automatic on admission; others need a separate application behind a different link, with its own earlier deadline. Check for every institution.',
  },
  {
    title: 'Fewer, better',
    body:
      'Six properly prepared applications outperform forty submitted in a weekend. Preparation is the only variable you control.',
  },
  {
    title: 'Brief your referees properly',
    body:
      'A referee who knows which award you are applying for, and what it values, writes a more useful letter than one responding to a generic request.',
  },
]

export const requiredDocuments = [
  'Academic transcripts and degree certificates',
  'English language test result, where required by the scheme',
  'Scholarship-specific essays or statements',
  'Letters of recommendation, briefed for this award',
  'Curriculum vitae in the format the scheme specifies',
  'Evidence of financial need, for need-assessed awards',
  'Proof of citizenship or residence, for country-restricted schemes',
  'Admission offer or application reference, where the scheme requires one',
]

export default scholarshipTypes
