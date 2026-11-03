/**
 * University directory
 * ---------------------------------------------------------------
 * ⚠ REFERENCE DATA — compiled for demonstration.
 *
 * Each entry holds only attributes that are stable and publicly
 * verifiable: the institution's name, country, city, whether it is
 * public or private, the broad subject areas it teaches, and a link
 * to its own website.
 *
 * Deliberately NOT stored here:
 *   • rankings            — contested, and they change yearly
 *   • tuition fees        — set per programme and revised annually
 *   • acceptance rates    — rarely published reliably
 *   • partnerships        — we claim no affiliation with any
 *                           institution listed
 *
 * Listing an institution is not a claim of representation,
 * endorsement or partnership. Entry requirements and programme
 * availability must be confirmed on each institution's own site.
 *
 * REPLACING THIS WITH A LIVE SOURCE
 * ---------------------------------
 * Every consumer reads through `getUniversities()` / `getUniversity()`
 * below. Swap those two functions for API calls that return the same
 * shape and nothing else in the app needs to change.
 */

export const studyFields = [
  'Business & Management',
  'Computer Science & IT',
  'Engineering',
  'Health & Medicine',
  'Natural Sciences',
  'Social Sciences',
  'Arts & Humanities',
  'Law',
  'Agriculture & Environment',
  'Education',
]

export const degreeLevels = ['Undergraduate', 'Postgraduate taught', 'Postgraduate research']

const ALL_LEVELS = ['Undergraduate', 'Postgraduate taught', 'Postgraduate research']

