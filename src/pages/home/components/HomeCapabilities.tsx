import { CheckCircle2, ChevronDown } from 'lucide-react'

import { useAppTranslation } from '@/i18n/useAppTranslation'

const capabilityGroups = [
  {
    titleKey: 'pages.home.capabilities.groups.diving.title',
    descriptionKey: 'pages.home.capabilities.groups.diving.description',
    itemsKey: 'pages.home.capabilities.groups.diving.items',
    detailsKey: 'pages.home.capabilities.groups.diving.details',
  },
  {
    titleKey: 'pages.home.capabilities.groups.ropeAccess.title',
    descriptionKey: 'pages.home.capabilities.groups.ropeAccess.description',
    itemsKey: 'pages.home.capabilities.groups.ropeAccess.items',
    detailsKey: 'pages.home.capabilities.groups.ropeAccess.details',
  },
]

export default function HomeCapabilities() {
  const { t } = useAppTranslation()

  return (
    <section className="bg-background py-12">
      <div className="site-container">
        <h2 className="text-foreground text-center text-3xl font-medium md:text-4xl">
          {t('pages.home.capabilities.title')}
        </h2>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {capabilityGroups.map((group) => {
            const description = t(group.descriptionKey)
            const items = t(group.itemsKey, { returnObjects: true }) as string[]
            const details = t(group.detailsKey, { returnObjects: true }) as string[][]

            return (
              <article
                key={group.titleKey}
                className="border-border/70 bg-card/70 min-h-72 rounded-lg border px-7 py-8 shadow-[0_16px_40px_var(--shadow-navy)] transition-colors hover:border-[var(--border-medium)] hover:bg-[var(--panel-hover)]"
              >
                <h3 className="text-foreground text-center text-2xl font-medium">
                  {t(group.titleKey)}
                </h3>

                {description ? (
                  <p className="text-muted-foreground mt-4 text-base leading-7">{description}</p>
                ) : null}

                <ul className="mt-7 grid gap-4">
                  {items.map((item, index) => {
                    const itemDetails = details[index] ?? []

                    return (
                      <li key={item} className="text-muted-foreground text-base">
                        {itemDetails.length > 0 ? (
                          <details className="group">
                            <summary className="text-muted-foreground flex cursor-pointer list-none items-start gap-3 font-medium">
                              <CheckCircle2
                                className="mt-0.5 size-4 shrink-0 text-[var(--icon-primary)]"
                                aria-hidden="true"
                              />
                              <span className="flex-1">{item}</span>
                              <ChevronDown
                                className="mt-0.5 size-4 shrink-0 text-[var(--icon-primary)] transition-transform group-open:rotate-180"
                                aria-hidden="true"
                              />
                            </summary>

                            <ul className="border-border/70 mt-4 grid gap-3 border-t pt-4 pl-6">
                              {itemDetails.map((detail) => (
                                <li
                                  key={detail}
                                  className="flex items-start gap-3 text-sm leading-6"
                                >
                                  <span
                                    className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--icon-primary)]"
                                    aria-hidden="true"
                                  />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </details>
                        ) : (
                          <div className="flex items-start gap-3">
                            <CheckCircle2
                              className="mt-0.5 size-4 shrink-0 text-[var(--icon-primary)]"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </div>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
