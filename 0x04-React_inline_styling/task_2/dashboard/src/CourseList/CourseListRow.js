import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  defaultRow: {
    backgroundColor: 'white',
  },
  headerRow: {
    backgroundColor: 'lightgray',
  },
  th: {
    padding: '10px',
    border: '1px solid black',
  },
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  return (
    <tr className={css(isHeader ? styles.headerRow : styles.defaultRow)}>
      <th className={css(styles.th)}>{textFirstCell}</th>
      <th className={css(styles.th)}>{textSecondCell}</th>
    </tr>
  );
};

export default CourseListRow;
