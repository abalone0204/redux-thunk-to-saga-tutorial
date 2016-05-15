import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'

class User extends React.Component {
    render() {
        const {username, token} = this.props
        return (
            <div styleName='user'>
                <div styleName='info'>
                    username: {username}
                </div>
                <div styleName='info'>
                    token: {token}
                </div>
            </div>

            )
    }
}

export default CSSModules(User, styles)