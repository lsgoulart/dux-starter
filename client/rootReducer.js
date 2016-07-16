import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import posts from './modules/posts/dux'

const rootReducer = combineReducers({
    posts,
    routing: routerReducer
})

export default rootReducer
