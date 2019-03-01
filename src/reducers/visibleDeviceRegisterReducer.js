import { SET_VISIBLE_FORM } from './../actions/DeviceActions'

const visibleFormReducer = (state = false, action) => {
	switch (action.type) {
		case SET_VISIBLE_FORM:
			return action.payload
		default:
			return state
	}
}

export default visibleFormReducer