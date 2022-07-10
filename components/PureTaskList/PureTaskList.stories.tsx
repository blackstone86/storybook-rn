import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import PureTaskList from './PureTaskList'
import { defaultTasks, withPinnedTasks } from './data'
import { actions } from '../Task/data'

export default {
  title: 'components/PureTaskList',
  component: PureTaskList
} as ComponentMeta<typeof PureTaskList>

export const Default: ComponentStory<typeof PureTaskList> = (args) => (
  <PureTaskList tasks={defaultTasks} {...actions} />
)

export const WithPinnedTasks: ComponentStory<typeof PureTaskList> = (args) => (
  <PureTaskList tasks={withPinnedTasks} {...actions} />
)

export const Loading: ComponentStory<typeof PureTaskList> = (args) => (
  <PureTaskList loading tasks={[]} {...actions} />
)

export const Empty: ComponentStory<typeof PureTaskList> = (args) => (
  <PureTaskList tasks={[]} {...actions} />
)
