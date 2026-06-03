import PageMeta from '@/components/seo/PageMeta'
import { useAppTranslation } from '@/i18n/useAppTranslation'
import ContactForm from '@/pages/contact/components/ContactForm'

export default function ContactPage() {
  const { t } = useAppTranslation()

  return (
    <main className="site-container min-h-[60svh] py-12 md:py-16">
      <PageMeta
        title={t('pages.contact.meta.title')}
        description={t('pages.contact.meta.description')}
      />

      <section className="mx-auto max-w-3xl">
        <h1 className="text-foreground text-4xl font-semibold md:text-5xl">
          {t('pages.contact.title')}
        </h1>

        <p className="text-muted-foreground mt-4 text-base leading-7">
          {t('pages.contact.description')}
        </p>

        <ContactForm />
      </section>
    </main>
  )
}
