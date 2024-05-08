 // uiReducer.test.js

import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  // Test initial state
  it('should return the initial state', () => {
    expect(uiReducer(undefined, {})).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    });
  });

  // Test state when SELECT_COURSE action is passed
  it('should return the initial state when SELECT_COURSE action is passed', () => {
    const action = { type: 'SELECT_COURSE' };
    expect(uiReducer(undefined, action)).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    });
  });

  // Test state when DISPLAY_NOTIFICATION_DRAWER action is passed
  it('should set isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    expect(uiReducer(undefined, action)).toEqual({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {}
    });
  });
});
