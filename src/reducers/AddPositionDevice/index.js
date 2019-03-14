import { 
    ADD_POSITION_DEVICE
} from './../../actions/DeviceActions'

const addPositionDevice = (state = {}, action) => {
    switch(action.type){
        case ADD_POSITION_DEVICE:
            return { ...state, [action.device] : action.position}
        default:
            return state
    }
}

export default addPositionDevice