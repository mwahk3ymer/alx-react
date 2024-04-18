import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('renders a default row', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="Test 1" textSecondCell="Test 2" />
    );
    expect(wrapper.find('tr').hasClass('css-3')).toBe(true);
  });

  it('renders a header row', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader
        textFirstCell="Header 1"
        textSecondCell="Header 2"
      />
    );
    expect(wrapper.find('tr').hasClass('css-4')).toBe(true);
  });
});
