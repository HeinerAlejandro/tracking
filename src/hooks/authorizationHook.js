import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon } from 'antd'

const authorizationHook = WrapComponent => {
    class authorizationComponent extends Component{
        render(){

            const authorized = this.props.isSuperuser
            
            let data_render = null

            if(authorized === null)
                data_render = (
                    <Icon type = 'loading' />
                )
            else if(authorized)
                data_render = (
                    <WrapComponent {...this.props} />
                )
            else data_render = (<></>)

            return(
                data_render
            )
        }
    }

    const mapStateToProps = state => ({
        isSuperuser : state.data_user.super_user
    })

    return connect(mapStateToProps, null)(authorizationComponent)
}

export default authorizationHook
