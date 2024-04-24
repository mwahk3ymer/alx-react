import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	  notificationsPanel: {
		      position: 'fixed',
		      top: '20px',
		      right: '20px',
		      backgroundColor: '#fff',
		      border: '1px solid #ddd',
		      padding: '10px',
		    },
});

const Notifications = () => {
	  return (
		      <div className={css(styles.notificationsPanel)}>
		        {/* Notification items */}
		      </div>
		    );
};

export default Notifications;
