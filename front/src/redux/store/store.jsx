import { combineReducers, createStore } from 'redux';
import projectsReducer from '../reducers/projectsReducer';

const rootReducer = combineReducers({
  projectsReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
