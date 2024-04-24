import React from 'react';

const AppContext = React.createContext();

const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

const defaultLogOut = () => {};

const AppProvider = ({ children }) => {
  const [user, setUser] = React.useState(defaultUser);

  const logIn = (email, password) => {
    setUser({
      email,
      password,
      isLoggedIn: true,
    });
  };

  const logOut = () => {
    setUser(defaultUser);
  };

  return (
    <AppContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext, defaultUser, defaultLogOut };
