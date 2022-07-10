export type TaskStateType = 'TASK_INBOX' | 'TASK_ARCHIVED' | 'TASK_PINNED'

export type TaskType = {
  id: string
  title: string
  state: TaskStateType
}

export type TaskPropType = {
  task: TaskType
  onArchiveTask?: (id: string) => void
  onPinTask?: (id: string) => void
}
