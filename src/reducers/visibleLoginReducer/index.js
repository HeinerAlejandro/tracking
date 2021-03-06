import { SET_VISIBLE_LOGIN } from './../../actions/LoginRegisterAction'

const visibleLoginReducer = (state = true, action) => {
	switch (action.type) {
		case SET_VISIBLE_LOGIN:
			return action.payload
		default:
			return state
	}
}

export default visibleLoginReducer