import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, Outlet, useLocation } from 'react-router'

import VortexLogo from '@/assets/logo-vortexes.svg?react'
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const language = getLanguageFromPath(pathname)
  const currentSlug = getSlugFromPath(pathname)
  const alternateLanguage = language === 'en' ? 'bg' : 'en'
  const year = new Date().getFullYear()

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  useEffect(() => {
    if (i18n.language !== language) {
      void i18n.changeLanguage(language)
    }
  }, [i18n, language])

  return (
    <div className="bg-background text-foreground min-h-svh">
      <header className="border-border/70 relative z-20 border-b">
        <div className="site-container flex items-center justify-between py-2">
          <Link
            to={getLocalizedPath('', language)}
            aria-label={t('brand.name')}
            title={t('brand.name')}
            className="inline-flex text-[var(--icon-primary)] transition-colors hover:text-[var(--icon-secondary)]"
            onClick={closeMobileMenu}
          >
            <VortexLogo
              aria-hidden="true"
              focusable="false"
              className="h-18 w-auto max-w-[220px] md:h-30 md:max-w-[300px]"
            />
            <span className="sr-only">{t('brand.name')}</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
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

          <button
            type="button"
            className="border-border/70 text-primary hover:border-primary hover:text-accent inline-flex size-11 items-center justify-center rounded-md border transition-colors md:hidden"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>

        {isMobileMenuOpen ? (
          <div id="mobile-navigation" className="border-border/70 bg-background border-t md:hidden">
            <div className="site-container py-4">
              <nav aria-label="Mobile navigation" className="grid gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.slug}
                    to={getLocalizedPath(item.slug, language)}
                    className="text-foreground hover:text-primary rounded-md px-1 py-3 text-base font-medium transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {t(item.labelKey)}
                  </Link>
                ))}

                <Link
                  to={getLocalizedPath(currentSlug, alternateLanguage)}
                  className="text-primary hover:text-accent rounded-md px-1 py-3 text-base font-semibold transition-colors"
                  onClick={closeMobileMenu}
                >
                  {alternateLanguage.toUpperCase()}
                </Link>
              </nav>
            </div>
          </div>
        ) : null}
      </header>

      <Outlet />

      <footer className="border-border/70 border-t">
        <div className="site-container text-muted-foreground py-6 text-center text-base">
          &copy;{t('footer.copyright', { year })}
        </div>
      </footer>
    </div>
  )
}
