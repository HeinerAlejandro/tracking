import registerReducer from './registerReducer'
import authenticateReducer from './authenticateReducer'
import visibleLoginReducer from './visibleLoginReducer'
import messageOperationReducer from './mesageOperationReducer'
import addDeviceReducer from './addDeviceReducer'
import selectDeviceReducer from './selectDeviceReducer'
import { combineReducers } from 'redux'

const ManagerReducer = combineReducers({
	message_operation : messageOperationReducer,
	visible_login : visibleLoginReducer,
	registration : registerReducer,
	authentication : authenticateReducer,
	devices : addDeviceReducer,
	device_selected : selectDeviceReducer
}) 

export default ManagerReducer