import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import TaskList from './TaskList'
import { defaultTasks, actions, withPinnedTasks } from './data'
import { store } from '../../lib/store'
import { Provider } from 'react-redux'

export default {
  title: 'components/TaskList',
  component: TaskList
} as ComponentMeta<typeof TaskList>

export const Default: ComponentStory<typeof TaskList> = (args) => (
  <Provider store={store}>
    <TaskList tasks={defaultTasks} {...actions} />
  </Provider>
)

export const WithPinnedTasks: ComponentStory<typeof TaskList> = (args) => (
  <Provider store={store}>
    <TaskList tasks={withPinnedTasks} {...actions} />
  </Provider>
)

export const Loading: ComponentStory<typeof TaskList> = (args) => (
  <Provider store={store}>
    <TaskList loading tasks={[]} {...actions} />
  </Provider>
)

export const Empty: ComponentStory<typeof TaskList> = (args) => (
  <Provider store={store}>
    <TaskList tasks={[]} {...actions} />
  </Provider>
)
