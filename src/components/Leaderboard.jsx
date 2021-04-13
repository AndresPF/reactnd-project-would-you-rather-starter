import React from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { sumScoreTotal } from '../utils/helpers';

const UserScore = (props) => {
  const { user } = props;
  return (
    <div className="user-score">
      <div className="user-info">
        <h2>{user.name}</h2>
        <img src={user.avatarURL} alt="" className="avatar" />
      </div>
      <div className="user-data">
        <div className="user-answers">
          Answered questions: <span>{Object.keys(user.answers).length}</span>
        </div>
        <div className="user-created">
          Created questions: <span>{user.questions.length}</span>
        </div>
        <div className="user-total">
          Total: <span>{sumScoreTotal(user)}</span>
        </div>
      </div>
    </div>
  );
};

const LeaderBoard = () => {
  const users = useSelector((state) => state.users);
  return (
    <ul className="leaderboard-list">
      {Object.keys(users)
        .sort((a, b) => sumScoreTotal(users[b]) - sumScoreTotal(users[a]))
        .map((user) => (
          <li key={users[user].id}>
            <UserScore user={users[user]} />
          </li>
        ))}
    </ul>
  );
};

UserScore.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatarURL: PropTypes.string.isRequired,
    answers: PropTypes.shape(),
    questions: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default LeaderBoard;
