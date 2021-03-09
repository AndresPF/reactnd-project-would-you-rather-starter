import { getInitialData } from '../utils/api'
import { recieveUsers } from '../actions/users'
import { recieveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

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
