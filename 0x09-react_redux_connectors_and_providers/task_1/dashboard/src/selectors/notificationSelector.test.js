// src/selectors/notificationSelector.test.js
import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification Selectors', () => {
  const initialState = fromJS({
    notifications: {
      filter: 'DEFAULT',
      notifications: {
        1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
        2: { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
        3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
      }
    }
  });

  it('filterTypeSelected selector should return the filter type', () => {
    expect(filterTypeSelected(initialState)).toEqual('DEFAULT');
  });

  it('getNotifications selector should return a list of notifications', () => {
    expect(getNotifications(initialState)).toEqual(fromJS([
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
      { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
    ]));
  });

  it('getUnreadNotifications selector should return a list of unread notifications', () => {
    expect(getUnreadNotifications(initialState)).toEqual(fromJS([
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
    ]));
  });
});
