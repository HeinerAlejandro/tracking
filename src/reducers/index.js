import registerReducer from './registerReducer'
import authenticateReducer from './authenticateReducer'
import visibleLoginReducer from './visibleLoginReducer'
import { combineReducers } from 'redux'

const ManagerReducer = combineReducers({
	visible_login : visibleLoginReducer,
	registration : registerReducer,
	authentication : authenticateReducer
}) 

export default ManagerReducer