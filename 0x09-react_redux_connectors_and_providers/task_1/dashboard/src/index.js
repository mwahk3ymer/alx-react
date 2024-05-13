import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import { createStore } from 'redux'; // Import createStore from Redux
import uiReducer from './reducers/uiReducer'; // Import your uiReducer
import App from './App';

// Create the Redux store with uiReducer
const store = createStore(uiReducer);

// Wrap the main App component with Provider and pass the Redux store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
