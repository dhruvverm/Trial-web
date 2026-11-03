import { Info, AlertTriangle, ShieldCheck } from 'lucide-react'

const ICONS = { info: Info, warning: AlertTriangle, policy: ShieldCheck }

/**
 * Caveat block. Used wherever the honest answer involves "check the
 * official source" or "this is placeholder content" — which on a
 * site about immigration is often.
 */
export default function Notice({ children, tone = 'info', inset = false, title }) {
  const Icon = ICONS[tone] ?? Info
  return (
    <div className={`notice ${inset ? 'notice--inset' : ''}`}>
      <Icon size={18} aria-hidden="true" />
      <div>
        {title && <strong>{title}</strong>}
        {title && ' '}
        {children}
      </div>
    </div>
  )
}
