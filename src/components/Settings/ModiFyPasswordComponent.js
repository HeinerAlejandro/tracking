import React from 'react'
import {   Card, CardBody, CardHeader, Col ,
    FormText,Input,Button
    ,Label } from 'reactstrap';

const ModiFyPasswordComponent = (props) => {
  return (
      <Card>
            <CardHeader>
                Modificar Contraseña
            </CardHeader>
            <CardBody>
               <Col md="3">
                  <Label htmlFor="password-input">Nueva Contraseña</Label>
                </Col>
                <Col xs="12" md="9">
                    <Input type="password" id="pass-input" name="password-input" placeholder="Password" autoComplete="new-password" />
                    <FormText className="help-block">Ingrese su nueva Contraseña</FormText>
                </Col>
                <Col md="3">
                    <Label htmlFor="pass-input">Repetir Nueva Contraseña</Label>
                </Col>
                <Col xs="12" md="9">
                    <Input type="password" id="pass-input-verified" name="password-input-verified" placeholder="Verifique" autoComplete="new-password" />
                        <FormText className="help-block">Repetir su Contraseña </FormText>
                </Col>
                <Col col="2" className="mb-3 mb-xl-0 text-center">
                    <Button color="primary" size="lg">Guardar</Button>
                </Col>
        </CardBody>
    </Card>
  )
}

export default ModiFyPasswordComponent
