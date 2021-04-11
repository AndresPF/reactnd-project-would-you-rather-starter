import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from './List'
import { filterQuestions } from '../utils/helpers'

class Dashboard extends Component {
	state = {
		unanswered: true,
	}

	showAnswered = (visible) => {
		this.setState(() => ({
			unanswered: visible,
		}))
	}

	render() {
		const { unanswered } = this.state
		return (
			<div className='dashboard-container'>
				<div className='dashboard-nav'>
					<button
						className={`btn ${unanswered ? 'active' : ''}`}
						onClick={() => this.showAnswered(true)}
					>
						Unanswered
					</button>
					<button
						className={`btn ${!unanswered ? 'active' : ''}`}
						onClick={() => this.showAnswered(false)}
					>
						Answered
					</button>
				</div>
				{unanswered ? (
					<List questions={this.props.unanswered} />
				) : (
					<List questions={this.props.answered} />
				)}
			</div>
		)
	}
}

function mapStateToProps({ authedUser, users, questions }) {
	const questionIds = Object.keys(questions).sort(
		(a, b) => questions[b].timestamp - questions[a].timestamp
	)
	const { unanswered, answered } = filterQuestions(
		questionIds,
		Object.keys(users[authedUser].answers)
	)
	return {
		authedUser: users[authedUser],
		unanswered,
		answered,
	}
}

export default connect(mapStateToProps)(Dashboard)
