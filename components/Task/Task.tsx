import * as React from 'react'
import { TextInput, SafeAreaView, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from '../../constants/globalStyles'
import { TaskPropType } from './types'
import { TASK_STATE } from './consts'

export default function Task({
  task: { id, title, state },
  onArchiveTask = (id: string) => {},
  onPinTask = (id: string) => {}
}: TaskPropType) {
  return (
    <SafeAreaView style={styles.ListItem}>
      <SafeAreaView style={styles.ListItem}>
        <TouchableOpacity onPress={() => onArchiveTask(id)}>
          {state !== TASK_STATE.TASK_ARCHIVED ? (
            <View style={styles.CheckBox} />
          ) : (
            <MaterialCommunityIcons name="check" size={24} color="black" />
          )}
        </TouchableOpacity>
        <TextInput
          placeholder="Input Title"
          style={
            state === TASK_STATE.TASK_ARCHIVED
              ? styles.ListItemInputTaskArchived
              : styles.ListItemInputTask
          }
          value={title}
          editable={false}
        />
        <TouchableOpacity onPress={() => onPinTask(id)}>
          <MaterialCommunityIcons
            name="star"
            size={20}
            color={state !== TASK_STATE.TASK_PINNED ? '#eee' : '#26c6da'}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  )
}
