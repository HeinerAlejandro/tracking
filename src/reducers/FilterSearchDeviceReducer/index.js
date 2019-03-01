import { 
    SET_FILTER_SEARCH_DEVICE
} from './../../actions/DeviceActions'

//convertir array de dicts a un dicts de dicts
const filterSearchReducer = (state = '', action) => {
    switch(action.type){
        case SET_FILTER_SEARCH_DEVICE:
            return action.payload
        default:
            return state
    }
}

export default filterSearchReducer