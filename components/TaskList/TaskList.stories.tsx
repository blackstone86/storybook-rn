import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import MyTaskList from './TaskList'
import { defaultTasks, actions, withPinnedTasks } from './data'

export default {
  title: 'components/MyTaskList',
  component: MyTaskList
} as ComponentMeta<typeof MyTaskList>

export const Default: ComponentStory<typeof MyTaskList> = (args) => (
  <MyTaskList tasks={defaultTasks} {...actions} />
)

export const WithPinnedTasks: ComponentStory<typeof MyTaskList> = (args) => (
  <MyTaskList tasks={withPinnedTasks} {...actions} />
)

export const Loading: ComponentStory<typeof MyTaskList> = (args) => (
  <MyTaskList loading tasks={[]} {...actions} />
)

export const Empty: ComponentStory<typeof MyTaskList> = (args) => (
  <MyTaskList tasks={[]} {...actions} />
)
