import { describe, expect, it } from 'vitest'

import {
  getLanguageFromPath,
  getLocalizedPath,
  getLocalizedPathForLanguage,
  getSlugFromPath,
} from '@/i18n/useAppTranslation'

describe('i18n route helpers', () => {
  it('detects Bulgarian and English routes', () => {
    expect(getLanguageFromPath('/')).toBe('bg')
    expect(getLanguageFromPath('/projects')).toBe('bg')
    expect(getLanguageFromPath('/en')).toBe('en')
    expect(getLanguageFromPath('/en/projects')).toBe('en')
  })

  it('builds localized paths from the current pathname', () => {
    expect(getLocalizedPath('/contact', '/')).toBe('/contact')
    expect(getLocalizedPath('/contact', '/en')).toBe('/en/contact')
    expect(getLocalizedPath('/projects', '/en/contact')).toBe('/en/projects')
  })

  it('builds localized paths for a specific language', () => {
    expect(getLocalizedPathForLanguage('/', 'bg')).toBe('/')
    expect(getLocalizedPathForLanguage('/', 'en')).toBe('/en')
    expect(getLocalizedPathForLanguage('/projects', 'en')).toBe('/en/projects')
  })

  it('removes the language prefix when reading the current slug', () => {
    expect(getSlugFromPath('/')).toBe('')
    expect(getSlugFromPath('/contact')).toBe('contact')
    expect(getSlugFromPath('/en/contact')).toBe('contact')
  })
})
