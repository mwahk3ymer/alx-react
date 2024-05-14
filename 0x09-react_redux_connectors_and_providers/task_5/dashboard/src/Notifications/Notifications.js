import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications } from './notificationActionCreators';

const NotificationsComponent = ({ loading, notifications, fetchNotifications }) => {
  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {notifications.map(notification => (
            <li key={notification.id}>{notification.message}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.notifications.get('loading'),
  notifications: state.notifications.get('notifications').toJS(),
});

export default connect(mapStateToProps, { fetchNotifications })(NotificationsComponent);
