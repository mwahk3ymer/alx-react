import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import {AppProvider } from './AppContext';

describe('<App />', () => {
  it('renders without crashing', () => {
    mount(<App />);
  });

  it('marks notification as read', () => {
    const wrapper = mount(<App />);
    wrapper.instance().markNotificationAsRead(1);
    expect(wrapper.state().listNotifications).toEqual([]);
 });
});
