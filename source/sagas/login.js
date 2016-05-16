import {
    takeEvery
} from 'redux-saga/effects'
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../actions/login.js'

export function* watchRequestLogin() {
    yield takeEvery(LOGIN_REQUEST, loginFlow)
}

export function* loginFlow() {
    // to be done
}