import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router'

import { Button } from '@/components/ui/button'

function getLocalizedPath(path: string, pathname: string) {
  const isEnglish = pathname === '/en' || pathname.startsWith('/en/')

  return isEnglish ? `/en${path}` : path
}

export default function HomeHero() {
  const { t } = useTranslation()
  const { pathname } = useLocation()

  return (
    <section className="border-border/70 relative min-h-[620px] overflow-hidden border-b">
      <div className="home-hero site-container flex min-h-[620px] items-center py-20">
        <div className="max-w-3xl">
          <p className="text-primary mb-5 text-sm font-medium tracking-[0.18em] uppercase">
            {t('pages.home.hero.eyebrow')}
          </p>

          <h1 className="text-foreground max-w-3xl text-5xl leading-[1.05] font-semibold uppercase md:text-6xl">
            {t('pages.home.hero.title')}
          </h1>

          <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-7 md:text-lg">
            {t('pages.home.hero.description')}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild>
              <Link to={getLocalizedPath('/contact', pathname)}>
                {t('pages.home.hero.primaryAction')}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>

            <Button variant="outline" asChild>
              <Link to={getLocalizedPath('/projects', pathname)}>
                {t('pages.home.hero.secondaryAction')}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
