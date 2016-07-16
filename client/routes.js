import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import store, { history } from './configStore'

import { MainLayout } from './modules/core/components'
import { Posts } from './modules/posts/containers'

const router = () => (
  <Router history={ history }>
    <Route path="/" component={ MainLayout }>
      <IndexRoute components={{ main: Posts }} />
    </Route>
  </Router>
)

export default router
