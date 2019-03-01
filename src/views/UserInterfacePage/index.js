import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addDevice, setDevices } from './../../actions/DeviceActions'
import { withRouter } from 'react-router-dom' 
import PanelInterface from './../../components/UserInterface'

class UserInterfazView extends Component{

    render = () => {
        return(
            <PanelInterface
                data_user = { this.props.data_user }
            />
        )
    }
   
}

const mapStateToProps = state => (
    {
        data_user : state.data_user
    }
)

const mapDispatchToProps = {
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserInterfazView))

