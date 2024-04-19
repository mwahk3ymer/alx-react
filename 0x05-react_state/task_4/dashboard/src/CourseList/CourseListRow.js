import React, { useState } from 'react';

const CourseListRow = ({ course, simpleRow }) => {
  const [isChecked, setIsChecked] = useState(false);

  const rowStyle = {
    backgroundColor: isChecked ? '#e6e4e4' : 'transparent',
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <tr style={rowStyle}>
      {simpleRow ? (
        <td>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </td>
      ) : null}
      <td>{course.name}</td>
      <td>{course.description}</td>
    </tr>
  );
};

export default CourseListRow;
