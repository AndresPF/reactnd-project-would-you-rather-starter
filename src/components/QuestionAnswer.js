import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleQuestionAnswer } from '../actions/shared'

class QuestionAnswer extends Component {
	render() {
		const { question, authedUser } = this.props
		return (
			<div className='question-info'>
				<div className='question-top'>
					<h2>{question.author.name}</h2>
					<img src={question.author.avatarURL} alt='' className='avatar' />
				</div>
				<div className='inner-container'>
					<span className='question-title'>Would You Rather:</span>
					<div>Holi</div>
				</div>
			</div>
		)
	}
}

export default connect()(QuestionAnswer)
