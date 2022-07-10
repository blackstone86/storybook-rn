import { task } from '../Task/data'
import { TaskType } from '../Task/types'
import { TASK_STATE } from '../Task/consts'

export const defaultTasks: TaskType[] = [
  { ...task, id: '1', title: 'Task 1' },
  { ...task, id: '2', title: 'Task 2' },
  { ...task, id: '3', title: 'Task 3' },
  { ...task, id: '4', title: 'Task 4' },
  { ...task, id: '5', title: 'Task 5' },
  { ...task, id: '6', title: 'Task 6' }
]

export const withPinnedTasks: TaskType[] = [
  ...defaultTasks.slice(0, 5),
  { id: '6', title: 'Task 6 (pinned)', state: TASK_STATE.TASK_PINNED }
]