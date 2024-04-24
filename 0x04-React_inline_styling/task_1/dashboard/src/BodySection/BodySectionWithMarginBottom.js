import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: '40px',
  },
});

const BodySectionWithMarginBottom = ({ children }) => {
  return <div className={css(styles.marginBottom)}>{children}</div>;
};

export default BodySectionWithMarginBottom;