import URLSearchParams from "url-search-params";
import {URL_SERVER, 
		CLIENT_ID_DJANGO,
		CLIENT_SECRET_DJANGO, 
		BACKENDS_PROVIDER,
		CODES_OPERATIONS} from './../constants/withTokens'

const SET_USER_LOG = 'SET_USER_LOG'

const SET_VISIBLE_LOGIN = 'SET_VISIBLE_LOGIN'

const SET_REGISTERING = 'SET_REGISTERING'
const SET_AUTHENTICATING = 'SET_AUTHENTICATING'

const SET_REGISTERED = 'SET_REGISTERED'
const SET_AUTHENTICATED = 'SET_AUTHENTICATED'

const SUCCESS_TOKEN_CONVERT = 'CONVERT_TOKEN_SUCCESS'
const FAILURE_TOKEN_CONVERT = 'FAILURE_TOKEN_CONVERT'

const REGISTER_USER = 'REGISTER_USER'

const SET_MESSAGE = 'SET_MESSAGE'

const setAuthenticating = playload => ({type : SET_AUTHENTICATING, playload})
const setAuthenticated = playload => ({type : SET_AUTHENTICATED, playload})

const setRegistering = playload => ({type : SET_REGISTERING, playload})
const setRegistered = playload => ({type : SET_REGISTERED, playload})

const setMessageOperation = payload => ({type : SET_MESSAGE, payload})

const initRegistration = data_user => dispatch => {

	const HEADER = {
		method : 'POST',
		headers : {
			accept : 'application/json'
		},
		body : data_user
	}

	dispatch(setRegistering(true))

	console.log("enviando formulario de registro")

	fetch("http://127.0.0.1:8000/account/registration", HEADER)
		.then( response => response.json())
		.then( ({access_token, status}) => {
			dispatch(setRegistering(!status))
			dispatch(setRegistered(status))
			dispatch(setTokenConvertSuccess(access_token, { type : 'success', 'message' : CODES_OPERATIONS.True.REGISTER_OPERATION}))
		}).catch( err => {
			dispatch(setRegistering(false))
			dispatch(setRegistered(false))
			dispatch(setMessageOperation({type : 'error' , message : CODES_OPERATIONS.False.REGISTER_OPERATION}))
		})
}

const setConvertTokenFailure = operation => dispatch => {
	//2 alternativas: ajustar el setMessageOperation a el playload que es un objeto de tipo err
	//o definir como constantes los tipos de errores
	dispatch(setAuthenticating(false))
	dispatch(setAuthenticated(false))
	dispatch(setMessageOperation(operation))
}

const setTokenConvertSuccess = (payload, operation) => dispatch  => {

	let expiryDate = Math.round(new Date().getTime() / 1000) + payload.expires_in

	localStorage.setItem("access_token_converted", payload.access_token)
  	localStorage.setItem("refresh_token_converted", payload.refresh_token)
 	localStorage.setItem("access_token_expires_in", expiryDate)

	dispatch(setMessageOperation(operation))
	
	return {
    	type: SUCCESS_TOKEN_CONVERT,
    	payload
  	}
}

// ACABO DE HACER MODIFICACIONES EN ESTE ARCHIVO...VE LA CONSOLA
const converToken = acces_token => dispatch => {
	const searchParams = new URLSearchParams()
	
	searchParams.set("grant_type", "convert_token");
    searchParams.set("client_id", CLIENT_ID_DJANGO);
    searchParams.set("client_secret", CLIENT_SECRET_DJANGO);
    searchParams.set("backend", BACKENDS_PROVIDER.GOOGLE);
    searchParams.set("token", acces_token);

	dispatch(setAuthenticating(true))
	
    fetch("http://127.0.0.1:8000/auth/convert-token",{
    	method: "POST",
       	headers: {
        	Accept: "application/json",
        	"Content-Type": "application/x-www-form-urlencoded"
       	},
        body: searchParams})
	    	.then( json => json.json())
	    	.then( data => {
				console.log("el token de autenticacion en el server es:")
				console.log(data)
	    		dispatch(setTokenConvertSuccess(data))
	    		dispatch(setAuthenticating(false))
	    		dispatch(setAuthenticated(true))})
	    	.catch( err => {
				dispatch(setConvertTokenFailure({ type : 'error', message : CODES_OPERATIONS.False.LOGIN_OPERATION}))
	    	})
			      
}


export {
	SET_USER_LOG,
	SET_VISIBLE_LOGIN,
	SET_MESSAGE,
	SET_REGISTERING,
	SET_AUTHENTICATING,
	SET_REGISTERED,
	SET_AUTHENTICATED,
	REGISTER_USER,
	SUCCESS_TOKEN_CONVERT,
	FAILURE_TOKEN_CONVERT,
	setMessageOperation,
	initRegistration,
	setConvertTokenFailure,
	setTokenConvertSuccess,
	setAuthenticating,
	setAuthenticated,
	setRegistering,
	setRegistered,
	converToken
}