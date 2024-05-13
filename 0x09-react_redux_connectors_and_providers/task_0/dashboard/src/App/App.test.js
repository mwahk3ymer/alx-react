// App.test.js

import { mapStateToProps } from './App'; // Import the mapStateToProps function

describe('mapStateToProps', () => {
  it('should return the right object when passing the state with isUserLoggedIn true', () => {
    // Mock the state with 'isUserLoggedIn' true
    const state = {
      uiReducer: {
        isUserLoggedIn: true
      }
    };

    // Call the mapStateToProps function with the mocked state
    const props = mapStateToProps(state);

    // Expect the props to match the expected object
    expect(props).toEqual({ isLoggedIn: true });
  });

  it('should return the right object when passing the state with isUserLoggedIn false', () => {
    // Mock the state with 'isUserLoggedIn' false
    const state = {
      uiReducer: {
        isUserLoggedIn: false
      }
    };

    // Call the mapStateToProps function with the mocked state
    const props = mapStateToProps(state);

    // Expect the props to match the expected object
    expect(props).toEqual({ isLoggedIn: false });
  });
});
