import { Mail, MapPin, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'

import { Button } from '@/components/ui/button'

const contactItems = [
  {
    Icon: Phone,
    href: 'tel:+359885604236',
    label: '+359 885 60 42 36',
  },
  {
    Icon: Mail,
    href: 'mailto:office@vortexes-ltd.com',
    label: 'office@vortexes-ltd.com',
  },
  {
    Icon: MapPin,
    href: 'https://www.google.com/maps?q=43%C2%B011%2734.6%22N+27%C2%B053%2719.8%22E',
    label: 'Varna, Bulgaria',
  },
]

export default function HomeProjectContact() {
  const { t } = useTranslation()

  return (
    <section className="bg-background py-12">
      <div className="site-container">
        <div className="border-border/70 bg-card/70 rounded-lg border px-6 py-10 text-center shadow-[0_16px_40px_var(--shadow-navy)] md:px-10">
          <h2 className="text-foreground text-3xl font-medium md:text-4xl">
            {t('pages.home.projectContact.title')}
          </h2>

          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base leading-7 md:text-base">
            {t('pages.home.projectContact.description')}
          </p>

          <ul className="text-muted-foreground mt-7 flex flex-col items-center justify-center gap-4 text-base lg:flex-row lg:gap-8">
            {contactItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-primary inline-flex items-center gap-2 transition-colors"
                  target={item.Icon === MapPin ? '_blank' : undefined}
                  rel={item.Icon === MapPin ? 'noreferrer' : undefined}
                >
                  <item.Icon className="size-4 text-[var(--icon-primary)]" aria-hidden="true" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button asChild>
              <Link to="/contact">{t('pages.home.projectContact.action')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
