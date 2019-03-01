import { 
    SELECT_DEVICE
} from './../../actions/DeviceActions'

const selectDeviceReducer = (state = null, action) => {
    switch(action.type){
        case SELECT_DEVICE:
            return action.payload 
        default:
            return state
    }
}

export default selectDeviceReducer