import React from 'react'
import SocialButtons from './SocialButtons'
import ResetPasswordView from './../../views/ResetPasswordView'
import { Form, Input, Button, Icon, Col } from 'antd'
import { ReactComponent as google } from './../../resources/google-plus.svg'

const FormItem = Form.Item;
const InputGroup = Input.Group

class FormSession extends React.Component {
 
	handleSubmit = (e) => {
	  e.preventDefault()
	  this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				const data_user = {
					email : this.props.form.getFieldValue('emailogin'),
					password : this.props.form.getFieldValue('passwordlogin'),
				}

				this.props.handleSessionSubmit(data_user)
			}
	  });
	}
	
	compareToFirstPassword = (rule, value, callback) => {
	  const form = this.props.form;
	  if (value && value !== form.getFieldValue('password')) {
		callback('Two passwords that you enter is inconsistent!');
	  } else {
		callback();
	  }
	}
  
	render() {
	  const { getFieldDecorator } = this.props.form	
		const buttonsLayout = {
			wrapperCol : {
				lg :{
					span : 20,
					offset : 2
				},
				md: {
					span : 20,
					offset : 2
				},
				sm: {
					span : 20,
					offset : 2
				},
				xs: {
					span : 20,
					offset : 2
				}
			}
		}
	
	  return (
		<>
			<ResetPasswordView
				visible = { this.props.visible_reset_password } 
				resetPasswordUrls = { this.props.resetPasswordUrls }
				/>
				
			<Form onSubmit = {this.handleSubmit}
					style = {{display : this.props.visible_login?'block':'none', marginTop:'40vh'}}
					name = 'form_session'>
				
			{this.props.logo}
				<h2 style = {{width : '100%', textAlign : 'center', marginTop : '-100px'}}>¡Inicia Sesion!</h2>
				<InputGroup size = 'large'>
					<Col
						span = {10}
						offset = {2}>
						<FormItem
						>
							{getFieldDecorator('emailogin', {
								rules: [{
								type: 'email', message: 'The input is not valid E-mail!',
								}, {
								required: true, message: 'Please input your E-mail!',
								}],
							})(
							<Input
							size = 'large'
							placeholder = 'correo'
							prefix = {
								<Icon
									type = 'mail' 
									style = {{color : 'gray'}} 
								/>
							}
							/>
						)}
				
					</FormItem>
					</Col>
				
				<Col  span = {10}>
					<FormItem
				
					>
					{getFieldDecorator('passwordlogin', {
						rules: [{
						required: true, message: 'Please input your password!',
						}, {
						validator: this.validateToNextPassword,
						}],
					})(
						<Input
							type="password" 
							size = 'large'
							prefix = {
								<Icon
									type = 'lock'
									style = {{color : 'gray'}}  
								/>
						}
						placeholder = 'contraseña'  
						/>
					)}

				</FormItem>  
				</Col>
			</InputGroup>
			<p>
				<a
					onClick = { this.props.resetPasswordOperation }
					style = {{marginLeft : '50px', width : '100%'}}
					href = "#x">
						¿se te olvido tu contraseña?
				</a>
			</p>
			<FormItem  {...buttonsLayout}>
				<Button
						type="primary"
						className = 'button-login-register'
						htmlType = 'submit'
						loading = {this.props.authenticating}>
							¡Conectate!
				</Button>

			</FormItem>
			<FormItem {...buttonsLayout}>
				<SocialButtons 
					successProvider = {this.props.successProvider}
					successFailure = {this.props.successFailure}
					google_icon = {google} 
				/>
			</FormItem>
		</Form>
	</>
 );
	}
  }
  
const WrappedSessionForm = Form.create()(FormSession);
  
export default WrappedSessionForm

