import React from 'react'
import { connect } from 'react-redux'
import QuestionInfo from './QuestionInfo'
import QuestionAnswer from './QuestionAnswer'

const QuestionPage = ({authedUser, question, answered, notFound}) => {
		if (notFound) {
			return (
				<div>
					<h3>404 Not Found</h3>
					<p>Question with that ID does not exists.</p>
				</div>
			)
		}

		return (
			<div className='question-page-container'>
				<div className='question-info'>
					<div className='question-top'>
						<h2>{question.author.name}</h2>
						<img src={question.author.avatarURL} alt='' className='avatar' />
					</div>
					{answered !== undefined ? (
						<QuestionInfo question={question} authedUser={authedUser} />
					) : (
						<QuestionAnswer question={question} authedUser={authedUser} />
					)}
				</div>
			</div>
		)
	
}

function mapStateToProps({ authedUser, users, questions }, props) {
	const { id } = props.match.params

	if (questions[id] === undefined) {
		return {
			notFound: true,
		}
	}

	return {
		authedUser,
		question: {
			...questions[id],
			author: users[questions[id].author],
		},
		answered: users[authedUser].answers[id],
	}
}

export default connect(mapStateToProps)(QuestionPage)
