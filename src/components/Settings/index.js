import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

import FormPassword from './ModiFyPasswordComponent'
import FormLinkShop from './modifyLinkShopComponent'

class Settings extends Component {

  render() {

    return (
      <div className="animated fadeIn">
        <Row className="justify-content-center">
          <Col xs="12" lg="0">
            <FormPassword />
          </Col>           
        </Row>
        <Row className="justify-content-center">
          <Col xs="12" lg="0">
            <FormLinkShop
              link = { this.props.link }
              setLink = { this.props.setLink }
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Settings;
