import { TaskType } from './types'
import { TASK_STATE } from './consts'

export const task: TaskType = {
  id: '1',
  title: 'Test Task',
  state: TASK_STATE.TASK_INBOX
}

export const actions = {
  onPinTask: (id: string) => {},
  onArchiveTask: (id: string) => {}
}
