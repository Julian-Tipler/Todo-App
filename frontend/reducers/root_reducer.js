import { combineReducers } from 'redux'
import listsReducer from './lists_reducer'
import modalReducer from './modal_reducer'

const rootReducer = combineReducers({
    lists: listsReducer,
    modal: modalReducer
})

export default rootReducer