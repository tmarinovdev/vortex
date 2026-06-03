import { expect, test } from '@playwright/test'

test('renders the Bulgarian home page', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/Vortexes Ltd/)
  await expect(page.getByRole('heading', { name: /там където другите не могат/i })).toBeVisible()
  await expect(page.locator('html')).toHaveAttribute('lang', 'bg')
})

test('renders the English home page and language-aware project link', async ({ page }) => {
  await page.goto('/en')

  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  await expect(page.getByRole('heading', { name: /accessing the inaccessible/i })).toBeVisible()

  await page.getByRole('link', { name: /past projects/i }).click()
  await expect(page).toHaveURL(/\/en\/projects$/)
  await expect(page.getByRole('heading', { name: /past projects/i })).toBeVisible()
})

test('renders project cards', async ({ page }) => {
  await page.goto('/en/projects')

  await expect(page.getByRole('heading', { name: /past projects/i })).toBeVisible()
  await expect(page.getByRole('heading', { name: /NEK EAD/i })).toBeVisible()
})

test('submits the contact form with a mocked PHP endpoint', async ({ page }) => {
  await page.route('**/send-email.php', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true }),
    })
  })

  await page.goto('/en/contact')
  await page.getByLabel('Name').fill('Todor Marinov')
  await page.getByLabel('Email').fill('todor@example.com')
  await page.getByLabel('Inquiry').fill('We need an underwater inspection.')
  await page.getByRole('button', { name: /send inquiry/i }).click()

  await expect(
    page.getByText('Your inquiry was sent successfully. We will contact you soon.'),
  ).toBeVisible()
})
