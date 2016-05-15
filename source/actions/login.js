import {loginAPI} from '../API'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export function loginRequest() {
    return {
        type: LOGIN_REQUEST
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

export function loginFlow({username, password}) {
    return (dispatch) => {
        dispatch(loginRequest())
        loginAPI({username, password})
            .then(response => {
                dispatch(loginSucess(response))    
            })
            .catch(error => {
                dispatch(loginError(error))
            })
    }
}