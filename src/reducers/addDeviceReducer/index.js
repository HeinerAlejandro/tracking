import { 
    ADD_DEVICE
} from './../../actions/DeviceActions'

//convertir array de dicts a un dicts de dicts
const addDeviceReducer = (state = {}, action) => {
    switch(action.type){
        case ADD_DEVICE:
            return { ...state, [action.payload.serial]: { ...action.payload.device }}
        default:
            return state
    }
}

export default addDeviceReducer