import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  urgent: {
    color: 'red',
  },
  default: {
    color: 'black',
  },
});

const NotificationItem = ({ message, urgent }) => {
  return (
    <li className={css(urgent ? styles.urgent : styles.default)}>
      {message}
    </li>
  );
};

export default NotificationItem;
