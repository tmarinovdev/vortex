import { useState } from 'react'

import PageMeta from '@/components/seo/PageMeta'
import { useAppTranslation } from '@/i18n/useAppTranslation'
import GalleryDialog from '@/pages/gallery/components/GalleryDialog'
import { galleryImages } from '@/pages/gallery/data/gallery'

export default function GalleryPage() {
  const { t } = useAppTranslation()
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null)

  return (
    <main className="min-h-[60svh] py-12 md:py-16">
      <PageMeta
        title={t('pages.gallery.meta.title')}
        description={t('pages.gallery.meta.description')}
      />

      <section className="site-container">
        <nav
          className="text-muted-foreground text-sm"
          aria-label={t('pages.gallery.breadcrumbLabel')}
        >
          {t('nav.home')} <span aria-hidden="true">/</span> {t('pages.gallery.title')}
        </nav>

        <div className="mt-5">
          <h1 className="text-foreground text-4xl font-semibold md:text-5xl">
            {t('pages.gallery.title')}
          </h1>

          <p className="text-muted-foreground mt-4 text-base leading-7">
            {t('pages.gallery.description')}
          </p>
        </div>

        {galleryImages.length > 0 ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <button
                key={image.id}
                type="button"
                className="border-border/70 bg-card/70 overflow-hidden rounded-lg border p-2 text-left shadow-[0_16px_40px_var(--shadow-navy)] transition-colors hover:border-[var(--border-medium)]"
                onClick={() => setSelectedImageId(image.id)}
              >
                <img
                  src={image.thumb}
                  alt={t(image.altKey)}
                  className="aspect-4/3 w-full rounded-md object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        ) : (
          <div className="border-border/70 bg-card/70 mt-10 rounded-lg border px-6 py-10 text-center">
            <p className="text-muted-foreground text-base">{t('pages.gallery.empty')}</p>
          </div>
        )}
      </section>

      {selectedImageId ? (
        <GalleryDialog
          images={galleryImages}
          initialImageId={selectedImageId}
          onClose={() => setSelectedImageId(null)}
        />
      ) : null}
    </main>
  )
}
