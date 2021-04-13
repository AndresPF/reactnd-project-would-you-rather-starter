import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import List from './List';
import { filterQuestions } from '../utils/helpers';

const Dashboard = () => {
  const [checkAnswer, setCheckAnswer] = useState(true);
  const questions = useSelector((state) => state.questions);
  const answers = useSelector((state) => state.users[state.authedUser].answers);
  const questionIds = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  const { unanswered, answered } = filterQuestions(questionIds, Object.keys(answers));

  return (
    <div className="dashboard-container">
      <div className="dashboard-nav">
        <button
          type="button"
          className={`btn ${checkAnswer ? 'active' : ''}`}
          onClick={() => setCheckAnswer(true)}
        >
          Unanswered
        </button>
        <button
          type="button"
          className={`btn ${!checkAnswer ? 'active' : ''}`}
          onClick={() => setCheckAnswer(false)}
        >
          Answered
        </button>
      </div>
      {checkAnswer ? <List questionsIds={unanswered} /> : <List questionsIds={answered} />}
    </div>
  );
};

export default Dashboard;
