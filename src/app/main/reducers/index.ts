import { combineReducers } from 'redux';
import timerReducer from '../../pages/Home/Timer/reducer';
import tasksReducer from '../../pages/Home/Manager/reducer';

const rootReducer = combineReducers({
  timer: timerReducer,
  tasks: tasksReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
