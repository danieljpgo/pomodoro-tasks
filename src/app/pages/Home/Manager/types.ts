import { types } from './reducer';

export type List = 'all' | 'completed';

export interface Types{
  id: List,
  title: string,
}

export interface Task {
  readonly id: string,
  readonly text: string,
  readonly completed: boolean,
  readonly priority: 'hight' | 'medium' | 'low',
  readonly timer: number,
}

interface AddTaskAction {
  type: typeof types.ADD_TASK,
}

interface UpdateTimerTaskAction {
  type: typeof types.TIMER_TASK,
  payload: {
    timer: number,
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
  AddTaskAction | RemoveTaskAction | ToggleTaskAction | UpdateTimerTaskAction
)
