import { Action } from 'redux';

export interface Task {
  readonly id: string,
  readonly text: string,
  readonly completed: boolean,
}

export interface DispatchAction extends Action {
  payload: Task,
}
