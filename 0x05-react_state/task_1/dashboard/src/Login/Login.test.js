import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
  it('submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it('enable submit button after changing email and password', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('#email').simulate('change', { target: { value: 'test@example.com' } });
    wrapper.find('#password').simulate('change', { target: { value: 'password' } });
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(false);
  });
});
