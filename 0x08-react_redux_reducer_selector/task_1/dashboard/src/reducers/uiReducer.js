// uiReducer.js

import { Map } from 'immutable';

// Initial state
const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
});

// Reducer function
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
	  case 'SET_LOADING':
		  return state.set('loading', action.payload);
          case 'SET_ERROR':
		  return state.set('error', action.payload);
    case DISPLAY_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: true
      };
    case HIDE_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true
      };
    case LOGIN_FAILURE:
    case LOGOUT:
      return {
        ...state,
        isUserLoggedIn: false
      };
    default:
      return state;
  }
};

export default uiReducer;
