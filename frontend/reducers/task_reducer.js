import { RECEIVE_TASK } from '../actions/task_actions'

const taskReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TASK:
            return Object.assign({}, action.task)
        default:
            return state;
    }
}

export default taskReducer