import * as React from 'react'
import Task, { TaskType } from '../Task/Task'
import { FlatList, Text, SafeAreaView } from 'react-native'
import { styles } from '../../constants/globalStyles'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../lib/store'
import { archiveTask, pinTask } from '../../lib/redux'

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
  const tasksData = useSelector((state: RootState) => state.task.tasks)
  const dispatch = useDispatch()

  const events = {
    onPinTask: (id: string) => dispatch(pinTask({ id })),
    onArchiveTask: (id: string) => dispatch(archiveTask({ id }))
  }

  if (loading) {
    return (
      <SafeAreaView style={styles.ListItems}>
        <Text>loading</Text>
      </SafeAreaView>
    )
  }

  if (tasksData.length === 0) {
    return (
      <SafeAreaView style={styles.ListItems}>
        <Text>empty</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.ListItems}>
      <FlatList
        data={tasksData}
        keyExtractor={(task) => task.id}
        renderItem={({ item }) => (
          <Task key={item.id} task={item} {...events} />
        )}
      />
    </SafeAreaView>
  )
}

export default TaskList
