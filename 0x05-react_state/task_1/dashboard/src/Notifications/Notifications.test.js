import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications', () => {
  it('should call handleDisplayDrawer on clicking menu item', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={false} handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={() => {}} />);
    wrapper.find('.menu-item').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('should call handleHideDrawer on clicking close button', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} handleDisplayDrawer={() => {}} handleHideDrawer={handleHideDrawer} />);
    wrapper.find('.close-button').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});
