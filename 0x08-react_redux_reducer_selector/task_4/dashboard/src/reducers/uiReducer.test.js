import { Map } from 'immutable';
import uiReducer from './uiReducer';

describe('uiReducer', () => {
  it('should return the initial state', () => {
    expect(uiReducer(undefined, {})).toEqual(Map({}));
  });

  it('should handle SET_LOADING', () => {
    const action = { type: 'SET_LOADING', payload: true };
    const initialState = Map({});
    const expectedState = Map({ loading: true });
    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });

  // Other test cases
});
