import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { CheckCircle2, Loader2, Send, AlertTriangle } from 'lucide-react'
import FormField from './FormField'
import { brand, hasEmail, hasPhone, mailHref, telHref } from '../config/brand'
import { submitEnquiry } from '../utils/submitEnquiry'
import { destinationOptions, enquiryTopics } from '../data/formOptions'

/**
 * Short enquiry form, used on /contact and on service pages.
 *
 * The multi-step version on /book-consultation collects a fuller
 * picture; this one asks only what is needed to start a conversation.
 */
export default function EnquiryForm({ formName = 'general-enquiry', compact = false, topicDefault = '' }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { topic: topicDefault } })
  const [result, setResult] = useState(null)

  const onSubmit = async (values) => {
    const outcome = await submitEnquiry(values, { formName })
    setResult(outcome)
    if (outcome.status === 'sent') reset()
  }

  if (result?.status === 'sent') {
    return (
      <div className="form-result form-result--success" role="status">
        <CheckCircle2 size={22} aria-hidden="true" />
        <div>
          <h3>Enquiry received</h3>
          <p>{brand.consultation.responseCommitment}</p>
          <button type="button" className="btn btn--ghost" onClick={() => setResult(null)}>
            Send another enquiry
          </button>
        </div>
      </div>
    )
  }

  return (
    <form className={`enquiry-form ${compact ? 'enquiry-form--compact' : ''}`} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-grid">
        <FormField label="Full name" required error={errors.name?.message}>
          {({ id, describedBy, invalid }) => (
            <input
              id={id}
              type="text"
              autoComplete="name"
              aria-describedby={describedBy}
              aria-invalid={invalid}
              {...register('name', { required: 'Please enter your name' })}
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
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email address' },
              })}
            />
          )}
        </FormField>

        <FormField label="Phone number" hint="Include your country code." error={errors.phone?.message}>
          {({ id, describedBy, invalid }) => (
            <input
              id={id}
              type="tel"
              autoComplete="tel"
              placeholder="+00 000 000 0000"
              aria-describedby={describedBy}
              aria-invalid={invalid}
              {...register('phone', {
                pattern: { value: /^[+\d][\d\s()-]{6,}$/, message: 'Please enter a valid phone number' },
              })}
            />
          )}
        </FormField>

        <FormField label="What is your enquiry about?" error={errors.topic?.message}>
          {({ id, describedBy }) => (
            <select id={id} aria-describedby={describedBy} {...register('topic')}>
              <option value="">Select a topic</option>
              {enquiryTopics.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          )}
        </FormField>

        {!compact && (
          <FormField label="Preferred destination" className="field--full">
            {({ id, describedBy }) => (
              <select id={id} aria-describedby={describedBy} {...register('destination')}>
                <option value="">Select a destination</option>
                {destinationOptions.map((d) => (
                  <option key={d.value} value={d.value}>
                    {d.label}
                  </option>
                ))}
              </select>
            )}
          </FormField>
        )}

        <FormField label="Your message" required error={errors.message?.message} className="field--full">
          {({ id, describedBy, invalid }) => (
            <textarea
              id={id}
              rows={compact ? 4 : 6}
              aria-describedby={describedBy}
              aria-invalid={invalid}
              placeholder="Tell us what you are planning and where you have got to so far."
              {...register('message', {
                required: 'Please tell us a little about your enquiry',
                minLength: { value: 15, message: 'Please give us a little more detail' },
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
              I agree to the <Link to={brand.forms.privacyPolicyPath}>privacy policy</Link> and to being
              contacted about this enquiry.
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

      {result && result.status !== 'sent' && (
        <div className={`form-result form-result--${result.status === 'error' ? 'error' : 'notice'}`} role="status">
          <AlertTriangle size={18} aria-hidden="true" />
          <div>
            <p>{result.message}</p>
            {(hasEmail() || hasPhone()) && (
              <p className="form-result__fallback">
                In the meantime you can reach us
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

      <button type="submit" className="btn btn--gold" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            Send enquiry
            <Send size={15} aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  )
}
