import React from 'react';
import { AppContext } from '../App/AppContext';

class Header extends React.Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;
    return (
      <header>
        {/* Your header content */}
        {user.isLoggedIn && (
          <section id="logoutSection">
            Welcome {user.email} (<a href="#" onClick={logOut}>logout</a>)
          </section>
        )}
      </header>
    );
  }
}

export default Header;
