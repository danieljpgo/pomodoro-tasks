import { types } from './reducer';

export interface Task {
  readonly id: string,
  readonly text: string,
  readonly completed: boolean,
  readonly priority: 'hight' | 'medium' | 'low',
  readonly value: number,
  readonly limit: number,
}

interface AddTaskAction {
  type: typeof types.ADD_TASK,
}

interface TimerTaskAction {
  type: typeof types.TIMER_TASK,
  payload: {
    id: string,
    value: number,
  }
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

export type TasksActionTypes = (
  AddTaskAction | RemoveTaskAction | ToggleTaskAction | TimerTaskAction
)

export type List = 'all' | 'completed';

export interface Types{
  id: List,
  title: string,
}
