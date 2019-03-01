import React from 'react'
import Map from './../../../components/Map'
import PanelOptions from './panelOptions'
import { Row, Col } from 'antd'

const map = {
  xs : 24,
  md : 24,
  lg : 12,
  xl : 16
}

const panel = {
  xs : 24,
  md : 24,
  lg : 12,
  xl : 8
}


const SectionTracking = ({ devices, positions, selected, handleChangeDateTime, selectDevice }) => {

  return (
    <div>
      <Row gutter = { 24 } justify = 'space-between' align = 'center' >
        <Col { ...panel }>
          <PanelOptions
            handleChangeDateTime = { handleChangeDateTime }
            selected = { selected }
            selectDevice = { selectDevice }
            devices = { devices }
          /> 
        </Col>
        <Col { ...map }>
           { positions && <Map positions = { positions } />}
        </Col>
      </Row>
    </div>
  )
}


export default SectionTracking
