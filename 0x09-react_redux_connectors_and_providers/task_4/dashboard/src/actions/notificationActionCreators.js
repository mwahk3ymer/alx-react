// notificationActionCreators.js
import { bindActionCreators } from 'redux';
import { markAsRead, setNotificationFilter } from './notificationActionCreators';

export function markAsRead(index) {
  return {
    type: MARK_AS_READ,
    index
  };
}

export function setNotificationFilter(filter) {
  return {
    type: SET_NOTIFICATION_FILTER,
    filter
  };
}

export const boundMarkAsRead = bindActionCreators(markAsRead, dispatch);
export const boundSetNotificationFilter = bindActionCreators(setNotificationFilter, dispatch);
