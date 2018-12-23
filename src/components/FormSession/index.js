import React from 'react'
import SocialButtons from './SocialButtons'
import { Form, Input, Button, Icon, Col } from 'antd'
import { ReactComponent as google } from './../../resources/google-plus.svg'

const FormItem = Form.Item;
const InputGroup = Input.Group

class FormSession extends React.Component {
 
	handleSubmit = (e) => {
	  e.preventDefault();
	  this.props.form.validateFieldsAndScroll((err, values) => {
		if (!err) {
		  console.log('Received values of form: ', values);
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
	  const { getFieldDecorator } = this.props.form;
  
	  const formItemLayout = {
		wrapperCol: {
		  xs: {
			span: 20,
			offset: 2
		  },
		  sm: {
			span: 20,
			offset: 2
		  },
		  md: {
			span : 16,
			offset : 4
		  }, 
		  lg: {
			span : 9,
			offset : 3
		  }
		}
		}
		
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
		<Form onSubmit={this.handleSubmit}
			  style = {{display : this.props.visible_login?'block':'none', marginTop:'40vh'}}>
			
		{this.props.logo}
			<h2 style = {{width : '100%', textAlign : 'center', marginTop : '-100px'}}>¡Inicia Sesion!</h2>
			<InputGroup size = 'large'>
				<Col
					span = {10}
					offset = {2}>
					<FormItem
					>
						{getFieldDecorator('email', {
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
				{getFieldDecorator('password', {
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
			<FormItem  {...buttonsLayout}>
				<Button
						type="primary"
						className = 'button-login-register'>
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
	  );
	}
  }
  
const WrappedRegistrationForm = Form.create()(FormSession);
  
export default WrappedRegistrationForm

