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

	searchParams.set("grant_type", "convert_token");
    searchParams.set("client_id", CLIENT_ID_DJANGO);
    searchParams.set("client_secret", CLIENT_SECRET_DJANGO);
    searchParams.set("backend", BACKENDS_PROVIDER.GOOGLE);
    searchParams.set("token", acces_token);

   
    dispatch(setAuthenticating(true))
    fetch('${URL_SERVER}/auth/convert_token',{
    	method: "POST",
       	headers: {
        	Accept: "application/json",
        	"Content-Type": "application/x-www-form-urlencoded"
       	},
        body: searchParams})
	    	.then( json => json.json())
	    	.then( data => {
	    		console.log(data)
	    		dispatch(setTokenConvertSuccess(data.acces_token))
	    		dispatch(setAuthenticating(false))
	    		dispatch(setAuthenticated(true))})
	    	.catch( err => {
	    		//dispatch(setTokenConvertFailure(data))
	    	   dispatch(setAuthenticating(false))
	 		   dispatch(setAuthenticated(false))
	    	})
			      
}

export {
	SET_USER_LOG,
	SET_VISIBLE_LOGIN,
	SET_REGISTERING,
	SET_AUTHENTICATING,
	SET_REGISTERED,
	SET_AUTHENTICATED,
	SUCCESS_TOKEN_CONVERT,
	FAILURE_TOKEN_CONVERT,
	setAuthenticating,
	setAuthenticated,
	setRegistering,
	setRegistered,
	converToken
}