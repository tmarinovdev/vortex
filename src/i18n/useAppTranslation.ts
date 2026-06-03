import { useMemo } from 'react'
import { useLocation } from 'react-router'

import { i18next, type SupportedLanguage } from '@/i18n/config'

export function getLanguageFromPath(pathname: string): SupportedLanguage {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'bg'
}

export function getLocalizedPath(path: string, pathname: string) {
  const language = getLanguageFromPath(pathname)

  return language === 'en' ? `/en${path === '/' ? '' : path}` : path
}

export function getLocalizedPathForLanguage(path: string, language: SupportedLanguage) {
  return language === 'en' ? `/en${path === '/' ? '' : path}` : path
}

export function getSlugFromPath(pathname: string) {
  return pathname.replace(/^\/en/, '').replace(/^\//, '')
}

export function useAppTranslation() {
  const { pathname } = useLocation()
  const language = getLanguageFromPath(pathname)
  const t = useMemo(() => i18next.getFixedT(language, 'common'), [language])

  return { language, t }
}
