/**
 * Services
 * ---------------------------------------------------------------
 * `serviceIndex` drives /services. Entries with a `slug` also have a
 * dedicated page under /services/:slug.
 *
 * Copy here describes what the consultancy does. It deliberately does
 * not promise outcomes that are decided by universities or by
 * government visa authorities — see the `limits` block on each
 * detailed service, which is rendered on the page rather than hidden.
 */

import { images } from './images.js'

export const serviceIndex = [
  {
    slug: 'study-abroad-counselling',
    name: 'Study abroad counselling',
    stage: 'Deciding',
    summary:
      'A structured conversation about what you want from a degree, what you can realistically fund, and which countries actually fit both.',
    includes: [
      'Profile and academic record review',
      'Country comparison against your field and budget',
      'Realistic intake planning',
    ],
  },
  {
    slug: null,
    name: 'University selection',
    stage: 'Deciding',
    summary:
      'Building a shortlist across ambitious, well-matched and safer options, checked for accreditation and for the specific thing you want to study.',
    includes: [
      'Department-level rather than institution-level comparison',
      'Accreditation and recognition checks',
      'Balanced shortlist with reasoning written down',
    ],
  },
  {
    slug: null,
    name: 'Course selection',
    stage: 'Deciding',
    summary:
      'Matching the curriculum, assessment style and entry prerequisites to how you actually work and what you intend to do afterwards.',
    includes: [
      'Module and assessment structure review',
      'Prerequisite and credit mapping',
      'Professional recognition and licensure pathways',
    ],
  },
  {
    slug: 'university-admissions',
    name: 'Application assistance',
    stage: 'Applying',
    summary:
      'Managing the applications themselves — portals, deadlines, statements and references — so nothing is lost to an administrative slip.',
    includes: [
      'Application portal setup and submission',
      'Statement of purpose development',
      'Reference coordination and deadline tracking',
    ],
  },
  {
    slug: null,
    name: 'Admission documentation',
    stage: 'Applying',
    summary:
      'Assembling transcripts, certificates, translations and evaluations in the exact form each institution asks for.',
    includes: [
      'Document checklist per institution',
      'Certified translation and attestation guidance',
      'Credential evaluation where required',
    ],
  },
  {
    slug: 'student-visa-guidance',
    name: 'Visa application guidance',
    stage: 'Applying',
    summary:
      'Preparing a complete, consistent and verifiable visa file — and being honest that the decision belongs to the government, not to us.',
    includes: [
      'Country-specific document preparation',
      'Financial evidence review',
      'Interview preparation where the process includes one',
    ],
  },
  {
    slug: 'scholarships',
    name: 'Scholarship assistance',
    stage: 'Funding',
    summary:
      'Finding the awards you are actually eligible for, and preparing applications for them properly rather than submitting many weak ones.',
    includes: [
      'Eligibility mapping against your profile',
      'Deadline calendar for shortlisted awards',
      'Essay and application review',
    ],
  },
  {
    slug: null,
    name: 'Financial documentation guidance',
    stage: 'Funding',
    summary:
      'Getting funding evidence into the form visa officers accept — the right accounts, the right history, the right paperwork.',
    includes: [
      'Funds evidence structure and timing',
      'Sponsor and relationship documentation',
      'Education loan documentation support',
    ],
  },
  {
    slug: 'ielts-pte-guidance',
    name: 'IELTS and PTE guidance',
    stage: 'Preparing',
    summary:
      'Choosing the right test for your destination and programme, planning preparation around a realistic target, and booking with time for a retake.',
    includes: [
      'Test selection for your destination and programme',
      'Diagnostic and target score planning',
      'Booking strategy that allows a second attempt',
    ],
  },
  {
    slug: 'pre-departure',
    name: 'Pre-departure support',
    stage: 'Departing',
    summary:
      'The practical ground between a visa and a first lecture: accommodation, money, insurance, arrival and the first fortnight.',
    includes: [
      'Accommodation search guidance',
      'Banking, insurance and connectivity setup',
      'Arrival, registration and settling-in briefing',
    ],
  },
]

export const serviceStages = ['Deciding', 'Applying', 'Funding', 'Preparing', 'Departing']

/* ---------------------------------------------------------------- */
/* Detailed service pages                                            */
/* ---------------------------------------------------------------- */

