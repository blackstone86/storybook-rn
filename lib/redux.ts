import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const TASK_STATE: {
  TASK_INBOX: TaskStateType
  TASK_ARCHIVED: TaskStateType
  TASK_PINNED: TaskStateType
} = {
  TASK_INBOX: 'TASK_INBOX',
  TASK_ARCHIVED: 'TASK_ARCHIVED',
  TASK_PINNED: 'TASK_PINNED'
}

type TaskStateType = 'TASK_INBOX' | 'TASK_ARCHIVED' | 'TASK_PINNED'

type TaskType = {
  id: string
  title: string
  state: TaskStateType
}

type StateType = {
  tasks: TaskType[]
}

const initialState: StateType = {
  tasks: [
    { id: '1', title: 'Something', state: TASK_STATE.TASK_INBOX },
    { id: '2', title: 'Something more', state: TASK_STATE.TASK_INBOX },
    { id: '3', title: 'Something else', state: TASK_STATE.TASK_INBOX },
    { id: '4', title: 'Something again', state: TASK_STATE.TASK_INBOX }
  ]
}

type ActionType = {
  id: string
}

const taskStateReducer: (
  taskState: TaskStateType
) => (state: StateType, action: PayloadAction<ActionType>) => StateType = (
  taskState: TaskStateType
) => {
  return (state: StateType, action: PayloadAction<ActionType>) => {
    console.log(action)
    return {
      ...state,
      tasks: state.tasks.map((task: TaskType) =>
        task.id === action.payload.id ? { ...task, state: taskState } : task
      )
    }
  }
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    archiveTask: (state, action: PayloadAction<ActionType>) => {
      return taskStateReducer(TASK_STATE.TASK_INBOX)(state, action)
    },
    pinTask: (state, action: PayloadAction<ActionType>) => {
      return taskStateReducer(TASK_STATE.TASK_PINNED)(state, action)
    }
  }
})

export const { archiveTask, pinTask } = taskSlice.actions

export default taskSlice.reducer
