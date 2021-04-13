import React from 'react';
import { PropTypes } from 'prop-types';
import Question from './Question';

const List = ({ questionsIds }) => (
  <ul className="dashboard-list">
    {questionsIds.map((id) => (
      <li key={id}>
        <Question id={id} />
      </li>
    ))}
  </ul>
);

List.propTypes = {
  questionsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;
