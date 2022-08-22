import { Feed } from 'feed'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import postsData from './posts.data.js'

const url = `https://blog.ynewtime.org`
const dirname = path.dirname(fileURLToPath(import.meta.url))

const feed = new Feed({
  title: '便笺',
  description: '每日随记 / 文摘 / 博客',
  id: url,
  link: url,
  language: 'en',
  image: `${url}/logo.png`,
  favicon: `${url}/favicon.ico`,
  copyright: 'Copyright (c) 2022-present, Yuhao(Stephen) Tseng'
})

postsData.load(true).then((posts) => {
  posts.forEach((post) => {
    const file = path.resolve(dirname, `dist${post.href}`)
    const rendered = fs.readFileSync(file, 'utf-8')
    const content = rendered.match(
      /<div [^<>]+?class="prose[^<>]+?>([\s\S]*)<\/div><\/div><footer/
    )

    feed.addItem({
      title: post.title,
      id: `${url}${post.href}`,
      link: `${url}${post.href}`,
      description: post.excerpt,
      content: content[1],
      author: [
        {
          name: post.data.author,
          link: post.data.twitter
            ? `https://twitter.com/${post.data.twitter}`
            : undefined
        }
      ],
      date: post.data.date
    })
  })

  fs.writeFileSync(path.resolve(dirname, 'dist/feed.rss'), feed.rss2())
})
