import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import ImageProfile from './ImageProfile'
import FormPassword from './ModiFyPasswordComponent'

class Profile extends Component {

  render() {

    return (
      <div className="animated fadeIn">
        <Row className="justify-content-center">
          <Col xs="12" lg="0">
            <ImageProfile
              image = { this.props.image }
              setUser = { this.props.setUser }
            />
            <FormPassword
              reset = { this.props.reset }
            />
          </Col>           
        </Row>
      </div>
    )
  }
}

export default Profile;
