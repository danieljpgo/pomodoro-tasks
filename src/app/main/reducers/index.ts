import { combineReducers } from 'redux';
import tasksReducer from '../../pages/Home/Tasks/reducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
