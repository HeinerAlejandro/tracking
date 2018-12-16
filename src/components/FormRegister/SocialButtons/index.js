import React from 'react'
import GoogleSocialLogin from 'react-google-login'

const ContentSocialButtons = ({successProvider, successFailure}) => {
	return(
		<div>
			<GoogleSocialLogin
			    clientId="254472747355-6umtrkcedqn00tg7ec17l705ftttam0r.apps.googleusercontent.com"
			    buttonText="Accesa con Google"
			    onSuccess={successProvider}
			    onFailure={successFailure}
			    className="loginBtn loginBtn--google"
			    prompt="select_account"
				theme = 'dark'
			    redirectUri="http://localhost:3000/account/" />
		</div>
	)
}

export default ContentSocialButtons