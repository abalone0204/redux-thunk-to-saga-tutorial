import {
  createStore,
  applyMiddleware
} from 'redux'

import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer,
  applyMiddleware(thunkMiddleware, sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store