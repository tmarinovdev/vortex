import { useAppTranslation } from '@/i18n/useAppTranslation'

export default function ContactPage() {
  const { t } = useAppTranslation()

  return (
    <main className="site-container min-h-[60svh] py-16">
      <title>{t('pages.contact.meta.title')}</title>
      <meta name="description" content={t('pages.contact.meta.description')} />
      <h1 className="text-foreground text-4xl font-semibold">{t('pages.contact.title')}</h1>
    </main>
  )
}
