import React from 'react'


class User extends React.Component {
    render() {
        const {username, token} = this.props
        return (
            <div>
                <div>
                    username: {username}
                </div>
                <div>
                    token: {token}
                </div>
            </div>

            )
    }
}

export default User