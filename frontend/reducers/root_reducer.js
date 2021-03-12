import { combineReducers } from 'redux'
import listsReducer from './lists_reducer'
import modalReducer from './modal_reducer'
import taskReducer from './task_reducer'

const rootReducer = combineReducers({
    lists: listsReducer,
    modal: modalReducer,
    task: taskReducer
})

export default rootReducer