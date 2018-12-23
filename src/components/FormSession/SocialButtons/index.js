import React from 'react'
import GoogleSocialLogin from 'react-google-login'
import { Icon } from 'antd'
import './styles.css'

const ContentSocialButtons = ({successProvider, successFailure, google_icon}) => {
	return(
		<div>
			<GoogleSocialLogin
			    clientId="254472747355-6umtrkcedqn00tg7ec17l705ftttam0r.apps.googleusercontent.com"
			    onSuccess={successProvider}
			    onFailure={successFailure}
				icon = {false}
			    className="login-button login-button-google"
			    prompt="Cuenta de usuario"
			    redirectUri="http://localhost:3000/account/" >

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