import URLSearchParams from "url-search-params";

import { message } from 'antd'
import {URL_SERVER, 
		CLIENT_ID_DJANGO,
		CLIENT_SECRET_DJANGO, 
		BACKENDS_PROVIDER,
		CODES_OPERATIONS} from './../constants/withTokens'

import {
	readObjectResponseOperation,
	showMessage } from './../services'


import { RouteDashboard } from '../Routes/AccountRouter'

const SET_USER_LOG = 'SET_USER_LOG'

const SET_VISIBLE_RESET_PASSWORD = 'SET_VISIBLE_RESET_PASSWORD'

const SET_VISIBLE_LOGIN = 'SET_VISIBLE_LOGIN'

const SET_REGISTERING = 'SET_REGISTERING'
const SET_AUTHENTICATING = 'SET_AUTHENTICATING'

const SET_REGISTERED = 'SET_REGISTERED'
const SET_AUTHENTICATED = 'SET_AUTHENTICATED'

const SUCCESS_TOKEN_CONVERT = 'CONVERT_TOKEN_SUCCESS'
const FAILURE_TOKEN_CONVERT = 'FAILURE_TOKEN_CONVERT'

const REGISTER_USER = 'REGISTER_USER'

const SET_MESSAGE = 'SET_MESSAGE'

const SET_STEP = 'SET_STEP'

const SENT_EMAIL_RESET_PASSWORD = 'SENT_EMAIL_RESET_PASSWORD'
const SENDING_EMAIL_RESET_PASSWORD = 'SENDING_EMAIL_RESET_PASSWORD'

const setUser = payload => ({ type : SET_USER_LOG, payload })

const setUserLog = async (data_user, social = false) => {

	const { email } = data_user

	try {

		let token = localStorage.getItem('token')

		let data_request = {
			method : 'GET',
			headers : {
				Accept : 'application/json',
				Authorization : `Bearer ${BACKENDS_PROVIDER.GOOGLE} ${token}`
			}
		}

		const response = await fetch('http://127.0.0.1:8000/users/' + email, data_request)

		console.log("respuesta en user")

		if(!response.ok)
			throw CODES_OPERATIONS.True.LOGIN_OPERATION

		const data = await response.json()

		data_user.super_user = data.is_superuser
		console.log("respuesta exitosa")
		return data_user

	} catch (error) {
		throw error
	}
	
}

const sendingEmailResetPassword = payload => ({type : SENDING_EMAIL_RESET_PASSWORD, payload})

const setStep = payload => ({type : SET_STEP, payload})

const setAuthenticating = payload => ({type : SET_AUTHENTICATING, payload})
const setAuthenticated = payload => ({type : SET_AUTHENTICATED, payload})

const setRegistering = payload => ({type : SET_REGISTERING, payload})
const setRegistered = payload => ({type : SET_REGISTERED, payload})

const setVisibleResetPassword = payload => ({type : SET_VISIBLE_RESET_PASSWORD, payload})

const setVisibleLogin = payload => ({type : SET_VISIBLE_LOGIN, payload})


const getObjectLocation = (pathname, search = null, query = null, state = {}) => ({
	pathname,
	search,
	query,
	state
})

const initSocialAuthentication = data_social => async dispatch => {

	dispatch(setAuthenticating(true))

	try {
		 
		let data = await converToken(data_social.Zi.access_token)
		console.log(data)
		setTokenConvertSuccess(data)
		localStorage.setItem("token", data_social.Zi.access_token)
		console.log("despues de success")
		dispatch(setAuthenticating(false))
		dispatch(setAuthenticated(true))
		console.log("antes de setUserLog")
		let data_user_complete = await setUserLog(data_social.profileObj, true)
		console.log("despues de setUserLog")
		console.log(data_user_complete)
		dispatch(setUser(data_user_complete))

		return true

	} catch (error) {
		return false
	}	
}

const initAuthentication = (data_user, push) => async dispatch => {

	let headers = new Headers()

	headers.append('Content-Type', 'application/json')
	headers.append('Accept', 'application/json')

	const options = {
		method : 'POST',
		headers,
		mode : 'cors',
		body : data_user
	}

	dispatch(setAuthenticating(true))

	try {

		let response = await fetch("http://127.0.0.1:8000/accounts/login/", options)

		if(!response.ok)
			throw response

		let json = await response.json()
		
		try {
			let token_key = json['key']
			
			console.log(token_key)

			setTokenConvertSuccess(token_key, null)
			dispatch(setAuthenticated(true))

			let location = getObjectLocation(RouteDashboard)

			dispatch(push(location))

		} catch (error) {
			console.log("error al obtener llave")
			throw json
		}
	
	} catch (error) {
		console.log("en catch externo")
		let json = await error.json()
		console.log(json)
		showMessage({type : 'error', message : json.non_field_errors})
	}	

	dispatch(setAuthenticating(false))
}

