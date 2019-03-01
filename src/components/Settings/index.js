import React, { Component } from 'react';
import {   Card, CardBody, CardHeader, Col, Row ,
  FormText,Input,FormGroup,Button
  ,Label } from 'reactstrap';

class Settings extends Component {

  render() {

    return (
      <div className="animated fadeIn">
        <Row className="justify-content-center">
          <Col xs="12" lg="0">
            <Card>
              <CardHeader>
                Modificar Contraseña
              </CardHeader>
              <CardBody>
              <Col md="3">
                      <Label htmlFor="password-input">Nueva Contraseña</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="password" id="password-input" name="password-input" placeholder="Password" autoComplete="new-password" />
                      <FormText className="help-block">Ingrese su nueva Contraseña</FormText>
                    </Col>

        <Col md="3">
                      <Label htmlFor="password-input">Repetir Nueva Contraseña</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="password" id="password-input" name="password-input" placeholder="Password" autoComplete="new-password" />
                      <FormText className="help-block">Repetir su Contraseña </FormText>
                    </Col>
                    <Col col="2" className="mb-3 mb-xl-0 text-center">
                <Button color="primary" size="lg">Guardar</Button>
              </Col>

                    </CardBody>
            </Card>
          </Col>           
        </Row>
        <Row className="justify-content-center">
          <Col xs="12" lg="0">
            <Card>
              <CardHeader>
     Configurar Tienda
              </CardHeader>
              <CardBody>
        <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Link de la tienda</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Link" />
                      <FormText color="muted">Asegurese de ingresar el link correspondiente</FormText>
                    </Col>
                    <Col col="2" className="mb-3 mb-xl-0 text-center">
                <Button color="primary" size="lg">Guardar</Button>
              </Col>
                  </FormGroup>
                  </CardBody>
                  </Card>
                  </Col>
                  </Row>
      </div>
    )
  }
}

export default Settings;
