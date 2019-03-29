import React, { Component } from 'react'

import SearchComponent from './FieldSearch'
import DeviceList from './DeviceList'
import { Card, CardHeader, CardBody } from 'reactstrap'
import ButtonOperation from './ButtonsOperation'
import { Row, Col } from 'antd'


class DeviceSection extends Component {

  constructor(props){

    super(props)

    this.getButtonsOperations = this.getButtonsOperations.bind(this)
    this.getCardTable = this.getCardTable.bind(this)
    this.handleClickRegister = this.handleClickRegister.bind(this)
    this.getColums = this.getColums.bind(this)
    this.handleClickShop = this.handleClickShop.bind(this)

  }

  getColums = () => (
    this.props.role
      ? [
        'Codigo',
        'Tipo',
        'Fecha de registro',
        'Estado', 
        'usuario',
        ''
      ]

      : [
        'Codigo',
        'Tipo',
        'Fecha de registro',
        ''
      ]
  )

  handleClickRegister = () => 
    this.props.visible_form 
        ? this.props.setVisibleForm(false)
        : this.props.setVisibleForm(true)
  

  handleClickShop = () => {
    const a = document.createElement("a");
		a.target = "_blank";
		a.href = this.props.link;
		a.click();
  }
    

  getButtonsOperations = () => (
    <Row gutter = { 10 }>
      <Col span = { 4 }>
        <ButtonOperation 
          value = 'Registrar'
          icon = "plus-circle"
          color = "ghost-primary"
          onClick = { this.handleClickRegister }
          type = 'primary'
          disable = { false }
        />
      </Col>
      <Col span = { 4 }>
        <ButtonOperation 
          value = 'Comprar'
          icon = "shopping"
          color = "#fadb14"
          fontColor = 'black'
          onClick = { this.handleClickShop }
          type = 'primary'
          disable = {!this.props.link}
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
            columns_header = { this.getColums() }
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