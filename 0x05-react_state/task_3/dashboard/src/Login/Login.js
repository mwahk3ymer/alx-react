import React, from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
     };
  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
	  const {email, password } = this.state;
	  this.props.logIn(email, password);
  };

  render() {
    const { email, password, enableSubmit, isLoggedIn } = this.state;
    return (
      <div className="login-container">
        {isLoggedIn ? (
          <div>
            <h2>Welcome, {email}!</h2>
            <p>You are logged in.</p>
          </div>
        ) : (
          <form onSubmit={this.handleLoginSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={this.handleChangeEmail}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={this.handleChangePassword}
              />
            </div>
            <input
              type="submit"
              value="Submit"
              disabled={!enableSubmit}
            />
          </form>
        )}
      </div>
    );
  }
}

Login.propTypes = {
	logIn: PropTypes.func.isRequired,
};

export default Login;
