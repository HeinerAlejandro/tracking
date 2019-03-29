import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import ImageProfile from './ImageProfile'
import FormPassword from './ModiFyPasswordComponent'
import FormNames from './ModifyNames'

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
            <FormNames
              reset_names = { this.props.reset_names }
              fn = { this.props.fn }
              ln = { this.props.ln }
            />
            <FormPassword
              reset_pass = { this.props.reset_pass }
            />
          </Col>           
        </Row>
      </div>
    )
  }
}

export default Profile;
