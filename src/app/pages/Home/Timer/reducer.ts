import { Timer, TimerActions } from './types';

export enum types {
  START_TIMER = 'START_TIMER',
  PAUSE_TIMER = 'PAUSE_TIMER',
  STOP_TIMER = 'STOP_TIMER',
}

const initialState: Timer = {
  taskId: '',
  value: 0,
  limit: 1500,
  run: false,
};

const reducer = (state = initialState, actions: TimerActions): Timer => {
  switch (actions.type) {
    case types.START_TIMER:
      return {
        ...state,
        taskId: actions.payload.taskId,
        value: actions.payload.value,
        limit: actions.payload.limit,
        run: true,
      };
    case types.PAUSE_TIMER:
      return {
        ...state,
        taskId: actions.payload.taskId,
        value: actions.payload.value,
        run: false,
      };
    case types.STOP_TIMER:
      return {
        ...state,
        taskId: actions.payload.taskId,
        value: 0,
        run: false,
      };

    default:
      return state;
  }
};

export const timerActions = {
  startTimer: (taskId: string, value: number, limit: number): TimerActions => ({
    type: types.START_TIMER,
    payload: {
      taskId,
      value,
      limit,
    },
  }),
  pauseTimer: (taskId: string, value: number): TimerActions => ({
    type: types.PAUSE_TIMER,
    payload: {
      taskId,
      value,
    },
  }),
  stopTimer: (taskId: string): TimerActions => ({
    type: types.STOP_TIMER,
    payload: {
      taskId,
    },
  }),
};

export default reducer;
