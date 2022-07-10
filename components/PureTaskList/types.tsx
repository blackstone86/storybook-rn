import { TaskType } from '../Task/types'

export type PureTaskListPropType = {
  loading?: boolean
  tasks: TaskType[]
  onPinTask?: (id: string) => void
  onArchiveTask?: (id: string) => void
}
