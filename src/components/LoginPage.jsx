import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class LoginPage extends Component {
	state = {
		user: '',
	}
	selectUser = (e) => {
		const user = e.target.value

		this.setState(() => ({
			user,
		}))
	}

	submitSelect = () => {
		const { dispatch } = this.props
		const { user } = this.state

		dispatch(setAuthedUser(user))
	}
	render() {
		const { users } = this.props
		const { user } = this.state
		return (
			<div className='login-page'>
				<h2>Login Page</h2>
				<p>Select a user to login with:</p>
				<select onChange={this.selectUser} defaultValue='0'>
					<option value='0' disabled>
						Choose a user
					</option>
					{Object.keys(users).map((userId) => {
						const user = users[userId]
						return (
							<option key={user.id} value={user.id}>
								{user.name}
							</option>
						)
					})}
				</select>
				<button
					className='btn'
					onClick={this.submitSelect}
					disabled={user === '' ? true : false}
				>
					Login
				</button>
			</div>
		)
	}
}

function mapStateToProps({ users }) {
	return { users }
}

export default connect(mapStateToProps)(LoginPage)
