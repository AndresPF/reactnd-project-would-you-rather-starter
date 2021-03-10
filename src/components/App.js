import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import LoginPage from './LoginPage'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import Leaderboard from './Leaderboard'
import Nav from './Nav'

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}
	render() {
		const { loading, checkAuth } = this.props
		return (
			<Router>
				<Fragment>
					<LoadingBar />
					<Nav />
					<div className='container'>
						{loading ? null : checkAuth ? (
							<div>
								<Route path='/' exact component={Dashboard} />
								<Route path='/question/:id' component={QuestionPage} />
								<Route path='/new' component={NewQuestion} />
								<Route path='/leaderboard' component={Leaderboard} />
							</div>
						) : (
							<LoginPage />
						)}
					</div>
				</Fragment>
			</Router>
		)
	}
}

function mapStateToProps({ users, authedUser }) {
	return {
		loading: Object.keys(users).length === 0,
		checkAuth: authedUser !== null,
	}
}

export default connect(mapStateToProps)(App)
