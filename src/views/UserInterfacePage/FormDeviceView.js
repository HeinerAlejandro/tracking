import React from 'react'
import SectionDeviceRegister from './../../components/SectionDeviceRegister'

import { connect } from 'react-redux'

import {
    setVisibleForm,

} from './../../actions/DeviceActions'

class FormDeviceView extends React.Component{
  onSubmitDevice = () => {
    
  }

  render(){
    return(
        <SectionDeviceRegister
            visible_form = { this.props.visible_form }
            setVisibleForm = { this.props.setVisibleForm }
        />
    )
  }
}

const mapStateToProps = state => ({
    visible_form : state.visible_form_device,

})

const mapDisparchToProps = {
    setVisibleForm
}

export default connect(mapStateToProps, mapDisparchToProps)(FormDeviceView)
