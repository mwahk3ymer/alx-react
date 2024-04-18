import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import {AppProvider, defaultUser, defaultLogout } from './AppContext';

describe('<App />', () => {
  it('renders without crashing', () => {
    mount(
      <AppProvider>
        <App />
      </AppProvider>
    );
  });

  it('updates state correctly when logged in', () => {
    const wrapper = mount(
      <AppProvider>
        <App />
      </AppProvider>
    );
    wrapper.find('Login').instance().props.logIn('test@example.com', 'password');
    expect(wrapper.find('App').instance().state.user.email).toEqual('test@example.com');
  });

  it('updates state correctly when logged out', () => {
    const wrapper = mount(
      <AppProvider>
        <App />
      </AppProvider>
    );
    wrapper.find('Login').instance().props.logIn('test@example.com', 'password');
    wrapper.find('Header').find('a').simulate('click');
    expect(wrapper.find('App').instance().state.user).toEqual(defaultUser);
  });
});
