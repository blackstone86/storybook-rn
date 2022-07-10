import React from 'react'
import { View } from 'react-native'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import TaskList from './TaskList'
import { store } from '../../lib/store'
import { Provider } from 'react-redux'

export default {
  title: 'components/TaskList',
  component: TaskList,
  decorators: [
    (Story) => (
      <View style={{ margin: '3em' }}>
        <Provider store={store}>
          <Story />
        </Provider>
      </View>
    )
  ]
} as ComponentMeta<typeof TaskList>

export const Default: ComponentStory<typeof TaskList> = (args) => <TaskList />
