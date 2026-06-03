import type { Config } from '@react-router/dev/config'

export default {
  appDirectory: 'src',
  ssr: false,
  prerender: ['/', '/projects', '/contact', '/en', '/en/projects', '/en/contact'],
} satisfies Config
