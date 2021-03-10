import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
	state = {
		questionOne: '',
		questionTwo: '',
		toHome: false,
	}
	handleChangeOne = (e) => {
		const questionOne = e.target.value

		this.setState(() => ({
			questionOne,
		}))
	}

	handleChangeTwo = (e) => {
		const questionTwo = e.target.value

		this.setState(() => ({
			questionTwo,
		}))
	}

	handleSubmit = (e) => {
		e.preventDefault()

		const { questionOne, questionTwo } = this.state
		const { dispatch } = this.props

		dispatch(handleAddQuestion(questionOne, questionTwo))

		console.log('New Question:', questionOne, questionTwo)
		this.setState(() => ({
			questionOne: '',
			questionTwo: '',
			toHome: true,
		}))
	}
	render() {
		const { questionOne, questionTwo, toHome } = this.state
		if (toHome === true) {
			return <Redirect to='/' />
		}

		return (
			<div className='question-form-container'>
				<h3 className='question-title'>Create New Question</h3>
				<form onSubmit={this.handleSubmit} className='question-form'>
					<textarea
						placeholder='Enter Question One'
						value={questionOne}
						onChange={this.handleChangeOne}
					/>
					<textarea
						placeholder='Enter Question Two'
						value={questionTwo}
						onChange={this.handleChangeTwo}
					/>
					<button
						className='btn'
						type='submit'
						disabled={questionOne === '' || questionTwo === ''}
					>
						Submit
					</button>
				</form>
			</div>
		)
	}
}

export default connect()(NewQuestion)
