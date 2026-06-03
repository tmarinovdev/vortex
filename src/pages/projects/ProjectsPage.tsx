import { useState } from 'react'

import PageMeta from '@/components/seo/PageMeta'
import { useAppTranslation } from '@/i18n/useAppTranslation'
import ProjectCard from '@/pages/projects/components/ProjectCard'
import ProjectGalleryDialog from '@/pages/projects/components/ProjectGalleryDialog'
import { type Project, projects } from '@/pages/projects/data/projects'

export default function ProjectsPage() {
  const { t } = useAppTranslation()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <main className="min-h-[60svh] py-12 md:py-16">
      <PageMeta
        title={t('pages.projects.meta.title')}
        description={t('pages.projects.meta.description')}
      />
      <section className="site-container">
        <nav
          className="text-muted-foreground text-sm"
          aria-label={t('pages.projects.breadcrumbLabel')}
        >
          {t('nav.home')} <span aria-hidden="true">/</span> {t('pages.projects.title')}
        </nav>

        <div className="mt-5">
          <h1 className="text-foreground text-4xl font-semibold md:text-5xl">
            {t('pages.projects.title')}
          </h1>

          <p className="text-muted-foreground mt-4 text-base leading-7">
            {t('pages.projects.description')}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpenGallery={setSelectedProject} />
          ))}
        </div>
      </section>

      {selectedProject ? (
        <ProjectGalleryDialog
          key={selectedProject.id}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      ) : null}
    </main>
  )
}
