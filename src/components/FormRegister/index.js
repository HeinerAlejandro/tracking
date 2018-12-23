import React from 'react'
import { Form, Input, Checkbox, Button, Icon } from 'antd'

import './styles.css'

const FormItem = Form.Item;

class RegistrationForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
	});
	
	const data_user = {
		names : this.props.form.getFieldValue('names'),
		email : this.props.form.getFieldValue('email'),
		password : this.props.form.getFieldValue('password')
	}

	this.props.initRegistration(data_user)
	
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    //this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }


  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      wrapperCol: {
        xs: {
          span: 10,
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
          span : 16,
          offset : 4
        }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 16,
          offset: 4
        },
        sm: {
          span: 16,
          offset: 4
        },
        lg : {
          span : 16,
          offset : 4
        }
      },
    };
  
    return (
      <Form onSubmit={this.handleSubmit}
            layout = 'vertical'
            style = {{display : !this.props.visible_login?'block':'none'}}
            className = 'formr'>
        {this.props.logo}
        <h2 style = {{width : '100%', textAlign : 'center'}}>¡Suscribete!</h2>
        <FormItem
          {...formItemLayout}
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

		<FormItem
          {...formItemLayout}
        >
          {getFieldDecorator('names', {
            rules: [{
              required: true, message: 'Please input your E-mail!',
            }, ],
          })(
            <Input
              size = 'large'
              prefix = {
                <Icon
                  type = 'smile'
                  style = {{color : 'gray'}}
                 />
              }
              placeholder = 'nombres'/>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
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
        <FormItem
          {...formItemLayout}
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input
              type="password"
              size = 'large'
              onBlur={this.handleConfirmBlur}
              prefix = {<Icon type = 'lock' style = {{color : 'gray'}} />} placeholder = 'verificacion' />
          )}
        </FormItem>
        
        <FormItem {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>ya lei el <a href="">acuerdo</a></Checkbox>
          )}
        </FormItem>
    
		    <FormItem {...formItemLayout}>
          <Button
            type="primary"
            className = 'button-login-register'>
              Registrese
            </Button>
        </FormItem>

            
        <FormItem  {...tailFormItemLayout}>
          <span>¿ya tienes <button 
                          onClick = {this.props.handleOperation}
                          style = {{background : 'none', border : 'none'}} >
                          ¿cuenta?
                        </button>
        </span>
       </FormItem>
      </Form>
    )
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm)

export default WrappedRegistrationForm