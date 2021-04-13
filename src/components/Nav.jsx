import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { clearAuthedUser } from '../actions/authedUser';

const Nav = ({ history }) => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(clearAuthedUser());
    history.push('/');
  };

  const authedUser = useSelector((state) => state.users[state.authedUser]);

  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/new" activeClassName="active">
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" exact activeClassName="active">
            Leaderboard
          </NavLink>
        </li>
        {authedUser && (
          <li className="auth-info">
            <span>Welcome {authedUser.name}</span>
            <img className="avatar" src={authedUser.avatarURL} alt="" />
            <button type="button" className="btn" onClick={logout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Nav);
