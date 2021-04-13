import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

const LoginPage = () => {
  const [selectedUser, setSelectedUser] = useState(true);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const submitSelect = () => {
    dispatch(setAuthedUser(selectedUser));
  };

  return (
    <div className="login-page">
      <h2>Login Page</h2>
      <p>Select a user to login with:</p>
      <select
        onChange={(e) => {
          setSelectedUser(e.target.value);
        }}
        defaultValue="0"
      >
        <option value="0" disabled>
          Choose a user
        </option>
        {Object.keys(users).map((userId) => {
          const user = users[userId];
          return (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          );
        })}
      </select>
      <button type="button" className="btn" onClick={submitSelect} disabled={selectedUser === ''}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
