import { CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const capabilityGroups = [
  {
    titleKey: 'pages.home.capabilities.groups.diving.title',
    itemsKey: 'pages.home.capabilities.groups.diving.items',
  },
  {
    titleKey: 'pages.home.capabilities.groups.ropeAccess.title',
    itemsKey: 'pages.home.capabilities.groups.ropeAccess.items',
  },
]

export default function HomeCapabilities() {
  const { t } = useTranslation()

  return (
    <section className="bg-background py-12">
      <div className="site-container">
        <h2 className="text-foreground text-center text-3xl font-medium md:text-4xl">
          {t('pages.home.capabilities.title')}
        </h2>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {capabilityGroups.map((group) => {
            const items = t(group.itemsKey, { returnObjects: true }) as string[]

            return (
              <article
                key={group.titleKey}
                className="border-border/70 bg-card/70 min-h-72 rounded-lg border px-7 py-8 shadow-[0_16px_40px_var(--shadow-navy)] transition-colors hover:border-[var(--border-medium)] hover:bg-[var(--panel-hover)]"
              >
                <h3 className="text-foreground text-center text-2xl font-medium">
                  {t(group.titleKey)}
                </h3>

                <ul className="mt-7 grid gap-4">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="text-muted-foreground flex items-start gap-3 text-base"
                    >
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-[var(--icon-primary)]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
