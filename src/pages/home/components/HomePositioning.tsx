import AboveIcon from '@/assets/icons/above.svg?react'
import BelowIcon from '@/assets/icons/below.svg?react'
import BeyondIcon from '@/assets/icons/beyond.svg?react'
import { useAppTranslation } from '@/i18n/useAppTranslation'

const items = [
  {
    Icon: AboveIcon,
    titleKey: 'pages.home.positioning.items.above.title',
    descriptionKey: 'pages.home.positioning.items.above.description',
  },
  {
    Icon: BelowIcon,
    titleKey: 'pages.home.positioning.items.below.title',
    descriptionKey: 'pages.home.positioning.items.below.description',
  },
  {
    Icon: BeyondIcon,
    titleKey: 'pages.home.positioning.items.beyond.title',
    descriptionKey: 'pages.home.positioning.items.beyond.description',
  },
]

export default function HomePositioning() {
  const { t } = useAppTranslation()

  return (
    <section className="bg-background py-12">
      <div className="site-container">
        <h2 className="text-foreground text-center text-3xl font-medium [word-spacing:1rem] md:text-4xl">
          {t('pages.home.positioning.title')}
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.titleKey}
              className="border-border/70 bg-card/70 flex min-h-48 flex-col items-center justify-center rounded-lg border px-6 py-8 text-center shadow-[0_16px_40px_var(--shadow-navy)] transition-colors hover:border-[var(--border-medium)] hover:bg-[var(--panel-hover)]"
            >
              <item.Icon
                className="h-16 w-16 text-[var(--icon-primary)]"
                aria-hidden="true"
                focusable="false"
              />

              <h3 className="text-foreground mt-5 text-base font-semibold tracking-[0.12em] uppercase">
                {t(item.titleKey)}
              </h3>

              <p className="text-muted-foreground mt-3 max-w-xs text-base leading-6">
                {t(item.descriptionKey)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
