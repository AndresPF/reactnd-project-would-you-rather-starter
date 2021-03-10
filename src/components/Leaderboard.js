import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {
	render() {
		return (
			<div>
				<ul>
					<li>Hola</li>
					<li>Como</li>
					<li>Estas</li>
				</ul>
			</div>
		)
	}
}

export default connect()(Leaderboard)
