import React from 'react'

class Login extends React.Component {
    handleClick() {
        const {
            username,
            password
        } = this.refs
        const {
            loginAction
        } = this.props
        loginAction({
            username: username.value,
            password: password.value
        })
    }
    render() {
        const {
            loginAction
        } = this.props

        return (
            <div>
                <div>
                    <input ref='username' type="text" defaultValue='denny'/>
                </div>
                <div>
                    <input ref= 'password' type="password" defaultValue='1321313'/>
                </div>
                <button onClick={this.handleClick.bind(this)}>
                    login
                </button>
            </div>
        )
    }
}

export default Login