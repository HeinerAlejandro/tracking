import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import FormRegister from './../../components/FormRegister'
import FormSession from './../../components/FormSession'
import { CODES_OPERATIONS } from './../../constants/withTokens'
import { withRouter } from 'react-router'
import {
		converToken,
		initRegistration,
		initAuthentication,
		setVisibleResetPassword,
		setVisibleLogin,
		setUserLog
	} from './../../actions/LoginRegisterAction'

import { Row, Col, Icon, message } from 'antd'
import './styles.css'

import  { ReactComponent as logo }  from './../../resources/location.svg'
import { showMessage } from '../../services';

class LoginPage extends Component{

	constructor(props){
		super(props)
		this.responseProviderSucces = this.responseProviderSucces.bind(this)
		this.responseProviderFailure = this.responseProviderFailure.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleOperation = this.handleOperation.bind(this)
		this.resetPasswordOperation = this.resetPasswordOperation.bind(this)
		this.handleSessionSubmit = this.handleSessionSubmit.bind(this)
	}

	responseProviderSucces(response){
	
		const { converToken, setUserLog } = this.props

		converToken(response.Zi.access_token)

		setUserLog(response.profileObj)

		this.props.history.push('account/dashboard')

	}

	responseProviderFailure(response){
		
		showMessage({type : 'error', message : CODES_OPERATIONS.False.LOGIN_OPERATION})
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

	handleSessionSubmit(){
		
		if(this.props.is_authenticated)
			this.props.history.push('/account/')
	}

	handleOperation(){
		this.props.visible_login
			? this.props.setVisibleLogin(false)
			: this.props.setVisibleLogin(true)
	}

	resetPasswordOperation(){

		(this.props.visible_reset_password)
			? this.props.setVisibleResetPassword(false)
			: this.props.setVisibleResetPassword(true)
	}


	render(){
			
		var alert = this.props.message_operation

		var text_form = this.props.visible_login?"¿Aun no tienes una ":"¿ya tienes una "

		return(
			
			<div className = 'principal'>
				<div  className = 'page-login'>
					<Row 
						type = 'flex' 
						justify = 'space-between'>
						<Col lg = {18}
							md = {16}
							sm = {0}
							xs = {0}
							className = 'content-image'>
							<Icon 
								component = {logo}
								className = 'logo-page-image logo-page-lr'
							/>
							<div className = 'text-loginpage'>
								<h1>Sientete poderoso</h1>
								<h2>Con nuestro sistema de localizacion</h2>
							</div>

							<div className = 'content-buttons'>
								<button 
									onClick = { () => {if(this.props.visible_login)this.handleOperation(false)} }
									className = {!this.props.visible_login?'initial-state':''}>Registrate</button>
								<button
									onClick = { () => {if(!this.props.visible_login)this.handleOperation(true)} }
									className = {this.props.visible_login?'initial-state':''}>Logeate</button>
							</div>
						</Col>
						<Col lg = {6}
							md = {8}
							sm = {24}
							xs = {24}
							className = 'content-form'>
							<FormRegister 
								handleSubmit = {this.handleSubmit} 
								registering = {this.props.is_registering}
								initRegistration =  {this.props.initRegistration}
								visible_login = {this.props.visible_login}
								logo = {
									<Icon
										component = {logo}
										className = 'logo-form logo-page-lr'
									/>}
								/>

							<FormSession							
								successProvider = { this.responseProviderSucces }
								succesFailure = { this.responseProviderFailure } 
								visible_login = { this.props.visible_login }
								visible_reset_password = { this.props.visible_reset_password }
								resetPasswordOperation = { this.resetPasswordOperation }
								resetPasswordUrls = {['http://127.0.0.1/accounts/reset', 'http://127.0.0.1/accounts/resetpassword']}
								authenticating = { this.props.is_authenticating }
								initAuthentication = { this.props.initAuthentication }
								handleSessionSubmit = { this.handleSessionSubmit }
								logo = {
									<Icon
										component = {logo}
										className = 'logo-form logo-page-lr'
									/>}
								/>

								<span 
									style = {{color:'white', marginLeft: '50px'}}>{text_form}
										<button 
											onClick = {this.handleOperation}
											style = {{background : 'none', border : 'none', color : 'blue'}} >
												cuenta?
										</button>
								</span>
						</Col>
					</Row>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return({
		visible_reset_password : state.visible_reset_password,
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
	initRegistration,
	setVisibleResetPassword,
	setVisibleLogin,
	initAuthentication,
	setUserLog
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage))