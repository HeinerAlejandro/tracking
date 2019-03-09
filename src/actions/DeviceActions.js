import { URL_DEVICES } from './../constants/withPanel'
import { message } from 'antd'

const ADD_DEVICE = 'ADD_DEVICE'
const SELECT_DEVICE = 'SELECT_DEVICE'
const SET_DEVICES = 'SET_DEVICES'

const SET_FILTER_SEARCH_DEVICE = 'SET_FILTER_SEARCH_DEVICE'

const SET_VISIBLE_FORM = 'SET_VISIBLE_FORM'

const addDevice = payload => (
    {
        type : ADD_DEVICE,
        payload
    }
)

const setDevices = devices => dispatch => {

    devices.forEach((device, index) => {
        let serial = device.serial
        delete device.serial
        dispatch(addDevice({serial, device}))
    });

}

const setDevice = payload => (
    {
        type : SET_DEVICES,
        payload
    }
)

const selectDevice = payload => (
    {
        type : SELECT_DEVICE,
        payload
    }
)

const setFilterSearchDevice = payload => (
    {
        type : SET_FILTER_SEARCH_DEVICE,
        payload
    }
)

const setVisibleForm = payload => (
    {
        type : SET_VISIBLE_FORM,
        payload
    }
)

const fetchCreateDevice = device => async dispatch => {

    const body = new FormData()


    body.append('device', device)

    let headers = new Headers()

    let token = localStorage.getItem('token')

    headers.append('Content-Type', 'application/json')
    headers.append('Accept', 'application/json')
    headers.append('Authorization', token)

    const options = {
        method : 'post',
        mode : 'cors',
        headers : headers,
        body
    }

    try{
        
        const response = await fetch(URL_DEVICES, options)

        if(!response.ok)
            throw response
    
        const json = await response.json()
        
        message.success(json.detail)

       let { type, serial } = { json }

       dispatch(addDevice({type, serial}))

    }catch(err){

        let json = await err.json()

        message.error(json.detail)
    }
}

const getDevicesFromServer = () => async dispatch => {

    try {

        let headers = new Headers()

        let token = localStorage.getItem('token')

        headers.append('Content-Type', 'application/json')
        headers.append('Accept', 'application/json')
        headers.append('Authorization', token)

        let data_request = {
            method : 'GET',
            mode : 'cors',
            headers : headers
        }

        const response = await fetch(URL_DEVICES)

        if(!response.ok)
            throw response

        const devices = await response.json()

        dispatch(setDevices(devices))

    }catch(err){
        message.error("Error al obtener los dispositivos")
    }

}

export {
    ADD_DEVICE,
    SET_DEVICES,
    SELECT_DEVICE,
    SET_FILTER_SEARCH_DEVICE,
    SET_VISIBLE_FORM,
    addDevice,
    setDevices,
    setDevice,
    selectDevice,
    setFilterSearchDevice,
    setVisibleForm,
    fetchCreateDevice,
    getDevicesFromServer
}