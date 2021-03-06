import React, { Component } from 'react'
import DeviceSection from './../../components/DeviceSection'
import { connect } from 'react-redux'
import {
    setFilterSearchDevice,
    setVisibleForm,
    setDevices,
    selectDevice,
    getDevicesFromServer
} from './../../actions/DeviceActions'

import toPairs from 'lodash.topairs'

class SectionDevicesView extends Component {

    componentDidMount = () => {
        if(!this.props.device)
            this.props.getDevicesFromServer()
    } 

    constructor(props){
        super(props)

        this.handleChangeSearch = this.handleChangeSearch.bind(this)

        this.getDevices = this.getDevices.bind(this)
    }

    handleChangeSearch = ({ target }) => {
        let { value } = target
    
        this.props.setFilterSearchDevice(value)
    }

    isDeviceInList = (device) => {

        const regex = this.props.filter_search.toUpperCase()
        return device[0].search(regex) > -1
    }

    getDevices = () => (
        toPairs(this.props.devices)
    )

    render() {
        
        let filter = this.props.filter_search
        let devices = ( filter === '' && this.getDevices())
            || (filter !== '' && this.getDevices().filter(this.isDeviceInList))

        let visible = this.getDevices().length > 0 ? true : false

        return (
            <DeviceSection
                link = { this.props.link }
                role = { this.props.role }
                devices = { devices }
                handleChangeSearch = { this.handleChangeSearch }   
                visible_form = { this.props.visible_form }
                setVisibleForm = { this.props.setVisibleForm }
                visible = { visible }
                selectDevice = { this.props.selectDevice }
            />
        )
    }
}

const mapStateToProps = state => ({
    link : state.link,
    role : state.data_user.super_user,
    devices : state.devices,
    filter_search : state.filter_search,
    visible_form : state.visible_form_device,
})

const mapDispatchToProps = {
    setFilterSearchDevice,
    setVisibleForm,
    setDevices,
    selectDevice,
    getDevicesFromServer
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionDevicesView)
