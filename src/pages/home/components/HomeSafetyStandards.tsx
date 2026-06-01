import { CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const isoBadges = [
  {
    src: '/images/iso-9001-2015.svg',
    altKey: 'pages.home.safety.iso.quality',
  },
  {
    src: '/images/iso-14001-2015.svg',
    altKey: 'pages.home.safety.iso.environment',
  },
  {
    src: '/images/iso-45001-2018.svg',
    altKey: 'pages.home.safety.iso.healthSafety',
  },
]

export default function HomeSafetyStandards() {
  const { t } = useTranslation()
  const certifications = t('pages.home.safety.certifications.items', {
    returnObjects: true,
  }) as string[]

  return (
    <section className="bg-background py-12">
      <div className="site-container">
        <h2 className="text-foreground text-center text-3xl font-medium md:text-4xl">
          {t('pages.home.safety.title')}
        </h2>

        <div className="border-border/70 bg-card/70 mt-8 grid overflow-hidden rounded-lg border shadow-[0_16px_40px_var(--shadow-navy)] lg:grid-cols-[1.2fr_1fr_1.2fr]">
          <div className="border-border/70 border-b p-7 lg:border-r lg:border-b-0">
            <p className="text-muted-foreground text-sm leading-7">
              {t('pages.home.safety.description')}
            </p>
          </div>

          <div className="border-border/70 border-b p-7 lg:border-r lg:border-b-0">
            <h3 className="text-foreground text-base font-semibold">
              {t('pages.home.safety.iso.title')}
            </h3>

            <div className="mt-5 grid grid-cols-3 items-center gap-4">
              {isoBadges.map((badge) => (
                <img
                  key={badge.src}
                  src={badge.src}
                  alt={t(badge.altKey)}
                  className="mx-auto h-16 w-auto object-contain"
                />
              ))}
            </div>
          </div>

          <div className="p-7">
            <h3 className="text-foreground text-base font-semibold">
              {t('pages.home.safety.certifications.title')}
            </h3>

            <ul className="mt-5 grid gap-4">
              {certifications.map((item) => (
                <li key={item} className="text-muted-foreground flex items-start gap-3 text-sm">
                  <CheckCircle2
                    className="mt-0.5 size-4 shrink-0 text-[var(--icon-primary)]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
