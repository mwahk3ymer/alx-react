// notificationReducer.test.js
import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { fromJS } from 'immutable';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    expect(notificationReducer(undefined, {})).toEqual(fromJS({
      filter: 'DEFAULT',
      notifications: {}
    }));
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const initialState = fromJS({ filter: 'DEFAULT', notifications: {} });
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' }
      ]
    };
    const expectedState = fromJS({
      filter: 'DEFAULT',
      notifications: {
        1: { id: 1, type: 'default', value: 'New course available' },
        2: { id: 2, type: 'urgent', value: 'New resume available' }
      }
    });
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ', () => {
    const initialState = fromJS({
      filter: 'DEFAULT',
      notifications: {
        1: { id: 1, isRead: false, type: 'default', value: 'New course available' }
      }
    });
    const action = { type: MARK_AS_READ, id: 1 };
    const expectedState = fromJS({
      filter: 'DEFAULT',
      notifications: {
        1: { id: 1, isRead: true, type: 'default', value: 'New course available' }
      }
    });
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const initialState = fromJS({ filter: 'DEFAULT', notifications: {} });
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const expectedState = fromJS({ filter: 'URGENT', notifications: {} });
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });
});
