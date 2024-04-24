import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should have default state of displayDrawer as false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).toEqual(false);
  });

  it('should update state of displayDrawer to true on calling handleDisplayDrawer', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toEqual(true);
  });

  it('should update state of displayDrawer to false on calling handleHideDrawer', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ displayDrawer: true });
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toEqual(false);
  });
});
