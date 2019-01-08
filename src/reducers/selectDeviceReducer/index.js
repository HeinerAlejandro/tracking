import { 
    SELECT_DEVICE
} from './../../actions/DeviceActions'

const addDeviceReducer = (state = null, action) => {
    switch(action.type){
        case SELECT_DEVICE:
            //eliminar el atributo code de ...action.payload
            return { ...action.payload }
        default:
            return state
    }
}

export default addDeviceReducer