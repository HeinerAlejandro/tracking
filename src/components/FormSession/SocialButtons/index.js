import React from 'react'
import GoogleSocialLogin from 'react-google-login'
import { Icon } from 'antd'
import './styles.css'

const ContentSocialButtons = ({successProvider, successFailure, google_icon}) => {
	
	return(
		<div>
			<GoogleSocialLogin
			    clientId = "210792263208-5ph8ka5gth3dlh5bakt27c8mk3vusdqv.apps.googleusercontent.com"
			    onSuccess = {successProvider}
			    onFailure = {successFailure}
				icon = {false}
			    className = "login-button login-button-google"
			    
			    redirectUri = "https://heiner.pythonanywhere.com/account" >

				<Icon
					style = {{width : '30px'}}
					component = {google_icon}
				/>
				<span> Accede con google </span>
			</GoogleSocialLogin>
		</div>
	)
}

export default ContentSocialButtons