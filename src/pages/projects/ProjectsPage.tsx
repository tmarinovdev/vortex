import { useTranslation } from 'react-i18next'

export default function ProjectsPage() {
  const { t } = useTranslation()

  return (
    <main className="mx-auto min-h-[60svh] max-w-7xl px-6 py-16">
      <h1 className="text-foreground text-4xl font-semibold">{t('pages.projects.title')}</h1>
    </main>
  )
}
