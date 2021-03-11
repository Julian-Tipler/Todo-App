import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const modalReducer = (oldState = {modal: null, id: null, list_id: null}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case OPEN_MODAL:
            return {modal: action.modal, id: action.id, list_id: action.list_id};
        case CLOSE_MODAL:
            return null
        default:
            return oldState;
    }
}

export default modalReducer