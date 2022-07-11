import React from 'react'
import { Text, SafeAreaView, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import TaskList from '../TaskList'
import { PureInboxScreenPropType } from './types'
import { styles } from '../../constants/globalStyles'

function PureInboxScreen({ error = null }: PureInboxScreenPropType) {
  if (error) {
    return (
      <SafeAreaView style={styles.PageListsShow}>
        <View style={styles.WrapperMessage}>
          <MaterialCommunityIcons
            name="emoticon-sad"
            size={64}
            color="#2cc5d2"
          />
          <Text style={styles.TitleMessage}>Oh no!</Text>
          <Text style={styles.SubtitleMessage}>Something went wrong</Text>
        </View>
      </SafeAreaView>
    )
  }
  return (
    <SafeAreaView style={styles.PageListsShow}>
      <View style={styles.PageListsShowhead}>
        <Text numberOfLines={1} style={[styles.titlepage, styles.TitleWrapper]}>
          Taskbox
        </Text>
      </View>
      <TaskList />
    </SafeAreaView>
  )
}

export default PureInboxScreen
