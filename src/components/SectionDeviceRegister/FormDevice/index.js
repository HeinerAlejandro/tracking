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

const FormDevice = (props) => (
    <Form className = 'register-device'>
        <Item>
            <Input
                addonBefore = { type_in_serial }
                type = 'text'
                placeholder = 'Serial'
            />
        </Item>

        <Item>
            <Button htmlType = 'button'>
                Registrar
            </Button>
        </Item>
    </Form>
  
)

export default Form.create()(FormDevice)
