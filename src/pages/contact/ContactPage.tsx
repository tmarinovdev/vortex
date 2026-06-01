import { useTranslation } from 'react-i18next'

export default function ContactPage() {
  const { t } = useTranslation()

  return (
    <main className="site-container min-h-[60svh] py-16">
      <h1 className="text-foreground text-4xl font-semibold">{t('pages.contact.title')}</h1>
    </main>
  )
}
