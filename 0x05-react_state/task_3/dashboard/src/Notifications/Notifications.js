import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

const Notifications = ({ displayDrawer, handleDisplayDrawer, handleHideDrawer }) => {
  return (
    <div className="notifications-panel">
      <span className="menu-item" onClick={handleDisplayDrawer}>Your notifications</span>
      {displayDrawer && (
        <div className="drawer">
          <button className="close-button" onClick={handleHideDrawer}>Close</button>
          <p>Notification 1</p>
          <p>Notification 2</p>
          <p>Notification 3</p>
        </div>
      )}
    </div>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool.isRequired,
  handleDisplayDrawer: PropTypes.func.isRequired,
  handleHideDrawer: PropTypes.func.isRequired
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {}
};

export default Notifications;
