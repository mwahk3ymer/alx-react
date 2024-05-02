// uiActionCreators.js
import fetch from 'node-fetch'; // Assuming node environment
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE
  };
}

export function loginRequest(email, password) {
  return dispatch => {
    dispatch(login()); // Assuming login action creator exists
    return fetch('/login-success.json')
      .then(response => {
        if (response.ok) {
          dispatch(loginSuccess());
        } else {
          dispatch(loginFailure());
        }
      })
      .catch(error => {
        dispatch(loginFailure());
      });
  };
}
