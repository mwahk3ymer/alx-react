import uiReducer from './uiReducer';
import { Map } from 'immutable';
import { LOGIN, LOGOUT } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      user: null,
    });
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle LOGIN action', () => {
    const user = { email: 'test@example.com', isLoggedIn: true };
    const loginAction = { type: LOGIN, user };
    const expectedState = Map({
      isNotificationDrawerVisible: false,
      user: user,
    });
    expect(uiReducer(undefined, loginAction)).toEqual(expectedState);
  });

  it('should handle LOGOUT action', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      user: { email: 'test@example.com', isLoggedIn: true },
    });
    const logoutAction = { type: LOGOUT };
    const expectedState = Map({
      isNotificationDrawerVisible: false,
      user: null,
    });
    expect(uiReducer(initialState, logoutAction)).toEqual(expectedState);
  });
});
