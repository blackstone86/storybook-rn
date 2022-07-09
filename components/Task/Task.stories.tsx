import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import MyTask from './Task'
import { task } from './data'

export default {
  title: 'components/MyTask',
  component: MyTask
} as ComponentMeta<typeof MyTask>

export const Default: ComponentStory<typeof MyTask> = (args) => (
  <MyTask {...args} />
)

export const Pinned: ComponentStory<typeof MyTask> = (args) => (
  <MyTask {...args} />
)

export const Archived: ComponentStory<typeof MyTask> = (args) => (
  <MyTask {...args} />
)

Default.args = {
  task
}

Pinned.args = {
  task: {
    ...task,
    state: 'TASK_PINNED'
  }
}

Pinned.args = {
  task: {
    ...task,
    state: 'TASK_PINNED'
  }
}

Archived.args = {
  task: {
    ...task,
    state: 'TASK_ARCHIVED'
  }
}
