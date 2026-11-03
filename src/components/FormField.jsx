import { useId } from 'react'
import { AlertCircle } from 'lucide-react'

/**
 * Labelled form control with inline validation messaging.
 *
 * Errors are wired with aria-invalid and aria-describedby so assistive
 * technology announces them, and the message is text rather than
 * colour alone.
 */
export default function FormField({
  label,
  error,
  hint,
  required,
  children,
  className = '',
  id: providedId,
}) {
  const generatedId = useId()
  const id = providedId ?? generatedId
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined

  return (
    <div className={`field ${error ? 'field--error' : ''} ${className}`}>
      <label htmlFor={id} className="field__label">
        {label}
        {required && (
          <>
            {' '}
            <span className="field__required" aria-hidden="true">
              *
            </span>
            <span className="visually-hidden">(required)</span>
          </>
        )}
      </label>
      {hint && (
        <p id={hintId} className="field__hint">
          {hint}
        </p>
      )}
      {children({ id, describedBy: [hintId, errorId].filter(Boolean).join(' ') || undefined, invalid: Boolean(error) })}
      {error && (
        <p id={errorId} className="field__error" role="alert">
          <AlertCircle size={14} aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}
