import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'

/* Home is bundled with the shell; everything else is code-split so a
   first visit does not download thirty pages of content. */
const About = lazy(() => import('./pages/About'))
const Destinations = lazy(() => import('./pages/Destinations'))
const DestinationDetails = lazy(() => import('./pages/DestinationDetails'))
const Services = lazy(() => import('./pages/Services'))
const ServiceDetails = lazy(() => import('./pages/ServiceDetails'))
const Universities = lazy(() => import('./pages/Universities'))
const UniversityDetails = lazy(() => import('./pages/UniversityDetails'))
const Scholarships = lazy(() => import('./pages/Scholarships'))
const StudentVisa = lazy(() => import('./pages/StudentVisa'))
const SuccessStories = lazy(() => import('./pages/SuccessStories'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogDetails = lazy(() => import('./pages/BlogDetails'))
const Contact = lazy(() => import('./pages/Contact'))
const BookConsultation = lazy(() => import('./pages/BookConsultation'))
const FAQ = lazy(() => import('./pages/FAQ'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Terms = lazy(() => import('./pages/Terms'))
const Disclaimer = lazy(() => import('./pages/Disclaimer'))
const NotFound = lazy(() => import('./pages/NotFound'))

function RouteFallback() {
  return (
    <div className="route-fallback" role="status" aria-live="polite">
      <span className="visually-hidden">Loading page</span>
      <span className="route-fallback__bar" aria-hidden="true" />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route
          path="*"
          element={
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                <Route path="/about" element={<About />} />

                <Route path="/destinations" element={<Destinations />} />
                <Route path="/destinations/:slug" element={<DestinationDetails />} />

                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetails />} />

                <Route path="/universities" element={<Universities />} />
                <Route path="/universities/:slug" element={<UniversityDetails />} />

                <Route path="/scholarships" element={<Scholarships />} />
                <Route path="/student-visa" element={<StudentVisa />} />
                <Route path="/success-stories" element={<SuccessStories />} />

                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogDetails />} />

                <Route path="/contact" element={<Contact />} />
                <Route path="/book-consultation" element={<BookConsultation />} />
                <Route path="/faq" element={<FAQ />} />

                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-and-conditions" element={<Terms />} />
                <Route path="/disclaimer" element={<Disclaimer />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}
