import type { ReactNode } from 'react'
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from 'react-router'

import '@/i18n/config'
import { getLanguageFromPath } from '@/i18n/useAppTranslation'
import './index.css'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation()
  const language = getLanguageFromPath(pathname)

  return (
    <html lang={language}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#071826" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#050a12" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-96x96.png" type="image/png" sizes="96x96" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function Root() {
  return <Outlet />
}
