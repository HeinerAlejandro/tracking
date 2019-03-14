import React from 'react'
import authorizationHook from "../../hooks/authorizationHook";
import {CardHeader, CardBody, FormText, Card } from 'reactstrap'
import { Form, Input, Button } from 'antd'

const InputGroup = Input.Group
const modifyLinkShopComponent = (props) => {
  return (
    <Card>
        <CardHeader>
            Configurar Tienda
        </CardHeader>
        <CardBody>
            <Form  onSubmit = { props.setLink } >

                <Input
                    type = 'url'
                    id="link-input"
                    name="link"
                    placeholder="Link"    
                    defaultValue = { props.link }
                />
                <FormText color="muted">Asegurese de ingresar el link correspondiente</FormText>
                
                <Button htmlType = 'submit'>Guardar</Button>
               
            </Form>
        </CardBody>
    </Card>
  )
}

export default authorizationHook(modifyLinkShopComponent)
