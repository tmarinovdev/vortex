import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router'

import VortexLogo from '@/assets/logo-vortexes.svg?react'
import {
  getLocalizedPathForLanguage,
  getSlugFromPath,
  useAppTranslation,
} from '@/i18n/useAppTranslation'

const navItems = [
  { slug: '', labelKey: 'nav.home' },
  { slug: 'projects', labelKey: 'nav.projects' },
  { slug: 'contact', labelKey: 'nav.contact' },
]

export default function SiteLayout() {
  const { pathname } = useLocation()
  const { language, t } = useAppTranslation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const currentSlug = getSlugFromPath(pathname)
  const alternateLanguage = language === 'en' ? 'bg' : 'en'
  const year = new Date().getFullYear()

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <div className="bg-background text-foreground min-h-svh">
      <header className="border-border/70 relative z-20 border-b">
        <div className="site-container grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 py-2">
          <Link
            to={getLocalizedPathForLanguage('/', language)}
            aria-label={t('brand.name')}
            title={t('brand.name')}
            className="inline-flex justify-self-start text-[var(--icon-primary)] transition-colors hover:text-[var(--icon-secondary)]"
            onClick={closeMobileMenu}
          >
            <VortexLogo
              aria-hidden="true"
              focusable="false"
              className="h-14 w-auto max-w-[100px] sm:h-18 sm:max-w-[220px] md:h-24 lg:h-30 lg:max-w-[300px]"
            />
            <span className="sr-only">{t('brand.name')}</span>
          </Link>

          <p className="text-foreground/80 pointer-events-none text-center text-sm leading-tight font-medium whitespace-nowrap [word-spacing:0.2rem] sm:text-base md:text-2xl">
            {t('pages.home.positioning.title')}
          </p>

          <div className="hidden items-center gap-8 justify-self-end min-[1080px]:flex">
            <nav aria-label="Main navigation" className="flex items-center gap-6 text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.slug}
                  to={getLocalizedPathForLanguage(item.slug ? `/${item.slug}` : '/', language)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t(item.labelKey)}
                </Link>
              ))}
            </nav>

            <Link
              to={getLocalizedPathForLanguage(
                currentSlug ? `/${currentSlug}` : '/',
                alternateLanguage,
              )}
              className="text-primary hover:text-accent text-sm font-medium transition-colors"
            >
              {alternateLanguage.toUpperCase()}
            </Link>
          </div>

          <button
            type="button"
            className="border-border/70 text-primary hover:border-primary hover:text-accent inline-flex size-11 items-center justify-center justify-self-end rounded-md border transition-colors min-[1080px]:hidden"
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
          <div
            id="mobile-navigation"
            className="border-border/70 bg-background border-t min-[1080px]:hidden"
          >
            <div className="site-container py-4">
              <nav aria-label="Mobile navigation" className="grid gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.slug}
                    to={getLocalizedPathForLanguage(item.slug ? `/${item.slug}` : '/', language)}
                    className="text-foreground hover:text-primary rounded-md px-1 py-3 text-base font-medium transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {t(item.labelKey)}
                  </Link>
                ))}

                <Link
                  to={getLocalizedPathForLanguage(
                    currentSlug ? `/${currentSlug}` : '/',
                    alternateLanguage,
                  )}
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
