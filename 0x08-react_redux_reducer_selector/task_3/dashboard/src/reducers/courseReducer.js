// courseReducer.js
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { fromJS } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

const initialState = fromJS({
  courses: {}
});

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      const normalizedData = coursesNormalizer(action.data);
      return state.mergeIn(['courses'], normalizedData.entities.courses);
    }
    case SELECT_COURSE:
      return state.setIn(['courses', action.id, 'selected'], true);
    case UNSELECT_COURSE:
      return state.setIn(['courses', action.id, 'selected'], false);
    default:
      return state;
  }
};

export default courseReducer;
