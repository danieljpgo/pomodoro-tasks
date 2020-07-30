import { types } from './reducer';

export interface Timer {
  readonly value: number,
  readonly limit: number,
  readonly run: boolean,
  readonly taskId: string,
}

interface StartAction {
  type: typeof types.START_TIMER,
  payload: {
    taskId: string,
    value: number,
    limit: number,
  }
}

interface PauseAction {
  type: typeof types.PAUSE_TIMER,
  payload: {
    value: number,
    taskId: string,
  }
}

interface StopAction {
  type: typeof types.STOP_TIMER,
  payload: {
    taskId: string,
  }
}

export type TimerActionsTypes = (StartAction | PauseAction | StopAction)
