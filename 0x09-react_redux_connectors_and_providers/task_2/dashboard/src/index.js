import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // assuming rootReducer is your combined reducers

// Apply middleware
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
