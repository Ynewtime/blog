import { defineConfig } from 'vitepress'
import { mdConfig } from './utils.js'

export default defineConfig({
  title: '便笺',
  description: '每日随记 / 文摘 / 博客',
  head: [
    ['meta', { name: 'twitter:site', content: '@Ynewtime' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://blog.cros3hadow.org/icon.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  ],
  vite: {
    build: {
      // minify: 'terser'
    }
  },
  markdown: mdConfig
})
