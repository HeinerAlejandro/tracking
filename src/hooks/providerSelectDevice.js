import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectDevice } from '../actions/DeviceActions'

const providerSelectDevice = WrappedComponent => {
    
    class providerHandleChange extends Component {

      constructor(props){
        super(props)

        this.selectDevice = this.selectDevice.bind(this)
      }

      selectDevice = value => {
        this.props.selectDevice(value)
      }
      
      render() {
        return (
          
            <WrappedComponent { ...this.props } selectDevice = { this.selectDevice } />
        )
      }
    }

    const mapDispàtchToProps = {
      selectDevice
    }
    
    return connect(null, mapDispàtchToProps)(providerHandleChange)
}


export default providerSelectDevice