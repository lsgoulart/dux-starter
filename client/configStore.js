import { createStore, compose, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { posts } from './modules/configs/initial_state'

import rootReducer from './rootReducer'

const defaultState = {
  posts,
}

const store = createStore(rootReducer, defaultState, compose(
  applyMiddleware(thunk, logger()),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
))

export const history = syncHistoryWithStore(browserHistory, store)

export default store
