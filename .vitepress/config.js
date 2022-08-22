import taskLists from 'markdown-it-task-lists'
import { defineConfig } from 'vitepress'

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
        content: 'https://www.ynewtime.com/background.jpg'
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
  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(taskLists, { label: true })
    }
  }
})
