import { combineReducers } from 'redux'
import listsReducer from './lists_reducer'

const rootReducer = combineReducers({
    lists: listsReducer
})

export default rootReducer