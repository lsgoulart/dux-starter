import React, { Component } from 'react'

class PostItem extends Component {
  render() {
    const { post, actions } = this.props
    this._removePost.bind(this)

    return (
      <div>
        <h1>{ post.title }</h1>
        <p>{ post.body }</p>
        <button onClick={ this._removePost.bind(this) }>Remove</button>
      </div>
    )
  }

  _removePost() {
    const { actions, post } = this.props;
    console.log(actions);
    actions.removePost(post)
  }
}

export default PostItem
