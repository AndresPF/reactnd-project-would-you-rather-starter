import { showLoading, hideLoading } from 'react-redux-loading';
import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';

export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(dispatch(hideLoading()));
  };
}

export function answerQuestion({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

export function handleQuestionAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    console.log(qid, answer);
    const question = {
      authedUser,
      qid,
      answer,
    };
    dispatch(showLoading());

    return saveQuestionAnswer(question)
      .then(() => dispatch(answerQuestion(question)))
      .then(dispatch(hideLoading()));
  };
}
