/**
 * Frequently asked questions
 * ---------------------------------------------------------------
 * Grouped for /faq. Individual destination and service pages keep
 * their own, more specific, question sets alongside their content.
 *
 * Answers avoid stating current legal requirements as fact. Where a
 * question has an answer that changes — fees, thresholds, work
 * rights, processing times — the answer says so and points at the
 * authority that sets it.
 */

export const faqGroups = [
  {
    id: 'study-abroad',
    title: 'Studying abroad',
    intro: 'The questions that come up before a country or a course has been chosen.',
    items: [
      {
        q: 'How far in advance should I start planning?',
        a: 'Between twelve and eighteen months before your intended intake, depending on the destination. The United States needs the longest run because standardised tests and funding deadlines come early. The binding constraint is rarely the application itself — it is the English test, the financial holding period and, in some countries, visa appointment availability.',
      },
      {
        q: 'Can I study abroad with an average academic record?',
        a: 'Often, yes. Institutions differ enormously in what they require, and a shortlist built around your actual record rather than around reputation usually produces genuine options. What matters is that the shortlist is honest: applying only to programmes well above your profile wastes a year.',
      },
      {
        q: 'Is a gap in my education a problem?',
        a: 'It needs explaining, not hiding. Work, illness, family responsibility or preparation for an examination are all ordinary reasons. Institutions and visa officers both look for an account that is consistent and supported by documents where possible.',
      },
      {
        q: 'Should I choose the country first or the course first?',
        a: 'The course, in most cases. The programme determines what you learn and what you can do afterwards; the country determines cost, visa process and lifestyle. Students who pick a country first often end up in a programme that was not their first choice of subject.',
      },
      {
        q: 'Do I need an agent or consultant at all?',
        a: 'No. Every application in this process can be made directly, and the official information is published. A consultancy is useful if you want the research narrowed, the documents checked and the timeline managed by someone who has done it before. It is not a requirement, and anyone implying otherwise is overselling.',
      },
      {
        q: 'How do you choose which universities to recommend?',
        a: 'By fit — your academic record, your field, your budget and your intake — and by checking accreditation and recognition. Where any commercial relationship with an institution exists, you will be told about it at the point that institution is recommended.',
      },
    ],
  },
  {
    id: 'admissions',
    title: 'Admissions and applications',
    intro: 'How applications are assessed, and what you control.',
    items: [
      {
        q: 'How many universities should I apply to?',
        a: 'Usually five to eight, spread across ambitious, well-matched and safer options. Beyond that, the quality of each application starts to fall, and a weak application does not become stronger by being one of many.',
      },
      {
        q: 'What is a conditional offer?',
        a: 'An offer that depends on you meeting stated conditions — a final result, a test score, a document. It becomes unconditional once the conditions are met and confirmed. In sponsorship-based systems such as the UK, the visa process cannot begin until that happens.',
      },
      {
        q: 'Will you write my statement of purpose?',
        a: 'No. We structure it, question it and edit it over several drafts, but the writing is yours. Beyond the integrity point, there is a practical one: where a visa interview is part of the process, you may be asked about what you wrote.',
      },
      {
        q: 'Do I need standardised tests like the GRE or GMAT?',
        a: 'It depends on the programme. Many institutions have made them optional and many have not, and the answer sometimes differs between the master’s and the doctoral track within one department. It has to be checked per programme.',
      },
      {
        q: 'How important are letters of recommendation?',
        a: 'More important at postgraduate level, and most useful when the referee knows your work well enough to be specific. A detailed letter from a direct supervisor is worth more than a formal one from a senior person who taught you once.',
      },
      {
        q: 'What happens if I am rejected?',
        a: 'We look at what the rejections have in common. Sometimes the answer is a different programme type, sometimes a later intake with an improved score, and sometimes a shortlist that was too ambitious. It is a diagnosis, not a verdict.',
      },
    ],
  },
  {
    id: 'visas',
    title: 'Student visas',
    intro: 'Decisions here belong to governments. These answers describe the process, not the outcome.',
    items: [
      {
        q: 'Can you guarantee my visa will be approved?',
        a: 'No. Visa decisions are made by the government of the destination country, and no consultancy anywhere can guarantee one or influence an officer. What we can do is prepare a complete, consistent, well-evidenced application, which is the part that is within anyone’s control.',
      },
      {
        q: 'What causes most visa refusals?',
        a: 'In our experience: financial evidence that does not meet the stated requirement, inconsistencies between documents, and an account of study plans that does not hold together. All three are preventable with preparation.',
      },
      {
        q: 'How long does a student visa take?',
        a: 'It varies by country, by the post you apply through and by time of year. Each authority publishes current processing estimates that update regularly. We plan backwards from your intake with a margin rather than from an average.',
      },
      {
        q: 'Do I need to attend an interview?',
        a: 'For the United States, an interview is standard for most applicants. Most other destinations assess the application documentarily, though they may request an interview. We prepare you for the substance where one applies.',
      },
      {
        q: 'Can I work while studying?',
        a: 'Work rights are attached to your visa as conditions and differ by country, course level and year of entry. Several destinations have revised them more than once recently. Read the conditions on your own visa grant rather than relying on what applied to someone else.',
      },
      {
        q: 'What if my visa is refused?',
        a: 'The authority states a ground for refusal. We read it with you and advise honestly on whether it is addressable. Sometimes the answer is to reapply with a corrected file; sometimes it is to change the plan.',
      },
    ],
  },
  {
    id: 'scholarships',
    title: 'Scholarships and funding',
    intro: 'What funding realistically looks like, and when to apply for it.',
    items: [
      {
        q: 'Can I study abroad entirely on a scholarship?',
        a: 'It happens, mostly at doctoral level and through a small number of national schemes. For most taught programmes the realistic outcome is a partial fee reduction. Build your plan on funding you have, and treat anything further as an improvement.',
      },
      {
        q: 'When should I apply for scholarships?',
        a: 'Alongside your applications, not after. Many scholarship deadlines fall before or with the admission deadline, and some require you to have already applied to the programme.',
      },
      {
        q: 'Are scholarships only for top students?',
        a: 'Merit awards are competitive, but need-based awards, country-specific schemes and small departmental funds use different criteria. Mapping eligibility properly usually turns up more than students expect.',
      },
      {
        q: 'Do you charge a percentage of any scholarship I receive?',
        a: 'No. Our fees are not contingent on scholarship outcomes, which keeps the advice about what you should apply for rather than what would pay us most.',
      },
    ],
  },
  {
    id: 'english-tests',
    title: 'English language tests',
    intro: 'Choosing a test, and the two requirements it has to satisfy.',
    items: [
      {
        q: 'Which test should I take?',
        a: 'Whichever your destination and programme accept, and whichever suits how you perform. Sit a practice test of each before booking — two hours of trying is more informative than any amount of asking which is easier.',
      },
      {
        q: 'Is there more than one English requirement?',
        a: 'Usually, yes. Your institution sets one for admission and the immigration authority may set another for the visa. They are not always the same, and some destinations require the test to be taken at a specific type of approved centre for visa purposes.',
      },
      {
        q: 'Do individual section scores matter?',
        a: 'Often more than the overall band. Many programmes and visa routes set a minimum per section, so an overall score that looks sufficient can still fall short on one component.',
      },
      {
        q: 'How long is a test result valid?',
        a: 'Results have a validity period, and institutions and immigration authorities may each apply their own rules about how recent a result must be. Both need checking against your intended intake.',
      },
      {
        q: 'Can I retake the test?',
        a: 'Yes, and you should plan for the possibility. Book the first attempt early enough that a second fits before your deadlines. Losing an intake to half a band is a common and avoidable outcome.',
      },
    ],
  },
  {
    id: 'financial-documents',
    title: 'Financial documentation',
    intro: 'Evidencing funds in a form that can be verified.',
    items: [
      {
        q: 'How much money do I need to show?',
        a: 'Each destination sets its own requirement and revises it. We do not publish figures, because a stale number is worse than none. Check the current amount on the relevant government source, and hold a margin above it for exchange rate movement.',
      },
      {
        q: 'Whose bank account can the funds be in?',
        a: 'Your own is simplest. A parent or sponsor is normally acceptable with supporting evidence — proof of relationship, a sponsorship letter, and often the sponsor’s own documentation. Accounts belonging to someone with no documented relationship to you are a problem.',
      },
      {
        q: 'Why does the holding period matter?',
        a: 'Several countries require funds to have been held for a specified consecutive period before you apply. A lump sum deposited days before the application does not satisfy a twenty-eight day requirement, regardless of its size. Plan the period backwards from your application date.',
      },
      {
        q: 'Will a large recent deposit cause a problem?',
        a: 'It will be noticed and it needs an explanation supported by a document — a sale deed, a loan sanction letter, a gift declaration. Unexplained, it reads as funds borrowed to pass a check and returned afterwards.',
      },
      {
        q: 'Are education loans accepted?',
        a: 'Generally yes, where the documentation shows the sanctioned amount, the disbursement arrangement and that the loan relates to this course. Requirements differ by destination, so the sanction letter needs checking against the specific rules.',
      },
    ],
  },
]

export const getFaqGroup = (id) => faqGroups.find((g) => g.id === id)

/** Flattened, for search and for structured data. */
export const allFaqs = faqGroups.flatMap((g) => g.items.map((i) => ({ ...i, group: g.title, groupId: g.id })))

export default faqGroups
