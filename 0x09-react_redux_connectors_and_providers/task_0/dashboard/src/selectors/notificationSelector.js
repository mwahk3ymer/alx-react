// src/selectors/notificationSelector.js
import { createSelector } from 'reselect';

const getFilter = state => state.getIn(['notifications', 'filter']);
const getNotificationsMap = state => state.getIn(['notifications', 'notifications']);

export const filterTypeSelected = createSelector(
  getFilter,
  filter => filter
);

export const getNotifications = createSelector(
  getNotificationsMap,
  notificationsMap => notificationsMap.toList()
);

export const getUnreadNotifications = createSelector(
  getNotificationsMap,
  notificationsMap => notificationsMap.filter(notification => !notification.get('isRead')).toList()
);
