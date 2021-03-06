import React from 'react'
import SectionDeviceRegister from './../../components/SectionDeviceRegister'

import { connect } from 'react-redux'

import {
    setVisibleForm,
    fetchCreateDevice
} from './../../actions/DeviceActions'

class FormDeviceView extends React.Component{
  onSubmitDevice = (e) => {
    
    e.preventDefault()
    
    let device = document.getElementsByName('input-create-device')[0].value
    console.log("contenido de input : " + device)
    this.props.fetchCreateDevice(device)

  }

  render(){
    return(
        <SectionDeviceRegister
            visible_form = { this.props.visible_form }
            setVisibleForm = { this.props.setVisibleForm }
            onSubmitDevice = { this.onSubmitDevice }
        />
    )
  }
}

const mapStateToProps = state => ({
    visible_form : state.visible_form_device,

})

const mapDispatchToProps = {
    setVisibleForm,
    fetchCreateDevice
}

export default connect(mapStateToProps, mapDispatchToProps)(FormDeviceView)
