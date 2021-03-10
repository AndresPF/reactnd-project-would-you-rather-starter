import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api'
import { recieveUsers } from '../actions/users'
import { recieveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading())
		return getInitialData().then(({ users, questions }) => {
			dispatch(recieveUsers(users))
			dispatch(recieveQuestions(questions))
			dispatch(setAuthedUser(AUTHED_ID))
			dispatch(hideLoading())
		})
	}
}

export function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question,
	}
}

export function handleAddQuestion(optionOneText, optionTwoText) {
	return (dispatch, getState) => {
		const { authedUser } = getState()
		dispatch(showLoading())

		return saveQuestion({
			optionOneText,
			optionTwoText,
			author: authedUser,
		})
			.then((question) => dispatch(addQuestion(question)))
			.then(dispatch(hideLoading()))
	}
}

export function answerQuestion({ authedUser, qid, answer }) {
	return {
		type: ANSWER_QUESTION,
		authedUser,
		qid,
		answer,
	}
}

export function handleQuestionAnswer(qid, answer) {
	return (dispatch, getState) => {
		const { authedUser } = getState()
		console.log(qid, answer)
		const question = {
			authedUser,
			qid,
			answer,
		}
		dispatch(showLoading())

		return saveQuestionAnswer(question)
			.then(() => dispatch(answerQuestion(question)))
			.then(dispatch(hideLoading()))
	}
}
