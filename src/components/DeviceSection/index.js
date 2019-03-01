import React, { Component } from 'react'

import SearchComponent from './FieldSearch'
import DeviceList from './DeviceList'
import { Card, CardHeader, CardBody } from 'reactstrap'
import ButtonOperation from './ButtonsOperation'
import { Row, Col } from 'antd'

import  { DEVICES } from './../../constants/withPanel'

const columns = [
  'Codigo',
  'Tipo',
  'Fecha de registro',
  'Estado',
  ''
]

class DeviceSection extends Component {

  constructor(props){

    super(props)

    this.getButtonsOperations = this.getButtonsOperations.bind(this)
    this.getCardTable = this.getCardTable.bind(this)
    this.handleClickRegister = this.handleClickRegister.bind(this)
  }

  handleClickRegister = () => (
    this.props.visible_form 
        ? this.props.setVisibleForm(false)
        : this.props.setVisibleForm(true)
  )

  getButtonsOperations = () => (
    <Row gutter = { 10 }>
      <Col span = { 4 }>
        <ButtonOperation 
          value = 'Registrar'
          icon = "plus-circle"
          color = "ghost-primary"
          onClick = { this.handleClickRegister }
          type = 'primary'
        />
      </Col>
      <Col span = { 4 }>
        <ButtonOperation 
          value = 'Comprar'
          icon = "shopping"
          color = "#fadb14"
          fontColor = 'black'
          onClick = { null }
          type = 'primary'
        />
      </Col>
    </Row>
  )
  
  getCardTable = () => {

    const { devices } = this.props

    return(
      <Card style = {{ width : '1000px', margin : 'auto' }}>
        <CardHeader>
          Dispositivos Registrados
        </CardHeader>
        <CardBody>   
            <SearchComponent handleFilter = { this.props.handleChangeSearch } />        
          <DeviceList
            columns_header = { columns }
            devices = { devices }
            type = 'table'
            selectDevice = { this.props.selectDevice }
          />
          { this.getButtonsOperations() }
        </CardBody>
      </Card>
    )
  }

  render(){

    const card = this.props.visible
      ? this.getCardTable()
      : this.getButtonsOperations()

    return(
      <>{ card }</>
    )
  }
}

export default DeviceSection