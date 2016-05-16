import 'babel-polyfill'
import {
    takeEvery
} from 'redux-saga'

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../../source/actions/login.js'

import {
    watchRequestLogin,
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
});