import HomeCapabilities from '@/pages/home/components/HomeCapabilities'
import HomeHero from '@/pages/home/components/HomeHero'
import HomePartnerReasons from '@/pages/home/components/HomePartnerReasons'
import HomePositioning from '@/pages/home/components/HomePositioning'
import HomeProjectContact from '@/pages/home/components/HomeProjectContact'
import HomeSafetyStandards from '@/pages/home/components/HomeSafetyStandards'
import { useAppTranslation } from '@/i18n/useAppTranslation'

export default function HomePage() {
  const { t } = useAppTranslation()

  return (
    <main>
      <title>{t('pages.home.meta.title')}</title>
      <meta name="description" content={t('pages.home.meta.description')} />
      <HomeHero />
      <HomePositioning />
      <HomeCapabilities />
      <HomeSafetyStandards />
      <HomePartnerReasons />
      <HomeProjectContact />
    </main>
  )
}
