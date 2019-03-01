import React, { Component} from 'react';
import { Row, Col } from 'antd';
import DeviceSectionView from './../../views/UserInterfacePage/SectionDevicesView'
import DeviceRegisterView from './../../views/UserInterfacePage/FormDeviceView'
import OperationSectionView from './../../views/UserInterfacePage/OperationSectionView'
import Footer from './../UserInterface/DefaultFooter'

class Dashboard extends Component {
  
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="0">
            <DeviceSectionView />
          </Col>           
        </Row>
       
        <Row>
          <Col xs="12" sm="6">
            <DeviceRegisterView />
          </Col>
        </Row>

        <Row justify = 'center' span = {20}>
          <Col>
            <OperationSectionView />
          </Col>
        </Row>

        <Row justify = 'center' span = {20}>
          <Col>
            <Footer />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;