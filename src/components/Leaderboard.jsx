import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sumScoreTotal } from '../utils/helpers'

function UserScore(props) {
	const { user } = props
	return (
		<div className='user-score'>
			<div className='user-info'>
				<h2>{user.name}</h2>
				<img src={user.avatarURL} alt='' className='avatar' />
			</div>
			<div className='user-data'>
				<div className='user-answers'>
					Answered questions: <span>{Object.keys(user.answers).length}</span>
				</div>
				<div className='user-created'>
					Created questions: <span>{user.questions.length}</span>
				</div>
				<div className='user-total'>
					Total: <span>{sumScoreTotal(user)}</span>
				</div>
			</div>
		</div>
	)
}

class Leaderboard extends Component {
	render() {
		const { users } = this.props
		return (
			<ul className='leaderboard-list'>
				{Object.keys(users)
					.sort((a, b) => sumScoreTotal(users[b]) - sumScoreTotal(users[a]))
					.map((user) => (
						<li key={users[user].id}>
							<UserScore user={users[user]} />
						</li>
					))}
			</ul>
		)
	}
}

function mapStateToProps({ users }) {
	return {
		users,
	}
}

export default connect(mapStateToProps)(Leaderboard)