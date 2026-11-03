import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Loader2, AlertTriangle } from 'lucide-react'
import {
  destinationOptions,
  studyFieldOptions,
  qualificationOptions,
  intakeOptions,
  englishTestOptions,
  consultationMethods,
} from '../data/formOptions'
import { brand, hasEmail, hasPhone, mailHref, telHref } from '../config/brand'
import { submitEnquiry } from '../utils/submitEnquiry'
import { useSeo, breadcrumbSchema } from '../utils/seo'
import PageHero from '../components/PageHero'
import FormField from '../components/FormField'
import Reveal from '../components/Reveal'
import Notice from '../components/Notice'

const trail = [{ label: 'Home', to: '/' }, { label: 'Book a consultation' }]

/** Fields validated before each step is allowed to advance. */
const STEPS = [
  { title: 'About you', fields: ['fullName', 'email', 'phone', 'residence'] },
  { title: 'Your study plans', fields: ['destination', 'field', 'qualification', 'intake'] },
  { title: 'Where you have got to', fields: ['englishStatus', 'method'] },
  { title: 'Anything else', fields: ['message', 'consent'] },
]

export default function BookConsultation() {
  const [step, setStep] = useState(0)
  const [result, setResult] = useState(null)

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({ mode: 'onBlur' })

  useSeo({
    title: brand.consultation.label,
    description:
      'Book a consultation about studying abroad. Tell us your academic background, intended destination, course and intake, and a counsellor will come back to you.',
    path: '/book-consultation',
    jsonLd: breadcrumbSchema(trail),
  })

  const next = async () => {
    const valid = await trigger(STEPS[step].fields)
    if (valid) setStep((s) => Math.min(s + 1, STEPS.length - 1))
  }

  const back = () => setStep((s) => Math.max(s - 1, 0))

  const onSubmit = async (values) => {
    const outcome = await submitEnquiry(values, { formName: 'book-consultation' })
    setResult(outcome)
  }

  if (result?.status === 'sent') {
    return (
      <>
        <PageHero kicker="Consultation" title="Request received" trail={trail} />
        <section className="section">
          <div className="container container--narrow">
            <div className="form-result form-result--success" role="status">
              <CheckCircle2 size={22} aria-hidden="true" />
              <div>
                <h2>Thank you — we have your request</h2>
                <p>{brand.consultation.responseCommitment}</p>
                <p>
                  In the meantime, our <Link to="/destinations">destination guides</Link> and{' '}
                  <Link to="/student-visa">visa guidance</Link> cover most of what comes up in a
                  first conversation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHero
        kicker="Consultation"
        title={brand.consultation.label}
        lead="Four short steps. The more you can tell us now, the more specific the first conversation can be."
        trail={trail}
      />

      <section className="section">
        <div className="container booking">
          <div className="booking__main">
            <Reveal>
              <ol className="stepper" aria-label="Form progress">
                {STEPS.map((s, i) => (
                  <li
                    key={s.title}
                    className={`stepper__item ${i === step ? 'is-current' : ''} ${i < step ? 'is-done' : ''}`}
                    aria-current={i === step ? 'step' : undefined}
                  >
                    <span className="stepper__dot" aria-hidden="true">
                      {i < step ? <Check size={12} /> : i + 1}
                    </span>
                    <span className="stepper__label">{s.title}</span>
                  </li>
                ))}
              </ol>

              <form className="booking__form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <p className="booking__progress" aria-live="polite">
                  Step {step + 1} of {STEPS.length} — {STEPS[step].title}
                </p>

                {/* ------------------------------------------- Step 1 */}
                <fieldset hidden={step !== 0}>
                  <legend className="visually-hidden">About you</legend>
                  <div className="form-grid">
                    <FormField label="Full name" required error={errors.fullName?.message}>
                      {({ id, describedBy, invalid }) => (
                        <input
                          id={id}
                          type="text"
                          autoComplete="name"
                          aria-describedby={describedBy}
                          aria-invalid={invalid}
                          {...register('fullName', { required: 'Please enter your full name' })}
                        />
                      )}
                    </FormField>

                    <FormField label="Email address" required error={errors.email?.message}>
                      {({ id, describedBy, invalid }) => (
                        <input
                          id={id}
                          type="email"
                          autoComplete="email"
                          aria-describedby={describedBy}
                          aria-invalid={invalid}
                          {...register('email', {
                            required: 'Please enter your email address',
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: 'Please enter a valid email address',
                            },
                          })}
                        />
                      )}
                    </FormField>

                    <FormField
                      label="Phone number"
                      required
                      hint="Include your country code, for example +44 or +91."
                      error={errors.phone?.message}
                    >
                      {({ id, describedBy, invalid }) => (
                        <input
                          id={id}
                          type="tel"
                          autoComplete="tel"
                          placeholder="+00 000 000 0000"
                          aria-describedby={describedBy}
                          aria-invalid={invalid}
                          {...register('phone', {
                            required: 'Please enter a phone number',
                            pattern: {
                              value: /^[+\d][\d\s()-]{6,}$/,
                              message: 'Please enter a valid phone number including the country code',
                            },
                          })}
                        />
                      )}
                    </FormField>

                    <FormField label="Current country of residence" required error={errors.residence?.message}>
                      {({ id, describedBy, invalid }) => (
                        <input
                          id={id}
                          type="text"
                          autoComplete="country-name"
                          aria-describedby={describedBy}
                          aria-invalid={invalid}
                          {...register('residence', { required: 'Please tell us where you currently live' })}
                        />
                      )}
                    </FormField>
                  </div>
                </fieldset>

                {/* ------------------------------------------- Step 2 */}
                <fieldset hidden={step !== 1}>
                  <legend className="visually-hidden">Your study plans</legend>
                  <div className="form-grid">
                    <FormField label="Preferred study destination" required error={errors.destination?.message}>
                      {({ id, describedBy, invalid }) => (
                        <select
                          id={id}
                          aria-describedby={describedBy}
                          aria-invalid={invalid}
                          {...register('destination', { required: 'Please choose a destination, or select “Not decided yet”' })}
                        >
                          <option value="">Select a destination</option>
                          {destinationOptions.map((d) => (
                            <option key={d.value} value={d.value}>
                              {d.label}
                            </option>
                          ))}
                        </select>
                      )}
                    </FormField>

                    <FormField label="Intended course or study field" required error={errors.field?.message}>
                      {({ id, describedBy, invalid }) => (
                        <select
                          id={id}
                          aria-describedby={describedBy}
                          aria-invalid={invalid}
                          {...register('field', { required: 'Please select a study field' })}
                        >
                          <option value="">Select a study field</option>
                          {studyFieldOptions.map((f) => (
                            <option key={f} value={f}>
                              {f}
                            </option>
                          ))}
                        </select>
                      )}
                    </FormField>

                    <FormField label="Highest education qualification" required error={errors.qualification?.message}>
                      {({ id, describedBy, invalid }) => (
                        <select
                          id={id}
                          aria-describedby={describedBy}
                          aria-invalid={invalid}
                          {...register('qualification', { required: 'Please select your highest qualification' })}
                        >
                          <option value="">Select a qualification</option>
                          {qualificationOptions.map((q) => (
                            <option key={q} value={q}>
                              {q}
                            </option>
                          ))}
                        </select>
                      )}
                    </FormField>

                    <FormField label="Preferred intake" required error={errors.intake?.message}>
                      {({ id, describedBy, invalid }) => (
                        <select
                          id={id}
                          aria-describedby={describedBy}
                          aria-invalid={invalid}
                          {...register('intake', { required: 'Please select an intake' })}
                        >
                          <option value="">Select an intake</option>
                          {intakeOptions.map((i) => (
                            <option key={i} value={i}>
                              {i}
                            </option>
                          ))}
                        </select>
                      )}
                    </FormField>
                  </div>
                </fieldset>

                {/* ------------------------------------------- Step 3 */}
                <fieldset hidden={step !== 2}>
                  <legend className="visually-hidden">Where you have got to</legend>
                  <div className="form-grid">
                    <FormField
                      label="English language test status"
                      required
                      hint="If you have a result, we will ask for the section scores later."
                      error={errors.englishStatus?.message}
                    >
                      {({ id, describedBy, invalid }) => (
                        <select
                          id={id}
                          aria-describedby={describedBy}
                          aria-invalid={invalid}
                          {...register('englishStatus', { required: 'Please select your test status' })}
                        >
                          <option value="">Select your status</option>
                          {englishTestOptions.map((e) => (
                            <option key={e} value={e}>
                              {e}
                            </option>
                          ))}
                        </select>
                      )}
                    </FormField>

                    <FormField label="Preferred consultation method" required error={errors.method?.message}>
                      {({ id, describedBy, invalid }) => (
                        <select
                          id={id}
                          aria-describedby={describedBy}
                          aria-invalid={invalid}
                          {...register('method', { required: 'Please choose how you would like to speak' })}
                        >
                          <option value="">Select a method</option>
                          {consultationMethods.map((m) => (
                            <option key={m} value={m}>
                              {m}
                            </option>
                          ))}
                        </select>
                      )}
                    </FormField>
                  </div>
                </fieldset>

                {/* ------------------------------------------- Step 4 */}
                <fieldset hidden={step !== 3}>
                  <legend className="visually-hidden">Anything else</legend>
                  <div className="form-grid">
                    <FormField
                      label="Additional message"
                      required
                      hint="Anything that affects the advice — a gap in your education, a previous visa refusal, a funding constraint. These are the useful things to say early."
                      error={errors.message?.message}
                      className="field--full"
                    >
                      {({ id, describedBy, invalid }) => (
                        <textarea
                          id={id}
                          rows={6}
                          aria-describedby={describedBy}
                          aria-invalid={invalid}
                          {...register('message', {
                            required: 'Please tell us a little about your situation',
                            minLength: { value: 20, message: 'A sentence or two more would help us prepare' },
                          })}
                        />
                      )}
                    </FormField>

                    <div className="field field--full field--check">
                      <label>
                        <input
                          type="checkbox"
                          aria-invalid={Boolean(errors.consent)}
                          {...register('consent', { required: 'Please confirm you agree to the privacy policy' })}
                        />
                        <span>
                          I have read the{' '}
                          <Link to={brand.forms.privacyPolicyPath}>privacy policy</Link> and agree to{' '}
                          {brand.shortName} using these details to respond to my enquiry.
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="field__error" role="alert">
                          <AlertTriangle size={14} aria-hidden="true" />
                          {errors.consent.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="booking__review">
                    <h3>What you are sending</h3>
                    <dl>
                      <div>
                        <dt>Name</dt>
                        <dd>{getValues('fullName') || '—'}</dd>
                      </div>
                      <div>
                        <dt>Destination</dt>
                        <dd>
                          {destinationOptions.find((d) => d.value === getValues('destination'))?.label || '—'}
                        </dd>
                      </div>
                      <div>
                        <dt>Study field</dt>
                        <dd>{getValues('field') || '—'}</dd>
                      </div>
                      <div>
                        <dt>Intake</dt>
                        <dd>{getValues('intake') || '—'}</dd>
                      </div>
                    </dl>
                  </div>
                </fieldset>

                {result && result.status !== 'sent' && (
                  <div
                    className={`form-result form-result--${result.status === 'error' ? 'error' : 'notice'}`}
                    role="status"
                  >
                    <AlertTriangle size={18} aria-hidden="true" />
                    <div>
                      <h3>{result.status === 'error' ? 'Submission failed' : 'Nothing was sent'}</h3>
                      <p>{result.message}</p>
                      {(hasEmail() || hasPhone()) && (
                        <p className="form-result__fallback">
                          You can reach us
                          {hasEmail() && (
                            <>
                              {' '}
                              by email at <a href={mailHref()}>{brand.contact.email.value}</a>
                            </>
                          )}
                          {hasEmail() && hasPhone() && ' or'}
                          {hasPhone() && (
                            <>
                              {' '}
                              by phone on <a href={telHref()}>{brand.contact.phone.value}</a>
                            </>
                          )}
                          .
                        </p>
                      )}
                    </div>
                  </div>
                )}

                <div className="booking__actions">
                  {step > 0 && (
                    <button type="button" className="btn btn--ghost" onClick={back}>
                      <ArrowLeft size={16} aria-hidden="true" />
                      Back
                    </button>
                  )}
                  {step < STEPS.length - 1 ? (
                    <button type="button" className="btn" onClick={next}>
                      Continue
                      <ArrowRight size={16} aria-hidden="true" />
                    </button>
                  ) : (
                    <button type="submit" className="btn btn--gold" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="spin" aria-hidden="true" />
                          Submitting…
                        </>
                      ) : (
                        <>
                          Submit request
                          <ArrowRight size={16} aria-hidden="true" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </Reveal>
          </div>

          <aside className="booking__aside">
            <Reveal delay={0.08}>
              <div className="side-panel">
                <h2>What happens next</h2>
                <ol className="side-panel__ordered">
                  <li>A counsellor reads your request and checks it against your stated plans.</li>
                  <li>We come back to arrange a time, by your preferred method.</li>
                  <li>
                    The conversation covers what your record supports, what it will cost and which
                    intake is realistic.
                  </li>
                  <li>You get the reasoning in writing afterwards.</li>
                </ol>
              </div>

              <div className="side-panel">
                <h2>What to have ready</h2>
                <ul className="side-panel__ticks">
                  <li>Transcripts for your most recent qualification</li>
                  <li>Any English test result, including section scores</li>
                  <li>A realistic view of your funding</li>
                  <li>Any previous visa refusals, for any country</li>
                </ul>
              </div>

              {!brand.consultation.isFree && (
                <Notice tone="info" title="On fees.">
                  We do not advertise this consultation as free. Fees are discussed before anything
                  is booked, so you know what you are agreeing to.
                </Notice>
              )}

              {!brand.forms.isConfigured && (
                <Notice tone="policy" title="This form is not connected yet.">
                  Validation works, but no backend is configured, so nothing is sent or stored. Set{' '}
                  <code>forms.endpoint</code> in <code>src/config/brand.js</code> to connect a CRM,
                  email service or API.
                </Notice>
              )}
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  )
}
