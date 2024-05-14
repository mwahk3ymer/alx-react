import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const Footer = ({ user }) => (
  <div className={css(footerStyles.footer)}>
    <p className={css(footerStyles.text)}>Footer</p>
    {user && (
      <p>
        Logged in as <strong>{user.email}</strong>
      </p>
    )}
  </div>
);

const footerStyles = StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderTop: '3px solid #E11D3F',
    padding: '1rem',
    fontStyle: 'italic',
  },
  text: {
    margin: 0,
  },
});

Footer.propTypes = {
  user: PropTypes.object,
};

Footer.defaultProps = {
  user: null,
};

const mapStateToProps = (state) => ({
  user: state.ui.get('user'),
});

export default connect(mapStateToProps)(Footer);

