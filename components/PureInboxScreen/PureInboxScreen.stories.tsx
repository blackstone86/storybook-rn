import React from 'react'
import PureInboxScreen from './PureInboxScreen'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'components/PureInboxScreen',
  component: PureInboxScreen
} as ComponentMeta<typeof PureInboxScreen>

export const Default: ComponentStory<typeof PureInboxScreen> = (args) => (
  <PureInboxScreen />
)

export const Error: ComponentStory<typeof PureInboxScreen> = (args) => (
  <PureInboxScreen error="Something" />
)
