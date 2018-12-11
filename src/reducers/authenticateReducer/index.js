import {
	SET_AUTHENTICATED,
	SET_AUTHENTICATING,
	SET_USER_LOG,
	SUCCESS_TOKEN_CONVERT,
} from './../../actions/LoginRegisterAction'

const initialState = {
	is_authenticating : false,
	is_authenticated : false,
	acces_token : null,
	data_user : {}
}

const authenticateReduce = (state = initialState, action) => {
	
	switch (action.type) {
		case SET_AUTHENTICATED:
			return {...state, is_authenticated : action.payload}
		case SET_AUTHENTICATING:
			return {...state, is_authenticating : action.payload}
		case SET_USER_LOG:
			return {...state, data_user : action.payload}
		case SUCCESS_TOKEN_CONVERT:
			return {...state, acces_token : action.payload}
		default:
			return state
	}	
}

export default authenticateReduce