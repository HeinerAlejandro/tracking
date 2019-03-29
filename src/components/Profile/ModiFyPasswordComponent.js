import React from 'react'
import {   Card, CardBody, CardHeader, Col ,
    FormText,Input,Button
    ,Label } from 'reactstrap';

import { Form, Icon } from 'antd'

const FormItem = Form.Item

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class ModiFyPasswordComponent extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            loading : false
        }
    }

    handleSubmit = (e) => {
        this.setState({
            loading : true
        })

        e.preventDefault();
       
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            const data_reset = JSON.stringify({
              new_password1 : this.props.form.getFieldValue('n-password'),
              new_password2 : this.props.form.getFieldValue('n-confirm'),
              old_password : this.props.form.getFieldValue('old_password')
            })
          
            let status = this.props.reset_pass(data_reset)

            status.then(value => this.setState({loading:false}))
          }
        });
    }
        
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
    
        if (value && value !== form.getFieldValue('n-password')) {
          callback('Las 2 contraseñas son diferentes');
        } else {
          callback();
        }
      }
    
      validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value) {
          form.validateFields(['n-confirm'], { force: true });
        }
        callback();
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <Card>
                <CardHeader>
                    Modificar Contraseña
                </CardHeader>

                <CardBody>
                    <Form 
                        onSubmit={this.handleSubmit}
                        layout = 'vertical'
                        className = 'formr'>
            
                        <FormItem>
                            {getFieldDecorator('n-password', {
                                rules: [{
                                required: true, message: 'debes ingresar una contraseña',
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
                    <FormItem>
                        {getFieldDecorator('n-confirm', {
                        rules: [{
                            required: true, message: 'Confirma tu contraseña',
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
                    
                    <FormItem>
                        {getFieldDecorator('old_password', {
                        rules: [{
                            required: true, message: 'Introduce tu contraseña actual',
                        }],
                        })(
                        <Input
                            type="password"
                            size = 'large'
                            prefix = {<Icon type = 'lock' style = {{color : 'gray'}} />}
                            placeholder = 'contraseña actual' />
                        )}
                    </FormItem>

                    <FormItem>
                        <Button
                            type="primary"
                            className = 'button-login-register'
                            loading = {this.state.loading}
                            disabled = {hasErrors(this.props.form.getFieldsError())}
                            htmlType = 'submit'>
                            Registrese
                        </Button>
                    </FormItem>
                    </Form>
                </CardBody>
            </Card>
        )
    }
}

const WrappedChangePasswordForm = Form.create()(ModiFyPasswordComponent)

export default WrappedChangePasswordForm
