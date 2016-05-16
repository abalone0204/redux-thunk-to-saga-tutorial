import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import store from './store.js'
import Root from './containers/Root.js'

ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('container')
)