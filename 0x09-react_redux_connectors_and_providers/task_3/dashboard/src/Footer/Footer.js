import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const Footer = ({ user }) => (
  <div className={css(footerStyles.footer)}>
    <p>Copyright 2020 - holberton school</p>
    {user.isLoggedIn && <a href="#">Contact us</a>}
  </div>
);

Footer.propTypes = {
  user: PropTypes.shape({
    isLoggedIn: PropTypes.bool,
    email: PropTypes.string
  }).isRequired
};

const footerStyles = StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '3px solid #E11D3F',
    padding: '1rem',
    fontStyle: 'italic'
  }
});

// Define the mapStateToProps function
const mapStateToProps = (state) => ({
  user: state.get('user')
});

// Connect the Footer component to Redux
export default connect(mapStateToProps)(Footer);
