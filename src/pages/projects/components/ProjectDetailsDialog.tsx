import { X } from 'lucide-react'
import { useEffect } from 'react'

import { useAppTranslation } from '@/i18n/useAppTranslation'
import type { Project } from '@/pages/projects/data/projects'

type ProjectDetailsDialogProps = {
  project: Project
  onClose: () => void
}

export default function ProjectDetailsDialog({ project, onClose }: ProjectDetailsDialogProps) {
  const { t } = useAppTranslation()
  const details = project.detailsKey
    ? (t(project.detailsKey, { returnObjects: true }) as string[])
    : []

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-details-title"
      onClick={onClose}
    >
      <div
        className="border-border/70 bg-background relative max-h-[86svh] w-full max-w-4xl overflow-y-auto rounded-lg border p-6 shadow-[0_20px_70px_rgba(0,0,0,0.55)] md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="project-details-title" className="text-foreground text-2xl font-medium">
              {t(project.titleKey)}
            </h2>

            <p className="text-muted-foreground mt-3 text-base leading-7">
              {t(project.descriptionKey)}
            </p>
          </div>

          <button
            type="button"
            className="border-border/70 text-muted-foreground hover:border-primary hover:text-primary inline-flex size-11 shrink-0 items-center justify-center rounded-md border transition-colors"
            aria-label={t('pages.projects.details.close')}
            onClick={onClose}
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        {details.length > 0 ? (
          <ul className="border-border/70 mt-7 grid gap-4 border-t pt-6">
            {details.map((detail) => (
              <li
                key={detail}
                className="text-muted-foreground flex items-start gap-3 text-sm leading-6"
              >
                <span
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--icon-primary)]"
                  aria-hidden="true"
                />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}
