import { 
    ADD_DEVICE,
    SET_DEVICES
} from './../../actions/DeviceActions'

//convertir array de dicts a un dicts de dicts
const addDeviceReducer = (state = {}, action) => {
    switch(action.type){
        case ADD_DEVICE:
            //eliminar el atributo code de ...action.payload
            return { ...state, [action.payload.code]:{ ...action.payload}}
       
        default:
            return state
    }
}

export default addDeviceReducer