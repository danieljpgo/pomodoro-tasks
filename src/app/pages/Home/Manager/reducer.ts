import { Task, TasksAction } from './types';

export enum types {
  ADD_TASK = 'ADD_TASK',
  TIMER_TASK = 'TIMER_TASK',
  REMOVE_TASK = 'REMOVE_TASK',
  TOGGLE_TASK = 'TOGGLE_TASK',
}

const initialState: Task[] = [];

const reducer = (state = initialState, action: TasksAction): Task[] => {
  switch (action.type) {
    case types.ADD_TASK:
      return [
        ...state, {
          id: `_${Math.random().toString(36).substr(2, 9)}`,
          completed: false,
          text: 'Untitled',
          priority: 'medium',
          limit: 1500,
          value: 0,
        },
      ];
    case types.TIMER_TASK:
      return [
        ...state.map((task) => (
          task.id === action.payload.id
            ? { ...task, value: action.payload.value }
            : task
        )),
      ];
    case types.REMOVE_TASK:
      return [
        ...state.filter((task) => task.id !== action.payload.id),
      ];
    case types.TOGGLE_TASK:
      return [
        ...state.map((task) => (
          task.id === action.payload.id
            ? { ...task, completed: !task.completed }
            : task
        )),
      ];

    default:
      return state;
  }
};

export const tasksActions = {
  addTask: (): TasksAction => ({
    type: types.ADD_TASK,
  }),
  timerTask: (id: string, value: number): TasksAction => ({
    type: types.TIMER_TASK,
    payload: {
      id,
      value,
    },
  }),
  removeTask: (id: string): TasksAction => ({
    type: types.REMOVE_TASK,
    payload: {
      id,
    },
  }),
  toggleTask: (id: string): TasksAction => ({
    type: types.TOGGLE_TASK,
    payload: {
      id,
    },
  }),
};

export default reducer;
