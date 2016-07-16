import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './../dux'

import { PostList } from './../components'

const Posts = ({ posts, actions }) => (
  <div>
    <h1>Posts</h1>
    <hr />
    <PostList posts={ posts } actions={ actions } />
  </div>
)

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  posts: state.posts
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)
