import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import FormRegister from './../components/FormRegister'
import FormSession from './../components/FormSession'
import {converToken,
		setRegistering,
		setAuthenticating} from './../actions/LoginRegisterAction'

class LoginRegisterUserContainer extends Component{

	responseProviderSucces(response){
		console.log(response)
		console.log(this.props.actions)
		//const { converToken } = this.props
		//converToken(response)
	}

	responseProviderFailure(response){
		console.log(response)
	}

	handleSubmit(evt){
		evt.preventDefault()
		this.props.setRegistering(true)
	}

	render(){
		return(
			<Fragment>
				<FormRegister 
					succesProvider = {this.responseProviderSucces}
					succesFailure = {this.responseProviderFailure} 
					handleSubmit = {this.handleSubmit} 
					registering = {this.props.is_registering} />

				<FormSession
					visible_login = {this.props.visible_login}
					authenticating = {this.props.is_authenticating} />
			</Fragment>
		)
	}

}

const mapStateToProps = state => {
	return({
		visible_login : state.visible_login,
		is_authenticating : state.authentication.is_authenticating,
		is_authenticated : state.authentication.is_authenticated,
		is_registering : state.authentication.is_registering,
		is_registered : state.registration.is_registered,
		token_data : state.authentication.acces_token,
		data_user : state.authentication.data_user
	})
}

const mapDispatchToProps = dispatch => {
	return {
		converToken : access_token => dispatch(converToken(access_token)),
		setRegistering : value => dispatch(setRegistering(value)),
	}
}

const container = connect(mapStateToProps, mapDispatchToProps)(LoginRegisterUserContainer)

export default container