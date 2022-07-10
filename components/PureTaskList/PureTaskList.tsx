import * as React from 'react'
import Task from '../Task/Task'
import { FlatList, Text, SafeAreaView } from 'react-native'
import { styles } from '../../constants/globalStyles'
import { PureTaskListPropType } from './types'

function PureTaskList({
  loading,
  tasks,
  onPinTask,
  onArchiveTask
}: PureTaskListPropType) {
  if (loading) {
    return (
      <SafeAreaView style={styles.ListItems}>
        <Text>loading</Text>
      </SafeAreaView>
    )
  }

  if (tasks.length === 0) {
    return (
      <SafeAreaView style={styles.ListItems}>
        <Text>empty</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.ListItems}>
      <FlatList
        data={tasks}
        keyExtractor={(task) => task.id}
        renderItem={({ item }) => (
          <Task
            key={item.id}
            task={item}
            onPinTask={onPinTask}
            onArchiveTask={onArchiveTask}
          />
        )}
      />
    </SafeAreaView>
  )
}

export default PureTaskList
