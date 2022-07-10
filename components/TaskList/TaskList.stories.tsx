import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import TaskList from './TaskList'
import { store } from '../../lib/store'
import { Provider } from 'react-redux'

export default {
  title: 'components/TaskList',
  component: TaskList
} as ComponentMeta<typeof TaskList>

export const Default: ComponentStory<typeof TaskList> = (args) => (
  <Provider store={store}>
    <TaskList />
  </Provider>
)
