import {
    takeEvery
} from 'redux-saga'
import {
    call,
    put
} from 'redux-saga/effects'

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../actions/login.js'

import {
    loginAPI
} from '../API'

export function* watchRequestLogin() {
    yield takeEvery(LOGIN_REQUEST, loginFlow)
}

export function* loginFlow(action) {
    try {
        const response = yield call(loginAPI, {
            username: action.username,
            password: action.password
        })
        yield put({
            type: LOGIN_SUCCESS,
            response
        })
    } catch (error) {
        yield put({
            type: LOGIN_ERROR,
            error
        })
    }
}