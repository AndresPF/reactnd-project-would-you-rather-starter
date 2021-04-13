import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAddQuestion } from '../actions/shared';

const NewQuestion = () => {
  const [questionOne, setQuestionOne] = useState('');
  const [questionTwo, setQuestionTwo] = useState('');
  const [toHome, setHome] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(handleAddQuestion(questionOne, questionTwo));

    console.log('New Question:', questionOne, questionTwo);
    setQuestionOne('');
    setQuestionTwo('');
    setHome(true);
  };

  if (toHome === true) {
    return <Redirect to="/" />;
  }

  return (
    <div className="question-form-container">
      <h2 className="question-title">Create New Question</h2>
      <form onSubmit={handleSubmit} className="question-form">
        <h3>Would you rather</h3>
        <textarea
          placeholder="Enter Question One"
          value={questionOne}
          onChange={(e) => setQuestionOne(e.target.value)}
        />
        <h4>Or</h4>
        <textarea
          placeholder="Enter Question Two"
          value={questionTwo}
          onChange={(e) => setQuestionTwo(e.target.value)}
        />
        <button className="btn" type="submit" disabled={questionOne === '' || questionTwo === ''}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewQuestion;
