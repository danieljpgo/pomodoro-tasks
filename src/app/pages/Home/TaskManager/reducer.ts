import {
  Task,
  TasksActionTypes,
} from './types';

export enum types {
  ADD_TASK = 'ADD_TASK',
  REMOVE_TASK = 'REMOVE_TASK',
  TOGGLE_TASK = 'TOGGLE_TASK',
}

const initialState: Task[] = [];

const reducer = (state = initialState, action: TasksActionTypes): Task[] => {
  switch (action.type) {
    case types.ADD_TASK:
      return [
        ...state, {
          id: `_${Math.random().toString(36).substr(2, 9)}`, // @TODO Função para retornar uma geração de ID,
          completed: false,
          text: '',
        },
      ];

    case types.REMOVE_TASK:
      return [
        ...state.filter((task) => task.id !== action.payload.id),
      ];

    case types.TOGGLE_TASK:
      return [
        ...state.map((task) => ((task.id === action.payload.id)
          ? { ...task, completed: !task.completed }
          : task)),
      ];

    default:
      return state;
  }
};

export const actions = {
  addTask: (): TasksActionTypes => ({
    type: types.ADD_TASK,
  }),
  removeTask: (id: string): TasksActionTypes => ({
    type: types.REMOVE_TASK,
    payload: {
      id,
    },
  }),
  toggleTask: (id: string): TasksActionTypes => ({
    type: types.TOGGLE_TASK,
    payload: {
      id,
    },
  }),
};

export default reducer;
