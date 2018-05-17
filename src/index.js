import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './store'
import App from './App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Provider } from 'react-redux'
import Auth from './components/Auth'

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Auth >
                <App />
            </Auth>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'))



