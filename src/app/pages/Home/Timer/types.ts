import { types } from './reducer';

export interface Timer {
  readonly value: number,
  readonly limit: number,
  readonly run: boolean,
}

interface StartAction {
  type: typeof types.START_TIMER,
}

interface PauseAction {
  type: typeof types.PAUSE_TIMER,
  payload: {
    value: number,
  }
}

interface StopAction {
  type: typeof types.STOP_TIMER,
}

export type TimerActionsTypes = StartAction | PauseAction | StopAction
