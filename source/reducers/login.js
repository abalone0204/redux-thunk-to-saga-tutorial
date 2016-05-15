import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../actions/login.js'

export default function login(state = {
    status: 'init'
}, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                status: 'loading'
            })
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                status: 'logined',
                username: action.response.username,
                token: action.response.token
            })
        case LOGIN_ERROR:
            return Object.assign({}, state,{
                status: 'error',
                error: action.error
            })
        default:
            return state
    }
}