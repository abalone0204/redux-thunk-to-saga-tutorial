import React from 'react'
import {
  connect
} from 'react-redux'
import Login from '../components/Login'
import Loading from '../components/Loading'
import User from '../components/User'

import {loginFlow} from '../actions/login.js'

class App extends React.Component {
    render() {
        const {login, dispatch} = this.props 
        const {status, username, token,error} = login
        const boundLogin = ({username, password}) => dispatch(loginFlow({username, password}))
        if (status ==='init') {
            return <Login loginAction={boundLogin}/>    
        }
        if (status ==='loading') {
            return <Loading/>
        }
        if (status ==='logined') {
            return <User {...{username, token}}/>
        }
        if (status === 'error') {
            return <div>{error}</div>
        }
        
    }
}

function mapStateToProps(state, ownProps) {
    const {login} = state
    return {login}
}

export default connect(mapStateToProps)(App)