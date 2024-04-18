import React from 'react';
import './Login.css'; // Importing CSS for styling

const Login = () => {
  return (
    <div className="login-container">
      <div className="input-group">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
      </div>
      <button className="login-button">Login</button>
    </div>
  );
};

export default Login;
