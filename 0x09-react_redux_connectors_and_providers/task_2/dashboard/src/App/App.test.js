import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the Notification component with displayDrawer set to true', () => {
    const state = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: true // Add this line to simulate drawer being visible
    });
    const wrapper = shallow(<App />, { context: { store: { getState: () => state } } });
    expect(wrapper.find('Notification').prop('displayDrawer')).toBe(true);
  });

  it('renders the Notification component with displayDrawer set to false', () => {
    const state = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: false // Add this line to simulate drawer being hidden
    });
    const wrapper = shallow(<App />, { context: { store: { getState: () => state } } });
    expect(wrapper.find('Notification').prop('displayDrawer')).toBe(false);
  });
});
