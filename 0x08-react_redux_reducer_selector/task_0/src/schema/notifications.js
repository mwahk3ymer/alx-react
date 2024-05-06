import { normalize, schema, denormalize } from 'normalizr';

const user = new schema.Entity('users');

const message = new schema.Entity(
  'messages',
  {},
  { idAttribute: 'guid' }
);

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

export function normalizeNotificationsData(data) {
  return normalize(data, [notification]);
}

export function getAllNotificationsByUser(notifications, userId) {
  const normalizedNotifications = normalizeNotificationsData(notifications);
  const denormalizedNotifications = denormalize(normalizedNotifications.result, [notification], normalizedNotifications.entities);
  
  return denormalizedNotifications.filter(notification => notification.author === userId);
}
