import React from 'react'
import { Form, Input, Select, Button, Tooltip } from 'antd'
import './styles.sass'

const Item = Form.Item
const Option = Select.Option
const description_type = 
        "Tipo de dispositivo\n\G : valor en modulo\n\P = valor en mapa\n\S = seguimientos"

const type_in_serial = (
    <Tooltip title = { description_type }>
        <Select defaultValue = 'G'>
            <Option value = 'G'>G</Option>
            <Option value = 'P'>P</Option>
            <Option value = 'S'>S</Option>
        </Select>
    </Tooltip>
)

const FormDevice = ({ onHandleSubmit }) => (
    <Form className = 'register-device'
        onSubmit = { onHandleSubmit }
        
    >
        <Item>
            <Input
                name = 'input-create-device'
                type = 'text'
                maxLength = { 4 }
                placeholder = 'Serial'
            />
        </Item>

        <Item>
            <Button
                htmlType = 'submit' >
                Registrar
            </Button>
        </Item>
    </Form>
  
)

export default Form.create()(FormDevice)
