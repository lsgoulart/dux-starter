import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store, { history } from './configStore'
import Routes from './routes'

const routes = (
  <Provider store={ store }>
    <Routes />
  </Provider>
)

render(routes, document.getElementById('root'))
