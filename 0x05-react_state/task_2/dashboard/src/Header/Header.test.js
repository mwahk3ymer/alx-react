import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { AppContext, defaultUser, defaultLogOut } from '../App/AppContext';

describe('<Header />', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('does not render logout section with default context value', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: defaultUser, logOut: defaultLogOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection')).toHaveLength(0);
  });

  it('renders logout section with user context value', () => {
    const user = { email: 'test@example.com', isLoggedIn: true };
    const wrapper = shallow(
      <AppContext.Provider value={{ user, logOut: defaultLogOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection')).toHaveLength(1);
  });

  it('calls logOut function when logout link is clicked', () => {
    const logOutSpy = jest.fn();
    const user = { email: 'test@example.com', isLoggedIn: true };
    const wrapper = shallow(
      <AppContext.Provider value={{ user, logOut: logOutSpy }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find('a').simulate('click');
    expect(logOutSpy).toHaveBeenCalledTimes(1);
  });
});
