import { URL_DEVICES } from './../constants/withPanel'
import { message } from 'antd'

const ADD_DEVICE = 'ADD_DEVICE'
const REMOVE_ALL_DEVICES = 'REMOVE_ALL_DEVICES'
const SELECT_DEVICE = 'SELECT_DEVICE'
const SET_DEVICES = 'SET_DEVICES'

const SET_FILTER_SEARCH_DEVICE = 'SET_FILTER_SEARCH_DEVICE'

const SET_VISIBLE_FORM = 'SET_VISIBLE_FORM'

const ADD_POSITION_DEVICE = 'ADD_POSITION_DEVICE'

const addDevice = payload => (
    {
        type : ADD_DEVICE,
        payload
    }
)

const removeAllDevice = () => (
    {
        type :REMOVE_ALL_DEVICES
    }
)

const setDevices = devices => dispatch => {

    devices.forEach((device) => {
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

const addPosition = payload => ({
    type: ADD_POSITION_DEVICE,
    payload
})

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

    let body = new FormData()

    body.append('serial', device)

    let headers = new Headers() 

    let token = localStorage.getItem('token')
    let type = localStorage.getItem('type')
    let backend = localStorage.getItem('backend') === null?'':localStorage.getItem('backend')

    headers.append('Authorization', `${type} ${backend} ${token}`)

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
        
       console.log(response)
        const json = await response.json()

        message.config({
            top:100
        })

        message.success("dispositivo registrado")

       let { serial } =  json 
       
       delete json.serial
      
       let device = json

       dispatch(addDevice({serial:serial, device }))

    }catch(err){
        message.error("No se pudo registrar el dispotivo")
    }
}

const getDevicesFromServer = () => async dispatch => {
    console.log("OBTENIENDO DEL SERVER DEVICED")
    try {

        let headers = new Headers()

        headers.append('Accept', 'application/json')

        let token = localStorage.getItem('token')
        let type = localStorage.getItem('type')
        let backend = localStorage.getItem('backend') === null?'':localStorage.getItem('backend')
    
        headers.append('Authorization', `${type} ${backend} ${token}`)

        let data_request = {
            method : 'GET',
            mode : 'cors',
            headers : headers
        }

        const response = await fetch(URL_DEVICES, data_request)

        if(!response.ok)
            throw response

        const devices = await response.json()
        console.log(devices)
        dispatch(setDevices(devices))

    }catch(err){
        message.error("Error al obtener los dispositivos")
    }
}

const setPositions = positions => dispatch => {

    const device = positions[0].device

    positions.forEach(position => {

        delete position.device

        dispatch(addDevice({
            device,
            position
        }))
    })
}

const getLastPosition = device => async dispatch => {
    let body = new FormData()

    body.append('device', device)

    let headers = new Headers()

    let token = localStorage.getItem('token')
    let type = localStorage.getItem('type')
    let backend = localStorage.getItem('backend') === null?'':localStorage.getItem('backend')

    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', `${type} ${backend} ${token}`)

    try{
        const response = await fetch(`${URL_DEVICES}?last=True`, {
            method: 'GET',
            headers: headers,
            body: body
        })

        const data = await response.json()

        if(!response.ok)
            throw data

        dispatch(addPosition({
            device,
            position: data.position
        }))

    }catch(error){
        throw error.detail
    }
}

const getIntervalPosition = (interval) => async dispatch => {

    let body = new FormData()

    body.append('init', interval.init)
    body.append('final', interval.final)

    let headers = new Headers()

    let token = localStorage.getItem('token')
    let type = localStorage.getItem('type')
    let backend = localStorage.getItem('backend') === null?'':localStorage.getItem('backend')

    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', `${type} ${backend} ${token}`)

    try{
        const response = await fetch(`${URL_DEVICES}/${interval.device}/positions?init=${interval.init}&final=${interval.final}`, {
            method: 'GET',
            headers: headers,
            body: body
        })

        const data = await response.json()

        if(!response.ok)
            throw data

        dispatch(setPositions(data))

    }catch(error){
        throw error.detail
    }
}


export {
    ADD_DEVICE,
    REMOVE_ALL_DEVICES,
    SET_DEVICES,
    SELECT_DEVICE,
    SET_FILTER_SEARCH_DEVICE,
    SET_VISIBLE_FORM,
    ADD_POSITION_DEVICE,
    addDevice,
    removeAllDevice,
    setDevices,
    setDevice,
    selectDevice,
    setFilterSearchDevice,
    setVisibleForm,
    fetchCreateDevice,
    getDevicesFromServer,
    getLastPosition,
    getIntervalPosition
}