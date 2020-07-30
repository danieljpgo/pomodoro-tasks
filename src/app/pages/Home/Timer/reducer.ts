import { Timer, TimerActionsTypes } from './types';

export enum types {
  START_TIMER = 'START_TIMER',
  PAUSE_TIMER = 'PAUSE_TIMER',
  STOP_TIMER = 'STOP_TIMER',
}

const initialState: Timer = {
  value: 0,
  limit: 1500,
  run: false,
};

const reducer = (state = initialState, actions: TimerActionsTypes): Timer => {
  switch (actions.type) {
    case types.START_TIMER:
      return {
        ...state,
        run: true,
      };
    case types.PAUSE_TIMER:
      console.log(actions);
      return {
        ...state,
        run: false,
        value: actions.payload.value,
      };
    case types.STOP_TIMER:
      return {
        ...state,
        value: 0,
        run: false,
      };

    default:
      return state;
  }
};

export const actions = {
  startTimer: (): TimerActionsTypes => ({
    type: types.START_TIMER,
  }),
  pauseTimer: (value: number): TimerActionsTypes => ({
    type: types.PAUSE_TIMER,
    payload: {
      value,
    },
  }),
  stopTimer: (): TimerActionsTypes => ({
    type: types.STOP_TIMER,
  }),
};

export default reducer;
