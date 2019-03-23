import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon } from 'antd'

const authorizationHook = WrapComponent => {
    class authorizationComponent extends Component{
        render(){

            const authorized = this.props.isSuperuser
            
            return(
                (authorized && <WrapComponent {...this.props} />) || <Icon type = 'loading' />
            )
        }
    }

    const mapStateToProps = state => ({
        isSuperuser : state.data_user.role
    })

    return connect(mapStateToProps, null)(authorizationComponent)
}

export default authorizationHook