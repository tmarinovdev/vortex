import { Send } from 'lucide-react'
import { useActionState, useRef } from 'react'
import { useFormStatus } from 'react-dom'

import { Button } from '@/components/ui/button'
import { useAppTranslation } from '@/i18n/useAppTranslation'

type ContactFormState = {
  status: 'idle' | 'success' | 'error'
  messageKey: string
}

const initialState: ContactFormState = {
  status: 'idle',
  messageKey: '',
}

const endpoint = '/send-email.php'

async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  formData.set('submittedAt', Date.now().toString())

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      return {
        status: 'error',
        messageKey: 'pages.contact.form.status.error',
      }
    }

    const result = (await response.json()) as { ok?: boolean }

    return result.ok
      ? {
          status: 'success',
          messageKey: 'pages.contact.form.status.success',
        }
      : {
          status: 'error',
          messageKey: 'pages.contact.form.status.error',
        }
  } catch {
    return {
      status: 'error',
      messageKey: 'pages.contact.form.status.network',
    }
  }
}

function SubmitButton() {
  const { pending } = useFormStatus()
  const { t } = useAppTranslation()

  return (
    <Button type="submit" disabled={pending} className="min-w-36">
      {pending ? t('pages.contact.form.actions.sending') : t('pages.contact.form.actions.submit')}
      <Send className="size-4" aria-hidden="true" />
    </Button>
  )
}

export default function ContactForm() {
  const { t } = useAppTranslation()
  const formReadyAt = useRef(0)
  const markFormInteraction = () => {
    if (formReadyAt.current === 0) {
      formReadyAt.current = Date.now()
    }
  }
  const [state, formAction] = useActionState(
    (previousState: ContactFormState, formData: FormData) => {
      formData.set('formReadyAt', formReadyAt.current.toString())

      return submitContactForm(previousState, formData)
    },
    initialState,
  )

  return (
    <form
      action={formAction}
      className="mt-8 grid gap-5"
      onFocusCapture={markFormInteraction}
      onPointerDown={markFormInteraction}
    >
      <div className="grid gap-2">
        <label htmlFor="contact-name" className="text-foreground text-sm font-medium">
          {t('pages.contact.form.fields.name.label')}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          maxLength={80}
          autoComplete="name"
          className="border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-primary/30 min-h-12 rounded-md border px-4 transition-colors outline-none focus-visible:ring-3"
          placeholder={t('pages.contact.form.fields.name.placeholder')}
        />
      </div>

      <div className="grid gap-2 md:grid-cols-2 md:gap-5">
        <div className="grid gap-2">
          <label htmlFor="contact-email" className="text-foreground text-sm font-medium">
            {t('pages.contact.form.fields.email.label')}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            maxLength={120}
            autoComplete="email"
            className="border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-primary/30 min-h-12 rounded-md border px-4 transition-colors outline-none focus-visible:ring-3"
            placeholder={t('pages.contact.form.fields.email.placeholder')}
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="contact-phone" className="text-foreground text-sm font-medium">
            {t('pages.contact.form.fields.phone.label')}
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            maxLength={40}
            autoComplete="tel"
            className="border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-primary/30 min-h-12 rounded-md border px-4 transition-colors outline-none focus-visible:ring-3"
            placeholder={t('pages.contact.form.fields.phone.placeholder')}
          />
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="contact-inquiry" className="text-foreground text-sm font-medium">
          {t('pages.contact.form.fields.inquiry.label')}
        </label>
        <textarea
          id="contact-inquiry"
          name="inquiry"
          required
          minLength={10}
          maxLength={2000}
          rows={7}
          className="border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-primary/30 resize-y rounded-md border px-4 py-3 transition-colors outline-none focus-visible:ring-3"
          placeholder={t('pages.contact.form.fields.inquiry.placeholder')}
        />
      </div>

      <div className="sr-only" aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
        <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <SubmitButton />

        {state.status !== 'idle' ? (
          <p
            className={
              state.status === 'success'
                ? 'text-sm text-[var(--success)]'
                : 'text-destructive text-sm'
            }
            role="status"
            aria-live="polite"
          >
            {t(state.messageKey)}
          </p>
        ) : null}
      </div>
    </form>
  )
}
