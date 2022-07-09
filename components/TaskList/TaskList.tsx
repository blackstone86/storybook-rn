import * as React from 'react'
import Task, { TaskType } from '../Task/Task'
import { FlatList, Text, SafeAreaView } from 'react-native'
import { styles } from '../../constants/globalStyles'

type TaskListPropType = {
  loading?: boolean
  tasks: TaskType[]
  onPinTask?: (id: string) => void
  onArchiveTask?: (id: string) => void
}

function TaskList({
  loading,
  tasks,
  onPinTask,
  onArchiveTask
}: TaskListPropType) {
  const events = {
    onPinTask,
    onArchiveTask
  }
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
          <Task key={item.id} task={item} {...events} />
        )}
      />
    </SafeAreaView>
  )
}

export default TaskList
