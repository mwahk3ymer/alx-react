// notificationActionCreators.test.js
import { markAsRead, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { NotificationTypeFilters } from './notificationActionTypes';

test('markAsRead action creator', () => {
  const action = markAsRead(1);
  expect(action).toEqual({ type: MARK_AS_READ, index: 1 });
});

test('setNotificationFilter action creator', () => {
  const action = setNotificationFilter(NotificationTypeFilters.DEFAULT);
  expect(action).toEqual({ type: SET_TYPE_FILTER, filter: NotificationTypeFilters.DEFAULT });
});
