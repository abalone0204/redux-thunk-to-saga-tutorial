import {loginAPI} from '../API'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export function loginRequest({username, password}) {
    return {
        type: LOGIN_REQUEST,
        username,
        password
    }
}

export function loginSucess(response) {
    return {
        type: LOGIN_SUCCESS,
        response
    }
}

export function loginError(error) {
    return {
        type: LOGIN_ERROR,
        error
    }
}