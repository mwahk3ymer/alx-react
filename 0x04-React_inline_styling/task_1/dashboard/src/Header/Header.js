import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  logo: {
    width: '200px',
  },
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 0',
    textAlign: 'center',
  },
});

const Header = () => {
  return (
    <header className={css(styles.header)}>
      <img src="/logo.png" alt="Logo" className={css(styles.logo)} />
      {/* Other header content */}
    </header>
  );
};

export default Header;
