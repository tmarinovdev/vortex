import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import bgCommon from '@/i18n/locales/bg/common.json'
import enCommon from '@/i18n/locales/en/common.json'

export const defaultLanguage = 'bg'
export const supportedLanguages = ['bg', 'en'] as const

export type SupportedLanguage = (typeof supportedLanguages)[number]

i18next.use(initReactI18next).init({
  defaultNS: 'common',
  fallbackLng: defaultLanguage,
  lng: defaultLanguage,
  resources: {
    bg: {
      common: bgCommon,
    },
    en: {
      common: enCommon,
    },
  },
  interpolation: {
    escapeValue: false,
  },
})

export { i18next }
