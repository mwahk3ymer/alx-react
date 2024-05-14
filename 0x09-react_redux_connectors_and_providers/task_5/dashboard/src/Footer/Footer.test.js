import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './Footer'; // Assuming the stateless version is exported

const setup = (props = {}) => {
  const defaultProps = {
    user: null,
  };
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Footer {...setupProps} />);
};

describe('<Footer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Add more tests to validate rendering based on props
});

