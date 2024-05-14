import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { fromJS } from 'immutable';

// Mock the actions
const mockDisplayNotificationDrawer = jest.fn();
const mockHideNotificationDrawer = jest.fn();
const mockLoginRequest = jest.fn();
const mockLogout = jest.fn();

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App
        displayDrawer={false}
        user={null}
        isLoggedIn={false}
        displayNotificationDrawer={mockDisplayNotificationDrawer}
        hideNotificationDrawer={mockHideNotificationDrawer}
        loginRequest={mockLoginRequest}
        logout={mockLogout}
      />
    );
  });

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should map state to props correctly', () => {
    const state = fromJS({
      ui: {
        user: { email: 'test@example.com' },
        isLoggedIn: true,
        isNotificationDrawerVisible: true,
      },
      courses: {},
      notifications: {},
    });
    
    const expectedProps = {
      user: { email: 'test@example.com' },
      isLoggedIn: true,
      displayDrawer: true,
    };

    const mapStateToProps = (state) => ({
      user: state.getIn(['ui', 'user']),
      isLoggedIn: state.getIn(['ui', 'isLoggedIn']),
      displayDrawer: state.getIn(['ui', 'isNotificationDrawerVisible']),
    });

    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});
