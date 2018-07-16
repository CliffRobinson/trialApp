import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

import {createStore} from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

const store = createStore(reducers)

document.addEventListener('DOMContentLoaded', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('app')
    )
})