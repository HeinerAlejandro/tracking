import {   Card, CardBody, CardHeader, Col ,
    FormText,Input,Button
    ,Label } from 'reactstrap';

import React from 'react'

import { Form, Icon } from 'antd'

const FormItem = Form.Item

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class ModifyNamesComponent extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            loading : false
        }
    }
    

    handleSubmit = (e) => {

        this.setState({loading:true})
        e.preventDefault();
       
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            const data_names = JSON.stringify({
              first_name : this.props.form.getFieldValue('first_name'),
              last_name : this.props.form.getFieldValue('last_name'),
            })
          
            let status = this.props.reset_names(data_names)

            status.then(value => this.setState({loading:false}))
          }
        });
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        
        return (
            <Card>
                <CardHeader>
                    Modificar Nombre
                </CardHeader>

                <CardBody>
                    <Form 
                        onSubmit={this.handleSubmit}
                        layout = 'horizontal'
                        className = 'formr'>
            
                        <FormItem>
                            {getFieldDecorator('first_name', {
                                initialValue : this.props.fn,
                                rules: [{
                                required: true, message: 'debes ingresar tu primer nombre',
                            }],
                            })(
                                <Input
                                    type="text" 
                                    
                            
                                    size = 'large'
                                    prefix = {
                                        <Icon
                                            type = 'user'
                                            style = {{color : 'gray'}}  
                                        />
                                    }
                                    placeholder = 'nombre'  
                                />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('last_name', {
                        initialValue : this.props.ln,
                        rules: [{
                            required: true, message: 'debes ingresar tu apellido',
                        }],
                        })(
                        <Input
                            type="text"
                            
                            size = 'large'
                            prefix = {<Icon type = 'user' style = {{color : 'gray'}} />}
                            placeholder = 'apellido'     
                        />
                        )}
                    </FormItem>

                    <FormItem>
                        <Button
                            type = "primary"
                            className = 'button-login-register'

                            loading = {this.state.loading}
                            disabled = {hasErrors(this.props.form.getFieldsError())}
                            htmlType = 'submit'>
                            Cambiar
                        </Button>
                    </FormItem>
                    </Form>
                </CardBody>
            </Card>
        )
    }
}

const WrappedChangeNamesForm = Form.create()(ModifyNamesComponent)

export default WrappedChangeNamesForm
