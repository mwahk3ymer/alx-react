import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { logout } from '../actions/uiActionCreators';

const Header = ({ user, logout }) => (
  <div className={css(headerStyles.header)}>
    <h1>School dashboard</h1>
    {user.isLoggedIn && (
      <div>
        <span>Welcome, {user.email}</span>
        <a href="#" onClick={logout}>Logout</a>
      </div>
    )}
  </div>
);

Header.propTypes = {
  user: PropTypes.shape({
    isLoggedIn: PropTypes.bool,
    email: PropTypes.string,
  }).isRequired,
  logout: PropTypes.func.isRequired,
};

const headerStyles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '3px solid #E11D3F',
    padding: '1rem',
  },
});

// Define the mapStateToProps function
const mapStateToProps = (state) => ({
  user: state.get('user'),
});

// Define the mapDispatchToProps function
const mapDispatchToProps = {
  logout,
};

// Connect the Header component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(Header);
