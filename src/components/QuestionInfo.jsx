import React from 'react';
import { PropTypes } from 'prop-types';

const QuestionOption = ({ option, total, chosen }) => {
  const count = option.votes.length;
  return (
    <div className={`question-option ${chosen ? 'chosen' : ''}`}>
      <span className="option-text">{option.text}</span>
      <div className="option-info">
        <span className="option-votes">
          {count} out of {total} votes
        </span>
        <span className="option-percentage">{((count / total) * 100).toFixed(2)}%</span>
      </div>
    </div>
  );
};

export default function QuestionInfo({ question, authedUser }) {
  const total = question.optionOne.votes.length + question.optionTwo.votes.length;
  return (
    <div className="inner-container">
      <span className="question-title">Result</span>
      <QuestionOption
        option={question.optionOne}
        total={total}
        chosen={question.optionOne.votes.includes(authedUser)}
      />
      <QuestionOption
        option={question.optionTwo}
        total={total}
        chosen={question.optionTwo.votes.includes(authedUser)}
      />
    </div>
  );
}

QuestionOption.propTypes = {
  option: PropTypes.shape({
    votes: PropTypes.arrayOf(PropTypes.string).isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  chosen: PropTypes.bool.isRequired,
  total: PropTypes.number.isRequired,
};

QuestionInfo.propTypes = {
  question: PropTypes.shape({
    optionOne: PropTypes.shape.isRequired,
    optionTwo: PropTypes.shape.isRequired,
  }).isRequired,
  authedUser: PropTypes.string.isRequired,
};
