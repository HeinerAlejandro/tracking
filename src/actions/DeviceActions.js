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
        let code = device.code
        delete device.code
        dispatch(addDevice({code, device}))
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

const fetchCreateDevice = (device) => async dispatch => {

    const body = new FormData()

    body.append('device', device)

    const options = {
        method : 'post',
        mode : 'cors',
        body
    }

    try{
        const response = await fetch(URL_DEVICES, options)

        if(!response.ok)
            throw(response)
    
        const json = await response.json()
        
        message.success(json.detail)

       // dispatch(addDevice({code, device}))

    }catch(err){
        console.log(await err.json())
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
    setVisibleForm
}