import URLSearchParams from "url-search-params";
import {URL_SERVER, 
		CLIENT_ID_DJANGO,
		CLIENT_SECRET_DJANGO, 
		BACKENDS_PROVIDER,
		CODES_OPERATIONS} from './../constants/withTokens'

import readObjectResponseOperation from './../services'

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

//se debe agregar la funcion de accion
const ADD_DEVICE = 'ADD_DEVICE'
const SELECT_DEVICE = 'SELECT_DEVICE'

const setAuthenticating = playload => ({type : SET_AUTHENTICATING, playload})
const setAuthenticated = playload => ({type : SET_AUTHENTICATED, playload})

const setRegistering = playload => ({type : SET_REGISTERING, playload})
const setRegistered = playload => ({type : SET_REGISTERED, playload})

const setVisibleLogin = playload => ({type : SET_VISIBLE_LOGIN, playload})

const setMessageOperation = payload => ({type : SET_MESSAGE, payload})

const initAuthentication = data_user => async dispatch =>{

	let headers = new Headers()

	headers.append('Content-Type', 'application/json')
	headers.append('Accept', 'application/json')

	const options = {
		method : 'POST',
		headers,
		mode : 'cors',
		body : data_user
	}

	try {

		let response = await fetch("http://127.0.0.1:8000/accounts/login/", options)

		if(!response.ok)
			throw response

		let json = await response.json()
		console.log(json)

		var message = ''

		try {
			let token_key = json['key']
			dispatch(setTokenConvertSuccess(token_key))
		} catch (error) {
			console.log("error al obtener llave")
			throw json
		}
		

		
	} catch (error) {
		console.log("en catch externo")
		let json = await error.json()
		console.log(json)
		dispatch(setMessageOperation({type : 'error', message : json.non_field_errors}))
	}	
}

const initRegistration = data_user => async dispatch => {

	var header = new Headers()

	header.append('Content-Type', 'application/json')
	header.append('Accept', 'application/json')

	const HEADER = {
		method : 'POST',
		headers: header,
		mode : 'cors',
		body : data_user
	}

	dispatch(setRegistering(true))

	console.log("enviando formulario de registro")


	try {

		const response = await fetch("http://127.0.0.1:8000/accounts/registration/", HEADER)
		const object = await response.json()

		if(!response.ok)
			throw object 

		dispatch(setMessageOperation({type : 'success', message : response.detail}))
		
	} catch (err) {
		console.log("en error")
		console.log(err)

		dispatch(setRegistering(false))
		dispatch(setRegistered(false))

		readObjectResponseOperation(err, dispatch, 'error')
	}
}

const setConvertTokenFailure = operation => dispatch => {

	dispatch(setAuthenticating(false))
	dispatch(setAuthenticated(false))
	dispatch(setMessageOperation(operation))
}

const setTokenConvertSuccess = (payload, operation) => dispatch  => {
	
	if(typeof payload == 'object'){

		let expiryDate = Math.round(new Date().getTime() / 1000) + payload.expires_in

		localStorage.setItem("access_token_converted", payload.access_token)
		localStorage.setItem("refresh_token_converted", payload.refresh_token)
		localStorage.setItem("access_token_expires_in", expiryDate)
		
	}else
		localStorage.setItem("access_token_converted", payload.access_token)

	dispatch(setMessageOperation(operation))
	
	return {
    	type: SUCCESS_TOKEN_CONVERT,
    	payload
  	}
}

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
	ADD_DEVICE,
	SELECT_DEVICE,
	setMessageOperation,
	initRegistration,
	initAuthentication,
	setVisibleLogin,
	setConvertTokenFailure,
	setTokenConvertSuccess,
	setAuthenticating,
	setAuthenticated,
	setRegistering,
	setRegistered,
	converToken
}