import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

const siteUrl = 'https://www.vortexes-ltd.com'
const buildClientDir = path.resolve('build/client')

const routes = [
  '/',
  '/projects',
  '/gallery',
  '/contact',
  '/en',
  '/en/projects',
  '/en/gallery',
  '/en/contact',
]

const escapeXml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')

const getAbsoluteUrl = (route) => new URL(route, siteUrl).toString()

const urls = routes
  .map(
    (route) => `  <url>
    <loc>${escapeXml(getAbsoluteUrl(route))}</loc>
  </url>`,
  )
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

await mkdir(buildClientDir, { recursive: true })
await writeFile(path.join(buildClientDir, 'sitemap.xml'), sitemap)

console.log(`Generated sitemap.xml with ${routes.length} URLs`)
