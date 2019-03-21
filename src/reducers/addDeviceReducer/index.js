import { 
    ADD_DEVICE,
    REMOVE_ALL_DEVICES
} from './../../actions/DeviceActions'

const addDeviceReducer = (state = {}, action) => {
    switch(action.type){
        case ADD_DEVICE:
            return { ...state, [action.payload.serial]: { ...action.payload.device, status:action.payload.device.status ==='H'?'ACTIVO':'INACTIVO' }}
        case REMOVE_ALL_DEVICES:
                return {}
        default:
            return state
    }
}

export default addDeviceReducer