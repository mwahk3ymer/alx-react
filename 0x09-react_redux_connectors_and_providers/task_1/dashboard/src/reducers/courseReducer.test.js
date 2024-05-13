// courseReducer.test.js
import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { fromJS } from 'immutable';

describe('courseReducer', () => {
  it('should return the initial state', () => {
    expect(courseReducer(undefined, {})).toEqual(fromJS({
      courses: {}
    }));
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const initialState = fromJS({ courses: {} });
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'Math' },
        { id: 2, name: 'Science' }
      ]
    };
    const expectedState = fromJS({
      courses: {
        1: { id: 1, name: 'Math' },
        2: { id: 2, name: 'Science' }
      }
    });
    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SELECT_COURSE', () => {
    const initialState = fromJS({
      courses: {
        1: { id: 1, name: 'Math' }
      }
    });
    const action = { type: SELECT_COURSE, id: 1 };
    const expectedState = fromJS({
      courses: {
        1: { id: 1, name: 'Math', selected: true }
      }
    });
    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle UNSELECT_COURSE', () => {
    const initialState = fromJS({
      courses: {
        1: { id: 1, name: 'Math', selected: true }
      }
    });
    const action = { type: UNSELECT_COURSE, id: 1 };
    const expectedState = fromJS({
      courses: {
        1: { id: 1, name: 'Math', selected: false }
      }
    });
    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });
});
