import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header'; // Assuming the stateless version is exported

const setup = (props = {}) => {
  const defaultProps = {
    user: null,
    logout: jest.fn(),
  };
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Header {...setupProps} />);
};

describe('<Header />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Add more tests to validate rendering based on props
});
