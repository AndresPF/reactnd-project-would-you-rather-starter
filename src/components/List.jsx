import React from 'react';
import Question from './Question';

const List = ({questions}) => (
  <ul className="dashboard-list">
    {questions.map((id) => (
      <li key={id}>
        <Question id={id} />
      </li>
    ))}
  </ul>
);

export default List;
