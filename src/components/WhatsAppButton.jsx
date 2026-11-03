import { MessageCircle } from 'lucide-react'
import { brand, hasWhatsApp, whatsappHref } from '../config/brand'

/**
 * Floating WhatsApp action. Renders nothing at all until a real
 * number is configured in src/config/brand.js — a button that opens
 * a dead chat is worse than no button.
 */
export default function WhatsAppButton() {
  if (!hasWhatsApp()) return null

  return (
    <a
      className="whatsapp-fab"
      href={whatsappHref(`Hello ${brand.shortName}, I would like to ask about studying abroad.`)}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Message us on WhatsApp"
    >
      <MessageCircle size={20} aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  )
}
