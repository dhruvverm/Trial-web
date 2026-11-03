/**
 * Image manifest
 * ---------------------------------------------------------------
 * Every photograph used on the site is referenced from here so the
 * whole library can be swapped in one place.
 *
 * Current source: Unsplash (https://unsplash.com) delivered through
 * their CDN with explicit width/quality parameters. Replace `base`
 * and the `id` values with your own licensed or commissioned assets
 * before launch; the component API (`src/components/Figure.jsx`)
 * does not change.
 *
 * Alt text is stored alongside each image so it travels with the
 * asset instead of being re-written at every call site. Where the
 * exact location in a photograph is not independently verified the
 * alt text describes the scene rather than naming a place.
 */

const CDN = 'https://images.unsplash.com/photo-'

/** Build a responsive source for a manifest entry. */
export function src(image, width = 1200, { height, crop = 'entropy' } = {}) {
  const params = new URLSearchParams({ auto: 'format', fit: 'crop', q: '72', w: String(width) })
  if (height) {
    params.set('h', String(height))
    params.set('crop', crop)
  }
  return `${CDN}${image.id}?${params.toString()}`
}

/** Build a srcset across the widths we actually render at. */
export function srcSet(image, widths = [480, 768, 1200, 1800]) {
  return widths.map((w) => `${src(image, w)} ${w}w`).join(', ')
}

