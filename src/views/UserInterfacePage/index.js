import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthenticated, setUser } from './../../actions/LoginRegisterAction'
import { removeAllDevice } from './../../actions/DeviceActions'
import { withRouter } from 'react-router-dom' 
import PanelInterface from './../../components/UserInterface'

class UserInterfazView extends Component{

    render = () => {
        return(
            <PanelInterface
                data_user = { this.props.data_user }
                removeAllDevice = { this.props.removeAllDevice }
                setUser = { this.props.setUser }
            />
        )
    }
   
}

const mapStateToProps = state => (
    {
        setAuthenticated,
        data_user : state.data_user,
    }
)

const mapDispatchToProps = {
    setAuthenticated,
    removeAllDevice,
    setUser
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserInterfazView))

