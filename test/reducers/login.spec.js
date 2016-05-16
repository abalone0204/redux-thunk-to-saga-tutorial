import expect from 'expect'

import login from '../../source/reducers/login.js'
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGIN_CANCEL
} from '../../source/actions/login.js'


describe('Reducers/ login', () => {
    function getInitState() {
        return {
            status: 'init'
        }
    }
    let state = {}
    beforeEach(() => {
        state = getInitState();
    })

    it('should handle initial state', () => {
        expect(
            login(state, {})
        ).toEqual({
            status: 'init'
        })
    })

    it('should handle request login', () => {
        expect(
            login(state, {
                type: LOGIN_REQUEST
            })
        ).toEqual({
            status: 'loading'
        })
    })

    it('should handle login success', () => {
        expect(
            login(state, {
                type: LOGIN_SUCCESS,
                response: {
                    username: 'denny',
                    token: '123123123123'
                }
            })
        ).toEqual({
            status: 'logined',
            username: 'denny',
            token: '123123123123'
        })
    })

    it('should handle login error', () => {
        expect(
            login(state, {
                type: LOGIN_ERROR,
                error: 'error message'
            })
        ).toEqual({
            status: 'error',
            error: 'error message'
        })
    })

    it('shoudld handle login cancel',  ()=> {
        expect(
            login(state, {
                type: LOGIN_CANCEL,
            })
        ).toEqual({
            status: 'init'
        })
    })

})