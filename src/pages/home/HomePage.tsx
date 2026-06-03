import PageMeta from '@/components/seo/PageMeta'
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
      <PageMeta title={t('pages.home.meta.title')} description={t('pages.home.meta.description')} />
      <link
        rel="preload"
        as="image"
        href="/images/hero-mobile.webp"
        media="(max-width: 639px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href="/images/hero-tablet.webp"
        media="(min-width: 640px) and (max-width: 1024px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href="/images/hero-desktop.webp"
        media="(min-width: 1025px)"
        fetchPriority="high"
      />
      <HomeHero />
      <HomePositioning />
      <HomeCapabilities />
      <HomeSafetyStandards />
      <HomePartnerReasons />
      <HomeProjectContact />
    </main>
  )
}
