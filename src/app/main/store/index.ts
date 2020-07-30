import { createStore, Store } from 'redux';
import rootReducer from '../reducers';
import { Task } from '../../pages/Home/Manager/types';
import { Timer } from '../../pages/Home/Timer/types';

export interface ApplicationState {
  timer: Timer,
  tasks: Task,
}

/* eslint-disable no-underscore-dangle */
const store: Store<ApplicationState> = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
