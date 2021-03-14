import * as APIUtil from '../util/task_api_util'

export const RECEIVE_LISTS = 'RECEIVE_LISTS'
export const RECEIVE_TASK = 'RECEIVE_TASK'

const receiveLists = lists => ({
    type: RECEIVE_LISTS,
    lists: lists
}) 

const receiveTask = (task) => ({
    type: RECEIVE_TASK,
    task
})


export const createTask = (taskForm) => dispatch => (
    APIUtil.createTask(taskForm)
    .then(lists => dispatch(receiveLists(lists.lists)),
    err=> dispatch(receiveErrors(err)))
)

export const deleteTask = task => dispatch => {
    APIUtil.deleteTask(task)
    .then(lists => dispatch(receiveLists(lists.lists)),
    err=> dispatch(receiveErrors(err)))
}

export const updateTask = (taskForm) => dispatch => (
    APIUtil.updateTask(taskForm)
    .then(lists => dispatch(receiveLists(lists.lists)),
    err=> dispatch(receiveErrors(err)))
)

export const fetchTask = (task_id) => dispatch => (
    APIUtil.fetchTask(task_id)
    .then(task => dispatch(receiveTask(task)),
    err=> dispatch(receiveErrors(err)))
)