export const images = {
  campusQuad: { id: '1559135197-8a45ea74d367', alt: 'Students walking along a tree-lined university quadrangle on a bright morning' },
  libraryStacks: { id: '1427504494785-3a9ca7044f45', alt: 'A student walking between tall library bookshelves' },
  libraryReading: { id: '1523240795612-9a054b0db644', alt: 'People reading and working at tables in a university library' },
  libraryAisle: { id: '1498243691581-b145c3f54a5a', alt: 'A long aisle of library shelving filled with books' },
  counselling: { id: '1543269865-cbf427effbad', alt: 'Three students talking with an adviser around a table' },
  counsellingNotes: { id: '1517048676732-d65bc937f952', alt: 'People taking notes around a table during a planning session' },
  adviserDesk: { id: '1600880292203-757bb62b4baf', alt: 'Two people reviewing an application plan at a desk' },
  studentsTalking: { id: '1515169067868-5387ec356754', alt: 'Students talking together in a campus common room' },
  studentsGroup: { id: '1517486808906-6ca8b3f04846', alt: 'A group of five students standing together outdoors' },
  studentsLaptops: { id: '1531482615713-2afd69097998', alt: 'Students working together at computers in a study room' },
  studentsLaptopTable: { id: '1531545514256-b1400bc00f31', alt: 'Four students gathered around a laptop in a study space' },
  studentDesk: { id: '1541178735493-479c1a27ed24', alt: 'A student working on a laptop at a desk' },
  studyTogether: { id: '1522202176988-66273c2fd55f', alt: 'Two students working side by side with laptops' },
  studyHall: { id: '1556761175-b413da4baf72', alt: 'Students working at long desks in a shared study hall' },
  studySpace: { id: '1559136555-9303baea8ebd', alt: 'An open-plan university study space with high windows' },
  classroomDiscussion: { id: '1509062522246-3755977927d7', alt: 'Students raising their hands during a seminar' },
  classroomSeminar: { id: '1542744173-8e7e53415bb0', alt: 'A small group seminar in progress around a table' },
  lectureHall: { id: '1540575467063-178a50c2df87', alt: 'Students seated in a tiered lecture theatre' },
  lectureSeats: { id: '1606761568499-6d2451b23c66', alt: 'Rows of empty seats in a university lecture hall' },
  auditorium: { id: '1551818255-e6e10975bc17', alt: 'A large auditorium during a university event' },
  graduationCaps: { id: '1541339907198-e08756dedf3f', alt: 'Graduates throwing their caps in the air at sunset' },
  graduationPortrait: { id: '1623461487986-9400110de28e', alt: 'A graduate raising a mortarboard outside a university building' },
  graduationCrowd: { id: '1533854775446-95c4609da544', alt: 'A sea of mortarboards at a graduation ceremony' },
  englishBook: { id: '1543109740-4bdb38fda756', alt: 'An English language coursebook on a desk' },
  loveToLearn: { id: '1546410531-bb4caa6b424d', alt: 'A wall graphic of a pencil reading Love to Learn' },
  writingNotes: { id: '1434030216411-0b793f4b4173', alt: 'A hand writing notes in a notebook' },
  tabletWriting: { id: '1596496050827-8299e0220de1', alt: 'A student writing on a tablet with a stylus' },
  deskFlatlay: { id: '1535982330050-f1c2fb79ff78', alt: 'A backpack, notebook and headphones laid out on a desk' },
  booksApple: { id: '1503676260728-1c00da094a0b', alt: 'A stack of textbooks with an apple on top' },
  dataChart: { id: '1591696205602-2f950c417cb9', alt: 'A printed line chart on a desk beside a laptop' },
  airportDeparture: { id: '1464037866556-6812c9d1c72e', alt: 'An aircraft on the runway at sunset' },
  workshopPlanning: { id: '1552581234-26160f608093', alt: 'A team planning session with sticky notes on a glass wall' },
  readingAlone: { id: '1529070538774-1843cb3265df', alt: 'A student reading a book in a quiet corner' },
  portraitA: { id: '1573496359142-b8d87734a5a2', alt: 'Portrait of a team member' },
  portraitB: { id: '1573497019940-1c28c88b4f3e', alt: 'Portrait of a team member' },
  portraitC: { id: '1507003211169-0a1dd7228f2d', alt: 'Portrait of a team member' },
  portraitD: { id: '1560250097-0b93528c311a', alt: 'Portrait of a team member' },
  portraitE: { id: '1544717305-2782549b5136', alt: 'Portrait of a team member' },
  ukLondonAerial: { id: '1513635269975-59663e0ac1ad', alt: 'Aerial view of the River Thames and Tower Bridge in London' },
  ukCollegiate: { id: '1568792923760-d70635a89fdc', alt: 'An ivy-covered collegiate building with Gothic windows' },
  ukWestminster: { id: '1520986606214-8b456906c813', alt: 'A red double-decker bus passing the Palace of Westminster' },
  ukBridge: { id: '1543832923-44667a44c804', alt: 'The Thames at dusk with Tower Bridge lit up' },
  ausOperaHouse: { id: '1523482580672-f109ba8cb9be', alt: 'Sydney Opera House lit at dusk on the harbour' },
  ausHarbour: { id: '1506973035872-a4ec16b8e8d9', alt: 'Boats on Sydney Harbour with the city skyline behind' },
  usaSkyline: { id: '1555109307-f7d9da25c244', alt: 'The Manhattan skyline at sunset' },
  usaCampus: { id: '1562774053-701939374585', alt: 'A red-brick university building facing a wide lawn' },
  usaLiberty: { id: '1485738422979-f5c462d49f74', alt: 'The Statue of Liberty against a clear sky' },
  deBrandenburg: { id: '1554072675-66db59dba46f', alt: 'The Brandenburg Gate in Berlin on an overcast morning' },
  deOldTown: { id: '1467269204594-9661b134dd2b', alt: 'A half-timbered street in a historic German town' },
  nzHarbour: { id: '1589871973318-9ca1258faa5d', alt: 'A harbour city at sunset seen from the hills above' },
  nzMountains: { id: '1569683795645-b62e50fbf103', alt: 'Mist settling between forested mountains' },
  caCampusModern: { id: '1496564203457-11bb12075d90', alt: 'A curved modern footbridge beside a landscaped campus' },
  caCityStreet: { id: '1519501025264-65ba15a82390', alt: 'A downtown city street at dusk' },
  ieStreet: { id: '1549918864-48ac978761a4', alt: 'A wide city street at first light with a church spire in the distance' },
  ieTownhouses: { id: '1471623320832-752e8bbf8413', alt: 'A terrace of period townhouses with a bicycle parked outside' },
  campusRedBrick: { id: '1571896349842-33c89424de2d', alt: 'A modern university building reflected in still water at dusk' },
  campusModernBlock: { id: '1551038247-3d9af20df552', alt: 'A modern white university building against a clear sky' },
  campusGlass: { id: '1573164574572-cb89e39749b4', alt: 'A glass-walled seminar room overlooking the city' },
  campusSculptural: { id: '1487958449943-2429e8be8625', alt: 'A sculptural modern building with angular glass facades' },
  cityNight: { id: '1496568816309-51d7c20e3b21', alt: 'A city skyline at night' },
  accommodation: { id: '1560448204-e02f11c3d0e2', alt: 'A bright shared living room in student accommodation' },
  accommodationDesk: { id: '1586023492125-27b2c045efd7', alt: 'A simple study desk and chair in a student room' },
  livingRoom: { id: '1618221195710-dd6b41faaea6', alt: 'A furnished shared lounge with warm daylight' },
  officeMeeting: { id: '1517502884422-41eaead166d4', alt: 'A meeting room with a long table and city views' },
  handshake: { id: '1521791136064-7986c2920216', alt: 'Two people shaking hands after a meeting' },
  emptyClassroom: { id: '1580582932707-520aed937b7b', alt: 'An empty classroom with daylight through tall windows' },
  teacherClass: { id: '1577896851231-70ef18881754', alt: 'A teacher working with students in a classroom' },
  studentsBooks: { id: '1571260899304-425eee4c7efc', alt: 'Students carrying books and folders between classes' },
}

export default images
