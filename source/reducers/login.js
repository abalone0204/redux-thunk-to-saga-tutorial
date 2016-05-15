import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../actions/login.js'

export default function login(state = { status: 'init'}, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, {status: 'loading'})
        case LOGIN_SUCCESS:
            return Object.assign({}, {status: 'logined', username: action.response.username, token:action.response.token})
        case LOGIN_ERROR:
            return Object.assign({}, {status: 'error'})
        default: return state
    }
}