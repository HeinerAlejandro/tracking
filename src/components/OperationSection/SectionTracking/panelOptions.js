import React from 'react'
import { Input, Button, Row, Col } from 'antd'
import DeviceList from './../../DeviceSection/DeviceList'

const panelOptions = ({ devices, selected, handleChangeDateTime, selectDevice }) => {
  
  return (
    <div className = 'panel-options element-operation'>
      <DeviceList 
        type = 'select'
        devices = { devices }
        selectDevice = { selectDevice }
        selected = { selected }
        filter = 'S'
      />
      <Row gutter = { 15 } >
        <Col span = { 3 }>
          <label htmlFor = 'fi'>Inicio</label>
        </Col>
        <Col offset = { 3 }>
          <Input
              id = 'fi'
              name = 'fi'
              className = 'input-panel-operation'
              onChange = { handleChangeDateTime }
              type = 'datetime'
          />
        </Col>
      </Row>
      <Row  gutter = { 15 } >
        <Col  span = { 3 } >
          <label htmlFor = 'ff'>Final</label>
        </Col>
        <Col offset = { 3 }>
          <Input
              id = 'ff'
              name = 'ff'
              className = 'input-panel-operation'
              
              onChange = { handleChangeDateTime }
              type = 'datetime'
          />
        </Col>
      </Row>

        <Button>Agregar Rango</Button>
    </div>
  )
}



export default panelOptions
