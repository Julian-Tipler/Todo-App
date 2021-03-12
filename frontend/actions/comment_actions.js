import * as APIUtil from '../util/comment_api_util'

export const RECEIVE_LISTS = 'RECEIVE_LISTS'

const receiveLists = lists => ({
    type: RECEIVE_LISTS,
    lists: lists
}) 

export const createComment = (commentForm) => dispatch => {
    APIUtil.createComment(commentForm)
    .then(lists => dispatch(receiveLists(lists.lists)),
    err=> dispatch(receiveErrors(err)))
}