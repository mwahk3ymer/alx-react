import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers'; // Import your root reducer here
import App from './App'; // Import your root component here

// Create the Redux store with middleware and Redux DevTools
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// Render the root component wrapped in the Redux Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
