import { combineReducers } from 'redux';
import tasksReducer from '../../pages/Home/Tasks/reducer';

export default combineReducers({
  tasks: tasksReducer,
});
