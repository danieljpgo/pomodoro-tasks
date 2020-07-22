import { types } from './reducer';

export interface Task {
  readonly id: string,
  readonly text: string,
  readonly completed: boolean,
}

interface AddTaskAction {
  type: typeof types.ADD_TASK,
  payload: {
    text: string
  },
}

interface RemoveTaskAction {
  type: typeof types.REMOVE_TASK,
  payload: {
    id: string,
  }
}

interface ToggleTaskAction {
  type: typeof types.TOGGLE_TASK,
  payload: {
    id: string,
  }
}

export type TasksActionTypes = AddTaskAction | RemoveTaskAction | ToggleTaskAction
