import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Task from './Task'
import { TASK_STATE } from './consts'
import { task, actions } from './data'

export default {
  title: 'components/Task',
  component: Task
} as ComponentMeta<typeof Task>

export const Default: ComponentStory<typeof Task> = (args) => <Task {...args} />

export const Pinned: ComponentStory<typeof Task> = (args) => <Task {...args} />

export const Archived: ComponentStory<typeof Task> = (args) => (
  <Task {...args} />
)

Default.args = {
  task,
  ...actions
}

Pinned.args = {
  ...Default.args,
  task: {
    ...task,
    state: TASK_STATE.TASK_PINNED
  }
}

Pinned.args = {
  ...Default.args,
  task: {
    ...task,
    state: TASK_STATE.TASK_PINNED
  }
}

Archived.args = {
  ...Default.args,
  task: {
    ...task,
    state: TASK_STATE.TASK_ARCHIVED
  }
}
