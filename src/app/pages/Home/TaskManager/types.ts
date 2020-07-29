import { types } from './reducer';

export interface Task {
  readonly id: string,
  readonly text: string,
  readonly completed: boolean,
  readonly priority: 'hight' | 'medium' | 'low',
}

interface AddTaskAction {
  type: typeof types.ADD_TASK,
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
