// uiActionCreators.test.js
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { loginRequest } from './uiActionCreators';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loginRequest action creator', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches LOGIN and LOGIN_SUCCESS when API call succeeds', () => {
    fetchMock.getOnce('/login-success.json', {
      body: { /* mock success response */ },
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: LOGIN },
      { type: LOGIN_SUCCESS }
    ];
    const store = mockStore({});

    return store.dispatch(loginRequest('test@example.com', 'password'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('dispatches LOGIN and LOGIN_FAILURE when API call fails', () => {
    fetchMock.getOnce('/login-success.json', 500); // Mocking failure response

    const expectedActions = [
      { type: LOGIN },
      { type: LOGIN_FAILURE }
    ];
    const store = mockStore({});

    return store.dispatch(loginRequest('test@example.com', 'password'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
