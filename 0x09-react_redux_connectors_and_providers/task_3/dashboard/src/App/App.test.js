import React from 'react';
import { shallow } from 'enzyme';
import App from './App'; // Assuming the stateless version is exported
import { fromJS } from 'immutable';

const setup = (props = {}) => {
  const defaultProps = {
    displayDrawer: false,
    user: null,
    loginRequest: jest.fn(),
    displayNotificationDrawer: jest.fn(),
    hideNotificationDrawer: jest.fn(),
  };
  const setupProps = { ...defaultProps, ...props };
  return shallow(<App {...setupProps} />);
};

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Add more tests to validate rendering based on props
});

