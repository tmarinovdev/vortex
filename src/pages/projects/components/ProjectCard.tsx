import { ArrowRight } from 'lucide-react'

import { useAppTranslation } from '@/i18n/useAppTranslation'
import { type Project, projectTypeFallbackIcons } from '@/pages/projects/data/projects'

type ProjectCardProps = {
  project: Project
  onOpenGallery: (project: Project) => void
}

export default function ProjectCard({ project, onOpenGallery }: ProjectCardProps) {
  const { t } = useAppTranslation()
  const hasImages = project.images.length > 0
  const hasGallery = project.images.length > 1
  const coverImage = project.images[0]?.thumb ?? projectTypeFallbackIcons[project.type]

  return (
    <article className="border-border/70 bg-card/70 flex min-h-full flex-col overflow-hidden rounded-lg border shadow-[0_16px_40px_var(--shadow-navy)] transition-colors hover:border-[var(--border-medium)] hover:bg-[var(--panel-hover)]">
      <div className="border-border/70 aspect-4/3 border-b bg-[var(--panel-soft)] p-2">
        {hasImages ? (
          <div className="h-full overflow-hidden rounded-md">
            <img
              src={coverImage}
              alt={t(project.images[0]?.altKey ?? project.titleKey)}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="flex h-full items-center justify-center rounded-md p-8">
            <img
              src={coverImage}
              alt={t(project.titleKey)}
              className="h-full max-h-36 w-full object-contain opacity-70"
              aria-hidden="true"
              loading="lazy"
            />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col px-5 py-5">
        <h2 className="text-foreground text-2xl leading-tight font-medium">
          {t(project.titleKey)}
        </h2>

        <p className="text-muted-foreground mt-3 line-clamp-5 text-sm leading-6">
          {t(project.descriptionKey)}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 pt-6 text-sm">
          {hasGallery ? (
            <button
              type="button"
              className="text-primary hover:text-accent inline-flex cursor-pointer items-center gap-1 font-medium transition-colors"
              onClick={() => onOpenGallery(project)}
            >
              {t('pages.projects.actions.viewMore')}
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          ) : null}
        </div>
      </div>
    </article>
  )
}
