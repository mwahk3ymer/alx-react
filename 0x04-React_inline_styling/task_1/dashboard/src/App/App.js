import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif',
  },
  footer: {
    textAlign: 'center',
    borderTop: '1px solid #ddd',
    padding: '10px 0',
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    backgroundColor: '#fff',
  },
});

const App = () => {
  return (
    <div className={css(styles.body)}>
      {/* Your app content */}
      <footer className={css(styles.footer)}>Footer</footer>
    </div>
  );
};

export default App;
