import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
});

const CourseList = ({ children }) => {
  return <ul className={css(styles.list)}>{children}</ul>;
};

export default CourseList;
