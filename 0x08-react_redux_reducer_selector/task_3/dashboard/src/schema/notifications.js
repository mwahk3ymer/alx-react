import { schema } from 'normalizr';

export const notificationSchema = new schema.Entity('notifications');

export function notificationsNormalizer(data) {
  return normalize(data, [notificationSchema]);
}
