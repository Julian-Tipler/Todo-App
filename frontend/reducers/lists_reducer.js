import { RECEIVE_LISTS } from '../actions/list_actions'

const listsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LISTS:
            return Object.assign({}, action.lists)
        default:
            return state;
    }
}

export default listsReducer