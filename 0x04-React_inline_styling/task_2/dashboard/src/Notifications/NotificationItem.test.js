import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  it('renders with default styling', () => {
    const wrapper = shallow(<NotificationItem message="Test" />);
    expect(wrapper.find('li').hasClass('css-1')).toBe(true);
  });

  it('renders with urgent styling', () => {
    const wrapper = shallow(<NotificationItem message="Test" urgent />);
    expect(wrapper.find('li').hasClass('css-2')).toBe(true);
  });
});
