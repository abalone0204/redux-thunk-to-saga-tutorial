import React from 'react'
import {
  connect
} from 'react-redux'
import Login from '../components/Login'
import Loading from '../components/Loading'
import User from '../components/User'
import Container from '../components/Container'
import {loginRequest} from '../actions/login.js'

class App extends React.Component {
    render() {
        const {login, dispatch} = this.props 
        const {status, username, token,error} = login
        const sendLoginRequest = ({username, password}) => dispatch(loginRequest({username, password}))
        return (
        <Container>
            {
                status ==='init' ? 
                    <Login sendLoginRequest={sendLoginRequest}/> :
                status ==='loading' ? 
                    <Loading/> : 
                status === 'logined' ? 
                    <User {...{username, token}}/> :
                status === 'error' ? 
                    <div>{error}</div> : null
            }
        </Container>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const {login} = state
    return {login}
}

export default connect(mapStateToProps)(App)