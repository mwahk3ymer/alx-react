import React from 'react';
import { AppProvider, defaultUser, defaultLogOut } from './AppContext';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: defaultUser,
      logOut: defaultLogOut,
    };
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  };

  render() {
    const { user, logOut } = this.state;
    return (
      <AppProvider>
        {user.isLoggedIn ? (
          <CourseList />
        ) : (
          <Login logIn={this.logIn} />
        )}
      </AppProvider>
    );
  }
}

export default App;
