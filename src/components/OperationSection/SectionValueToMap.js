import React from 'react'
import Map from './../../components/Map'
import { Row, Col } from 'antd'

const SectionValueToMap = () => {
  return (
    <div>
      <Row gutter = { 24 }>
        <Col span = { 20 } offset = { 4}>
          <Map />
        </Col>
      </Row>
    </div>
  )
}

export default SectionValueToMap
