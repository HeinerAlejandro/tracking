import React, { Component } from 'react'
import OperationSection from './../../../components/OperationSection'
import { connect } from 'react-redux';

class OperationSectionView extends Component {
  render() {

    const { device_name, data_device } = this.props
 
    return (
      <OperationSection
        device_name = { device_name }
        data_device = { data_device }
      />
    )
  }
}

const mapStateToProps = state => ({
  device_name : state.device_selected,
  data_device : state.devices[state.device_selected]
})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(OperationSectionView)
