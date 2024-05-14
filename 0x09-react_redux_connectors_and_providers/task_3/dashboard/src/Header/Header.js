import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/uiActionCreators';
import { StyleSheet, css } from 'aphrodite';

const Header = ({ user, logout }) => (
  <div className={css(headerStyles.header)}>
    <h1>School dashboard</h1>
    {user && (
      <div>
        <p>
          Welcome <strong>{user.email}</strong> (<a href="#" onClick={logout}>logout</a>)
        </p>
      </div>
    )}
  </div>
);

const headerStyles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '3px solid #E11D3F',
    padding: '1rem',
  },
});

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

Header.defaultProps = {
  user: null,
  logout: () => {},
};

const mapStateToProps = (state) => ({
  user: state.ui.get('user'),
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
