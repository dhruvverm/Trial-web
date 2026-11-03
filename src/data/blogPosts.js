/**
 * Blog / resource articles
 * ---------------------------------------------------------------
 * Articles are stored as structured blocks rather than HTML strings,
 * so the renderer can build a table of contents from the `h2` blocks
 * and estimate reading time from the actual word count instead of
 * carrying a hard-coded number that drifts when copy is edited.
 *
 * Block types: 'p' | 'h2' | 'h3' | 'ul' | 'ol' | 'note' | 'pull'
 *
 * Bylines use the consultancy's editorial team rather than invented
 * individual authors. Replace `author` with real names once your
 * team is published on /about.
 */

import { images } from './images.js'

export const blogCategories = [
  'Applications',
  'Visas & Immigration',
  'Destinations',
  'Scholarships',
  'English Tests',
  'Student Finance',
  'Life Abroad',
]

const EDITORIAL = { name: 'Meridian Editorial Team', role: 'Counselling team', isPlaceholder: true }

export const blogPosts = [
  {
    slug: 'one-year-or-two-year-masters',
    title: 'One year or two? How the length of a master’s changes everything else',
    excerpt:
      'The difference between a twelve-month and a twenty-four-month master’s is not just time. It changes cost, depth, internship access and how you will be read by employers.',
    category: 'Applications',
    tags: ['Master’s', 'Programme choice', 'Budget'],
    author: EDITORIAL,
    publishedAt: '2026-09-18',
    featured: true,
    image: images.libraryReading,
    body: [
      { type: 'p', text: 'Students usually arrive at this question through the budget. A one-year master’s in the UK or Ireland halves both tuition and living costs compared with a two-year programme in the United States or Germany, and it returns you to the job market a year earlier. On a spreadsheet the argument looks settled.' },
      { type: 'p', text: 'It is worth slowing down, because the length of a programme is not a single variable. It changes what the degree can contain, what you can do alongside it, and in some fields how the qualification is read.' },

      { type: 'h2', text: 'What a year actually buys you' },
      { type: 'p', text: 'A twelve-month taught master’s is genuinely full. Teaching usually runs across two semesters with a dissertation or project over the summer. There is very little slack. If you need a month to adjust to a new country, a new academic culture and a new assessment style, that month comes out of your first semester.' },
      { type: 'p', text: 'A two-year programme has space built into it. That space is where internships, research assistantships, teaching work and a change of specialisation live. In the United States in particular, the summer between the first and second year is when many students do the internship that leads to their first job.' },
      { type: 'pull', text: 'The question is not which is better. It is which one matches what you need the degree to do.' },

      { type: 'h2', text: 'When the shorter programme is clearly right' },
      { type: 'ul', items: [
        'You already have relevant professional experience and need a credential rather than a conversion.',
        'You are returning to an employer or a market that knows the one-year format well.',
        'Your budget is tight enough that a second year would mean borrowing substantially more.',
        'You are clear about your specialisation and do not need time to explore.',
      ]},

      { type: 'h2', text: 'When the longer programme earns its cost' },
      { type: 'ul', items: [
        'You are changing field and need foundational coursework before the advanced material.',
        'Your target role is one where a summer internship is the normal route in.',
        'You want to move into research and need time to build a relationship with a supervisor.',
        'Funding is available through an assistantship, which changes the net cost considerably.',
      ]},

      { type: 'h2', text: 'The recognition question' },
      { type: 'p', text: 'One-year master’s degrees are the standard format across the UK, Ireland and much of Europe, and are understood as such in those markets. If you intend to work in a country where two years is the norm, or to apply for a doctoral programme elsewhere, it is worth checking how the qualification is assessed there before you commit. This is a question with a factual answer, and it is better answered before you apply than afterwards.' },

      { type: 'note', text: 'Programme structures and recognition arrangements differ by country and by profession. Where a qualification needs to be recognised for licensure or further study, check with the relevant professional or academic body rather than relying on general guidance.' },

      { type: 'h2', text: 'A practical way to decide' },
      { type: 'p', text: 'Write down what you want to be doing eighteen months after you graduate, in one sentence. Then work backwards. If that sentence involves a specific employer or sector where internships are the entry route, the longer programme is probably buying you something real. If it involves returning to a role you already understand with a stronger qualification, the shorter one probably is.' },
      { type: 'p', text: 'Either way, calculate the full cost of both rather than comparing tuition alone. A second year of living costs, insurance and lost earnings is usually the larger number.' },
    ],
  },

  {
    slug: 'financial-documents-visa-officers-look-for',
    title: 'What visa officers actually look at in your financial documents',
    excerpt:
      'Most refusals on financial grounds are not about having too little money. They are about evidencing it in a form the officer can verify.',
    category: 'Visas & Immigration',
    tags: ['Financial evidence', 'Visa preparation'],
    author: EDITORIAL,
    publishedAt: '2026-08-22',
    featured: true,
    image: images.dataChart,
    body: [
      { type: 'p', text: 'Students who are refused on financial grounds are rarely students without money. They are usually students whose money was in the wrong place, in the wrong name, for the wrong length of time, or explained in a way that raised a question the officer could not resolve from the file in front of them.' },
      { type: 'p', text: 'A visa officer is doing something narrow: deciding whether the documents in front of them demonstrate, verifiably, that this applicant can pay for this course and support themselves while they study. Everything below follows from that.' },

      { type: 'h2', text: 'The amount is a floor, not a target' },
      { type: 'p', text: 'Every destination publishes a financial requirement. Meeting it exactly, to the last unit, is technically sufficient and practically risky — exchange rate movement between preparing documents and the decision can take you below the line. Holding a margin above the stated minimum removes an entire category of problem.' },

      { type: 'h2', text: 'Holding periods are checked precisely' },
      { type: 'p', text: 'Several countries require funds to have been held for a specified consecutive period before you apply. The UK is the most prescriptive about this, but it is not alone. A lump sum that appeared in the account three days before the application does not satisfy a twenty-eight day requirement, however large it is.' },
      { type: 'pull', text: 'This single point accounts for more avoidable refusals than any other in our experience.' },
      { type: 'p', text: 'Plan the holding period backwards from your application date, not forwards from when the money becomes available.' },

      { type: 'h2', text: 'Whose account the money sits in matters' },
      { type: 'p', text: 'Funds in your own account are the simplest case. Funds held by a parent or sponsor are normally acceptable, but they need accompanying evidence: proof of the relationship, a letter confirming the sponsor will fund your studies, and often the sponsor’s own financial documentation.' },
      { type: 'p', text: 'Funds in an account belonging to someone with no documented relationship to you are a problem. So are joint accounts where your interest is not clear from the document itself.' },

      { type: 'h2', text: 'Large recent deposits invite questions' },
      { type: 'p', text: 'A sudden large credit shortly before the application will be noticed. It is not disqualifying — people sell property, receive gifts and take loans — but it needs an explanation supported by a document. A sale deed, a loan sanction letter, a gift declaration. Unexplained, it reads as money borrowed to pass a test and returned afterwards, which is exactly what the rule exists to catch.' },

      { type: 'h2', text: 'The format is part of the requirement' },
      { type: 'ul', items: [
        'Statements usually need to be official — bank-issued, stamped or carrying verifiable digital authentication. A printed screenshot of an app is rarely enough.',
        'Documents in another language generally need certified translation.',
        'Some authorities specify which account types count. Investments, fixed deposits and provident funds are treated differently from current accounts, and sometimes not accepted at all.',
        'Education loan letters usually need to show the sanctioned amount, the disbursement arrangement and that the loan is for this course.',
      ]},

      { type: 'h2', text: 'Consistency across the whole file' },
      { type: 'p', text: 'The figure on your financial documents, the figure on your offer or enrolment confirmation, and anything you state on the application form should agree. Where they differ, there should be a document explaining why. Internal contradictions are the thing a reviewing officer is trained to notice.' },

      { type: 'note', text: 'Financial requirements, accepted document formats and holding periods are set by each country’s immigration authority and are revised. Always check the current rules on the official government website for your destination before preparing documents. A counsellor can help you assemble and check a file, but the requirement itself comes from the authority.' },

      { type: 'h2', text: 'A short checklist' },
      { type: 'ol', items: [
        'Find the current required amount on the official government source.',
        'Add a margin above it for exchange rate movement.',
        'Check the required holding period and count backwards from your intended application date.',
        'Decide whose account the funds will sit in, and gather the relationship and sponsorship documents that implies.',
        'Obtain statements in an official, verifiable format, translated if necessary.',
        'Prepare an explanation, with evidence, for any large recent credit.',
        'Read the whole file once as if you were the officer, looking only for contradictions.',
      ]},
    ],
  },

  {
    slug: 'ielts-or-pte-choosing',
    title: 'IELTS or PTE: a practical way to choose',
    excerpt:
      'Both are widely accepted. The useful question is not which test is easier, but which one suits how you perform and what your destination requires.',
    category: 'English Tests',
    tags: ['IELTS', 'PTE', 'Test preparation'],
    author: EDITORIAL,
    publishedAt: '2026-07-30',
    featured: false,
    image: images.englishBook,
    body: [
      { type: 'p', text: 'The question usually arrives as "which is easier". It is the wrong question, and the honest answer — neither, consistently — is unsatisfying. The useful question is which test suits the way you perform, and which one your destination and programme will accept.' },

      { type: 'h2', text: 'Start with acceptance, not preference' },
      { type: 'p', text: 'There are two separate acceptance questions: what your university will take for admission, and what the immigration authority will take for a visa. They are not always the same, and in some countries the visa process requires a test taken at a specific type of approved centre.' },
      { type: 'p', text: 'Booking the wrong version of a test you otherwise passed is an expensive, entirely avoidable mistake. Confirm both requirements before you book anything.' },

      { type: 'h2', text: 'How the two differ in practice' },
      { type: 'h3', text: 'Speaking' },
      { type: 'p', text: 'IELTS uses a face-to-face interview with an examiner. PTE records you speaking to a computer, scored automatically. Some candidates find the human interaction steadying; others find it intimidating and prefer a microphone. This is personal, and a practice attempt at each tells you more than any description.' },
      { type: 'h3', text: 'Scoring and results' },
      { type: 'p', text: 'PTE is scored by algorithm and results typically arrive quickly. IELTS involves human assessment of writing and speaking. If your timeline is compressed, turnaround is a practical consideration.' },
      { type: 'h3', text: 'Integrated skills' },
      { type: 'p', text: 'PTE tasks frequently combine skills — listening and then writing, reading and then speaking — and a single response can contribute to more than one score. IELTS keeps the four sections more distinct. Candidates who are much stronger in some skills than others sometimes find one structure more forgiving than the other.' },

      { type: 'pull', text: 'Sit a free practice test of each before you book. Two hours of trying beats two weeks of asking people which is easier.' },

      { type: 'h2', text: 'Mind the section minimums' },
      { type: 'p', text: 'Many programmes and visa routes set a minimum for each section as well as an overall score. A strong overall result with one weak section can still fall short. Check the per-section requirement for your specific programme, not just the headline number.' },

      { type: 'h2', text: 'Book early enough to sit it twice' },
      { type: 'p', text: 'Plan the first attempt early enough that a second is possible without threatening your application deadlines. Students who book late and score just below the requirement lose an intake to a gap of half a band.' },

      { type: 'note', text: 'Accepted tests, minimum scores, approved test centres and result validity periods are set by individual institutions and by immigration authorities, and they change. Confirm both requirements for your specific programme and destination before booking.' },
    ],
  },

  {
    slug: 'canada-uk-australia-compared',
    title: 'Canada, the UK and Australia: what actually separates them',
    excerpt:
      'Three destinations that dominate every shortlist, compared on the things that genuinely differ rather than on general reputation.',
    category: 'Destinations',
    tags: ['Canada', 'UK', 'Australia', 'Comparison'],
    author: EDITORIAL,
    publishedAt: '2026-10-07',
    featured: true,
    image: images.campusQuad,
    body: [
      { type: 'p', text: 'Almost every shortlist we see contains at least two of these three. They are all English-speaking, all have large and well-regulated higher education sectors, and all attract substantial numbers of international students. The marketing material for each is close to interchangeable. The actual differences are structural, and they matter.' },

      { type: 'h2', text: 'Programme length and shape' },
      { type: 'p', text: 'The UK’s taught master’s is typically twelve months. Australian coursework master’s programmes are commonly eighteen months to two years. Canada runs both degrees and post-graduate diplomas, with diplomas often shorter and more vocational, frequently including a co-op term.' },
      { type: 'p', text: 'This single difference moves the total cost more than any other factor, because it multiplies living costs as well as tuition.' },

      { type: 'h2', text: 'How the system is governed' },
      { type: 'ul', items: [
        'Canada devolves significant authority to the provinces. Where you study affects institutional designation, the attestation process and parts of what follows graduation.',
        'The UK operates a sponsorship model: your institution issues a CAS and holds part of your immigration status.',
        'Australia maintains a public register of providers and courses approved to enrol international students, and legislates student protections nationally.',
      ]},
      { type: 'p', text: 'Three different relationships between you, your institution and the state. Each produces a different kind of paperwork and a different first checkpoint when you are assessing an institution.' },

      { type: 'h2', text: 'The calendar' },
      { type: 'p', text: 'The UK and Canada run a northern hemisphere year, with the main intake in September. Australia begins in February with a substantial July intake. For a student finishing a qualification in the middle of the year, the Australian calendar can remove an idle six months — or create one, depending on which way the dates fall.' },

      { type: 'h2', text: 'Cost structure' },
      { type: 'p', text: 'All three are expensive, but the shape differs. The UK compresses cost into a shorter period and adds a health surcharge paid up front. Australia requires private health cover for the duration. Canada’s costs vary considerably by province, and health coverage arrangements differ between them.' },
      { type: 'p', text: 'Comparing tuition alone will mislead you. Compare total cost over the full programme, including insurance, visa charges and the funds you must evidence.' },

      { type: 'note', text: 'We have deliberately not included figures. Tuition, living costs, financial thresholds and post-study work rules change in all three countries, sometimes more than once a year. Work from the official government and institutional sources, which are linked on each of our destination pages.' },

      { type: 'h2', text: 'Choosing between them' },
      { type: 'p', text: 'If budget is the binding constraint and you are clear about your specialisation, the UK’s one-year format is a strong argument. If you want a placement built into the programme, Canadian co-op and Australian industry-linked programmes do that more systematically. If your field is in agriculture, marine science or mining, Australia has depth the other two do not.' },
      { type: 'p', text: 'And if the honest answer is that you do not yet know what you want to specialise in, none of these three may be the best fit — which is a legitimate conclusion worth reaching early.' },
    ],
  },

  {
    slug: 'statement-of-purpose-second-reading',
    title: 'Writing a statement of purpose that survives a second reading',
    excerpt:
      'Admissions readers see thousands of these. The ones that work are specific, structured, and sound like the person who wrote them.',
    category: 'Applications',
    tags: ['Statement of purpose', 'Writing'],
    author: EDITORIAL,
    publishedAt: '2026-06-14',
    featured: false,
    image: images.writingNotes,
    body: [
      { type: 'p', text: 'A statement of purpose is read quickly the first time and carefully the second. The first reading decides whether there is a second. Most statements fail on the first because they open with a sentence the reader has seen four hundred times, and the rest fail on the second because the specifics are not there.' },

      { type: 'h2', text: 'Do not open with your childhood' },
      { type: 'p', text: 'The sentence about being fascinated by computers since the age of seven is doing nothing. Neither is the dictionary definition, the inspirational quotation, or the claim that we live in an increasingly globalised world. Open with something only you could have written.' },
      { type: 'pull', text: 'If another applicant could sign their name to your opening paragraph, rewrite it.' },

      { type: 'h2', text: 'Be specific about the programme' },
      { type: 'p', text: 'Name the modules you want to take and say why. Name the faculty whose work is relevant to yours and say what about it. At graduate level, the reader is often the person whose research you are referring to, and a vague compliment is more revealing than silence.' },
      { type: 'p', text: 'This means writing a different statement for each programme. Not a different paragraph — a different statement. Readers can tell the difference between a tailored piece and a template with a find-and-replace.' },

      { type: 'h2', text: 'A structure that works' },
      { type: 'ol', items: [
        'A specific opening: a problem, a project, a decision — something concrete from your own experience.',
        'What you have done: academic and professional work, described with enough detail to be checkable.',
        'What you want to do next, and why this programme is the right vehicle for it.',
        'Why this institution specifically: modules, faculty, facilities, structure.',
        'Where this leads afterwards, stated plainly.',
      ]},

      { type: 'h2', text: 'Address weaknesses briefly and without drama' },
      { type: 'p', text: 'A poor semester, a gap year, a change of discipline — these are better acknowledged in two sentences than left for the reader to infer. State what happened, state what you did about it, move on. Do not apologise at length; it draws more attention to the problem than the problem deserves.' },

      { type: 'h2', text: 'Write it yourself' },
      { type: 'p', text: 'Beyond the obvious integrity point, there is a practical one. In destinations where a visa interview is part of the process, you may be asked about what you wrote. A statement you cannot speak to fluently is a liability. And readers who see a great many statements recognise ones that do not sound like the rest of the application.' },

      { type: 'h2', text: 'Then cut it' },
      { type: 'p', text: 'Most first drafts are forty per cent longer than they need to be. Remove every sentence that could appear in someone else’s statement. What remains is usually the good part.' },
    ],
  },

  {
    slug: 'scholarships-students-never-find',
    title: 'The scholarships students never find',
    excerpt:
      'Everyone applies to the famous schemes. The awards with realistic odds are usually the ones that are badly advertised.',
    category: 'Scholarships',
    tags: ['Funding', 'Scholarships'],
    author: EDITORIAL,
    publishedAt: '2026-05-21',
    featured: false,
    image: images.booksApple,
    body: [
      { type: 'p', text: 'Ask a student which scholarships they are applying for and you will usually hear two or three national schemes with recognisable names. These are worth applying to if you are eligible. They are also contested by enormous numbers of strong candidates, and building a funding plan around them is building on hope.' },
      { type: 'p', text: 'The awards with realistic odds are usually the ones nobody has heard of, for the simple reason that nobody has heard of them.' },

      { type: 'h2', text: 'Departmental and faculty awards' },
      { type: 'p', text: 'Most universities hold small funds administered at department or faculty level. They are often listed on a departmental page rather than the central scholarships page, sometimes several clicks from anywhere a prospective student would look. The amounts are modest. The applicant pools are correspondingly small.' },
      { type: 'p', text: 'Finding them means reading the department’s own site, not the university’s admissions portal, and sometimes emailing the departmental administrator to ask directly.' },

      { type: 'h2', text: 'Awards attached to a specific profile' },
      { type: 'ul', items: [
        'Country- or region-specific awards, sometimes restricted to a handful of nationalities.',
        'Subject-specific funds created by alumni or industry donors.',
        'Awards for students from particular educational or socio-economic backgrounds.',
        'Awards for women in fields where they are under-represented, and the equivalent in fields where men are.',
        'Awards tied to a professional body in your discipline.',
      ]},
      { type: 'p', text: 'The narrower the eligibility, the smaller the pool. A fund restricted to students from your country studying your subject at that university may receive very few applications.' },

      { type: 'h2', text: 'Automatic awards you must not miss' },
      { type: 'p', text: 'Some entrance scholarships are awarded automatically on the strength of your application. Others require a short separate form that is easy to overlook because it sits behind a different link. Check, for every institution, whether their merit awards need a separate application — and when its deadline falls, which is frequently before the admission deadline.' },

      { type: 'pull', text: 'Six applications prepared properly will out-perform forty submitted in a weekend.' },

      { type: 'h2', text: 'Write for the award, not from a template' },
      { type: 'p', text: 'A scholarship essay answers a different question from a statement of purpose. The statement argues that you should be admitted; the essay usually argues that you should be funded, which means engaging with whatever the award exists to achieve. A fund established to support students entering public service wants to read about public service.' },

      { type: 'note', text: 'Scholarship decisions are made by universities, governments and foundations. No consultancy can influence them or guarantee an award. Treat funding as something that may improve your position, not something your plan depends on.' },

      { type: 'h2', text: 'What a realistic outcome looks like' },
      { type: 'p', text: 'For most taught postgraduate students, a partial fee reduction is the realistic outcome. Full funding is concentrated at doctoral level and in a small number of national schemes. Plan on the basis of funding you have secured, and treat anything else as a welcome improvement rather than a line in the budget.' },
    ],
  },

  {
    slug: 'first-year-budget-forgotten-costs',
    title: 'Budgeting for your first year: the costs students forget',
    excerpt:
      'Tuition and rent are easy to find. The items that break a first-year budget are the ones nobody puts on a brochure.',
    category: 'Student Finance',
    tags: ['Budgeting', 'Living costs'],
    author: EDITORIAL,
    publishedAt: '2026-04-09',
    featured: false,
    image: images.accommodation,
    body: [
      { type: 'p', text: 'Every student arrives with a budget. Most of those budgets contain tuition, rent, food and flights, and most of them are wrong by a margin large enough to cause real stress in the second term. The error is almost never in the big numbers. It is in the dozen smaller ones that nobody mentions.' },

      { type: 'h2', text: 'The costs of arriving' },
      { type: 'ul', items: [
        'A rental deposit, often several weeks’ rent, paid before your first student payment arrives.',
        'Initial furnishing: bedding, kitchen basics, a desk lamp. Modest individually, substantial together.',
        'Winter clothing, if you are moving to a climate you do not own clothes for. This surprises students from warm countries every single year.',
        'A local phone plan and often a device deposit.',
        'Transport passes, sometimes charged termly or annually up front.',
      ]},

      { type: 'h2', text: 'The costs of being a student' },
      { type: 'ul', items: [
        'Course materials, which vary enormously by discipline — architecture and design students should budget separately for this.',
        'Printing, binding and submission costs, which are small until the dissertation.',
        'Field trips or lab fees where the programme includes them.',
        'Professional body student membership, if your field expects it.',
      ]},

      { type: 'h2', text: 'The costs of the process itself' },
      { type: 'p', text: 'Application fees, credential evaluations, certified translations, test fees and retakes, visa fees, health surcharges or insurance, biometrics appointments and medical examinations. None of these is large alone. Together they routinely add up to more than a month’s living costs, and they are all spent before you have travelled anywhere.' },

      { type: 'pull', text: 'Budget the application process as its own line item. It is not a rounding error.' },

      { type: 'h2', text: 'Exchange rate movement' },
      { type: 'p', text: 'If your funding is in one currency and your costs are in another, the rate will move over a year, possibly against you. Build in a margin. This also matters for visa financial evidence, where a rate shift between preparing documents and the decision can take you below a threshold you thought you had cleared.' },

      { type: 'h2', text: 'Transfer costs' },
      { type: 'p', text: 'Sending money internationally costs money, both in fees and in the spread between the real exchange rate and the one you are given. Over a year of regular transfers this quietly becomes a meaningful sum. Compare options before the first transfer, not after the tenth.' },

      { type: 'note', text: 'Costs vary by country, city and programme. Use the official cost-of-attendance or living-cost figures published by your institution and by the relevant immigration authority, and treat any figure from a third party as indicative only.' },

      { type: 'h2', text: 'A simple rule' },
      { type: 'p', text: 'Build the budget, then add a contingency of around ten per cent and a one-off settling-in sum on top. If you never need it, you have a buffer. If you do, you have avoided the kind of financial pressure that makes a difficult first term considerably worse.' },
    ],
  },

  {
    slug: 'why-your-intake-choice-matters',
    title: 'Why your intake choice matters more than you think',
    excerpt:
      'September is the default. It is not always the right answer, and the alternatives are less contested than students assume.',
    category: 'Applications',
    tags: ['Intakes', 'Planning'],
    author: EDITORIAL,
    publishedAt: '2026-03-12',
    featured: false,
    image: images.campusGlass,
    body: [
      { type: 'p', text: 'Most students apply for the main intake without considering whether it is the right one. In the UK and Canada that is September; in Australia and New Zealand, February. It is the largest intake, with the fullest range of programmes, and for many students it is correct. But it is a default rather than a decision, and defaults are worth examining.' },

      { type: 'h2', text: 'What the secondary intake offers' },
      { type: 'ul', items: [
        'Fewer applicants for the same programme, which can matter at competitive institutions.',
        'More accommodation availability, particularly in cities where housing is tight.',
        'Visa appointment slots that are less scarce than in the pre-September rush.',
        'More time to prepare: a better test score, stronger documents, a properly held financial position.',
      ]},

      { type: 'h2', text: 'What it costs you' },
      { type: 'ul', items: [
        'A narrower range of programmes — not every course admits in the secondary intake.',
        'Smaller cohorts, which some students find isolating and others prefer.',
        'Internship and placement cycles may not align with your academic calendar.',
        'Graduation timing may fall outside the main recruitment season in your field.',
      ]},

      { type: 'pull', text: 'The question is not which intake is better, but which one you can be properly ready for.' },

      { type: 'h2', text: 'The hemisphere problem' },
      { type: 'p', text: 'If you finish a qualification in June and apply to Australia, the February intake is eight months away. The July intake is one month away, which is usually too soon to prepare properly. The realistic choice is between a short gap with a rushed application and a longer gap with a strong one — and the strong one normally wins, particularly where scholarships are involved.' },

      { type: 'h2', text: 'Applying under-prepared is the real risk' },
      { type: 'p', text: 'The most common reason we suggest a later intake is not strategy but readiness. A student half a band short on their English test, or with funds that have not been held long enough to satisfy a visa requirement, is not ready. Applying anyway converts a delay you control into a refusal you do not.' },

      { type: 'h2', text: 'Work backwards, not forwards' },
      { type: 'p', text: 'Take the intake date and count back: visa processing, financial holding period, deposit, offer, application, references, test, preparation. If the arithmetic puts the starting point in the past, you have identified the wrong intake, and you have identified it early enough to do something about it.' },
    ],
  },

  {
    slug: 'first-two-weeks-after-you-land',
    title: 'The first two weeks after you land',
    excerpt:
      'Registration deadlines, a bank account, a phone, and finding people. The practical list for the fortnight nobody prepares you for.',
    category: 'Life Abroad',
    tags: ['Pre-departure', 'Arrival'],
    author: EDITORIAL,
    publishedAt: '2026-02-19',
    featured: false,
    image: images.studentsTalking,
    body: [
      { type: 'p', text: 'The visa arrives and the process feels complete. It is not. The fortnight after you land contains more administrative deadlines than the preceding six months, and you will be working through them jet-lagged, in an unfamiliar system, usually alone.' },

      { type: 'h2', text: 'Things with actual deadlines' },
      { type: 'ul', items: [
        'University enrolment or registration, which may need to happen in person within a few days of arrival.',
        'Immigration registration, where your destination requires it — some countries set short windows and apply consequences for missing them.',
        'City or address registration, which several European countries require shortly after you move in.',
        'Collection of any immigration document that must be picked up in person.',
      ]},
      { type: 'p', text: 'Find out which of these apply to you before you fly, and write down the deadline for each. These are not items to discover on arrival.' },

      { type: 'h2', text: 'Things that unlock everything else' },
      { type: 'p', text: 'A local bank account, a local phone number and proof of address tend to form a small circular dependency: each is easier to obtain once you have the others. Ask your university’s international office how students usually break the loop — most have a standard route, often involving a letter they can issue.' },

      { type: 'h2', text: 'Health' },
      { type: 'p', text: 'Register with a local doctor or health service in the first fortnight rather than when you first need one. If you take regular medication, carry enough for the transition and bring your prescription — availability and brand names differ between countries, and some medications that are routine at home require a local prescription or are not available at all.' },

      { type: 'pull', text: 'Register with a doctor before you need one. It takes twenty minutes in week one and is a genuine problem in week nine.' },

      { type: 'h2', text: 'Finding people' },
      { type: 'p', text: 'This matters more than the administrative list and gets less attention. Orientation week is awkward, and attending anyway is the single highest-return thing you can do in your first fortnight. Everyone is new, nobody knows anyone, and that is true for exactly one week.' },
      { type: 'p', text: 'Join something that meets weekly — a society, a sport, a study group. Weekly repetition is what turns acquaintances into friends, and term gets busy quickly.' },

      { type: 'h2', text: 'Know your visa conditions' },
      { type: 'p', text: 'Your visa carries conditions on work, course changes, travel and reporting. Read them yourself rather than relying on what another student was told — conditions differ by route, by course and by year of entry, and the consequences of breaching them are serious.' },

      { type: 'note', text: 'Registration requirements and deadlines differ by country, city and institution. Confirm what applies to you with your university’s international student office and the relevant immigration authority before you travel.' },

      { type: 'h2', text: 'Expect it to be hard for a while' },
      { type: 'p', text: 'The first month is disorienting for almost everyone, including the people who seem settled. That is a normal response to changing country, language, climate, academic system and social circle simultaneously. Most universities have free counselling services; using them early is sensible rather than dramatic.' },
    ],
  },
]

/** Words per minute used for the reading-time estimate. */
const WPM = 225

/** Estimate reading time from the actual body content. */
export function readingMinutes(post) {
  const words = post.body.reduce((n, block) => {
    if (block.text) return n + block.text.split(/\s+/).length
    if (block.items) return n + block.items.join(' ').split(/\s+/).length
    return n
  }, post.title.split(/\s+/).length)
  return Math.max(1, Math.round(words / WPM))
}

/** Headings, for the in-article table of contents. */
export function tableOfContents(post) {
  return post.body
    .filter((b) => b.type === 'h2')
    .map((b) => ({ text: b.text, id: slugifyHeading(b.text) }))
}

export const slugifyHeading = (text) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')

export const getPost = (slug) => blogPosts.find((p) => p.slug === slug)

export const relatedPosts = (post, count = 3) => {
  const sameCategory = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category)
  const others = blogPosts.filter((p) => p.slug !== post.slug && p.category !== post.category)
  return [...sameCategory, ...others].slice(0, count)
}

export const sortedPosts = () =>
  [...blogPosts].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))

export default blogPosts
