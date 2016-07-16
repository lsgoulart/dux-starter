import React, { Component } from 'react'
import { PostItem } from './'

const PostList = ({ posts, actions }) => (
  <div>
    { posts.map((post) => <PostItem key={ post.id } post={ post } actions={ actions } />) }
  </div>
)

export default PostList
