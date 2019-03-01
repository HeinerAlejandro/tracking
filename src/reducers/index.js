import registerReducer from './registerReducer'
import authenticateReducer from './authenticateReducer'
import visibleLoginReducer from './visibleLoginReducer'
import addDeviceReducer from './addDeviceReducer'
import selectDeviceReducer from './selectDeviceReducer'
import visibleResetPasswordReducer from './visibleResetPasswordReducer'
import sendingEmailResetPassword from './sendingEmailResetPasswordReducer'
import setpReducer from './StepReducer'
import filterSearchReducer from './FilterSearchDeviceReducer'
import visibleFormReducer from './visibleDeviceRegisterReducer'
import userDataReducer from './userDataReducer'

import { combineReducers } from 'redux'

const ManagerReducer = combineReducers({
	data_user : userDataReducer,
	current : setpReducer,
	visible_reset_password : visibleResetPasswordReducer,
	sending_email : sendingEmailResetPassword,
	visible_login : visibleLoginReducer,
	registration : registerReducer,
	authentication : authenticateReducer,
	devices : addDeviceReducer,
	device_selected : selectDeviceReducer,
	filter_search : filterSearchReducer,
	visible_form_device : visibleFormReducer
}) 

export default ManagerReducer