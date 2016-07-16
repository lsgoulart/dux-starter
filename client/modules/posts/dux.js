export const CREATE = 'dux/posts/CREATE'
export const UPDATE = 'dux/posts/UPDATE'
export const REMOVE = 'dux/posts/REMOVE'

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case CREATE:
      return state
      break;
    case UPDATE:
      return state
      break;
    case REMOVE:
      return state.filter((post) => post.id !== action.payload.id)
      break;
    default:
      return state
  }
}

export function createPost(post) {
  return { type: CREATE, payload: post }
}

export function updatePost(post) {
  return { type: UPDATE, payload: post }
}

export function removePost(post) {
  return { type: REMOVE, payload: post }
}
