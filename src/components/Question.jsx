import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';

const Question = ({ id }) => {
  const question = useSelector((state) => state.questions[id]);
  const author = useSelector((state) => state.users[question.author]);

  return (
    <div className="question-container">
      <div className="question-top">
        <h2>{author.name}</h2>
        <img src={author.avatarURL} alt="" className="avatar" />
      </div>
      <div className="inner-container">
        <span className="question-title">Would you rather...</span>
        <span className="question-text">{question.optionOne.text}...</span>
        <Link className="btn" to={`/question/${question.id}`}>
          View Question
        </Link>
      </div>
    </div>
  );
};

Question.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Question;
