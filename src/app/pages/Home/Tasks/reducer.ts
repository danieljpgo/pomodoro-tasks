import { Reducer } from 'redux';
import { Task, DispatchAction } from './types';

enum types {
  ADD_TASK = 'ADD_TASK',
  TOGGLE_TASK = 'TOGGLE_TASK',
}

const INITIAL_STATE: Task[] = [];

const reducer: Reducer<Task[], DispatchAction> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      return [
        ...state, {
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        },
      ];
    case types.TOGGLE_TASK:
      return state.map((task) => (
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      ));

    default:
      return state;
  }
};

export const actions = {
  addTask: (text: string) => ({
    type: types.ADD_TASK,
    payload: {
      id: `_${Math.random().toString(36).substr(2, 9)}`,
      text,
    },
  }),
  toggleTask: (id: string) => ({
    type: types.TOGGLE_TASK,
    payload: {
      id,
    },

  }),
};

export default reducer;
