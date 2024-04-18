import React from 'react';
import './NotificationItem.css'; // Importing CSS for styling

const NotificationItem = ({ message }) => {
  return <div className="notification-item">{message}</div>;
};

export default NotificationItem;
