import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { afterEach, describe, expect, it, vi } from 'vitest'

import ContactForm from '@/pages/contact/components/ContactForm'

function renderContactForm(pathname = '/en/contact') {
  return render(
    <MemoryRouter initialEntries={[pathname]}>
      <ContactForm />
    </MemoryRouter>,
  )
}

afterEach(() => {
  vi.restoreAllMocks()
})

describe('ContactForm', () => {
  it('renders the English contact form fields', () => {
    renderContactForm()

    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Inquiry')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send inquiry/i })).toBeInTheDocument()
  })

  it('keeps honeypot fields in the form but outside the visible experience', () => {
    const { container } = renderContactForm()
    const honeypotWrapper = container.querySelector('.sr-only')

    expect(container.querySelector('input[name="company"]')).toBeInTheDocument()
    expect(container.querySelector('input[name="website"]')).toBeInTheDocument()
    expect(honeypotWrapper).toContainElement(container.querySelector('input[name="company"]'))
    expect(honeypotWrapper).toContainElement(container.querySelector('input[name="website"]'))
    expect(container.querySelector('input[name="company"]')).toHaveAttribute('tabindex', '-1')
    expect(container.querySelector('input[name="website"]')).toHaveAttribute('tabindex', '-1')
  })

  it('submits the form and shows a success message', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ ok: true }),
    })
    vi.stubGlobal('fetch', fetchMock)

    const user = userEvent.setup()
    renderContactForm()

    await user.type(screen.getByLabelText('Name'), 'Todor Marinov')
    await user.type(screen.getByLabelText('Email'), 'todor@example.com')
    await user.type(screen.getByLabelText('Phone'), '+359 885 60 42 36')
    await user.type(screen.getByLabelText('Inquiry'), 'We need an underwater inspection.')
    await user.click(screen.getByRole('button', { name: /send inquiry/i }))

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(
        '/send-email.php',
        expect.objectContaining({
          method: 'POST',
          body: expect.any(FormData),
        }),
      )
    })

    expect(
      await screen.findByText('Your inquiry was sent successfully. We will contact you soon.'),
    ).toBeInTheDocument()
  })

  it('shows an error message when the endpoint rejects the submit', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        json: () => Promise.resolve({ ok: false }),
      }),
    )

    const user = userEvent.setup()
    renderContactForm()

    await user.type(screen.getByLabelText('Name'), 'Todor Marinov')
    await user.type(screen.getByLabelText('Email'), 'todor@example.com')
    await user.type(screen.getByLabelText('Inquiry'), 'We need an underwater inspection.')
    await user.click(screen.getByRole('button', { name: /send inquiry/i }))

    expect(
      await screen.findByText(
        'The inquiry could not be sent. Please check the details and try again.',
      ),
    ).toBeInTheDocument()
  })
})
