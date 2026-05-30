import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, Outlet, useLocation } from 'react-router'

import type { SupportedLanguage } from '@/i18n/config'

const navItems = [
  { slug: '', labelKey: 'nav.home' },
  { slug: 'projects', labelKey: 'nav.projects' },
  { slug: 'contact', labelKey: 'nav.contact' },
]

function getLocalizedPath(slug: string, language: SupportedLanguage) {
  const path = slug ? `/${slug}` : '/'

  return language === 'en' ? `/en${path === '/' ? '' : path}` : path
}

function getLanguageFromPath(pathname: string): SupportedLanguage {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'bg'
}

function getSlugFromPath(pathname: string) {
  return pathname.replace(/^\/en/, '').replace(/^\//, '')
}

export default function SiteLayout() {
  const { pathname } = useLocation()
  const { i18n, t } = useTranslation()
  const language = getLanguageFromPath(pathname)
  const currentSlug = getSlugFromPath(pathname)
  const alternateLanguage = language === 'en' ? 'bg' : 'en'
  const year = new Date().getFullYear()

  useEffect(() => {
    if (i18n.language !== language) {
      void i18n.changeLanguage(language)
    }
  }, [i18n, language])

  return (
    <div className="bg-background text-foreground min-h-svh">
      <header className="border-border/70 border-b">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            to={getLocalizedPath('', language)}
            className="text-foreground text-lg font-semibold tracking-wide"
          >
            {t('brand.name')}
          </Link>

          <div className="flex items-center gap-8">
            <nav aria-label="Main navigation" className="flex items-center gap-6 text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.slug}
                  to={getLocalizedPath(item.slug, language)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t(item.labelKey)}
                </Link>
              ))}
            </nav>

            <Link
              to={getLocalizedPath(currentSlug, alternateLanguage)}
              className="text-primary hover:text-accent text-sm font-medium transition-colors"
            >
              {alternateLanguage.toUpperCase()}
            </Link>
          </div>
        </div>
      </header>

      <Outlet />

      <footer className="border-border/70 border-t">
        <div className="text-muted-foreground mx-auto max-w-7xl px-6 py-6 text-sm">
          {t('footer.copyright', { year })}
        </div>
      </footer>
    </div>
  )
}
