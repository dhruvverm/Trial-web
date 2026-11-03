/**
 * Study destinations
 * ---------------------------------------------------------------
 * Editorial content for the destination index and the seven country
 * pages.
 *
 * ⚠ ACCURACY NOTE — Immigration rules, tuition fees, financial
 * thresholds, processing times and post-study work rights change
 * frequently and differ by institution, state and applicant profile.
 * Nothing in this file states a current legal requirement as fact.
 * Figures are deliberately absent; where a number matters the copy
 * points at the official source instead. Every country carries an
 * `official` block linking to the government authority that actually
 * decides these things.
 *
 * `verifyBeforePublishing` lists what a counsellor should confirm
 * against official sources before this page goes live.
 */

import { images } from './images.js'

export const destinations = [
  /* ---------------------------------------------------------- CANADA */
  {
    slug: 'canada',
    name: 'Canada',
    adjective: 'Canadian',
    region: 'North America',
    language: 'English and French',
    intakes: ['September', 'January', 'May'],
    layout: 'editorial',
    accent: 'forest',
    heroImage: images.caCampusModern,
    cardImage: images.caCityStreet,
    secondaryImage: images.studyHall,
    tertiaryImage: images.accommodation,
    summary:
      'Colleges and universities spread across ten provinces, each setting its own rules on where you can study and what happens after you graduate.',
    cardNote: 'Provincial attestation now sits between the offer and the permit.',
    highlights: [
      'Co-op and work-integrated programmes built into many diplomas and degrees',
      'Designated Learning Institution status decides whether a permit is possible at all',
      'Study permit applications now involve a provincial or territorial attestation letter',
    ],
    intro: [
      'Canada runs two parallel systems that students often confuse. Universities award degrees and lean academic; colleges and polytechnics award diplomas and certificates and lean vocational, often with a co-op term attached. Neither is the lesser option — they answer different questions. The right one depends on whether you want research depth or a faster route into a trade or profession.',
      'What makes Canada administratively distinctive is that the provinces hold real power. Where you study changes the application you file, the attestation you need and in some cases what you can do after you graduate. Choosing a province is not a lifestyle decision in Canada; it is part of the application strategy.',
    ],
    whyStudy: [
      {
        title: 'The college route is genuinely respected',
        body:
          'Two-year diplomas with co-op placements are a mainstream choice, not a fallback. Employers recruit from them directly, and many students use them as a route into a profession rather than as a stepping stone to a degree.',
      },
      {
        title: 'Programmes are built around placements',
        body:
          'Co-op, internship and work-integrated learning terms are embedded in the curriculum at many institutions. They lengthen the programme but they are the reason graduates leave with a résumé rather than only a transcript.',
      },
      {
        title: 'Institutions must be designated',
        body:
          'Only a Designated Learning Institution can host international students. The list is published and maintained by the provinces. We check designation before we shortlist anything, because an offer from an institution without it does not support a study permit.',
      },
      {
        title: 'Research funding sits outside the big names',
        body:
          'Strong research groups are spread widely rather than concentrated in a handful of cities. Shortlisting by reputation alone tends to miss the department that actually matches your work.',
      },
    ],
    popularFields: [
      { name: 'Computer science and data analytics', note: 'Offered as both degrees and post-graduate diplomas; entry requirements differ sharply between the two.' },
      { name: 'Business and supply chain management', note: 'Co-op streams are common and often oversubscribed.' },
      { name: 'Engineering technology', note: 'Accreditation matters if you intend to seek professional registration later.' },
      { name: 'Health and allied health sciences', note: 'Many programmes are restricted or have additional licensing steps for international graduates.' },
      { name: 'Hospitality and tourism management', note: 'Strong placement culture, particularly in British Columbia and Ontario.' },
      { name: 'Environmental and earth sciences', note: 'Field-based programmes concentrated near relevant geography rather than near cities.' },
    ],
    universityGuidance: {
      intro:
        'Shortlisting in Canada means balancing four variables at once: designation status, province, programme format and intake. We work through them in that order.',
      points: [
        'Confirm the institution appears on the current Designated Learning Institution list for its province.',
        'Decide between a degree and a diploma on the basis of what you want to do, not on perceived prestige.',
        'Check whether the programme has a co-op term and whether international students are eligible for it.',
        'Look at the intake calendar early — September is the largest intake but January and May are real options with less competition.',
        'For professional fields, check whether the qualification leads to licensure or only to employment.',
      ],
    },
    admissionRequirements: [
      { label: 'Academic record', detail: 'Transcripts for the last completed qualification, usually with a minimum aggregate set per programme rather than per institution.' },
      { label: 'English proficiency', detail: 'Accepted tests and minimum scores are set by each institution and sometimes by each department.' },
      { label: 'Statement of purpose', detail: 'Widely requested, and read closely by both the institution and later by the visa officer.' },
      { label: 'Letters of recommendation', detail: 'Required for most graduate programmes; less common at undergraduate level.' },
      { label: 'Portfolio or audition', detail: 'For design, architecture, music and some media programmes.' },
      { label: 'Credential evaluation', detail: 'Some programmes ask for an assessment of your prior qualification by a recognised evaluating body.' },
    ],
    englishTests: {
      intro:
        'Canadian institutions accept several tests, but the score they want varies by programme and the one the immigration authority will accept for a permit is a separate question again.',
      accepted: ['IELTS Academic', 'PTE Academic', 'TOEFL iBT', 'Duolingo English Test (institution-dependent)', 'CAEL and CELPIP (Canada-specific)'],
      note:
        'Acceptance of any individual test — and the Duolingo English Test in particular — changes from year to year and from institution to institution. Confirm on the programme page before you book a test date.',
    },
    costs: {
      intro:
        'Three costs move independently: tuition, living expenses and the proof-of-funds figure the immigration authority expects to see. They are not the same number and should be budgeted separately.',
      rows: [
        { item: 'Tuition', note: 'Set per programme, not per institution. Published on the programme page and the only figure you should rely on.' },
        { item: 'Living costs', note: 'Varies substantially between provinces and between a large city and a smaller campus town.' },
        { item: 'Proof of funds', note: 'A separate minimum set by the immigration authority and revised periodically. Check the current figure directly.' },
        { item: 'Health cover', note: 'Some provinces extend public health coverage to international students; others require private insurance.' },
        { item: 'Application and permit fees', note: 'Institution application fees, biometrics and the permit fee are all separate line items.' },
      ],
      caveat:
        'We do not publish figures for any of these. They change on their own schedules and a stale number on a consultancy website is worse than no number at all.',
    },
    scholarships: {
      intro:
        'Most funding in Canada is institutional rather than national. Entrance awards are frequently automatic on admission; everything else needs a separate application with its own deadline.',
      items: [
        { name: 'Entrance scholarships', body: 'Awarded on admission against academic record. Often automatic, but some require a separate form submitted alongside the application.' },
        { name: 'Faculty and departmental awards', body: 'Administered by the department, usually smaller, and frequently under-applied for because they are poorly advertised.' },
        { name: 'Graduate funding and assistantships', body: 'Teaching and research assistantships are the main funding route at master’s and doctoral level, and are negotiated with a supervisor rather than an admissions office.' },
        { name: 'Government and external programmes', body: 'Federal and provincial schemes exist and change. We check what is currently open rather than working from last year’s list.' },
      ],
    },
    visa: {
      name: 'Study permit',
      intro:
        'A study permit is not a visa in itself — depending on your nationality it is issued alongside either a temporary resident visa or an electronic travel authorisation. The application is assessed on whether the officer believes you are a genuine student who will leave at the end of your authorised stay.',
      steps: [
        { title: 'Accept an offer from a designated institution', body: 'The letter of acceptance is the foundation of the application. It must come from an institution that currently holds designated status.' },
        { title: 'Obtain the required attestation', body: 'Most applicants now need a provincial or territorial attestation letter. Which applicants are exempt, and how the letter is issued, is set by each province.' },
        { title: 'Assemble financial evidence', body: 'You are demonstrating that tuition and living costs are covered for the period of study, through documentation the officer can verify.' },
        { title: 'Complete the application and biometrics', body: 'Submitted online in most cases, with biometrics collected at a designated centre.' },
        { title: 'Medical examination where required', body: 'Required for some countries of residence and some fields of study, particularly those involving clinical placement.' },
        { title: 'Decision and port of entry', body: 'Approval produces a letter of introduction. The permit itself is issued when you arrive in Canada.' },
      ],
      official: {
        label: 'Immigration, Refugees and Citizenship Canada',
        href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html',
      },
    },
    documents: [
      'Letter of acceptance from a designated institution',
      'Valid passport covering the intended period of study',
      'Provincial or territorial attestation letter, where applicable',
      'Proof of financial capacity in a form the officer can verify',
      'Academic transcripts and certificates',
      'English or French language test result',
      'Statement of purpose or study plan',
      'Medical examination results, where required',
      'Biometrics confirmation',
    ],
    timeline: [
      { phase: '12–10 months before', detail: 'Shortlist programmes and confirm designation status. Book the English test with room for a retake.' },
      { phase: '10–8 months before', detail: 'Prepare transcripts, references and the statement of purpose. Submit applications as programmes open.' },
      { phase: '8–6 months before', detail: 'Respond to offers and conditions. Pay the deposit that triggers the attestation process.' },
      { phase: '6–4 months before', detail: 'Assemble financial documentation and file the study permit application. Complete biometrics.' },
      { phase: '3–1 months before', detail: 'Arrange accommodation, health cover and flights. Attend pre-departure briefing.' },
    ],
    faqs: [
      { q: 'Is a college diploma worth less than a university degree?', a: 'They answer different questions. A diploma is shorter, more vocational and usually includes a placement; a degree is longer and more academic. Employers in Canada recruit from both. The wrong choice is picking one for its label rather than for what you want to do afterwards.' },
      { q: 'Does the province I choose actually matter?', a: 'Yes, more than in most destinations. Provinces control institutional designation and the attestation process, and living costs differ sharply between them. The province is part of the application, not just the address.' },
      { q: 'Can I work while I study?', a: 'Work rights for study permit holders exist but the conditions attached to them have been revised repeatedly in recent years. Check the current rules on the IRCC site rather than relying on what applied to someone who arrived two years ago.' },
      { q: 'What happens after I graduate?', a: 'Post-graduation work options depend on the institution, the programme and its length, and the eligibility criteria have changed more than once. We will talk through what currently applies to the specific programmes on your shortlist, and point you at the official source.' },
      { q: 'How long does a study permit take to process?', a: 'Processing times vary by country of residence and time of year, and IRCC publishes current estimates that update regularly. We plan backwards from the intake date with a margin, rather than from an average.' },
    ],
    verifyBeforePublishing: [
      'Current proof-of-funds minimum',
      'Provincial attestation letter requirements and exemptions',
      'On- and off-campus work rules for study permit holders',
      'Post-graduation work permit eligibility criteria',
    ],
  },

  /* -------------------------------------------------------------- UK */
  {
    slug: 'uk',
    name: 'United Kingdom',
    shortName: 'UK',
    adjective: 'British',
    region: 'Europe',
    language: 'English',
    intakes: ['September', 'January'],
    layout: 'classic',
    accent: 'navy',
    heroImage: images.ukCollegiate,
    cardImage: images.ukLondonAerial,
    secondaryImage: images.ukWestminster,
    tertiaryImage: images.libraryReading,
    summary:
      'One-year master’s degrees, a centralised undergraduate system, and a sponsorship model where the university holds part of your immigration status.',
    cardNote: 'The one-year master’s changes the entire financial calculation.',
    highlights: [
      'Taught master’s degrees typically run twelve months rather than two years',
      'Undergraduate applications are centralised through UCAS with fixed deadlines',
      'Your sponsoring institution issues the CAS that the visa application depends on',
    ],
    intro: [
      'The defining feature of UK study is compression. A taught master’s is usually twelve months, which halves the tuition and living cost of an equivalent two-year programme elsewhere and gets you back into work a year earlier. The trade-off is pace: there is very little slack in the calendar, and a term spent finding your feet is a term you do not get back.',
      'The second structural feature is sponsorship. A UK institution licensed to sponsor international students issues a Confirmation of Acceptance for Studies, and your permission to be in the country is tied to it. That makes the relationship with your university administrative as well as academic, and it makes deadlines unusually unforgiving.',
    ],
    whyStudy: [
      {
        title: 'The one-year master’s is a real financial argument',
        body:
          'Twelve months of tuition and twelve months of living costs instead of twenty-four. For many students this is the single largest difference between the UK and the alternatives, and it deserves to be calculated rather than assumed.',
      },
      {
        title: 'Undergraduate applications are centralised',
        body:
          'UCAS handles undergraduate applications to almost every UK university through one form, a limited number of choices and a personal statement that every institution reads. It rewards preparation and punishes late starts.',
      },
      {
        title: 'Degrees are specialised from day one',
        body:
          'A UK undergraduate degree generally commits you to a subject at the point of application. There is far less scope to explore before declaring a major than in North America. That suits students who already know, and frustrates those who do not.',
      },
      {
        title: 'Institutional quality is externally assessed',
        body:
          'Teaching and research quality are reviewed by national bodies and the results are published. It is one of the few places where you can read an independent assessment of a department rather than a marketing page.',
      },
    ],
    popularFields: [
      { name: 'Business, finance and management', note: 'The largest category by volume and consequently the most competitive at well-known institutions.' },
      { name: 'Computer science and artificial intelligence', note: 'Conversion master’s programmes exist for students from other backgrounds.' },
      { name: 'Law', note: 'The route to practising in England and Wales involves separate professional assessment beyond the degree.' },
      { name: 'Public health and health policy', note: 'Strong concentration of specialist schools and research institutes.' },
      { name: 'Creative arts, film and design', note: 'Portfolio-led admission; institution reputation is strongly discipline-specific.' },
      { name: 'Engineering', note: 'Accreditation by the relevant professional institution matters for later registration.' },
    ],
    universityGuidance: {
      intro:
        'League tables tell you less in the UK than subject-level assessment does. A mid-table university can hold one of the strongest departments in the country in your field.',
      points: [
        'Check the institution holds a current student sponsor licence — without it there is no CAS and no visa.',
        'Read subject-level rather than institution-level rankings and quality assessments.',
        'For undergraduates, plan around UCAS deadlines rather than individual university pages.',
        'Look at how the master’s is assessed — coursework, examination, dissertation weighting — because twelve months leaves no room to adjust.',
        'Where the degree leads to a regulated profession, confirm what additional steps registration requires.',
      ],
    },
    admissionRequirements: [
      { label: 'Academic record', detail: 'Transcripts and certificates, benchmarked against UK classifications. Some institutions publish country-specific equivalencies.' },
      { label: 'Personal statement', detail: 'Central to the UCAS undergraduate application and read by every institution you apply to.' },
      { label: 'References', detail: 'One academic reference is standard at undergraduate level; postgraduate programmes often ask for two.' },
      { label: 'English proficiency', detail: 'Institutions set their own requirement, and visa sponsorship may impose a separate standard.' },
      { label: 'Portfolio or interview', detail: 'Standard for creative disciplines, medicine, and some competitive courses.' },
      { label: 'Admissions tests', detail: 'Certain subjects and institutions require subject-specific aptitude tests with their own registration deadlines.' },
    ],
    englishTests: {
      intro:
        'There are two separate English requirements in the UK: the one your university sets for admission, and the one that applies for visa purposes. They do not always align.',
      accepted: ['IELTS Academic', 'IELTS for UKVI (Secure English Language Test)', 'PTE Academic UKVI', 'TOEFL iBT (institution-dependent)', 'Institution-internal tests for some programmes'],
      note:
        'For visa purposes a Secure English Language Test taken at an approved centre may be required. Book the correct version of the test — an academic-only result taken at the wrong centre can be unusable for the visa even when it satisfies the university.',
    },
    costs: {
      intro:
        'UK costs separate cleanly into tuition, living costs, the immigration health surcharge and the maintenance funds you must show for the visa.',
      rows: [
        { item: 'Tuition', note: 'Set per programme and published by each institution. International fees differ substantially by subject.' },
        { item: 'Living costs', note: 'London and the rest of the UK are treated as two different cost environments, including by the visa rules.' },
        { item: 'Immigration health surcharge', note: 'Paid as part of the visa application and priced per year of the visa. Check the current rate.' },
        { item: 'Maintenance funds', note: 'A specified amount held for a specified period before applying. The rules on both the amount and the holding period are precise.' },
        { item: 'Visa application fee', note: 'Separate from the health surcharge and from any priority service.' },
      ],
      caveat:
        'The maintenance requirement is unusually prescriptive — the amount, the type of account and the number of consecutive days the funds must be held are all specified. Get this wrong and the application fails on a technicality. Check the current rules on GOV.UK.',
    },
    scholarships: {
      intro:
        'UK funding splits between institutional awards, which are numerous and modest, and national schemes, which are few and highly competitive.',
      items: [
        { name: 'University scholarships and fee discounts', body: 'The most realistic route. Often partial, frequently automatic on admission, sometimes requiring a short separate application.' },
        { name: 'Departmental and subject awards', body: 'Administered within a school or faculty and far less contested than headline schemes.' },
        { name: 'Chevening Scholarships', body: 'A UK government scheme for postgraduate study with its own eligibility criteria, work-experience requirement and annual deadline. Details at chevening.org.', href: 'https://www.chevening.org/' },
        { name: 'Commonwealth Scholarships', body: 'For students from eligible Commonwealth countries, administered by the Commonwealth Scholarship Commission.', href: 'https://cscuk.fcdo.gov.uk/' },
        { name: 'Research council funding', body: 'Relevant at doctoral level and generally secured through the supervisor and department rather than applied for independently.' },
      ],
    },
    visa: {
      name: 'Student visa',
      intro:
        'The UK Student visa is sponsorship-based. Your institution issues a Confirmation of Acceptance for Studies with a unique reference, and the application is built around it. Much of the assessment is documentary rather than discretionary, which makes precision more important than persuasion.',
      steps: [
        { title: 'Receive an unconditional offer', body: 'Conditions must be met and confirmed before a CAS can be issued.' },
        { title: 'Receive your CAS', body: 'Issued by the sponsoring institution, usually after a deposit. Check every detail on it against your documents before applying.' },
        { title: 'Meet the maintenance requirement', body: 'Funds of a specified amount held for a specified consecutive period, evidenced in an acceptable format.' },
        { title: 'Complete the online application', body: 'Including the immigration health surcharge payment, which is part of the same process.' },
        { title: 'Provide biometrics and documents', body: 'At a visa application centre, or through the app where you are eligible to use it.' },
        { title: 'Decision', body: 'Outcomes are issued as a digital immigration status or a vignette for travel, depending on your route.' },
      ],
      official: {
        label: 'GOV.UK — Student visa',
        href: 'https://www.gov.uk/student-visa',
      },
    },
    documents: [
      'Confirmation of Acceptance for Studies from your sponsoring institution',
      'Valid passport',
      'Evidence of maintenance funds in an acceptable format',
      'Academic qualifications listed on the CAS',
      'An approved English language test result where required',
      'Tuberculosis test certificate, for applicants from listed countries',
      'Parental consent and birth certificate, for applicants under 18',
      'ATAS certificate, for certain sensitive research subjects',
    ],
    timeline: [
      { phase: '14–12 months before', detail: 'For undergraduates, begin the UCAS process. For postgraduates, shortlist and check entry requirements.' },
      { phase: '12–10 months before', detail: 'Sit the English test. Draft the personal statement and secure references.' },
      { phase: '10–7 months before', detail: 'Submit applications. UCAS deadlines are fixed and apply to every choice on the form.' },
      { phase: '6–4 months before', detail: 'Firm your offer, pay the deposit and request the CAS. Begin the maintenance funds holding period.' },
      { phase: '3 months before', detail: 'Apply for the visa once the funds requirement is satisfied. Arrange accommodation.' },
      { phase: '1 month before', detail: 'Collect immigration documents, confirm travel and attend pre-departure briefing.' },
    ],
    faqs: [
      { q: 'Is a one-year master’s taken as seriously as a two-year one?', a: 'In the UK and across most of Europe it is the standard format and is understood as such. If you intend to work in a country where two years is the norm, it is worth checking how qualifications are recognised there before committing.' },
      { q: 'What is a CAS and why does it matter so much?', a: 'The Confirmation of Acceptance for Studies is the reference your sponsoring institution issues once you have an unconditional offer and have met their conditions. The visa application is built on it. Any mismatch between the CAS and your documents is a problem, so it is worth checking carefully the day it arrives.' },
      { q: 'How precise is the maintenance funds requirement?', a: 'Very. The amount, the account type and the number of consecutive days the money must be held are all specified, and the evidence has to show all three. This is the single most common avoidable reason a well-qualified applicant is refused.' },
      { q: 'Can I work during my studies?', a: 'Work rights are attached to your visa conditions and depend on your course level and institution type. They are stated on your immigration permission. Do not rely on general advice — check what your own conditions say.' },
      { q: 'What are my options after graduating?', a: 'There is a post-study route, and its length and conditions have been revised more than once. We will discuss what currently applies and link you to GOV.UK rather than quoting a rule that may have changed.' },
    ],
    verifyBeforePublishing: [
      'Current maintenance funds amounts for London and outside London',
      'Immigration health surcharge annual rate',
      'Approved Secure English Language Test providers and centres',
      'Graduate route duration and eligibility',
    ],
  },

  /* ------------------------------------------------------- AUSTRALIA */
  {
    slug: 'australia',
    name: 'Australia',
    adjective: 'Australian',
    region: 'Oceania',
    language: 'English',
    intakes: ['February', 'July', 'November (some programmes)'],
    layout: 'wide',
    accent: 'forest',
    heroImage: images.ausOperaHouse,
    cardImage: images.ausHarbour,
    secondaryImage: images.classroomSeminar,
    tertiaryImage: images.campusGlass,
    summary:
      'A regulated sector where every course for international students is listed on a public register, and the academic year starts in February.',
    cardNote: 'Check CRICOS registration before anything else.',
    highlights: [
      'Courses must be CRICOS-registered to enrol international students',
      'The academic year runs February to November — a southern hemisphere calendar',
      'Consumer protections for international students are written into national legislation',
    ],
    intro: [
      'Australia regulates international education more explicitly than most destinations. Every course that can enrol an international student appears on a public register, and the obligations institutions owe you — about fees, refunds, course changes and support — are set out in national legislation rather than left to institutional policy. For a student committing several years and a substantial sum, this is a meaningful difference.',
      'The calendar is the other thing to plan around. The academic year begins in February, which means a northern-hemisphere graduate finishing in June either waits or targets the July intake. That gap is worth planning for deliberately rather than discovering late.',
    ],
    whyStudy: [
      {
        title: 'Every course is on a public register',
        body:
          'CRICOS, the Commonwealth Register of Institutions and Courses for Overseas Students, lists every course approved to enrol international students. If a course is not on it, no student visa follows. It is the first thing we check and it takes a minute.',
      },
      {
        title: 'Your rights are legislated, not promised',
        body:
          'National legislation governs what institutions must do about fee protection, refunds, course transfers and student support. This is unusually concrete compared with most destinations.',
      },
      {
        title: 'The February start changes your timeline',
        body:
          'A southern hemisphere calendar means the main intake is February with a substantial mid-year intake in July. Planning backwards from the right one avoids an unintended gap year.',
      },
      {
        title: 'Strength concentrated in specific fields',
        body:
          'Marine and environmental science, mining and geology, agricultural science and public health are areas where Australian departments are internationally significant for reasons of geography and industry rather than marketing.',
      },
    ],
    popularFields: [
      { name: 'Nursing and allied health', note: 'Registration with the relevant national board is a separate process from graduating.' },
      { name: 'Information technology and cybersecurity', note: 'Widely offered at both bachelor’s and coursework master’s level.' },
      { name: 'Engineering', note: 'Accreditation matters if you intend to seek professional recognition.' },
      { name: 'Accounting and business', note: 'Professional body accreditation varies by programme and is worth confirming.' },
      { name: 'Environmental and marine science', note: 'Field-intensive programmes tied to specific coastal and inland research sites.' },
      { name: 'Agricultural science', note: 'Strong industry linkage, particularly outside the capital cities.' },
    ],
    universityGuidance: {
      intro:
        'Australian institutions differ less in overall quality than in specialisation and location. The useful question is which department, in which city, with which placement arrangements.',
      points: [
        'Verify the course and the provider are CRICOS-registered — the register is public and searchable.',
        'Check whether the course is accredited by the professional body relevant to your field.',
        'Compare February and July intakes against your own graduation date before choosing.',
        'Consider location against both cost and the industry you want to work in; several strong programmes sit outside the largest cities.',
        'For regulated professions, understand the registration pathway before you enrol, not after.',
      ],
    },
    admissionRequirements: [
      { label: 'Academic record', detail: 'Transcripts assessed against Australian Qualifications Framework levels.' },
      { label: 'English proficiency', detail: 'Required by both the institution and the visa process, sometimes at different levels.' },
      { label: 'Statement of purpose', detail: 'Increasingly requested, and relevant to the genuine student assessment in the visa application.' },
      { label: 'Work experience', detail: 'Required for some postgraduate business and management programmes.' },
      { label: 'Portfolio', detail: 'For architecture, design and creative arts programmes.' },
      { label: 'Prerequisite subjects', detail: 'Some programmes require specific subjects completed at secondary level.' },
    ],
    englishTests: {
      intro:
        'The institution sets an admission requirement; the Department of Home Affairs maintains its own list of accepted tests and scores for visa purposes.',
      accepted: ['IELTS Academic', 'PTE Academic', 'TOEFL iBT', 'Cambridge C1 Advanced', 'Occupational English Test (for some health programmes)'],
      note:
        'Accepted tests, minimum scores and the validity period of a result are set by the Department of Home Affairs for visa purposes and can differ from what the university will accept for admission. Check both.',
    },
    costs: {
      intro:
        'Tuition, living costs, Overseas Student Health Cover and the visa application charge are four separate obligations.',
      rows: [
        { item: 'Tuition', note: 'Published per course on the provider’s site and on CRICOS. Varies widely by discipline.' },
        { item: 'Living costs', note: 'Sydney and Melbourne sit well above regional campuses. The gap is large enough to affect course choice.' },
        { item: 'Overseas Student Health Cover', note: 'Mandatory for the duration of the visa and purchased from an approved insurer.' },
        { item: 'Visa application charge', note: 'Set by the Department of Home Affairs and revised periodically.' },
        { item: 'Proof of financial capacity', note: 'A specified amount covering tuition, travel and living costs, evidenced to the department’s standard.' },
      ],
      caveat:
        'The financial capacity figure is set by the Department of Home Affairs and has been revised more than once in recent years. Confirm the current amount directly on their site before you plan around it.',
    },
    scholarships: {
      intro:
        'Institutional scholarships dominate. Government schemes exist but are smaller in number and more specific in scope.',
      items: [
        { name: 'University international scholarships', body: 'Commonly a percentage reduction in tuition, awarded on academic merit at the point of admission.' },
        { name: 'Faculty and research awards', body: 'Tied to a department or a research programme; at postgraduate research level these are often the main funding route.' },
        { name: 'Australia Awards', body: 'Australian government scholarships for students from eligible countries, with development objectives attached. Criteria and participating countries are published by the government.', href: 'https://www.dfat.gov.au/people-to-people/australia-awards' },
        { name: 'Research training support', body: 'Available for higher degree by research candidates, generally arranged through the supervising school.' },
      ],
    },
    visa: {
      name: 'Student visa (subclass 500)',
      intro:
        'The subclass 500 visa covers study in a CRICOS-registered course. Assessment considers your circumstances, your immigration history and whether your stated intention to study is genuine — which is why the personal statement in the visa application matters as much as the documents.',
      steps: [
        { title: 'Accept an offer and receive your CoE', body: 'The Confirmation of Enrolment is issued after you accept and pay the required deposit. The visa application depends on it.' },
        { title: 'Arrange Overseas Student Health Cover', body: 'Must be in place from your arrival date and cover the full visa period.' },
        { title: 'Prepare your statement and evidence', body: 'Addressing your reasons for the course, the provider and Australia, and your circumstances at home.' },
        { title: 'Assemble financial and English evidence', body: 'To the standard set by the Department of Home Affairs, which may differ from what your institution required.' },
        { title: 'Lodge the application online', body: 'Through ImmiAccount, with health examinations and biometrics as requested.' },
        { title: 'Decision', body: 'Granted visas carry conditions. Read them — they govern work, course changes and reporting obligations.' },
      ],
      official: {
        label: 'Department of Home Affairs — Student visa (subclass 500)',
        href: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500',
      },
    },
    documents: [
      'Confirmation of Enrolment for a CRICOS-registered course',
      'Valid passport',
      'Overseas Student Health Cover policy',
      'Evidence of financial capacity',
      'English language test result meeting the relevant requirement',
      'Academic transcripts and certificates',
      'Statement addressing your circumstances and intentions',
      'Health examination results and biometrics as requested',
    ],
    timeline: [
      { phase: '12–10 months before', detail: 'Shortlist CRICOS-registered courses. Decide between the February and July intake.' },
      { phase: '10–8 months before', detail: 'Sit the English test. Prepare transcripts and supporting documents.' },
      { phase: '8–6 months before', detail: 'Apply and respond to offers. Pay the deposit that releases the Confirmation of Enrolment.' },
      { phase: '5–3 months before', detail: 'Arrange health cover, assemble financial evidence and lodge the visa application.' },
      { phase: '2–1 months before', detail: 'Confirm accommodation and travel. Attend pre-departure briefing and read your visa conditions.' },
    ],
    faqs: [
      { q: 'What is CRICOS and why should I care?', a: 'It is the public register of providers and courses approved to enrol international students. A course that is not on it cannot support a student visa. Searching the register takes a minute and rules out a whole category of problems.' },
      { q: 'February or July?', a: 'February is the larger intake with the fullest range of courses. July is a genuine alternative that often suits students finishing a northern hemisphere qualification mid-year, and it avoids an idle six months.' },
      { q: 'Is health cover really compulsory?', a: 'Overseas Student Health Cover is a visa condition for most student visa holders and must cover the full period of your stay. It is not optional and it is not the same as travel insurance.' },
      { q: 'How much money do I need to show?', a: 'The Department of Home Affairs sets a financial capacity requirement that has been revised several times. We will not quote a figure that may be out of date — check the current amount on their site and we will help you evidence it correctly.' },
      { q: 'Can I work on a student visa?', a: 'Work rights are attached to the visa as conditions, and the permitted hours have changed in recent years. Your grant notice states what applies to you.' },
    ],
    verifyBeforePublishing: [
      'Current financial capacity requirement',
      'Student visa work condition hours',
      'Accepted English tests and minimum scores for visa purposes',
      'Visa application charge',
    ],
  },

  /* ------------------------------------------------------------- USA */
  {
    slug: 'usa',
    name: 'United States',
    shortName: 'USA',
    adjective: 'American',
    region: 'North America',
    language: 'English',
    intakes: ['Fall (August/September)', 'Spring (January)'],
    layout: 'editorial',
    accent: 'navy',
    heroImage: images.usaCampus,
    cardImage: images.usaSkyline,
    secondaryImage: images.lectureHall,
    tertiaryImage: images.usaLiberty,
    summary:
      'Four thousand institutions, a liberal arts structure that delays specialisation, and a visa process that includes an interview.',
    cardNote: 'The only major destination where an interview is standard.',
    highlights: [
      'Undergraduate degrees allow you to explore before declaring a major',
      'Funding at graduate level often comes through assistantships rather than scholarships',
      'The visa process includes SEVIS registration and, for most applicants, an interview',
    ],
    intro: [
      'The American system is built around breadth before depth. An undergraduate spends the first years taking courses across disciplines and declares a major later. For a student who is genuinely undecided this is valuable; for one who already knows exactly what they want to study, it can feel like a detour. Neither reaction is wrong — it is a question of fit.',
      'At graduate level the structure changes completely. Funding typically arrives as a teaching or research assistantship negotiated with a department, not as a scholarship awarded by an admissions office. That makes the approach to a prospective supervisor a more important part of the application than most students expect.',
    ],
    whyStudy: [
      {
        title: 'Breadth before specialisation',
        body:
          'General education requirements mean an undergraduate samples several fields before committing. Changing direction in the second year is normal rather than disruptive.',
      },
      {
        title: 'Graduate funding runs through departments',
        body:
          'Teaching and research assistantships frequently cover tuition and provide a stipend. They are allocated by departments and faculty, which makes early, specific contact with a potential supervisor genuinely worthwhile.',
      },
      {
        title: 'The scale produces real variety',
        body:
          'Community colleges, liberal arts colleges, large public universities and private research institutions are four genuinely different experiences. Shortlisting by name recognition tends to ignore three of the four.',
      },
      {
        title: 'Practical training is part of the structure',
        body:
          'Curricular and optional practical training allow work related to your field under specified conditions. The rules are detailed and administered by your institution’s designated school official.',
      },
    ],
    popularFields: [
      { name: 'Computer science and engineering', note: 'The largest field for international graduate students by a wide margin, and correspondingly competitive.' },
      { name: 'Business and management', note: 'MBA admission usually expects substantial professional experience.' },
      { name: 'Data science and statistics', note: 'Often offered as a professional master’s with limited assistantship funding.' },
      { name: 'Life sciences and biotechnology', note: 'Doctoral programmes commonly fully funded; master’s programmes commonly not.' },
      { name: 'Public policy and international relations', note: 'Concentrated around specific policy schools rather than spread evenly.' },
      { name: 'Film, media and design', note: 'Portfolio-driven admission with strongly discipline-specific institutional reputations.' },
    ],
    universityGuidance: {
      intro:
        'With several thousand accredited institutions, the risk in the US is not finding a place but shortlisting badly. We build a list across reach, match and likely categories, and we check accreditation on every one.',
      points: [
        'Confirm regional or national accreditation, and programmatic accreditation where your field requires it.',
        'Understand the difference between a liberal arts college, a public flagship and a private research university before comparing them.',
        'At graduate level, research individual faculty and contact them specifically rather than applying to a department in the abstract.',
        'Check whether the programme is funded, partially funded, or self-funded — this varies enormously even within one university.',
        'Verify the institution is SEVP-certified and able to issue the Form I-20.',
      ],
    },
    admissionRequirements: [
      { label: 'Academic transcripts', detail: 'Often requiring course-by-course evaluation by a recognised credential evaluation service.' },
      { label: 'Standardised tests', detail: 'GRE, GMAT, SAT or ACT depending on level and programme. Many institutions have made these optional — confirm per programme.' },
      { label: 'English proficiency', detail: 'Required of applicants whose prior education was not in English; thresholds set per programme.' },
      { label: 'Statement of purpose', detail: 'Weighted heavily at graduate level, where it is read by faculty rather than administrators.' },
      { label: 'Letters of recommendation', detail: 'Usually three, and expected to be substantive rather than formal.' },
      { label: 'Résumé or CV', detail: 'Standard at graduate level and for professional programmes.' },
    ],
    englishTests: {
      intro:
        'Most institutions accept a range of tests but set their own minimum, and some departments set a higher one than the university.',
      accepted: ['TOEFL iBT', 'IELTS Academic', 'PTE Academic', 'Duolingo English Test (institution-dependent)', 'Cambridge English Qualifications (some institutions)'],
      note:
        'Check the programme page rather than the university’s general admissions page — departmental minimums are frequently higher, and waiver policies vary.',
    },
    costs: {
      intro:
        'Published tuition is frequently not what a funded student pays. Treat the sticker price and the net cost as separate questions.',
      rows: [
        { item: 'Tuition', note: 'Public institutions distinguish in-state from out-of-state; international students generally pay the latter.' },
        { item: 'Living costs', note: 'Estimated and published by each institution as part of the cost of attendance.' },
        { item: 'Health insurance', note: 'Usually mandatory and often billed automatically through the institution.' },
        { item: 'SEVIS fee', note: 'Paid before the visa interview and separate from the visa application fee.' },
        { item: 'Visa application fee', note: 'Paid to the consular post as part of the application.' },
        { item: 'Funding offsets', note: 'Assistantships, fellowships and tuition waivers can change the net figure substantially at graduate level.' },
      ],
      caveat:
        'Every institution publishes an official cost of attendance. Use that figure for your own planning and for the financial evidence on the I-20 — it is the number the institution and the consular officer both work from.',
    },
    scholarships: {
      intro:
        'Terminology matters here. Scholarships, fellowships, assistantships and tuition waivers are different instruments with different obligations attached.',
      items: [
        { name: 'Teaching and research assistantships', body: 'The dominant funding route for graduate study. Typically combine a tuition waiver with a stipend in exchange for defined work. Allocated by departments.' },
        { name: 'Fellowships', body: 'Merit-based and usually without a work obligation. Fewer in number and highly competitive.' },
        { name: 'Institutional merit scholarships', body: 'More common at undergraduate level, often awarded automatically on the strength of the application.' },
        { name: 'Need-aware and need-blind admission', body: 'A small number of institutions meet demonstrated financial need for international students. The list is short and worth knowing precisely.' },
        { name: 'Fulbright Foreign Student Program', body: 'A US government exchange programme administered through commissions and embassies in participating countries, each with its own national deadline.', href: 'https://foreign.fulbrightonline.org/' },
      ],
    },
    visa: {
      name: 'F-1 student visa',
      intro:
        'The F-1 is the standard academic student visa. Unlike most destinations, the process involves an in-person interview at a US embassy or consulate, where you explain your study plan, your funding and your ties to home in a conversation of a few minutes.',
      steps: [
        { title: 'Receive the Form I-20', body: 'Issued by a SEVP-certified institution once you have been admitted and have demonstrated sufficient funds.' },
        { title: 'Pay the SEVIS fee', body: 'Paid before the interview and evidenced with a receipt you bring with you.' },
        { title: 'Complete the DS-160', body: 'The online non-immigrant visa application. The confirmation page is required at the interview.' },
        { title: 'Schedule and attend the interview', body: 'At a US embassy or consulate. Expect questions on your programme, your choice of institution, your funding and your plans after graduation.' },
        { title: 'Decision', body: 'Issued at the consular officer’s discretion. If refused, the officer states the ground, which determines whether reapplying is sensible.' },
        { title: 'Entry and SEVIS registration', body: 'You may enter within a defined window before your programme start date and must register with your designated school official on arrival.' },
      ],
      official: {
        label: 'U.S. Department of State — Student visa',
        href: 'https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html',
      },
    },
    documents: [
      'Form I-20 issued by a SEVP-certified institution',
      'Valid passport',
      'DS-160 confirmation page',
      'SEVIS fee payment receipt',
      'Visa appointment confirmation',
      'Financial documentation supporting the figure on the I-20',
      'Academic transcripts, degree certificates and test scores',
      'Evidence of ties to your home country',
    ],
    timeline: [
      { phase: '18–14 months before', detail: 'Begin standardised test preparation. Research programmes and, at graduate level, individual faculty.' },
      { phase: '14–11 months before', detail: 'Sit tests. Request recommendations early. Draft the statement of purpose.' },
      { phase: '12–9 months before', detail: 'Submit applications — Fall deadlines are early and funding deadlines are earlier still.' },
      { phase: '7–5 months before', detail: 'Compare offers and funding packages. Accept and request the I-20.' },
      { phase: '5–3 months before', detail: 'Pay the SEVIS fee, file the DS-160 and book the interview. Interview slots can be scarce.' },
      { phase: '2–1 months before', detail: 'Arrange housing and insurance. Prepare for arrival and SEVIS registration.' },
    ],
    faqs: [
      { q: 'What actually happens in the visa interview?', a: 'A short conversation, often only a few minutes, covering your programme, why you chose that institution, how you are funding it and what you plan to do afterwards. Clear, consistent, honest answers matter far more than rehearsed ones. We prepare students for the substance rather than coaching scripts.' },
      { q: 'Do I still need the GRE or GMAT?', a: 'Many programmes have made them optional or dropped them, and many have not. It is a per-programme question, and the answer sometimes differs between the master’s and doctoral track in the same department.' },
      { q: 'How do assistantships work?', a: 'A department offers a tuition waiver and a stipend in exchange for teaching or research work. They are allocated by departments and faculty, which is why contacting a potential supervisor early and specifically matters more in the US than almost anywhere else.' },
      { q: 'Is a community college a reasonable starting point?', a: 'For some students, yes — it can be a lower-cost route into the first two years with a transfer pathway to a four-year institution. Transfer arrangements vary and need to be checked specifically rather than assumed.' },
      { q: 'What is OPT?', a: 'Optional Practical Training is work authorisation related to your field of study, administered through your institution under federal rules. The conditions are detailed and your designated school official is the authoritative source for your situation.' },
    ],
    verifyBeforePublishing: [
      'SEVIS fee and visa application fee amounts',
      'Current interview wait times at relevant consular posts',
      'OPT and STEM OPT duration and eligibility rules',
      'Programme-level standardised test requirements',
    ],
  },

  /* --------------------------------------------------------- IRELAND */
  {
    slug: 'ireland',
    name: 'Ireland',
    adjective: 'Irish',
    region: 'Europe',
    language: 'English',
    intakes: ['September', 'January (limited)'],
    layout: 'classic',
    accent: 'forest',
    heroImage: images.ieStreet,
    cardImage: images.ieTownhouses,
    secondaryImage: images.studyTogether,
    tertiaryImage: images.campusRedBrick,
    summary:
      'An English-speaking EU member state with a small, concentrated higher education sector and a strong technology and pharmaceutical industry base.',
    cardNote: 'Small sector, concentrated industry links.',
    highlights: [
      'English-speaking and inside the European Union',
      'A compact sector — a small number of universities and technological universities',
      'Technology, pharmaceutical and medical device industries cluster around specific cities',
    ],
    intro: [
      'Ireland occupies a specific niche: an English-speaking country inside the European Union, with a higher education sector small enough that the institutions are genuinely distinguishable from one another. There are not hundreds of options to sift through, which makes shortlisting more straightforward than in larger destinations.',
      'The sector’s character is shaped by industry. Large technology, pharmaceutical and medical device employers have concentrated operations in and around a handful of Irish cities, and university programmes in those fields have developed alongside them. That connection is real and worth understanding, though it should not be mistaken for a guarantee of employment.',
    ],
    whyStudy: [
      {
        title: 'English-speaking, inside the EU',
        body:
          'A combination only a couple of countries offer. For students who want European study without adding a language to the task, the shortlist is short.',
      },
      {
        title: 'A sector you can actually compare',
        body:
          'A small number of universities and technological universities means you can research all of them properly rather than sampling a ranking. Each has a recognisable character.',
      },
      {
        title: 'Industry clusters are geographically real',
        body:
          'Technology, pharmaceutical and medical device employers are concentrated in specific areas, and programmes in those fields have grown around them. Location and field are more closely linked here than in larger countries.',
      },
      {
        title: 'Taught master’s programmes are typically one year',
        body:
          'As in the UK, the one-year taught master’s is standard, which changes the cost calculation relative to two-year programmes elsewhere.',
      },
    ],
    popularFields: [
      { name: 'Computer science and software engineering', note: 'Closely linked to the technology sector concentrated around Dublin and Cork.' },
      { name: 'Pharmaceutical and biopharmaceutical science', note: 'Programmes developed alongside a substantial manufacturing base.' },
      { name: 'Data analytics', note: 'Widely offered as a one-year taught master’s.' },
      { name: 'Business and international management', note: 'Often with a European or multinational focus.' },
      { name: 'Medical device and biomedical engineering', note: 'Concentrated in specific regions with a matching industry cluster.' },
      { name: 'Agricultural and food science', note: 'A long-established strength with substantial research investment.' },
    ],
    universityGuidance: {
      intro:
        'With a small sector, the useful comparison is between departments and locations rather than between brands.',
      points: [
        'Understand the distinction between universities and technological universities — both award degrees, with different emphases.',
        'Match the city to the industry if employment in a specific sector is part of your plan.',
        'Check whether the programme includes a placement or industry project, which is common in applied fields.',
        'Confirm the programme is listed on the Interim List of Eligible Programmes where immigration permission depends on it.',
        'Apply early: with a small sector, popular programmes fill and some operate rolling admission.',
      ],
    },
    admissionRequirements: [
      { label: 'Academic record', detail: 'Transcripts assessed against the National Framework of Qualifications.' },
      { label: 'English proficiency', detail: 'Required where prior education was not conducted in English; thresholds set per programme.' },
      { label: 'Personal statement', detail: 'Required for most postgraduate programmes and some competitive undergraduate courses.' },
      { label: 'References', detail: 'Usually two for postgraduate applications.' },
      { label: 'Portfolio or interview', detail: 'For creative, architecture and some health programmes.' },
      { label: 'Relevant background', detail: 'Specialist master’s programmes may require a cognate undergraduate degree or specific modules.' },
    ],
    englishTests: {
      intro:
        'Institutions set their own requirement and the immigration authority maintains its own standard for permission purposes.',
      accepted: ['IELTS Academic', 'PTE Academic', 'TOEFL iBT', 'Cambridge English Qualifications', 'Duolingo English Test (institution-dependent)'],
      note:
        'The minimum score accepted for immigration permission may differ from the institution’s admission requirement. Check both before booking a test.',
    },
    costs: {
      intro:
        'Tuition, living costs, private medical insurance and the immigration registration fee are separate items, and the financial evidence requirement is a fifth.',
      rows: [
        { item: 'Tuition', note: 'Set per programme. Non-EU fees differ substantially by discipline.' },
        { item: 'Living costs', note: 'Dublin sits well above the rest of the country, particularly for accommodation.' },
        { item: 'Private medical insurance', note: 'Required for non-EU students and evidenced at registration.' },
        { item: 'Immigration registration', note: 'A fee paid on registering with immigration after arrival.' },
        { item: 'Evidence of funds', note: 'A specified amount demonstrating you can support yourself for the first year.' },
      ],
      caveat:
        'Accommodation in Dublin is a genuine constraint, not a line item to optimise later. Begin looking as soon as an offer is confirmed. The required evidence of funds is set by the immigration authority and should be checked directly.',
    },
    scholarships: {
      intro:
        'Funding is mostly institutional, with a small number of government-backed schemes.',
      items: [
        { name: 'University scholarships', body: 'Typically partial fee reductions awarded on academic merit, often automatic on admission.' },
        { name: 'Government of Ireland scholarships', body: 'Government-funded awards for international students administered by the Higher Education Authority, with an annual call and published criteria.', href: 'https://hea.ie/' },
        { name: 'Research funding', body: 'At doctoral level, funding usually comes through a research project or supervisor rather than a general scholarship scheme.' },
        { name: 'Departmental awards', body: 'Smaller, discipline-specific and often less contested than headline schemes.' },
      ],
    },
    visa: {
      name: 'Study visa and immigration permission',
      intro:
        'Depending on your nationality you may need an entry visa before travelling. Separately, every non-EEA student must register with immigration after arriving to receive permission to remain — these are two distinct steps and both matter.',
      steps: [
        { title: 'Accept an offer and pay the required fees', body: 'Your acceptance letter and fee receipt form part of the application.' },
        { title: 'Arrange private medical insurance', body: 'Required for non-EU students and evidenced both for the visa and at registration.' },
        { title: 'Demonstrate evidence of funds', body: 'Showing you can support yourself for the first year of study.' },
        { title: 'Apply for the entry visa where required', body: 'Online application followed by document submission; whether you need one depends on your nationality.' },
        { title: 'Travel and register with immigration', body: 'Registration after arrival produces the Irish Residence Permit.' },
        { title: 'Renew permission annually', body: 'Permission is granted for a defined period and renewed for each year of study.' },
      ],
      official: {
        label: 'Irish Immigration Service',
        href: 'https://www.irishimmigration.ie/',
      },
    },
    documents: [
      'Letter of acceptance from the institution',
      'Evidence that tuition fees have been paid as required',
      'Valid passport',
      'Private medical insurance certificate',
      'Evidence of funds for the first year',
      'Academic transcripts and certificates',
      'English language test result',
      'Statement of your study plan and intentions',
    ],
    timeline: [
      { phase: '12–10 months before', detail: 'Shortlist programmes. With a small sector, researching every option properly is realistic.' },
      { phase: '10–8 months before', detail: 'Sit the English test and prepare documents. Many programmes open early and admit on a rolling basis.' },
      { phase: '8–5 months before', detail: 'Apply and accept. Pay fees and begin the accommodation search immediately — this is not a step to defer.' },
      { phase: '5–3 months before', detail: 'Arrange insurance, assemble financial evidence and apply for the entry visa if required.' },
      { phase: '1 month before', detail: 'Confirm travel and accommodation. Prepare for immigration registration on arrival.' },
    ],
    faqs: [
      { q: 'Do I need a visa before I travel?', a: 'It depends on your nationality. Some nationalities require an entry visa, others do not. Everyone from outside the EEA must register with immigration after arriving — that part applies regardless.' },
      { q: 'Is accommodation really that difficult?', a: 'In Dublin, it is a real constraint and students regularly underestimate it. Start as soon as you have an offer, consider institution-managed accommodation, and look seriously at cities outside Dublin where the pressure is lower.' },
      { q: 'How does Ireland compare with the UK?', a: 'Both are English-speaking with one-year taught master’s programmes. Ireland is in the EU, has a much smaller sector and different post-study arrangements. The right answer depends on your field, your budget and where you want to be afterwards.' },
      { q: 'Can I work while studying?', a: 'Non-EEA students with valid permission generally have limited work rights, and the conditions are set by the immigration authority. Check the current position on their site rather than relying on older advice.' },
      { q: 'What happens after I graduate?', a: 'There is a scheme allowing eligible graduates to remain and seek employment for a period. Eligibility depends on the level of your award and current rules, so we will check it against your specific programme.' },
    ],
    verifyBeforePublishing: [
      'Evidence of funds requirement for first-year students',
      'Immigration registration fee',
      'Third Level Graduate Programme duration and eligibility',
      'Student work permission conditions',
    ],
  },

  /* --------------------------------------------------------- GERMANY */
  {
    slug: 'germany',
    name: 'Germany',
    adjective: 'German',
    region: 'Europe',
    language: 'German and English',
    intakes: ['Winter (October)', 'Summer (April)'],
    layout: 'wide',
    accent: 'navy',
    heroImage: images.deBrandenburg,
    cardImage: images.deOldTown,
    secondaryImage: images.campusSculptural,
    tertiaryImage: images.workshopPlanning,
    summary:
      'Public universities where tuition is low or absent for most programmes, a blocked account requirement, and a respected applied-sciences sector.',
    cardNote: 'Low tuition, but the blocked account is non-negotiable.',
    highlights: [
      'Most public universities charge no tuition fee or a low semester contribution',
      'A blocked account is the standard way of evidencing living costs',
      'Universities of applied sciences are a distinct and respected route',
    ],
    intro: [
      'Germany is the destination where the cost structure is genuinely different. Most public universities charge no tuition for most programmes — a semester contribution covering administration and a transport pass, rather than a fee. The money you need is for living, and the immigration system asks you to prove it up front through a blocked account.',
      'The other thing worth understanding early is the split between universities and universities of applied sciences. The latter are not a lesser tier; they are a parallel system with a practical, industry-connected orientation, mandatory placements and a different kind of teaching. For many students they are the better fit, and they are routinely overlooked by applicants who only look at research universities.',
    ],
    whyStudy: [
      {
        title: 'Tuition is low or absent at public institutions',
        body:
          'Most public universities charge a semester contribution rather than tuition for most programmes. Some states and some programmes are exceptions, which is why it must be checked per programme rather than assumed.',
      },
      {
        title: 'Universities of applied sciences are a real option',
        body:
          'Hochschulen für angewandte Wissenschaften offer practice-oriented degrees with mandatory placements and close industry links. A parallel system, not a fallback.',
      },
      {
        title: 'English-taught programmes are widespread at master’s level',
        body:
          'A large number of master’s programmes are taught entirely in English. German remains important for daily life, part-time work and internships, even when it is not required academically.',
      },
      {
        title: 'Engineering and applied research run deep',
        body:
          'Engineering, automotive and industrial research are historic strengths supported by a dense network of research institutes operating alongside universities.',
      },
    ],
    popularFields: [
      { name: 'Mechanical and automotive engineering', note: 'A long-established strength with dense industry linkage.' },
      { name: 'Computer science', note: 'Many English-taught master’s programmes; undergraduate study more often requires German.' },
      { name: 'Renewable energy and environmental engineering', note: 'Supported by sustained national investment in the sector.' },
      { name: 'Management and economics', note: 'Offered at both public universities and private business schools, which do charge tuition.' },
      { name: 'Natural sciences', note: 'Strong research infrastructure, with doctoral positions frequently structured as employment.' },
      { name: 'Architecture and urban planning', note: 'Portfolio-based admission; German is often required.' },
    ],
    universityGuidance: {
      intro:
        'German admissions are documentary and procedural. The work happens before you apply — in credential recognition and in getting the paperwork exactly right.',
      points: [
        'Check whether your qualification is recognised as equivalent for direct entry, or whether a Studienkolleg year is required first.',
        'Decide between a university and a university of applied sciences based on how you want to learn, not on hierarchy.',
        'Confirm the language of instruction per programme — and be honest about how much German daily life will require.',
        'Understand whether the programme admits through uni-assist, directly, or through a restricted-admission procedure.',
        'Check whether the programme or the state charges tuition; the general rule has exceptions.',
      ],
    },
    admissionRequirements: [
      { label: 'Recognised school-leaving qualification', detail: 'Assessed for equivalence to the Hochschulzugangsberechtigung. Some qualifications require a Studienkolleg and an assessment examination.' },
      { label: 'Academic transcripts', detail: 'Often submitted through uni-assist for centralised verification, with certified translations.' },
      { label: 'Language proficiency', detail: 'German-taught programmes typically require TestDaF or DSH; English-taught programmes require an English test.' },
      { label: 'Motivation letter', detail: 'Standard for master’s applications.' },
      { label: 'CV', detail: 'In the European format for most applications.' },
      { label: 'Subject prerequisites', detail: 'Master’s programmes frequently specify required credits in particular subject areas, assessed strictly.' },
    ],
    englishTests: {
      intro:
        'English-taught programmes require evidence of English; German-taught programmes require evidence of German. Many students need to think about both.',
      accepted: ['IELTS Academic', 'TOEFL iBT', 'PTE Academic (institution-dependent)', 'Cambridge English Qualifications', 'TestDaF or DSH for German-taught programmes'],
      note:
        'Even where a programme is taught entirely in English, German is often necessary for part-time work, internships and administration. Starting German before you arrive is a practical decision rather than an academic requirement.',
    },
    costs: {
      intro:
        'The cost profile is inverted compared with most destinations: tuition is usually minimal, and the main financial requirement is proving you can cover living costs.',
      rows: [
        { item: 'Tuition', note: 'Usually none at public universities for most programmes; a semester contribution applies. Private institutions and some programmes do charge.' },
        { item: 'Semester contribution', note: 'Covers administration and typically a local transport pass. Set per institution.' },
        { item: 'Blocked account', note: 'A specified sum deposited before the visa application, released monthly after arrival. The amount is set nationally and revised.' },
        { item: 'Health insurance', note: 'Mandatory, and enrolment is not possible without it.' },
        { item: 'Living costs', note: 'Varies considerably between cities; accommodation is the dominant variable.' },
      ],
      caveat:
        'The blocked account amount is set nationally and has been revised repeatedly. Confirm the current figure with the German mission in your country before you transfer anything.',
    },
    scholarships: {
      intro:
        'With low tuition, scholarships in Germany typically support living costs rather than fees.',
      items: [
        { name: 'DAAD scholarships', body: 'The German Academic Exchange Service administers the largest range of scholarships for international students, searchable by country, level and subject.', href: 'https://www.daad.de/en/study-and-research-in-germany/scholarships/' },
        { name: 'Deutschlandstipendium', body: 'A merit-based award co-funded by the federal government and private sponsors, administered by participating universities.' },
        { name: 'Foundation scholarships', body: 'Political and religious foundations fund students across subjects, each with distinct criteria and its own application process.' },
        { name: 'Research positions', body: 'Doctoral candidates are frequently employed on research contracts rather than funded by scholarship, which changes both the income and the status.' },
      ],
    },
    visa: {
      name: 'National visa for study',
      intro:
        'Applications are made through the German mission in your country of residence. The process is documentary and exacting: appointments can be scarce, and an incomplete file costs you the appointment as well as the time.',
      steps: [
        { title: 'Secure admission', body: 'A letter of admission from a recognised institution is the foundation. A conditional admission may be acceptable in some cases.' },
        { title: 'Open a blocked account', body: 'Deposit the specified amount with a recognised provider. The confirmation is a core document.' },
        { title: 'Arrange health insurance', body: 'Required for the visa and for university enrolment.' },
        { title: 'Book the appointment early', body: 'Appointment availability at German missions is frequently the limiting factor in the whole timeline.' },
        { title: 'Attend and submit the complete file', body: 'Document requirements are precise and specified by the mission. Missing items mean rebooking.' },
        { title: 'Register after arrival', body: 'City registration and a residence permit application follow arrival, within specified deadlines.' },
      ],
      official: {
        label: 'German Federal Foreign Office — Visa for study',
        href: 'https://www.auswaertiges-amt.de/en/visa-service/-/231148',
      },
    },
    documents: [
      'Letter of admission from a recognised institution',
      'Blocked account confirmation',
      'Valid passport',
      'Health insurance confirmation',
      'Academic certificates with certified translations',
      'Language proficiency certificate (German or English as applicable)',
      'Motivation letter and curriculum vitae',
      'Proof of accommodation where requested',
      'Biometric photographs to the specified standard',
    ],
    timeline: [
      { phase: '14–12 months before', detail: 'Check qualification recognition and whether a Studienkolleg is required. Begin German study if relevant.' },
      { phase: '12–9 months before', detail: 'Sit language tests. Prepare certified translations — this takes longer than students expect.' },
      { phase: '9–6 months before', detail: 'Apply through uni-assist or directly, observing each programme’s deadline.' },
      { phase: '6–4 months before', detail: 'On admission, open the blocked account and book the visa appointment. Book the appointment as early as possible.' },
      { phase: '4–2 months before', detail: 'Attend the appointment with a complete file. Arrange accommodation.' },
      { phase: 'On arrival', detail: 'Complete city registration, university enrolment and the residence permit application within the stated deadlines.' },
    ],
    faqs: [
      { q: 'Is studying in Germany really free?', a: 'Most public universities charge no tuition for most programmes, but there is a semester contribution, and some states and programmes are exceptions. Private institutions charge normally. The accurate statement is that tuition is usually low or absent at public institutions — not that study is free.' },
      { q: 'What is a blocked account?', a: 'A bank account holding a specified sum that you cannot withdraw in full. It is released to you monthly after arrival, demonstrating you can support yourself. The amount is set nationally and revised, so check the current figure with the German mission.' },
      { q: 'Can I study entirely in English?', a: 'At master’s level, often yes. At undergraduate level it is much rarer. Either way, German matters for part-time work, internships and daily administration, so learning it is a practical decision regardless of your programme.' },
      { q: 'What is a Studienkolleg?', a: 'A preparatory year for students whose school-leaving qualification is not recognised as directly equivalent. It ends with an assessment examination. Whether you need one depends on your specific qualification and your intended subject.' },
      { q: 'Why does everyone say to book the visa appointment early?', a: 'Because appointment availability at German missions is often the binding constraint on the entire timeline. Students who have admission and funds in place still miss intakes waiting for a slot.' },
    ],
    verifyBeforePublishing: [
      'Current blocked account annual amount',
      'Semester contribution ranges',
      'Studienkolleg requirements for specific qualifications',
      'Post-study job-seeking residence permit duration',
    ],
  },

  /* ----------------------------------------------------- NEW ZEALAND */
  {
    slug: 'new-zealand',
    name: 'New Zealand',
    adjective: 'New Zealand',
    region: 'Oceania',
    language: 'English',
    intakes: ['February', 'July'],
    layout: 'editorial',
    accent: 'forest',
    heroImage: images.nzHarbour,
    cardImage: images.nzMountains,
    secondaryImage: images.studentsTalking,
    tertiaryImage: images.readingAlone,
    summary:
      'Eight universities, a national qualifications framework that makes levels directly comparable, and a code of practice governing student welfare.',
    cardNote: 'Small sector, strong consumer protections.',
    highlights: [
      'A single national qualifications framework makes levels directly comparable',
      'A statutory code of practice governs the care of international students',
      'Eight universities, each with recognisable specialisations',
    ],
    intro: [
      'New Zealand’s higher education sector is small and legible. Eight universities, a set of institutes of technology and polytechnics, and a national qualifications framework that assigns every award a level. You can see precisely how a diploma relates to a degree and how a degree relates to a postgraduate qualification, which removes much of the guesswork that makes other systems hard to compare.',
      'Student welfare is governed by a statutory code of practice that providers must follow. Combined with the scale of the sector, this produces an environment where institutions are accountable in specific, written ways — which matters more than it sounds when you are a long way from home.',
    ],
    whyStudy: [
      {
        title: 'The qualifications framework removes ambiguity',
        body:
          'Every qualification sits at a defined level on a national framework. Comparing a diploma with a bachelor’s degree, or a postgraduate diploma with a master’s, is a matter of reading the level rather than interpreting marketing.',
      },
      {
        title: 'A statutory code governs student care',
        body:
          'Providers enrolling international students must comply with a published code covering welfare, information and complaints. Obligations are written down and enforceable.',
      },
      {
        title: 'Small enough to compare properly',
        body:
          'Eight universities means you can research all of them. Each has clear specialisations and a distinct setting, from large city campuses to smaller university towns.',
      },
      {
        title: 'Distinctive research strengths',
        body:
          'Agricultural science, earth sciences, conservation biology and film production are areas where New Zealand institutions are internationally significant, shaped by the country’s geography and industries.',
      },
    ],
    popularFields: [
      { name: 'Agricultural and horticultural science', note: 'Internationally significant, supported by a major primary sector.' },
      { name: 'Environmental science and conservation', note: 'Field-based programmes tied to specific ecosystems.' },
      { name: 'Information technology', note: 'Offered across universities and institutes of technology at different framework levels.' },
      { name: 'Engineering', note: 'Accreditation matters for later professional recognition.' },
      { name: 'Film, screen and creative technologies', note: 'Linked to an established production industry.' },
      { name: 'Nursing and health science', note: 'Registration with the relevant board is separate from graduating.' },
    ],
    universityGuidance: {
      intro:
        'Because the sector is small, shortlisting is about matching specialisation and setting rather than filtering a long list.',
      points: [
        'Check the qualification’s level on the New Zealand Qualifications Framework so you know exactly what you are enrolling in.',
        'Confirm the provider is a signatory to the code of practice for international students.',
        'Decide between a university and an institute of technology based on how applied you want the programme to be.',
        'Consider the setting seriously — campus towns and large cities are very different in cost and experience.',
        'For regulated professions, confirm the registration pathway before enrolling.',
      ],
    },
    admissionRequirements: [
      { label: 'Academic record', detail: 'Assessed against New Zealand Qualifications Framework equivalents.' },
      { label: 'English proficiency', detail: 'Required by both the provider and the immigration authority, potentially at different levels.' },
      { label: 'Statement of intent', detail: 'Required for some postgraduate programmes and relevant to the visa assessment.' },
      { label: 'Portfolio', detail: 'For creative, design and architecture programmes.' },
      { label: 'Research proposal', detail: 'Required for research master’s and doctoral applications, with a supervisor identified.' },
      { label: 'Prerequisites', detail: 'Specific subjects or credits for some undergraduate and most specialist postgraduate programmes.' },
    ],
    englishTests: {
      intro:
        'Immigration New Zealand maintains its own list of accepted tests and scores for student visa purposes, which is separate from what a provider accepts for admission.',
      accepted: ['IELTS Academic', 'PTE Academic', 'TOEFL iBT', 'Cambridge English Qualifications', 'NZCEL (New Zealand-specific)'],
      note:
        'Check the immigration requirement alongside the provider requirement. A score sufficient for admission is not automatically sufficient for the visa.',
    },
    costs: {
      intro:
        'Tuition, living costs, insurance and the funds requirement are separate, and the visa process asks about all of them.',
      rows: [
        { item: 'Tuition', note: 'Published per programme by each provider and varying by framework level.' },
        { item: 'Living costs', note: 'Auckland and Wellington differ noticeably from smaller university towns.' },
        { item: 'Insurance', note: 'Appropriate medical and travel insurance is a visa requirement for the full period of study.' },
        { item: 'Funds requirement', note: 'A specified annual amount for living costs that must be evidenced.' },
        { item: 'Visa application fee', note: 'Set by Immigration New Zealand and revised periodically.' },
      ],
      caveat:
        'The living costs figure Immigration New Zealand requires you to evidence is specified and revised. Check the current amount on their site rather than planning from an older figure.',
    },
    scholarships: {
      intro:
        'Funding is predominantly institutional, with government schemes available for students from specific countries.',
      items: [
        { name: 'University international scholarships', body: 'Awarded on academic merit, typically as a partial fee reduction, at the point of admission.' },
        { name: 'New Zealand Scholarships', body: 'Government-funded scholarships for students from eligible countries, with development objectives and published criteria.', href: 'https://www.mfat.govt.nz/en/aid-and-development/new-zealand-scholarships/' },
        { name: 'Doctoral scholarships', body: 'Doctoral candidates at New Zealand universities may be eligible for domestic-rate tuition and dedicated scholarship schemes.' },
        { name: 'Faculty awards', body: 'Smaller, subject-specific and administered within departments.' },
      ],
    },
    visa: {
      name: 'Fee paying student visa',
      intro:
        'Applications are made to Immigration New Zealand, usually online. Assessment covers whether your study plan is genuine, whether you can support yourself and whether you meet health and character requirements.',
      steps: [
        { title: 'Receive an offer of place', body: 'From a provider approved to enrol international students.' },
        { title: 'Pay tuition as required', body: 'Many applicants need a receipt showing fees paid or a fee protection arrangement in place.' },
        { title: 'Evidence funds for living costs', body: 'At the level specified by Immigration New Zealand for your study period.' },
        { title: 'Arrange insurance', body: 'Acceptable medical and travel insurance for the full duration of study is required.' },
        { title: 'Submit the application', body: 'Online, with health and character documentation as requested, including chest x-rays or medicals where applicable.' },
        { title: 'Decision and conditions', body: 'Granted visas carry conditions covering work, course changes and the period of stay.' },
      ],
      official: {
        label: 'Immigration New Zealand — Fee paying student visa',
        href: 'https://www.immigration.govt.nz/new-zealand-visas/visas/visa/fee-paying-student-visa',
      },
    },
    documents: [
      'Offer of place from an approved provider',
      'Valid passport',
      'Evidence of tuition payment or fee protection',
      'Evidence of funds for living costs',
      'Acceptable medical and travel insurance',
      'English language test result',
      'Academic transcripts and certificates',
      'Medical and chest x-ray certificates where required',
      'Police certificates where required',
    ],
    timeline: [
      { phase: '12–10 months before', detail: 'Shortlist providers and check qualification levels on the framework. Decide between February and July.' },
      { phase: '10–8 months before', detail: 'Sit the English test against both provider and immigration requirements. Prepare documents.' },
      { phase: '8–6 months before', detail: 'Apply and accept an offer of place. Arrange fee payment.' },
      { phase: '5–3 months before', detail: 'Assemble financial evidence, arrange insurance and submit the visa application.' },
      { phase: '2–1 months before', detail: 'Confirm accommodation and travel. Read your visa conditions carefully.' },
    ],
    faqs: [
      { q: 'What does the qualifications framework actually do for me?', a: 'It assigns every qualification a level, so you can see exactly how a diploma compares with a degree or a postgraduate diploma with a master’s. It makes comparing programmes a matter of reading rather than interpreting.' },
      { q: 'What is the code of practice?', a: 'A statutory code that providers enrolling international students must follow, covering welfare, information and complaints. If something goes wrong, your provider has written obligations rather than discretionary goodwill.' },
      { q: 'Are eight universities enough choice?', a: 'For most students, yes — and the small number means you can research all of them properly. Institutes of technology and polytechnics add applied options at a range of framework levels.' },
      { q: 'How much money do I need to show?', a: 'Immigration New Zealand specifies an annual living costs amount that is revised periodically. We will help you evidence it correctly, but check the current figure on their site.' },
      { q: 'Can I work while studying?', a: 'Work rights are attached to the visa as conditions and depend on your programme and level. Your visa conditions state what applies to you specifically.' },
    ],
    verifyBeforePublishing: [
      'Annual living costs evidence requirement',
      'Student visa work condition hours',
      'Post-study work visa eligibility by qualification level',
      'Visa application fee and levy',
    ],
  },
]

/** Lookup by slug. */
export const getDestination = (slug) => destinations.find((d) => d.slug === slug)

/** Compact list used by the header dropdown and footer. */
export const destinationLinks = destinations.map((d) => ({
  label: d.shortName || d.name,
  to: `/destinations/${d.slug}`,
}))

export default destinations
