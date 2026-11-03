/**
 * Student success stories
 * ---------------------------------------------------------------
 * This array is EMPTY by design.
 *
 * Testimonials and student stories are only published with the
 * student's written permission. Rather than ship invented quotes,
 * /success-stories renders a designed empty state explaining the
 * policy, and switches to the story layout automatically once real
 * entries are added here.
 *
 * To publish a story, add an object in the shape below. Every field
 * except `photo` and `quote` is required by the renderer.
 *
 *   {
 *     id: 'unique-id',
 *     name: 'Student name as they wish to be credited',
 *     consentOnFile: true,        // must be true — nothing renders without it
 *     year: 2026,
 *     destination: 'canada',      // destination slug
 *     university: 'Institution name',
 *     course: 'Programme name',
 *     level: 'Postgraduate taught',
 *     quote: 'Their own words, unedited beyond length.',
 *     story: ['Paragraph one.', 'Paragraph two.'],
 *     photo: null,                // image manifest entry, or null
 *   }
 */

export const successStories = []

/** Only stories with consent recorded are ever rendered. */
export const publishedStories = () => successStories.filter((s) => s.consentOnFile === true)

export const storyPolicy = {
  heading: 'We publish student stories only with written consent',
  body: [
    'A consultancy website is an easy place to put words in a student’s mouth. Invented testimonials are common in this industry and they are difficult to tell apart from real ones, which is exactly why they work and exactly why we will not use them.',
    'Our policy is simple. We publish a student’s story only when that student has given written permission, reviewed what we have written, and agreed to how they are credited and whether their photograph appears. Consent can be withdrawn at any time, and the story comes down.',
    'Until students who have worked with us have given that permission, this page stays empty. We would rather show you nothing than show you something we made up.',
  ],
  alternative:
    'If you would like to speak to a former student before deciding, ask us during your consultation. Where a student has agreed to be contacted, we will arrange an introduction.',
}

export default successStories