/** @type {Array<{slug:string,name:string,country:string,city:string,type:string,setting:string,fields:string[],levels:string[],website:string,note:string}>} */
export const universities = [
  /* ------------------------------------------------------------ Canada */
  { slug: 'university-of-toronto', name: 'University of Toronto', country: 'canada', city: 'Toronto, Ontario', type: 'Public', setting: 'Multi-campus, urban',
    fields: ['Business & Management', 'Computer Science & IT', 'Engineering', 'Health & Medicine', 'Natural Sciences', 'Social Sciences', 'Arts & Humanities', 'Law'],
    levels: ALL_LEVELS, website: 'https://www.utoronto.ca/',
    note: 'Operates across three campuses in and around Toronto, with admission handled separately by faculty.' },
  { slug: 'university-of-british-columbia', name: 'University of British Columbia', country: 'canada', city: 'Vancouver, British Columbia', type: 'Public', setting: 'Two campuses, coastal and interior',
    fields: ['Business & Management', 'Computer Science & IT', 'Engineering', 'Health & Medicine', 'Natural Sciences', 'Agriculture & Environment', 'Arts & Humanities', 'Law'],
    levels: ALL_LEVELS, website: 'https://www.ubc.ca/',
    note: 'Campuses in Vancouver and the Okanagan, with distinct programme catalogues at each.' },
  { slug: 'mcgill-university', name: 'McGill University', country: 'canada', city: 'Montreal, Quebec', type: 'Public', setting: 'Downtown and rural campus',
    fields: ['Health & Medicine', 'Engineering', 'Natural Sciences', 'Social Sciences', 'Arts & Humanities', 'Law', 'Agriculture & Environment'],
    levels: ALL_LEVELS, website: 'https://www.mcgill.ca/',
    note: 'English-language instruction in a majority French-speaking province; Quebec sets some rules separately.' },
  { slug: 'university-of-waterloo', name: 'University of Waterloo', country: 'canada', city: 'Waterloo, Ontario', type: 'Public', setting: 'Suburban campus',
    fields: ['Computer Science & IT', 'Engineering', 'Natural Sciences', 'Business & Management'],
    levels: ALL_LEVELS, website: 'https://uwaterloo.ca/',
    note: 'Known for co-operative education, where study terms alternate with paid work terms.' },
  { slug: 'university-of-alberta', name: 'University of Alberta', country: 'canada', city: 'Edmonton, Alberta', type: 'Public', setting: 'Urban campus',
    fields: ['Engineering', 'Health & Medicine', 'Natural Sciences', 'Agriculture & Environment', 'Business & Management', 'Education'],
    levels: ALL_LEVELS, website: 'https://www.ualberta.ca/',
    note: 'Broad research university with strengths tied to the province’s energy and agricultural sectors.' },
  { slug: 'dalhousie-university', name: 'Dalhousie University', country: 'canada', city: 'Halifax, Nova Scotia', type: 'Public', setting: 'Coastal city campus',
    fields: ['Health & Medicine', 'Agriculture & Environment', 'Engineering', 'Natural Sciences', 'Law', 'Business & Management'],
    levels: ALL_LEVELS, website: 'https://www.dal.ca/',
    note: 'Atlantic Canada’s largest research university, with marine and ocean studies among its areas of focus.' },
  { slug: 'simon-fraser-university', name: 'Simon Fraser University', country: 'canada', city: 'Burnaby, British Columbia', type: 'Public', setting: 'Hilltop and city campuses',
    fields: ['Computer Science & IT', 'Business & Management', 'Social Sciences', 'Natural Sciences', 'Arts & Humanities'],
    levels: ALL_LEVELS, website: 'https://www.sfu.ca/',
    note: 'Three campuses across Greater Vancouver, operating on a trimester calendar.' },

  /* ---------------------------------------------------------------- UK */
  { slug: 'university-of-manchester', name: 'University of Manchester', country: 'uk', city: 'Manchester, England', type: 'Public', setting: 'City campus',
    fields: ['Engineering', 'Computer Science & IT', 'Health & Medicine', 'Business & Management', 'Natural Sciences', 'Social Sciences', 'Arts & Humanities'],
    levels: ALL_LEVELS, website: 'https://www.manchester.ac.uk/',
    note: 'One of the largest single-site universities in the UK by student numbers.' },
  { slug: 'university-of-edinburgh', name: 'University of Edinburgh', country: 'uk', city: 'Edinburgh, Scotland', type: 'Public', setting: 'Historic city campus',
    fields: ['Arts & Humanities', 'Health & Medicine', 'Natural Sciences', 'Computer Science & IT', 'Social Sciences', 'Law', 'Agriculture & Environment'],
    levels: ALL_LEVELS, website: 'https://www.ed.ac.uk/',
    note: 'Scottish undergraduate degrees typically run four years rather than three.' },
  { slug: 'kings-college-london', name: "King's College London", country: 'uk', city: 'London, England', type: 'Public', setting: 'Central London campuses',
    fields: ['Health & Medicine', 'Law', 'Social Sciences', 'Arts & Humanities', 'Natural Sciences', 'Business & Management'],
    levels: ALL_LEVELS, website: 'https://www.kcl.ac.uk/',
    note: 'Several campuses across central London, with living costs reflecting the location.' },
  { slug: 'university-of-leeds', name: 'University of Leeds', country: 'uk', city: 'Leeds, England', type: 'Public', setting: 'Single city campus',
    fields: ['Engineering', 'Business & Management', 'Arts & Humanities', 'Health & Medicine', 'Natural Sciences', 'Education', 'Social Sciences'],
    levels: ALL_LEVELS, website: 'https://www.leeds.ac.uk/',
    note: 'Large campus close to the city centre, with lower living costs than the south of England.' },
  { slug: 'university-of-glasgow', name: 'University of Glasgow', country: 'uk', city: 'Glasgow, Scotland', type: 'Public', setting: 'Historic city campus',
    fields: ['Health & Medicine', 'Engineering', 'Arts & Humanities', 'Social Sciences', 'Law', 'Natural Sciences'],
    levels: ALL_LEVELS, website: 'https://www.gla.ac.uk/',
    note: 'One of Scotland’s ancient universities, teaching across a broad range of disciplines.' },
  { slug: 'university-of-warwick', name: 'University of Warwick', country: 'uk', city: 'Coventry, England', type: 'Public', setting: 'Self-contained campus',
    fields: ['Business & Management', 'Computer Science & IT', 'Engineering', 'Social Sciences', 'Natural Sciences'],
    levels: ALL_LEVELS, website: 'https://warwick.ac.uk/',
    note: 'Campus university on the edge of Coventry, with its own accommodation and facilities.' },
  { slug: 'university-of-birmingham', name: 'University of Birmingham', country: 'uk', city: 'Birmingham, England', type: 'Public', setting: 'Parkland campus',
    fields: ['Engineering', 'Health & Medicine', 'Business & Management', 'Social Sciences', 'Natural Sciences', 'Education', 'Law'],
    levels: ALL_LEVELS, website: 'https://www.birmingham.ac.uk/',
    note: 'Green campus a short train journey from central Birmingham.' },
  { slug: 'university-of-sheffield', name: 'University of Sheffield', country: 'uk', city: 'Sheffield, England', type: 'Public', setting: 'City campus',
    fields: ['Engineering', 'Health & Medicine', 'Social Sciences', 'Arts & Humanities', 'Natural Sciences', 'Computer Science & IT'],
    levels: ALL_LEVELS, website: 'https://www.sheffield.ac.uk/',
    note: 'Engineering faculty with longstanding industry research partnerships.' },

  /* --------------------------------------------------------- Australia */
  { slug: 'university-of-melbourne', name: 'University of Melbourne', country: 'australia', city: 'Melbourne, Victoria', type: 'Public', setting: 'Inner-city campus',
    fields: ['Health & Medicine', 'Business & Management', 'Engineering', 'Arts & Humanities', 'Law', 'Natural Sciences', 'Education'],
    levels: ALL_LEVELS, website: 'https://www.unimelb.edu.au/',
    note: 'Uses a model where many professional qualifications are taken at graduate level.' },
  { slug: 'university-of-sydney', name: 'University of Sydney', country: 'australia', city: 'Sydney, New South Wales', type: 'Public', setting: 'Historic city campus',
    fields: ['Health & Medicine', 'Engineering', 'Business & Management', 'Arts & Humanities', 'Law', 'Natural Sciences', 'Agriculture & Environment'],
    levels: ALL_LEVELS, website: 'https://www.sydney.edu.au/',
    note: 'Campus close to central Sydney; living costs are among the highest in Australia.' },
  { slug: 'monash-university', name: 'Monash University', country: 'australia', city: 'Melbourne, Victoria', type: 'Public', setting: 'Multi-campus',
    fields: ['Engineering', 'Health & Medicine', 'Business & Management', 'Computer Science & IT', 'Natural Sciences', 'Education', 'Law'],
    levels: ALL_LEVELS, website: 'https://www.monash.edu/',
    note: 'Several campuses across Victoria and locations overseas; check which campus a programme runs at.' },
  { slug: 'unsw-sydney', name: 'UNSW Sydney', country: 'australia', city: 'Sydney, New South Wales', type: 'Public', setting: 'Suburban city campus',
    fields: ['Engineering', 'Computer Science & IT', 'Business & Management', 'Natural Sciences', 'Health & Medicine', 'Law'],
    levels: ALL_LEVELS, website: 'https://www.unsw.edu.au/',
    note: 'Operates a trimester calendar, which affects intake timing and course sequencing.' },
  { slug: 'university-of-queensland', name: 'University of Queensland', country: 'australia', city: 'Brisbane, Queensland', type: 'Public', setting: 'Riverside campus',
    fields: ['Health & Medicine', 'Agriculture & Environment', 'Engineering', 'Natural Sciences', 'Business & Management', 'Social Sciences'],
    levels: ALL_LEVELS, website: 'https://www.uq.edu.au/',
    note: 'Main campus at St Lucia, with agricultural and veterinary programmes based at other sites.' },
  { slug: 'rmit-university', name: 'RMIT University', country: 'australia', city: 'Melbourne, Victoria', type: 'Public', setting: 'City campus',
    fields: ['Engineering', 'Computer Science & IT', 'Arts & Humanities', 'Business & Management', 'Education'],
    levels: ALL_LEVELS, website: 'https://www.rmit.edu.au/',
    note: 'Offers both vocational and higher education qualifications, including design and applied technology.' },
  { slug: 'university-of-technology-sydney', name: 'University of Technology Sydney', country: 'australia', city: 'Sydney, New South Wales', type: 'Public', setting: 'City campus',
    fields: ['Computer Science & IT', 'Engineering', 'Business & Management', 'Health & Medicine', 'Arts & Humanities', 'Law'],
    levels: ALL_LEVELS, website: 'https://www.uts.edu.au/',
    note: 'Practice-oriented programmes with industry placements built into many degrees.' },

  /* --------------------------------------------------------------- USA */
  { slug: 'purdue-university', name: 'Purdue University', country: 'usa', city: 'West Lafayette, Indiana', type: 'Public', setting: 'College town campus',
    fields: ['Engineering', 'Computer Science & IT', 'Agriculture & Environment', 'Natural Sciences', 'Business & Management'],
    levels: ALL_LEVELS, website: 'https://www.purdue.edu/',
    note: 'Large engineering and agricultural programmes in a town built around the university.' },
  { slug: 'arizona-state-university', name: 'Arizona State University', country: 'usa', city: 'Tempe, Arizona', type: 'Public', setting: 'Multi-campus, metropolitan',
    fields: ['Engineering', 'Business & Management', 'Computer Science & IT', 'Social Sciences', 'Arts & Humanities', 'Education', 'Natural Sciences'],
    levels: ALL_LEVELS, website: 'https://www.asu.edu/',
    note: 'Several campuses across the Phoenix metropolitan area with distinct programme offerings.' },
  { slug: 'northeastern-university', name: 'Northeastern University', country: 'usa', city: 'Boston, Massachusetts', type: 'Private', setting: 'Urban campus',
    fields: ['Computer Science & IT', 'Engineering', 'Business & Management', 'Health & Medicine', 'Social Sciences'],
    levels: ALL_LEVELS, website: 'https://www.northeastern.edu/',
    note: 'Built around a co-operative education model alternating study with full-time work placements.' },
  { slug: 'university-of-illinois-urbana-champaign', name: 'University of Illinois Urbana-Champaign', country: 'usa', city: 'Urbana-Champaign, Illinois', type: 'Public', setting: 'College town campus',
    fields: ['Engineering', 'Computer Science & IT', 'Agriculture & Environment', 'Business & Management', 'Natural Sciences', 'Social Sciences'],
    levels: ALL_LEVELS, website: 'https://illinois.edu/',
    note: 'Large public research university with substantial engineering and computing faculties.' },
  { slug: 'texas-am-university', name: 'Texas A&M University', country: 'usa', city: 'College Station, Texas', type: 'Public', setting: 'College town campus',
    fields: ['Engineering', 'Agriculture & Environment', 'Natural Sciences', 'Business & Management', 'Health & Medicine'],
    levels: ALL_LEVELS, website: 'https://www.tamu.edu/',
    note: 'One of the largest universities in the United States by enrolment.' },
  { slug: 'penn-state-university', name: 'Pennsylvania State University', country: 'usa', city: 'University Park, Pennsylvania', type: 'Public', setting: 'College town campus',
    fields: ['Engineering', 'Business & Management', 'Agriculture & Environment', 'Natural Sciences', 'Social Sciences', 'Education'],
    levels: ALL_LEVELS, website: 'https://www.psu.edu/',
    note: 'A main campus plus a network of smaller campuses across Pennsylvania.' },
  { slug: 'university-of-washington', name: 'University of Washington', country: 'usa', city: 'Seattle, Washington', type: 'Public', setting: 'Urban campus',
    fields: ['Computer Science & IT', 'Health & Medicine', 'Engineering', 'Natural Sciences', 'Business & Management', 'Social Sciences'],
    levels: ALL_LEVELS, website: 'https://www.washington.edu/',
    note: 'Three campuses in the Puget Sound region, with admission handled separately at each.' },

  /* ----------------------------------------------------------- Ireland */
  { slug: 'trinity-college-dublin', name: 'Trinity College Dublin', country: 'ireland', city: 'Dublin', type: 'Public', setting: 'City centre campus',
    fields: ['Arts & Humanities', 'Health & Medicine', 'Natural Sciences', 'Business & Management', 'Law', 'Computer Science & IT'],
    levels: ALL_LEVELS, website: 'https://www.tcd.ie/',
    note: 'Ireland’s oldest university, on a single campus in the centre of Dublin.' },
  { slug: 'university-college-dublin', name: 'University College Dublin', country: 'ireland', city: 'Dublin', type: 'Public', setting: 'Parkland campus',
    fields: ['Business & Management', 'Engineering', 'Agriculture & Environment', 'Health & Medicine', 'Social Sciences', 'Computer Science & IT', 'Law'],
    levels: ALL_LEVELS, website: 'https://www.ucd.ie/',
    note: 'Large campus at Belfield, south of Dublin city centre.' },
  { slug: 'university-college-cork', name: 'University College Cork', country: 'ireland', city: 'Cork', type: 'Public', setting: 'Riverside campus',
    fields: ['Health & Medicine', 'Natural Sciences', 'Arts & Humanities', 'Business & Management', 'Engineering', 'Agriculture & Environment'],
    levels: ALL_LEVELS, website: 'https://www.ucc.ie/',
    note: 'Cork has a substantial pharmaceutical and technology employment base.' },
  { slug: 'university-of-galway', name: 'University of Galway', country: 'ireland', city: 'Galway', type: 'Public', setting: 'Riverside campus',
    fields: ['Health & Medicine', 'Arts & Humanities', 'Natural Sciences', 'Engineering', 'Business & Management', 'Law'],
    levels: ALL_LEVELS, website: 'https://www.universityofgalway.ie/',
    note: 'West coast location with lower living costs than Dublin.' },
  { slug: 'dublin-city-university', name: 'Dublin City University', country: 'ireland', city: 'Dublin', type: 'Public', setting: 'Northside campuses',
    fields: ['Computer Science & IT', 'Business & Management', 'Engineering', 'Education', 'Health & Medicine', 'Social Sciences'],
    levels: ALL_LEVELS, website: 'https://www.dcu.ie/',
    note: 'Work placement is a feature of many undergraduate programmes.' },

  /* ----------------------------------------------------------- Germany */
  { slug: 'technical-university-of-munich', name: 'Technical University of Munich', country: 'germany', city: 'Munich, Bavaria', type: 'Public', setting: 'Multi-campus',
    fields: ['Engineering', 'Computer Science & IT', 'Natural Sciences', 'Health & Medicine', 'Business & Management', 'Agriculture & Environment'],
    levels: ALL_LEVELS, website: 'https://www.tum.de/en/',
    note: 'Campuses in Munich, Garching and Weihenstephan, each hosting different faculties.' },
  { slug: 'rwth-aachen-university', name: 'RWTH Aachen University', country: 'germany', city: 'Aachen, North Rhine-Westphalia', type: 'Public', setting: 'City campus',
    fields: ['Engineering', 'Natural Sciences', 'Computer Science & IT', 'Business & Management'],
    levels: ALL_LEVELS, website: 'https://www.rwth-aachen.de/',
    note: 'Engineering-focused university close to the Belgian and Dutch borders.' },
  { slug: 'technische-universitat-berlin', name: 'Technische Universität Berlin', country: 'germany', city: 'Berlin', type: 'Public', setting: 'City campus',
    fields: ['Engineering', 'Computer Science & IT', 'Natural Sciences', 'Business & Management', 'Social Sciences'],
    levels: ALL_LEVELS, website: 'https://www.tu.berlin/en/',
    note: 'Central Berlin campus; some programmes are taught in German only.' },
  { slug: 'university-of-stuttgart', name: 'University of Stuttgart', country: 'germany', city: 'Stuttgart, Baden-Württemberg', type: 'Public', setting: 'Two campuses',
    fields: ['Engineering', 'Natural Sciences', 'Computer Science & IT', 'Arts & Humanities'],
    levels: ALL_LEVELS, website: 'https://www.uni-stuttgart.de/en/',
    note: 'Located in a region with a dense automotive and manufacturing industry base.' },
  { slug: 'heidelberg-university', name: 'Heidelberg University', country: 'germany', city: 'Heidelberg, Baden-Württemberg', type: 'Public', setting: 'Old town and campus sites',
    fields: ['Health & Medicine', 'Natural Sciences', 'Arts & Humanities', 'Social Sciences', 'Law'],
    levels: ALL_LEVELS, website: 'https://www.uni-heidelberg.de/en',
    note: 'Germany’s oldest university, with medicine and the life sciences among its faculties.' },

  /* ------------------------------------------------------- New Zealand */
  { slug: 'university-of-auckland', name: 'University of Auckland', country: 'new-zealand', city: 'Auckland', type: 'Public', setting: 'City campus',
    fields: ['Engineering', 'Business & Management', 'Health & Medicine', 'Arts & Humanities', 'Natural Sciences', 'Law', 'Education'],
    levels: ALL_LEVELS, website: 'https://www.auckland.ac.nz/',
    note: 'New Zealand’s largest university, in its largest city.' },
  { slug: 'university-of-otago', name: 'University of Otago', country: 'new-zealand', city: 'Dunedin', type: 'Public', setting: 'Campus town',
    fields: ['Health & Medicine', 'Natural Sciences', 'Social Sciences', 'Arts & Humanities', 'Business & Management'],
    levels: ALL_LEVELS, website: 'https://www.otago.ac.nz/',
    note: 'A university town in the South Island, with health sciences among its established areas.' },
  { slug: 'victoria-university-of-wellington', name: 'Victoria University of Wellington', country: 'new-zealand', city: 'Wellington', type: 'Public', setting: 'Hillside city campuses',
    fields: ['Law', 'Social Sciences', 'Arts & Humanities', 'Computer Science & IT', 'Business & Management', 'Natural Sciences'],
    levels: ALL_LEVELS, website: 'https://www.wgtn.ac.nz/',
    note: 'Located in the capital, with proximity to government and public policy institutions.' },
  { slug: 'university-of-canterbury', name: 'University of Canterbury', country: 'new-zealand', city: 'Christchurch', type: 'Public', setting: 'Suburban campus',
    fields: ['Engineering', 'Natural Sciences', 'Agriculture & Environment', 'Business & Management', 'Arts & Humanities', 'Education'],
    levels: ALL_LEVELS, website: 'https://www.canterbury.ac.nz/',
    note: 'Engineering and earth sciences are long-established areas of teaching here.' },
  { slug: 'massey-university', name: 'Massey University', country: 'new-zealand', city: 'Palmerston North', type: 'Public', setting: 'Multi-campus and distance',
    fields: ['Agriculture & Environment', 'Business & Management', 'Health & Medicine', 'Natural Sciences', 'Engineering', 'Education'],
    levels: ALL_LEVELS, website: 'https://www.massey.ac.nz/',
    note: 'Campuses in Palmerston North, Auckland and Wellington, with agricultural science among its areas of focus.' },
  { slug: 'lincoln-university-nz', name: 'Lincoln University', country: 'new-zealand', city: 'Lincoln, Canterbury', type: 'Public', setting: 'Rural campus',
    fields: ['Agriculture & Environment', 'Natural Sciences', 'Business & Management'],
    levels: ALL_LEVELS, website: 'https://www.lincoln.ac.nz/',
    note: 'Specialist focus on land-based disciplines, on a rural campus near Christchurch.' },
]

/* ---------------------------------------------------------------- */
/* Access layer — swap these two for API calls to go live.           */
/* ---------------------------------------------------------------- */

/**
 * Filter the directory.
 * @param {{query?:string, country?:string, field?:string, level?:string}} filters
 */
export function getUniversities(filters = {}) {
  const { query = '', country = '', field = '', level = '' } = filters
  const q = query.trim().toLowerCase()
  return universities.filter((u) => {
    if (country && u.country !== country) return false
    if (field && !u.fields.includes(field)) return false
    if (level && !u.levels.includes(level)) return false
    if (q && !`${u.name} ${u.city} ${u.fields.join(' ')}`.toLowerCase().includes(q)) return false
    return true
  })
}

export const getUniversity = (slug) => universities.find((u) => u.slug === slug)

export const universitiesByCountry = (country) => universities.filter((u) => u.country === country)

export default universities
