import React, { Component } from 'react'
import { connect } from 'react-redux'

const authorizationHook = WrapComponent => {
    class authorizationComponent extends Component{
        render(){

            const authorized = this.props.isSuperuser
            
            return(
                authorized && <WrapComponent {...this.props} />
            )
        }
    }

    const mapStateToProps = state => ({
        isSuperuser : state.data_user.role
    })

    return connect(mapStateToProps, null)(authorizationComponent)
}

export default authorizationHook
