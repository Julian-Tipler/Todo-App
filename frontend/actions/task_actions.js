import * as APIUtil from '../util/task_api_util'

export const RECEIVE_LISTS = 'RECEIVE_LISTS'

const receiveLists = lists => ({
    type: RECEIVE_LISTS,
    lists: lists
}) 

export const createTask = (taskForm) => dispatch => {
    APIUtil.createTask(taskForm)
    .then(lists => dispatch(receiveLists(lists.lists)),
    err=> dispatch(receiveErrors(err)))
}

export const deleteTask = task => dispatch => {
    APIUtil.deleteTask(task)
    .then(lists => dispatch(receiveLists(lists.lists)),
    err=> dispatch(receiveErrors(err)))
}

export const updateTask = (task) => dispatch => (
    APIUtil.updateTask(task)
    .then(lists => dispatch(receiveLists(lists.lists)),
    err=> dispatch(receiveErrors(err)))
)