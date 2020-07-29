import { createStore, Store } from 'redux';
import rootReducer from '../reducers';
import { Task } from '../../pages/Home/Manager/types';

export interface ApplicationState {
  tasks: Task
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
