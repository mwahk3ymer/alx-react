import React from 'react';
import './Notifications.css'; // Importing CSS for styling

const Notifications = ({ isOpen }) => {
  return (
    <div className={`notifications-panel ${isOpen ? 'open' : ''}`}>
      <ul className="notifications-list">
        <li className="notification-item">Notification 1</li>
        <li className="notification-item">Notification 2</li>
        <li className="notification-item">Notification 3</li>
      </ul>
      <div className="notifications-menu">
        <span className="notifications-icon">🔔</span>
        <span className="notifications-tooltip">Notifications</span>
      </div>
    </div>
  );
};

export default Notifications;
