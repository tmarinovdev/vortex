import { BriefcaseBusiness, Gauge, PhoneCall, Wrench } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const reasons = [
  {
    Icon: Wrench,
    titleKey: 'pages.home.partnerReasons.items.versatility.title',
    descriptionKey: 'pages.home.partnerReasons.items.versatility.description',
  },
  {
    Icon: Gauge,
    titleKey: 'pages.home.partnerReasons.items.efficiency.title',
    descriptionKey: 'pages.home.partnerReasons.items.efficiency.description',
  },
  {
    Icon: BriefcaseBusiness,
    titleKey: 'pages.home.partnerReasons.items.expertise.title',
    descriptionKey: 'pages.home.partnerReasons.items.expertise.description',
  },
  {
    Icon: PhoneCall,
    titleKey: 'pages.home.partnerReasons.items.contact.title',
    descriptionKey: 'pages.home.partnerReasons.items.contact.description',
  },
]

export default function HomePartnerReasons() {
  const { t } = useTranslation()

  return (
    <section className="bg-background py-12">
      <div className="site-container">
        <h2 className="text-foreground text-center text-3xl font-medium md:text-4xl">
          {t('pages.home.partnerReasons.title')}
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <article
              key={reason.titleKey}
              className="border-border/70 bg-card/70 flex min-h-56 flex-col items-center justify-center rounded-lg border px-6 py-8 text-center shadow-[0_16px_40px_var(--shadow-navy)] transition-colors hover:border-[var(--border-medium)] hover:bg-[var(--panel-hover)]"
            >
              <reason.Icon
                className="size-12 text-[var(--icon-primary)]"
                strokeWidth={1.7}
                aria-hidden="true"
              />

              <h3 className="text-foreground mt-5 text-lg font-semibold">{t(reason.titleKey)}</h3>

              <p className="text-muted-foreground mt-3 max-w-xs text-base leading-6">
                {t(reason.descriptionKey)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
