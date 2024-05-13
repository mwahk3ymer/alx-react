// uiActionCreators.js
import { bindActionCreators } from 'redux';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';

export function login(email, password) {
  return {
    type: LOGIN,
    user: {
      email,
      password
    }
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}

export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER
  };
}

export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER
  };
}

export const boundLogin = bindActionCreators(login, dispatch);
export const boundLogout = bindActionCreators(logout, dispatch);
export const boundDisplayNotificationDrawer = bindActionCreators(displayNotificationDrawer, dispatch);
export const boundHideNotificationDrawer = bindActionCreators(hideNotificationDrawer, dispatch);
