import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { handleQuestionAnswer } from '../actions/shared';

const QuestionAnswer = ({ question }) => {
  const [selectedOption, setSelected] = useState('');
  const dispatch = useDispatch();

  const handleAnswer = (e) => {
    e.preventDefault();

    dispatch(handleQuestionAnswer(question.id, selectedOption));

    setSelected('');
  };

  return (
    <div className="inner-container">
      <span className="question-title">Would You Rather</span>
      <form onSubmit={handleAnswer} className="question-form">
        <label htmlFor="optionOne">{question.optionOne.text}</label>
        <input
          id="optionOne"
          type="radio"
          value="optionOne"
          checked={selectedOption === 'optionOne'}
          onChange={(e) => setSelected(e.target.value)}
        />

        <label htmlFor="optionTwo">{question.optionTwo.text}</label>
        <input
          id="optionTwo"
          type="radio"
          value="optionTwo"
          checked={selectedOption === 'optionTwo'}
          onChange={(e) => setSelected(e.target.value)}
        />

        <button className="btn" type="submit" disabled={selectedOption === ''}>
          Submit
        </button>
      </form>
    </div>
  );
};

QuestionAnswer.propTypes = {
  question: PropTypes.shape().isRequired,
};

export default QuestionAnswer;
