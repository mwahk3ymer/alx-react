// courseActionCreators.js
import { bindActionCreators } from 'redux';
import { selectCourse, unSelectCourse } from './courseActionCreators';

export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index
  };
}

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index
  };
}

export const boundSelectCourse = bindActionCreators(selectCourse, dispatch);
export const boundUnSelectCourse = bindActionCreators(unSelectCourse, dispatch);
