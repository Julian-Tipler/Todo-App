import * as APIUtil from '../util/list_api_util'

export const RECEIVE_LISTS = 'RECEIVE_LISTS'

const receiveLists = lists => ({
    type: RECIEVE_LISTS,
    lists
}) 

export const fetchLists = () => dispatch => {
    APIUtil.fetchLists()
    .then(lists => dispatch(receiveLists(lists)),
    err=> dispatch(receiveErrors(err)))
}
