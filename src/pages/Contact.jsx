import { Mail, MapPin, Phone, Clock, MessageCircle } from 'lucide-react'
import {
  brand,
  hasPhone,
  hasEmail,
  hasOffice,
  hasHours,
  hasWhatsApp,
  telHref,
  mailHref,
  whatsappHref,
} from '../config/brand'
import { useSeo, breadcrumbSchema, organisationSchema } from '../utils/seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import EnquiryForm from '../components/EnquiryForm'
import Notice from '../components/Notice'
import Figure from '../components/Figure'
import { images } from '../data/images'

const trail = [{ label: 'Home', to: '/' }, { label: 'Contact' }]

export default function Contact() {
  const anyChannel = hasPhone() || hasEmail() || hasWhatsApp() || hasOffice()

  useSeo({
    title: 'Contact us',
    description: `Contact ${brand.name} about studying abroad — counselling, applications, scholarships and student visa guidance.`,
    path: '/contact',
    jsonLd: [breadcrumbSchema(trail), organisationSchema()],
  })

  return (
    <>
      <PageHero
        kicker="Contact"
        title="Tell us where you have got to"
        lead="A counsellor reads every enquiry before replying. The more specific you are about what you are stuck on, the more useful the first reply will be."
        trail={trail}
      />

      <section className="section">
        <div className="container contact-layout">
          <Reveal className="contact-layout__details">
            <h2>Ways to reach us</h2>

            {anyChannel ? (
              <ul className="contact-list">
                {hasPhone() && (
                  <li>
                    <Phone size={17} aria-hidden="true" />
                    <div>
                      <h3>Telephone</h3>
                      <a href={telHref()}>{brand.contact.phone.value}</a>
                    </div>
                  </li>
                )}
                {hasWhatsApp() && (
                  <li>
                    <MessageCircle size={17} aria-hidden="true" />
                    <div>
                      <h3>WhatsApp</h3>
                      <a href={whatsappHref()} target="_blank" rel="noreferrer noopener">
                        Message us on WhatsApp
                      </a>
                    </div>
                  </li>
                )}
                {hasEmail() && (
                  <li>
                    <Mail size={17} aria-hidden="true" />
                    <div>
                      <h3>Email</h3>
                      <a href={mailHref()}>{brand.contact.email.value}</a>
                    </div>
                  </li>
                )}
                {hasOffice() && (
                  <li>
                    <MapPin size={17} aria-hidden="true" />
                    <div>
                      <h3>Office</h3>
                      <address>
                        {brand.contact.office.lines.map((line) => (
                          <span key={line}>{line}</span>
                        ))}
                      </address>
                    </div>
                  </li>
                )}
                {hasHours() && (
                  <li>
                    <Clock size={17} aria-hidden="true" />
                    <div>
                      <h3>Hours</h3>
                      {brand.contact.hours.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </li>
                )}
              </ul>
            ) : (
              <Notice tone="policy" title="Contact details are not yet configured.">
                We have not invented a phone number, an email address or an office. Real details go
                into <code>src/config/brand.js</code> — set each channel&rsquo;s{' '}
                <code>isPlaceholder</code> to <code>false</code> and the links, the WhatsApp button
                and the structured data all switch on together. The enquiry form beside this works
                regardless once a backend is connected.
              </Notice>
            )}

            {hasOffice() && brand.contact.office.mapQuery ? (
              <div className="contact-map">
                <h3>Find us</h3>
                <iframe
                  title={`Map showing the location of ${brand.name}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(brand.contact.office.mapQuery)}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            ) : (
              <Figure
                image={images.officeMeeting}
                ratio="4 / 3"
                caption="A map is embedded here once a real office address is configured. We have not placed a pin on an address that does not exist."
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            )}
          </Reveal>

          <Reveal delay={0.08} className="contact-layout__form">
            <div className="form-panel">
              <h2>Send an enquiry</h2>
              <p className="lead">
                Two or three sentences about what you are studying, where you are considering and
                roughly when is enough to start.
              </p>
              <EnquiryForm formName="contact" />
              <Notice tone="info">
                Please do not attach or paste financial documents, passport details or other
                identity documents. A counsellor will tell you how to share those securely once
                your enquiry is under way.
              </Notice>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
