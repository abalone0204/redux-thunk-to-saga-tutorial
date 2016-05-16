import 'babel-polyfill'
import {
    takeEvery
} from 'redux-saga'
import {
    createMockTask
} from 'redux-saga/utils'
import {
    call,
    put,
    fork,
    take,
    cancel
} from 'redux-saga/effects'
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGIN_CANCEL
} from '../../source/actions/login.js'

import {
    loginAPI
} from '../../source/API'
import {
    watchRequestLogin,
    authorize,
    loginFlow
} from '../../source/sagas/login.js'

import {
    assert
} from 'chai'

describe('Sagas/ login', () => {
    describe('watchRequestLogin', () => {
        const generator = watchRequestLogin()
        it('should take every login request', () => {
            const expected = takeEvery(LOGIN_REQUEST, loginFlow)
            const actual = generator.next().value
            assert.equal(expected.name, actual.name)
        })
    })
    describe('loginFlow', () => {
        const generator = loginFlow({
            type: LOGIN_REQUEST,
            username: 'denny',
            password: '12345678'
        })
        const task = createMockTask()

        it('should fork a authorize test', () => {
            const expected = fork(authorize, {
                username: 'denny',
                password: '12345678'
            })
            const actual = generator.next().value
            assert.deepEqual(expected, actual)
        })

        it('should take cancel login action', () => {
            const expected = take(LOGIN_CANCEL)
            const actual = generator.next(task).value
            assert.deepEqual(expected, actual)
        })

        it('should cancel the login task', () => {
            const expected = cancel(task)
            const actual = generator.next().value
            assert.deepEqual(expected, actual)
        })
    })
    describe('Authorize', () => {
        const generator = authorize({
            username: 'denny',
            password: '12345678'
        })
        
        it('should call loginAPI', () => {
            const expected = call(loginAPI, {
                username: 'denny',
                password: '12345678'
            })
            const actual = generator.next().value
            assert.deepEqual(expected, actual)
        })

        it('should handle login success', () => {
            const getResponse = () => ({
                username: 'denny',
                token: 'fake token'
            })
            const expected = put({
                type: LOGIN_SUCCESS,
                response: {
                    username: 'denny',
                    token: 'fake token'
                }
            })
            const actual = generator.next(getResponse()).value
            assert.deepEqual(expected, actual)
        })

        it('should handle login error', () => {
            const error = 'error message'
            const expected = put({
                type: LOGIN_ERROR,
                error: 'error message'
            })
            const actual = generator.throw(error).value
            assert.deepEqual(expected, actual)
        })
    })
});