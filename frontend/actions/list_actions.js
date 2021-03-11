import * as APIUtil from '../util/list_api_util'

export const RECEIVE_LISTS = 'RECEIVE_LISTS'

const receiveLists = lists => ({
    type: RECEIVE_LISTS,
    lists: lists
}) 

export const fetchLists = () => dispatch => (
    APIUtil.fetchLists()    
    .then(lists => dispatch(receiveLists(lists.lists)),
    err=> dispatch(receiveErrors(err)))
)

export const createList = (listForm) => dispatch => (
    APIUtil.createList(listForm)
    .then(lists => dispatch(receiveLists(lists.lists)),
    err=> dispatch(receiveErrors(err)))
)

export const destroyList = (list) => dispatch => (
    APIUtil.destroyList(list)
    .then(lists => dispatch(receiveLists(lists.lists)),
    err=> dispatch(receiveErrors(err)))
)

export const updateList = (list) => dispatch => (
    APIUtil.updateList(list)
    .then(lists => dispatch(receiveLists(lists.lists)),
    err=> dispatch(receiveErrors(err)))
)