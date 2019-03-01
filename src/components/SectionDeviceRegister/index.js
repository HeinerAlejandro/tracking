import React, { Component } from 'react'
import { Modal, Row, Col } from 'antd'
import FormDevice from './FormDevice'

export default class SectionDeviceRegister extends Component {

  constructor(props){
    super(props)

    this.onCancel = this.onCancel.bind(this) 
  }

  onCancel = () => {
    this.props.setVisibleForm(false)
  }

  render() {
    return (
      <Modal
        width = '500px'
        centered
        visible = { this.props.visible_form }
        footer = { null }
        onCancel = { this.onCancel }
        > 
        <h3>Registra un dispositivo</h3>
        <Row align = 'center'>
          <Col span = { 20 }>
            <FormDevice />
          </Col>
        </Row>
      </Modal>
    )
  }
}
