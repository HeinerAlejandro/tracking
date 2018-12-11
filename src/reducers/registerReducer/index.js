import {
 SET_REGISTERING,
 SET_REGISTERED } from './../../actions/LoginRegisterAction'

const initialState = {
	is_registering : false,
	is_registered : false,
}

const registerReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_REGISTERING:

			return {...state, is_registering : action.payload}
		case SET_REGISTERED:

			return {...state, is_registered : action.payload}	
		default:

			return state
	}
}

export default registerReducer