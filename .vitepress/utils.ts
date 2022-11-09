import type MarkdownIt from 'markdown-it'
import taskLists from 'markdown-it-task-lists'

export const mdConfig = {
  config: (md: MarkdownIt) => {
    // use more markdown-it plugins!
    md.use(taskLists)
  }
}
