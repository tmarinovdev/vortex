import HomeCapabilities from '@/pages/home/components/HomeCapabilities'
import HomeHero from '@/pages/home/components/HomeHero'
import HomePartnerReasons from '@/pages/home/components/HomePartnerReasons'
import HomePositioning from '@/pages/home/components/HomePositioning'
import HomeProjectContact from '@/pages/home/components/HomeProjectContact'
import HomeSafetyStandards from '@/pages/home/components/HomeSafetyStandards'

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomePositioning />
      <HomeCapabilities />
      <HomeSafetyStandards />
      <HomePartnerReasons />
      <HomeProjectContact />
    </main>
  )
}
