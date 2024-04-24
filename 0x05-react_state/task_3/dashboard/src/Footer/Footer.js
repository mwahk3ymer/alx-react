import React from 'react';
import { AppContext } from '../App/AppContext';

const Footer = () => (
  <AppContext.Consumer>
    {({ user }) => (
      <footer>
        {user.isLoggedIn && (
          <p>
            Contact us <a href="#">here</a>.
          </p>
        )}
      </footer>
    )}
  </AppContext.Consumer>
);

export default Footer;
