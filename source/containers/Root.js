import { Provider } from 'react-redux'
import React from 'react'
import App from './App.js'

const Root = ({store}) => (
    <Provider store={store}>
        <App/>
    </Provider>
    )

export default Root