import type { Config } from '@react-router/dev/config'

export default {
  appDirectory: 'src',
  ssr: false,
  prerender: [
    '/',
    '/projects',
    '/gallery',
    '/contact',
    '/en',
    '/en/projects',
    '/en/gallery',
    '/en/contact',
  ],
} satisfies Config
