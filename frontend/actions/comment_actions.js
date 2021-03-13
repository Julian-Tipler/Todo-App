import * as APIUtil from '../util/comment_api_util'
export const RECEIVE_TASK = 'RECEIVE_TASK'

const receiveTask = (task) => ({
    type: RECEIVE_TASK,
    task
})

export const createComment = (commentForm) => dispatch => (
    APIUtil.createComment(commentForm)
    .then(task => dispatch(receiveTask(task)),
    err=> dispatch(receiveErrors(err)))
)