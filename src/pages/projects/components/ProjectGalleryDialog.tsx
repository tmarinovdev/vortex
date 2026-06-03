import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

import { useAppTranslation } from '@/i18n/useAppTranslation'
import type { Project } from '@/pages/projects/data/projects'

type ProjectGalleryDialogProps = {
  project: Project
  onClose: () => void
}

export default function ProjectGalleryDialog({ project, onClose }: ProjectGalleryDialogProps) {
  const { t } = useAppTranslation()
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = project.images[activeIndex]
  const hasMultipleImages = project.images.length > 1

  const showPreviousImage = useCallback(() => {
    setActiveIndex((index) => (index === 0 ? project.images.length - 1 : index - 1))
  }, [project.images.length])

  const showNextImage = useCallback(() => {
    setActiveIndex((index) => (index === project.images.length - 1 ? 0 : index + 1))
  }, [project.images.length])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }

      if (event.key === 'ArrowLeft' && hasMultipleImages) {
        showPreviousImage()
      }

      if (event.key === 'ArrowRight' && hasMultipleImages) {
        showNextImage()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [hasMultipleImages, onClose, showNextImage, showPreviousImage])

  if (!activeImage) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-gallery-title"
      onClick={onClose}
    >
      <div className="relative w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <h2 id="project-gallery-title" className="text-xl font-medium text-white">
              {t(project.titleKey)}
            </h2>

            <p className="mt-1 text-sm text-white/70">
              {t('pages.projects.gallery.imageCount', {
                current: activeIndex + 1,
                total: project.images.length,
              })}
            </p>
          </div>

          <button
            type="button"
            className="hover:border-primary hover:text-primary inline-flex size-11 items-center justify-center rounded-md border border-white/20 text-white transition-colors"
            aria-label={t('pages.projects.gallery.close')}
            onClick={onClose}
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-white/15 bg-black">
          <picture>
            <source media="(max-width: 640px)" srcSet={activeImage.thumb} />
            <img
              src={activeImage.full}
              alt={t(activeImage.altKey ?? project.titleKey)}
              className="max-h-[78svh] w-full object-contain"
            />
          </picture>

          {hasMultipleImages ? (
            <>
              <button
                type="button"
                className="hover:bg-primary hover:text-primary-foreground absolute top-1/2 left-3 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white transition-colors"
                aria-label={t('pages.projects.gallery.previous')}
                onClick={showPreviousImage}
              >
                <ChevronLeft className="size-6" aria-hidden="true" />
              </button>

              <button
                type="button"
                className="hover:bg-primary hover:text-primary-foreground absolute top-1/2 right-3 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white transition-colors"
                aria-label={t('pages.projects.gallery.next')}
                onClick={showNextImage}
              >
                <ChevronRight className="size-6" aria-hidden="true" />
              </button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}
