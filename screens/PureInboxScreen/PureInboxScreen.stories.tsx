import React from 'react'
import { View } from 'react-native'
import PureInboxScreen from './PureInboxScreen'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Provider } from 'react-redux'
import { store } from '../../lib/store'

export default {
  title: 'screens/PureInboxScreen',
  component: PureInboxScreen,
  decorators: [
    (Story) => (
      <View style={{ margin: '3em' }}>
        <Provider store={store}>
          <Story />
        </Provider>
      </View>
    )
  ]
} as ComponentMeta<typeof PureInboxScreen>

export const Default: ComponentStory<typeof PureInboxScreen> = (args) => (
  <PureInboxScreen />
)

export const Error: ComponentStory<typeof PureInboxScreen> = (args) => (
  <PureInboxScreen error="Something" />
)
