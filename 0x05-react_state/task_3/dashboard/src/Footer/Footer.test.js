import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { AppContext } from '../App/AppContext';

describe('<Footer />', () => {
  it('renders without crashing', () => {
    shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Footer />
      </AppContext.Provider>
    );
  });

  it('does not render contact link when user is logged out', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a')).toHaveLength(0);
  });

  it('renders contact link when user is logged in', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a')).toHaveLength(1);
  });
});
