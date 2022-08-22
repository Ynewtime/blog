import taskLists from 'markdown-it-task-lists'

export const mdConfig = {
  config: (md) => {
    // use more markdown-it plugins!
    md.use(taskLists)
  }
}
