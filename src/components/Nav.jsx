import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { clearAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  logout = () => {
    const { dispatch } = this.props
    dispatch(clearAuthedUser())
    this.props.history.push('/')
  }

  render() {
    const { authedUser } = this.props
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/new' activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' exact activeClassName='active'>
              Leaderboard
            </NavLink>
          </li>
          {authedUser !== null && (
            <li className='auth-info'>
              <span>Welcome {authedUser.name}</span>
              <img className='avatar' src={authedUser.avatarURL} alt='' />
              <button className='btn' onClick={this.logout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser: authedUser === null ? null : users[authedUser],
  }
}

export default withRouter(connect(mapStateToProps)(Nav))
