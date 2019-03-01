import { SET_VISIBLE_RESET_PASSWORD } from './../../actions/LoginRegisterAction'

const visibleResetPasswordReducer = (state = false, action) => {
	switch (action.type) {
		case SET_VISIBLE_RESET_PASSWORD:
			return action.payload
		default:
			return state
	}
}

export default visibleResetPasswordReducer