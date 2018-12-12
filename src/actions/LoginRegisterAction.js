import URLSearchParams from "url-search-params";
import {URL_SERVER, CLIENT_ID_DJANGO, CLIENT_SECRET_DJANGO, BACKENDS_PROVIDER} from './../constants/withTokens'

const SET_USER_LOG = 'SET_USER_LOG'

const SET_VISIBLE_LOGIN = 'SET_VISIBLE_LOGIN'

const SET_REGISTERING = 'SET_REGISTERING'
const SET_AUTHENTICATING = 'SET_AUTHENTICATING'

const SET_REGISTERED = 'SET_REGISTERED'
const SET_AUTHENTICATED = 'SET_AUTHENTICATED'

const SUCCESS_TOKEN_CONVERT = 'CONVERT_TOKEN_SUCCESS'
const FAILURE_TOKEN_CONVERT = 'FAILURE_TOKEN_CONVERT'

const REGISTER_USER = 'REGISTER_USER'

const setAuthenticating = playload => ({type : SET_AUTHENTICATING, playload})
const setAuthenticated = playload => ({type : SET_AUTHENTICATED, playload})

const setRegistering = playload => ({type : SET_REGISTERING, playload})
const setRegistered = playload => ({type : SET_REGISTERED, playload})

const setTokenConvertSuccess = payload => {

	let expiryDate = Math.round(new Date().getTime() / 1000) + payload.expires_in

	localStorage.setItem("access_token_converted", payload.access_token)
  	localStorage.setItem("refresh_token_converted", payload.refresh_token)
 	localStorage.setItem("access_token_expires_in", expiryDate)

	return {
    	type: SUCCESS_TOKEN_CONVERT,
    	payload
  	}
}

const converToken = acces_token => dispatch => {
	const searchParams = new URLSearchParams()
	console.log("token extraido")
	console.log(acces_token)
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
				//dispatch(setTokenConvertFailure(data))
				console.log("hubo el error: "+err)
	    	   dispatch(setAuthenticating(false))
	 		   dispatch(setAuthenticated(false))
	    	})
			      
}

const register = data_user_registering => dispatch => {
	dispatch(setRegistering(true))

	fetch('${URL_SERVER}/')
		.then( response => response.json())
		.then( status => setAuthenticated(status.complete))
		.catch( err => setAuthenticated(false))

	dispatch(setRegistering(false))
}

export {
	SET_USER_LOG,
	SET_VISIBLE_LOGIN,
	SET_REGISTERING,
	SET_AUTHENTICATING,
	SET_REGISTERED,
	SET_AUTHENTICATED,
	REGISTER_USER,
	SUCCESS_TOKEN_CONVERT,
	FAILURE_TOKEN_CONVERT,
	setAuthenticating,
	setAuthenticated,
	setRegistering,
	setRegistered,
	converToken,
	register
}