import React, { Component } from 'react'
import {connect} from 'react-redux'
import { setAuthenticated, setUser, setNullUser } from './../../actions/LoginRegisterAction'
import { removeAllDevice } from './../../actions/DeviceActions'
import { withRouter } from 'react-router-dom' 
import PanelInterface from './../../components/UserInterface'

class UserInterfazView extends Component{

    render = () => {
      
        return(
            <PanelInterface
                setNullUser = { this.props.setNullUser }
                data_user = { this.props.data_user }
                removeAllDevice = { this.props.removeAllDevice }
                setUser = { this.props.setUser }
                setAuthenticated = { this.props.setAuthenticated }
            />
        )
    }
   
}

const mapStateToProps = state => (
    {
        setAuthenticated,
        setUser,
        data_user : state.data_user,
        setNullUser
    }
)

const mapDispatchToProps = {
    removeAllDevice,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserInterfazView))