export const serviceDetails = [
  {
    slug: 'study-abroad-counselling',
    name: 'Study abroad counselling',
    kicker: 'Where it starts',
    image: images.counselling,
    secondaryImage: images.adviserDesk,
    lead:
      'Before any application, a clear answer to three questions: what you want from the degree, what you can fund without strain, and which countries genuinely serve both.',
    intro: [
      'Most students arrive with a country already in mind, usually chosen by family conversation or by what a cousin did three years ago. Sometimes that instinct is right. Often it is answering a different question from the one the student actually has — and the mismatch only surfaces after a deposit has been paid.',
      'Counselling is where we test the assumption. We look at your academic record as it is rather than as you wish it were, at your budget including the costs students routinely forget, and at what you want to be doing in five years. Then we work out which destinations and which programme types fit. Occasionally the honest answer is to wait a year, improve a score, and apply from a stronger position.',
    ],
    includes: [
      { title: 'Academic profile review', body: 'An honest read of your transcripts, grading scale and any gaps or breaks, benchmarked against the entry standards of the programmes you are considering.' },
      { title: 'Budget mapping', body: 'Tuition, living costs, insurance, travel and the funds you must show for a visa — all separate numbers, built into one realistic picture.' },
      { title: 'Country comparison', body: 'Against your field, budget, intake timing and what you want afterwards, rather than against general reputation.' },
      { title: 'Programme-type guidance', body: 'Degree or diploma, taught or research, one year or two. These choices shape cost and outcome more than the institution’s name does.' },
      { title: 'Intake planning', body: 'Working backwards from a realistic intake, including whether a later one gives you a materially stronger application.' },
      { title: 'A written plan', body: 'You leave with the reasoning on paper — destinations, programme types, timeline and what has to happen next.' },
    ],
    process: [
      { title: 'Initial conversation', body: 'We learn what you are trying to do and what constraints are real. No documents needed yet.' },
      { title: 'Profile and budget review', body: 'You share transcripts, test scores if any, and a realistic view of funding. We assess rather than reassure.' },
      { title: 'Options session', body: 'We present the destinations and programme types that fit, with the trade-offs for each stated plainly.' },
      { title: 'Written plan', body: 'A document setting out the recommended direction, the timeline and the decisions still open.' },
      { title: 'Review point', body: 'Plans change when a test score lands or funding shifts. We revisit rather than hold you to a stale plan.' },
    ],
    deliverables: [
      'Written study plan with recommended destinations and programme types',
      'Indicative budget covering tuition, living and visa funds',
      'Application timeline mapped to a specific intake',
      'A list of what to do next, in order',
    ],
    limits:
      'Counselling helps you make a better-informed decision. It cannot change entry requirements, and we will tell you when a target is unrealistic for your profile rather than taking you through an application that is unlikely to succeed.',
    faqs: [
      { q: 'What should I bring to the first session?', a: 'Your most recent transcripts and, if you have taken one, your English test result. If you do not have those yet, come anyway — the first conversation is about direction, not documents.' },
      { q: 'Can you tell me which country is best?', a: 'Not in the abstract. Best depends on your field, your budget, your academic record and what you want afterwards. We can tell you which countries fit those four things for you specifically.' },
      { q: 'What if I am not ready to apply this year?', a: 'Then we will say so. Applying from a stronger position a year later is frequently better than applying weakly now, particularly where funding depends on academic merit.' },
      { q: 'Do you only recommend certain universities?', a: 'We shortlist on fit and on accreditation. Where any commercial relationship with an institution exists, you will be told about it when that institution is recommended.' },
    ],
    related: ['university-admissions', 'scholarships'],
  },

  {
    slug: 'university-admissions',
    name: 'University applications and admissions',
    kicker: 'Applying',
    image: images.studentsLaptopTable,
    secondaryImage: images.writingNotes,
    lead:
      'Applications are lost to missed deadlines and inconsistent documents far more often than to weak academic records. This part is administration done properly.',
    intro: [
      'A strong application is mostly a well-managed one. Different portals, different document formats, different reference procedures and different deadlines — multiplied by six or eight institutions across two countries — is where good candidates quietly fall over.',
      'We run the process as a project with a single checklist. Every institution’s requirements are recorded, every deadline is tracked backwards from submission, and every document exists in the format that specific institution asked for. The statement of purpose gets proper editorial attention, because it is the one part of the file where you have genuine control.',
    ],
    includes: [
      { title: 'Shortlist construction', body: 'A balanced list across ambitious, well-matched and safer options, with the reasoning for each written down.' },
      { title: 'Portal management', body: 'UCAS, Common App, uni-assist and direct portals each behave differently. We set them up and keep them current.' },
      { title: 'Statement of purpose development', body: 'Structured drafting and editing across several rounds. We edit your writing; we do not write it for you.' },
      { title: 'Reference coordination', body: 'Briefing referees properly, giving them enough notice, and tracking submission.' },
      { title: 'Document preparation', body: 'Transcripts, certificates, translations and evaluations in each institution’s required format.' },
      { title: 'Deadline tracking', body: 'A single calendar covering application, scholarship and deposit deadlines, which are rarely the same date.' },
      { title: 'Offer review', body: 'Reading conditions carefully, comparing offers properly, and planning deposits against visa timelines.' },
    ],
    process: [
      { title: 'Finalise the shortlist', body: 'Confirm the institutions and programmes, with a reason recorded for each.' },
      { title: 'Build the document set', body: 'One master set, then institution-specific versions where formats differ.' },
      { title: 'Draft the statement', body: 'Outline, draft, edit. Usually three or four rounds, programme-specific rather than generic.' },
      { title: 'Submit in sequence', body: 'Ordered by deadline and by any dependency between applications.' },
      { title: 'Track and respond', body: 'Monitoring portals, supplying additional documents, handling interview requests.' },
      { title: 'Compare and accept', body: 'Reading conditions, comparing total cost, and choosing with the visa timeline in view.' },
    ],
    deliverables: [
      'Final shortlist with documented reasoning',
      'Complete document set in each institution’s required format',
      'Edited, programme-specific statements of purpose',
      'Deadline calendar covering applications, funding and deposits',
      'Offer comparison with conditions and total cost set out',
    ],
    limits:
      'Admission decisions belong to the institution. We can make your application complete, consistent and well-presented; we cannot influence an admissions committee, and we do not claim any ability to do so.',
    faqs: [
      { q: 'How many applications should I submit?', a: 'Usually between five and eight, balanced across ambitious, well-matched and safer options. Beyond that the quality of each starts to drop, which is counterproductive.' },
      { q: 'Will you write my statement of purpose?', a: 'No. We structure it, question it and edit it closely across several drafts, but the writing is yours. Institutions read a great many statements and ghostwritten ones are recognisable — and at visa stage, a statement you cannot speak to is a liability.' },
      { q: 'What if I am rejected everywhere?', a: 'We build shortlists to make that unlikely, but if it happens we look at what the rejections indicate, and whether a different programme type, a later intake or an improved score changes the picture.' },
      { q: 'Do you handle UCAS?', a: 'Yes. UCAS has its own structure, deadlines and a single personal statement read by every choice on the form, so it needs planning rather than improvisation.' },
    ],
    related: ['study-abroad-counselling', 'student-visa-guidance'],
  },

  {
    slug: 'student-visa-guidance',
    name: 'Student visa guidance',
    kicker: 'Applying',
    image: images.deskFlatlay,
    secondaryImage: images.dataChart,
    lead:
      'A complete, consistent, verifiable file — prepared against current official requirements, with the decision left where it belongs.',
    intro: [
      'Visa refusals are usually documentary rather than substantive. A financial statement that covers the wrong period. A statement of purpose that contradicts the application form. A document in a format the mission does not accept. The applicant was genuine and qualified; the file was not quite right.',
      'Our work is to make the file right. We prepare against the published requirements of the authority that will actually assess it, check internal consistency across every document, and prepare you for an interview where the process includes one. What we cannot do is decide the outcome, and we will not suggest otherwise.',
    ],
    includes: [
      { title: 'Requirement mapping', body: 'Document requirements taken from the official source for your destination and your country of residence, not from a generic template.' },
      { title: 'Financial evidence review', body: 'Checking that funds are the right amount, in the right form, held for the right period and properly explained.' },
      { title: 'Document consistency check', body: 'Names, dates, addresses and institution details cross-checked across the whole file. Mismatches are a common and avoidable cause of refusal.' },
      { title: 'Application form support', body: 'Working through the form carefully — questions about travel and immigration history in particular are frequently answered carelessly.' },
      { title: 'Interview preparation', body: 'For destinations with an interview, practice on the substance of your plan. Not a script.' },
      { title: 'Submission and tracking', body: 'Appointment booking, biometrics, and tracking through to decision.' },
      { title: 'Refusal review', body: 'If an application is refused, reading the stated ground and advising honestly on whether reapplying makes sense.' },
    ],
    process: [
      { title: 'Confirm the route', body: 'Which visa, which authority, which rules apply to you specifically.' },
      { title: 'Build the checklist', body: 'From the official requirements for your destination and country of residence.' },
      { title: 'Prepare financial evidence', body: 'Often the longest step, because funds frequently need to be held for a specified period before you can apply.' },
      { title: 'Assemble and review', body: 'Full file review for completeness and internal consistency.' },
      { title: 'Submit', body: 'Application, fees, biometrics and appointments.' },
      { title: 'Interview preparation', body: 'Where the process includes one — rehearsing substance, not answers.' },
      { title: 'Decision', body: 'Tracking through to outcome, and next steps either way.' },
    ],
    deliverables: [
      'Country-specific document checklist drawn from official sources',
      'Reviewed and structured financial evidence',
      'Consistency-checked application file',
      'Interview preparation session where applicable',
      'Submission tracking through to decision',
    ],
    limits:
      'Visa decisions are made by government authorities. No consultancy can guarantee a visa, influence an officer, or offer a success rate that means anything. Anyone who tells you otherwise is selling something they cannot deliver. Our work is to give your application the best documentary footing we can.',
    faqs: [
      { q: 'Can you guarantee my visa?', a: 'No, and nobody can. The decision rests with the government of the country you are applying to. We prepare a complete, consistent, well-evidenced application, which is the only part anyone can control.' },
      { q: 'What causes most refusals?', a: 'In our experience: financial evidence that does not meet the stated requirement, inconsistency between documents, and an unconvincing or contradictory account of study plans. All three are preventable with preparation.' },
      { q: 'What if I am refused?', a: 'The authority states a ground for refusal. We read it with you, work out whether it is addressable, and advise honestly — sometimes the answer is to reapply with a corrected file, and sometimes it is not.' },
      { q: 'Do you fill in the form for me?', a: 'We work through it with you. The declarations are yours to make and the answers must be accurate, so you need to understand and stand behind every one of them.' },
    ],
    related: ['pre-departure', 'university-admissions'],
  },

  {
    slug: 'scholarships',
    name: 'Scholarship guidance',
    kicker: 'Funding',
    image: images.booksApple,
    secondaryImage: images.libraryReading,
    lead:
      'Fewer applications, better prepared, aimed at awards you are genuinely eligible for.',
    intro: [
      'Scholarship searching tends to go one of two ways. Either students apply to nothing because the famous schemes look unreachable, or they apply to forty things indiscriminately and prepare none of them properly. Both produce the same result.',
      'The better approach is narrower. We map what you are actually eligible for — including the departmental and faculty awards that are poorly advertised and consequently less contested — and prepare a small number of applications properly. We will also be straightforward that partial fee reductions are far more common than full funding, and that funding should not be the thing your whole plan depends on.',
    ],
    includes: [
      { title: 'Eligibility mapping', body: 'Against your nationality, academic record, field and level — before any time goes into writing.' },
      { title: 'Institutional award identification', body: 'Entrance scholarships, departmental awards and faculty funding, which are often where the realistic opportunities sit.' },
      { title: 'Government and external schemes', body: 'National programmes with their own criteria and deadlines, checked for current status rather than assumed from last year.' },
      { title: 'Deadline calendar', body: 'Scholarship deadlines frequently precede admission deadlines, which surprises students every year.' },
      { title: 'Essay and application review', body: 'Scholarship essays answer a different question from a statement of purpose and need separate work.' },
      { title: 'Documentation support', body: 'Financial need evidence, references and supporting documents in the required format.' },
    ],
    process: [
      { title: 'Profile assessment', body: 'What you are realistically competitive for, stated honestly.' },
      { title: 'Opportunity mapping', body: 'Institutional, governmental and external awards matched to your profile.' },
      { title: 'Prioritise', body: 'A short list worth preparing properly, rather than a long list prepared badly.' },
      { title: 'Prepare applications', body: 'Essays, references and documentation, each tailored to the specific award.' },
      { title: 'Submit and track', body: 'Against each deadline, with outcomes recorded.' },
    ],
    deliverables: [
      'Eligibility-matched list of awards with deadlines',
      'Scholarship application calendar',
      'Reviewed essays for each shortlisted award',
      'Supporting documentation checklist',
    ],
    limits:
      'Scholarship decisions are made by universities, governments and foundations. We cannot influence them and we do not claim past awards as our own achievement. Build your plan on funding you have, not on funding you hope for.',
    faqs: [
      { q: 'Can I study abroad entirely on scholarship?', a: 'It happens, mostly at doctoral level and through a small number of national schemes. For most taught programmes, partial fee reductions are the realistic outcome. Plan on that basis and treat anything more as a welcome surprise.' },
      { q: 'When should I start?', a: 'Alongside your applications, not after. Many scholarship deadlines fall before or with the admission deadline, and some require you to have already applied.' },
      { q: 'Are scholarships only for top students?', a: 'Merit awards are competitive, but need-based awards, country-specific schemes and small departmental funds use different criteria. Mapping eligibility properly usually turns up more than students expect.' },
      { q: 'Do you charge a percentage of any scholarship?', a: 'No. Our fees are not contingent on scholarship outcomes, which keeps our advice about what you should apply for rather than what pays us.' },
    ],
    related: ['study-abroad-counselling', 'university-admissions'],
  },

  {
    slug: 'ielts-pte-guidance',
    name: 'IELTS and PTE guidance',
    kicker: 'Preparing',
    image: images.englishBook,
    secondaryImage: images.tabletWriting,
    lead:
      'Choosing the right test, setting a target that reflects both your university and your visa, and booking with room to sit it again.',
    intro: [
      'The English test is the one part of the process where the requirement is a number, which makes it feel simple. It is not quite. Different tests suit different candidates; universities and immigration authorities often want different scores; and some destinations require the test to be taken at a specific type of centre for visa purposes.',
      'We help you pick the right test for your destination and programme, set a target that satisfies both requirements, and plan a booking schedule that allows a retake without threatening your intake. We advise on preparation and review practice attempts; we are not a coaching centre, and where intensive tuition is what you need, we will say so.',
    ],
    includes: [
      { title: 'Test selection', body: 'IELTS, PTE, TOEFL and others differ in format, scoring and acceptance. The right one depends on your destination, your programme and how you perform under different formats.' },
      { title: 'Requirement check', body: 'University and immigration minimums are separate and sometimes different, including minimum scores in individual sections.' },
      { title: 'Centre type guidance', body: 'Some destinations require a test taken at an approved centre for visa purposes. Taking the wrong version is a costly and common error.' },
      { title: 'Diagnostic and target setting', body: 'A realistic starting point and a target band, with preparation time estimated honestly.' },
      { title: 'Booking strategy', body: 'Scheduled early enough to allow a second attempt before application deadlines.' },
      { title: 'Section-level guidance', body: 'Where the gap is, and what to work on, based on actual practice performance rather than general advice.' },
    ],
    process: [
      { title: 'Confirm the requirement', body: 'University and visa minimums for your specific programme and destination, including section minimums.' },
      { title: 'Choose the test', body: 'Format, availability and acceptance considered together.' },
      { title: 'Diagnostic', body: 'An honest baseline before planning preparation time.' },
      { title: 'Preparation plan', body: 'Focused on the sections that need work, with a realistic schedule.' },
      { title: 'Book with margin', body: 'Early enough that a retake does not cost you the intake.' },
      { title: 'Review and plan next steps', body: 'If the score falls short, what specifically to change before sitting again.' },
    ],
    deliverables: [
      'Test recommendation with reasoning',
      'Target scores for both university and visa requirements',
      'Preparation plan with a realistic timeline',
      'Booking schedule allowing a second attempt',
    ],
    limits:
      'We advise on test strategy and review practice performance. We do not run classes or guarantee bands. Where you need intensive tuition we will say so and suggest you seek it.',
    faqs: [
      { q: 'IELTS or PTE?', a: 'It depends on acceptance for your destination and on how you perform. PTE is computer-based with automated scoring and faster results; IELTS offers a face-to-face speaking test that suits some candidates better. We look at both against your programme list.' },
      { q: 'Does section-level scoring matter?', a: 'Often more than the overall band. Many programmes and visa routes set minimums per section, so an overall score that looks sufficient can still fall short on one component.' },
      { q: 'How long should I prepare?', a: 'It depends entirely on your starting point, which is why we begin with a diagnostic rather than a standard timetable.' },
      { q: 'How long is a result valid?', a: 'Test results have a validity period, and institutions and immigration authorities may each apply their own rules about how recent a result must be. We check both against your intended intake.' },
    ],
    related: ['university-admissions', 'study-abroad-counselling'],
  },

  {
    slug: 'pre-departure',
    name: 'Pre-departure support',
    kicker: 'Departing',
    image: images.airportDeparture,
    secondaryImage: images.accommodation,
    lead:
      'The part between a granted visa and a first lecture, where most of the avoidable stress actually lives.',
    intro: [
      'The visa arrives and the process feels finished. It is not. Accommodation, money, insurance, a phone that works, registering with the university and with local authorities, and understanding what your visa conditions actually permit — all of it lands in a few weeks, in an unfamiliar country, usually alone.',
      'Pre-departure support is the least glamorous part of what we do and the part students thank us for most. We work through the practical list before you fly, so the first fortnight is about settling in rather than firefighting.',
    ],
    includes: [
      { title: 'Accommodation guidance', body: 'University-managed, private and shared options, what each costs in practice, and how to avoid the rental scams that target arriving international students.' },
      { title: 'Banking and money', body: 'Opening an account, transferring funds sensibly, and avoiding the transfer costs that quietly eat a first-year budget.' },
      { title: 'Insurance', body: 'Checking that the cover you hold meets both the visa condition and any institutional requirement.' },
      { title: 'Travel and arrival', body: 'Booking sensibly, what to carry in hand baggage, and what happens at the border.' },
      { title: 'Registration obligations', body: 'University enrolment, immigration registration and local registration each have deadlines, and some are short.' },
      { title: 'Visa conditions briefing', body: 'What your specific conditions permit regarding work, course changes and travel. Read them; do not rely on what a friend was told.' },
      { title: 'Settling in', body: 'Healthcare, transport, connectivity, and finding people — the last one matters more than students expect.' },
    ],
    process: [
      { title: 'Accommodation first', body: 'Started as soon as the visa is granted, and earlier in cities where supply is tight.' },
      { title: 'Financial setup', body: 'Transfer plan, account opening, and a first-month budget.' },
      { title: 'Compliance check', body: 'Insurance, registration deadlines and visa conditions confirmed before departure.' },
      { title: 'Travel planning', body: 'Flights, baggage, documents to carry rather than pack.' },
      { title: 'Pre-departure briefing', body: 'A structured session covering arrival, the first week and the first month.' },
      { title: 'Arrival check-in', body: 'We stay reachable through the first weeks, when questions actually come up.' },
    ],
    deliverables: [
      'Accommodation shortlist with cost comparison',
      'Banking and fund transfer plan',
      'Registration and compliance deadline list',
      'Pre-departure checklist and briefing',
      'Arrival-week contact support',
    ],
    limits:
      'We provide guidance and checklists. We do not act as a rental agent, open accounts on your behalf, or sign anything for you. Where a step must be taken in person after arrival, we prepare you for it rather than doing it for you.',
    faqs: [
      { q: 'When should I start looking for accommodation?', a: 'As soon as your visa is granted, and in cities like Dublin, Sydney and London, earlier. Accommodation is a genuine constraint in several destinations, not a formality to handle on arrival.' },
      { q: 'How do I avoid rental scams?', a: 'Never transfer a deposit for a property you or someone you trust has not seen, be sceptical of prices well below market, and prefer university-managed options for the first term. We go through the specific patterns before you start looking.' },
      { q: 'What should I carry rather than pack?', a: 'Immigration documents, offer and enrolment letters, financial evidence, insurance details, academic certificates and medical records. If a bag goes astray, these are the things you cannot replace quickly.' },
      { q: 'Is there support after I arrive?', a: 'Yes — we stay reachable through the first weeks. That is when registration deadlines and practical problems actually surface.' },
    ],
    related: ['student-visa-guidance', 'study-abroad-counselling'],
  },
]

export const getService = (slug) => serviceDetails.find((s) => s.slug === slug)

export const serviceLinks = serviceDetails.map((s) => ({
  label: s.name,
  to: `/services/${s.slug}`,
}))

export default serviceIndex
