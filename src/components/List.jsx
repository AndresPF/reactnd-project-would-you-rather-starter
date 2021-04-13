import React from 'react';
import { PropTypes } from 'prop-types';
import Question from './Question';

const List = ({ questions }) => (
  <ul className="dashboard-list">
    {questions.map((id) => (
      <li key={id}>
        <Question id={id} />
      </li>
    ))}
  </ul>
);

List.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
