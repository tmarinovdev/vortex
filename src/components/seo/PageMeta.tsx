import { useLocation } from 'react-router'

import { getLanguageFromPath } from '@/i18n/useAppTranslation'

type PageMetaProps = {
  title: string
  description: string
  imageAlt?: string
  imagePath?: string
}

const siteUrl = 'https://www.vortexes-ltd.com'
const defaultImagePath = '/images/hero-desktop.webp'

const getAbsoluteUrl = (path: string) => new URL(path, siteUrl).toString()

export default function PageMeta({
  title,
  description,
  imageAlt = title,
  imagePath = defaultImagePath,
}: PageMetaProps) {
  const { pathname } = useLocation()
  const language = getLanguageFromPath(pathname)
  const canonicalUrl = getAbsoluteUrl(pathname)
  const imageUrl = getAbsoluteUrl(imagePath)

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Vortexes Ltd." />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content={language === 'bg' ? 'bg_BG' : 'en_US'} />
      <meta property="og:locale:alternate" content={language === 'bg' ? 'en_US' : 'bg_BG'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />
    </>
  )
}