const sendUuidResetPassword = data => async dispatch => {
	const header = new Headers()
	header.append('Content-Type', 'application/json')

	try{
		const response = await fetch('http://127.0.0.1:8000/accounts/password/reset/confirm/', {
									method : 'POST',
									mode : 'cors',
									headers: header,
									body : data
								})

		

		if(!response.ok)
			throw response

		const json = await response.json()
								
		message.success(json.detail)

	}catch(err){
		console.log(await err.json())
	}
	
}

const sendEmailResetPassword = email => async dispatch => {
	
	dispatch(sendingEmailResetPassword(true))

	const header = new Headers()
	header.append('Content-Type', 'application/json')

	try{
	
		const response = await fetch('http://127.0.0.1:8000/accounts/password/reset/', {
									method : 'POST',
									mode : 'cors',
									headers: header,
									body : email
								})

		

		if(!response.ok)
			throw response

		const json = await response.json()
								
		message.success(json.detail)
		
		dispatch(sendingEmailResetPassword(false))							
		dispatch(setStep(1))

	}catch(err){

		dispatch(sendingEmailResetPassword(false))
		
		console.log(await err.json())
			
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


		showMessage({type : 'success', message : response.detail})

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
	operation && showMessage(operation)
}

const setTokenConvertSuccess = (payload, operation) => {


	const keys = Object.keys(payload)

	if(keys.length > 1){
		console.log("en object token")
		let expiryDate = Math.round(new Date().getTime() / 1000) + payload.expires_in

		localStorage.setItem("access_token_converted", payload.access_token)
		localStorage.setItem("refresh_token_converted", payload.refresh_token)
		localStorage.setItem("access_token_expires_in", expiryDate)
		
	}else{
		console.log("en token")
		localStorage.setItem("access_token_converted", payload)
		
	}	
	
	operation && showMessage(operation)

	console.log("al final de la funcionn de conver token success")
}

const converToken = async access_token  => {
	console.log("convirtiendo token")
	console.log(access_token)
	const searchParams = new URLSearchParams()
	
	searchParams.set("grant_type", "convert_token");
    searchParams.set("client_id", CLIENT_ID_DJANGO);
    searchParams.set("client_secret", CLIENT_SECRET_DJANGO);
    searchParams.set("backend", BACKENDS_PROVIDER.GOOGLE);
    searchParams.set("token", access_token);

	
	let headers = {
    	method: "POST",
       	headers: {
        	Accept: "application/json",
        	"Content-Type": "application/x-www-form-urlencoded"
       	},
		body: searchParams
	}

	try{
		const response = await fetch("http://127.0.0.1:8000/auth/convert-token", headers)
		

		if(!response.ok){
			console.log(await response.json())
			throw CODES_OPERATIONS.True.LOGIN_OPERATION
		}

		let data = await response.json()
		
		console.log("exitoso conversion")
		return data
	
	}catch(error) {
		console.log("en errode conver token")
		throw error
	}	      
}


export {
	SET_USER_LOG,
	SENT_EMAIL_RESET_PASSWORD,
	SENDING_EMAIL_RESET_PASSWORD,
	SET_VISIBLE_RESET_PASSWORD,
	SET_VISIBLE_LOGIN,
	SET_MESSAGE,
	SET_REGISTERING,
	SET_AUTHENTICATING,
	SET_REGISTERED,
	SET_AUTHENTICATED,
	REGISTER_USER,
	SUCCESS_TOKEN_CONVERT,
	FAILURE_TOKEN_CONVERT,
	SET_STEP,
	setUserLog,
	setStep,
	initRegistration,
	initSocialAuthentication,
	initAuthentication,
	sendingEmailResetPassword,
	sendUuidResetPassword,
	sendEmailResetPassword,
	setVisibleResetPassword,
	setVisibleLogin,
	setConvertTokenFailure,
	setTokenConvertSuccess,
	setAuthenticating,
	setAuthenticated,
	setRegistering,
	setRegistered,
	converToken
}