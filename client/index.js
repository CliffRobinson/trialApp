import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

import {createStore, compose, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

const store = createStore(reducers, compose(
    applyMiddleware(thunk)
))

document.addEventListener('DOMContentLoaded', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('app')
    )
})