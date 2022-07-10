import React from 'react'
import { FlatList, Text, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Task from '../Task/Task'
import type { RootState } from '../../lib/store'
import { archiveTask, pinTask } from '../../lib/taskSlice'
import { TaskListPropType } from './types'
import { styles } from '../../constants/globalStyles'

function TaskList({ loading }: TaskListPropType) {
  const tasks = useSelector((state: RootState) => state.task.tasks)
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
