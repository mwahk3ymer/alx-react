import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
      enableSubmit: false,
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState({ email, enableSubmit: email && this.state.password });
  }

  handleChangePassword(event) {
    const password = event.target.value;
    this.setState({ password, enableSubmit: this.state.email && password });
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

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

export default Login;
