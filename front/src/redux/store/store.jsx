import { combineReducers, createStore } from 'redux';
import projectsReducer from '../reducers/projectsReducer';
import userReducer from '../reducers/userReducer';

const rootReducer = combineReducers({
  projectsReducer,
  userReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
