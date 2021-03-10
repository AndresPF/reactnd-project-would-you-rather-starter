import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleQuestionAnswer } from '../actions/shared'

class QuestionAnswer extends Component {
	state = {
		selectedOption: '',
	}
	setSelected = (e) => {
		const value = e.target.value
		this.setState(() => ({
			selectedOption: value,
		}))
	}

	handleAnswer = (e) => {
		e.preventDefault()

		const { selectedOption } = this.state
		const { dispatch, question } = this.props
		console.log(question)

		dispatch(handleQuestionAnswer(question.id, selectedOption))

		this.setState(() => ({
			selectedOption: '',
		}))
	}

	render() {
		const { question } = this.props
		const { selectedOption } = this.state
		return (
			<div className='inner-container'>
				<span className='question-title'>Would You Rather</span>
				<form onSubmit={this.handleAnswer}>
					<label>
						<input
							type='radio'
							value='optionOne'
							checked={selectedOption === 'optionOne'}
							onChange={this.setSelected}
						/>
						{question.optionOne.text}
					</label>
					<label>
						<input
							type='radio'
							value='optionTwo'
							checked={selectedOption === 'optionTwo'}
							onChange={this.setSelected}
						/>
						{question.optionTwo.text}
					</label>
					<button
						className='btn'
						type='submit'
						disabled={selectedOption === ''}
					>
						Submit
					</button>
				</form>
			</div>
		)
	}
}

export default connect()(QuestionAnswer)
