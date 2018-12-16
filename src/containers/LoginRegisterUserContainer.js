import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import FormRegister from './../components/FormRegister'
import FormSession from './../components/FormSession'
import MessageOperation from './../components/MessageOperation'
import { CODES_OPERATIONS } from './../constants/withTokens'
import {converToken,
		initRegistration,
		setMessageOperation} from './../actions/LoginRegisterAction'

import { message } from 'antd'

class LoginRegisterUserContainer extends Component{


	constructor(props){
		super(props)
		this.responseProviderSucces = this.responseProviderSucces.bind(this)
		this.responseProviderFailure = this.responseProviderFailure.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	responseProviderSucces(response){
		
		const { converToken } = this.props
		converToken(response.Zi.access_token)
	}

	responseProviderFailure(response){
		
		this.props.setMessageOperation({type : 'error', message : CODES_OPERATIONS.False.LOGIN_OPERATION})
	}

	handleSubmit(evt){

		const register_form = document.forms.formulario_registro
		const elements_form = register_form

		const data_user = {
			name : elements_form.name,
			correo : elements_form.email,
			password : elements_form.password
		}
		
		this.props.initRegistration(data_user)		
	}

	render(){
		
		return(
			
			<Fragment>
			
				<MessageOperation alert = {this.props.message_operation} />
			
				<FormRegister 
					succesProvider = {this.responseProviderSucces}
					succesFailure = {this.responseProviderFailure} 
					handleSubmit = {this.handleSubmit} 
					registering = {this.props.is_registering}
					initRegistration =  {this.props.initRegistration}/>

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
		message_operation : state.message_operation,
		is_authenticating : state.authentication.is_authenticating,
		is_authenticated : state.authentication.is_authenticated,
		is_registering : state.authentication.is_registering,
		is_registered : state.registration.is_registered,
		token_data : state.authentication.acces_token,
		data_user : state.authentication.data_user
	})
}

const mapDispatchToProps = {
	converToken,
	initRegistration
}

const container = connect(mapStateToProps, mapDispatchToProps)(LoginRegisterUserContainer)

export default container