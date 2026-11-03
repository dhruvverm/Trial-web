/**
 * Enquiry submission layer
 * ---------------------------------------------------------------
 * The single integration point for every form on the site. Connect a
 * backend, CRM, email service or serverless function by setting
 * `brand.forms.endpoint` and flipping `isConfigured` to true.
 *
 * Until then this deliberately does NOT pretend a submission
 * succeeded. It resolves with `{ status: 'not-configured' }` and the
 * forms tell the user plainly that nothing was sent, with a fallback
 * contact route offered where one is configured.
 *
 * Nothing here writes student data to localStorage, sessionStorage
 * or any analytics tool. Enquiries contain personal data and should
 * travel to your own backend over HTTPS and nowhere else.
 */

import { brand } from '../config/brand'

/** @typedef {{status:'sent'|'not-configured'|'error', message:string}} EnquiryResult */

/**
 * @param {Record<string, unknown>} payload
 * @param {{ formName: string }} meta
 * @returns {Promise<EnquiryResult>}
 */
export async function submitEnquiry(payload, { formName }) {
  if (!brand.forms.isConfigured || !brand.forms.endpoint) {
    // Surface this honestly rather than showing a false success state.
    return {
      status: 'not-configured',
      message:
        'This form is not yet connected to a backend, so your details have not been sent or stored anywhere.',
    }
  }

  try {
    const response = await fetch(brand.forms.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ form: formName, submittedAt: new Date().toISOString(), ...payload }),
    })

    if (!response.ok) {
      return {
        status: 'error',
        message: `We could not submit your enquiry (error ${response.status}). Please try again, or contact us directly.`,
      }
    }

    return { status: 'sent', message: 'Your enquiry has been received.' }
  } catch (error) {
    return {
      status: 'error',
      message:
        'We could not reach our servers. Please check your connection and try again, or contact us directly.',
    }
  }
}
