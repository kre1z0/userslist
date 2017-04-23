import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'
import '../stylesheet/core.scss'
import App from './containers/App'

// Render it to DOM
ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
