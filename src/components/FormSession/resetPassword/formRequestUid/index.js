import React, { Component } from 'react'
import { Form, Icon, Button, Input } from 'antd'


function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

class index extends Component {

    constructor(props){
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
 
        e.preventDefault()

        const { getFieldValue } = this.props.form
        let field = ''

        this.props.type === 'mail'
            ? field = getFieldValue('correo')
            : field = { 
                uid : getFieldValue('uuid'),
                token :  getFieldValue('token'),
                new_password1 : getFieldValue('contraseña'),
                new_password2 : getFieldValue('confirmacion'), 
            }

        const value = field

        this.props.handleFetch(value)
    }

    render() {
        
        const { getFieldDecorator, getFieldValue } = this.props.form;
        var props_field = {}
        var fields = null

        this.props.type === 'mail'
            ? props_field = {name : ['correo'], message : 'Porfavor Introduce tu correo electronico'}
            : props_field = {name : ['uuid', 'token', 'contraseña', 'confirmacion'], message : 'Porfavor Introduce tu codigo uuid'}

        fields = props_field.name.map(field => (
            <Form.Item>
            {getFieldDecorator(field, {
                            rules: [{
                            required: true, message: props_field.message,
                            }, ],
                        })(
                            <Input
                                type={ field === 'contraseña' || field === 'confirmacion'
                                    ? 'password'
                                    : this.props.type === 'mail'
                                        ? 'email'
                                        :  'text'}
                                size = 'large'
                                prefix = {
                                    <Icon
                                        type = { this.props.type === 'mail'?"mail" :'lock'}
                                        style = {{color : 'gray'}}  
                                    />
                            }
                            placeholder = { field }  
                            />
                        )}
            </Form.Item>
        ))
        
        return (
        <div style = { this.props.style?this.props.style:null }>
            <h3 style = {{marginBottom : '30px', width : '300px', textAlign:'center', marginLeft:'auto', marginRight:'auto'}}>Si ha olvidado su contraseña, ¡no tiene porque preocuparse!</h3>
            <Form
                onSubmit = { this.handleSubmit }
                name = { 'form' + props_field.name}
                >
            { fields }

            <Form.Item>
                <Button
                    type="primary"
                    className = 'button-login-register'
                    disabled = { hasErrors(this.props.form.getFieldsError()) }
                    htmlType = 'submit'
                    loading = {this.props.loading_send_email }>
                    Enviar
                </Button>
            </Form.Item>
            </Form>
        </div>
        )
    }
}

const WrappedRequestUidForm = Form.create()(index);
export default WrappedRequestUidForm