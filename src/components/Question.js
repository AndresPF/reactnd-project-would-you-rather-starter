import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Question extends Component {
	render() {
		const { question, author } = this.props
		return (
			<div className='question-container'>
				<div className='question-top'>
					<h2>{author.name}</h2>
					<img src={author.avatarURL} alt='' className='avatar' />
				</div>
				<div className='inner-container'>
					<span>Would you rather...</span>
					<span>{question.optionOne.text}...</span>
					<Link to={`/question/${question.id}`}>View Question</Link>
				</div>
			</div>
		)
	}
}

function mapStateToProps({ questions, users }, { id }) {
	const question = questions[id]
	return {
		question,
		author: users[question.author],
	}
}

export default connect(mapStateToProps)(Question)
