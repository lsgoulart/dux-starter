/* eslint no-unused-expressions: 0 */
import { expect } from 'chai'
import * as actions from './dux'

describe('actions', () => {
  it('create should create CREATE action', () => {
    expect(actions.createPost({})).to.deep.equal({ type: actions.CREATE, payload: {} })
  })

  it('remove should create REMOVE action', () => {
    expect(actions.removePost({})).to.deep.equal({ type: actions.REMOVE, payload: {} })
  })

  it('update should create UPDATE action', () => {
    expect(actions.updatePost({})).to.deep.equal({ type: actions.UPDATE, payload: {} })
  })
})
