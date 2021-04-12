import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import { addQuestion, handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';
import NewQuestion from './NewQuestion';
import QuestionPage from './QuestionPage';
import LeaderBoard from './LeaderBoard';
import Nav from './Nav';

const App = () => {
  const loading = useSelector((state) => state.users.length === 0);
  const checkAuth = useSelector((state) => state.authedUser !== null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    <Router>
      <LoadingBar />
      <Nav />
      <div className="container">
        {loading && checkAuth ? (
          <>
            <Route path="/" exact component={Dashboard} />
            <Route path="/question/:id" component={QuestionPage} />
            <Route path="/new" component={NewQuestion} />
            <Route path="/leaderboard" component={LeaderBoard} />
          </>
        ) : (
          <LoginPage />
        )}
      </div>
    </Router>
  );
};

export default App;
