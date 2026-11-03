/**
 * Legal page content
 * ---------------------------------------------------------------
 * ⚠ PLACEHOLDER CONTENT — NOT LEGAL ADVICE.
 *
 * These are structural drafts showing what each document normally
 * covers. They are not jurisdiction-specific and have not been
 * reviewed by a lawyer. Have them drafted or reviewed against the
 * law that applies to your business before publishing.
 *
 * `lastReviewed` stays null until a real review happens; the page
 * renders a warning while it is null.
 */

export const legalPages = {
  'privacy-policy': {
    title: 'Privacy policy',
    kicker: 'Legal',
    lead: 'How this website and this consultancy handle personal information.',
    lastReviewed: null,
    sections: [
      {
        heading: 'Who this policy covers',
        body: [
          'This policy describes how we collect, use and store personal information about students, parents and other people who contact us or use this website.',
          'Replace this paragraph with your registered business name, your registered address and, where the applicable law requires one, the contact details of your data protection officer or representative.',
        ],
      },
      {
        heading: 'Information we collect',
        body: ['We collect information in the following ways:'],
        list: [
          'Information you give us directly through enquiry and consultation forms — typically your name, email address, telephone number, country of residence, academic background and study plans.',
          'Information you give us during counselling, which may include academic transcripts, test results and information about your financial circumstances where that is relevant to an application.',
          'Technical information collected automatically when you visit this website, such as your approximate location, browser type and the pages you view.',
        ],
      },
      {
        heading: 'How we use it',
        body: ['We use personal information to:'],
        list: [
          'Respond to your enquiry and arrange a consultation.',
          'Provide counselling, prepare applications and assemble documentation on your instructions.',
          'Submit applications to institutions and, where you ask us to, to immigration authorities.',
          'Meet our own legal, accounting and regulatory obligations.',
        ],
      },
      {
        heading: 'Sharing with third parties',
        body: [
          'Applying to study abroad necessarily involves sharing your information with other organisations. We share what is needed with the universities and institutions you apply to, and, where you instruct us, with immigration authorities, English language test providers and credential evaluation services.',
          'List here any other processors you use — for example a CRM, an email provider or a cloud storage service — and where they store data. We do not sell personal information to anyone.',
        ],
      },
      {
        heading: 'How long we keep it',
        body: [
          'State your actual retention periods here. A common structure is to keep active application files for the duration of the engagement plus a defined period afterwards, and to retain accounting records for the period your tax authority requires.',
        ],
      },
      {
        heading: 'Your rights',
        body: [
          'Depending on where you live, you may have rights to access the personal information we hold about you, to have it corrected or erased, to restrict or object to how we use it, and to receive a copy in a portable format.',
          'Set out here how someone exercises those rights, how long you take to respond, and which supervisory authority they can complain to. These rights and the relevant authority differ by jurisdiction.',
        ],
      },
      {
        heading: 'Cookies and analytics',
        body: [
          'This website as supplied sets no analytics or advertising cookies and loads no third-party trackers. If you add analytics, advertising pixels or embedded content, update this section and add a consent mechanism where the applicable law requires one.',
        ],
      },
      {
        heading: 'Security',
        body: [
          'Describe the measures you actually take. Note that enquiry forms on this site are not an appropriate channel for passports, financial statements or other identity documents; we ask students to share those through a method we confirm separately.',
        ],
      },
      {
        heading: 'Changes to this policy',
        body: ['State how you will notify people of material changes, and keep the review date at the top of this page current.'],
      },
    ],
  },

  'terms-and-conditions': {
    title: 'Terms and conditions',
    kicker: 'Legal',
    lead: 'The terms on which this website is provided and our services are supplied.',
    lastReviewed: null,
    sections: [
      {
        heading: 'About these terms',
        body: [
          'These terms govern your use of this website and, where you engage us, the provision of our counselling and application support services.',
          'Insert your registered business name, registration number and registered address, and state which country’s law governs these terms and which courts have jurisdiction.',
        ],
      },
      {
        heading: 'What we provide',
        body: [
          'We provide independent counselling, university and course selection guidance, application support, scholarship guidance and student visa documentation support. The scope of work for any individual student is set out in a separate written engagement.',
        ],
      },
      {
        heading: 'What we do not provide',
        body: ['We want this to be unambiguous:'],
        list: [
          'We do not guarantee admission to any institution. Admission decisions are made by institutions on their own criteria.',
          'We do not guarantee the grant of any visa or immigration permission. Those decisions are made by government authorities.',
          'We do not provide immigration advice where doing so is a regulated activity, unless we hold the relevant authorisation and have told you so.',
          'We do not provide legal, tax or financial advice.',
          'We do not guarantee any scholarship, bursary or other funding award.',
        ],
      },
      {
        heading: 'Your responsibilities',
        body: ['Engaging us does not transfer responsibility for your application. You are responsible for:'],
        list: [
          'Giving us accurate, complete and current information, including any previous visa refusal for any country.',
          'Writing your own personal statements, statements of purpose and declarations.',
          'Reading and understanding any document before you sign or submit it.',
          'Meeting the conditions of any offer, visa or immigration permission granted to you.',
        ],
      },
      {
        heading: 'Fees and payment',
        body: [
          'Set out your fee structure, when payment is due, what is included, and what is charged separately — for example third-party costs such as application fees, test fees, credential evaluations, translations and visa charges.',
        ],
      },
      {
        heading: 'Cancellation and refunds',
        body: [
          'State your cancellation terms and refund policy, including any cooling-off period that the applicable consumer law requires you to offer.',
        ],
      },
      {
        heading: 'Commercial relationships',
        body: [
          'Where we receive a commission or other benefit from an institution in connection with a student’s enrolment, we disclose that to the student at the point we recommend that institution. Describe your actual arrangements here.',
        ],
      },
      {
        heading: 'Limitation of liability',
        body: [
          'Have this section drafted by a lawyer. Limitation and exclusion clauses are strictly regulated and an unenforceable clause can be worse than none, particularly in consumer contracts.',
        ],
      },
      {
        heading: 'Website content',
        body: [
          'Information on this website is general orientation and is not advice for your circumstances. Immigration rules, fees, financial thresholds and institutional requirements change frequently. Always confirm current requirements with the relevant government authority or institution before acting.',
        ],
      },
    ],
  },

  disclaimer: {
    title: 'Disclaimer',
    kicker: 'Legal',
    lead: 'What the information on this website is, and what it is not.',
    lastReviewed: null,
    sections: [
      {
        heading: 'General information only',
        body: [
          'Everything published on this website is general information intended to help students orient themselves. It is not advice for your particular circumstances, and it should not be relied on as the basis for a decision without speaking to a counsellor or checking the relevant official source.',
        ],
      },
      {
        heading: 'Immigration information changes',
        body: [
          'Visa requirements, financial thresholds, application fees, processing times, work rights and post-study options change regularly, sometimes more than once a year, and they differ by nationality and country of residence.',
          'Where this site refers to any of those, it links to the government authority responsible. If this site and that authority disagree, the authority is correct. We deliberately do not publish specific figures for thresholds and fees for this reason.',
        ],
      },
      {
        heading: 'No guarantee of outcomes',
        body: [
          'Admission decisions are made by institutions. Visa and immigration decisions are made by government authorities. Scholarship decisions are made by universities, governments and foundations. We do not control any of these, cannot guarantee any of them, and do not publish success rates, which in this industry are generally unverifiable.',
        ],
      },
      {
        heading: 'Third-party information and links',
        body: [
          'This website links to external sites, including government and institutional sites. We do not control their content and are not responsible for it. Links are provided because they are the authoritative source, not as an endorsement of anything else on those sites.',
        ],
      },
      {
        heading: 'Institutional information',
        body: [
          'The university directory on this site holds publicly available reference information. Listing an institution is not a claim of affiliation, partnership, endorsement or representation, and we hold no official representative status unless explicitly stated. Entry requirements, fees and programme availability must be confirmed with each institution directly.',
        ],
      },
      {
        heading: 'Photography',
        body: [
          'Photographs on this website are stock or illustrative images unless captioned otherwise. They do not depict students we have worked with, and no student appears on this site without written consent.',
        ],
      },
      {
        heading: 'Professional advice',
        body: [
          'Nothing on this website constitutes legal, immigration, financial or tax advice. Where your situation requires regulated advice, consult a professional qualified and authorised in the relevant jurisdiction.',
        ],
      },
    ],
  },
}

export const getLegalPage = (slug) => legalPages[slug]
