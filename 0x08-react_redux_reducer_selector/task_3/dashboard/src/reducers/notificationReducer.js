// notificationReducer.js
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

const initialState = {
  filter: 'DEFAULT',
  notifications: []
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const updatedNotifications = action.data.map(notification => ({
        ...notification,
        isRead: false
      }));
      return {
        ...state,
        notifications: updatedNotifications
      };
    }
    case MARK_AS_READ: {
      const { index } = action;
      const updatedNotifications = state.notifications.map(notification =>
        notification.id === index ? { ...notification, isRead: true } : notification
      );
      return {
        ...state,
        notifications: updatedNotifications
      };
    }
    case SET_TYPE_FILTER: {
      const { filter } = action;
      return {
        ...state,
        filter
      };
    }
    default:
      return state;
  }
};

export default notificationReducer;
