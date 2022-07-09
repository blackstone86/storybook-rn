import * as React from 'react'
import Task, { TaskType } from '../Task/Task'
import { FlatList, Text, SafeAreaView } from 'react-native'
import { styles } from '../../constants/globalStyles'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../lib/store'

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
  tasks = useSelector((state: RootState) => state.task.tasks)

  const dispatch = useDispatch()

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
